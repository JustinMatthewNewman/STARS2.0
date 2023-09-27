import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
                <div>
                    <p className="text-center p-12 mt-2">Please double check that {inputData.org} has a {inputData.gender}&apos;s {inputData.sport} team. </p>
                    <p className="text-center p-12 mt-2">Please try another team. </p>
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
