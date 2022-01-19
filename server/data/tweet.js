let tweets = [
  {
    id: "1",
    text: "ㄴㅏ 화이팅!",
    createdAt: Date.now().toString(),
    name: "Kyumin",
    username: "kyumin",
    url: "https://drive.google.com/uc?id=1T_T-4E2vx3U0_pzTs4UoNz7ViCrI4cyp",
  },
  {
    id: "2",
    text: "화이팅!",
    createdAt: Date.now().toString(),
    name: "Winter",
    username: "winter",
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function udpate(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
