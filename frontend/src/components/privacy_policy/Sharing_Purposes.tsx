import React from "react";

const Sharing_Purposes = () => {
  const sharingPurposes = [
    {
      title: "With Service Providers",
      desc: "We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
    },
    {
      title: "For business transfers",
      desc: "We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.",
    },
    {
      title: "With Affiliates",
      desc: "We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.",
    },
    {
      title: "With business partners",
      desc: "We may share Your information with Our business partners to offer You certain products, services or promotions.",
    },
    {
      title: "With other users",
      desc: "When You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.",
    },
    {
      title: "With Your consent",
      desc: "We may disclose Your personal information for any other purpose with Your consent.",
    },
  ];

  return (
    <div>
      {sharingPurposes.map((item, index) => (
        <li key={index}>
          <strong>{item.title}:</strong> {item.desc}
        </li>
      ))}
    </div>
  );
};

export default Sharing_Purposes;
