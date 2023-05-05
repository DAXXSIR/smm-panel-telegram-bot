/*CMD
  command: /sorry
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(10000)
Bot.sendMessage("*🎁 Congrats , You Recieved ₹0.10*")
