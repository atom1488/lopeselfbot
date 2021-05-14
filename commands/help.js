export const name = 'help';
export const description = 'affiche l\'aide mais sur Discord'
export function execute(self, message) {

    message.edit(self.commands.map(c => `**${c.name}** : ${c.description}`).join("\n"))
}