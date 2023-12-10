import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../ContextProviders/AuthProviders';
import useSetTitle from '../../CustomHooks/useSetTitle';

const PostData = () => {
    useSetTitle('Post')
    const {user} = useContext(UserContext)
    const {uid} = user;
    const navigate = useNavigate()
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const authorImage = form.authorImage.value;
        const authorName = form.authorName.value;
        const uploadDate = form.uploadDate.value;
        const description = form.description.value;
        const ratings = form.ratings.value;
        const recipeImage = form.recipeImage.value;
        const duration = form.duration.value;
        const makingType = form.makingType.value;
        const serves = form.serves.value;
        const populerity = form.populerity.value;
        const price = form.price.value;
        const coffeeData = { title, authorImage, authorName, uploadDate, description, ratings, recipeImage, duration, makingType, serves, populerity, price, uid };
        console.log(coffeeData)

        fetch('https://hero-server3.vercel.app/public', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added A New Meals!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate('/myUpload')
                }
            })
    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-violet-600 text-center'>Add Meals</h1>
            <form onSubmit={handleAddCoffee}>
                <div className="grid grid-cols-2 my-10 w-10/12 mx-auto gap-5">
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="title" className='block mb-2 text-lg font-medium text-gray-700'>Title:</label>
                        <input className='input input-bordered w-full' type="text" name="title" id="title" placeholder="Enter title..." required />
                    </div>

                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="authorImage" className='block mb-2 text-lg font-medium text-gray-700'>Author Image URL:</label>
                        <input className='input input-bordered w-full' type="text" name="authorImage" id="authorImage" placeholder="Enter authorImage..." required />
                    </div>

                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="authorName" className='block mb-2 text-lg font-medium text-gray-700'>Author Name:</label>
                        <input className='input input-bordered w-full' type="text" name="authorName" id="authorName" placeholder="Enter authorName..." required />
                    </div>

                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="uploadDate" className='block mb-2 text-lg font-medium text-gray-700'>Upload Date:</label>
                        <input className='input input-bordered w-full' type="text" name="uploadDate" id="uploadDate" placeholder="Enter uploadDate..." required />
                    </div>

                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="description" className='block mb-2 text-lg font-medium text-gray-700'>Description:</label>
                        <input className='input input-bordered w-full' type="text" name="description" id="description" placeholder="Enter description..." required />
                    </div>

                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="ratings" className='block mb-2 text-lg font-medium text-gray-700'>Ratings:</label>
                        <input className='input input-bordered w-full' type="text" name="ratings" id="ratings" placeholder="Enter ratings out of 5" required />
                    </div>

                    {/*  DURATIONS, MAKING TYPE, SERVES, POPULERITY INPUT FIELD */}
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="duration" className='block mb-2 text-lg font-medium text-gray-700'>Duration:</label>
                        <input className='input input-bordered w-full' type="text" name="duration" id="duration" placeholder="Example: 30Minute" required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="makingType" className='block mb-2 text-lg font-medium text-gray-700'>Making Type:</label>
                        <input className='input input-bordered w-full' type="text" name="makingType" id="makingType" placeholder="Example: Easy or Super Easy" required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="serves" className='block mb-2 text-lg font-medium text-gray-700'>Serves:</label>
                        <input className='input input-bordered w-full' type="text" name="serves" id="serves" placeholder="Example: serves1" required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="populerity" className='block mb-2 text-lg font-medium text-gray-700'>Populerity:</label>
                        <input className='input input-bordered w-full' type="text" name="populerity" id="populerity" placeholder="Populer or non Populer" required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="price" className='block mb-2 text-lg font-medium text-gray-700'>Price:</label>
                        <input className='input input-bordered w-full' type="text" name="price" id="price" placeholder="Enter price" required />
                    </div>

                    {/* RECIPE IMAGE INPUT FIELD */}
                    <div className="col-span-2">
                        <label htmlFor="recipeImage" className='block mb-2 text-lg font-medium text-gray-700'>Recipe Image URL:</label>
                        <input className='input input-bordered w-full' type="text" name="recipeImage" id="recipeImage" placeholder="Enter recipeImage url..." required />
                    </div>

                    {/* FORM SUBMIT BUTTON */}
                    <input type="submit" value="add a meals" className='btn btn-primary col-span-2' />
                </div>
            </form>

        </div>
    );
};

export default PostData;