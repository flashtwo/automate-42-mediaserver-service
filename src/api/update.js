import config from '../config'
import deluge from 'deluge'
const delugeApi = deluge(`http://${config.ip}:${config.portWebui}/json`, 'deluge')

export function getTorrentRecord(args, done) {
    delugeApi.getTorrentRecord((error, reply) => {
        done(error, {'reply': reply.torrents})
    })
}

export function connect(args, done) {
    delugeApi.connect(config.hostId, (error, reply) => {
        done(error, {'reply': reply})
    })
}
