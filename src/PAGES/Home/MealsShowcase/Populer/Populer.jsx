import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Populer.css'

const Populer = () => {
    const [populer, setPopuler] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/populer')
            .then(res => res.json())
            .then(data => setPopuler(data))
    }, [])
    return (
        <div>
            <div className="flex w-full items-center gap-5 mb-10">
                <h1 className='text-xl font-bold'>Populer</h1>
                <div className="cus-border mt-2"></div>
            </div>
            {populer && populer.slice(0, 4).map((meal) => {
                return (
                    <>
                        <Link>
                            <div key={meal?._id} className="populer px-2 sm:grid grid-cols-6 gap-10 md:gap-0 mb-10 sm:mb-0">
                                <img className='col-span-2 my-auto' src={meal?.recipeImage} alt="" />
                                <div className="p-2 col-span-4">
                                    <p className='text-xs'>Daily recipe</p>
                                    <h3 className='text-lg font-bold mt-2'>{meal?.title}</h3>
                                </div>
                            </div>
                        </Link>
                    </>
                )
            })}
        </div>
    );
};

export default Populer;