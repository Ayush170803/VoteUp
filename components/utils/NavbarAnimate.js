import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from 'react';
export function NavbarAnimate() {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from('nav h1', {
            y: -40,
            opacity: 0,
            delay: 0.2,
            duration: 0.3
        });
        tl.from('nav h4, nav button', {
            y: -40,
            opacity: 0,
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1
        });

        tl.from('#center-part1 h1', {
            x: -200,
            opacity: 0,
            duration: 0.6
        });
        tl.from('#center-part1 p', {
            x: -100,
            opacity: 0,
            duration: 0.5
        });
        tl.from('#center-part1 button', {
            opacity: 0,
            duration: 0.4
        });

        tl.from('#center-part2 img', {
            opacity: 0,
            duration: 0.5,
            x: 200
        });
    }, []);
}