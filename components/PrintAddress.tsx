import { useState } from "react";

/**
 * Renders a wallet address with copy button
 *
 * @param {string} address - The wallet address.
 * @return {JSX.Element | null} - The rendered wallet address.
 */
const PrintAddress = ({ address }: { address: `0x${string}` }) => {
  const [copyAddress, setCopyAddress] = useState<string>("");

  /**
   * Copies the given address to the clipboard and updates the state with the copied address.
   *
   * @param {string} address - The address to be copied.
   * @return {void}
   */
  const copyToClipboard = (address: `0x${string}`) => {
    navigator.clipboard.writeText(address);
    setCopyAddress(address);
    setTimeout(() => setCopyAddress(""), 2000);
  };

  return (
    <button
      className="text-blue-500 hover:underline"
      onClick={() => copyToClipboard(address)}
    >
      {copyAddress
        ? "Copied!"
        : `${address.slice(0, 6)}...${address.slice(-4)}`}
    </button>
  );
};

export default PrintAddress;
