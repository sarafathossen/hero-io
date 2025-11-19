import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import downloadImg from '../assets/icon-downloads.png';
import starImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PageLoading from '../Components/PageLoading';
import { toast, ToastContainer } from 'react-toastify';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find((p) => String(p.id) === id);

  useEffect(() => {
    const existingApp = JSON.parse(localStorage.getItem('install')) || [];
    const isAlreadyInstalled = existingApp.some(
      (p) => String(p.id) === String(id)
    );
    if (isAlreadyInstalled) setIsInstalled(true);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!app) return <PageLoading />;

  const { title, companyName, downloads, ratingAvg, reviews, image, description, ratings } = app;
  const chart = ratings;

  const handleInstall = () => {
    toast('App is Install');
    if (isInstalled) return toast('Already Installed');
    setIsInstalled(true);

    const existingApp = JSON.parse(localStorage.getItem('install')) || [];
    const isDuplicate = existingApp.some((p) => String(p.id) === String(id));
    if (isDuplicate) return toast('Already Installed');

    const updatedInstall = [...existingApp, app];
    localStorage.setItem('install', JSON.stringify(updatedInstall));
  };

  return (
    <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <div className="flex flex-col lg:flex-row bg-base-100 shadow-sm  rounded-xl overflow-hidden">
        
        <div className="flex justify-center items-center w-full lg:w-[400px] p-6 bg-gray-50">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto rounded-xl object-contain"
          />
        </div>

        
        <div className="flex-1 p-6 lg:p-10 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mt-2">
              {companyName}
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="flex items-center gap-4  rounded-lg p-4">
              
              <div>
                <p className="text-gray-500 text-sm">Downloads</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {downloads}M
                </h2>
                
              </div>
              <img src={downloadImg} alt="Downloads" className="w-12 h-12" />
            </div>

            
            <div className="flex items-center gap-4 rounded-lg p-4">
              
              <div>
                <p className="text-gray-500 text-sm">Average Ratings</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {ratingAvg}
                </h2>
              </div>
              <img src={starImg} alt="Ratings" className="w-12 h-12" />
            </div>

            
            <div className="flex items-center gap-4  rounded-lg p-4">
              
              <div>
                <p className="text-gray-500 text-sm">Total Reviews</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {reviews}K
                </h2>
              </div>
              <img src={reviewImg} alt="Reviews" className="w-12 h-12" />
            </div>
          </div>

          
          <div className="pt-4">
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`btn btn-primary text-lg sm:text-2xl w-full sm:w-[250px] h-[60px] sm:h-[70px] ${
                isInstalled ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isInstalled ? 'Installed' : `Install Now ${app.size}MB`}
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Ratings
        </h1>
        <div className="bg-base-100 border rounded-xl p-4 sm:p-6 h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              data={chart}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                barSize={20}
                fill="#632EE3"
                name="Total Ratings"
              />
              <Line />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      
      <div className="my-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Description
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
