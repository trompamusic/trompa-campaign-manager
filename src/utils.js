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
export const getCampaignDigitalDocument = campaign => campaign ? campaign?.object.find(object => object.name === 'Work')?.nodeValue : null;

export const getCampaignTasksValue = campaign => campaign ? campaign?.object.find(object => object.name === 'tasks')?.value : null;

export const enhanceUrlWithParameters = (url, ...parameters) => {
  const parsedUrl = new URL(url);

  parameters.forEach(({ key, value }) => {
    parsedUrl.searchParams.set(key, encodeURIComponent(value));
  });

  return parsedUrl.href;
};

export const hasUrlParameter = parameter => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.has(parameter);
};
