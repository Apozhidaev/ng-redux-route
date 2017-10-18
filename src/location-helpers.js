import { setLocation } from './action-creaters';

export function setUrl(url, replace = false) {
  const setters = [{ fn: 'url', args: [url] }];
  if (replace) {
    setters.push({ fn: 'replace' });
  }
  return setLocation(setters);
}

export function setPath(path, replace = false) {
  const setters = [{ fn: 'path', args: [path] }];
  if (replace) {
    setters.push({ fn: 'replace' });
  }
  return setLocation(setters);
}

export function setSearch(search, paramValue, replace = false) {
  const setters = [];
  if (typeof search === 'string') {
    setters.push({ fn: 'search', args: [search, paramValue] });
    if (replace) {
      setters.push({ fn: 'replace' });
    }
  } else {
    setters.push({ fn: 'search', args: [search] });
    if (paramValue || replace) {
      setters.push({ fn: 'replace' });
    }
  }
  return setLocation(setters);
}

export function setHash(hash, replace = false) {
  const setters = [{ fn: 'hash', args: [hash] }];
  if (replace) {
    setters.push({ fn: 'replace' });
  }
  return setLocation(setters);
}

export function setState(state, replace = false) {
  const setters = [{ fn: 'state', args: [state] }];
  if (replace) {
    setters.push({ fn: 'replace' });
  }
  return setLocation(setters);
}