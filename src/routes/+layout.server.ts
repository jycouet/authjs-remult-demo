import { remult } from "remult";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  console.log(`load`);

  const session = await event.locals.auth();

  return {
    session,
    user: session?.user,
  };
};
