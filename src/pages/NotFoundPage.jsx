import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h2>404</h2>
      <p>Oops! Sepertinya halaman yang Anda cari tidak ada.</p>
      <Link to="/">Kembali ke Halaman Utama</Link>
    </section>
  );
}

export default NotFoundPage;
