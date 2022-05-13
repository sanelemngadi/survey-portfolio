
interface SurveysInterface {
    name: string,
    link: string,
    description: string,
    status: string,
}
export const surveys: SurveysInterface[] = [
    {
        name: "Join",
        link: "/surveying/the-join",
        description: "calculate directions and distances",
        status: "New"
    },
    {
        name: "Polar",
        link: "/surveying/the-polar",
        description: "calculate coordinates",
        status: "New"
    },
    {
        name: "Collimation",
        link: "/surveying/collimation-method",
        description: "calculate hpcs",
        status: "New"
    },
    {
        name: "Rise & Fall",
        link: "#",
        description: "calculate height differences",
        status: "comming soon"
    },
    {
        name: "Traverse",
        link: "#",
        description: "calculate positions",
        status: "comming soon"
    },
    {
        name: "Curves",
        link: "#",
        description: "calculate curves",
        status: "comming soon"
    },
]
