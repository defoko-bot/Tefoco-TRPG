const Discord = require("discord.js");
const bot = new Discord.Client();
const cheerio = require("cheerio")
const request = require("request") 

function image(message) {
    const tags = ['anal', 'futa', '1girl', '1boy', 'cum', 'furry', 'oral', 'all']
    let search = tags[Math.floor(Math.random() * tags.length)]
    var options = {
        url: "https://rule34.xxx/index.php?page=post&s=list&tags=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        var pick = urls[Math.floor(Math.random() * urls.length)];
        console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
        message.channel.send(pick);
    });


bot.on('ready', () => {
    console.log(`Bot foi iniciado com sucesso`);
    bot.user.setActivity("vivendo a vida nas boas");
});
 
bot.on('message', (message) => {
    if (message.channel.type === "dm") return;
    let comando = message.content.split(" ");
    
    switch('comando'){
      case '!!bomb':
      image()
      break;
    } 
});
bot.login(process.env.BOT_TOKEN);

//saia caraio
//-padero
