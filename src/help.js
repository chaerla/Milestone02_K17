module.exports = async function help(context){
    let str = `K17 Fact Checker Bot Help Menu
    Check
        Deskripsi 
        - Fitur check untuk mengecek rating atau klaim dari suatu berita/artikel/fakta.
        Cara Penggunaan 
        - /check <judul berita/artikel/fakta>
        Contoh
        - /check Vaksin COVID-19 Mematikan
    About
        Deskripsi 
        - Digunakan untuk mengakses informasi umum dari bot K17 Fact Checker Bot
        Cara Penggunaan
        - /about`
    await context.sendText(str);
}