"use client"
import { TableauViz } from "@tableau/embedding-api";
import { useEffect, useRef, useState } from "react";

export default function Tableau({ url, token }) {
    const [ viz, setViz ] = useState(null);
    const vizRef = useRef();
    useEffect(() => {
        if (token) {
            const tableauViz = new TableauViz();
            tableauViz.ref = vizRef;
            tableauViz.src = url;
            tableauViz.token = token;
            setViz(tableauViz);
        }
    }, [token]);

    return (
        <section style={{ width: "70%" }}>
            {/* <script type='module' src='https://prod-apsoutheast-a.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'></script> */}
            <div 
                ref={ref => {
                    if (viz && ref && ref.childElementCount < 1) {
                        ref.appendChild(viz)
                    }
                }}
                id="tableau-viz"
            ></div>
        </section>
    )
}