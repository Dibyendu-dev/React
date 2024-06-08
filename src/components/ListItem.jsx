

 const ListItem = ({ item, index, onChange, onMoveUp, onMoveDown }) => {
  return (
    <div>
      <input
        type="text"
        value={item.value}
        onChange={(e) => onChange(index, e.target.value)}
      />
      <button onClick={() => onMoveUp(index)}> Up</button>
      <button onClick={() => onMoveDown(index)}> Down</button>
    </div>
  );
};
export default ListItem