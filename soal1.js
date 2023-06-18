const sqrt = (x) => {
  const value = Math.sqrt(x)
  if (x < 0) {
    return 'Tidak bisa input bilangan negatif';
  } else if (x % 2 !== 0) {
    return 'Tidak bisa input bilangan ganjil';
  } else {
    return `Akar pangkat dari ${x}, yaitu ${value}`
  }
};

console.log(sqrt(6));
console.log(sqrt(-1));
console.log(sqrt(33));
console.log(sqrt(1224))