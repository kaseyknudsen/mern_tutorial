//rfce tab will create a function that returns a div and exports
//this file checks to make sure the user is logged in before displaying the dashboard
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return <div>Dashboard</div>
}

export default Dashboard;
