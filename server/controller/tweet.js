import * as tweetRespository from "../data/tweet.js";

export async function getTweets(req, res, next) {
  const username = req.query.username;
  const data = await (username
    ? tweetRespository.getAllByUsername(username)
    : tweetRespository.getAll());
  res.status(200).json(data);
}

export async function getTweet(req, res, next) {
  const id = req.params.id;
  const tweet = await tweetRespository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function createTweet(req, res, next) {
  const { text, name, username } = req.body;
  const tweet = await tweetRespository.create(text, name, username);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await tweetRespository.udpate(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function deleteTweet(req, res, next) {
  const id = req.params.id;
  await tweetRespository.remove(id);
  res.sendStatus(204);
}
