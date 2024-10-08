import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import redEbook from "../assets/red_ebook.svg";
import books from "../assets/down_ebook.png";

export default function Download() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState({ message: "", success: null });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    otp: "", // Added OTP field
  });
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent
  const [generatedOtp, setGeneratedOtp] = useState(""); // Store generated OTP

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset the form fields to empty
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      otp: "", // Reset OTP field
    });
  };

  const sendOtp = async () => {
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
    setGeneratedOtp(otp); // Store the generated OTP

    const otpPayLoad = {
      service_id: "service_s8x23ah",
      template_id: "template_fnd7nvr",
      user_id: "-wnHyyidH-te89KfQ",
      template_params: {
        // from_name: "Virtual Snipers",
        to_name: formData.name,
        to_email: formData.email,
        otp: otp,
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(otpPayLoad),
        }
      );

      if (response.ok) {
        setStatus({
          message: "OTP has been sent to your email.",
          success: true,
        });
        setOtpSent(true); // Mark OTP as sent
      } else {
        const errorData = await response.json();
        setStatus({
          message: errorData.message || "Error sending OTP. Please try again.",
          success: false,
        });
      }
    } catch (error) {
      setStatus({
        message: "Error sending OTP. Please try again.",
        success: false,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the OTP matches before proceeding
    if (formData.otp !== generatedOtp) {
      setStatus({
        message: "Invalid OTP. Please try again.",
        success: false,
      });
      return;
    }

    const formPayload = {
      service_id: "service_zg141xq",
      template_id: "template_q1hwnco",
      user_id: "8MQoMYDWbZ5YSy3Se",
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        to_email: formData.email,
        to_name: "Virtual Snipers",
        contact_number: formData.contactNumber,
        message: `${formData.name} downloaded Ebook.`,
      },
    };

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
          otp: "", // Reset OTP field
        });
        setOtpSent(false); // Reset OTP sent status
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="z-20 fixed lg:bottom-8 lg:left-8 left-3 bottom-3 flex flex-col items-center rounded-lg lg:bg-red-600 p-4 text-white lg:border-white lg:border-[1px] lg:shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <img
          src={books}
          alt="Ebook"
          className="absolute top-[-55px] hidden lg:block"
        />
        <div className="md:hidden flex items-center justify-center">
          <img src={redEbook} alt="Download E-book" className="h-8 w-8" />
        </div>
        <div className="hidden md:flex flex-col items-center">
          <div className="text-md">Level Up Your Personal Brand:</div>
          <div className="text-2xl font-bold">Grab Your Free E-book</div>
        </div>
        <button className="mt-2 bg-sky-300 text-black hover:bg-sky-400 p-2 rounded-lg hidden md:block">
          Download Now!
        </button>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg relative mx-4 sm:mx-0">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">Grab Your Free E-book</h2>
              <button
                className="text-gray-600 hover:text-gray-800 ml-4"
                onClick={handleCloseModal}
              >
                <CrossIcon />
              </button>
            </div>

            <div className="flex flex-col">
              <form onSubmit={handleSubmit} className="w-full space-y-4 mt-4">
                <div>
                  <label htmlFor="name" className="block font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block font-medium">
                    Contact Number
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={formData.contactNumber}
                    onChange={(phone) =>
                      setFormData({ ...formData, contactNumber: phone })
                    }
                    inputClass="!pl-14 !w-full !border !rounded-lg !p-2 !h-10"
                    containerClass="w-full h-10"
                    buttonClass="rounded-l-lg"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <label htmlFor="email" className="block font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full border p-2 rounded"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={sendOtp}
                    className="w-24 bg-red-600 text-white p-2 rounded hover:bg-red-700 mt-6"
                    disabled={otpSent} // Disable the button after sending OTP
                  >
                    Send OTP
                  </button>
                </div>
                {/* OTP Section */}
                {otpSent && (
                  <div>
                    <label htmlFor="otp" className="block font-medium">
                      Enter OTP
                    </label>
                    <input
                      id="otp"
                      name="otp"
                      type="text"
                      value={formData.otp}
                      onChange={handleChange}
                      placeholder="Enter the OTP"
                      className="w-full border p-2 rounded"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
                >
                  Submit
                </button>
              </form>

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
        </div>
      )}
    </>
  );
}

function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-600 hover:text-gray-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
