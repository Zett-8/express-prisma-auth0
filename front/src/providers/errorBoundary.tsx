import React, { ErrorInfo } from 'react'

interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <p>Error occurred</p>
          {this.state.error && this.state.error.toString()} <br />
          {this.state.errorInfo?.componentStack}
        </div>
      )
    }
    return this.props.children
  }
}
