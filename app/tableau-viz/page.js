"use client"
import { useCallback, useEffect, useState } from 'react';
import TableauReport from './tableau';
import styles from './page.module.css';

const workbookUrl = [
  "https://prod-apsoutheast-a.online.tableau.com/t/naufalpramudya11fb2efcd4a7/views/test-workbook/AccountEngagement",
  "https://prod-apsoutheast-a.online.tableau.com/t/naufalpramudya11fb2efcd4a7/views/ProductUtilization/ProductUtilization"
]

export default function AboutPage() {
  const [token, setToken] = useState(null);

  const getToken = useCallback(async () => {
    const response = await fetch("/api/tableau")
    const resData = await response.json();
    setToken(resData?.token);
  }, []);

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, [])

  return (
    <main className={styles.container}>
        <TableauReport url={workbookUrl[0]} token={token} />
        <TableauReport url={workbookUrl[1]} token={token} />
    </main>
  )
}