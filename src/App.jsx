const App = () => (
  <main className="relative">
    <header className="py-3 absolute w-full bg-darkest text-lighter">  
      <nav className="py-3 bg-darkest">
        <ul className="flex justify-center space-x-12">
          <li>
            <a href="#" className="p-2 rounded-xl hover:bg-darker">Home</a>
          </li>
          <li>
            <a href="#" className="p-2 rounded-xl hover:bg-darker">Projects</a>
          </li>
          <li>
            <a href="#" className="p-2 rounded-xl hover:bg-darker">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    
    <section className="py-3 bg-lighter">
      Hero
    </section>


    <section className="py-3 bg-lighter">
      Projects
    </section>


    <section className="py-3 bg-lighter">
      Skills
    </section>


    <section className="py-3 bg-lighter">
      Contact
    </section>



  </main>
);

export default App;