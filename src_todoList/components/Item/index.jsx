import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state={
    mouse:false
  }
  //处理鼠标移入移出
  handleMouse = (flag)=>{
    return ()=>{
      //console.log(flag)
      this.setState({mouse:flag})
    }
  }
  //处理todo勾选事件
  handleCheck = (id)=>{
    return (event)=>{
      console.log(id,event.target.checked)
      this.props.updateTodo(id,event.target.checked)
    }
  }

  //处理删除todo
  handleDelete = (id)=>{
    return ()=>{
      if(window.confirm('是否真的删除？')) this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    return (
      <li onMouseEnter={this.handleMouse(true)} 
        onMouseLeave={this.handleMouse(false)}
        style={{backgroundColor:this.state.mouse?'#ddd':'white'}}
      >
        <label htmlFor="">
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: this.state.mouse?'block':'none' }}>删除</button>
      </li>
    )
  }
}
