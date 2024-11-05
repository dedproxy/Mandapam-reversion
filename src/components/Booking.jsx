import Ratings from './Ratings';
import Reviews from './Reviews';

const Booking = () => {
  return (
    <div className='w-full h-screen overflow-x-scroll '>
      <div className='w-full border border-white h-96'>
        <div className='flex w-full h-full overflow-x-scroll scroll-smooth'>
          <img src='/bridge.jpg' alt='Bridge view' className='object-cover w-2/5 h-full'/>
          <img src='/flowers.jpg' alt='Flower arrangement' className='object-cover w-2/5 h-full'/>
          <img src='/flowers-2.jpg' alt='More flowers' className='object-cover w-2/5 h-full'/>
          <img src='/garden.jpg' alt='Garden view' className='object-cover w-2/5 h-full'/>
          <img src='/garden-2.jpg' alt='Another garden view' className='object-cover w-2/5 h-full'/>
        </div>
      </div>

      <h1 className='p-1 px-4 m-5 font-serif text-5xl font-bold text-justify bg-blue-500 h-14 from-neutral-600 text-black rounded-lg shadow-xl'>Om Paradise</h1>
      <div className='flex justify-start w-[20%] ml-5'>
        <h1 className='flex items-center justify-center h-8 text-xl font-bold text-white bg-green-500 rounded w-11'>
          5<img src='https://cdn-icons-png.flaticon.com/128/3237/3237420.png' className='w-6 h-6'/>
        </h1>
        <p className='ml-2 text-xl font-bold'>Rating</p>
        <h1 className='flex items-center'>
          <img src='https://cdn-icons-png.flaticon.com/128/1828/1828640.png' className='w-8 h-8' alt='Verified'/>
          Verified
        </h1>
      </div>
      <div className='w-[50%] flex items-center'>
        <img src='https://cdn-icons-png.flaticon.com/128/684/684908.png' className='w-8 m-4' alt='Location pin'/>
        <h1 className='text-lg'>Masani Link Road, Mathura, Uttar Pradesh, 281001</h1>
      </div>

      <h1 className='ml-5 text-xl font-bold'>Available Services</h1>
      <div className='flex w-[60%] gap-5 h-20 ml-5 flex-wrap'>
        {[
          { src: 'https://cdn-icons-png.flaticon.com/128/33/33308.png', text: '400-1000 Guests' },
          { src: 'https://cdn-icons-png.flaticon.com/128/4974/4974542.png', text: 'Free Wifi' },
          { src: 'https://cdn-icons-png.flaticon.com/128/7146/7146820.png', text: 'Car Parking' },
          { src: 'https://cdn-icons-png.flaticon.com/128/5140/5140130.png', text: '4 Rooms & 1 Hall' },
          { src: 'https://cdn-icons-png.flaticon.com/128/259/259981.png', text: 'AC/NON-AC' },
          { src: 'https://cdn-icons-png.flaticon.com/128/17258/17258773.png', text: '500₹ per plate' },
        ].map((service, index) => (
          <div className='flex items-center gap-1' key={index}>
            <img src={service.src} className='w-8 h-8' alt={service.text}/>
            <p>{service.text}</p>
          </div>
        ))}
      </div>

      <Ratings/>
      <h1 className='text-3xl font-bold ml-9'>Reviews®️</h1>
      <p className='ml-12 text-md font-sans'>Reviews dropped by Users</p>
      <div className='w-[50%] h-96 border flex justify-center items-center gap-10 overflow-scroll overflow-y-hidden m-8 scroll-smooth'>
        {[...Array(12)].map((_, index) => (
          <Reviews key={index} />
        ))}
      </div>
    </div>
  );
}

export default Booking;
