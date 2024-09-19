'use client'
import React from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
    const styles = {
        contentwrap: {
            // backgroundColor: '#f2f2fd',
            padding: '20px 40px',
            borderRadius: '10px',
        background: 'linear-gradient(204deg, #064c59 1%, #261888 40%, #0e4c4d 90%)',
        color: '#fff'
    },
     section :{
        margin :'20px',
        
     }
}
return (
    <section style={styles.section}>
        <div style={styles.contentwrap} className='max-w-screen-xl mt-6'>
            <h1 className='h3-medium'>Backstage by the Numbers</h1>
            <ul className="flex flex-col align-center justify-center">
                <li className="text-2xl font-bold">
                    <CountUp end={100000} duration={3} separator="," />+
                    <span className='block text-medium'>events</span>
                </li>
                <li className="text-2xl font-bold">
                    <CountUp end={50000} duration={3} separator="," />+ 
                    <span className='block'>event planners</span>
                </li>
                <li className="text-2xl font-bold">
                    <CountUp end={165} duration={3} separator="," />+ 
                    <span className='block'>countries</span>
                </li>
                <li className="text-2xl font-bold">
                    <CountUp end={1600000} duration={3} separator="," />+
                    <span className='block'>attendees</span>
                </li>
            </ul>
        </div>
    </section>
);
};

export default CounterSection;
