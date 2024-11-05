const Ratings = () => {
   const ratingsData = [1, 2, 3, 4, 5]; // Array for ratings
 
   return (
     <div className='m-5'>
       <header className='flex items-center justify-start h-auto ml-5 mt-14'>
         <h1 className='text-3xl font-bold'>Ratings</h1>
         <img src='https://cdn-icons-png.flaticon.com/128/10898/10898303.png' className='w-10' alt='Star icon' />
       </header>
       <div className='flex flex-col m-5'>
         {ratingsData.map((rating) => (
           <div key={rating} className='flex items-center gap-2'>
             <p className='text-red-500 text-2xl'>{rating}</p>
             <div className='w-96 h-1 bg-black'></div>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default Ratings;
 