/*CMD
  command: /depot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var wallet = User.getProperty("Twallet")
if (!wallet) {
  Libs.CoinPayments.createPermanentWallet({
    currency: "TRX",
    label: "myLabel",
    onSuccess: "/onWalletCreate",

    // onIPN - not necessary
    //onIPN: "/onPermanentWalletIPN",

    onIncome: "/onIncome"

    // if you want customize error messages
    //onError: "/onError"
  })
} else
var key =[[{text:"↩️Back",callback_data:"/deposit"}]]
var id = request.message.message_id
 Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"⚠️ _If you send less than 1 TRX, your deposit will be ignored!_\n\n_All deposits will be converted to USD Current Value_\n\n✅ *Send the amount you want to deposit to the following address:*\n\n`"+wallet+"`",reply_markup:{inline_keyboard:key}
})
