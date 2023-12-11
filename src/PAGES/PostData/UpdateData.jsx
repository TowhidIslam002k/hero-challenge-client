import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../ContextProviders/AuthProviders';

const UpdateData = () => {
    const {user} = useContext(UserContext)
    const meal = useLoaderData();
    // console.log(meal)
    const navigate = useNavigate();
    const handleUpdateForm = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const duration = event.target.duration.value;
        const price = event.target.price.value;
        const recipeImage = event.target.recipeImage.value;
        const updatedMeal = { title, description, duration, price, recipeImage }

        fetch(`http://localhost:5000/updateMeal/${meal._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedMeal)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added A New Meals!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate(`/myUpload/${user?.uid}`)
                }
            })
            .catch(error => console.error('Error during update:', error));
    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-violet-600 text-center'>Update Meal</h1>
            <p className='font-bold text-center mt-7'>You can update only Title, Description, Duration, Price and Recipe-Image.</p>
            <form onSubmit={handleUpdateForm}>
                <div className="grid grid-cols-2 my-10 w-10/12 mx-auto gap-5">
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="title" className='block mb-2 text-lg font-medium text-gray-700'>Title:</label>
                        <input className='input input-bordered w-full' type="text" name="title" id="title" defaultValue={meal?.title} placeholder="Enter title..." required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="description" className='block mb-2 text-lg font-medium text-gray-700'>Description:</label>
                        <input className='input input-bordered w-full' type="text" name="description" id="description" defaultValue={meal?.description} placeholder="Enter description..." required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="duration" className='block mb-2 text-lg font-medium text-gray-700'>Duration:</label>
                        <input className='input input-bordered w-full' type="text" name="duration" id="duration" defaultValue={meal?.duration} placeholder="Example: 30Minute" required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="price" className='block mb-2 text-lg font-medium text-gray-700'>Price:</label>
                        <input className='input input-bordered w-full' type="text" name="price" id="price" defaultValue={meal.price} placeholder="Enter price" required />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="recipeImage" className='block mb-2 text-lg font-medium text-gray-700'>Recipe Image URL:</label>
                        <input className='input input-bordered w-full' type="text" name="recipeImage" id="recipeImage" defaultValue={meal.recipeImage} placeholder="Enter recipeImage url..." required />
                    </div>
                    <input type="submit" value="add a meals" className='btn btn-primary col-span-2' />
                </div>
            </form>
        </div>
    );
};

export default UpdateData;