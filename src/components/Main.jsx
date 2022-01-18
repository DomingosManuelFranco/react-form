import photo from '../assets/Ellipse2.svg';
const Main = () => {
  return (
    <>
      <section className="bg-white">
        <div>
          <div className="pt-10 pb-5 ">
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
          <p className="my- bg-[#f5eaf5] text-base font-normal tracking-wide text-center ml-20 mr-20 rounded">
            46K Active users・78K Total users
          </p>
        </div>
        <form>
          <h1>User name</h1>
          <input
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
      </section>
    </>
  );
};

export default Main;
