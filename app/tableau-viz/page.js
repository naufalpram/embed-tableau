"use client"
import { useCallback, useEffect, useState } from 'react';
import TableauReport from './tableau';

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
    <main>
        <TableauReport token={token} />
    </main>
  )
}