# join-words

`join-words` is a lightweight and easy-to-use JavaScript utility for formatting an array of words into a human-readable string. It handles edge cases like empty arrays, single words, and proper punctuation for lists of two or more words.

---

## Features

- **Empty Array Handling**: Returns an empty string for an empty array.
- **Single Word Support**: Returns the word itself when the array contains only one word.
- **Two Words**: Joins two words with "and".
- **Three or More Words**: Joins all but the last word with commas, and appends "and" before the last word.
- **Lightweight**: No dependencies, simple and efficient.

---

## Installation

Install the library via npm:

```bash
npm install join-words
```

Or using yarn:

```bash
yarn add join-words
```

---

## Usage

### Importing the Library

You can import the library into your project using CommonJS:

```javascript
const joinWords = require('join-words');
```

### Examples

```javascript
const joinWords = require('join-words');

console.log(joinWords([])); // ""
console.log(joinWords(["apple"])); // "apple"
console.log(joinWords(["apple", "banana"])); // "apple and banana"
console.log(joinWords(["apple", "banana", "cherry"])); // "apple, banana, and cherry"
console.log(joinWords(["apple", "banana", "cherry", "date"])); // "apple, banana, cherry, and date"
```

### Edge Cases

- **Empty Array**: An empty array will return an empty string.

```javascript
joinWords([]); // ""
```

- **Single Word**: An array with one word will return the word itself.

```javascript
joinWords(["apple"]); // "apple"
```

- **Two Words**: Two words are joined with "and".

```javascript
joinWords(["apple", "banana"]); // "apple and banana"
```

- **Three or More Words**: Words are joined with commas, and "and" is appended before the last word.

```javascript
joinWords(["apple", "banana", "cherry"]); // "apple, banana, and cherry"
joinWords(["apple", "banana", "cherry", "date"]); // "apple, banana, cherry, and date"
```

---

## API

### `joinWords(words)`

#### Parameters:
- `words` (Array of Strings): The array of words to format.

#### Returns:
- `String`: A formatted string of the words.

#### Behavior:
- Returns an empty string if the array is empty.
- Returns the single word if there is only one word in the array.
- Joins two words with "and".
- Joins three or more words with commas and appends "and" before the last word.

---

## Why Use join-words?

- Simplifies formatting of word lists in natural language.
- Reduces boilerplate code for creating readable lists.
- Handles edge cases seamlessly.
- Lightweight and dependency-free.

---

## Contributing

Contributions are welcome! If you'd like to improve or add features to this library, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write clear and concise code with comments where necessary.
4. Add tests for your changes (if applicable).
5. Submit a pull request.

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/OroTeam/join-words.git
   cd join-words
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this library as long as you include the license in your project.

---

## Support

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/OroTeam/join-words) or contact the maintainer.

---

## Acknowledgments

Special thanks to the open-source community for inspiring the creation of this library. Your feedback and contributions make this project better!

---

Enjoy using `join-words`! 🎉