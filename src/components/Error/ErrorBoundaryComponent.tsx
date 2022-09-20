import React from 'react';
import {ErrorBoundary} from 'react-error-boundary'

const ErrorBoundaryComponent = () => {
   
     return(<div>

            <ErrorBoundary  FallbackComponent={ErrorFallback}>

            </ErrorBoundary>
     </div>) 
    
}


function ErrorFallback({error, resetErrorBoundary} : any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


export default ErrorBoundaryComponent;