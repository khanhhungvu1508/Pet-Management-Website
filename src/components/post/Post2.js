import "./post.css"
import { Link } from "react-router-dom"
export default function Post2() {
  return (
      
    <div className="post">
        <Link to="/Posts/Post2"> 
        <img 
            className="postImg"
            src="https://www.thesprucepets.com/thmb/9hqVbNiBKZwWcSG5dyNylCOMI_Y=/1000x667/filters:fill(auto,1)/cat-is-not-eating-4579814-01-783f3000633e48e695a3d4f8a9bb33fa.jpg" 
            alt=""
        />
        <span className="postCat"> 
                    <b>Food</b>
        </span>
        <div className="postInfo"> 
            <span 
                className="postTitle">The best cat food, according to experts and veterinarians
            </span>
           
            <span className="postDate">December 16, 2020</span>
        </div>
        <p className="postDesc">
        We love our kitties and want them to be happy and well fed, but how do we even start to know what food is the best for them? 
        Is it simply the food they most enjoy? Or the foods that will help them be healthy and well-nourished. Our cats may have one answer 
        to that question but we know the right answer is what is best for their long-term health, and that starts with understanding what it 
        is they actually do need, nutrition-wise.
        </p>
        </Link>
    </div>
  )
}
