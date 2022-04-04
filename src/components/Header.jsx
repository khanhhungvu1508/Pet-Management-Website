import "./style.css"
import logo from "../images/logo.png"
import React from "react"
import FontAwesome from "react-fontawesome"
import 'font-awesome/css/font-awesome.min.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            dropdownService: false,
            hoverDogPerVisit: false,
            hoverCatPerVisit: false,
            hoverPetPath: false,
            hoverPetGrooming: false,
            colorHeader: "pink"
        };
    }

    onMouseEnter = (typeMenu) => {
        switch (typeMenu) {
            case "Service":
                this.setState({ dropdownService: true });
                break;
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
            case "Service":
                this.setState({ dropdownService: false });
                break;
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

    listenScrollEvent = (e) => {
        if (window.scrollY > 0)
            this.setState({colorHeader: "blue"});
        else 
            this.setState({colorHeader: "pink"});
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        // const cellContentService = [
        //     {
        //         src: "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/61251f6d2d3da7b991aa2c33_icon-1-services-veterinary-x-template.svg",
        //         alt: "DogPerVisit",
        //         title: "Dog per visit",
        //         content: "Lorem ipsum dolor sit amet, consectetur."
        //     },
        //     {
        //         src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6c8e005e644f837998_icon-2-services-veterinary-x-template.svg",
        //         alt: "CatPerVisit",
        //         title: "Cat per visit",
        //         content: "Lorem ipsum dolor sit amet, consectetur."
        //     },
        //     {
        //         src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6d9053c039b60f1aad_icon-3-services-veterinary-x-template.svg",
        //         alt: "PetPath",
        //         title: "Pet path",
        //         content: "Lorem ipsum dolor sit amet, consectetur."
        //     },
        //     {
        //         src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6ef670855342f2b829_icon-4-services-veterinary-x-template.svg",
        //         alt: "PetGrooming",
        //         title: "Pet grooming",
        //         content: "Lorem ipsum dolor sit amet, consectetur."
        //     }
        // ]
        return (
            <div 
                id="header"
                style={
                    this.state.colorHeader === "blue"
                        ? {background: "blue"}
                        : {background: "pink"}
                }
            >
                <div id="header-wrapper">
                    <div id="logo-img-text">
                        <div id="logo-img">
                            <img src={logo} alt="Logo" />
                        </div>

                        <div id="logo-text">
                            Magic Pet
                        </div>
                    </div>

                    <div id="header-menu">
                        <div id="header-nav-cell">
                            Home
                        </div>

                        <div id="header-nav-cell">
                            Shop
                        </div>

                        <div id="header-service"
                            onMouseEnter={() => this.onMouseEnter("Service")}
                            onMouseLeave={() => this.onMouseLeave("Service")}
                        >
                            <div id="title-direction-menu">
                                <div id="title-menu">
                                    Service
                                </div>
                                {
                                    this.state.dropdownService
                                        ? <FontAwesome name="angle-up" id="direction-menu" size="2x"/>
                                        : <FontAwesome name="angle-down" id="direction-menu" size="2x"/>
                                }
                            </div>
                            {
                                this.state.dropdownService &&
                                <div id="extend-service">
                                    <div id="block-content">
                                        <div id="content-extend-service">
                                            {
                                                this.props.cellContentService.map((serviceCell) =>
                                                    <div id="cell-content-service" key={serviceCell.key}>
                                                        <img 
                                                            src={serviceCell.src} 
                                                            alt={serviceCell.alt} 
                                                            id="cell-content-service-img"
                                                            onMouseEnter={() => this.onMouseEnter(serviceCell.alt)}
                                                            onMouseLeave={() => this.onMouseLeave(serviceCell.alt)}
                                                            style={
                                                                this.state["hover" + serviceCell.alt]
                                                                    ? {transform: "scale(1.03)"}
                                                                    : {}
                                                            }
                                                        />

                                                        <div id="cell-content-service-description">
                                                            <div 
                                                                id="cell-content-service-description-title" 
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
                                                            <div id="cell-content-service-description-content">
                                                                {serviceCell.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div> 
                                    </div>
                                </div>
                            }
                        </div>

                        <div id="header-nav-cell">
                            Blog
                        </div>

                        <div id="header-nav-cell">
                            About
                        </div>

                        <div id="header-nav-cell">
                            Cart(3)
                        </div>
                    </div>

                    <div id="button-contact-us">
                        Contact us
                    </div>
                </div>
            </div>
        );
    }
};