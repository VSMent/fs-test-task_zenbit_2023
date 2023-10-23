export type User = {
  email: string
  password: string
}

export type DealDTO = {
  id: number
  available: true
  name: string
  price: number
  count: number
  yield: number
  soldCount: number
  endDate: string
  image: string
}

export type Deal = {
  name: string
  price: number
  yieldPercent: number
  soldPercent: number
  daysLeft: number
  totalPrice: number
  image: string
}