import photo from '../assets/Ellipse2.svg';
import Button from './Button';

const Main = () => {
  return (
    <>
      <section className="bg-white">
        <div>
          <div className="bg-red-50">
            <img src={photo} alt="Ellipse foto" />
          </div>
          <p>Tina V. invited you to join</p>
          <h1>Channel name</h1>
          <p>46K Active users・78K Total users</p>
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
      <Button />
    </>
  );
};

export default Main;
