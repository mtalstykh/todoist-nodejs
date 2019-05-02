import api from './services/api';
import stateService from './services/state';
import queueService from './services/queue';
import {
  UserService,
} from './services';

require('dotenv').config();

module.exports = class Todoist {

  // services
  userService = new UserService();

  constructor(token: string) {
    api.setToken(token);
  }

  sync(): void {
    //
    // Sends to the server the changes that were made locally, and also
    // fetches the latest updated data from the server
    //
    stateService.update();
  }

  commit(): void {
    //
    // Commits all requests that are queued.  Note that, without calling this
    // method none of the changes that are made to the objects are actually
    // synchronized to the server, unless one of the aforementioned Sync API
    // calls are called directly
    //
    if (queueService.length === 0) {
      return;
    }

    console.log('Piu piu');
  }

};
