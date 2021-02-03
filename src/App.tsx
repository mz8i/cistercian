import React, { useEffect, useState } from 'react';
import './App.css';
import { CistercianNumber } from './cistercian/CistercianNumber';
import { NumberChangeButton } from './NumberChangeButton';
import { DigitPosition } from './types';
import useQueryString from './useQueryString';


function App() {
  const [positionHighlight, setPositionHighlight] = useState<DigitPosition | undefined>(undefined);
  const [number, setNumber] = useQueryString('year', (new Date()).getFullYear(), x => parseInt(x, 10), x => x.toString());
  const [textNumber, setTextNumber] = useState(number.toString());

  const trimTextNumber = () => setTextNumber(textNumber.replace(/^(0+)/, ''));

  useEffect(() => {
    if(number.toString() !== textNumber.replace(/^(0+)/, '')) {
      setTextNumber(number.toString());
    }
  }, [number]);

  useEffect(() => {
    if(textNumber) {
      setNumber(parseInt(textNumber, 10));
    }
  }, [textNumber]);

  const btnProps = {minNumber: 1, maxNumber: 9999, onChangeNumber: setNumber};

  return (
    <div className="App">
      <h1>
      Cistercian numbers
      </h1>
      
      <section className="number-section cistercian">
        <CistercianNumber number={number} highlightedPosition={positionHighlight}/>
      </section>

      <section className="number-section decimal">
        <div>
          <span className="negative-change">
            <NumberChangeButton number={number} change={-1000} {...btnProps} onMouseOver={e => setPositionHighlight('thousands')} onMouseOut={e => setPositionHighlight(undefined)}/>
            <NumberChangeButton number={number} change={-100} {...btnProps} onMouseOver={e => setPositionHighlight('hundreds')} onMouseOut={e => setPositionHighlight(undefined)}/>
            <NumberChangeButton number={number} change={-10} {...btnProps} onMouseOver={e => setPositionHighlight('tens')} onMouseOut={e => setPositionHighlight(undefined)}/>
            <NumberChangeButton number={number} change={-1} {...btnProps} onMouseOver={e => setPositionHighlight('units')} onMouseOut={e => setPositionHighlight(undefined)}/>
          </span>
          <input className="year-text-input"
            type="text"
            pattern="[0-9]{0,4}" maxLength={4}
            value={textNumber}
            onChange={e => {
              const input = e.target.value.replace(/[^0-9]/, '');
              setTextNumber(input);
            }}
            onBlur={trimTextNumber}
            />
          <span className="positive-change">
            <NumberChangeButton number={number} change={1} {...btnProps}  onMouseOver={e => setPositionHighlight('units')} onMouseOut={e => setPositionHighlight(undefined)}/>
            <NumberChangeButton number={number} change={10} {...btnProps}  onMouseOver={e => setPositionHighlight('tens')} onMouseOut={e => setPositionHighlight(undefined)}/>
            <NumberChangeButton number={number} change={100} {...btnProps}  onMouseOver={e => setPositionHighlight('hundreds')} onMouseOut={e => setPositionHighlight(undefined)}/>
            <NumberChangeButton number={number} change={1000} {...btnProps}  onMouseOver={e => setPositionHighlight('thousands')} onMouseOut={e => setPositionHighlight(undefined)}/>
          </span>
        </div>
        <div>
          <span className="year-slider-label">0</span>
          <input
            className="year-slider"
            type="range"
            min={1} max={9999} step={1} value={number} onChange={e => setNumber(parseInt(e.target.value))} />
          <span className="year-slider-label">9999</span>
        </div>
      </section>
      <section className="description">
        <p >
          Experiment with a medieval numbering system invented by Cistercian monks!
        </p>
        <p>
          (copy the website URL to share a link to the selected character)
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
