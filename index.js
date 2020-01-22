const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    
    if(msg.author.bot) return; //Bot messages will be ignored

    if (msg.content.slice(0, 2) == '//') {
        var text = msg.content
        text = text.substring(2);
        text = text.replace(/ /g, "");      //Removes all spaces ("Hello there") by replacing them with nothing ("Hellothere")
        text = text.toUpperCase();      //Makes all text upper case("Hellothere" -> "HELLOTHERE")
        text = text.split('').join(" ");        //Adds spaces between all characters ("HELLO THERE" -> "H E L L O T H E R E")
        text = ("// " + text + " // L O V E");  //Adds the "// " and " // L O V E" at the end ("H E L L O T H E R E" -> "// H E L L O T H E R E // L O V E")

        msg.reply(text)
    }

});

client.login('[Insert Client Token Here]');     //Insert the Client Token (DO NOT SHARE IT)