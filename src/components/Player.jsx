import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEdit() {
    setEditing(isEditing => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            defaultValue={playerName}
            required
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
