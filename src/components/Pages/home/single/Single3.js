import Sidebar from "../../../sidebar/Sidebar"
import "./single.css"
import SinglePost3 from "../../../singlePost/SinglePost3"
export default function Single3() {
  return (
    <div className="single">
        {/* post */}
        <SinglePost3/>
        <Sidebar/> 
    </div>
  )
}
