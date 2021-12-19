import React, {useContext, useEffect, Fragment} from 'react';
import {GithubContext} from '../context/github/githubContext'
import {Loader} from '../components/loader/loader'
import {NavLink} from 'react-router-dom'
import { useParams } from "react-router-dom";

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, /*repos*/} = useContext(GithubContext)
  const {urlName} = useParams()
//effect, input

  useEffect( ()  =>{
    getUser({urlName})
    getRepos({urlName})
  }, [])

if (loading){
  return <Loader/>
}

const {
  name, company, avatar_url,
  location, bio, blog,
  login, html_url, followers_url,
  following_url, repos_url,
  public_gists
} = user

  return(
    <Fragment>
        <NavLink to = "/" className = "btn btn-link">На главную</NavLink>
        <div className = "card mb-4">
          <div className = "card-body">
            <div className = "row">
              <div className = "col-sm-3 text-center">
                  <img
                       src = {avatar_url}
                       alt = {name}
                       style={{width: '150px'}}/>
                  <h1>{name}</h1>
                  {location && <p> Расположение: {location}</p>}
              </div>
              <div className = "col">

                  <ul>
                    { login && <li>
                        <strong> UserName:</strong>{login}
                      </li> }

                      { company && <li>
                          <strong> Компания:</strong>{company}
                        </li> }

                        { login && <li>
                            <strong> WebSite:</strong>{blog}
                          </li> }
                  </ul>

                  <div className="badge badge-primary"> Подписчики: {followers}  </div>
                  <div className="badge badge-success"> Подписан: {following} </div>
                  <div className="badge badge-info"> Репозитории: {public_repos} </div>
                  <div className="badge badge-dark"> Gits: {public_gists}  </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}
