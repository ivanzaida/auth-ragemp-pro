import { useState } from 'react';

export const useValidatedState = <T>(
  initialValue: T,
  validator: (v: T) => boolean
): [T, (v: T) => unknown, boolean] => {
  const [state, setState] = useState(initialValue);
  return [state, setState, validator(state)];
};
