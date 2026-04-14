import ratelimit from "../src/config/upstash.js";
const rateLimiter = async (req, res, next) => {
  //per user different different .
  try {
    const { success } = await ratelimit.limit(req.ip);
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    }
    next();
  } catch (error) {
    console.log("rate limit errr", error);
    next(error);
  }
};
export default rateLimiter;
//yha p hmneimport kiya aur conditions ko use kiya and success and failure ko definr kiya kaise kya krna hai
