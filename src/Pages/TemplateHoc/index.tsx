import React, { FC, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CenterLoader from '../../Components/Molecules/CenterLoader';
import RefetchDisplay from '../../Components/Molecules/RefetchDisplay';
import { useNewsDispatch, useNewsSelector } from '../../store/hooks';

import styles from './styles.scss';

function TemplateHOC(WrappedComponent: FC, action: (id?: string) => any) {
  return () => {
    const dispatch = useNewsDispatch();
    const { error, loading } = useNewsSelector((state) => state);

    const { id } = useParams<{ id: string }>();

    const memoDispatch = useCallback(() => {
      return dispatch(action(id));
    }, [dispatch]);

    useEffect(() => {
      const dispatcher = memoDispatch();

      return () => dispatcher.abort();
    }, [memoDispatch]);

    if (loading) {
      return <CenterLoader />;
    }

    if (error) {
      throw new Error(error);
    }

    return (
      <div className={styles.template}>
        <WrappedComponent />
        <RefetchDisplay dispatch={memoDispatch} />
      </div>
    );
  };
}

export default TemplateHOC;
