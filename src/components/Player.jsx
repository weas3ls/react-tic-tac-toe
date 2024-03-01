import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(editing => !editing);

        if (isEditing) onChangeName(symbol, playerName);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = isEditing ? (
        <input type="text" value={playerName} onChange={handleChange} required />
    ) : (
        <span className="player-name">{playerName}</span>
    );
    let btnCaption = isEditing ? 'Save' : 'Edit';

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}
