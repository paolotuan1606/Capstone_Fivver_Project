import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ListJobFilter from "./components/ListJobFilter";
import Explore from "./components/Explore";
import Guide from "./components/Guide";
import InfoListJob from "./components/InfoListJob";
import Jobs from "./components/Jobs";

const ListJobTemplate = () => {
  const { detailTypeJobID } = useParams();
  const location = useLocation();

  // Lấy `name` từ query string
  const query = new URLSearchParams(location.search);
  const name = query.get("name");
  return (
    <>
      <InfoListJob typeJobDetail={name} />
      <ListJobFilter />
      <Jobs jobID={detailTypeJobID} />
      <Explore typeJobDetail={name} />
      <Guide typeJobDetail={name} />
    </>
  );
};

export default ListJobTemplate;
