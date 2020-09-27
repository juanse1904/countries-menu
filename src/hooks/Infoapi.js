
async function dataApi(API) {
  const response = await fetch(API);
  const data = await response.json();

  return data;
};

export default dataApi;

