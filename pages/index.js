import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>bretonlikethecrackers</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <script dangerouslySetInnerHTML={{ __html: `
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }` }}
      />
    </div>
  )
}
