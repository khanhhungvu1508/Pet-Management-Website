import "./post.css"
import { Link } from "react-router-dom"
export default function Post4() {
  return (
    <div className="post">
        <Link to="/Posts/Post4"> 
        <img 
            className="postImg"
            src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afac5d4780959fd62559c_image-5-blog-veterinary-x-template.jpg" 
            alt=""
        />
        <span className="postCat"> 
                    <b>Trainning</b>
        </span>
        <div className="postInfo"> 
            <span 
                className="postTitle">How to adopt a dog: Everything you need to know
            </span>
        
            <span className="postDate">July 19, 2018</span>
        </div>
        <p className="postDesc">
        Adopting a dog can be one of the most rewarding decisions you get to make, but it's also a significant life change. And like any 
        important commitment, the more you know going into the process, the better.
        </p>
        </Link>
    </div>
  )
}
