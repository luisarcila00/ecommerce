import httpClient from "../helpers/httpClient";

const END_POINT = '/api/';

const regions = {
  getStates: () => httpClient.get(END_POINT + 'getstates'),
  getCities: (state) => httpClient.get(END_POINT + 'getcities/' + state),
}
export {
  regions
}