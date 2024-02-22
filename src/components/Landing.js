import React, { useEffect, useState } from 'react';


const Landing = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date('2024-03-14T01:00:00').getTime();
      const currentDate = new Date().getTime();
      const remainingTime = eventDate - currentDate;

      const seconds = Math.floor(remainingTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      setRemainingTime({
        days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      });
    }, 1000);


    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

 

  return (
    <div className='w-[100dvw] h-[100dvh] relative landing'>
      <video className='w-full h-full object-cover absolute top-0 left-0' src='https://media.wearemotto.com/app/uploads/2022/11/14104333/home-hero-opt.mp4' autoPlay loop muted />
      <div className='w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 flex justify-center items-center'>
        <div className='text-white md:text-5xl sm:text-3xl text-xl font-Anurati font-bold md:font-normal'>
          <p>
            {
              (remainingTime.days > 0 ? `${remainingTime.days} Day : ` : '') +
              (remainingTime.hours > 0 ? `${remainingTime.hours} Hour : ` : '') + 
              (remainingTime.minutes > 0 ? `${remainingTime.minutes} Min : ` : '') +
              (remainingTime.seconds > 0 ? `${remainingTime.seconds} Sec ` : '') +
              (remainingTime.days <= 0 && remainingTime.hours <= 0 && remainingTime.minutes <= 0 && remainingTime.seconds <= 0 ? 'Event Started' : '')
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;