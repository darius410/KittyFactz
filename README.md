## Use the phrase !Kittyfact 

The Twitch Kitty Fact Bot is a chat bot that provides users with random cat facts on Twitch.
It connects to the Twitch chat using the tmi.js library and fetches cat facts from the catfact.ninja API.
The bot responds to the "!KittyFact" command in the chat by retrieving a random cat fact and displaying it.

## Features

- Sends random cat facts in response to the "!KittyFact" command in the Twitch chat.
- Fetches cat facts from the catfact.ninja API every 45 minutes
- Can be easily customized and extended to add more functionality.

## Prerequisites

- Node.js (v14 or above) installed on your machine.
- Twitch account and a registered application with the necessary credentials (client ID and client secret) from the Twitch Developer Portal.

## Customization
You can customize the bot to add more functionality or modify its behavior:

- Change the command trigger: In the kittyFactz function in index.js, modify the condition that checks for the command trigger. 
For example, you can change the trigger from !KittyFact to !CatFact.

- Extend the bot's capabilities: Add more commands or features by modifying the kittyFactz function or creating additional functions to handle different commands. 
You can interact with other APIs, implement user commands, or integrate additional Twitch functionalities.

## Contributing
Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
