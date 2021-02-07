import React from 'react';
import './App.css';
import { ArabicNumberInput } from './arabic/ArabicNumberInput';
import { CistercianNumber } from './cistercian/CistercianNumber';
import { DigitPosition } from './types';
import { useHoverTracker } from './use-hover';
import { useQueryString } from './useQueryString';


function App() {
  const [positionHighlight, onPositionHover] = useHoverTracker<DigitPosition>();
  const [number, setNumber] = useQueryString('year', (new Date()).getFullYear(), x => parseInt(x, 10), x => x.toString());

  return (
    <div className="App">
      <h1>
      Cistercian numbers
      </h1>
      
      <section className="number-section cistercian">
        <CistercianNumber
          number={number}
          highlightedPosition={positionHighlight}
          onPositionHover={onPositionHover}
        />
      </section>

      <section className="number-section decimal">
        <ArabicNumberInput
          value={number}
          minNumber={0}
          maxNumber={9999}
          
          onChange={setNumber}
          highlightedPosition={positionHighlight}
          onPositionHover={onPositionHover} 
        />
      </section>

      <section className="description">
        <p >
          Experiment with a medieval numbering system invented by Cistercian monks!
        </p>
        <p>
          (copy the website URL to share a link to the selected number)
        </p>
      </section>

      <section className="colophon">
        <p>
          Created by <a href="https://mz8i.com">mz8i</a> (<a href="https://github.com/mz8i/cistercian">source</a>). 
        </p>
        <p>
        Inspired by <a href="https://twitter.com/MathematicsUCL/status/1356558846093914114/photo/1">UCL Mathematics</a> on Twitter.
        </p>
      </section>
    </div>
  );
}

export default App;
