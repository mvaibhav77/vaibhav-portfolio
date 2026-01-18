import { Box } from "@radix-ui/themes";
import Section from "../../Section";
import Image from "next/image";
import Details from "./AboutDetails";

const About = () => {
  return (
    <Section
      className="about mt-[5vh] md:!pt-[140px] lg:!pt-[140px]"
      id="about-section"
      role="region"
      aria-label="About me"
    >
      <Box className="relative lg:p-[35px] md:p-[25px] p-[25px] text-[16px] border-[1px] border-[#ffffff1a]">
        {/* IMAGE */}
        <Box className="image relative aspect-square text-center mx-auto md:float-left lg:float-left w-[120px] lg:w-[160px] md:w-[120px] md:mr-0 mb-[25px] ">
          <Image
            src={"/images/me-anime-2.png"}
            alt="me"
            fill={true}
            className="object-cover rounded-full object-top"
          />
        </Box>

        {/* Description */}
        <Details />

        <Box className="clear-both"></Box>
      </Box>
    </Section>
  );
};

export default About;
