import "./singlePost.css"
import ForWrite from "../Pages/forWrite/ForWrite"
export default function SinglePost1() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper"> 
            <img src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af97ed136dcf23f0257d5_image-1-blog-veterinary-x-template-p-800.jpeg" alt="" className="singlePostImg" /> 
            <h1 className="singlePostTitle">
            My cat sleeps constantly, when should I worry about it?
                <div className="singlePostEdit"> 
                    <i className="singlePostIcon far fa-edit"> </i>
                    <i className="singlePostIcon far fa-trash-alt"> </i>
                </div>
            </h1>
            <div className="singlePostInfo"> 
                <span className="singlePostAuthur">Authur: <b>ERIN D.</b></span>
                <span className="singlePostDate">January 9, 2020</span>
            </div>
            <br/>
            <br/>
            <p className="singlePostDesc"> 
                Cats have evolved to sleep for long periods throughout the day. Wild cats need to sleep in order to conserve their energy to hunt, chase and kill their next meal. 
                Although our house cats may not need to hunt, the instinct to sleep and prepare for the hunt carries on. 
            </p>
            
            <br/><br/>
            <p className="singlePostDescCap"> 
                What is the normal amount of sleep for a cat?
            </p>
            <br/><br/>
            <p className="singlePostDesc1"> 
                The number of hours that your cat needs to sleep and the typical sleeping pattern for your cat will change as they get older:      
            </p>
            <br/><br/>
            
            <p className="singlePostDesc2"> 
            &#8226;&nbsp;<b>Kittens</b> will likely sleep most of the day, with a few brief bursts of energy between meals.
            </p>
            <br/> <br/>
            <p className="singlePostDesc2"> 
            &#8226;&nbsp;<b>Adolescent</b> cats may have erratic sleep patterns combined with periods of intense playfulness.
            </p>
            <br/> <br/>
            <p className="singlePostDesc2"> 
            &#8226;&nbsp;<b>Adult</b> cats tend to have more set sleeping schedules that average out at about 12 - 20 hours of sleep each day.
            </p>
            <br/> <br/>
            <p className="singlePostDesc2"> 
            &#8226;&nbsp;<b>Senior </b>cats will tend to have less energy and reduced mobility which means they will sleep more than younger cats.
            </p>
            <br/> <br/>
            
            <p className="singlePostDesc1"> 
            You will likely find that once your cat reaches adulthood they will begin to form a recognizable pattern of sleeping and wakefulness. For example, you may notice that your cat wakes just before you in the morning, enjoys an hour or two of eating and socializing with you, then returns to sleep while you get on with your busy day.
            </p>

            <br/><br/>
            <p className="singlePostDescCap1"> 
                Is my cat really asleep?
            </p>
            
            <br/><br/>
            <p className="singlePostDesc1"> 
            Cats do sleep deeply but not always. Much like people, cats are often just snoozing. Light sleeping makes up about 3/4 of your cat's sleep time, with just 1/4 of their sleep time being devoted to deep sleep.
            </p>
            <br/><br/>
            <p className="singlePostDesc1"> 
            When cats are snoozing lightly they get the rest they require but they're still alert. When your cat is snoozing or napping you may notice that their eyes remain slightly open or that their ears still twitch and rotate towards noises. 
            </p>
            <br/><br/>
            <p className="singlePostDescCap1"> 
                When should I be concerned?
            </p>

            <br/><br/>
            <p className="singlePostDesc1"> 
            There isn't a set amount of sleep to indicate a heath problem or health emergency, instead it's about knowing your cat's normal sleep patterns and recognizing when that pattern changes significantly.
            </p>

            <br/><br/>
            <p className="singlePostDesc1"> 
            If your cat begins to sleep a lot more or a lot less than is usual for him/her there may be a health issue, it's time to visit your vet.
            </p>
      
            <br/><br/>
            <p className="singlePostDesc1"> 
            Cats who begin to sleep more than usual could be ill or experiencing pain. On the other hand, if your cat begins sleeping less than usual they may be suffering from hyperthyroidism or other conditions.
            </p>
         
        </div>
        <ForWrite/>
    </div>
  )
}
