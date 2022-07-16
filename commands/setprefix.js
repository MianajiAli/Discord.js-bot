const db = require('quick.db');

module.exports = {
    name: "prefix",
    description: "Set a server's prefix",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<:pepeno:997843592955580466> **You can not use this command | Permission: ADMINISTRATOR**');
        if(!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send('<:pepeno:997843592955580466> **I do not have the correct permissions | Permission : MANAGE_GUILD / MANAGE_SERVER**')
        
        if(!args[0]) return message.channel.send('**Please provide a new prefix**');

        if(args[1]) return message.channel.send('<:pepeno:997843592955580466> **The prefix can\'t have two spaces**');

        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`<:peppoyes:997843596290052177> **Successfully set new prefix to** **${args[0]}**`)
    }
}