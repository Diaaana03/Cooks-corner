import React, { useEffect, useState } from "react";
import { useUser } from "../UserContext/UserContext";
import man from "../../Assets/Images/Man.svg";
import classes from "./Profile.module.css";

export const Profile = () => {
  const { token } = useUser();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "https://cooks-corner-prod.up.railway.app/api/user/my-account",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [token]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.profile}>
      <div className={classes.profile__info}>
        <img src={man} alt="man" />
        <div className={classes.profile__info_desc}>
          <div className={classes.profile__followers}>
            <div>
              <h2>{profile.recipesCount}</h2>
              <p>Recipe{profile.recipesCount > 1 ? "s" : ""}</p>
            </div>
            <div>
              <h2>{profile.followersCount}</h2>
              <p>Follower{profile.followersCount > 1 ? "s" : ""}</p>
            </div>
            <div>
              <h2>{profile.followingsCount}</h2>
              <p>Follow{profile.followingCount > 1 ? "s" : ""}</p>
            </div>
          </div>
          <div className={classes.profile__bio_desc}>
            <h3 className={classes.profile__name}>{profile.name}</h3>
            <p>{profile.description}</p>
          </div>
          <button className={classes.button__manage}>Manage Profile</button>
        </div>
      </div>
    </div>
  );
};
