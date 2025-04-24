export async function sendEmailVerification(receiverEmail:string,otpCode:string){
    const nodeMailer = useNodeMailer()

await nodeMailer.sendMail({ subject: 'Email-verification', text: 'Hello use this code to verify your email address : '+otpCode, to: receiverEmail })
}