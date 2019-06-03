export interface Product {
  [key: string]: any
  id: number
  title: string
  price: number
  picture: string
  description: string
  memory: string
  brand: string
  chipType: string
  quantity: number
}

export interface GlobalState {
  readonly loading: boolean
}

export interface CartState {
  products: Product[]
  totalValue: number
}

export interface ProductsState {
  products: Product[]
  product: Product | null
}
