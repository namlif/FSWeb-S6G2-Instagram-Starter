import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlarAktarim } = props;

  return (
    <div>
      {yorumlarAktarim.map((y, i) => 
      <Yorum key={i} yorum = {y}/>)}
    </div>
  );
};

export default Yorumlar;
