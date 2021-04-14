import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends Component {
  render() {
    return (
      <div className="example">
        <img src="https://cdn.theatlantic.com/thumbor/9JlVxmvp-Fd_0NxZzoTObontxJA=/672x378/media/img/posts/2021/04/2021_04_11_Seal_Final/original.gif" alt="a deeply impressed man, perhaps thinking 'whoa'"/>
        <p>Whoa!</p>
      </div>
    );
  }
}

export default ExampleComponent;
