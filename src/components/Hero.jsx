import profilepic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const titles = ["Web Developer", "Quality Assurance Engineer", "UI/UX Designer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Cycle through the titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="pb-16 text-2xl font-medium tracking-tight lg:mt-16 lg:text-6xl"
            >
              Sandani Dhammage
            </motion.h1>
            <motion.span
              key={currentTitleIndex} // Add key to trigger animation on change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {titles[currentTitleIndex]}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              I am a versatile IT undergraduate with a strong foundation in web
              development, quality assurance, and UI/UX design. Proficient in
              HTML, CSS, JavaScript, React, and the MERN stack, I specialize in
              crafting responsive and dynamic web applications. With expertise
              in manual and automated testing using tools like Selenium, Java,
              and TestNG, I ensure the delivery of reliable and high-quality
              software. Additionally, my skills in Figma, wireframing, and
              prototyping empower me to design intuitive and engaging user
              interfaces. Driven by a passion for innovation, my goal is to
              harness my technical and creative abilities to create impactful IT
              solutions while continuously expanding my knowledge and skills in
              the field.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.5 }}
              src={profilepic}
              alt="profile"
              className="rounded-full w-80 h-90 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
