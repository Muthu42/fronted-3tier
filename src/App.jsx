import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.email === "admin@gmail.com" && login.password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLogin({
      email: "",
      password: ""
    });
  };

  if (isLoggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
        <h1>Dashboard</h1>
        <p>Welcome, you have successfully logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit} style={{ width: "300px", margin: "auto" }}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={login.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={login.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <button type="submit" style={{ padding: "10px 20px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
