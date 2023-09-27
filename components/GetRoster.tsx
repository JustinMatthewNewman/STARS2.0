import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import urls from "../public/domains";
import Image from 'next/image'
import background from '../public/ESPN3.png';

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
          pathname: '/error', 
          query: {
            type: router.query.type as string,
            org: router.query.org as string,
            org_id: parseInt(router.query.org_id as string, 10),
            sport: router.query.sport as string,
            gender: router.query.gender as string,
          }
        })
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
                        className="border p-4 mt-4 ml-8 mr-8 rounded-md bg-slate-200"
                        key={index}>
                        <h2>{header}</h2>
                        <p className="font-bold">{player.name}</p>

                            <ul className="text-left text-sm ml-8">
                                <li>NUMBER: {player.number}</li>
                                <li>POSITION: {player.positionLong}</li>
                                <li>HEIGHT: {player.height}</li>
                                <li>WEIGHT: {player.weight}</li>
                                <li>
                                    FROM: {player.hometown} {player.hs} HS{" "}
                                </li>
                                <li>YEAR: {player.year}</li>
                            </ul>
                        <div className="flex flex-row">
                            <div className="flex">
                              <Image 
                                src={background}
                                alt="ESPN"
                                width="100%" 
                                height="100%"
                                objectFit="contain"
                              />
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default GetRoster;
