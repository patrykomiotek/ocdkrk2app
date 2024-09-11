import { Button } from '@ui';
import { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  isError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  // private isError: boolean = false;

  state = {
    isError: false,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ isError: true });
  }

  public render() {
    // if (this.isError) {
    if (this.state.isError) {
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div>
          <p>Error! Let's try again</p>
          <Button onClick={() => this.setState({ isError: false })}>Try again</Button>
        </div>
      );
    }
    return this.props.children;
  }
}
