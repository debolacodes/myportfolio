export interface Project {
    id: string;
    name: string;
    url?: string;
    description?: string;
    role?: string;
    tenure?: string;
    launchYear?: string;
    keyFeatures?: string[];
    technicalDetails?: string[];
    coreImpact?: string;
    type?: string;
    targetAudience?: string;
    image?: string;
}

export const portfolioData = {
    personal: {
        name: "Adebola Oyenuga",
        title: "Senior Software Engineer with over 5 years experience (React, VueJS, NodeJs, PythonDRF, HTML/CSS/TailwindCSS)",
        summary: `Adebola Oyenuga is a Senior Software Engineer with over 5 years of professional experience. He holds a BSc in Computer Science and an MSc in Systems Engineering with a focus on Robotics and Artificial Intelligence. Adebola specializes in building scalable solutions, including Buy Now Pay Later (BNPL) applications, identity verification systems, and data marketplaces.`,
        coreStack: {
            languages: ["JavaScript (React, NodeJS, Vue)", "Python (Django)", "React Native", "PHP"],
            designTools: ["UI Design (Figma)", "Graphic Design (Adobe Illustrator)"],
            expertise: ["Leading technical teams", "Developing NPM packages", "Creating technical visions"]
        },
        contact: {
            email: "debolacodes@gmail.com",
            phone: "(+234) 706 6315 488",
            linkedin: "https://linkedin.com/in/adebolaoyenuga/",
            github: "https://github.com/debolacodes"
        },
        image: "/prrofile_image.jpeg"
    },
    projects: [
        {
            id: "moderrator",
            name: "Moderrator",
            url: "https://moderrator.com",
            type: "Professional Stage Timing Solution",
            description: "A high-precision stage timer designed for events, presentations, and live broadcasts.",
            image: "/moderrator.png",
            keyFeatures: [
                "Real-time precision for stage management.",
                "Schedule synchronization across multiple screens with low latency.",
                "Live preview interface displaying current items (e.g., 'Keynote Speech'), elapsed time, and total duration."
            ],
            targetAudience: "Event moderators and production professionals seeking seamless schedule management."
        },
        {
            id: "invvoices",
            name: "Invvoices",
            url: "https://invvoices.com/",
            type: "Invoicing Platform",
            description: "A comprehensive invoicing and financial tracking platform.",
            image: "/invvoices.png",
            keyFeatures: [
                "Detailed Dashboard: Tracks total revenue, pending payments, and completed transactions.",
                "Invoice Management: Tools to create, schedule, and preview live documents.",
                "Multi-Currency Support: Handles analytics in various currencies, including USD and NGN."
            ]
        },
        {
            id: "wordnownow",
            name: "WordNowNow",
            url: "https://word.moderrator.com",
            type: "Scripture Index",
            description: "An easy-to-use index of Bible text categorized by emotional and seasonal needs.",
            image: "/wordnownow.png",
            keyFeatures: [
                "Categorized Navigation: Quick access to scriptures regarding Peace, Faith, Joy, Health, and Prosperity.",
                "Clean UI: Minimalist design focused on readability and user reflection."
            ]
        },
        {
            id: "blue-skills",
            name: "The Blue Skills",
            url: "https://theblueskills.com",
            type: "Service Hailing Solution",
            image: "/Blueskills.png",
            launchYear: "2024",
            coreImpact: "Developed a platform to connect users with service providers, streamlining the process of finding and hiring skilled labor."
        },
        {
            id: "datamarket",
            name: "DataMarket",
            url: "https://Datamarket.co",
            type: "Loan Application and Customer Intelligence",
            image: "/Datamarket.png",
            launchYear: "2024",
            coreImpact: "Part of the Izifin suite, this solution focuses on aggregating data to provide deeper insights into customer behavior and loan eligibility."
        },
        {
            id: "izibnpl",
            name: "iziBNPL",
            type: "Buy Now Pay Later (BNPL) Loan Application and Collection",
            image: "/izifin.png",
            launchYear: "2023",
            technicalDetails: [
                "Developed using ReactJS, Redux, and Tailwind CSS.",
                "Ensures transparent loan management and user-friendly interfaces for financial transactions."
            ]
        },
        {
            id: "farmz2u",
            name: "Farmz2u",
            url: "https://farmz2u.com",
            type: "Farming Management Platform",
            image: "/farmz2u.png",
            tenure: "2019–2021",
            role: "Senior Software Engineer",
            keyFeatures: [
                "Developed software solutions for onboarding farmers.",
                "Defined the technical vision and direction for the organization.",
                "Represented the company in pitches to partners and investors."
            ]
        },
        {
            id: "chekkit",
            name: "Chekkit App",
            url: "https://chekkitapp.com",
            type: "Anti-Counterfeiting and Product Tracking App",
            image: "/chekkit.webp",
            tenure: "2018–2019",
            role: "Senior Software Engineer",
            keyFeatures: [
                "Created the organization's pioneer Drug Verification Solution.",
                "Developed the first User Intelligence Solution for the platform.",
                "Successfully pitched to international investors, including Facebook and MEST."
            ]
        }
    ]
};
