const zeromq = require('zeromq')

const keypair = zeromq.curveKeypair()

console.log('Generating a new ZeroMQ public/secret key pair:\n')

console.log(keypair)

console.log('')
