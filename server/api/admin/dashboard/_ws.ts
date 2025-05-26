import { fetchDashBoardData } from "./dashboard-data";
import type{Peer} from 'crossws'

export default defineWebSocketHandler({
  open(peer) {
    console.log("user join the room", peer);
    peer.subscribe('room')
  },

  async message(peer, message) {

    if(message.text().trim()==='success-payment'){
       await  updateDashbaord(peer)
    }
   
  },

  close(peer, event) {
    console.log("[ws] close", peer, event);
  },

  error(peer, error) {
    console.log("[ws] error", peer, error);
  },
});


async function  updateDashbaord(peer:Peer){
     const [paymentsByDate, countPayment, totalEarnAmount,countCustomer] = await fetchDashBoardData()
    peer.publish('room',JSON.stringify({paymentsByDate, countPayment, totalEarnAmount,countCustomer}))
}

