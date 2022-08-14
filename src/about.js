module.exports = async function about(context) {
  const crewlist_1 = [
    {
      imageUrl: "https://i.ibb.co/DWpv1fn/16521235-Attariq-M-Azhar.jpg",
      action: {
        type: "message",
        label: "16521235",
        text: "Attariq M. Azhar - Ketua Milestone K17",
      },
    },
    {
      imageUrl: "https://i.ibb.co/6wJ5cGT/16521070-Akmal-Mahardika-Nurwahyu-Pratama.jpg",
      action: {
        type: "message",
        label: "16521070",
        text: "Akmal Mahardika Nurwahyu Pratama - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/dPzsPZs/16521075-Muhamad-Pedro.jpg",
      action: {
        type: "message",
        label: "16521075",
        text: "Muhamad Pedro - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/z8YcB0J/16521161-Rachel-Gabriela-Chen.jpg",
      action: {
        type: "message",
        label: "16521161",
        text: "Rachel Gabriela Chen - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/4RfWzV4/16521205-Aufar-Ramadhan.jpg",
      action: {
        type: "message",
        label: "16521205",
        text: "Aufar Ramadhan - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/88m9p9v/16521249-Brigita-Tri-Carolina.png",
      action: {
        type: "message",
        label: "16521249",
        text: "Brigita Tri Carolina - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/7tWTtcD/16521303-Hobert-Anthony-Jonatan.jpg",
      action: {
        type: "message",
        label: "16521303",
        text: "Hobert Anthony Jonatan - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/DbwVhD9/16521318-Shidqi-Indy-Izhari.png",
      action: {
        type: "message",
        label: "16521318",
        text: "Shidqi Indy Izhari - Anggota",
      },
    },
  ];
  const altText = "this is a image carousel template";
  await context.sendImageCarouselTemplate(altText, crewlist_1);

  const crewlist_2 = [
    {
      imageUrl: "https://i.ibb.co/yd16ktx/16521326-Silvester-Kresna-W-P-P.png",
      action: {
        type: "message",
        label: "16521326",
        text: "Silvester Kresna W. P. P. - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/HKdjTtC/16521334-Aulia-Mey-Diva-Annandya.jpg",
      action: {
        type: "message",
        label: "16521334",
        text: "Aulia Mey Diva Annandya - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/dK33JSg/16521457-Filbert-Felim.jpg",
      action: {
        type: "message",
        label: "16521457",
        text: "Filbert Felim - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/56fBx4M/16521477-Cathleen-Laureta.jpg",
      action: {
        type: "message",
        label: "16521477",
        text: "Cathleen Laureta - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/cFhkmgk/16521514-Christophorus-Dharma-Winata.jpg",
      action: {
        type: "message",
        label: "16521514",
        text: "Christophorus Dharma Winata - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/nLqx3cL/16521516-Ahmad-Nadil.png",
      action: {
        type: "message",
        label: "16521516",
        text: "Ahmad Nadil - Anggota",
      },
    },
    {
      imageUrl: "https://i.ibb.co/0rwNTvz/16521547-Agsha-Athalla-Nurkareem.png",
      action: {
        type: "message",
        label: "16521547",
        text: "Agsha Athalla Nurkareem - Anggota",
      },
    },

  ];
  await context.sendImageCarouselTemplate(altText, crewlist_2);

  let str = `AHC (Anti Hoax Checker) adalah LINE Chatbot yang dibuat oleh Kelompok “Sweet Seventeen” yang bertujuan untuk memberikan validasi terhadap klaim dari berita yang dibaca oleh netizen. Chatbot ini diharapkan menjadi solusi permasalahan misinformasi atau hoaks yang tersebar di sosial media. Chatbot ini dibuat dengan menggunakan framework Bottender.js dan mengambil data dari Google Fact Checker Tools API.`
  await context.sendText(str);
}
;

/* module.exports = async function about(context){
    const template = [
        {
          imageUrl: 'https://i.ibb.co/mSNkWvj/twibbon-sparta.png',
          action: {
            type: 'message',
            label: 'Ini Twibbon',
            text: 'Ini Twibbon loh',
          }
        }
      ];
      const altText = 'this is a image carousel template';
      await context.sendImageCarouselTemplate(altText, template);
} */
