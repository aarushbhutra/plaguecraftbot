const Discord = require('discord.js');

module.exports = {
	name:'mod-help',
	description: "PCN mod-help command",
	execute(messages, args) {
		if(messages.member.roles.cache.some(r => r.name === "Mod Bot User")){
		const modEmbed = new Discord.MessageEmbed()
		.setColor('#c7002e')
		.setTitle('PlagueCraftBot Moderation Help')
		.setURL('https://plaguecraft.xyz/moderator')
		.setAuthor('The PlagueCraft Network')
		.setDescription('As a moderator, your job is to keep the bad guys out, and help around the community.\n\nSome of these commands are public and can be used by anyone, but some are punishments that can be handed by you.\n\n **Make sure these are logical punishments.**\n\n**pcn!ban [user]** - Bans a user\n\n**pcn!mute [duration]** - Mutes a user for the specified duration\n\n **pcn!kick [user]** - Kicks the specified user\n\n **pcn!unmute [user]** - Does what it says, unmutes a user.')
		.setFooter(`PCN`)
		.setTimestamp()
		.setThumbnail('https://plaguecraft.xyz/assets/img/logo.png')

		messages.channel.send(`<@${messages.author.id}>`)
		messages.reply(modEmbed)
		} else{
			messages.reply('You do not have the permissions to use this command!')
		}
	}
}