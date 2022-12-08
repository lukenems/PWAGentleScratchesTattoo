import { useEffect, useState } from "preact/hooks";
import useCustomRequests from "../hooks/useCustomRequests";

const RecentCustomRequests = () => {
  const [recentReqs, setRecentReqs] = useState([]);

  useEffect(async () => {
    const reqList = await useCustomRequests();
    setRecentReqs(reqList);
  },[])

  return (
    <>
      {recentReqs.map((client) => {
        return (
        <>
          <h3>{client.name}</h3>
          <h3>{client.desc}</h3>
          <h3>{client.email}</h3>
          <h3>{client.insta}</h3> 
        </>
        )
      })
      }
    </>
  )
}

export default RecentCustomRequests;