
export const isLableExit = (label: string) => {
  if (!label) return
  const a = ["Address", "Phone", "Email"].includes(label)
  return a
}