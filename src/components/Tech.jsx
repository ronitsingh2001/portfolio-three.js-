import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have learnt so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Technical Skills</h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
          <p className="text-center font-mono text-[16px] font-bold text-[#9f9f9f]">{tech.name}</p>
        </div>
      ))}
    </div>
      </>
  );
};

export default SectionWrapper(Tech, "");
