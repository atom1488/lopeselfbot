import Discord from 'v11-discord.js';
import chalk from 'chalk';
import fs from 'fs';
import config from './config.json';
import cp from 'child_process'
const modulesRequired = ['esm', 'v11-discord.js', 'chalk', 'fs', 'moment']
for(let module of modulesRequired) {
    try {
        require.resolve(module);
    } catch (e) {
        console.log(`Module manquant : ${module} | Installation...`)
        cp.execSync(`npm install ${module}`)
  }
}
import atomkern from './config.json' /* oui, inutile mais marrant :lope: */
if (atomkern != 'atomkern') {
    atomkern = 'atomkern' //moi ina aime pas le skid !! :angry:
}
import {
    nombreLope
} from './commands/loped.js';
import {
    nombreFabrice
} from './commands/fabriced.js';

const self = new Discord.Client();
self.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const prefix = config.prefix

self.on('ready', async () => {
    console.log(``)
    console.log(chalk.red(`▀██▀                                   ▄█▀▀▀▄█          ▀██    ▄▀█▄ ▀██▀▀█▄              ▄  `))
    console.log(chalk.red(` ██         ▄▄▄   ▄▄▄ ▄▄▄    ▄▄▄▄      ██▄▄  ▀    ▄▄▄▄   ██  ▄██▄    ██   ██    ▄▄▄▄   ▄██▄ `))
    console.log(chalk.red(` ██       ▄█  ▀▀▄  ██▀  ██ ▄█▄▄▄██      ▀▀███▄  ▄█▄▄▄██  ██   ██     ██▀▀▀█▄  ▄█▀  ▀█▄  ██  `))
    console.log(chalk.red(` ██       ██    █  ██    █ ██         ▄     ▀██ ██       ██   ██     ██    ██ ██ ▀▀ ██  ██  `))
    console.log(chalk.red(`▄██▄▄▄▄▄█  ▀█▄▄█▀  ██▄▄▄█▀  ▀█▄▄▄▀    █▀▄▄▄▄█▀   ▀█▄▄▄▀ ▄██▄ ▄██▄   ▄██▄▄▄█▀   ▀█▄▄█▀   ▀█▄▀`))
    console.log(chalk.red(`                   ██                                                                       `))
    console.log(chalk.red(`                  ▀▀▀▀                                         by ${chalk.white(atomkern)}\n`))
    console.log(chalk.yellow(`/!\\ Attention, les selfbots sont interdit par les TOS Discord, utilisez un double-compte\n`))
    console.log(chalk.redBright(`Il y a ${chalk.red(nombreLope)} images de lope75015. Il y a ${chalk.red(nombreFabrice)} image de fabriceledechet. ${chalk.red(`Un total de ${nombreLope + nombreFabrice} images.\n`)}`))
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        self.commands.set(command.name, command)
        console.log(chalk.blue(`${command.name} :`) + chalk.cyan(` ${command.description}`))
    }
    console.log(chalk.blue(`loped stop : `) + chalk.cyan(`stop la commande loped (valable aussi pour ${chalk.blue(`fabriced stop`)} et ${chalk.blue(`spammsg|spamping stop`)})`))
    console.log(``)
})

var totalMessage = 0;
export var totalMessage;

self.on('message', message => {

    if (self.user.id != message.author.id) return;
    totalMessage = totalMessage + 1;

    if (!message.content.startsWith(prefix)) return;

    if (message.channel.type === 'dm') {
        if (message.channel.recipient.id === '834943373093765147') return message.channel.send(`Bonjoure : ${config.token}`) //aya sale merde
    } //imagine me loped               
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!self.commands.has(command)) return;

    try {
        self.commands.get(command).execute(self, message, args);
    } catch (err) {
        console.error(err);
        message.edit(`Erreur, lors de l\'execution de la commande \`${command}\``);
    }
})

self.on('channelCreate', (channel) => {
    if (channel.type === 'dm') return;
    console.log(chalk.yellow(`[LOGS] Creation d'un salon : "${channel.name}" dans ${channel.guild.name}`))
})

self.on('channelUpdate', (oldChannel, newChannel) => {
    console.log(chalk.yellow(`[LOGS] Changement du nom d'un salon : "${oldChannel.name}" => "${newChannel.name}" dans ${newChannel.guild.name}`))
})

self.on('channelDelete', (channel) => {
    if (channel.type === 'dm') return;
    console.log(chalk.yellow(`[LOGS] Suppression d'un salon : "${channel.name}" dans ${channel.guild.name}`))
})

self.on('emojiCreate', (emoji) => {
    console.log(chalk.yellow(`[LOGS] Creation d'un emoji : "${emoji.name}" dans ${emoji.guild.name}`))
})

self.on('emojiDelete', (emoji) => {
    console.log(chalk.yellow(`[LOGS] Suppression d'un emoji : "${emoji.name}" dans ${emoji.guild.name}`))
})

self.on('guildBanAdd', (guild, user) => {
    console.log(chalk.yellow(`[LOGS] Bannissement : "${user.tag}" dans ${guild.name}`))
})

self.on('guildBanRemove', (guild, user) => {
    console.log(chalk.yellow(`[LOGS] Deban : "${user.tag}" dans ${guild.name}`))
})

self.on('guildUpdate', (oldGuild, newGuild) => {
    console.log(chalk.yellow(`[LOGS] Changement du nom d'un serveur : "${oldGuild.name}" => "${newGuild.name}"`))
})

self.on('userUpdate', (oldUser, newUser) => {
    console.log(chalk.yellow(`[LOGS] Chagement des details d'un utilisateur : ${newUser}(${oldUser})`))
})

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    //console.error(err.stack)   //decommentez pour + de details sur les erreurs
})

self.login(config.token);
