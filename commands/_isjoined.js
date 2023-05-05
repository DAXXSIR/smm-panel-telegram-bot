/*CMD
  command: /isjoined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}
let info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
Bot.runCommand("/mainf");
}else{
var button=[[{title:"✅ Joined",command:"/joined"}]]
Bot.sendInlineKeyboard(button,"*👨‍💼 Hello* "+info+" Please Join Our Channel To *Access The Bot*:\n\n*Join Here *[Social Hike](https://t.me/socialhikee)",
{ disable_web_page_preview: true }
)
}



