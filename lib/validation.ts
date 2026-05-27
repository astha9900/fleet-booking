export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function validatePhone(phone: string): boolean {
  const re = /^\+?[\d\s-]{10,15}$/
  return re.test(phone)
}

export function validateAddress(address: string): boolean {
  return address.length >= 10
}
