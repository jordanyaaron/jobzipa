"use client";
import {
  ArrowUpTrayIcon
} from "@heroicons/react/24/outline";


export default  function PostPage(){

  return (
    <>
      <header className="h-16 border-b bg-[var(--background)] border-theme lg:z-50 flex lg:fixed top-0 left-0 right-0 items-center px-4">
            
            <h1 className="text-2xl font-bold text-black text-main ml-2">
              JobZipa
            </h1>
             <div className="flex-1" />
            <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-[var(--background)] bg-[var(--foreground)]"
            >
                <ArrowUpTrayIcon className="h-6 w-6   text-[var(--background)]" />
            </button>
            
          </header>
      <div className="w-full flex gap-10" >
        <div className="w-full h-full"></div>
        <div className="w-full h-full"></div>
        <h1>Post Page</h1>
      </div>
    </>
  );
};



