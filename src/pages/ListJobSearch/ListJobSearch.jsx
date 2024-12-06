import React from "react";
import "./ListJobSearch.scss";
import ListJob from "./components/ListJob";
import { useLocation } from "react-router-dom";

const ListJobSearch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("name"); // Thay 'param' bằng tên tham số bạn cần
  console.log(searchQuery);
  return (
    <div>
      <ListJob jobName={searchQuery} />
    </div>
  );
};

export default ListJobSearch;
