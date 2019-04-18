require('dotenv').config();
import * as api from './api'

module.exports = class todoist {
  state: object = null;
  apiKey: string = null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.init();
  }

  init(): void {
    return api.sync().then(res => this.state = res.data)
              .catch(err => console.log(err));
  }
}
