// See https://svelte.dev/docs/kit/types#app
// for information about these interfaces
import PocketBase from "pocketbase";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
		  user: any,
			pb: PocketBase
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
