/* binary search 
  1. sorted array
  2. target
  3. return index of target
  4. if not found, return -1
*/

function binarySeachRecursive(arr, target, left = 0, right = arr.length - 1) {

  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Trả về chỉ số nếu tìm thấy
  }
  if (arr[mid] > target) {
    return binarySeachRecursive(arr, target, left, mid - 1); // Đệ quy
  }
  if (arr[mid] < target) {
    return binarySeachRecursive(arr, target, mid + 1, right); // Đệ quy
  }

  return -1; // Trả về -1 nếu không tìm thấy
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 5;
const result = binarySeachRecursive(sortedArray, targetValue);
console.log(result);
