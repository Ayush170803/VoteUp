import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from 'react';
export function homepageanimate() {
    useEffect(() => {
        const tl = gsap.timeline();
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