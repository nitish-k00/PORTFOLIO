import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const service_id = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const user_id = process.env.REACT_APP_EMAIL_PUBLIC_API_KEY;
  const template_id = process.env.REACT_APP_EMAIL_TEMPLATE_ID;

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, message } = formData;

    if (!email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        service_id,
        template_id,
        {
          user_email: email,
          user_message: message,
        },
        user_id
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Email sent successfully!");
          setFormData({ email: "", message: "" });
          setFormSubmitted(true);
        },
        (error) => {
          setLoading(false);
          console.error("Failed to send email:", error);
          setStatus("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "var(--main-bg)",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {!formSubmitted ? (
        <>
          <h2
            style={{
              textAlign: "center",
              color: "var(--text-color)",
              fontFamily: "Arial, sans-serif",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  fontWeight: "var(--font-weight-bolder)",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "all 0.3s ease",
                }}
                required
                placeholder="Enter your email"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  fontWeight: "var(--font-weight-bolder)",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "all 0.3s ease",
                  minHeight: "120px",
                }}
                required
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "6px",
                backgroundColor: "var(--another-color)",
                color: "white",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                opacity: loading && "0.5",
              }}
              disabled={loading}
            >
              {loading ? (
                <span style={{ fontSize: "16px", opacity: "0.5" }}>
                  Sending...
                </span>
              ) : (
                "Send Email"
              )}
            </button>
          </form>
        </>
      ) : (
        <p
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "rgba(0, 128, 0, 0.1)",
            color: "green",
            fontWeight: "var(--font-weight-bolder)",
            borderRadius: "6px",
            fontSize: "18px",
          }}
        >
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {status && !formSubmitted && (
        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            padding: "10px",
            borderRadius: "6px",
            fontWeight: "var(--font-weight-bolder)",
            color: status.includes("success") ? "green" : "red",
            backgroundColor: status.includes("success")
              ? "rgba(0, 128, 0, 0.1)"
              : "rgba(255, 0, 0, 0.1)",
          }}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default EmailForm;
