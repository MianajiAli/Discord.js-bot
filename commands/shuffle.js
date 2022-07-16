const { MessageEmbed } = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: 'shuffle',
    description: 'Shuffle the queue', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<a:no:997879343999111280> **You must be in a voice channel to play something**`)
            if (!voice_channel) return message.channel.send(embed);
            let songs = client.player.shuffle(message);
            const shuffle = new MessageEmbed()
            .setColor(colors.main)
            .setDescription('<a:yes:997879349170684064> **Shuffled the queue**')
            if(songs)
            message.channel.send(shuffle);
    }
}