require('dotenv').config();
 // import axios from "axios";
const twitchApi = require("tmi.js");
const axios = require('axios').default;
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET


const config = {

    options:{debug:true, messageLevel:"info"},
    connection:{
        reconnect:true,
        secure:true
    },
    identity:{
        username:"Kittyfactz",
        password:"oauth:ssjqjxe3s7ppfhlzczdjz25b4qk8z7"
    },
    channels:[
        "gameswithchaos" ,
    "showmeurkittiesplz"
],
        API_KEY:API_KEY ,
        API_SECRET:API_SECRET
    
};
const chatBot = new twitchApi.client(config);


function isChannelLive(channel){
    
  return axios.get('https://api.twitch.tv/helix/channels?broadcaster_id=145015985&broadcaster_id=401967824',{
        responseType:'json',

        headers:{
            'Authorization : `Bearer ${API_SECRET}`': 
            'Client-ID : API_KEY'
        }
  }).then (function(response){
    const streamerData = response.data.data[2];
    console.log(streamerData);
    chatBot.say(channel, streamerData);

  }).catch (function(err){
        const channelNotFound = err;
        chatBot.say(channel);
        console.log(channelNotFound);
  });
  1
}


async function kittyFactz (channel,userstate,message,self){
    const isLive = await isChannelLive(channel);
    const userMessage = message.split(' ');
if(isLive){
    if(/^!kittyfact$/i.test(userMessage[0])){
        
        
        axios.get('https://catfact.ninja/fact?max_length=140' ,
        { 
            responseType: 'json',
        })
        
        .then(function (res){

            const dataObj = res.data.fact
            const kittyFact = dataObj
 
                    console.log(kittyFact);
                    chatBot.say(channel, kittyFact)
                   
        })
        .catch(function (err) {
            chatBot.say(channel, "An error occurred, maybe ask the dev ?")
            console.log(err);
        })
    };
    }
}





setInterval(async() => {
    const isLive = await isChannelLive(channel);
    const channelName = "gameswithchaos";
    chatBot.channels.forEach((channel) => {
       
        if(isLive){
        kittyFactz(channel, null, "!Kittyfact", true);
        }
    });
}, 60 * 60 * 1000);

chatBot.on('message', kittyFactz)
// chatBot.on('message', showKitty )
// chatBot.on('message', tempConvert )
// chatBot.on('message', chatMessageHandler)
chatBot.connect().catch(console.error)