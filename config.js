const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "https://www.mongodb.com/cloud/atlas/register"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923092742014" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923092742014";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_02_04_13_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidVBZVEtuZnNRV1R5d2FKYTlqa1VhaFdoWnl6YTVNWUwyY2ZyYlVWUHFGYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlFrVkIwaUZqa0ZHRytvenRJNy91SjBla3pPWTMvbjdpRUp5UFN0bEJoMEU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0k0M2lJeldoY0pwU0c4RENRckxoVi93R09JMDRsWmZiQStYeGUyYlBWZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlk4NEk1aXZhaWxtTHMxR0tLT2JWYmtVdFlxYVIxZjFKQVY0WEo5cEpoaGs9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUcza2x4MldLYVk4ZWxoZ1dpS1Qycm9ZQVg0cEVjQ2pZWllGZDFMc1kyYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhGQkVLZjJ1cXd4ZWl3VVZFQ3hHR1poQVJ2Zm8yWnI4OS8rZ2UxVUlaVUE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnRGVTMEVjYUlQSEU3OUxUSEFQcFk5YmxOUmEyVkt0NjFUSk44ekxDdlh3PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWVl5cGJGQ2FXTzZmMzNXZjE3a1lYbFZpSnVYYWVFRTVuT2Zicmh5SmNUdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ6YVdQcWpsYU1RQWl5WldBSUxWVi9LTEM2L0xqcFRudE9wbUZ1QVJ0TEZHRFFTUUNCaTFsOTVOS1IrTzhIclpPclNFdzdLTUxkTG9zaEFFdm9UcUpnZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTEyLFwiYWR2U2VjcmV0S2V5XCI6XCJkaXlTNXNHRjJzNlBoQXQ4L2N0bXJQZ2hjc3M5dVhkYkNZaXYrSWt4YmcwPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMDkyNzQyMDE0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkRFMTE0MkZGQjBCQUQwMUJFREZFNUNGMjhBOTNBQUQwXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI5NzczMjB9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMDkyNzQyMDE0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkNDQzUyMDlFNUIxODZCMUE1NUUwQjFDNkIwN0VDNEZDXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI5NzczMjB9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJ4bi14aHNLM1FkZWsxaW5CazF3MVNBXCIsXCJwaG9uZUlkXCI6XCJkYjk1MDNiMi02YWU2LTRkNWUtYTgzYS0yODhjZDRjYTBjNzZcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInRLQ2VpZG5PbmI2L1dRcEsrOFdhL21TdzZGOD1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4Tk1xYmUwemRUcExTZ1JqWkQyWEI3dXQ5TU09XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiM1JYOEFOUzNcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzA5Mjc0MjAxNDoxOUBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyMzgyMDM0MTYxMjYxMToxOUBsaWRcIixcIm5hbWVcIjpcIvCfkpXwn5KV8J2Rq/CdkoLwnZKT8J2SjCDwnZGz8J2SivCdkofwnZKG8J+SlfCfkpVcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1AybnRzQURFS0hyNTdBR0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJlczQ4cmpWQlRYMmdRMVF2MW5FdGhRbGVWalBjQkt0QThyNmNaVzVhTEVJPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwicGFxRGRBMjh3elpyaVl2WHJ5ek5NZ1BiWldLSGxGV2w1OTJ4MEh4RkRzdVk4ajNKVURnNmxpb09NOEJxMXMxMlRMMGhmVkQ0R1REbUM0NkM3ZUY0QVE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJ5OWFEamp3djhIS0UzdDdxMVJrdER2ZkRHQURFdGh5bHpiQnlqTXZ1WTVNbllRbnZ0ZC9HNkRRMUMzMmtpM2lWVEE3Z3RCdEVBK1dkdk05bDBIR3hnZz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTIzMDkyNzQyMDE0OjE5QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlhyT1BLNDFRVTE5b0VOVUw5WnhMWVVKWGxZejNBU3JRUEsrbkdWdVdpeENcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyOTc3MzE2LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUpkVlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpkVi5qc29uIjogIntcImtleURhdGFcIjpcImxILzA0ZkJkOXI4WXUvaVlBMDc5WGpBOUtpY0l5Wm9kQlk3SDVabFdoYzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTQwNDEzOTQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SAQAB ALI",
  packname: process.env.PACK_NAME || "💔",
  botname : process.env.BOT_NAME  || "SAQAB ALI",
  ownername:process.env.OWNER_NAME|| "It'x SAQAB ALI",


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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
