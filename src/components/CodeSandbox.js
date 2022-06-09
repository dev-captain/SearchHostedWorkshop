import React from "react";

const CodeSandbox = ({ appLink }) => {
  return (
    <div className="h-full w-100 my-4">
      <iframe
        src={appLink}
        className="mt-10 w-11/12 mx-auto h-96"
        title="festive-platform-gshdc3"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default CodeSandbox;
