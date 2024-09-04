import {
  AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET,
  AUTH_SECRET,
} from "$env/static/private";
import {
  SvelteKitAuth,
  type DefaultSession,
  type SvelteKitAuthConfig,
} from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { RemultAdapter } from "./RemultAdapter";
// import { _api } from "./routes/api/[...remult]/+server";

import type { Handle } from "@sveltejs/kit";
import { Session, User } from "./entities";
import { Entity, Fields, type UserInfo } from "remult";

// @Entity("users", {
//   dbName: "MyName",
//   saving(entity, event) {
//     // console.log("ddfdfd" + remult.user?.id)
//   },
// })
// export class AppUser extends User {
//   @Fields.boolean()
//   isDisable = true;

//   @Fields.string({
//     dbName: "toto",
//   })
//   declare name?: string | null | undefined;
// }

const { adapter } = RemultAdapter({
  customEntities: {
    // User: AppUser,
  },
});

export const options: SvelteKitAuthConfig = {
  adapter,
  providers: [
    GitHub({
      clientId: AUTH_GITHUB_ID,
      clientSecret: AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    // signIn(params) {
    //   params.
    // },
    async session({ session, user }) {
      console.log(`session, user`, session, user);

      const userFrontEnd: UserInfo = {
        id: user.id,
        name: user.name ?? undefined,
        email: user.email,
        image: user.image,
      };
      return {
        // ...session,
        expires: session.expires,
        user: userFrontEnd,
      };
    },
  },
  secret: AUTH_SECRET,
  trustHost: true,
};
export const { handle, signIn, signOut } = SvelteKitAuth(async () => {
  return options;
});
