/*CMD
  command: pvvv
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Enter the Text of Poll in the "Answer Number" field which you want get votes for.
Example vote: Yes Or No Poll
Type Yes in the Answer to get votes for Yes
  ANSWER
  keyboard: Back ↩️
  aliases: 
CMD*/

User.setProperty("pollans", message,"string")
Bot.runCommand("pvv")
