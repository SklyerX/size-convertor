# Size Converter

A lightweight and straightforward utility for handling size conversions in your JavaScript projects.

## Installation

You can install the size converter via npm:

```bash
npm install @sklyerx/size-converter
```

## Usage

After importing the `convert` function, simply call it in the same way you'd use the `ms` function.

```js
import convert from 'size-converter';

const result = convert("20mb", "b");
console.log(result); // Outputs the converted size in bytes
```

### Parameters

- **base**: The original size you want to convert (e.g., `"20mb"`).
- **to**: The target unit for conversion (e.g., `"b"` for bytes).

## Why I Created This

While working on projects that involve file management with **S3** and **UploadThing**, I often encountered the challenge of managing file sizes. It's a critical aspect that can easily be overlooked but is essential for efficient storage and bandwidth management. I grew tired of manually performing these calculations, so I created this utility to automate the process. Now, I can handle file size conversions with ease by simply importing this tool and moving forward with my work.