import React from 'react';
import { withForm } from './FormHOC';

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" name="username" value={props.userInfo.username} placeholder="username"/>
            <input onChange={props.handleChange} type="password" name="password" value={props.userInfo.password} placeholder="password"/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default withForm(Form);