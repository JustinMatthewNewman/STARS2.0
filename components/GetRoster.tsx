import React from "react";

import { useState } from "react";

import { useRouter } from "next/router";
import urls from "../public/domains";

interface Domain {
    id: number;
    name: string;
}

interface InputData {
    type: string;
    org: string;
    org_id: number;
    sport: string;
    gender: string;
}



function GetRoster() {
    /**
     * Creates the ROSTER url from the college website URL
     */
    function buildRosterURL(teamUrl: String, sport: String, gender: String) {
        if (sport === "Football") {
            return "https://" + teamUrl + "/sports/football/roster";
        }
        return "";
    }

    /**
     * Gets the college website URL from local storage
     */
    function getSchoolUrl(org_id: number) {
        return urls[org_id - 1]?.name;
    }

    function getPlayerNames(htmlSource: String) {}

    const router = useRouter();
    const [players, setPlayers] = useState([]);

    let inputData: InputData | null = null;

      if (router.query.type) {
        inputData = {
          type: router.query.type as string,
          org: router.query.org as string,
          org_id: parseInt(router.query.org_id as string, 10),
          sport: router.query.sport as string,
          gender: router.query.gender as string,
        };
      }


    if (inputData) {
        const teamUrl = getSchoolUrl(inputData.org_id);
        console.log(teamUrl)
    }


    // if (teamUrl) {
    //     const rosterUrl = buildRosterURL(teamUrl, sport, gender);
    //     console.log(rosterUrl)

    // }

    const jmu = "https://jmusports.com/sports/football/roster";
    if (jmu) {
        console.log(jmu);
    }

    return (
        <div>
            <p>Under development.</p>
            {/* {players.length === 0 ? (
                <p>Under development...</p>
            ) : (
                players.map((txt, index) => <p key={index}>{txt}</p>)
            )} */}
        </div>
    );
}

export default GetRoster;
