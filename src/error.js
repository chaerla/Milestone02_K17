module.exports = async function error(context){
  let message = '<pesan error>';
  await context.sendText(message);
}
