import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="div-group">
        <div className="div-inline div-inline-image">
          <img
            className="header-img"
            alt="It's what's happening."
            src="https://img.icons8.com/android/520/ffffff/twitter.png"
          />
        </div>

        <div className="div-inline div-inline-black">
          <div className="div-group">
            <input
              placeholder="Phone, email or username"
              className="input-text"
            ></input>
            <div className="div-inline">
              <input placeholder="Password" className="input-text"></input>
              <a href="/" className="link link-blue">
                Forgot Password?
              </a>
            </div>
            <button className="button button-secondary button-secondary-small">
              Log in
            </button>
          </div>

          <div className="container">
            <header className="header">
              <img
                alt="Twitter logo"
                src="https://img.icons8.com/android/48/d9d9d9/twitter.png"
              />
              <h1 className="heading">Happening now</h1>
              <h3 className="heading">Join Twitter today.</h3>
            </header>

            <div>
              <button className="button button-primary">Sign up</button>
              <button className="button button-secondary">Log in</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <ul>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              About
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Help Center
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Terms of Service
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Cookie Policy
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Ads info
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Blog
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Status
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Careers
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Brand Resources
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Advertising
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Marketing
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Twitter for Business
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Developers
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Directory
            </a>
          </li>
          <li className="list-inline">
            <a href="/" className="link link-gray">
              Settings
            </a>
          </li>
          <li className="list-inline">© 2021 Twitter, Inc.</li>
        </ul>
      </footer>
    </div>
  );
}
