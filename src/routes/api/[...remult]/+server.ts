import { remultSveltekit } from "remult/remult-sveltekit";
import { Account, Session, User, VerificationToken } from "../../../entities";

export const _api = remultSveltekit({
  // getUser({ locals }) {
  //   if (locals && locals.auth) {
  //     console.log(`request.locals.user`, locals.auth());
  //   }
  //   return undefined;
  // },
  entities: [User, Account, Session, VerificationToken],
});

export const { GET, POST, PUT, DELETE } = _api;
