import type { Handle } from "@sveltejs/kit";
import PocketBase from "pocketbase";
import { serializeNonPOJOs } from "$lib/utils";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase("http://localhost:8090");
  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get("cookie") || "",
  );

  if (event.locals.pb.authStore.isValid) {
    event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
  } else {
    event.locals.user = undefined;
  }

  const response = await resolve(event);

  // TODO: remove { secure: false } once pocketbase runs on https
  response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }));

  return response;
};
