package com.nfc

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.matrix.nfcreader.GotNFCData
import com.matrix.nfcreader.NFCReaderManager
import com.matrix.nfcreader.NFCResponse

class NFCReaderManagerModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext), ActivityEventListener, LifecycleEventListener {

    init {
        reactContext.addActivityEventListener(this)
        reactContext.addLifecycleEventListener(this)
    }
    override fun getName(): String = "NFCReaderManagerModule"
    private var nfcReaderManager: NFCReaderManager? = null

    @ReactMethod
    fun readTag() {
        nfcReaderManager = NFCReaderManager
        currentActivity?.let { nfcReaderManager?.readNFC(it) { adapter, result ->
            when (result) {
                is NFCResponse.Success -> {
                    Log.d("NFC READER", result.successData)

                }
                is NFCResponse.NotRead -> {
                    Log.d("NFC READER", "NotRead")

                }
                is NFCResponse.Unavailable -> {
                    Log.d("NFC READER", "Unavailable")
                    nfcReaderManager?.destroy()
                }
                is NFCResponse.InvalidateError -> {
                    Log.d("NFC READER", "InvalidateError")
                }
            }
            }
        }
        currentActivity?.let { nfcReaderManager?.enableInForeground(it) }
    }

    override fun onActivityResult(p0: Activity?, p1: Int, p2: Int, p3: Intent?) {
        TODO("Not yet implemented")
    }

    override fun onNewIntent(newIntent: Intent?) {
        newIntent?.let {
            nfcReaderManager?.readFromIntent(newIntent)
        }
    }

    override fun onHostResume() {
        currentActivity?.let { nfcReaderManager?.enableInForeground(it) }
    }

    override fun onHostPause() {
        currentActivity?.let { nfcReaderManager?.enableInForeground(it) }
    }

    override fun onHostDestroy() {
        nfcReaderManager?.destroy()
        nfcReaderManager = null
    }
}
