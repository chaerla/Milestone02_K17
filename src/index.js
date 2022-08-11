const check = require ("./check.js")
const { withProps} = require('bottender');
const help = require ("./help.js")
const about = require ("./about.js")
const error = require ("./error.js")

module.exports = async function App(context) {
  await context.sendText('Welcome to Bottender');
  if (context.event.text.trim().split(' ')[0] === '/check') {
    return withProps(check,{claim: context.event.text} );
  } else if (context.event.text.trim() === "/about") {
    return about;
  } else if (context.event.text.trim() === "/help") {
    return help;
  } else {
    return error;
  }
};
