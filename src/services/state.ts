import { AxiosResponse } from 'axios';
import { State } from '../types/state';
// import api  from './api';

export class StateService {
  state: State = null;

  // TODO Replace any
  update(rawData: AxiosResponse) {
    this.state = rawData.data;
  }
}

export default new StateService();
