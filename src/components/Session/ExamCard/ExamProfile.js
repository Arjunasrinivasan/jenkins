import React from 'react';

export default function ExamProfile({ data }) {
  const handleClick = text => () => navigator.clipboard.writeText(text);
  

  return (
    <div id="#profile" className="tab-pane active">
      <div className="row">
        <div className="col-sm-4">
          <strong>Title</strong>
        </div>
        <div className="col-sm-8">{data.payload.included[2].attributes.exam_title}</div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <strong>Start URL</strong>
        </div>
        <div className="col-sm-8">{data.payload.included[2].attributes.exam_start_url}</div>
      </div>
      
      <div className="row">
        <div className="col-sm-4">
          <strong>Exam URL</strong>
        </div>
        <div className="col-sm-8">{data.payload.included[2].attributes.exam_url}</div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <strong>Password</strong>
        </div>
        <div className="col-sm-8">
          <kbd className="text-break">password</kbd>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <strong>Exam window</strong>
        </div>
        <div className="col-sm-8">
          <p className="mb-0">{data.payload.included[2].attributes.exam_window[0]}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <strong>Institution</strong>
        </div>
        <div className="col-sm-8">{data.payload.included[2].attributes.institution}</div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <strong>Department</strong>
        </div>
        <div className="col-sm-8">{data.payload.included[2].attributes.department}</div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <strong>Instructors</strong>
        </div>
        <div className="col-sm-8">{data.payload.included[2].attributes.instructor}</div>
      </div>
    </div>
  );
}
