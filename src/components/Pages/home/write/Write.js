import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
            className="writeImg"
            src="https://chocorgi.vn/wp-content/uploads/2020/12/cho-cori-gia-fb-thumb.jpg"
            alt=""
        />
        <form className="writeForm"> 
            <div className="writeFormGroup"> 
                <label htmlFor="fileInput"> 
                    <i className="writeIcon 
                    fas fa-plus"> </i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}></input>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/> 
            </div>
            <div className="writeFormGroup"> 
                <textarea 
                    placeholder="Share your story..." 
                    type="text" 
                    className="writeInput writeText"> 
                </textarea> 
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
