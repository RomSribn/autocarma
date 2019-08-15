import dotenv from 'dotenv';

import config from '12factor-config';

dotenv.config();

export default config({
  apiHost: {
    env: 'REACT_APP_HOST',
    type: 'string',
    required: true,
    default: 'http://localhost:3000',
  },
  firebaseApiKey: {
    env: 'REACT_APP_FIREBASE_API_KEY',
    type: 'string',
    required: true,
    default: 'unknow key',
  },
});
