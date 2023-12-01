import cookbookImg from '../../../../assets/images/cook-book.jpg'

const CookBook = () => {
    return (
        <div>
            <div className="flex w-full items-center gap-5 mb-10">
                <h1 className='text-xl font-bold'>CookBook</h1>
                <div className="cus-border mt-2"></div>
            </div>
            <img className='cookbook-img' src={cookbookImg} alt="" />
        </div>
    );
};

export default CookBook;