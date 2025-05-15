"use client"
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import { Button } from "./ui/MovingBorder";
import {useState} from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [sendSuccess, setSendSuccess] = useState(false);
  const [buttonText, setButtonText] = useState("Download CV");
  const [buttonState, setButtonState] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail("");
    setMessage("");
    setSendError("");
    setSendSuccess(false);
  };

  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event:any) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setIsSending(true);
    setSendError("");
    setSendSuccess(false);

    try {
      const response = await fetch(
        "https://sendemail-2iad2skovq-uc.a.run.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: `Contact Form Submission from ${email}`,
            text: message,
            html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
          }),
        }
      );

      if (response.ok) {
        setSendSuccess(true);
        setEmail("");
        setMessage("");
        setTimeout(closeModal, 2000); // Close modal after successful send
      } else {
        const errorData = await response.json();
        setSendError(
          errorData?.error || "Failed to send email. Please try again."
        );
      }
    } catch (error) {
      setSendError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

   


  const handleDownload = () => {
    const pdfUrl = "/CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setButtonText("CV Downloaded");
    setButtonState(true)
    setTimeout(() => {
      setButtonText("Download CV");
      setButtonState(false)
    }, 3000);
  };

  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div>
        <Spotlight className=" h-screen" fill="grey" />
        <Spotlight className=" left-full h-[80vh]" fill="violet" />
        <Spotlight className=" left-80 h-[80vh] w-[50vw]" fill="#87CEEB" />
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]"></h1>
        <div className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </div>
     
        <Button
            onClick={openModal}
        >Contact Me</Button>

      </div>
      <br /> <br />
       <div id = "resume"  className="flex flex-col items-center">       
             <Button disabled= {buttonState} id="downloadcv" onClick={handleDownload}
            
        >{buttonText}</Button></div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Lee Payne
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.href} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>



      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50">
          <div className="bg-black-300 rounded-lg p-8 w-full max-w-md">
            <h2 className="text-xl font-semibold text-white-100 mb-4">
              Contact Me
            </h2>
            {sendSuccess && (
              <div className="bg-green-500 text-white p-3 rounded-md mb-4">
                Message sent successfully!
              </div>
            )}
            {sendError && (
              <div className="bg-red-500 text-white p-3 rounded-md mb-4">
                {sendError}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white-200 text-sm font-bold mb-2"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-100 leading-tight focus:outline-none focus:shadow-outline bg-black-200 border-black-400"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white-200 text-sm font-bold mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-100 leading-tight focus:outline-none focus:shadow-outline bg-black-200 border-black-400 h-32 resize-none"
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
                <button
                  className="inline-block align-baseline font-bold text-sm text-violet-300 hover:text-violet-500"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
