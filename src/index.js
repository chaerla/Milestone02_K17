const check = require ("./check.js")
const { withProps} = require('bottender');
const help = require ("./help.js")
const about = require ("./about.js")

module.exports = async function App(context) {
  await context.sendText('Welcome to Bottender');
  if (context.event.isText) {
    return withProps(check,{claim: context.event.text} );
  } else if (context.event.text.trim() == "/about") {
    return about;
  } else if (context.event.text.trim() == "/help") {
    return help;
  }
};
