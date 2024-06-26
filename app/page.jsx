"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import TopOfPage from '../components/TopOfPage';
import LoadingScreen from '../components/LoadingScreen';
import FlareCursor from '@/components/FlareCursor';
import './css/cursor.css';
import Hero from '@/components/Hero';
import { Toaster } from 'react-hot-toast';

const BrightnessSlider = ({ onChange }) => {
  return (
    <div className="z-[100] flex items-center no-cursor">
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="0" // Set the default position to be all the way to the left
        className="custom-slider no-cursor"
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [brightness, setBrightness] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  return (
    <div>
      <FlareCursor />
      {loading && <LoadingScreen />}
      <div className={`min-h-screen ${loading ? 'overflow-hidden' : ''}`}>
        <Header onBrightnessChange={handleBrightnessChange} />
        <div
          className="background-layer"
          style={{ filter: `brightness(${brightness}%)` }}
        ></div>
        <div className="relative z-10 pt-[100px]">
          <TopOfPage />
        </div>
        <Hero />
      </div>
      <Toaster />
    </div>
  );
}
