//
//  NFCManager.swift
//  NFC
//
//  Created by Edwin Ronald Velasquez Garcia on 3/04/23.
//

import Foundation
import NFCReaderModule
import CoreNFC


@objc(NFCManager)
class NFCManager: NSObject{
  private var manager: NFCReaderManager?
  
  @objc
  static func requiresMainQueueSetup() -> Bool { return true}
  
  @objc
  public func readTag(callback: @escaping RCTResponseSenderBlock) {
    if manager == nil {
      manager = NFCReaderManager()
    }
    manager?.readTag(didRead: { readerManager, result in
      switch(result) {
      case .success(let message):
        DispatchQueue.main.async {
          callback(["SUCCESS", message ?? ""])
        }
        
      case .failure(_):
        DispatchQueue.main.async {
          callback(["ERROR", "error"])
        }
      }
      
    })
  }
  
  @objc
  public func isAvailableNFCReader(callback: RCTResponseSenderBlock) {
    guard NFCNDEFReaderSession.readingAvailable else {
      callback([false])
      return
    }
    callback([true])
  }
}
