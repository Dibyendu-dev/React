export default function ColorPicker({ selectedColor, onChange }) {
    return <input type="color" value={selectedColor} onChange={onChange} />;
  }
  