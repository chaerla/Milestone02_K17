const fetch = require('node-fetch');
const API_KEY = "AIzaSyCsET4iZRhfUz0qHOT7WprfsOWTSRDEEyA"

module.exports = async function check(context, props) {
    let obj, claim, review, publisher, url;
    let text =""
    let query = encodeURIComponent(props.claim);
    const res = await fetch("https://factchecktools.googleapis.com/v1alpha1/claims:search?query=" + query + "&key=" + API_KEY)
    obj = await res.json();
    console.log(obj)
    if (Object.keys(obj).length === 0 && obj.constructor === Object){
        await context.sendText("Maaf. Klaim tidak ditemukan.");
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