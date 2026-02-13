import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />

        <div id="projects">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
