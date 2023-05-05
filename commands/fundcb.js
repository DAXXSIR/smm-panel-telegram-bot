/*CMD
  command: fundcb
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})


if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

var buttons = [[
    {title: "PAID ✅", command: "cb"}],
[{title: "Back ↩️", command: "Depo Menu"}],
];

Bot.sendInlineKeyboard(buttons,"*CoinBase Details\n\n*⚠️ _NOTE: ALL FUNDS WOULD BE CONVERTED TO USD Current Value_\n\n1. *Send Crypto to Our CoinBase Email :* ``\n\n2. *After Sending Tap On Paid* ✅")
