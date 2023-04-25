import CircularPhoto from '../../../assets/circularphoto.png'
import { useEffect, useRef } from 'react'
import Lottie from 'lottie-web';
import screenTransition from '../../../animations/screen/data.json'
import { Container } from '../../styeles/container/style';


const ScreenTransition = () => {
    const container = useRef();

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: screenTransition,
        })
    })

    return (
        <>
            <Container width='100%' height='100vh' overflow='hidden'>
                <div ref={container}></div>
            </Container>
        </>
    );
}

export default ScreenTransition;