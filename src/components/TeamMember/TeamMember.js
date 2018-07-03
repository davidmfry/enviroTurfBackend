import React, {Component} from 'react'

const TeamMember = (props) => {

    const styles = {
        teamMemberContainer: {
            backgroundColor: "black",
            color: "white",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            margin: '10px',
            height: '25rem',
            paddingLeft: "1rem",
            paddingRight: "1rem",

        },
        teamMemberImage: {
            display: "inline-block",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundImage: `url("/static/img/${props.image}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"

        },
        bioContainer: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        }

}

    return(
        <div className="team-member-container" style={styles.teamMemberContainer}>
            <div className="team-member-group">
                <div className='team-member-image' style={styles.teamMemberImage}></div>
                <a href={props.linkedin}>
                    <div className='team-member-linkedin'></div>
                </a>

                <h3>{props.name}</h3>
                <h4>{props.phoneNumber}</h4>
                <p>{props.bio}</p>
            </div>
        </div>
    )
}


export default TeamMember