// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/path/to/flowbite.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/path/to/flowbite.bundle.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
