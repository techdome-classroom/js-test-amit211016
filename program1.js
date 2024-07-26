void mark(int[][] grid, int row, int col){
  if(row<0 || row>grid.length-1 || col<0 || col>grid[row].length-1 || grid[row][col]!='L')
    return;

    grid[row][col]='V';

    mark(grid, row, col-1); //left
    mark(grid, row, col+1); //right
    mark(grid, row-1, col); //top
    mark(grid, row+1, col); //bottom
}
const getTotalIsles = function (grid) {

  int count = 0;
  for(int i=0; i<grid.length; i++){
    for(int j=0; j<grid[i].length; j++){
      if(grid[i][j]=='L'){
        count++;
        mark(grid,i,j);
      }
    }
  }
  return count;
};

module.exports = getTotalIsles;
