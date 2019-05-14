import axios, { AxiosPromise } from 'axios';
import stateService from './state';
import { State } from 'src/types/state';

const syncEndpoint = 'https://todoist.com/api/v8/sync';

export class ApiService {
  token: string;

  setToken(token: string): void {
    this.token = token;
  }

  // TODO replace any type
  sync(commands: object[]): AxiosPromise {
    const state: State = stateService.state;

    return this.baseSyncRequest({
      data: {
        commands,
        token: this.token,
        sync_token: state ? state.sync_token : '*',
        day_orders_timestamp: state ? state.day_orders_timestamp : '',
        include_notification_settings: 1,
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

export default new ApiService();
