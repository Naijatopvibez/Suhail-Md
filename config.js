const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349116730300";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_48_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDczLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQa2gxMWRvM1J0TDRyWHI1a3dzcitkeGp3Y1pVUllKOGorZWpOTjlPdWk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVaTAzZ2s5dVQ0LXNWekNtVVp2X253XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3ODE3Zjk0LTBmNjYtNGM1Zi1iODg5LTZjNzdjOTJlODg1M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICA5NixcbiAgICAgIDM5LFxuICAgICAgMTAwLFxuICAgICAgMTg3LFxuICAgICAgMjUsXG4gICAgICAyMTMsXG4gICAgICA1OSxcbiAgICAgIDE1NSxcbiAgICAgIDUsXG4gICAgICAyNDMsXG4gICAgICAyMTksXG4gICAgICAyMDMsXG4gICAgICAxMTksXG4gICAgICAxMTUsXG4gICAgICAxNjIsXG4gICAgICAxMjEsXG4gICAgICAyNDMsXG4gICAgICAxOTgsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDE4MixcbiAgICAgIDEyNixcbiAgICAgIDEyNSxcbiAgICAgIDE2MSxcbiAgICAgIDY1LFxuICAgICAgMjM2LFxuICAgICAgNDgsXG4gICAgICAzNixcbiAgICAgIDEzLFxuICAgICAgMTY3LFxuICAgICAgMTI1LFxuICAgICAgNzQsXG4gICAgICAyMjIsXG4gICAgICAyNTIsXG4gICAgICAxMDAsXG4gICAgICAyNDIsXG4gICAgICA2NixcbiAgICAgIDE2MSxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIODJETlMyN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNjczMDMwMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTkFJSkFUT1BWSUJFWlwiLFxuICAgIFwibGlkXCI6IFwiMTIwNjYzMTk3MDk4MTAyOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHJMdCs4RkVJZWFqclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaRnBEenN2cVQyVXMrQWJoWDZVN1ZXTU5uTGtocUwxU2xYOUxvR3dhUjF3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjQ4YjRhMmRGZmoyY2FjUFZOWEkvcThXOW0rMldQQjlyYWZTOENVRHM3N2x3R0F0a1J2UjFVVHEzaXU2ZGI2MTJUMDI1c3pQY21PVVlnZnNtZVRuSEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdyUExlY3N2YkU5elZJVm1XUnZVazhKOWRoY2lrelo3ZnI2eXhGaEV5ZzhPMzhpaGZPWnUxVVRzbWp5T0JKOXcxaW5ZV21OazkwQmg4UFNESTY1TWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTY3MzAzMDA6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5OTQ1MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPelVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU96VS5qc29uIjogIntcImtleURhdGFcIjpcIkhCNzMybDNjbVByQ25FQjE5ZzFFNG1tazJCMjNheDcwVnRnNWtJTU1HKzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU3NTg3MTkyOCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
