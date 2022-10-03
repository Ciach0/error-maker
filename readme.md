# Error Maker

Error Maker is a library for making new error types easily.

## Installation

Use the package manager [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) to install Error Maker.

```bash
npm i error-maker
# OR
yarn add error-maker
```

## Usage
### Using CommonJS
```js
const ErrorFactory = require('error-maker');
const ValidationError = ErrorFactory.create('ValidationError');
// ...
throw new ValidationError('Invalid input');
// Or you can specify an additional cause
throw new ValidationError('Invalid input', 'there it goes!');
```
### Using ES Modules
```js
import ErrorFactory from 'error-maker';
const ValidationError = ErrorFactory.create('ValidationError');
// ...
throw new ValidationError('Invalid input');
// Or you can specify an additional cause
throw new ValidationError('Invalid input', 'there it goes!');
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)
