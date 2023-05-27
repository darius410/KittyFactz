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
    "legendofdragoonchatgame",
],
        API_KEY:API_KEY ,
        API_SECRET:API_SECRET
    
};
const chatBot = new twitchApi.client(config);



function kittyFactz (channel,userstate,message,self){

    const userMessage = message.split(' ');

    if(userMessage[0] === "!Kittyfact" ){
        
        
        axios.get('https://catfact.ninja/fact?max_length=140' ,
        { 
            responseType: 'json',
        })
        
        .then(function (res){

            const dataObj = res.data.fact
            const kittyFact = dataObj
            //  let wordDefinition = " ";

            // for(let i = 0; i < res.data.length; i++){
            //     wordDefinition = wordDefinition + dataObj.meanings[i].partOfSpeech + " - ";
            //    for ( let j = 0; j < dataObj.meanings[i].definitions.length; j++){
            //     wordDefinition = wordDefinition + (j + 1) + ": " + dataObj.meanings[i].definitions[j].definition + " ";
            //    }
            //    if(i < dataObj.meanings[i].length - 1){
            //     wordDefinition = wordDefinition + " -- ";
            //    }
                
            // }
                    console.log(kittyFact);
                    chatBot.say(channel, kittyFact)
                   
        })
        .catch(function (err) {
            chatBot.say(self, "An error occurred, maybe ask the dev ?")
            console.log(err);
        })
    };
    
}


function wordLookUp(channel, userstate ,message, self){
    const wordArray = message.split(' ');

        if(wordArray[0] === "!define"){
            
            
            axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + wordArray[1],
            {
                responseType: 'json',
            })
            
            .then(function (res){
                const dataObj = res.data[0];
                const dataMeanings = dataObj.meanings[0];
                 let wordDefinition = " ";

                for(let i = 0; i < res.data.length; i++){
                    wordDefinition = wordDefinition + dataObj.meanings[i].partOfSpeech + " - ";
                   for ( let j = 0; j < dataObj.meanings[i].definitions.length; j++){
                    wordDefinition = wordDefinition + (j + 1) + ": " + dataObj.meanings[i].definitions[j].definition + " ";
                   }
                   if(i < dataObj.meanings[i].length - 1){
                    wordDefinition = wordDefinition + " -- ";
                   }
                    
                }
                        console.log(dataMeanings);
                        chatBot.say(channel, wordDefinition)
                       
            })
            .catch(function (err) {
                chatBot.action(self, "Hmm, I can't find that definition, servers maybe ?")
                console.log(err);
            })
        };
    };


    



// function chatMessageHandler(channel, userstate ,message, self){
//     console.log(message)
// }

// function showKitty (channel, userstate ,message, self){
    
//     const wordArray = message.split(' ');

//     if(wordArray[0] === '!showKitty'){
//         chatBot.say(channel, "https://source.unsplash.com/cats/200x200?sig=1" )
//     }
// }

// function tempConvert(channel, userstate ,message, self){

    

// const wordArray = message.split(' ');

//     if(wordArray[0] === '!f2c' || wordArray[0] === "!c2f") {
//         if(Number.isNaN(parseInt(wordArray[1] )) === true  ){
//             chatBot.say(channel,"Um... that's not a number or an integar.Try to enter a number after the command. Ex( !f2c 77 )");
//         }else{
//             if(wordArray[0] === "!f2c"){
//                   chatBot.say(channel, 
//                     message.split(' ')[1] + " degrees in F are " + ((parseInt(message.split(' ')[1]) - 32) * 5/9) + " degrees in C ");
//                     console.log((message.split(' ')[1] + " degrees in F are " + ((parseInt(message.split(' ')[1]) - 32) * 5/9) + " degrees in C "))
          
//         }else if(wordArray[0] === "!c2f"){
//                  chatBot.say(channel, 
//                     message.split(' ')[1] + " degrees in C are " + ((parseInt(message.split(' ')[1]) - 5/9) + 32) + " degrees in F ");
//                     console.log((message.split(' ')[1] + " degrees in C are " + ((parseInt(message.split(' ')[1]) - 5/9) + 32) + " degrees in F "))
          
//             }
//         }
//             }

//         }
chatBot.on('message', wordLookUp )





setInterval(() => {
    const channelName = "gameswithchaos";
    chatBot.channels.forEach((channel) => {
        kittyFactz(channel,null,"!KittyFact",true);

    });
}, 2700000);

chatBot.on('message', kittyFactz)
// chatBot.on('message', showKitty )
// chatBot.on('message', tempConvert )
// chatBot.on('message', chatMessageHandler)
chatBot.connect().catch(console.error)