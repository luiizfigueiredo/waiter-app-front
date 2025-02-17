import { Order } from "../../types/Order"
import { OrdersBoard } from "../OrdersBoard"
import { Container } from "./styes"

const orders: Order[] = [
  {
    "_id": "67af38fb7e129c13943ed5e0",
    "table": "13",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Pizza quatro queijos",
          "imagePath": "1739297091853-quatro-queijos.png",
          "price": 40,
        },
        "quantity": 3,
        "_id": "67af38fb7e129c13943ed5e1"
      }
    ]
  }
]

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕙"
        title="Fila de espera"
        orders={orders}
      ></OrdersBoard>
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}

      ></OrdersBoard>
      <OrdersBoard
        icon="✅ "
        title="Pronto!"
        orders={[]}
      ></OrdersBoard>
    </Container>
  )
}
