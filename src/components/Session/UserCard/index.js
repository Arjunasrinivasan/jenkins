import React from 'react';

export default function UserCard({ data }) {
  return (
    <div className="card mb-4">
      <div className="card-header">User</div>
      <div className="card-body">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-6">
                  <dl>
                    <dt>User</dt>
                    <dd>
                      <span>{data.payload.included[0].attributes.name}</span>
                    </dd>
                    <dt>User ID</dt>
                    <dd>{data.payload.included[0].id}</dd>
                    <dt>Phone</dt>
                    <dd>
                      <span className="user-panel-phone-number">
                        <span>
                          {data.payload.included[0].attributes.phone_numbers[0].phone_number}
                        </span>
                      </span>
                    </dd>
                  </dl>
                </div>
                <div className="col-sm-6">
                  <dl>
                    <dt>Institution</dt>
                    <dd>
                      <span>{data.payload.included[1].attributes.name}</span>
                    </dd>
                    <dt>Time Zone</dt>
                    <dd>{data.payload.included[0].attributes.timezone}</dd>
                    <dt>Status</dt>
                    <dd>{data.payload.included[0].attributes.active ? 'Active' : 'Inactive'}</dd>
                  </dl>
                </div>
                <div className="col-sm-12"> 
                  <dl>  
                    <dt>Email</dt>
                    <dd>
                      <span>{data.payload.included[0].attributes.email}</span>
                    </dd>  
                  </dl>
                  </div>
              </div>
            </div>
            <div className="col-sm-5">
              <img
                className="img-fluid rounded"
                src={
                  data.payload.included[0].attributes.images[0] ||
                  'https://assets.proctoru.com/assets/procki-avatar-aca7f1ebde663d99e4039ac963d750531f0310362b524593ec49acb6e00bab8f.svg'
                }
                alt={data.payload.included[0].attributes.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
