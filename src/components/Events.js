import React from 'react'

import {DELETE_EVENT} from '../actions'

const Events = ({ state, dispatch }) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, idx) => {
            const id = event.id
            const handleClickDeleteBtn = () => {
              const result = window.confirm(
                `イベントid=${id}を本当に削除しても良いですか？`
              )

              result && dispatch({ type: 'DELETE_EVENT', id })
            }
            return (
              <tr key={idx}>
                <td>{id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClickDeleteBtn}
                  >
                    削除
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default Events
