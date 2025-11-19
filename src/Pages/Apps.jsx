import React, { useState, useEffect } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import AppLoading from '../Components/AppLoading';
import LoadingSpiner from '../Components/LoadingSpiner';
import appErrorImg from '../assets/App-Error.png';
import { useNavigate } from 'react-router';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const navigate = useNavigate();

  const term = search.trim().toLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setInitialLoad(false), 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (!term) {
      setSearchLoading(false);
      return;
    }
    setSearchLoading(true);
    const timer = setTimeout(() => setSearchLoading(false), 300);
    return () => clearTimeout(timer);
  }, [term]);

  if (loading || initialLoad) {
    return (
      <div className="flex justify-center items-center h-80">
        <LoadingSpiner />
      </div>
    );
  }

  return (
    <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-8 text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our All Applications
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Explore all apps on the market developed by us. We code for millions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 items-center py-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left">
          <span className="block sm:inline text-gray-500 mt-1 text-2xl sm:mt-0">
            ({searchApps.length}) Apps Found
          </span>
        </h1>

        <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="grow text-sm sm:text-base py-2"
          />
        </label>
      </div>

      {searchLoading ? (
        <div className="flex justify-center items-center h-40">
          <AppLoading />
        </div>
      ) : searchApps.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-60 sm:h-80 text-center py-8 px-4">
          <div className="flex justify-center">
            <img src={appErrorImg} alt="Error" className="w-40 sm:w-60" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-500">
            No App Found 😔
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Try searching with a different keyword.
          </p>
          <button onClick={() => navigate(-1)} className="btn btn-outline text-white mt-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            Go Back
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mt-6">
          {searchApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
