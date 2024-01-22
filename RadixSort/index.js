// Hàm lấy số lớn nhất từ mảng
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Hàm thực hiện counting sort cho một chữ số cụ thể
function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  // Lưu trữ số lần xuất hiện của từng chữ số
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  // Cập nhật mảng count để lưu trữ vị trí cuối cùng của mỗi chữ số
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Xây dựng mảng output
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  // Copy mảng output vào mảng arr
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// Hàm thực hiện sắp xếp radix
function radixSort(arr) {
  const max = getMax(arr);

  // Lặp qua từng chữ số
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}



// Ví dụ sử dụng
const arrayToSort = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(arrayToSort.slice());
// console.log(sortedArray); // Kết quả sắp xếp tăng dần
