import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <h1 className="text-4xl text-center font-mono">User Profiles</h1>
      <div
        style={{
          display: "flex",
          backgroundColor: "grey",
          height: "100vh",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <ProfileCard name="Suraj Kumar" age={21} job="Web Developer" />
        <ProfileCard name="Priya Sharma" age={25} job="UI Designer" />
        <ProfileCard name="Amit Singh" age={30} job="Data Analyst" />
      </div>
    </>
  );
}

export default App;

// Props are a way to pass data from a parent component to a child component in react

//Instead of creating 10 different profile components for 10 people, you can make one ProfileCard component and pass props for each person’s data.
