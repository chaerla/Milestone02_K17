module.exports = async function about(context) {
  const template = [
    {
      imageUrl: "https://ibb.co/7C4ZStF",
      action: {
        type: "message",
        label: "16521235",
        text: "Attariq M. Azhar - Ketua Milestone K17",
      },
    },
    {
      imageUrl: "https://ibb.co/2hYB0RC",
      action: {
        type: "message",
        label: "16521070",
        text: "Akmal Mahardika Nurwahyu Pratama - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/k4WV4ZV",
      action: {
        type: "message",
        label: "16521075",
        text: "Muhamad Pedro - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/ZHPsFkm",
      action: {
        type: "message",
        label: "16521161",
        text: "Rachel Gabriela Chen - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/CKtBgHV",
      action: {
        type: "message",
        label: "16521205",
        text: "Aufar Ramadhan - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/9YpWLWK",
      action: {
        type: "message",
        label: "16521249",
        text: "Brigita Tri Carolina - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/gZTXZ18",
      action: {
        type: "message",
        label: "16521303",
        text: "Hobert Anthony Jonatan - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/26cnx7v",
      action: {
        type: "message",
        label: "16521318",
        text: "Shidqi Indy Izhari - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/Bcxy6bY",
      action: {
        type: "message",
        label: "16521326",
        text: "Silvester Kresna W. P. P. - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/TwLsM41",
      action: {
        type: "message",
        label: "16521334",
        text: "Aulia Mey Diva Annandya - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/12ppJ36",
      action: {
        type: "message",
        label: "16521457",
        text: "Filbert Felim - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/DtS5gWV",
      action: {
        type: "message",
        label: "16521477",
        text: "Cathleen Laureta - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/sw9bBmb",
      action: {
        type: "message",
        label: "16521514",
        text: "Christophorus Dharma Winata - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/wzZ5JWz",
      action: {
        type: "message",
        label: "16521516",
        text: "Ahmad Nadil - Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/WfT9ZjR",
      action: {
        type: "message",
        label: "16521547",
        text: "Agsha Athalla Nurkareem - Anggota",
      },
    },
  ];
  const altText = "this is a image carousel template";
  await context.sendImageCarouselTemplate(altText, template);
};

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
