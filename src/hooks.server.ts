import { sequence } from "@sveltejs/kit/hooks";

import { handle as handleAuth } from "./auth";
import type { Handle } from "@sveltejs/kit";
import { _api } from "./routes/api/[...remult]/+server";
import { withRemult } from "remult";

export const handleRemult: Handle = async ({ event, resolve }) => {
  return await _api.withRemult(event, async () => {
    return resolve(event);
  });
};

export const handleRemult2: Handle = async ({ event, resolve }) => {
  return await withRemult(async () => {
    return resolve(event);
  });
};

export const handle = sequence(handleRemult2, handleAuth, handleRemult);
