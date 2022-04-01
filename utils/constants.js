const constants = {
    API_URL: 'http://localhost:3000/api/',
}

const services = {
    ALCHEMY_API_URL: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
    THIRDWEB_MARKETPLACE_ADDRESS: '0xB783003B7864924a135C4245B72C291fFC54A141',
    THIRDWEB_NFTCOLLECTION_ADDRESS: '0x4AD82965cF47199354b31a9cdE1383DBcfd8D1B4',
    SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN
}

export { constants, services }