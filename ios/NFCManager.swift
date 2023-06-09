//
//  NFCManager.swift
//  NFC
//
//  Created by Edwin Ronald Velasquez Garcia on 3/04/23.
//

import Foundation
import NFCReaderModule
import CoreNFC


@objc(NFCReaderManagerModule)
class NFCReaderManagerModule: NSObject{
  private var manager: NFCReaderManager?
  
  @objc
  static func requiresMainQueueSetup() -> Bool { return true}
  
  @objc
  public func readTag(_ callback: @escaping RCTResponseSenderBlock) {
    if manager == nil {
      manager = NFCReaderManager()
    }
    manager?.readTag(didRead: { readerManager, result in
      switch(result) {
      case .success(let message):
        DispatchQueue.main.async {
          callback(["SUCCESS", message ?? ""])
        }
        
      case .failure(let error):
        var errorData = ""
        switch(error) {
        case NFCReaderManagerError.unavailable:
          errorData = "Unavailable"
        case .notSupported:
          errorData = "notSupported"
        case .invalidated(errorDescription: let errorDescription):
          errorData = errorDescription
        case .generic:
          errorData = "Generic"
        }
        DispatchQueue.main.async {
          callback(["ERROR", errorData])
        }
      }
      
    })
  }
  
  @objc
  public func isAvailableNFCReader(_ callback: RCTResponseSenderBlock) {
    guard NFCNDEFReaderSession.readingAvailable else {
      callback([false])
      return
    }
    callback([true])
  }
}
