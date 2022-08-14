module.exports = async function errorCheck(context){
    let message = `Maaf, kamu tidak memasukkan claim. Masukkan command seperti contoh berikut.
Contoh: /check Virus Corona tidak berbahaya`;
    await context.sendText(message);
  }