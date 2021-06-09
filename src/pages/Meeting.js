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
      history.push("/feedback");
    });
  };
  return (
    <div>
      <DyteMeeting
        onInit={onDyteInit}
        clientId={meetingDetails.clientId}
        uiConfig={{
          header: true,
          headerElements: {
            clock: true,
            title: true,
            logo: true,
            participantCount: true,
          },
          //   colors: {
          //     primary: "#FF8671",
          //     secondary: "#1A1A1A",
          //     textPrimary: "#FF8671",
          //     videoBackground: "#1A1A1A",
          //   },
        }}
        meetingConfig={{
          roomName: meetingDetails.roomName,
          authToken: meetingDetails.auth,
          apiBase: process.env.REACT_APP_DYTE_BASE_URL,
          showSetupScreen: true,
        }}
      />
    </div>
  );
}

export default Meeting;
