/**
 * @description remove null values from object
 * @param obj object
 */
export function filterNonNull(obj: object) {
  return Object.fromEntries(Object.entries(obj).filter(([_k, v]) => v));
}
