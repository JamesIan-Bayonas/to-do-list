import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

//import dotenv from "dotenv";

//dotenv.config();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 s"),
});

export default ratelimit;
// res.status(500).json({ message: "It seem's that the user cannot be found!" });
//making a comment
