import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "ndr1yxd4pckx3k2xk0xeqqj3zan9xcm6x4jtrfq4ew0ydkq0s7s3mkgsq08397",
            cw721: "andr1yjcx8vhc808695gdguadqyfgdaymjptdsasj0vzd59g73mgsc09sn64jxz",
            name: "DontPanic",
            type: ICollectionType.AUCTION,
            id: "auction",
            featured: "ANDR1"
        },
       
    ],
};

export default CONFIG;
