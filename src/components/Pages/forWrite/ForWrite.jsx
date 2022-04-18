import "./forWrite.css"
import { Link } from "react-router-dom"
export default function ForWrite() {
  return (
    <div forwrite>
        <span className="Description">  
            if you enjoy writing, I'd love to encourage you to write about your experience with pet. 
        </span>
        <Link to="/Write"> 
        <span className="buttonWrite">Write an article</span>
        </Link>
    </div>
    

  )
}
