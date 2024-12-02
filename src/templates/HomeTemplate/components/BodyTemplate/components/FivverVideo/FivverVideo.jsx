import React from "react";

const FivverVideo = () => {
  return (
    <div className="space-y-5 my-14" style={{ color: "#404145" }}>
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl">
        What success on Fiverr looks like
      </h1>
      <p className="lg:text-lg sm:text-base">
        Vontélle Eyewear turns to Fiverr freelancers to bring their vision to
        life.
      </p>
      <video
        src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
        typeof="video/mp4"
        controls
        autoPlay
        className="h-96 object-cover w-full rounded-3xl"
      ></video>
    </div>
  );
};

export default FivverVideo;
