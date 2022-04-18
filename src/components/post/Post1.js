import "./post.css"
import { Link } from "react-router-dom"
export default function Post1() {
  return (
    <div className="post">
        <Link to="/Posts/Post1"> 
        <img 
            className="postImg"
            src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af97ed136dcf23f0257d5_image-1-blog-veterinary-x-template-p-2000.jpeg" 
            alt=""
        />
        <span className="postCat"> 
                    <b>Health</b>
        </span>
        <div className="postInfo"> 
            <span 
                className="postTitle">My cat sleeps constantly, when should I worry about it?
            </span>
          
            <span className="postDate">January 9, 2020</span>
        </div>
        <p className="postDesc">
        Cats have evolved to sleep for long periods throughout the day. Wild cats need to sleep in order to conserve their energy
         to hunt, chase and kill their next meal. Although our house cats may not need to hunt, the instinct to sleep and prepare for
          the hunt carries on.
        </p>
        </Link>
    </div>
  )
}
