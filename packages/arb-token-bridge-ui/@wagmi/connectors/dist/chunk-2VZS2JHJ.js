import {
  Connector,
  __privateAdd,
  __privateGet,
  __privateSet,
  __publicField
} from "./chunk-5NCTPR6C.js";

// src/injected.ts
import {
  AddChainError,
  ChainNotConfiguredError,
  ConnectorNotFoundError,
  ProviderRpcError,
  ResourceUnavailableError,
  SwitchChainError,
  UserRejectedRequestError,
  getClient,
  normalizeChainId
} from "@wagmi/core";
import { providers } from "ethers";
import { getAddress, hexValue } from "ethers/lib/utils.js";

// src/utils/getInjectedName.ts
function getInjectedName(ethereum) {
  if (!ethereum)
    return "Injected";
  const getName = (provider) => {
    if (provider.isApexWallet)
      return "Apex Wallet";
    if (provider.isAvalanche)
      return "Core Wallet";
    if (provider.isBackpack)
      return "Backpack";
    if (provider.isBifrost)
      return "Bifrost Wallet";
    if (provider.isBitKeep)
      return "BitKeep";
    if (provider.isBitski)
      return "Bitski";
    if (provider.isBlockWallet)
      return "BlockWallet";
    if (provider.isBraveWallet)
      return "Brave Wallet";
    if (provider.isCoinbaseWallet)
      return "Coinbase Wallet";
    if (provider.isDawn)
      return "Dawn Wallet";
    if (provider.isEnkrypt)
      return "Enkrypt";
    if (provider.isExodus)
      return "Exodus";
    if (provider.isFrame)
      return "Frame";
    if (provider.isFrontier)
      return "Frontier Wallet";
    if (provider.isGamestop)
      return "GameStop Wallet";
    if (provider.isHyperPay)
      return "HyperPay Wallet";
    if (provider.isImToken)
      return "ImToken";
    if (provider.isKuCoinWallet)
      return "KuCoin Wallet";
    if (provider.isMathWallet)
      return "MathWallet";
    if (provider.isOkxWallet || provider.isOKExWallet)
      return "OKX Wallet";
    if (provider.isOneInchIOSWallet || provider.isOneInchAndroidWallet)
      return "1inch Wallet";
    if (provider.isOpera)
      return "Opera";
    if (provider.isPhantom)
      return "Phantom";
    if (provider.isPortal)
      return "Ripio Portal";
    if (provider.isRabby)
      return "Rabby";
    if (provider.isRainbow)
      return "Rainbow";
    if (provider.isStatus)
      return "Status";
    if (provider.isTally)
      return "Taho";
    if (provider.isTokenPocket)
      return "TokenPocket";
    if (provider.isTokenary)
      return "Tokenary";
    if (provider.isTrust || provider.isTrustWallet)
      return "Trust Wallet";
    if (provider.isXDEFI)
      return "XDEFI Wallet";
    if (provider.isZerion)
      return "Zerion";
    if (provider.isMetaMask)
      return "MetaMask";
  };
  if (ethereum.providers?.length) {
    const nameSet = /* @__PURE__ */ new Set();
    let unknownCount = 1;
    for (const provider of ethereum.providers) {
      let name = getName(provider);
      if (!name) {
        name = `Unknown Wallet #${unknownCount}`;
        unknownCount += 1;
      }
      nameSet.add(name);
    }
    const names = [...nameSet];
    if (names.length)
      return names;
    return names[0] ?? "Injected";
  }
  return getName(ethereum) ?? "Injected";
}

// src/injected.ts
var _provider;
var InjectedConnector = class extends Connector {
  constructor({
    chains,
    options: options_
  } = {}) {
    const options = {
      shimDisconnect: true,
      getProvider: () => typeof window !== "undefined" ? window.ethereum : void 0,
      ...options_
    };
    super({ chains, options });
    __publicField(this, "id", "injected");
    __publicField(this, "name");
    __publicField(this, "ready");
    __privateAdd(this, _provider, void 0);
    __publicField(this, "shimDisconnectKey", `${this.id}.shimDisconnect`);
    __publicField(this, "onAccountsChanged", (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", {
          account: getAddress(accounts[0])
        });
    });
    __publicField(this, "onChainChanged", (chainId) => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    });
    __publicField(this, "onDisconnect", async (error) => {
      if (error.code === 1013) {
        const provider = await this.getProvider();
        if (provider) {
          const isAuthorized = await this.getAccount();
          if (isAuthorized)
            return;
        }
      }
      this.emit("disconnect");
      if (this.options.shimDisconnect)
        getClient().storage?.removeItem(this.shimDisconnectKey);
    });
    const provider = options.getProvider();
    if (typeof options.name === "string")
      this.name = options.name;
    else if (provider) {
      const detectedName = getInjectedName(provider);
      if (options.name)
        this.name = options.name(detectedName);
      else {
        if (typeof detectedName === "string")
          this.name = detectedName;
        else
          this.name = detectedName[0];
      }
    } else
      this.name = "Injected";
    this.ready = !!provider;
  }
  async connect({ chainId } = {}) {
    try {
      const provider = await this.getProvider();
      if (!provider)
        throw new ConnectorNotFoundError();
      if (provider.on) {
        provider.on("accountsChanged", this.onAccountsChanged);
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect);
      }
      this.emit("message", { type: "connecting" });
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const account = getAddress(accounts[0]);
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId);
        id = chain.id;
        unsupported = this.isChainUnsupported(id);
      }
      if (this.options.shimDisconnect)
        getClient().storage?.setItem(this.shimDisconnectKey, true);
      return { account, chain: { id, unsupported }, provider };
    } catch (error) {
      if (this.isUserRejectedRequestError(error))
        throw new UserRejectedRequestError(error);
      if (error.code === -32002)
        throw new ResourceUnavailableError(error);
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    if (!provider?.removeListener)
      return;
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    if (this.options.shimDisconnect)
      getClient().storage?.removeItem(this.shimDisconnectKey);
  }
  async getAccount() {
    const provider = await this.getProvider();
    if (!provider)
      throw new ConnectorNotFoundError();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    if (!provider)
      throw new ConnectorNotFoundError();
    return provider.request({ method: "eth_chainId" }).then(normalizeChainId);
  }
  async getProvider() {
    const provider = this.options.getProvider();
    if (provider)
      __privateSet(this, _provider, provider);
    return __privateGet(this, _provider);
  }
  async getSigner({ chainId } = {}) {
    const [provider, account] = await Promise.all([
      this.getProvider(),
      this.getAccount()
    ]);
    return new providers.Web3Provider(
      provider,
      chainId
    ).getSigner(account);
  }
  async isAuthorized() {
    try {
      if (this.options.shimDisconnect && !getClient().storage?.getItem(this.shimDisconnectKey))
        return false;
      const provider = await this.getProvider();
      if (!provider)
        throw new ConnectorNotFoundError();
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    if (!provider)
      throw new ConnectorNotFoundError();
    const id = hexValue(chainId);
    try {
      await Promise.all([
        provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: id }]
        }),
        new Promise(
          (res) => this.on("change", ({ chain }) => {
            if (chain?.id === chainId)
              res();
          })
        )
      ]);
      return this.chains.find((x) => x.id === chainId) ?? {
        id: chainId,
        name: `Chain ${id}`,
        network: `${id}`,
        nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
        rpcUrls: { default: { http: [""] }, public: { http: [""] } }
      };
    } catch (error) {
      const chain = this.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new ChainNotConfiguredError({ chainId, connectorId: this.id });
      if (error.code === 4902 || error?.data?.originalError?.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: id,
                chainName: chain.name,
                nativeCurrency: chain.nativeCurrency,
                rpcUrls: [chain.rpcUrls.public?.http[0] ?? ""],
                blockExplorerUrls: this.getBlockExplorerUrls(chain)
              }
            ]
          });
          const currentChainId = await this.getChainId();
          if (currentChainId !== chainId)
            throw new ProviderRpcError(
              "User rejected switch after adding network.",
              { code: 4001 }
            );
          return chain;
        } catch (addError) {
          if (this.isUserRejectedRequestError(addError))
            throw new UserRejectedRequestError(addError);
          throw new AddChainError();
        }
      }
      if (this.isUserRejectedRequestError(error))
        throw new UserRejectedRequestError(error);
      throw new SwitchChainError(error);
    }
  }
  async watchAsset({
    address,
    decimals = 18,
    image,
    symbol
  }) {
    const provider = await this.getProvider();
    if (!provider)
      throw new ConnectorNotFoundError();
    return provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          decimals,
          image,
          symbol
        }
      }
    });
  }
  isUserRejectedRequestError(error) {
    return error.code === 4001;
  }
};
_provider = new WeakMap();

export {
  InjectedConnector
};
