"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useFormState } from "react-dom";

const Page = () => {
  const text = "say Hello to me!!!";
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form element

  const handlesubmit = async (prevState: any, FormData: FormData) => {
    const email = FormData.get("user_email");
    const message = FormData.get("user_message");
    const ph_no = FormData.get("user_phone");
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/e2d908937711d1a1200e7a0eae7f3de0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            message: message,
            phone_: ph_no,
          }),
        }
      );
      const data = await res.json();
      resetForm();
      return data;
    } catch (error) {
      return { error: `error is${error}` };
    }
  };

  const [state, formaction] = useFormState(handlesubmit, undefined);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset(); // Reset the form using the ref
    }
  };

  const processText = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index}>&nbsp;</span>; // Using &nbsp; for spaces
      } else {
        return (
          <motion.span
            className="text-black"
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              repeat: Infinity,
              delay: index * 0.1,
              duration: 3,
            }}
          >
            {char}
          </motion.span>
        );
      }
    });
  };

  // const handlesubmit = async (FormData: FormData) => {
  //   const email = FormData.get("user_email");
  //   const message = FormData.get("user_message");
  //   const ph_no = FormData.get("user_phone");
  //   fetch("https://formsubmit.co/ajax/marrytime.14@gmail.com", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       message: message,
  //       phone_: ph_no,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-140vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 flex lg:flex-row flex-col gap-24 lg:gap-0 pb-10 pt-10 lg:pt-0 lg-pb-0">
        {/* {animated word} */}
        <div className="lg:w-1/2 flex justify-center items-center text-3xl">
          {/* {Array.from(text).map((txt, index) => {
            return (
              <motion.span
                className="text-black"
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  delay: index * 0.1,
                  duration: 3,
                }}
              >
                {txt}
              </motion.span>
            );
          })} */}

          {processText(text)}
        </div>
        {/* {email part} */}
        <div className="lg:w-1/2 flex justify-center items-center ">
          <form
            ref={formRef}
            className="flex flex-col gap-8"
            // action={"https://formsubmit.co/marrytime.14@gmail.com"}
            action={formaction}
            // method="POST"
          >
            <span>Dear thiha,</span>
            <textarea
              rows={4}
              cols={30}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none"
              name="user_message"
              required
              placeholder="message"
            />
            <span>My mail address is:</span>
            <input
              required
              name="user_email"
              type="email"
              className="bg-transparent border-b-2 border-b-black outline-none"
            />
            <span>My phone number is:</span>
            <input
              type="tel"
              name="user_phone"
              required
              className="bg-transparent border-b-2 border-b-black outline-none"
            />
            <span>Regards</span>
            <button
              type="submit"
              className="bg-purple-200 rounded font-semibold text-gray-500 p-4"
            >
              Send
            </button>
            {state?.error && (
              <span className="text-red-600">{state.error}</span>
            )}
            {state?.success && (
              <span className="text-green-600">
                thz you for sending me a message
              </span>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
