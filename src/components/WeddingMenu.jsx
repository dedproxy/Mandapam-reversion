import { useState } from 'react';
import MarriageGarden from './MarriageGarden';
import './styles.css'; 
import { Link } from 'react-router-dom';

const WeddingMenu = () => {
  const [searchVenueName, setSearchVenueName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryNumber, setInquiryNumber] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");
  const [isCheckedBudget, setIsChecked] = useState(false);
  const [isCheckedLuxury, setIsCheckedLuxury] = useState(false);
  const [price, setPrice] = useState(500);
  const [room, setRoom] = useState(10);
  const [platePrice, setPlatePrice] = useState(500);

  const handleSearchChange = (event) => {
    setSearchVenueName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleInquiryChange = (event) => {
    setInquiryName(event.target.value);
  };

  const handleInquiryNumberChange = (event) => {
    setInquiryNumber(event.target.value);
  };

  const handleDateChange = (event) => {
    setInquiryDate(event.target.value);
  };

  const handleBudgetChange = (e) => {
    setIsChecked(e.target.checked);
  }

  const handleLuxuryChange = (e) => {
    setIsCheckedLuxury(e.target.checked);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  }

  const handlePricePerPlateChange = (e) => {
    setPlatePrice(e.target.value);
  }

  const handleInquirySubmit = (event) => {
    event.preventDefault();
    // Handle the inquiry form submission logic here

    if(isCheckedBudget || isCheckedLuxury){
      console.log('BudgetCheck-Box or LuxuryCheckbox is checked');
    }
    else{
      console.log('Checkbox is not checked');
    }
    alert(`Inquiry submitted for ${inquiryName} on ${inquiryDate}`);
  };
  return (
    <div className='relative w-full h-auto'>
      <header>
        <div className='fixed z-50 flex items-center justify-between w-full h-20 text-gray-500 shadow-md bg-white px-4'>
          <div className='flex items-center justify-between w-1/2 ml-10'>
            <h1 className='text-2xl font-bold text-red-500'>Mandapam</h1>
            <ul className='hidden md:flex gap-10 text-lg justify-center'>
              {['Services', 'Events', 'Venues','Get the Mandapam app'].map(item => (
                <li key={item} className='hover:border-b-2 ml-1 hover:border-b-black hover:text-black transition duration-200'>{item}</li>
              ))}
            </ul>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center'>
              <img src="https://cdn-icons-png.flaticon.com/128/159/159832.png" alt="Contact Icon" className="w-5 h-5" />
              <p className='ml-2 text-sm md:text-base'>8445148631</p>
            </div>
            <div className='flex items-center'>
              <img src="https://cdn-icons-png.flaticon.com/128/900/900782.png" alt="Language Icon" className="w-5 h-5" />
              <select className='ml-2 text-sm md:text-lg font-bold text-black border border-black focus:outline-none rounded-md'>
                <option>English</option>
                <option>Hindi</option>
                <option>English(UK)</option>
              </select>
            </div>
            <div className='w-8'>
              <Link to='/SignIn'>
              <img src="https://cdn-icons-png.flaticon.com/128/11873/11873155.png" alt="User Icon" className="w-full h-auto" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/*Filters*/}
      <div className='fixed flex w-full h-screen top-20'>
        <div className='hidden md:flex flex-col h-screen max-h-[90vh] overflow-y-auto border-r-2 w-72 p-4 bg-white shadow-md hide-scrollbar'>
          <h2 className='text-lg font-bold mb-4'>Filters</h2>
          <div className='flex flex-col space-y-4'>
            <div className='w-full border rounded-md p-2'>
              <label className='block text-sm font-semibold mb-1'>Price Range</label>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-sm'>₹0</span>
                <span className='text-sm font-semibold'>₹{price}</span>
                <span className='text-sm'>₹5000</span>
              </div>
              <input
              type="range"
              className='w-full'
              min="0"
              max="5000"
              value={price}
              onChange={handlePriceChange}
              />
            </div>
            <div className='w-full border rounded-md p-2'>
              <label className='block text-sm font-semibold mb-1'>Capacity</label>
              <div className='flex space-x-2'>
                <input type="number" placeholder='Min' className='w-1/2 border rounded-md p-2' />
                <input type="number" placeholder='Max' className='w-1/2 border rounded-md p-2' />
              </div>
            </div>
            <div>
              <div className='w-full border rounded-md p-2'>
                <label className='block text-sm font-semibold mb-1'>Price Per plate</label>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-sm'>₹500</span>
                  <span className='text-sm font-semibold'>₹{platePrice}</span>
                  <span className='text-sm'>₹5000</span>
                </div>
                <input
                type="range"
                min="500"
                max="5000"
                value={platePrice}
                onChange={handlePricePerPlateChange}
                className='w-full'/>
              </div>
            </div>
            <div>
              <div className='w-full border rounded-md p-2'>
                <label className='block text-sm font-semibold mb-1'>No of Rooms</label>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-sm'>0</span>
                  <span className='text-sm font-semibold'>{room}</span>
                  <span className='text-sm'>100</span>
                </div>
                <input
                type="range" 
                className='w-full'
                min="10"
                max="100"
                value={room}
                onChange={handleRoomChange}
                />
              </div>
            </div>
            <div className='w-full border rounded-md p-2 mt-4'>
              <label className='block text-sm font-semibold mb-1'>Sort By</label>
              <select className='w-full border rounded-md p-2'>
                <option>Low to Medium</option>
                <option>Medium to high</option>
                <option>low to high</option>
              </select>
            </div>
            <div className='w-full border rounded-md p-2 mt-4'>
              <label className='block text-sm font-semibold mb-1'>Location</label>
              <select className='w-full border rounded-md p-2'>
                <option>City 1</option>
                <option>City 2</option>
                <option>City 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className='h-auto overflow-y-auto w-full md:w-8/12 p-3 bg-gray-100 hide-scrollbar'>
        <h1 className='ml-0 text-5xl font-bold text-gray-800 tracking-wide'>Search Your Mandapam</h1>
          <div className='flex flex-col ml-0 md:flex-row m-3 gap-4'>
            <div className='flex items-center border rounded-md w-full md:w-96 shadow-md'>
              <img 
                src='https://www.pngkit.com/png/detail/249-2499175_banquet-clip-art-material-wedding-hall-icon-png.png' 
                className='w-10 h-10 mx-2' 
                alt="Search Venue Icon"
              />
              <input 
                type="text" 
                placeholder='Search by Marriage Venue name' 
                className='flex-1 focus:outline-none h-full p-2 rounded-md' 
                value={searchVenueName} 
                onChange={handleSearchChange} 
              />
            </div>
            <div className='flex items-center border rounded-md w-full md:w-96 shadow-md'>
              <img 
                src='https://cdn-icons-png.flaticon.com/128/484/484167.png' 
                className='w-8 h-8 mx-2' 
                alt="Search Location Icon" 
              />
              <input 
                type="text" 
                placeholder='Search by Location' 
                className='flex-1 focus:outline-none h-full p-2 rounded-md' 
                value={searchLocation} 
                onChange={handleLocationChange} 
              />
            </div>
            <div className='flex items-center justify-center w-full md:w-32 bg-green-500 rounded-md shadow-md'>
              <button className='text-xl font-bold text-white p-2'>
                Find
              </button>
              <img src='/public/search.png' className='w-8 h-8 ml-2' alt="Search Icon" />
            </div>
          </div>

          <div className='flex flex-col flex-wrap gap-10'>
            {[...Array(8)].map((_, index) => (
              <MarriageGarden key={index} />
            ))}
          </div>
        </div>

        <div className='hidden md:block w-1/4 h-auto max-h-[90vh] p-4 bg-white shadow-lg border border-gray-300 rounded-md overflow-y-auto hide-scrollbar'>
        <div className='p-4 bg-white rounded-md border border-gray-300 shadow-md'>
          <h2 className='text-lg font-bold mb-2'>Get the List of Hotels</h2>
          <h2 className='text-sm font-light mb-2'>We will send you contact details in seconds for free</h2>
          <p className='text-balance font-normal mb-2'>What type of Hotel are you looking for?</p>
          <div className="flex ml-2 gap-16">
            <div className="flex items-center justify-start">
              <input
              type='checkbox'
              checked={isCheckedBudget}
              onChange={handleBudgetChange}
              className='w-3 h-3 rounded-full border-gray-300 text-blue-500 focus:ring-blue-500'
              />
              <label className='ml-2 font-bold'>Budget ?</label>
            </div>
            <div className="flex items-center justify-end">
              <input
              type='checkbox'
              checked={isCheckedLuxury}
              onChange={handleLuxuryChange}
              className='w-3 h-3 rounded-full border-gray-300 text-blue-500 focus:ring-blue-500'
              />
              <label className='ml-2 font-bold'>Luxury ?</label>
            </div>
          </div>
          <form onSubmit={handleInquirySubmit} className='flex flex-col space-y-4 mt-3'>
            <input 
              type="text" 
              placeholder='Your Name' 
              className="border rounded-md p-2"
              value={inquiryName} 
              onChange={handleInquiryChange} 
              required 
            />
            <input 
              type="tel" 
              placeholder='Your Mobile Number' 
              className='border rounded-md p-2'
              value={inquiryNumber} 
              onChange={handleInquiryNumberChange} 
              required 
            />
            <input 
              type="date" 
              className='border rounded-md p-2'
              value={inquiryDate} 
              onChange={handleDateChange} 
              required 
            />
            <button type='submit' className='bg-blue-500 text-white font-bold p-2 rounded-md hover:bg-blue-600 transition duration-200'>
              Inquiry Now!
            </button> 
          </form>
        </div>
        <div className='flex flex-col w-full border rounded-md p-2 mt-4 gap-2'>
            <div className='flex flex-col items-center'>
              <label className='block text-sm font-semibold'>Type</label>
            </div>
            
            {/* <div> */}
              <label className='flex items-center'>
                <input type="checkbox" className='mr-2 w-5 h-5' />
                <span>Banquet Hall</span>
              </label>
              <label className='flex items-center'>
                <input type="checkbox" className='mr-2 w-5 h-5' />
                <span>Mandapam</span>
              </label>
            {/* </div> */}

            {/* <div> */}
              <label className='flex items-center'>
                <input type="checkbox" className='mr-2 w-5 h-5' />
                <span>Garden</span>
              </label>
              <label className='flex items-center'>
                <input type="checkbox" className='mr-2 w-5 h-5' />
                <span>Resort</span>
              </label>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingMenu;
