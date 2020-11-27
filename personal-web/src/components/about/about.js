import './about.css';

function About() {
    return (
      <div className="about">
        <div className="cluster">
            <div className="about-title">Hi!</div>
            <div className="about-desc">My name is Jessalyn Wang, and I am a second year
            undergraduate student double majoring in Computer Science and Business Management 
            Economics at the University of California, Santa Cruz. My interests lie in 
            full-stack web development, machine learning, and data science. In my spare time
            I love to draw, read, play volleyball and water polo, and watch YouTube.</div>
            <div className="about-header"><div>skills</div></div>
            <div className="skills">
              <div>Python: 5/5</div>
              <div>C++: 3/5</div>
              <div>HTML/CSS: 5/5</div>
              <div>JavaScript: 4/5</div>
            </div>
            <div className="about-header"><div>current involvements</div></div>
            <div className="about-link"><div>Tech4Good</div></div>
            <div className="about-link"><div>NeuroTechSC</div></div>
            <div className="about-link"><div>Wave</div></div>
        </div>
      </div>
    );
  }
  
  export default About;