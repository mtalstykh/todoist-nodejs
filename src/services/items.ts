import stateService from './state';
import queueService from './queue';
import { generateUuid } from '../utils';
import { ItemModel } from '../models';

export class ItemsService {
  state_name: string = 'items';
  object_type: string = 'item';

  // TODO replace any
  add(content: any, ...args: any) {
    //
    // Creates a local item object
    //
    const project_id: number = args['project_id'];
    if (!project_id) {
      stateService.state['user']['inbox_project'];
    }

    const obj = new ItemModel({
      content,
      project_id,
    });

    obj.temp_id = obj['id'] = generateUuid();
    obj.data = Object.assign(obj.data, args);
    stateService.state[this.state_name].push(obj);

    const cmd = {
      type: 'item_add',
      temp_id: obj.temp_id,
      uuid: generateUuid(),
      args: 2,
    };
    queueService.push(cmd);

    return obj;
  }
}
