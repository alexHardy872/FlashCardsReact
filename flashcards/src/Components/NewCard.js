import React from 'react';


function NewCard(props) {

    const assembleCardFromForm = (event) => {
        
        const word = event.target[0].value;
        const definition = event.target[1].value;
        props.createCard(word, definition);
    }


    return (<form onSubmit={assembleCardFromForm}>
        <input type="text" placeholder="word"/>
        <input type="text" placeholder="definition"/>
        <button type="submit">Add to Collection</button>
    </form>)
}


export default NewCard;