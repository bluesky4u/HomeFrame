import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = () => {
  return (
    <div className='main'>
        <Splide options={ { rewind: true } } aria-label="React Splide Example">
            <SplideSlide>
                <img src="/assets/img/1.png" alt="1"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/assets/img/2.jpeg" alt="2"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/assets/img/3.png" alt="2"/>
            </SplideSlide>
        </Splide>
    </div>
  );
}
export default Slider;