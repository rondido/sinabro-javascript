export default async (req, context) => {
  return req.json({
    messag: "hello world",
  });
};
