import "../styles/globals.css";
import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progressBar = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progressBar.start);
Router.events.on("routeChangeComplete", progressBar.finish);
Router.events.on("routeChangeError", progressBar.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
