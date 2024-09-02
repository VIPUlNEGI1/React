import './App.css';
// import Card from './components/card';
function App() {
  return (
  <>
    <div className="App bg-black text-yellow-50 ">
     <h1 className='font-mono pt-11'>how to inject the tailwind in  react</h1>
  <h2> Terminal

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p </h2>
  
{/* there is a  one spep for do but  it was swing the erorr */}
<p>@tailwind base;
@tailwind components;
@tailwind utilities;</p>



 <button className=' mt-10 mb-11 bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      Get Started
    </button>
    
  </div>
{/* <Card/> */}
  </>

  );
}

export default App;
