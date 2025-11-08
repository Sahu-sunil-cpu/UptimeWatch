
export type Channel = "Slack" | "Email" | "Sms" | "Discord" | "Call"
export type Alert = "Dns" | "Ping"
export type PingStatus = "Up" | "Down"
export type DnsStatus = "Fail" | "Warning" | "Ok"

export type IncomingMessage = {
    name: "create@ticks";
    status: string;
    type: Alert;
    subType: string;
    responseTime: string;
    id: string;
    userId: string;
} | {
    name: "create@alert",
    type: Alert;
    subType: string;
    userId: string,
    url: string,
    id: string
}
