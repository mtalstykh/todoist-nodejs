const todoist = require('../build/index');

const api = new todoist(process.env.TOKEN_API);
api.sync();
