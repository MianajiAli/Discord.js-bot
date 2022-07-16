const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "open",

    async run (client, message, args) {
        let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;

		if (message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			try {
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				})
					.then(() => {
						message.channel.send(`<a:yes:997879349170684064> **Successfully re-opened ${message.channel}**`);
					});
			}
			catch (e) {
				return message.channel.send('<a:no:997879343999111280> **An error occurred, please try again**');
			}
		}
		else {
			return message.reply(
				'<a:no:997879343999111280> **You cannot use this command here, Please use this command on a closed ticket**',
			);
		}
	}
}