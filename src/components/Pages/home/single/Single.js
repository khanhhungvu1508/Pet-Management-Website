import Sidebar from "../../../sidebar/Sidebar"
import "./single.css"
import "./../../../style.css"
import SinglePost from "../../../singlePost/SinglePost"

export default function Single() {
  return (
    <div className="single">
        {/* post */}
        
        <SinglePost  />
        <Sidebar/> 
    </div>
  )
}
