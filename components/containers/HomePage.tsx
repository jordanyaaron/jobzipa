"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import JobsSkeleton from "@/components/skeletons/JobSkeleton";
 
import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function  HomePage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  
  return (
        <div className="absolute w-[100vw] lg:w-full bottom-0 top-16 bg-[var(--main-bg)]  md:px-6 flex-1 overflow-y-auto">
            <main className="w-full flex gap-10" >
            {
                loading 
                    ?   <div className="p-0 lg:p-10 w-full lg:w-[560px] text-center text-gray-500">
                            {/* <JobsSkeleton /> */}
                        </div>
                : 
                jobs.length === 0 
                    ?   <div className="p-10 w-full lg:w-[560px] text-center text-gray-500">
                            No  jobs yet 🔖
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
                    <h1>Add Section</h1>

                </div>
            </aside>
            </main>
        </div>
    );
};


