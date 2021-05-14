import moment from 'moment';
import chalk from 'chalk';
import config from '../config.json'
import Discord from 'v11-discord.js';

export const name = 'userinfo';
export const description = `affiche des informations sur un utilisateur | ${config.prefix}userinfo <id>`
export function execute(self, message, args) {

    var user = self.users.get(args[0])
    message.delete()

    try {

        var embed = new Discord.RichEmbed()
            .setTitle(`Informations sur ${user.username}`)
            .setColor(0x148814)
            .setAuthor(`LopeSelf`, `https://cdn.discordapp.com/emojis/614230800505897060.png?v=1`)
            .setThumbnail(user.displayAvatarURL)
            .addField(`**Pseudo:**`, user.username, true)
            .addField(`**Tag:**`, user.discriminator, true)
            .addField(`**ID:**`, user.id, true)
            .addField(`**Nickname:**`, user.displayName || 'Aucun', true)
            .addField(`**Date de création:**`, ` ${moment(user.createdTimestamp).format('LT')} ${moment(user.createdTimestamp).format('LL')} ${moment(user.createdTimestamp).fromNow()}`, true)
            .addField(`**Statut:**`, user.presence.status, true)
            .setFooter(`on voit vraiment ce qu\'il est...`)

        message.channel.send(embed);
    
    } catch (err) {
        console.log(chalk.green(`Erreur (ID invalid ou impossible d'acceder à l'utilisateur => ouvrez les mp avec l'utilisateur pour que le LopeSelf puisse acceder cet utilisateur) : `) + chalk.gray(err.message + err.stack))
    }
}