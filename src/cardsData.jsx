import img1 from "./images/icon-supervisor.svg";
import img2 from "./images/icon-team-builder.svg";
import img3 from "./images/icon-karma.svg";
import img4 from "./images/icon-calculator.svg";


const Red = "hsl(0, 78%, 62%)";
const Cyan = "hsl(180, 62%, 55%)";
const Orange = "hsl(34, 97%, 64%)";
const Blue = "hsl(212, 86%, 64%)";

const Data = [
    {
        title: "Supervisor",
        paragraph: "Monitors activity to identify project roadblocks",
        imgSrc: img1,
        borderColor: Cyan
    },
    {
        title: "Team Builder",
        paragraph: "Scans our talent network to create the optimal team for your project",
        imgSrc: img2,
        borderColor: Red
    },
    {
        title: "Karma",
        paragraph: "Regularly evaluates our talent to ensure quality",
        imgSrc: img3,
        borderColor: Orange
    },
    {
        title: "Calculator",
        paragraph: "Uses data from past projects to provide better delivery estimates",
        imgSrc: img4,
        borderColor: Blue
    },

]

export default Data;