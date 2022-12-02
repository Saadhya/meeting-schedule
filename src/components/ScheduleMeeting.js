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
          <div className="col-sm-4">
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
          <div className="col-sm-8">
            <h3 className="fw-bold mb-2 fs-4 ">Enter Details</h3>
            <MeetingForm />
          </div>
        </div>
      </div>
      {/* modal start */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal end */}
      {/* <h1 className="visually-hidden">Schedule your meeting</h1> */}
    </main>
  );
};

export default ScheduleMeeting;
