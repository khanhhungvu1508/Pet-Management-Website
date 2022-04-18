import Sidebar from "../../../sidebar/Sidebar"
import "./single.css"
import SinglePost1 from "../../../singlePost/SinglePost1"
export default function Single1() {
  return (
    <div className="single">
        {/* post */}
        <SinglePost1/>
        <Sidebar/> 
    </div>
  )
}
