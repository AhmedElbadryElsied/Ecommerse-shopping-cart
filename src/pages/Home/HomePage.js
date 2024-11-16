import React from 'react';
import NaveBarLogin from '../../components/Uitily/NaveBarLogin';
import Slide from '../../components/Home/Slide';
import HomeCategory from '../../components/Home/HomeCategory';

function HomePage() {
  return (
    <div className='font'>
        <NaveBarLogin/>
        <Slide/>
        <HomeCategory/>
    </div>
  )
}

export default HomePage