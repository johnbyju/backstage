'use client'
import React, { useEffect, useState } from 'react';
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
        section: {
            margin: '20px',

        }
    }

    const [starter, setstarter] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const section = document.querySelector('.counter-section'); 
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setstarter(true); 
                    // setTimeout(() => {
                    //     setstarter(true);
                    // },1000);
                }
            }
            else{
                setstarter(false)
            }
        };

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <section className="section mx-5 counter-section py-10 px-6 bg-gradient-to-r from-[#064c59] via-[#261888] to-[#0e4c4d] text-white rounded-lg">
            <h1 className="text-3xl font-semibold text-center mb-8">Backstage by the Numbers</h1>
            <div className="flex flex-col md:flex-row justify-around items-center gap-6">
                <ul className="flex flex-col md:flex-row gap-6">
                    <li className="text-2xl font-bold text-center">
                        {starter && <CountUp end={100000} duration={3} separator="," />}+
                        <span className="block text-lg">events</span>
                    </li>
                    <li className="text-2xl font-bold text-center">
                        {starter && <CountUp end={50000} duration={3} separator="," />}+
                        <span className="block text-lg">event planners</span>
                    </li>
                    <li className="text-2xl font-bold text-center">
                        {starter && <CountUp end={165} duration={3} separator="," />}+
                        <span className="block text-lg">countries</span>
                    </li>
                    <li className="text-2xl font-bold text-center">
                        {starter && <CountUp end={1600000} duration={3} separator="," />}+
                        <span className="block text-lg">attendees</span>
                    </li>
                </ul>
            </div>
        </section>


    );
};

export default CounterSection;
