import { NonNullableProperties } from "../types/non-nullable-properties";
import { invariant } from "./invariant";

const DEFAULT_ERROR_MESSAGE = 'Unexpected null';

/**
 * Type-assertion for non-nullable types.
 * @param value Value to assert.
 * @param message Message to throw if assertion fails.
 */
export function assertNonNull<T>(
  value: T, 
  message?: string
): asserts value is NonNullable<T> {
  invariant(value != null, message ?? DEFAULT_ERROR_MESSAGE);
}

/**
 * Asserts that value is non-nullable, otherwise @throws an `Error`.
 * @param value Value to assert.
 */
export function assertNonNullWithReturn<T>(
  value: T | null | undefined,
): NonNullable<T> {
  assertNonNull(value);
  return value;
}

/**
 * Asserts non-nullable fields in an object.
 * @param object Object to assert non-nullable fields in.
 * @param keys Keys to assert.
 * @example
 * ```ts
 * const teamMemberData: TeamMemberCreationData = assertNonNullFields(
 *   form.value, // Partial<TeamMemberCreationData>
 *   'email',
 *   'firstName',
 *   'lastName',
 *   'phoneNumber',
 *   'profession',
 *   'territories',
 * )
 *
 * ```
 */
export function assertNonNullablePropertiesWithReturn<
  T extends Record<string, unknown>, 
  K extends keyof T
>(
  object: T,
  ...keys: K[]
): NonNullableProperties<T, K> {
  keys.forEach(key => assertNonNull(object[key]));
  return object as unknown as NonNullableProperties<T, K>;
}
