import React from 'react';

export enum KeyCode {
  ENTER = 'Enter',
}

export const handleEnterKeyDown =
  (callback: Function) => (event: React.KeyboardEvent<HTMLElement>) => {
    const { key } = event;

    if (key === KeyCode.ENTER) {
      callback?.();
    }
  };
