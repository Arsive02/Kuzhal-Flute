import { useAuth } from '../hooks/useAuth';

const UserPage = () => {
  const { user } = useAuth();
  
  return (
    <div className="user-page">
      <div className="container">
        <h1 className="page-title">User Profile</h1>
        
        {user && (
          <div className="user-profile">
            <div className="user-avatar">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || 'User'} />
              ) : (
                <div className="avatar-placeholder">
                  {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
                </div>
              )}
            </div>
            
            <div className="user-info">
              <h2>{user.displayName || 'User'}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        )}
        
        <div className="progress-section">
          <h2>Your Progress</h2>
          <p>Progress tracking functionality coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;