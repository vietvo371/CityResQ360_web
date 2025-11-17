import type { ReactNode } from "react";

export default function CitizenLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <header>
        <h2>Citizen Portal Menu</h2>
        <p>Navigation placeholder for citizen features.</p>
      </header>
      <div>{children}</div>
      <footer>
        <p>Citizen footer placeholder.</p>
      </footer>
    </section>
  );
}
