import Button from './components/Button';
import Main from './components/Main';

function App() {
  return (
    <>
      <div className="bg-cover py-20 bg-pink-100">
        <section className="max-w-md mx-auto bg-white rounded-lg shadow-ms border-gray-300">
          <Main />
          <Button />
        </section>
      </div>
    </>
  );
}

export default App;
