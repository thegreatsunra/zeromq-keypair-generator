const zeromq = require('zeromq')

const keypair = zeromq.curveKeypair()

console.log('Generated a new ZeroMQ public/secret key pair:\n')

console.log(`PUBLIC KEY\n${keypair.public}\n`)
console.log(`SECRET/PRIVATE KEY\n${keypair.secret}`)

console.log('')
