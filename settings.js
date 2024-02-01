const chalk = require("chalk")
const fs = require("fs")


//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['62895700121662'] //ur owner number
global.ownernomer = "62895700121662" //ur owner number2
global.ownername = "GussXD" //ur owner name
global.namaku = "BagusXD"
global.ytname = "-" //ur yt chanel name
global.socialm = "jgn spam owner njg" //ur github or insta name
global.location = "Bali, Indonesia " //ur location

//new
global.botname = "-"
global.ownernumber = '62895700121662'
global.ownername = ' '
global.ownerNumber = ["62895700121662@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@Ambiyah"
global.websitex = "-"
global.wagc = "https://chat.whatsapp.com/GxpCNxNd7w99fjSzHJwGL"
global.themeemoji = '🚩'
global.wm = "-\n"
global.wmbot = "-"
global.botscript = 'Bokepppppp' //script link
global.packname = "-"
global.author = ""
global.creator = "62895700121662@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0
global.running = "Panel Pterodactyl"
//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='


global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//messages
global.mess = {
    success: 'Nih',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'proses...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})