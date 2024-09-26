import { useState } from "react";

// Simulated user data for authentication
const mockUser = {
  email: "testuser@example.com",
  password: "password123",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Validation: Check if email is in proper format
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Validation: Check if password is at least 8 characters
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Handle Login Submission
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages
    setSuccessMessage(""); // Clear previous success messages

    // Basic input validation
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    // Simulated Authentication
    if (email === mockUser.email && password === mockUser.password) {
      setSuccessMessage("Login successful! Redirecting...");
      setErrorMessage("");
      // Logic for handling successful login (like redirecting) goes here
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>

        {/* Display error or success messages */}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border w-full p-2 rounded-md focus:ring-teal-600 focus:border-teal-600"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border w-full p-2 rounded-md focus:ring-teal-600 focus:border-teal-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Do Not have an account?{" "}
            <a href="#" className="text-teal-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
