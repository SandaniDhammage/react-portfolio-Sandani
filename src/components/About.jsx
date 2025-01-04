import about from "../assets/about.png";
import {motion} from "framer-motion";

const About = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">About  <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
             className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={about} alt="about" className="w-[25rem] h-[25rem] object-cover" />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">I am a passionate and versatile IT undergraduate, deeply committed to leveraging technology to solve real-world problems and create impactful digital solutions. With a robust foundation in web development, quality assurance, and UI/UX design, I have honed my skills through diverse projects and academic pursuits, blending creativity and technical expertise to deliver exceptional results.<br></br>

As a web developer, I specialize in building responsive, user-friendly, and scalable web applications using HTML, CSS, JavaScript, React, and the MERN stack. My proficiency extends to integrating front-end and back-end technologies, ensuring seamless functionality and outstanding user experiences.<br></br>

In quality assurance, I am adept at both manual and automated testing. Utilizing tools such as Selenium, Java, and TestNG, I ensure software meets high standards of reliability and performance, striving for flawless execution in every project I undertake.<br></br>

My passion for design is reflected in my UI/UX expertise. From conducting user research and creating wireframes to building interactive prototypes in Figma, I focus on crafting intuitive and visually engaging user interfaces that enhance user satisfaction.

Beyond technical skills, I pride myself on being a quick learner, a collaborative team player, and an effective communicator. I thrive in dynamic environments where innovation and adaptability are key to success.<br></br>

Driven by a relentless curiosity and a desire for continuous improvement, my ultimate goal is to harness my diverse skill set to contribute meaningfully to the tech industry. Whether solving complex challenges, ensuring software quality, or creating compelling designs, I am dedicated to making a positive impact through technology.</p>
            </div>
        </motion.div>
        </div>
  </div>
}

export default About