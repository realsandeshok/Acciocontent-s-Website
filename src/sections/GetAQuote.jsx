import React, { useState } from "react";
import redCheck from "../assets/check-red.png";
import whiteCheck from "../assets/check-white.png";

function GetAQuote() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [status, setStatus] = useState({ message: "", success: null });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    platform: "",
    platformUrl: "",
    currentOccupation: "",
    age: "",
    city: "",
  });

  const handleOpenModal = (packageName) => {
    setSelectedPackage(packageName);
    setIsOpen(true);
    setStatus({ message: "", success: null }); //Reset Status
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      platform: "",
      platformUrl: "",
      currentOccupation: "",
      age: "",
      city: "",
    });
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize the form payload with common fields
    const formPayload = {
      service_id: "service_ouuc7ea", // Your EmailJS service ID
      template_id: "template_xlyw089", // Your EmailJS template ID
      user_id: "yHmQ0Vldn8e1OL3UP", // Your EmailJS public key (user_id)
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        to_email: formData.email,
        to_name: "Virtual Snipers",
        selected_package: selectedPackage,
        contact_number: formData.contactNumber,
        platform: formData.platform,
        platform_url: formData.platformUrl,
        message: "", // Will be customized based on form type
      },
    };

    // Customize the form payload based on selected package
    if (selectedPackage === "Personal Brand Starter Package") {
      formPayload.template_params.message = `
            This is a request for the ${selectedPackage}.
            Name: ${formData.name},
            Contact Number: ${formData.contactNumber},
            Email ID: ${formData.email},
            Platform: ${formData.platform}, 
            Platform URL: ${formData.platformUrl}
          `;
    } else if (
      selectedPackage === "Personal Brand Premium Package" ||
      selectedPackage === "Custom Linkedin Personal Branding"
    ) {
      formPayload.template_params.message = `
            This is a request for the ${selectedPackage}.
            Name: ${formData.name},
            Contact Number: ${formData.contactNumber},
            Email ID: ${formData.email},
            Platform: ${formData.platform}, 
            Platform URL: ${formData.platformUrl}
            Current Occupation: ${formData.currentOccupation},
            Age: ${formData.age},
            City: ${formData.city}
          `;
    }

    // Send the email
    try {
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

      if (response.ok) {
        setStatus({
          message: "Thank you! Your request has been submitted successfully.",
          success: true,
        });
        // Reset form data after successful submission
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          platform: "",
          platformUrl: "",
          currentOccupation: "",
          age: "",
          city: "",
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

  const handleChange = (e) => {
    const updatedFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(updatedFormData); // Update form data directly
  };

  const renderCard = (
    packageNumber,
    title,
    description,
    features,
    buttonText,
    isSpecial = false
  ) => (
    <div
      className={`p-8 rounded-2xl shadow-lg flex flex-col justify-between ${
        isSpecial ? "bg-[#b13035] text-white" : "bg-white"
      }`}
    >
      <div className="mb-14">
        <div className="flex items-center justify-between mb-4">
          <img
            src={`https://acciocontent.com/${
              isSpecial ? "legacy1" : "brand2"
            }.svg`}
            alt="package-icon"
            className="h-12 w-12"
          />
          <span
            className={`ml-4 text-xl font-extrabold ${
              isSpecial ? "" : "text-[#b13035]"
            }`}
          >
            {packageNumber}
          </span>
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="mb-6">{description}</p>
        <h5 className="font-semibold mb-2">Includes :</h5>
        <ul className="list-disc list-inside space-y-2">
          {features.map((item, index) => (
            <li key={index} className="flex items-start">
             <img
              src={isSpecial ? whiteCheck : redCheck} // Use whiteCheck for red background and redCheck for white background
              alt="check"
              className="h-5 w-5 mr-2"
            />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center mt-auto">
        <button
          className="bg-[#fd454c] text-white min-w-60 font-semibold py-4 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
          onClick={() => handleOpenModal(title)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );

  const renderForm = () => {
    if (selectedPackage === "Personal Brand Starter Package") {
      return (
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-4">
                Thank you for choosing the {selectedPackage}. Kindly provide the
                below information.
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="platform"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Brand Platform
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="">Select 1</option>
                    <option value="Linkedin">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Youtube">YouTube</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="platformUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Platform URL / Handle
                  </label>
                  <input
                    id="platformUrl"
                    name="platformUrl"
                    value={formData.platformUrl}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email Id
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fd454c] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Submit
                </button>
                <button
                  className="mt-4 text-gray-500"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </form>
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
            </div>
          </div>
        </>
      );
    } else if (selectedPackage === "Personal Brand Premium Package") {
      return (
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md mx-auto h-auto max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">
                Welcome, to schedule your discovery call we need the below
                information.
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="platform"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Brand Platform
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="">Select 1</option>
                    <option value="Linkedin">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Youtube">YouTube</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="platformUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Platform URL / Handle
                  </label>
                  <input
                    id="platformUrl"
                    name="platformUrl"
                    value={formData.platformUrl}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email Id
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentOccupation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Current Occupation
                  </label>
                  <select
                    id="currentOccupation"
                    name="currentOccupation"
                    value={formData.currentOccupation}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="">Select</option>
                    <option value="Salaried">Salaried</option>
                    <option value="Salary + Freelance">
                      Salary + Freelance
                    </option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Full Time Freelancer">
                      Full-Time Freelancer
                    </option>
                    <option value="Seeking New Opportunities">
                      Seeking New Opportunities
                    </option>
                    <option value="Retired">Retired</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Age
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="">Select Age Group</option>
                    <option value="18-25">18-25 years</option>
                    <option value="26-35">26-35 years</option>
                    <option value="36-45">36-45 years</option>
                    <option value="46-60">46-60 years</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your City
                  </label>
                  <input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fd454c] text-white py-2 rounded mt-4"
                >
                  Submit
                </button>
                <button
                  className="mt-4 text-gray-500"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </form>
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
            </div>
          </div>
        </>
      );
    } else if (selectedPackage === "Custom Linkedin Personal Branding") {
      return (
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md mx-auto h-auto max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">
                Welcome, to schedule your discovery call we need the below
                information.
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="platform"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Brand Platform
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="">Select 1</option>
                    <option value="Linkedin">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Youtube">YouTube</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="platformUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Platform URL / Handle
                  </label>
                  <input
                    id="platformUrl"
                    name="platformUrl"
                    value={formData.platformUrl}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email Id
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentOccupation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Current Occupation
                  </label>
                  <select
                    id="currentOccupation"
                    name="currentOccupation"
                    value={formData.currentOccupation}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="">Select</option>
                    <option value="Salaried">Salaried</option>
                    <option value="Salary + Freelance">
                      Salary + Freelance
                    </option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Full Time Freelancer">
                      Full-Time Freelancer
                    </option>
                    <option value="Seeking New Opportunities">
                      Seeking New Opportunities
                    </option>
                    <option value="Retired">Retired</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Age
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  >
                    <option value="">Select Age Group</option>
                    <option value="18-25">18-25 years</option>
                    <option value="26-35">26-35 years</option>
                    <option value="36-45">36-45 years</option>
                    <option value="46-60">46-60 years</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your City
                  </label>
                  <input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fd454c] text-white py-2 rounded mt-4"
                >
                  Submit
                </button>
                <button
                  className="mt-4 text-gray-500"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </form>
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
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="absolute inset-0">
        <img
          src="https://acciocontent.com/pricingbg.png"
          alt="package-bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10 px-4 md:px-8">
        <h2 className="text-center text-4xl md:text-5xl text-white font-bold mb-12">
          Get A Quote
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {renderCard(
            "Package 1",
            "Personal Brand Starter Package",
            "Perfect for individuals who need to get a sense of personal branding strategy and guidance to get started on their own.",
            [
              "15 mins Discovery Call ",
              "One Weekly 15-minute progress review",
              "Instagram or Linkedin or Youtube Profile Optimization.",
              "Customized personal branding Content plan",
              "Content Support for 2 short videos and Editing.",
              "8 Posts based on content plan for Insta / Linkedin OR 4 video editing for Youtube,",
            ],
            "Speak to an Expert"
          )}
          {renderCard(
            "Package 2",
            "Personal Brand Premium Package",
            "Perfect for Entrepreneurs who know they need to move to the next level in their careers/business and want professional guidance & support.",
            [
              "60 mins Discovery Call.",
              "30 Min strategy discussion call.",
              "Two Weekly 15-minute progress reviews.",
              "Linkedin or Youtube Profile Optimization.",
              "Customized Personal Branding Strategy and Content plan Monthly Content Calendar.",
              "4 Thought leadership content / Authority Articles per month.",
              "Content / Script Support for 4 short videos and Editing (reels / shorts).",
              "15 Posts as per content strategy and plan.",
              "Monthly Online PR Plan",
              "Speaker Positions / Panelist for Industry-Specific Events",
              "Interviews with Popular channels on youtube, etc",
            ],
            "Schedule Personal Brand Consultation",
            true
          )}
          {renderCard(
            "Package 3",
            "Custom Linkedin Personal Branding",
            "Perfect for Professionals who want to advance career growth​, foster valuable connections, and generate professional opportunities. Helps establish a thought leadership position with expert guidance & support.",
            [
              "45 mins Discovery Call",
              "One Weekly 15-minute progress reviews.",
              "Linkedin Profile Optimization.",
              "Customized Linkedin Personal Branding Strategy and Content plan.",
              "Linkedin Content Calendar.",
              "4 Thought leadership content / Authority Articles per month.",
              "20 posts per month including Carousels, Statics & Videos (editing only).",
              "1 online PR article per month.",
            ],
            "Consult LinkedIn Expert"
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            {renderForm()}
          </div>
        </div>
      )}
    </section>
  );
}

export default GetAQuote;
