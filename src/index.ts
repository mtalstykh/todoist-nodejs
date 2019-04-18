require('dotenv').config();
import * as api from './api'

module.exports = class todoist {
  data: object = null;
  apiKey: string = null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.init();
  }

  init(): void {
    return api.sync().then(res => this.data = res.data)
              .catch(err => console.log(err));
  }
}
