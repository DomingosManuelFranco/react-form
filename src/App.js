import Button from './components/Button';
import Main from './components/Main';

function App() {
  return (
    <>
      <div className="bg-cover max-w-full	 bg-pink-100">
        <section className="max-w-md mx-auto bg-white rounded-xl shadow-md">
          <Main />
          <Button />
        </section>
      </div>
    </>
  );
}

export default App;
