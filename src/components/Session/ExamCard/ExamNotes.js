import React from 'react';

export default function ExamNotes({ data }) {
  return (
    <div id="exam-notes" className="tab-pane active">
      <p>{data.notes}</p>
      <div className="mb-4">
        <hr />
        <h4 className="mb-2">Permitted Browsers</h4>
        <ul className="list-unstyled list-inline">
          {Object.keys(data.payload.included[2].attributes.permitted_browsers).map((el, i) => (
            <li key={i}>
              <span>{el}</span>
              <span
                className="fa ml-2 mt-1 mb-2 fa-check-circle text-success"
                style={{ verticalAlign: 'middle' }}
              />
            </li>
          ))}
        </ul>
        <h4 className="mb-2">Permitted Resources</h4>
        <ul className="list-unstyled list-inline">
          {Object.keys(data.payload.included[2].attributes.permitted_resources).map((el, i) => (
            <li key={i}>
              <span>{el}</span>
              <span
                className="fa ml-2 mt-1 mb-2 fa-check-circle text-success"
                style={{ verticalAlign: 'middle' }}
              />
            </li>
          ))}
        </ul>
        <h4 className="mb-2">Other resources</h4>
        <p>{data.payload.included[2].attributes.other_resources}</p>
      </div>
    </div>
  );
}
