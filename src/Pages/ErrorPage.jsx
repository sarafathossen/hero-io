import React from 'react';
import { useNavigate } from 'react-router';
import errorImg from '../assets/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (

    <div className="">
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <div className="flex justify-center">
          <img src={errorImg} alt="" />
        </div>
        <h1 className='text-4xl font-bold mb-4'>
          Page Not Found <br /> 404 Error
        </h1>
        <button
          onClick={handleGoBack}
          className="btn btn-outline text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Go Back
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
