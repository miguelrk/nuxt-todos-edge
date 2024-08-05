# Nuxt Todo List on the Edge

A minimal repo to reproduce an issue of Nitro running out of memory when importing data for seeding. Refer to [this discord thread](https://discord.com/channels/473401852243869706/1269627096188325958) for more information.

## Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev`
4. Run `npm run db:generate`
5. Visit `http://localhost:3000`, open Nuxt DevTools and run `Server Tasks > db:seed` task.

Step 5 above will throw an error in the terminal since Nitro cannot find the module imported dynamically in `server/tasks/db/seed.ts`, when running at `.nuxt/dev/`.
