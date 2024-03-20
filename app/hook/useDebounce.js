import { useState, useEffect, useRef } from 'react';

export const useDebounce = (value, delay = 250) => {
  const timeoutRef = useRef(null);
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeoutRef.current);
  }, [value, delay]);
  return debouncedValue;
};