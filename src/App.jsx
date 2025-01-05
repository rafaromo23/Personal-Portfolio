const App = () => (
  <main className="relative bg-darkest">
    <header className="py-3 w-full bg-darkest text-lighter">  
      <nav className="py-3 bg-darkest">
        <ul className="flex justify-center space-x-12">
          <li>
            <a href="#home" className="font-mont p-2 rounded-xl hover:bg-darker">Home</a>
          </li>
          <li>
            <a href="#projects" className="font-mont p-2 rounded-xl hover:bg-darker">Projects</a>
          </li>
          <li>
            <a href="#contact" className="font-mont p-2 rounded-xl hover:bg-darker">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    

    {/* HOME SECTION */}
    <section id="home" className="flex flex-col md:flex-row h-auto md:h-[80vh]">

      {/* Left side */}
      <section className="flex w-full md:w-1/2 items-center justify-center md:justify-end bg-darkest text-lighter">
        <header className="text-center">
          <h1 className="font-mont text-4xl py-6 md:text-6xl">Hello, I am Rafael Romo</h1>
          <p className="font-mont text-base md:text-xl">A computer science student at Columbia University</p>
          <p className="font-mont sm:max-md:text-sm">Here is my Resume:  
            <button className="px-5 py-5"><a href="/public/RafaelRomo_Resume.pdf" target="_blank" 
            className="inline-block bg-gradient-to-r from-darker to-lightest text-darkest py-1 px-4 md:py-3 md:px-8 rounded-xl text-sm md:text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter"> Resume</a></button>
          </p>
        </header>
      </section>
    
      {/* Right side */}
      <section className="flex w-full md:w-1/2 items-center justify-center bg-darkest">
        <header></header>
        <img src="/public/LinkedInPicture.JPG" alt="Profile Picture" className="w-1/4 md:w-1/2 rounded-lg border-8 border-light shadow-lg transform scale-110"></img>
      </section>
    
    </section>


    {/* PROJECTS SECTION */}
    <section id="projects" className="py-10 bg-darkest h-auto 2xl:h-[60vh] text-lighter">
      <header className="text-center">
        <h1 className="font-mont text-4xl">Projects</h1>
      </header>

      {/* Cards Section */}
      <section className="flex flex-col xl:flex-row xl:space-x-8 xl:mt-8 justify-center items-center space-y-8 xl:space-y-0 xl:items-stretch py-4">

        <section className="bg-lighter w-3/4 xl:w-1/4 p-4 rounded-xl">
          <header className="text-center">
            <h2 className="font-mont text-2xl text-darkest">TopTrackify - View Your Top Artists and Tracks from Spotify</h2>
          </header>
          <p className="font-mont text-darker mt-4">With the release of Spotify Wrapped 2024, I heard rumors that Spotify wasn't displaying our real top tracks and artists. 
            So, I decided to create an app that would use the data straight from the source, the Spotify API. 
            In this project I used OAuth 2.0 to receive tokens and codes from Spotify and then used those tokens to access my personal data, straight from the Spotify database.</p>

          <section className="flex flex-col xl:flex-row justify-center gap-4 mt-6"> 
            <button className="p-5"><a 
              href="https://github.com/rafaromo23/TopTrackify" 
              target="_blank" 
              className="inline-block bg-gradient-to-r from-darker to-lightest text-darkest py-3 px-8 rounded-xl text-base font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter">GitHub</a></button>
          </section>
        </section>

        {/* Card 2 */}
        <section className="bg-lighter w-3/4 xl:w-1/4 p-4 rounded-xl">
          <header className="text-center px-4">
            <h2 className="font-mont text-2xl text-darkest">YouTube Link to MP3 Converter</h2>
          </header>
          <p className="font-mont text-darker mt-4">When making music, I often find myself finding cool samples on YouTube. 
            In order to use them, I'd have to use sketchy websites that converts a YouTube video link to an MP3 file of that video's sound. 
            Tired of the sketchy websites, I decided to make my own, so I have peace of mind with what I'm downloading.</p>
          

          <section className="flex flex-col xl:flex-row gap-4 justify-center pt-12"> 
            <button className="p-5"><a 
              href="/public/RafaelRomo_Resume.pdf" 
              target="_blank" 
              className="inline-block bg-gradient-to-r from-darker to-lightest text-darkest py-3 px-8 rounded-xl text-base font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter">GitHub</a></button>
          </section>
        </section>

      </section>
    </section>

    {/* Languages Section */}
    <section className="py-3 h-auto xl:h-[60vh] bg-darkest text-lighter pt-8">
      <header className="text-center pt-16">
        <h1 className="font-mont text-4xl">Languages and Frameworks</h1>
      </header>

      <section className="flex justify-center pl-[6rem] py-4">
        <section className="flex flex-wrap gap-8 justify-center items-center">
          {/* Row 1 */}
          <section className="flex justify-center items-center w-full py-8">
 
          <section className="flex items-center gap-2 w-1/4">
              <p className="">Python</p>
              <img src="/public/pythonIcon.png" alt="pythonIcon" className="h-12 w-12"></img>
            </section>

            <section className="flex items-center gap-3 w-1/4">
              <p className="">C</p>
              <img src="/public/CIcon.png" alt="CIcon" className="h-12 w-12"></img>
            </section>
            
            <section className="flex items-center gap-2 w-1/4">
              <p className="">Java</p>
              <img src="/public/javaIcon.png" alt="javaIcon" className="h-12 w-12"></img>
            </section>

            <section className="flex items-center gap-2 w-1/4">
              <p className="">JavaScript</p>
              <img src="/public/javascriptIcon.png" alt="javascriptIcon" className="h-12 w-12"></img>
            </section>

            <section className="flex items-center gap-2 w-1/4">
              <p className="">Flask</p>
              <img src="/public/flaskIcon.png" alt="FlaskIcon" className="h-12 w-12"></img>
            </section>

          </section>
          
    
          {/* Row 2 */}
          <section className="flex justify-center items-center w-full py-8">

            <section className="flex items-center gap-2 w-1/4">
              <p className="">HTML</p>
              <img src="/public/HTMLIcon.png" alt="HTMLIcon" className="h-12 w-12"></img>
            </section>

            <section className="flex items-center gap-2 w-1/4">
              <p className="">CSS</p>
              <img src="/public/CSSIcon.png" alt="CSSIcon" className="h-12 w-12"></img>
            </section>

            <section className="flex items-center gap-2 w-1/4">
              <p className="">Tailwind</p>
              <img src="/public/tailwindIcon.png" alt="TailwindIcon" className="h-12 w-12"></img>
            </section>
  
            <section className="flex items-center gap-2 w-1/4">
              <p className="">React</p>
              <img src="/public/reactIcon.png" alt="ReactIcon" className="h-12 w-12"></img>
            </section>

            <section className="flex items-center gap-2 w-1/4">
              <p className="">MATLab</p>
              <img src="/public/matlabIcon.png" alt="MatLabIcon" className="h-12 w-12"></img>
            </section>

          </section>
        </section>  
      </section>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-3 h-auto xl:h-[40vh] bg-darkest text-lighter">
      <header className="text-center">
        <h1 className="font-mont text-4xl">Contact</h1>
      </header>

      <section className="flex flex-wrap justify-center items-center gap-16 pt-16">
        <button className="p-5"><a 
              href="mailto:rr3573@columbia.edu" 
              target="_blank" 
              className="inline-block bg-gradient-to-r from-darker to-lightest text-darkest py-3 px-8 rounded-xl text-base font-semibold 
              shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter">
                Email</a></button>


        <button className="p-5"><a 
              href="https://www.linkedin.com/in/rafael-romo23/" 
              target="_blank" 
              className="inline-block bg-gradient-to-r from-darker to-lightest text-darkest py-3 px-8 rounded-xl text-base font-semibold 
              shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter">
                LinkedIn</a></button>

        <button className="p-5"><a 
              href="https://github.com/rafaromo23" 
              target="_blank" 
              className="inline-block bg-gradient-to-r from-darker to-lightest text-darkest py-3 px-8 rounded-xl text-base font-semibold 
              shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter">
                GitHub</a></button>
      
      
      </section>

    </section>



  </main>
);

export default App;