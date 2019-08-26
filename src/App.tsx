import React from 'react';
import SegmentedControl from './SegmentedControl';
import './App.scss';

const App: React.FC = () => {
    const getData =  (data: any) => {
        console.log(data);
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Segmented Control Reusable Component</h1>
      </header>
      <main className="App-main">
        <div className="App-main-samples">
          <SegmentedControl segmentLabel="Payment Type" values={['PayPal', 'Credit Card', 'Net Term']}/>
          <SegmentedControl segmentLabel="gender" values={['Male', 'Female']}/>
          <SegmentedControl segmentLabel="number selection" values={['1','2','3','4']} defaultTo="3"/>
          <SegmentedControl segmentLabel="true false selection" values={['true', 'false']}/>
          <SegmentedControl segmentLabel="true false selection" values={['true', 'false']}/>
          <SegmentedControl segmentLabel="true false selection" values={['true', 'false']}/>
        </div>
      <div className="App-main-samples">
          <SegmentedControl segmentLabel="Payment Type" values={['PayPal', 'Credit Card', 'Net Term']}/>
          <SegmentedControl segmentLabel="gender" values={['Male', 'Female']}/>
          <SegmentedControl segmentLabel="number selection" values={['1','2','3','4']} defaultTo="3"/>
      </div>
      <div className="App-main-samples">
          <SegmentedControl segmentLabel="Payment Type" values={['PayPal', 'Credit Card', 'Net Term']}/>
          <SegmentedControl segmentLabel="gender" values={['Male', 'Female']}/>
      </div>
      <div className="App-main-samples">
          <SegmentedControl sendData={getData} segmentLabel="Payment Type" values={['PayPal', 'Credit Card', 'Net Term']}/>
      </div>
      </main>
    </div>
  );
};

export default App;
