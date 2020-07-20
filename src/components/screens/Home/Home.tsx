// import { Divider } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
// import LoaderSpinner from '../../LoaderSpinner';
// import CardPresentation from '../../material-ui/CardPresentation';
// import ProductCard from '../../material-ui/ProductCard';

// import homeInfo from './HomeInfo.json';

import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.css"

const images = (Array(18).fill(null)).map((empty, index) => (`/images/postres/carrusel/postre (${index + 1}).jpeg`))

export default class Home extends React.Component {
    public render() {
        return (
            <div className="home">
                <div className="home-content" >
                    <div className="home-half-content">
                        <Typography classes={{ root: "home-title" }}>
                            Bienvenidos a Minuette
                        </Typography>
                        <Carousel className="home-carousel" dynamicHeight={false} showIndicators={true} showThumbs={false} autoPlay={false} infiniteLoop={true} width={500}>
                            {images.map((urlImage, index) =>
                                <img key={index} className="home-carrousel-image" src={urlImage} />
                            )}
                        </Carousel>
                    </div>

                    <div className="home-quart-content">
                        <Typography paragraph={true} classes={{ root: "green-contrast" }}>
                            Se te Antoja?
                        </Typography>
                        <Typography paragraph={true} classes={{ root: "green-contrast" }}>
                            Deliciosos y Saludables Postres hechos con amor, 100% organicos, ideales para todo momento.
                            llamanos y disfruta de estos manjares que ofrecemos recien salidos del horno.
                        </Typography>
                        <Typography paragraph={true} classes={{ root: "green-contrast" }}>
                            No te preocupes del azucar, estas delicias no contienen azucar, podras tener una excelente comida y acompañarla de algo dulce.
                        </Typography>
                    </div>
                </div>

            </div>
        )
    }

    // private displayInfo() {
    //     return homeInfo.map((info: InfoProps, index) => (
    //         <ProductCard title={info.title} header={info.header} content={info.info} srcImage={info.srcImage} key={index} />
    //     ))
    // }
}

// interface InfoProps {
//     title: string;
//     header: string;
//     info: string;
//     srcImage: string;
// }