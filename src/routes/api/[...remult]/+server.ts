import { remultSveltekit } from "remult/remult-sveltekit";
import { Account, Session, User, VerificationToken } from "../../../entities";
import { Auth } from "@auth/core";
import { options } from "../../../auth";
import { remult } from "remult";

export const _api = remultSveltekit({
  async getUser(event) {
    // console.log(`getUser`, event.locals);
    return undefined;
  },
  async initRequest(event) {
    const session = await event.locals.auth();
    if (session) {
      remult.user = session.user;
    }
  },
  entities: [User, Account, Session, VerificationToken],
});

export const { GET, POST, PUT, DELETE } = _api;
