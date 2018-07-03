import React, {Component} from 'react'



const TeamMember = (props) => {
    const linkedinImage = require('../../static/img/linkedin-icon.png');
    const styles = {
        teamMemberContainer: {
            width: '100%',
            backgroundColor: "#20242C",
            color: "white",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            margin: '10px',
        },
        teamMemberGroup: {
            paddingTop: "75px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px"

        },
        teamMemberTopPart: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        },
        teamMemberImage: {
            display: "inline-block",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundImage: `url("${props.image}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"

        },
        teamMemberLinkedin: {
            display: "inline-block",
            width: "30px",
            height: "30px",
            backgroundImage: `url("${linkedinImage}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            marginLeft: "80px",
            marginTop: "-40px",
        },
        bioContainer: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        }

}

    return(
        <div style={styles.teamMemberContainer}>
            <div  style={styles.teamMemberGroup}>
                <div style={styles.teamMemberTopPart}>
                    <div style={styles.teamMemberImage}></div>
                    <a href={props.linkedin}>
                        <div  style={styles.teamMemberLinkedin}></div>
                    </a>

                    <h3>{props.name}</h3>
                    <h4>{props.phoneNumber}</h4>
                </div>

                    <p>{props.bio}</p>
            </div>
        </div>
    )
}


export default TeamMember