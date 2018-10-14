const Discord = require('discord.js');







const client = new Discord.Client();





const prefix = '!';



 







client.on('ready', () => {

    client.user.setStatus('available')

    client.user.setPresence({

        game: {

            name: 'Creativerse',

            type: "PLAYING",

        }

    });

});    







 





client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});









client.on('ready', () => {

	console.log("Bot ist fertig xD\n\n")

	});







client.on('message', message => {

    if (message.content === prefix + 'forum') {

       message.channel.send('Here ist the link to the Steam forum: https://steamcommunity.com/app/280790/ ;)');

       }

}); 







client.on('message', message => {

    if (message.content === prefix + 'twitch') {

       message.channel.send('Here ist the link to Playfulcorp twitch channel: https://www.twitch.tv/playfulcorp ;)');

       }

}); 







client.on('message', message => {

    if (message.content === prefix + 'twitter') {

       message.channel.send('Here ist the link to Creativerse twitter channel: https://twitter.com/creativersegame ;)');

       }

}); 







client.on('message', message => {

	

	if(message.content.toLowerCase() === '<@498113087765872646>') { if(message.author.bot) { return; }

	 

	         var embed = new Discord.RichEmbed()

			 

			 .addField('Hello! I am JoJos Bot:smile:  ', 'At the moment I am a beta bot and will be programmed by Stephan. I dont have many commands yet, but some will come later:wink: make: !help.')

			 .setColor('GREEN')

			 

			message.channel.sendEmbed(embed);

	

	}

	

});











client.on('guildMemberAdd', member => {

		const channel = member.guild.channels.find(ch => ch.name === 'chat');

        if (!channel) return;

		channel.send(`${member} Welcome to Jojo's World Discord server:grinning:`);

});















 

client.on('message', message => {

	

	if(message.content.toLowerCase() === prefix + 'help') { if(message.author.bot) { return; }

	 

	         var embed = new Discord.RichEmbed()

			 

			 .addField('here is my list with commands: ', '!help -gives help commands. !media  -gives social media commands.')

			 .setColor('GREEN')

			 

			message.channel.sendEmbed(embed);

	

	}

	

});







client.on('message', message => {

	

	if(message.content.toLowerCase() === prefix + 'media') { if(message.author.bot) { return; }

	 

	         var embed = new Discord.RichEmbed()

			 

			 .addField('here is my list with social media commands: ', '!forum -gives link to the steam forum. !twitter  -gives the link to creativerse twitter.  !twitch  -gives the link to playfulcorp twitch channel.')

			 .setColor('GREEN')

			 

			message.channel.sendEmbed(embed);

	

	}

	

});









// THIS  MUST  BE  THIS  WAY







client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
