 for chat bot

## What it is?
This repository can be imported to [Bots.Business](https://bots.business) as a worked chat bot.

[Bots.Business](https://bots.business) - it is probably the first CBPaaS - Chat Bot Platform as a Service.

A CBPaaS is a cloud-based platform that enables developers to create chatbots without needing to build backend infrastructure.

## Create your own bot for Telegram from this Git repo

How to create bot?
1. Create bot with [@BotFather](https://telegram.me/BotFather) and take Secret Token
2. Create bot in App and add Secret Token
3. Add Public Key from App as [Deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) with read access (and write access for bot exporting if you need it)
4. Do import for this git repo

Now you can talk with yours new Telegram Bot

See [more](https://help.bots.business/getting-started)

## Commands - in commands folder
File name - it is command name (Bot it can be rewritten in command description)

Command can have: `name`, `help`, `aliases` (second names), `answer`, `keyboard`, `scnarios` (for simple logic) and other options.

### Command description
It is file header:

    /*CMD
      command: /test
      help: this is help for ccommand
      need_reply: [ true or false here ]
      auto_retry_time: [ time in sec ]
      answer: it is example answer for /test command
      keyboard: button1, button2
      aliases: /test2, /test3
    CMD*/

See [more](https://help.bots.business/commands)

### Command body
It is command code in JavaScript.
Use Bot Java Script for logic in command.

For example:
> Bot.sendMessage(2+2);

See [more](https://help.bots.business/scenarios-and-bjs)




View a demo in telegram [Demo](https://t.me/kxkdkdkdbot)

## What it is?
[Bots.Business](https://bots.business) - it is probably the first CBPaaS - Chat Bot Platform as a Service.

A CBPaaS is a cloud-based platform that enables developers to create chatbots without needing to build backend infrastructure.

# Smm-Panel-Telegram-Bot
Create Your Own Social Media Marketing Bot Via Bjs Use Bots.business To Create Bots

<b>What Does the Bot Do</b>
<li>You can Create Your Own Social Media Hiking Bot Or Social Media Marketing Bot</li>

<b>Features Of Smm Panel Bot</b>
<li>🔎 Track Orders</li>
<li>👤 Account</li>
<li>🎫 Ticket</li>
<li>➕ Add Funds</li>
<li>💹 Stats</li>
<li>📢 Referrel</li>
<li>🍁 Redeem Code</li>

<b>How to Install This Bot to Bots.Business</b>
<li>First, You have to Copy this URL <a href="https://github.com/FlashComTeam/smm-panel-telegram-bot.git">Hold this Text and Click Copy Link Address</a></li>
<li>Once You Copied Open Bots.Business</li>
<li>Once You Opened Create a New Bot</li>
<li>Once You Clicked, Click On Dashbaord On Below</li>
<li>Once You Clicked, Click Tools</li>
<li>Once You Clicked, Then Scroll Down</li>
<li>Then Paste the Code on Git Repository field</li>
<li>Then Click <b>Import Button</b></li>
<br>

<b>Following Libs Must be Installed on Your Bots.Business Bot</b>
<li> Webhooks</li>
<li> CoinPayments</li>
<li> ResourcesLib</li>
<li> DateTimeFormat</li>
<li>commonLib</li>
<li>Random</li>
<b>
<p>Make Sure that If the Following Libs we Mentioned installed for your bot then only your bot will work</p>
<br>
<b>Uploaded By FlashCom Team. </b>

<a href="https://t.me/flashcomtemplates">Join FlashCom Channel For More Information</a>


## Libraries - in libs folder
You can store common code in the libs folder. File name - it is library name.

For example code in myLib.js:

    function hello(){ Bot.sendMessage("Hello from lib!") }
    function goodbye(name){ Bot.sendMessage("Goodbye, " + name) }

    publish({
      sayHello: hello,
      sayGoodbyeTo: goodbye
    })

then you can run in any bot's command:

    Libs.myLib.hello()
    Libs.myLib.sayGoodbyeTo("Alice")

See [more](https://help.bots.business/git/library)

## Other bots example
See other bots examples in the [github](https://github.com/bots-business?utf8=✓&tab=repositories&q=&type=public&language=javascript) or in the [Bot Store](https://bots.business/)


## Other help
[Help.bots.business](https://help.bots.business)

## API
See [API](https://api.bots.business/docs#/docs/summary)


![](https://bots.business/images/web-logo.png)
