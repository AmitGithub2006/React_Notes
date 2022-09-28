// ErrorBoundary.jsx & Dummy.jsx
import React, { Component } from 'react'

export class UIBackup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return {
          hasError: true,
        };
    }

    componentDidCatch(error, info) {
      console.log(error);
      console.log(info);
    }
    // This is the lifecycle method which shows the error.


  render() {
    if(this.state.hasError) {
      return (
        <div>Something went wrong</div>
      )
    } else {
      return <>{this.props.children}</>;
    }
  }
}

// Whenever an error occurs, these two methods will get triggered:
// 1. static getDerivedStateFromError()
// 2. componentDidCatch()
// This process is called error boundary.
// Having an error boundary to protect whenever UI is broken, we are going to show some different UI.