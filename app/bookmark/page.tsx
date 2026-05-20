"use client";

import Link from "next/link";import React, { useEffect, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const SavedJobsPage = () => {
  const [jobs, setJobs] = useState([]);

  

  

  return (
    <>
    <div className="w-fulll flex gap-10" >
      {
        jobs.length === 0 
        ?  <div className="p-10 w-full lg:w-[560px] text-center text-gray-500">
                No saved jobs yet 🔖
            </div>
        :  <main
              className="
                w-full
                pt-6
                lg:w-[560px] 
              "
            >
                <h1 className="text-xl text-[var(--text)] font-bold mb-4">Saved Jobs</h1>
                <div className="flex flex-col gap-3">
                    <h1>hapa ndipo save job zitakaa</h1>
                </div>
            </main>
      }
      <aside className="hidden lg:block pb-10 w-[400px]">
          <div className="sticky top-10">

              {/* ADS */}
              <div className='mt-4 flex flex-col gap-2'>
                <SkeletonBlock className="w-20 h-6"/>
                <SkeletonBlock className="w-full h-[150px]"/>
              </div>

              <div className='flex mt-3 gap-2'>
                <div>
                    <SkeletonBlock className="w-[100px] h-[100px]"/>
                </div>
                <div className='flex-1 flex flex-col gap-2'>
                    <SkeletonBlock className="h-5 w-full"/>
                    <SkeletonBlock className="h-5 w-3/4"/>
                    <SkeletonBlock className="h-5 w-1/4"/>
                </div>
              </div>

              <Footer />

          </div>
      </aside>
    </div>
    </>
  );
};

export default SavedJobsPage;

