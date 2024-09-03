import { sequence } from "@sveltejs/kit/hooks";

import { handle as handleAuth } from "./auth";
import type { Handle } from "@sveltejs/kit";
import { _api } from "./routes/api/[...remult]/+server";

export const handleRemult: Handle = async ({ event, resolve }) => {
  // if (event.url.pathname.startsWith("/custom")) {
  //   return new Response("custom response");
  // }
  return await _api.withRemult(event, async () => {
    return resolve(event);
  });
};

export const handle = sequence(handleRemult, handleAuth);
