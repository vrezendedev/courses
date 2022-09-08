import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "invalid key",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    if (debouncedText.length > 0) doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h3 className="ui header">
        {translated.length > 0 ? translated : "..."}
      </h3>
    </div>
  );
};

export default Convert;
