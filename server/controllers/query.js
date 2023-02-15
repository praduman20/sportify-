import Contact from "../models/contact";

export const contact = async (req, res) => {
  // console.log("Register endpoint" , req.body);
  const { name, email, phone, message } = req.body;
  // validation
  if (!name) return res.status(400).send("Name is required");
  if (!email) return res.status(400).send("Email is required");
  if (!phone || phone.length < 10)
    return res.status(400).send("Not a valid phone number");
  if (!message) return res.status(400).send("Message is required");

  const user = new Contact({ name, email, phone, message });
  try {
    await user.save();
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("Query failed => ", err);
    return res.status(400).send("Error. Try again");
  }
};
