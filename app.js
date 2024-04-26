// matrix plus
let matrix1 = [
    [2, 6, 8, 0],
    [1, 3, 5, 7],
    [2, 3, 9, 5],
  ];
  
let matrix2 = [
    [5, 8, 9, 1],
    [2, 3, 7, 3],
    [2, 5, 7, 8]
  ];

let result = [];

// nested array form me print
for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix1[i].length; j++) {
        const sum = matrix1[i][j] + matrix2[i][j];
        result[i].push(sum);
    }
}
console.log(result);
document.getElementById("print1").innerHTML = `${JSON.stringify (result)}`;

// matrix square print
let matrix4 = [
  [3, 5, 6],
  [5, 6, 9],
  [7, 3, 6] 
];
let print4 = document.querySelector("#print2");
//console.log(matrix1[0][0] ** 2);
for (let i = 0; i < matrix4.length; i++) {
   for (let j = 0; j < matrix4[i].length; j++) {
       document.write(matrix4[i][j]**2 + "<br/>");
   }
}
