const DEFAULT_ERROR_MESSAGE = 'Invariant failed';

/**
 * Invariant function. 
 * Reference from https://github.com/alexreardon/tiny-invariant.
 * @param condition Condition.
 * @param message Error message.
 */
export function invariant(condition: boolean, message = DEFAULT_ERROR_MESSAGE): asserts condition {
	if (!condition) {
		throw new Error(message);
	}
}

