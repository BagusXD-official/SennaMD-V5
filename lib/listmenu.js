const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  ᴏᴡɴᴇʀ ᴍᴇɴᴜ ッ*

┌ ◦ .self *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .public *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .join *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bctext *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bcimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bcvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .creategc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .setexif *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .shutdown *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .autostickergc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .setppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .block add *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unblock del *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .leavegc *ᴏᴡɴᴇʀ ᴏɴʟʏ*

*—  ᴘᴜsʜ ᴍᴇɴᴜ ッ*  

┌ ◦ .pushcontact *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .pushcontactv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .savecontact *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .pushmember *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .idgc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*

 *—  ʙᴜɢ ᴍᴇɴᴜ ッ* 
 
┌ ◦ .sendbug *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .sendbugv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*

 *—  ᴀɪ ᴍᴇɴᴜ ッ* 
 
┌ ◦ .toanime *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .openai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .removebg *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .tohd *ғʀᴇᴇ ᴏɴʟʏ*


*—  ʙᴀɴɴᴇᴅᴍᴇɴᴜ ッ* 

┌ ◦ .bankyuu1 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bankyuu2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bankyuu3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bankyuu4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .verify *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .logout *ᴏᴡɴᴇʀ ᴏɴʟʏ*

*—  ᴜɴʙᴀɴɴᴇᴅᴍᴇɴᴜ ッ*   

┌ ◦ .unbankyuu1 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu5 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu6 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .unbankyuu7 *ᴏᴡɴᴇʀ ᴏɴʟʏ*

*— ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ ッ* 

┌ ◦ .tiktokvideo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tiktokaudio *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytsearch *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mediafire *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .play *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytmp3 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytmp4 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .google *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .spotify *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gitclone *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .happymod *ғʀᴇᴇ ᴏɴʟʏ*

*— ᴀɴᴛɪᴍᴇɴᴜッ*

┌ ◦ .antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
└ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*

*— ɢʀᴏᴜᴘᴍᴇɴᴜッ*

┌ ◦ .grouplink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .ephemeral *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .delete *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setname *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setdesc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .add *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .kick *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .promote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .demote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .hidetag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .tagall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .editinfo *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .opentime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .closetime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .resetlink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .autostickerpc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .nsfw *ɢʀᴏᴜᴘ ᴏɴʟʏ*
└ ◦ .react *ɢʀᴏᴜᴘ ᴏɴʟʏ*

*— ʀᴀɴᴅᴏᴍ ᴠɪᴅᴇᴏッ*

┌ ◦ .tiktokgirl *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoknukthy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokkayes *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokpanrika *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoknotnot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokghea *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoksantuy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .tiktokbocil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*

*— sᴛᴀʟᴋᴇʀᴍᴇɴᴜッ*

┌ ◦ .igstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ffstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mlstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .npmstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .ghstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*

*— ᴏᴛʜᴇʀ ᴍᴇɴᴜッ*

┌ ◦ .ping *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .menu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listpem *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .liststicker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listimage *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listvideo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listvn *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listbadword *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listpc *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listgc *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .owner *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rentbot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .listrentbot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .donate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .friend *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .obfuscate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .styletext *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fliptext *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tts *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .say *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .togif *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toqr *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blown *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .deep *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .earrape *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fast *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fat *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nightcore *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .reverse *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .robot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .slow *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smooth *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .squirrel *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tovn *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toaudio *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tomp3 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tomp4*ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toimg *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toonce *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sticker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .take *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .emoji *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .volume *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ebinary *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dbinary *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ssweb *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .quoted *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .runtime *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .sound1 - sound161 *ғʀᴇᴇ ᴏɴʟʏ*

*— ғᴜɴ ᴍᴇɴᴜッ*

┌ ◦ .define *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .truth *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dare *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .couple *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .soulmate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .stupidcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .handsomecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .uncleancheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hotcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smartcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .greatcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .evilcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dogcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .coolcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .waifucheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .awesomecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gaycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cutecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lesbiancheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hornycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .prettycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lovelycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .uglycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sexy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .kind *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .idiot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .handsome *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .beautiful *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cute *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .pretty *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lesbian *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .noob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bastard *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .foolish *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nerd *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .asshole *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gay *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smart *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .stubble *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .doggo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .horny *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cunt *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wibu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .noobra *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nibba *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nibbi *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .comrade *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mumu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rascal *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .scumbag *ғʀᴇᴇ ᴏɴʟʏ* 
│ ◦ .nuts *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fagot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .scoundrel *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ditch *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dope *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gucci *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lit *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dumbass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .crackhead *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mf *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .motherfucker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sucker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fuckboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .playboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fuckgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .playgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .quotes *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .can *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .is *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .when *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .where *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .what *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .how *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kill *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hug *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pat *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .lick *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .kiss *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bite *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yeet *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bully *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bonk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wink *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .poke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nom *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .slap *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smile *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wave *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .awoo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blush *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smug *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .glomp *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .happy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .dance *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cringe *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cuddle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .highfive *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .shinobu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .handhold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .horny *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .checkme *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .confess *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .leave *ғʀᴇᴇ ᴏɴʟʏ*

*— ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏッ*

┌ ◦ .aesthetic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .coffee *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wikimedia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .art *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bts *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .woof *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .meow *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lizard *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cosplay *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hacker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cyber *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gamewallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .islamic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .jennie *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .jiso *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .satanic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .justina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cartoon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pentol *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cat *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .kpop *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .exo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .lisa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .space *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .car *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .technology *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bike *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shortquote *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .antiwork *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hacking *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .boneka *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rose *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ryujin *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ulzzangboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ulzzanggirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wallml *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wallphone *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mountain *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .goose *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .profilepic *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .couplepic *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .programming *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pubg *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blackpink *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .randomboy *ғʀᴇᴇ ᴏɴʟʏ*  
│ ◦ .randomgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hijab *ғʀᴇᴇ ᴏɴʟʏ*  
│ ◦ .chinese *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .indo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .japanese *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .korean *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .malay *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .thai *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .vietnamese *ғʀᴇᴇ ᴏɴʟʏ*

*— ᴀɴɪᴍᴇッ*

┌ ◦ .akira *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .akiyama *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ana *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .asuna *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ayuzawa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .boruto *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .chiho *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .chitoge *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cosplayloli *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cosplaysagiri *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deidara *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .doraemon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .elaina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .emilia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .erza *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gremory *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hestia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hinata *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .husbu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .inori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .isuzu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .itachi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .itori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kaga *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kagura *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kakasih *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kaori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .keneki *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kotori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kurumi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .loli *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .madara *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .megumin *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mikasa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mikey *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .miku *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .minato *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .naruto *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neko2 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nekonime *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nezuko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .onepiece *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pokemon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .randomnime *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .randomnime2 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rize *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sagiri *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sakura *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sasuke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shinka *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shinomiya *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shizuka *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shota *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tejina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .toukachan *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tsunade *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .waifu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .animewall *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yotsuba *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yuki *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yulibocil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yumeko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .8ball *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tickle *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gecg *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .feed *ғʀᴇᴇ ᴏɴʟʏ*

*— ᴀɴɪᴍᴇ ɴsғᴡッ*

┌ ◦ .hentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gifhentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gifblowjob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hentaivid *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hneko *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nwaifu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .animespank *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .trap *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gasm *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ahegao *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bdsm *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blowjob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cuckold *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cum *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .milf *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .eba *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ero *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .femdom *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .foot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gangbang *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .glasses *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .jahy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .masturbation *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .manga *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .neko-hentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .neko-hentai2 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nsfwloli *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .orgy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .panties *ғʀᴇᴇ ᴏɴʟʏ* 
│ ◦ .pussy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tentacles *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .thights *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .yuri *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .zettai *ғʀᴇᴇ ᴏɴʟʏ*

*— ᴛᴇxᴛᴘʀᴏ ᴍᴀᴋᴇʀッ*

┌ ◦ .candy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .christmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .3dchristmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .sparklechristmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deepsea *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .scifi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .rainbow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .waterpipe *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .spooky *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .pencil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .circuit *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .discovery *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .metalic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .fiction *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .demon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .transformer *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .berry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .thunder *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .magma *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .3dstone *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .neonlight *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .glitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .harrypotter *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .brokenglass *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .papercut *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .watercolor *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .multicolor *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .neondevil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .underwater *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .graffitibike *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .snow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .cloud *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .honey *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .ice *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .fruitjuice *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .biscuit *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wood *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .chocolate *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .strawberry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .matrix *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .blood *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .dropwater *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .toxic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .lava *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .rock *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .bloodglas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .hallowen *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .darkgold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .joker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wicker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .firework *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .skeleton *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .blackpink *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .sand *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .glue *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .1917 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
└ ◦ .leaves *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*

*— ᴘʜᴏᴛᴏᴏxʏ ᴍᴀᴋᴇʀッ*

│ ◦ .shadow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .write *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .romantic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .burnpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smoke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .narutobanner *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .love *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .undergrass *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .doublelove *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .coffecup *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .underwaterocean *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smokyneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .starstext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rainboweffect *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .balloontext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .metalliceffect *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .embroiderytext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flamingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .stonetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .writeart *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .summertext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wolfmetaltext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nature3dtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rosestext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .naturetypography *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .quotesunder *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .shinetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*

*— ᴇᴘʜᴏᴛᴏ360 ᴍᴀᴋᴇʀッ*

│ ◦ .glitchtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .writetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .advancedglow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .typographytext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pixelglitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neonglitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flagtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flag3dtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deletingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blackpinkstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .glowingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .underwatertext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .logomaker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cartoonstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .papercutstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .watercolortext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .effectclouds *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blackpinklogo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gradienttext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .summerbeach *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .luxurygold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .multicoloredneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sandsummer *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .galaxywallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .1917style *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .makingneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .royaltext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .freecreate *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .galaxystyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .lighteffects *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
`}

global.animemenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ᴀɴɪᴍᴇッ*

┌ ◦ .akira *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .akiyama *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ana *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .asuna *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ayuzawa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .boruto *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .chiho *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .chitoge *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cosplayloli *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cosplaysagiri *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deidara *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .doraemon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .elaina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .emilia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .erza *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gremory *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hestia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hinata *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .husbu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .inori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .isuzu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .itachi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .itori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kaga *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kagura *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kakasih *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kaori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .keneki *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kotori *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kurumi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .loli *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .madara *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .megumin *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mikasa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mikey *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .miku *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .minato *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .naruto *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neko2 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nekonime *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nezuko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .onepiece *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pokemon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .randomnime *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .randomnime2 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rize *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sagiri *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sakura *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sasuke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shinka *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shinomiya *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shizuka *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shota *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tejina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .toukachan *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tsunade *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .waifu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .animewall *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yotsuba *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yuki *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yulibocil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yumeko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .8ball *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tickle *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gecg *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .feed *ғʀᴇᴇ ᴏɴʟʏ*
`}
global.antimenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ᴀɴᴛɪ ᴍᴇɴᴜッ*

┌ ◦ .antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
└ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
`}
global.ownermenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  ᴏᴡɴᴇʀ ᴍᴇɴᴜ ッ*
 
┌ ◦ .self *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .public *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .join *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bctext *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bcimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bcvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .creategc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .setexif *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .shutdown *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .autostickergc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .setppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .addvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .delvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .block add *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unblock del *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .leavegc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
`}

global.bugmenu = (prefix) => {
return`*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

 *—  ʙᴜɢ ᴍᴇɴᴜ ッ* 
 
┌ ◦ .sendbug *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .sendbugv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
`}

global.pushmenu = (prefix) => {
return`*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  ᴘᴜsʜ ᴍᴇɴᴜ ッ*  

┌ ◦ .pushcontact *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .pushcontactv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .savecontact *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .pushmember *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .idgc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
`}

global.bannedmenu = (prefix) => {
return`*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  ʙᴀɴɴᴇᴅ ᴍᴇɴᴜ ッ* 

┌ ◦ .bankyuu1 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bankyuu2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bankyuu3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .bankyuu4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .verify *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .logout *ᴏᴡɴᴇʀ ᴏɴʟʏ*
`}

global.unbannedmenu = (prefix) => {
return`*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  ᴜɴʙᴀɴɴᴇᴅ ᴍᴇɴᴜ ッ*

┌ ◦ .unbankyuu1 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu5 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
│ ◦ .unbankyuu6 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
└ ◦ .unbankyuu7 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
`}

global.othermenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ᴏᴛʜᴇʀ ᴍᴇɴᴜッ*

┌ ◦ .ping *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .menu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listpem *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .liststicker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listimage *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listvideo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listvn *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listbadword *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listpc *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .listgc *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .owner *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rentbot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .listrentbot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .donate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .friend *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .obfuscate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .styletext *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fliptext *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tts *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .say *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .togif *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toqr *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blown *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .deep *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .earrape *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fast *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fat *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nightcore *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .reverse *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .robot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .slow *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smooth *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .squirrel *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tovn *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toaudio *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tomp3 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tomp4*ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toimg *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .toonce *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sticker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .take *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .emoji *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .volume *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ebinary *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dbinary *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ssweb *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .quoted *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .runtime *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .sound1 - sound161 *ғʀᴇᴇ ᴏɴʟʏ*
`}

global.downloadmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ッ* 

┌ ◦ .tiktokvideo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tiktokaudio *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytsearch *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mediafire *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .play *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytmp3 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ytmp4 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .google *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .spotify *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gitclone *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .happymod *ғʀᴇᴇ ᴏɴʟʏ*
`}

global.groupmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ɢʀᴏᴜᴘ ᴍᴇɴᴜッ*

┌ ◦ .antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .grouplink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .ephemeral *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .delete *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setname *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .setdesc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .add *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .kick *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .promote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .demote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .hidetag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .tagall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .editinfo *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .opentime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .closetime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .resetlink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .autostickerpc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antlinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
│ ◦ .nsfw *ɢʀᴏᴜᴘ ᴏɴʟʏ*
└ ◦ .react *ɢʀᴏᴜᴘ ᴏɴʟʏ*
`}

global.funmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ғᴜɴ ᴍᴇɴᴜッ*

┌ ◦ .define *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .truth *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dare *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .couple *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .soulmate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .stupidcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .handsomecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .uncleancheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hotcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smartcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .greatcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .evilcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dogcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .coolcheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .waifucheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .awesomecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gaycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cutecheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lesbiancheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hornycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .prettycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lovelycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .uglycheck *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sexy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .kind *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .idiot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .handsome *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .beautiful *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cute *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .pretty *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lesbian *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .noob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bastard *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .foolish *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nerd *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .asshole *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gay *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .smart *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .stubble *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .doggo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .horny *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cunt *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wibu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .noobra *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nibba *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nibbi *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .comrade *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mumu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rascal *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .scumbag *ғʀᴇᴇ ᴏɴʟʏ* 
│ ◦ .nuts *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fagot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .scoundrel *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ditch *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dope *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gucci *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lit *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .dumbass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .crackhead *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mf *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .motherfucker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .sucker *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fuckboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .playboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .fuckgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .playgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .quotes *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .can *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .is *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .when *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .where *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .what *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .how *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rate *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .kill *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hug *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pat *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .lick *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .kiss *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bite *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .yeet *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bully *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bonk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wink *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .poke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nom *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .slap *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smile *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wave *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .awoo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blush *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smug *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .glomp *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .happy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .dance *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cringe *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cuddle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .highfive *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .shinobu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .handhold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .horny *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .checkme *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .confess *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .leave *ғʀᴇᴇ ᴏɴʟʏ*
`}

global.stalkermenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜッ*

┌ ◦ .igstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .ffstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .mlstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .npmstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .ghstalk *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
`}

global.aimenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*—  ᴀɪ ᴍᴇɴᴜ ッ* 
 
┌ ◦ .toanime *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .openai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .removebg *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .tohd *ғʀᴇᴇ ᴏɴʟʏ*
`}


global.randphotomenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏッ*

┌ ◦ .aesthetic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .coffee *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wikimedia *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .art *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bts *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .woof *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .meow *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .lizard *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cosplay *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .hacker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cyber *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gamewallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .islamic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .jennie *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .jiso *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .satanic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .justina *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cartoon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pentol *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cat *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .kpop *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .exo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .lisa *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .space *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .car *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .technology *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .bike *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .shortquote *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .antiwork *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hacking *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .boneka *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .rose *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ryujin *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ulzzangboy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ulzzanggirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wallml *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .wallphone *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .mountain *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .goose *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .profilepic *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .couplepic *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .programming *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pubg *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blackpink *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .randomboy *ғʀᴇᴇ ᴏɴʟʏ*  
│ ◦ .randomgirl *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hijab *ғʀᴇᴇ ᴏɴʟʏ*  
│ ◦ .chinese *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .indo *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .japanese *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .korean *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .malay *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .thai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .vietnamese *ғʀᴇᴇ ᴏɴʟʏ*
`}

global.randvideomenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ʀᴀɴᴅᴏᴍ ᴠɪᴅᴇᴏッ*

┌ ◦ .tiktokgirl *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoknukthy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokkayes *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokpanrika *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoknotnot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktokghea *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .tiktoksantuy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .tiktokbocil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
`}

global.textpromenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ᴛᴇxᴛᴘʀᴏ ᴍᴀᴋᴇʀッ*

┌ ◦ .candy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .christmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .3dchristmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .sparklechristmas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deepsea *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .scifi *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .rainbow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .waterpipe *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .spooky *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .pencil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .circuit *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .discovery *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .metalic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .fiction *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .demon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .transformer *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .berry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .thunder *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .magma *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .3dstone *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .neonlight *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .glitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .harrypotter *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .brokenglass *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .papercut *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .watercolor *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .multicolor *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .neondevil *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .underwater *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .graffitibike *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .snow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .cloud *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .honey *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .ice *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .fruitjuice *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .biscuit *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wood *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .chocolate *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .strawberry *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .matrix *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .blood *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .dropwater *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .toxic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .lava *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .rock *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .bloodglas *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .hallowen *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .darkgold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .joker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .wicker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .firework *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .skeleton *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .blackpink *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .sand *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .glue *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .1917 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
└ ◦ .leaves *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
`}

global.photooxymenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ᴘʜᴏᴛᴏᴏxʏ ᴍᴀᴋᴇʀッ*

┌ ◦ .shadow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .write *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .romantic *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .burnpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smoke *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .narutobanner *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .love *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .undergrass *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .doublelove *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
│ ◦ .coffecup *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .underwaterocean *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .smokyneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .starstext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rainboweffect *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .balloontext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .metalliceffect *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .embroiderytext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flamingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .stonetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .writeart *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .summertext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .wolfmetaltext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .nature3dtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .rosestext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .naturetypography *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .quotesunder *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .shinetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
`}

global.ephoto360menu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ᴇᴘʜᴏᴛᴏ360 ᴍᴀᴋᴇʀッ*

┌ ◦ .glitchtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .writetext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .advancedglow *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .typographytext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .pixelglitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .neonglitch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flagtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .flag3dtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .deletingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blackpinkstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .glowingtext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .underwatertext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .logomaker *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .cartoonstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .papercutstyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .watercolortext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .effectclouds *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .blackpinklogo *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .gradienttext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .summerbeach *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .luxurygold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .multicoloredneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .sandsummer *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .galaxywallpaper *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .1917style *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .makingneon *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .royaltext *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .freecreate *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
│ ◦ .galaxystyle *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
└ ◦ .lighteffects *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
`}

global.nsfwmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ ᴏɴʟʏ* = For Owner
*ɢʀᴏᴜᴘ ᴏɴʟʏ* = For Group
*ғʀᴇᴇ ᴏɴʟʏ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* = For Premium User

*— ᴀɴɪᴍᴇ ɴsғᴡッ*

┌ ◦ .hentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gifhentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gifblowjob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hentaivid *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .hneko *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nwaifu *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .animespank *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .trap *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gasm *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ahegao *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ass *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .bdsm *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .blowjob *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cuckold *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .cum *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .milf *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .eba *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .ero *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .femdom *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .foot *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .gangbang *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .glasses *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .jahy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .masturbation *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .manga *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .neko-hentai *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .neko-hentai2 *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .nsfwloli *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .orgy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .panties *ғʀᴇᴇ ᴏɴʟʏ* 
│ ◦ .pussy *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .tentacles *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .thights *ғʀᴇᴇ ᴏɴʟʏ*
│ ◦ .yuri *ғʀᴇᴇ ᴏɴʟʏ*
└ ◦ .zettai *ғʀᴇᴇ ᴏɴʟʏ*
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})