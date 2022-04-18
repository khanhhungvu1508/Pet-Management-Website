import "./style.css"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div id="aboutpage">
                 <section className="container my-5 py-4 ">
                <div className="row ">
                    <div className="col-12 text-center">
                        <h2 className="display-5 fw-bold"> About us</h2>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
                            veniam, quis nostrud exercitation ullamco.
                        </p>

                    </div>
                </div>
            </section>

            <section className="container my-5 py-4">
                <div className="row">
                    <div className="col-md-6 ">
                        <h2 className="display-5 fw-bold">The story behind our vet practice</h2>
                        <p className="lead mb-4 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                            ornare purus, mauris massa nisi, habitasse velit tristique. Sed
                            nec purus quis ac, dolor. Dignissim commodo ipsum nibh
                            consectetur lacus, suspendisse non gravida.
                            <br />
                            <br />
                            Nec leo amet pellentesque ultrices pretium. Egestas ac nulla
                            in enim lacinia sed feugiat neque. Nulla cursus ornare sit
                            scelerisque dolor sit amet.
                        </p>
                    </div>
                    {/* For Images */}
                    <div className="col-md-6 mx-auto">
                        <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c45857d86d3dd1523f913_image-1-story-veterinary-x-template.jpg" alt="" height="400px" width="600px" />
                    </div>
                </div>
            </section>

            <section className="container my-5 py-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c4586e8b1937943b7b0ee_image-2-story-veterinary-x-template.jpg" alt="" height="400px" width="550px" />
                    </div>


                    <div className='col-md-6'>
                        <h2 className="display-5 fw-bold">Our core mission at Veterinary X</h2>
                        <p className="lead mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                            ornare purus, mauris massa nisi, habitasse velit tristique. Sed
                            nec purus quis ac, dolor. Dignissim commodo ipsum nibh
                            consectetur lacus, suspendisse non gravida.
                            <br />
                            <br />
                            Nec leo amet pellentesque ultrices pretium. Egestas ac nulla
                            in enim lacinia sed feugiat neque. Nulla cursus ornare sit
                            scelerisque dolor sit amet.
                        </p>
                    </div>


                </div>
            </section>

            <section id="value">
                <div className="container my-5 py-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="display-5 fw-bold">
                                Our values
                            </h2>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3 border-0" >
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex align-items-center">
                                        <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c4916f50ae00986842597_icon-1-values-veterinary-x-template.svg" className="img-fluid" alt="...">
                                        </img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-3 fw-bold">Trust</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consecteturol adipiscing elit. Donec nunc nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3 border-0" >
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex align-items-center">
                                        <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c4916917b9136d77467ba_icon-2-values-veterinary-x-template.svg" className="img-fluid" alt="...">
                                        </img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-3 fw-bold">Integrity</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consecteturol adipiscing elit. Donec nunc nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3 border-0" >
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex align-items-center">
                                        <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c4916c72868034f86491e_icon-3-values-veterinary-x-template.svg" className="img-fluid" alt="...">
                                        </img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-3 fw-bold">Quality</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consecteturol adipiscing elit. Donec nunc nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3 border-0" >
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex align-items-center">
                                        <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c49152765e5e5039dda79_icon-4-values-veterinary-x-template.svg" className="img-fluid" alt="...">
                                        </img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fs-3 fw-bold">Love</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consecteturol adipiscing elit. Donec nunc nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team">
                <div className="container my-3 py-2">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="display-5 fw-bold">
                                Meet the team that will take care of your little friend
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-5 pb-5">
                            <div class="card text-center " >
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="https://www.facebook.com/">
                                        <img src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af6eaf8ec6c8fa91d75b0_image-1-team-veterinary-x-template.jpg" class="card-img-top mx-auto p-2" alt="..." />
                                        <div class="mask" ></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title fs-3 fw-bold">John Carter</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consecteturol adipiscing elit. Donec nunc nulla.</p>
                                    <a href="https://www.facebook.com/" class="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 pb-5">
                            <div class="card text-center " >
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="https://www.facebook.com/">
                                        <img src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af6cdfe37cc507ba55d35_image-2-team-veterinary-x-template.jpg" class="card-img-top mx-auto p-2" alt="..." />
                                        <div class="mask" ></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title fs-3 fw-bold">John Carter</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consecteturol adipiscing elit. Donec nunc nulla.</p>
                                    <a href="https://www.facebook.com/" class="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 pb-5">
                            <div class="card text-center " >
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="https://www.facebook.com/">
                                        <img src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af5669643927b4a791bec_image-3-team-veterinary-x-template.jpg" class="card-img-top mx-auto p-2" alt="..." />
                                        <div class="mask" ></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title fs-3 fw-bold">John Carter</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consecteturol adipiscing elit. Donec nunc nulla.</p>
                                    <a href="https://www.facebook.com/" class="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="follow">
                <div className="container my-3 py-2">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="display-5 fw-bold">
                                Follow us on <a href="https://www.instagram.com/" >Instagram </a>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="https://www.instagram.com/">
                                    <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd84e89583c1bf70798_image-1-instagram-veterinary-x-template.jpg" class="card-img-top mx-auto p-4" alt="..." />
                                    <div class="mask" ></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <a href="https://www.instagram.com/">
                                    <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd8e87f2d548f185c60_image-2-instagram-veterinary-x-template.jpg" class="card-img-top mx-auto p-4" alt="..." />
                                    <div class="mask" ></div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <a href="https://www.instagram.com">
                                            <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcdaab6a6d295da10b78_image-3-instagram-veterinary-x-template.jpg" class="card-img-top mx-auto p-4" alt="..." />
                                            <div class="mask" ></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <a href="https://www.instagram.com">
                                            <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd87d6b391f4fbc075b_image-4-instagram-veterinary-x-template.jpg" class="card-img-top mx-auto p-4" alt="..." />
                                            <div class="mask" ></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <a href="https://www.instagram.com">
                                            <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd81e724c8b91245a60_image-6-instagram-veterinary-x-template.jpg" class="card-img-top mx-auto p-4" alt="..." />
                                            <div class="mask" ></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <a href="https://www.instagram.com">
                                            <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcdaea05ab4431b8db8f_image-5-instagram-veterinary-x-template.jpg" class="card-img-top mx-auto p-4" alt="..." />
                                            <div class="mask" ></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
<div id="list-follow-in-instagram">
                    <div id="list-follow-in-instagram-wrapper">
                        <div id="list-follow-in-instagram-title">
                            Follow us on&#160;
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>

                        <div id="grid-list-follow-in-instagram-image">
                            {
                                listImageInInstagram.map((listImage, index) => 
                                    <a 
                                        href="https://www.instagram.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        id={listImage.id}
                                        key={listImage.key}
                                        onMouseEnter={() => this.onMouseEnterListFollowInstagram(index)}
                                        onMouseLeave={() => this.onMouseLeaveListFollowInstagram(index)}
                                        style={{transform: "scale3d(" + String(this.state.rotateZImageInListFollowInstagrams[index] / 150 + 1)
                                                        + ", " + String(this.state.rotateZImageInListFollowInstagrams[index] / 150 + 1) 
                                                        + ", 1) rotateZ(" + this.state.rotateZImageInListFollowInstagrams[index].toString() + "deg)"}}
                                    >
                                        <img
                                            src={listImage.src}
                                            alt=""
                                            style={{transform: "scale3d(" + String(this.state.rotateZImageInListFollowInstagrams[index] / 100 + 1)
                                                    + ", " + String(this.state.rotateZImageInListFollowInstagrams[index] / 100 + 1) 
                                                    + ", 1)"}}
                                        />
                                    </a>
                                )
                            }
                        </div>

                        <img
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b02494ed1f62ec189c397_shape-1-instagram-veterinary-x-template.svg"
                            alt=""
                            id="list-follow-in-instagram-image-bg1"
                            style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                        />

                        <img
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b024a482dee6b2e1e340e_shape-2-instagram-veterinary-x-template.svg"
                            alt=""
                            id="list-follow-in-instagram-image-bg2"
                            style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                        />

                        <img
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b01a7c02126789ccbb2b6_shape-2-testimonials-veterinary-x-template.svg"
                            alt=""
                            id="list-follow-in-instagram-image-bg3"
                            style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                        />
                    </div>
                    </div>

                    </div>
                </div>
            </section>
            </div>
        );
    }
};
