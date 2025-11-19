import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import useApps from '../Hooks/useApps';
import PageLoading from '../Components/PageLoading';

const Layouts = () => {
    const {apps,loading}=useApps()
    return (
        <div className='flex flex-col '>
            <Navbar></Navbar>
            <div className="flex-1 min-h-screen">
                {
                    loading?(<PageLoading></PageLoading>):<Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;