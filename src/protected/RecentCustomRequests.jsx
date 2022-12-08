import { useEffect, useState } from "preact/hooks";
import ViewCustomImages from "../components/ViewCustomImages";
import useCustomRequests from "../hooks/useCustomRequests";

const RecentCustomRequests = () => {
  const [recentReqs, setRecentReqs] = useState([]);
  const [loadModal, setLoadModal] = useState(false);

  useEffect(async () => {
    const reqList = await useCustomRequests();
    setRecentReqs(reqList);
  },[])

  const displayModal = () => {
    setLoadModal(!loadModal);
  }

  return (
    <>
      {recentReqs.map((client) => {
        return (
        <>
          <h3>{client.name}</h3>
          <h3>{client.desc}</h3>
          <h3>{client.email}</h3>
          <h3>{client.insta}</h3>
          <button onClick={displayModal}>See Images</button>
          {loadModal && <ViewCustomImages urlList={client.urls} cancelModal={displayModal}/>}
        </>
        )
      })
      }
    </>
  )
}

export default RecentCustomRequests;