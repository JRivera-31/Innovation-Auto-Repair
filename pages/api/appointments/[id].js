import dbConnect from "../../../util/dbConnect"
import Appointment from "../../../models/appointment"

export default async (req, res) => {
    await dbConnect()

    const {
        query: { id },
        method
    } = req

    switch (method) {
        case "DELETE":
            try {
                const deleted = await Appointment.deleteOne({ _id: id })

                if (!deleted) {
                    return res.status(400).json({success: false})
                }

                res.status(200).json({success: true, data: {}})
            } catch (err) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}