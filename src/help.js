module.exports = async function help(context){
    let str = `Untuk menggunakan Chatbot ini, kamu bisa mengirimkan salah satu dari ketiga command berikut:
    1.  /check
        Fitur check digunakan untuk mengecek kebenaran suatu klaim.
        Contoh: /check Virus Corona tidak berbahaya 
    2.  /help
        Fitur help berisi daftar fitur yang dapat digunakan.  
    3.  /about
        Fitur about berisi tentang kelompok milestone kami serta sumber data yang digunakan.`
    await context.sendText(str);
}