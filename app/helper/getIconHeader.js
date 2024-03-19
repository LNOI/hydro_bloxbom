import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';

import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';

const HEADER_NAME = {
    STORE: 'Store',
    // ORDER_STATUS: 'Order Status',
    SUPPORT: 'Support',
    FAQ: 'FAQ',
}

export function genIconHeader(pathName, extraClass) {
    switch (pathName) {
        case HEADER_NAME.STORE:
            return <LocalGroceryStoreRoundedIcon className={extraClass} />
        // case HEADER_NAME.ORDER_STATUS:
        //     return
        case HEADER_NAME.SUPPORT:
            return <SupportAgentRoundedIcon className={extraClass} />
        case HEADER_NAME.FAQ:
            return <LiveHelpRoundedIcon className={extraClass} />
        default:
            <>ICON NOT FOUND</>

    }
}