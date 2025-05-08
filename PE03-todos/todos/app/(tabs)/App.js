import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Heading from './Heading'
import Input from './Input'
import TodoList from './TodoList'
import Button from './Button'
import TabBar from './TabBar'

export default class App extends Component {
  constructor() {
    super()
    this.todoIndex = 0
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  inputChange = inputValue => {
    this.setState({ inputValue })
  }

  submitTodo = () => {
    const text = this.state.inputValue.trim()
    if (!text) return

    const newTodo = {
      title: text,
      todoIndex: this.todoIndex++,
      complete: false
    }

    this.setState(prev => ({
      todos: [...prev.todos, newTodo],
      inputValue: ''
    }))
  }

  toggleComplete = todoIndex => {
    this.setState(prev => ({
      todos: prev.todos.map(t =>
        t.todoIndex === todoIndex
          ? { ...t, complete: !t.complete }
          : t
      )
    }))
  }

  deleteTodo = todoIndex => {
    this.setState(prev => ({
      todos: prev.todos.filter(t => t.todoIndex !== todoIndex)
    }))
  }

  setFilterType = type => {
    this.setState({ type })
  }

  getFilteredTodos = () => {
    const { todos, type } = this.state
    if (type === 'Active') {
      return todos.filter(t => !t.complete)
    }
    if (type === 'Complete') {
      return todos.filter(t => t.complete)
    }
    return todos
  }

  render() {
    const { inputValue, type } = this.state
    const visibleTodos = this.getFilteredTodos()

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.content}
        >
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
          />

          <TodoList
            todos={visibleTodos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />

          <Button submitTodo={this.submitTodo} />
        </ScrollView>

        <TabBar
          selected={type}
          onSelect={this.setFilterType}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})
