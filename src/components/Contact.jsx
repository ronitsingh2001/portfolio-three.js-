import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // template_ips5tjb
  // service_oaas8m2
  // kRRFvY3oiBAJ6AHhoFU68

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_oaas8m2", "template_ips5tjb",
    {
      from_name: form.name,
      to_name: 'Ronit Singh',
      from_email:form.email,
      to_email:'ronitsingh2112@gmail.com',
      message: form.message,
    },
     'EqNXnAZk8O94jqjNl'
    ).then(()=>{
      setLoading(false)
      alert('Thank you, I will get back to you as soon as possible!')
      setForm({
        name:'',
        email:'',
        message:''
      })
    },(error)=>{
      console.log(error)
      alert('Oops! Something went wrong.')
      setLoading(false)
    })
   };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="what's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="what's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
          </label>
          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="what do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
          />
          <button
            type="submit"
            className="bg-tertiary px-8 py-3 outline-none w-fit shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
