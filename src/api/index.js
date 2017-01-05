import config from '../config'
import * as magnetTask from './magnet'
import * as updateTask from './update'

export default function () {
    const seneca = this

    // magnet/torrent tasks
    seneca.add('magnet:add', magnetTask.addMagnet)

    // service tasks
    seneca.add('update:record', updateTask.getTorrentRecord)
    seneca.add('update:connect', updateTask.connect)
}
