const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "postgres://koyeb-adm:kR0OM6mVATGX@ep-young-hall-a2rojz4x.eu-central-1.pg.koyeb.app/koyebdb"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://koyeb-adm:kR0OM6mVATGX@ep-young-hall-a2rojz4x.eu-central-1.pg.koyeb.app/koyebdb"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_35_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxODksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1KaUNhaWd1SzZXRnAvTUtTOURUQnY3Nmxmc05mY2FiSVNrUnNUajZWejA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxNzM1MjEzOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0NGNEJCREM2QUQyRDRDQzRGQjVBMTlBODRERDJFN0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjQ1MzMzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxNzM1MjEzOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTA1QTFGRkNGQjI4NjFFQTY5MkQzNUFBRURGMEI5NzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjQ1MzMzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxNzM1MjEzOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUI2OUYyQzZGRkU3NjY2RTlCMTE4NUU0NDZGRjY5RjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjQ1MzM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjAtbTNzdER6VG5lR1doRExLMDk4dmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGQxZWUwMDEtNjYzZi00OWIwLThiMTktM2U1YTM4MzQ0ODExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDIxLFxuICAgICAgMTczLFxuICAgICAgODAsXG4gICAgICAyMjAsXG4gICAgICAxMzIsXG4gICAgICAzOCxcbiAgICAgIDEwOSxcbiAgICAgIDEwLFxuICAgICAgMjI0LFxuICAgICAgMjM0LFxuICAgICAgMTkxLFxuICAgICAgMTY1LFxuICAgICAgMTI2LFxuICAgICAgNDUsXG4gICAgICAxMTYsXG4gICAgICAxNDMsXG4gICAgICA0MSxcbiAgICAgIDIyMyxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxNDksXG4gICAgICAxMCxcbiAgICAgIDE0NSxcbiAgICAgIDY3LFxuICAgICAgMTMxLFxuICAgICAgMTI4LFxuICAgICAgMTA0LFxuICAgICAgMjE0LFxuICAgICAgNTcsXG4gICAgICAxNTMsXG4gICAgICAyMjIsXG4gICAgICAyLFxuICAgICAgMjUsXG4gICAgICAxNjMsXG4gICAgICA2MixcbiAgICAgIDM3LFxuICAgICAgNjEsXG4gICAgICA1LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5ISEVKQTIyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE3MzUyMTM4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCT1RJQ1wiLFxuICAgIFwibGlkXCI6IFwiMTU3MjczNTY1NDM4MDAwOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1hjcXVRRUVNLzJ0YlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkdFRxR2FLUjM2NHRVeHIyZWljVkc2SkNKaCtMR01uMVJibzd1djAyNm13PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjc0aHh2ajNtRjhXUldDbmNYK1hEUGZrcCtMMnRJVlJONnlWZWd3UGNhbDJzV3pxdzVaRzZCY3ZqQVV5NUI4VThmSHNUY0lPQmhXazduVVJXQVRmQkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRkY3NEaTdVL0FyajIvMWlaSVc1WmxYY2lxVFA2MkJXTzdSR3FVZDdGZ01KakFnYUlLMCtxRHEydjF2U3RIb1MzZE00NlBoNVZIV2lWa1lnTmtUL2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTczNTIxMzg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NDUzMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNFNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA0Uy5qc29uIjogIntcImtleURhdGFcIjpcIm5ob0xzcDR5clhvSXRMT0gwaWdtWWZvZE1wK29nN0VmcDRGdysxTTZNZFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4NDE1Njk2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjQ0MDA3NjQ5XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©EROMOSELE" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "EROMOSELE-MD",
  packname: process.env.PACK_NAME || "♥️EROMOSELE",
  botname : process.env.BOT_NAME  || "ERO BOT",
  ownername:process.env.OWNER_NAME|| "EROMOSELE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
