import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T, validate?: (value: unknown) => value is T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return initialValue;
      try {
        const parsed: unknown = JSON.parse(item);
        if (!validate || validate(parsed)) return parsed as T;
        throw new Error('Saved data has an unsupported format');
      } catch (error) {
        // Preserve unreadable data before falling back so it remains recoverable.
        const recoveryKey = `${key}_recovery`;
        if (window.localStorage.getItem(recoveryKey) === null) {
          window.localStorage.setItem(recoveryKey, item);
        }
        console.warn(`Recovered invalid localStorage key "${key}":`, error);
        return initialValue;
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error writing to localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
