import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const ImageSlider = () => {
  // Sample images for the slideshow
  const images = [
    '/images/wedding1.jpg',
    '/images/wedding2.jpg',
    '/images/wedding3.jpg',
  ];

  return (
    <div className='w-full max-w-3xl mx-auto my-10'>
      <Fade duration={3000} arrows={false}>
        {images.map((image, index) => (
          <div key={index} className='flex justify-center'>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='object-cover w-full h-64 rounded-lg shadow-lg'
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ImageSlider;
