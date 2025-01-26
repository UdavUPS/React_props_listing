type Props = {
  href: string,
  src: string,
  itemTitle: string,
  itemPrice: string,
  itemQuantity: string, 
  level: string
}


export function Item ({ href, src, itemTitle, itemPrice, itemQuantity, level = "level-medium"}: Props) {

    let classForQuantity: string = `item-quantity + ${level}`;

    return (
        <div className="item-list">
        <div className="item">
          <div className="item-image">
            <a href= { href }>
              <img src= {src} alt="фото товара"/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{ itemTitle }</p>
            <p className="item-price">{itemPrice}</p>
            <p className={classForQuantity}>{itemQuantity}</p>
          </div>
        </div>
      </div>
    )
}