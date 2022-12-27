import React, { useState } from 'react';
import Browser from './Browser';
import General from './General';
import Prechecks from './Prechecks';
import Scores from './Scores';

const newData = (data) => {
  const activities = data.payload.data.meta.activity;
  const activityId = Object.keys(activities).shift();
  const activityStrings = activities[activityId];

  // TODO: all of this string parsing code should probably just use a regex...
  return activityStrings.map((str) => {

    // First Part
    const titleEnds = str.indexOf(":");
    const title = str.substring(0, titleEnds).trim();

    // Third Part (no issue if timestamp wasn't properly delimited)
    const subtitle = str.split(" ").slice(-6).join(" ");

    // Second Part
    const content = str
      .replace(title, "")
      .replace(":", "")
      .replace(subtitle, "")
      .trim();

    return { title, content, subtitle };
  });
};

// TODO: this should probably be a utility that we import from elsewhere
const groupBy = (arrayOfObjects, key) => {
  return arrayOfObjects.reduce((result, obj) => {
    if (!result[obj[key]]) {
      result[obj[key]] = [];
    }
    result[obj[key]].push(obj);
    return result;
  }, {});
};

export default function Event({ data }) {
  const [activityEvents] = useState(newData(data));
  const [groupedByTitle] = useState(groupBy(activityEvents, 'title'));

  return (
    <>
      <General data={groupedByTitle} />
      <Prechecks data={groupedByTitle} />
      <Browser data={groupedByTitle} />
      <Scores data={data} />
    </>
  );
}
