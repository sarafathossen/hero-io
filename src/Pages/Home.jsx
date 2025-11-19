import React from 'react';
import { Link } from 'react-router';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import heroImg from '../assets/hero.png';
import downloadImg from '../assets/icon-downloads.png';
import ratingImg from '../assets/icon-ratings.png';
import playImg from '../assets/play.jpg';
import LoadingSpiner from '../Components/LoadingSpiner';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';

const Home = () => {
  const { apps, loading } = useApps();
  const featureApps = apps.slice(0, 8);

  return (
    <div>
      
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          We Build <br />
          <span className="text-[#632EE3]">Productive</span>{' '}
          <span className="text-[#392F5A]">Apps</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4">
          At <strong>HERO.IO</strong>, we craft innovative apps designed to make
          everyday life simpler, smarter, and more exciting. <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <Link
            to="https://play.google.com/store/games"
            className="btn btn-outline text-lg sm:text-xl px-6 py-3 w-full sm:w-auto"
          >
            <FaGooglePlay /> Google Play
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            className="btn btn-outline text-lg sm:text-xl px-6 py-3 w-full sm:w-auto"
          >
            <FaAppStoreIos /> App Store
          </Link>
        </div>

        
        <div className="flex justify-center mt-8">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-[700px] h-auto object-contain"
          />
        </div>
      </div>

      
      <div className="bg-[#834EEB] w-full my-16 py-10 px-4 sm:px-8">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center">
          Trusted by Millions, Built for You
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-[1100px] mx-auto text-center">
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <img src={downloadImg} alt="downloads" className="w-16 h-16 sm:w-20 sm:h-20" />
            <div className="text-white">
              <p>Total Downloads</p>
              <h1 className="text-2xl sm:text-3xl font-bold">29.6M</h1>
              <p className="text-sm sm:text-base">21% more than last month</p>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <img src={ratingImg} alt="ratings" className="w-16 h-16 sm:w-20 sm:h-20" />
            <div className="text-white">
              <p>Total Reviews</p>
              <h1 className="text-2xl sm:text-3xl font-bold">906K</h1>
              <p className="text-sm sm:text-base">46% more than last month</p>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <img src={playImg} alt="apps" className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg" />
            <div className="text-white">
              <p>Active Apps</p>
              <h1 className="text-2xl sm:text-3xl font-bold">132+</h1>
              <p className="text-sm sm:text-base">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-center my-10 px-4">
        <div className="flex justify-center items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold">
          <h1>Trending Apps</h1>
          <FaArrowTrendUp />
        </div>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <LoadingSpiner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {featureApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>

      
      <div className="text-center my-10">
        <Link
          className="btn btn-outline text-lg sm:text-xl px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
          to="/apps"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
