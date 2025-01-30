"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { IoRefresh } from "react-icons/io5"
import { RxMinus } from "react-icons/rx"
import { GoPlus } from "react-icons/go"

const MAX_VISIBLE_LENGTH = 16
const MAX_PASSWORD_LENGTH = 100

export default function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(15)
  const [useUppercase, setUseUppercase] = useState(true)
  const [useLowercase, setUseLowercase] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSymbols, setUseSymbols] = useState(false)

  const generatePassword = () => {
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
  }

  useEffect(() => {
    generatePassword()
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!")
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

  const visiblePassword = password.slice(0, MAX_VISIBLE_LENGTH)
  const hiddenChars = password.length > MAX_VISIBLE_LENGTH ? password.length - MAX_VISIBLE_LENGTH : 0

  return (
    <div className="w-[560px] h-[312px] flex flex-col justify-center space-y-14">
      <div className="flex items-center justify-between">
        <div className="w-full max-w-[450px] h-[56px] rounded-full pr-4 pl-6 border border-[#d4d4d8] flex items-center justify-between">
          <div className="overflow-hidden">
            <Label className="text-base font-lg" htmlFor="password">
              {visiblePassword}
              {hiddenChars > 0 && <span className="text-gray-400">+{hiddenChars}</span>}
            </Label>
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
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1 ml-2">
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
            className="w-[220px]"
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
      <div className="flex items-center justify-between">
        <div className="ml-2">
          <p>Characters used:</p>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Checkbox id="ABC" checked={useUppercase} onCheckedChange={(checked) => setUseUppercase(checked === true)} />
            <Label className="text-md font-bold" htmlFor="ABC">
              ABC
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="abc" checked={useLowercase} onCheckedChange={(checked) => setUseLowercase(checked === true)} />
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

