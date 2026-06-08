import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <section className="min-h-screen bg-site p-6 md:p-12">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        <Sidebar />

        <div
          className="
            w-full
            lg:w-2/3
            bg-accent-panel
            shadow-lg
            p-10
            md:p-16
            lg:rounded-l-[80px]
          "
        >
          {children}
        </div>

      </div>

    </section>
  );
}

export default Layout;