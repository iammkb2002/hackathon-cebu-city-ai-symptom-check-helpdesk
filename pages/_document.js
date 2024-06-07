import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.bundle.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
