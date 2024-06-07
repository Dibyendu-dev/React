import React, { useState } from 'react';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 }
  ]);

  const [editingProfile, setEditingProfile] = useState(null);

  const handleEditClick = (profile) => {
    setEditingProfile({ ...profile });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProfile({
      ...editingProfile,
      [name]: value
    });
  };

  const handleSaveClick = () => {
    setProfiles(profiles.map(profile =>
      profile.id === editingProfile.id ? editingProfile : profile
    ));
    setEditingProfile(null);
  };

  return (
    <div>
      <h2>Profile List</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            {editingProfile && editingProfile.id === profile.id ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={editingProfile.name}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="age"
                  value={editingProfile.age}
                  onChange={handleInputChange}
                />
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div>
                {profile.name} ({profile.age} years old)
                <button onClick={() => handleEditClick(profile)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
