import React from 'react';
import Headtohead from './components/HeadToHead/HeadToHead';
import Topperformers from './components/TopPerformers/TopPerformers';

function App() {
  return (
    <div className="grid grid-cols-12 mx-60 gap-5">
      <div class="col-span-6">
        <Headtohead />
      </div>
      <div class="col-span-6">
        <Topperformers />
      </div>
    </div>
  );
}

export default App;
