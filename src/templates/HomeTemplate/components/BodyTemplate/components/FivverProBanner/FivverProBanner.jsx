import React from "react";
import Icons from "../../../../../../components/Icons";
import "./fivverProBanner.scss";

const FivverProBanner = () => {
  return (
    <div className="rounded-2xl p-10" style={{ backgroundColor: "#E8FAF4" }}>
      <div className="grid grid-cols-2 p-10 gap-4">
        <div>
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="139"
              height="34"
              fill="none"
            >
              <g fill="#222325">
                <path d="M81.646 13.112h-3.151c-2.029 0-3.115 1.547-3.115 4.124v9.318h-5.977V13.112h-2.535c-2.029 0-3.115 1.547-3.115 4.124v9.318h-5.977V8.14h5.977v2.8c.977-2.174 2.317-2.8 4.31-2.8h7.317v2.8c.977-2.174 2.318-2.8 4.31-2.8h1.956zm-25.174 5.672H44.01c.326 2.063 1.594 3.241 3.731 3.241 1.593 0 2.717-.663 3.08-1.841l5.288 1.51c-1.304 3.205-4.528 5.157-8.368 5.157-6.484 0-9.454-5.12-9.454-9.503 0-4.309 2.608-9.465 9.091-9.465 6.883 0 9.164 5.23 9.164 9.097.002.847-.035 1.399-.07 1.804m-5.796-3.572c-.145-1.584-1.268-3.057-3.297-3.057-1.883 0-3.006.847-3.369 3.057zM27.855 26.556h5.253L39.664 8.14H33.65l-3.188 10.718-3.26-10.718h-5.976zm-24.486 0h5.94V13.112h5.651v13.444h5.905V8.14H9.31V6.998c0-1.252.87-2.026 2.246-2.026h3.405V0h-4.384c-4.31 0-7.208 2.689-7.208 6.63v1.51H0v4.973h3.37zM86.987 34V8.153h3.483v2.737c1.077-1.824 3.267-3.03 5.78-3.03 5.458 0 8.582 4.015 8.582 9.492 0 5.475-3.268 9.492-8.76 9.492-2.406 0-4.56-1.132-5.601-2.885V34h-3.484zm14.326-16.647c0-3.833-2.226-6.389-5.566-6.389-3.375 0-5.565 2.556-5.565 6.389s2.19 6.388 5.565 6.388c3.34 0 5.566-2.555 5.566-6.388M116.757 11.219h-2.621c-3.302 0-4.381 2.994-4.381 7.009v8.324h-3.481v-18.4h3.483v3.542c.825-2.446 2.261-3.541 4.811-3.541h2.19zM115.91 17.353c0-5.513 3.913-9.492 9.335-9.492 5.421 0 9.298 3.98 9.298 9.492s-3.877 9.492-9.298 9.492c-5.422-.001-9.335-3.98-9.335-9.492m15.078 0c0-3.76-2.333-6.389-5.745-6.389-3.446 0-5.78 2.629-5.78 6.389s2.333 6.389 5.78 6.389c3.412 0 5.745-2.63 5.745-6.39M139 24.52v.043c0 1.251-.997 2.266-2.229 2.266-1.23 0-2.229-1.014-2.229-2.266v-.043c0-1.251.997-2.266 2.229-2.266 1.23 0 2.229 1.015 2.229 2.266"></path>
              </g>
            </svg>
          </h3>
          <h2 className="my-7 text-5xl ">
            The <span>premium</span> freelance solution for businesses
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-1">
              <Icons.starCheck />
              <h2 className="text-xl font-medium">Dedicated hiring experts</h2>
              <p>
                Count on an account manager to find you the right talent and see
                to your project’s every need.
              </p>
            </div>
            <div className="space-y-1">
              <Icons.starCheck />
              <h2 className="text-xl font-medium">Satisfaction guarantee</h2>
              <p>
                Order confidently, with guaranteed refunds for
                less-than-satisfactory deliveries.
              </p>
            </div>
            <div className="space-y-1">
              <Icons.starCheck />
              <h2 className="text-xl font-medium">Advanced management tools</h2>
              <p>
                Seamlessly integrate freelancers into your team and projects.
              </p>
            </div>
            <div className="space-y-1">
              <Icons.starCheck />
              <h2 className="text-xl font-medium">Flexible payment models</h2>
              <p>
                Pay per project or opt for hourly rates to facilitate
                longer-term collaboration.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./public/fivver-pro-banner/fiverr-pro.png"
          className="w-auto my-auto"
          alt=""
        />
        <button className="rounded-lg w-28 bg-black text-white h-12 mt-7 font-medium text-lg">
          Try now
        </button>
      </div>
    </div>
  );
};

export default FivverProBanner;
