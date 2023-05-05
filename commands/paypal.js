/*CMD
  command: paypal
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

var buttons = [[
    {title: "Back ↩️", command: "Depo Menu"}],
];

Bot.sendInlineKeyboard(buttons,"PAYPAL DETAILS\n\n1. Link to pay:n2. Include your USERNAME (@"+user.username+")  in the comments\n\nℹ Once the payment is sent, share the screenshot as soon as possible on @Rbggamer",{disable_web_page_preview: true})

