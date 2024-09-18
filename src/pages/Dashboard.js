import { useNavigate, Link, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />

      <button onClick={handleClick}>Logout</button>
      <Link to="welcome">say welcome</Link>
    </div>
  );
}

export default Dashboard;
