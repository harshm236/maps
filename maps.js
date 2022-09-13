1.  "Problem:
You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef"

ans 
str='harsh'
str1 = new Set(str)
console.log(str1)

2."Problem:
You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

Input:
abcadeecfb

Output:
a=2
b=2
c=2
d=1
e=2
f=1"

ans
let str= 'abcadeecfb'
str1= new Set(str)
str2=new Map()
for(let i of str1)
{    let count=0
  for( let j of str)
   { if(i==j)
    count++
   }

  str2.set(i,count)
}

console.log(str2)
