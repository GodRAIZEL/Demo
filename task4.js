function task4(side1,side2,side3){
  let semiPerimeter = (side1+side2+side3)/2;
  let area = Math.sqrt(semiPerimeter*(semiPerimeter-side1)*(semiPerimeter-side2)*(semiPerimeter-side3));
  return Math.floor(area);
}

task4(3,4,5);

module.exports={task4};