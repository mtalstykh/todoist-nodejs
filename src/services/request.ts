import axios from 'axios';
// import { uenerateUuid } from '../utils';

const syncEndpoint = 'https://todoist.com/api/v8/sync';
// const restEndpoint = "https://beta.todoist.com/API/v8";

export class API {
  token: string;

  setToken(token: string) {
    this.token = token;
  }

  // TODO replace any type
  sync(syncToken: string = '*'): any {
    return this.baseSyncRequest({
      data: {
        syncToken,
        token: this.token,
      },
    });
  }

  baseSyncRequest = axios.create({
    baseURL: syncEndpoint,
    method: 'post',
    data: {
      resource_types: ['all'],
    },
  });
}

// const baseRestRequest = axios.create({
//   method: 'post',
//   headers: {
//     Authorization: `Bearer ${process.env.TOKEN_API}`,
//     'X-Request-Id': uenerateUuid(),
//   }
// });

export default new API();
