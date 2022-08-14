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
            text += "\n" + "𝗞𝗹𝗮𝗶𝗺: " + claim + "\n" +
                "𝗥𝗲𝘃𝗶𝗲𝘄: " + review + "\n" +
                "𝗗𝗶𝗿𝗲𝘃𝗶𝗲𝘄 𝗼𝗹𝗲𝗵: " + publisher + "\n" +
                "𝗕𝗮𝗰𝗮 𝘀𝗲𝗹𝗲𝗻𝗴𝗸𝗮𝗽𝗻𝘆𝗮: " + url + "\n"
            if (i===2){
                break;
            }
        }
        await context.sendText(text);
    }
}