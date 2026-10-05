import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const APK_PATH = '/downloads/FIO-release.apk';

function App() {
  return (
    <div className="site-shell">
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="brand-mark">
              <img className="brand-logo" src="/assets/fio-logo.png" alt="FIO — Gestão para Barbearias" />
            </div>
            <p className="eyebrow">GESTÃO COM MAIS LEVEZA</p>
            <h1 id="hero-title">Obrigado por confiar no FIO.</h1>
            <p className="intro">
              Criamos o FIO para tornar a rotina da sua barbearia mais simples.
              Agenda, clientes, serviços e gestão em um só lugar, direto do seu celular.
            </p>
            <a className="download-button" href={APK_PATH} download>
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v1.5A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V17" />
              </svg>
              <span>Baixar FIO para Android</span>
            </a>
            <p className="version">Versão 1.0 <span aria-hidden="true">•</span> Android</p>
            <p className="download-note">A instalação é feita diretamente pelo arquivo APK.</p>
          </div>
          <span className="hero-accent" aria-hidden="true" />
        </section>

        <section className="manifesto" aria-labelledby="manifesto-title">
          <p className="section-label">UMA ROTINA MAIS SIMPLES</p>
          <h2 id="manifesto-title">Feito para simplificar.</h2>
          <p>Menos tempo administrando. Mais tempo cuidando da sua barbearia.</p>
        </section>
      </main>

      <footer className="footer">
        <span>FIO — Gestão para Barbearias</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
