import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../api/http";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      setError(null);
      const response = await api.post("/contact", data);
      if (response.status === 201) {
        setSubmitted(true);
        reset();
      }
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Failed to submit. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 ">
        <div className="md:w-1/2 w-full text-right space-y-4 text-balance leading-relaxed tracking-wide">
          <h4 className="text-3xl font-bold">Contact Us</h4>
          <p>
            Fill out the form to get more information about turning your dream
            into reality — whether it's for business leads or a website. Thank
            you for visiting!
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
            disabled={isSubmitting}
            className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {submitted && (
            <p className="text-green-600 text-sm mt-2">
              ✅ Form submitted successfully!
            </p>
          )}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </section>
  );
}
