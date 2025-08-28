import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import { AccordionItemData, bannerDataI, heroServiceSectionI } from "./types";
import {
  GraduationCap,
  Engineering,
  Calender,
  Quality,
  Global,
  Team,
  Support,
  License,
} from "./icons";

import { broadcast, insurance, policy, processIcon } from "@/assets/icons";
import { baseUrl } from "@/helpers/baseUrl";

const SocialLinks: { Icon: IconType; name: string; url: string }[] = [
  {
    Icon: FaXTwitter,
    name: "twitter",
    url: "https://x.com/blizservices1",
  },
  {
    Icon: MdFacebook,
    name: "Facebook",
    url: "https://web.facebook.com/blizservices1",
  },
  {
    Icon: FaInstagramSquare,
    name: "Instagram",
    url: "https://www.instagram.com/blizservices1",
  },
  {
    Icon: IoLogoLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/bliz-services",
  },
];

export const linkToMoreTestimonial =
  "https://www.google.com/search?sca_esv=aed0d697877661b8&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_NncRk6vLpqRfuVhINiUYS8hoWxRE64YqtxDt2piFfN_JAQSX_XCnSbta2l2xAVYV1skOjQNvYPF_Xsv39Mt7SJisZq&q=Bliz+Services+Reviews&sa=X&ved=2ahUKEwiFjLLIq5ePAxVIG9AFHVpNJEEQ0bkNegQINBAE&biw=1792&bih=841&dpr=1";

export const BayStreet =
  "https://www.google.com/maps/place/330+Bay+St.+%231400,+Toronto,+ON+M5H+2S8,+Canada/@43.650023,-79.383767,16z/data=!4m15!1m8!3m7!1s0x882b34cd4666f521:0x1a4e0649bc001003!2s330+Bay+St.+%231400,+Toronto,+ON+M5H+2S8,+Canada!3b1!8m2!3d43.6500191!4d-";

export const Cameroon =
  "https://www.google.com/maps/place/Bonduma+Spring/@4.155015,9.2648712,17.14z/data=!4m6!3m5!1s0x106133ad7b5d54c1:0x69a82b416e25fe1!8m2!3d4.1549898!4d9.2697507!16s%2Fg%2F11v5vy05yp?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D";

export const contactURL = "";

export const applyWorkUrl = "";

export const applyStudyUrl = "";

export const studyPageUrl = `${baseUrl()}/education`;

export const workPageUrl = `${baseUrl()}/employment`;

export const location = [
  {
    street: "330 Bay Street",
    state: "Suite 1400, Toronto",
    country: "Ontario M5H 2S8, Canada",
  },
  {
    street: "Bonduma, Buea",
    state: "South West Region",
    country: "Cameroon",
  },
];

export const contact: { email: string; tel1: string; tel2: string } = {
  email: "info@blizservices.com",
  tel1: "+(237) 676 976 385",
  tel2: "+(1) 705 500 5203",
};

export const headerAddress = [
  {
    text: "info@blizservices.com",
    label: "Email Us",
    link: "mailto:info@blizservices.com",
  },
  {
    text: "+(237) 676 976 385",
    label: "Call Us",
    link: "tel:+237676976385",
  },
];

export const testimonials = [
  {
    image: "/testimonial/bliz-johnson.avif",
    name: "syds Atem",
    // role: "Investor",
    text: "Their services are fast and reliable compared to other services I have used in the past. Bliz services keeps in contact with you all the way to the end. They are the real deal. They make every process easy to manage and follow through.",
    // rating: 5,
  },
  {
    image: "/testimonial/bliz-Okarfor.webp",
    name: "ingride magang",
    // role: "Actor ",
    text: "A dedicated, dynamic, and responsible company. Thank you for the quality of service and customer service",
    // rating: 3,
  },
  {
    image: "/testimonial/bliz-joyce.avif",
    name: "Barry Ayodi",
    // role: "Social Maketer ",
    text: "Great services. Very dedicated and caring Staff",
    // rating: 2,
  },
  {
    image: "/testimonial/bliz-emmauel.webp",
    name: "Antony Makenzi",
    // role: "Client ",
    text: "Great support all through...I'm a satisfied client",
    // rating: 4,
  },
  {
    image: "/testimonial/bliz-sarah.webp",
    name: "Franklin Morfaw",
    // role: "Backend Developer",
    text: "The best in the industry right now. Very honest, dedicated and knowledgeable people. I vouch for them.",
    // rating: 1,
  },
];

export const homeServices = [
  {
    image: "/new/study-abroad-1.jpg",
    title: "Study Abroad",
    link: studyPageUrl,
    text: "We offer fantastic assistance if you wish to further your education overseas.",
  },
  {
    image: "/new/leadership-banner.jpg",
    title: "Work Abroad",
    link: workPageUrl,
    text: "We’re familiar with the local job demand and work legislation.",
  },
  // {
  //   image: "/new/happy-teaam.jpg",
  //   title: "Digital Literacy",
  //   url: "/",
  //   text: "Expand your business globally with strategic market entry services",
  // },
];
export const homeCases = [
  {
    image: "/new/couple-relocation.jpg",
    name: "John Olamide",
    link: "/",
    text: "Study Abroad",
  },
  {
    image: "/new/relocation-abroad.jpg",
    name: "Olumide Elijah",
    link: "/",
    text: "Relocation",
  },
  {
    image: "/new/hr-manager-welcoming-successful-candidate.jpg",
    name: "Okarfor Emmanuel",
    link: "/",
    text: "Skills",
  },
];

export const homeAboutParagrahText = [
  "Personalized Guidance",
  "End-To-End Support",
  "Proven Success",
  "Trusted Partnerships",
];

export const accordionData: AccordionItemData[] = [
  {
    id: 1,
    title: "Expert Guidance Every Step of the Way",
    content: {
      description:
        "We maintain strong connections with reputable universities and training institutions across the globe. Our network ensures you are matched with the best options to achieve your desired qualifications.",
    },
  },
  {
    id: 2,
    title: "Access to Top Institutions Worldwide",
    content: {
      description:
        "We maintain strong connections with reputable universities and training institutions across the globe. Our network ensures you are matched with the best options to achieve your desired qualifications.",
    },
  },
  {
    id: 3,
    title: "Career-Boosting Work Placement Support",
    content: {
      description:
        "Beyond education, we help you secure overseas work placements that enhance your skills and global exposure. Our guidance ensures you are well-prepared for international career success.",
    },
  },
  {
    id: 4,
    title: "Simplified Application Process",
    content: {
      description:
        "From filling out applications to preparing necessary documents, we take the stress out of the process. Our team ensures your applications are accurate, complete, and submitted on time—giving you the best chance of acceptance.",
    },
  },
];

export const homeContacttexts = [
  {
    Icon: GraduationCap,
    text: "Parturient montes nascetur ridiculus mus is maecenas , neque in feugiat elementum lacus risus. ",
    title: "Study OverSeas Consultant",
  },
  {
    Icon: Engineering,
    text: "Parturient montes nascetur ridiculus mus is maecenas , neque in feugiat elementum lacus risus.",
    title: "Work OverSeas Consultant",
  },
];

export const serviceOverlay = [
  {
    title: "Get a free qoutes",
    text: "Keep you updated of recent development",
    image: broadcast,
    background: "white",
  },
  {
    title: "Fast & Easy process",
    text: "Keep you updated of recent development",
    image: processIcon,
    background: "other",
  },
  {
    title: "Control over policy",
    text: "Keep you updated of recent development",
    image: policy,
    background: "white",
  },
  {
    title: "Insurance Policy",
    text: "Keep you updated of recent development",
    image: insurance,
    background: "white",
  },
];

export const specialServics = [
  {
    title: "Study Overseas",
    text: "Shape your life and explore more through education",
    image: "/new/service-services-education.jpg",
    link: ",",
  },
  {
    title: "Mass Litracy",
    text: "Shape your life and explore more through education",
    image: "/new/services-services-1.jpg",
    link: ",",
  },
  {
    title: "Work Aboard",
    text: "Shape your life and explore more through education",
    image: "/new/services-services-skills.jpg",
    link: ",",
  },
];

export const homeProgressData = [
  {
    label: "University Admissions",
    percentage: 98,
  },
  {
    label: "Job Placement Success",
    percentage: 95,
  },
  {
    label: "Bussiness Expansion",
    percentage: 87,
  },
];
export default SocialLinks;

// education

export const educationServicesProgram = [
  {
    link: applyStudyUrl,
    image: "/new/canada-education.jpg",
    name: "Canada",
    text: "Canada, which is home to some of the best universities in the world, is emerging as a model for high-quality graduate education and research. In the QS and Times Higher Education global university rankings, respectively, 26 and 27, Canadian universities are ranked. Academic research in a variety of sectors, including technology, medicine, agriculture, telecommunications, and environmental science, is also supported and encouraged by the Canadian government. ",
  },
  {
    link: applyStudyUrl,
    image: "/new/united-state-education.jpg",
    name: "United States",
    text: "The prestige of earning a degree from a US-accredited university continues to make the US the top choice for overseas students. Higher education institutions in the US are renowned for having exceptionally high standards for the quality of their teaching methods, intellectual rigor, and learning experiences.",
  },
  {
    link: applyStudyUrl,
    image: "/new/united-Kingdom-education.jpg",
    name: "United Kingdom",
    text: "The UK is one of the world’s top destinations for international students. With globally recognized universities, world-class teaching, and a tradition of innovation, a UK degree opens doors anywhere in the world. From research excellence to life-changing experiences, studying in the UK isn’t just about education; it’s about building your future",
  },
  {
    link: applyStudyUrl,
    image: "/new/Irish_Student.png",
    name: "Ireland",
    text: "Ireland has become one of the leading destinations for international students, combining world-class universities with a rich academic tradition. Known for innovative teaching, research excellence, and globally respected degrees, Irish institutions offer students not only an outstanding education but also a welcoming, vibrant environment that prepares them for success anywhere in the world.",
  },
  {
    link: applyStudyUrl,
    image: "/new/EU_Student.png",
    name: "Schengen",
    text: "The Schengen region is a top choice for international students, offering world-class universities, affordable tuition, and globally recognized degrees. With career opportunities and the freedom to travel across 27 countries on one visa, students enjoy the perfect balance of education, opportunity, and adventure.",
  },
];

export const workServicesProgram = [
  {
    link: applyStudyUrl,
    image: "/new/Work_Abroad_US.webp",
    name: "United State",
    text: "Nearly all of the largest corporations in the world have operations in the USA, which means that there are plenty of jobs there. In America, you will have access to job chances that you won’t find anyplace else in the globe. Just one internship with a well-known company could transform your career",
  },
  {
    link: applyStudyUrl,
    image: "/new/working-in-united-kingdom.avif",
    name: "United Kingdom",
    text: "You will be in excellent company as a foreign worker in the UK, which has numerous multinational communities. It’s not surprising that the UK is a popular choice for overseas graduates looking to launch their careers given the country’s diversified employment sectors, favorable working conditions, and abundance of employment chances.",
  },
  {
    link: applyStudyUrl,
    image: "/new/Work_Abroad_Canada.webp",
    name: "Canada",
    text: "It has a remarkable degree of economic independence thanks to its trustworthy and open public finance system. The banking and financial systems in Canada are robust. The nation provides its workforce with first-rate medical facilities, paid time off, and holidays that include parental and maternal leave.",
  },
];

export const educationPrograms = [
  {
    title: "Graduate Programs",
    text: [
      "Stand out for advancement opportunities.",
      "Gain specialized knowledge.",
      "Maintain cutting-edge industry skills and learn new technology",
    ],
  },
  {
    title: "Undergraduate Programs",
    text: [
      "Prepare for a new career field.",
      "Broaden your skillset.",
      "Expand your strategic and leadership capabilities.",
    ],
  },
  {
    title: "Associate Degree Programs",
    text: [
      " Prepare for better opportunities.",
      "Improve your skills.",
      "Learn cutting-edge industry skills and new technologies.",
    ],
  },
];

export const workPrograms = [
  {
    title: "WORK IN THE UK",
    text: [
      "Better Working Conditions.",
      "Excellent Pay and Benefits.",
      "Higher Chances For Success.",
      "Experience a multicultural Nation.",
      "Better Social Amenities",
    ],
  },
  {
    title: "WORK IN CANADA",
    text: [
      "Excellent Working Conditions.",
      "Good Pay and Benefits.",
      "Higher Chances For Success.",
      "Experience a multicultural Nation.",
      "Better Social Amenities.",
    ],
  },
];

export const educationServices = [
  {
    image: Calender,
    title: "Flexibility",
    text: "We'll collaborate with you and ensure that we meet your expectations.",
  },
  {
    image: Quality,
    title: "Quality",
    text: "We'll collaborate with The educational institutions we partner with have produced the most successful graduates. and ensure that we meet your expectations.",
  },
  {
    image: Global,
    title: "Global",
    text: "We'll We've been very successful in helping students to further their education globally. with you and ensure that we meet your expectations.",
  },
  {
    image: Team,
    title: "Expertise",
    text: "We'll We have a team of experts and consultants who will assist you with your application. with you and ensure that we meet your expectations.",
  },
  {
    image: Support,
    title: "Support",
    text: "We'll collaborate We pride ourselves on excellent customer support for your convenience. you and ensure that we meet your expectations.",
  },
  {
    image: License,
    title: "Certified",
    text: "We'll collaborate with you and ensure that we meet All educational institutions are certified by a reputable board in their respective countries. expectations.",
  },
];

export const educationFAQ = [
  {
    title: "What is the duration of my credential's evaluation?",
    content:
      "A duration of two weeks will be expected for the board to evaluate and authenticate your credentials, if this takes longer than two weeks without a definite response, please contact us.",
  },
  {
    title: "What documents do I need to submit?",
    content:
      "a data page of your international passport your transcripts from your previous school and a few other documents that will be listed at the beginning of your application",
  },
  {
    title: "What if I get rejected at the institution of my choice?",
    content:
      "if this happens, fortunately you can always re-apply to another institution",
  },
  {
    title: "How long is this process?",
    content:
      "this process varies based on different institutions, but bear in mind that we will keep you updated throughout the process.",
  },
  {
    title: "What countries can I apply to?",
    content:
      "Your application is valid for the United States of America, the United Kingdom and Canada",
  },
];

export const workFAQ = [
  {
    title: "What are my options of working Abroad?",
    content: "there are many options but here are a few:",
    image: "/images/praying-1.png",
    list: [
      "Through an agency  program provider. ",
      "Work abroad as a teacher.",
      "Move abroad, then find work.",
      "Get a working holiday visa.",
      "Do a work exchange.",
      "Volunteer.",
      "Freelance/digital nomad.",
    ],
  },
  {
    title: "Do I need a Visa to Work Abroad",
    content:
      "Yes you do, this will be process is very important and will be carried out after you have been accepted by the company",
    image: "/images/praying-1.png",
  },
  {
    title:
      "Can I work abroad during the summer and be able to save money at the same time?",
    content:
      "yes you can, this is mainly based on the salary agreement, i would advise you to save up and take that chance to explore the country you are working in.",
    image: "",
  },
  {
    title: "What kinds of jobs are available to me after I graduate?",
    content:
      "Many job opportunities will be made available to you according to your qualification.",
    image: "",
  },
  {
    title:
      "I'm considering working in a foreign language environment, but I'm not sure my language skills are good enough. What do employers expect from foreign employees or interns?",
    content:
      "most employers will be comfortable with the global language (English), but you could take lessons, to give you that edge.",
    image: "",
  },
  {
    title:
      "How can I prepare for cultural differences and feelings of homesickness or loneliness when I'm abroad? How will I feel when I finally come home after a long time abroad?",
    content:
      "The journey will be super exciting, it will be an opportunity to see the beauty at the outskirts of your motherland, keeping in touch with your family through social media can help you feel better.",
    image: "",
  },
  {
    title: "I'm ready to work abroad – what do I need to do now?",
    content: "Contact us and we will take you through the entire process.",
    image: "",
  },
];

export const bannerData: bannerDataI[] = [
  {
    quote: `"An Investment In Knowledge Pays The Best Interest."`,
    author: "Benjamin Franklin",
    link: applyStudyUrl,
    center: false,
    text: "Studying abroad can provide the structure for students to build the necessary skills to be successful in life and give them an edge over their competition.",
    image: "",
  },
  {
    quote: `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
    author: "",
    link: applyStudyUrl,
    center: true,
    text: "Obtain a worldwide perspective, meet people from all over the world, and explore new places—all while earning credits toward your degree.",
    image: "/new/explore-new-opportunities.avif",
  },
  {
    quote: "You can explore different places!",
    author: "",
    link: applyWorkUrl,
    center: true,
    text: "You have to come out of your comfort zone to experience life.",
    image: "/new/explore-new-opportunities.avif",
  },
];

export const heroSeviceSection: heroServiceSectionI[] = [
  {
    tag: "STUDY OVERSEAS",
    title1: "Boost your",
    title2: "Employability",
    bannerImage: "/new/female-graduate-with-gown.jpg",
    list: [
      "Do you want to have access to greater starting pay and a quicker transfer into career-relevant jobs after graduation?",
      "Do you want to learn important life skills, and develop resilience?",
      "Do you want to take advantage of your chance to travel the world and get insight into your field of study from a new, global viewpoint?",
    ],
    url: applyStudyUrl,
  },
  {
    tag: "WORK OVERSEAS",
    title1: "Explore Different",
    title2: "Employment",
    bannerImage: "/new/Work_abroad_.webp",
    list: [
      "Do you want to benefit from social amenities working overseas?",
      "Do you want to work in an environment where you'll experience financial stability?",
      "Do you want to experience working overseas?",
    ],
    url: applyWorkUrl,
  },
];

export const educationSteps = [
  {
    title: "Complete The Online Student Form",
    content: [
      "Fill out an online student application.",
      "You’ll be provided with a list of required documents to process your application.",
      "A portal will be provided for you to upload your supporting documents.",
      "All the necessary documents must be submitted.",
    ],
  },
  {
    title: "Payment of Service Fees",
    content: [
      "After making payment of the service and processing fees, a student application account will be created.",
    ],
  },
  {
    title: "Credentials Authentication.",
    content: [
      "Your documents will be forwarded to an authentication center. (WES or others depending on the institution) Upon successful verification, the academic institution receives the credentials for admission processing.",
    ],
  },
  {
    title: "Application Results",
    content: [
      `The educational institution provides the outcome of the application. Successful applicants will be given a letter of acceptance and details on how to proceed. 
      Unsuccessful applicants will be provided with a letter of denial, also stating the reasons for denial (Very Rare)`,
    ],
  },
  {
    title: "Immigration Process",
    content: [
      "Successful candidates will pay their first tuition payment to receive their official travel documentation.",
    ],
  },
];

export const workSteps = [
  {
    title: "Complete The Contact Form",
    content: [
      "Fill out a contact online.",
      "A breakdown of the documentation needed to process your application will be given to you.",
      "You will be given a portal to attach your supporting documentation to.",
      "The required paperwork must be presented",
    ],
  },
  {
    title: "Fill Out The Job Application Form",
    content: [
      "a job application form will be made available for you to fill out",
    ],
  },
  {
    title: "Payment of Service Fees",
    content: [
      "A job application account will be created after the service and operational cost have been paid.",
    ],
  },
  {
    title: "Credentials Authentication",
    content: [
      "Your paperwork will be delivered to a facility for verification.",
      "Your job application and necessary papers will be forwarded to various job openings following successful verification.",
    ],
  },
  {
    title: "Immigration Process",
    content: [
      "The chosen applicants will go through an interview process and receive an appointment letter.",
      "the immigration procedure will commence.",
    ],
  },
];
