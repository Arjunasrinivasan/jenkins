import React from 'react';

export default function EventContent({ data, target, playtime, changePlayerTime, noContent }) {
  return (
    <div id={target} className="collapse">
      <div className="list-group list-group-flush bg-light border-top">
        {data?.map((el, i) => (
          <div className="list-group-item bg-transparent" key={i}>
            <div
              className="row align-items-center incident cursor-pointer"
              onClick={() => changePlayerTime(el.time)}
            >
              <div className="col-1">
                <div className="h-100 text-center d-flex align-items-center justify-content-center">
                  {playtime ? (
                    <span className="fa fa-play-circle fa-lg player-icon " role="button" />
                  ) : null}
                </div>
              </div>
              <div className="col-8">
                <small className="text-muted">{el.subtitle}</small>
                {noContent ? null : <div>{el.content}</div>}
                {/* <div className='mt-2'>{el.footer}</div> */}
              </div>
              <div className="col-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
