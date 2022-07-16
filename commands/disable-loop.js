const { MessageEmbed } = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: 'disable-loop', 
    description: 'Stop looping the queue', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:pepeno:997843592955580466> **You must be in a voice channel to play something**`)
            if (!voice_channel) return message.channel.send(embed);

            let status = client.player.setQueueRepeatMode(message, false);

            const disloop = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:peppoyes:997843596290052177> **Queue will not be longer repeated**`)
            if(status === null)
            return;
            message.channel.send(disloop);
    }
}