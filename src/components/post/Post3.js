import "./post.css"
import { Link } from "react-router-dom"
export default function Post3() {
  return (
    <div className="post">
        <Link to="/Posts/Post3"> 
        <img 
            className="postImg"
            src="http://thukieng.net/wp-content/uploads/2017/11/21742976_1557133474348181_8228327305235562089_n.jpg" 
            alt=""
        />
        <span className="postCat"> 
                    <b>Trainning</b>
        </span>
        <div className="postInfo"> 
            <span 
                className="postTitle">5 essential commands you can teach to your dog
            </span>
           
            <span className="postDate">March 10, 2021</span>
        </div>
        <p className="postDesc">
        Are you looking for the best commands to teach your dog? Although having a trained dog isn’t the same as having a 
        balanced dog, teaching your dog basic dog training commands can be helpful when tackling behavior problems despite whether 
        they are existing ones or those that may develop in the future.
        </p>
        </Link>
    </div>
  )
}
