import React from 'react'
export const Repos = ({repos, login}) => (
  <React.Fragment>
    {repos.map(repo => (
  <div className="card mb-3" key = {repo.id}>
      <div className="card-body">
          <h5
          className = "btn btn-secondary"
          onClick = {() => {
            window.open(`https://github.com/${login}/${repo.name}`)}}>
              <p> {repo.name} </p>
          </h5>
      </div>
  </div>
    )
  )
    }
  </React.Fragment>
)
