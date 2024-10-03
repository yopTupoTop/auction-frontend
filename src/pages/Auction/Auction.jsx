import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from "../../connectWeb3";
import WalletOptions from "../../components/Walletoptions";
import Account from "../../components/Account";

const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected)
    return (
      <>
        <CreateAuction />
        <PickAuction />
        <Account />
      </>
    );
  return <WalletOptions />;
}

function CreateAuction() {
  return <button>Create Auction</button>;
}

function PickAuction() {
  return <button>Pick Auction</button>;
}

export default function Auction() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
