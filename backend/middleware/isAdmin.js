export const isAdmin = (req, res, next) => {
  if (req.loggedUser && req.loggedUser.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied, admin only" });
  }
};