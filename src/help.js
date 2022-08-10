module.exports = async function help(context){
    let str = `K17 Fact Checker Bot Help Menu
    /check: ketik "/check <judul berita/artikel/fakta>" untuk mengecek rating atau klaim dari suatu berita/artikel/fakta.
    /about: ketik "/about" untuk mengakses informasi dasar dari bot K17 Fact Checker Bot`
    await context.sendText(str);
}