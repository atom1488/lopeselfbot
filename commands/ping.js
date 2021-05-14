export const name = 'ping';
export const description = 'affiche le ping du bot et de l\'API';
export function execute(self, message) {
    var pingBot = undefined;
    message.edit(`Ping...`).then(m => {
        pingBot = m.createdTimestamp - message.createdTimestamp;
    })
    message.edit(`Le ping du bot est de \`${pingBot}ms\` et le ping de l'API est de \`${Math.round(self.ping)}ms\``);
}