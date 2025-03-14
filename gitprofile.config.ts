// gitprofile.config.ts

const config = {
  github: {
    username: 'Alekhya03', // Your GitHub org/user name. (This is the only required config)
  },
 
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    
  seo: {
    title: 'Portfolio of Alekhya',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'gvgowtham',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    instagram: 'gowtham__g',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://gowthamgottimukkala.github.io/',
    // phone: '3527099179',
    email: 'v.gottimukkala@ufl.edu',
    avatarUrl: '/Image.jpg',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'Python',
    'Java',
    'JavaScript (ES6)',
    'SQL',
    'React',
    'Redux',
    'Node.js',
    'Django',
    'Flask',
    'SpringBoot',
    'Socket.io',
    'CSS',
    'HTML5',
    'JSON',
    'REST',
    'PostgreSQL',
    'MySQL',
    'Mongo',
    'IoT',
    'AWS',
    'Kafka',
    'Docker',
    'NGINX',
    'UNIX/Linux',
    'Git CLI',
    'GitHub',
    'BitBucket',
    'Jenkins',
    'Postman',
    'Figma (UI)',
    'JIRA'
  ],
  experiences: [
    {
      company: 'UF Health, University of Florida',
      position: 'Graduate Student Assitant',
      from: 'March 2023',
      to: 'May 2024',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Lowes India',
      position: 'Associate Software Engineer',
      from: 'June 2021',
      to: 'July 2022',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Ciphense AI Research Lab',
      position: 'Software Engineering Intern',
      from: 'May 2020',
      to: 'October 2020',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Oorwin Labs',
      position: 'Data Science Intern',
      from: 'May 2019',
      to: 'June 2019',
      // companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Florida',
      degree: 'Master of Science, Computer Science',
      from: 'August 2022',
      to: 'May 2024',
    },
    {
      institution: 'IIIT, Design and Manufacturing, Kancheepuram',
      degree: 'Bachelor of Technology, Computer Engineering',
      from: '2017',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    // id: '',
    // snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'autumn',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,
}

export default config;
