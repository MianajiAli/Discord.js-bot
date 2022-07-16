const { MessageEmbed } = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: 'volume',
    description: 'Set the volume of the bot in the vc', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:pepeno:997843592955580466> **You must be in a voice channel to play something**`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.setVolume(message, parseInt(args[0]));
            const volume = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:peppoyes:997843596290052177> **Volume set to ${args[0]}%**`)
            if(isDone)
            message.channel.send(volume);
    }
}