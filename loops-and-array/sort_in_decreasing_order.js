let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => b - a)

alert( arr ); // 8, 5, 2, 1, -10

/*
[5,2,1,-10,8]
a=5,b=2,b-a=-3=>a sorted first
a=2,b=1,b-a=-1 => a sorted first
a=1,b=-10, b-a=-11 => a sorted first
a=-10,b=8, b-a=18 => b sorted first
[5,2,1,8,-10]
a=1, b=8, b-a=7 => b sorted first
[5,2,8,1,-10]
a=2, b=8, b-a=6 => b sorted first
[5,8,2,1,-10]
a=5, b=8, b-a=3 => b sorted first
[8,5,2,1,-10]
*/