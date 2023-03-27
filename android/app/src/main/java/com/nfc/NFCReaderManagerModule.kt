package com.nfc

import android.app.Activity
import android.content.Context
import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.matrix.nfcreader.GotNFCData
import com.matrix.nfcreader.NFCReaderManager

class NFCReaderManagerModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "NFCReaderManagerModule"
    private var nfcReaderManager: NFCReaderManager? = null

    @ReactMethod
    fun readTag(context: Context, gotNFCData: GotNFCData) {
        nfcReaderManager = NFCReaderManager
        nfcReaderManager?.readNFC(context, gotNFCData)
    }

    @ReactMethod
    fun enableInForeground(contextActivity: Activity) {
        nfcReaderManager?.enableInForeground(contextActivity)
    }

    @ReactMethod
    fun disableInForeground(contextActivity: Activity) {
        nfcReaderManager?.enableInForeground(contextActivity)
    }

    @ReactMethod
    fun readNewIntent(newIntent : Intent) {
        nfcReaderManager?.readFromIntent(newIntent)
    }

    @ReactMethod
    fun destroy() {
        nfcReaderManager?.destroy()
        nfcReaderManager = null
    }

}
