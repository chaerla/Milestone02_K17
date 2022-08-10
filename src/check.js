const fetch = require('node-fetch');
const API_KEY = "AIzaSyCsET4iZRhfUz0qHOT7WprfsOWTSRDEEyA"

module.exports = async function check(context, props) {
    let obj, claim, review, publisher, url, text;
    let query = encodeURIComponent(props.claim);
    const res = await fetch("https://factchecktools.googleapis.com/v1alpha1/claims:search?query=" + query + "&key=" + API_KEY)
    obj = await res.json();
    claim = obj.claims[0].text
    review = obj.claims[0].claimReview[0].textualRating
    publisher = obj.claims[0].claimReview[0].publisher.name
    url = obj.claims[0].claimReview[0].url
    text = "Klaim: " + claim + "\n" +
        "Review: " + review + "\n" +
        "Direview oleh: " + publisher + "\n" +
        "Baca selengkapnya: " + url + "\n"
    await context.sendText(text)
}