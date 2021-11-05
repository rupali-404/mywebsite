import "./intro.scss"
import { init } from 'ityped'
import { useEffect,useRef } from "react"

function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: [' Web', ' Development' ] 
        });
    }, [])
    return (
        <div className="intro" id = "intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There, I'm</h2>
                    <h1>PCL Forge</h1>
                    <h3>technical  
                        <span ref = {textRef}>
                            
                        </span>
                        </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro