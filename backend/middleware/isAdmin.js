export default (req, res, next) => {
    // Verifica se l'utente è autenticato e se ha il ruolo di admin
    if (req.loggedUser && req.loggedUser.role === 'admin') {
      // Se l'utente è un admin, passa al prossimo middleware o route handler
      return next();
    }
    
    // Se l'utente non è admin, restituisci un errore 403 Forbidden
    return res.status(403).json({ message: "Accesso vietato. Riservato agli amministratori." });
  };