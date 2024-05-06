import { Box } from "@radix-ui/themes";

const Section = ({ children, className }) => {
  return (
    <Box
      className={
        `relative bg-[var(--gray-1)] lg:px-[20%] lg:py-[70px]  md:px-[50px] py-[50px] px-[30px] z-10 ` +
        className
      }
    >
      {children}
    </Box>
  );
};

export default Section;
