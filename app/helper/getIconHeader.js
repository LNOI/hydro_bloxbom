import { FaShoppingCart } from "react-icons/fa";

import { MdSupportAgent } from "react-icons/md";

import { FaQuestionCircle } from "react-icons/fa";


const HEADER_NAME = {
    STORE: 'Store',
    // ORDER_STATUS: 'Order Status',
    SUPPORT: 'Support',
    FAQ: 'FAQ',
}

export function genIconHeader(pathName, extraClass) {
    switch (pathName) {
        case HEADER_NAME.STORE:
            return <FaShoppingCart className={extraClass} />
        // case HEADER_NAME.ORDER_STATUS:
        //     return
        case HEADER_NAME.SUPPORT:
            return <MdSupportAgent className={extraClass} />
        case HEADER_NAME.FAQ:
            return <FaQuestionCircle className={extraClass} />
        default:
            <>ICON NOT FOUND</>

    }
}