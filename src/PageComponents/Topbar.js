import React from "react";

import SpawnpointIcon from "../Images/Spawnpoint.svg"

import "./Topbar.scss"

class Topbar extends React.Component {
    constructor() {
        super();

        this.elements = [
            "about",
            "experiences",
            "team"
        ];
    }

    jumpTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "end" });
        this.forceUpdate();
    }

    getActive = () => {
        let active = "about";
        this.elements.forEach((element) => {
            if (this.props.refList[element]?.current?.primaryDiv?.current?.getBoundingClientRect().top <= 250) {
                active = element;
            }
        });

        return active;
    }

    componentDidMount() {
        this.checkInterval = setInterval(() => {
            this.forceUpdate();
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.checkInterval);
    }
    
    render() {
        let active = this.getActive();

        return (
            <div className="topbar">
                <div className="topbar-logo">
                    <img alt="Spawnpoint" src={SpawnpointIcon}></img>
                    <h1>Spawnpoint Interactive</h1>
                </div>
                <div className="topbar-links">
                    <a href="javascript:void(0)" className={active === "about" ? "active" : "inactive"} onClick={() => this.jumpTo("about")}>About</a>
                    <a href="javascript:void(0)" className={active === "experiences" ? "active" : "inactive"} onClick={() => this.jumpTo("experiences")}>Experiences</a>
                    <a href="javascript:void(0)" className={active === "team" ? "active" : "inactive"} onClick={() => this.jumpTo("team")}>The Team</a>
                </div>
            </div>
        )
    }
}

export default Topbar;