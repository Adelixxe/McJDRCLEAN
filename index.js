const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");

const url = 'https://youtu.be/BEm0AjTbsac';

const botOptions = { seek: 0, volume: 0.2 };

var cli = new Discord.Client({autoReconnect:true});

var maximum = 0;

var taverne = [
    /*01*/     'https://www.youtube.com/watch?v=5QuZVNwQR4A',
    /*02*/     'https://www.youtube.com/watch?v=Q3QlnmEL44U',
    /*03*/     'https://www.youtube.com/watch?v=TuWLDUqDPoc',
    /*03*/     'https://youtu.be/AS9K9yLatj8',
    /*04*/     'https://www.youtube.com/watch?v=Dq0KPexbTak',
    /*05*/     'https://www.youtube.com/watch?v=i8GIVtCNlCk',
    /*05*/     'https://www.youtube.com/watch?v=eGPuSQN2t3o',
    /*06*/     'https://youtu.be/U5u9glfqDsc',
    /*07*/     'https://youtu.be/4VAeBWeI9JE',
    /*08*/     'https://youtu.be/2kHmb7ZVh6s',
    /*09*/     'https://youtu.be/2s5BjJkPfos',
    /*10*/     'https://youtu.be/WXxy3Y8daks'

];

var combat = [
    /*01*/     'https://www.youtube.com/watch?v=NsiXbUOPvog',
    /*02*/     'https://www.youtube.com/watch?v=AWBZDYiqXKE',
    /*03*/     'https://youtu.be/VDaDgZ7XngA',
    /*04*/     'https://www.youtube.com/watch?v=aDYy52GHWk4',
    /*05*/     'https://www.youtube.com/watch?v=82xrQD920oM',
    /*06*/     'https://www.youtube.com/watch?v=GRiQ_92li1I',
    /*07*/     'https://www.youtube.com/watch?v=RkRsjDCO1CI',
    /*08*/     'https://youtu.be/qXVmZuPOzU0',
    /*09*/     'https://www.youtube.com/watch?v=0aL-vX7xYrE',
    /*10*/     'https://youtu.be/9d7IDfeZOSI',
];

var aventure = [
    /*01*/     'https://www.youtube.com/watch?v=28RlnQOKjLE',
    /*02*/     'https://www.youtube.com/watch?v=LML6SoNE7xE', 
    /*03*/     'https://youtu.be/-yOZEiHLuVU', 
    /*04*/     'https://youtu.be/jezXjW1-Wd4',
    /*05*/     'https://youtu.be/--RU438cUM0',
    /*06*/     'https://youtu.be/EK3q3Jb3TCQ',
    /*07*/     'https://youtu.be/DS5pHj436Xc',
    /*08*/     'https://www.youtube.com/watch?v=1eF2gOBC848',
    /*09*/     'https://youtu.be/INaM813ohL8',
    /*10*/     'https://www.youtube.com/watch?v=9SbT71beG0Q',


];

var camp = [
    /*01*/     'https://youtu.be/lvB_nsKXew0',
    /*02*/     'https://youtu.be/vU8eL2CjzHw',
    /*03*/     'https://www.youtube.com/watch?v=vqGiiGiVz1o',
    /*04*/     'https://youtu.be/U62YkXZNs8M',
    /*05*/     'https://youtu.be/9PJtyCN-AxE',
    /*06*/     'https://youtu.be/6loWrABr8gA',
    /*07*/     'https://youtu.be/59Ri26PIOLs',
    /*08*/     'https://youtu.be/E8mGWYRcmec',
    /*09*/     'https://youtu.be/BV9Z7LWspSk',
    /*10*/     'https://youtu.be/6GBZgzi1nYY',     

];

var nuit = [
    /*01*/     'https://youtu.be/mmZGrvAvPZM',  
    /*02*/     'https://youtu.be/WRAlNeOHI-g',
    /*03*/     'https://www.youtube.com/watch?v=INSHJHOiS-Y',
    /*04*/     'https://www.youtube.com/watch?v=J5ssfLmMJYQ',
    /*05*/     'https://www.youtube.com/watch?v=qC9Ri2hZsos',
    /*06*/     'https://www.youtube.com/watch?v=sKZQEH6SFho',
    /*07*/     'https://www.youtube.com/watch?v=EjTX4TzRaYg',
    /*09*/     'https://www.youtube.com/watch?v=PrSnBKAGI1A',
    /*10*/     'https://youtu.be/WyinQVDvWKE'
];

var ville = [
    /*01*/     'https://youtu.be/s5sTI_zBg40',
    /*02*/     'https://www.youtube.com/watch?v=43JEcN25ZRA',
    /*03*/     'https://www.youtube.com/watch?v=MckCkMPJVpw',
    /*04*/     'https://www.youtube.com/watch?v=Eh68Fz2lEas',
    /*05*/     'https://www.youtube.com/watch?v=E57Iu_XfC2c',
    /*06*/     'https://youtu.be/mcCUByrQzrc',
    /*07*/     'https://youtu.be/noFyrf36RL0',
    /*08*/     'https://youtu.be/NhGgNcBLqNw',
    /*09*/     'https://youtu.be/C2jtvr0W-Ls',
    /*10*/     'https://youtu.be/jDZgFn_7Nvs'


];

var triste = [
    /*01*/     'https://youtu.be/BEm0AjTbsac',
    /*02*/     'https://www.youtube.com/watch?v=Ipae_XBfyso',
    /*03*/     'https://youtu.be/vyn8gAYtNu4',
    /*04*/     'https://www.youtube.com/watch?v=eTa1jHk1Lxc',
    /*05*/     'https://www.youtube.com/watch?v=LQKspH34BkM',
    /*06*/     'https://youtu.be/nmMaZXAahCs',
    /*07*/     'https://youtu.be/nmMaZXAahCs',
    /*08*/     'https://youtu.be/5A8Iarf8lSY',
    /*09*/     'https://youtu.be/TRXVO1NuGVU',
    /*10*/     'https://youtu.be/xNhctnU8YVw',
];

bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {
    console.log("Le JDR peut commencer! ")
});

bot.on('ready', () => {
    bot.user.setPresence({game: {name: "Jeu de Rôle @Adelixxe", type: 0}});
});





bot.on('message', message => {
    var prefix = '!';
    var voiceChannel = message.member.voiceChannel;
    if (message.content === "!taverne") {
        console.log('Got a song request!');
        voiceChannel.join()
        .then(connection => {
            music()
        });
    
        function music() {
            const stream = message.guild.voiceConnection.playStream(ytdl("https://www.youtube.com/watch?v=5QuZVNwQR4A", { filter: 'audioonly' }), botOptions)
            .once('end', () => music());
    };
        };

    if (message.content.startsWith(`${prefix}jdes`)) {
        message.channel.send("Quel type de dès veux tu jeter ? (2,3,4,5,6,8,10,12,16,20,24,30,100)")
        .then(() => {
            message.channel.awaitMessages(() => true, {
                max: 1,
                time: 30000,
                errors: ['time'],
            })
            .then((collected) => {
                maximum = collected.first().content
                if (maximum === "2" || maximum === "5" || maximum === "3" || maximum === "4" || maximum ==="6" || maximum ==="8" || maximum ==="10" || 
                maximum ==="12" || maximum ==="16" || maximum ==="2O" || maximum ==="24" || maximum ==="30" ||
                maximum ==="100") {
                    i = Math.floor((Math.random() * maximum) + 1);
                    console.log(i); 
                    var embed = new Discord.RichEmbed()               
                        .setTitle("Lancé de dés !")
                        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                        .setColor("#00AE86")
                        .setDescription("Le stress est présent, vas tu y arriver ou échouer ?")
                        .setImage("https://s2.gifyu.com/images/giphyef772b3a51d10df7.gif")
                        .setFooter("Bot by @Adelixxe")
                        .setTimestamp()
                        .addField('**Tu as fait**',`${i}`);

                    message.channel.send({embed});
                        
                    } else {
                        message.channel.send("Veuillez choisir un dé proposé au-dessus!")}
                    })
                .catch(() => {
                    message.channel.send("Il y a eu un petit problème :/");
          });;
            
            })
            .catch(() => {
                message.channel.send("Trop tard.");
      });
        
        }

    if (message.content.startsWith(`${prefix}jhelp`)) {   
        var embed = new Discord.RichEmbed()               
        .setTitle("Liste des commandes :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#00AE86")
        .setDescription("Tu trouveras si dessous la liste complète des commandes du bot 😉")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("**!jdes**", "Permet d'effectuer un lancé un dé de 3 à 100 faces")
        .addField("**!jhelp**", "Permet de voir la liste des commandes")
        .addField("**!info**", "Permet de voir les informations sur ton personnage");

    message.channel.send({embed});


    };         
    
    if (message.content.startsWith(`${prefix}info`) && message.author.id === '294148055228350464' ){
        console.log("ID Reconnu THOMAS");
        var embed = new Discord.RichEmbed()
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#f58e00")
        .setDescription("Apprenez en plus sur le nain Kan'hibal H'korpth ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Kan'hibal H'korpth")
        .addField("Race:", "Nain")
        .addField("Classe:", "Barde")
        .addField("Spécificité:", "Nyctalopie, aime boire, fait parti de la basse classe nain")
        .addField("Capacité:", "Berceuse naine")
        .addField("Lancé de dés:", "3/3")
        .addField("Inventaire:", "Mandoline magique (héritage familial), vêtement de spectacle(avec un chapeau à plume), dague, besace, moyenne somme d'argent")
        .addField("Santé:", "Blessé");
        message.channel.send({embed});
    };

    if (message.content.startsWith(`${prefix}info`) && message.author.id === '209656163736879105') {
        console.log("ID Reconnu ALEXANDRE");
        var embed = new Discord.RichEmbed()        
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#ff00ab")
        .setDescription("Apprenez en plus sur l'enfant Ulrick LeSournois ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Ulrick LeSournois")  
        .addField("Race:", "Humain") 
        .addField("Classe:", "Voleur")
        .addField("Spécificité:", "Enfant")
        .addField("Capacité:","Sens du danger")
        .addField("Lancé de dés:","4/2")
        .addField("Inventaire:","Dague, vêtements de tissu, outil de crochetage fait main, besace, très peu d'argent")
        .addField("Santé:", "Blessé");
        message.channel.send({embed});   
    };

    if (message.content.startsWith(`${prefix}info`) && message.author.id === '264005489413718027') {
        console.log("ID Reconnu PAUL");
        var embed = new Discord.RichEmbed()        
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#8b00d3")
        .setDescription("Apprenez en plus sur le guerrier Ned Ricwulf ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Ned Ricwulf")  
        .addField("Race:", "Humain") 
        .addField("Classe:", "Guerrier")
        .addField("Spécificité:", "Impulsif, air menaçant")
        .addField("Capacité:", "Soif de sang")
        .addField("Lancé de dés:", "3/3")
        .addField("Inventaire:", "Armure lourde, besace, peu d'argent, épée longue de glace")
        .addField("Santé:", "Bonne santé");
        message.channel.send({embed});   
    };   

    if (message.content.startsWith(`${prefix}info`) && message.author.id === '149503854126432256') {
        console.log("ID Reconnu ROMAIN");
        var embed = new Discord.RichEmbed()        
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#235860")
        .setDescription("Apprenez en plus sur le nécromancien Edward Amadeus Yogthar ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Edward Amadeus Yogthar")  
        .addField("Race:", "Humain") 
        .addField("Classe:", "Nécromancien")
        .addField("Spécificité:", "Scientifique borner, antireligieux")
        .addField("Capacité:","Résurrection ")
        .addField("Lancé de dés:","3/3")
        .addField("Inventaire:","Sceptre magique, robe noir, materiel d'alchimie, besace, beaucoup d'argent")
        .addField("Santé:", "Bonne santé");
        message.channel.send({embed});   
    };    

    if (message.content.startsWith(`${prefix}info`) && message.author.id === '283578951874510849') {
        console.log("ID Reconnu NOA");
        var embed = new Discord.RichEmbed()        
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#0cc4d8")
        .setDescription("Apprenez en plus sur l'orc Nahrgal Shazug ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Nahrgal Shazug")  
        .addField("Race:", "Orc") 
        .addField("Classe:", "Chaman")
        .addField("Spécificité:", "Bonté naturel, plutôt costaud, est sensible à propos de son chien mort")
        .addField("Capacité:","Graine principale: arc électrique, alchimie de base")
        .addField("Lancé de dés:","3/3")
        .addField("Inventaire:","Bourse à graine(10, capacité max:20), faucille, tenue sans manche et sarouel, une potion de soin, sac à dos de bonne taille, très peu d'argent, boussole, espadon")
        .addField("Santé:", "Bonne santé");
        message.channel.send({embed});   
    };  
        
})
bot.login(process.env.BOT_TOKEN);