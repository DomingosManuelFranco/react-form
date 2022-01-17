import Button from './components/Button';
import Main from './components/Main';

function App() {
  return (
    <>
      <div className="bg-cover py-20 bg-pink-100">
        <section className="max-w-md mx-auto bg-white rounded-[12px] shadow-[#272727]">
          <Main />
          <Button />
        </section>
      </div>
    </>
  );
}

export default App;
