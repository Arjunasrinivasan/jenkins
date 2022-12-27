import React from 'react';

export default function SessionCard({ data }) {
  return (
    <div className="card mb-4">
      <div className="card-header">Session</div>
      <div className="panel-collapse">
        <div className="card-body">
          <div className="row">
            <dt className="col-sm-5">Type</dt>
            <dd className="col-sm-7">{data.payload.included[2].attributes.exam_type}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Term</dt>
            <dd className="col-sm-7">{data.payload.included[2].attributes.exam_term}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Session Status</dt>
            <dd className="col-sm-7">{data.payload.data.attributes.session_status}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Appointment Status</dt>
            <dd className="col-sm-7">{data.payload.data.attributes.appointment_status}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Exam Start</dt>
            <dd className="col-sm-7">{data.payload.data.attributes.exam_start}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Actual Start</dt>
            <dd className="col-sm-7">{data.payload.data.attributes.actual_start}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Actual End</dt>
            <dd className="col-sm-7">{data.payload.data.attributes.actual_end}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Exam Duration</dt>
            <dd className="col-sm-7">{data.payload.data.attributes.exam_duration}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Appointment ID</dt>
            <dd className="col-sm-7">
              <span>{data.payload.data.attributes.appointment_id}</span>
            </dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Session ID</dt>
            <dd className="col-sm-7">
              <span>{data.payload.data.attributes.session_id}</span>
            </dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Reviewer</dt>
            <dd className="col-sm-7">{data.payload.data.attributes.reviewer}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-5">Office</dt>
            <dd className="col-sm-7">{data.payload.data.attributes.office}</dd>
          </div>
        </div>
      </div>
    </div>
  );
}
