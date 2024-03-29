import React from "react";

import "./Team.scss";

class Team extends React.Component {
    constructor() {
        super();

        this.primaryDiv = React.createRef();
    }

    openLink = (link) => {
        window.open(link, "_blank");
    }

    render() {
        return (
            <div ref={this.primaryDiv} className="team" id="team">
                <div className="team-title">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.desc}</p>
                </div>
                <div className="team-list">
                    {this.props.members.map((member, index) => {
                        return (
                            <div onClick={() => this.openLink(member.link)} className="team-member-card" key={"member-" + index}>
                                <img alt="Profile" className="team-pfp" src={member.image}></img>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Team;