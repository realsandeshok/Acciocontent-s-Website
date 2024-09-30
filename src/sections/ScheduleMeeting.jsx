import React, { useState } from "react";

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    email: "",
    phone: "",
    experience: "",
    urgency: "",
  });

  const [status, setStatus] = useState({ message: "", success: null });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = {
      service_id: "service_n5whnxa", // Service ID from EmailJS
      template_id: "template_66taxfl", // Template ID from EmailJS
      user_id: "gs2E4Ek6WTsMaoPuh", // Public user ID from EmailJS (for authentication)
      template_params: {
        from_name: formData.name, // Form field 'name'
        from_email: formData.email, // Form field 'email'
        to_email: formData.email,
        to_name: "Virtual Snipers",
        profession: formData.profession, // Form field 'profession'
        phone: formData.phone, // Form field 'phone'
        experience: formData.experience, // Form field 'experience'
        urgency: formData.urgency,
        message: "",
      },
    };

    formPayload.template_params.message = `
      This is a request to Schedule a Meeting for ${formData.name}.
      Name: ${formData.name},
      Contact Number: ${formData.phone},
      Email ID: ${formData.email},
      Profession: ${formData.profession}, 
      Experience: ${formData.experience},
      Urgency: ${formData.urgency}
      `;

    try {
      // Send form data via EmailJS
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formPayload),
        }
      );

      if (response.status === 200) {
        setStatus({
          message:
            "Thank you! Your meeting request has been submitted successfully.",
          success: true,
        });
        setFormData({
          name: "",
          profession: "",
          email: "",
          phone: "",
          experience: "",
          urgency: "",
        });
      } else {
        setStatus({
          message: "There was an issue with your submission. Please try again.",
          success: false,
        });
      }
    } catch (error) {
      setStatus({
        message:
          "Something went wrong. Please check your connection and try again.",
        success: false,
      });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center py-[70px] bg-[#f6f0ee] px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl items-center justify-center sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 sm:mb-8">
        Schedule a Meeting
      </h1>
      <div className="flex flex-col justify-center items-center w-full max-w-6xl bg-white shadow-md rounded-lg border border-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-base sm:text-lg font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="border border-gray-300 rounded-lg p-3 shadow-sm"
                required
              />
            </div>

            {/* Profession */}
            <div className="flex flex-col">
              <label className="text-base sm:text-lg font-semibold mb-1">
                I am a
              </label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 shadow-sm"
                required
              >
                <option value="">Select Profession</option>
                <option value="Salaried">Salaried</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-base sm:text-lg font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Id."
                className="border border-gray-300 rounded-lg p-3 shadow-sm"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-base sm:text-lg font-semibold mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone No."
                className="border border-gray-300 rounded-lg p-3 shadow-sm"
                required
              />
            </div>

            {/* Experience */}
            <div className="flex flex-col">
              <label className="text-base sm:text-lg font-semibold mb-1">
                Work / Business Experience
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 shadow-sm"
                required
              >
                <option value="">Select Experience</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="More than 5 years">More than 5 years</option>
              </select>
            </div>

            {/* Urgency */}
            <div className="flex flex-col">
              <label className="text-base sm:text-lg font-semibold mb-1">
                My requirement is
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 shadow-sm"
                required
              >
                <option value="">Select Urgency</option>
                <option value="Immediate">Immediate</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="No rush">No rush</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 w-full rounded-lg shadow-md transition-colors duration-300"
            >
              Schedule Meeting
            </button>
          </div>

          {/* Display status message */}
          {status.message && (
            <div
              className={`text-center mt-6 font-semibold ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ScheduleMeeting;
