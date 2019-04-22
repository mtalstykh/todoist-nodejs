class state {
  full_sync: boolean;
  sync_token: string;
  user: object;
  projects: Array<object>;
  items: Array<object>;
  // TODO discover labels type
  labels: any;
  filters: Array<object>;
  day_orders: object;
  // TODO discover reminders type
  reminders: any;
  // TODO discover collaborators type
  collaborators: any;
  // TODO discover collaborators type
  collaborators_states: any;
  live_notifications: Array<object>;
  // TODO discover collaborators type
  live_notifications_last_read: any;
  user_settings: object;

  update(newState: object): any {
    Object.keys(newState).forEach(key => {
      this[key] = newState[key];
    });

    return this.user;
  }
}

export default new state();