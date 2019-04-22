const todoist = require('../build/index');

const api = new todoist(process.env.TOKEN_API);
api.init().then(res => console.log(res['full_name']));
