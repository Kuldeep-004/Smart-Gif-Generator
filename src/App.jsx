import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="w-full p-8 background min-h-screen relative flex flex-col items-center">

      <h1 className='w-[95%] m-auto bg-white absolute flex justify-center p-3 mt-2 font-bold text-[30px] rounded-[1rem]'>RANDOM GIFS</h1>

      <div className="flex flex-col w-full mt-5 items-center gap-y-10">
        <Random/>
        <Tag/> 
      </div>
    </div>

  );
}
