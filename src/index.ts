import api from './services/api';
import stateService from './services/state';
import queueService from './services/queue';
import {
  UserService,
  ItemService,
  CollaboratorService,
} from './services';

require('dotenv').config();

module.exports = class Todoist {

  // services
  public user = new UserService();
  public items = new ItemService();
  public collaborators = new CollaboratorService();
  public queue = queueService.queue;
  public state = stateService.state;

  constructor(token: string) {
    api.setToken(token);
  }

  async sync(commands: object[] = null): Promise<any> {
    //
    // Sends to the server the changes that were made locally, and also
    // fetches the latest updated data from the server
    //
    const responce = await api.sync(commands);
    if ('temp_id_mapping' in responce) {
      // TODO
    }

    console.log(responce.data.user.full_name);
    stateService.update(responce);

    // TODO

    return responce;
  }

  async commit(): Promise<any> {
    //
    // Commits all requests that are queued.  Note that, without calling this
    // method none of the changes that are made to the objects are actually
    // synchronized to the server, unless one of the aforementioned Sync API
    // calls are called directly
    //
    if (this.queue.length === 0) {
      return;
    }

    await this.sync(this.queue);
    console.log('Commited');
  }
};
