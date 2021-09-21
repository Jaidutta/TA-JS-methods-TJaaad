Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentence = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Parameter: none
   - Return: string after converting all the characters to uppercase (string data type)
   - Example:
   ```js
   let str = "hello world";
   name.toUpperCase(); //"HELLO WORLD"
   let sentence = "A quick brown fox jumped over a lazy dog";
   sentence.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
   let houseName = "Starks";
   houseName.toUpperCase(); // "STARKS"
   ```
   - `toUpperCase` accepts no parameter and when called returns a string by converting all the characters in the orginal string into uppercase.
3. `toLowerCase`
   - Parameter: none
   - Return: string after converting all the characters to lowercase (string data type)
   - Example:
   ```js
   let str = "HeLLO wOrld";
   str.toLowerCase(); //"hello world"
   let sentence = "A quick Brown Fox Jumped Over a Lazy Dog";
   sentence.toLowerCase(); // "a quick brown jumped over a lazy dog"
   let houseName = "Starks";
   houseName.toLowerCase(); // "starks"
   ```
   - `toLowerCase` accepts no parameter and when called returns a string by converting all the characters in the orginal string into lowercase.
4. `trim`
   - Parameter: none
   - Return: the original string after removing white space from both ends of a string
   - Example:
   ```js
   let str = "            hello world              ";
   str.trim(); //"hello world"
   let sentence = "         A quick Brown Fox Jumped Over a Lazy Dog";
   sentence.trim(); // "A quick Brown Fox Jumped Over a Lazy Dog"
   let houseName = "Starks      ";
   houseName.trim(); // "Starks"
   ```
   - `trim` returns the original string after removing white space from both ends of a string
5. `trimEnd`
   - Parameter: none
   - Return: a string after removing white space from the end of a string
   - Example:
   ```js
   let str = "            hello world              ";
   str.trimEnd(); //"            hello world"
   let sentence = "         A quick Brown Fox Jumped Over a Lazy Dog";
   sentence.trimEnd(); // "         A quick Brown Fox Jumped Over a Lazy Dog"
   let houseName = "Starks      ";
   houseName.trimEnd(); // "Starks"
   ```
   - `trimEnd` returns a string after removing white space from the end of a string
6. `trimStart`
   - Parameter: none
   - Return: a string after removing white space from the start of a string
   - Example:
   ```js
   let str = "            hello world              ";
   str.trimStart(); //"hello world              "
   let sentance = "         A quick Brown Fox Jumped Over a Lazy Dog";
   sentance.trimStart(); // "A quick Brown Fox Jumped Over a Lazy Dog"
   let houseName = "Starks      ";
   houseName.trimStart(); // "Starks      "
   ```
   - `trimStart` returns a string after removing white space from the beginning of a string
7. `concat`

   - Parameter: one or more string
   - Return: a string after concatenating the string(s) to the calling string
   - Example:

   ```js
   let str = "hello world";
   str.concat("!, ", "How are you doing?"); //"hello world!, How are you doing?"
   let sentence = "A quick Brown Fox Jumped Over a Lazy Dog";
   sentence.concat(". Whoa!"); // "A quick Brown Fox Jumped Over a Lazy Dog. Whoa!"
   let houseName = "Starks";
   houseName.concat(" Hey", " Hello ", "Yo!"); // "Starks Hey Hello Yo!"
   ```

   - `concat` returns a string after concatenating the string(s) to the calling string

8. `endsWith`
   - Parameter:
     string: The characters to be searched for at the end of str.
     length (Optional): If provided, it is used as the length of str. If not provided, then it is the full length of the string (number data type)
   - Return: true if the string ends with the specified string and false otherwise
   - Example:
   ```js
   let str = "hello world";
   str.endsWith("orld"); // true
   let sentence = "A quick Brown Fox Jumped Over a Lazy Dog";
   sentence.endsWith(". Whoa!"); // false
   let houseName = "Starks";
   houseName.endsWith(" Hey", 10); // "Starks Hey Hello Yo!"
   ```
   - `endsWith` determines whether the string ends with specified string
9. `includes`

   - Parameter:
     searchString: A string to be searched for within the specified string.
     position (Optional): The position within the string at which to begin searching for searchString. (Defaults to 0.)
   - Return: true if the search string is found anywhere within the given string; otherwise, false if not.
   - Example:

     ```js
     let name = "Arya Stark";
     name.includes("ya"); // true

     let sentence = "A quick brown fox jumped over a lazy dog";
     sentence.includes("Lazy"); // false

     let houseName = "Starks";
     houseName.includes("t", 3); // false

     let houseName2 = "Starks";
     houseName2.includes("t", 1); // true
     ```

   - `includes` true if the search string is found anywhere within the given string; otherwise, false if not.

10. `indexOf`

- Parameter:
  searchValue: The string value to search for.
  If no string is explicitly provided, searchValue will be coerced to "undefined", and this value will be searched for in str.

  So, for example: 'undefined'.indexOf() will return 0, as undefined is found at position 0 in the string undefined. 'undefine'.indexOf() however will return -1, as undefined is not found in the string undefine.

fromIndex Optional
An integer representing the index at which to start the search. Defaults to 0.

    For fromIndex values lower than 0, or greater than str.length, the search starts at index 0 and str.length, respectively.

- Return: The index of the first occurrence of searchValue, or -1 if not found.

If the searchString is empty string we get a slightly different result
With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value. However, with any fromIndex value equal to or greater than the string's length, the returned value is the string's length:

- Example:

```js
let name = "Arya Stark";
name.indexOf("ya"); // 2

let sentence = "A quick brown fox jumped over a lazy dog";
sentence.indexOf("Lazy"); // -1

let houseName = "Starks";
houseName.indexOf("t", 3); // -1

let houseName2 = "Starks";
houseName2.indexOf("t", 1); // 0

"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 13); // returns 11
```

- `indexOf` returns the value of the first occurance of the searchValue if it exists or -1 if it does not exist 11.`lastIndexOf`

  - Parameter:
    searchValue:  
     A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.

  fromIndex Optional
  The index of the last character in the string to be considered as the beginning of a match. The default value is +Infinity. If fromIndex >= str.length, the whole string is searched. If fromIndex < 0, the behavior will be the same as if it would be 0.

  - Return: The index of the last occurrence of searchValue, or -1 if not found.

  - Example:

  ```js
  let name = "Arya Stark";
  name.lastIndexOf("ya"); // 2

  let sentence = "A quick brown fox jumped over a lazy dog";
  sentence.lastIndexOf("Lazy"); // -1

  let houseName = "Starks";
  houseName.lastIndexOf("t", 3); // 1

  let houseName2 = "Starks";
  houseName2.lastIndexOf("t", 1); // 1

  "hello world".lastIndexOf(""); // returns 11
  "hello world".lastIndexOf("", 0); // returns 0
  "hello world".lastIndexOf("", 3); // returns 3
  "hello world".lastIndexOf("", 13); // returns 11
  ```

- `lastIndexOf` returns the value of the last occurance of the searchValue if it exists or -1 if it does not exist

12. `padEnd`
    - parameter
      targetLength: the length of the final string once the current string is padded. If the value is smaller than than string.length, then the current string will be returned as it is. (data type: Number)
      padString (Optional)
      The string to pad the current string with. If the padString is too long to stay within the targetLength, it will be chopped off.

- Return: a string of the specified targetLength with the padString applied at the end of the current str.

- Example:

```js
let str = "hey";
str.padEnd(10); // 'hey       '

let st1 = "hey";
st1.padEnd(10, "you"); // 'heyyouyouy'

let str2 = "hey";
str2.padEnd(6, "abcdefghi"); // 'heyabc'

let str3 = "hey";
str3.padEnd(1, "abcd"); // 'hey'
```

- `padEnd` a string of the specified targetLength with the padString applied at the end of the current str.

13. `padStart`
    - parameter
      targetLength: the length of the final string once the current string is padded. If the value is smaller than than string.length, then the current string will be returned as is. (data type: Number)
      padString (Optional)
      The string to pad the current string with. If the padString is too long to stay within the targetLength, it will be chopped off. The default value is a " "

- Return: a string of the specified targetLength with padString applied from the start.

- Example:

```js
let str = "hey";
str.padStart(10); // '       hey'

let st1 = "hey";
st1.padStart(10, "you"); // 'youyouyhey'

let str2 = "hey";
str2.padStart(6, "abcdefghi"); // 'abchey'

let str3 = "hey";
str3.padStart(1, "abcd"); // 'hey'
```

- `padStart` a string of the specified targetLength with the padString applied at the beginning of the current str.

13. `repeat`

- Parameter:
  count: A number between 0 and +Infinity, indicating the number of times to repeat the string (Number data type)
  If a negative number or Infinity is given, then we will get a RangeError

- Return: A new string containing the specified number of copies of the given string.
- Example:

  ```js
  "hello".repeat(-1); // RangeError
  "hello".repeat(0); // ''
  "hello".repeat(1); // 'hello'
  "hello".repeat(2); // 'hellohello'
  "hello".repeat(3.5); // 'hellohellohello' (count will be converted to integer)
  "hello".repeat(1 / 0); // RangeError as it results in Infinity
  ```

- `repeat` A new string containing the specified number of copies of the given string.

14. `replace`

15. `slice`

- Parameter:
  beginIndex: The zero based index at which to begin extracton (Number data type)
  -ve beginIndex: if the beginIndex is negative, slice() starts extraction from str.length + beginIndex

  no beginIndex / undefined/ cannot be converted to a number, slice starts extraction from the beginning of the string.

  beginIndex == or > str.length, an empty string is returned
  If a negative number or Infinity is given, then we will get a RangeError

  endIndex (optional): The zero-based index before which to end extraction. The character at this index will not be included.

  no endIndex / undefined or cannot be converted to a number, slice() extracts to the end of the string

  -ve endIndex , slice() is treated as str.length + endIndex

  endIndex > beginIndex, slice() returns ""

- Return: A new string containing the extracted section of the string.
- Example:

  ```js
  "hello".repeat(-1); // RangeError
  "hello".repeat(0); // ''
  "hello".repeat(1); // 'hello'
  "hello".repeat(2); // 'hellohello'
  "hello".repeat(3.5); // 'hellohellohello' (count will be converted to integer)
  "hello".repeat(1 / 0); // RangeError as it results in Infinity
  ```

- `slice` A new str - Parameter:
  count: A number between 0 and +Infinity, indicating the number of times to repeat the string (Number data type)
  If a negative number or Infinity is given, then we will get a RangeError

- Return: A new string containing the specified number of copies of the given string.
- Example:

  ```js
  "hello".repeat(-1); // RangeError
  "hello".repeat(0); // ''
  "hello".repeat(1); // 'hello'
  "hello".repeat(2); // 'hellohello'
  "hello".repeat(3.5); // 'hellohellohello' (count will be converted to integer)
  "hello".repeat(1 / 0); // RangeError as it results in Infinity
  ```

- `slice` A new string containing the specified number of copies of the given string.ing containing the specified number of copies of the given string.

16. `split`

- Parameter:
  count: A number between 0 and +Infinity, indicating the number of times to repeat the string (Number data type)
  If a negative number or Infinity is given, then we will get a RangeError

- Return: A new string containing the specified number of copies of the given string.
- Example:

  ```js
  "hello".repeat(-1); // RangeError
  "hello".repeat(0); // ''
  "hello".repeat(1); // 'hello'
  "hello".repeat(2); // 'hellohello'
  "hello".repeat(3.5); // 'hellohellohello' (count will be converted to integer)
  "hello".repeat(1 / 0); // RangeError as it results in Infinity
  ```

- `slice` A new string containing the specified number of copies of the given string.

17. `substring`
18. - Parameter:
      indexStart: A number between 0 and +Infinity, indicating the number of times to repeat the string (Number data type)
      If a negative number or Infinity is given, then we will get a RangeError

      indexEnd
- Return: A new string containing the specified number of copies of the given string.
- Example:

  ```js
  "hello".repeat(-1); // RangeError
  "hello".repeat(0); // ''
  "hello".repeat(1); // 'hello'
  "hello".repeat(2); // 'hellohello'
  "hello".repeat(3.5); // 'hellohellohello' (count will be converted to integer)
  "hello".repeat(1 / 0); // RangeError as it results in Infinity
  ```

- `substring` A new string containing the specified number of copies of the given string.