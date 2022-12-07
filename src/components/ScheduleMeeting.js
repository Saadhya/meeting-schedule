import {
  CalendarOutlined,
  ClockCircleFilled,
  GlobalOutlined,
} from "@ant-design/icons";
import React from "react";
import MeetingForm from "./MeetingForm";
import { Modal } from "./Modal";

const ScheduleMeeting = () => {
  return (
    <main>
      <div className="container px-4 py-5" id="meeting-sch">
        <h2 className="pb-2 border-bottom">Schedule your meeting</h2>

        <div className="row">
          {/* left */}
          <div className="col-sm-4 col-12">
            <p>Gaurav Garg</p>
            <h3 className="fw-bold mb-0 fs-4">15 Minute Meeting</h3>

            <div className="g-4 py-3" id="mins">
              <div className="col d-flex align-items-start">
                <ClockCircleFilled className="bi flex-shrink-0 me-3" />
                <div>
                  <p className="ml-2 ">15 min</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <CalendarOutlined className="bi flex-shrink-0 me-3" />
                <div>
                  <p>9:30am-9:45am, Friday, December 12, 2022</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <GlobalOutlined className="bi flex-shrink-0 me-3" />
                <div>
                  <p>India Standard Time</p>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-sm-8 col-12">
            <h3 className="fw-bold mb-2 fs-4 ">Enter Details</h3>
            <MeetingForm />
          </div>
        </div>
      </div>
     
      {/* <h1 className="visually-hidden">Schedule your meeting</h1> */}
    </main>
  );
};

export default ScheduleMeeting;
