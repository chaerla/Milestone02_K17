const fetch = require('node-fetch');
const API_KEY = "AIzaSyCsET4iZRhfUz0qHOT7WprfsOWTSRDEEyA"

module.exports = async function check(context, props) {
    let obj, claim, review, publisher, url;
    let text =""
    let strLen = props.claim.length;
    let query = encodeURIComponent(props.claim.slice(8, strLen));
    const res = await fetch("https://factchecktools.googleapis.com/v1alpha1/claims:search?query=" + query + "&key=" + API_KEY)
    obj = await res.json();
    if (Object.keys(obj).length === 0 && obj.constructor === Object){
        await context.sendText(`Maaf, klaim yang kamu masukkan tidak sesuai dengan klaim manapun.
Silakan coba lagi dengan memperhatikan aspek-aspek berikut:
1. Gunakan kata kunci yang lebih sederhana
2. Gunakan kata kunci alternatif
3. Ubah kata kunci
4. Pastikan tidak ada kesalahan penulisan pada kata kunci
`);
    }
    else {
        for (let i=0; i<obj.claims.length;i++){
            claim = obj.claims[i].text
            review = obj.claims[i].claimReview[0].textualRating
            publisher = obj.claims[i].claimReview[0].publisher.name
            url = obj.claims[i].claimReview[0].url
            text += "\n" + "Klaim: " + claim + "\n" +
                "Review: " + review + "\n" +
                "Direview oleh: " + publisher + "\n" +
                "Baca selengkapnya: " + url + "\n"
            if (i===2){
                break;
            }
        }
        await context.sendText(text);
    }
}