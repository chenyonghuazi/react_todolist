import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleDelete = ()=>{
        
        this.props.deleteCheckedTodo()
        
    }
    render() {
        const {todos,checkAllTodo} = this.props

        const doneCount = todos.reduce((pre,current)=>{
            return pre + (current.done? 1:0)
        },0)

        const total = todos.length

        return (
            <div className="todo-footer">
                <label htmlFor="">
                    <input type="checkbox" checked={total === doneCount && total !== 0} onChange={(event)=>{checkAllTodo(event.target.checked)}}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span>全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleDelete}>清除已完成任务</button>
            </div>
        )
    }
}
