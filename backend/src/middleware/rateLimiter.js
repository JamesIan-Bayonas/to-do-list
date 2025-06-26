// backend/src/middleware/rateLimiter.js

// Removed direct import: `import ratelimit from "../config/upstash.js";`

const rateLimiter = async (req, res, next) => {
  // The `ratelimit` instance is now expected to be attached to `req` by server.js
  const ratelimitInstance = req.ratelimit; // Access the attached instance

  if (!ratelimitInstance) {
    console.error(
      "Rate Limiter Error: ratelimit instance not available in middleware. Check server.js configuration."
    );
    return res.status(500).json({
      message: "Server configuration error: Rate limit service unavailable.",
    });
  }

  try {
    const { success } = await ratelimitInstance.limit("my-limit-key"); // Use the attached instance
    if (!success) {
      return res.status(429).json({
        message: "Too many request, please try again later!",
      }); //:: the number 429 is used to indicate that the user has sent too many requests in a given amount of time
    }
    next();
  } catch (error) {
    console.log("Rate limit error:", error);
    next(error);
  }
};

export default rateLimiter;
