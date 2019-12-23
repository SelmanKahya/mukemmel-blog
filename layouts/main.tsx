import Header from "../components/header";
import Head from "next/head";
import { initGA, logPageView } from '../utils/analytics'
import React, { ReactElement } from "react";
import "../public/app.scss";
import LoggedIn from "../components/loggedIn";
import { inject, observer } from "mobx-react";
import { AuthStoreProps } from "../stores/AuthStore/AuthStore";

interface PageProps {
  minimal?: boolean
  children: ReactElement
  className?: string,
  loginRequired?: boolean
  verifiedToken?: boolean
  authStore?: AuthStoreProps
}

interface RenderChildren {
  loginRequired: boolean
  children: React.ReactNode
  className: string
}

@inject("authStore")
@observer
class Page extends React.Component<PageProps> {
  renderChildren = (ctx: RenderChildren) => {
    const { loginRequired, children, className } = ctx 
    if(loginRequired) {
      return (
        <LoggedIn>
              <div className={className}>{children}</div>  
        </LoggedIn>
      )
    } else {
      return (
        <div className={className}>{ children }</div>  
      )
    }
  }

  constructor(props) {
    super(props)
    console.log(this.props.verifiedToken)

  }

  
  componentDidMount() {
    if(!document.cookie.includes('_gat')) {
      initGA()
    } else {
      return
    }
    logPageView()
       

  }

  render(): React.ReactNode {
    const { minimal, children, className, loginRequired } = this.props;

    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
            integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI="
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header minimal={minimal} />
        {this.renderChildren({
          children: children,
          className: className,
          loginRequired: loginRequired
        })}
      </div>
    )
  }
}

export default Page;
