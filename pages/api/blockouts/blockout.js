import dbConnect from "../../../util/dbConnect"
import Blockout from "../../../models/blockout"

export default async function handler(req, res) {
    const { method } = req
    
    dbConnect()

    switch (method) {
        case "GET":
            try {
                const blockouts = await Blockout.find({})

                res.status(201).json({success: true, data: blockouts})
            } catch (err) {
                res.status(404).json(err)
            }
            break
        case "POST":
            try {
                const newBlockout = await Blockout.create(
                    req.body
                )

                res.status(201).json({success: true, data: newBlockout})
            } catch (err) {
                res.status(404).json(err)
            }
    }
}