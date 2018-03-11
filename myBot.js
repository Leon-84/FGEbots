const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
let comps = [];

var resistance_team = {
    Name:"Resistance", 
    Lead:"Finn (z), Gear X", 
    Unit1: "Resistance Trooper, Gear IX", 
    Unit2: "Poe Dameron, Gear X",
    Unit3: "Resistance Pilot, Gear IX",
    Unit4: "BB8, Gear IX" 
                    }

var cls_team = {
    Name:"Luke's rebel buddies", 
    Lead:"Commander Luke Skywalker (z), Gear X", 
    Unit1: "R2-D2, Gear X", 
    Unit2: "Han Solo, Gear X",
    Unit3: "Baze Malbus, Gear IX",
    Unit4: "Chirrut Imwe, Gear IX" 

}

comps.push(resistance_team, cls_team);


function addTeam(args){
    var team = {
        Name: args[0],
        Lead: args[1],
        Unit1: args[2],
        Unit2: args[3],
        Unit3: args[4],
        Unit4: args[5]
    }
    comps.push(team);
}


client.on("ready", () => {
  console.log("I am ready!");
  
});

client.on("message", (message) => {
    let zeta_list = new Array("Finn, Balanced Tactics", "CLS, It Binds All Things", "Jyn, Fierce Determination", "Kanan, Total Defense");
    
    if(message.content.startsWith("?addLSteam")) {
        var array = message.content.split(";");
        array.shift();
        addTeam(array);
        message.channel.send("Thank you, your team has been added to the LS TB team guide");
    }
    
    //all master commands
    let tb_master = message.guild.roles.find("name", "tb_master");
    
    if(message.member.roles.has(tb_master.id)) {
        
        //zetas required

        if(message.content.includes("?LSzeta")) {
            zeta_list.forEach(element => {
                message.channel.send(element);    
            });
            
        }


        // team comps
        if(message.content.startsWith("?LSteams")) {
            
            for (var x = 0; x < comps.length; x++) {
                message.channel.send("Team name: " + comps[x].Name);
                message.channel.send("Leader: " + comps[x].Lead);
                message.channel.send("Unit 1: " + comps[x].Unit1);
                message.channel.send("Unit 2: " + comps[x].Unit2);
                message.channel.send("Unit 3: " + comps[x].Unit3);
                message.channel.send("Unit 4: " + comps[x].Unit4);
                message.channel.send("--------------------------------");
            }



        }
    }



    //all apprentice commands
    let tb_apprentice = message.guild.roles.find("name", "tb_apprentice");

    if(message.member.roles.has(tb_apprentice.id)) {
        
        //zetas required

        if(message.content.includes("zeta")) {
            message.channel.send(zeta_list);
        }
    }

    //if (!message.content.startsWith(prefix) || message.author.bot)

    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

client.login("NDIyMDM0OTQyNTg3ODMwMjky.DYV9Yw.GE9246p_KD_xCzpqWiUCvZZ1cJA");