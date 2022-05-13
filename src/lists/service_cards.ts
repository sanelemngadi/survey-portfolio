
interface ListsProps {
    src: string,
    width: string,
    height: string,
    alt: string,
    heading: string,
    description: string,
    link: string
}
export const ServiceCards: ListsProps[] = [
    {
        src: "/assets/services.png",
        width: "52px",
        height: "73px",
        alt: "Web Design illustration",
        heading: "Web Design",
        description: "I design portfolio, e-commerce, media, blog websites, etc. I am a UI/UX design that ensure your webpages are beautiful and easy to use for your customers.",
        link: "#"
    },
    {
        src: "/assets/web-dev.png",
        width: "62px",
        height: "49px",
        alt: "Web development illustration",
        heading: "Web Development",
        description: "I develop pretty designed websites that are fast, scalable and usable. If you have your own design, I can develop from your design.",
        link: "#"
    },
    {
        src: "/assets/studymap.png",
        width: "62px",
        height: "62px",
        alt: "Study Maps illustration",
        heading: "Project Study Maps",
        description: "I am a land surveyor by profession and programmer by passion, I help especially post grad students to achieve professional study maps with the help of Esri ArcMap.",
        link: "#"
    },
]