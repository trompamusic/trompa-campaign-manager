export const providers = (component, ...wrappers) => {
  let wrappedComponent = component;

  wrappers.forEach(fn => wrappedComponent = fn(wrappedComponent));

  return wrappedComponent;
};

export const setPrerenderReady = status => (window.prerenderReady = status);

//Truncates a string to last space <' '> before length maxChars
export const truncateLabel = (str, maxChars) => {
  if(!str) return "";
  let ret = str.substring(0, maxChars);
  
  ret = ret.substring(0, str.lastIndexOf(' ') -1);
  if(ret.length < str.length) ret = `${ret}...`;

  return ret;
};