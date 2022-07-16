const { MessageEmbed } = require('discord.js');
const { default_prefix } = require('../config.json');
const db = require('quick.db');
const colors = require('../colors.json')

module.exports = {
   
        name: "shop",
    run: async (client, message, args) => {
        let target = db.get(`userb_${message.author.id}`);

		const ban_error = new MessageEmbed()
		.setDescription('<a:no:863733318809812992> **You are banned from using this section**')
		.setColor(colors.main)

		if(target) {
			return message.channel.send(ban_error)
		}

		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
 

     let embed = new MessageEmbed()
	    .setTitle('Shop')
        .addField('Items', '**Shovel : 25,000 🪙\nFishing Pole : 25,000 🪙\nHeadphone : 50,000 🪙\nCell Phone : 120,000 🪙\nLaptop : 200,000 🪙\nDB Coin : 1,000,000 🪙**', true)
        .addField('Pets', '**Turtle : 1,700 🪙\nBird : 2,000 🪙\nCat : 5,000 🪙\nDog : 5,500 🪙\nSnake : 10,000 🪙**', true)
        .addField('Guns', '**Pistol : 350,000 🪙\nRifle : 650,00 🪙\nSniper : 700,000 🪙\nShotgun : 700,000 🪙**', true)
        .addField('Abilities', '**Ghost : 1,500,000 🪙\nNinja : 2,500,000 🪙\nMind Reading : 5,000,000 🪙\nInvisible : 15,000,000 🪙**', true)
        .addField('Badges', '**Copper : 200,000 🪙\nBronze : 1,000,000 🪙\nSilver : 2,000,000 🪙\nGold : 3,000,000 🪙\nDiamond : 5,000,000 🪙\nImmortal : 10,000,000 🪙**', true)
        .addField('Cars', '**Tesla : 3,000,000 🪙\nFerrari : 5,000,000 🪙\nBugatti : 8,000,000 🪙\nLamborghini : 12,000,000 🪙\nMercedes-Benz : 15,000,000 🪙\nRolls-Royce : 20,000,000 🪙**', true)
        .addField('Houses', '**Apartment : 10,000,000 🪙\nVilla : 15,000,000 🪙\nOcean View : 20,000,000 🪙\nMansion : 30,000,000 🪙\nCastle : 50,000,000 🪙**', true)
        .setColor(colors.main)
		.setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        message.channel.send(embed)
    }
}

