import { nanoid } from 'nanoid';
import utaustin from '../images/utaustin.jpg';
import bp from '../images/bp.jpg';
import crowdstrike from '../images/crowdstrike.jpg';
import espn from '../images/espn.jpg';
import unitedhs from '../images/unitedhs.jpg';
import whu from '../images/whu.jpg';
import amazon from '../images/amazon.jpg';
import amazon2 from '../images/amazon2.jpg';
import hungrynow from '../images/hungrynow.png';
import maaAndDe from '../images/maa-and-de.png';
import fifty4090club from '../images/504090club.png';

// HEAD DATA
export const headData = {
  title: 'Henry Vuong | UT Austin Graduate', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Henry attended The University of Texas at Austin (UT) and obtained a Bachelors in Business Administration in Management Information Systems (MIS). This is Henrys personal website to host things he is comfortable with sharing.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Henry',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Currently a software engineer II working on Prime Video at Amazon',
  paragraphTwo: "Take me out for dinner for more info. I'm pescatarian.",
  // paragraphThree:
  //   "I like playing basketball There's just something about forgetting all your worries, deadlines, and whatever else is going on in your life, to focus on the simple task of putting a ball into a basket. It can be quite therapeutic and of course keeps me off my couch.",
  // paragraphFour:
  //   "A big goal of mine is to learn Spanish. I spend 30 minutes a day watching movies or shows in Spanish with Spanish subtitles. Due to peer pressure, I listen to a lot of Reggaeton (although, I'm not really proficient enough to understand most of it).",
  resume: '/resume', // if no resume, the button will not show up
};

// EXPERIENCE DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: amazon2,
    organization: 'Amazon - Prime Video',
    title: 'Software Development Engineer',
    location: 'New York City, New York',
    url: 'https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1',
    date: 'Feb 2021 - Present',
    color: '#00A8E1',
    description:
      "Working on delivery better content than Netflix and Hulu (we'll never have better content than HBO Max).",
  },
  {
    id: nanoid(),
    img: utaustin,
    organization: 'The University of Texas at Austin',
    title: 'BBA in Management Information Systems',
    location: 'Austin, Texas',
    url: 'https://www.utexas.edu/',
    date: 'Class of 2020',
    color: '#CC5500',
    description:
      "The pickup basketball games, the late night 888 food runs, the adventures on 6th, and deep talks with my roommates are moments I will miss (except waking up for class). UT helped me grow as a student but also helped me become a better and more mature person.\nThank you Mom and Dad, and Hook 'em 🤘.",
  },
  {
    id: nanoid(),
    img: amazon,
    organization: 'Amazon - Retail',
    title: 'Software Development Engineer Intern',
    location: 'S̶e̶a̶t̶t̶l̶e̶,̶ ̶W̶a̶s̶h̶i̶n̶g̶t̶o̶n̶ Remote',
    url: 'https://www.amazon.com/',
    date: 'Jun 2020 - Aug 2020',
    color: '#232F3E',
    description:
      "Created a full-stack self-service internal tool to allow program managers to make changes to customer service agents' permissions. Learned a lot about AWS, backend development, devops, and frontend development. Thankful to my team for helping me work remotely. Fun fact: Jeff Bezos added $47.2423 billion to his wealth during my internship.",
  },
  {
    id: nanoid(),
    img: whu,
    organization: 'WHU – Otto Beisheim School of Management',
    title: 'Exchange Student',
    location: 'Vallendar, Germany',
    url: 'https://www.whu.edu/',
    date: 'Jan 2020 - April 2020',
    color: '#054696',
    description:
      'Skipped class so I could go see all of Europe; from the Swiss Alps to the Roman Colosseum to Acropolis of Athens to the Van Gogh Musuem to the Sagrada Familia, I will always remember this time as a moment of appreciation to nature and European history. Unfortunately COVID-19 abruptly ended my study abroad and also infected me.',
  },
  {
    id: nanoid(),
    img: espn,
    organization: 'Disney DTCI - ESPN',
    title: 'Software Engineer Intern',
    location: 'Bristol, Connecticut',
    url: 'https://www.espn.com/',
    date: 'Sept 2019 - Nov 2019',
    color: '#CD242E',
    description:
      'Developed telemetry for the ESPN video playback library to provide greater information on failures. Implemented feature flagging to target specific iOS devices or metrics. Famous people I saw: Matthew Berry, Ryan Clark, Wendi Nix.',
  },
  {
    id: nanoid(),
    img: bp,
    organization: 'BP',
    title: 'Software Developer Intern',
    location: 'Houston, Texas',
    url: 'https://www.bp.com/',
    date: 'May 2019 - Aug 2019',
    color: '#00953F',
    description:
      'Built a chatbot to relieve senior architects of basic requests. Created infrastructure-as-code templates and deployment pipelines for fast and consistent deployment.',
  },
  {
    id: nanoid(),
    img: crowdstrike,
    organization: 'CrowdStrike',
    title: 'Sales Operations Analyst Intern',
    location: 'Sunnyvale, California',
    url: 'https://www.crowdstrike.com/',
    date: 'Jun 2018 - Aug 2018',
    color: '#FC0000',
    description:
      'Worked on Excel and Tableau programs and analysis to make the sales team more efficient. My first true taste of American capitalism.',
  },
  {
    id: nanoid(),
    img: unitedhs,
    organization: 'United High School',
    title: 'United Engineering & Technology Magnet',
    location: 'Laredo, Texas',
    url: 'https://uhs.uisd.net/',
    date: 'Class of 2016',
    color: '#F15A29',
    description:
      'I sold Kazoozles and muffins, I was the "one-stroke-wonder" on the swim team, and I was part of the best robotics club. Thank you Mrs. Rodriguez and Mr. Torres for believing in me.',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: hungrynow,
    title: 'HungryNow',
    info: 'iOS app to help remind users when their favorite restaurants were going to close.',
    info2:
      'Never really expected it to take off, but it was fun learning the SwiftUI framework and actually launching it.',
    url: 'https://appadvice.com/app/hungrynow-app/1512893332',
    repo: 'https://github.com/mistersquiish/HungryNow', // if no repo, the button will not show up
    achievement: '',
  },
  {
    id: nanoid(),
    img: maaAndDe,
    title: 'Maa and De',
    info:
      'An appreciation website for my parents where I document and tell their journey to America.',
    info2:
      'Was always something I wanted to do for my parents, and my parents really enjoyed the gift.',
    url: 'https://henryvuong.com/thank-you-mom-and-dad/',
    repo: 'https://github.com/mistersquiish/thank-you-mom-and-dad', // if no repo, the button will not show up
    achievement: '',
  },
  {
    id: nanoid(),
    img: fifty4090club,
    title: '50-40-90 Club',
    info: 'A website to track who is on track for a 50-40-90 NBA shooting season.',
    info2: 'Built using React, Gatsby, Python for distributed job service, and Firebase',
    url: 'https://504090club.info/',
    repo: '', // if no repo, the button will not show up
    achievement: '',
  },
];

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:henryvuong@utexas.edu',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/henry-vuong-texas/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mistersquiish',
    },
    // {
    //   id: nanoid(),
    //   name: 'facebook',
    //   url: 'https://www.facebook.com/profile.php?id=100003945593154',
    // },
    {
      id: nanoid(),
      name: 'tinder',
      url: '/tinder',
    },
  ],
};

// CONTACT DATA
export const contactData = {
  whereToFind:
    "Due to COVID, I'm back at home usually trying out a new recipe in mom's kitchen or having friends over in my parent's backyard.",
  contact: 'Otherwise, best way to reach me is through my email: ',
  email: 'henryvuong@utexas.edu',
};
