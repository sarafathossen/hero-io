import React from 'react';
import { Link } from 'react-router';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'

const AppCard = ({ app }) => {
    const { title, ratingAvg, downloads, image,id } = app
    return (
        <Link to={`appdetails/${id}`}>
            <div className="">
                <div className="card bg-base-100  shadow-sm hover:mt-[-8px]">
                    <figure className='h-48 overflow-hidden'>
                        <img className='w-full  object-cover'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}

                        </h2>

                        <div className="card-actions justify-between ">
                            <div className="badge badge-outline  "> <img className=' h-[15px] w-[15px] ' src={downloadImg} alt="" /> {downloads} </div>
                            <div className="badge badge-outline"> <img className='h-[15px] w-[15px] ' src={ratingImg} alt="" /> {ratingAvg}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default AppCard;