const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session2');
// const db = require('./lib/database');
const RedisSession = require('./lib/redisSession');

const app = new Koa();

app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'ninja:game',
  maxAge: 86400000,

  secret: 'aga',
  store: new RedisSession(),
  cookie: {
    path: '/',
    httpOnly: true,
  },
};

app.use(
  cors({
    credentials: true,
    origin: '*',
  }),
);

app.use(session(CONFIG, app));

app.use(bodyParser());
// db.sync({ forse: false });
// app.context.sequelize = db;

// app.use(authRoutes);
// app.use(playRoutes);

module.exports = app;
