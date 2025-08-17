import { z } from "zod";
import express from "express";

const app = express();

app.use(express.json());
const userProfile = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});
//type infrence in zod validation
type userprofiletype = z.infer<typeof userProfile>;

app.put("/user", (req, res) => {
  const parsed = userProfile.safeParse(req.body);

  if (!parsed.success) {
    res.status(404).json({
      message: "Error while submitting form",
    });
    return;
  }
  const updateBody: userprofiletype = req.body;
  res.status(200).json({
    data: updateBody,
    message: "Data sent successfully to the server",
  });
});
