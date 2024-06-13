"use client"
import { useEffect, useState } from 'react';
import TableauReport from './tableau';

export default function AboutPage() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      const response = await fetch("/api/tableau")
      const resData = await response.json();
      if (!token) {
        console.log(resData.token);
        setToken(resData?.token);
      }
    }
    getToken();
  }, [])

  return (
    <main>
        <TableauReport token={token} />
    </main>
  )
}