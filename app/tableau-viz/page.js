"use client"
import { useCallback, useEffect, useState } from 'react';
import TableauReport from './tableau';
import styles from './page.module.css';

const workbookUrl = [
  "https://prod-apsoutheast-a.online.tableau.com/t/naufalpramudya11fb2efcd4a7/views/IndofoodCharts/Home",
  "https://prod-apsoutheast-a.online.tableau.com/t/naufalpramudya11fb2efcd4a7/views/IndofoodCharts/ExecutiveSummary",
  "https://prod-apsoutheast-a.online.tableau.com/t/naufalpramudya11fb2efcd4a7/views/OrangTuaCharts/Home",
  "https://prod-apsoutheast-a.online.tableau.com/t/naufalpramudya11fb2efcd4a7/views/OrangTuaCharts/ExecutiveSummary"
]

export default function AboutPage() {
  const [token, setToken] = useState(null);
  const [project, setProject] = useState('indofood');

  const getToken = useCallback(async () => {
    const response = await fetch("/api/tableau")
    const resData = await response.json();
    setToken(resData?.token);
    console.log(resData.token);
  }, []);

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, [])

  return (
    <main className={styles.container}>
        <button onClick={() => setProject(prev => prev === 'indofood' ? 'orangtua' : 'indofood')} >Switch to {project === 'indofood' ? 'orangtua' : 'indofood'}</button>
        {project === 'indofood' && (
          <>
            <TableauReport url={workbookUrl[0]} token={token} />
            <TableauReport url={workbookUrl[1]} token={token} />
          </>
        )}
        {project === 'orangtua' && (
          <>
            <TableauReport url={workbookUrl[2]} token={token} />
            <TableauReport url={workbookUrl[3]} token={token} />
          </>
        )}
    </main>
  )
}