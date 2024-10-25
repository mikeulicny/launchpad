# A starting launchpad for building svelte apps

This is a barebones sveltekit project with good default auth functions setup. Launchpad uses a
pocketbase instance to manage users

_Based off of Huntabyte's SvelteKit & PocketBase youtube series_

## Selected defaults

- Bun
- SvelteKit 5
- Typescript
- Pocketbase

## Developing

Start a development server for PocketBase and sveltekit

```bash
# In 1st terminal
./pocketbase serve

# In 2nd terminal
bun run dev
```

## Setting up pocketbase

[PocketBase Docs](https://pocketbase.io/docs/)

Two things need to be done on the PocketBase side.
- Creating an admin account
- Setting up a mail server

After starting the pocketbase server, navigate to `http://127.0.0.1:8090/_` and create an admin account.
Then go to `settings` > `Mail Settings` > and click `Use SMTP mail server`

_The PocketBase executable is for linux amd64, other pocketbase executables can be found at [PocketBase Releases](https://github.com/pocketbase/pocketbase/releases/)_

## Setting up an email SMTP server

By default PocketBase uses the internal Unix `sendmail` command for sending emails.
While it's OK for development, it's not very useful for production, because your emails most likely will get marked as spam or even fail to deliver.
Consider using a local SMTP server or an external mail service
