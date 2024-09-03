import { remult } from "remult";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.auth();
  if (session) {
    remult.user = {
      id: "1",
      name: session?.user?.name ?? "I DONT KNOW",
    };
  }
  return {
    session,
    user: remult.user,
  };
};
