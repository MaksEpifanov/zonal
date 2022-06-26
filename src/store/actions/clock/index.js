export const addCity = (city) => ({
  type: 'ADD_CITY',
  payload: city,
});

export const deleteCity = (city) => ({
  type: 'DELETE_CITY',
  payload: city,
});
