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
        password:"oauth:ojgh14pkh727n210l1madyfbd5sjqg"
    },
    channels:[
        "gameswithchaos" ,
       "KittiesPlease"
],
        API_KEY:API_KEY ,
        API_SECRET:API_SECRET
    
};
const chatBot = new twitchApi.client(config);


async function isChannelLive(channelName) {
    return axios
      .get(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
        headers: {
          "Client-ID": API_KEY
        }
      })
      .then(response => {
        return response.data.data.length > 0; // If there's data in the response, the channel is live
      })
      .catch(error => {
        console.error("Error checking stream status:", error);
        return false; // Default to not live if there's an error
      });
  }

async function kittyFactz (channel,userstate,message,self){
    const isLive = await isChannelLive(channel);
    if (typeof(message) =='string'){
        const userMessage = message.split(' ');
    }
    
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
   
    // const channelName = "gameswithchaos";
    chatBot.channels.forEach(async (channel) => {
        const isLive = await isChannelLive(channel);
        if(isLive){
        kittyFactz(channel, null, "!Kittyfact", true);
        }
    });
}, 60 * 60 * 1000);

chatBot.on('message', (channel, userstate, message, self) => {
    if (/^!kittyfact$/i.test(message)) {
      kittyFactz(channel);
    }
  });
// chatBot.on('message', kittyFactz)
// chatBot.on('message', showKitty )
// chatBot.on('message', tempConvert )
// chatBot.on('message', chatMessageHandler)
chatBot.connect().catch(console.error)