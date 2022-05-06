import UserApplications from "./UserApplications";
import UserProfileForm from "./UserProfileForm";

function UserProfile() {
  return (
    <div className="row container-flex">
      <UserProfileForm />
      <UserApplications />
    </div>
  );
}

export default UserProfile;
