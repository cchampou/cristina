import React, { PropsWithChildren, useState } from 'react';
import { ThreeDot } from 'react-loading-indicators';
import { useTranslation } from 'react-i18next';
import './styles.css';

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
  loadingMessage?: string;
}>

function Loading({ loadingState, children, loadingMessage }: Props) {
  const { t } = useTranslation();

  return (
    <div className="loading-content-container">
      {loadingState === LoadingState.loading &&
        <div className="loading-container">
          {loadingMessage && <p className="loading-text">{loadingMessage}</p>}
          <ThreeDot color="black"/>
        </div>
      }
      {loadingState === LoadingState.error && <p className="error-message">{t('error')}</p>}
      <div style={{ opacity: loadingState === LoadingState.loading ? 0 : 1, transition: 'opacity 0.1s' }}>
        {children}
      </div>
    </div>
  );
}

export default Loading;