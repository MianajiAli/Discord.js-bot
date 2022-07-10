const colors = require('../colors.json')
const Discord = require('discord.js');
require('discord-reply'); 
const db = require('quick.db');
const { token, default_prefix } = require('../config.json');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "help", 

    async run (client, message, args) {
		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
		const page1 = new Discord.MessageEmbed()
		 .setTitle('Commands List')
		 .setDescription(`**The prefix is currently \`${prefix}\`** \n**You can change the bot prefix by typing \`${prefix}prefix <prefix>\`** \n**Support me by [inviting](https://discord.com/api/oauth2/authorize?client_id=816644254485970986&permissions=8&scope=bot) me to your amazing server 💜** \n** you can join the [support server](https://dsc.gg/1dk) and ask for help there or you can report the issue by typing \`${prefix}report <bug>\`** \n`)
		 .addField('🔨 Moderation', `\`${prefix}mod\``, true)
		 .addField(':shield: Anti Raid', `\`${prefix}ar-setup\``, true)
		 .addField(':mute: Anti Swear', `\`${prefix}anti-swear\``, true)
         .addField(':musical_note:  Music', `\`${prefix}music-help\``, true)
		 .addField(':dividers: Mod Log (Important)', `\`${prefix}modlog\``, true)
		 .addField(':trophy: Leveling System', `\`${prefix}lvlsetup\``, true)
		 .addField(':video_game: Game', `\`${prefix}game\``, true)
		 .addField(':currency_exchange: Economy', `\`${prefix}economy\``, true)
		 .addField(':trident: Info', `\`${prefix}info\``, true)
		 .addField(':joy: Fun', `\`${prefix}fun\``, true)
		 .addField('<a:arrow:994002498815799316> General', `\`${prefix}general\``, true)
		 .addField(':underage: NSFW', `\`${prefix}nsfw\``, true)
		 .addField(':performing_arts: Reaction Role', `\`${prefix}rrhelp\``, true)
		 .addField(':envelope_with_arrow: Ticket', `\`${prefix}ticketsetup\``, true)
		 .addField(':tada: Giveaway', `\`${prefix}gahelp\``, true)
		 .addField(':envelope: Invite Manager', `\`${prefix}invmanager\``, true)
		 .addField(':wave: Welcome Message', `\`${prefix}wlchelp\``, true)
		 .addField(':wave: Leave Message', `\`${prefix}leavehelp\``, true)
		 .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		 .setColor(colors.main)
		 

		const page2 = new Discord.MessageEmbed()
		 .setTitle('Commands List')
		 .setDescription(`**The prefix is currently \`${prefix}\`** \n**You can change the bot prefix by typing \`${prefix}prefix <prefix>\`** \n**Support me by [inviting](https://discord.com/api/oauth2/authorize?client_id=816644254485970986&permissions=8&scope=bot) me to your amazing server 💜** \n** you can join the [support server](https://dsc.gg/1dk) and ask for help there or you can report the issue by typing \`${prefix}report <bug>\`** \n`)
		 .addField(':pleading_face: Emotions', `\`${prefix}emo\``, true)
		 .addField(':robot: Bot Info', `\`${prefix}bot\``, true)
		 .addField(':arrow_up: Bump Server', `\`${prefix}bump\``, true)
		 .addField(':sparkles: Premium', `\`${prefix}premium\``, true)
		 .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		 .setColor(colors.main)


    const pages = [
		page1,
        page2,
    ]

    const emoji = ["⏪", "⏩"]


    pagination(message, pages, emoji)
	} 
}
