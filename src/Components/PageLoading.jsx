import React from 'react';

const PageLoading = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex w-52 flex-col gap-4 ">
                    <div className="flex items-center gap-4">
                        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                        <div className="flex flex-col gap-4">
                            <div className="skeleton h-4 w-20"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </div>
                    <div className="skeleton h-32 w-full"></div>
                </div>
            </div>
            <div className=" flex justify-center">
                <h1 className='text-4xl text-center'>Page is Loading ...</h1>
            </div>
        </div>
    );
};

export default PageLoading;