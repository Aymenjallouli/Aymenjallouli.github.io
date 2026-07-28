import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * macOS-style terminal card that "types" its lines when scrolled into
 * view. Under reduced motion, all content renders immediately.
 *
 * lines: array of { type: 'cmd' | 'out' | 'ok', text: string }
 *  - cmd lines are prefixed with a prompt
 *  - ok lines render in the success color
 */
const CHAR_DELAY = 16;
const LINE_PAUSE = 280;

const Terminal = ({ title = 'aymen@dev — zsh', lines = [] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  const [progress, setProgress] = useState({ line: 0, char: 0 });
  const totalChars = useMemo(() => lines.map((l) => l.text.length), [lines]);

  const done = progress.line >= lines.length;

  useEffect(() => {
    if (!inView || done) return undefined;
    if (reduced) {
      setProgress({ line: lines.length, char: 0 });
      return undefined;
    }
    const current = totalChars[progress.line] ?? 0;
    const atLineEnd = progress.char >= current;
    const id = setTimeout(
      () => {
        setProgress((p) =>
          atLineEnd ? { line: p.line + 1, char: 0 } : { line: p.line, char: p.char + 1 }
        );
      },
      atLineEnd ? LINE_PAUSE : CHAR_DELAY
    );
    return () => clearTimeout(id);
  }, [inView, reduced, progress, done, lines.length, totalChars]);

  return (
    <div className="terminal" ref={ref} role="img" aria-label={lines.map((l) => l.text).join('. ')}>
      <div className="terminal-bar">
        <span className="terminal-dot dot-red" />
        <span className="terminal-dot dot-yellow" />
        <span className="terminal-dot dot-green" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body" aria-hidden="true">
        {lines.map((line, i) => {
          if (i > progress.line) return null;
          const isTyping = i === progress.line;
          const text = isTyping ? line.text.slice(0, progress.char) : line.text;
          return (
            <div key={i} className={`terminal-line line-${line.type}`}>
              {line.type === 'cmd' && <span className="terminal-prompt">❯</span>}
              <span className="terminal-text">{text}</span>
              {isTyping && <span className="terminal-cursor" />}
            </div>
          );
        })}
        {done && (
          <div className="terminal-line line-cmd">
            <span className="terminal-prompt">❯</span>
            <span className="terminal-cursor blink" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
