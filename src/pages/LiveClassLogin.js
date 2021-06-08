import React, { useState, useEffect } from "react";
import axios from "axios";
import NavFooterLayout from "../containers/NavFooterLayout";
import {
  openSignup,
  openLogin,
  setMeetingDetails,
} from "../store/actions/rootActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// ! React redux

function LiveClassLogin() {
  let history = useHistory();
  const dispatch = useDispatch();
  // ! profiles of logged in user
  const profiles = useSelector((state) => state.auth.profiles);
  const authToken = useSelector((state) => state.auth.authToken);
  const userDetails = useSelector((state) => state.auth.userDetails);
  // ! Function to launch the class
  const launchClass = (auth, roomName, clientId, meetingId) => {
    dispatch(setMeetingDetails({ auth, roomName, clientId }));
    history.push(`/live-class/meeting/${meetingId}`);
  };
  // ! state to store next class details
  const [nextClass, setNextClass] = useState([]);
  // ! Effect to load the next classes onload
  useEffect(() => {
    if (profiles.length > 0) {
      const requests = profiles.map((profile) => {
        return axios.get(process.env.REACT_APP_NEXT_CLASS_API, {
          headers: {
            Authorization: authToken,
            "X-SSUID": userDetails.id,
            "X-SSPID": profile.id,
          },
        });
      });
      axios
        .all(requests)
        .then(
          axios.spread((...responses) => {
            let nextClassDetails = responses.map((resp) => {
              return resp.data.live_class;
            });
            setNextClass([...nextClassDetails]);
          })
        )
        .catch((errors) => {
          console.log(errors);
        });
    }
  }, []);
  console.log(nextClass);
  return (
    <NavFooterLayout>
      <div className="live-class-login__wrapper">
        <div className="live-class-login">
          {nextClass.length > 0
            ? nextClass.map((classDetails, index) => {
                return (
                  <>
                    <div className="live-class-login__student-card">
                      <h2 className="class-name">
                        Hi {profiles[index].first_name}.<br />
                        Your {classDetails.batch.course.display_name} class
                        starts at{" "}
                        {new Date(classDetails.start_time * 1000)
                          .toTimeString()
                          .split(" ")
                          .shift()}
                      </h2>
                      <button
                        onClick={() => {
                          launchClass(
                            classDetails.dyte_token,
                            classDetails.dyte_room_name,
                            classDetails.dyte_org_id,
                            classDetails.dyte_meeting_id
                          );
                        }}
                      >
                        Join class.
                      </button>
                    </div>
                  </>
                );
              })
            : null}
          {authToken.length === 0 ? (
            <>
              <button onClick={() => dispatch(openLogin())}>Login</button>
              <button onClick={() => dispatch(openSignup())}>Signup</button>
            </>
          ) : null}
        </div>
      </div>
    </NavFooterLayout>
  );
}

export default LiveClassLogin;
