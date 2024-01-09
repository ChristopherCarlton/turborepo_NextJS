'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Subnav from './subnav';

// Initialize ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StickyNavbar = () => {
  useEffect(() => {
    // GSAP ScrollTrigger logic
    ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      toggleClass: { className: 'jwpnavbar--scrolled', targets: '.jwpnavbar' },
    });

    gsap.to('.jwpnavbar', {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        start: 'top -300',
        end: 99999,
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className="relative">
      {/* Tool bar */}
      <div className="jwpnavbar text-white h-80 flex items-center justify-center fixed w-2/3 transition duration-400">
        <Subnav/>
      </div>
      {/* Scrollable area */}
      <div className="scrollable-area h-[200vh] p-16">
        <div className="text text-2xl mb-24">
          If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be
          lost? The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch.
        </div>
        {/* You can duplicate this div for more content */}
      </div>
    </div>
  );
};

export default StickyNavbar;
