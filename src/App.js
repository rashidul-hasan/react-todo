import React from 'react';
import './assets/css/bootstrap.min.css';
import "./App.css"
import uuid from "uuid";
import { CSSTransitionGroup } from 'react-transition-group'
import {InputBox} from "./components/InputBox";
import {ProgressBar} from "react-bootstrap";

class App extends React.Component{

  state = {
      todos: [],
      progress: 0
  }

    onTodoStateChange = (e) => {
      const id = e.target.value;
      const isChecked = e.target.checked;
      const {todos} = this.state;

      todos.map(item => {
          if (item.id == id) {
              item.done = isChecked;
          }
          return item;
      });

      // const progress = this.calculatePorgress(todos);
      this.setState({todos})
      console.log(e.target.value);
      console.log(e.target.checked);

    }

    addTodo = (todo) => {
      const {todos} = this.state;

      if (todo === "") {
        return;
      }

      todos.push({id: uuid(), text: todo, done: false});
      this.setState({todos});
    }

  render() {


      const {todos} = this.state;

      const progress = this.calculatePorgress(todos);

      console.log({progress});
      return (
          <div className="App">
              <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                  <h1 className="display-4">React TODO <span role="img" aria-label="sheep">🤞</span></h1>
              </div>

              <div className="container">
                  
                  <div className="d-flex justify-content-center flex-row">
                      <div className="todo-wrap">

                          <InputBox onAddTodo={this.addTodo} />

                          <CSSTransitionGroup
                            transitionName="animate"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            { (progress > 0) &&
                              <ProgressBar now={progress} label={`${progress}% Completed`} className="progress-container" />
                            }
                          </CSSTransitionGroup>
                          

                          <ul className="list-group">
                              {this.state.todos.map (i  => {
                                return (
                                    <div className="list-group-item" key={i.id}>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                   type="checkbox" defaultChecked={i.done}
                                                   onClick={this.onTodoStateChange} value={i.id}/>
                                                <label className={i.done ? "form-check-label strike-through" : "form-check-label"} htmlFor="gridCheck1">
                                                    {i.text}
                                                </label>
                                        </div>

                                    </div>

                                )
                              })}
                          </ul>
                      </div>
                  </div>

              </div>
              <div className="container">
                  <footer className="pt-4 my-md-5 pt-md-5 border-top">
                      <div className="row">
                        <p>Made with <span role="img" aria-label="love">❤️</span> by <a href="http://www.rashidul.xyz">Rashidul Hasan</a></p>
                      </div>
                  </footer>
              </div>
          </div>
      );
  }

    calculatePorgress = (todos) => {
      const total = todos.length;

      if (total === 0) return 0;
      let done = 0;
      todos.map( i => {
          if (i.done) done++;
      });

      return Math.ceil((done/total) * 100)
    }
}

export default App;
