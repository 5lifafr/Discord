const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Dubai', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('993245909079052369')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/5lifafr') //Must be a youtube video link
    .setName('/anyy')
    .setDetails(`kk.`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1181262876003020910/1200385165407555664/1280px-HD_transparent_picture.png?ex=65c5fccd&is=65b387cd&hm=5fffb20b31418e175dc0748997eba0aaf6eef5f21599e56bc98d448eea91f32d&=&format=webp&quality=lossless&width=1111&height=625') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('.gg/anyy') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1181262876003020910/1200121128161648710/verifiedblack.gif?ex=65c506e6&is=65b291e6&hm=ae9676eb84fcf8b15fbf7846f0c63eb5d739d540a5e0404c3b1cd89024aa4d22&=') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Verfied') //Text when you hover the Small image
    .addButton('@k', 'https://discord.gg/anyy');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `kk.`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
