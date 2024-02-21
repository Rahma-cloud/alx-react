export default function accessImmutableObject(object, array) {
    let result = object;

  // Traverse the object based on the array of keys
  for (const key of array) {
    // Check if the current result is a Map or an object
    if (result instanceof Map || typeof result === 'object') {
      // Access the property using the current key
      result = result[key];

      // If the result is undefined, break the loop
      if (result === undefined) {
        break;
      }
    } else {
      // If the result is not a Map or an object, break the loop
      break;
    }
  }

  // Return the final result (could be undefined, a string, or a Map)
  return result;
}
