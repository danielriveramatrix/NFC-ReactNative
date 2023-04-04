//
//  NFCManager.m
//  NFC
//
//  Created by Edwin Ronald Velasquez Garcia on 3/04/23.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(NFCReaderManagerModule, NSObject)
RCT_EXTERN_METHOD(readTag:
                  (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(isAvailableNFCReader:
                  (RCTResponseSenderBlock)callback)
@end
