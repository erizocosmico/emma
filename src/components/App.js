import React from 'react';

import { loadInput, contentLoaded } from '../actions';
import Loading from './components/Loading';
import Input from './components/Input';
import trevor from './services/trevor';

const App = React.createClass({
  onSubmit(input) {
    this.dispatch(loadInput(input));

    trevor(input)
      .then(data => {
        this.dispatch(contentLoaded(data));
      })
      .catch(err => {
        this.dispatch({});
      });
  },

  render() {
    let handler = this.state.handler;

    return (
      <div className='app'>
        <h1>Emma</h1>
        <Input onSubmit={this.onSubmit} disabled={this.state.loading} />
        {this.state.loading ? <Loading /> : <handler data={this.state.data} />}
      </div>
    );
  }
});

export default App;
