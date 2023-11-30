import useSetTitle from "../../CustomHooks/useSetTitle";

const BuyNowPage = () => {
  useSetTitle('Buy Page')
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 sm:p-8 md:p-12 rounded-md w-full sm:w-96 mt-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Buy Now</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="**** **** **** ****"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="123"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Buy Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyNowPage;
