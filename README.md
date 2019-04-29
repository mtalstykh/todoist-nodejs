# todoist-nodejs

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mtalstykh/todoist-nodejs/blob/master/LICENSE)
[![Todoist API](https://img.shields.io/badge/todoist%20API-v8-orange.svg)](https://developer.todoist.com/rest/v8/)
[![npm version](https://badge.fury.io/js/todoist-nodejs.svg)](https://badge.fury.io/js/todoist-nodejs)

The unofficial Todoist Node.js API library. Use todoist [SYNC](https://developer.todoist.com/sync/v8/) and [REST](https://developer.todoist.com/rest/v8/) APIs.

## Installation
```
npm install node-todoist
```

or

```
yarn add node-todoist
```

## Usage
To get started create new instance of todoist, pass it your API token and make sync to login.
```
const todoist = require('todoist-nodejs');

const api = new todoist(<TOKEN_API>);
api.sync();
```

## Development
Clone repo and install dependencies. Create '.env' (.env.example is on the root of the repo). So now you can use examples to test your changes.

## Contributing
Feel free to improve the code and implement new features.
