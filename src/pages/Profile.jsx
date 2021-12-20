import React, {useContext, useEffect, Fragment} from 'react';
import {GithubContext} from '../context/github/githubContext'
import {Loader} from '../components/loader/loader'
import {NavLink} from 'react-router-dom'
import { useParams } from "react-router-dom";
import {Repos} from '../components/repos'

export const Profile = () => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const { id } = useParams()

//effect, input

  useEffect( ()  => {
    getUser(id)
    getRepos(id)
    //eslint-disable-next-line
  }, [])

if (loading){
  return <Loader/>
}

const {
  login, avatar_url, name,
  location, bio,
  blog, company,
  followers, following, public_repos, public_gists
} = user

  return(
    <Fragment>
        <NavLink to = "/" className = "btn btn-secondary mb-1">На главную</NavLink>
        <div className = "card mb-4">
          <div className = "card-body">
            <div className = "row">
              <div className = "col-sm-3 text-center">
                  <img
                       src = {avatar_url}
                       alt = {login}
                       style={{width: '150px'}}/>
                       <h1>@{login}</h1>
                       <h6>{name}</h6>
                       {location && <p>Местоположение: {location}</p>}
                </div>

                <div className="col">
             { bio && <Fragment>
                 <h3>BIO</h3>
                 <p>{bio}</p>
                      </Fragment> }

                 <ul>
                     {company && <li>
                       <strong>Компания: </strong> {company}
                     </li>}

                     {blog && <li>
                       <strong>Website: </strong> {blog}
                     </li>}
                 </ul>
             <div className="badge badge-primary text-secondary">Подписчики: {followers}</div>
             <div className="badge badge-success text-secondary">Подписан: {following}</div>
             <div className="badge badge-info text-secondary">Репозитории: {public_repos}</div>
             <div className="badge badge-dark text-secondary">Gists: {public_gists}</div>

                 </div>
              </div>
          </div>
      </div>

       <Repos repos ={repos} />
    </Fragment>
  )
}
