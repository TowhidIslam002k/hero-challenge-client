import { useEffect } from 'react';
import { useState } from 'react';

const CookBook = () => {
    const [cookbook, setCookbook] = useState([]);
    useEffect(() => {
        fetch('https://hero-server3.vercel.app/cookbook')
            .then(res => res.json())
            .then(data => setCookbook(data))
    }, [])
    return (
        <div>
            {
                cookbook.map(item => <div key={item._id}>
                    <div className="flex w-full items-center gap-5 mb-10">
                        <h1 className='text-xl font-bold'>{item.title}</h1>
                        <div className="cus-border mt-2"></div>
                    </div>
                    <img className='cookbook-img' src={item.recipeImage} alt="" />
                </div>)
            }
        </div>
    );
};

export default CookBook;