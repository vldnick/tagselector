import React, { useEffect } from 'react';

export function useClickAway(ref: React.RefObject<any>, callback: Function) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | KeyboardEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleClickOutside);
    };
  }, [ref]);
}
