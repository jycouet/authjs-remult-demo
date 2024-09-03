import {
  AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET,
  AUTH_SECRET,
} from "$env/static/private";
import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { RemultAdapter } from "./RemultAdapter";
// import { _api } from "./routes/api/[...remult]/+server";

import type { Handle } from "@sveltejs/kit";

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  return {
    adapter: RemultAdapter(),
    providers: [
      GitHub({
        clientId: AUTH_GITHUB_ID,
        clientSecret: AUTH_GITHUB_SECRET,
      }),
    ],
    secret: AUTH_SECRET,
    trustHost: true,
  };
});
