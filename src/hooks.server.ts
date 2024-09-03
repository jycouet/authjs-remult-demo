import { sequence } from "@sveltejs/kit/hooks";

import { handle as handleAuth } from "./auth";

export const handle = sequence(handleAuth);
