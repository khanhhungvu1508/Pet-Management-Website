import "./post.css"
import { Link } from "react-router-dom"
import AboutPage from "../AboutPage"
export default function Post() {
  return (
    
    <div className="post">
            <Link to="/Posts/Post"> 
            <img 
                className="postImg"
                src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afadf790dc2a997dde426_image-6-blog-veterinary-x-template.jpg" 
                alt=""
            />
            
            <span className="postCat"> 
                        <b>Pet Care</b>
            </span>
            <div className="postInfo"> 
                <span 
                    className="postTitle">Dog toys: How to pick the best and the safest
                </span>
                <span className="postDate">February 18, 2019</span>
            </div>
            <p className="postDesc">
            For dogs and other pets, toys are not a luxury, but a necessity. Toys are important to your dog’s well-being. 
            Toys help fight boredom when you have to leave your dog at home, and provide comfort when they’re feeling nervous. 
            Toys can even help prevent your dog from developing certain problem behaviors.
            </p>  
            
        </Link>

    </div>
  )
}
