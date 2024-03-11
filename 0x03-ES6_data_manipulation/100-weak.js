const weakMap = new WeakMap();

/**
 * Throws an error if the number of queries for an endpoint is >= 5.
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @throws {Error} If the number of queries for the endpoint is >= 5.
 */
function checkQueryLimit(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

/**
 * Queries the API and tracks the number of times it's called for each endpoint.
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 */
function queryAPI(endpoint) {
  checkQueryLimit(endpoint);
  const count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count + 1);
  console.log(`Querying API for ${endpoint.name}`);
}

export { queryAPI, weakMap };
