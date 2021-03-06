var scraper = require('html-scrape-loader');

const linkedinScrapper = (id) => scraper({
    url: `https://www.linkedin.com/jobs/view/${id}`,
    selectors: {
        paragraphs: '.post p',
        intro: ['.post, .content', '.intro'],
        content: ['.content', {
            heading: 'h1, h2, h3',
            body: '.body'
        }]
    }
}, (result) => {
   console.log(result);
});

  export default linkedinScrapper;