import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
  return (
    <>
          <div>Profile</div>
          <h1>{ username }</h1>
    </>
  );
};
export default ProfilePage;
