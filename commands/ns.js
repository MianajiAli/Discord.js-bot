const Discord = require('discord.js');
const superagent = require('superagent')
const colors = require('../colors.json')

module.exports = {
    name: "ns",

    async run (client, message, args) {

		if (message.channel.nsfw === true) {

			const tn =args[0]
			const nu =args[1]
			const time =args[2]
			var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
	superagent.get('https://nekobot.xyz/api/image')
	.query({ type: tn})
	.end((err, response) => {
		const ns = new Discord.MessageEmbed()
		.setImage(response.body.message)
		.setColor(colors.main)
	  message.channel.send(ns)
	});
    i++;                    //  increment the counter
    if (i < nu) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, time*1000)
}

myLoop();  

		  } else {
			message.channel.send("<a:no:997879343999111280> **This isn't NSFW channel**")
		}
	}
}
