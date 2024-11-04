import useAuth from "../hooks/useAuth";

export default function Home() {
  const { username } = useAuth();
  return (
    <div>
      <h1>Home Page</h1>
      {username ? (
        <p>Welcome back {username} </p>
      ) : (
        <p>You are not logged in </p>
      )}
    </div>
  );
}
