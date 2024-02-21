export default function accessImmutableObject(object, array) {
    let result = object;
  
    for (const key of array) {
      if (result && (result instanceof Map || typeof result === 'object')) {
        result = result[key];
      } else {
        result = undefined;
        break;
      }
    }
  
    return result;
}
