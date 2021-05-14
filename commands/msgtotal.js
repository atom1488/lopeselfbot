import {
    totalMessage
} from '../index.js'

export const name = 'msgtotal';
export const description = 'affiche le nombre total de messages depuis le lancement du selfbot'
export function execute(self, message) {
    message.edit(`Le nombre total de message depuis le lancement du bot est de **${totalMessage}**`)
}