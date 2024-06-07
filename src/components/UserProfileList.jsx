// this component handle the rendering logic
import UserProfile from './UserProfile';

function UserProfileList({ profiles, onUpdateProfile }) {
  return (
    <div>
      {profiles.map(profile => (
        <UserProfile key={profile.id} profile={profile} onUpdateProfile={onUpdateProfile} />
      ))}
    </div>
  );
}

export default UserProfileList;
