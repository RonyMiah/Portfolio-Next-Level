
"use client"


import React from "react";
import { Form, Input, Button, message } from "antd";
import { useForm } from "react-hook-form";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    // Replace with your form submission logic (e.g., send data to backend)
    console.log(data);
    message.success("Message sent successfully!");
    reset(); // Reset form fields after successful submission
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="#contact">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div
        id="contact"
        className="pt-10 flex items-center justify-center "
      >
        <div className="bg-white-200 shadow-md rounded-lg p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            CONTACT ME

          </h2>
          <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                className="py-2"
                placeholder="Your Name"
                {...register("name")}
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                className="py-2"
                placeholder="you@example.com"
                {...register("email")}
              />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                className="py-2"
                rows={4}
                placeholder="Your Message"
                {...register("message")}
              />
            </Form.Item>

            <Form.Item>
              <Button className="py-5" type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
