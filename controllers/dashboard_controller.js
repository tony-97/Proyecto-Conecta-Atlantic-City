const permissions = {
  admin: [
    "dashboard",
    "clientes",
    "puntos",
    "segmentacion",
    "servicios",
    "reservas",
    "pagos",
    "juegos",
    "transacciones",
    "promociones",
    "reclamos",
    "personal",
  ],
  gerencia_general: [
    "dashboard",
    "clientes",
    "puntos",
    "segmentacion",
    "servicios",
    "reservas",
    "pagos",
    "juegos",
    "transacciones",
    "promociones",
    "reclamos",
    "personal",
  ],
  marketin: ["dashboard", "clientes", "puntos", "segmentacion", "promociones"],
  operaciones: ["dashboard", "servicios", "reservas", "pagos", "reclamos"],
  desarrollo_de_negocios: [
    "dashboard",
    "clientes",
    "servicios",
    "juegos",
    "transacciones",
  ],
  gerencia_ti: ["dashboard", "juegos", "transacciones", "personal"],
  cliente: ["dashboard", "puntos", "reservas", "pagos", "promociones"],
};

exports.getDashboard = (req, res) => {
  const user = req.session.user;
  // If user is not logged in, redirect to login page
  if (!user) {
    return res.redirect("/");
  }
  const userViews = user && permissions[user.rol] ? permissions[user.rol] : [];
  res.render("index", { title: "Dashboard", user, userViews });
};
