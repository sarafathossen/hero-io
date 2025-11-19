import React, { useEffect, useState } from 'react';
import downloadImg from '../assets/icon-downloads.png';
import starImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';
import { toast, ToastContainer } from 'react-toastify';
import { GrInstall } from 'react-icons/gr';

const Installations = () => {
    const [install, setInstall] = useState([]);
    const [sortInstall, setSortInstall] = useState('none');

    useEffect(() => {
        const saveInstall = JSON.parse(localStorage.getItem('install'));
        if (saveInstall) setInstall(saveInstall);
    }, []);

    const sortedItems = (() => {
        if (sortInstall === 'price-acc') {
            return [...install].sort((a, b) => a.downloads - b.downloads);
        } else if (sortInstall === 'price-dcc') {
            return [...install].sort((a, b) => b.downloads - a.downloads);
        } else {
            return install;
        }
    })();

    const handleRemove = (id) => {
        const existingApp = JSON.parse(localStorage.getItem('install')) || [];
        toast('Uninstalled this app');
        const updatedInstall = existingApp.filter((p) => p.id !== id);
        setInstall(updatedInstall);
        localStorage.setItem('install', JSON.stringify(updatedInstall));
    };

    return (
        <div className="space-y-6 max-w-[1250px] mx-auto px-3 sm:px-5">

            <div className="text-center space-y-2">
                <div className="flex justify-center items-center text-3xl sm:text-5xl gap-3 sm:gap-5">
                    <h1 className="text-2xl sm:text-4xl font-bold">Your Installed Apps</h1>
                    <GrInstall />
                </div>
                <p className="text-gray-500 text-sm sm:text-base">
                    Explore all trending apps developed by us.
                </p>
            </div>


            <div className="flex flex-col sm:flex-row justify-between py-5 items-center gap-4">
                <h1 className="text-xl sm:text-3xl font-semibold border-b-1">
                    <span className="text-gray-500 text-sm sm:text-lg">
                        ({sortedItems.length}) Apps Found
                    </span>
                </h1>

                <label className="form-control w-full sm:w-auto">
                    <select
                        className="select select-bordered w-full sm:w-56"
                        value={sortInstall}
                        onChange={(e) => setSortInstall(e.target.value)}
                    >
                        <option value="None">Sort by Downloads</option>
                        <option value="price-acc">Low to High</option>
                        <option value="price-dcc">High to Low</option>
                    </select>
                </label>
            </div>


            <div className="space-y-4">
                {sortedItems.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg py-10">
                        No Installed Apps Found 😔
                    </div>
                ) : (
                    sortedItems.map((p) => (
                        <div
                            key={p.id}
                            className="card bg-base-100 shadow border p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
                        >

                            <figure className="w-full sm:w-40 h-40 sm:h-28 flex justify-center">
                                <img
                                    className="object-cover rounded-lg w-full sm:w-40 h-full"
                                    src={p.image}
                                    alt={p.title}
                                />
                            </figure>


                            <div className="flex-1 text-center sm:text-left space-y-2">
                                <h3 className="card-title text-lg sm:text-2xl font-semibold">
                                    {p.title}
                                </h3>
                                <div className="flex justify-center sm:justify-start flex-wrap gap-3 text-sm sm:text-base">
                                    <div className="flex items-center">
                                        <img
                                            className="h-5 w-5 mr-1"
                                            src={downloadImg}
                                            alt=""
                                        />
                                        <p>
                                            <span>{p.downloads}</span>M
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            className="h-5 w-5 mr-1"
                                            src={starImg}
                                            alt=""
                                        />
                                        <p>{p.ratingAvg}K</p>
                                    </div>
                                    <div>
                                        <p>{p.size}MB</p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                                <div className="font-semibold">{p.price}</div>
                                <button
                                    onClick={() => handleRemove(p.id)}
                                    className="btn btn-outline bg-green-600 text-white text-sm sm:text-base"
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default Installations;
