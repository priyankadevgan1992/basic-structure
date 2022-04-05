import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateToastData } from '../../store/actions/appAction';
import Toast from './Toast';

function ToastWrapper() {
  const toastData = useSelector((state) => state.app.toastData);
  const dispatch = useDispatch();

  const handleClose = () => {
    updateToastData(dispatch);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Toast {...toastData} onClose={handleClose} />
  );
}

export default ToastWrapper;
