/**
 * return the available numbers for lotto
 */
export function getNumbers(): number[] {
  const numbers: number[] = [];

  for (let i = 1; i <= 45; i++) {
    numbers.push(i);
  }

  return numbers;
}

export interface LottoHistory {
  numbers: number[];
  bonus?: number;
}

/**
 * return the fresh lotto histories object
 */
export function getHistories(): LottoHistory[] {
  return [
    {
      numbers: [13, 18, 30, 31, 38, 41],
      bonus: 5,
    },
    {
      numbers: [3, 8, 17, 20, 27, 35],
      bonus: 26,
    },
    {
      numbers: [9, 18, 19, 30, 34, 40],
      bonus: 20
    },
    {
      numbers: [9, 10, 15, 30, 33, 37],
      bonus: 26
    },
    {
      numbers: [2, 13, 16, 19, 32, 33],
      bonus: 42
    },
    {
      numbers: [1, 8, 13, 36, 44, 45],
      bonus: 39
    },
    {
      numbers: [10, 12, 18, 35, 42, 43],
      bonus: 39
    },
    {
      numbers: [12, 14, 25, 27, 39, 40],
      bonus: 35
    },
    {
      numbers: [3, 15, 20, 22, 24, 41],
      bonus: 11
    },
    {
      numbers: [4, 11, 28, 39, 42, 45],
      bonus: 6
    },
    {
      numbers: [4, 8, 10, 16, 31, 36],
      bonus: 9
    },
    {
      numbers: [2, 10, 13, 22, 29, 40],
      bonus: 26
    },
    {
      numbers: [7, 11, 13, 17, 18, 29],
      bonus: 43
    },
    {
      numbers: [4, 10, 20, 32, 38, 44],
      bonus: 18
    },
    {
      numbers: [1, 3, 30, 33, 36, 39],
      bonus: 12
    },
    {
      numbers: [23, 27, 29, 31, 36, 45],
      bonus: 37
    },
    {
      numbers: [1, 6, 15, 36, 37, 38],
      bonus: 5
    },
    {
      numbers: [14, 15, 23, 25, 35, 43],
      bonus: 32
    },
    {
      numbers: [8, 21, 25, 38, 39, 44],
      bonus: 28
    },
    {
      numbers: [7, 9, 12, 15, 19, 23],
      bonus: 4
    },
    {
      numbers: [3, 4, 10, 20, 28, 44],
      bonus: 30
    },
    {
      numbers: [4, 15, 22, 38, 41, 43],
      bonus: 26
    },
    {
      numbers: [10, 16, 18, 20, 25, 31],
      bonus: 6
    },
    {
      numbers: [13, 24, 32, 34, 39, 42],
      bonus: 4
    },
    {
      numbers: [3, 11, 34, 42, 43, 44],
      bonus: 13
    },
    {
      numbers: [3, 17, 18, 23, 36, 41],
      bonus: 26
    },
    {
      numbers: [2, 6, 13, 17, 27, 43],
      bonus: 36
    },
    {
      numbers: [5, 7, 12, 22, 28, 41],
      bonus: 1
    },
    {
      numbers: [2, 3, 26, 33, 34, 43],
      bonus: 29
    },
    {
      numbers: [9, 14, 17, 18, 42, 44],
      bonus: 35
    },
    {
      numbers: [7, 11, 12, 31, 33, 38],
      bonus: 5
    },
    {
      numbers: [1, 3, 23, 24, 27, 43],
      bonus: 34
    },
    {
      numbers: [6, 21, 22, 32, 35, 36],
      bonus: 17
    },
    {
      numbers: [2, 6, 11, 13, 22, 37],
      bonus: 14
    },
    {
      numbers: [16, 19, 24, 33, 42, 44],
      bonus: 27
    },
    {
      numbers: [6, 14, 16, 21, 27, 37],
      bonus: 40
    },
    {
      numbers: [5, 8, 18, 21, 22, 38],
      bonus: 10
    },
    {
      numbers: [4, 5, 12, 14, 32, 42],
      bonus: 35
    },
    {
      numbers: [1, 11, 17, 27, 35, 39],
      bonus: 31
    },
    {
      numbers: [7, 24, 29, 30, 34, 35],
      bonus: 33
    },
    {
      numbers: [3, 16, 21, 22, 23, 44],
      bonus: 30
    },
    {
      numbers: [21, 27, 29, 38, 40, 44],
      bonus: 37
    },
    {
      numbers: [2, 5, 14, 28, 31, 32],
      bonus: 20
    },
    {
      numbers: [3, 4, 16, 27, 38, 40],
      bonus: 20
    },
    {
      numbers: [2, 6, 8, 26, 43, 45],
      bonus: 11
    },
    {
      numbers: [2, 15, 16, 21, 22, 28],
      bonus: 45
    },
    {
      numbers: [7, 19, 23, 24, 36, 39],
      bonus: 30
    },
    {
      numbers: [5, 18, 20, 23, 30, 34],
      bonus: 21
    },
    {
      numbers: [7, 13, 16, 18, 35, 38],
      bonus: 14
    },
    {
      numbers: [8, 19, 20, 21, 33, 39],
      bonus: 37
    },
    {
      numbers: [18, 21, 28, 35, 37, 42],
      bonus: 17
    },
    {
      numbers: [6, 7, 12, 22, 26, 36],
      bonus: 29
    },
    {
      numbers: [5, 12, 25, 26, 38, 45],
      bonus: 23
    },
    {
      numbers: [16, 26, 31, 38, 39, 41],
      bonus: 23
    },
    {
      numbers: [19, 32, 37, 40, 41, 43],
      bonus: 45
    },
    {
      numbers: [1, 15, 17, 23, 25, 41],
      bonus: 10
    },
    {
      numbers: [4, 9, 17, 18, 26, 42],
      bonus: 36
    },
    {
      numbers: [9, 13, 28, 31, 39, 41],
      bonus: 19
    },
    {
      numbers: [1, 4, 14, 18, 29, 37],
      bonus: 6
    },
    {
      numbers: [3, 13, 29, 38, 39, 42],
      bonus: 26
    },
    {
      numbers: [3, 7, 12, 31, 34, 38],
      bonus: 32
    },
    {
      numbers: [8, 14, 17, 27, 36, 45],
      bonus: 10
    },
    {
      numbers: [19, 23, 28, 37, 42, 45],
      bonus: 2
    },
    {
      numbers: [1, 3, 24, 27, 39, 45],
      bonus: 31
    },
    {
      numbers: [4, 14, 23, 28, 37, 45],
      bonus: 17
    },
    {
      numbers: [9, 18, 32, 33, 37, 44],
      bonus: 22
    },
    {
      numbers: [18, 34, 39, 43, 44, 45],
      bonus: 23
    },
    {
      numbers: [4, 18, 20, 26, 27, 32],
      bonus: 9
    },
    {
      numbers: [7, 17, 19, 23, 24, 45],
      bonus: 38
    },
    {
      numbers: [1, 4, 10, 14, 15, 35],
      bonus: 20
    },
    {
      numbers: [2, 6, 11, 16, 25, 31],
      bonus: 3
    },
    {
      numbers: [5, 17, 18, 22, 23, 43],
      bonus: 12
    },
    {
      numbers: [5, 16, 21, 26, 34, 42],
      bonus: 24
    },
    {
      numbers: [19, 22, 30, 34, 39, 44],
      bonus: 36
    },
    {
      numbers: [1, 15, 19, 23, 28, 42],
      bonus: 32
    },
    {
      numbers: [3, 5, 12, 13, 33, 39],
      bonus: 38
    },
    {
      numbers: [2, 4, 30, 32, 33, 43],
      bonus: 29
    },
    {
      numbers: [2, 6, 12, 26, 30, 34],
      bonus: 38
    },
    {
      numbers: [21, 25, 30, 32, 40, 42],
      bonus: 31
    },
    {
      numbers: [2, 6, 20, 27, 37, 39],
      bonus: 4
    },
    {
      numbers: [12, 17, 28, 41, 43, 44],
      bonus: 25
    },
    {
      numbers: [14, 17, 19, 22, 24, 40],
      bonus: 41
    },
    {
      numbers: [9, 15, 29, 34, 37, 39],
      bonus: 12
    },
    {
      numbers: [3, 15, 22, 32, 33, 45],
      bonus: 2
    },
    {
      numbers: [3, 7, 10, 13, 25, 36],
      bonus: 32
    },
    {
      numbers: [16, 21, 28, 35, 39, 43],
      bonus: 12
    },
    {
      numbers: [10, 34, 38, 40, 42, 43],
      bonus: 32
    },
    {
      numbers: [11, 17, 19, 21, 22, 25],
      bonus: 24
    },
    {
      numbers: [4, 8, 18, 25, 27, 32],
      bonus: 42
    },
    {
      numbers: [8, 22, 35, 38, 39, 41],
      bonus: 24
    },
    {
      numbers: [9, 13, 32, 38, 39, 43],
      bonus: 23
    },
    {
      numbers: [6, 10, 16, 28, 34, 38],
      bonus: 43
    },
    {
      numbers: [10, 24, 40, 41, 43, 44],
      bonus: 17
    },
    {
      numbers: [8, 15, 17, 19, 43, 44],
      bonus: 7
    },
    {
      numbers: [20, 25, 31, 32, 36, 43],
      bonus: 3
    },
    {
      numbers: [2, 8, 23, 26, 27, 44],
      bonus: 13
    },
    {
      numbers: [11, 17, 28, 30, 33, 35],
      bonus: 9
    },
    {
      numbers: [14, 18, 22, 26, 31, 44],
      bonus: 40
    },
    {
      numbers: [16, 20, 24, 28, 36, 39],
      bonus: 5
    },
    {
      numbers: [5, 13, 17, 29, 34, 39],
      bonus: 3
    },
    {
      numbers: [1, 2, 16, 22, 38, 39],
      bonus: 34
    },
    {
      numbers: [12, 16, 26, 28, 30, 42],
      bonus: 22
    },
    {
      numbers: [5, 18, 30, 41, 43, 45],
      bonus: 13
    },
    {
      numbers: [1, 16, 29, 33, 40, 45],
      bonus: 6
    },
    {
      numbers: [7, 8, 13, 15, 33, 45],
      bonus: 18
    },
    {
      numbers: [19, 21, 30, 33, 34, 42],
      bonus: 4
    },
    {
      numbers: [14, 26, 32, 36, 39, 42],
      bonus: 38
    },
    {
      numbers: [5, 11, 14, 30, 33, 38],
      bonus: 24
    },
    {
      numbers: [2, 4, 11, 28, 29, 43],
      bonus: 27
    },
    {
      numbers: [3, 9, 11, 12, 13, 19],
      bonus: 35
    },
    {
      numbers: [9, 14, 17, 33, 36, 38],
      bonus: 20
    },
    {
      numbers: [2, 25, 28, 30, 33, 45],
      bonus: 6
    },
    {
      numbers: [1, 9, 11, 14, 26, 28],
      bonus: 19
    },
    {
      numbers: [9, 10, 13, 28, 38, 45],
      bonus: 35
    },
    {
      numbers: [6, 8, 18, 35, 42, 43],
      bonus: 3
    },
    {
      numbers: [12, 18, 30, 39, 41, 42],
      bonus: 19
    },
    {
      numbers: [13, 14, 19, 26, 40, 43],
      bonus: 30
    },
    {
      numbers: [3, 10, 16, 19, 31, 39],
      bonus: 9
    },
    {
      numbers: [5, 6, 16, 18, 37, 38],
      bonus: 17
    },
    {
      numbers: [4, 5, 31, 35, 43, 45],
      bonus: 29
    },
    {
      numbers: [4, 7, 13, 29, 31, 39],
      bonus: 18
    },
    {
      numbers: [5, 11, 12, 29, 33, 44],
      bonus: 14
    },
    {
      numbers: [13, 16, 24, 25, 33, 36],
      bonus: 42
    },
    {
      numbers: [8, 15, 21, 31, 33, 38],
      bonus: 42
    },
    {
      numbers: [7, 9, 24, 29, 34, 38],
      bonus: 26
    },
    {
      numbers: [12, 18, 24, 26, 39, 40],
      bonus: 15
    },
    {
      numbers: [9, 18, 20, 24, 27, 36],
      bonus: 12
    },
    {
      numbers: [1, 12, 13, 24, 29, 44],
      bonus: 16
    },
    {
      numbers: [10, 21, 22, 30, 35, 42],
      bonus: 6
    },
    {
      numbers: [16, 25, 33, 38, 40, 45],
      bonus: 15
    },
    {
      numbers: [14, 15, 25, 28, 29, 30],
      bonus: 3
    },
    {
      numbers: [3, 9, 12, 13, 25, 43],
      bonus: 34
    },
    {
      numbers: [12, 18, 19, 29, 31, 39],
      bonus: 7
    },
    {
      numbers: [17, 21, 25, 26, 27, 36],
      bonus: 4
    },
    {
      numbers: [2, 21, 28, 38, 42, 45],
      bonus: 30
    },
    {
      numbers: [11, 30, 34, 35, 42, 44],
      bonus: 27
    },
    {
      numbers: [1, 3, 12, 14, 16, 43],
      bonus: 10
    },
    {
      numbers: [8, 11, 19, 21, 36, 45],
      bonus: 25
    },
    {
      numbers: [5, 10, 13, 21, 39, 43],
      bonus: 11
    },
    {
      numbers: [6, 11, 15, 17, 23, 40],
      bonus: 39
    },
    {
      numbers: [15, 21, 31, 32, 41, 43],
      bonus: 24
    },
    {
      numbers: [6, 10, 18, 25, 34, 35],
      bonus: 33
    },
    {
      numbers: [14, 20, 23, 31, 37, 38],
      bonus: 27
    },
    {
      numbers: [3, 12, 13, 18, 31, 32],
      bonus: 42
    },
    {
      numbers: [1, 10, 13, 26, 32, 36],
      bonus: 9
    },
    {
      numbers: [5, 9, 14, 26, 30, 43],
      bonus: 2
    },
    {
      numbers: [10, 11, 12, 18, 24, 42],
      bonus: 27
    },
    {
      numbers: [17, 25, 28, 37, 43, 44],
      bonus: 2
    },
    {
      numbers: [1, 4, 10, 12, 28, 45],
      bonus: 26
    },
    {
      numbers: [12, 17, 23, 34, 42, 45],
      bonus: 33
    },
    {
      numbers: [2, 10, 14, 22, 32, 36],
      bonus: 41
    },
    {
      numbers: [5, 22, 31, 32, 39, 45],
      bonus: 36
    },
    {
      numbers: [1, 21, 26, 36, 40, 41],
      bonus: 5
    },
    {
      numbers: [3, 10, 13, 26, 34, 38],
      bonus: 36
    },
    {
      numbers: [6, 7, 18, 19, 30, 38],
      bonus: 13
    },
    {
      numbers: [10, 15, 21, 35, 38, 43],
      bonus: 31
    },
    {
      numbers: [2, 7, 19, 25, 29, 36],
      bonus: 16
    },
    {
      numbers: [2, 10, 12, 31, 33, 42],
      bonus: 32
    },
    {
      numbers: [3, 8, 19, 27, 30, 41],
      bonus: 12
    },
    {
      numbers: [2, 6, 7, 12, 19, 45],
      bonus: 38
    },
    {
      numbers: [2, 10, 11, 19, 35, 39],
      bonus: 29
    },
    {
      numbers: [5, 6, 13, 16, 27, 28],
      bonus: 9
    },
    {
      numbers: [12, 15, 16, 20, 24, 30],
      bonus: 38
    },
    {
      numbers: [4, 6, 15, 25, 26, 33],
      bonus: 40
    },
    {
      numbers: [3, 10, 23, 24, 31, 39],
      bonus: 22
    },
    {
      numbers: [14, 15, 16, 17, 38, 45],
      bonus: 36
    },
    {
      numbers: [6, 18, 31, 34, 38, 45],
      bonus: 20
    },
    {
      numbers: [11, 16, 18, 19, 24, 39],
      bonus: 43
    },
    {
      numbers: [15, 17, 19, 21, 27, 45],
      bonus: 16
    },
    {
      numbers: [6, 12, 19, 24, 34, 41],
      bonus: 4
    },
    {
      numbers: [6, 21, 35, 36, 37, 41],
      bonus: 11
    },
    {
      numbers: [6, 12, 17, 21, 34, 37],
      bonus: 18
    },
    {
      numbers: [8, 9, 18, 21, 28, 40],
      bonus: 20
    },
    {
      numbers: [11, 12, 29, 33, 38, 42],
      bonus: 17
    },
    {
      numbers: [12, 15, 18, 28, 34, 42],
      bonus: 9
    },
    {
      numbers: [8, 12, 19, 21, 31, 35],
      bonus: 44
    },
    {
      numbers: [5, 6, 11, 14, 21, 41],
      bonus: 32
    },
    {
      numbers: [6, 10, 17, 18, 21, 29],
      bonus: 30
    },
    {
      numbers: [1, 9, 12, 23, 39, 43],
      bonus: 34
    },
    {
      numbers: [5, 7, 11, 16, 41, 45],
      bonus: 4
    },
    {
      numbers: [7, 27, 29, 30, 38, 44],
      bonus: 4
    },
    {
      numbers: [5, 15, 20, 31, 34, 42],
      bonus: 22
    },
    {
      numbers: [9, 30, 34, 35, 39, 41],
      bonus: 21
    },
    {
      numbers: [1, 3, 8, 12, 42, 43],
      bonus: 33
    },
    {
      numbers: [7, 22, 24, 31, 34, 36],
      bonus: 15
    },
    {
      numbers: [3, 8, 16, 32, 34, 43],
      bonus: 10
    },
    {
      numbers: [1, 3, 12, 21, 26, 41],
      bonus: 16
    },
    {
      numbers: [4, 7, 11, 24, 42, 45],
      bonus: 30
    },
    {
      numbers: [10, 22, 27, 31, 42, 43],
      bonus: 12
    },
    {
      numbers: [9, 33, 36, 40, 42, 43],
      bonus: 32
    },
    {
      numbers: [5, 9, 12, 30, 39, 43],
      bonus: 24
    },
    {
      numbers: [6, 7, 11, 17, 33, 44],
      bonus: 1
    },
    {
      numbers: [10, 14, 16, 18, 27, 28],
      bonus: 4
    },
    {
      numbers: [13, 14, 26, 28, 30, 36],
      bonus: 37
    },
    {
      numbers: [2, 8, 17, 24, 29, 31],
      bonus: 32
    },
    {
      numbers: [2, 17, 19, 24, 37, 41],
      bonus: 3
    },
    {
      numbers: [4, 16, 20, 33, 40, 43],
      bonus: 7
    },
    {
      numbers: [3, 4, 16, 20, 28, 44],
      bonus: 17
    },
    {
      numbers: [1, 2, 15, 19, 24, 36],
      bonus: 12
    },
    {
      numbers: [12, 14, 24, 26, 34, 45],
      bonus: 41
    },
    {
      numbers: [3, 10, 13, 22, 31, 32],
      bonus: 29
    },
    {
      numbers: [7, 9, 12, 14, 23, 28],
      bonus: 17
    },
    {
      numbers: [3, 12, 33, 36, 42, 45],
      bonus: 25
    },
    {
      numbers: [1, 2, 3, 9, 12, 23],
      bonus: 10
    },
    {
      numbers: [10, 15, 18, 21, 34, 41],
      bonus: 43
    },
    {
      numbers: [15, 19, 21, 34, 41, 44],
      bonus: 10
    },
    {
      numbers: [8, 10, 13, 36, 37, 40],
      bonus: 6
    },
    {
      numbers: [5, 21, 27, 34, 44, 45],
      bonus: 16
    },
    {
      numbers: [4, 8, 9, 16, 17, 19],
      bonus: 31
    },
    {
      numbers: [7, 22, 29, 33, 34, 35],
      bonus: 30
    },
    {
      numbers: [23, 27, 28, 38, 42, 43],
      bonus: 36
    },
    {
      numbers: [13, 15, 18, 24, 27, 41],
      bonus: 11
    },
    {
      numbers: [2, 11, 17, 18, 21, 27],
      bonus: 6
    },
    {
      numbers: [5, 10, 13, 27, 37, 41],
      bonus: 4
    },
    {
      numbers: [6, 16, 37, 38, 41, 45],
      bonus: 18
    },
    {
      numbers: [11, 24, 32, 33, 35, 40],
      bonus: 13
    },
    {
      numbers: [2, 4, 5, 17, 27, 32],
      bonus: 43
    },
    {
      numbers: [2, 7, 13, 25, 42, 45],
      bonus: 39
    },
    {
      numbers: [4, 10, 14, 15, 18, 22],
      bonus: 39
    },
    {
      numbers: [11, 17, 21, 26, 36, 45],
      bonus: 16
    },
    {
      numbers: [3, 6, 10, 30, 34, 37],
      bonus: 36
    },
    {
      numbers: [7, 8, 10, 19, 21, 31],
      bonus: 20
    },
    {
      numbers: [1, 11, 21, 23, 34, 44],
      bonus: 24
    },
    {
      numbers: [6, 7, 19, 21, 41, 43],
      bonus: 38
    },
    {
      numbers: [2, 8, 33, 35, 37, 41],
      bonus: 14
    },
    {
      numbers: [20, 30, 33, 35, 36, 44],
      bonus: 22
    },
    {
      numbers: [12, 14, 21, 30, 39, 43],
      bonus: 45
    },
    {
      numbers: [1, 28, 35, 41, 43, 44],
      bonus: 31
    },
    {
      numbers: [1, 12, 29, 34, 36, 37],
      bonus: 41
    },
    {
      numbers: [4, 8, 13, 19, 20, 43],
      bonus: 26
    },
    {
      numbers: [4, 11, 20, 23, 32, 39],
      bonus: 40
    },
    {
      numbers: [2, 11, 19, 25, 28, 32],
      bonus: 44
    },
    {
      numbers: [2, 6, 13, 16, 29, 30],
      bonus: 21
    },
    {
      numbers: [2, 7, 27, 33, 41, 44],
      bonus: 10
    },
    {
      numbers: [1, 7, 22, 33, 37, 40],
      bonus: 20
    },
    {
      numbers: [2, 5, 15, 18, 19, 23],
      bonus: 44
    },
    {
      numbers: [17, 20, 30, 31, 33, 45],
      bonus: 19
    },
    {
      numbers: [11, 15, 24, 35, 37, 45],
      bonus: 42
    },
    {
      numbers: [3, 4, 9, 24, 25, 33],
      bonus: 10
    },
    {
      numbers: [10, 18, 30, 36, 39, 44],
      bonus: 32
    },
    {
      numbers: [2, 10, 16, 19, 34, 45],
      bonus: 1
    },
    {
      numbers: [2, 12, 19, 24, 39, 44],
      bonus: 35
    },
    {
      numbers: [3, 4, 6, 10, 28, 30],
      bonus: 37
    },
    {
      numbers: [1, 6, 17, 22, 28, 45],
      bonus: 23
    },
    {
      numbers: [1, 4, 8, 23, 33, 42],
      bonus: 45
    },
    {
      numbers: [10, 28, 31, 33, 41, 44],
      bonus: 21
    },
    {
      numbers: [3, 13, 16, 24, 26, 29],
      bonus: 9
    },
    {
      numbers: [3, 10, 14, 16, 36, 38],
      bonus: 35
    },
    {
      numbers: [11, 23, 28, 29, 30, 44],
      bonus: 13
    },
    {
      numbers: [4, 5, 8, 16, 21, 29],
      bonus: 3
    },
    {
      numbers: [3, 11, 13, 21, 33, 37],
      bonus: 18
    },
    {
      numbers: [2, 5, 8, 11, 33, 39],
      bonus: 31
    },
    {
      numbers: [1, 7, 16, 18, 34, 38],
      bonus: 21
    },
    {
      numbers: [4, 18, 26, 33, 34, 38],
      bonus: 14
    },
    {
      numbers: [7, 15, 20, 25, 33, 43],
      bonus: 12
    },
    {
      numbers: [1, 6, 11, 28, 34, 42],
      bonus: 30
    },
    {
      numbers: [3, 11, 14, 15, 32, 36],
      bonus: 44
    },
    {
      numbers: [15, 27, 33, 35, 43, 45],
      bonus: 16
    },
    {
      numbers: [24, 25, 33, 34, 38, 39],
      bonus: 43
    },
    {
      numbers: [7, 17, 19, 30, 36, 38],
      bonus: 34
    },
    {
      numbers: [5, 15, 22, 23, 34, 35],
      bonus: 2
    },
    {
      numbers: [1, 8, 10, 13, 28, 42],
      bonus: 45
    },
    {
      numbers: [7, 12, 15, 24, 25, 43],
      bonus: 13
    },
    {
      numbers: [6, 7, 12, 28, 38, 40],
      bonus: 18
    },
    {
      numbers: [1, 11, 15, 17, 25, 39],
      bonus: 40
    },
    {
      numbers: [6, 13, 20, 27, 28, 40],
      bonus: 15
    },
    {
      numbers: [17, 23, 27, 35, 38, 43],
      bonus: 2
    },
    {
      numbers: [21, 24, 27, 29, 43, 44],
      bonus: 7
    },
    {
      numbers: [4, 10, 19, 29, 32, 42],
      bonus: 30
    },
    {
      numbers: [3, 5, 7, 14, 26, 34],
      bonus: 35
    },
    {
      numbers: [4, 5, 6, 12, 25, 37],
      bonus: 45
    },
    {
      numbers: [12, 15, 24, 36, 41, 44],
      bonus: 42
    },
    {
      numbers: [1, 8, 17, 34, 39, 45],
      bonus: 27
    },
    {
      numbers: [1, 8, 11, 15, 18, 45],
      bonus: 7
    },
    {
      numbers: [9, 10, 14, 25, 27, 31],
      bonus: 11
    },
    {
      numbers: [7, 10, 17, 29, 33, 44],
      bonus: 5
    },
    {
      numbers: [8, 21, 28, 31, 36, 45],
      bonus: 43
    },
    {
      numbers: [7, 9, 10, 13, 31, 35],
      bonus: 24
    },
    {
      numbers: [11, 18, 26, 27, 40, 41],
      bonus: 25
    },
    {
      numbers: [7, 8, 20, 29, 33, 38],
      bonus: 9
    },
    {
      numbers: [12, 14, 15, 24, 27, 32],
      bonus: 3
    },
    {
      numbers: [15, 17, 25, 37, 42, 43],
      bonus: 13
    },
    {
      numbers: [2, 4, 6, 11, 17, 28],
      bonus: 16
    },
    {
      numbers: [5, 6, 11, 17, 38, 44],
      bonus: 13
    },
    {
      numbers: [10, 20, 33, 36, 41, 44],
      bonus: 5
    },
    {
      numbers: [3, 5, 8, 19, 38, 42],
      bonus: 20
    },
    {
      numbers: [5, 6, 9, 11, 15, 37],
      bonus: 26
    },
    {
      numbers: [2, 3, 12, 20, 27, 38],
      bonus: 40
    },
    {
      numbers: [4, 9, 23, 33, 39, 44],
      bonus: 14
    },
    {
      numbers: [7, 18, 19, 27, 29, 42],
      bonus: 45
    },
    {
      numbers: [8, 19, 25, 28, 32, 36],
      bonus: 37
    },
    {
      numbers: [10, 14, 19, 39, 40, 43],
      bonus: 23
    },
    {
      numbers: [3, 7, 14, 16, 31, 40],
      bonus: 39
    },
    {
      numbers: [7, 37, 38, 39, 40, 44],
      bonus: 18
    },
    {
      numbers: [16, 21, 26, 31, 36, 43],
      bonus: 6
    },
    {
      numbers: [5, 6, 26, 27, 38, 39],
      bonus: 1
    },
    {
      numbers: [3, 13, 15, 40, 41, 44],
      bonus: 20
    },
    {
      numbers: [11, 12, 16, 26, 29, 44],
      bonus: 18
    },
    {
      numbers: [3, 4, 7, 11, 31, 41],
      bonus: 35
    },
    {
      numbers: [3, 21, 22, 33, 41, 42],
      bonus: 20
    },
    {
      numbers: [13, 19, 28, 37, 38, 43],
      bonus: 4
    },
    {
      numbers: [5, 16, 21, 23, 24, 30],
      bonus: 29
    },
    {
      numbers: [2, 9, 24, 41, 43, 45],
      bonus: 30
    },
    {
      numbers: [1, 4, 16, 26, 40, 41],
      bonus: 31
    },
    {
      numbers: [5, 13, 17, 23, 28, 36],
      bonus: 8
    },
    {
      numbers: [15, 24, 31, 32, 33, 40],
      bonus: 13
    },
    {
      numbers: [8, 17, 18, 24, 39, 45],
      bonus: 32
    },
    {
      numbers: [11, 18, 21, 36, 37, 43],
      bonus: 12
    },
    {
      numbers: [14, 15, 18, 21, 26, 35],
      bonus: 23
    },
    {
      numbers: [6, 15, 22, 23, 25, 32],
      bonus: 40
    },
    {
      numbers: [7, 18, 22, 24, 31, 34],
      bonus: 6
    },
    {
      numbers: [3, 16, 22, 37, 38, 44],
      bonus: 23
    },
    {
      numbers: [6, 7, 15, 16, 20, 31],
      bonus: 26
    },
    {
      numbers: [11, 13, 25, 26, 29, 33],
      bonus: 32
    },
    {
      numbers: [4, 10, 11, 12, 20, 27],
      bonus: 38
    },
    {
      numbers: [9, 12, 19, 20, 39, 41],
      bonus: 13
    },
    {
      numbers: [15, 18, 21, 32, 35, 44],
      bonus: 6
    },
    {
      numbers: [1, 2, 4, 23, 31, 34],
      bonus: 8
    },
    {
      numbers: [8, 17, 21, 24, 27, 31],
      bonus: 15
    },
    {
      numbers: [19, 28, 31, 38, 43, 44],
      bonus: 1
    },
    {
      numbers: [1, 7, 12, 15, 23, 42],
      bonus: 11
    },
    {
      numbers: [2, 9, 22, 25, 31, 45],
      bonus: 12
    },
    {
      numbers: [13, 14, 26, 33, 40, 43],
      bonus: 15
    },
    {
      numbers: [3, 6, 7, 20, 21, 39],
      bonus: 13
    },
    {
      numbers: [1, 7, 19, 26, 27, 35],
      bonus: 16
    },
    {
      numbers: [7, 13, 30, 39, 41, 45],
      bonus: 25
    },
    {
      numbers: [9, 15, 16, 21, 28, 34],
      bonus: 24
    },
    {
      numbers: [1, 2, 6, 16, 19, 42],
      bonus: 9
    },
    {
      numbers: [2, 16, 17, 32, 39, 45],
      bonus: 40
    },
    {
      numbers: [6, 8, 13, 30, 35, 40],
      bonus: 21
    },
    {
      numbers: [8, 16, 25, 30, 42, 43],
      bonus: 15
    },
    {
      numbers: [4, 5, 11, 12, 24, 27],
      bonus: 28
    },
    {
      numbers: [5, 13, 18, 23, 40, 45],
      bonus: 3
    },
    {
      numbers: [10, 17, 18, 19, 23, 27],
      bonus: 35
    },
    {
      numbers: [8, 21, 25, 39, 40, 44],
      bonus: 18
    },
    {
      numbers: [7, 8, 11, 16, 41, 44],
      bonus: 35
    },
    {
      numbers: [6, 9, 18, 19, 25, 33],
      bonus: 40
    },
    {
      numbers: [2, 22, 27, 33, 36, 37],
      bonus: 14
    },
    {
      numbers: [14, 18, 20, 23, 28, 36],
      bonus: 33
    },
    {
      numbers: [4, 8, 27, 34, 39, 40],
      bonus: 13
    },
    {
      numbers: [4, 8, 18, 19, 39, 44],
      bonus: 41
    },
    {
      numbers: [8, 14, 23, 36, 38, 39],
      bonus: 13
    },
    {
      numbers: [1, 5, 6, 14, 20, 39],
      bonus: 22
    },
    {
      numbers: [1, 2, 7, 9, 10, 38],
      bonus: 42
    },
    {
      numbers: [2, 6, 18, 21, 33, 34],
      bonus: 30
    },
    {
      numbers: [2, 19, 25, 26, 27, 43],
      bonus: 28
    },
    {
      numbers: [13, 14, 22, 27, 30, 38],
      bonus: 2
    },
    {
      numbers: [2, 16, 19, 31, 34, 35],
      bonus: 37
    },
    {
      numbers: [5, 11, 14, 27, 29, 36],
      bonus: 44
    },
    {
      numbers: [5, 12, 17, 29, 34, 35],
      bonus: 27
    },
    {
      numbers: [4, 12, 24, 33, 38, 45],
      bonus: 22
    },
    {
      numbers: [8, 10, 23, 24, 35, 43],
      bonus: 37
    },
    {
      numbers: [3, 4, 12, 14, 25, 43],
      bonus: 17
    },
    {
      numbers: [8, 24, 28, 35, 38, 40],
      bonus: 5
    },
    {
      numbers: [2, 8, 13, 25, 28, 37],
      bonus: 3
    },
    {
      numbers: [9, 10, 13, 24, 33, 38],
      bonus: 28
    },
    {
      numbers: [2, 5, 6, 13, 28, 44],
      bonus: 43
    },
    {
      numbers: [8, 13, 14, 30, 38, 39],
      bonus: 5
    },
    {
      numbers: [20, 30, 36, 38, 41, 45],
      bonus: 23
    },
    {
      numbers: [6, 8, 28, 33, 38, 39],
      bonus: 22
    },
    {
      numbers: [2, 8, 15, 22, 25, 41],
      bonus: 30
    },
    {
      numbers: [14, 21, 29, 31, 32, 37],
      bonus: 17
    },
    {
      numbers: [2, 7, 12, 15, 21, 34],
      bonus: 5
    },
    {
      numbers: [6, 7, 10, 16, 38, 41],
      bonus: 4
    },
    {
      numbers: [7, 18, 30, 39, 40, 41],
      bonus: 36
    },
    {
      numbers: [8, 17, 27, 33, 40, 44],
      bonus: 24
    },
    {
      numbers: [2, 12, 14, 33, 40, 41],
      bonus: 25
    },
    {
      numbers: [3, 5, 14, 20, 42, 44],
      bonus: 33
    },
    {
      numbers: [5, 7, 9, 11, 32, 35],
      bonus: 33
    },
    {
      numbers: [5, 7, 20, 22, 37, 42],
      bonus: 39
    },
    {
      numbers: [5, 12, 14, 32, 34, 42],
      bonus: 16
    },
    {
      numbers: [16, 17, 22, 31, 34, 37],
      bonus: 33
    },
    {
      numbers: [10, 11, 15, 25, 35, 41],
      bonus: 13
    },
    {
      numbers: [2, 8, 20, 30, 33, 34],
      bonus: 6
    },
    {
      numbers: [14, 15, 16, 19, 25, 43],
      bonus: 2
    },
    {
      numbers: [2, 4, 20, 34, 35, 43],
      bonus: 14
    },
    {
      numbers: [3, 13, 18, 33, 37, 45],
      bonus: 1
    },
    {
      numbers: [11, 18, 21, 26, 38, 43],
      bonus: 29
    },
    {
      numbers: [1, 12, 26, 27, 29, 33],
      bonus: 42
    },
    {
      numbers: [3, 6, 13, 23, 24, 35],
      bonus: 1
    },
    {
      numbers: [1, 3, 17, 20, 31, 44],
      bonus: 40
    },
    {
      numbers: [1, 10, 15, 16, 32, 41],
      bonus: 28
    },
    {
      numbers: [4, 5, 6, 25, 26, 43],
      bonus: 41
    },
    {
      numbers: [4, 10, 18, 27, 40, 45],
      bonus: 38
    },
    {
      numbers: [14, 19, 25, 26, 27, 34],
      bonus: 2
    },
    {
      numbers: [5, 10, 16, 17, 31, 32],
      bonus: 21
    },
    {
      numbers: [4, 11, 13, 17, 20, 31],
      bonus: 33
    },
    {
      numbers: [5, 7, 18, 37, 42, 45],
      bonus: 20
    },
    {
      numbers: [1, 4, 20, 23, 29, 45],
      bonus: 28
    },
    {
      numbers: [11, 12, 25, 32, 44, 45],
      bonus: 23
    },
    {
      numbers: [12, 15, 19, 26, 40, 43],
      bonus: 29
    },
    {
      numbers: [4, 20, 26, 28, 35, 40],
      bonus: 31
    },
    {
      numbers: [12, 20, 23, 28, 30, 44],
      bonus: 43
    },
    {
      numbers: [11, 17, 21, 24, 26, 36],
      bonus: 12
    },
    {
      numbers: [13, 14, 17, 32, 41, 42],
      bonus: 6
    },
    {
      numbers: [2, 7, 17, 28, 29, 39],
      bonus: 37
    },
    {
      numbers: [1, 10, 20, 32, 35, 40],
      bonus: 43
    },
    {
      numbers: [3, 6, 20, 24, 27, 44],
      bonus: 25
    },
    {
      numbers: [1, 7, 14, 20, 34, 37],
      bonus: 41
    },
    {
      numbers: [29, 31, 35, 38, 40, 44],
      bonus: 17
    },
    {
      numbers: [1, 12, 13, 21, 32, 45],
      bonus: 14
    },
    {
      numbers: [6, 7, 15, 22, 34, 39],
      bonus: 28
    },
    {
      numbers: [8, 17, 20, 27, 37, 43],
      bonus: 6
    },
    {
      numbers: [4, 24, 25, 27, 34, 35],
      bonus: 2
    },
    {
      numbers: [5, 17, 21, 25, 36, 44],
      bonus: 10
    },
    {
      numbers: [13, 18, 26, 31, 34, 44],
      bonus: 12
    },
    {
      numbers: [5, 6, 19, 26, 41, 45],
      bonus: 34
    },
    {
      numbers: [8, 13, 26, 28, 32, 34],
      bonus: 43
    },
    {
      numbers: [3, 12, 13, 15, 34, 36],
      bonus: 14
    },
    {
      numbers: [3, 19, 22, 31, 42, 43],
      bonus: 26
    },
    {
      numbers: [6, 10, 18, 31, 32, 34],
      bonus: 11
    },
    {
      numbers: [12, 23, 26, 30, 36, 43],
      bonus: 11
    },
    {
      numbers: [7, 8, 18, 32, 37, 43],
      bonus: 12
    },
    {
      numbers: [11, 12, 14, 15, 18, 39],
      bonus: 34
    },
    {
      numbers: [10, 24, 26, 29, 37, 38],
      bonus: 32
    },
    {
      numbers: [9, 14, 15, 17, 31, 33],
      bonus: 23
    },
    {
      numbers: [16, 17, 23, 24, 29, 44],
      bonus: 3
    },
    {
      numbers: [1, 5, 9, 21, 27, 35],
      bonus: 45
    },
    {
      numbers: [16, 23, 27, 29, 33, 41],
      bonus: 22
    },
    {
      numbers: [18, 20, 24, 27, 31, 42],
      bonus: 39
    },
    {
      numbers: [5, 17, 25, 31, 39, 40],
      bonus: 10
    },
    {
      numbers: [1, 12, 22, 32, 33, 42],
      bonus: 38
    },
    {
      numbers: [7, 14, 17, 20, 35, 39],
      bonus: 31
    },
    {
      numbers: [11, 23, 26, 29, 39, 44],
      bonus: 22
    },
    {
      numbers: [10, 11, 29, 38, 41, 45],
      bonus: 21
    },
    {
      numbers: [1, 4, 37, 38, 40, 45],
      bonus: 7
    },
    {
      numbers: [4, 5, 13, 14, 37, 41],
      bonus: 11
    },
    {
      numbers: [3, 7, 18, 29, 32, 36],
      bonus: 19
    },
    {
      numbers: [4, 22, 27, 28, 38, 40],
      bonus: 1
    },
    {
      numbers: [6, 8, 13, 16, 30, 43],
      bonus: 3
    },
    {
      numbers: [14, 23, 30, 32, 34, 38],
      bonus: 6
    },
    {
      numbers: [1, 9, 12, 28, 36, 41],
      bonus: 10
    },
    {
      numbers: [2, 8, 23, 41, 43, 44],
      bonus: 30
    },
    {
      numbers: [2, 11, 12, 15, 23, 37],
      bonus: 8
    },
    {
      numbers: [1, 15, 20, 26, 35, 42],
      bonus: 9
    },
    {
      numbers: [5, 8, 21, 23, 27, 33],
      bonus: 12
    },
    {
      numbers: [4, 5, 9, 13, 26, 27],
      bonus: 1
    },
    {
      numbers: [3, 7, 14, 23, 26, 42],
      bonus: 24
    },
    {
      numbers: [12, 29, 32, 33, 39, 40],
      bonus: 42
    },
    {
      numbers: [12, 25, 29, 35, 42, 43],
      bonus: 24
    },
    {
      numbers: [5, 27, 31, 34, 35, 43],
      bonus: 37
    },
    {
      numbers: [12, 13, 32, 33, 40, 41],
      bonus: 4
    },
    {
      numbers: [6, 9, 11, 22, 24, 30],
      bonus: 31
    },
    {
      numbers: [7, 20, 22, 25, 38, 40],
      bonus: 44
    },
    {
      numbers: [6, 14, 22, 26, 43, 44],
      bonus: 31
    },
    {
      numbers: [1, 5, 27, 30, 34, 36],
      bonus: 40
    },
    {
      numbers: [6, 22, 28, 32, 34, 40],
      bonus: 26
    },
    {
      numbers: [1, 4, 10, 17, 31, 42],
      bonus: 2
    },
    {
      numbers: [3, 4, 12, 20, 24, 34],
      bonus: 41
    },
    {
      numbers: [5, 20, 23, 27, 35, 40],
      bonus: 43
    },
    {
      numbers: [13, 14, 24, 32, 39, 41],
      bonus: 3
    },
    {
      numbers: [19, 20, 23, 24, 43, 44],
      bonus: 13
    },
    {
      numbers: [4, 13, 20, 29, 36, 41],
      bonus: 39
    },
    {
      numbers: [4, 13, 22, 27, 34, 44],
      bonus: 6
    },
    {
      numbers: [5, 7, 8, 15, 30, 43],
      bonus: 22
    },
    {
      numbers: [20, 22, 26, 33, 36, 37],
      bonus: 25
    },
    {
      numbers: [22, 27, 31, 35, 37, 40],
      bonus: 42
    },
    {
      numbers: [8, 17, 35, 36, 39, 42],
      bonus: 4
    },
    {
      numbers: [2, 7, 26, 29, 40, 43],
      bonus: 42
    },
    {
      numbers: [2, 4, 8, 15, 20, 27],
      bonus: 11
    },
    {
      numbers: [2, 8, 17, 30, 31, 38],
      bonus: 25
    },
    {
      numbers: [4, 8, 25, 27, 37, 41],
      bonus: 21
    },
    {
      numbers: [1, 2, 23, 25, 38, 40],
      bonus: 43
    },
    {
      numbers: [17, 22, 26, 27, 36, 39],
      bonus: 20
    },
    {
      numbers: [1, 3, 27, 28, 32, 45],
      bonus: 11
    },
    {
      numbers: [12, 15, 19, 22, 28, 34],
      bonus: 5
    },
    {
      numbers: [1, 10, 16, 24, 25, 35],
      bonus: 43
    },
    {
      numbers: [3, 4, 23, 29, 40, 41],
      bonus: 20
    },
    {
      numbers: [3, 5, 10, 17, 30, 31],
      bonus: 16
    },
    {
      numbers: [8, 23, 25, 27, 35, 44],
      bonus: 24
    },
    {
      numbers: [18, 29, 30, 37, 39, 43],
      bonus: 8
    },
    {
      numbers: [14, 25, 29, 32, 33, 45],
      bonus: 37
    },
    {
      numbers: [9, 12, 13, 15, 37, 38],
      bonus: 27
    },
    {
      numbers: [1, 9, 14, 16, 21, 29],
      bonus: 3
    },
    {
      numbers: [4, 13, 18, 31, 33, 45],
      bonus: 43
    },
    {
      numbers: [8, 13, 20, 22, 23, 36],
      bonus: 34
    },
    {
      numbers: [16, 25, 26, 31, 36, 43],
      bonus: 44
    },
    {
      numbers: [6, 13, 29, 37, 39, 41],
      bonus: 43
    },
    {
      numbers: [10, 16, 20, 39, 41, 42],
      bonus: 27
    },
    {
      numbers: [4, 21, 22, 34, 37, 38],
      bonus: 33
    },
    {
      numbers: [8, 13, 15, 28, 37, 43],
      bonus: 17
    },
    {
      numbers: [2, 12, 14, 17, 24, 40],
      bonus: 39
    },
    {
      numbers: [4, 10, 13, 23, 32, 44],
      bonus: 20
    },
    {
      numbers: [1, 8, 11, 13, 22, 38],
      bonus: 31
    },
    {
      numbers: [6, 12, 15, 34, 42, 44],
      bonus: 4
    },
    {
      numbers: [23, 29, 31, 33, 34, 44],
      bonus: 40
    },
    {
      numbers: [3, 20, 24, 32, 37, 45],
      bonus: 4
    },
    {
      numbers: [11, 18, 26, 31, 37, 40],
      bonus: 43
    },
    {
      numbers: [8, 11, 28, 30, 43, 45],
      bonus: 41
    },
    {
      numbers: [4, 6, 10, 14, 25, 40],
      bonus: 12
    },
    {
      numbers: [4, 9, 10, 32, 36, 40],
      bonus: 18
    },
    {
      numbers: [8, 10, 18, 23, 27, 40],
      bonus: 33
    },
    {
      numbers: [1, 7, 12, 18, 23, 27],
      bonus: 44
    },
    {
      numbers: [4, 19, 20, 26, 30, 35],
      bonus: 24
    },
    {
      numbers: [13, 25, 27, 34, 38, 41],
      bonus: 10
    },
    {
      numbers: [12, 24, 33, 38, 40, 42],
      bonus: 30
    },
    {
      numbers: [8, 10, 18, 30, 32, 34],
      bonus: 27
    },
    {
      numbers: [12, 15, 20, 24, 30, 38],
      bonus: 29
    },
    {
      numbers: [6, 14, 19, 21, 23, 31],
      bonus: 13
    },
    {
      numbers: [3, 10, 20, 26, 35, 43],
      bonus: 36
    },
    {
      numbers: [3, 7, 13, 27, 40, 41],
      bonus: 36
    },
    {
      numbers: [2, 7, 8, 9, 17, 33],
      bonus: 34
    },
    {
      numbers: [1, 11, 12, 14, 26, 35],
      bonus: 6
    },
    {
      numbers: [13, 20, 21, 30, 39, 45],
      bonus: 32
    },
    {
      numbers: [11, 13, 23, 35, 43, 45],
      bonus: 17
    },
    {
      numbers: [4, 6, 10, 19, 20, 44],
      bonus: 14
    },
    {
      numbers: [25, 27, 29, 36, 38, 40],
      bonus: 41
    },
    {
      numbers: [1, 23, 28, 30, 34, 35],
      bonus: 9
    },
    {
      numbers: [10, 22, 28, 34, 36, 44],
      bonus: 2
    },
    {
      numbers: [17, 20, 30, 31, 37, 40],
      bonus: 25
    },
    {
      numbers: [6, 12, 20, 26, 29, 38],
      bonus: 45
    },
    {
      numbers: [11, 16, 29, 38, 41, 44],
      bonus: 21
    },
    {
      numbers: [9, 14, 20, 22, 33, 34],
      bonus: 28
    },
    {
      numbers: [8, 16, 26, 30, 38, 45],
      bonus: 42
    },
    {
      numbers: [3, 13, 20, 24, 33, 37],
      bonus: 35
    },
    {
      numbers: [19, 23, 29, 33, 35, 43],
      bonus: 27
    },
    {
      numbers: [2, 3, 5, 11, 27, 39],
      bonus: 33
    },
    {
      numbers: [18, 22, 25, 31, 38, 45],
      bonus: 6
    },
    {
      numbers: [1, 3, 16, 18, 30, 34],
      bonus: 44
    },
    {
      numbers: [3, 23, 28, 34, 39, 42],
      bonus: 16
    },
    {
      numbers: [12, 16, 19, 22, 37, 40],
      bonus: 8
    },
    {
      numbers: [6, 7, 15, 24, 28, 30],
      bonus: 21
    },
    {
      numbers: [4, 17, 18, 27, 39, 43],
      bonus: 19
    },
    {
      numbers: [8, 10, 14, 27, 33, 38],
      bonus: 3
    },
    {
      numbers: [10, 11, 26, 31, 34, 44],
      bonus: 30
    },
    {
      numbers: [1, 17, 27, 28, 29, 40],
      bonus: 5
    },
    {
      numbers: [8, 15, 19, 21, 34, 44],
      bonus: 12
    },
    {
      numbers: [6, 11, 26, 27, 28, 44],
      bonus: 30
    },
    {
      numbers: [4, 9, 10, 29, 31, 34],
      bonus: 27
    },
    {
      numbers: [2, 11, 13, 14, 28, 30],
      bonus: 7
    },
    {
      numbers: [11, 13, 15, 26, 28, 34],
      bonus: 31
    },
    {
      numbers: [4, 5, 14, 20, 22, 43],
      bonus: 44
    },
    {
      numbers: [5, 6, 8, 11, 22, 26],
      bonus: 44
    },
    {
      numbers: [7, 17, 20, 26, 30, 40],
      bonus: 24
    },
    {
      numbers: [2, 14, 15, 22, 23, 44],
      bonus: 43
    },
    {
      numbers: [2, 9, 15, 23, 34, 40],
      bonus: 3
    },
    {
      numbers: [4, 7, 39, 41, 42, 45],
      bonus: 40
    },
    {
      numbers: [11, 14, 22, 35, 37, 39],
      bonus: 5
    },
    {
      numbers: [1, 3, 18, 32, 40, 41],
      bonus: 16
    },
    {
      numbers: [6, 9, 21, 31, 32, 40],
      bonus: 38
    },
    {
      numbers: [9, 20, 21, 22, 30, 37],
      bonus: 16
    },
    {
      numbers: [6, 7, 13, 16, 24, 25],
      bonus: 1
    },
    {
      numbers: [7, 12, 21, 24, 27, 36],
      bonus: 45
    },
    {
      numbers: [1, 2, 10, 25, 26, 44],
      bonus: 4
    },
    {
      numbers: [5, 20, 21, 24, 33, 40],
      bonus: 36
    },
    {
      numbers: [10, 14, 22, 24, 28, 37],
      bonus: 26
    },
    {
      numbers: [5, 9, 15, 19, 22, 36],
      bonus: 32
    },
    {
      numbers: [6, 12, 18, 31, 38, 43],
      bonus: 9
    },
    {
      numbers: [9, 21, 27, 34, 41, 43],
      bonus: 2
    },
    {
      numbers: [1, 2, 9, 17, 19, 42],
      bonus: 20
    },
    {
      numbers: [10, 15, 20, 23, 42, 44],
      bonus: 7
    },
    {
      numbers: [12, 13, 17, 22, 25, 33],
      bonus: 8
    },
    {
      numbers: [18, 20, 31, 34, 40, 45],
      bonus: 30
    },
    {
      numbers: [11, 15, 20, 26, 31, 35],
      bonus: 7
    },
    {
      numbers: [1, 13, 20, 22, 25, 28],
      bonus: 15
    },
    {
      numbers: [9, 16, 28, 40, 41, 43],
      bonus: 21
    },
    {
      numbers: [1, 3, 7, 8, 24, 42],
      bonus: 43
    },
    {
      numbers: [10, 11, 18, 22, 28, 39],
      bonus: 30
    },
    {
      numbers: [16, 17, 28, 37, 39, 40],
      bonus: 15
    },
    {
      numbers: [7, 16, 18, 20, 23, 26],
      bonus: 3
    },
    {
      numbers: [1, 8, 9, 17, 29, 32],
      bonus: 45
    },
    {
      numbers: [1, 26, 31, 34, 40, 43],
      bonus: 20
    },
    {
      numbers: [4, 7, 10, 19, 31, 40],
      bonus: 26
    },
    {
      numbers: [7, 12, 19, 21, 29, 32],
      bonus: 9
    },
    {
      numbers: [11, 22, 24, 32, 36, 38],
      bonus: 7
    },
    {
      numbers: [4, 15, 28, 33, 37, 40],
      bonus: 25
    },
    {
      numbers: [10, 15, 22, 24, 27, 42],
      bonus: 19
    },
    {
      numbers: [1, 5, 10, 12, 16, 20],
      bonus: 11
    },
    {
      numbers: [1, 2, 8, 17, 26, 37],
      bonus: 27
    },
    {
      numbers: [6, 10, 22, 31, 35, 40],
      bonus: 19
    },
    {
      numbers: [5, 22, 29, 31, 34, 39],
      bonus: 43
    },
    {
      numbers: [6, 22, 29, 37, 43, 45],
      bonus: 23
    },
    {
      numbers: [1, 11, 13, 24, 28, 40],
      bonus: 7
    },
    {
      numbers: [4, 8, 19, 25, 27, 45],
      bonus: 7
    },
    {
      numbers: [11, 13, 15, 17, 25, 34],
      bonus: 26
    },
    {
      numbers: [15, 26, 37, 42, 43, 45],
      bonus: 9
    },
    {
      numbers: [8, 11, 14, 16, 18, 21],
      bonus: 13
    },
    {
      numbers: [7, 9, 15, 26, 27, 42],
      bonus: 18
    },
    {
      numbers: [16, 18, 24, 42, 44, 45],
      bonus: 17
    },
    {
      numbers: [17, 20, 35, 36, 41, 43],
      bonus: 21
    },
    {
      numbers: [11, 21, 24, 30, 39, 45],
      bonus: 26
    },
    {
      numbers: [3, 22, 25, 29, 32, 44],
      bonus: 19
    },
    {
      numbers: [5, 12, 19, 26, 27, 44],
      bonus: 38
    },
    {
      numbers: [5, 15, 21, 25, 26, 30],
      bonus: 31
    },
    {
      numbers: [2, 5, 7, 14, 16, 40],
      bonus: 4
    },
    {
      numbers: [11, 12, 14, 21, 32, 38],
      bonus: 6
    },
    {
      numbers: [2, 3, 22, 27, 30, 40],
      bonus: 29
    },
    {
      numbers: [5, 10, 16, 24, 27, 35],
      bonus: 33
    },
    {
      numbers: [4, 16, 23, 25, 35, 40],
      bonus: 27
    },
    {
      numbers: [1, 10, 19, 20, 24, 40],
      bonus: 23
    },
    {
      numbers: [1, 9, 10, 12, 21, 40],
      bonus: 37
    },
    {
      numbers: [10, 14, 18, 21, 36, 37],
      bonus: 5
    },
    {
      numbers: [2, 8, 14, 25, 29, 45],
      bonus: 24
    },
    {
      numbers: [5, 8, 29, 30, 35, 44],
      bonus: 38
    },
    {
      numbers: [14, 19, 36, 43, 44, 45],
      bonus: 1
    },
    {
      numbers: [11, 16, 19, 22, 29, 36],
      bonus: 26
    },
    {
      numbers: [5, 16, 17, 20, 26, 41],
      bonus: 24
    },
    {
      numbers: [5, 25, 27, 29, 34, 36],
      bonus: 33
    },
    {
      numbers: [1, 8, 18, 24, 29, 33],
      bonus: 35
    },
    {
      numbers: [5, 13, 14, 20, 24, 25],
      bonus: 36
    },
    {
      numbers: [3, 14, 17, 20, 24, 31],
      bonus: 34
    },
    {
      numbers: [3, 8, 13, 27, 32, 42],
      bonus: 10
    },
    {
      numbers: [5, 13, 14, 22, 44, 45],
      bonus: 33
    },
    {
      numbers: [15, 20, 23, 29, 39, 42],
      bonus: 2
    },
    {
      numbers: [1, 2, 15, 28, 34, 45],
      bonus: 38
    },
    {
      numbers: [1, 10, 17, 29, 31, 43],
      bonus: 15
    },
    {
      numbers: [1, 13, 14, 33, 34, 43],
      bonus: 25
    },
    {
      numbers: [1, 8, 19, 34, 39, 43],
      bonus: 41
    },
    {
      numbers: [18, 24, 26, 29, 34, 38],
      bonus: 32
    },
    {
      numbers: [6, 8, 14, 21, 30, 37],
      bonus: 45
    },
    {
      numbers: [2, 13, 34, 38, 42, 45],
      bonus: 16
    },
    {
      numbers: [1, 5, 14, 18, 32, 37],
      bonus: 4
    },
    {
      numbers: [3, 5, 20, 34, 35, 44],
      bonus: 16
    },
    {
      numbers: [5, 9, 16, 23, 26, 45],
      bonus: 21
    },
    {
      numbers: [13, 15, 21, 29, 39, 43],
      bonus: 33
    },
    {
      numbers: [5, 14, 27, 30, 39, 43],
      bonus: 35
    },
    {
      numbers: [16, 17, 34, 36, 42, 45],
      bonus: 3
    },
    {
      numbers: [4, 9, 14, 26, 31, 44],
      bonus: 39
    },
    {
      numbers: [3, 4, 16, 17, 19, 20],
      bonus: 23
    },
    {
      numbers: [9, 17, 19, 30, 35, 42],
      bonus: 4
    },
    {
      numbers: [1, 6, 9, 16, 17, 28],
      bonus: 24
    },
    {
      numbers: [6, 12, 13, 17, 32, 44],
      bonus: 24
    },
    {
      numbers: [16, 23, 25, 33, 36, 39],
      bonus: 40
    },
    {
      numbers: [7, 17, 20, 32, 44, 45],
      bonus: 33
    },
    {
      numbers: [2, 4, 21, 25, 33, 36],
      bonus: 17
    },
    {
      numbers: [10, 14, 15, 32, 36, 42],
      bonus: 3
    },
    {
      numbers: [9, 18, 29, 32, 38, 43],
      bonus: 20
    },
    {
      numbers: [12, 18, 20, 21, 25, 34],
      bonus: 42
    },
    {
      numbers: [16, 19, 23, 25, 41, 45],
      bonus: 3
    },
    {
      numbers: [5, 8, 22, 28, 33, 42],
      bonus: 37
    },
    {
      numbers: [2, 17, 19, 20, 34, 45],
      bonus: 21
    },
    {
      numbers: [3, 10, 11, 22, 36, 39],
      bonus: 8
    },
    {
      numbers: [10, 11, 21, 27, 31, 39],
      bonus: 43
    },
    {
      numbers: [1, 13, 33, 35, 43, 45],
      bonus: 23
    },
    {
      numbers: [15, 17, 19, 34, 38, 41],
      bonus: 2
    },
    {
      numbers: [9, 17, 34, 35, 43, 45],
      bonus: 2
    },
    {
      numbers: [2, 3, 5, 6, 12, 20],
      bonus: 25
    },
    {
      numbers: [4, 12, 24, 27, 28, 32],
      bonus: 10
    },
    {
      numbers: [1, 5, 19, 28, 34, 41],
      bonus: 16
    },
    {
      numbers: [1, 2, 5, 11, 18, 36],
      bonus: 22
    },
    {
      numbers: [14, 15, 17, 19, 37, 45],
      bonus: 40
    },
    {
      numbers: [5, 15, 21, 23, 25, 45],
      bonus: 12
    },
    {
      numbers: [4, 18, 23, 30, 34, 41],
      bonus: 19
    },
    {
      numbers: [7, 8, 18, 21, 23, 39],
      bonus: 9
    },
    {
      numbers: [4, 10, 16, 26, 33, 41],
      bonus: 38
    },
    {
      numbers: [2, 14, 17, 30, 38, 45],
      bonus: 43
    },
    {
      numbers: [13, 19, 20, 32, 38, 42],
      bonus: 4
    },
    {
      numbers: [7, 11, 13, 33, 37, 43],
      bonus: 26
    },
    {
      numbers: [7, 9, 10, 12, 26, 38],
      bonus: 39
    },
    {
      numbers: [1, 3, 20, 25, 36, 45],
      bonus: 24
    },
    {
      numbers: [5, 9, 27, 29, 37, 40],
      bonus: 19
    },
    {
      numbers: [6, 11, 19, 20, 28, 32],
      bonus: 34
    },
    {
      numbers: [3, 8, 15, 27, 30, 45],
      bonus: 44
    },
    {
      numbers: [1, 4, 12, 16, 18, 38],
      bonus: 8
    },
    {
      numbers: [6, 10, 17, 30, 37, 38],
      bonus: 40
    },
    {
      numbers: [1, 9, 17, 21, 29, 33],
      bonus: 24
    },
    {
      numbers: [17, 18, 31, 32, 33, 34],
      bonus: 10
    },
    {
      numbers: [3, 7, 8, 18, 20, 42],
      bonus: 45
    },
    {
      numbers: [8, 13, 18, 32, 39, 45],
      bonus: 7
    },
    {
      numbers: [3, 14, 33, 37, 38, 42],
      bonus: 10
    },
    {
      numbers: [1, 12, 17, 28, 35, 41],
      bonus: 10
    },
    {
      numbers: [6, 12, 24, 27, 35, 37],
      bonus: 41
    },
    {
      numbers: [1, 15, 19, 40, 42, 44],
      bonus: 17
    },
    {
      numbers: [13, 33, 37, 40, 41, 45],
      bonus: 2
    },
    {
      numbers: [2, 7, 15, 24, 30, 45],
      bonus: 28
    },
    {
      numbers: [6, 8, 18, 31, 38, 45],
      bonus: 42
    },
    {
      numbers: [2, 5, 10, 18, 31, 32],
      bonus: 30
    },
    {
      numbers: [1, 3, 4, 6, 14, 41],
      bonus: 12
    },
    {
      numbers: [10, 11, 23, 24, 36, 37],
      bonus: 35
    },
    {
      numbers: [7, 16, 31, 36, 37, 38],
      bonus: 11
    },
    {
      numbers: [3, 11, 37, 39, 41, 43],
      bonus: 13
    },
    {
      numbers: [10, 12, 13, 15, 25, 29],
      bonus: 20
    },
    {
      numbers: [4, 15, 21, 33, 39, 41],
      bonus: 25
    },
    {
      numbers: [14, 19, 20, 35, 38, 40],
      bonus: 26
    },
    {
      numbers: [13, 14, 15, 26, 35, 39],
      bonus: 25
    },
    {
      numbers: [1, 8, 24, 31, 34, 44],
      bonus: 6
    },
    {
      numbers: [7, 9, 12, 27, 39, 43],
      bonus: 28
    },
    {
      numbers: [3, 8, 9, 27, 29, 40],
      bonus: 36
    },
    {
      numbers: [5, 9, 12, 20, 21, 26],
      bonus: 27
    },
    {
      numbers: [5, 18, 20, 36, 42, 43],
      bonus: 32
    },
    {
      numbers: [3, 10, 19, 24, 32, 45],
      bonus: 12
    },
    {
      numbers: [7, 8, 24, 34, 36, 41],
      bonus: 1
    },
    {
      numbers: [3, 4, 9, 11, 22, 42],
      bonus: 37
    },
    {
      numbers: [5, 9, 34, 37, 38, 39],
      bonus: 12
    },
    {
      numbers: [9, 16, 27, 36, 41, 44],
      bonus: 5
    },
    {
      numbers: [1, 27, 28, 32, 37, 40],
      bonus: 18
    },
    {
      numbers: [9, 12, 24, 25, 29, 31],
      bonus: 36
    },
    {
      numbers: [6, 11, 16, 18, 31, 43],
      bonus: 2
    },
    {
      numbers: [7, 12, 15, 24, 37, 40],
      bonus: 43
    },
    {
      numbers: [4, 5, 14, 35, 42, 45],
      bonus: 34
    },
    {
      numbers: [14, 27, 30, 31, 38, 40],
      bonus: 17
    },
    {
      numbers: [6, 13, 27, 31, 32, 37],
      bonus: 4
    },
    {
      numbers: [4, 11, 14, 21, 23, 43],
      bonus: 32
    },
    {
      numbers: [1, 5, 6, 24, 27, 42],
      bonus: 32
    },
    {
      numbers: [1, 5, 19, 20, 24, 30],
      bonus: 27
    },
    {
      numbers: [8, 19, 25, 31, 34, 36],
      bonus: 33
    },
    {
      numbers: [14, 23, 26, 31, 39, 45],
      bonus: 28
    },
    {
      numbers: [6, 7, 19, 25, 28, 38],
      bonus: 45
    },
    {
      numbers: [19, 23, 30, 37, 43, 45],
      bonus: 38
    },
    {
      numbers: [3, 8, 27, 31, 41, 44],
      bonus: 11
    },
    {
      numbers: [3, 8, 17, 23, 38, 45],
      bonus: 13
    },
    {
      numbers: [12, 15, 28, 36, 39, 40],
      bonus: 13
    },
    {
      numbers: [13, 18, 21, 23, 26, 39],
      bonus: 15
    },
    {
      numbers: [9, 11, 27, 31, 32, 38],
      bonus: 22
    },
    {
      numbers: [13, 16, 25, 36, 37, 38],
      bonus: 19
    },
    {
      numbers: [2, 12, 17, 19, 28, 42],
      bonus: 34
    },
    {
      numbers: [4, 19, 20, 21, 32, 34],
      bonus: 43
    },
    {
      numbers: [2, 16, 24, 27, 28, 35],
      bonus: 21
    },
    {
      numbers: [6, 10, 16, 40, 41, 43],
      bonus: 21
    },
    {
      numbers: [11, 15, 24, 39, 41, 44],
      bonus: 7
    },
    {
      numbers: [2, 4, 15, 28, 31, 34],
      bonus: 35
    },
    {
      numbers: [1, 11, 17, 21, 24, 44],
      bonus: 33
    },
    {
      numbers: [1, 4, 8, 13, 37, 39],
      bonus: 7
    },
    {
      numbers: [21, 22, 26, 27, 31, 37],
      bonus: 8
    },
    {
      numbers: [13, 21, 22, 24, 26, 37],
      bonus: 4
    },
    {
      numbers: [4, 6, 13, 17, 28, 40],
      bonus: 39
    },
    {
      numbers: [8, 9, 10, 12, 24, 44],
      bonus: 35
    },
    {
      numbers: [5, 10, 19, 31, 44, 45],
      bonus: 27
    },
    {
      numbers: [5, 11, 14, 29, 32, 33],
      bonus: 12
    },
    {
      numbers: [4, 5, 9, 11, 23, 38],
      bonus: 35
    },
    {
      numbers: [17, 25, 35, 36, 39, 44],
      bonus: 23
    },
    {
      numbers: [4, 5, 15, 16, 22, 42],
      bonus: 2
    },
    {
      numbers: [2, 6, 8, 14, 21, 22],
      bonus: 34
    },
    {
      numbers: [5, 11, 13, 19, 31, 36],
      bonus: 7
    },
    {
      numbers: [4, 19, 26, 27, 30, 42],
      bonus: 7
    },
    {
      numbers: [1, 3, 18, 20, 26, 27],
      bonus: 38
    },
    {
      numbers: [5, 7, 28, 29, 39, 43],
      bonus: 44
    },
    {
      numbers: [2, 20, 33, 35, 37, 40],
      bonus: 10
    },
    {
      numbers: [5, 11, 19, 21, 34, 43],
      bonus: 31
    },
    {
      numbers: [4, 11, 20, 26, 35, 37],
      bonus: 16
    },
    {
      numbers: [1, 8, 14, 18, 29, 44],
      bonus: 20
    },
    {
      numbers: [16, 20, 27, 33, 35, 39],
      bonus: 38
    },
    {
      numbers: [7, 16, 17, 33, 36, 40],
      bonus: 1
    },
    {
      numbers: [2, 3, 7, 15, 43, 44],
      bonus: 4
    },
    {
      numbers: [5, 7, 20, 25, 28, 37],
      bonus: 32
    },
    {
      numbers: [2, 3, 4, 5, 20, 24],
      bonus: 42
    },
    {
      numbers: [11, 12, 18, 21, 31, 38],
      bonus: 8
    },
    {
      numbers: [12, 13, 17, 20, 33, 41],
      bonus: 8
    },
    {
      numbers: [10, 19, 22, 23, 25, 37],
      bonus: 39
    },
    {
      numbers: [2, 7, 18, 20, 24, 33],
      bonus: 37
    },
    {
      numbers: [14, 25, 31, 34, 40, 44],
      bonus: 24
    },
    {
      numbers: [3, 11, 14, 31, 32, 37],
      bonus: 38
    },
    {
      numbers: [1, 2, 3, 15, 20, 25],
      bonus: 43
    },
    {
      numbers: [1, 3, 21, 29, 35, 37],
      bonus: 30
    },
    {
      numbers: [3, 12, 14, 35, 40, 45],
      bonus: 5
    },
    {
      numbers: [1, 3, 11, 24, 30, 32],
      bonus: 7
    },
    {
      numbers: [12, 14, 27, 33, 39, 44],
      bonus: 17
    },
    {
      numbers: [3, 11, 24, 38, 39, 44],
      bonus: 26
    },
    {
      numbers: [5, 6, 13, 14, 17, 20],
      bonus: 7
    },
    {
      numbers: [14, 21, 22, 25, 30, 36],
      bonus: 43
    },
    {
      numbers: [12, 19, 20, 25, 41, 45],
      bonus: 2
    },
    {
      numbers: [7, 12, 16, 34, 42, 45],
      bonus: 4
    },
    {
      numbers: [35, 36, 37, 41, 44, 45],
      bonus: 30
    },
    {
      numbers: [7, 10, 19, 22, 35, 40],
      bonus: 31
    },
    {
      numbers: [15, 20, 23, 26, 39, 44],
      bonus: 28
    },
    {
      numbers: [6, 14, 18, 26, 36, 39],
      bonus: 13
    },
    {
      numbers: [4, 8, 11, 18, 37, 45],
      bonus: 33
    },
    {
      numbers: [5, 6, 24, 25, 32, 37],
      bonus: 8
    },
    {
      numbers: [8, 14, 18, 30, 31, 44],
      bonus: 15
    },
    {
      numbers: [8, 14, 32, 35, 37, 45],
      bonus: 28
    },
    {
      numbers: [19, 24, 27, 30, 31, 34],
      bonus: 36
    },
    {
      numbers: [1, 2, 8, 18, 29, 38],
      bonus: 42
    },
    {
      numbers: [4, 10, 14, 19, 21, 45],
      bonus: 9
    },
    {
      numbers: [1, 2, 4, 8, 19, 38],
      bonus: 14
    },
    {
      numbers: [1, 2, 6, 16, 20, 33],
      bonus: 41
    },
    {
      numbers: [2, 18, 24, 34, 40, 42],
      bonus: 5
    },
    {
      numbers: [13, 15, 27, 29, 34, 40],
      bonus: 35
    },
    {
      numbers: [14, 21, 23, 32, 40, 45],
      bonus: 44
    },
    {
      numbers: [2, 15, 20, 21, 29, 34],
      bonus: 22
    },
    {
      numbers: [5, 9, 17, 25, 39, 43],
      bonus: 32
    },
    {
      numbers: [1, 5, 11, 12, 18, 23],
      bonus: 9
    },
    {
      numbers: [1, 10, 13, 16, 37, 43],
      bonus: 6
    },
    {
      numbers: [4, 17, 30, 32, 33, 34],
      bonus: 15
    },
    {
      numbers: [19, 26, 28, 31, 33, 36],
      bonus: 17
    },
    {
      numbers: [13, 14, 18, 22, 35, 39],
      bonus: 16
    },
    {
      numbers: [3, 9, 24, 30, 33, 34],
      bonus: 18
    },
    {
      numbers: [4, 19, 21, 24, 26, 41],
      bonus: 35
    },
    {
      numbers: [4, 16, 25, 29, 34, 35],
      bonus: 1
    },
    {
      numbers: [2, 11, 13, 15, 31, 42],
      bonus: 10
    },
    {
      numbers: [16, 27, 35, 37, 43, 45],
      bonus: 19
    },
    {
      numbers: [3, 10, 31, 40, 42, 43],
      bonus: 30
    },
    {
      numbers: [24, 27, 28, 30, 36, 39],
      bonus: 4
    },
    {
      numbers: [9, 12, 27, 36, 39, 45],
      bonus: 14
    },
    {
      numbers: [5, 13, 18, 19, 22, 42],
      bonus: 31
    },
    {
      numbers: [6, 9, 10, 11, 39, 41],
      bonus: 27
    },
    {
      numbers: [7, 11, 26, 28, 29, 44],
      bonus: 16
    },
    {
      numbers: [1, 5, 21, 25, 38, 41],
      bonus: 24
    },
    {
      numbers: [22, 34, 36, 40, 42, 45],
      bonus: 44
    },
    {
      numbers: [3, 7, 8, 34, 39, 41],
      bonus: 1
    },
    {
      numbers: [1, 18, 30, 41, 42, 43],
      bonus: 32
    },
    {
      numbers: [4, 9, 13, 18, 21, 34],
      bonus: 7
    },
    {
      numbers: [19, 26, 30, 33, 35, 39],
      bonus: 37
    },
    {
      numbers: [5, 18, 28, 30, 42, 45],
      bonus: 2
    },
    {
      numbers: [16, 19, 20, 32, 33, 41],
      bonus: 4
    },
    {
      numbers: [6, 19, 21, 35, 40, 45],
      bonus: 20
    },
    {
      numbers: [3, 8, 11, 12, 13, 36],
      bonus: 33
    },
    {
      numbers: [1, 5, 13, 26, 29, 34],
      bonus: 43
    },
    {
      numbers: [1, 2, 10, 13, 18, 19],
      bonus: 15
    },
    {
      numbers: [2, 18, 25, 28, 37, 39],
      bonus: 16
    },
    {
      numbers: [2, 11, 21, 34, 41, 42],
      bonus: 27
    },
    {
      numbers: [21, 25, 33, 34, 35, 36],
      bonus: 17
    },
    {
      numbers: [4, 6, 13, 21, 40, 42],
      bonus: 36
    },
    {
      numbers: [2, 19, 27, 35, 41, 42],
      bonus: 25
    },
    {
      numbers: [2, 3, 13, 20, 27, 44],
      bonus: 9
    },
    {
      numbers: [4, 15, 17, 26, 36, 37],
      bonus: 43
    },
    {
      numbers: [26, 27, 28, 42, 43, 45],
      bonus: 8
    },
    {
      numbers: [12, 16, 30, 34, 40, 44],
      bonus: 19
    },
    {
      numbers: [8, 12, 29, 31, 42, 43],
      bonus: 2
    },
    {
      numbers: [3, 13, 17, 18, 19, 28],
      bonus: 8
    },
    {
      numbers: [9, 11, 15, 20, 28, 43],
      bonus: 13
    },
    {
      numbers: [10, 11, 27, 28, 37, 39],
      bonus: 19
    },
    {
      numbers: [7, 9, 20, 25, 36, 39],
      bonus: 15
    },
    {
      numbers: [2, 16, 30, 36, 41, 42],
      bonus: 11
    },
    {
      numbers: [6, 14, 22, 28, 35, 39],
      bonus: 16
    },
    {
      numbers: [3, 12, 20, 23, 31, 35],
      bonus: 43
    },
    {
      numbers: [4, 7, 15, 18, 23, 26],
      bonus: 13
    },
    {
      numbers: [3, 17, 23, 34, 41, 45],
      bonus: 43
    },
    {
      numbers: [8, 10, 11, 14, 15, 21],
      bonus: 37
    },
    {
      numbers: [7, 19, 24, 27, 42, 45],
      bonus: 31
    },
    {
      numbers: [19, 23, 25, 28, 38, 42],
      bonus: 17
    },
    {
      numbers: [12, 30, 34, 36, 37, 45],
      bonus: 39
    },
    {
      numbers: [3, 5, 10, 29, 32, 43],
      bonus: 35
    },
    {
      numbers: [7, 20, 22, 27, 40, 43],
      bonus: 1
    },
    {
      numbers: [2, 8, 32, 33, 35, 36],
      bonus: 18
    },
    {
      numbers: [4, 16, 23, 25, 29, 42],
      bonus: 1
    },
    {
      numbers: [7, 17, 18, 28, 30, 45],
      bonus: 27
    },
    {
      numbers: [1, 11, 16, 17, 36, 40],
      bonus: 8
    },
    {
      numbers: [12, 28, 30, 34, 38, 43],
      bonus: 9
    },
    {
      numbers: [4, 6, 10, 11, 32, 37],
      bonus: 30
    },
    {
      numbers: [3, 11, 13, 14, 17, 21],
      bonus: 38
    },
    {
      numbers: [3, 4, 10, 17, 19, 22],
      bonus: 38
    },
    {
      numbers: [5, 10, 22, 34, 36, 44],
      bonus: 35
    },
    {
      numbers: [2, 4, 25, 31, 34, 37],
      bonus: 17
    },
    {
      numbers: [1, 2, 6, 9, 25, 28],
      bonus: 31
    },
    {
      numbers: [11, 14, 19, 26, 28, 41],
      bonus: 2
    },
    {
      numbers: [4, 9, 28, 33, 36, 45],
      bonus: 26
    },
    {
      numbers: [26, 29, 30, 33, 41, 42],
      bonus: 43
    },
    {
      numbers: [7, 18, 31, 33, 36, 40],
      bonus: 27
    },
    {
      numbers: [7, 20, 22, 23, 29, 43],
      bonus: 1
    },
    {
      numbers: [1, 5, 34, 36, 42, 44],
      bonus: 33
    },
    {
      numbers: [7, 18, 22, 23, 29, 44],
      bonus: 12
    },
    {
      numbers: [1, 4, 5, 6, 9, 31],
      bonus: 17
    },
    {
      numbers: [4, 10, 12, 22, 24, 33],
      bonus: 29
    },
    {
      numbers: [8, 10, 20, 34, 41, 45],
      bonus: 28
    },
    {
      numbers: [17, 32, 33, 34, 42, 44],
      bonus: 35
    },
    {
      numbers: [5, 14, 15, 27, 30, 45],
      bonus: 10
    },
    {
      numbers: [17, 22, 24, 26, 35, 40],
      bonus: 42
    },
    {
      numbers: [1, 3, 17, 32, 35, 45],
      bonus: 8
    },
    {
      numbers: [1, 7, 11, 23, 37, 42],
      bonus: 6
    },
    {
      numbers: [1, 3, 10, 27, 29, 37],
      bonus: 11
    },
    {
      numbers: [6, 9, 16, 23, 24, 32],
      bonus: 43
    },
    {
      numbers: [6, 7, 14, 15, 20, 36],
      bonus: 3
    },
    {
      numbers: [1, 3, 8, 21, 22, 31],
      bonus: 20
    },
    {
      numbers: [8, 17, 27, 31, 34, 43],
      bonus: 14
    },
    {
      numbers: [5, 32, 34, 40, 41, 45],
      bonus: 6
    },
    {
      numbers: [6, 22, 24, 36, 38, 44],
      bonus: 19
    },
    {
      numbers: [3, 14, 24, 33, 35, 36],
      bonus: 17
    },
    {
      numbers: [1, 21, 24, 26, 29, 42],
      bonus: 27
    },
    {
      numbers: [17, 20, 29, 35, 38, 44],
      bonus: 10
    },
    {
      numbers: [4, 26, 28, 29, 33, 40],
      bonus: 37
    },
    {
      numbers: [1, 17, 20, 24, 30, 41],
      bonus: 27
    },
    {
      numbers: [4, 12, 16, 23, 34, 43],
      bonus: 26
    },
    {
      numbers: [2, 12, 37, 39, 41, 45],
      bonus: 33
    },
    {
      numbers: [6, 8, 13, 23, 31, 36],
      bonus: 21
    },
    {
      numbers: [16, 23, 27, 34, 42, 45],
      bonus: 11
    },
    {
      numbers: [6, 10, 15, 17, 19, 34],
      bonus: 14
    },
    {
      numbers: [1, 2, 3, 14, 27, 42],
      bonus: 39
    },
    {
      numbers: [5, 7, 11, 13, 20, 33],
      bonus: 6
    },
    {
      numbers: [17, 18, 24, 25, 26, 30],
      bonus: 1
    },
    {
      numbers: [3, 12, 24, 27, 30, 32],
      bonus: 14
    },
    {
      numbers: [10, 13, 25, 29, 33, 35],
      bonus: 38
    },
    {
      numbers: [2, 18, 29, 32, 43, 44],
      bonus: 37
    },
    {
      numbers: [1, 3, 15, 22, 25, 37],
      bonus: 43
    },
    {
      numbers: [2, 5, 24, 32, 34, 44],
      bonus: 28
    },
    {
      numbers: [6, 15, 17, 18, 35, 40],
      bonus: 23
    },
    {
      numbers: [3, 12, 18, 32, 40, 43],
      bonus: 38
    },
    {
      numbers: [2, 4, 11, 17, 26, 27],
      bonus: 1
    },
    {
      numbers: [5, 9, 12, 16, 29, 41],
      bonus: 21
    },
    {
      numbers: [5, 19, 22, 25, 28, 43],
      bonus: 26
    },
    {
      numbers: [5, 8, 14, 15, 19, 39],
      bonus: 35
    },
    {
      numbers: [10, 12, 15, 16, 26, 39],
      bonus: 38
    },
    {
      numbers: [3, 7, 10, 15, 36, 38],
      bonus: 33
    },
    {
      numbers: [2, 3, 7, 17, 22, 24],
      bonus: 45
    },
    {
      numbers: [4, 25, 33, 36, 40, 43],
      bonus: 39
    },
    {
      numbers: [14, 15, 18, 21, 26, 36],
      bonus: 39
    },
    {
      numbers: [3, 20, 23, 36, 38, 40],
      bonus: 5
    },
    {
      numbers: [3, 8, 15, 27, 29, 35],
      bonus: 21
    },
    {
      numbers: [14, 15, 19, 30, 38, 43],
      bonus: 8
    },
    {
      numbers: [2, 8, 25, 36, 39, 42],
      bonus: 11
    },
    {
      numbers: [6, 29, 36, 39, 41, 45],
      bonus: 13
    },
    {
      numbers: [10, 24, 25, 33, 40, 44],
      bonus: 1
    },
    {
      numbers: [7, 10, 16, 25, 29, 44],
      bonus: 6
    },
    {
      numbers: [10, 14, 30, 31, 33, 37],
      bonus: 19
    },
    {
      numbers: [17, 21, 31, 37, 40, 44],
      bonus: 7
    },
    {
      numbers: [1, 8, 21, 27, 36, 39],
      bonus: 37
    },
    {
      numbers: [7, 8, 14, 32, 33, 39],
      bonus: 42
    },
    {
      numbers: [2, 4, 15, 16, 20, 29],
      bonus: 1
    },
    {
      numbers: [2, 3, 11, 16, 26, 44],
      bonus: 35
    },
    {
      numbers: [2, 10, 12, 15, 22, 44],
      bonus: 1
    },
    {
      numbers: [4, 7, 16, 19, 33, 40],
      bonus: 30
    },
    {
      numbers: [6, 10, 18, 26, 37, 38],
      bonus: 3
    },
    {
      numbers: [14, 17, 26, 31, 36, 45],
      bonus: 27
    },
    {
      numbers: [8, 13, 15, 23, 31, 38],
      bonus: 39
    },
    {
      numbers: [1, 10, 20, 27, 33, 35],
      bonus: 17
    },
    {
      numbers: [3, 11, 21, 30, 38, 45],
      bonus: 39
    },
    {
      numbers: [6, 31, 35, 38, 39, 44],
      bonus: 1
    },
    {
      numbers: [17, 18, 19, 21, 23, 32],
      bonus: 1
    },
    {
      numbers: [13, 20, 23, 35, 38, 43],
      bonus: 34
    },
    {
      numbers: [7, 13, 18, 19, 25, 26],
      bonus: 6
    },
    {
      numbers: [6, 7, 13, 15, 21, 43],
      bonus: 8
    },
    {
      numbers: [16, 17, 22, 30, 37, 43],
      bonus: 36
    },
    {
      numbers: [7, 27, 30, 33, 35, 37],
      bonus: 42
    },
    {
      numbers: [1, 10, 23, 26, 28, 40],
      bonus: 31
    },
    {
      numbers: [2, 3, 11, 26, 37, 43],
      bonus: 39
    },
    {
      numbers: [9, 26, 35, 37, 40, 42],
      bonus: 2
    },
    {
      numbers: [4, 7, 32, 33, 40, 41],
      bonus: 9
    },
    {
      numbers: [6, 14, 19, 25, 34, 44],
      bonus: 11
    },
    {
      numbers: [7, 9, 18, 23, 28, 35],
      bonus: 32
    },
    {
      numbers: [8, 17, 20, 35, 36, 44],
      bonus: 4
    },
    {
      numbers: [1, 5, 13, 34, 39, 40],
      bonus: 11
    },
    {
      numbers: [9, 18, 23, 25, 35, 37],
      bonus: 1
    },
    {
      numbers: [1, 20, 26, 28, 37, 43],
      bonus: 27
    },
    {
      numbers: [4, 5, 7, 18, 20, 25],
      bonus: 31
    },
    {
      numbers: [2, 4, 21, 26, 43, 44],
      bonus: 16
    },
    {
      numbers: [7, 8, 27, 29, 36, 43],
      bonus: 6
    },
    {
      numbers: [5, 13, 17, 18, 33, 42],
      bonus: 44
    },
    {
      numbers: [4, 5, 6, 8, 17, 39],
      bonus: 25
    },
    {
      numbers: [6, 12, 17, 18, 31, 32],
      bonus: 21
    },
    {
      numbers: [10, 14, 18, 20, 23, 30],
      bonus: 41
    },
    {
      numbers: [6, 30, 38, 39, 40, 43],
      bonus: 26
    },
    {
      numbers: [3, 12, 13, 19, 32, 35],
      bonus: 29
    },
    {
      numbers: [3, 4, 9, 17, 32, 37],
      bonus: 1
    },
    {
      numbers: [6, 7, 24, 37, 38, 40],
      bonus: 33
    },
    {
      numbers: [3, 4, 16, 30, 31, 37],
      bonus: 13
    },
    {
      numbers: [2, 6, 12, 31, 33, 40],
      bonus: 15
    },
    {
      numbers: [22, 23, 25, 37, 38, 42],
      bonus: 26
    },
    {
      numbers: [2, 11, 21, 25, 39, 45],
      bonus: 44
    },
    {
      numbers: [1, 7, 36, 37, 41, 42],
      bonus: 14
    },
    {
      numbers: [9, 25, 30, 33, 41, 44],
      bonus: 6
    },
    {
      numbers: [2, 4, 16, 17, 36, 39],
      bonus: 14
    },
    {
      numbers: [8, 19, 25, 34, 37, 39],
      bonus: 9
    },
    {
      numbers: [2, 9, 16, 25, 26, 40],
      bonus: 42
    },
    {
      numbers: [14, 15, 26, 27, 40, 42],
      bonus: 34
    },
    {
      numbers: [16, 24, 29, 40, 41, 42],
      bonus: 3
    },
    {
      numbers: [14, 27, 30, 31, 40, 42],
      bonus: 2
    },
    {
      numbers: [11, 16, 19, 21, 27, 31],
      bonus: 30
    },
    {
      numbers: [9, 13, 21, 25, 32, 42],
      bonus: 2
    },
    {
      numbers: [10, 23, 29, 33, 37, 40],
      bonus: 16
    }
  ];
}
