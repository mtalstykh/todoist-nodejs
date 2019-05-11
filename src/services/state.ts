import { AxiosResponse } from 'axios';
import { State } from '../types/state';
// import api  from './api';

export class StateService {
  state: State = null;

  // TODO Replace any
  update(responce: AxiosResponse): void {
    //
    // Updates the local state, with the data returned by the server after a sync
    //
    const syncData: State = responce.data;

    if (!this.state) {
      this.state = syncData;
      return;
    }

    if (syncData.day_orders) {
      Object.assign(this.state.day_orders, syncData.day_orders);
    }
    if (syncData.day_orders_timestamp) {
      Object.assign(this.state.day_orders_timestamp, syncData.day_orders_timestamp);
    }
    if (syncData.live_notifications_last_read_id) {
      Object.assign(this.state.live_notifications_last_read_id, syncData.live_notifications_last_read_id);
    }
    if (syncData.locations) {
      Object.assign(this.state.locations, syncData.locations);
    }
    // if (syncData.settings_notifications) {
    //   Object.assign(this.state.settings_notifications, syncData.settings_notifications);
    // }
    if (syncData.user) {
      Object.assign(this.state.user, syncData.user);
    }
    if (syncData.user_settings) {
      Object.assign(this.state.user_settings, syncData.user_settings);
    }

    const datatype = [
      'collaborators',
      'collaborator_states',
      'filters',
      'items',
      'labels',
      'live_notifications',
      'notes',
      'project_notes',
      'projects',
      'reminders',
    ];

    for (let i = 0; i < datatype.length; i++) {
      const key = datatype[i];
      const remoteData = syncData[key];

      if (remoteData.length === 0) {
        continue;
      }

      for (let i = 0; i < remoteData.length; i++) {
        const remoteObj = remoteData[i];
        const localObj = this.state[key].find((el) => {
          return el.id === remoteObj.id;
        })

        if (localObj) {
          if (remoteObj.is_deleted === 0) {
            // newobj = model(remoteobj, self)
            // this.state[key].push();
          }
        } else {
          if (remoteObj.is_deleted === 0) {
            // localobj.data.update(remoteobj)
          } else {
            // self.state[datatype].remove(localobj)
          }
        }

      }
    }

  }
}

export default new StateService();
