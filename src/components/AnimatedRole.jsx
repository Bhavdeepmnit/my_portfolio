import { useEffect, useState } from 'react';
import { typingTexts } from '../data/constants';

// Keep frequent animation updates isolated from the page and its section cards.
const AnimatedRole = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (query.matches) return;
    const current = typingTexts[index];
    const delay = !deleting && text === current ? 1600 : deleting ? 30 : 60;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) setDeleting(true);
        else setText(current.slice(0, text.length + 1));
      } else if (text) setText(current.slice(0, text.length - 1));
      else { setDeleting(false); setIndex(previous => (previous + 1) % typingTexts.length); }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, index, deleting]);
  return <span aria-hidden="true">{text || typingTexts[index]}</span>;
};
export default AnimatedRole;
