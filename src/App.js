import Button from './components/Button';
import Main from './components/Main';

function App() {
  return (
    <>
      <div className="bg-cover bg-pink-200">
        <section className="max-w-md bg-white rounded-xl shadow-md">
          <Main />
          <Button />
        </section>
      </div>
    </>
  );
}

export default App;
