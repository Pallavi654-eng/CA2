const API_URL = "http://localhost:5002/api";

export const signup = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Signup failed");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(`Cannot connect to server. Please make sure the backend is reachable at ${API_URL}.`);
    }
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Login failed");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(`Cannot connect to server. Please make sure the backend is reachable at ${API_URL}.`);
    }
    throw error;
  }
};

export const saveUser = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getToken = () => localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
