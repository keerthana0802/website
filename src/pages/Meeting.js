import React from "react";
import white from "../assets/sparkLogoWhite.png";
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
  console.log(meetingDetails);
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
          logo: white,
          colors: {
            primary: "#18a0fb",
            secondary: "#3E4454",
            textPrimary: "#EEEEEE",
            videoBackground: "#1A1A1A",
          },
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
