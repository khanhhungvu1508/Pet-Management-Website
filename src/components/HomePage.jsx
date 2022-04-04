import "./style.css"
import React from "react"
import 'font-awesome/css/font-awesome.min.css'
import Slider from 'react-slick'
import GridSystem from './GridSystem';

function PrevArrowSlider(props) {
    const { style, onClick } = props;
    return (
        <div    
            id="carousel-list-client-description-direction-left"
            style={{ ...style}}
            onClick={onClick}
        >
            <div id="content-direction-carousel-service">
                &#10094;
            </div>
        </div>
    );
}

function ForwardArrowSlider(props) {
    const { style, onClick } = props;
    return (
        <div
            id="carousel-list-client-description-direction-right"
            style={{ ...style}}
            onClick={onClick}
        >
            <div id="content-direction-carousel-service">
                &#10095;
            </div>
        </div>
    );
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.forwardSlider = this.forwardSlider.bind(this);
        this.backwardSlider = this.backwardSlider.bind(this);

        this.state = {
            hoverDogPerVisit: false,
            hoverCatPerVisit: false,
            hoverPetPath: false,
            hoverPetGrooming: false,
            slideIndex: 0,
            keynotEase: "-1",
            posDogPerVisit: "0px",
            posCatPerVisit: "0px",
            posPetPath: "0px",
            posPetGrooming: "-2476px"
        };
    }

    onMouseEnter = (typeMenu) => {
        switch (typeMenu) {
            case "DogPerVisit":
                this.setState({ hoverDogPerVisit: true });
                break;
            case "CatPerVisit":
                this.setState({ hoverCatPerVisit: true });
                break;
            case "PetPath":
                this.setState({ hoverPetPath: true });
                break;
            case "PetGrooming":
                this.setState({ hoverPetGrooming: true });
                break;
            default:
                break;
        }
    }

    onMouseLeave = (typeMenu) => {
        switch (typeMenu) {
            case "DogPerVisit":
                this.setState({ hoverDogPerVisit: false });
                break;
            case "CatPerVisit":
                this.setState({ hoverCatPerVisit: false });
                break;
            case "PetPath":
                this.setState({ hoverPetPath: false });
                break;
            case "PetGrooming":
                this.setState({ hoverPetGrooming: false });
                break;
            default:
                break;
        }
    }

    forwardSlider = () => {
        const slideIndex = this.state.slideIndex;
        switch(slideIndex) {
            case 0:
                this.setState({
                    slideIndex: 1,
                    keynotEase: "4",
                    posDogPerVisit: "-619px",
                    posCatPerVisit: "-619px",
                    posPetPath: "-619px",
                    posPetGrooming: "-619px"
                });
                break;
            case 1:
                this.setState({
                    slideIndex: 2,
                    keynotEase: "1",
                    posDogPerVisit: "1238px",
                    posCatPerVisit: "-1238px",
                    posPetPath: "-1238px",
                    posPetGrooming: "-1238px"
                });
                break;
            case 2:
                this.setState({
                    slideIndex: 3,
                    keynotEase: "2",
                    posDogPerVisit: "619px",
                    posCatPerVisit: "619px",
                    posPetPath: "-1857px",
                    posPetGrooming: "-1857px"
                });
                break;
            case 3:
                this.setState({
                    slideIndex: 0,
                    keynotEase: "3",
                    posDogPerVisit: "0px",
                    posCatPerVisit: "0px",
                    posPetPath: "0px",
                    posPetGrooming: "-2476px"
                });
                break;
            default:
                break;
        }
    }

    backwardSlider = () => {
        const slideIndex = this.state.slideIndex;
        switch(slideIndex) {
            case 0:
                this.setState({
                    slideIndex: 3,
                    keynotEase: "3",
                    posDogPerVisit: "619px",
                    posCatPerVisit: "619px",
                    posPetPath: "-1857px",
                    posPetGrooming: "-1857px"
                });
                break;
            case 1:
                this.setState({
                    slideIndex: 0,
                    keynotEase: "4",
                    posDogPerVisit: "0px",
                    posCatPerVisit: "0px",
                    posPetPath: "0px",
                    posPetGrooming: "-2476px"
                });
                break;
            case 2:
                this.setState({
                    slideIndex: 1,
                    keynotEase: "1",
                    posDogPerVisit: "-619px",
                    posCatPerVisit: "-619px",
                    posPetPath: "-619px",
                    posPetGrooming: "-619px"
                });
                break;
            case 3:
                this.setState({
                    slideIndex: 2,
                    keynotEase: "2",
                    posDogPerVisit: "1238px",
                    posCatPerVisit: "-1238px",
                    posPetPath: "-1238px",
                    posPetGrooming: "-1238px"
                });
                break;
            default:
                break;
        }
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <ForwardArrowSlider />,
            prevArrow: <PrevArrowSlider />,
            centerMode: true,
            centerPadding: 0
        };
        
        //The UI for the items to be shown inside the grid
        const Item = props => {
            //destructure the props
            const { img, title, tag, day } = props
        
            return (
              <div id="grid-articles-news-info-cell">
                <div id="grid-articles-news-info-cell-bg">
                    <img
                        src={img} 
                        alt=""
                        id="grid-articles-news-info-cell-image"
                    />

                    <div id="grid-articles-news-info-cell-tag">
                        {tag}
                    </div>
                </div>

                <div id="grid-articles-news-info-cell-content">
                    <div id="grid-articles-news-info-cell-title">
                        {title}
                    </div>

                    <div id="grid-articles-news-info-cell-detail">
                        <div id="grid-articles-news-info-cell-detail-click">
                            <div id="grid-articles-news-info-cell-detail-click-text">
                                Read more
                            </div>

                            <div id="grid-articles-news-info-cell-detail-click-direction">
                                &#10140;
                            </div>  
                        </div>

                        <div id="grid-articles-news-info-cell-detail-date">
                            {day}
                        </div>
                    </div>
                </div>
              </div>
            )
        }

        return (
            <div>
                <div id="homepage">
                    <div id="homepage-wrapper">
                        <div id="content-homepage">
                            <div id="content-homepage-contact">
                                <div id="title-content-homepage-contact">
                                    A veterinary you and your little friend can trust
                                </div>

                                <div id="slogan-content-homepage-contact">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat a feugiat cursus nisi, vel enim. Non et vitae dictum.</p>
                                </div>

                                <div id="btn-homepage-contact">
                                    Contact us
                                </div>
                            </div>
                            <div id="content-homepage-img-contact">
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd0c1e9f99ae5c3b73851_image-home-hero-veterinary-x-template.png"
                                    alt=""
                                    id="bg-people-contact"
                                />
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd2b180864b4d576f3513_shape-1-home-hero-veterinary-x-template.svg"
                                    alt=""
                                    id="bg-pic1-motion"
                                /> 
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd2b223d7828a82be485f_shape-2-home-hero-veterinary-x-template.svg"
                                    alt=""
                                    id="bg-pic2-motion"
                                />
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd2b240f22c93fb2fa520_shape-3-home-hero-veterinary-x-template.svg"
                                    alt=""
                                    id="bg-pic3-motion"
                                />
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd2b133ed146af62ff13c_shape-4-home-hero-veterinary-x-template.svg"
                                    alt=""
                                    id="bg-pic4-motion"
                                /> 
                            </div>
                        </div>
                        <img 
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ac01f7f5b7907962d22b8_corner-1-home-hero-veterinary-x-template.svg"
                            alt=""
                            id="bg-corner-homepage-left"
                        />
                        <img 
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ac01e014c10dfbdbd4181_corner-2-home-hero-veterinary-x-template.svg"
                            alt=""
                            id="bg-corner-homepage-right"
                        />
                    </div>
                </div>

                <div id="list-contact-info">
                    <div id="content-list-contact-info">
                        <div id="content-list-contact-info-wrapper">
                            <div id="col-contact-info">
                                <img 
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ab1d49619c65e80a2ee8e_icon-1-home-contact-veterinary-x-template.svg"
                                    alt=""
                                    id="logo-col-contact-info"
                                />
                                <div id="content-col-contact-info">
                                    <div id="title-content-col-contact-info">
                                        Contact us
                                    </div>

                                    <div id="des-content-col-contact-info">
                                        <div id="email-contact-info">
                                            contact@vet.com
                                        </div>

                                        <div id="tel-contact-info">
                                            (323) 238 - 0696
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="col-contact-info">
                                <img 
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ab1d35218512a6abca7e1_icon-2-home-contact-veterinary-x-template.svg"
                                    alt=""
                                    id="logo-col-contact-info"
                                />
                                <div id="content-col-contact-info">
                                    <div id="title-content-col-contact-info">
                                        Open hours
                                    </div>

                                    <div id="des-content-col-contact-info">
                                        <div id="time-contact-info">
                                            <div id="time-contact-info-text">
                                                <strong>Mon - Fri:</strong> 8:00 AM to 5:00 PM
                                            </div>

                                            <div id="time-contact-info-text">
                                                <strong>Saturday:</strong> 9:00 AM to 3:00 PM
                                            </div>
                                            
                                            <div id="time-contact-info-text">
                                                <strong>Sunday:</strong> 9:00 AM to 2:00 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="col-contact-info">
                                <img 
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ab1d391631063e8b68894_icon-3-home-contact-veterinary-x-template.svg"
                                    alt=""
                                    id="logo-col-contact-info"
                                />
                                <div id="content-col-contact-info">
                                    <div id="title-content-col-contact-info">
                                        Location
                                    </div>

                                    <div id="des-content-col-contact-info">
                                        <div id="location-contact-info">
                                            9400 S Normandie Ave #14<br/>
                                            Los Angeles, CA
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="divider-home-page">
                    <div id="divider-home-page-wrapper">

                    </div>
                </div>

                <div id="list-service-info">
                    <div id="list-service-info-wrapper">
                        <div id="title-list-service-info">
                            Our services
                        </div>

                        <div id="carousel-service-info">
                            {
                                this.props.cellOurService.map((serviceCell) =>
                                    <div 
                                        id="cell-carousel-service-info-wrapper"
                                        style={
                                            this.state.keynotEase === serviceCell.key
                                                ? 
                                                    {
                                                        transform: "translateX(" + this.state["pos" + serviceCell.alt] + ")",
                                                        transition: "transform 200ms ease 0s"
                                                    }
                                                : 
                                                    {
                                                        transform: "translateX(" + this.state["pos" + serviceCell.alt] + ")",
                                                        transition: "transform 500ms ease 0s"
                                                    }
                                        }
                                        key={serviceCell.key}
                                    >
                                        <div id="cell-carousel-service" key={serviceCell.key}>
                                            <img 
                                                src={serviceCell.src} 
                                                alt={serviceCell.alt} 
                                                id="cell-carousel-service-img"
                                                onMouseEnter={() => this.onMouseEnter(serviceCell.alt)}
                                                onMouseLeave={() => this.onMouseLeave(serviceCell.alt)}
                                                style={
                                                    this.state["hover" + serviceCell.alt]
                                                        ? {transform: "scale(1.03)"}
                                                        : {}
                                                }
                                            />

                                            <div id="cell-carousel-service-description">
                                                <div 
                                                    id="cell-carousel-service-description-title" 
                                                    style={
                                                        this.state["hover" + serviceCell.alt]
                                                            ? {color: "red"}
                                                            : {}
                                                    }
                                                    onMouseEnter={() => this.onMouseEnter(serviceCell.alt)}
                                                    onMouseLeave={() => this.onMouseLeave(serviceCell.alt)}
                                                >
                                                    {serviceCell.title}
                                                </div>
                                                <div id="cell-carousel-service-description-content">
                                                    {serviceCell.content}
                                                </div>
                                                <div id="cell-carousel-service-description-cost">
                                                    <div id="cell-carousel-service-description-cost-wrapper">
                                                        <img
                                                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611afd91b62c25936eac2f2b_icon-1-service-veterinary-x-template.svg"
                                                            alt=""
                                                            id="cell-carousel-service-description-cost-img"
                                                        />
                                                        {serviceCell.price}
                                                    </div>

                                                    <div id="cell-carousel-service-description-cost-wrapper">
                                                        <img
                                                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611afd9194fa2e2ebdfdf085_icon-2-service-veterinary-x-template.svg"
                                                            alt=""
                                                            id="cell-carousel-service-description-cost-img"
                                                        />
                                                        {serviceCell.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            <div 
                                id="left-direction-carousel-service"
                                onClick = {this.backwardSlider}
                            >
                                <div id="content-direction-carousel-service">
                                    &#10094;
                                </div>
                            </div>

                            <div 
                                id="right-direction-carousel-service"
                                onClick = {this.forwardSlider}
                            >
                                <div id="content-direction-carousel-service">
                                    &#10095;
                                </div>
                            </div>
                        </div>

                        <div id="list-btn-service-info-detail">
                            <div id="btn-service-info-detail-contact">
                                Contact us
                            </div>

                            <div id="access-detail-service-info">
                                Browse all services
                            </div>
                        </div>
                    </div>
                </div>

                <div id="list-brief-about-us-info">
                    <div id="list-brief-about-us-info-wrapper">
                        <div id="list-brief-about-us-info-image">
                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ade7e71b376349b1897b1_image-1-home-about-veterinary-x-template-p-800.jpeg"
                                alt=""
                                id="brief-about-us-info-image-1"
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ade7e113e5848965481f4_image-2-home-about-veterinary-x-template.jpg"
                                alt=""
                                id="brief-about-us-info-image-2"
                            />
                        </div>

                        <div id="list-brief-about-us-info-content">
                            <div id="brief-about-us-info-content-title">
                                About us
                            </div>

                            <div id="brief-about-us-info-content-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla ut lobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra. Facilisi sit mi sed mauris non iaculis elit fusce. Amet nunc in odio molestie lorem mi id a
                            </div>

                            <div id="brief-about-us-info-content-perk">
                                <div id="brief-about-us-info-content-perk-wrapper">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ad4c394d47d115e076a98_icon-check-veterinary-x-template.svg"
                                        alt=""
                                        id="brief-about-us-info-content-perk-image"
                                    />
                                    Over 10 years of experience
                                </div>

                                <div id="brief-about-us-info-content-perk-wrapper">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ad4c394d47d115e076a98_icon-check-veterinary-x-template.svg"
                                        alt=""
                                        id="brief-about-us-info-content-perk-image"
                                    />
                                    20 talented vets ready to help you
                                </div>

                                <div id="brief-about-us-info-content-perk-wrapper">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ad4c394d47d115e076a98_icon-check-veterinary-x-template.svg"
                                        alt=""
                                        id="brief-about-us-info-content-perk-image"
                                    />
                                    High-quality products only
                                </div>
                            </div>

                            <div id="brief-about-us-info-content-btn">
                                More about us
                            </div>
                        </div>
                    </div>
                </div>

                <div id="list-client-testimonials-about-us">
                    <div id="list-client-testimonials-about-us-wrapper">
                        <div id="list-client-testimonials-about-us-intro">
                            <div id="list-client-testimonials-about-us-title">
                                What our clients say about us
                            </div>

                            <div id="list-client-testimonials-about-us-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies felis feugiat elementum gravida. Facilisis libero aliquam curabitur.
                            </div>
                        </div>

                        <div id="carousel-list-client-testimonials">
                            <Slider {...settings}>
                                {
                                    this.props.cellCustomerTestimonials.map((testimonialsCell) =>
                                        <div id="cell-carousel-list-client-testimonials" key={testimonialsCell.key}>
                                            <div id="cell-carousel-list-client-testimonials-wrapper">
                                                <img
                                                    src={testimonialsCell.img}
                                                    alt=""
                                                    id="cell-carousel-list-client-img"
                                                />

                                                <div id="cell-carousel-list-client-description">
                                                    <div id="cell-carousel-list-client-description-title">
                                                        "{testimonialsCell.title}"
                                                    </div>

                                                    <div id="cell-carousel-list-client-description-content">
                                                        {testimonialsCell.description}
                                                    </div>

                                                    <div id="cell-carousel-list-client-description-info">
                                                        <div id="cell-carousel-list-client-description-info-name">
                                                            {testimonialsCell.name}
                                                        </div>

                                                        <div id="cell-carousel-list-client-description-info-owner">
                                                            {testimonialsCell.owner}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Slider>

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b01a72ed123e79b3104d6_shape-1-testimonials-veterinary-x-template.svg"
                                alt=""
                                id="bg-pic1-client-testimonials-carousel-decor"
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b01a7c02126789ccbb2b6_shape-2-testimonials-veterinary-x-template.svg"
                                alt=""
                                id="bg-pic2-client-testimonials-carousel-decor"
                            />
                        </div>
                    </div>
                </div>

                <div id="schedule-appoint-by-contact-us">
                    <div id="schedule-appoint-by-contact-us-wrapper">
                        <div id="schedule-appoint-by-contact-us-content">
                            <div id="schedule-appoint-by-contact-us-slogan">
                                Schedule your appointment today
                            </div>

                            <div id="schedule-appoint-by-contact-us-btn">
                                Contact us
                            </div>
                        </div>

                        <div id="schedule-appoint-by-contact-us-image">
                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bdd0c22e3eb9e5bdf54d6_image-cta-veterinary-x-template.png"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-people"
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd703e7c2ca23de784b97_shape-1-cta-veterinary-x-template.svg"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-bg1"
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd70415e0af6233e5c873_shape-2-cta-veterinary-x-template.svg"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-bg2"
                            />

                            <img                        
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd703e7c2ca23de784b97_shape-1-cta-veterinary-x-template.svg"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-bg3"
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd70415e0af6233e5c873_shape-2-cta-veterinary-x-template.svg"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-bg4"
                            />
                        </div>
                    </div>
                </div>

                <div id="list-articles-news-info">
                    <div id="list-articles-news-info-wrapper">
                        <div id="list-articles-news-info-title">
                            <div id="list-articles-news-info-title-text">
                                Our articles &#38; news
                            </div>

                            <div id="list-articles-news-info-title-btn">
                                Browse all articles
                            </div>
                        </div>

                        <div id="grid-articles-news-info">
                            <GridSystem colCount={3} md={4} xs={4} sm={4} lg={4}>
                                { this.props.cellArticlesNews.length > 0 ? 
                                    this.props.cellArticlesNews.map(ariticlesNews => 
                                        <Item
                                            img={ariticlesNews.img}
                                            title={ariticlesNews.title}
                                            tag={ariticlesNews.tag}
                                            day={ariticlesNews.day}
                                            key={ariticlesNews.key} 
                                        />) 
                                    : [<p>No news are found.</p>]}
                            </GridSystem>
                        </div>
                    </div>
                </div>

                <div id="list-follow-in-instagram">
                    <div id="list-follow-in-instagram-wrapper">
                        <div id="list-follow-in-instagram-title">
                            Follow us on&#160;
                            <div id="list-follow-in-instagram-title-link">Instagram</div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
};