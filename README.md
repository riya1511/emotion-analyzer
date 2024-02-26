# emotion-analyzer

Real-time Emoji Analyzer for sentiment analysis in text.

## Overview

The `emotion-analyzer` npm package provides a simple and efficient way to analyze the sentiment of text and provide real-time feedback using emojis. It uses natural language processing (NLP) techniques via the Sentiment library to determine the sentiment and maps it to corresponding emojis.

## Installation

Install the package using npm:

```bash
npm install emotion-analyzer
```

## Usage

```typescript
import EmotionAnalyzer from "emotion-analyzer";

const analyzer = new EmotionAnalyzer();
const text = "I love coding!";
const result = analyzer.analyze(text);

console.log(result); // Output: '😊'
```

## Features

- **Sentiment Analysis:** Utilizes the Sentiment library to perform sentiment analysis on the given text.
- **Emoji Mapping:** Maps different sentiments to corresponding emojis, providing a visual representation of the sentiment.

## API

### `new EmotionAnalyzer()`

Creates a new instance of the EmotionAnalyzer.

### `analyzer.analyze(text: string): string`

Analyzes the sentiment of the given text and returns the corresponding emoji.

## Emoji Mapping

- **Positive Sentiment:** 😊
- **Negative Sentiment:** 😢
- **Neutral Sentiment:** 😐

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
