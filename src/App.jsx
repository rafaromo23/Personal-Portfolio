const App = () => (
  <main className="relative">
    <header className="absolute py-3 w-full bg-darkest text-lighter">  
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
    
    <section className="flex h-screen">

      {/* Left side */}
      <section className="flex w-1/2 items-center justify-end bg-darkest text-lighter">
        <header className="text-center">
          <h1 className="font-mont text-6xl py-6">Hello, I am Rafael Romo</h1>
          <p className="font-mont text-xl">A computer science student at Columbia University</p>
          <p className="font-mont">Here is my Resume:  
            <button className="px-5 py-5"><a href="/public/RafaelRomo_Resume.pdf" className="inline-block bg-gradient-to-r from-darker to-lighter text-darkest py-3 px-8 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:from-darker hover:to-lighter"> Resume</a></button>
          </p>
        </header>
      </section>
    
      {/* Right side */}
      <section className="flex w-1/2 items-center justify-center bg-darkest">
        <header></header>
        <img src="/public/LinkedInPicture.JPG" alt="Profile Picture" className="w-1/2 rounded-lg border-8 border-light shadow-lg transform scale-110"></img>
      </section>
    
    </section>


    <section className="py-3 bg-light">
      Projects
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