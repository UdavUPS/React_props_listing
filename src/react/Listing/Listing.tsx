import { Item } from '../Item/Item.tsx';
import { dats } from '../../js/object.ts';

interface itemObject {
    state: string,
    currency_code: string,
    quantity: number,
    listing_id: number,
    url: string,
    MainImage: {
        url_570xN: string
    },
    title: string,
    price: number
}


export function Listing () {


    const items: Array<itemObject> = dats.map((elem: itemObject) => {
        

        if (elem.state === 'active') {

            let quantityColor: string = "";
            let currencySymbol: string = "";
            let currencySymbol2: string = "";

            if (elem.currency_code === 'USD') {
                currencySymbol= "$"
                currencySymbol2 = '';
            }
            
            if (elem.currency_code === 'EUR') {
                currencySymbol = '€';
                currencySymbol2 = '';
            }
            
            if (elem.currency_code !== 'USD' && elem.currency_code !== 'EUR'){
                currencySymbol = '';
                currencySymbol2 = ' ' + elem.currency_code;
            }

            if (elem.quantity < 10) {quantityColor = "level-low"}
            if (elem.quantity >= 10 && elem.quantity < 20) {quantityColor = "level-medium"}
            if (elem.quantity >= 20) {quantityColor = "level-high"}


            return (<Item key={elem.listing_id} href={elem.url} src={ elem.MainImage.url_570xN } itemTitle={elem.title} itemPrice={currencySymbol + elem.price + currencySymbol2} itemQuantity={elem.quantity + " left"} level = {quantityColor} />)
        }
    })

    /* console.log(dats[0]); */

    return (
        <>
        {items}
        </>
    )
}