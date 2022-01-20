import React from 'react'


const Tag = ({ tag }) => {

    return (
        <label for={tag}>{tag}
            <input type="checkbox" name={tag} id={tag} value={tag}/>
        </label>
    )
}

export default Tag