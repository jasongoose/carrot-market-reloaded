export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <header></header>
      <main className="mx-auto max-w-screen-sm">{props.children}</main>
      <footer></footer>
    </>
  );
}
