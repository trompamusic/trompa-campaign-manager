export default file => Promise.resolve({ data: require(`./json/${file}.json`) });
export const loadJSONResponse = file => require(`./json/${file}.json`);
