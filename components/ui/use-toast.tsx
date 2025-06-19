type ToastProps = {
  title: string
  description?: string
}

export function toast({ title, description }: ToastProps) {
  // In a real implementation, this would manage toast state
  alert(`${title}\n${description || ""}`)
}
