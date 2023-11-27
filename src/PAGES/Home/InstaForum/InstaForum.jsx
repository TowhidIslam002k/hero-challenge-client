import React from 'react';
import './InstaForum.css'

const InstaForum = () => {
    return (
        <div className='mt-24 mb-20'>
            <div className="flex w-full items-center gap-5 mb-10">
                <h1 className='text-xl font-bold'>@best_meals_on_Instagram</h1>
                <div className="cus-border mt-2"></div>
            </div>
           <div className='forum-bg text-center py-16'>
           <h1 className='text-2xl font-bold'>Easy Meals <span className='underline'>Forum</span> </h1>
            <p className='my-2 font-bold'>186.281 users, 184.853 recipes, 1.432.915 photos</p>
            <button className='btn bg-yellow-200'>join now</button>
            </div> 
        </div>
    );
};

export default InstaForum;