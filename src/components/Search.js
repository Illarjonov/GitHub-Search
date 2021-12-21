import React, {useContext, useState} from 'react';
import {AlertContext} from '../context/alert/alertContext'
import {GithubContext} from '../context/github/githubContext'

export const Search = () => {

//hooks
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext) //передает через провайдер все нужное

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

  github.clearUsers() //зачищает после энтера

    if (value.trim()) { //убирает пробелы
            alert.hide()
            github.search(value.trim())
    } else {
            alert.show('Введите данные пользователя!')
            }
                }

  return(
    <div className ="form-group">
        <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
        />
    </div>
  )
}
