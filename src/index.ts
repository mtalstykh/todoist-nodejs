import api from './services/request';
import {
  UserService,
  StateService,
} from './services';

require('dotenv').config();

module.exports = class Todoist {
  queue: object[] = [];

  // services
  userManager = new UserService();
  stateService = new StateService();

  constructor(token: string) {
    api.setToken(token);
    this.sync();
  }

  sync(): void {
    //
    // Sends to the server the changes that were made locally, and also
    // fetches the latest updated data from the server
    //
    this.stateService.update();
    // return api.sync().then(res => state.update(res.data))
    //           .catch(err => console.log(err));
  }

  commit(): void {
    //
    // Commits all requests that are queued.  Note that, without calling this
    // method none of the changes that are made to the objects are actually
    // synchronized to the server, unless one of the aforementioned Sync API
    // calls are called directly
    //
    if (this.queue.length === 0) {
      return;
    }

    console.log('Piu piu');
  }

};
