import { http, createConfig } from "wagmi";
import { mainnet, sepolia, polygon, arbitrum } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const chains = [mainnet, sepolia, polygon, arbitrum];

export const config = createConfig({
  chains,
  connectors: [],
  transports: {
    [sepolia.id]: http(),
  },
});
