const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
if(message.author.bot) return;
      if (message.content === "$ping") {
      message.react("📶") 
      const embed = new Discord.RichEmbed()
  .setColor("#00ff47")
  .addField('**سرعة استجابة البوت:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    var prefix = "$"
    if (message.content === prefix + 'create') {
        if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
         message.guild.createChannel('الــــمـــعـــلـــومــأت', 'text')
         message.guild.createChannel('الـــــتـــرحــــيــــب', 'text')
         message.guild.createChannel('الــــقــوانــــيـــن', 'text')
         message.guild.createChannel('شـــات-الــــســوالـــف', 'text')
         message.guild.createChannel('شــــــات-الاوامـــر', 'text')
         message.guild.createChannel('شــــات-الــــصــور', 'text')
         message.guild.createChannel('شـــــات-الــــبــوح', 'text')
         message.guild.createChannel('الاخـــــــبـــــــارy', 'text')
         message.guild.createChannel('تــــحــديــثــات-الـــســـيــرفــر', 'text')
         message.guild.createChannel('الــتـــصــويــتــات', 'text')
         message.guild.createChannel('الاقـــتــراحـــات', 'text')
         message.guild.createChannel('الـــمــكــافــئــات', 'text')
         message.guild.createChannel('الــــوظــائــف', 'text')
         message.guild.createChannel('الـاعــلانــات', 'text')
         message.guild.createChannel('روم-الـاشـــكـــــــأوي', 'text')
         message.guild.createChannel('روم-الـاســـــئـــلـــــة', 'text')
         message.guild.createChannel('الـــقــيـــف-اوي', 'text')
         message.guild.createChannel('الــــســـوالــف', 'voice')
         message.guild.createChannel('شــــات-الــــفـــعـــالـــيــــات', 'voice')
         message.guild.createChannel('رومــ الـــفـــعـــالـــيـــات', 'voice')
         message.guild.createChannel('قراند', 'voice')
         message.guild.createChannel('قراند', 'voice')
         message.guild.createChannel('قراند', 'voice')
         message.guild.createChannel('فـــورت-نــأيــت', 'voice')
         message.guild.createChannel('فـــورت-نــأيــت', 'voice')
         message.guild.createChannel('فـــورت-نــأيــت', 'voice')
         message.guild.createChannel('مـــايــن-كــرافـــت', 'voice')
         message.guild.createChannel('مـــايــن-كــرافـــت', 'voice')
         message.guild.createChannel('مـــايــن-كــرافـــت', 'voice')
         message.guild.createChannel('AFK', 'voice')
    message.channel.sendMessage('**Done | تم**')
    }
    });

client.on('message', message => {
	var prefix = "$"
if(message.author.bot) return;
    if(message.content === prefix + 'role') {
                         if(!message.channel.guild) return message.channel.send('**._.**'); 
         if(!message.member.hasPermission('MANAGE_ROLES')) return    message.channel.send('**ماعند البرمشن المطلوب**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "✵- Owner",
                    color: "#000000",
                    permissions: []
     })
           message.guild.createRole({
                  name: "✵- Co_Owner",
                    color: "#000000",
                    permissions: []
     })
                message.guild.createRole({
                  name: "✵- Admin",
                    color: "#000000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "✵- MOD",
                    color: "#000000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "✵- Founder",
                    color: "#000000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "✵- Helper",
                    color: "#000000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "✵- VIP+",
                    color: "#000000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "✵- VIP",
                    color: "#000000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "✵- Event",
                    color: "#000000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "✵- Member",
                    color: "#000000",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "✵- Bots",
                    color: "#000000",
                    permissions: []
     })


          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#28ff00').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('**تـمــت المـهـمـة**')});
    }
	});

client.login(process.env.BOT_TOKEN);
