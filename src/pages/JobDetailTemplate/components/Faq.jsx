import React from "react";
import "./Faq.scss";
import { Collapse, Skeleton } from "antd";
import { StarFilled } from "@ant-design/icons";
const Faq = () => {
  const text1 = (
    <p
      style={{
        paddingInlineStart: 24,
        color: "#62646a",
      }}
    >
      Once you place the order, you will see a set of basic questions. Being as
      detailed as possible when answering them would make the whole process
      easier for both of us.
    </p>
  );
  const text2 = (
    <p
      style={{
        paddingInlineStart: 24,
        color: "#62646a",
      }}
    >
      A revision is a modification of the submitted design and refers to the
      font, color, the arrangement of elements etc. The revision does not mean a
      brand new design.
    </p>
  );
  const text3 = (
    <p
      style={{
        paddingInlineStart: 24,
        color: "#62646a",
      }}
    >
      A concept is one unique logo design for your brand. A revision is a
      modification to the submitted concepts.
    </p>
  );
  const text4 = (
    <p
      style={{
        paddingInlineStart: 24,
        color: "#62646a",
      }}
    >
      Source files are the original files of your logo in which you can
      edit/resize the logo to any size without loosing quality using the Adobe
      software. These files are provided with PREMIUM PACKAGE by default or you
      can add them in other packages through my gig extras.
    </p>
  );
  const text5 = (
    <p
      style={{
        paddingInlineStart: 24,
        color: "#62646a",
      }}
    >
      3D mockup is a rendered format used for Presentation purposes and its is
      also provided as a complementary in Standard or Premium Package.
    </p>
  );
  const items = [
    {
      key: "1",
      label: (
        <>
          <p className="text-xl font-semibold">
            What information do you need to get started?
          </p>
        </>
      ),
      children: text1,
    },
    {
      key: "2",
      label: (
        <>
          <p className="text-xl font-semibold">What is a revision?</p>
        </>
      ),
      children: text2,
    },
    {
      key: "3",
      label: (
        <>
          <p className="text-xl font-semibold">
            What is the difference between a concept and a revision?
          </p>
        </>
      ),
      children: text3,
    },
    {
      key: "4",
      label: (
        <>
          <p className="text-xl font-semibold">
            What is Source Files and How they are beneficial?
          </p>
        </>
      ),
      children: text4,
    },
    {
      key: "5",
      label: (
        <>
          <p className="text-xl font-semibold">What is a 3D mockup?</p>
        </>
      ),
      children: text5,
    },
  ];
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-10">FAQ</h3>
      <Collapse size="large" items={items} bordered={false} />
      <div className="grid grid-cols-2 gap-10 my-5">
        <p className="font-semibold">335 Reviews</p>
        <div className="text-right font-semibold">
          <StarFilled className="text-yellow-500" />
          <StarFilled className="text-yellow-500" />
          <StarFilled className="text-yellow-500" />
          <StarFilled className="text-yellow-500" />
          <StarFilled className="text-yellow-500" />
          4.9
        </div>
        <div className="space-y-6 font-semibold">
          <div className="grid grid-cols-4 gap-5">
            <p className="col-span-1">5 Stars</p>
            <div className="progress col-span-2">
              <div className="progress-bar"></div>
            </div>
            <p>(5,184)</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <p className="col-span-1">5 Stars</p>
            <div className="progress col-span-2">
              <div className="progress-bar progress-bar2"></div>
            </div>
            <p>(5,184)</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <p className="col-span-1">5 Stars</p>
            <div className="progress col-span-2">
              <div className="progress-bar progress-bar3"></div>
            </div>
            <p>(5,184)</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <p className="col-span-1">5 Stars</p>
            <div className="progress col-span-2">
              <div className="progress-bar progress-bar4"></div>
            </div>
            <p>(5,184)</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <p className="col-span-1">5 Stars</p>
            <div className="progress col-span-2">
              <div className="progress-bar progress-bar5"></div>
            </div>
            <p>(5,184)</p>
          </div>
        </div>
        <div className="space-y-6 font-semibold">
          <p className="flex justify-between">
            Rating Breakdown{" "}
            <span>
              5
              <StarFilled className="text-yellow-500" />
            </span>
          </p>
          <p className="flex justify-between">
            Seller communication level
            <span>
              5
              <StarFilled className="text-yellow-500" />
            </span>
          </p>
          <p className="flex justify-between">
            Recommend to a friend
            <span>
              5
              <StarFilled className="text-yellow-500" />
            </span>
          </p>
          <p className="flex justify-between">
            Service as described
            <span>
              5
              <StarFilled className="text-yellow-500" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
