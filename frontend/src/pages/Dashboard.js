import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const res = await fetch("/api/v1");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>dashboard</div>;
};
export default Dashboard;
