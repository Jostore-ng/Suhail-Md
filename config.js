const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_20_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM4LFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVUdHlhNk1DVHczeHVGc0FoM3lUMnR3UkxUUXdiOVFVQ1Z1WU1FNEg3MjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJxazVYMlNFU2lPaHpKTi02N0hGREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGNlNmIyNjUtMmFlNS00MDRhLTg3NzktNjViY2VjNzA2NzBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDIyNyxcbiAgICAgIDIxNixcbiAgICAgIDI0OCxcbiAgICAgIDUyLFxuICAgICAgOCxcbiAgICAgIDEzLFxuICAgICAgMTI1LFxuICAgICAgMTYwLFxuICAgICAgMjA5LFxuICAgICAgMTY3LFxuICAgICAgOTksXG4gICAgICAyMDYsXG4gICAgICAyMTQsXG4gICAgICAyMzIsXG4gICAgICA0NyxcbiAgICAgIDIzMCxcbiAgICAgIDE4NCxcbiAgICAgIDIzNyxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDc0LFxuICAgICAgMzgsXG4gICAgICA4MixcbiAgICAgIDEwNSxcbiAgICAgIDI0OSxcbiAgICAgIDIyNyxcbiAgICAgIDEzNCxcbiAgICAgIDIyNixcbiAgICAgIDAsXG4gICAgICAyNDIsXG4gICAgICAzMixcbiAgICAgIDIwOSxcbiAgICAgIDIyLFxuICAgICAgODUsXG4gICAgICAxNzIsXG4gICAgICAxMTEsXG4gICAgICAyMDIsXG4gICAgICAxMTksXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0WjRTTTI5TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNDEyOTQ1ODo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM0MDg5ODg1OTQyMzc6NDlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSk9TRVBIIFRFTEVDT01cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS2U4OHNHRUtPMmlMRUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5kSnZWNzlGeEhGZFFtSXNud3R6c2FJSm1iSU1XakhJUGVEZlNVWDVJZ2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic2ZpRG05QjVNZlN5SC9zeU04Z3Q3WXRtMzE1b1k4ZkdGS2hPYkI5d01VZVB4Zi9QMXBMTUFSK1Z0MFBKVXdQL3V3V3hxWE5GcWtoWEJyeTZVY1VyQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNlJBRTcrMGZVcnFFYjNHQWE4SzRXYlJ3R3F3REdkSUc0VDExcUtwNk5VWHlvcmpkVmEzR2JQQlJZWUxIWDRTTmhZNWI1YkZJaXdmQnlBVUIybnNRQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNDEyOTQ1ODo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzEzNTExMjA5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" ;


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
