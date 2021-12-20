import React from 'react'

export const Repos = ({repos}) => (
  <React.Fragment>
    {repos.map(repo => (
  <div className="card mb-3" key = {repo.id}>
      <div className="card-body">
          <h5>
              <p>{repo.name}</p>
          </h5>
      </div>
  </div>
    ))
    }
  </React.Fragment>
)
