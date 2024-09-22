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
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349016683047";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_12_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDksXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwickZpR3NNRmNGTVRNR1Z3QW1FUXIxclk0RmRNcy9nODRJbDc1eFVsK0g4ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0pUMWszaVFSSC02dGp5TlhlSVpTQVwiLFxuICBcInBob25lSWRcIjogXCI5YzQyZWZhMC1jMDBjLTRhOWQtOGRmMi1jMmE0NGJlN2RiNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMTU3LFxuICAgICAgMTA0LFxuICAgICAgMTMxLFxuICAgICAgMzQsXG4gICAgICA2NSxcbiAgICAgIDE4NyxcbiAgICAgIDk1LFxuICAgICAgMTA3LFxuICAgICAgOTUsXG4gICAgICAxNTYsXG4gICAgICA1MyxcbiAgICAgIDEzNSxcbiAgICAgIDk2LFxuICAgICAgMjQ3LFxuICAgICAgMTkyLFxuICAgICAgMTU0LFxuICAgICAgMTIxLFxuICAgICAgODEsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxMDcsXG4gICAgICAxMTksXG4gICAgICAyNTAsXG4gICAgICA5MSxcbiAgICAgIDExMSxcbiAgICAgIDIwNyxcbiAgICAgIDE2MixcbiAgICAgIDEwNixcbiAgICAgIDI0LFxuICAgICAgMjksXG4gICAgICA3NSxcbiAgICAgIDEwNCxcbiAgICAgIDIxOSxcbiAgICAgIDkzLFxuICAgICAgMjMzLFxuICAgICAgMTcsXG4gICAgICAxMjQsXG4gICAgICA4MyxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2UjhCWFkxMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNjY4MzA0Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUGllcyBBbmQgRnJpZXNcIixcbiAgICBcImxpZFwiOiBcIjI0NjMwNzkxODczMzM4OTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEMjQ4d0ZFT3o4dTdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR1A4aTF1cnYyOWpVTEp0eDN1N05rYThFRHJuZFpyQjBDTVBVVUNqOHFuWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsZmZRelhKUlFPazkwckRrMUNtKytLL1pGM0pZVk5TUXhQLzZYSUlyMVBhSkdLY0VCYWdUL3h1NmhmQXFFOFpGRGZGbzBtOGtTeHd1bjcrNG9xaWZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5U1gvWXh0WEI4RzlHeWtrL3lVWGx3NlA4SnFhblJwMTRsYXZOY0F4UVVUZGlsSERUNGVIWDdaSDFvTzZ6V2h0TzZETWVOcnRzY3FmZWtpbjJHcXBoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE2NjgzMDQ3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjkzODczNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
