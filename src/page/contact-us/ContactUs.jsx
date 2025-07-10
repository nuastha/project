import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setSubmitted(true);
    axios.post(`${import.meta.env.VITE_BASE_URL}`)
    setTimeout(() => setSubmitted(false), 3000); // hide after 3s
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 ">
        <div className="md:w-1/2 w-full text-right space-y-4 text-balance leading-relaxed tracking-wide">
          <h4 className="text-3xl font-bold">Contact Us</h4>
          <p>
            fill the form for get more info about the dream to reality for
            business leads and website. thank you for your visiting.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:max-w-md w-full"
        >
          <fieldset className="space-y-2">
            <label htmlFor="fullname" className="block font-medium">
              Fullname
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your name"
              {...register("fullname", { required: "Fullname is required" })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
            )}
          </fieldset>

          <fieldset className="space-y-2">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="space-y-2">
            <label htmlFor="number" className="block font-medium">
              Contact No.
            </label>
            <input
              id="number"
              type="number"
              placeholder="Enter phone number"
              {...register("number", {
                required: "Contact number is required",
              })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </fieldset>

          <fieldset>
            <label htmlFor="mainContent" className="block font-medium">
              Message
            </label>
            <textarea
              id="mainContent"
              rows={5}
              placeholder="Write your message..."
              {...register("mainContent")}
              className="w-full border border-gray-300 p-2 rounded resize-none"
            />
          </fieldset>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600 text-sm mt-2">
              ✅ Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
