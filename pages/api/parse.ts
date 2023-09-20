import { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let errorFlag = 0;

    if (req.query.url) {
        let url = req.query.url;
        if (Array.isArray(url)) {
            url = url[0];
        }
        const response = await fetch(url);
        const html = await response.text();

        if (html) {
            console.log("HTML source code Acquired.");
        } else {
            console.log("Failed to get Source code.");
        }

        // Parse HTML using jsdom
        const { window } = new JSDOM(html);
        const { document } = window;

        const playerElements = document.querySelectorAll(".sidearm-roster-player");
        const players: Player[] = [];

        if (playerElements.length > 0) {
            console.log("Acquired Player elements.");
        } else {
            console.log("Failed to acquire Player elements. Roster structure differs.");
            errorFlag = 1;
        }
        let counter = 0;

        if (errorFlag === 0) {
            playerElements.forEach((el) => {
                // Initialize attribute variables with empty strings
                let name = "";
                let number = "";
                let positionLong = "";
                let positionShort = "";
                let height = "";
                let weight = "";
                let bio = "";
                let hometown = "";
                let hs = "";
                let year = "";
                let yearShort = "";
                let image = "";

                try {
                    // Get name
                    const nameElement = el.querySelector(".sidearm-roster-player-name h3 a");
                    name = nameElement ? nameElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player name" });
                }
                try {
                    // Get number
                    const numberElement = el.querySelector(".sidearm-roster-player-jersey-number");
                    number = numberElement ? numberElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player number" });
                }
                try {
                    // Get position long
                    const positionLongElement = el.querySelector(".sidearm-roster-player-position-long-short.hide-on-small-down");
                    positionLong = positionLongElement ? positionLongElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player position long" });
                }

                try {
                    // Get position short
                    const positionShortElement = el.querySelector(".sidearm-roster-player-position-long-short.hide-on-medium");
                    positionShort = positionShortElement ? positionShortElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player position abbreviation" });
                }
                try {
                    // Get height
                    const heightElement = el.querySelector(".sidearm-roster-player-height");
                    height = heightElement ? heightElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player height" });
                }
                try {
                    // Get weight
                    const weightElement = el.querySelector(".sidearm-roster-player-weight");
                    weight = weightElement ? weightElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player weight" });
                }
                try {
                    // Get bio link
                    const bioElement = el.querySelector(".sidearm-roster-player-bio a");
                    bio = bioElement ? bioElement.getAttribute("href") || "" : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player bio" });
                }
                try {
                    // Get hometown
                    const hometownElement = el.querySelector(".sidearm-roster-player-hometown");
                    hometown = hometownElement ? hometownElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player hometown" });
                }
                try {
                    // Get high school
                    const hsElement = el.querySelector(".sidearm-roster-player-highschool");
                    hs = hsElement ? hsElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player school" });
                }
                try {
                    // Get year
                    const yearElement = el.querySelector(".sidearm-roster-player-academic-year:not(.hide-on-large)");
                    year = yearElement ? yearElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player year" });
                }
                try {
                    // Get year short
                    const yearShortElement = el.querySelector(".sidearm-roster-player-academic-year.hide-on-large");
                    yearShort = yearShortElement ? yearShortElement.textContent!.trim() : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player year abbreviation" });
                }
                try {
                    // Get image
                    const imageElement = el.querySelector(".sidearm-roster-player-image img");
                    image = imageElement ? imageElement.getAttribute("data-src") || "" : "";
                } catch (error) {
                    // res.status(400).json({ error: "Failed to parse player image" });
                }

                counter++;
                console.log("Acquired player: ", counter);
                players.push({
                    name,
                    number,
                    positionLong,
                    positionShort,
                    height,
                    weight,
                    bio,
                    hometown,
                    hs,
                    year,
                    yearShort,
                    image,
                });
            });

            res.status(200).json({ players });
            console.log("TEAM ACQUIRED SUCCESSFULLY");
        }
        if (errorFlag === 1) {
            res.status(777).json({
                error: "Failed to acquire Player elements. Roster structure differs.",
            });
        }
    } else {
        res.status(400).json({ error: "Missing URL parameter" });
    }
}
