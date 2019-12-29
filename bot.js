const Discord = require('discord.js') , shadow = new Discord.Client()
, block = new Set()
, ran = ["Come Here : ",,"Come Here :"]
, msg = 'https://discord.gg/7xUASzg'
, token = "NjYwODkxOTg0ODI2NzI4NDU5.Xgjmng.-DeWxbOYr9oSgkugD4r6JrHr7Aw";
shadow.on('ready', () => {
  console.log(`by shadow Logged in as ${shadow.user.tag}!`);
});
shadow.on("guildMemberRemove", member => {
  let ss = "1";
  if(block.has(ss)) return;  
  block.add(ss);
        let ee = ran[Math.floor(Math.random() * ran.length)];
  member.createDM().then(function (channel) {
  return  setTimeout(function() {
    channel.send(ee + `\n` + msg)
  }, 1500);
}).catch(console.error)
setTimeout(function() {
   block.delete(ss);
  }, 6500);
});
shadow.on("guildMemberAdd", member => {
  let ss = "1";
  if(block.has(ss)) return;  
  block.add(ss);
        let ee = ran[Math.floor(Math.random() * ran.length)];
  member.createDM().then(function (channel) {
  return  setTimeout(function() {
    channel.send(ee + `\n` + msg)
  }, 1500);
}).catch(console.error)
setTimeout(function() {
   block.delete(ss);
  }, 6500);
});
client.login(process.env.BOT_TOKEN);
