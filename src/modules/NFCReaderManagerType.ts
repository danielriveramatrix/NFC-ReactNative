export interface NFCReaderManagerType {
  requestNFCPermission(): Promise<boolean>;
  readTag(callback: (data: string) => void): void;
}
