
import tmi from 'tmi.js'; 
import { axios } from "@pipedream/platform"

const client = new tmi.Client({
	options: { debug: true },
	identity: {
        username:"sfsfeewf",
        password:"oauth:ab1k4jrb73zzzarkfus4r1kgxzkbab"
	},
	channels: [ 'gameswithchaos' ]
});



const twitchApi = require("tmi.js");



const config = {
    identity:{
        username:"sfsfeewf",
        password:"oauth:ab1k4jrb73zzzarkfus4r1kgxzkbab"
    },
    channels:["gameswithchaos"],
    API_KEY: "uxjyka1yhl0q7p8qyptp0cne3el5vx",
    API_SECRET: "2tyjnsdh1nq0txxq29waxevp9idbax",
    
};

const chatBot = new twitchApi.client(config);

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
	}
});

export default defineComponent({
  async run({steps, $}) {
    const { data } = await axios({
        method:"GET",
      url: `https://catfact.ninja/fact`
    },
    chatBot.say(data.steps.code.$return_value.fact))
  }
})
