const todoist = require('../build/index');

const api = new todoist(process.env.TOKEN_API);
api.sync()
   .then(() => api.items.add('task1', {object: 123123123}))
   .then(
      () => console.log(api.queue.length)
    );
