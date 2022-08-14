module.exports = async function about(context) {
  const template = [
    {
      imageUrl: "https://ibb.co/7C4ZStF",
      action: {
        type: "message",
        label: "Attariq M. Azhar \n16521235",
        text: "Ketua Milestone K17",
      },
    },
    {
      imageUrl: "https://ibb.co/2hYB0RC",
      action: {
        type: "message",
        label: "Akmal Mahardika Nurwahyu Pratama \n16521070",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/k4WV4ZV",
      action: {
        type: "message",
        label: "Muhamad Pedro \n16521075",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/ZHPsFkm",
      action: {
        type: "message",
        label: "Rachel Gabriela Chen \n16521161",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/CKtBgHV",
      action: {
        type: "message",
        label: "Aufar Ramadhan \n16521205",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/9YpWLWK",
      action: {
        type: "message",
        label: "Brigita Tri Carolina \n16521249",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/gZTXZ18",
      action: {
        type: "message",
        label: "Hobert Anthony Jonatan \n16521303",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/26cnx7v",
      action: {
        type: "message",
        label: "Shidqi Indy Izhari \n16521318",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/Bcxy6bY",
      action: {
        type: "message",
        label: "Silvester Kresna W. P. P. \n16521326",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/TwLsM41",
      action: {
        type: "message",
        label: "Aulia Mey Diva Annandya \n16521334",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/12ppJ36",
      action: {
        type: "message",
        label: "Filbert Felim \n16521457",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/DtS5gWV",
      action: {
        type: "message",
        label: "Cathleen Laureta \n16521477",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/sw9bBmb",
      action: {
        type: "message",
        label: "Christophorus Dharma Winata \n16521514",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/wzZ5JWz",
      action: {
        type: "message",
        label: "Ahmad Nadil \n16521516",
        text: "Anggota",
      },
    },
    {
      imageUrl: "https://ibb.co/WfT9ZjR",
      action: {
        type: "message",
        label: "Agsha Athalla Nurkareem \n16521547",
        text: "Anggota",
      },
    },
  ];
  const altText = "this is a image carousel template";
  await context.sendImageCarouselTemplate(altText, template);
};
=======
module.exports = async function about(context){
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
}
