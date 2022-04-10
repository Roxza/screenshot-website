import axios from "axios";
import react, { useState } from "react";

interface capture {
   status: boolean;
   url: string;
}

export default function Index() {
   const [getScreen, setScreen] = useState<String>(null);

   const screen = async (e) => {
      e.preventDefault();
      const url = e.target.url.value;
      if (!url) return alert("Please enter a valid URL");
      axios.get<capture>("https://api.roxza.me/v1/capture/old?link=" + url).then((res) => {
         if (res.data.status === true) {
            console.log(res.data.url);
            setScreen(res.data.url);
         } else {
            alert("Invalid url");
         }
      });
   };
   return (
      <div className="h-96 flex items-center justify-center">
         <div className="mt-[180px]">
            <h1 className="font-bold text-white text-3xl text-center">Take a screenshot website online</h1>
            <p className="mt-3 font-light text-center mx-auto text-zinc-300">An easy way to capture a screenshot of a full webpage</p>
            <div className="rounded-lg mt-8">
               {getScreen ? (
                  <img src={`${getScreen}`} alt="screenshot" className="h-[350px] w-[700px]  rounded" />
               ) : (
                  <div className="bg-gray-300 animate-pulse dark:bg-[#080808] dark:hover:bg-[#101010] transition-all duration-200 bg-brand-black rounded-lg">
                     <div className="h-[350px] w-[700px] bg-slate-700 rounded" />
                  </div>
               )}
               <div>
                  <form className="mt-3 flex" onSubmit={screen}>
                     <input type="text" name="url" className="hover:bg-[#101010] ml-[0px] bg-[#080808] text-white py-2 px-4 text-sm mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full" placeholder="google.com"></input>
                     <button type="submit" className="bg-[#080808] mr-[0px] hover:bg-[#101010]  shadow-xl py-3 px-6 mx-auto w-50 flex items-center justify-center rounded-lg text-gray-300 transition-all">
                        <i className="mr-1.5 fa-solid fa-bolt-lightning"></i> Capture Screenshot
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
