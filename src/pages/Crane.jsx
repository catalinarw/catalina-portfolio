function Crane() {
  return (
    <>
      <h2 className="text-sm uppercase tracking-[0.3em] mb-4">
        Case Study
      </h2>

      <h1 className="text-5xl font-bold mb-8">
        CVNL Member Portal
      </h1>

      <img
        src="/images/cvnl-homepage.jpg"
        alt="CVNL Project"
        className="rounded-3xl mb-10"
      />

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">
          Project Overview
        </h3>

        <p>
          Built and maintained a member portal serving
          over 200 organizational members, improving
          access to resources and member communication.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">
          My Role
        </h3>

        <p>
          Front-End Development, WordPress
          implementation, maintenance, UX improvements,
          and stakeholder collaboration.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="skill-pill">WordPress</span>
          <span className="skill-pill">Elementor</span>
          <span className="skill-pill">CSS</span>
          <span className="skill-pill">JavaScript</span>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">
          Results
        </h3>

        <p>
          Supported ongoing member engagement and
          streamlined access to organizational
          resources through a user-friendly portal
          experience.
        </p>
      </section>
    </>
  );
}

export default Crane;