import React from 'react'
import './services.css'
import ImgP from '../../assets/images/portfolio/portfolio-01.jpg'
import { BiLike } from 'react-icons/bi'
const data = [
    {
        id: 1,
        like: 249,
        name:'Web site',
        image: ImgP,
        title: 'tempiltin web site 1',
           
        demo: 'https://tempiltin-click-clon.netlify.app/'
    },
]
const Services = () => {
    return (
        <section id='services' className='.section-title'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div class="section-title text-center">
                            <span className="subtitle">Visit my portfolio and keep your feedback</span>
                            <h2 className="title">My Portfolio</h2>
                        </div>
                    </div>

                </div>
                <div className="row">
                    {
                        data.map(({ id, image, title, name, demo,like }) => {
                            return (
                                <div className="col-lg-6  col-xl-4 col-md-6 col-12">
                                    <div className="rn-portfolio">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <a href=" #!">
                                                    <img src={image} alt=""></img>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <div className="category-info">
                                                    <div className="category-list">
                                                        <a href=" #!">{name}</a>
                                                    </div>
                                                    <div className="meta">
                                                        <a href=" #!"><BiLike className='Like' /></a> <span> {like}</span>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href={demo} target="_blank ">{title}</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </section>
    )
}

export default Services