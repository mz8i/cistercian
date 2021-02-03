// adapted from https://medium.com/swlh/using-react-hooks-to-sync-your-component-state-with-the-url-query-string-81ccdfcb174f

import { useState, useCallback, useEffect } from "react";
import qs from "qs";
import { useThrottle } from "@react-hook/throttle";

const setQueryStringWithoutPageReload = (qsValue: string) => { 
    const newurl = window.location.protocol + "//" +
                   window.location.host + 
                   window.location.pathname + 
                   qsValue;
 
    window.history.replaceState({ path: newurl }, "", newurl);
};

const setQueryStringValue = ( 
    key: string, 
    value: string, 
    queryString = window.location.search
 ) => { 
     const values = qs.parse(queryString, { ignoreQueryPrefix: true, parseArrays: false}); 
     const newQsValue = qs.stringify({ ...values, [key]: value }); 
     setQueryStringWithoutPageReload(`?${newQsValue}`);
 };

const getQueryStringValue = ( 
    key: string,
    queryString = window.location.search
) => {
    const values = qs.parse(queryString, {
      ignoreQueryPrefix: true,
      parseArrays: false
    });
    return values[key] as string;
};

function useQueryString<T>(
  key: string,
  initialValue: T,
  fromString: (x: string) => T,
  toString: (x: T) => string
) : [T, (a: T) => void] {
  const queryValue = getQueryStringValue(key);
  const parsedQueryValue = (queryValue ?? "") === "" ? undefined : fromString(queryValue);
  const [value, setValue] = useState(parsedQueryValue ?? initialValue);
  
  const [throttledValue, setThrottledValue] = useThrottle(value, 1);

  useEffect(() => {
    setQueryStringValue(key, toString(throttledValue));
  }, [key, toString, throttledValue])

  const onSetValue = useCallback(
    newValue => {
      setValue(newValue);
      setThrottledValue(newValue);
    },
    []
  );

  return [value, onSetValue];
}

export default useQueryString;