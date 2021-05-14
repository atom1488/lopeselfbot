import chalk from 'chalk';
import config from '../config.json'

var spamInterval = null;

var randomText = ['je suis un prolapse !', 'putain, on voit mon trou...', `tu n'es bon qu'à bouffer la merde. Tu n'as ni talent particulier, ni fortune, ni diplôme, ni quoique ce soit qui pourrait te permettre de tirer ton épingle du jeu de la vie. Non, toi ta place c'est celle du déchet, de la merde infâme que toute cette société rejette. Sur qui, tout le monde crache dessus. Tu n'es qu'une merde, un sombre déchet qui clôturera assez rapidement sa courte, mais pénible existence de déchet. Je peux te l'assurer.`, 'je suis un dechet quoi !', 'https://cdn.discordapp.com/attachments/816384740919083100/836285090605957120/Pierre_garcia_4.png', 'allo !', 'https://cdn.discordapp.com/emojis/614230800505897060.png?v=1', 'tu as vu mes photos ?', 'noooooooooooon']

var msg = '_';

export const name = 'spammsg';
export const description = `spam un message prédéfini | ${config.prefix}spammsg <msg> | ${config.prefix}spammsg random`
export function execute(self, message, args) {
    if(args == '') return message.edit(`Mettez des arguments (\`${config.prefix}spammsg <args>\`) || Vous pouvez egalement mettre \`random\` au lieu de \`<args>\``)
    msg = args.join(" ")
    message.delete();
    function spamMessage() {
        message.channel.send(msg).catch((err) => {
            console.log(chalk.green(`Impossible d'envoyer le message (bloqued, banni ou mute) : `) + chalk.gray(err.message))
            clearInterval(spamInterval)
        })
    }

    function randomMessage() {
        message.channel.send(randomText[(Math.floor(Math.random() * randomText.length))]).catch((err) => {
            console.log(chalk.green(`Impossible d'envoyer le message (bloqued, banni ou mute) : `) + chalk.gray(err.message))
            clearInterval(spamInterval)
        })
    }

    if (args[0] == 'stop') {
        clearInterval(spamInterval)
        message.delete();
    } else if (args[0] == 'random') {
        spamInterval = setInterval(randomMessage, 1350)
    } else {
        spamInterval = setInterval(spamMessage, 1350)
    }
}