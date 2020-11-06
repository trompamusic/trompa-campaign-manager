
import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_API_BASE_URL;

// define the api
const api = create({
  baseURL,
  headers: { 'Accept': 'application/json' },
});

// api methods
export const createDigitalDoc = (musicCompositionId, data) => api.post(`/music-compositions/${musicCompositionId}/digital-document`, data);

export const createCampaign = data => api.post('/campaigns',data);
