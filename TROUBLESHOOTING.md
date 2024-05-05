TROUBLESHOOTING
---------------------------------------------
NOTE***
1.) You shouldn’t be using a random online generator.

As you then have to jump hoops to get the correct client-ID

The generator is good for random tests.
But it’s better to use your own authentication loops and not someone elses generator

2.) A secret is not an oAuth token.
--------------------------------------------


IF NEED TO CHECK IF A TOKEN IS VALID GO HERE...
https://barrycarlyon.github.io/twitch_misc/examples/token_checker/

--------------------------------------------
IF YOU NEED TOF FIND YOUR TWITCH AUTH TOKEN DO THIS...
Sign in to your Twitch account(for the bot you are using)
* With the Twitch tab open, open the chrome devtools (press f12)
* With the devtools window open, now go to the application tab
* Select 'https://www.twitch.tv' in the Cookies section
* And look in the 'name' column for the field that says 'auth-token' and copy what is in the 'value' column



PROBLEM : 401 Error Status,Invalid Oauth Token 
SOLUTION : This means that you have the wrong


PROBLEM : Cannot Log In
SOLUTION : Make sure to have the correct password for the specific bot in the identity object,the password can be found at a genorator

<!--   identity:{
        username:"Kittyfactz",

        // password:"oauth:axv91pcvv2u8b4ijiuvesf6n8faz9b"

        password:"oauth:ojgh14pkh727n210l1madyfbd5sjqg"

    }, -->