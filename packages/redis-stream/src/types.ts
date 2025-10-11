export interface Website {
    id: string,
    url: string,
    timeAdded: Date,
    userId: string
}


export type Status  = {
    name: string
    status: string
    responseTime: string
    regionId: string
    websiteId: string
}

export interface Alert {
    name: string,
    userId: string,
    url: string,
    websiteId: string
}