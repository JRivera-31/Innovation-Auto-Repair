import dbConnect from "../../../util/dbConnect"
import User from "../../../models/user"

export default async function handler(req, res) {
    const { method } = req
    
    await dbConnect()

    switch (method) {
        case "GET":
            try {
                const user = await User.find({})
                
                res.status(200).json({sucess: true, data: user })
            } catch (err) {
                res.status(401).json(err)
            }
            break
        case "POST":
            try {
                const user = await User.create(
                    req.body
                )
                res.status(201).json({success: true, data: user})
            } catch (err) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}