import { useState } from "react";
import { Img } from "react-image";

import clsx from "clsx";

export default function ContactMe() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const contactFormStyles = clsx(
    "w-[80%] h-[12%] text-black/80 bg-transparent pl-2 rounded-xl border-2 border-black dark:border-white border-dashed shadow-md outline-none placeholder:text-black/80",
    "focus:border-solid",
    "dark:text-white/90 dark:placeholder:text-white/90"
  );

  const textareaStyles = clsx(
    "w-[80%] h-[35%] text-black/80 bg-transparent p-2 shadow-md rounded-xl border-2 border-dashed border-black dark:border-white outline-none resize-none overflow-x-auto placeholder:text-black/80",
    "focus:border-solid",
    "dark:text-white/90 dark:placeholder:text-white/90"
  );

  return (
    <div className="w-full h-full md:flex">
      <form className="w-full h-full md:w-[50%] p-5">
        <section className="w-full h-[15%]">
          <h2 className="font-bold text-2xl">Chat with Echo</h2>
          <p>
            Echo is more than happy to assist you for any question, doubt, work,
            etc.
          </p>
        </section>

        <div className="flex flex-col justify-evenly items-center w-full h-[70%]">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={contactForm.name}
            onChange={(e) =>
              setContactForm({ ...contactForm, name: e.target.value })
            }
            className={contactFormStyles}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={contactForm.email}
            onChange={(e) =>
              setContactForm({ ...contactForm, email: e.target.value })
            }
            className={contactFormStyles}
          />
          <input
            type="tel"
            name="phone_number"
            placeholder="+1 (555) 000-0000"
            pattern="+[0-40]{1} [0-9]{3} [0-9]{3}-[0-9]{4}"
            value={contactForm.phoneNumber}
            onChange={(e) =>
              setContactForm({ ...contactForm, phoneNumber: e.target.value })
            }
            className={contactFormStyles}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={contactForm.message}
            onChange={(e) =>
              setContactForm({ ...contactForm, message: e.target.value })
            }
            className={textareaStyles}
          />
        </div>

        <div className="flex justify-center items-center w-full h-[15%]">
          <button
            type="submit"
            className="w-[80%] h-[50%] font-bold text-black bg-robbinBlue rounded-3xl hover:scale-105 duration-150"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="hidden justify-center items-center w-[50%] h-full md:flex">
        <Img
          src="/IMGs/echo_v3.png"
          className="w-[96%] h-[96%] object-cover rounded-xl shadow-md brightness-90"
        />
      </div>
    </div>
  );
}
