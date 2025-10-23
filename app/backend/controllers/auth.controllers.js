import User from "../models/user.model.js"
import bcrypt, { genSalt } from "bcryptjs"
import genToken from "../utils/token.js"
import { sendOtpMail } from "../utils/mail.js"

export const signUp = async(req, res) => {
    try {
        const {fullName, email, password, mobile, role} = req.body

        const existingUser = await User.findOne({email})
        if(existingUser) {
            return res.status(400).json({message: "User already exists"})
        }
        if(password.length < 6) {
            return res.status(400).json({message: "Password must be atleast 6 characters"})
        }
        if(mobile.length < 10) {
            return res.status(400).json({message: "Mobile number must be atleast 10 digits"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user = await User.create({fullName, email, role, mobile, password:hashedPassword})

        const token = await genToken(user._id)
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000,
            httpOnly: true
        })

        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json(`SignUp error: ${error}`)
    }
}

export const signIn = async(req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({message: "User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({message: "Incorrect Password"})
        }

        const token = await genToken(user._id)
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000,
            httpOnly: true
        })

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(`SignIn error: ${error}`)
    }
}

export const signOut = async(req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({message: "Logged out successfully"})
    } catch (error) {
        return res.status(500).json(`SignOut error: ${error}`)
    }
}

export const sendOtp = async(req, res) => {
    try {
        const {email} = req.body
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({message: "User does not exist"})
        }
        const otp = Math.floor(1000 + Math.random()*9000).toString()
        user.resetOtp = otp
        user.otpExpires = Date.now() + 5*60*1000
        user.isOtpVerified = false
        await user.save()
        await sendOtpMail(email, otp)
        return res.status(200).json({message: "OTP sent successfully"})
    } catch (error) {
        return res.status(500).json(`Send OTP error ${error}`)
    }
}

export const verifyOtp = async(req, res) => {
    try {
        const {email, otp} = req.body
        const user = await User.findOne({email})
        if(!user || user.resetOtp != otp || user.otpExpires < Date.now()) {
            return res.status(400).json({message: "Invalid/Expired OTP"})
        }
        user.isOtpVerfied = true
        user.resetOtp = undefined
        user.otpExpires = undefined
        await user.save()
        return res.status(200).json({message: "OTP verified successfully"})
    } catch (error) {
        return res.status(500).json(`Verify OTP error ${error}`)
    }
}

export const resetPassword = async(req, res) => {
    try {
        const {email, newPassword} = req.body
        const user = await User.findOne({email})
        if(!user || !user.isOtpVerfied) {
            return res.status(400).json({message: "OTP verification required"})
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashedPassword
        user.isOtpVerfied = false
        await user.save()
        return res.status(200).json({message: "Password reset successfull"})
    } catch (error) {
        return res.status(500).json(`Reset password error ${error}`)
    }
}

export const googleAuth = async(req, res) => {
    try {
        const {fullName, email, mobile, role} = req.body
        let user = await User.findOne({email})
        if(!user) {
            user = await User.create({fullName, email, mobile, role})
        }

        const token = await genToken(user._id)
        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000,
            httpOnly: true
        })

        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json(`Google Auth error ${error}`)
    }
}