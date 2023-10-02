import React, { useState, useEffect, useRef, useMemo } from "react";
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

interface LogoInfo {
    src: string;
    width: string;
    height: string;
}

function GetRoster() {
    const [text, setText] = useState<string>("");
    const [players, setPlayers] = useState<Player[]>([]);
    const [header, setHeader] = useState<string>("");
    const [orgUrl, setTeamUrl] = useState<string | undefined>(undefined);
    const [teamLogo, setTeamLogo] = useState<string | undefined>(undefined);
    const [svgLogo, setSvgLogo] = useState<LogoInfo | undefined>(undefined);

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
            if (teamLogo && !svgLogo) {
                console.log("TEAM LOGO URL:", teamLogo);
                getLogo(teamLogo)
                    .then((result) => {
                        console.log(result);
                        setSvgLogo(result);
                    })
                    .catch((error) => {
                        console.error("Error fetching logo:", error);
                    });
            }
        }
    }, [router.query, getPlayers, getLogo]);

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

    function calculateScaleAndPosition(
        containerWidth: number,
        containerHeight: number,
        containerX: number,
        containerY: number,
        svgWidth: number,
        svgHeight: number
    ) {
        // Calculate the scaling factors for width and height
        const widthScale = containerWidth / svgWidth;
        const heightScale = containerHeight / svgHeight;

        // Use the minimum scaling factor to maintain aspect ratio
        const scale = Math.min(widthScale, heightScale);

        // Calculate the adjusted dimensions
        const adjustedWidth = svgWidth * scale - 20;
        const adjustedHeight = svgHeight * scale - 20;

        // Calculate the x and y coordinates to center the logo
        const x = containerX + (containerWidth - adjustedWidth) / 2;
        const y = containerY + (containerHeight - adjustedHeight) / 2;

        return { scale, adjustedWidth, adjustedHeight, x, y };
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
            setTeamLogo(data.logo);
            return data.players || [];
        } catch (error) {
            console.error("Error fetching and parsing data:", error);
            return [];
        }
    }

    async function getLogo(url: string): Promise<LogoInfo | undefined> {
        try {
            const response = await fetch("/api/logo?url=" + url, {
                method: "POST",
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setSvgLogo(data);
            return data || undefined;
        } catch (error) {
            console.error("Error fetching and parsing data:", error);
            return undefined;
        }
    }

    const width = svgLogo ? parseInt(svgLogo.width) : 0;
    const height = svgLogo ? parseInt(svgLogo.height) : 0;
    const { scale, adjustedWidth, adjustedHeight, x, y } = calculateScaleAndPosition(
        252.762, // containerWidth
        140, // containerHeight
        20.515, // containerX
        270, // containerY
        width,
        height
    );

    function generateSVGContent(player: Player, x: number, y: number, adjustedWidth:number, adjustedHeight:number, logosrc:string) {
        const svgXML = `
        <defs
            xmlns="http://www.w3.org/2000/svg">
            <linearGradient gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%" id="color-0-2" gradientTransform="matrix(1.147965, 0, 0, 1, -3.035496, 0)"
                xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#color-0"/>
                <linearGradient id="color-0"
                    xmlns:bx="https://boxy-svg.com" bx:pinned="true">
                    <stop style="stop-color: #000000;" offset="0"/>
                    <stop style="stop-color: #434343;" offset="1"/>
                </linearGradient>
                <linearGradient id="color-1-0" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%" gradientTransform="matrix(1.143602, -0.087099, 0.044419, 0.44257, 7.86117, 159.433456)"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#color-1"/>
                    <linearGradient id="color-1"
                        xmlns:bx="https://boxy-svg.com" bx:pinned="true">
                        <stop style="stop-color: rgb(132, 132, 132);" offset="0"/>
                        <stop style="stop-color: #ffffff;" offset="1"/>
                    </linearGradient>
                    <linearGradient id="gradient-1-0" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gradient-1"/>
                        <linearGradient id="gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop style="stop-color: rgb(240, 240, 240);" offset="0"/>
                            <stop style="stop-color: rgb(180, 180, 180);" offset="1"/>
                        </linearGradient>
                        <radialGradient id="gradient-0-0" gradientUnits="userSpaceOnUse" cx="472.376" cy="337.345" r="417.766" gradientTransform="matrix(1.147965, 0, 0, 0.764064, 12.651199, 81.586609)"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gradient-0"/>
                            <linearGradient id="gradient-0">
                                <stop style="stop-color: rgb(73, 73, 73);" offset="0"/>
                                <stop offset="0.587" style="stop-color: rgb(132, 132, 132);"/>
                                <stop style="stop-color: rgb(174, 174, 174);" offset="1"/>
                            </linearGradient>
                            <linearGradient id="gradient-0-2" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%" gradientTransform="matrix(0.833189, 0.767927, -14.455228, 9.39646, 5398.691835, -3504.207764)"
                                xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gradient-0"/>
                                <radialGradient id="gradient-3-0" gradientUnits="userSpaceOnUse" cx="151.171" cy="340.973" r="130.656" gradientTransform="matrix(2.560279, -0.040098, 0.014652, 0.999885, -245.13901, 6.100863)"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gradient-3"/>
                                    <linearGradient id="gradient-3" >
                                        <stop style="stop-color: rgb(30, 30, 30);" offset="0"/>
                                        <stop style="stop-color: rgb(93, 93, 93);" offset="1"/>
                                    </linearGradient>
                                    <linearGradient id="gradient-0-1" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%" gradientTransform="matrix(-0.840451, -0.49503, 0.945819, -1.716252, 11.08176, 1006.351746)"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gradient-0"/>
                                    </defs>
                                    <style>
                                        <![CDATA[
                                    text {
                                        font-family:  Helvetica;
                                    }
                                    ]]>
                                    </style>
                                    <!-- Top text background container -->
                                    <rect
                                    x="50"
                                    y="200"
                                    width="961"
                                    height="194.772"
                                    rx="44.728"
                                    ry="44.728"
                                    fill="url(#color-0)"
                                    fill-opacity="0.84"
                                    stroke="url(#color-1)"
                                    stroke-width="6"
                                    stroke-linejoin="round"
                                    stroke-dashoffset="29"
                                    stroke-linecap="round"
                                    paint-order="fill"
                                />
                                    <!-- Color Strip background box -->
                                    <rect
                                    x="75.342"
                                    y="271.612"
                                    width="959.161"
                                    height="135.456"
                                    rx="29.022"
                                    ry="29.022"
                                    fill="url(#gradient-1)"
                                    stroke="url(#gradient-0)"
                                    stroke-width="5"
                                    stroke-linejoin="round"
                                />
                                    <!-- Color Stripe -->
                                    <path
                                    fill="#f5f5f5"
                                    stroke="url(#gradient-0)"
                                    stroke-width="3"
                                    stroke-linejoin="round"
                                    d="M 213.275 324.005 L 649.25 324.005 L 693.623 358.085 L 999.029 358.085 L 999.029 374.139 L 693.623 374.139 L 649.25 340.059 L 213.275 340.059 L 213.275 324.005 Z"
                                />
                                    <!-- Logo Box -->
                                    <rect
                                    x="20.515"
                                    y="270"
                                    width="252.762"
                                    height="140"
                                    rx="38.761"
                                    ry="38.761"
                                    fill="url(#gradient-3)"
                                    stroke="url(#gradient-0)"
                                    stroke-width="7"
                    
                                />
                                    <image
                                    x="${x}"
                                    y="${y}"
                                    width="${adjustedWidth}"
                                    height="${adjustedHeight}"
                                    xlink:href="data:image/svg+xml;utf8,${encodeURIComponent(
                                        logosrc
                                    )}"
                                />
                                    <!-- Text elements -->
                                    <text text-anchor="left" font-size="34" fill="white">
                                        <tspan x="100" y="250">${getPlayerInfo(player)}</tspan>
                                    </text>
                                    <text text-anchor="left" font-size="27" fill="#2b2b2b">
                                        <tspan x="290" y="312">${player.name} | #${
            player.number
        }</tspan>
                                    </text>
                                    <text text-anchor="left" font-size="34" fill="#2b2b2b">
                                        <tspan x="290" y="380">${player.positionLong}</tspan>
                                    </text>
        `;

        return svgXML;
    }

    function handleDownload(player: Player, index: number, header: string) {
        if (playerSVGContents[index]) {
            // Get the SVG content for the specified player
            const svgContent = playerSVGContents[index];

            const stringSVG = `<svg viewBox="0 55.099 1070.721 444.901" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${svgContent}</svg>`;

            // Create a Blob from the SVG content
            const blob = new Blob([stringSVG], { type: "image/svg+xml" });

            // Create a URL for the Blob
            const url = URL.createObjectURL(blob);

            // Create an anchor element to trigger the download
            const a = document.createElement("a");
            a.href = url;
            a.download = header.replace(/\s/g, "") + "_" + player.name.replace(/\s/g, "") + ".svg"; // Set the desired filename here
            a.style.display = "none";

            // Append the anchor element to the document and trigger the click event
            document.body.appendChild(a);
            a.click();

            // Clean up by removing the anchor and revoking the Blob URL
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }

    function getPlayerInfo(player: Player) {
        // Construct and return the player information string
        if (
            player.weight.length > 0 &&
            player.height.length > 0 &&
            player.hometown.length > 0 &&
            player.year.length > 0
        ) {
            return `${player.height} | ${player.weight} | ${player.hometown} | ${player.year}`;
        } else if (
            player.height.length > 0 &&
            player.hometown.length > 0 &&
            player.year.length > 0
        ) {
            return `${player.height} | ${player.hometown} | ${player.year}`;
        } else if (player.hometown.length > 0 && player.year.length > 0) {
            return `${player.year} from ${player.hometown}`;
        } else if (player.year.length > 0) {
            return `${player.year}`;
        } else {
            return "";
        }
    }

    const playerSVGContents = useMemo(() => {
        if (svgLogo) {
            return players.map((player) =>
                generateSVGContent(player, x, y, adjustedWidth, adjustedHeight, svgLogo.src)
            );
        }
        // Return an empty array or handle the case where svgLogo is not set yet
        return [];
    }, [players, x, y, adjustedWidth, adjustedHeight, svgLogo]);

    return (
        <div className="flex flex-col justify-center text-center mt-10">
            <p className="text-center p-12 mt-10">{header}</p>
            {players.length === 0 && !svgLogo ? (
                <>
                    <p className="text-center p-12 mt-10">Acquiring information from Roster.</p>
                    <p className="text-center p-12 mt-10">Please wait...</p>
                </>
            ) : (
                players.map((player, index) => (
                    <div
                        id={player.name.replace(/\s/g, "") + "_" + index}
                        style={{ marginTop: -70 }}
                        className="relative mt-7 ml-8 mr-8 p-4 "
                        key={index}>
                        {/* <Image
                          src={player.image}
                          width={77}
                          height={77}
                          alt="PlayerImage"
                        /> */}
                        <a onClick={() => handleDownload(player, index, header)}>
                            <svg
                                viewBox="0 55.099 1070.721 444.901"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                {/* Render the SVG content using dangerouslySetInnerHTML */}
                                <g dangerouslySetInnerHTML={{ __html: playerSVGContents[index] }} />
                            </svg>
                        </a>
                    </div>
                ))
            )}
        </div>
    );
}

export default GetRoster;
