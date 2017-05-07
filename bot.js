const instantBot = require('instant-bot');

module.exports.run = () => {

  instantBot().then((bot) => {
    bot.service.post('Hello world!');
  });

};
