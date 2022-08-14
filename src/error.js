module.exports = async function error(context){
  let message = 'Maaf, untuk sekarang, kami belum bisa memproses command yang kamu berikan nih. Tapi tenang aja, kamu bisa gunakan fitur /help untuk melihat daftar command yang dapat digunakan!';
  await context.sendText(message);
}
