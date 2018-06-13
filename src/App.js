import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
// import './index.css';
// import './css/font-awesome.min.css';
import './css/main.css';
import background from './img/allegro2018/bg.jpg';
// import background from './img/allegro2018/569A2325.jpg';
// import background from './img/bg.jpg';
import overlay from './img/overlay.png';

class App extends Component {
  render() {
    const bgStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#212931",
      backgroundImage: `url(${overlay}), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${background})`,
      backgroundSize: 'auto,								auto,														100% auto',
      backgroundPosition: 'center,								center,														top center',
      backgroundRepeat: 'repeat,								no-repeat,													no-repeat',
      backgroundAttachment: 'scroll,								scroll,														scroll',
      zIndex: '-1',
    };
    return (
      <div className="App">
        <div id="wrapper" className="fade-in">
          <div id="intro">
            <h1>U of T<br />
              Allegro Choir</h1>
            <p>A free, fully responsive HTML5 + CSS3 site template designed by <a href="https://html5up.net">HTML5 UP</a><br />
              and distributed by <a href="https://themewagon.com/">ThemeWagon</a>.</p>
            <ul className="actions">
              <li><a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a></li>
            </ul>
          </div>
          <header id="header">
            <a href="index.html" className="logo">Massively</a>
          </header>
          <nav id="nav">
            <ul className="links">
              <li className="active"><a href="index.html">This is Massively</a></li>
              <li><a href="generic.html">Generic Page</a></li>
              <li><a href="elements.html">Elements Reference</a></li>
            </ul>
            <ul className="icons">
              <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
          </nav>
          <div id="main">
            <article className="post featured">
              <header className="major">
                <span className="date">April 25, 2017</span>
                <h2><a href="#">And this is a<br />
                  massive headline</a></h2>
                <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
                  facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
                  amet nullam sed etiam veroeros.</p>
              </header>
              <a href="#" className="image main"><img src="./img/pic01.jpg" alt="" /></a>
              <ul className="actions">
                <li><a href="#" className="button big">Full Story</a></li>
              </ul>
            </article>
            <section className="posts">
              <article>
                <header>
                  <span className="date">April 24, 2017</span>
                  <h2><a href="#">Sed magna<br />
                    ipsum faucibus</a></h2>
                </header>
                <a href="#" className="image fit"><img src="/allegro/src/img/pic02.jpg" alt="" /></a>
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Full Story</a></li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 22, 2017</span>
                  <h2><a href="#">Primis eget<br />
                    imperdiet lorem</a></h2>
                </header>
                <a href="#" className="image fit"><img src="/allegro/src/img/pic03.jpg" alt="" /></a>
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Full Story</a></li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 18, 2017</span>
                  <h2><a href="#">Ante mattis<br />
                    interdum dolor</a></h2>
                </header>
                <a href="#" className="image fit"><img src="./img/pic04.jpg" alt="" /></a>
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Full Story</a></li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 14, 2017</span>
                  <h2><a href="#">Tempus sed<br />
                    nulla imperdiet</a></h2>
                </header>
                <a href="#" className="image fit"><img src="./img/pic05.jpg" alt="" /></a>
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Full Story</a></li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 11, 2017</span>
                  <h2><a href="#">Odio magna<br />
                    sed consectetur</a></h2>
                </header>
                <a href="#" className="image fit"><img src="./img/pic06.jpg" alt="" /></a>
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Full Story</a></li>
                </ul>
              </article>
              <article>
                <header>
                  <span className="date">April 7, 2017</span>
                  <h2><a href="#">Augue lorem<br />
                    primis vestibulum</a></h2>
                </header>
                <a href="#" className="image fit"><img src="./img/pic07.jpg" alt="" /></a>
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Full Story</a></li>
                </ul>
              </article>
            </section>
            <footer>
              <div className="pagination">
                <a href="#" className="page active">1</a>
                <a href="#" className="page">2</a>
                <a href="#" className="page">3</a>
                <span className="extra">&hellip;</span>
                <a href="#" className="page">8</a>
                <a href="#" className="page">9</a>
                <a href="#" className="page">10</a>
                <a href="#" className="next">Next</a>
              </div>
            </footer>

          </div>
          <div id="copyright">
            <ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li><li>Distributor: <a href="https://themewagon.com">ThemeWagon</a></li></ul>
          </div>

        </div>
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.scrollex.min.js"></script>
        <script src="js/jquery.scrolly.min.js"></script>
        <script src="js/skel.min.js"></script>
        <script src="js/util.js"></script>
        <script src="js/main.js"></script>
      </div>
    );
  }
}

export default App;
