import React from "react";
// ! Dyte
import { DyteMeeting } from "dyte-client";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Meeting() {
  let history = useHistory();
  const meetingDetails = useSelector((state) => state.auth.meetingDetails);
  const onDyteInit = (meeting) => {
    meeting.on(meeting.Events.meetingEnded, () => {
      sessionStorage.clear();
      history.push("/live-class");
    });
  };
  return (
    <div>
      <DyteMeeting
        onInit={onDyteInit}
        clientId={meetingDetails.clientId}
        meetingConfig={{
          roomName: meetingDetails.roomName,
          authToken: meetingDetails.auth,
          apiBase: process.env.REACT_APP_DYTE_BASE_URL,
          //   showSetupScreen: true,
        }}
      />
    </div>
  );
}

export default Meeting;
