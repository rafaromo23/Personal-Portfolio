const App = () => (
  <main className="relative">
    <header className="py-3 w-full bg-darkest text-lighter">  
      <nav className="py-3 bg-darkest">
        <ul className="flex justify-center space-x-12">
          <li>
            <a href="#" className="font-mont p-2 rounded-xl hover:bg-darker">Home</a>
          </li>
          <li>
            <a href="#" className="font-mont p-2 rounded-xl hover:bg-darker">Projects</a>
          </li>
          <li>
            <a href="#" className="font-mont p-2 rounded-xl hover:bg-darker">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    

    {/* HOME SECTION */}
    <section className="flex h-[80vh]">

      {/* Left side */}
      <section className="flex w-1/2 items-center justify-end bg-darkest text-lighter">
        <header className="text-center">
          <h1 className="font-mont text-6xl py-6">Hello, I am Rafael Romo</h1>
          <p className="font-mont text-xl">A computer science student at Columbia University</p>
          <p className="font-mont">Here is my Resume:  
            <button className="px-5 py-5"><a href="/public/RafaelRomo_Resume.pdf" target="_blank" 
            className="inline-block bg-gradient-to-r from-darker to-lighter text-darkest py-3 px-8 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter"> Resume</a></button>
          </p>
        </header>
      </section>
    
      {/* Right side */}
      <section className="flex w-1/2 items-center justify-center bg-darkest">
        <header></header>
        <img src="/public/LinkedInPicture.JPG" alt="Profile Picture" className="w-1/2 rounded-lg border-8 border-light shadow-lg transform scale-110"></img>
      </section>
    
    </section>


    {/* PROJECTS SECTION */}
    <section className="py-4 bg-darkest h-[70vh] text-lighter">
      <header className="text-center">
        <h1 className="font-mont text-4xl">Projects</h1>
      </header>

      {/* Cards Section */}
      <section className="flex space-x-8 justify-center py-4">

        <section className="bg-lighter w-1/4 p-4 rounded-xl mt-8">
          <header className="text-center">
            <h2 className="font-mont text-2xl text-darkest">TopTrackify - View Your Top Artists and Tracks from Spotify</h2>
          </header>
          <p className="font-mont text-darker mt-4">With the release of Spotify Wrapped 2024, I heard rumors that Spotify wasn't displaying our real top tracks and artists. 
            So, I decided to create an app that would use the data straight from the source, the Spotify API. 
            In this project I used OAuth 2.0 to receive tokens and codes from Spotify and then used those tokens to access my personal data, straight from the Spotify database.</p>

          <section className="flex justify-center"> 
            <button className="p-5"><a href="https://github.com/rafaromo23/TopTrackify" target="_blank" 
              className="inline-block bg-gradient-to-r from-darker to-lightest text-darkest py-3 px-8 rounded-xl text-base font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter">GitHub</a></button>
          </section>
        </section>

        <section className="bg-lighter w-1/4 p-4 rounded-xl mt-8">
          <header className="text-center">
            <h2 className="font-mont text-2xl text-darkest">YouTube Link to MP3 Converter</h2>
          </header>
          <p className="font-mont text-darker mt-4">When making music, I often find myself finding cool samples on YouTube. 
            In order to use them, I'd have to use sketchy websites that converts a YouTube video link to an MP3 file of that video's sound. 
            Tired of the sketchy websites, I decided to make my own, so I have peace of mind with what I'm downloading.</p>
          

          <section className="flex justify-center"> 
            <button className="p-5"><a href="/public/RafaelRomo_Resume.pdf" target="_blank" 
              className="inline-block bg-gradient-to-r from-darker to-lightest text-darkest py-3 px-8 rounded-xl text-base font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter">GitHub</a></button>
          </section>
        </section>

      </section>
    </section>


    <section className="py-3 bg-dark">
      Skills
    </section>


    <section className="py-3 bg-darker">
      Contact
    </section>



  </main>
);

export default App;