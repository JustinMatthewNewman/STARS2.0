import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

interface InputData {
    type: string;
    org: string;
    org_id: number;
    sport: string;
    gender: string;
}

function HandleError() {
    const router = useRouter();
    const [inputData, setInputData] = useState<InputData | null>(null);

    useEffect(() => {
        if (router.query.type) {
            const newData: InputData = {
                type: router.query.type as string,
                org: router.query.org as string,
                org_id: parseInt(router.query.org_id as string, 10),
                sport: router.query.sport as string,
                gender: router.query.gender as string,
            };
            setInputData(newData);
        }
    }, [router.query]);

    return (
        <div>
            {inputData ? (
                <div className="flex items-center justify-center flex-col">
                    <p className="text-center p-12 mt-2">Please double check that {inputData.org} has a {inputData.gender}&apos;s {inputData.sport} team. </p>
                    <p className="text-center p-12 mt-2">Please try another team. </p>
                    <Link href='/'>
                    <button
                        className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all  bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                        style={{
                            boxShadow:
                                "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                        }}>
                        <span> Home </span>
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.75 6.75L19.25 12L13.75 17.25"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19 12H4.75"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    </Link>

                </div>
            ) : (
                <div>
                    <p className="text-center p-12 mt-10">Loading...</p>
                </div>
            )}
        </div>
    );
}

export default HandleError;
