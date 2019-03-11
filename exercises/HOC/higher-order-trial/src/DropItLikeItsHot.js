import React from 'react';
import { withDropDown } from './DropDown';

const DropItLikeItsHot = (props) => {
    return (
        <form onSubmit={props.submitGender}>
            <select  name="gender" onChange={props.changeGender}>
                <option value="male">Male</option>
                <option value="female">Femaile</option>
                <option value="non-binary">Non Binary</option>
            </select>
            <button type="submit">Thanks for sharing</button>
        </form>
    )
};

export default withDropDown(DropItLikeItsHot);