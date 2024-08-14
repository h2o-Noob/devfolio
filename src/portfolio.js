/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arindam raina",
  title: "How's it going, I'm Arindam",
  subTitle: emoji(
    "Innovative Developer and Data Analyst skilled in managing projects, coding, testing, and data analytics. Proficient in creating technical specs, deploying scalable applications, and delivering solutions through stakeholder collaboration."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XH_uqfP-dwGiIgYLkGT2TYIIYyKZr1Tf/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/h2o-Noob",
  linkedin: "https://www.linkedin.com/in/arindam-raina-97638a203/",
  gmail: "Arindamraina7743@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100008492199078",
  instagram: "https://www.instagram.com/h2o_arindam/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Developer and Data Analyst skilled in coding, testing, and data analytics.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "swift",
    fontAwesomeClassname: "fab fa-swift"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  }
],
display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Gobind Singh Indraprastha University",
      logo: require("./assets/images/ggsipu.png"),
      subHeader: "Bachelors of Technology in Electronics and Communication Engineering",
      duration: "2020 - 2024",
      desc: "Ecell and GDSC member",
      descBullets: [
        "8.33 CGPA"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend(ReactJs)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend(NodeJs, PHP, Java Springboot)",
      progressPercentage: "90%"
    },
    {
      Stack: "DSA(C++, Java)",
      progressPercentage: "80%"
    },
    {
      Stack: "DBMS and Data Analytics(MongoDB, SQL, Tableau, Python, R)",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Services(GCP, AWS, AZURE)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE Intern",
      company: "GraySwipe",
      companylogo: require("./assets/images/app-logo.png"),
      date: "August 2022 – March 2023",
      desc: "Built and launched Grayswipe's inventory management app on Playstore using the ReactJs and NodeJs, increasing operational efficiency by 35%. Implemented REST APIs with best practises and GraphQL for data integration."
    },
    {
      role: "Data Analyst",
      company: "FBF Entertainment",
      companylogo: require("./assets/images/fbf-logo.png"),
      date: "March 2024 - May 2024",
      desc: "Conducted detailed data analysis of user interactions within the Flipkart Vibes section, resulting in a 25% increase in user retention.Utilized SQL and Python for data mining and statistical analysis."
    },
    {
      role: "SDE Fellowship",
      company: "Major League Hacking",
      companylogo: require("./assets/images/mlh-logo.png"),
      date: "November 2022 - December 2022",
      desc: "Developed Java-based applications with Spring and Hibernate, boosting performance by 40%. Managed SQL databases (MySQL, PostgreSQL), reducing query time by 30%."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Few projects that I made to test and improve my skills",
  projects: [
    {
      image: require("./assets/images/ecommerse.jpg"),
      projectName: "Azure Data Pipeline for E-commerce Data Processing",
      projectDesc: "Designed and implemented a data pipeline for processing E-commerce data using Azure Data Factory, Polybase, and U-SQL within Azure Cloud.",
      // footerLink: [
      //   {
      //     name: "Visit Github",
      //     url: "https://github.com/h2o-Noob/ecommerse"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/ufc-logo.jpg"),
      projectName: "UFC FIGHTER ANALYSIS DASHBOARD",
      projectDesc: "Developed a comprehensive PowerBI dashboard to analyze all-time UFC fighter stats, including K/Os, weight, wins, and losses, achievingan 85% accuracy rate in predicting potential fight outcomes based on statistical data.",
      // footerLink: [
      //   {
      //     name: "Visit Github",
      //     url: "https://github.com/h2o-Noob/ecommerse"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/bee-logo.jpg"),
      projectName: "BeeLog Blog Management Web App",
      projectDesc: "Developed a Flask framework with SQL integration for robust blog management.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/h2o-Noob/beelog-flask/tree/main"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google 30 days of Cloud",
      subtitle:
        "I was among 40,000 students who got selected for 30 days of Google Cloud challenge and I successfully completed 2 Tracks and earned 11 badges.",
      image: require("./assets/images/gcpLogo.png"),
      footerLink: [
        {
          name: "Profile Dashboard",
          url: "https://www.qwiklabs.com/public_profiles/316daf5e-b958-46b8-875c-fc4535abdff5"
        }
      ]
    },
    {
      title: "2nd runner up in MLH HTF 2.0(Sawo labs track)",
      subtitle:
        "My project Being Sapien was 2nd runner up in MLH HTF 2.0(Sawo labs track), unfortunaltely there was no official prize or recognization for 1st and 2nd runner up in this category",
      image: require("./assets/images/htf2.0Logo.png"),
      footerLink: [
        {
          name: "View Project",
          url: "https://devpost.com/software/being-sapien-m72rkj"
        }
      ]
    },

    {
      title: "Free Code Camp Java Script Developer",
      subtitle: "Completed FCC JavaScript Algorithm course which was 300hr long with 200+ exercises and 5 projects",
      image: require("./assets/images/fccLogo.png"),
      footerLink: [
        {name: "Certification", url: "https://www.freecodecamp.org/certification/h2o_noob/javascript-algorithms-and-data-structures"},
      ]
    },

    {
      title: "Google IT Support certified by Google",
      subtitle: "Successfully completed Google's rigorous training program covering a wide range of IT fundamentals and skills.",
      image: require("./assets/images/google-logo.jpg"),
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/7c70498cf0e2072e413570dff5e29bd5"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7303207743",
  email_address: "Arindamraina7743@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
