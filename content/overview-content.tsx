import ProfileImg from '../public/images/overview/profile_pic.png';

export const profileImg = {
    src: ProfileImg.src,
    alt: 'profile img',
}

export const exampleProfile = {
    sectionId: "overview",
    name: 'Peter Aiello.',
    jobTitle: 'Full-stack web developer',
    profileImg: profileImg,
    profileDesc: 
        `<p>Hi, I’m Peter, a web developer from the UK, now living in Canada. I have nine years of web development experience, with nearly five specializing in frontend.</p>
        <p>I’ve built websites and component libraries for clients in engineering, automotive (including electric vehicles), finance and charities, using modern headless stacks such as Next.js, TypeScript and Sanity. </p>
        <p>My strength lies in my resilience to see complex projects through to completion. </p>
        <p>Outside work, I’m an avid runner and have completed four marathons. </p>`,
    links: 
        [
            {preLabel: 'WWW', label: 'peteraiello.dev', customLink: {href: 'https://peteraiello.dev', target: "_blank"}},
            {preLabel: 'EM', label: 'hello@peteraiello.dev', customLink: {href: 'mailto:hello@peteraiello.dev'}},
            {preLabel: 'IN', label: 'linkedin.com/in/peter-aiello', customLink: {href: 'https://linkedin.com/in/peter-aiello', target: "_blank"}},
            {preLabel: 'GIT', label: 'github.com/peteraiello', customLink: {href: 'https://github.com/peteraiello', target: "_blank"}}
        ],
    resumeLink: {
        label: '',
        href: '',
        icon: ''
    },
    skillGroups: [
        {
            title: 'Hard Skills',
            skills: ["JavaScript", "TypeScript", "React", "Next.JS", "Gatsby", "GraphQL", "Sanity", "Storybook", "Tailwind CSS", "Jest", "Figma"],
        },
        {
            title: 'Soft Skills',
            skills: ["Collaboration", "Problem Solving", "Adaptability", "Attention to Detail"],
        },
    ],
}