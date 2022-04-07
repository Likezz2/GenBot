module.exports = {
    PREFIX: ".", //prefix for the bot here
    owner: {
      id: "611495801843089420",  //put your owner Id in here so you can bypass cooldown for the generator commands and use the nitrogen command
      username: "! Likezz ?#1726"
    },

    channels: {
      generator: '', //ID of the generator channel
      nitro: '', //ID of the nitro generator channel
      twitch: '' //ID of the Twitch follows channel
    },

    links: {
      HandlerInvite: 'https://discord.com/api/oauth2/authorize?client_id=941254691919106089&permissions=335040&scope=bot',
      website: 'https://moonteam.nicepage.io/',
      GenIcon: 'https://images01.nicepage.com/c2df47b992a1cae3f1079a1a/c39479f30bc75dee943032d5/MT.gif' //G.I.F icon for the generator embed here
    },

    colors: {               //keep these colors like this too make it look clean but feel free to change if  you feel like it
      Default: '#18191c',
      Red: '#ff0000', 
      Yellow: '#daff00',  
      Orange: '#ff8400',
      Green: '#71fd71',
      LightGreen: '#5ac18e'
    },

    emojis: {
      success: '<:check:853347980824281128>', //Emoji when succeding
      error: '<a:VoteNo:853347975257260033>', //Emoji when wrong
      loading: '<a:Loading:853348009235578940>', //Emoji when loading
      arrow: '<:Arrow:853348016979181598>', //Arrow Emoji
      pingpong: '<:PingPong:853622606199652363>', //Pingpong racket Emoji

      Generator: '<a:Management:853347999086149692>', //Generator emoji for !help embed
      Twitch: '<:Twitch:853376736695156757>', //Twitch emoji for !help embed
      Other: '<:Other:853347989699166208>', //Other emoji for !help embed
      Nitro: '<a:Booster:853683721734193182>', //Nitro emoji for !help embed
    },

    Token: {
      Discord: 'OTYxNjIwMTA2MzMxNDU1NDk5.Yk7ogw.nrHBla6_iYiJa_FFvcK_2h26atI',
    },

    blacklistedUsers: {
      ID: ['ID', 'ID2', 'ID3'] //Blacklist any users from the bot by putting their Id's in here
    }                          //Just copy the pattern if you want to blacklist more people
}