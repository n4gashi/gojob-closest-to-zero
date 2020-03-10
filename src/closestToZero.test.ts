import closestToZero from './closestToZero';;

test('works with an array of positive integers', () => {
 const subject = [8, 5, 10];
 const result = closestToZero(subject);
 expect(result).toBe(5);
})

test('works with an array of mixed integers', () => {
 const subject = [5, 4, -9, 6, -10, -1, 8];
 const result = closestToZero(subject);
 expect(result).toBe(-1);
})

test('prioritizes the positive number if both pos and neg match', () => {
 const subject = [8, 2, 3, -2];
 const result = closestToZero(subject);
 expect(result).toBe(2);
})

test('prioritizes 0', () => {
 const subject = [2, 0];
 const result = closestToZero(subject);
 expect(result).toBe(0);
})

test('returns 0 if array is empty', () => {
 const subject: number[] = [];
 const result = closestToZero(subject);
 expect(result).toBe(0);
})

test('returns 0 if array has just a single falsy value', () => {
 const subject = [undefined];
 const result = closestToZero(subject);
 expect(result).toBe(0);
})

test('returns 0 if array is null', () => {
 const subject = null;
 const result = closestToZero(subject);
 expect(result).toBe(0);
})