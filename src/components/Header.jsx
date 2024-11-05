import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed z-30 flex items-center justify-around w-full h-20 bg-white bg-opacity-90 shadow-md'>
      <div className='w-auto'>
        <h1 className='text-3xl font-bold text-red-500 underline'>Mandapam</h1>
      </div>
      <Link to='/marriage-gardens'>
        <button
          className='px-6 py-3 mx-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-800 rounded-3xl hover:text-black'
          aria-label='Book Now for Marriage Gardens'
        >
          BOOK NOW
        </button>
      </Link>
    </header>
  );
}

export default Header;
