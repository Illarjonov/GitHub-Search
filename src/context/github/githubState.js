import React, {useReducer} from 'react'
import axios from 'axios'
import {GithubContext} from './githubContext'
import {githubReducer} from './githubReducer'
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from '../types'

//сокращаем ссылки
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

//тоже сокращение
const withCreds = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}


export const GithubState = ({children}) => {

  //заглушка местного стейта
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const search = async value => {
        setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    )
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    })
  }

  const getUser = async login => {
        setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${login}?`)
    )
    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }

  const getRepos = async login => {
        setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${login}/repos?per_page=5&`)
    )
    dispatch({
      type: GET_REPOS,
      payload: response.data
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})
  const setLoading = () => dispatch({type: SET_LOADING})

  const {user, users, repos, loading, login} = state

  return (
    <GithubContext.Provider value={ {
      setLoading, search, getUser, getRepos, clearUsers,
      user, users, repos, loading, login
    }}>
      {children}
    </GithubContext.Provider>
  )
}
