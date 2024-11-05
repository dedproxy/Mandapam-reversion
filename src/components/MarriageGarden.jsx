import { useState } from "react";
import { Link } from "react-router-dom";

const MarriageGarden = () => {

  const [visible,setVisible] = useState("white");

  const handleLikeChange = () => {
    setVisible(!visible);
  };

  return (
    <div className='flex flex-col md:flex-row h-auto gap-10 m-5 border-b-2 w-full max-w-[900px] mx-auto'>
    {/* Images Section */}
    <div className='w-full md:w-1/2 border h-80 rounded-lg overflow-hidden mb-4'>
      <div className='w-full h-[60%] overflow-hidden rounded-t-lg'>
        <img
          src="https://imgmedia.lbb.in/media/2019/04/5ca1cedf8722f4176f30d878_1554108127903.jpg"
          alt="Main Garden"
          className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110'
        />
      </div>
      <div className='flex w-full h-[40%]'>
        <div className='w-1/3 h-full overflow-hidden'>
          <img
            src="https://th.bing.com/th/id/OIP.S0s3KK-l16LvcYH7xWGS9wHaD2"
            alt="Garden View 1"
            className='object-cover w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-110'
          />
        </div>
        <div className='w-1/3 h-full overflow-hidden'>
          <img
            src="https://cdn0.weddingwire.in/vendor/3697/3_2/960/jpg/banquet-halls-shagun-banquet-hall-marriage-garden-event-space"
            alt="Garden View 2"
            className='object-cover w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-110'
          />
        </div>
        <div className='w-1/3 h-full overflow-hidden'>
          <img
            src="https://c8.alamy.com/comp/2JPMFCA/an-interior-design-of-a-wedding-hall-in-chennai-india"
            alt="Garden View 3"
            className='object-cover w-full h-full transition-transform duration-700 ease-in-out transform hover:scale-110'
          />
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className='w-full md:w-1/2 mt-3'>
    <div className="flex justify-between"> 
    <h1 className='text-3xl font-bold mb-2'>Om Paradise</h1>
    <img 
    src={visible ? "https://cdn-icons-png.flaticon.com/128/833/833472.png" : "https://cdn-icons-png.flaticon.com/128/833/833300.png"} 
    alt='like' 
    className="w-6 h-6 mr-1 transition-transform duration-200 transform hover:scale-125" 
    onClick={handleLikeChange}
  />
    </div>
      <p className='mb-4'>
        This is a beautiful wedding garden that offers a perfect setting for your special day.
      </p>
      <div className='flex justify-between mb-2'>
        <div className='flex items-center'>
          <img 
            src="https://cdn-icons-png.flaticon.com/128/17943/17943872.png" // Replace with your rating icon URL
            alt="Rating"
            className='w-6 h-6 mr-1 transition-transform duration-200 transform hover:scale-125'
          />
          <p>5.0 Rating</p>
        </div>
        
        <div className='flex items-center'>
          <img 
            src="https://cdn-icons-png.flaticon.com/128/7146/7146820.png" // Replace with your car parking icon URL
            alt="Car Parking"
            className='w-6 h-6 mr-1 transition-transform duration-200 transform hover:scale-125'
          />
          <p>Car Parking</p>
        </div>
        
        <div className='flex items-center'>
          <img 
            src="https://cdn-icons-png.flaticon.com/128/4974/4974542.png" // Replace with your wifi icon URL
            alt="WiFi Available"
            className='w-6 h-6 mr-1 transition-transform duration-200 transform hover:scale-125'
          />
          <p>Wifi Available</p>
        </div>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <p className='text-xl font-bold mb-4 mt-2'>Price: ₹50,000</p>
        <div className='flex gap-4'>
          <Link to='/Booking'>
          <button className='px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md'>
            Book Now
          </button>
          </Link>
          <button className='px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200 shadow-md'>
            Availability
          </button>
        </div>
      </div>

      {/* Additional Buttons and Features */}
      <div className='flex flex-col gap-4 mt-4'>
        {/* Add to Wishlist Button */}
        <button className='px-6 py-3 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-200 shadow-md'>
          Get Directions!
        </button>
        {/* Social Media Icons */}
        <div className='flex items-end justify-end gap-3'>
          <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook" className='w-6 h-6 cursor-pointer' />
          <img src="https://cdn-icons-png.flaticon.com/128/733/733558.png" alt="Instagram" className='w-6 h-6 cursor-pointer' />
          <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter" className='w-6 h-6 cursor-pointer' />
        </div>
      </div>
    </div>
  </div>
  );
};

export default MarriageGarden;
