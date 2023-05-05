/*CMD
  command: Completed1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/



var order = options.order
var subs = options.subs
var answer = options.answer
var id = options.id

Bot.sendMessage("*Checking Info...*")
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key="+Bot.getProperty("api")+"&action=status&order=" +
    id +
    "",
  success: "/info",
options: { order: order , answer: answer, subs: subs,id:id}
});



