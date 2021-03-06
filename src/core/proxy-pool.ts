import { Proxy } from "../models";
import { Environment } from "../runtime";
import { Client } from "./client";

const PROXY_MAX_USES = 4;

export class ProxyPool {

    private proxies: Proxy[];
    private env: Environment;

    constructor(environment: Environment) {
        this.env = environment;
    }

    /**
     * Loads the proxy list from ./src/nrelay/proxies.json
     */
    loadProxies(): void {
        const proxies = this.env.readJSON<Proxy[]>("src", "nrelay", "proxies.json");
        proxies.forEach((proxy) => proxy.uses = 0);
        this.proxies = proxies;
    }

    /**
     * Set a clients proxy
     * @param client The client to assign the proxy to
     * @param proxy The proxy to use
     */
    setProxy(client: Client, proxy: Proxy): void {
        if (client.proxy) {
            this.removeProxy(client);
        }
        client.proxy = proxy;
        proxy.uses++;

        // client.connect();
    }

    deleteProxy(proxy: Proxy): void {
        const index = this.proxies.indexOf(proxy);
        if (index !== -1) {
            this.proxies.splice(index, 1);
        }
    }

    removeProxy(client: Client): void {
        if (client.proxy) {
            client.proxy.uses--;
        }
        client.proxy = null;
    }

    getNextAvailableProxy(): Proxy {
        for (const proxy of this.proxies) {
            if (proxy.uses < PROXY_MAX_USES) {
                proxy.uses++;
                return proxy;
            }
        }

        return null;
    }
}
