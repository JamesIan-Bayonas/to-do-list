import ratelimit from "../config/upstash.js";

const rateLimiter = async (_, res, next) => {
  // this is a middleware functions that will limit the number of requests from the same IP address or the user
  try {
    const { success } = await ratelimit.limit("my-limit-key"); // this will limit the number of requests from the same IP addres

    if (!success) {
      return res.status(429).json({
        message: "Too many request, please try again later!",
      }); //the number 429 is used to indicate that the user has sent too many requests in a given amount of time
    }
    next();
  } catch (error) {
    console.log("Rate limit error:", error);
    next(error);
  }
};

export default rateLimiter;
