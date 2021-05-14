export var gifCrash = 'https://giant.gfycat.com/PracticalCleanCaterpillar.mp4'

export const name = 'crashgif';
export const description = 'met un gif qui fait crash Discord (patch par Discord)'
export function execute(self, message) {
    message.edit(gifCrash)
}