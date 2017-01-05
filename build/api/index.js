'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var seneca = this;

    // magnet/torrent tasks
    seneca.add('magnet:add', magnetTask.addMagnet);

    // service tasks
    seneca.add('update:record', updateTask.getTorrentRecord);
    seneca.add('update:connect', updateTask.connect);
};

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _magnet = require('./magnet');

var magnetTask = _interopRequireWildcard(_magnet);

var _update = require('./update');

var updateTask = _interopRequireWildcard(_update);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }