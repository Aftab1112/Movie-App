import React from "react";
import { useParams } from "react-router-dom";

const SingleMoivie = () => {
  const { id } = useParams();
  return (
    <>
      <div>Single Movie {id} </div>
    </>
  );
};

export default SingleMoivie;
