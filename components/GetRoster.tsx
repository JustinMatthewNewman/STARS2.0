import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import urls from "../public/domains";
import Image from "next/image";
import background from "../public/ESPN3.png";

interface InputData {
    type: string;
    org: string;
    org_id: number;
    sport: string;
    gender: string;
}

interface Player {
    name: string;
    number: string;
    positionLong: string;
    positionShort: string;
    height: string;
    weight: string;
    bio: string;
    hometown: string;
    hs: string;
    year: string;
    yearShort: string;
    image: string;
}

function GetRoster() {
    const [text, setText] = useState<string>("");
    const [players, setPlayers] = useState<Player[]>([]);
    const [header, setHeader] = useState<string>("");
    const [orgUrl, setTeamUrl] = useState<string | undefined>(undefined);
    const isGetPlayersCalled = useRef<boolean>(false);

    const router = useRouter();

    function handleError() {
        router.push({
            pathname: "/error",
            query: {
                type: router.query.type as string,
                org: router.query.org as string,
                org_id: parseInt(router.query.org_id as string, 10),
                sport: router.query.sport as string,
                gender: router.query.gender as string,
            },
        });
    }

    useEffect(() => {
        if (router.query.type) {
            const inputData: InputData = {
                type: router.query.type as string,
                org: router.query.org as string,
                org_id: parseInt(router.query.org_id as string, 10),
                sport: router.query.sport as string,
                gender: router.query.gender as string,
            };
            setHeader(inputData.org + " " + inputData.sport);

            console.log(inputData);

            const teamUrl = getSchoolUrl(inputData.org_id);
            setTeamUrl(teamUrl);

            console.log(teamUrl);

            if (teamUrl && !isGetPlayersCalled.current) {
                // console.log(teamUrl);

                const rosterUrl = buildRosterURL(teamUrl, inputData.sport, inputData.gender);

                getPlayers(rosterUrl)
                    .then((result) => {
                        console.log(result);
                        setPlayers(result);
                    })
                    .catch((error) => {
                        console.error("Error fetching players:", error);
                    });

                isGetPlayersCalled.current = true;
            }
        }
    }, [router.query, getPlayers]);

    function buildRosterURL(teamUrl: String, sport: String, gender: String) {
        if (sport === "Football") {
            return "https://" + teamUrl + "/sports/football/roster";
        }
        if (gender === "Men") {
            return "https://" + teamUrl + "/sports/mens-" + sport.toLowerCase() + "/roster";
        } else {
            return "https://" + teamUrl + "/sports/womens-" + sport.toLowerCase() + "/roster";
        }
        return "";
    }

    function getSchoolUrl(org_id: number): string {
        console.log(urls);
        const element = urls.find((item) => item.id === org_id);

        if (element) {
            console.log("Found element:", element.name);
            return element.name;
        } else {
            console.log("Element not found.");
            // Return an empty string or a default URL
            return "";
        }
    }

    async function getPlayers(url: string): Promise<Player[]> {
        try {
            const response = await fetch("/api/parse?url=" + url, {
                method: "POST",
                body: JSON.stringify({ url }),
            });

            if (response.status === 777) {
                handleError();
            }

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data.players || [];
        } catch (error) {
            console.error("Error fetching and parsing data:", error);
            return [];
        }
    }

    return (
        <div className="flex flex-col justify-center text-center">
            {players.length === 0 ? (
                <p className="text-center p-12 mt-10">Loading...</p>
            ) : (
                players.map((player, index) => (
                    <div
                        className="relative border p-4 mt-4 ml-8 mr-8 rounded-md bg-slate-200 text-white"
                        key={index}>
                        <svg
                            viewBox="0 55.099 1070.721 444.901"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient
                                    id="color-0"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%">
                                    <stop
                                        offset="0"
                                        stopColor="#000000"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#434343"
                                    />
                                </linearGradient>

                                <linearGradient
                                    id="color-1"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%">
                                    <stop
                                        offset="0"
                                        stopColor="#848484"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#ffffff"
                                    />
                                </linearGradient>

                                <linearGradient
                                    id="gradient-1"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%">
                                    <stop
                                        offset="0"
                                        stopColor="#f0f0f0"
                                    />
                                    <stop
                                        offset="2.5"
                                        stopColor="#bfbfbf"
                                    />
                                </linearGradient>

                                <radialGradient id="gradient-0">
                                    <stop
                                        offset="0"
                                        stopColor="#494949"
                                    />
                                    <stop
                                        offset="0.587"
                                        stopColor="#848484"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#aeaeae"
                                    />
                                </radialGradient>

                                <linearGradient id="gradient-3">
                                    <stop
                                        offset="0"
                                        stopColor="#1e1e1e"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#5d5d5d"
                                    />
                                </linearGradient>
                            </defs>

                            {/* Top text background container */}
                            <rect
                                x="114.677"
                                y="209.672"
                                width="885.749"
                                height="194.772"
                                rx="44.728"
                                ry="44.728"
                                fill="url(#color-0)"
                                fillOpacity="0.84"
                                stroke="url(#color-1)"
                                strokeWidth="6"
                                strokeLinejoin="round"
                                strokeDashoffset="29"
                                strokeLinecap="round"
                                paintOrder="fill"
                            />

                            {/* Color Strip background box */}

                            <rect
                                x="75.342"
                                y="271.612"
                                width="959.161"
                                height="135.456"
                                rx="29.022"
                                ry="29.022"
                                fill="url(#gradient-1)"
                                stroke="url(#gradient-0)"
                                strokeWidth="5"
                                strokeLinejoin="round"
                            />

                            {/* Color Stripe */}
                            <path
                                fill="#e9d182"
                                strokeWidth="3"
                                stroke="url(#gradient-0)"
                                strokeLinejoin="round"
                                d="M 213.275 324.849 L 649.25 324.005 L 693.623 358.085 L 999.029 358.511 L 999.125 374.139 L 693.268 373.348 L 645.327 337.02 L 213.3 337.154 L 213.275 324.849 Z"
                            />

                            {/* Logo Box */}
                            <rect
                                x="20.515"
                                y="261.63"
                                width="252.762"
                                height="158.686"
                                rx="38.761"
                                ry="38.761"
                                fill="url(#gradient-3)"
                                stroke="url(#gradient-0)"
                                strokeWidth="7"
                            />

                            <text
                                textAnchor="left"
                                font-size="30"
                                fill="white">
                                <tspan
                                    x="200"
                                    y="250">
                                    {player.height} | {player.weight} | {player.hometown} |{" "}
                                    {player.year}{" "}
                                </tspan>
                            </text>

                            <text
                                textAnchor="left"
                                font-size="27"
                                fill="#2b2b2b">
                                <tspan
                                    x="290"
                                    y="312">
                                    {player.name} | #{player.number}
                                </tspan>
                            </text>

                            <text
                                textAnchor="left"
                                font-size="34"
                                fill="#2b2b2b">
                                <tspan
                                    x="290"
                                    y="380">
                                    {player.positionLong}
                                </tspan>
                            </text>
                        </svg>
                    </div>
                ))
            )}
        </div>
    );
}

export default GetRoster;
