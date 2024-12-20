export const sum = (list: ReadonlyArray<number>) =>
  list.reduce((memo, sum) => memo + sum, 0);

export const nthTriangularNumber = (n: number) => (n * (n + 1)) / 2;

/**
 * Compute the triangular root of n.
 * https://en.wikipedia.org/w/index.php?title=Triangular_number&oldid=1263120285#Triangular_roots_and_tests_for_triangular_numbers
 * @param n
 * @returns
 */
export const triangularRoot = (n: number) =>
  Math.floor(Math.sqrt(8 * n + 1) - 1) / 2;
