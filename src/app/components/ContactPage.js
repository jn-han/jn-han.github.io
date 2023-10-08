import React from "react";

const ContactPage = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <section
      id="contact"
      className="flex min-h-screen w-full flex-col items-center justify-between"
    >
      <div className="mt-24 flex flex-col justify-center items-center">
        <h2 className="text-5xl text-green">Contact me</h2>
        <p>
          Whether you want to say hi, ask me questions about my life, or have
          any upcoming opportunities, I would love to talk!
        </p>
        <form className="mt-20 flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-row">
            Name:
            <input
              className=" block w-full p-1 border border-gray-300 rounded-lg focus:ring-green focus:border-green"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-row">
            Email:
            <input
              className=" block w-full p-1 border border-gray-300 rounded-lg"
              type="email"
              name="email"
            />
          </div>
          Your Message:
          <textarea rows="4" name="message"></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
