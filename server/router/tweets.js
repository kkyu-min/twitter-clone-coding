import express from "express";
import "express-async-errors";
import * as tweetContrller from "../controller/tweet.js";
const router = express.Router();

//  GET /tweets
//  GET /tweets?username=:username
router.get("/", tweetContrller.getTweets);

//  GET /tweets/:id
router.get("/:id", tweetContrller.getTweet);

//  POST /tweets
router.post("/", tweetContrller.createTweet);

// PUT /tweets/:id
router.put("/:id", tweetContrller.updateTweet);

// DELETE /tweets/:id
router.delete("/:id", tweetContrller.deleteTweet);
export default router;
