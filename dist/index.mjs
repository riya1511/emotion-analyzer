// src/index.ts
import Sentiment from "sentiment";
var EmotionAnalyzer = class {
  sentimentAnalyzer;
  emojiMapping;
  constructor() {
    this.sentimentAnalyzer = new Sentiment();
    this.emojiMapping = {
      positive: "\u{1F60A}",
      negative: "\u{1F622}",
      neutral: "\u{1F610}"
    };
  }
  analyze(text) {
    const sentimentResult = this.sentimentAnalyzer.analyze(text);
    return this.mapSentimentToEmoji(sentimentResult.score);
  }
  mapSentimentToEmoji(sentimentScore) {
    if (sentimentScore > 0) {
      return this.emojiMapping.positive;
    } else if (sentimentScore < 0) {
      return this.emojiMapping.negative;
    } else {
      return this.emojiMapping.neutral;
    }
  }
};
var src_default = EmotionAnalyzer;
export {
  src_default as default
};
