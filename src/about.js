module.exports = async function about(context){
    const template = [
        {
          imageUrl: '../pic_assets/twibbon_sparta.png',
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