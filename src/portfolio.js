/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Simba Ndoro",
  title: "Hi, I'm Simba",
  subTitle: emoji(
    "An experienced 1st and 2nd Line Support and FullsStack Web Developer proficient in Linux, macOS, Windows, Windows Server, NodeJs, MongoDB, SQL, Express.js, HTML5, CSS3, Flutter, Javascript with further interest in Progressive Web Apps."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dittogod",
  linkedin: "https://www.linkedin.com/in/simbarashe-ndoro/",
  gmail: "simba.ndoro@dittogod.com",
  gitlab: "https://gitlab.com/DittoGod",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@Dittogod",
  stackoverflow: "https://stackoverflow.com/users/12103604/dittogod",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skill Set",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE MANY TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Flutter Mobile development"),
    emoji(
      "⚡ Integration of third party services such as Firebase / Heroku / Jenkins"
    ),
    emoji("⚡ Proficient with Linux, macOS, Windows, Windows Server."),
    emoji("⚡ PC Repair / Phone Repair / Console Repair"),
    emoji("⚡ Network Administrator"),
    emoji("⚡ Network Migration Administrator"),
    emoji("⚡ GSuite Administrator")
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-mdb"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
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
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "BootStrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "FullStack Web Developer",
      subtitle: "Completed FullStack Web Developer Course on Udemy",
      image: require("./assets/images/Udemy-Logo.webp"),
      imageAlt: "Udemy",
      footerLink: [
        {
          name: "Certification",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-2Y2YGPYB.jpg?l=null"
        },
        {
          name: "Award Letter",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-2Y2YGPYB.jpg?v=1621505107000"
        },
        {
          name: "Udemy Course",
          url: "https://www.udemy.com/course/the-web-developer-bootcamp/"
        }
      ]
    },
    {
      title: "Flutter Developer",
      subtitle: "Completed Flutter Developer Course on Udemy",
      image: require("./assets/images/Udemy-Logo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-b140cee4-0dda-4a76-b226-35764b953964.jpg?v=1586560149000"
        },
        {
          name: "Award Letter",
          url: "https://www.udemy.com/certificate/UC-b140cee4-0dda-4a76-b226-35764b953964/"
        },
        {
          name: "Udemy Course",
          url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/"
        }
      ]
    },
    {
      title: "MTA: Cloud Fundamentals",
      subtitle:
        "Earners of the MTA: Cloud Fundamentals certification have demonstrated fundamental knowledge of and basic skills using Microsoft cloud services.",
      image: require("./assets/images/MTA-Cloud-Fundamentals-2018.png"),
      footerLink: [
        {
          name: "Badge",
          url: "https://www.youracclaim.com/badges/665f34ac-fb91-490c-9096-5bbda9aff088/public_url"
        }
      ]
    },
    {
      title: "MTA: Mobility and Device Fundamentals",
      subtitle:
        "Earners of the MTA: Mobility and Device Fundamentals certification have demonstrated fundamental Windows devices and mobility knowledge and skills.",
      image: require("./assets/images/MTA-Mobility-and-Device-Fundamentals-2018.png"),
      footerLink: [
        {
          name: "Badge",
          url: "https://www.youracclaim.com/badges/ad3ae1da-396a-427d-a58b-c39e1652ce92/public_url"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1joc5B9c-7evfXEv7s5TKfMm8bG8hlf1k/view?usp=sharing"
        }
      ]
    },
    {
      title: "MTA: Networking Fundamentals",
      subtitle:
        "Earners of the MTA: Networking Fundamentals certification have demonstrated knowledge of fundamental networking concepts.",
      image: require("./assets/images/MTA_Networking_Fundamentals_2017-01.png"),
      footerLink: [
        {
          name: "Badge",
          url: "https://www.youracclaim.com/badges/b6830478-52da-4460-82b9-5a0b7ac76a1f/public_url"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/12jsUGrNIMiKg6VjEIEC0g1WD6OKlsMtF/view?usp=sharing"
        }
      ]
    },
    {
      title: "BCS Level 3 Award in Business Processes",
      subtitle: "Completed Level 3 Award in Business Processes",
      image: require("./assets/images/bcs.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1o0V-wAJ4B9Hms0QgY2gWo_uCv-s_HYT6/view?usp=sharing"
        }
      ]
    },
    {
      title: "BCS Level 3 Award in Coding and Logic",
      subtitle: "Completed Level 3 Award in Coding and Logic",
      image: require("./assets/images/bcs.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1L6s0v_Nx92VIAkz9xba-cIa2k8w15rwz/view?usp=sharing"
        }
      ]
    },
    {
      title: "Computer Science",
      subtitle: "Completed Higher Education in Computer Science",
      image: require("./assets/images/RHUL Logo.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1ROFU2lIRpuS4a_oJTYFeo-B7KSwBheHo/view?usp=sharing"
        }
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
  // number: "+92-0000000000",
  email_address: "simba.ndoro@dittogod.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
