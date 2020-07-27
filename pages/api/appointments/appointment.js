import dbConnect from "../../../util/dbConnect"
import Appointment from "../../../models/appointment"

export default async function handler(req, res) {
    const { method } = req

    switch (method) {   
        case "GET":
            dbConnect()
            try {
                const appointments = await Appointment.find({})
                
                res.status(200).json({sucess: true, data: appointments })
            } catch (err) {
                res.status(401).json(err)
            }
            break
        case "POST":
            dbConnect()
            try {
                const appointment = await Appointment.create(
                    req.body
                )
                res.status(201).json({success: true, data: appointment})
            } catch (err) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}