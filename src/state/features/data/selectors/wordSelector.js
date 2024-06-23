import { createSelector } from "@reduxjs/toolkit";

export const getDataWords = createSelector(
    // input
    (state) => state.data?.data?.words,
  // Output selector
  (words) => {
    if (!words) {
      return {
        lowConfidence: [], // Empty array for low confidence words
        highConfidence: [], // Empty array for high confidence words
        exactConfidence: [], // Empty array for exact confidence words
      };
    }

    const lowConfidence = words.filter((item) => item.confidence < 0.25);
    const highConfidence = words.filter((item) => item.confidence > 0.85);
    const exactConfidence = words.filter((item) => item.confidence === 0.98);

    return {
      lowConfidence,
      highConfidence,
      exactConfidence,
    };
  }
);
