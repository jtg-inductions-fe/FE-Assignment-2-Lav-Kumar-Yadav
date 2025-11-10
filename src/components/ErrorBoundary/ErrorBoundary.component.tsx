import { Component } from 'react';

import { ErrorBoundaryContext } from '@contexts';

import type {
    ErrorBoundaryProps,
    ErrorBoundaryState,
} from './ErrorBoundary.types';

/**
 * **ErrorBoundary**
 *
 * A reusable React Error Boundary component that catches JavaScript errors
 * in its child component tree and displays a fallback UI instead of crashing the entire app.
 *
 * @example
 * ```tsx
 * const Fallback = ({ handleRerender }) => (
 *   <div>
 *     <h2>Something went wrong!</h2>
 *     <button onClick={handleRerender}>Try Again</button>
 *   </div>
 * );
 *
 * <ErrorBoundary fallback={Fallback}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    handleRerender = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundaryContext.Provider
                    value={{
                        resetErrorBoundary: this.handleRerender,
                    }}
                >
                    {this.props.fallback}
                </ErrorBoundaryContext.Provider>
            );
        }

        return this.props.children;
    }
}
