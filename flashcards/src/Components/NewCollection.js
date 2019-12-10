import React from 'react';


function NewCollection(props) {

    const assembleCollectionFromForm = (event) => {
        
        const title = event.target[0].value;
        props.createCollection(title);
    }


    return (<form onSubmit={assembleCollectionFromForm}>
        <input type="text" placeholder="title"/>

        <button type="submit">Add New Collection</button>
    </form>)
}


export default NewCollection;