import  { useState } from 'react';

// this component handle the editing logic

function UserProfile({ profile, onUpdateProfile }) {
  const [localProfile, setLocalProfile] = useState(profile);

  const handleEdit = () => {
    onUpdateProfile(localProfile);
  };

  return (
    <div>
      <input
        type="text"
        value={localProfile.name}
        onChange={(e) => setLocalProfile({ ...localProfile, name: e.target.value })}
      />
      <input
        type="number"
        value={localProfile.age}
        onChange={(e) => setLocalProfile({ ...localProfile, age: parseInt(e.target.value, 10) })}
      />
      <button onClick={handleEdit}>Save</button>
    </div>
  );
}

export default UserProfile;
