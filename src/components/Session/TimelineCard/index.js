import React from 'react';

export default function TimelineCard({ data }) {
  const activities = data.payload.data.meta.activity;
  const activityId = Object.keys(activities).shift();
  const activityStrings = activities[activityId];

  // Count the list of activity starts with Comment: and Incident:
  const comments = () => activityStrings.filter(el => /^Comment:/.test(el)).length;
  const incidents = () => activityStrings.filter(el => /^Incident:/.test(el)).length;

  return (
    <div className="card panel-timeline mb-4">
      <div className="card-header">Timeline</div>
      <div className="card-body p-0">
        <div className="card-group">
          <div className="card border-left-0 border-top-0 border-bottom-0 text-center">
            <div className="card-body">
              <span>
                <h2 className="m-0">
                  {data.payload.data.attributes.exam_duration.replace('minutes', '')}
                </h2>
                <h5 className="m-0">minutes</h5>
              </span>
            </div>
          </div>
          <div className="card border-top-0 border-bottom-0 text-center">
            <div className="card-body">
              <h2 className="m-0">{comments()}</h2>
              <h5 className="m-0">Comments</h5>
            </div>
          </div>
          <div className="card border-right-0 border-top-0 border-bottom-0 text-center">
            <div className="card-body">
              <h2 className="text-danger m-0">{incidents()}</h2>
              <h5 className="text-danger m-0">Incidents</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
