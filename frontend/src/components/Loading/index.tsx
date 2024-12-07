import React, { PropsWithChildren, useState } from 'react';
import { ThreeDot } from 'react-loading-indicators';

export enum LoadingState {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  error = 'error',
}


export const useLoading = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.idle);

  const startLoading = () => setLoadingState(LoadingState.loading);
  const stopLoading = () => setLoadingState(LoadingState.success);
  const setError = () => setLoadingState(LoadingState.error);

  return {
    loadingState,
    startLoading,
    stopLoading,
    setError,
  };
}

type Props = PropsWithChildren<{
  loadingState: LoadingState;
}>

function Loading({ loadingState, children }: Props) {

  return (
    <div style={{ position: 'relative' }}>
      {loadingState === LoadingState.loading &&
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <ThreeDot color="black"/>
        </div>
      }
      {loadingState === LoadingState.error && <h1>Error</h1>}
      <div style={{ opacity: loadingState === LoadingState.loading ? 0 : 1, transition: 'opacity 0.1s' }}>
        {children}
      </div>
    </div>
  );
}

export default Loading;