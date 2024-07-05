import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Vikas Sisodiya raised in an Indore Madhaya Pradesh India, a passionate and innovative Frontend Developer with a strong foundation in web development. I hold a Bachelor of Technology in Computer Science from Swami Vivekanand College of Engineering, where I graduated with a CGPA of 7.50.
        </p>

        <br />

        <p className="text-xl">
          With hands-on experience in creating responsive and user-friendly web applications, I specialize in using the MERN stack to build dynamic and efficient websites. My notable projects include developing a live tiffin offering website, “Foodoormeal,” which received positive feedback for its seamless functionality and user interface.
        </p>
        <br/>
        <p className="text-xl">
          I am proficient in programming languages such as C++, Java, and JavaScript, and have expertise in frameworks like React and Express. My skills extend to database management with MySQL and MongoDB, and I am certified in Full Stack Web Development and React.
        </p>
        <br/>
        <p className="text-xl">
          I am committed to continuous learning and professional development, aiming to leverage my skills to drive user engagement and conversion rates. Let’s connect and explore how I can contribute to your next project!            </p>
      </div>
    </div>
  );
};

export default About;
