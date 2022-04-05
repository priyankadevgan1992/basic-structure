import * as React from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';

export default function LoaderWrapper() {
  const showLoader = useSelector((state) => state.app.showLoader);
  return (
    <Loader open={showLoader} />
  );
}
