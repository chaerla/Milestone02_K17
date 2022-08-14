module.exports = async function error(context){
    let message = `Maaf, command yang kamu masukkan salah. Masukkan command seperti contoh berikut.
Contoh: /check Virus Corona tidak berbahaya`;
    await context.sendText(message);
  }