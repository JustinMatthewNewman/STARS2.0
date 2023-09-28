import { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let logo = "";

    console.log("EXTRACTING SVG");

    if (req.query.url) {
        let url = req.query.url;
        if (Array.isArray(url)) {
            url = url[0];
        }
        try {
            const response = await fetch(url);

            if (response.status === 200) {
                const src = await response.text();

                // Parse HTML using jsdom
                const { window } = new JSDOM(src);
                const { document: doc } = window;

                // Access the width and height attributes
                const svgElement = doc.querySelector("svg");
                const width = svgElement ? svgElement.getAttribute("width"): "0";
                const height = svgElement ? svgElement.getAttribute("height"): "0";

                console.log(`Width: ${width}, Height: ${height}`);

                if (src) {
                    console.log("SVG code Acquired.");
                    res.status(200).json({ src, width, height });
                    console.log("LOGO ACQUIRED SUCCESSFULLY");
                } else {
                    console.log("Failed to get Source code.");
                    res.status(500).json({ error: "Failed to get SVG source code" });
                }
            } else {
                console.log("Failed to fetch URL:", response.statusText);
                res.status(response.status).json({ error: response.statusText });
            }
        } catch (error) {
            console.error("Error fetching URL:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(400).json({ error: "Missing URL parameter" });
    }
}
