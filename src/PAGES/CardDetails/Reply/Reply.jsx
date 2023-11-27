import React from 'react';

const Reply = () => {
    return (
        <div>
            <div className="my-16 flex gap-10 items-center">
                <p className='w-full xl:w-6/12 text-2xl font-bold'>Leave A Reply</p>
                <div className="h-2 border border-b-gray-400 border-t-gray-400 w-full"></div>
            </div>

            <div className="">
                <p className='mb-5'>Your email address will not be published. Required fields are marked *</p>
                <form>
                    <textarea className='w-full h-52 outline-none border border-gray-300 focus:border-black p-3' name="" id="" cols="30" rows="10" placeholder='Your Comment*' required></textarea>
                    <div className="flex gap-5 my-6">
                        <input className='w-full h-12 outline-none border border-gray-300 focus:border-black p-3' type="text" placeholder='Your Name*' required/>
                        <input className='w-full h-12 outline-none border border-gray-300 focus:border-black p-3' type="email" placeholder='Your Email*'  required/>
                    </div>
                    <input className='w-full h-12 outline-none border border-gray-300 focus:border-black p-3' type="text" name="" id="" placeholder='Your Website'/>

                    <div className="flex gap-5 my-5">
                        <input type="checkbox" name="" id="" />
                        <span>Save my name, email, and website in this browser for the next time I comment.</span>
                    </div>
                    <button className='py-4 px-7 bg-black hover:bg-gray-400 text-white'>Post Comment</button>
                </form>
            </div>
        </div>
    );
};

export default Reply;