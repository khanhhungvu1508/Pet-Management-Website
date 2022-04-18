import "./post.css"
import { Link } from "react-router-dom"
export default function Post5() {
  return (
    <div className="post">
        <Link to="/Posts/Post5"> 
        <img 
            className="postImg"
            src="https://c4.wallpaperflare.com/wallpaper/44/424/1017/baby-animals-cat-animals-kittens-wallpaper-preview.jpg" 
            alt=""
        />
        <span className="postCat"> 
                    <b>Breed</b>
        </span>
        <div className="postInfo"> 
            <span 
                className="postTitle">
                Ten things you don't know about Persian cats
            </span>
          
            <span className="postDate">May 14, 2021</span>
        </div>
        <p className="postDesc">
        Persian cats are one of the most popular domestic feline breeds. Did you know that the specimens we know today come from the 
        mixture of pure Persian and white Turkish angora? And that they have no hunting instinct?
        </p>
        </Link>
    </div>
  )
}
