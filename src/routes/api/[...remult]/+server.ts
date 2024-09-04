import { remultSveltekit } from "remult/remult-sveltekit";
import { Account, Session, User, VerificationToken } from "../../../entities";
import { Auth } from "@auth/core";
import { options } from "../../../auth";

export const _api = remultSveltekit({
  async getUser(event) {
    console.log(`getUser`, event.locals, event.cookies.getAll());
    // if (locals && locals.auth) {
    //   console.log(`request.locals.user`, locals.auth());
    // }
    return undefined;
  },
  async initRequest(event) {
    // const ttt = await Auth(event.request, options);
    // console.log(`ttt`, ttt);
    console.log("initRequest", event.locals, event.cookies.getAll());
  },
  entities: [User, Account, Session, VerificationToken],
});

export const { GET, POST, PUT, DELETE } = _api;
