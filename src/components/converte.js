import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Converte = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedText(text);
    }, 2000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);
  return <h2 className='ui header'>{translated} </h2>;
};

export default Converte;
