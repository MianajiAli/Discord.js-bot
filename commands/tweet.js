const color = require('../colors.json') 
const canvacord = require("canvacord");
const Discord = require("discord.js")
const fetch = require("node-fetch");
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "tweet",

    async run (client, message, args) {
		let user = args[0];
        let text = args.slice(1).join(" ");


        if(!user){
            return message.edit("<:pepeno:997843592955580466> **You Have To Enter Someone's Twitter Nickname**");
        }

        if(!text){
            return message.edit("<:pepeno:997843592955580466> **You must enter a message**");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(``, attachment);
            message.delete({ timeout: 5000});
        } catch(e){
            message.edit("<:pepeno:997843592955580466> **Error, Try Again**");
        }
	}
}