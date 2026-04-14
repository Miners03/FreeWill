import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";  

import dotenv from "dotenv";
dotenv.config();
 
// Create a new ratelimiter, that allows 100 requests per 60seconds
//yha p hmne limit set krdi aur baki cheeze import krdi .
const ratelimit =new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10,"20 s"),
    
    });

export default ratelimit;
//ratelmiter created 