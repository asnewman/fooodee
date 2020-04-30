module.exports = (req, res) => {
  console.log(`New hit on ${new Date()}`);
  res.status(200).send("success");
};
