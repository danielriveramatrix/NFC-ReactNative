package com.nfc

import com.matrix.nfcreader.NFCResponse

interface GotNFCResponse {
    fun nfcResponse(response: NFCResponse)
}