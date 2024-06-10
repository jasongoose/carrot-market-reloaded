export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
