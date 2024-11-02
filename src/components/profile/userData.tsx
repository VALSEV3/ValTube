import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import './userData.css';
import Modal from './modal';

const UserData = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Очистка подписки при размонтировании компонента
    return () => unsubscribe();
  }, []);

  return (
    <>
      {!user?.photoURL ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="149" height="149" fill="grey" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
      ) : (
        <img src={user.photoURL} alt="User Avatar" width="149" height="149" style={{ borderRadius: "50%" }} />
      )}

      {user && (
        <div>
          <p style={{ fontSize: "34px", margin: "30px", marginBottom: '4px', marginTop: '4px' }}>{user.displayName}</p>
          <p style={{ fontSize: "20px", margin: "30px", marginTop: "0px" }}>{user.email}</p>
          <Modal user={user} />
        </div>
      )}
    </>
  );
};

export default UserData;
