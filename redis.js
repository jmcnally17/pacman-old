const redis = require("redis");

let client;
if (process.env.REDIS_HOST) {
  client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  });
} else {
  client = redis.createClient();
}
client.connect();

process.on("exit", () => {
  client.quit();
});

module.exports = client;
