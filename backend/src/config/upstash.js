// backend/src/config/upstash.js

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// :: Export a function that initializes and returns the ratelimit instance ::
// :: This function will be called AFTER dotenv.config() in server.js ::
export function initializeRatelimit() {
  // <--- THIS IS THE NAMED EXPORT YOUR server.js NEEDS
  const UPSTASH_REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

  console.log(
    "DEBUG [upstash.js - initializeRatelimit]: UPSTASH_REDIS_REST_URL =",
    UPSTASH_REDIS_URL
  );
  console.log(
    "DEBUG [upstash.js - initializeRatelimit]: UPSTASH_REDIS_REST_TOKEN =",
    UPSTASH_REDIS_TOKEN
  );

  if (!UPSTASH_REDIS_URL || !UPSTASH_REDIS_TOKEN) {
    console.error(
      "DEBUG [upstash.js - initializeRatelimit]: Upstash Redis URL or Token is missing/undefined from process.env!"
    );
    throw new Error(
      "Upstash Redis credentials are not properly set in environment variables."
    );
  }

  const redisClient = new Redis({
    url: UPSTASH_REDIS_URL,
    token: UPSTASH_REDIS_TOKEN,
  });

  const ratelimit = new Ratelimit({
    redis: redisClient,
    limiter: Ratelimit.slidingWindow(5, "10 s"),
  });

  return ratelimit;
}

// Removed direct export of ratelimit.
// export default ratelimit; // This line is removed.

// res.status(500).json({ message: "It seem's that the user cannot be found!" });
// making a comment
