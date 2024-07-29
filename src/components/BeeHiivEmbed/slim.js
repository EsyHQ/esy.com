// src/components/BeehiivEmbed.js

import React from "react";

const BeehiivEmbed = () => {
  return (
    <iframe
      src="https://embeds.beehiiv.com/2a91f0a0-b8ab-48eb-ba25-cc6f47966f82?slim=true"
      data-test-id="beehiiv-embed"
      height="52"
      style={{ margin: 0, borderRadius: "0px !important", backgroundColor: "transparent", width: "100%" }}
    ></iframe>
  );
};

export default BeehiivEmbed;