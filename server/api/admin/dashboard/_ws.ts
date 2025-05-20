import type { Peer, Message } from 'crossws'
import prisma from '~/utils/script.prisma'

const room = 'ROOM'
export default defineWebSocketHandler({
  open(peer) {
    console.log('opened WS', peer)
    peer.subscribe(room)
  },
  close(peer) {
    console.log('closed WS', peer)
  },
  error(peer, error) {
    console.log('error on WS', peer, error)
  },
  async message(peer, message) {
    // console.log('message on WS', peer, message)
    // onCalc(peer, message)
    await totalAmount(peer,message)
    // peer.publish(room, message.text())
  }
})



async function totalAmount(peer:Peer,message:Message){
    const totalAmount=await prisma.payment.aggregate({
            _sum: {
                amount: true
            }
        })

  peer.publish(room, JSON.stringify(totalAmount))
    
}
