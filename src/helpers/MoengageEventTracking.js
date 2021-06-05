import detect from "detect.js";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import ip from "ip";
import address from "address";
const fpPromise = FingerprintJS.load();
const userAgent = detect.parse(navigator.userAgent);
// ! Funtion to generate device IDs
const deviceIdGenerator = async () => {
  const fp = await fpPromise;
  const result = await fp.get();
  const id = await result.visitorId;
  window.localStorage.setItem("dev_id", id);
  return id;
};
// ! Getting the location string
const location = () => {
  if (window?.sessionStorage?.ipapi_response) {
    let data = JSON.parse(window?.sessionStorage?.ipapi_response);
    return `${data.city}, ${data.region}, ${data.country}`;
  } else {
    return "";
  }
};
// ! getting the ip
const ipAddress = () => {
  if (window?.sessionStorage?.ipapi_response) {
    return JSON.parse(window.sessionStorage.ipapi_response).ip;
  } else {
    return "NO IP FOUND";
  }
};
// ! getting the zipcode
const zipcode = () => {
  if (window?.sessionStorage?.ipapi_response) {
    return JSON.parse(window.sessionStorage.ipapi_response).postal;
  } else {
    return "NO ZIPCODE FOUND";
  }
};
// ! Initial attributes for all the requests
const initialAttributes = {
  event_id: "",
  event_type: "",
  funnel_stage: "",
  event_category: "",
  feature_set: "",
  event_priority: "",
  domain: window.location.origin,
  source_page: window.location.pathname,
  kingdom: "",
  phylum: "",
  class: "",
  order: "",
  family: "",
  genus: "",
  species: "",
  sub_c_1: "",
  sub_c_2: "",
  server_timestamp: new Date().toUTCString(),
  device_timestamp: new Date().toISOString(),
  app_version: "",
  a_b_variant: "",
  visitor_uuid: window.localStorage.visitor_uuid,
  device_id: "",
  device_identifier: "",
  //   device_timezone: new Date().toLocaleString(),
  model_number: userAgent.device.family,
  device_manufacturing_company: userAgent.device.manufacturer,
  location: location(),
  network: "",
  ip_address: ipAddress(),
  os: userAgent.os.family,
  user_agent: userAgent.source,
  browser: userAgent.browser.name,
  platform: userAgent.device.type,
  zipcode: zipcode(),
};
const moengageEvent = async (eventName, eventAttributes = {}) => {
  console.log(userAgent);
  if (window.localStorage.dev_id) {
    initialAttributes.device_id = window.localStorage.dev_id;
    initialAttributes.device_identifier = window.localStorage.dev_id;
  } else {
    let dev_id = await deviceIdGenerator();
    initialAttributes.device_id = dev_id;
    initialAttributes.device_identifier = dev_id;
  }
  console.log(eventName, { ...initialAttributes, ...eventAttributes });

  if (window.Moengage)
    window.Moengage.track_event(eventName, {
      ...initialAttributes,
      ...eventAttributes,
    });
};

export default moengageEvent;
