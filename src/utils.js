export const providers = (component, ...wrappers) => {
  let wrappedComponent = component;

  wrappers.forEach(fn => wrappedComponent = fn(wrappedComponent));

  return wrappedComponent;
};

export const setPrerenderReady = status => (window.prerenderReady = status);

export const getCampaignDigitalDocument = campaign => {
  return campaign ? campaign?.object.find(object => object.name === 'Work')?.nodeValue : null;
};

export const getCampaignTasksValue = campaign => {
  return campaign ? campaign?.object.find(object => object.name === 'tasks')?.value : null;
};

export const enhanceUrlWithParameters = (url, ...parameters) => {
  const parsedUrl = new URL(url);

  parameters.forEach(({ key, value }) => {
    parsedUrl.searchParams.set(key, encodeURIComponent(value));
  });

  return parsedUrl.href;
};
