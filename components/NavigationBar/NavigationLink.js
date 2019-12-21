import Link from "next/link";

class NavigationLink extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Link href={this.props.url}>
        <a className={this.props.cssClass}>{this.props.text}</a>
      </Link>
    )
  }
}

export default NavigationLink;