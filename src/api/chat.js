const API_URL = "http://localhost:5005/api";

export const sendMessage = async (message) => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error("Please login to use the chatbot");
    }

    const response = await fetch(`${API_URL}/chat/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Failed to send message");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getChatHistory = async () => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      return { messages: [] };
    }

    const response = await fetch(`${API_URL}/chat/history`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return { messages: [] };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { messages: [] };
  }
};