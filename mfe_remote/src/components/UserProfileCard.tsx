// Remote App (Account Management Micro Frontend)
export interface User {
  id: string;
  name: string;
  email: string;
}

const UserProfileCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="user-profile-card">
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
