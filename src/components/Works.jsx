import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          scale: 1,
          speed: 250 ,
        }}
        className="bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px] object-contain">
          <img
            src={image}
            alt={name}
            className="w-auto h-auto object-cover rounded-2xl"
          />
          <div className="absolute justify-end inset-0 flex m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-1">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]"> {description} </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag)=>(
              <p className={`text-[14px] ${tag.color}`}  key={tag.name}>#{tag.name}</p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          Real-world examples of my work. Each project is briefly described with
          link to live demos in it. It reflects my ability to solve problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
