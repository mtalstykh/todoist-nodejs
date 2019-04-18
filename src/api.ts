import axios from 'axios';

const apiEndpoint = "https://todoist.com/api/v7/sync";

const baseRequest = axios.create({
  baseURL: apiEndpoint,
  method: 'post',
  data: {
    token: process.env.TOKEN_API,
    // sync_token: "*",
    resource_types: ["all"],
  },
});

export const sync = (sync_token: string = "*"):any => {
  return baseRequest({
    data: {
      sync_token,
    }
  })
}
