const { MessageEmbed } = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: 'dc',
    description: 'Clears the queue and leave the vc', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:pepeno:997843592955580466> **You must be in a voice channel to play something**`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.stop(message);
            const stop = new MessageEmbed()
            .setColor(colors.main)
            .setDescription('<:peppoyes:997843596290052177> **Disconnected**')
            if(isDone)
            message.channel.send(stop);
    }
}