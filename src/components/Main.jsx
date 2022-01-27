import photo from '../assets/Ellipse2.svg';
const Main = () => {
  return (
    <>
      <section className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 ">
          <img
            className="bg-red-50 rounded-full max-w-md mx-auto"
            src={photo}
            alt="Ellipse foto"
          />
        </div>
        <p className="text-base font-normal tracking-wide text-center">
          Tina V. invited you to join
        </p>
        <h1 className="text-[24px] font-bold tracking-wide text-center">
          Channel name
        </h1>
        <p className="my- bg-[#f5eaf5] text-base font-normal tracking-wide text-center mt-3 mb-7 ml-20 mr-20 rounded">
          46K Active users・78K Total users
        </p>

        <div className="md:container mx-auto px-12">
          <form className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="How do you like people to call you?"
            />
          </form>
          <div>
            <input type="checkbox" />
            <p>
              I have read and agree to the Terms of service and Privacy policy.
            </p>
          </div>
        </div>
        <div>
          <button className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            continue
          </button>
          <p>Already have an account?</p>
        </div>
      </section>
    </>
  );
};

export default Main;
