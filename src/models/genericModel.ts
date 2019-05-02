export default class Model {
  //
  // Implements a generic object
  //
  temp_id: string;
  data: object;

  constructor(data: object) {
    this.temp_id = '';
    this.data = data;
  }

  setItem(key: string, value: any): void {
    this.data[key] = value;
  }

  getItem(key: string) {
    return this.data[key];
  }
}
