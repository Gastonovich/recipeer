import React, { Component } from 'react';
import './App.css';
import ArticlesList from './components/ArticlesList';
import Form from './components/Form';
class App extends Component {
  render() {
    return (
        <div className={'flexBox'}>
            <div className={'LeftSection'}>
                <h1>Recipeer</h1>
            </div>
            <div className={'RightSection'}>
                <div className="">
                    <h2>Add a new article</h2>
                    <Form />
                </div>
                <div className="">
                    <h2>Articles</h2>
                    <ArticlesList />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
