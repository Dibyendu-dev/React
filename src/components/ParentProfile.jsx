import  { useState } from 'react';
import UserProfileList from './UserProfileList';

function ParentProfile() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Dibyendu Das', age: 28 },

  ]);

  const handleProfileUpdate = (updatedProfile) => {
    setProfiles(profiles.map(profile =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    ));
  };

  return (
    <div>
      <UserProfileList profiles={profiles} onUpdateProfile={handleProfileUpdate} />
    </div>
  );
}

export default ParentProfile;
