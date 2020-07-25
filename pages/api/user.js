import nextConnect from "next-connect"
import bcrypt from "bcryptjs"
import middleware from "../../middlewares/middleware"
import { nanoid } from "nanoid"

const handler = nextConnect()

handler.use(middleware)

handler.post(async (req, res) => {
    const { username, password } = req.body

    if ((await req.db.collection("users").countDocuments({ username })) > 0) {
        res.status(403).send("Username already in use.")
        return
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await req.db.collection("users").insertOne({
        _id: nanoid(12),
        username: username,
        password: hashedPassword
    })
        .then(({ ops }) => ops[0])
    req.Login(user, (err) => {
        if (err) throw err
        res.status(201).json({user: extractUser(req)})
    })
})

export default handler