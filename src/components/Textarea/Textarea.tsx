import React from "react"

type TextareaTextProps = {
  label: string
  id?: string
  value: string
  placeholder: string
  name: string
  rows: number
  error: boolean
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea = ({
  label,
  id,
  onChange,
  error,
  ...props
}: TextareaTextProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id || ""}
      >
        {label}
      </label>
      <textarea
        id={id || ""}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-600" : ""
        }`}
        {...props}
        onChange={onChange}
      ></textarea>
      {error ? <p className="text-red-600">uzupełnij pole</p> : null}
    </div>
  )
}

Textarea.defaultProps = {
  label: "",
  id: "",
  value: "",
  placeholder: "",
  error: false,
}
