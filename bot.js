bot.commands = new Discord.Collection();
 
fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);
 
    let arquivojs = files.filter(f => f.split(".").pop() === "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`Comando ${f} inicou com sucesso`)
        bot.commands.set(props.help.name, props);
    });
});
 
bot.on('ready', () => {
    console.log(`Bot foi iniciado com sucesso`);
    bot.user.setActivity("musicas no Spotify", {type: "LISTENING"});
});
 
bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
 
    let prefix = "!!";
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
 
    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if (arquivocmd) arquivocmd.run(bot, message, args);
});
 
bot.login(process.env.BOT_TOKEN);

//saia caraio
//-padero
