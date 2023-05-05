/*CMD
  command: btcc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}


Api.sendPhoto({
  photo: "https://ibb.co/4pxQgpz", // it is picture!
  caption: "⚠️ _If you send less than 0.000002 BTC, your deposit would be ignored!_\n\n*All deposits will be converted to USD Current Value*\n\n✅* Send the amount you want to deposit to the following address:*\n\n`bc1q3dfdkqxxmxw2l528728gcxjt5vahpttta8nwwm`",
parse_mode : "Markdown" ,


  reply_markup: { inline_keyboard: [
    [
      { text: "PAID ✅", callback_data: "Pay" },{text: "BACK ↩️", callback_data: "/deposit" }
    ]]}
});

