import dotenv from 'dotenv';

import config from '12factor-config';

dotenv.config();
export default config({
  apiHost: {
    env: 'REACT_APP_HOST',
    type: 'string',
    required: true,
    default: 'http://10.10.55.162:9000',
  },
});
