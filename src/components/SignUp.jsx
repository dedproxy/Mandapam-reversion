import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try{
       console.log({"Name:":name,
        "Email:":email,
        "password":password,
        "confirmPassword":confirmPassword
       });
    
    }
    catch(error){
      console.log(error);
    }
    
  

    // Submit logic here
   

    alert("Sign up successful!");
  };

  return (
    <div className='flex w-full h-screen overflow-y-hidden'>
      <img
            src="/public/Logo_Icon.jpeg"
            alt="Website-Logo"
            className="object-cover w-[50%] h-auto m-5  bg-cover"
          />
    <div className="w-11/12 max-w-lg p-8 m-5 mx-auto bg-white border border-gray-200 shadow-lg rounded-xl">
      <h2 className="mb-6 text-3xl font-semibold text-center">Register</h2>
      <p className="mb-3 font-light text-center text-1xl">Give us the details to get started</p>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-600">Name</label>
          <input
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-100"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-600">Email</label>
          <input
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-100"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-600">Password</label>
          <input
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-100"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm password input */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-600">Confirm Password</label>
          <input
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-green-100"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Sign Up button */}
        <button
          className="w-full py-3 mt-6 font-bold text-white bg-green-500 rounded-lg focus:outline-none hover:bg-white hover:text-green-500 hover:border-green-500 hover:border focus:ring-2"
          type="submit"
        >
          Register
        </button>
      </form>

      {/* Link to Sign In */}
      <p className="mt-4 text-sm text-center text-gray-500">
        Already have an account?{" "}
        <Link to="/signin" className="text-violet-600 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
    </div>
  );
}

export default SignUp;
