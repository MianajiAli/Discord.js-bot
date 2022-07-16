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
            .setDescription(`<:pepeno:997843592955580466> **You must be in a voice channel to play something**`)
        if (!voice_channel) return message.channel.send(embed);

		if (!args[0]) return message.reply('<:pepeno:997843592955580466> **Please enter the name of the song**')

        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));

            const added = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:peppoyes:997843596290052177> **Added **__${song.name}__** to the queue**`)

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