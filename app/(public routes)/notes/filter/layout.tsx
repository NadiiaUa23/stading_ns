type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};
//test
const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section className="notes-layout">
      <aside className="notes-sidebar">{sidebar}</aside>

      <main className="notes-content">{children}</main>
    </section>
  );
};

export default NotesLayout;
