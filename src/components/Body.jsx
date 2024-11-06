import Calendar from 'react-calendar';
import { useState, useEffect, useRef } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const Body = () => {
  const [country, setCountry] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [showList, setShowList] = useState(false);
  
  const [date, setDate] = useState(new Date());
  const [cal, setCal] = useState(false);
  const calendarRef = useRef(null); // Reference to the calendar
  
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    
    fetchCountryData();
  }, []);

  const toggleCalendar = () => setCal((prevCal) => !prevCal);

  const handleCountrySelect = (e) => {
    setCountryName(e.target.value);
    setShowList(false);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setCal(false); // Close the calendar after selecting a date
  };

  const handleInputChange = (e) => setCountryName(e.target.value);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCal(false); // Close the calendar
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative w-full h-screen overflow-auto'>
      {/* Video Section */}
      <div className='w-full h-full'>
        <video
          src="https://cdn.pixabay.com/video/2022/10/23/136139-764371523_large.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          className='object-cover w-full h-full'
        />
      </div>

      {/* Text Content */}
      <div className='fixed top-60 left-1/2 transform -translate-x-1/2 text-center z-10'>
        <h1 className={`text-6xl font-bold text-white transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          Search Your Wedding Place
        </h1>
        <p className={`mt-5 text-lg font-bold text-white transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          The Garden of Your Wedding Dreams......
        </p>
      </div>

      {/* Search Section */}
      <div className='fixed top-96 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center w-8/12 h-40 text-lg font-bold bg-white rounded-xl justify-evenly z-10 max-sm:max-h-96 shadow-lg'>
        
        {/* Calendar */}
        <div className='flex flex-col items-start'>
          <div className="flex justify-around w-64 py-2 border">
            <input
              type="text"
              placeholder='Enter date'
              value={date.toDateString()}
              className='font-mono font-light border-none focus:outline-none text-md'
              onClick={toggleCalendar}
              readOnly
            />
            <button onClick={toggleCalendar} aria-label="Toggle Calendar">
              <img
                src="https://cdn-icons-png.flaticon.com/128/833/833593.png"
                alt="calendar icon"
                className='w-5 cursor-pointer'
              />
            </button>
          </div>
          {cal && (
            <div ref={calendarRef} className='absolute z-40 left-[35%] top-0 rounded-lg shadow-lg'>
              <Calendar
                onChange={handleDateChange}
                value={date}
              />
            </div>
          )}
        </div>

        {/* Location */}
        <div className='z-30 flex items-center justify-around w-64'>
          <input
            type="text"
            placeholder='Search By City, Marriage Venue'
            className='w-full px-1 py-2 font-normal border-none focus:outline-none text-md'
            value={countryName}
            onChange={handleInputChange}
            aria-label="Country Search"
            onClick={() => setShowList(!showList)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
            alt="location icon"
            className="w-8 h-8"
          />
          {showList && (
            <select
              size="5"
              className='absolute z-50 w-80 h-48 overflow-y-scroll bg-white shadow-lg top-28 shadow-black'
              onChange={handleCountrySelect}
              value={countryName}
            >
              {country.map((c) => (
                <option key={c.cca3} value={c.name.common} className='py-1 hover:bg-white'>
                  {c.name.common}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Search Button */}
        <Link to="/marriage-gardens">
          <button 
            className='flex items-center justify-center h-10 text-xl text-center text-white bg-blue-500 rounded w-28 hover:text-blue-500 hover:border-blue-500 hover:bg-white'
            aria-label="Search Marriage Gardens"
          >
            Search
            <img
              src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
              alt="search icon"
              className='w-[20%] py-1 mx-2'
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
