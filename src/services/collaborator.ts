import queueService from './queue';
import { generateUuid } from '../utils';

export class CollaboratorService {
  state_name = 'collaborators'
  // object_type = None

  delete(projectId: number, email: string): void {
    //
    // Deletes a collaborator from a shared project
    //
    const cmd = {
      type: 'delete_collaborator',
      uuid: generateUuid(),
      args: {
          project_id: projectId,
          email,
      },
    }

    queueService.push(cmd);
  }
}