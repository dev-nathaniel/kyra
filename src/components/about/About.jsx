import { useLayoutEffect } from 'react';
import styles from './About.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useLayoutEffect(()=> {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: '#about',
                        scrub: 1,
                        pin: true,
                        end: '+=100%',
                        onEnter: () => document.documentElement.classList.add("pin-active"),
                        onLeaveBack: () => document.documentElement.classList.remove("pin-active")
                    }
                }
            );
            tl.to('#aboutCont', {
                y: '-88%'
            })
        })

        return () => ctx.revert()
    }, [])
    return (
        <div id='about' className={styles.about}>
            <div id='aboutCont' className={styles.aboutCont}>
                <div>
                    <p></p>
                <p>in 2022</p>
                </div>
                <div>
                    <p>we worked with</p>
                    <p>50 global brands</p>
                </div>
                <div>
                    <p>across</p>
                    <p>100+ campaigns</p>
                </div>
                <div>
                    <p>working with</p>
                    <p>5,000+ creators</p>
                </div>
                <div>
                <p>engaging</p>
                <p>1bn+ people</p>
                </div>
            </div>
        </div>
    );
}

export default About;