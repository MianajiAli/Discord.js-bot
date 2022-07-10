const db = require("quick.db")

module.exports = {
    name: "disablemodlog",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:alert:995652726543355975> **You can not use this command | Permission: ADMINISTRATOR**')
		if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<a:alert:995652726543355975> **I do not have the correct permissions | Permission : MANAGE_CHANNELS**')
        try {
            let a = db.fetch(`modlog_${message.guild.id}`)

            if (!a) {
                return message.channel.send('<a:alert:995652726543355975> **There Is No Modlog Channel Set To Disable**')
            } else {
                let channel = message.guild.channels.cache.get(a)
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("<a:alert:995652726543355975> **ModLog Channel Disabled**")
                db.delete(`modlog_${message.guild.id}`)

                message.channel.send(`<a:verify:995645296736481320> **Modlog Channel Has Been Successfully Disabled in \`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("<a:alert:995652726543355975> **Error - `Missing Permissions or Channel Doesn't Exist`**")
        }
	}
}