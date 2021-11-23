import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import './Home.css';

const CarouselHome = () => {
    return (
        <>
           <div class="content">

            <Carousel variant="dark">
                <Carousel.Item>
                    <Image src="https://picsum.photos/800/400?random=1"></Image>    
                </Carousel.Item>

                <Carousel.Item>
                    <Image src="https://picsum.photos/800/400?random=2"></Image>     
                </Carousel.Item>

                <Carousel.Item>
                    <Image src="https://picsum.photos/800/400?random=3"></Image> 
                </Carousel.Item>

                <Carousel.Item>
                    <Image src="https://picsum.photos/800/400?random=4"></Image>     
                </Carousel.Item>

                <Carousel.Item>
                    <Image src="https://picsum.photos/800/400?random=5"></Image> 
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default CarouselHome
