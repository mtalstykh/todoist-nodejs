import { AxiosResponse, AxiosError } from 'axios';
import { State } from '../types/state';
import api  from './api';

export class StateService {
  state: State = null;

  // TODO Replace any
  async update(commands: object[]): Promise<any> {
    return api.sync(commands)
       .then((responce: AxiosResponse) => {
         this.state = responce.data;
         console.log(this.state.user.full_name);
       })
       .catch((err: AxiosError) => console.log(err));
  }
}

export default new StateService();
