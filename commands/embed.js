import Discord from 'v11-discord.js';
import config from '../config.json';

export const name = 'embed';
export const description = 'met un message avec un embed';
export function execute(self, message, args) {
    if(args == '') return message.edit(`Mettez des arguments (\`${config.prefix}embed <args>\`)`)

    var embed = new Discord.RichEmbed().setColor('RANDOM').setTitle(args.join(" "));
    message.delete()
    message.channel.send(embed)
}
