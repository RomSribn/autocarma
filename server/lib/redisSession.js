const Redis = require('ioredis');
const { Store } = require('koa-session2');

class RedisStore extends Store {
  constructor() {
    super();
    this.redis = new Redis({});
  }

  // eslint-disable-next-line no-unused-vars
  async get(sid) {
    const data = await this.redis.get(`SESSION:${sid}`);
    return JSON.parse(data);
  }

  // eslint-disable-next-line no-unused-vars
  async set(session, { sid = this.getID(24), maxAge = 1000000 } = {}, ctx) {
    try {
      await this.redis.set(
        `SESSION:${sid}`,
        JSON.stringify(session),
        'EX',
        maxAge / 10,
      );
    } catch (err) {
      console.log(err);
    }
    return sid;
  }

  // eslint-disable-next-line no-unused-vars
  async destroy(sid) {
    // eslint-disable-next-line no-return-await
    return await this.redis.del(`SESSION:${sid}`);
  }
}

module.exports = RedisStore;
