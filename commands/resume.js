const { MessageEmbed } = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: 'resume',
    description: 'Resume the song that was paused', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:pepeno:997843592955580466> **You must be in a voice channel to play something**`)
            if (!voice_channel) return message.channel.send(embed);
            let song = client.player.resume(message);
            const resume = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:peppoyes:997843596290052177> **${song.name} resumed**`)
            if(song)
            message.channel.send(resume);
    }
}