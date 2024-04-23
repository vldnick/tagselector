import React from 'react';

import { KeyCode } from '../constants';

export const handleEnterKeyDown =
  (callback: Function) => (event: React.KeyboardEvent<HTMLElement>) => {
    const { key } = event;

    if (key === KeyCode.ENTER) {
      callback?.();
    }
  };
