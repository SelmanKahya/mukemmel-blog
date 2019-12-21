import NavigationLink from "./NavigationLink";
import './NavigationBar.css';

const NavigationBar = () => (
  <div className="hero">
    <NavigationLink url="/" text="Selman Kahya" cssClass="hero-title" />
    <div className="hero-social-links">
      <NavigationLink url="https://medium.com/@selmankahya" text="Medium" cssClass="social-link" />
      <NavigationLink url="https://www.twitter.com/selmankahyax" text="Twitter" cssClass="social-link" />
      <NavigationLink url="https://www.linkedin.com/in/selmankahya" text="LinkedIn" cssClass="social-link" />
      <NavigationLink url="https://www.instagram.com/selmankahyax" text="Instagram" cssClass="social-link" />
    </div>
  </div>
)

export default NavigationBar;