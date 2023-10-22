import Script from "next/script"
import styles from "src/styles/globals.css"

export default function App({ Component, pageProps }) {
    return (
    <>
    <Component {...pageProps} />
    <Script src="https://smtpjs.com/v3/smtp.js"/>
    </>)
 }