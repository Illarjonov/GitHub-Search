import React, {useContext, useEffect, Fragment} from 'react';
import {GithubContext} from '../context/github/githubContext'
import {Loader} from '../components/loader/loader'
import {NavLink} from 'react-router-dom'
import { useParams } from "react-router-dom";

export const Profile = () => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const { id } = useParams()

//effect, input

  useEffect( ()  =>{
    getUser(id)
  //  getRepos({urlName})
  }, [])

if (loading){
  return <Loader/>
}

const {
  login, avatar_url
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
                       alt = {login}
                       style={{width: '150px'}}/>
                       <h1>{login}</h1>
              </div>
              </div>
            </div>
          </div>

    </Fragment>
  )
}
