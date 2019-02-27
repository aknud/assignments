import React from "react";

const Badge = (props) => {

    console.log(props.badges)
    let backgroundStyle;
    let mappedBadges = props.badges.map((badge, i) => {
        console.log(i)
        i % 2 === 0 ?  backgroundStyle = "blue" :  backgroundStyle = "red";
        return (
            <div className="badge-container" key={i + Math.random()}>
                <header className="badge-header" style={{backgroundColor: backgroundStyle}}><h1>Badge:</h1></header>
                <main className="badge-main">
                    <h2>Name: <span>{badge.first} {badge.last}</span></h2>
                    <h2>Phone: {badge.phone}</h2>
                    <h2>Place of Birth: {badge.birth}</h2>
                    <h2>Favorite Food: {badge.food}</h2>
                    <h2>Email: {badge.email}</h2>
                    <section className="about-text">{badge.about}</section>
                </main>
            </div>
        )
    })

    return (
        <div>
            {mappedBadges}
        </div>
    )
}

export default Badge;