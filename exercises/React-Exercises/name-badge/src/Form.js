import React from "react";
import Badge from './Badge';

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            first: "",
            last: "",
            email: "",
            birth: "",
            phone: "",
            food: "",
            about: "",
            badgeArr: [
                {
                    about: "Im just a girl learning to code.", 
                    birth: "utah", 
                    email: "amylknudson@gmail.com", 
                    first: "Amy", 
                    food: "Spaghetti", 
                    last: "Knudson", 
                    phone: "7578708484"
                },
                {
                    about: "Try to jump onto window and fall while scratching at wall jump off balcony, onto stranger's head for refuse to drink water except out of someone's glass. I vomit in the bed in the middle of the night stare out cat door then go back inside, meow in empty rooms pounce on unsuspecting person demand to be let outside at once, and expect owner to wait for me as i think about it i heard this rumor where the humans are our owners, pfft, what do they know?! leave dead animals as gifts. When in doubt, wash chew iPad power cord cough so attack feet, but slap kitten brother with paw. That box? i can fit in that box stare at wall turn and meow stare at wall some more meow again continue staring or flee in terror at cucumber discovered on floor. Favor packaging over toy meowwww yet stretch.", 
                    birth: "utah", 
                    email: "amylknudson@gmail.com", 
                    first: "Amy", 
                    food: "Spaghetti", 
                    last: "Knudson", 
                    phone: "7578708484"
                }
            ]
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let { first, last, email, birth, phone, food, about } = this.state;
        let newBadge = { first, last, email, birth, phone, food, about }
        console.log(11111, newBadge)
        this.setState((prevState) => {
            return {
                badgeArr: [...prevState.badgeArr, newBadge]
            }
        })
        this.clearInputs()
        console.log(this.state)
    }

    clearInputs = () => {
        this.setState({
            first: "",
            last: "",
            email: "",
            birth: "",
            phone: "",
            food: "",
            about: "",
        })
    }

    render() {
        return (
            <React.Fragment>
                <form name="badge" id="form" onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.first} 
                        type="text" 
                        name="first" 
                        id="" 
                        placeholder="First Name"
                        onChange={this.handleChange}
                        pattern=".{3,}" 
                        required />
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.last} 
                        type="text" 
                        name="last" 
                        id="" 
                        placeholder="Last Name"
                        pattern=".{3,}"
                        required />
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.email} type="email" 
                        name="email" 
                        id="" 
                        placeholder="Email" 
                        required />
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.birth} 
                        type="text" 
                        name="birth" 
                        id="" 
                        placeholder="Place of Birth"
                        pattern=".{3,}" 
                        required />
                    <input 
                        value={this.state.phone} type="tel" name="phone" 
                        id="" 
                        placeholder="Phone" 
                        onChange={this.handleChange} required />
                    <input
                        onChange={this.handleChange}
                        value={this.state.food}
                        type="text"
                        name="food"
                        id=""
                        placeholder="Favorite Food"
                        pattern=".{3,}"
                        required />
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.about} name="about"
                        id="text-input"
                        placeholder="Tell us about yourself" cols="40" rows="10" 
                        required pattern=".{3,}"
                    ></textarea>
                    <button className="form-btn">Submit</button>
                </form>
                <Badge badges={this.state.badgeArr}/>
            </React.Fragment>
        )
    }
}