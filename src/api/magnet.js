import config from '../config'
import deluge from 'deluge'
const delugeApi = deluge(`http://${config.ip}:${config.portWebui}/json`, 'deluge')

export function addMagnet(args, done) {
    delugeApi.add(args.magnet, args.dlpath, (error, reply) => {
        done(error, {'reply': reply})
    })
}
