# Input Password  Props:
- inputProps
  -
  - `*value` (`type: string`, `default: undefined`)
  - `*onChange` (`type: ChangeHandler`, `default: undefined`) - обработчик событи изменения value
  - `default input argument `
- error
  - 
  - `*isError` (`type: boolean`, `default: false`) - отображение ошибки
  - `*errorMessage` (`type: string`, `default: ""`) - текст ошибки
  - `*isErrorDOM` (`type: "boolean"` `default: true` ) - <span style="color:red">рекомендуется ставить true</span>. Заранее отрендерить ошибку в DOM
- styledComponents
  - 
  - `Заменяемые стили компонента наследованные от его экспортированного объекта`
