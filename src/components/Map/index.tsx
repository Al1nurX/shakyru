import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';

const YandexMap = () => (
  <YMaps>
    <div className="text-2xl text-center mt-10 color font">
    Cіздерге ыңғайлы болуы үшін <br/> төменде көрсетілген картаны қолданыңыз !
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
        <Map 
          defaultState={{ center: [50.038475, 72.971471], zoom: 15 }}
          style={{ width: '80%', height: '80%' }} 
        />
      </div>
    </div>
  </YMaps>
);

export default YandexMap;
