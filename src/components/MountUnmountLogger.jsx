import{ useEffect, useRef } from 'react';

const MountUnmountLogger = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      console.log('Component mounted');
      mountedRef.current = true;
    }

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>Check the console for mount and unmount messages.</p>
    </div>
  );
};

export default MountUnmountLogger;
