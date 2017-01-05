'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addMagnet = addMagnet;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _deluge = require('deluge');

var _deluge2 = _interopRequireDefault(_deluge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var delugeApi = (0, _deluge2.default)('http://' + _config2.default.ip + ':' + _config2.default.portWebui + '/json', 'deluge');

function addMagnet(args, done) {
    delugeApi.add(args.magnet, args.dlpath, function (error, reply) {
        done(error, { 'reply': reply });
    });
}