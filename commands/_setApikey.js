/*CMD
  command: /setApikey
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

if (!params) {
  Bot.sendMessage("Api Key Should Be Put In The Params")
  return
}
if (user.telegramid != 2016839211) {
  Bot.sendMessage("Not Admin!")
  return
}
if (params.length != 32) {
  Bot.sendMessage(
    "The Api Key Should Be From Telesubs.com\nContact @yung92 for help!"
  )
  return
}
if (params.length == 32) {
  Bot.sendMessage("*ApiKey Setupped To :* `" + params + "`")
  Bot.setProperty("apikey", params)
  return
}

