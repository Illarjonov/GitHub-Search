import React from 'react';

export const About = () => {
  return(
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">Информация</h1>
          <p className="lead">Используемые технологии: </p>
              <div>HTML 5</div>
              <div>React Hooks</div>
              <div> </div>
                <hr/>
          <p className="lead">Верстка: </p>
              <div>Bootstrap v5</div>
              <div>Немного CSS </div>
                <hr/>
          <p className="lead">Роутинг и работа с сервером: </p>
              <div>axios</div>
              <div>React router dom v6</div>
              <div>GitHub Apps</div>
                <hr/>
          <p className="lead">Система контроля версий: </p>
              <div>GitHub</div>
                <hr/>
          <p className="lead"> </p>
              <div>Данный мини-проект был сделан в учебных целях для изучения React Hooks, запросов на сервер и bootstrap.
              В реализации помогла небольшая статья на одном из форумов с тезисным планом по разработке.
              На изучение и реализацию ушла неспешной работы</div>
      </div>
    </div>

  )
}
