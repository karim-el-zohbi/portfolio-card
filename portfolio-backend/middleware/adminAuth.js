export default function adminAuth(req, res, next) {
  console.log("ADMIN AUTH HIT");
  console.log("HEADERS:", req.headers);

  const adminKey =
    req.headers["x-admin-key"] ||
    req.headers["x-admin-key".toLowerCase()] ||
    req.headers["x-admin-key"];

  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
}
