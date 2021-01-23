import React from 'react';
import { RTLContext } from '../hooks/useRTL';

function ToggleRTL() {
  return (
    <RTLContext.Consumer>
      {({ value, setValue }) => {
        return (
          <button
            onClick={() => {
              setValue(!value);
              console.log(value);
            }}
          >
          {value ? 'English': 'عربي'}
          </button>
        );
      }}
    </RTLContext.Consumer>
  );
}

export default ToggleRTL;
