import "./home.css"
import Header from "../../header/Header"
import Sidebar from "../../sidebar/Sidebar"
import Posts from "../../posts/Posts"
import ForWrite from "../forWrite/ForWrite"
export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <div className="home1">
          <Posts/> 
          <Sidebar/>
        </div>
        <ForWrite/>
      </div>
    </>
  )
}
