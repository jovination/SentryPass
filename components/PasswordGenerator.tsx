"use client"

import { useState, useEffect, useCallback } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"
import { IoRefresh } from "react-icons/io5"
import { RxMinus } from "react-icons/rx"
import { GoPlus } from "react-icons/go"
import { motion, useAnimation } from "framer-motion"

const MAX_VISIBLE_LENGTH = 16
const MAX_PASSWORD_LENGTH = 50
const ANIMATION_DURATION = 0.5 

export default function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [animatedPassword, setAnimatedPassword] = useState("")
  const [length, setLength] = useState(15)
  const [useUppercase, setUseUppercase] = useState(true)
  const [useLowercase, setUseLowercase] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSymbols, setUseSymbols] = useState(false)
  const { toast } = useToast()
  const controls = useAnimation()

  const generatePassword = useCallback(() => {
    let charset = ""
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (useNumbers) charset += "0123456789"
    if (useSymbols) charset += "!@#$%^&*()_+{}[]|:;<>,.?/~"

    let newPassword = ""
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
    animatePassword(newPassword)
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols])

  const animatePassword = async (newPassword: string) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/~"
    let iterations = 0
    const maxIterations = 4

    await controls.start({ opacity: 1, transition: { duration: 0.2 } })

    const interval = setInterval(
      () => {
        setAnimatedPassword(
          newPassword
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return char
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join(""),
        )

        if (iterations >= newPassword.length) {
          clearInterval(interval)
          setAnimatedPassword(newPassword)
          controls.start({ opacity: 1 })
        }

        iterations += 1 / maxIterations
      },
      (ANIMATION_DURATION * 500) / newPassword.length,
    )
  }

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast({
          title: "Password Copied!",
          description: "The generated password has been copied to your clipboard.",
          action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
        })
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
        toast({
          title: "Copy Failed",
          description: "Failed to copy the password. Please try again.",
        })
      })
  }

  const getPasswordStrength = () => {
    let strength = 0
    if (length >= 8) strength++
    if (length >= 12) strength++
    if (useUppercase) strength++
    if (useLowercase) strength++
    if (useNumbers) strength++
    if (useSymbols) strength++

    if (strength <= 3) return { text: "Weak", color: "#EFBEBE" }
    if (strength === 4) return { text: "Good", color: "#F9EDBD" }
    if (strength === 5) return { text: "Strong", color: "#DFF1C0" }
    return { text: "Very strong", color: "#DFF1C0" }
  }

  const visiblePassword = animatedPassword.slice(0, MAX_VISIBLE_LENGTH)
  const hiddenChars = password.length > MAX_VISIBLE_LENGTH ? password.length - MAX_VISIBLE_LENGTH : 0

  return (
    <div className="w-full max-w-[560px]  h-[312px] flex flex-col justify-center space-y-14 mt-20 md:mt-0 px-2">
      <div className="flex items-center flex-col gap-6 md:gap-0  md:flex-row md:space-x-5 ">
        <div className="w-full max-w-[450px] h-[56px] rounded-full pr-4 pl-6 border border-[#d4d4d8] flex items-center justify-between">
          <div className="overflow-hidden">
            <motion.div animate={controls} initial={{ opacity: 0 }}>
              <Label className="text-base font-lg font-medium" htmlFor="password">
                {visiblePassword}
                {hiddenChars > 0 && <span className="text-gray-400">+{hiddenChars}</span>}
              </Label>
            </motion.div>
          </div>
          <div className="flex items-center gap-2">
            <Label
              className="px-3 py-1 rounded-md text-xs font-[600] tracking-wider"
              htmlFor="password-level-status"
              style={{ backgroundColor: getPasswordStrength().color }}
            >
              {getPasswordStrength().text}
            </Label>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault()
                generatePassword()
              }}
            >
              <IoRefresh className="text-2xl scale-x-[-1]" />
            </Link>
          </div>
        </div>
        <Button
          className="bg-[#0B57CE] w-[95px] h-[54px] rounded-full text-base font-semibold"
          onClick={copyToClipboard}
        >
          Copy
        </Button>
      </div>
      <div className="flex items-center flex-col gap-4 md:gap-0 md:justify-between md:flex-row">
        <div className="w-fit flex flex-row items-center gap-4 md:gap-0 md:items-start  md:flex-col space-y-1 ml-2 ">
          <p>Password length:</p>
          <p className="font-semibold">{length}</p>
        </div>
        <div className="flex items-center justify-between w-full max-w-[320px]">
          <Button
            className="rounded-full border border-black"
            variant="outline"
            size="icon"
            onClick={() => setLength(Math.max(1, length - 1))}
          >
            <RxMinus />
          </Button>
          <Slider
            className="w-[200px]"
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            max={MAX_PASSWORD_LENGTH}
            step={1}
          />
          <Button
            className="rounded-full border border-black"
            variant="outline"
            size="icon"
            onClick={() => setLength(Math.min(MAX_PASSWORD_LENGTH, length + 1))}
          >
            <GoPlus />
          </Button>
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row gap-4 md:gap-0 justify-between">
        <div className="ml-2 mr-[40px]">
          <p>Characters used:</p>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ABC"
              checked={useUppercase}
              onCheckedChange={(checked) => setUseUppercase(checked === true)}
            />
            <Label className="text-md font-bold" htmlFor="ABC">
              ABC
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="abc"
              checked={useLowercase}
              onCheckedChange={(checked) => setUseLowercase(checked === true)}
            />
            <Label className="text-md font-bold" htmlFor="abc">
              abc
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="123" checked={useNumbers} onCheckedChange={(checked) => setUseNumbers(checked === true)} />
            <Label className="text-md font-bold" htmlFor="123">
              123
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="#$&" checked={useSymbols} onCheckedChange={(checked) => setUseSymbols(checked === true)} />
            <Label className="text-md font-bold" htmlFor="#$&">
              #$&
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}

