import PropTypes from 'prop-types';

const Reviews = ({ 
  name = "Rishab Raj", 
  location = "Gaya, Bihar", 
  rating = 4.7, 
  date = "9 Sep 2021", 
  reviewText = "Mandapam Marriage.com provides the best marriage venue booking services, so you can use it during your wedding time and save valuable time." 
}) => {
  return (
    <article className='w-56 border h-auto border-black rounded-lg bg-gray-300 hover:border-red-500 hover:shadow-lg hover:shadow-black transition duration-300'>
      <div className='flex flex-col m-4'>
        <div className='flex items-center gap-1'>
          <div className='w-10 h-10 border flex justify-center items-center border-black rounded-full bg-red-600 text-white text-xl font-bold'>
            R
          </div>
          <p className='font-bold text-xl'>{name}</p>
        </div>
        <div className='flex flex-col items-center w-40'>
          <p>{location}</p>
          <span className='flex justify-between gap-1 ml-10'>
            <p>{rating} ⭐</p>
            <p>{date}</p>
          </span>
        </div>
        <h1 className='mt-2'>{reviewText}</h1>
      </div>
    </article>
  );
}

// PropTypes validation
Reviews.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
  reviewText: PropTypes.string,
};

export default Reviews;
