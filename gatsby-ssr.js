// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="amplitude-analytics"
      src="https://cdn.amplitude.com/libs/analytics-browser-2.7.4-min.js.gz"
    />,
    <script
      key="amplitude-session-replay"
      src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.4.1-min.js.gz"
    />,
    <script
      key="amplitude-autocapture"
      src="https://cdn.amplitude.com/libs/plugin-autocapture-browser-0.9.0-min.js.gz"
    />,
    <script
      key="amplitude-init"
      dangerouslySetInnerHTML={{
        __html: `
          window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1})).promise.then(function() {
            window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());
            window.amplitude.init('ac3e0291a7e9d699fe39e9dd2d681fc2');
          });
        `,
      }}
    />,
  ]);
};