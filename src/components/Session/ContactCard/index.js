import React from 'react';

export default function ContactCard({ data }) {
  return (
    <div className="card mb-4">
      <div className="card-header">Contact</div>
      <div className="panel-collapse">
        <div className="card-body">
          <div className="row mb-2">
            <dt className="col-sm-12 h6">Test-Taker Contact</dt>
          </div>
          <div className="row">
            <dt className="col-sm-3">Phone</dt>
            <dd className="col-sm-9">
              <span>{data.payload.included[0].attributes.phone_numbers[0].phone_number}</span>
            </dd>
          </div>
          <div className="row">
            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">
              <span>{data.payload.included[0].attributes.email}</span>
            </dd>
          </div>
          <div className="row">
            <dt className="col-sm-3">Time Zone</dt>
            <dd className="col-sm-9">{data.payload.included[0].attributes.timezone}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-3">Status</dt>
            <dd className="col-sm-9">
              {data.payload.included[0].attributes.active ? 'Active' : 'Inactive'}
            </dd>
          </div>
          <div className="row mb-2">
            <dt className="col-sm-12 h6 mt-3 pt-3 border-top mb-2">Exam Contact</dt>
          </div>
          <div className="row">
            <dt className="col-sm-3">Name</dt>
            <dd className="col-sm-9">{data.payload.included[2].attributes.exam_contact_name}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{data.payload.included[2].attributes.exam_contact_email}</dd>
          </div>
          <div className="row">
            <dt className="col-sm-3">Phone</dt>
            <dd className="col-sm-9">{data.payload.included[2].attributes.exam_contact_phone}</dd>
          </div>
        </div>
      </div>
    </div>
  );
}
