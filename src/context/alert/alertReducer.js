import {HIDE_ALERT, SHOW_ALERT} from '../types'

const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: (state, action) => null,
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
//берет экшн тайп и возвращает новый стейт
