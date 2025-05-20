import type { Peer, Message } from 'crossws'
import prisma from '~/utils/script.prisma'
import { USER_ROLE } from '../../auth/modules/user.constant'

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
    //  peer.publish(room, message.text())
    await totalAmount(peer,message)
   
  }
})



async function totalAmount(peer:Peer,message:Message){
  // if(message.text()=="success-payment"){
    const [paymentsByDate, countPayment, totalEarnAmount,countCustomer] = await Promise.all([
        // payments by date
        prisma.payment.groupBy({
            by: ['createdAt'],
            _sum: {
                amount: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        }),
        // count payments
        prisma.payment.count(),
        // totalEarnigns
        prisma.payment.aggregate({
            _sum: {
                amount: true
            }
        }),
        // total customers
        prisma.user.count({
            where: {
                role: USER_ROLE.CUSTOMER
            }
        })
    ])

  peer.publish(room, JSON.stringify({paymentsByDate, countPayment, totalEarnAmount,countCustomer}))
  // }
    
    
}
