const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on('message', msg => {
  if (msg.content === '/감시팀') {
    msg.reply('우린 감시팀이고 치안을 지킨다');
  }
  if (msg.content === '/surveillance team') {
    msg.reply('We re a surveillance team and we need to maintain security.');
  }
  if (msg.content === 'wwwewewewewewewew') {
    msg.channel.send('Send me the DM 나에게 디엠을 보내줘');
  }
  if (msg.content === '/rule') {
    msg.reply('1.dont kill innocent citizens. 2.dont team kill and troll.3 .dont impersonate anyone.');
  }
  if (msg.content === '/hi') {
    msg.reply('/hello');
  }
  if (msg.content === '/규칙') {
    msg.reply('1.무고한 사람을 죽이지않는다. 2.팀킬이랑 트롤을 하지 않는다. 3.누군가를 사칭하지않는다.');
  }
  if (msg.content === '/officer') {
    msg.reply('The officer leads the team');
  }
  if (msg.content === '/장교') {
    msg.reply('장교는 팀을 이끈다');
  }
  if (msg.content === '/룰') {
    msg.reply('1.무고한 사람을 죽이지않는다. 2.팀킬이랑 트롤을 하지 않는다. 3.누군가를 사칭하지않는다.');
  }
  if (msg.content === '/schedule') {
    msg.reply('https://docs.google.com/document/d/11nkuqsdYvQdtS3zpy7eJxcHmqK-b7HF2qIvKsj8DVeI/edit?usp=sharing');
  }
  if (msg.content === '/일정표') {
    msg.reply('https://docs.google.com/document/d/1F3sylrg9AgaXVX_GdFuiztu-jpFW1r1-WDeb6-Bjry4/edit?usp=sharing');
  }
  if (msg.content === '/liew') {
    msg.reply('im so sorry liew');
  }
});

client.login('OTM3MzExNTE1MDQ2OTg5ODU0.YfZ5Xw.4WKC4W5YwPXAzQdZW90dWnnijig');