import state from './state';
import * as api from './request'

require('dotenv').config();

module.exports = class Todoist {
  apiKey: string = null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.init();
  }

  init(): void {
    return api.sync().then(res => state.update(res.data))
              .catch(err => console.log(err));
  }
}
