const zeromq = require('zeromq')

const keypair = zeromq.curveKeypair()

console.log('Generating new ZeroMQ public/secret key pair')

console.log(keypair)
