import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SnackBar = ({ message, success }) => {
  useEffect(() => {
    if (message) {
      if (success) toast.success(message);
      else toast.error(message);
    }
  }, [message]);

  return <Toaster />;
};

export default SnackBar;
