import Swal from 'sweetalert2';

const PostData = () => {
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
        const category_id = form.categoryId.value;
        const coffeeData = { title, category_id, authorImage, authorName, uploadDate, description, ratings, recipeImage, duration, makingType, serves, populerity};
        console.log(coffeeData)

        fetch('http://localhost:5000/categoryMeals', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added A New Meals!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-violet-600 text-center'>Add Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                <div className="grid grid-cols-2 my-10 w-10/12 mx-auto gap-5">
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="title" className='block mb-2 text-lg font-medium text-gray-700'>Title:</label>
                        <input className='input input-bordered w-full' type="text" name="title" id="title" placeholder="Enter title..." required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="categoryId" className='block mb-2 text-lg font-medium text-gray-700'>category_id:</label>
                        <input className='input input-bordered w-full' type="text" name="categoryId" id="categoryId" placeholder="Enter categoryId..." required />
                    </div>

                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="authorImage" className='block mb-2 text-lg font-medium text-gray-700'>Author Image:</label>
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
                        <input className='input input-bordered w-full' type="text" name="ratings" id="ratings" placeholder="Enter ratings..." required />
                    </div>

                    {/*  DURATIONS, MAKING TYPE, SERVES, POPULERITY INPUT FIELD */}
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="duration" className='block mb-2 text-lg font-medium text-gray-700'>Duration:</label>
                        <input className='input input-bordered w-full' type="text" name="duration" id="duration" placeholder="Enter duration..." required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="makingType" className='block mb-2 text-lg font-medium text-gray-700'>Making Type:</label>
                        <input className='input input-bordered w-full' type="text" name="makingType" id="makingType" placeholder="Enter makingType..." required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="serves" className='block mb-2 text-lg font-medium text-gray-700'>Serves:</label>
                        <input className='input input-bordered w-full' type="text" name="serves" id="serves" placeholder="Enter serves..." required />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <label htmlFor="populerity" className='block mb-2 text-lg font-medium text-gray-700'>Populerity:</label>
                        <input className='input input-bordered w-full' type="text" name="populerity" id="populerity" placeholder="Enter populerity..." required />
                    </div>

                    {/* RECIPE IMAGE INPUT FIELD */}
                    <div className="col-span-2">
                        <label htmlFor="recipeImage" className='block mb-2 text-lg font-medium text-gray-700'>Recipe Image:</label>
                        <input className='input input-bordered w-full' type="text" name="recipeImage" id="recipeImage" placeholder="Enter recipeImage..." required />
                    </div>

                    {/* FORM SUBMIT BUTTON */}
                    <input type="submit" value="add a meals" className='btn btn-primary col-span-2' />
                </div>
            </form>

        </div>
    );
};

export default PostData;