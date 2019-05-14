import { ItemModel } from '../models';
import stateService from './state';
import queueService from './queue';
import { generateUuid } from '../utils';



export class ItemService {
  state_name: string = 'items';
  // object_type: string = 'item';

  // TODO replace any
  add(content: string, args: object):any {
    //
    // Creates a local item object
    //
    let project_id: number = args['project_id'];
    if (!project_id) {
      project_id = stateService.state.user.inbox_project;
    }

    const obj = new ItemModel({
      content,
      project_id,
    });

    obj.temp_id = obj['id'] = generateUuid();
    obj.data = Object.assign(obj.data, args);
    stateService.state[this.state_name].push(obj);

    if ('id' in obj.data) {
      delete obj.data['id'];
    }
    const cmd = {
      type: 'item_add',
      temp_id: obj.temp_id,
      uuid: generateUuid(),
      args: obj.data,
    };
    queueService.push(cmd);

    return obj;
  }
}
