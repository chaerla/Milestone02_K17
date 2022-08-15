module.exports = async function help(context){
    let str = `Untuk menggunakan Chatbot SAH ini, kamu bisa mengirimkan salah satu dari ketiga command berikut:
    1.  /𝗰𝗵𝗲𝗰𝗸
        Fitur check digunakan untuk mengecek kebenaran suatu klaim.
        Contoh: /check Virus Corona tidak berbahaya 
    2.  /𝗵𝗲𝗹𝗽
        Fitur help berisi daftar fitur yang dapat digunakan.  
    3.  /𝗮𝗯𝗼𝘂𝘁
        Fitur about berisi tentang kelompok milestone kami serta sumber data yang digunakan.`
    await context.sendText(str);
}