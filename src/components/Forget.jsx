import  { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState("");
 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  

  const handleSubmit = () => {
    // Logic for backend API calls would go here
    console.log("Email:", email);
    
  // Alert to verify user input
    
  };

  return (
    <div className='flex items-center justify-center w-full h-screen border-none'>
    <div className="h-auto p-5 bg-white border border-gray-200 shadow-lg w-80 rounded-xl">
      <h2 className="text-2xl font-bold text-black ">Password Reset</h2>
      <div className='flex flex-col items-center m-2 mt-2 border border-yellow-300 rounded-md bg-yellow-50'>
       <p className='m-4'> Forgotten your password? Enter your e-mail address below, and we will send you an e-mail allowing you to reset it.</p>
      </div>

      <div className="mt-6">
        <label className="text-lg font-medium text-gray-600">Email</label>
        <input
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
           required
        />
      </div>
      <Link to='/'>
     <a href='/account/reset-password/done'><button
        className="w-[60%] py-2 mt-8 text-lg text-white transition-transform transform rounded-lg bg-green-500 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        onClick={handleSubmit}
      >
       Reset My Password
      </button>
      </a>
      </Link>
    </div>
    
    </div>
  );
}

export default ForgotPassword;
