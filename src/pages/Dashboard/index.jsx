import { Basics } from "./Basics";
import DashboardAI from "./DashboardAI";
import { StudyMotion } from "./StudyMotion";

export default function Dashboard(){
    return(
        <div>
            <DashboardAI/>
            <StudyMotion/>
            <Basics/>
        </div>
    )
}