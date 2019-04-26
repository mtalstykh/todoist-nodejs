import axios from 'axios';
// import uuid from 'uuid';

const syncEndpoint = 'https://todoist.com/api/v8/sync';
// const restEndpoint = "https://beta.todoist.com/API/v8";

export class API {
  token: string;

  setToken(token: string) {
    this.token = token;
  }

  // TODO replace any type
  sync(syncToken: string = '*'): any {
    return baseSyncRequest({
      data: {
        syncToken,
      },
    });
  }
}

const baseSyncRequest = axios.create({
  baseURL: syncEndpoint,
  method: 'post',
  data: {
    token: process.env.TOKEN_API,
    resource_types: ['all'],
  },
});

// const baseRestRequest = axios.create({
//   method: 'post',
//   headers: {
//     Authorization: `Bearer ${process.env.TOKEN_API}`,
//     'X-Request-Id': uuid(),
//   }
// });

export default new API();
