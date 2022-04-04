import React from "react"
import 'font-awesome/css/font-awesome.min.css'
import Header from './Header'
import HomePage from './HomePage';

export default class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Global
            page: "HomePage",
            // Header
            cellContentService: [
                {
                    key: "1",
                    src: "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/61251f6d2d3da7b991aa2c33_icon-1-services-veterinary-x-template.svg",
                    alt: "DogPerVisit",
                    title: "Dog per visit",
                    content: "Lorem ipsum dolor sit amet, consectetur."
                },
                {
                    key: "2",
                    src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6c8e005e644f837998_icon-2-services-veterinary-x-template.svg",
                    alt: "CatPerVisit",
                    title: "Cat per visit",
                    content: "Lorem ipsum dolor sit amet, consectetur."
                },
                {
                    key: "3",
                    src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6d9053c039b60f1aad_icon-3-services-veterinary-x-template.svg",
                    alt: "PetPath",
                    title: "Pet path",
                    content: "Lorem ipsum dolor sit amet, consectetur."
                },
                {
                    key: "4",
                    src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6ef670855342f2b829_icon-4-services-veterinary-x-template.svg",
                    alt: "PetGrooming",
                    title: "Pet grooming",
                    content: "Lorem ipsum dolor sit amet, consectetur."
                }
            ],
            // Homepage
            cellOurService: [
                {
                    key: "1",
                    src: "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/61251f6d2d3da7b991aa2c33_icon-1-services-veterinary-x-template.svg",
                    alt: "DogPerVisit",
                    title: "Dog per visit",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.",
                    price: "99 USD",
                    duration: "1 hr"
                },
                {
                    key: "2",
                    src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6c8e005e644f837998_icon-2-services-veterinary-x-template.svg",
                    alt: "CatPerVisit",
                    title: "Cat per visit",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.",
                    price: "99 USD",
                    duration: "1 hr"
                },
                {
                    key: "3",
                    src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6d9053c039b60f1aad_icon-3-services-veterinary-x-template.svg",
                    alt: "PetPath",
                    title: "Pet path",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.",
                    price: "99 USD",
                    duration: "1.5 hrs"
                },
                {
                    key: "4",
                    src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6ef670855342f2b829_icon-4-services-veterinary-x-template.svg",
                    alt: "PetGrooming",
                    title: "Pet grooming",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.",
                    price: "99 USD",
                    duration: "1.8 hrs"
                }
            ],

            cellCustomerTestimonials: [
                {
                    key: "1",
                    img: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adaac537a1a088387200e_image-2-testimonials-veterinary-x-template-p-800.jpeg",
                    title: "A team of vets you can trust",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.",
                    name: "Kathie Corl",
                    owner: "Molly's Owner"
                },
                {
                    key: "2",
                    img: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adaac1e724c3ef1243bb5_image-1-testimonials-veterinary-x-template.jpg",
                    title: "A team of vets you can trust",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.",
                    name: "Sophie Moore",
                    owner: "Tommy's Owner"
                }
            ],

            //Articles and news
            cellArticlesNews: [
                {
                    key: "1",
                    img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afadf790dc2a997dde426_image-6-blog-veterinary-x-template-p-1600.jpeg",
                    title: "Dog toys: How to pick the best and the safest",
                    tag: "Dogs",
                    day: "August 16, 2021",
                    content: ""
                },
                {
                    key: "2",
                    img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afac5d4780959fd62559c_image-5-blog-veterinary-x-template-p-500.jpeg",
                    title: "How to adopt a dog: Everything you need to know",
                    tag: "Dogs",
                    day: "August 16, 2021",
                    content: ""
                },
                {
                    key: "3",
                    img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afaad4c1e33360a83b748_image-4-blog-veterinary-x-template-p-500.jpeg",
                    title: "The best cat food, according to experts and veterinarians",
                    tag: "Cats",
                    day: "August 16, 2021",
                    content: ""
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <Header cellContentService = {this.state.cellContentService}/>
                { /* Home page */
                    this.state.page === "HomePage" &&
                    <HomePage 
                        cellOurService = {this.state.cellOurService}
                        cellCustomerTestimonials = {this.state.cellCustomerTestimonials}
                        cellArticlesNews = {this.state.cellArticlesNews}
                    />
                }
            </div>
           

        );
    }
};