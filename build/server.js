'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var seneca = require('seneca')();

seneca.use(_api2.default);
seneca.listen({ type: _config2.default.type, port: _config2.default.port });