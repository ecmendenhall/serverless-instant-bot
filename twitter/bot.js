const instantBot = require('instant-bot');

module.exports.run = () => {

  instantBot({service: 'twitter', rate: '10 minutes'}, (bot) => {
    bot.service.post('Hello world!');
  });

};
