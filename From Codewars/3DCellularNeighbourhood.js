//link:- https://www.codewars.com/kata/5b33fee525c2bb5753000168

 /*
 
 Given a neighbourhood type ("moore" or "von_neumann"), a MxNxK 3D matrix (list of lists of lists), a 3-tuple of coordinates and the distance, 
 return the list of neighbours of the given cell.
Order of the indices: The first index should be applied for the outer/first matrix layer. The last index for the most inner/last layer. 
coordinates = (i, j, k) should be applied like mat[i][j][k] */

//Method 01: -
 function getNeighbourhood(type, matrix, [M, N, K], distance) {
      let set = [];

      if (!matrix[M] || !matrix[M][N] || matrix[M][N][K] === undefined) {
           return [];
      }

      if (distance == 0) {
           return [];
      }

      for (let i = distance; i >= -distance; i--) {   //will push all neighbouring block in giving distance
           for (let j = distance; j >= -distance; j--) {
                for (let k = distance; k >= -distance; k--) {
                     set.push([M - i, N - j, K - k]);
                }
           }
      }

      if (type === "von_neumann") {
           //will filter for "von_neumann" condition
           set = set.filter(
                ([a, b, c]) =>
                     Math.abs(M - a) + Math.abs(N - b) + Math.abs(K - c) <=
                     distance,
           );
      }

      return set
           .filter(  //will filter repeated or non-existed element
                ([a, b, c]) =>
                     matrix[a] && matrix[a][b] && matrix[a][b][c] !== undefined,
           )
           .filter(([p, q, r]) => p != M || q != N || r != K)
           .map(([x, y, z]) => matrix[x][y][z]);
 }