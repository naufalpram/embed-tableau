"use client"
import { TableauViz } from "@tableau/embedding-api";
import { useEffect, useRef, useState } from "react";

export default function Tableau({ token }) {
    const [ viz, setViz ] = useState(null);
    const vizRef = useRef();
    useEffect(() => {
        if (token) {
            const tableauViz = new TableauViz();
            tableauViz.ref = vizRef;
            tableauViz.src = "https://prod-apsoutheast-a.online.tableau.com/t/naufalpramudya11fb2efcd4a7/views/test-workbook/AccountEngagement";
            tableauViz.token = token;
            setViz(tableauViz);
        }
    }, [token]);

    return (
        <section style={{ width: "70%" }}>
            <pre>{token}</pre>
            {/* <script type='module' src='https://prod-apsoutheast-a.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'></script> */}
            <div 
                ref={ref => {
                    if (viz && ref) {
                        ref.appendChild(viz)
                    }
                }}
                id="tableau-viz"
            ></div>
        </section>
    )
}