import { Link } from 'react-router-dom';

const YouMayLike = ({ data }) => {
    // console.log(data)
    return (
        <div>
            <div className="my-16 flex gap-10 items-center">
                <p className='w-full xl:w-10/12 text-2xl font-bold'>You may like these too</p>
                <div className="h-2 border border-b-gray-400 border-t-gray-400 w-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                {
                    data.slice(0, 4).map(meal => <div key={meal._id} className="">
                        <Link to={`/feature/${meal._id}`}>
                            <img src={meal.recipeImage} alt="" />
                            <p className="font-bold mt-5 sm:text-lg">{meal.title}</p>
                        </Link>
                    </div>)
                }

            </div>
        </div>
    );
};

export default YouMayLike;