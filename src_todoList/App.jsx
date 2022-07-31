import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    state = {
        todos:[{id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false}]
    }
    //处理新添todo的回调函数
    addTodo = (todo)=>{
        const {todos} = this.state

        const newTodos = [todo,...todos]

        this.setState({todos:newTodos})

    }
    //处理更新todo状态的回调函数
    updateTodo = (id,done)=>{
        const {todos} = this.state

        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done}
            return todoObj
        })

        this.setState({todos:newTodos})
    }

    //处理删除Todo
    deleteTodo = (id)=>{
        const {todos} = this.state

        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })

        this.setState({todos:newTodos})
    }

    //处理全选
    checkAllTodo = (done)=>{
        const {todos} = this.state

        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })

        this.setState({todos:newTodos})
    }

    //删除已选
    deleteCheckedTodo = ()=>{
        const {todos} = this.state

        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done === false
        })

        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className='todo-container'>
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteCheckedTodo={this.deleteCheckedTodo}/>
                </div>
            </div>
        )
    }
}
