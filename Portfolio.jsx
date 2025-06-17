import { motion } from "framer-motion";
import htmlLogo from "./assets/html.png";
import cssLogo from "./assets/css.png";
import tailwindLogo from "./assets/tailwind.png";
import bootstrapLogo from "./assets/bootstrap.png";
import jsLogo from "./assets/javascript.png";
import reactLogo from "./assets/react.png";
import reduxLogo from "./assets/redux.png";
import javaLogo from "./assets/java.png";
import springLogo from "./assets/springboot.png";
import nodeLogo from "./assets/node.png";
import expressLogo from "./assets/express.png";
import mysqlLogo from "./assets/mysql.png";
import mongodbLogo from "./assets/mongodb.png";
import hibernateLogo from "./assets/hibernate.png";
import profileImage from "./assets/sakshi.jpg";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900 font-sans">
      <header className="flex justify-between items-center p-6 shadow-md sticky top-0 bg-white z-50">
        <div className="text-2xl font-extrabold text-purple-600">Sakshi</div>
        <nav className="space-x-6 hidden md:flex font-semibold">
          <a href="#home" className="hover:text-purple-500">Home</a>
          <a href="#about" className="hover:text-purple-500">About</a>
          <a href="#skills" className="hover:text-purple-500">Skills</a>
          <a href="#services" className="hover:text-purple-500">Services</a>
          <a href="#education" className="hover:text-purple-500">Education</a>
          <a href="#experience" className="hover:text-purple-500">Internship Experience</a>
          <a href="#projects" className="hover:text-purple-500">Projects</a>
          <a href="#contact" className="hover:text-purple-500">Contact</a>
        </nav>
      </header>

      <section id="home" className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <motion.img 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          src={profileImage} 
          alt="Sakshi Kiran Deore"
          className="rounded-full w-48 h-48 object-cover border-4 border-purple-400 mb-6 shadow-xl" 
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hi! I'm <span className="text-purple-500">Sakshi Kiran Deore</span></h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">
          Full Stack Developer | Java | MERN | Web Developer | Front-End Developer
        </h2>
        <p className="max-w-3xl text-gray-700 text-lg">
          Electronics & Telecommunication Engineer passionate about developing scalable web applications, automation, AI solutions and delivering high-quality projects using latest technologies.
        </p>
        <div className="flex gap-6 mt-10">
          <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-110 transition-transform">Contact Me</a>
         <a href="/Sakshi-Kiran-Deore-Resume.pdf" download className="border-2 border-purple-500 px-8 py-4 rounded-full text-lg hover:bg-purple-500 hover:text-white transition">
  Download CV
</a>

        </div>
        
      </section>

      <section id="about" className="py-24 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <p className="max-w-5xl mx-auto text-lg text-center text-gray-700">
          I'm a highly motivated Full Stack Developer with strong foundation in Frontend, Backend, Databases, Testing & Cloud Technologies. My expertise includes developing end-to-end applications using React.js, Node.js, Java, Spring Boot, SQL, MongoDB, REST APIs and deploying applications on AWS Cloud with CI/CD pipelines. I'm passionate about continuous learning and building modern solutions.
        </p>
      </section>

      <section id="skills" className="py-24 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Languages</h3>
            <ul className="text-gray-700 leading-8 text-lg">
              <li>Java, JavaScript, HTML5, CSS3, SQL</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Frontend Technologies</h3>
            <ul className="text-gray-700 leading-8 text-lg">
              <li>HTML, CSS, Tailwind, Bootstrap, JavaScript, React.js, Redux</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Backend Technologies</h3>
            <ul className="text-gray-700 leading-8 text-lg">
              <li>Core Java, Spring Boot, Node.js, Express.js</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Database Technologies</h3>
            <ul className="text-gray-700 leading-8 text-lg">
              <li>MySQL, MS SQL SERVER, MS Access, SnowFlake</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Testing & Methodologies</h3>
            <ul className="text-gray-700 leading-8 text-lg">
              <li>Selenium, JUnit, Postman, API Testing, Agile, Scrum, SDLC</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Tools & Cloud</h3>
            <ul className="text-gray-700 leading-8 text-lg">
              <li>Git, GitHub, JIRA, Tableau, ETL Pipelines, CI/CD Pipelines, AWS</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">What I Offer - My Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Web Design</h3>
            <p>Transforming visions into stunning digital experiences that captivate users. I craft beautiful websites that perform seamlessly.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Mobile App</h3>
            <p>Developing intuitive mobile applications that provide seamless experiences across all devices with cutting-edge technology.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
            <p>Designing beautiful interfaces that are functional and highly usable. I focus on smooth, enjoyable and memorable user experiences.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Game Development</h3>
            <p>Bringing immersive gaming experiences to life with stunning visuals, intuitive gameplay and compelling storylines.</p>
          </motion.div>
        </div>
      </section>

      <section id="education" className="py-24 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">B.E. Electronics & Telecommunication</h3>
            <p className="text-purple-600">Amrutvahini College of Engineering</p>
            <p>CGPA: 8.54 | 2021-2024</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Diploma in Information Technology</h3>
            <p className="text-purple-600">Amrutvahini Polytechnic College</p>
            <p>CGPA: 8.81 | 2018-2021</p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Internship Experience</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Full Stack Web Development Intern</h3>
            <p className="text-purple-600">Valt Technology</p>
            <p>Duration: 6 months</p>
            <p>React.js, SQL, MySQL, Agile, CI/CD Pipeline</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Test Engine Internship</h3>
            <p className="text-purple-600">Internal Academic Project</p>
            <p>Duration: 6 months</p>
            <p>React.js, Node.js, Express.js, MongoDB</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Arduino Programming & IoT Intern</h3>
            <p className="text-purple-600">Techno-Spark</p>
            <p>Arduino & IoT Applications Integration</p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Test Engine</h3>
            <p>Automated test engine to generate and evaluate quizzes using React.js, Node.js, Express.js</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">IoT-Based Tomato Sorting</h3>
            <p>IoT sensors and image processing for tomato classification based on ripeness.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Face Mask Detection</h3>
            <p>Real-time face mask detection using CNN, TensorFlow, and OpenCV.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Stock Market Sentiment Analysis</h3>
            <p>Sentiment analysis dashboard using Tableau and Snowflake for real-time market insights.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <h2 className="text-4xl font-bold text-center mb-10">Connect With Me</h2>
        <div className="max-w-xl mx-auto text-center">
          <form className="grid gap-6">
            <input type="text" placeholder="Enter your name" className="p-4 border rounded-lg" />
            <input type="email" placeholder="Enter your email" className="p-4 border rounded-lg" />
            <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg text-lg shadow-lg hover:scale-110 transition-transform">Submit Now</button>
          </form>
          <div className="mt-10 text-lg text-gray-700">
            <p>📧 deoresakshi7@gmail.com</p>
             <div className="flex justify-center gap-6 mt-4">
              <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">🔗 LinkedIn</a>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:underline">💻 GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm bg-white">
        © 2025 Sakshi Kiran Deore. All rights reserved.
      </footer>
    </div>
  );
}
