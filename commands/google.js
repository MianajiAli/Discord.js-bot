const colors = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db');
const request = require('node-superfetch');

module.exports = {
    name: "google",

    async run (client, message, args) {
	let googleKey = "AIzaSyDWJFlj8l-bpSgZJ5c24vOpl73wlbPFC2U";

    let csx = "94f1a577e04c88f9d";

    let query = args.join(" ");

    let result;



    if (!query) return message.channel.send("<a:alert:995652726543355975> **Please enter the query**");



    href = await search(query);

    if (!href) return message.channel.send("<a:alert:995652726543355975> **Unknown search**");



    const embed = new Discord.MessageEmbed()

    .setTitle(href.title)

    .setDescription(href.snippet)

    .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)

    .setURL(href.link)

    .setColor(colors.main)

    .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))



    return message.channel.send(embed);



    async function search(query) {

        const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({

            key: googleKey, cx: csx, safe: "off", q: query

        });



        if (!body.items) return null;

        return body.items[0];

    }
	}
}