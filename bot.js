const instantBot = require('instant-bot');

const run = () => {

  instantBot().then((bot) => {
    bot.post('Hello world!');
  });

};

module.exports = {
  run: run
}
