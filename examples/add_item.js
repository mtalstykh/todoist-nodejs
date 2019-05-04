const todoist = require('../build/index');

const api = new todoist(process.env.TOKEN_API);
api.sync()
   .then(() => api.items.add('task1', {priority: 4, due: { string: 'today' }}))
   .then(
      () => api.commit()
    );
