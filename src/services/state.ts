import { State } from '../types/state';
import api  from './request';
import { AxiosResponse, AxiosError } from 'axios';

export class StateService {
  state: State = null;

  // TODO Replace any
  update(): any {
    api.sync()
       .then((responce: AxiosResponse) => {
         this.state = responce.data;
         console.log(this.state.user.full_name);
       })
       .catch((err: AxiosError) => console.log(err));
  }
}
