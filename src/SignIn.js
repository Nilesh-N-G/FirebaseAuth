
import React, { useState } from 'react';
import { signInWithGoogle } from './firebaseConfig';

const SignIn = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      setUser(user);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photoURL} alt="User Profile" />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default SignIn;
