import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <div className="container text-center mt-5">
          <div className="card">
            <img
              src={user.picture}
              className="card-img-top rounded-circle mx-auto mt-3"
              alt={user.name}
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p className="card-text">{user.email}</p>
            </div>
          </div>
        </div>
      )
  );
  
};

export default Profile;