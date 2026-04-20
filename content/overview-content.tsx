import ProfileImg from '../public/images/overview/peter_aiello_fullstack_web_developer.jpg';

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
        `<p>Hi, I'm Peter, an experienced web developer from the UK currently living in Canada. I have over eight years of industry experience in web development, with five years specializing in front-end web development.</p> 
        <p>I have worked with clients from a variety of industries (automotive, financial and charity) across diverse sectors (EU, FinTech and specialist Banking). Whether I am building extensive component libraries or using cutting-edge frameworks, complexity is prevalent, and my strength lies in using resilience to see projects through to completion.</p>
        <p>Outside of work, I am an avid runner, having completed a variety of events, including four marathons.</p>`,
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
            skills: ["JavaScript", "TypeScript", "React", "Next.JS", "Gatsby", "Storybook", "Jest", "Tailwind CSS", "WordPress", "PHP", "UI & UX Design"],
        },
        {
            title: 'Soft Skills',
            skills: ["Collaboration", "Problem Solving", "Attention to Detail", "Adaptability"],
        },
    ],
    cards: 
        [   
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`},
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`},
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`}
        ]
}