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
import type { Session, User } from "./entities";
import type { UserInfo } from "remult";

const { adapter } = RemultAdapter();

export const options = {
  adapter,
  providers: [
    GitHub({
      clientId: AUTH_GITHUB_ID,
      clientSecret: AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }: { session: Session; user: User }) {
      const userFrontEnd: UserInfo = {
        id: user.id,
        name: user.name ?? undefined,
        email: user.email,
        image: user.image,
      };
      return {
        expires: session.expires,
        user: userFrontEnd,
      };
    },
  },
  secret: AUTH_SECRET,
  trustHost: true,
};
export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  return options;
});
