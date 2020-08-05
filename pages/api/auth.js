import nextConnect from "next-connect"
import middleware from "../../middlewares/middleware"
import passport from "../../lib/passport"
import { extractUser } from "../../lib/api-helpers"
import { sign } from "jsonwebtoken"

const handler = nextConnect()

handler.use(middleware)

handler.post(passport.authenticate('local'), (req, res) => {
    const claims = { sub: req.user._id }
    const jwt = sign(claims, process.env.TOKEN_SECRET, { expiresIn: "1h" })

    res.json({ authToken: jwt, user: extractUser(req) })
})

handler.delete((req, res) => {
    req.logOut()
    res.status(204).end()
})

export default handler