const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => {
    var prefix = "$"
    if (message.content === prefix + 'create') {
        if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
         message.guild.createChannel('✵-「news', 'text')
         message.guild.createChannel('✵-「chat', 'text')
         message.guild.createChannel('✵-「commands', 'text')
         message.guild.createChannel('✵-「pic', 'text')
         message.guild.createChannel('✵-「gaming', 'text')
         message.guild.createChannel('✵-「vote', 'text')
         message.guild.createChannel('✵-「giveaway', 'text')
         message.guild.createChannel('✵-「Quran_1', 'voice')
         message.guild.createChannel('✵-「Quran_2', 'voice')
         message.guild.createChannel('✵-「Quran_3', 'voice')
         message.guild.createChannel('✵-「Music_1', 'voice')
         message.guild.createChannel('✵-「Music_2', 'voice')
         message.guild.createChannel('✵-「Music_3', 'voice')
         message.guild.createChannel('✵-「Minecraft', 'voice')
         message.guild.createChannel('✵-「Fortnite', 'voice')
         message.guild.createChannel('✵-「Blackops', 'voice')
         message.guild.createChannel('✵-「Race', 'voice')
         message.guild.createChannel('✵-「Life For Speed', 'voice')
         message.guild.createChannel('✵-「MTA', 'voice')
         message.guild.createChannel('✵-「GTA V', 'voice')
    message.channel.sendMessage('**تم انشاء الرومات ي شيخ معروف و ي شيخ طياره**')
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
