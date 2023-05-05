/*CMD
  command: /Makeredeemcode00
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📥 SEND THE REDEEM CODE

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var options = { myData: message }
  if (message.length < 6) {
    Bot.sendMessage("*WRONG CODE*")
    return
  } else Bot.run({ command: "SetValueCode", options })
