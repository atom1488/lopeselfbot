import config from '../config.json'

var pisseInterval = null;

var messagepresence = ['Tirage de Pisse Gratuit', 'en train de bouffer la merde', 'le prolapse', 'se branler sur des meks', 'a poil']

export const name = 'setlive';
export const description = `met en statut "streaming sur twitch" | changer le lien du live: ${config.prefix}setlive <nom> (pas besoin de twitch.tv/)`
export function execute(self, message, args) {

    message.delete();
    var enLail = args[0]
    if (args == '') {
        enLail = 'prolapse'
    }

    function setPresence() {
        let presence = messagepresence[(Math.floor(Math.random() * messagepresence.length))]
        self.user.setActivity(presence, {
            type: `streaming`,
            url: `https://www.twitch.tv/${enLail} `
        })
    }

    pisseInterval = setInterval(setPresence, 10000)
}