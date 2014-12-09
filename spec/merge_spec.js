var SortClass = require("../merge.js");

s = new SortClass();

describe("merge", function(){
  it("should merge two arrays", function(){
    expect(s.merge([4,5],[3,1])).toEqual([3,1,4,5]);
  });

  it("should merge two arrays of presorted numbers", function(){
    expect(s.merge([1,1],[2,3])).toEqual([1,1,2,3]);
  });

  it("should sort an array with negative numbers", function(){
    expect(s.merge([-1,2],[-3,1])).toEqual([-3,-1,1,2]);
  });

  it("should merge two arrays with the same numbers", function(){
    expect(s.merge([1,1,1],[2,2,2])).toEqual([1,1,1,2,2,2]);
  });

  it("should merge two arrays with different sizes", function(){
    expect(s.merge([9,2],[7,1,3,4,4])).toEqual([ 7, 1, 3, 4, 4, 9, 2 ] );
  });
});

describe("mergeSort", function(){
  it("should sort an array", function(){
    expect(s.mergeSort([1,3,2])).toEqual([1,2,3]);
  });

  it("should return an empty array if nothing can be sorted", function(){
    expect(s.mergeSort([])).toEqual([]);
  });

  it("should sort an array with negative numbers", function(){
    expect(s.mergeSort([-1,-3,-2])).toEqual([-3,-2,-1]);
  });
  it("should sort a large array with numbers less than 1", function(){
    expect(s.mergeSort([9,2,7,1,3,4,4,0.4,0,-1])).toEqual([-1,0,0.4, 1, 2, 3, 4, 4, 7, 9 ]);
  });
});