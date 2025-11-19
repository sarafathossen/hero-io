import React from 'react';

const AppLoading = () => {
    return (
         <div>
           <div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>
           <div className=" flex justify-center">
            <h1 className='text-4xl text-center'>App is Loading ...</h1>
           </div>
        </div>
    );
};

export default AppLoading;