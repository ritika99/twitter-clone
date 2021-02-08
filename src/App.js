import "./styles.css";

var footerList = [
  "About",
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Ads info",
  "Blog",
  "Status",
  "Careers",
  "Brand Resources",
  "Advertising",
  "Marketing",
  "Twitter for Business",
  "Developers",
  "Directory",
  "Settings"
];

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
          {footerList.map((item) => (
            <li className="list-inline">
              <a href="/" className="link link-gray">
                {item}
              </a>
            </li>
          ))}
          <li className="list-inline">© 2021 Twitter, Inc.</li>
        </ul>
      </footer>
    </div>
  );
}
