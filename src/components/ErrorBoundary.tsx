"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.error("Scale Flow — UI Error:", error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-dark px-4">
          <div className="text-center max-w-md">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
              Something went wrong
            </h2>
            <p className="mt-3 text-gray-text text-sm">
              We hit an unexpected error. Please refresh the page to try again.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
              }}
              className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-gold text-dark text-sm font-semibold hover:bg-gold-light transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
