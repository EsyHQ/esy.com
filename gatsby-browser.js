// gatsby-browser.js
import './src/styles/_globalstyles.scss';

export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    const amplitudeScript1 = document.createElement("script");
    amplitudeScript1.src =
      "https://cdn.amplitude.com/libs/analytics-browser-2.7.4-min.js.gz";
    document.body.appendChild(amplitudeScript1);

    const amplitudeScript2 = document.createElement("script");
    amplitudeScript2.src =
      "https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.4.1-min.js.gz";
    document.body.appendChild(amplitudeScript2);

    const amplitudeScript3 = document.createElement("script");
    amplitudeScript3.src =
      "https://cdn.amplitude.com/libs/plugin-autocapture-browser-0.9.0-min.js.gz";
    document.body.appendChild(amplitudeScript3);

    amplitudeScript3.onload = () => {
      window.amplitude
        .add(window.sessionReplay.plugin({ sampleRate: 1 }))
        .promise.then(function () {
          window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());
          window.amplitude.init("ac3e0291a7e9d699fe39e9dd2d681fc2");
        });
    };
  }
};