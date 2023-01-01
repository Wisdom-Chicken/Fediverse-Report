const header = "<h1>Welcome to the Fediverse report.</h1><p class='tagline'>For all the relevant news on the emerging Fediverse</p>";
const footer = 'Fediverse report is a production of Laurens Hof - version 0.0.10 ';
//import { footer } from './Footer.js';

const entries = [
  {
    id: 'mastodon-releases-public-roadmap',
    categories: ['news', 'mastodon'],
    color: 'grey',
    faicon: 'road',
    datetime: '2022-12-31 19:48',
    title: 'Mastodon releases public development roadmap',
    body: 'Eugen Rochko, the main developer for Mastodon, has released the public development roadmap for Mastodon.',
    links: [
      {
        href: 'https://joinmastodon.org/roadmap',
        linkText: 'Development Roadmap',
      },
      {
        href: 'https://github.com/mastodon/mastodon/discussions/22644#discussioncomment-4562748',
        linkText: 'Announcement by Eugen Rochko',
      },
    ],
  },

  {
    id: 'shuttlecraft-selfhostable-microblogging-tool-implementing-activitypub',
    categories: ['software'],
    color: 'grey',
    faicon: 'screwdriver-wrench',
    datetime: '2022-12-31 01:49',
    title: 'Shuttlecraft, a tool for self-hosting a microblogging tool that works with ActivityPub, released',
    body: 'Ben Brown has released a new tool called Shuttlecraft, described as follows: "Its a small, easy to host web app that contains almost everything you need to host your own personal instance of a federated ActivityPub server. Your shuttlecraft hosts your social media identity, along with the tools to post, follow, and interact with other people on any other compatible service like Mastodon, GoToSocial, and others. "',
    links: [
      {
        href: 'https://shuttlecraft.net/',
        linkText: 'Shuttlecraft, by Ben Brown',
      },
    ],
  },   

  {
    id: 'ars-technica-mastodon—and-the-pros-and-cons-of-moving-beyond-big-tech-gatekeepers',
    categories: ['analysis'],
    color: 'grey',
    faicon: 'magnifying-glass',
    datetime: '2022-12-30 14:00',
    title: 'Ars Technica: Mastodon—and the pros and cons of moving beyond Big Tech gatekeepers',
    // image: {
    //   link: 'http://placekitten.com',
    //   src: 'http://placekitten.com/200/300',
    //   alt: 'A placeholder kitten',
    //   caption: 'Kitten!',
    // },
    body: 'Ars gives a deep dive of how "Standards-based interoperability makes a comeback, sort of". <br> <br> Furthermore, it notes how queer people influenced the design of the network, stating that "Queer people built the Fediverse, she said, adding that four of the five authors of the ActivityPub standard identify as queer. As a result, protections against undesired interaction are built into ActivityPub and the various front ends."',
    links: [
      {
        href: 'https://arstechnica.com/gadgets/2022/12/mastodon-highlights-pros-and-cons-of-moving-beyond-big-tech-gatekeepers/',
        linkText: '"Mastodon—and the pros and cons of moving beyond Big Tech gatekeepers", Ars Technica',
      },
    ],
  },

  {
    id: 'reddit-ama-eugen-rochko',
    categories: ['mastodon'],
    color: 'grey',
    faicon: 'question',
    datetime: '2022-12-21 00:00',
    title: 'Reddit AMA with Eugen Rochko',
    body: 'Eugen Rochko, lead developer and creator of Mastodon, held a Reddit AMA, answering many questions about Mastodon, the fediverse and ActivityPub.',
    links: [
      {
        href: 'https://www.reddit.com/r/Mastodon/comments/zqfr4h/ama_with_eugen_rochko_founder_and_lead_developer/',
        linkText: 'Reddit AMA',
      },
    ],
  },

  {
    id: 'twitter-suspends-mastodon-account-prevents-sharing-link-mastodon-statement',
    categories: ['news', 'mastodon', 'twitter'],
    color: 'grey',
    faicon: 'hashtag',
    datetime: '2022-12-20 00:00',
    title: 'Statement by Mastodon on the suspention of links to Mastodon on Twitter',
    body: 'Eugen Rochko, lead developer and creator of Mastodon, has put out a blog statement about Twitter suspending the @joinmastodon account, as well as blocking links to Mastodon in tweets. He states: "At Mastodon, we believe that there doesn’t have to be a middleman between you and your audience and that journalists and government institutions especially should not have to rely on a private platform to reach the public."',
    links: [
      {
        href: 'https://blog.joinmastodon.org/2022/12/twitter-suspends-mastodon-account-prevents-sharing-links/',
        linkText: 'Twitter suspends Mastodon account, prevents sharing links, Statement by Mastodon',
      },
    ],
  },

  {
    id: 'automattic-tweet-future-implementation-activityPub',
    categories: ['news'],
    color: 'grey',
    faicon: 'hashtag',
    datetime: '2022-11-21 08:02',
    title: 'Automattic (Tumblr, Wordpress) CEO Matt Mullenweg announces support for ActivityPub coming "ASAP"',
    // image: {
    //   link: 'http://place-puppy.com',
    //   src: 'https://place-puppy.com/300x300',
    //   alt: 'A placeholder puppy',
    //   caption: 'Puppy!',
    // },
    body: 'Automattic CEO Matt Mullenweg said in a tweet that Automattic is implementing ActivityPub support ASAP. No further communicating has been made regarding this, with the CEO also noting that onboarding a wave of new users is the highest priority. <br> <br> Automattic is the company behind products like Tumblr and WordPress, and is explicitly committed to Open Source.',
    links: [
      {
        href: 'https://twitter.com/photomatt/status/1594587024245260289',
        linkText: 'Tweet by Matt Mullenweg',
      },
    ],
  },

  {
    id: 'the-many-branches-of-the-fediverse',
    categories: ['explainer'],
    color: 'grey',
    faicon: 'exclamation',
    date: '2022-11-02',
    title: 'The many branches of the Fediverse',
    image: {
      link: 'https://axbom.com/content/images/size/w2000/2022/11/fediverse-branches-axbom-20-CC-BY-SA.webp',
      src: 'https://axbom.com/content/images/size/w2000/2022/11/fediverse-branches-axbom-20-CC-BY-SA.webp',
      alt: 'A tree that represents the fediverse',
      caption: 'The many branches of the Fediverse',
    },
    body: 'A visualisation created by Axbom, showing the many branches of the fediverse, that show how it is much larger than just Mastodon.',
    links: [
      {
        href: 'https://axbom.com/fediverse/',
        linkText: 'The tree of the Fediverse branches',
      },
    ],
  },
];

// Page details
const pageTitle = 'The Fediverse Report - A timeline of news around the fediverse'; // The title of the page that shows in the browser tab
const pageDescription = 'A timeline documenting news around the fediverse'; // The description of the page for search engines
const pageAuthor = 'Laurens Hof'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
