import CircularPhoto from '../../../assets/circularphoto.png';
import { useEffect, useRef } from 'react'
import Lottie from 'lottie-web';
import animationInitial from '../../../animations/inital/data.json'
import { AlightItens, AlightTitle, OverItens } from '../../styeles/alights/style';
import { Container } from '../../styeles/container/style';


const InitialAnimation = () => {
    const container = useRef();

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,    
            autoplay: true,
            animationData: animationInitial,
        })
    })

    return (
        <>
            <Container width='100vw' height='100vh' overflow='hidden'>
                <OverItens>
                    <AlightItens justify='start'>
                        <div className='initialInfo' >
                            <img height={150} src={CircularPhoto} data-aos="fade-left" data-aos-duration='1000' />
                        </div>
                        <AlightTitle data-aos="fade-right">
                            <h1 className='initialInfo'>M. Messias</h1>
                            <h2 className='initialInfo'>Developer and</h2>
                            <h2 className='initialInfo'>Software Engineer</h2>
                        </AlightTitle>
                    </AlightItens>
                </OverItens>
                <Container ref={container}></Container>

            </Container>
        </>
    );
}

export default InitialAnimation;
