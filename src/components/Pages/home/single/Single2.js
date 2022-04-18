import Sidebar from "../../../sidebar/Sidebar"
import "./single.css"
import SinglePost2 from "../../../singlePost/SinglePost2"
export default function Single2() {
  return (
    <div className="single">
        {/* post */}
        <SinglePost2/>
        <Sidebar/> 
    </div>
  )
}
