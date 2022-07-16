const { MessageEmbed } = require("discord.js");
const colors = require('../colors.json')
const ytsr = require('ytsr');
module.exports = {
    name: 'play',
    description: 'Play a song in the vc', 
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<a:no:997879343999111280> **You must be in a voice channel to play something**`)
        if (!voice_channel) return message.channel.send(embed);

		if (!args[0]) return message.reply('<a:no:997879343999111280> **Please enter the name of the song**')

        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));

            const added = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<a:yes:997879349170684064> **Added **__${song.name}__** to the queue**`)

            if(song)
                message.channel.send(added);
            return;
        } else {
            let song = await client.player.play(message, args.join(' '));

            const started = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`**Playing** **__${song.name}__**`)

            if(song)
                message.channel.send(started);
            return;
        }
    }
}