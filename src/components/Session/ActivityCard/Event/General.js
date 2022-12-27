import React from 'react';
import EventContent from './Common/EventContent';
import EventHeader from './Common/EventHeader';

export default function General({ data }) {
  return (
    <div id="General" className="tab-pane show active">
      <div className="accordion">
        {data['Screen'] ? (
          <div key={data['Screen'].title}>
            <EventHeader
              icon="far fa-lg fa-image"
              count={data['Screen'].length}
              text="Screen"
              target="Screen"
            />
            <EventContent target="Screen" data={data['Screen']} />
          </div>
        ) : null}
        {data['Incident'] ? (
          <div key={data['Incident'].title}>
            <EventHeader
              icon="far fa-lg fa-exclamation"
              count={data['Incident'].length}
              text="Incident"
              target="Incident"
            />
            <EventContent target="Incident" data={data['Incident']} />
          </div>
        ) : null}
        {data['Comment'] ? (
          <div key={data['Comment'].title}>
            <EventHeader
              icon="far fa-lg fa-comment"
              count={data['Comment'].length}
              text="Comment"
              target="Comment"
            />
            <EventContent target="Comment" data={data['Comment']} />
          </div>
        ) : null}
        {data['Review queue review completed'] ? (
          <div key={data['Review queue review completed'].title}>
            <EventHeader
              icon="far fa-lg fa-check"
              count={data['Review queue review completed'].length}
              text="Review queue review completed"
              target="ReviewQueueReviewCompleted"
            />
            <EventContent
              target="ReviewQueueReviewCompleted"
              data={data['Review queue review completed']}
            />
          </div>
        ) : null}
        {data['Review queue review started'] ? (
          <div key={data['Review queue review started'].title}>
            <EventHeader
              icon="far fa-lg fa-check"
              count={data['Review queue review started'].length}
              text="Review queue review started"
              target="ReviewQueueReviewStarted"
            />
            <EventContent
              target="ReviewQueueReviewStarted"
              data={data['Review queue review started']}
            />
          </div>
        ) : null}
        {data['Review queue review dropped'] ? (
          <div key={data['Review queue review dropped'].title}>
            <EventHeader
              icon="far fa-lg fa-check"
              count={data['Review queue review dropped'].length}
              text="Review queue review dropped"
              target="ReviewQueueReviewDropped"
            />
            <EventContent
              target="ReviewQueueReviewDropped"
              data={data['Review queue review dropped']}
            />
          </div>
        ) : null}
        {data['Review queue review submitted'] ? (
          <div key={data['Review queue review submitted'].title}>
            <EventHeader
              icon="far fa-lg fa-check"
              count={data['Review queue review submitted'].length}
              text="Review queue review submitted"
              target="ReviewQueueReviewSubmitted"
            />
            <EventContent
              target="ReviewQueueReviewSubmitted"
              data={data['Review queue review submitted']}
            />
          </div>
        ) : null}
        {data['Fulfillment ended'] ? (
          <div key={data['Fulfillment ended'].title}>
            <EventHeader
              icon="far fa-lg fa-flag-checkered"
              count={data['Fulfillment ended'].length}
              text="Fulfillment ended"
              target="FulfillmentEnded"
            />
            <EventContent target="FulfillmentEnded" data={data['Fulfillment ended']} />
          </div>
        ) : null}
        {data['Flight path'] ? (
          <div key={data['Flight path'].title}>
            <EventHeader
              icon="far fa-lg fa-exclamation"
              count={data['Flight path'].length}
              text="Flight path"
              target="FlightPath"
            />
            <EventContent target="FlightPath" data={data['Flight path']} />
          </div>
        ) : null}
        {data['Launch start'] ? (
          <div key={data['Launch start'].title}>
            <EventHeader
              icon="far fa-lg fa-circle"
              count={data['Launch start'].length}
              text="Launch start"
              target="LaunchStart"
            />
            <EventContent target="LaunchStart" data={data['Launch start']} />
          </div>
        ) : null}
        {data['Session watching'] ? (
          <div key={data['Session watching'].title}>
            <EventHeader
              icon="far fa-lg fa-circle"
              count={data['Session watching'].length}
              text="Session watching"
              target="SessionWatching"
            />
            <EventContent target="SessionWatching" data={data['Session watching']} />
          </div>
        ) : null}
        {data['Launch end'] ? (
          <div key={data['Launch end'].title}>
            <EventHeader
              icon="far fa-lg fa-circle"
              count={data['Launch end'].length}
              text="Launch end"
              target="LaunchEnd"
            />
            <EventContent target="LaunchEnd" data={data['Launch end']} />
          </div>
        ) : null}
        {data['Prechecks completed'] ? (
          <div key={data['Prechecks completed'].title}>
            <EventHeader
              icon="far fa-lg fa-circle"
              count={data['Prechecks completed'].length}
              text="Prechecks completed"
              target="PrechecksCompleted"
            />
            <EventContent target="PrechecksCompleted" data={data['Prechecks completed']} />
          </div>
        ) : null}
        {data['Cpu and ram load'] ? (
          <div key={data['Cpu and ram load'].title}>
            <EventHeader
              icon="far fa-lg fa-tachometer-alt"
              count={data['Cpu and ram load'].length}
              text="Cpu and ram load"
              target="CpuAndRamLoad"
            />
            <EventContent target="CpuAndRamLoad" data={data['Cpu and ram load']} />
          </div>
        ) : null}
        {data['Test taker connected'] ? (
          <div key={data['Test taker connected'].title}>
            <EventHeader
              icon=""
              count={data['Test taker connected'].length}
              text="Test taker connected"
              target="TestTakerConnected"
            />
            <EventContent target="TestTakerConnected" data={data['Test taker connected']} />
          </div>
        ) : null}
        {data['Fulfillment started'] ? (
          <div key={data['Fulfillment started'].title}>
            <EventHeader
              icon="far fa-lg fa-flag"
              count={data['Fulfillment started'].length}
              text="Fulfillment started"
              target="FulfillmentStarted"
            />
            <EventContent target="FulfillmentStarted" data={data['Fulfillment started']} />
          </div>
        ) : null}
        {data['Terms of service'] ? (
          <div key={data['Terms of service'].title}>
            <EventHeader
              icon="far fa-lg fa-check"
              count={data['Terms of service'].length}
              text="Terms of service"
              target="TermsOfService"
            />
            <EventContent target="TermsOfService" data={data['Terms of service']} />
          </div>
        ) : null}
        {data['Share screen'] ? (
          <div key={data['Share screen'].title}>
            <EventHeader
              icon="far fa-lg fa-exchange"
              count={data['Share screen'].length}
              text="Share screen"
              target="ShareScreen"
            />
            <EventContent target="ShareScreen" data={data['Share screen']} />
          </div>
        ) : null}
        {data['System metrics log'] ? (
          <div key={data['System metrics log'].title}>
            <EventHeader
              icon="far fa-lg fa-file-spreadsheet"
              count={data['System metrics log'].length}
              text="System metrics log"
              target="SystemMetricsLog"
            />
            <EventContent target="SystemMetricsLog" data={data['System metrics log']} />
          </div>
        ) : null}
        {data['Upload speed log'] ? (
          <div key={data['Upload speed log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Upload speed log'].length}
              text="Upload speed log"
              target="UploadSpeedLog"
            />
            <EventContent target="UploadSpeedLog" data={data['Upload speed log']} />
          </div>
        ) : null}
        {data['Download speed log'] ? (
          <div key={data['Download speed log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Download speed log'].length}
              text="Download speed log"
              target="DownloadSpeedLog"
            />
            <EventContent target="DownloadSpeedLog" data={data['Download speed log']} />
          </div>
        ) : null}
        {data['Memory usage log'] ? (
          <div key={data['Memory usage log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Memory usage log'].length}
              text="Memory usage log"
              target="MemoryUsageLog"
            />
            <EventContent target="MemoryUsageLog" data={data['Memory usage log']} />
          </div>
        ) : null}
        {data['Memory information log'] ? (
          <div key={data['Memory information log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Memory information log'].length}
              text="Memory information log"
              target="MemoryInformationLog"
            />
            <EventContent target="MemoryInformationLog" data={data['Memory information log']} />
          </div>
        ) : null}
        {data['Cpu usage log'] ? (
          <div key={data['Cpu usage log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Cpu usage log'].length}
              text="Cpu usage log"
              target="CpuUsageLog"
            />
            <EventContent target="CpuUsageLog" data={data['Cpu usage log']} />
          </div>
        ) : null}
        {data['Cpu information log'] ? (
          <div key={data['Cpu information log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Cpu information log'].length}
              text="Cpu information log"
              target="CpuInformationLog"
            />
            <EventContent target="CpuInformationLog" data={data['Cpu information log']} />
          </div>
        ) : null}
        {data['Display information log'] ? (
          <div key={data['Display information log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Display information log'].length}
              text="Display information log"
              target="DisplayInformationLog"
            />
            <EventContent target="DisplayInformationLog" data={data['Display information log']} />
          </div>
        ) : null}
        {data['Extension version log'] ? (
          <div key={data['Extension version log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Extension version log'].length}
              text="Extension version log"
              target="ExtensionVersionLog"
            />
            <EventContent target="ExtensionVersionLog" data={data['Extension version log']} />
          </div>
        ) : null}
        {data['Browser information log'] ? (
          <div key={data['Browser information log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Browser information log'].length}
              text="Browser information log"
              target="BrowserInformationLog"
            />
            <EventContent target="BrowserInformationLog" data={data['Browser information log']} />
          </div>
        ) : null}
        {data['Operating system log'] ? (
          <div key={data['Operating system log'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['Operating system log'].length}
              text="Operating system log"
              target="OperatingSystemLog"
            />
            <EventContent target="OperatingSystemLog" data={data['Operating system log']} />
          </div>
        ) : null}
        {data['Recording notice'] ? (
          <div key={data['Recording notice'].title}>
            <EventHeader
              icon=""
              count={data['Recording notice'].length}
              text="Recording notice"
              target="RecordingNotice"
            />
            <EventContent target="RecordingNotice" noContent data={data['Recording notice']} />
          </div>
        ) : null}
        {data['Identity verification'] ? (
          <div key={data['Identity verification'].title}>
            <EventHeader
              icon=""
              count={data['Identity verification'].length}
              text="Identity verification"
              target="IdentityVerification"
            />
            <EventContent target="IdentityVerification" data={data['Identity verification']} />
          </div>
        ) : null}
        {data['System information'] ? (
          <div key={data['System information'].title}>
            <EventHeader
              icon="far fa-lg fa-desktop"
              count={data['System information'].length}
              text="System information"
              target="SystemInformation"
            />
            <EventContent target="SystemInformation" data={data['System information']} />
          </div>
        ) : null}
        {data['Fulfillment scheduled'] ? (
          <div key={data['Fulfillment scheduled'].title}>
            <EventHeader
              icon="far fa-lg fa-calendar-plus"
              count={data['Fulfillment scheduled'].length}
              text="Fulfillment scheduled"
              target="FulfillmentScheduled"
            />
            <EventContent target="FulfillmentScheduled" data={data['Fulfillment scheduled']} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
