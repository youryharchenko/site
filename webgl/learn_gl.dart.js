(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b,c){"use strict"
function generateAccessor(b0,b1,b2){var g=b0.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var a0
if(g.length>1)a0=true
else a0=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a1=d&3
var a2=d>>2
var a3=f=f.substring(0,e-1)
var a4=f.indexOf(":")
if(a4>0){a3=f.substring(0,a4)
f=f.substring(a4+1)}if(a1){var a5=a1&2?"r":""
var a6=a1&1?"this":"r"
var a7="return "+a6+"."+f
var a8=b2+".prototype.g"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}if(a2){var a5=a2&2?"r,v":"v"
var a6=a2&1?"this":"r"
var a7=a6+"."+f+"=v"
var a8=b2+".prototype.s"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}}return f}function defineClass(a4,a5){var g=[]
var f="function "+a4+"("
var e="",d=""
for(var a0=0;a0<a5.length;a0++){var a1=a5[a0]
if(a1.charCodeAt(0)==48){a1=a1.substring(1)
var a2=generateAccessor(a1,g,a4)
d+="this."+a2+" = null;\n"}else{var a2=generateAccessor(a1,g,a4)
var a3="p_"+a2
f+=e
e=", "
f+=a3
d+="this."+a2+" = "+a3+";\n"}}if(supportsDirectProtoAccess)d+="this."+"$deferredAction"+"();"
f+=") {\n"+d+"}\n"
f+=a4+".builtin$cls=\""+a4+"\";\n"
f+="$desc=$collectedClasses."+a4+"[1];\n"
f+=a4+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a4+".name=\""+a4+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(d,e){var g=d.prototype
g.__proto__=e.prototype
g.constructor=d
g["$is"+d.name]=d
return convertToFastObject(g)}:function(){function tmp(){}return function(a1,a2){tmp.prototype=a2.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a1.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var a0=e[d]
g[a0]=f[a0]}g["$is"+a1.name]=a1
g.constructor=a1
a1.prototype=g
return g}}()
function finishClasses(a5){var g=init.allClasses
a5.combinedConstructorFunction+="return [\n"+a5.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a5.combinedConstructorFunction)(a5.collected)
a5.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.name
var a1=a5.collected[a0]
var a2=a1[0]
a1=a1[1]
g[a0]=d
a2[a0]=d}f=null
var a3=init.finishedClasses
function finishClass(c2){if(a3[c2])return
a3[c2]=true
var a6=a5.pending[c2]
if(a6&&a6.indexOf("+")>0){var a7=a6.split("+")
a6=a7[0]
var a8=a7[1]
finishClass(a8)
var a9=g[a8]
var b0=a9.prototype
var b1=g[c2].prototype
var b2=Object.keys(b0)
for(var b3=0;b3<b2.length;b3++){var b4=b2[b3]
if(!u.call(b1,b4))b1[b4]=b0[b4]}}if(!a6||typeof a6!="string"){var b5=g[c2]
var b6=b5.prototype
b6.constructor=b5
b6.$ish=b5
b6.$deferredAction=function(){}
return}finishClass(a6)
var b7=g[a6]
if(!b7)b7=existingIsolateProperties[a6]
var b5=g[c2]
var b6=z(b5,b7)
if(b0)b6.$deferredAction=mixinDeferredActionHelper(b0,b6)
if(Object.prototype.hasOwnProperty.call(b6,"%")){var b8=b6["%"].split(";")
if(b8[0]){var b9=b8[0].split("|")
for(var b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=true}}if(b8[1]){b9=b8[1].split("|")
if(b8[2]){var c0=b8[2].split("|")
for(var b3=0;b3<c0.length;b3++){var c1=g[c0[b3]]
c1.$nativeSuperclassTag=b9[0]}}for(b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isp)b6.$deferredAction()}var a4=Object.keys(a5.pending)
for(var e=0;e<a4.length;e++)finishClass(a4[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.charCodeAt(0)
var a1
if(d!=="^"&&d!=="$reflectable"&&a0!==43&&a0!==42&&(a1=g[d])!=null&&a1.constructor===Array&&d!=="<>")addStubs(g,a1,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(d,e){var g
if(e.hasOwnProperty("$deferredAction"))g=e.$deferredAction
return function foo(){if(!supportsDirectProtoAccess)return
var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}d.$deferredAction()
f.$deferredAction()}}function processClassData(b2,b3,b4){b3=convertToSlowObject(b3)
var g
var f=Object.keys(b3)
var e=false
var d=supportsDirectProtoAccess&&b2!="h"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="n"){processStatics(init.statics[b2]=b3.n,b4)
delete b3.n}else if(a2===43){w[g]=a1.substring(1)
var a3=b3[a1]
if(a3>0)b3[g].$reflectable=a3}else if(a2===42){b3[g].$D=b3[a1]
var a4=b3.$methodsWithOptionalArguments
if(!a4)b3.$methodsWithOptionalArguments=a4={}
a4[a1]=g}else{var a5=b3[a1]
if(a1!=="^"&&a5!=null&&a5.constructor===Array&&a1!=="<>")if(d)e=true
else addStubs(b3,a5,a1,false,[])
else g=a1}}if(e)b3.$deferredAction=finishAddStubsHelper
var a6=b3["^"],a7,a8,a9=a6
var b0=a9.split(";")
a9=b0[1]?b0[1].split(","):[]
a8=b0[0]
a7=a8.split(":")
if(a7.length==2){a8=a7[0]
var b1=a7[1]
if(b1)b3.$S=function(b5){return function(){return init.types[b5]}}(b1)}if(a8)b4.pending[b2]=a8
b4.combinedConstructorFunction+=defineClass(b2,a9)
b4.constructorsList.push(b2)
b4.collected[b2]=[m,b3]
i.push(b2)}function processStatics(a4,a5){var g=Object.keys(a4)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a4[e]
var a0=e.charCodeAt(0)
var a1
if(a0===43){v[a1]=e.substring(1)
var a2=a4[e]
if(a2>0)a4[a1].$reflectable=a2
if(d&&d.length)init.typeInformation[a1]=d}else if(a0===42){m[a1].$D=d
var a3=a4.$methodsWithOptionalArguments
if(!a3)a4.$methodsWithOptionalArguments=a3={}
a3[e]=a1}else if(typeof d==="function"){m[a1=e]=d
h.push(e)}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a1=e
processClassData(e,d,a5)}}}function addStubs(b6,b7,b8,b9,c0){var g=0,f=g,e=b7[g],d
if(typeof e=="string")d=b7[++g]
else{d=e
e=b8}if(typeof d=="number"){f=d
d=b7[++g]}b6[b8]=b6[e]=d
var a0=[d]
d.$stubName=b8
c0.push(b8)
for(g++;g<b7.length;g++){d=b7[g]
if(typeof d!="function")break
if(!b9)d.$stubName=b7[++g]
a0.push(d)
if(d.$stubName){b6[d.$stubName]=d
c0.push(d.$stubName)}}for(var a1=0;a1<a0.length;g++,a1++)a0[a1].$callName=b7[g]
var a2=b7[g]
b7=b7.slice(++g)
var a3=b7[0]
var a4=(a3&1)===1
a3=a3>>1
var a5=a3>>1
var a6=(a3&1)===1
var a7=a3===3
var a8=a3===1
var a9=b7[1]
var b0=a9>>1
var b1=(a9&1)===1
var b2=a5+b0
var b3=b7[2]
if(typeof b3=="number")b7[2]=b3+c
if(b>0){var b4=3
for(var a1=0;a1<b0;a1++){if(typeof b7[b4]=="number")b7[b4]=b7[b4]+b
b4++}for(var a1=0;a1<b2;a1++){b7[b4]=b7[b4]+b
b4++}}var b5=2*b0+a5+3
if(a2){d=tearOff(a0,f,b7,b9,b8,a4)
b6[b8].$getter=d
d.$getterStub=true
if(b9)c0.push(a2)
b6[a2]=d
a0.push(d)
d.$stubName=a2
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cD(this,d,e,f,true,[],a1).prototype
return g}:tearOffGetter(d,e,f,a1,a2)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bj=function(){}
var dart=[["","",,H,{"^":"",lo:{"^":"h;a"}}],["","",,J,{"^":"",
cH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cF==null){H.kI()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.k(P.dH("Return interceptor for "+H.n(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ci()]
if(v!=null)return v
v=H.kQ(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$ci(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
p:{"^":"h;",
aj:function(a,b){return a===b},
ga0:function(a){return H.b9(a)},
l:["bW",function(a){return"Instance of '"+H.ba(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fi:{"^":"p;",
l:function(a){return String(a)},
ga0:function(a){return a?519018:218159},
$isQ:1},
fk:{"^":"p;",
aj:function(a,b){return null==b},
l:function(a){return"null"},
ga0:function(a){return 0},
$isF:1},
cj:{"^":"p;",
ga0:function(a){return 0},
l:["bY",function(a){return String(a)}]},
ic:{"^":"cj;"},
bz:{"^":"cj;"},
bt:{"^":"cj;",
l:function(a){var z=a[$.$get$d0()]
if(z==null)return this.bY(a)
return"JavaScript function for "+H.n(J.aw(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbp:1},
bq:{"^":"p;$ti",
aC:function(a,b){return new H.cc(a,[H.x(a,0),b])},
m:function(a,b){H.H(b,H.x(a,0))
if(!!a.fixed$length)H.au(P.bA("add"))
a.push(b)},
a_:function(a,b){var z
H.Y(b,"$isq",[H.x(a,0)],"$asq")
if(!!a.fixed$length)H.au(P.bA("addAll"))
for(z=J.b2(b);z.C();)a.push(z.gF(z))},
aF:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.U(z,y,H.n(a[y]))
return z.join(b)},
d8:function(a,b,c){var z,y,x,w
z=H.x(a,0)
H.m(b,{func:1,ret:P.Q,args:[z]})
H.m(c,{func:1,ret:z})
y=a.length
for(x=0;x<y;++x){w=a[x]
if(b.$1(w))return w
if(a.length!==y)throw H.k(P.ax(a))}return c.$0()},
u:function(a,b){return this.h(a,b)},
bs:function(a,b){var z,y
H.m(b,{func:1,ret:P.Q,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.k(P.ax(a))}return!1},
B:function(a,b){var z
for(z=0;z<a.length;++z)if(J.c5(a[z],b))return!0
return!1},
l:function(a){return P.cg(a,"[","]")},
gR:function(a){return new J.cS(a,a.length,0,[H.x(a,0)])},
ga0:function(a){return H.b9(a)},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.at(a,b))
if(b>=a.length||b<0)throw H.k(H.at(a,b))
return a[b]},
U:function(a,b,c){H.v(b)
H.H(c,H.x(a,0))
if(!!a.immutable$list)H.au(P.bA("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.at(a,b))
if(b>=a.length||b<0)throw H.k(H.at(a,b))
a[b]=c},
$isB:1,
$asB:I.bj,
$ist:1,
$isq:1,
$iso:1,
n:{
fh:function(a,b){return J.br(H.c(a,[b]))},
br:function(a){H.bo(a)
a.fixed$length=Array
return a}}},
ln:{"^":"bq;$ti"},
cS:{"^":"h;a,b,c,0d,$ti",
sba:function(a){this.d=H.H(a,H.x(this,0))},
gF:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.k(H.aR(z))
x=this.c
if(x>=y){this.sba(null)
return!1}this.sba(z[x]);++this.c
return!0},
$isaB:1},
bs:{"^":"p;",
gbC:function(a){return a===0?1/a<0:a<0},
bq:function(a){return Math.abs(a)},
du:function(a,b){var z
if(b>20)throw H.k(P.bb(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbC(a))return"-"+z
return z},
dv:function(a,b){var z
if(b<1||b>21)throw H.k(P.bb(b,1,21,"precision",null))
z=a.toPrecision(b)
if(a===0&&this.gbC(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga0:function(a){return a&0x1FFFFFFF},
a6:function(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.k(P.bA("Result of truncating division is "+H.n(z)+": "+H.n(a)+" ~/ "+b))},
cL:function(a,b){var z
if(a>0)z=this.cK(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cK:function(a,b){return b>31?0:a>>>b},
bQ:function(a,b){if(typeof b!=="number")throw H.k(H.bg(b))
return a<b},
$isE:1,
$isM:1},
ch:{"^":"bs;",
bq:function(a){return Math.abs(a)},
$isS:1},
fj:{"^":"bs;"},
bQ:{"^":"p;",
bx:function(a,b){if(b<0)throw H.k(H.at(a,b))
if(b>=a.length)H.au(H.at(a,b))
return a.charCodeAt(b)},
aN:function(a,b){if(b>=a.length)throw H.k(H.at(a,b))
return a.charCodeAt(b)},
a8:function(a,b){H.C(b)
if(typeof b!=="string")throw H.k(P.cR(b,null,null))
return a+b},
bT:function(a,b){var z=H.c(a.split(b),[P.e])
return z},
bU:function(a,b,c){var z
if(c>a.length)throw H.k(P.bb(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
b7:function(a,b){return this.bU(a,b,0)},
b9:function(a,b,c){H.v(c)
if(c==null)c=a.length
if(b<0)throw H.k(P.bR(b,null,null))
if(b>c)throw H.k(P.bR(b,null,null))
if(c>a.length)throw H.k(P.bR(c,null,null))
return a.substring(b,c)},
b8:function(a,b){return this.b9(a,b,null)},
dt:function(a){return a.toLowerCase()},
dw:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aN(z,0)===133){x=J.fl(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bx(z,w)===133?J.fm(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
d_:function(a,b,c){if(c>a.length)throw H.k(P.bb(c,0,a.length,null,null))
return H.kZ(a,b,c)},
l:function(a){return a},
ga0:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isB:1,
$asB:I.bj,
$isib:1,
$ise:1,
n:{
d9:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fl:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.aN(a,b)
if(y!==32&&y!==13&&!J.d9(y))break;++b}return b},
fm:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bx(a,z)
if(y!==32&&y!==13&&!J.d9(y))break}return b}}}}],["","",,H,{"^":"",
ff:function(){return new P.cr("No element")},
fg:function(){return new P.cr("Too many elements")},
dL:{"^":"q;$ti",
gR:function(a){return new H.eK(J.b2(this.gar()),this.$ti)},
gj:function(a){return J.av(this.gar())},
u:function(a,b){return H.cK(J.cN(this.gar(),b),H.x(this,1))},
l:function(a){return J.aw(this.gar())},
$asq:function(a,b){return[b]}},
eK:{"^":"h;a,$ti",
C:function(){return this.a.C()},
gF:function(a){var z=this.a
return H.cK(z.gF(z),H.x(this,1))},
$isaB:1,
$asaB:function(a,b){return[b]}},
cW:{"^":"dL;ar:a<,$ti",n:{
eJ:function(a,b,c){H.Y(a,"$isq",[b],"$asq")
if(H.aP(a,"$ist",[b],"$ast"))return new H.iX(a,[b,c])
return new H.cW(a,[b,c])}}},
iX:{"^":"cW;a,$ti",$ist:1,
$ast:function(a,b){return[b]}},
iR:{"^":"k7;$ti",
h:function(a,b){return H.cK(J.cL(this.a,b),H.x(this,1))},
$ist:1,
$ast:function(a,b){return[b]},
$asu:function(a,b){return[b]},
$iso:1,
$aso:function(a,b){return[b]}},
cc:{"^":"iR;ar:a<,$ti",
aC:function(a,b){return new H.cc(this.a,[H.x(this,0),b])}},
t:{"^":"q;$ti"},
b7:{"^":"t;$ti",
gR:function(a){return new H.dg(this,this.gj(this),0,[H.bl(this,"b7",0)])},
b2:function(a,b){return this.bX(0,H.m(b,{func:1,ret:P.Q,args:[H.bl(this,"b7",0)]}))}},
dg:{"^":"h;a,b,c,0d,$ti",
sbb:function(a){this.d=H.H(a,H.x(this,0))},
gF:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.bE(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.k(P.ax(z))
w=this.c
if(typeof x!=="number")return H.R(x)
if(w>=x){this.sbb(null)
return!1}this.sbb(y.u(z,w));++this.c
return!0},
$isaB:1},
i_:{"^":"b7;a,b,$ti",
gj:function(a){return J.av(this.a)},
u:function(a,b){return this.b.$1(J.cN(this.a,b))},
$ast:function(a,b){return[b]},
$asb7:function(a,b){return[b]},
$asq:function(a,b){return[b]}},
dI:{"^":"q;a,b,$ti",
gR:function(a){return new H.iG(J.b2(this.a),this.b,this.$ti)}},
iG:{"^":"aB;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gF(z)))return!0
return!1},
gF:function(a){var z=this.a
return z.gF(z)}},
bP:{"^":"h;$ti"},
k7:{"^":"dL+u;"}}],["","",,H,{"^":"",
c4:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kB:function(a){return init.types[H.v(a)]},
kM:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isD},
n:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aw(a)
if(typeof z!=="string")throw H.k(H.bg(a))
return z},
b9:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
cp:function(a,b){var z,y
if(typeof a!=="string")H.au(H.bg(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.j(z,3)
y=H.C(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
dl:function(a){var z,y
if(typeof a!=="string")H.au(H.bg(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.eA(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
ba:function(a){return H.id(a)+H.cC(H.aQ(a),0,null)},
id:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.y||!!z.$isbz){u=C.p(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.c4(w.length>1&&C.h.aN(w,0)===36?C.h.b8(w,1):w)},
R:function(a){throw H.k(H.bg(a))},
j:function(a,b){if(a==null)J.av(a)
throw H.k(H.at(a,b))},
at:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,"index",null)
z=H.v(J.av(a))
if(!(b<0)){if(typeof z!=="number")return H.R(z)
y=b>=z}else y=!0
if(y)return P.L(b,a,"index",null,z)
return P.bR(b,"index",null)},
bg:function(a){return new P.ap(!0,a,null,null)},
k:function(a){var z
if(a==null)a=new P.co()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eq})
z.name=""}else z.toString=H.eq
return z},
eq:function(){return J.aw(this.dartException)},
au:function(a){throw H.k(a)},
aR:function(a){throw H.k(P.ax(a))},
a6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cL(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.n(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dk(H.n(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dv()
u=$.$get$dw()
t=$.$get$dx()
s=$.$get$dy()
r=$.$get$dC()
q=$.$get$dD()
p=$.$get$dA()
$.$get$dz()
o=$.$get$dF()
n=$.$get$dE()
m=v.a5(y)
if(m!=null)return z.$1(H.ck(H.C(y),m))
else{m=u.a5(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.C(y),m))}else{m=t.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=r.a5(y)
if(m==null){m=q.a5(y)
if(m==null){m=p.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=o.a5(y)
if(m==null){m=n.a5(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dk(H.C(y),m))}}return z.$1(new H.iD(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dp()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ap(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dp()
return a},
bn:function(a){var z
if(a==null)return new H.dY(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dY(a)},
ky:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.U(0,a[y],a[x])}return b},
kL:function(a,b,c,d,e,f){H.b(a,"$isbp")
switch(H.v(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(new P.j1("Unsupported number of arguments for wrapped closure"))},
bi:function(a,b){var z
H.v(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kL)
a.$identity=z
return z},
eO:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.N(d).$iso){z.$reflectionInfo=d
x=H.ij(z).r}else x=d
w=e?Object.create(new H.it().constructor.prototype):Object.create(new H.c9(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ah
if(typeof u!=="number")return u.a8()
$.ah=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cX(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kB,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cV:H.ca
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.k("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cX(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eL:function(a,b,c,d){var z=H.ca
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cX:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eN(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eL(y,!w,z,b)
if(y===0){w=$.ah
if(typeof w!=="number")return w.a8()
$.ah=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b3
if(v==null){v=H.bM("self")
$.b3=v}return new Function(w+H.n(v)+";return "+u+"."+H.n(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ah
if(typeof w!=="number")return w.a8()
$.ah=w+1
t+=w
w="return function("+t+"){return this."
v=$.b3
if(v==null){v=H.bM("self")
$.b3=v}return new Function(w+H.n(v)+"."+H.n(z)+"("+t+");}")()},
eM:function(a,b,c,d){var z,y
z=H.ca
y=H.cV
switch(b?-1:a){case 0:throw H.k(H.io("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eN:function(a,b){var z,y,x,w,v,u,t,s
z=$.b3
if(z==null){z=H.bM("self")
$.b3=z}y=$.cU
if(y==null){y=H.bM("receiver")
$.cU=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eM(w,!u,x,b)
if(w===1){z="return function(){return this."+H.n(z)+"."+H.n(x)+"(this."+H.n(y)+");"
y=$.ah
if(typeof y!=="number")return y.a8()
$.ah=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.n(z)+"."+H.n(x)+"(this."+H.n(y)+", "+s+");"
y=$.ah
if(typeof y!=="number")return y.a8()
$.ah=y+1
return new Function(z+y+"}")()},
cD:function(a,b,c,d,e,f,g){var z,y
z=J.br(H.bo(b))
H.v(c)
y=!!J.N(d).$iso?J.br(d):d
return H.eO(a,z,c,y,!!e,f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.ae(a,"String"))},
kw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.ae(a,"double"))},
cI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.ae(a,"num"))},
ed:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.ae(a,"bool"))},
v:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.ae(a,"int"))},
en:function(a,b){throw H.k(H.ae(a,H.C(b).substring(3)))},
b:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.en(a,b)},
bo:function(a){if(a==null)return a
if(!!J.N(a).$iso)return a
throw H.k(H.ae(a,"List"))},
kO:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$iso)return a
if(z[b])return a
H.en(a,b)},
ee:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.v(z)]
else return a.$S()}return},
bD:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ee(J.N(a))
if(z==null)return!1
return H.e2(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cz)return a
$.cz=!0
try{if(H.bD(a,b))return a
z=H.bH(b)
y=H.ae(a,z)
throw H.k(y)}finally{$.cz=!1}},
bk:function(a,b){if(a!=null&&!H.bZ(a,b))H.au(H.ae(a,H.bH(b)))
return a},
e7:function(a){var z,y
z=J.N(a)
if(!!z.$isd){y=H.ee(z)
if(y!=null)return H.bH(y)
return"Closure"}return H.ba(a)},
l_:function(a){throw H.k(new P.eW(H.C(a)))},
eh:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aQ:function(a){if(a==null)return
return a.$ti},
mg:function(a,b,c){return H.b1(a["$as"+H.n(c)],H.aQ(b))},
bm:function(a,b,c,d){var z
H.C(c)
H.v(d)
z=H.b1(a["$as"+H.n(c)],H.aQ(b))
return z==null?null:z[d]},
bl:function(a,b,c){var z
H.C(b)
H.v(c)
z=H.b1(a["$as"+H.n(b)],H.aQ(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.v(b)
z=H.aQ(a)
return z==null?null:z[b]},
bH:function(a){return H.aO(a,null)},
aO:function(a,b){var z,y
H.Y(b,"$iso",[P.e],"$aso")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c4(a[0].builtin$cls)+H.cC(a,1,b)
if(typeof a=="function")return H.c4(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.v(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.n(b[y])}if('func' in a)return H.ki(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ki:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.Y(b,"$iso",z,"$aso")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.c.m(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.h.a8(t,b[r])
q=y[u]
if(q!=null&&q!==P.h)t+=" extends "+H.aO(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aO(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aO(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kx(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.n(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cC:function(a,b,c){var z,y,x,w,v,u
H.Y(c,"$iso",[P.e],"$aso")
if(a==null)return""
z=new P.ct("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aO(u,c)}return"<"+z.l(0)+">"},
b1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aP:function(a,b,c,d){var z,y
H.C(b)
H.bo(c)
H.C(d)
if(a==null)return!1
z=H.aQ(a)
y=J.N(a)
if(y[b]==null)return!1
return H.ea(H.b1(y[d],z),null,c,null)},
Y:function(a,b,c,d){H.C(b)
H.bo(c)
H.C(d)
if(a==null)return a
if(H.aP(a,b,c,d))return a
throw H.k(H.ae(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.cC(c,0,null),init.mangledGlobalNames)))},
ea:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ac(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ac(a[y],b,c[y],d))return!1
return!0},
me:function(a,b,c){return a.apply(b,H.b1(J.N(b)["$as"+H.n(c)],H.aQ(b)))},
ej:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="h"||a.builtin$cls==="F"||a===-1||a===-2||H.ej(z)}return!1},
bZ:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="h"||b.builtin$cls==="F"||b===-1||b===-2||H.ej(b)
if(b==null||b===-1||b.builtin$cls==="h"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bZ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bD(a,b)}z=J.N(a).constructor
y=H.aQ(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ac(z,null,b,null)},
cK:function(a,b){if(a!=null&&!H.bZ(a,b))throw H.k(H.eI(a,H.bH(b)))
return a},
H:function(a,b){if(a!=null&&!H.bZ(a,b))throw H.k(H.ae(a,H.bH(b)))
return a},
ac:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="h"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="h"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ac(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.e2(a,b,c,d)
if('func' in a)return c.builtin$cls==="bp"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ac("type" in a?a.type:null,b,x,d)
else if(H.ac(a,b,x,d))return!0
else{if(!('$is'+"aj" in y.prototype))return!1
w=y.prototype["$as"+"aj"]
v=H.b1(w,z?a.slice(1):null)
return H.ac(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ea(H.b1(r,z),b,u,d)},
e2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ac(a.ret,b,c.ret,d))return!1
x=a.args
w=c.args
v=a.opt
u=c.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
for(p=0;p<t;++p)if(!H.ac(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ac(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ac(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kV(m,b,l,d)},
kV:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ac(c[w],d,a[w],b))return!1}return!0},
mf:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
kQ:function(a){var z,y,x,w,v,u
z=H.C($.ei.$1(a))
y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.e9.$2(a,z))
if(z!=null){y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.c_[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.em(a,x)
if(v==="*")throw H.k(P.dH(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.em(a,x)},
em:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cH(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cH(a,!1,null,!!a.$isD)},
kU:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cH(z,c,null,null)},
kI:function(){if(!0===$.cF)return
$.cF=!0
H.kJ()},
kJ:function(){var z,y,x,w,v,u,t,s
$.c_=Object.create(null)
$.c2=Object.create(null)
H.kE()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eo.$1(v)
if(u!=null){t=H.kU(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kE:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b_(C.A,H.b_(C.F,H.b_(C.o,H.b_(C.o,H.b_(C.E,H.b_(C.B,H.b_(C.C(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ei=new H.kF(v)
$.e9=new H.kG(u)
$.eo=new H.kH(t)},
b_:function(a,b){return a(b)||b},
kZ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ii:{"^":"h;a,b,c,d,e,f,r,0x",n:{
ij:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.br(z)
y=z[0]
x=z[1]
return new H.ii(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iA:{"^":"h;a,b,c,d,e,f",
a5:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
n:{
am:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i9:{"^":"V;a,b",
l:function(a){var z=this.b
if(z==null)return"NullError: "+H.n(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dk:function(a,b){return new H.i9(a,b==null?null:b.method)}}},
fn:{"^":"V;a,b,c",
l:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.n(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.n(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.n(this.a)+")"},
n:{
ck:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fn(a,y,z?null:b.receiver)}}},
iD:{"^":"V;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l1:{"^":"d:10;a",
$1:function(a){if(!!J.N(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dY:{"^":"h;a,0b",
l:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isad:1},
d:{"^":"h;",
l:function(a){return"Closure '"+H.ba(this).trim()+"'"},
gbL:function(){return this},
$isbp:1,
gbL:function(){return this}},
dt:{"^":"d;"},
it:{"^":"dt;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.c4(z)+"'"}},
c9:{"^":"dt;a,b,c,d",
aj:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c9))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga0:function(a){var z,y
z=this.c
if(z==null)y=H.b9(this.a)
else y=typeof z!=="object"?J.bK(z):H.b9(z)
return(y^H.b9(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.ba(z)+"'")},
n:{
ca:function(a){return a.a},
cV:function(a){return a.c},
bM:function(a){var z,y,x,w,v
z=new H.c9("self","target","receiver","name")
y=J.br(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iB:{"^":"V;a",
l:function(a){return this.a},
n:{
ae:function(a,b){return new H.iB("TypeError: "+H.n(P.bO(a))+": type '"+H.e7(a)+"' is not a subtype of type '"+b+"'")}}},
eH:{"^":"V;a",
l:function(a){return this.a},
n:{
eI:function(a,b){return new H.eH("CastError: "+H.n(P.bO(a))+": type '"+H.e7(a)+"' is not a subtype of type '"+b+"'")}}},
im:{"^":"V;a",
l:function(a){return"RuntimeError: "+H.n(this.a)},
n:{
io:function(a){return new H.im(a)}}},
bu:{"^":"cm;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gZ:function(a){return new H.dd(this,[H.x(this,0)])},
au:function(a,b){var z=this.b
if(z==null)return!1
return this.cr(z,b)},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ay(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ay(w,b)
x=y==null?null:y.b
return x}else return this.dd(b)},
dd:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bk(z,J.bK(a)&0x3ffffff)
x=this.bB(y,a)
if(x<0)return
return y[x].b},
U:function(a,b,c){var z,y,x,w,v,u
H.H(b,H.x(this,0))
H.H(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aT()
this.b=z}this.bc(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aT()
this.c=y}this.bc(y,b,c)}else{x=this.d
if(x==null){x=this.aT()
this.d=x}w=J.bK(b)&0x3ffffff
v=this.bk(x,w)
if(v==null)this.aV(x,w,[this.aU(b,c)])
else{u=this.bB(v,b)
if(u>=0)v[u].b=c
else v.push(this.aU(b,c))}}},
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.k(P.ax(this))
z=z.c}},
bc:function(a,b,c){var z
H.H(b,H.x(this,0))
H.H(c,H.x(this,1))
z=this.ay(a,b)
if(z==null)this.aV(a,b,this.aU(b,c))
else z.b=c},
cB:function(){this.r=this.r+1&67108863},
aU:function(a,b){var z,y
z=new H.hT(H.H(a,H.x(this,0)),H.H(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cB()
return z},
bB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.c5(a[y].a,b))return y
return-1},
l:function(a){return P.dh(this)},
ay:function(a,b){return a[b]},
bk:function(a,b){return a[b]},
aV:function(a,b,c){a[b]=c},
cs:function(a,b){delete a[b]},
cr:function(a,b){return this.ay(a,b)!=null},
aT:function(){var z=Object.create(null)
this.aV(z,"<non-identifier-key>",z)
this.cs(z,"<non-identifier-key>")
return z},
$isdc:1},
hT:{"^":"h;a,b,0c,0d"},
dd:{"^":"t;a,$ti",
gj:function(a){return this.a.a},
gR:function(a){var z,y
z=this.a
y=new H.hU(z,z.r,this.$ti)
y.c=z.e
return y}},
hU:{"^":"h;a,b,0c,0d,$ti",
sbh:function(a){this.d=H.H(a,H.x(this,0))},
gF:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.ax(z))
else{z=this.c
if(z==null){this.sbh(null)
return!1}else{this.sbh(z.a)
this.c=this.c.c
return!0}}},
$isaB:1},
kF:{"^":"d:10;a",
$1:function(a){return this.a(a)}},
kG:{"^":"d:37;a",
$2:function(a,b){return this.a(a,b)}},
kH:{"^":"d:36;a",
$1:function(a){return this.a(H.C(a))}}}],["","",,H,{"^":"",
kx:function(a){return J.fh(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
w:function(a){var z,y,x,w
z=J.N(a)
if(!!z.$isB)return a
y=z.gj(a)
if(typeof y!=="number")return H.R(y)
x=new Array(y)
x.fixed$length=Array
w=0
while(!0){y=z.gj(a)
if(typeof y!=="number")return H.R(y)
if(!(w<y))break
C.c.U(x,w,z.h(a,w));++w}return x},
ar:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.at(b,a))},
i4:{"^":"p;",$islX:1,"%":"DataView;ArrayBufferView;cn|dS|dT|di|dU|dV|aE"},
cn:{"^":"i4;",
gj:function(a){return a.length},
$isB:1,
$asB:I.bj,
$isD:1,
$asD:I.bj},
di:{"^":"dT;",
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
U:function(a,b,c){H.v(b)
H.kw(c)
H.ar(b,a,a.length)
a[b]=c},
$ist:1,
$ast:function(){return[P.E]},
$asbP:function(){return[P.E]},
$asu:function(){return[P.E]},
$isq:1,
$asq:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]},
"%":"Float64Array"},
aE:{"^":"dV;",$ist:1,
$ast:function(){return[P.S]},
$asbP:function(){return[P.S]},
$asu:function(){return[P.S]},
$isq:1,
$asq:function(){return[P.S]},
$iso:1,
$aso:function(){return[P.S]}},
i3:{"^":"di;",$islj:1,"%":"Float32Array"},
lv:{"^":"aE;",
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lw:{"^":"aE;",
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lx:{"^":"aE;",
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ly:{"^":"aE;",
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lz:{"^":"aE;",
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lA:{"^":"aE;",
gj:function(a){return a.length},
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lB:{"^":"aE;",
gj:function(a){return a.length},
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dS:{"^":"cn+u;"},
dT:{"^":"dS+bP;"},
dU:{"^":"cn+u;"},
dV:{"^":"dU+bP;"}}],["","",,P,{"^":"",
iK:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kr()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bi(new P.iM(z),1)).observe(y,{childList:true})
return new P.iL(z,y,x)}else if(self.setImmediate!=null)return P.ks()
return P.kt()},
m1:[function(a){self.scheduleImmediate(H.bi(new P.iN(H.m(a,{func:1,ret:-1})),0))},"$1","kr",4,0,8],
m2:[function(a){self.setImmediate(H.bi(new P.iO(H.m(a,{func:1,ret:-1})),0))},"$1","ks",4,0,8],
m3:[function(a){H.m(a,{func:1,ret:-1})
P.k_(0,a)},"$1","kt",4,0,8],
e3:function(a,b){if(H.bD(a,{func:1,args:[P.h,P.ad]}))return b.dj(a,null,P.h,P.ad)
if(H.bD(a,{func:1,args:[P.h]})){b.toString
return H.m(a,{func:1,ret:null,args:[P.h]})}throw H.k(P.cR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kk:function(){var z,y
for(;z=$.aY,z!=null;){$.be=null
y=z.b
$.aY=y
if(y==null)$.bd=null
z.a.$0()}},
md:[function(){$.cA=!0
try{P.kk()}finally{$.be=null
$.cA=!1
if($.aY!=null)$.$get$cw().$1(P.eb())}},"$0","eb",0,0,1],
e6:function(a){var z=new P.dJ(H.m(a,{func:1,ret:-1}))
if($.aY==null){$.bd=z
$.aY=z
if(!$.cA)$.$get$cw().$1(P.eb())}else{$.bd.b=z
$.bd=z}},
ko:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aY
if(z==null){P.e6(a)
$.be=$.bd
return}y=new P.dJ(a)
x=$.be
if(x==null){y.b=z
$.be=y
$.aY=y}else{y.b=x.b
x.b=y
$.be=y
if(y.b==null)$.bd=y}},
kY:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.J
if(C.d===y){P.aZ(null,null,C.d,a)
return}y.toString
P.aZ(null,null,y,H.m(y.bu(a),z))},
bY:function(a,b,c,d,e){var z={}
z.a=d
P.ko(new P.km(z,e))},
e4:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
e5:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.H(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kn:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.H(e,h)
H.H(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
aZ:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bu(d):c.cV(d,-1)
P.e6(d)},
iM:{"^":"d:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iL:{"^":"d:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iN:{"^":"d:2;a",
$0:function(){this.a.$0()}},
iO:{"^":"d:2;a",
$0:function(){this.a.$0()}},
jZ:{"^":"h;a,0b,c",
ci:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bi(new P.k0(this,b),0),a)
else throw H.k(P.bA("`setTimeout()` not found."))},
n:{
k_:function(a,b){var z=new P.jZ(!0,0)
z.ci(a,b)
return z}}},
k0:{"^":"d:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
dM:{"^":"h;$ti",
cZ:[function(a,b){if(a==null)a=new P.co()
if(this.a.a!==0)throw H.k(P.by("Future already completed"))
$.J.toString
this.a9(a,b)},function(a){return this.cZ(a,null)},"cY","$2","$1","gcX",4,2,15]},
cv:{"^":"dM;a,$ti",
at:function(a,b){var z
H.bk(b,{futureOr:1,type:H.x(this,0)})
z=this.a
if(z.a!==0)throw H.k(P.by("Future already completed"))
z.cl(b)},
a9:function(a,b){this.a.cm(a,b)}},
jU:{"^":"dM;a,$ti",
at:function(a,b){var z
H.bk(b,{futureOr:1,type:H.x(this,0)})
z=this.a
if(z.a!==0)throw H.k(P.by("Future already completed"))
z.aP(b)},
a9:function(a,b){this.a.a9(a,b)}},
aN:{"^":"h;0a,b,c,d,e,$ti",
dg:function(a){if(this.c!==6)return!0
return this.b.b.b_(H.m(this.d,{func:1,ret:P.Q,args:[P.h]}),a.a,P.Q,P.h)},
dc:function(a){var z,y,x,w
z=this.e
y=P.h
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.bD(z,{func:1,args:[P.h,P.ad]}))return H.bk(w.dn(z,a.a,a.b,null,y,P.ad),x)
else return H.bk(w.b_(H.m(z,{func:1,args:[P.h]}),a.a,null,y),x)}},
a0:{"^":"h;bo:a<,b,0cH:c<,$ti",
bH:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.d){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.e3(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a0(0,$.J,[c])
w=b==null?1:3
this.aM(new P.aN(x,w,a,b,[z,c]))
return x},
I:function(a,b){return this.bH(a,null,b)},
aM:function(a){var z,y
z=this.a
if(z<=1){a.a=H.b(this.c,"$isaN")
this.c=a}else{if(z===2){y=H.b(this.c,"$isa0")
z=y.a
if(z<4){y.aM(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aZ(null,null,z,H.m(new P.j4(this,a),{func:1,ret:-1}))}},
bm:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.b(this.c,"$isaN")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.b(this.c,"$isa0")
y=u.a
if(y<4){u.bm(a)
return}this.a=y
this.c=u.c}z.a=this.aA(a)
y=this.b
y.toString
P.aZ(null,null,y,H.m(new P.jb(z,this),{func:1,ret:-1}))}},
az:function(){var z=H.b(this.c,"$isaN")
this.c=null
return this.aA(z)},
aA:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aP:function(a){var z,y,x
z=H.x(this,0)
H.bk(a,{futureOr:1,type:z})
y=this.$ti
if(H.aP(a,"$isaj",y,"$asaj"))if(H.aP(a,"$isa0",y,null))P.bV(a,this)
else P.dN(a,this)
else{x=this.az()
H.H(a,z)
this.a=4
this.c=a
P.aX(this,x)}},
a9:[function(a,b){var z
H.b(b,"$isad")
z=this.az()
this.a=8
this.c=new P.a9(a,b)
P.aX(this,z)},function(a){return this.a9(a,null)},"dC","$2","$1","gcp",4,2,15],
cl:function(a){var z
H.bk(a,{futureOr:1,type:H.x(this,0)})
if(H.aP(a,"$isaj",this.$ti,"$asaj")){this.co(a)
return}this.a=1
z=this.b
z.toString
P.aZ(null,null,z,H.m(new P.j6(this,a),{func:1,ret:-1}))},
co:function(a){var z=this.$ti
H.Y(a,"$isaj",z,"$asaj")
if(H.aP(a,"$isa0",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aZ(null,null,z,H.m(new P.ja(this,a),{func:1,ret:-1}))}else P.bV(a,this)
return}P.dN(a,this)},
cm:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aZ(null,null,z,H.m(new P.j5(this,a,b),{func:1,ret:-1}))},
$isaj:1,
n:{
dN:function(a,b){var z,y,x
b.a=1
try{a.bH(new P.j7(b),new P.j8(b),null)}catch(x){z=H.a6(x)
y=H.bn(x)
P.kY(new P.j9(b,z,y))}},
bV:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.b(a.c,"$isa0")
if(z>=4){y=b.az()
b.a=a.a
b.c=a.c
P.aX(b,y)}else{y=H.b(b.c,"$isaN")
b.a=2
b.c=a
a.bm(y)}},
aX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.b(y.c,"$isa9")
y=y.b
u=v.a
t=v.b
y.toString
P.bY(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aX(z.a,b)}y=z.a
r=y.c
x.a=w
x.b=r
u=!w
if(u){t=b.c
t=(t&1)!==0||t===8}else t=!0
if(t){t=b.b
q=t.b
if(w){p=y.b
p.toString
p=p==null?q==null:p===q
if(!p)q.toString
else p=!0
p=!p}else p=!1
if(p){H.b(r,"$isa9")
y=y.b
u=r.a
t=r.b
y.toString
P.bY(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.je(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jd(x,b,r).$0()}else if((y&2)!==0)new P.jc(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.N(y).$isaj){if(y.a>=4){n=H.b(t.c,"$isaN")
t.c=null
b=t.aA(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bV(y,t)
return}}m=b.b
n=H.b(m.c,"$isaN")
m.c=null
b=m.aA(n)
y=x.a
u=x.b
if(!y){H.H(u,H.x(m,0))
m.a=4
m.c=u}else{H.b(u,"$isa9")
m.a=8
m.c=u}z.a=m
y=m}}}},
j4:{"^":"d:2;a,b",
$0:function(){P.aX(this.a,this.b)}},
jb:{"^":"d:2;a,b",
$0:function(){P.aX(this.b,this.a.a)}},
j7:{"^":"d:14;a",
$1:function(a){var z=this.a
z.a=0
z.aP(a)}},
j8:{"^":"d:33;a",
$2:function(a,b){this.a.a9(a,H.b(b,"$isad"))},
$1:function(a){return this.$2(a,null)}},
j9:{"^":"d:2;a,b,c",
$0:function(){this.a.a9(this.b,this.c)}},
j6:{"^":"d:2;a,b",
$0:function(){var z,y,x
z=this.a
y=H.H(this.b,H.x(z,0))
x=z.az()
z.a=4
z.c=y
P.aX(z,x)}},
ja:{"^":"d:2;a,b",
$0:function(){P.bV(this.b,this.a)}},
j5:{"^":"d:2;a,b,c",
$0:function(){this.a.a9(this.b,this.c)}},
je:{"^":"d:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bF(H.m(w.d,{func:1}),null)}catch(v){y=H.a6(v)
x=H.bn(v)
if(this.d){w=H.b(this.a.a.c,"$isa9").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.b(this.a.a.c,"$isa9")
else u.b=new P.a9(y,x)
u.a=!0
return}if(!!J.N(z).$isaj){if(z instanceof P.a0&&z.gbo()>=4){if(z.gbo()===8){w=this.b
w.b=H.b(z.gcH(),"$isa9")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.I(new P.jf(t),null)
w.a=!1}}},
jf:{"^":"d:31;a",
$1:function(a){return this.a}},
jd:{"^":"d:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.H(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.b_(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a6(t)
y=H.bn(t)
x=this.a
x.b=new P.a9(z,y)
x.a=!0}}},
jc:{"^":"d:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.b(this.a.a.c,"$isa9")
w=this.c
if(w.dg(z)&&w.e!=null){v=this.b
v.b=w.dc(z)
v.a=!1}}catch(u){y=H.a6(u)
x=H.bn(u)
w=H.b(this.a.a.c,"$isa9")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a9(y,x)
s.a=!0}}},
dJ:{"^":"h;a,0b"},
cs:{"^":"h;$ti",
gj:function(a){var z,y
z={}
y=new P.a0(0,$.J,[P.S])
z.a=0
this.df(new P.ix(z,this),!0,new P.iy(z,y),y.gcp())
return y}},
ix:{"^":"d;a,b",
$1:function(a){H.H(a,H.bl(this.b,"cs",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.bl(this.b,"cs",0)]}}},
iy:{"^":"d:2;a,b",
$0:function(){this.b.aP(this.a.a)}},
iv:{"^":"h;$ti"},
iw:{"^":"h;"},
a9:{"^":"h;a,b",
l:function(a){return H.n(this.a)},
$isV:1},
k6:{"^":"h;",$ism0:1},
km:{"^":"d:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.co()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.k(z)
x=H.k(z)
x.stack=y.l(0)
throw x}},
jD:{"^":"k6;",
dq:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.d===$.J){a.$0()
return}P.e4(null,null,this,a,-1)}catch(x){z=H.a6(x)
y=H.bn(x)
P.bY(null,null,this,z,H.b(y,"$isad"))}},
dr:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.d===$.J){a.$1(b)
return}P.e5(null,null,this,a,b,-1,c)}catch(x){z=H.a6(x)
y=H.bn(x)
P.bY(null,null,this,z,H.b(y,"$isad"))}},
cV:function(a,b){return new P.jF(this,H.m(a,{func:1,ret:b}),b)},
bu:function(a){return new P.jE(this,H.m(a,{func:1,ret:-1}))},
cW:function(a,b){return new P.jG(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
bF:function(a,b){H.m(a,{func:1,ret:b})
if($.J===C.d)return a.$0()
return P.e4(null,null,this,a,b)},
b_:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.J===C.d)return a.$1(b)
return P.e5(null,null,this,a,b,c,d)},
dn:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.J===C.d)return a.$2(b,c)
return P.kn(null,null,this,a,b,c,d,e,f)},
dj:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}},
jF:{"^":"d;a,b,c",
$0:function(){return this.a.bF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jE:{"^":"d:1;a,b",
$0:function(){return this.a.dq(this.b)}},
jG:{"^":"d;a,b,c",
$1:function(a){var z=this.c
return this.a.dr(this.b,H.H(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hV:function(a,b,c){H.bo(a)
return H.Y(H.ky(a,new H.bu(0,0,[b,c])),"$isdc",[b,c],"$asdc")},
de:function(a,b){return new H.bu(0,0,[a,b])},
hW:function(){return new H.bu(0,0,[null,null])},
bv:function(a,b,c,d){return new P.jn(0,0,[d])},
fe:function(a,b,c){var z,y
if(P.cB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bf()
C.c.m(y,a)
try{P.kj(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.ds(b,H.kO(z,"$isq"),", ")+c
return y.charCodeAt(0)==0?y:y},
cg:function(a,b,c){var z,y,x
if(P.cB(a))return b+"..."+c
z=new P.ct(b)
y=$.$get$bf()
C.c.m(y,a)
try{x=z
x.a=P.ds(x.gal(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gal()+c
y=z.gal()
return y.charCodeAt(0)==0?y:y},
cB:function(a){var z,y
for(z=0;y=$.$get$bf(),z<y.length;++z)if(a===y[z])return!0
return!1},
kj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gR(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.n(z.gF(z))
C.c.m(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gF(z);++x
if(!z.C()){if(x<=4){C.c.m(b,H.n(t))
return}v=H.n(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gF(z);++x
for(;z.C();t=s,s=r){r=z.gF(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.c.m(b,"...")
return}}u=H.n(t)
v=H.n(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.c.m(b,q)
C.c.m(b,u)
C.c.m(b,v)},
df:function(a,b){var z,y,x
z=P.bv(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.aR)(a),++x)z.m(0,H.H(a[x],b))
return z},
dh:function(a){var z,y,x
z={}
if(P.cB(a))return"{...}"
y=new P.ct("")
try{C.c.m($.$get$bf(),a)
x=y
x.a=x.gal()+"{"
z.a=!0
J.cO(a,new P.hZ(z,y))
z=y
z.a=z.gal()+"}"}finally{z=$.$get$bf()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gal()
return z.charCodeAt(0)==0?z:z},
jn:{"^":"jg;a,0b,0c,0d,0e,0f,r,$ti",
gR:function(a){var z=new P.dR(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
B:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.b(z[b],"$isbC")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.b(y[b],"$isbC")!=null}else return this.cq(b)},
cq:function(a){var z=this.d
if(z==null)return!1
return this.aS(this.bi(z,a),a)>=0},
m:function(a,b){var z,y
H.H(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cy()
this.b=z}return this.bd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cy()
this.c=y}return this.bd(y,b)}else return this.cj(0,b)},
cj:function(a,b){var z,y,x
H.H(b,H.x(this,0))
z=this.d
if(z==null){z=P.cy()
this.d=z}y=this.bg(b)
x=z[y]
if(x==null)z[y]=[this.aO(b)]
else{if(this.aS(x,b)>=0)return!1
x.push(this.aO(b))}return!0},
dl:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bn(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bn(this.c,b)
else return this.cD(0,b)},
cD:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bi(z,b)
x=this.aS(y,b)
if(x<0)return!1
this.bp(y.splice(x,1)[0])
return!0},
bd:function(a,b){H.H(b,H.x(this,0))
if(H.b(a[b],"$isbC")!=null)return!1
a[b]=this.aO(b)
return!0},
bn:function(a,b){var z
if(a==null)return!1
z=H.b(a[b],"$isbC")
if(z==null)return!1
this.bp(z)
delete a[b]
return!0},
bf:function(){this.r=this.r+1&67108863},
aO:function(a){var z,y
z=new P.bC(H.H(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bf()
return z},
bp:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bf()},
bg:function(a){return J.bK(a)&0x3ffffff},
bi:function(a,b){return a[this.bg(b)]},
aS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.c5(a[y].a,b))return y
return-1},
n:{
cy:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bC:{"^":"h;a,0b,0c"},
dR:{"^":"h;a,b,0c,0d,$ti",
sbe:function(a){this.d=H.H(a,H.x(this,0))},
gF:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.ax(z))
else{z=this.c
if(z==null){this.sbe(null)
return!1}else{this.sbe(H.H(z.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
$isaB:1,
n:{
jo:function(a,b,c){var z=new P.dR(a,b,[c])
z.c=a.e
return z}}},
jg:{"^":"ip;$ti"},
hX:{"^":"jp;",$ist:1,$isq:1,$iso:1},
u:{"^":"h;$ti",
gR:function(a){return new H.dg(a,this.gj(a),0,[H.bm(this,a,"u",0)])},
u:function(a,b){return this.h(a,b)},
aC:function(a,b){return new H.cc(a,[H.bm(this,a,"u",0),b])},
l:function(a){return P.cg(a,"[","]")}},
cm:{"^":"a_;"},
hZ:{"^":"d:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.n(a)
z.a=y+": "
z.a+=H.n(b)}},
a_:{"^":"h;$ti",
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bm(this,a,"a_",0),H.bm(this,a,"a_",1)]})
for(z=J.b2(this.gZ(a));z.C();){y=z.gF(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.av(this.gZ(a))},
l:function(a){return P.dh(a)},
$isO:1},
iq:{"^":"h;$ti",
a_:function(a,b){var z
for(z=J.b2(H.Y(b,"$isq",this.$ti,"$asq"));z.C();)this.m(0,z.gF(z))},
l:function(a){return P.cg(this,"{","}")},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.cQ("index"))
if(b<0)H.au(P.bb(b,0,null,"index",null))
for(z=P.jo(this,this.r,H.x(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.k(P.L(b,this,"index",null,y))},
$ist:1,
$isq:1,
$islI:1},
ip:{"^":"iq;"},
jp:{"^":"h+u;"}}],["","",,P,{"^":"",
kl:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.k(H.bg(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.a6(x)
w=P.cf(String(y),null,null)
throw H.k(w)}w=P.bX(z)
return w},
bX:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jj(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.bX(a[z])
return a},
jj:{"^":"cm;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.cC(b):y}},
gj:function(a){return this.b==null?this.c.a:this.ax().length},
gZ:function(a){var z
if(this.b==null){z=this.c
return new H.dd(z,[H.x(z,0)])}return new P.jk(this)},
Y:function(a,b){var z,y,x,w
H.m(b,{func:1,ret:-1,args:[P.e,,]})
if(this.b==null)return this.c.Y(0,b)
z=this.ax()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.bX(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.k(P.ax(this))}},
ax:function(){var z=H.bo(this.c)
if(z==null){z=H.c(Object.keys(this.a),[P.e])
this.c=z}return z},
cC:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.bX(this.a[a])
return this.b[a]=z},
$asa_:function(){return[P.e,null]},
$asO:function(){return[P.e,null]}},
jk:{"^":"b7;a",
gj:function(a){var z=this.a
return z.gj(z)},
u:function(a,b){var z=this.a
return z.b==null?z.gZ(z).u(0,b):C.c.h(z.ax(),b)},
gR:function(a){var z=this.a
if(z.b==null){z=z.gZ(z)
z=z.gR(z)}else{z=z.ax()
z=new J.cS(z,z.length,0,[H.x(z,0)])}return z},
$ast:function(){return[P.e]},
$asb7:function(){return[P.e]},
$asq:function(){return[P.e]}},
cY:{"^":"h;$ti"},
cZ:{"^":"iw;$ti"},
fo:{"^":"cY;a,b",
d4:function(a,b,c){var z=P.kl(b,this.gd5().a)
return z},
d3:function(a,b){return this.d4(a,b,null)},
gd5:function(){return C.I},
$ascY:function(){return[P.h,P.e]}},
fp:{"^":"cZ;a",
$ascZ:function(){return[P.e,P.h]}}}],["","",,P,{"^":"",
kK:function(a,b,c){var z=H.cp(a,c)
if(z!=null)return z
throw H.k(P.cf(a,null,null))},
r:function(a,b){var z=H.dl(a)
if(z!=null)return z
throw H.k(P.cf("Invalid double",a,null))},
f2:function(a){if(a instanceof H.d)return a.l(0)
return"Instance of '"+H.ba(a)+"'"},
bO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.f2(a)},
a5:function(a){H.kX(H.n(a))},
Q:{"^":"h;"},
"+bool":0,
E:{"^":"M;"},
"+double":0,
V:{"^":"h;"},
co:{"^":"V;",
l:function(a){return"Throw of null."}},
ap:{"^":"V;a,b,c,d",
gaR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaQ:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.n(z)
w=this.gaR()+y+x
if(!this.a)return w
v=this.gaQ()
u=P.bO(this.b)
return w+v+": "+H.n(u)},
n:{
eC:function(a){return new P.ap(!1,null,null,a)},
cR:function(a,b,c){return new P.ap(!0,a,b,c)},
cQ:function(a){return new P.ap(!1,null,a,"Must not be null")}}},
dm:{"^":"ap;e,f,a,b,c,d",
gaR:function(){return"RangeError"},
gaQ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.n(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.n(z)
else if(x>z)y=": Not in range "+H.n(z)+".."+H.n(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.n(z)}return y},
n:{
bR:function(a,b,c){return new P.dm(null,null,!0,a,b,"Value not in range")},
bb:function(a,b,c,d,e){return new P.dm(b,c,!0,a,d,"Invalid value")}}},
fd:{"^":"ap;e,j:f>,a,b,c,d",
gaR:function(){return"RangeError"},
gaQ:function(){if(J.es(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.n(z)},
n:{
L:function(a,b,c,d,e){var z=H.v(e!=null?e:J.av(b))
return new P.fd(b,z,!0,a,c,"Index out of range")}}},
iE:{"^":"V;a",
l:function(a){return"Unsupported operation: "+this.a},
n:{
bA:function(a){return new P.iE(a)}}},
iC:{"^":"V;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
dH:function(a){return new P.iC(a)}}},
cr:{"^":"V;a",
l:function(a){return"Bad state: "+this.a},
n:{
by:function(a){return new P.cr(a)}}},
eP:{"^":"V;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.n(P.bO(z))+"."},
n:{
ax:function(a){return new P.eP(a)}}},
dp:{"^":"h;",
l:function(a){return"Stack Overflow"},
$isV:1},
eW:{"^":"V;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
j1:{"^":"h;a",
l:function(a){return"Exception: "+this.a}},
f3:{"^":"h;a,b,c",
l:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.n(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.h.b9(x,0,75)+"..."
return y+"\n"+x},
n:{
cf:function(a,b,c){return new P.f3(a,b,c)}}},
bp:{"^":"h;"},
S:{"^":"M;"},
"+int":0,
q:{"^":"h;$ti",
aC:function(a,b){return H.eJ(this,H.bl(this,"q",0),b)},
b2:["bX",function(a,b){var z=H.bl(this,"q",0)
return new H.dI(this,H.m(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gR(this)
for(y=0;z.C();)++y
return y},
gak:function(a){var z,y
z=this.gR(this)
if(!z.C())throw H.k(H.ff())
y=z.gF(z)
if(z.C())throw H.k(H.fg())
return y},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.cQ("index"))
if(b<0)H.au(P.bb(b,0,null,"index",null))
for(z=this.gR(this),y=0;z.C();){x=z.gF(z)
if(b===y)return x;++y}throw H.k(P.L(b,this,"index",null,y))},
l:function(a){return P.fe(this,"(",")")}},
aB:{"^":"h;$ti"},
o:{"^":"h;$ti",$ist:1,$isq:1},
"+List":0,
O:{"^":"h;$ti"},
F:{"^":"h;",
ga0:function(a){return P.h.prototype.ga0.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
M:{"^":"h;"},
"+num":0,
h:{"^":";",
aj:function(a,b){return this===b},
ga0:function(a){return H.b9(this)},
l:function(a){return"Instance of '"+H.ba(this)+"'"},
toString:function(){return this.l(this)}},
ad:{"^":"h;"},
e:{"^":"h;",$isib:1},
"+String":0,
ct:{"^":"h;al:a<",
gj:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
ds:function(a,b,c){var z=J.b2(b)
if(!z.C())return a
if(c.length===0){do a+=H.n(z.gF(z))
while(z.C())}else{a+=H.n(z.gF(z))
for(;z.C();)a=a+c+H.n(z.gF(z))}return a}}}}],["","",,W,{"^":"",
f0:function(a,b,c){var z,y
z=document.body
y=(z&&C.i).a7(z,a,b,c)
y.toString
z=W.z
z=new H.dI(new W.ab(y),H.m(new W.f1(),{func:1,ret:P.Q,args:[z]}),[z])
return H.b(z.gak(z),"$isai")},
b4:function(a){var z,y,x
z="element tag unavailable"
try{y=J.ew(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a6(x)}return z},
f9:function(a,b,c){return W.fb(a,null,null,b,null,null,null,c).I(new W.fa(),P.e)},
fb:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=W.b5
y=new P.a0(0,$.J,[z])
x=new P.cv(y,[z])
w=new XMLHttpRequest()
C.x.dh(w,"GET",a,!0)
z=W.bw
v={func:1,ret:-1,args:[z]}
W.af(w,"load",H.m(new W.fc(w,x),v),!1,z)
W.af(w,"error",H.m(x.gcX(),v),!1,z)
w.send()
return y},
aa:function(a){var z,y
y=document.createElement("input")
z=H.b(y,"$isl")
return z},
ia:function(a,b,c,d){var z=new Option(a,b,c,d)
return z},
bW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dQ:function(a,b,c,d){var z,y
z=W.bW(W.bW(W.bW(W.bW(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e8:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.d)return a
return z.cW(a,b)},
cJ:function(a){return C.b.i(document,a)},
Z:{"^":"ai;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l2:{"^":"p;0j:length=","%":"AccessibleNodeList"},
eB:{"^":"Z;",
l:function(a){return String(a)},
$iseB:1,
"%":"HTMLAnchorElement"},
l3:{"^":"Z;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
cT:{"^":"Z;",$iscT:1,"%":"HTMLBaseElement"},
eF:{"^":"p;","%":";Blob"},
bL:{"^":"Z;",$isbL:1,"%":"HTMLBodyElement"},
cb:{"^":"Z;",
b3:function(a,b,c){var z=this.cv(a,b,P.ku(c,null))
return z},
cv:function(a,b,c){return a.getContext(b,c)},
$iscb:1,
"%":"HTMLCanvasElement"},
l7:{"^":"z;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
eQ:{"^":"cd;",$iseQ:1,"%":"CSSNumericValue|CSSUnitValue"},
l8:{"^":"eS;0j:length=","%":"CSSPerspective"},
ay:{"^":"p;",$isay:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l9:{"^":"iS;0j:length=",
bO:function(a,b){var z=this.cw(a,this.cn(a,b))
return z==null?"":z},
cn:function(a,b){var z,y
z=$.$get$d_()
y=z[b]
if(typeof y==="string")return y
y=this.cM(a,b)
z[b]=y
return y},
cM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eX()+b
if(z in a)return z
return b},
cw:function(a,b){return a.getPropertyValue(b)},
gag:function(a){return a.height},
gaG:function(a){return a.left},
gb0:function(a){return a.top},
gai:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eR:{"^":"h;",
gaG:function(a){return this.bO(a,"left")}},
cd:{"^":"p;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
eS:{"^":"p;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
la:{"^":"cd;0j:length=","%":"CSSTransformValue"},
lb:{"^":"cd;0j:length=","%":"CSSUnparsedValue"},
lc:{"^":"p;0j:length=","%":"DataTransferItemList"},
bN:{"^":"Z;",$isbN:1,"%":"HTMLDivElement"},
eY:{"^":"z;",
cR:function(a,b){return a.adoptNode(b)},
i:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
ld:{"^":"p;",
l:function(a){return String(a)},
"%":"DOMException"},
eZ:{"^":"p;",
d2:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
le:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[[P.a7,P.M]]},
$ist:1,
$ast:function(){return[[P.a7,P.M]]},
$isD:1,
$asD:function(){return[[P.a7,P.M]]},
$asu:function(){return[[P.a7,P.M]]},
$isq:1,
$asq:function(){return[[P.a7,P.M]]},
$iso:1,
$aso:function(){return[[P.a7,P.M]]},
$asy:function(){return[[P.a7,P.M]]},
"%":"ClientRectList|DOMRectList"},
f_:{"^":"p;",
l:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gai(a))+" x "+H.n(this.gag(a))},
aj:function(a,b){var z
if(b==null)return!1
if(!H.aP(b,"$isa7",[P.M],"$asa7"))return!1
z=J.a4(b)
return a.left===z.gaG(b)&&a.top===z.gb0(b)&&this.gai(a)===z.gai(b)&&this.gag(a)===z.gag(b)},
ga0:function(a){return W.dQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF,this.gag(a)&0x1FFFFFFF)},
gag:function(a){return a.height},
gaG:function(a){return a.left},
gb0:function(a){return a.top},
gai:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.M]},
"%":";DOMRectReadOnly"},
lf:{"^":"iW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[P.e]},
$ist:1,
$ast:function(){return[P.e]},
$isD:1,
$asD:function(){return[P.e]},
$asu:function(){return[P.e]},
$isq:1,
$asq:function(){return[P.e]},
$iso:1,
$aso:function(){return[P.e]},
$asy:function(){return[P.e]},
"%":"DOMStringList"},
lg:{"^":"p;0j:length=","%":"DOMTokenList"},
ai:{"^":"z;0ds:tagName=",
gcU:function(a){return new W.iY(a)},
l:function(a){return a.localName},
a7:["aL",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d7
if(z==null){z=H.c([],[W.ak])
y=new W.dj(z)
C.c.m(z,W.dO(null))
C.c.m(z,W.dZ())
$.d7=y
d=y}else d=z
z=$.d6
if(z==null){z=new W.e1(d)
$.d6=z
c=z}else{z.a=d
c=z}}if($.aq==null){z=document
y=z.implementation
y=(y&&C.v).d2(y,"")
$.aq=y
$.ce=y.createRange()
y=$.aq
y.toString
y=y.createElement("base")
H.b(y,"$iscT")
y.href=z.baseURI
z=$.aq.head;(z&&C.w).aa(z,y)}z=$.aq
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.b(y,"$isbL")}z=$.aq
if(!!this.$isbL)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aq.body;(z&&C.i).aa(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.c.B(C.K,a.tagName)){z=$.ce;(z&&C.t).bR(z,x)
z=$.ce
w=(z&&C.t).d0(z,b)}else{x.innerHTML=b
w=$.aq.createDocumentFragment()
for(z=J.a4(w);y=x.firstChild,y!=null;)z.aa(w,y)}z=$.aq.body
if(x==null?z!=null:x!==z)J.c8(x)
c.aJ(w)
C.b.cR(document,w)
return w},function(a,b,c){return this.a7(a,b,c,null)},"d1",null,null,"gdD",5,5,null],
b5:function(a,b,c,d){a.textContent=null
this.aa(a,this.a7(a,b,c,d))},
a3:function(a,b,c){return this.b5(a,b,c,null)},
bS:function(a,b){return this.b5(a,b,null,null)},
ap:function(a,b){return a.getAttribute(b)},
cE:function(a,b){return a.removeAttribute(b)},
$isai:1,
"%":";Element"},
f1:{"^":"d:30;",
$1:function(a){return!!J.N(H.b(a,"$isz")).$isai}},
a1:{"^":"p;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"p;",
br:["bV",function(a,b,c,d){H.m(c,{func:1,args:[W.a1]})
if(c!=null)this.ck(a,b,c,!1)}],
ck:function(a,b,c,d){return a.addEventListener(b,H.bi(H.m(c,{func:1,args:[W.a1]}),1),!1)},
$isa2:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dW|dX|e_|e0"},
az:{"^":"eF;",$isaz:1,"%":"File"},
lh:{"^":"j3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.az]},
$ist:1,
$ast:function(){return[W.az]},
$isD:1,
$asD:function(){return[W.az]},
$asu:function(){return[W.az]},
$isq:1,
$asq:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
$asy:function(){return[W.az]},
"%":"FileList"},
li:{"^":"a2;0j:length=","%":"FileWriter"},
lk:{"^":"Z;0j:length=","%":"HTMLFormElement"},
aA:{"^":"p;",$isaA:1,"%":"Gamepad"},
f6:{"^":"Z;","%":"HTMLHeadElement"},
ll:{"^":"p;0j:length=","%":"History"},
lm:{"^":"ji;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.z]},
$ist:1,
$ast:function(){return[W.z]},
$isD:1,
$asD:function(){return[W.z]},
$asu:function(){return[W.z]},
$isq:1,
$asq:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asy:function(){return[W.z]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
f7:{"^":"eY;","%":"HTMLDocument"},
b5:{"^":"f8;",
dE:function(a,b,c,d,e,f){return a.open(b,c)},
dh:function(a,b,c,d){return a.open(b,c,d)},
$isb5:1,
"%":"XMLHttpRequest"},
fa:{"^":"d:29;",
$1:function(a){return H.b(a,"$isb5").responseText}},
fc:{"^":"d:32;a,b",
$1:function(a){var z,y,x,w,v
H.b(a,"$isbw")
z=this.a
y=z.status
if(typeof y!=="number")return y.dA()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.b
if(y)v.at(0,z)
else v.cY(a)}},
f8:{"^":"a2;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
aT:{"^":"Z;",$isaT:1,"%":"HTMLImageElement"},
l:{"^":"Z;",$isl:1,"%":"HTMLInputElement"},
aC:{"^":"dG;",$isaC:1,"%":"KeyboardEvent"},
hY:{"^":"p;",
l:function(a){return String(a)},
$ishY:1,
"%":"Location"},
lq:{"^":"p;0j:length=","%":"MediaList"},
lr:{"^":"a2;",
br:function(a,b,c,d){H.m(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.bV(a,b,c,!1)},
"%":"MessagePort"},
ls:{"^":"jq;",
h:function(a,b){return P.as(a.get(H.C(b)))},
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.as(y.value[1]))}},
gZ:function(a){var z=H.c([],[P.e])
this.Y(a,new W.i1(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.e,null]},
$isO:1,
$asO:function(){return[P.e,null]},
"%":"MIDIInputMap"},
i1:{"^":"d:7;a",
$2:function(a,b){return C.c.m(this.a,a)}},
lt:{"^":"jr;",
h:function(a,b){return P.as(a.get(H.C(b)))},
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.as(y.value[1]))}},
gZ:function(a){var z=H.c([],[P.e])
this.Y(a,new W.i2(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.e,null]},
$isO:1,
$asO:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
i2:{"^":"d:7;a",
$2:function(a,b){return C.c.m(this.a,a)}},
aD:{"^":"p;",$isaD:1,"%":"MimeType"},
lu:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aD]},
$ist:1,
$ast:function(){return[W.aD]},
$isD:1,
$asD:function(){return[W.aD]},
$asu:function(){return[W.aD]},
$isq:1,
$asq:function(){return[W.aD]},
$iso:1,
$aso:function(){return[W.aD]},
$asy:function(){return[W.aD]},
"%":"MimeTypeArray"},
aV:{"^":"dG;",$isaV:1,"%":"DragEvent|MouseEvent|PointerEvent|WheelEvent"},
ab:{"^":"hX;a",
gak:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.k(P.by("No elements"))
if(y>1)throw H.k(P.by("More than one element"))
return z.firstChild},
a_:function(a,b){var z,y,x,w,v
H.Y(b,"$isq",[W.z],"$asq")
if(!!b.$isab){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a4(y),v=0;v<x;++v)w.aa(y,z.firstChild)
return}for(z=b.gR(b),y=this.a,w=J.a4(y);z.C();)w.aa(y,z.gF(z))},
gR:function(a){var z=this.a.childNodes
return new W.d8(z,z.length,-1,[H.bm(C.q,z,"y",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.q.h(this.a.childNodes,b)},
$ast:function(){return[W.z]},
$asu:function(){return[W.z]},
$asq:function(){return[W.z]},
$aso:function(){return[W.z]}},
z:{"^":"a2;0aZ:previousSibling=",
dk:function(a){var z=a.parentNode
if(z!=null)J.bI(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.bW(a):z},
aa:function(a,b){return a.appendChild(b)},
cF:function(a,b){return a.removeChild(b)},
$isz:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
lC:{"^":"p;",
di:[function(a){return a.previousNode()},"$0","gaZ",1,0,17],
"%":"NodeIterator"},
i5:{"^":"jv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.z]},
$ist:1,
$ast:function(){return[W.z]},
$isD:1,
$asD:function(){return[W.z]},
$asu:function(){return[W.z]},
$isq:1,
$asq:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asy:function(){return[W.z]},
"%":"NodeList|RadioNodeList"},
aF:{"^":"p;0j:length=",$isaF:1,"%":"Plugin"},
lF:{"^":"jz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aF]},
$ist:1,
$ast:function(){return[W.aF]},
$isD:1,
$asD:function(){return[W.aF]},
$asu:function(){return[W.aF]},
$isq:1,
$asq:function(){return[W.aF]},
$iso:1,
$aso:function(){return[W.aF]},
$asy:function(){return[W.aF]},
"%":"PluginArray"},
bw:{"^":"a1;",$isbw:1,"%":"ProgressEvent|ResourceProgressEvent"},
ih:{"^":"p;",
d0:function(a,b){return a.createContextualFragment(b)},
bR:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lH:{"^":"jH;",
h:function(a,b){return P.as(a.get(H.C(b)))},
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.as(y.value[1]))}},
gZ:function(a){var z=H.c([],[P.e])
this.Y(a,new W.il(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.e,null]},
$isO:1,
$asO:function(){return[P.e,null]},
"%":"RTCStatsReport"},
il:{"^":"d:7;a",
$2:function(a,b){return C.c.m(this.a,a)}},
bx:{"^":"Z;0j:length=",$isbx:1,"%":"HTMLSelectElement"},
aG:{"^":"a2;",$isaG:1,"%":"SourceBuffer"},
lJ:{"^":"dX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aG]},
$ist:1,
$ast:function(){return[W.aG]},
$isD:1,
$asD:function(){return[W.aG]},
$asu:function(){return[W.aG]},
$isq:1,
$asq:function(){return[W.aG]},
$iso:1,
$aso:function(){return[W.aG]},
$asy:function(){return[W.aG]},
"%":"SourceBufferList"},
aH:{"^":"p;",$isaH:1,"%":"SpeechGrammar"},
lK:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aH]},
$ist:1,
$ast:function(){return[W.aH]},
$isD:1,
$asD:function(){return[W.aH]},
$asu:function(){return[W.aH]},
$isq:1,
$asq:function(){return[W.aH]},
$iso:1,
$aso:function(){return[W.aH]},
$asy:function(){return[W.aH]},
"%":"SpeechGrammarList"},
aI:{"^":"p;0j:length=",$isaI:1,"%":"SpeechRecognitionResult"},
lM:{"^":"jQ;",
h:function(a,b){return this.bj(a,H.C(b))},
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.cA(a,z)
if(y==null)return
b.$2(y,this.bj(a,y))}},
gZ:function(a){var z=H.c([],[P.e])
this.Y(a,new W.iu(z))
return z},
gj:function(a){return a.length},
bj:function(a,b){return a.getItem(b)},
cA:function(a,b){return a.key(b)},
$asa_:function(){return[P.e,P.e]},
$isO:1,
$asO:function(){return[P.e,P.e]},
"%":"Storage"},
iu:{"^":"d:28;a",
$2:function(a,b){return C.c.m(this.a,a)}},
aJ:{"^":"p;",$isaJ:1,"%":"CSSStyleSheet|StyleSheet"},
iz:{"^":"Z;",
a7:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
z=W.f0("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).a_(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
lO:{"^":"Z;",
a7:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.u.a7(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.gak(z)
x.toString
z=new W.ab(x)
w=z.gak(z)
y.toString
w.toString
new W.ab(y).a_(0,new W.ab(w))
return y},
"%":"HTMLTableRowElement"},
lP:{"^":"Z;",
a7:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.u.a7(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.gak(z)
y.toString
x.toString
new W.ab(y).a_(0,new W.ab(x))
return y},
"%":"HTMLTableSectionElement"},
du:{"^":"Z;",$isdu:1,"%":"HTMLTemplateElement"},
aK:{"^":"a2;",$isaK:1,"%":"TextTrack"},
aL:{"^":"a2;",$isaL:1,"%":"TextTrackCue|VTTCue"},
lQ:{"^":"jY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aL]},
$ist:1,
$ast:function(){return[W.aL]},
$isD:1,
$asD:function(){return[W.aL]},
$asu:function(){return[W.aL]},
$isq:1,
$asq:function(){return[W.aL]},
$iso:1,
$aso:function(){return[W.aL]},
$asy:function(){return[W.aL]},
"%":"TextTrackCueList"},
lR:{"^":"e0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aK]},
$ist:1,
$ast:function(){return[W.aK]},
$isD:1,
$asD:function(){return[W.aK]},
$asu:function(){return[W.aK]},
$isq:1,
$asq:function(){return[W.aK]},
$iso:1,
$aso:function(){return[W.aK]},
$asy:function(){return[W.aK]},
"%":"TextTrackList"},
lS:{"^":"p;0j:length=","%":"TimeRanges"},
aM:{"^":"p;",$isaM:1,"%":"Touch"},
lT:{"^":"k2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aM]},
$ist:1,
$ast:function(){return[W.aM]},
$isD:1,
$asD:function(){return[W.aM]},
$asu:function(){return[W.aM]},
$isq:1,
$asq:function(){return[W.aM]},
$iso:1,
$aso:function(){return[W.aM]},
$asy:function(){return[W.aM]},
"%":"TouchList"},
lU:{"^":"p;0j:length=","%":"TrackDefaultList"},
lW:{"^":"p;",
di:[function(a){return a.previousNode()},"$0","gaZ",1,0,17],
"%":"TreeWalker"},
dG:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lZ:{"^":"p;",
l:function(a){return String(a)},
"%":"URL"},
m_:{"^":"a2;0j:length=","%":"VideoTrackList"},
iH:{"^":"a2;",
gcT:function(a){var z,y,x
z=P.M
y=new P.a0(0,$.J,[z])
x=H.m(new W.iI(new P.jU(y,[z])),{func:1,ret:-1,args:[P.M]})
this.cu(a)
this.cG(a,W.e8(x,z))
return y},
cG:function(a,b){return a.requestAnimationFrame(H.bi(H.m(b,{func:1,ret:-1,args:[P.M]}),1))},
cu:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
iI:{"^":"d:26;a",
$1:function(a){this.a.at(0,H.cI(a))}},
dK:{"^":"z;",$isdK:1,"%":"Attr"},
m4:{"^":"k9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.ay]},
$ist:1,
$ast:function(){return[W.ay]},
$isD:1,
$asD:function(){return[W.ay]},
$asu:function(){return[W.ay]},
$isq:1,
$asq:function(){return[W.ay]},
$iso:1,
$aso:function(){return[W.ay]},
$asy:function(){return[W.ay]},
"%":"CSSRuleList"},
m5:{"^":"f_;",
l:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
aj:function(a,b){var z
if(b==null)return!1
if(!H.aP(b,"$isa7",[P.M],"$asa7"))return!1
z=J.a4(b)
return a.left===z.gaG(b)&&a.top===z.gb0(b)&&a.width===z.gai(b)&&a.height===z.gag(b)},
ga0:function(a){return W.dQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gag:function(a){return a.height},
gai:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m7:{"^":"kb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aA]},
$ist:1,
$ast:function(){return[W.aA]},
$isD:1,
$asD:function(){return[W.aA]},
$asu:function(){return[W.aA]},
$isq:1,
$asq:function(){return[W.aA]},
$iso:1,
$aso:function(){return[W.aA]},
$asy:function(){return[W.aA]},
"%":"GamepadList"},
ma:{"^":"kd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.z]},
$ist:1,
$ast:function(){return[W.z]},
$isD:1,
$asD:function(){return[W.z]},
$asu:function(){return[W.z]},
$isq:1,
$asq:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asy:function(){return[W.z]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mb:{"^":"kf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aI]},
$ist:1,
$ast:function(){return[W.aI]},
$isD:1,
$asD:function(){return[W.aI]},
$asu:function(){return[W.aI]},
$isq:1,
$asq:function(){return[W.aI]},
$iso:1,
$aso:function(){return[W.aI]},
$asy:function(){return[W.aI]},
"%":"SpeechRecognitionResultList"},
mc:{"^":"kh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
u:function(a,b){return this.h(a,b)},
$isB:1,
$asB:function(){return[W.aJ]},
$ist:1,
$ast:function(){return[W.aJ]},
$isD:1,
$asD:function(){return[W.aJ]},
$asu:function(){return[W.aJ]},
$isq:1,
$asq:function(){return[W.aJ]},
$iso:1,
$aso:function(){return[W.aJ]},
$asy:function(){return[W.aJ]},
"%":"StyleSheetList"},
iP:{"^":"cm;ct:a<",
Y:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gZ(this),y=z.length,x=this.a,w=J.a4(x),v=0;v<z.length;z.length===y||(0,H.aR)(z),++v){u=z[v]
b.$2(u,w.ap(x,u))}},
gZ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.b(z[w],"$isdK")
if(v.namespaceURI==null)C.c.m(y,v.name)}return y},
$asa_:function(){return[P.e,P.e]},
$asO:function(){return[P.e,P.e]}},
iY:{"^":"iP;a",
h:function(a,b){return J.c7(this.a,H.C(b))},
gj:function(a){return this.gZ(this).length}},
iZ:{"^":"cs;a,b,c,$ti",
df:function(a,b,c,d){var z=H.x(this,0)
H.m(a,{func:1,ret:-1,args:[z]})
H.m(c,{func:1,ret:-1})
return W.af(this.a,this.b,a,!1,z)}},
m6:{"^":"iZ;a,b,c,$ti"},
j_:{"^":"iv;a,b,c,d,e,$ti",
cQ:function(){var z=this.d
if(z!=null&&this.a<=0)J.et(this.b,this.c,z,!1)},
n:{
af:function(a,b,c,d,e){var z=c==null?null:W.e8(new W.j0(c),W.a1)
z=new W.j_(0,a,b,z,!1,[e])
z.cQ()
return z}}},
j0:{"^":"d:38;a",
$1:function(a){return this.a.$1(H.b(a,"$isa1"))}},
bB:{"^":"h;a",
ce:function(a){var z,y
z=$.$get$cx()
if(z.a===0){for(y=0;y<262;++y)z.U(0,C.J[y],W.kC())
for(y=0;y<12;++y)z.U(0,C.k[y],W.kD())}},
an:function(a){return $.$get$dP().B(0,W.b4(a))},
af:function(a,b,c){var z,y,x
z=W.b4(a)
y=$.$get$cx()
x=y.h(0,H.n(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.ed(x.$4(a,b,c,this))},
$isak:1,
n:{
dO:function(a){var z,y
z=document.createElement("a")
y=new W.jI(z,window.location)
y=new W.bB(y)
y.ce(a)
return y},
m8:[function(a,b,c,d){H.b(a,"$isai")
H.C(b)
H.C(c)
H.b(d,"$isbB")
return!0},"$4","kC",16,0,13],
m9:[function(a,b,c,d){var z,y,x,w,v
H.b(a,"$isai")
H.C(b)
H.C(c)
z=H.b(d,"$isbB").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kD",16,0,13]}},
y:{"^":"h;$ti",
gR:function(a){return new W.d8(a,this.gj(a),-1,[H.bm(this,a,"y",0)])}},
dj:{"^":"h;a",
an:function(a){return C.c.bs(this.a,new W.i8(a))},
af:function(a,b,c){return C.c.bs(this.a,new W.i7(a,b,c))},
$isak:1},
i8:{"^":"d:19;a",
$1:function(a){return H.b(a,"$isak").an(this.a)}},
i7:{"^":"d:19;a,b,c",
$1:function(a){return H.b(a,"$isak").af(this.a,this.b,this.c)}},
jJ:{"^":"h;",
cg:function(a,b,c,d){var z,y,x
this.a.a_(0,c)
z=b.b2(0,new W.jK())
y=b.b2(0,new W.jL())
this.b.a_(0,z)
x=this.c
x.a_(0,C.L)
x.a_(0,y)},
an:function(a){return this.a.B(0,W.b4(a))},
af:["bZ",function(a,b,c){var z,y
z=W.b4(a)
y=this.c
if(y.B(0,H.n(z)+"::"+b))return this.d.cS(c)
else if(y.B(0,"*::"+b))return this.d.cS(c)
else{y=this.b
if(y.B(0,H.n(z)+"::"+b))return!0
else if(y.B(0,"*::"+b))return!0
else if(y.B(0,H.n(z)+"::*"))return!0
else if(y.B(0,"*::*"))return!0}return!1}],
$isak:1},
jK:{"^":"d:18;",
$1:function(a){return!C.c.B(C.k,H.C(a))}},
jL:{"^":"d:18;",
$1:function(a){return C.c.B(C.k,H.C(a))}},
jV:{"^":"jJ;e,a,b,c,d",
af:function(a,b,c){if(this.bZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c7(a,"template")==="")return this.e.B(0,b)
return!1},
n:{
dZ:function(){var z,y,x,w,v
z=P.e
y=P.df(C.j,z)
x=H.x(C.j,0)
w=H.m(new W.jW(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.jV(y,P.bv(null,null,null,z),P.bv(null,null,null,z),P.bv(null,null,null,z),null)
y.cg(null,new H.i_(C.j,w,[x,z]),v,null)
return y}}},
jW:{"^":"d:21;",
$1:function(a){return"TEMPLATE::"+H.n(H.C(a))}},
jT:{"^":"h;",
an:function(a){var z=J.N(a)
if(!!z.$isdn)return!1
z=!!z.$iscu
if(z&&W.b4(a)==="foreignObject")return!1
if(z)return!0
return!1},
af:function(a,b,c){if(b==="is"||C.h.b7(b,"on"))return!1
return this.an(a)},
$isak:1},
d8:{"^":"h;a,b,c,0d,$ti",
sbl:function(a){this.d=H.H(a,H.x(this,0))},
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbl(J.cL(this.a,z))
this.c=z
return!0}this.sbl(null)
this.c=y
return!1},
gF:function(a){return this.d},
$isaB:1},
ak:{"^":"h;"},
jI:{"^":"h;a,b",$islY:1},
e1:{"^":"h;a",
aJ:function(a){new W.k5(this).$2(a,null)},
aq:function(a,b){if(b==null)J.c8(a)
else J.bI(b,a)},
cJ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eu(a)
x=J.c7(y.gct(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a6(t)}v="element unprintable"
try{v=J.aw(a)}catch(t){H.a6(t)}try{u=W.b4(a)
this.cI(H.b(a,"$isai"),b,z,v,u,H.b(y,"$isO"),H.C(x))}catch(t){if(H.a6(t) instanceof P.ap)throw t
else{this.aq(a,b)
window
s="Removing corrupted element "+H.n(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cI:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.aq(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.an(a)){this.aq(a,b)
window
z="Removing disallowed element <"+H.n(e)+"> from "+H.n(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.af(a,"is",g)){this.aq(a,b)
window
z="Removing disallowed type extension <"+H.n(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gZ(f)
y=H.c(z.slice(0),[H.x(z,0)])
for(x=f.gZ(f).length-1,z=f.a,w=J.a4(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.af(a,J.ez(v),w.ap(z,v))){window
u="Removing disallowed attribute <"+H.n(e)+" "+v+'="'+H.n(w.ap(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.ap(z,v)
w.cE(z,v)}}if(!!J.N(a).$isdu)this.aJ(a.content)},
$isi6:1},
k5:{"^":"d:22;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aq(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ev(z)}catch(w){H.a6(w)
v=H.b(z,"$isz")
if(x){u=v.parentNode
if(u!=null)J.bI(u,v)}else J.bI(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.b(y,"$isz")}}},
iS:{"^":"p+eR;"},
iT:{"^":"p+u;"},
iU:{"^":"iT+y;"},
iV:{"^":"p+u;"},
iW:{"^":"iV+y;"},
j2:{"^":"p+u;"},
j3:{"^":"j2+y;"},
jh:{"^":"p+u;"},
ji:{"^":"jh+y;"},
jq:{"^":"p+a_;"},
jr:{"^":"p+a_;"},
js:{"^":"p+u;"},
jt:{"^":"js+y;"},
ju:{"^":"p+u;"},
jv:{"^":"ju+y;"},
jy:{"^":"p+u;"},
jz:{"^":"jy+y;"},
jH:{"^":"p+a_;"},
dW:{"^":"a2+u;"},
dX:{"^":"dW+y;"},
jM:{"^":"p+u;"},
jN:{"^":"jM+y;"},
jQ:{"^":"p+a_;"},
jX:{"^":"p+u;"},
jY:{"^":"jX+y;"},
e_:{"^":"a2+u;"},
e0:{"^":"e_+y;"},
k1:{"^":"p+u;"},
k2:{"^":"k1+y;"},
k8:{"^":"p+u;"},
k9:{"^":"k8+y;"},
ka:{"^":"p+u;"},
kb:{"^":"ka+y;"},
kc:{"^":"p+u;"},
kd:{"^":"kc+y;"},
ke:{"^":"p+u;"},
kf:{"^":"ke+y;"},
kg:{"^":"p+u;"},
kh:{"^":"kg+y;"}}],["","",,P,{"^":"",
as:function(a){var z,y,x,w,v
if(a==null)return
z=P.de(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.aR)(y),++w){v=H.C(y[w])
z.U(0,v,a[v])}return z},
ku:function(a,b){var z
H.b(a,"$isO")
H.m(b,{func:1,ret:-1,args:[P.h]})
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cO(a,new P.kv(z))
return z},
d5:function(){var z=$.d4
if(z==null){z=J.c6(window.navigator.userAgent,"Opera",0)
$.d4=z}return z},
eX:function(){var z,y
z=$.d1
if(z!=null)return z
y=$.d2
if(y==null){y=J.c6(window.navigator.userAgent,"Firefox",0)
$.d2=y}if(y)z="-moz-"
else{y=$.d3
if(y==null){y=!P.d5()&&J.c6(window.navigator.userAgent,"Trident/",0)
$.d3=y}if(y)z="-ms-"
else z=P.d5()?"-o-":"-webkit-"}$.d1=z
return z},
kv:{"^":"d:16;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",jA:{"^":"h;a,b",
cf:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.f.a6(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.f.a6(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.f.a6(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.f.a6(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.f.a6(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.f.a6(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.f.a6(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.am()
this.am()
this.am()
this.am()},
am:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.f.a6(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
ao:function(){this.am()
var z=this.a
this.am()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
n:{
jB:function(a){var z=new P.jA(0,0)
z.cf(a)
return z}}},jC:{"^":"h;$ti"},a7:{"^":"jC;$ti"}}],["","",,P,{"^":"",b6:{"^":"p;",$isb6:1,"%":"SVGLength"},lp:{"^":"jm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return this.ae(a,b)},
u:function(a,b){return this.h(a,b)},
ae:function(a,b){return a.getItem(b)},
$ist:1,
$ast:function(){return[P.b6]},
$asu:function(){return[P.b6]},
$isq:1,
$asq:function(){return[P.b6]},
$iso:1,
$aso:function(){return[P.b6]},
$asy:function(){return[P.b6]},
"%":"SVGLengthList"},b8:{"^":"p;",$isb8:1,"%":"SVGNumber"},lD:{"^":"jx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return this.ae(a,b)},
u:function(a,b){return this.h(a,b)},
ae:function(a,b){return a.getItem(b)},
$ist:1,
$ast:function(){return[P.b8]},
$asu:function(){return[P.b8]},
$isq:1,
$asq:function(){return[P.b8]},
$iso:1,
$aso:function(){return[P.b8]},
$asy:function(){return[P.b8]},
"%":"SVGNumberList"},lG:{"^":"p;0j:length=","%":"SVGPointList"},dn:{"^":"cu;",$isdn:1,"%":"SVGScriptElement"},lN:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return this.ae(a,b)},
u:function(a,b){return this.h(a,b)},
ae:function(a,b){return a.getItem(b)},
$ist:1,
$ast:function(){return[P.e]},
$asu:function(){return[P.e]},
$isq:1,
$asq:function(){return[P.e]},
$iso:1,
$aso:function(){return[P.e]},
$asy:function(){return[P.e]},
"%":"SVGStringList"},cu:{"^":"ai;",
a7:function(a,b,c,d){var z,y,x,w,v,u
if(c==null){z=H.c([],[W.ak])
C.c.m(z,W.dO(null))
C.c.m(z,W.dZ())
C.c.m(z,new W.jT())
c=new W.e1(new W.dj(z))}y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.i).d1(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.gak(z)
for(z=J.a4(v);x=u.firstChild,x!=null;)z.aa(v,x)
return v},
$iscu:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bc:{"^":"p;",$isbc:1,"%":"SVGTransform"},lV:{"^":"k4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return this.ae(a,b)},
u:function(a,b){return this.h(a,b)},
ae:function(a,b){return a.getItem(b)},
$ist:1,
$ast:function(){return[P.bc]},
$asu:function(){return[P.bc]},
$isq:1,
$asq:function(){return[P.bc]},
$iso:1,
$aso:function(){return[P.bc]},
$asy:function(){return[P.bc]},
"%":"SVGTransformList"},jl:{"^":"p+u;"},jm:{"^":"jl+y;"},jw:{"^":"p+u;"},jx:{"^":"jw+y;"},jR:{"^":"p+u;"},jS:{"^":"jR+y;"},k3:{"^":"p+u;"},k4:{"^":"k3+y;"}}],["","",,P,{"^":"",l4:{"^":"p;0j:length=","%":"AudioBuffer"},l5:{"^":"iQ;",
h:function(a,b){return P.as(a.get(H.C(b)))},
Y:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.as(y.value[1]))}},
gZ:function(a){var z=H.c([],[P.e])
this.Y(a,new P.eD(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.e,null]},
$isO:1,
$asO:function(){return[P.e,null]},
"%":"AudioParamMap"},eD:{"^":"d:7;a",
$2:function(a,b){return C.c.m(this.a,a)}},l6:{"^":"a2;0j:length=","%":"AudioTrackList"},eE:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lE:{"^":"eE;0j:length=","%":"OfflineAudioContext"},iQ:{"^":"p+a_;"}}],["","",,P,{"^":"",eG:{"^":"p;",$iseG:1,"%":"WebGLBuffer"},f4:{"^":"p;",$isf4:1,"%":"WebGLFramebuffer"},ie:{"^":"p;",$isie:1,"%":"WebGLProgram"},ik:{"^":"p;",$isik:1,"%":"WebGLRenderbuffer"},cq:{"^":"p;",
W:function(a,b){return a.activeTexture(b)},
bt:function(a,b,c){return a.attachShader(b,c)},
k:function(a,b,c){return a.bindBuffer(b,c)},
aB:function(a,b,c){return a.bindFramebuffer(b,c)},
bv:function(a,b,c){return a.bindRenderbuffer(b,c)},
q:function(a,b,c){return a.bindTexture(b,c)},
bw:function(a,b,c){return a.blendFunc(b,c)},
w:function(a,b,c,d){return a.bufferData(b,c,d)},
O:function(a,b){return a.clear(b)},
as:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
by:function(a,b){return a.compileShader(b)},
bz:function(a,b){return a.createShader(b)},
P:function(a,b){return a.disable(b)},
a4:function(a,b,c,d){return a.drawArrays(b,c,d)},
aW:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
G:function(a,b){return a.enable(b)},
d7:function(a,b){return a.enableVertexAttribArray(b)},
d9:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
da:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aw:function(a,b){return a.generateMipmap(b)},
bM:function(a,b,c){return a.getAttribLocation(b,c)},
bN:function(a,b,c){return a.getProgramParameter(b,c)},
bP:function(a,b,c){return a.getUniformLocation(b,c)},
de:function(a,b){return a.linkProgram(b)},
av:function(a,b,c){return a.pixelStorei(b,c)},
dm:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
b6:function(a,b,c){return a.shaderSource(b,c)},
bG:function(a,b,c,d,e,f,g,h,i,j){var z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.cO(a,b,c,d,e,f,g,h,i,j)
return}if(!!J.N(g).$isaT&&h==null&&z&&!0){this.cP(a,b,c,d,e,f,g)
return}throw H.k(P.eC("Incorrect number or type of arguments"))},
ah:function(a,b,c,d,e,f,g){return this.bG(a,b,c,d,e,f,g,null,null,null)},
cO:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
S:function(a,b,c,d){return a.texParameteri(b,c,d)},
aI:function(a,b,c){return a.uniform1f(b,c)},
v:function(a,b,c){return a.uniform1i(H.b(b,"$isf"),c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
b1:function(a,b,c){return a.uniform3fv(b,c)},
ad:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
t:function(a,b,c,d){return a.uniformMatrix4fv(H.b(b,"$isf"),!1,d)},
L:function(a,b){return a.useProgram(b)},
D:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(H.v(b),c,d,!1,f,g)},
T:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscq:1,
"%":"WebGLRenderingContext"},ir:{"^":"p;",$isir:1,"%":"WebGLShader"},G:{"^":"p;",$isG:1,"%":"WebGLTexture"},f:{"^":"p;",$isf:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lL:{"^":"jP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return P.as(this.cz(a,b))},
u:function(a,b){return this.h(a,b)},
cz:function(a,b){return a.item(b)},
$ist:1,
$ast:function(){return[[P.O,,,]]},
$asu:function(){return[[P.O,,,]]},
$isq:1,
$asq:function(){return[[P.O,,,]]},
$iso:1,
$aso:function(){return[[P.O,,,]]},
$asy:function(){return[[P.O,,,]]},
"%":"SQLResultSetRowList"},jO:{"^":"p+u;"},jP:{"^":"jO+y;"}}],["","",,V,{"^":"",
el:function(){var z,y,x,w,v,u,t,s,r
z=new V.K(new Float32Array(16))
z.aX()
$.i=z
z=$.$get$bh()
z.toString
y=P.hV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
x=(z&&C.n).b3(z,"webgl",y)
x=H.b(x==null?C.n.b3(z,"experimental-webgl",y):x,"$iscq")
$.a=x
if(x==null)return
V.kW()
z=$.$get$ag().au(0,"fps")
$.er=z
if(!z)J.c8(C.b.i(document,"#fps"))
if($.$get$ag().au(0,"width")){w=H.C($.$get$ag().h(0,"width"))
z=$.$get$bh()
v=H.cp(w,null)
z.width=v==null?500:v}if($.$get$ag().au(0,"height")){u=H.C($.$get$ag().h(0,"height"))
z=$.$get$bh()
v=H.cp(u,null)
z.height=v==null?500:v}if($.$get$ag().au(0,"overflow")){z=document.body.style
z.overflow="hidden"}t=$.$get$ag().au(0,"lsn")?P.kK(H.C($.$get$ag().h(0,"lsn")),null,null):1
s=H.b(C.b.i(document,"#lessonNumber"),"$isbx")
for(z=s&&C.M,r=1;r<17;++r){s.children
z.aa(s,W.ia("Lesson "+r,""+r,null,t===r))}s.toString
z=W.a1
W.af(s,"change",H.m(new V.kR(s),{func:1,ret:-1,args:[z]}),!1,z)
z=s.selectedIndex
if(typeof z!=="number")return z.a8()
z=V.ep(z+1)
z.a2($.$get$cG())
$.bG=z
z=$.a;(z&&C.a).as(z,0,0,0,1)
z=W.aC
v={func:1,ret:-1,args:[z]}
W.af(window,"keydown",H.m(new V.kS(),v),!1,z)
W.af(window,"keyup",H.m(new V.kT(),v),!1,z)
V.l0(0)},
l0:[function(a){var z,y,x
C.N.gcT(window).I(V.kN(),null)
if($.er)V.kz(H.cI(a))
$.bG.K()
$.bG.J(0,H.cI(a))
z=$.bG
y=$.$get$bh()
x=y.width
y=y.height
if(typeof x!=="number")return x.dz()
if(typeof y!=="number")return H.R(y)
z.M(x,y,x/y)},"$1","kN",4,0,10],
an:function(a){return C.c.d8(H.Y(a,"$iso",[P.S],"$aso"),new V.kp(),new V.kq())!=null},
kW:function(){var z,y,x,w,v,u,t,s
z=window.location.search
y=(J.ey(z,"?")?C.h.b8(z,1):z).split("&")
for(x=y.length,w=0;w<x;++w){v=J.ex(y[w],"=")
u=v.length
if(u===1){t=$.$get$ag()
if(0>=u)return H.j(v,0)
t.U(0,v[0],"")}else{t=$.$get$ag()
if(0>=u)return H.j(v,0)
s=v[0]
if(1>=u)return H.j(v,1)
t.U(0,s,v[1])}}},
ao:function(a,b,c,d){var z,y
z={func:1}
H.m(d,z)
H.m(a,z)
H.m(b,z)
H.m(c,z)
if(b!=null&&V.an(H.c([65,37],[P.S])))b.$0()
if(c!=null&&V.an(H.c([68,39],[P.S])))c.$0()
z=[P.S]
y=V.an(H.c([83,40],z))
if(y)a.$0()
z=V.an(H.c([87,38],z))
if(z)d.$0()},
kz:function(a){var z,y
z=$.cE+1
$.cE=z
y=$.ek
if(typeof a!=="number")return a.V()
if(a-y<500)return
z=$.ec*0.1+z*0.9*2
$.ec=z
$.$get$ef().textContent=C.z.du(z,2)
$.cE=0
$.ek=a},
U:function(a,b){var z,y,x,w,v
H.m(b,{func:1,args:[P.G,W.aT]})
z=P.G
y=new P.a0(0,$.J,[z])
x=$.a.createTexture()
w=document.createElement("img")
v=W.a1
W.af(w,"load",H.m(new V.kP(b,x,w,new P.cv(y,[z])),{func:1,ret:-1,args:[v]}),!1,v)
w.src=a
return y},
mh:[function(a,b){var z=$.a;(z&&C.a).av(z,37440,1)
z=$.a;(z&&C.a).q(z,3553,a)
z=$.a;(z&&C.a).ah(z,3553,0,6408,6408,5121,b)
z=$.a;(z&&C.a).S(z,3553,10240,9729)
z=$.a;(z&&C.a).S(z,3553,10241,9985)
z=$.a;(z&&C.a).aw(z,3553)
z=$.a;(z&&C.a).q(z,3553,null)},"$2","a8",8,0,25],
ep:function(a){var z,y,x,w,v,u,t
switch(a){case 1:z=new V.fs(0)
y=[P.e]
y=V.T("          precision mediump float;\n\n          void main(void) {\n              gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n          }\n        ","          attribute vec3 aVertexPosition;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n          }\n        ",H.c(["aVertexPosition"],y),H.c(["uMVMatrix","uPMatrix"],y))
z.b=y
x=$.a;(x&&C.a).L(x,y.c)
y=$.a.createBuffer()
z.c=y
x=$.a;(x&&C.a).k(x,34962,y)
y=$.a
x=[P.E];(y&&C.a).w(y,34962,new Float32Array(H.w(H.c([0,1,0,-1,-1,0,1,-1,0],x))),35044)
y=$.a.createBuffer()
z.d=y
w=$.a;(w&&C.a).k(w,34962,y)
y=$.a;(y&&C.a).w(y,34962,new Float32Array(H.w(H.c([1,1,0,-1,1,0,1,-1,0,-1,-1,0],x))),35044)
x=$.a;(x&&C.a).as(x,0,0,0,1)
return z
case 2:z=new V.he(0)
y=[P.e]
y=V.T("          precision mediump float;\n\n          varying vec4 vColor;\n\n          void main(void) {\n            gl_FragColor = vColor;\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec4 aVertexColor;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec4 vColor;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vColor = aVertexColor;\n          }\n        ",H.c(["aVertexPosition","aVertexColor"],y),H.c(["uMVMatrix","uPMatrix"],y))
z.b=y
x=$.a;(x&&C.a).L(x,y.c)
y=$.a.createBuffer()
z.c=y
x=$.a;(x&&C.a).k(x,34962,y)
y=$.a
x=[P.E];(y&&C.a).w(y,34962,new Float32Array(H.w(H.c([0,1,0,-1,-1,0,1,-1,0],x))),35044)
y=$.a.createBuffer()
z.e=y
w=$.a;(w&&C.a).k(w,34962,y)
v=H.c([1,0,0,1,0,1,0,1,0,0,1,1],x)
y=$.a;(y&&C.a).w(y,34962,new Float32Array(H.w(v)),35044)
y=$.a.createBuffer()
z.d=y
w=$.a;(w&&C.a).k(w,34962,y)
y=$.a;(y&&C.a).w(y,34962,new Float32Array(H.w(H.c([1,1,0,-1,1,0,1,-1,0,-1,-1,0],x))),35044)
y=$.a.createBuffer()
z.f=y
w=$.a;(w&&C.a).k(w,34962,y)
v=H.c([0.5,0.5,1,1,0.5,0.5,1,1,0.5,0.5,1,1,0.5,0.5,1,1],x)
x=$.a;(x&&C.a).w(x,34962,new Float32Array(H.w(v)),35044)
x=$.a;(x&&C.a).as(x,0,0,0,1)
return z
case 3:z=new V.hf(0,0,0)
y=[P.e]
y=V.T("          precision mediump float;\n\n          varying vec4 vColor;\n\n          void main(void) {\n            gl_FragColor = vColor;\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec4 aVertexColor;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec4 vColor;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vColor = aVertexColor;\n          }\n        ",H.c(["aVertexPosition","aVertexColor"],y),H.c(["uMVMatrix","uPMatrix"],y))
z.b=y
x=$.a;(x&&C.a).L(x,y.c)
y=$.a.createBuffer()
z.c=y
x=$.a;(x&&C.a).k(x,34962,y)
y=$.a
x=[P.E];(y&&C.a).w(y,34962,new Float32Array(H.w(H.c([0,1,0,-1,-1,0,1,-1,0],x))),35044)
y=$.a.createBuffer()
z.e=y
w=$.a;(w&&C.a).k(w,34962,y)
v=H.c([1,0,0,1,0,1,0,1,0,0,1,1],x)
y=$.a;(y&&C.a).w(y,34962,new Float32Array(H.w(v)),35044)
y=$.a.createBuffer()
z.d=y
w=$.a;(w&&C.a).k(w,34962,y)
y=$.a;(y&&C.a).w(y,34962,new Float32Array(H.w(H.c([1,1,0,-1,1,0,1,-1,0,-1,-1,0],x))),35044)
y=$.a.createBuffer()
z.f=y
w=$.a;(w&&C.a).k(w,34962,y)
v=H.c([0.5,0.5,1,1,0.5,0.5,1,1,0.5,0.5,1,1,0.5,0.5,1,1],x)
x=$.a;(x&&C.a).w(x,34962,new Float32Array(H.w(v)),35044)
x=$.a;(x&&C.a).as(x,0,0,0,1)
return z
case 4:z=new V.ig()
y=$.a.createBuffer()
z.a=y
z.b=$.a.createBuffer()
z.c=$.a.createBuffer()
x=$.a;(x&&C.a).k(x,34962,y)
y=[P.E]
u=H.c([0,1,0,-1,-1,1,1,-1,1,0,1,0,1,-1,1,1,-1,-1,0,1,0,1,-1,-1,-1,-1,-1,0,1,0,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,1],y)
x=$.a;(x&&C.a).w(x,34962,new Float32Array(H.w(u)),35044)
x=$.a.createBuffer()
z.b=x
w=$.a;(w&&C.a).k(w,34962,x)
t=H.c([0,0.4472135901451111,0.8944271802902222,0,0.4472135901451111,0.8944271802902222,0,0.4472135901451111,0.8944271802902222,0.8944271802902222,0.4472135901451111,0,0.8944271802902222,0.4472135901451111,0,0.8944271802902222,0.4472135901451111,0,0,0.4472135901451111,-0.8944271802902222,0,0.4472135901451111,-0.8944271802902222,0,0.4472135901451111,-0.8944271802902222,-0.8944271802902222,0.4472135901451111,0,-0.8944271802902222,0.4472135901451111,0,-0.8944271802902222,0.4472135901451111,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],y)
x=$.a;(x&&C.a).w(x,34962,new Float32Array(H.w(t)),35044)
x=$.a.createBuffer()
z.d=x
w=$.a;(w&&C.a).k(w,34962,x)
v=H.c([1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],y)
y=$.a;(y&&C.a).w(y,34962,new Float32Array(H.w(v)),35044)
y=V.aS()
z=new V.hg(z,y,0,0,0,0,0,0)
x=[P.e]
x=V.T("          precision mediump float;\n\n          varying vec4 vColor;\n\n          void main(void) {\n            gl_FragColor = vColor;\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec4 aVertexColor;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec4 vColor;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vColor = aVertexColor;\n          }\n        ",H.c(["aVertexPosition","aVertexColor"],x),H.c(["uMVMatrix","uPMatrix"],x))
z.b=x
w=$.a;(w&&C.a).L(w,x.c)
y.e=V.eV()
y=$.a;(y&&C.a).as(y,0,0,0,1)
return z
case 5:return V.hm()
case 6:return V.ht()
case 7:return V.hB()
case 8:return V.hI()
case 9:return V.hP()
case 10:return V.fu()
case 11:return V.fz()
case 12:return V.fF()
case 13:return V.db()
case 14:return V.fU()
case 15:return V.h3()
case 16:return V.hc()}return},
eT:{"^":"h;0a,0b,0c,0d,0e",
aE:function(a,b,c,d,e){var z
H.v(e)
H.v(c)
H.v(b)
H.v(a)
H.m(d,{func:1})
if(e!=null){z=$.a;(z&&C.a).k(z,34962,this.a)
z=$.a;(z&&C.a).D(z,e,3,5126,!1,0,0)}if(c!=null){z=$.a;(z&&C.a).k(z,34962,this.b)
z=$.a;(z&&C.a).D(z,c,3,5126,!1,0,0)}if(b!=null){z=$.a;(z&&C.a).k(z,34962,this.c)
z=$.a;(z&&C.a).D(z,b,2,5126,!1,0,0)}if(a!=null){z=$.a;(z&&C.a).k(z,34962,this.e.a)
z=$.a;(z&&C.a).D(z,a,4,5126,!1,0,0)}d.$0()
z=$.a;(z&&C.a).k(z,34963,this.d)
z=$.a;(z&&C.a).aW(z,4,36,5123,0)},
X:function(a,b,c,d){return this.aE(null,a,b,c,d)},
X:function(a,b,c,d){return this.aE(null,a,b,c,d)},
aD:function(a,b,c){return this.aE(null,a,null,b,c)},
d6:function(a,b,c){return this.aE(a,null,null,b,c)},
n:{
aS:function(){var z,y,x,w,v,u,t
z=new V.eT()
y=$.a.createBuffer()
z.a=y
x=$.a;(x&&C.a).k(x,34962,y)
y=[P.E]
w=H.c([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1],y)
x=$.a;(x&&C.a).w(x,34962,new Float32Array(H.w(w)),35044)
x=$.a.createBuffer()
z.b=x
v=$.a;(v&&C.a).k(v,34962,x)
u=H.c([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0],y)
x=$.a;(x&&C.a).w(x,34962,new Float32Array(H.w(u)),35044)
x=$.a.createBuffer()
z.c=x
v=$.a;(v&&C.a).k(v,34962,x)
t=H.c([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1],y)
y=$.a;(y&&C.a).w(y,34962,new Float32Array(H.w(t)),35044)
y=$.a.createBuffer()
z.d=y
x=$.a;(x&&C.a).k(x,34963,y)
y=$.a;(y&&C.a).w(y,34963,new Uint16Array(H.w(H.c([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],[P.S]))),35044)
return z}}},
eU:{"^":"h;0a",
c_:function(){var z,y,x,w,v,u,t
z=$.a.createBuffer()
this.a=z
y=$.a;(y&&C.a).k(y,34962,z)
z=P.E
y=[z]
x=[H.c([1,0,0,1],y),H.c([1,1,0,1],y),H.c([0,1,0,1],y),H.c([1,0.5,0.5,1],y),H.c([1,0,1,1],y),H.c([0,0,1,1],y)]
w=H.c([],[z])
for(v=0;v<6;++v){u=x[v]
for(t=0;t<4;++t)C.c.a_(w,u)}z=$.a;(z&&C.a).w(z,34962,new Float32Array(H.w(w)),35044)},
n:{
eV:function(){var z=new V.eU()
z.c_()
return z}}},
f5:{"^":"h;a,b,0c,0d,0e",
c0:function(a,b,c,d){var z,y,x,w,v,u,t
z=$.a
z=(z&&C.a).bz(z,35632)
this.d=z
y=$.a;(y&&C.a).b6(y,z,a)
z=$.a;(z&&C.a).by(z,this.d)
z=$.a
z=(z&&C.a).bz(z,35633)
this.e=z
y=$.a;(y&&C.a).b6(y,z,b)
z=$.a;(z&&C.a).by(z,this.e)
z=$.a.createProgram()
this.c=z
y=$.a;(y&&C.a).bt(y,z,this.e)
z=$.a;(z&&C.a).bt(z,this.c,this.d)
z=$.a;(z&&C.a).de(z,this.c)
z=$.a
if(!H.ed((z&&C.a).bN(z,this.c,35714)))P.a5("Could not initialise shaders")
for(z=c.length,y=this.a,x=0;x<c.length;c.length===z||(0,H.aR)(c),++x){w=c[x]
v=$.a
u=(v&&C.a).bM(v,this.c,w)
v=$.a;(v&&C.a).d7(v,u)
y.U(0,w,u)}for(z=d.length,y=this.b,x=0;x<d.length;d.length===z||(0,H.aR)(d),++x){t=d[x]
v=$.a
y.U(0,t,(v&&C.a).bP(v,this.c,t))}},
n:{
T:function(a,b,c,d){var z=P.e
z=new V.f5(new H.bu(0,0,[z,P.S]),new H.bu(0,0,[z,P.f]))
z.c0(a,b,c,d)
return z}}},
aU:{"^":"h;0a,0b,0c,0d,0e,f",
X:function(a,b,c,d){var z,y,x,w
H.m(c,{func:1})
if(d!=null){z=$.a;(z&&C.a).k(z,34962,this.c)
z=$.a;(z&&C.a).D(z,d,3,5126,!1,0,0)}if(b!=null&&this.a!=null){z=$.a;(z&&C.a).k(z,34962,this.a)
z=$.a;(z&&C.a).D(z,b,3,5126,!1,0,0)}if(a!=null&&this.b!=null){z=$.a;(z&&C.a).k(z,34962,this.b)
z=$.a;(z&&C.a).D(z,a,2,5126,!1,0,0)}c.$0()
z=this.d
if(z!=null){y=$.a;(y&&C.a).k(y,34963,z)
z=$.a;(z&&C.a).aW(z,4,this.e,5123,0)}else{z=this.f
y=this.e
x=$.a
w=x&&C.a
if(z)w.a4(x,5,0,y)
else w.a4(x,4,0,y)}},
aD:function(a,b,c){return this.X(a,null,b,c)},
n:{
da:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=new V.aU(!1)
P.a5(a)
y=H.b(C.H.d3(0,a),"$isO")
x=J.bE(y)
w=[P.M]
v=H.Y(x.h(y,"vertexNormals"),"$iso",w,"$aso")
if(v!=null){u=J.bJ(v,P.E)
P.a5(u)
t=$.a.createBuffer()
z.a=t
s=$.a;(s&&C.a).k(s,34962,t)
t=$.a;(t&&C.a).w(t,34962,new Float32Array(H.w(u)),35044)}v=H.Y(x.h(y,"vertexTextureCoords"),"$iso",w,"$aso")
if(v!=null){P.a5(v)
r=J.bJ(v,P.E)
P.a5(r)
t=$.a.createBuffer()
z.b=t
s=$.a;(s&&C.a).k(s,34962,t)
t=$.a;(t&&C.a).w(t,34962,new Float32Array(H.w(r)),35044)}q=J.bJ(H.Y(x.h(y,"vertexPositions"),"$iso",w,"$aso"),P.E)
t=$.a.createBuffer()
z.c=t
s=$.a;(s&&C.a).k(s,34962,t)
t=$.a;(t&&C.a).w(t,34962,new Float32Array(H.w(q)),35044)
v=H.Y(x.h(y,"indices"),"$iso",w,"$aso")
if(v!=null){p=J.bJ(v,P.S)
x=$.a.createBuffer()
z.d=x
w=$.a;(w&&C.a).k(w,34963,x)
x=$.a;(x&&C.a).w(x,34963,new Uint16Array(H.w(p)),35044)
z.e=J.av(p.a)}else{x=J.av(q.a)
if(typeof x!=="number")return x.dB()
z.e=C.f.a6(x,3)}return z},
cl:function(a){var z,y,x,w,v
P.a5(a)
z=V.aU
y=new P.a0(0,$.J,[z])
z=W.f9(a,null,null).I(new V.fq(a,new P.cv(y,[z])),null)
x=new V.fr()
w=H.x(z,0)
v=$.J
if(v!==C.d)x=P.e3(x,v)
z.aM(new P.aN(new P.a0(0,v,[w]),2,null,x,[w,w]))
return y}}},
fq:{"^":"d:23;a,b",
$1:function(a){var z
H.C(a)
P.a5(a)
z=V.da(a)
P.a5("json object from "+this.a+" loaded as "+z.l(0))
this.b.at(0,z)}},
fr:{"^":"d:24;",
$1:function(a){P.a5(a)
return!0}},
kR:{"^":"d:20;a",
$1:function(a){var z=this.a.selectedIndex
if(typeof z!=="number")return z.a8()
z=V.ep(z+1)
z.a2($.$get$cG())
$.bG=z}},
kS:{"^":"d:12;",
$1:function(a){H.b(a,"$isaC")
$.$get$a3().m(0,a.keyCode)}},
kT:{"^":"d:12;",
$1:function(a){H.b(a,"$isaC")
$.$get$a3().dl(0,a.keyCode)}},
kp:{"^":"d:27;",
$1:function(a){H.v(a)
return $.$get$a3().B(0,a)}},
kq:{"^":"d:2;",
$0:function(){return}},
W:{"^":"h;",
J:function(a,b){},
K:function(){},
a2:function(a){(a&&C.e).bS(a,"If you see this, don't worry, the lesson doesn't have any parameters for you to change! Generally up/down/left/right or WASD work.")}},
kP:{"^":"d:20;a,b,c,d",
$1:function(a){var z=this.b
this.a.$2(z,this.c)
this.d.at(0,z)}},
al:{"^":"h;",
aJ:function(a){},
$isi6:1},
fs:{"^":"W;0b,0c,0d,a",
M:function(a,b,c){var z,y
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=[P.E]
$.i.A(0,H.c([-1.5,0,-7],z))
y=$.a;(y&&C.a).k(y,34962,this.c)
y=$.a;(y&&C.a).D(y,this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
this.H()
y=$.a;(y&&C.a).a4(y,4,0,3)
$.i.A(0,H.c([3,0,0],z))
z=$.a;(z&&C.a).k(z,34962,this.d)
z=$.a;(z&&C.a).D(z,this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
this.H()
z=$.a;(z&&C.a).a4(z,5,0,4)
z=$.$get$A()
if(0>=z.length)return H.j(z,-1)
$.i=z.pop()},
H:function(){var z=$.a;(z&&C.a).t(z,this.b.b.h(0,"uPMatrix"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,this.b.b.h(0,"uMVMatrix"),!1,$.i.a)},
J:function(a,b){},
K:function(){}},
ft:{"^":"W;0b,0c,0d,e,f,r,x,y,z,Q,ch,a",
c1:function(){var z,y
P.a5("Lesson 10")
V.cl("world.json").I(new V.fv(this),null)
V.U("mcdole.gif",new V.fw(this))
z=[P.e]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec2 vTextureCoord;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n          }\n        ",H.c(["aVertexPosition","aTextureCoord"],z),H.c(["uMVMatrix","uPMatrix","uSampler"],z))
this.b=z
y=$.a;(y&&C.a).L(y,z.c)},
M:function(a,b,c){var z,y
if(!(this.d!=null&&this.c!=null))return
z=$.a;(z&&C.a).P(z,3042)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
z.a1(-this.e*0.017453292519943295)
z.N(-this.f*0.017453292519943295)
z.A(0,H.c([-this.y,-this.z,-this.Q],[P.E]))
z=$.a;(z&&C.a).W(z,33984)
z=$.a;(z&&C.a).q(z,3553,this.c)
z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uSampler"),"$isf"),0)
z=this.d
y=H.v(this.b.a.h(0,"aVertexPosition"))
z.aD(H.v(this.b.a.h(0,"aTextureCoord")),new V.fx(this),y)
y=$.$get$A()
if(0>=y.length)return H.j(y,-1)
$.i=y.pop()},
J:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
y=b-z
if(this.ch!==0){this.y=this.y-Math.sin(this.f*0.017453292519943295)*this.ch*y
this.Q=this.Q-Math.cos(this.f*0.017453292519943295)*this.ch*y}this.f=this.f+this.x*y
this.e=this.e+this.r*y}this.a=b},
K:function(){var z=[P.S]
if(V.an(H.c([38,87],z)))this.ch=0.003
else if(V.an(H.c([40,83],z)))this.ch=-0.003
else this.ch=0
if(V.an(H.c([37,65],z)))this.x=0.1
else if(V.an(H.c([39,68],z)))this.x=-0.1
else this.x=0
if(V.an(H.c([33,57],z)))this.r=0.1
else if(V.an(H.c([34,51],z)))this.r=-0.1
else this.r=0},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,"    Use the cursor keys or WASD to run around, and <code>Page Up</code>/<code>Page Down</code> to\n    look up and down.\n    ",z)},
n:{
fu:function(){var z=new V.ft(0,0,0,0,0,0.4,0,0,0)
z.c1()
return z}}},
fv:{"^":"d:11;a",
$1:function(a){H.b(a,"$isaU")
this.a.d=a
P.a5("world loaded with "+H.n(a.e))}},
fw:{"^":"d:6;a",
$2:function(a,b){var z=$.a;(z&&C.a).av(z,37440,1)
z=$.a;(z&&C.a).q(z,3553,a)
z=$.a;(z&&C.a).ah(z,3553,0,6408,6408,5121,b)
z=$.a;(z&&C.a).S(z,3553,10240,9729)
z=$.a;(z&&C.a).S(z,3553,10241,9729)
this.a.c=a
P.a5("texture loaded")}},
fx:{"^":"d:2;a",
$0:function(){var z,y
z=$.a
y=this.a;(z&&C.a).t(z,H.b(y.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(y.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)}},
fy:{"^":"W;0b,0c,0d,e,f,0r,0x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,a",
c2:function(){var z,y,x
this.c=V.bS(30,30,2)
z=[P.e]
this.b=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n\n          uniform vec3 uAmbientColor;\n\n          uniform vec3 uLightingDirection;\n          uniform vec3 uDirectionalColor;\n\n          uniform bool uUseLighting;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n\n              if (!uUseLighting) {\n                  vLightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 transformedNormal = uNMatrix * aVertexNormal;\n                  float directionalLightWeighting = max(dot(transformedNormal, uLightingDirection), 0.0);\n                  vLightWeighting = uAmbientColor + uDirectionalColor * directionalLightWeighting;\n              }\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uSampler","uMVMatrix","uPMatrix","uNMatrix","uAmbientColor","uLightingDirection","uDirectionalColor","uUseLighting"],z))
V.U("moon.bmp",V.a8()).I(new V.fA(this),P.G)
z=$.a;(z&&C.a).L(z,this.b.c)
z=$.$get$bh()
z.toString
y=W.aV
x={func:1,ret:-1,args:[y]}
W.af(z,"mousedown",H.m(new V.fB(this),x),!1,y)
z=document
W.af(z,"mouseup",H.m(new V.fC(this),x),!1,y)
W.af(z,"mousemove",H.m(new V.fD(this),x),!1,y)},
M:function(a,b,c){var z,y,x,w,v
if(this.d==null)return
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
y=this.ch.checked
z=$.a
x=H.b(this.b.b.h(0,"uUseLighting"),"$isf")
w=y?1:0;(z&&C.a).v(z,x,w)
if(y){z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uAmbientColor"),"$isf"),P.r(this.cx.value,null),P.r(this.cy.value,null),P.r(this.db.value,null))
v=V.bU(P.r(this.dx.value,null),P.r(this.dy.value,null),P.r(this.fr.value,null)).aY(0).aK(0,-1)
z=$.a;(z&&C.a).b1(z,H.b(this.b.b.h(0,"uLightingDirection"),"$isf"),v.a)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uDirectionalColor"),"$isf"),P.r(this.fx.value,null),P.r(this.fy.value,null),P.r(this.go.value,null))}z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
z.A(0,H.c([0,0,-7],[P.E]))
$.i=z
$.i=z.b4(0,this.e)
z=$.a;(z&&C.a).W(z,33984)
z=$.a;(z&&C.a).q(z,3553,this.d)
z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uSampler"),"$isf"),0)
z=this.c
x=H.v(this.b.a.h(0,"aVertexPosition"))
w=H.v(this.b.a.h(0,"aVertexNormal"))
z.X(H.v(this.b.a.h(0,"aTextureCoord")),w,this.gE(),x)
x=$.$get$A()
if(0>=x.length)return H.j(x,-1)
$.i=x.pop()},
H:[function(){var z,y
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)
y=$.i.ab()
y.ac()
z=$.a;(z&&C.a).ad(z,H.b(this.b.b.h(0,"uNMatrix"),"$isf"),!1,y.a)},"$0","gE",0,0,1],
J:function(a,b){},
K:function(){},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,'"\n    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    Spin the moon by dragging it with the mouse.\n    <br/>\n\n    <h2>Directional light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Direction:</b>\n            <td>X: <input type="text" id="lightDirectionX" value="-1.0" />\n            <td>Y: <input type="text" id="lightDirectionY" value="-1.0" />\n            <td>Z: <input type="text" id="lightDirectionZ" value="-1.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="directionalR" value="0.8" />\n            <td>G: <input type="text" id="directionalG" value="0.8" />\n            <td>B: <input type="text" id="directionalB" value="0.8" />\n        </tr>\n    </table>\n\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n    <br/>\n\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.ch=H.b(C.b.i(z,"#lighting"),"$isl")
this.cx=H.b(C.b.i(z,"#ambientR"),"$isl")
this.cy=H.b(C.b.i(z,"#ambientG"),"$isl")
this.db=H.b(C.b.i(z,"#ambientB"),"$isl")
this.fx=H.b(C.b.i(z,"#directionalR"),"$isl")
this.fy=H.b(C.b.i(z,"#directionalG"),"$isl")
this.go=H.b(C.b.i(z,"#directionalB"),"$isl")
this.dx=H.b(C.b.i(z,"#lightDirectionX"),"$isl")
this.dy=H.b(C.b.i(z,"#lightDirectionY"),"$isl")
this.fr=H.b(C.b.i(z,"#lightDirectionZ"),"$isl")},
n:{
fz:function(){var z=new V.K(new Float32Array(16))
z.aX()
z=new V.fy(z,!1,!1,0)
z.c2()
return z}}},
fA:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.d=a
return a}},
fB:{"^":"d:9;a",
$1:function(a){var z,y
H.b(a,"$isaV")
z=this.a
z.f=!0
y=a.clientX
a.clientY
z.r=y
z.x=a.clientY}},
fC:{"^":"d:9;a",
$1:function(a){H.b(a,"$isaV")
this.a.f=!1}},
fD:{"^":"d:9;a",
$1:function(a){var z,y,x,w,v
H.b(a,"$isaV")
z=this.a
if(!z.f)return
y=a.clientX
x=a.clientY
w=z.r
if(typeof y!=="number")return y.V()
if(typeof w!=="number")return H.R(w)
v=new V.K(new Float32Array(16))
v.aX()
v.N((y-w)/10*0.017453292519943295)
w=z.x
if(typeof x!=="number")return x.V()
if(typeof w!=="number")return H.R(w)
v.a1((x-w)/10*0.017453292519943295)
z.e=v.b4(0,z.e)
z.r=y
z.x=x}},
fE:{"^":"W;0b,0c,0d,0e,0f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a",
c3:function(){this.d=V.bS(30,30,2)
this.c=V.aS()
var z=[P.e]
this.b=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n\n          uniform vec3 uAmbientColor;\n\n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingColor;\n\n          uniform bool uUseLighting;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          void main(void) {\n              vec4 mvPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * mvPosition;\n              vTextureCoord = aTextureCoord;\n\n              if (!uUseLighting) {\n                  vLightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 lightDirection = normalize(uPointLightingLocation - mvPosition.xyz);\n\n                  vec3 transformedNormal = uNMatrix * aVertexNormal;\n                  float directionalLightWeighting = max(dot(transformedNormal, lightDirection), 0.0);\n                  vLightWeighting = uAmbientColor + uPointLightingColor * directionalLightWeighting;\n              }\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uSampler","uMVMatrix","uPMatrix","uNMatrix","uAmbientColor","uPointLightingLocation","uPointLightingColor","uUseLighting"],z))
z=P.G
V.U("moon.bmp",V.a8()).I(new V.fG(this),z)
V.U("crate.gif",V.a8()).I(new V.fH(this),z)
z=$.a;(z&&C.a).L(z,this.b.c)
z=$.a;(z&&C.a).G(z,2929)},
M:function(a,b,c){var z,y,x,w,v,u
if(!(this.e!=null&&this.f!=null))return
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
$.I=V.X(45,c,0.1,100)
z=$.a;(z&&C.a).L(z,this.b.c)
y=this.z.checked
z=$.a
x=H.b(this.b.b.h(0,"uUseLighting"),"$isf")
w=y?1:0;(z&&C.a).v(z,x,w)
if(y){z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uAmbientColor"),"$isf"),P.r(this.Q.value,null),P.r(this.ch.value,null),P.r(this.cx.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingLocation"),"$isf"),P.r(this.cy.value,null),P.r(this.db.value,null),P.r(this.dx.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingColor"),"$isf"),P.r(this.dy.value,null),P.r(this.fr.value,null),P.r(this.fx.value,null))}z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
x=[P.E]
z.A(0,H.c([0,0,-20],x))
z.a1(this.y*0.017453292519943295)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
z.N(this.r*0.017453292519943295)
z.A(0,H.c([5,0,0],x))
z=$.a;(z&&C.a).W(z,33984)
z=$.a;(z&&C.a).q(z,3553,this.e)
z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uSampler"),"$isf"),0)
z=this.d
w=H.v(this.b.a.h(0,"aVertexPosition"))
v=H.v(this.b.a.h(0,"aVertexNormal"))
u=this.gE()
z.X(H.v(this.b.a.h(0,"aTextureCoord")),v,u,w)
w=$.$get$A()
if(0>=w.length)return H.j(w,-1)
w=w.pop()
$.i=w
w.N(this.x*0.017453292519943295)
w.A(0,H.c([5,0,0],x))
x=$.a;(x&&C.a).W(x,33984)
x=$.a;(x&&C.a).q(x,3553,this.f)
x=$.a;(x&&C.a).v(x,H.b(this.b.b.h(0,"uSampler"),"$isf"),0)
x=this.c
w=H.v(this.b.a.h(0,"aVertexPosition"))
v=H.v(this.b.a.h(0,"aVertexNormal"))
x.X(H.v(this.b.a.h(0,"aTextureCoord")),v,u,w)
w=$.$get$A()
if(0>=w.length)return H.j(w,-1)
$.i=w.pop()},
H:[function(){var z,y
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)
y=$.i.ab()
y.ac()
z=$.a;(z&&C.a).ad(z,H.b(this.b.b.h(0,"uNMatrix"),"$isf"),!1,y.a)},"$0","gE",0,0,1],
J:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
z=0.05*(b-z)
this.r=this.r+z
this.x+=z}this.a=b},
K:function(){V.ao(new V.fI(this),new V.fJ(this),new V.fK(this),new V.fL(this))},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,'    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    <br/>\n\n    <h2>Point light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Location:</b>\n            <td>X: <input type="text" id="lightPositionX" value="0.0" />\n            <td>Y: <input type="text" id="lightPositionY" value="0.0" />\n            <td>Z: <input type="text" id="lightPositionZ" value="-20.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="pointR" value="0.8" />\n            <td>G: <input type="text" id="pointG" value="0.8" />\n            <td>B: <input type="text" id="pointB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n    <br/>\n\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.z=H.b(C.b.i(z,"#lighting"),"$isl")
this.Q=H.b(C.b.i(z,"#ambientR"),"$isl")
this.ch=H.b(C.b.i(z,"#ambientG"),"$isl")
this.cx=H.b(C.b.i(z,"#ambientB"),"$isl")
this.dy=H.b(C.b.i(z,"#pointR"),"$isl")
this.fr=H.b(C.b.i(z,"#pointG"),"$isl")
this.fx=H.b(C.b.i(z,"#pointB"),"$isl")
this.cy=H.b(C.b.i(z,"#lightPositionX"),"$isl")
this.db=H.b(C.b.i(z,"#lightPositionY"),"$isl")
this.dx=H.b(C.b.i(z,"#lightPositionZ"),"$isl")},
n:{
fF:function(){var z=new V.fE(180,0,0,0)
z.c3()
return z}}},
fG:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.e=a
return a}},
fH:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.f=a
return a}},
fL:{"^":"d:3;a",
$0:function(){return--this.a.y}},
fI:{"^":"d:3;a",
$0:function(){return++this.a.y}},
fJ:{"^":"d:2;a",
$0:function(){var z=this.a;--z.r;--z.x}},
fK:{"^":"d:2;a",
$0:function(){var z=this.a;++z.r;++z.x}},
fM:{"^":"W;0b,0c,0d,0e,0f,0r,0x,y,z,Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,a",
c4:function(){var z,y,x
this.c=V.bS(30,30,1)
this.b=V.aS()
z=[P.e]
y=H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z)
x=H.c(["uPMatrix","uMVMatrix","uNMatrix","uSampler","uUseTextures","uUseLighting","uAmbientColor","uPointLightingLocation","uPointLightingColor"],z)
this.d=V.T("        precision mediump float;\n    \n        varying vec2 vTextureCoord;\n        varying vec3 vLightWeighting;\n    \n        uniform bool uUseTextures;\n    \n        uniform sampler2D uSampler;\n    \n        void main(void) {\n            vec4 fragmentColor;\n            if (uUseTextures) {\n                fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n            } else {\n                fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n            }\n            gl_FragColor = vec4(fragmentColor.rgb * vLightWeighting, fragmentColor.a);\n        }\n      ","        attribute vec3 aVertexPosition;\n        attribute vec3 aVertexNormal;\n        attribute vec2 aTextureCoord;\n    \n        uniform mat4 uMVMatrix;\n        uniform mat4 uPMatrix;\n        uniform mat3 uNMatrix;\n    \n        uniform vec3 uAmbientColor;\n    \n        uniform vec3 uPointLightingLocation;\n        uniform vec3 uPointLightingColor;\n    \n        uniform bool uUseLighting;\n    \n        varying vec2 vTextureCoord;\n        varying vec3 vLightWeighting;\n    \n        void main(void) {\n            vec4 mvPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n            gl_Position = uPMatrix * mvPosition;\n            vTextureCoord = aTextureCoord;\n    \n            if (!uUseLighting) {\n                vLightWeighting = vec3(1.0, 1.0, 1.0);\n            } else {\n                vec3 lightDirection = normalize(uPointLightingLocation - mvPosition.xyz);\n    \n                vec3 transformedNormal = uNMatrix * aVertexNormal;\n                float directionalLightWeighting = max(dot(transformedNormal, lightDirection), 0.0);\n                vLightWeighting = uAmbientColor + uPointLightingColor * directionalLightWeighting;\n            }\n        }\n      ",y,x)
z=V.T("          precision mediump float;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n          uniform bool uUseLighting;\n          uniform bool uUseTextures;\n      \n          uniform vec3 uAmbientColor;\n      \n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingColor;\n      \n          uniform sampler2D uSampler;\n      \n      \n          void main(void) {\n              vec3 lightWeighting;\n              if (!uUseLighting) {\n                  lightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n      \n                  float directionalLightWeighting = max(dot(normalize(vTransformedNormal), lightDirection), 0.0);\n                  lightWeighting = uAmbientColor + uPointLightingColor * directionalLightWeighting;\n              }\n      \n              vec4 fragmentColor;\n              if (uUseTextures) {\n                  fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              } else {\n                  fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n              }\n              gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n      \n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n      \n          void main(void) {\n              vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * vPosition;\n              vTextureCoord = aTextureCoord;\n              vTransformedNormal = uNMatrix * aVertexNormal;\n          }\n        ",y,x)
this.e=z
this.f=z
z=P.G
V.U("moon.bmp",V.a8()).I(new V.fN(this),z)
V.U("crate.gif",V.a8()).I(new V.fO(this),z)
z=$.a;(z&&C.a).G(z,2929)},
M:function(a,b,c){var z,y,x,w,v,u
if(!(this.r!=null&&this.x!=null))return
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
$.I=V.X(45,c,0.1,100)
if(this.ch.checked){z=this.e
this.f=z}else{z=this.d
this.f=z}y=$.a;(y&&C.a).L(y,z.c)
x=this.cy.checked
z=$.a
y=H.b(this.f.b.h(0,"uUseLighting"),"$isf")
w=x?1:0;(z&&C.a).v(z,y,w)
if(x){z=$.a;(z&&C.a).p(z,H.b(this.f.b.h(0,"uAmbientColor"),"$isf"),P.r(this.db.value,null),P.r(this.dx.value,null),P.r(this.dy.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.f.b.h(0,"uPointLightingLocation"),"$isf"),P.r(this.fr.value,null),P.r(this.fx.value,null),P.r(this.fy.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.f.b.h(0,"uPointLightingColor"),"$isf"),P.r(this.go.value,null),P.r(this.id.value,null),P.r(this.k1.value,null))}z=$.a
y=H.b(this.f.b.h(0,"uUseTextures"),"$isf")
w=this.cx.checked?1:0;(z&&C.a).v(z,y,w)
w=$.$get$A();(w&&C.c).m(w,new V.K(new Float32Array(H.w($.i.a))))
w=$.i
y=[P.E]
w.A(0,H.c([0,0,-5],y))
w.a1(this.Q*0.017453292519943295)
w=$.$get$A();(w&&C.c).m(w,new V.K(new Float32Array(H.w($.i.a))))
w=$.i
w.N(this.y*0.017453292519943295)
w.A(0,H.c([2,0,0],y))
w=$.a;(w&&C.a).W(w,33984)
w=$.a;(w&&C.a).q(w,3553,this.r)
w=$.a;(w&&C.a).v(w,H.b(this.f.b.h(0,"uSampler"),"$isf"),0)
w=this.c
z=H.v(this.f.a.h(0,"aVertexPosition"))
v=H.v(this.f.a.h(0,"aVertexNormal"))
u=this.gE()
w.X(H.v(this.f.a.h(0,"aTextureCoord")),v,u,z)
z=$.$get$A()
if(0>=z.length)return H.j(z,-1)
z=z.pop()
$.i=z
z.N(this.z*0.017453292519943295)
z.A(0,H.c([1.25,0,0],y))
y=$.a;(y&&C.a).W(y,33984)
y=$.a;(y&&C.a).q(y,3553,this.x)
y=$.a;(y&&C.a).v(y,H.b(this.f.b.h(0,"uSampler"),"$isf"),0)
y=this.b
z=H.v(this.f.a.h(0,"aVertexPosition"))
v=H.v(this.f.a.h(0,"aVertexNormal"))
y.X(H.v(this.f.a.h(0,"aTextureCoord")),v,u,z)
z=$.$get$A()
if(0>=z.length)return H.j(z,-1)
$.i=z.pop()},
H:[function(){var z,y
z=$.a;(z&&C.a).t(z,H.b(this.f.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.f.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)
y=$.i.ab()
y.ac()
z=$.a;(z&&C.a).ad(z,H.b(this.f.b.h(0,"uNMatrix"),"$isf"),!1,y.a)},"$0","gE",0,0,1],
J:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
z=0.05*(b-z)
this.y=this.y+z
this.z+=z}this.a=b},
K:function(){V.ao(new V.fP(this),new V.fQ(this),new V.fR(this),new V.fS(this))},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,'    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    <input type="checkbox" id="per-fragment" checked /> Per-fragment lighting<br/>\n    <input type="checkbox" id="textures" checked /> Use textures<br/>\n    <br/>\n\n    <h2>Point light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Location:</b>\n            <td>X: <input type="text" id="lightPositionX" value="0.0" />\n            <td>Y: <input type="text" id="lightPositionY" value="0.0" />\n            <td>Z: <input type="text" id="lightPositionZ" value="-5.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="pointR" value="0.8" />\n            <td>G: <input type="text" id="pointG" value="0.8" />\n            <td>B: <input type="text" id="pointB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n\n\n    <br/>\n\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.cy=H.b(C.b.i(z,"#lighting"),"$isl")
this.db=H.b(C.b.i(z,"#ambientR"),"$isl")
this.dx=H.b(C.b.i(z,"#ambientG"),"$isl")
this.dy=H.b(C.b.i(z,"#ambientB"),"$isl")
this.go=H.b(C.b.i(z,"#pointR"),"$isl")
this.id=H.b(C.b.i(z,"#pointG"),"$isl")
this.k1=H.b(C.b.i(z,"#pointB"),"$isl")
this.fr=H.b(C.b.i(z,"#lightPositionX"),"$isl")
this.fx=H.b(C.b.i(z,"#lightPositionY"),"$isl")
this.fy=H.b(C.b.i(z,"#lightPositionZ"),"$isl")
this.ch=H.b(C.b.i(z,"#per-fragment"),"$isl")
this.cx=H.b(C.b.i(z,"#textures"),"$isl")},
n:{
db:function(){var z=new V.fM(180,0,30,0)
z.c4()
return z}}},
fN:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.r=a
return a}},
fO:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.x=a
return a}},
fS:{"^":"d:3;a",
$0:function(){return--this.a.Q}},
fP:{"^":"d:3;a",
$0:function(){return++this.a.Q}},
fQ:{"^":"d:2;a",
$0:function(){var z=this.a;--z.y;--z.z}},
fR:{"^":"d:2;a",
$0:function(){var z=this.a;++z.y;++z.z}},
fT:{"^":"W;0b,0c,0d,0e,0f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,a",
c5:function(){var z,y
V.cl("Teapot.json").I(new V.fV(this),null)
z=[P.e]
z=V.T("          precision mediump float;\n          \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n          \n          uniform float uMaterialShininess;\n          \n          uniform bool uShowSpecularHighlights;\n          uniform bool uUseLighting;\n          uniform bool uUseTextures;\n          \n          uniform vec3 uAmbientColor;\n          \n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingSpecularColor;\n          uniform vec3 uPointLightingDiffuseColor;\n          \n          uniform sampler2D uSampler;\n          \n          \n          void main(void) {\n              vec3 lightWeighting;\n              if (!uUseLighting) {\n                  lightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n                  vec3 normal = normalize(vTransformedNormal);\n          \n                  float specularLightWeighting = 0.0;\n                  if (uShowSpecularHighlights) {\n                      vec3 eyeDirection = normalize(-vPosition.xyz);\n                      vec3 reflectionDirection = reflect(-lightDirection, normal);\n          \n                      specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);\n                  }\n          \n                  float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n                  lightWeighting = uAmbientColor\n                      + uPointLightingSpecularColor * specularLightWeighting\n                      + uPointLightingDiffuseColor * diffuseLightWeighting;\n              }\n          \n              vec4 fragmentColor;\n              if (uUseTextures) {\n                  fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              } else {\n                  fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n              }\n              gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n      \n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n      \n          void main(void) {\n              vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * vPosition;\n              vTextureCoord = aTextureCoord;\n              vTransformedNormal = uNMatrix * aVertexNormal;\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uSampler","uUseTextures","uUseLighting","uAmbientColor","uPointLightingLocation","uPointLightingSpecularColor","uPointLightingDiffuseColor","uMaterialShininess","uShowSpecularHighlights"],z))
this.b=z
y=$.a;(y&&C.a).L(y,z.c)
V.U("earth.jpg",V.a8()).I(new V.fW(this),null)
V.U("moon.bmp",V.a8()).I(new V.fX(this),null)
V.U("galvanizedTexture.jpg",V.a8()).I(new V.fY(this),null)
z=$.a;(z&&C.a).G(z,2929)},
M:function(a,b,c){var z,y,x,w,v,u
if(!(this.f!=null&&this.r===3))return
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
y=this.fy.checked
z=$.a
x=H.b(this.b.b.h(0,"uShowSpecularHighlights"),"$isf")
w=y?1:0;(z&&C.a).v(z,x,w)
v=this.z.checked
w=$.a
x=H.b(this.b.b.h(0,"uUseLighting"),"$isf")
z=v?1:0;(w&&C.a).v(w,x,z)
if(v){z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uAmbientColor"),"$isf"),P.r(this.Q.value,null),P.r(this.ch.value,null),P.r(this.cx.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingLocation"),"$isf"),P.r(this.cy.value,null),P.r(this.db.value,null),P.r(this.dx.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingSpecularColor"),"$isf"),P.r(this.go.value,null),P.r(this.id.value,null),P.r(this.k1.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingDiffuseColor"),"$isf"),P.r(this.dy.value,null),P.r(this.fr.value,null),P.r(this.fx.value,null))}u=this.k3.value
z=$.a
x=H.b(this.b.b.h(0,"uUseTextures"),"$isf")
w=u!=="none"?1:0;(z&&C.a).v(z,x,w)
w=$.$get$A();(w&&C.c).m(w,new V.K(new Float32Array(H.w($.i.a))))
w=$.i
w.A(0,H.c([0,0,-40],[P.E]))
w.aH(0,this.y*0.017453292519943295,H.c([1,0,-1],[P.M]))
w.N(this.x*0.017453292519943295)
w=$.a;(w&&C.a).W(w,33984)
if(u==="earth"){z=$.a;(z&&C.a).q(z,3553,this.c)}else if(u==="galvanized"){z=$.a;(z&&C.a).q(z,3553,this.d)}else if(u==="moon"){z=$.a;(z&&C.a).q(z,3553,this.e)}z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uSampler"),"$isf"),0)
z=$.a;(z&&C.a).aI(z,H.b(this.b.b.h(0,"uMaterialShininess"),"$isf"),P.r(this.k2.value,null))
z=this.f
x=H.v(this.b.a.h(0,"aVertexPosition"))
w=H.v(this.b.a.h(0,"aVertexNormal"))
z.X(H.v(this.b.a.h(0,"aTextureCoord")),w,this.gE(),x)
x=$.$get$A()
if(0>=x.length)return H.j(x,-1)
$.i=x.pop()},
H:[function(){var z,y
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)
y=$.i.ab()
y.ac()
z=$.a;(z&&C.a).ad(z,H.b(this.b.b.h(0,"uNMatrix"),"$isf"),!1,y.a)},"$0","gE",0,0,1],
J:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
this.x=this.x+0.05*(b-z)}this.a=b},
K:function(){V.ao(new V.fZ(this),new V.h_(this),new V.h0(this),new V.h1(this))},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,'    <input type="checkbox" id="specular" checked /> Show specular highlight<br/>\n    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n\n    Texture:\n    <select id="texture">\n        <option value="none">None</option>\n        <option value="earth">Earth</option>\n        <option selected value="galvanized">Galvanized</option>\n        <option value="moon">Moon</option>\n    </select>\n\n    <h2>Material:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Shininess:</b>\n            <td><input type="text" id="shininess" value="32.0" />\n        </tr>\n    </table>\n\n    <h2>Point light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Location:</b>\n            <td>X: <input type="text" id="lightPositionX" value="-10.0" />\n            <td>Y: <input type="text" id="lightPositionY" value="4.0" />\n            <td>Z: <input type="text" id="lightPositionZ" value="-20.0" />\n        </tr>\n        <tr>\n            <td><b>Specular colour:</b>\n            <td>R: <input type="text" id="specularR" value="5.0" />\n            <td>G: <input type="text" id="specularG" value="5.0" />\n            <td>B: <input type="text" id="specularB" value="5.0" />\n        </tr>\n        <tr>\n            <td><b>Diffuse colour:</b>\n            <td>R: <input type="text" id="diffuseR" value="0.8" />\n            <td>G: <input type="text" id="diffuseG" value="0.8" />\n            <td>B: <input type="text" id="diffuseB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.4" />\n            <td>G: <input type="text" id="ambientG" value="0.4" />\n            <td>B: <input type="text" id="ambientB" value="0.4" />\n        </tr>\n    </table>\n\n    Earth texture courtesy of <a href="http://www.esa.int/esaEO/SEMGSY2IU7E_index_0.html">the European Space Agency/Envisat</a>.<br/>\n    Galvanized texture courtesy of <a href="http://www.arroway-textures.com/">Arroway Textures</a>.<br/>\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.z=H.b(C.b.i(z,"#lighting"),"$isl")
this.Q=H.b(C.b.i(z,"#ambientR"),"$isl")
this.ch=H.b(C.b.i(z,"#ambientG"),"$isl")
this.cx=H.b(C.b.i(z,"#ambientB"),"$isl")
this.cy=H.b(C.b.i(z,"#lightPositionX"),"$isl")
this.db=H.b(C.b.i(z,"#lightPositionY"),"$isl")
this.dx=H.b(C.b.i(z,"#lightPositionZ"),"$isl")
this.dy=H.b(C.b.i(z,"#diffuseR"),"$isl")
this.fr=H.b(C.b.i(z,"#diffuseG"),"$isl")
this.fx=H.b(C.b.i(z,"#diffuseB"),"$isl")
this.fy=H.b(C.b.i(z,"#specular"),"$isl")
this.go=H.b(C.b.i(z,"#specularR"),"$isl")
this.id=H.b(C.b.i(z,"#specularG"),"$isl")
this.k1=H.b(C.b.i(z,"#specularB"),"$isl")
this.k2=H.b(C.b.i(z,"#shininess"),"$isl")
this.k3=H.b(C.b.i(z,"#texture"),"$isbx")},
n:{
fU:function(){var z=new V.fT(0,180,23.4,0)
z.c5()
return z}}},
fV:{"^":"d:11;a",
$1:function(a){H.b(a,"$isaU")
P.a5("Teapot: "+H.n(a))
this.a.f=a}},
fW:{"^":"d:5;a",
$1:function(a){var z=this.a
z.c=H.b(a,"$isG");++z.r}},
fX:{"^":"d:5;a",
$1:function(a){var z=this.a
z.e=H.b(a,"$isG");++z.r}},
fY:{"^":"d:5;a",
$1:function(a){var z=this.a
z.d=H.b(a,"$isG");++z.r}},
h1:{"^":"d:0;a",
$0:function(){return--this.a.y}},
fZ:{"^":"d:0;a",
$0:function(){return++this.a.y}},
h_:{"^":"d:0;a",
$0:function(){return--this.a.x}},
h0:{"^":"d:0;a",
$0:function(){return++this.a.x}},
h2:{"^":"W;0b,0c,0d,0e,0f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,a",
c6:function(){var z,y
this.c=V.bS(30,30,13)
z=[P.e]
z=V.T("          precision mediump float;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n          uniform bool uUseColorMap;\n          uniform bool uUseSpecularMap;\n          uniform bool uUseLighting;\n      \n          uniform vec3 uAmbientColor;\n      \n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingSpecularColor;\n          uniform vec3 uPointLightingDiffuseColor;\n      \n          uniform sampler2D uColorMapSampler;\n          uniform sampler2D uSpecularMapSampler;\n      \n      \n          void main(void) {\n              vec3 lightWeighting;\n              if (!uUseLighting) {\n                  lightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n                  vec3 normal = normalize(vTransformedNormal);\n      \n                  float specularLightWeighting = 0.0;\n                  float shininess = 32.0;\n                  if (uUseSpecularMap) {\n                      shininess = texture2D(uSpecularMapSampler, vec2(vTextureCoord.s, vTextureCoord.t)).r * 255.0;\n                  }\n                  if (shininess < 255.0) {\n                      vec3 eyeDirection = normalize(-vPosition.xyz);\n                      vec3 reflectionDirection = reflect(-lightDirection, normal);\n      \n                      specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n                  }\n      \n                  float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n                  lightWeighting = uAmbientColor\n                      + uPointLightingSpecularColor * specularLightWeighting\n                      + uPointLightingDiffuseColor * diffuseLightWeighting;\n              }\n      \n              vec4 fragmentColor;\n              if (uUseColorMap) {\n                  fragmentColor = texture2D(uColorMapSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              } else {\n                  fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n              }\n              gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n      \n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n      \n          void main(void) {\n              vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * vPosition;\n              vTextureCoord = aTextureCoord;\n              vTransformedNormal = uNMatrix * aVertexNormal;\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uAmbientColor","uPointLightingLocation","uPointLightingSpecularColor","uPointLightingDiffuseColor","uUseColorMap","uUseSpecularMap","uUseLighting","uColorMapSampler","uSpecularMapSampler"],z))
this.b=z
y=$.a;(y&&C.a).L(y,z.c)
V.U("earth.jpg",V.a8()).I(new V.h4(this),null)
V.U("moon.bmp",V.a8()).I(new V.h5(this),null)
V.U("earth-specular.gif",V.a8()).I(new V.h6(this),null)
z=$.a;(z&&C.a).G(z,2929)},
M:function(a,b,c){var z,y,x
z=this.r
if(z!==3)return
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
z=$.a
y=H.b(this.b.b.h(0,"uUseColorMap"),"$isf")
x=this.k1.checked?1:0;(z&&C.a).v(z,y,x)
x=$.a
y=H.b(this.b.b.h(0,"uUseSpecularMap"),"$isf")
z=this.k2.checked?1:0;(x&&C.a).v(x,y,z)
z=$.a
y=H.b(this.b.b.h(0,"uUseLighting"),"$isf")
x=this.z.checked?1:0;(z&&C.a).v(z,y,x)
if(this.z.checked){z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uAmbientColor"),"$isf"),P.r(this.Q.value,null),P.r(this.ch.value,null),P.r(this.cx.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingLocation"),"$isf"),P.r(this.cy.value,null),P.r(this.db.value,null),P.r(this.dx.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingSpecularColor"),"$isf"),P.r(this.fy.value,null),P.r(this.go.value,null),P.r(this.id.value,null))
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingDiffuseColor"),"$isf"),P.r(this.dy.value,null),P.r(this.fr.value,null),P.r(this.fx.value,null))}z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
z.A(0,H.c([0,0,-40],[P.E]))
z.aH(0,this.y*0.017453292519943295,H.c([1,0,-1],[P.M]))
z.N(this.x*0.017453292519943295)
z=$.a;(z&&C.a).W(z,33984)
z=this.k3.value
if(z==="earth"){z=$.a;(z&&C.a).q(z,3553,this.d)}else if(z==="moon"){z=$.a;(z&&C.a).q(z,3553,this.e)}z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uColorMapSampler"),"$isf"),0)
z=$.a;(z&&C.a).W(z,33985)
z=$.a;(z&&C.a).q(z,3553,this.f)
z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uSpecularMapSampler"),"$isf"),1)
z=this.c
y=H.v(this.b.a.h(0,"aVertexPosition"))
x=H.v(this.b.a.h(0,"aVertexNormal"))
z.X(H.v(this.b.a.h(0,"aTextureCoord")),x,this.gE(),y)
y=$.$get$A()
if(0>=y.length)return H.j(y,-1)
$.i=y.pop()},
H:[function(){var z,y
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)
y=$.i.ab()
y.ac()
z=$.a;(z&&C.a).ad(z,H.b(this.b.b.h(0,"uNMatrix"),"$isf"),!1,y.a)},"$0","gE",0,0,1],
J:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
this.x=this.x+0.05*(b-z)}this.a=b},
K:function(){V.ao(new V.h7(this),new V.h8(this),new V.h9(this),new V.ha(this))},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,'    <input type="checkbox" id="color-map" checked /> Use color map<br/>\n    <input type="checkbox" id="specular-map" checked /> Use specular map<br/>\n    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n\n    Texture:\n    <select id="texture">\n        <option selected value="earth">Earth</option>\n        <option value="moon">Moon</option>\n    </select>\n    <h2>Point light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Location:</b>\n            <td>X: <input type="text" id="lightPositionX" value="-10.0" />\n            <td>Y: <input type="text" id="lightPositionY" value="4.0" />\n            <td>Z: <input type="text" id="lightPositionZ" value="-20.0" />\n        </tr>\n        <tr>\n            <td><b>Specular colour:</b>\n            <td>R: <input type="text" id="specularR" value="5.0" />\n            <td>G: <input type="text" id="specularG" value="5.0" />\n            <td>B: <input type="text" id="specularB" value="5.0" />\n        </tr>\n        <tr>\n            <td><b>Diffuse colour:</b>\n            <td>R: <input type="text" id="diffuseR" value="0.8" />\n            <td>G: <input type="text" id="diffuseG" value="0.8" />\n            <td>B: <input type="text" id="diffuseB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.4" />\n            <td>G: <input type="text" id="ambientG" value="0.4" />\n            <td>B: <input type="text" id="ambientB" value="0.4" />\n        </tr>\n    </table>\n\n    Earth texture courtesy of <a href="http://www.esa.int/esaEO/SEMGSY2IU7E_index_0.html">the European Space Agency/Envisat</a>.<br/>\n    Galvanized texture courtesy of <a href="http://www.arroway-textures.com/">Arroway Textures</a>.<br/>\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.z=H.b(C.b.i(z,"#lighting"),"$isl")
this.Q=H.b(C.b.i(z,"#ambientR"),"$isl")
this.ch=H.b(C.b.i(z,"#ambientG"),"$isl")
this.cx=H.b(C.b.i(z,"#ambientB"),"$isl")
this.cy=H.b(C.b.i(z,"#lightPositionX"),"$isl")
this.db=H.b(C.b.i(z,"#lightPositionY"),"$isl")
this.dx=H.b(C.b.i(z,"#lightPositionZ"),"$isl")
this.dy=H.b(C.b.i(z,"#diffuseR"),"$isl")
this.fr=H.b(C.b.i(z,"#diffuseG"),"$isl")
this.fx=H.b(C.b.i(z,"#diffuseB"),"$isl")
this.fy=H.b(C.b.i(z,"#specularR"),"$isl")
this.go=H.b(C.b.i(z,"#specularG"),"$isl")
this.id=H.b(C.b.i(z,"#specularB"),"$isl")
this.k1=H.b(C.b.i(z,"#color-map"),"$isl")
this.k2=H.b(C.b.i(z,"#specular-map"),"$isl")
this.k3=H.b(C.b.i(z,"#texture"),"$isbx")},
n:{
h3:function(){var z=new V.h2(0,180,23.4,0)
z.c6()
return z}}},
h4:{"^":"d:5;a",
$1:function(a){var z=this.a
z.d=H.b(a,"$isG");++z.r}},
h5:{"^":"d:5;a",
$1:function(a){var z=this.a
z.e=H.b(a,"$isG");++z.r}},
h6:{"^":"d:5;a",
$1:function(a){var z=this.a
z.f=H.b(a,"$isG");++z.r}},
ha:{"^":"d:3;a",
$0:function(){return--this.a.y}},
h7:{"^":"d:3;a",
$0:function(){return++this.a.y}},
h8:{"^":"d:3;a",
$0:function(){return--this.a.x}},
h9:{"^":"d:3;a",
$0:function(){return++this.a.x}},
hb:{"^":"W;0b,0c,0d,e,0f,0r,0x,0y,a",
c7:function(){var z,y
z=V.db()
this.f=z
y=W.aa(null)
y.checked=!0
z.cy=y
y=this.f
z=W.aa(null)
z.value="0.2"
y.db=z
z=this.f
y=W.aa(null)
y.value="0.2"
z.dx=y
y=this.f
z=W.aa(null)
z.value="0.2"
y.dy=z
z=this.f
y=W.aa(null)
y.value="0.0"
z.fr=y
y=this.f
z=W.aa(null)
z.value="0.0"
y.fx=z
z=this.f
y=W.aa(null)
y.value="-5.0"
z.fy=y
y=this.f
z=W.aa(null)
z.value="0.8"
y.go=z
z=this.f
y=W.aa(null)
y.value="0.8"
z.id=y
y=this.f
z=W.aa(null)
z.value="0.8"
y.k1=z
z=this.f
y=W.aa(null)
y.checked=!0
z.ch=y
y=this.f
z=W.aa(null)
z.checked=!0
y.cx=z
V.cl("macbook.json").I(new V.hd(this),null)
z=V.da('      {\n        "vertexPositions": [\n           0.580687, 0.659, 0.813106,\n          -0.580687, 0.659, 0.813107,\n           0.580687, 0.472, 0.113121,\n          -0.580687, 0.472, 0.113121\n        ],\n        "vertexTextureCoords": [\n          1.0, 1.0,\n          0.0, 1.0,\n          1.0, 0.0,\n          0.0, 0.0\n        ],\n        "vertexNormals": [\n          0.000000, -0.965926, 0.258819,\n          0.000000, -0.965926, 0.258819,\n          0.000000, -0.965926, 0.258819,\n          0.000000, -0.965926, 0.258819\n        ]\n      }\n    ')
z.f=!0
this.d=z
z=[P.e]
z=V.T("          precision mediump float;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n          uniform vec3 uMaterialAmbientColor;\n          uniform vec3 uMaterialDiffuseColor;\n          uniform vec3 uMaterialSpecularColor;\n          uniform float uMaterialShininess;\n          uniform vec3 uMaterialEmissiveColor;\n      \n          uniform bool uShowSpecularHighlights;\n          uniform bool uUseTextures;\n      \n          uniform vec3 uAmbientLightingColor;\n      \n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingDiffuseColor;\n          uniform vec3 uPointLightingSpecularColor;\n      \n          uniform sampler2D uSampler;\n      \n      \n          void main(void) {\n              vec3 ambientLightWeighting = uAmbientLightingColor;\n      \n              vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n              vec3 normal = normalize(vTransformedNormal);\n      \n              vec3 specularLightWeighting = vec3(0.0, 0.0, 0.0);\n              if (uShowSpecularHighlights) {\n                  vec3 eyeDirection = normalize(-vPosition.xyz);\n                  vec3 reflectionDirection = reflect(-lightDirection, normal);\n      \n                  float specularLightBrightness = pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);\n                  specularLightWeighting = uPointLightingSpecularColor * specularLightBrightness;\n              }\n      \n              float diffuseLightBrightness = max(dot(normal, lightDirection), 0.0);\n              vec3 diffuseLightWeighting = uPointLightingDiffuseColor * diffuseLightBrightness;\n      \n              vec3 materialAmbientColor = uMaterialAmbientColor;\n              vec3 materialDiffuseColor = uMaterialDiffuseColor;\n              vec3 materialSpecularColor = uMaterialSpecularColor;\n              vec3 materialEmissiveColor = uMaterialEmissiveColor;\n              float alpha = 1.0;\n              if (uUseTextures) {\n                  vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n                  materialAmbientColor = materialAmbientColor * textureColor.rgb;\n                  materialDiffuseColor = materialDiffuseColor * textureColor.rgb;\n                  materialEmissiveColor = materialEmissiveColor * textureColor.rgb;\n                  alpha = textureColor.a;\n              }\n              gl_FragColor = vec4(\n                  materialAmbientColor * ambientLightWeighting\n                  + materialDiffuseColor * diffuseLightWeighting\n                  + materialSpecularColor * specularLightWeighting\n                  + materialEmissiveColor,\n                  alpha\n              );\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n      \n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n          void main(void) {\n              vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * vPosition;\n              vTextureCoord = aTextureCoord;\n              vTransformedNormal = uNMatrix * aVertexNormal;\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uUseTextures","uMaterialAmbientColor","uMaterialDiffuseColor","uMaterialSpecularColor","uMaterialShininess","uMaterialEmissiveColor","uPointLightingDiffuseColor","uPointLightingLocation","uPointLightingSpecularColor","uShowSpecularHighlights","uSampler","uAmbientLightingColor"],z))
this.b=z
y=$.a;(y&&C.a).L(y,z.c)
z=$.a;(z&&C.a).G(z,2929)
z=$.a.createFramebuffer()
this.r=z
y=$.a;(y&&C.a).aB(y,36160,z)
z=$.a.createTexture()
this.x=z
y=$.a;(y&&C.a).q(y,3553,z)
z=$.a;(z&&C.a).S(z,3553,10240,9729)
z=$.a;(z&&C.a).S(z,3553,10241,9985)
z=$.a;(z&&C.a).aw(z,3553)
z=$.a;(z&&C.a).bG(z,3553,0,6408,512,512,0,6408,5121,null)
z=$.a.createRenderbuffer()
this.y=z
y=$.a;(y&&C.a).bv(y,36161,z)
z=$.a;(z&&C.a).dm(z,36161,33189,512,512)
z=$.a;(z&&C.a).da(z,36160,36064,3553,this.x,0)
z=$.a;(z&&C.a).d9(z,36160,36096,36161,this.y)
z=$.a;(z&&C.a).q(z,3553,null)
z=$.a;(z&&C.a).bv(z,36161,null)
z=$.a;(z&&C.a).aB(z,36160,null)},
M:function(a,b,c){var z,y,x,w
if(this.c==null)return
z=$.a;(z&&C.a).aB(z,36160,this.r)
this.f.M(512,512,1.66)
z=$.a;(z&&C.a).q(z,3553,this.x)
z=$.a;(z&&C.a).aw(z,3553)
z=$.a;(z&&C.a).q(z,3553,null)
z=$.a;(z&&C.a).aB(z,36160,null)
z=$.a;(z&&C.a).L(z,this.b.c)
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
z.A(0,H.c([0,-0.4,-2.2],[P.E]))
z.N(this.e*0.017453292519943295)
z.a1(-1.5707963267948966)
z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uShowSpecularHighlights"),"$isf"),1)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingLocation"),"$isf"),-1,2,-1)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uAmbientLightingColor"),"$isf"),0.2,0.2,0.2)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingDiffuseColor"),"$isf"),0.8,0.8,0.8)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uPointLightingSpecularColor"),"$isf"),0.8,0.8,0.8)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uMaterialAmbientColor"),"$isf"),1,1,1)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uMaterialDiffuseColor"),"$isf"),1,1,1)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uMaterialSpecularColor"),"$isf"),1.5,1.5,1.5)
z=$.a;(z&&C.a).aI(z,H.b(this.b.b.h(0,"uMaterialShininess"),"$isf"),5)
z=$.a;(z&&C.a).p(z,H.b(this.b.b.h(0,"uMaterialEmissiveColor"),"$isf"),0,0,0)
z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uUseTextures"),"$isf"),0)
z=this.c
y=H.v(this.b.a.h(0,"aVertexPosition"))
x=H.v(this.b.a.h(0,"aVertexNormal"))
w=this.gE()
z.X(H.v(this.b.a.h(0,"aTextureCoord")),x,w,y)
y=$.a;(y&&C.a).p(y,H.b(this.b.b.h(0,"uMaterialAmbientColor"),"$isf"),0,0,0)
y=$.a;(y&&C.a).p(y,H.b(this.b.b.h(0,"uMaterialDiffuseColor"),"$isf"),0,0,0)
y=$.a;(y&&C.a).p(y,H.b(this.b.b.h(0,"uMaterialSpecularColor"),"$isf"),0.5,0.5,0.5)
y=$.a;(y&&C.a).aI(y,H.b(this.b.b.h(0,"uMaterialShininess"),"$isf"),20)
y=$.a;(y&&C.a).p(y,H.b(this.b.b.h(0,"uMaterialEmissiveColor"),"$isf"),1.5,1.5,1.5)
y=$.a;(y&&C.a).v(y,H.b(this.b.b.h(0,"uUseTextures"),"$isf"),1)
y=$.a;(y&&C.a).W(y,33984)
y=$.a;(y&&C.a).q(y,3553,this.x)
y=$.a;(y&&C.a).v(y,H.b(this.b.b.h(0,"uSampler"),"$isf"),0)
y=this.d
x=H.v(this.b.a.h(0,"aVertexPosition"))
z=H.v(this.b.a.h(0,"aVertexNormal"))
y.X(H.v(this.b.a.h(0,"aTextureCoord")),z,w,x)
x=$.$get$A()
if(0>=x.length)return H.j(x,-1)
$.i=x.pop()},
H:[function(){var z,y
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)
y=$.i.ab()
y.ac()
z=$.a;(z&&C.a).ad(z,H.b(this.b.b.h(0,"uNMatrix"),"$isf"),!1,y.a)},"$0","gE",0,0,1],
J:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
this.e=this.e-0.005*(b-z)}this.a=b
this.f.J(0,b)},
K:function(){if($.$get$a3().B(0,65))--this.e
if($.$get$a3().B(0,68))++this.e
this.f.K()},
n:{
hc:function(){var z=new V.hb(0,0)
z.c7()
return z}}},
hd:{"^":"d:11;a",
$1:function(a){H.b(a,"$isaU")
P.a5("macbook: "+H.n(a))
this.a.c=a}},
he:{"^":"W;0b,0c,0d,0e,0f,a",
M:function(a,b,c){var z,y
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=[P.E]
$.i.A(0,H.c([-1.5,0,-7],z))
y=$.a;(y&&C.a).k(y,34962,this.c)
y=$.a;(y&&C.a).D(y,this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
y=$.a;(y&&C.a).k(y,34962,this.e)
y=$.a;(y&&C.a).D(y,this.b.a.h(0,"aVertexColor"),4,5126,!1,0,0)
this.H()
y=$.a;(y&&C.a).a4(y,4,0,3)
$.i.A(0,H.c([3,0,0],z))
z=$.a;(z&&C.a).k(z,34962,this.d)
z=$.a;(z&&C.a).D(z,this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
z=$.a;(z&&C.a).k(z,34962,this.f)
z=$.a;(z&&C.a).D(z,this.b.a.h(0,"aVertexColor"),4,5126,!1,0,0)
this.H()
z=$.a;(z&&C.a).a4(z,5,0,4)
z=$.$get$A()
if(0>=z.length)return H.j(z,-1)
$.i=z.pop()},
H:function(){var z=$.a;(z&&C.a).t(z,this.b.b.h(0,"uPMatrix"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,this.b.b.h(0,"uMVMatrix"),!1,$.i.a)},
J:function(a,b){},
K:function(){}},
hf:{"^":"W;0b,0c,0d,0e,0f,r,x,a",
M:function(a,b,c){var z,y
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=[P.E]
$.i.A(0,H.c([-1.5,0,-7],z))
y=$.$get$A();(y&&C.c).m(y,new V.K(new Float32Array(H.w($.i.a))))
$.i.N(this.r*0.017453292519943295)
y=$.a;(y&&C.a).k(y,34962,this.c)
y=$.a;(y&&C.a).D(y,this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
y=$.a;(y&&C.a).k(y,34962,this.e)
y=$.a;(y&&C.a).D(y,this.b.a.h(0,"aVertexColor"),4,5126,!1,0,0)
this.H()
y=$.a;(y&&C.a).a4(y,4,0,3)
y=$.$get$A()
if(0>=y.length)return H.j(y,-1)
y=y.pop()
$.i=y
y.A(0,H.c([3,0,0],z))
$.i.a1(this.x*0.017453292519943295)
z=$.a;(z&&C.a).k(z,34962,this.d)
z=$.a;(z&&C.a).D(z,this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
z=$.a;(z&&C.a).k(z,34962,this.f)
z=$.a;(z&&C.a).D(z,this.b.a.h(0,"aVertexColor"),4,5126,!1,0,0)
this.H()
z=$.a;(z&&C.a).a4(z,5,0,4)
z=$.$get$A()
if(0>=z.length)return H.j(z,-1)
$.i=z.pop()},
H:function(){var z=$.a;(z&&C.a).t(z,this.b.b.h(0,"uPMatrix"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,this.b.b.h(0,"uMVMatrix"),!1,$.i.a)},
J:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
y=b-z
this.r=this.r+90*y/1000
this.x=this.x+75*y/1000}this.a=b},
K:function(){}},
hg:{"^":"W;0b,c,d,e,f,r,x,y,a",
M:function(a,b,c){var z,y,x,w,v,u,t
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=[P.E]
$.i.A(0,H.c([-1.5,0,-8],z))
$.i.a1(this.r*0.017453292519943295).N(this.x*0.017453292519943295)
y=$.$get$A();(y&&C.c).m(y,new V.K(new Float32Array(H.w($.i.a))))
y=[P.M]
$.i.aH(0,this.e*0.017453292519943295,H.c([0,1,0],y))
x=this.c
w=this.b.a.h(0,"aVertexPosition")
v=H.v(this.b.a.h(0,"aVertexColor"))
u=H.m(this.gE(),{func:1})
H.v(w)
if(w!=null){t=$.a;(t&&C.a).k(t,34962,x.a)
t=$.a;(t&&C.a).D(t,w,3,5126,!1,0,0)}if(v!=null){w=$.a;(w&&C.a).k(w,34962,x.d)
x=$.a;(x&&C.a).D(x,v,4,5126,!1,0,0)}u.$0()
x=$.a;(x&&C.a).a4(x,4,0,18)
x=$.$get$A()
if(0>=x.length)return H.j(x,-1)
x=x.pop()
$.i=x
x.A(0,H.c([3,0,0],z))
$.i.aH(0,this.f*0.017453292519943295,H.c([1,1,1],y))
y=this.d
z=this.b.a.h(0,"aVertexPosition")
y.d6(this.b.a.h(0,"aVertexColor"),u,z)
z=$.$get$A()
if(0>=z.length)return H.j(z,-1)
$.i=z.pop()},
H:[function(){var z=$.a;(z&&C.a).t(z,this.b.b.h(0,"uPMatrix"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,this.b.b.h(0,"uMVMatrix"),!1,$.i.a)},"$0","gE",0,0,35],
J:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
y=b-z
this.e=this.e+90*y/1000
this.f=this.f-75*y/1000}this.a=b},
K:function(){V.ao(new V.hh(this),new V.hi(this),new V.hj(this),new V.hk(this))}},
hk:{"^":"d:0;a",
$0:function(){var z=this.a.x-=0.5
return z}},
hh:{"^":"d:0;a",
$0:function(){var z=this.a.x+=0.5
return z}},
hi:{"^":"d:0;a",
$0:function(){var z=this.a.r-=0.5
return z}},
hj:{"^":"d:0;a",
$0:function(){var z=this.a.r+=0.5
return z}},
hl:{"^":"W;0b,0c,0d,e,f,r,a",
c8:function(){var z,y
this.d=V.aS()
V.U("nehe.gif",new V.hn(this))
z=[P.e]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec2 vTextureCoord;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n          }\n        ",H.c(["aVertexPosition","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uSampler"],z))
this.b=z
y=$.a;(y&&C.a).L(y,z.c)},
M:function(a,b,c){var z,y
if(this.c==null)return
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
z.A(0,H.c([0,0,-5],[P.E]))
z.a1(this.e*0.017453292519943295)
z.N(this.f*0.017453292519943295)
z.bE(this.r*0.017453292519943295)
z=$.a;(z&&C.a).W(z,33984)
z=$.a;(z&&C.a).q(z,3553,this.c)
z=$.a;(z&&C.a).v(z,H.b(this.b.b.h(0,"uSampler"),"$isf"),0)
z=this.d
y=this.b.a.h(0,"aVertexPosition")
z.aD(this.b.a.h(0,"aTextureCoord"),this.gE(),y)
y=$.$get$A()
if(0>=y.length)return H.j(y,-1)
$.i=y.pop()},
H:[function(){var z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)},"$0","gE",0,0,1],
J:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
z=90*(b-z)/1000
this.e=this.e+z
this.f+=z
this.r+=z}this.a=b},
K:function(){V.ao(new V.ho(this),new V.hp(this),new V.hq(this),new V.hr(this))},
n:{
hm:function(){var z=new V.hl(0,0,0,0)
z.c8()
return z}}},
hn:{"^":"d:6;a",
$2:function(a,b){var z=$.a;(z&&C.a).q(z,3553,a)
z=$.a;(z&&C.a).av(z,37440,1)
z=$.a;(z&&C.a).ah(z,3553,0,6408,6408,5121,b)
z=$.a;(z&&C.a).S(z,3553,10240,9728)
z=$.a;(z&&C.a).S(z,3553,10241,9728)
z=$.a;(z&&C.a).q(z,3553,null)
this.a.c=a}},
hr:{"^":"d:0;a",
$0:function(){var z=this.a.f-=0.5
return z}},
ho:{"^":"d:0;a",
$0:function(){var z=this.a.f+=0.5
return z}},
hp:{"^":"d:0;a",
$0:function(){var z=this.a.e-=0.5
return z}},
hq:{"^":"d:0;a",
$0:function(){var z=this.a.e+=0.5
return z}},
hs:{"^":"W;0b,c,0d,e,f,r,x,y,z,a",
c9:function(){var z,y
this.d=V.aS()
z=[P.e]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec2 vTextureCoord;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n          }\n        ",H.c(["aVertexPosition","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uSampler"],z))
this.b=z
y=$.a;(y&&C.a).L(y,z.c)
V.U("crate.gif",new V.hu(this))
z=W.aC
W.af(window,"keydown",H.m(new V.hv(this),{func:1,ret:-1,args:[z]}),!1,z)},
M:function(a,b,c){var z,y,x
z=this.c
if(z.length!==3)return
y=$.a;(y&&C.a).T(y,0,0,a,b)
y=$.a;(y&&C.a).O(y,16640)
y=$.a;(y&&C.a).G(y,2929)
y=$.a;(y&&C.a).P(y,3042)
$.I=V.X(45,c,0.1,100)
y=$.$get$A();(y&&C.c).m(y,new V.K(new Float32Array(H.w($.i.a))))
y=$.i
y.A(0,H.c([0,0,this.z],[P.E]))
y.a1(this.x*0.017453292519943295)
y.N(this.y*0.017453292519943295)
y=$.a;(y&&C.a).W(y,33984)
y=$.a
x=this.e
if(x>=z.length)return H.j(z,x);(y&&C.a).q(y,3553,z[x])
x=$.a;(x&&C.a).v(x,H.b(this.b.b.h(0,"uSampler"),"$isf"),0)
x=this.d
z=this.b.a.h(0,"aVertexPosition")
x.aD(this.b.a.h(0,"aTextureCoord"),this.gE(),z)
z=$.$get$A()
if(0>=z.length)return H.j(z,-1)
$.i=z.pop()},
H:[function(){var z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)},"$0","gE",0,0,1],
J:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
y=b-z
this.x=this.x+this.f*y/1000
this.y=this.y+this.r*y/1000}this.a=b},
K:function(){V.ao(new V.hw(this),new V.hx(this),new V.hy(this),new V.hz(this))
if($.$get$a3().B(0,33))this.z-=0.05
if($.$get$a3().B(0,34))this.z+=0.05},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,"    <h2>Controls:</h2>\n\n    <ul>\n        <li><code>Page Up</code>/<code>Page Down</code> to zoom out/in\n        <li>Cursor keys: make the cube rotate (the longer you hold down a cursor key, the more it accelerates)\n        <li><code>F</code> to toggle through three different kinds of texture filters\n    </ul>\n    ",z)},
n:{
ht:function(){var z=new V.hs(H.c([],[P.G]),0,0,0,0,0,-5,0)
z.c9()
return z}}},
hu:{"^":"d:6;a",
$2:function(a,b){var z,y
z=$.a;(z&&C.a).av(z,37440,1)
z=this.a.c
C.c.m(z,a)
y=$.a
if(0>=z.length)return H.j(z,0);(y&&C.a).q(y,3553,z[0])
y=$.a;(y&&C.a).ah(y,3553,0,6408,6408,5121,b)
y=$.a;(y&&C.a).S(y,3553,10240,9728)
y=$.a;(y&&C.a).S(y,3553,10241,9728)
C.c.m(z,$.a.createTexture())
y=$.a
if(1>=z.length)return H.j(z,1);(y&&C.a).q(y,3553,z[1])
y=$.a;(y&&C.a).ah(y,3553,0,6408,6408,5121,b)
y=$.a;(y&&C.a).S(y,3553,10240,9729)
y=$.a;(y&&C.a).S(y,3553,10241,9729)
C.c.m(z,$.a.createTexture())
y=$.a
if(2>=z.length)return H.j(z,2);(y&&C.a).q(y,3553,z[2])
z=$.a;(z&&C.a).ah(z,3553,0,6408,6408,5121,b)
z=$.a;(z&&C.a).S(z,3553,10240,9729)
z=$.a;(z&&C.a).S(z,3553,10241,9985)
z=$.a;(z&&C.a).aw(z,3553)
z=$.a;(z&&C.a).q(z,3553,null)}},
hv:{"^":"d:12;a",
$1:function(a){var z
if(H.b(a,"$isaC").keyCode===70){z=this.a
z.e=(z.e+1)%3}}},
hz:{"^":"d:0;a",
$0:function(){return--this.a.r}},
hw:{"^":"d:0;a",
$0:function(){return++this.a.r}},
hx:{"^":"d:0;a",
$0:function(){return--this.a.f}},
hy:{"^":"d:0;a",
$0:function(){return++this.a.f}},
hA:{"^":"W;0b,0c,0d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a",
ca:function(){var z,y
this.b=V.aS()
V.U("crate.gif",V.a8()).I(new V.hC(this),P.G)
z=[P.e]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n\n          uniform vec3 uAmbientColor;\n\n          uniform vec3 uLightingDirection;\n          uniform vec3 uDirectionalColor;\n\n          uniform bool uUseLighting;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n\n              if (!uUseLighting) {\n                  vLightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 transformedNormal = uNMatrix * aVertexNormal;\n                  float directionalLightWeighting = max(dot(transformedNormal, uLightingDirection), 0.0);\n                  vLightWeighting = uAmbientColor + uDirectionalColor * directionalLightWeighting;\n              }\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uSampler","uAmbientColor","uLightingDirection","uDirectionalColor","uUseLighting"],z))
this.c=z
y=$.a;(y&&C.a).L(y,z.c)},
H:[function(){var z,y
z=$.a;(z&&C.a).t(z,H.b(this.c.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.c.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)
y=$.i.ab()
y.ac()
z=$.a;(z&&C.a).ad(z,H.b(this.c.b.h(0,"uNMatrix"),"$isf"),!1,y.a)},"$0","gE",0,0,1],
M:function(a,b,c){var z,y,x,w
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
z=$.a;(z&&C.a).G(z,2929)
z=$.a;(z&&C.a).P(z,3042)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
z.A(0,H.c([0,0,this.y],[P.E]))
z.a1(this.r*0.017453292519943295)
z.N(this.x*0.017453292519943295)
z=$.a
y=H.b(this.c.b.h(0,"uUseLighting"),"$isf")
x=this.z.checked?1:0;(z&&C.a).v(z,y,x)
if(this.z.checked){z=$.a;(z&&C.a).p(z,H.b(this.c.b.h(0,"uAmbientColor"),"$isf"),P.r(this.Q.value,null),P.r(this.ch.value,null),P.r(this.cx.value,null))
w=V.bU(P.r(this.cy.value,null),P.r(this.db.value,null),P.r(this.dx.value,null)).aY(0).aK(0,-1)
z=$.a;(z&&C.a).b1(z,H.b(this.c.b.h(0,"uLightingDirection"),"$isf"),w.a)
z=$.a;(z&&C.a).p(z,H.b(this.c.b.h(0,"uDirectionalColor"),"$isf"),P.r(this.dy.value,null),P.r(this.fr.value,null),P.r(this.fx.value,null))}z=$.a;(z&&C.a).W(z,33984)
z=$.a;(z&&C.a).q(z,3553,this.d)
z=$.a;(z&&C.a).v(z,H.b(this.c.b.h(0,"uSampler"),"$isf"),0)
z=this.b
y=this.c.a.h(0,"aVertexPosition")
z.X(this.c.a.h(0,"aTextureCoord"),this.c.a.h(0,"aVertexNormal"),this.gE(),y)
y=$.$get$A()
if(0>=y.length)return H.j(y,-1)
$.i=y.pop()},
J:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
y=b-z
this.r=this.r+this.e*y/1000
this.x=this.x+this.f*y/1000}this.a=b},
K:function(){V.ao(new V.hD(this),new V.hE(this),new V.hF(this),new V.hG(this))
if($.$get$a3().B(0,33))this.y-=0.05
if($.$get$a3().B(0,34))this.y+=0.05},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,'    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    (Use cursor keys to spin the box and <code>Page Up</code>/<code>Page Down</code> to zoom out/in)\n\n    <br/>\n    <h2>Directional light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Direction:</b>\n            <td>X: <input type="text" id="lightDirectionX" value="-0.25" />\n            <td>Y: <input type="text" id="lightDirectionY" value="-0.25" />\n            <td>Z: <input type="text" id="lightDirectionZ" value="-1.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="directionalR" value="0.8" />\n            <td>G: <input type="text" id="directionalG" value="0.8" />\n            <td>B: <input type="text" id="directionalB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n    ',z)
z=document
this.z=H.b(C.b.i(z,"#lighting"),"$isl")
this.Q=H.b(C.b.i(z,"#ambientR"),"$isl")
this.ch=H.b(C.b.i(z,"#ambientG"),"$isl")
this.cx=H.b(C.b.i(z,"#ambientB"),"$isl")
this.dy=H.b(C.b.i(z,"#directionalR"),"$isl")
this.fr=H.b(C.b.i(z,"#directionalG"),"$isl")
this.fx=H.b(C.b.i(z,"#directionalB"),"$isl")
this.cy=H.b(C.b.i(z,"#lightDirectionX"),"$isl")
this.db=H.b(C.b.i(z,"#lightDirectionY"),"$isl")
this.dx=H.b(C.b.i(z,"#lightDirectionZ"),"$isl")},
n:{
hB:function(){var z=new V.hA(3,-3,0,0,-5,0)
z.ca()
return z}}},
hC:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.d=a
return a}},
hG:{"^":"d:0;a",
$0:function(){return--this.a.f}},
hD:{"^":"d:0;a",
$0:function(){return++this.a.f}},
hE:{"^":"d:0;a",
$0:function(){return--this.a.e}},
hF:{"^":"d:0;a",
$0:function(){return++this.a.e}},
hH:{"^":"W;0b,0c,0d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,a",
cb:function(){var z,y
this.b=V.aS()
V.U("glass.gif",V.a8()).I(new V.hJ(this),P.G)
z=[P.e]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          uniform float uAlpha;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a * uAlpha);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n\n          uniform vec3 uAmbientColor;\n\n          uniform vec3 uLightingDirection;\n          uniform vec3 uDirectionalColor;\n\n          uniform bool uUseLighting;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n\n              if (!uUseLighting) {\n                  vLightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 transformedNormal = uNMatrix * aVertexNormal;\n                  float directionalLightWeighting = max(dot(transformedNormal, uLightingDirection), 0.0);\n                  vLightWeighting = uAmbientColor + uDirectionalColor * directionalLightWeighting;\n              }\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uSampler","uAmbientColor","uLightingDirection","uDirectionalColor","uUseLighting","uAlpha"],z))
this.c=z
y=$.a;(y&&C.a).L(y,z.c)},
H:[function(){var z,y
z=$.a;(z&&C.a).t(z,H.b(this.c.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.c.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)
y=$.i.ab()
y.ac()
z=$.a;(z&&C.a).ad(z,H.b(this.c.b.h(0,"uNMatrix"),"$isf"),!1,y.a)},"$0","gE",0,0,1],
M:function(a,b,c){var z,y,x,w
if(this.d==null)return
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.i
z.A(0,H.c([0,0,this.y],[P.E]))
z.a1(this.r*0.017453292519943295)
z.N(this.x*0.017453292519943295)
z=this.fy.checked
y=$.a
if(z){(y&&C.a).bw(y,770,1)
z=$.a;(z&&C.a).G(z,3042)
z=$.a;(z&&C.a).P(z,2929)
z=$.a
y=H.b(this.c.b.h(0,"uAlpha"),"$isf")
x=H.dl(this.go.value)
if(x==null)x=1;(z&&C.a).aI(z,y,x)}else{(y&&C.a).P(y,3042)
z=$.a;(z&&C.a).G(z,2929)}z=$.a
y=H.b(this.c.b.h(0,"uUseLighting"),"$isf")
x=this.z.checked?1:0;(z&&C.a).v(z,y,x)
if(this.z.checked){z=$.a;(z&&C.a).p(z,H.b(this.c.b.h(0,"uAmbientColor"),"$isf"),P.r(this.Q.value,null),P.r(this.ch.value,null),P.r(this.cx.value,null))
w=V.bU(P.r(this.cy.value,null),P.r(this.db.value,null),P.r(this.dx.value,null)).aY(0).aK(0,-1)
z=$.a;(z&&C.a).b1(z,H.b(this.c.b.h(0,"uLightingDirection"),"$isf"),w.a)
z=$.a;(z&&C.a).p(z,H.b(this.c.b.h(0,"uDirectionalColor"),"$isf"),P.r(this.dy.value,null),P.r(this.fr.value,null),P.r(this.fx.value,null))}z=$.a;(z&&C.a).W(z,33984)
z=$.a;(z&&C.a).q(z,3553,this.d)
z=$.a;(z&&C.a).v(z,H.b(this.c.b.h(0,"uSampler"),"$isf"),0)
z=this.b
y=this.c.a.h(0,"aVertexPosition")
z.X(this.c.a.h(0,"aTextureCoord"),this.c.a.h(0,"aVertexNormal"),this.gE(),y)
y=$.$get$A()
if(0>=y.length)return H.j(y,-1)
$.i=y.pop()},
J:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
y=b-z
this.r=this.r+this.e*y/1000
this.x=this.x+this.f*y/1000}this.a=b},
K:function(){V.ao(new V.hK(this),new V.hL(this),new V.hM(this),new V.hN(this))
if($.$get$a3().B(0,33))this.y-=0.05
if($.$get$a3().B(0,34))this.y+=0.05},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,'    <input type="checkbox" id="blending" checked /> Use blending<br/>\n    Alpha level <input type="text" id="alpha" value="0.5" /><br/>\n\n    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    (Use cursor keys to spin the box and <code>Page Up</code>/<code>Page Down</code> to zoom out/in)\n\n    <br/>\n    <h2>Directional light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Direction:</b>\n            <td>X: <input type="text" id="lightDirectionX" value="-0.25" />\n            <td>Y: <input type="text" id="lightDirectionY" value="-0.25" />\n            <td>Z: <input type="text" id="lightDirectionZ" value="-1.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="directionalR" value="0.8" />\n            <td>G: <input type="text" id="directionalG" value="0.8" />\n            <td>B: <input type="text" id="directionalB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n    ',z)
z=document
this.z=H.b(C.b.i(z,"#lighting"),"$isl")
this.Q=H.b(C.b.i(z,"#ambientR"),"$isl")
this.ch=H.b(C.b.i(z,"#ambientG"),"$isl")
this.cx=H.b(C.b.i(z,"#ambientB"),"$isl")
this.dy=H.b(C.b.i(z,"#directionalR"),"$isl")
this.fr=H.b(C.b.i(z,"#directionalG"),"$isl")
this.fx=H.b(C.b.i(z,"#directionalB"),"$isl")
this.cy=H.b(C.b.i(z,"#lightDirectionX"),"$isl")
this.db=H.b(C.b.i(z,"#lightDirectionY"),"$isl")
this.dx=H.b(C.b.i(z,"#lightDirectionZ"),"$isl")
this.fy=H.b(C.b.i(z,"#blending"),"$isl")
this.go=H.b(C.b.i(z,"#alpha"),"$isl")},
n:{
hI:function(){var z=new V.hH(3,-3,0,0,-5,0)
z.cb()
return z}}},
hJ:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.d=a
return a}},
hN:{"^":"d:0;a",
$0:function(){return--this.a.f}},
hK:{"^":"d:0;a",
$0:function(){return++this.a.f}},
hL:{"^":"d:0;a",
$0:function(){return--this.a.e}},
hM:{"^":"d:0;a",
$0:function(){return++this.a.e}},
hO:{"^":"W;0b,0c,d,e,f,r,0x,a",
cc:function(){var z,y,x,w,v,u,t,s
for(z=this.d,y=[P.E],x=0;x<50;++x){w=x/50
v=$.dr
$.dr=v+1
w=new V.dq(v,w*5,w,0)
w.bD()
v=$.a.createBuffer()
w.Q=v
u=$.a;(u&&C.a).k(u,34962,v)
t=H.c([-1,-1,0,1,-1,0,-1,1,0,1,1,0],y)
v=$.a;(v&&C.a).w(v,34962,new Float32Array(H.w(t)),35044)
v=$.a.createBuffer()
w.ch=v
u=$.a;(u&&C.a).k(u,34962,v)
s=H.c([0,0,1,0,0,1,1,1],y)
v=$.a;(v&&C.a).w(v,34962,new Float32Array(H.w(s)),35044)
C.c.m(z,w)}V.U("star.gif",new V.hQ(this))
z=[P.e]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n\n          uniform sampler2D uSampler;\n\n          uniform vec3 uColor;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = textureColor * vec4(uColor, 1.0);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec2 vTextureCoord;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n          }\n        ",H.c(["aVertexPosition","aTextureCoord"],z),H.c(["uMVMatrix","uPMatrix","uColor","uSampler"],z))
this.b=z
y=$.a;(y&&C.a).L(y,z.c)},
M:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
if(this.c==null)return
z=$.a;(z&&C.a).T(z,0,0,a,b)
z=$.a;(z&&C.a).O(z,16640)
$.I=V.X(45,c,0.1,100)
z=$.$get$A();(z&&C.c).m(z,new V.K(new Float32Array(H.w($.i.a))))
z=$.a;(z&&C.a).bw(z,770,1)
z=$.a;(z&&C.a).P(z,2929)
z=$.a;(z&&C.a).G(z,3042)
z=$.i
y=[P.E]
z.A(0,H.c([0,0,this.r],y))
z.a1(this.e*0.017453292519943295)
z=$.a;(z&&C.a).W(z,33984)
z=$.a;(z&&C.a).q(z,3553,this.c)
z=$.a;(z&&C.a).v(z,this.b.b.h(0,"uSampler"),0)
for(z=this.d,x=z.length,w=this.f,v=this.gE(),u={func:1},t=0;t<z.length;z.length===x||(0,H.aR)(z),++t){s=z[t]
r=this.b.a.h(0,"aVertexPosition")
q=this.b.a.h(0,"aTextureCoord")
p=this.b.b.h(0,"uColor")
o=this.x.checked
n=this.e
H.b(p,"$isf")
H.v(q)
H.m(v,u)
H.v(r)
m=$.$get$A();(m&&C.c).m(m,new V.K(new Float32Array(H.w($.i.a))))
m=$.i
m.N(s.d*0.017453292519943295)
m.A(0,H.c([s.b,0,0],y))
m=$.i
m.N(-s.d*0.017453292519943295)
m.a1(-n*0.017453292519943295)
if(o){o=$.a;(o&&C.a).p(o,p,s.x,s.y,s.z)
s.bA(r,null,q,v)}$.i.bE(w*0.017453292519943295)
o=$.a;(o&&C.a).p(o,p,s.e,s.f,s.r)
s.bA(r,null,q,v)
q=$.$get$A()
if(0>=q.length)return H.j(q,-1)
$.i=q.pop()}z=$.$get$A()
if(0>=z.length)return H.j(z,-1)
$.i=z.pop()},
H:[function(){var z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uPMatrix"),"$isf"),!1,$.I.a)
z=$.a;(z&&C.a).t(z,H.b(this.b.b.h(0,"uMVMatrix"),"$isf"),!1,$.i.a)},"$0","gE",0,0,1],
J:function(a,b){var z,y,x,w,v,u,t
z=this.a
if(z!==0){if(typeof b!=="number")return b.V()
if(typeof z!=="number")return H.R(z)
y=b-z
for(z=this.d,x=z.length,w=0.0006*y,v=0;v<z.length;z.length===x||(0,H.aR)(z),++v){u=z[v]
u.d=u.d+u.c*0.06*y
t=u.b-=w
if(t<0){u.b=t+5
u.bD()}}}this.a=b},
K:function(){V.ao(new V.hR(this),null,null,new V.hS(this))
if($.$get$a3().B(0,33))this.r-=0.1
if($.$get$a3().B(0,34))this.r+=0.1},
a2:function(a){var z=$.P
if(z==null){z=new V.al()
$.P=z}(a&&C.e).a3(a,'    <input type="checkbox" id="twinkle" /> Twinkle<br/>\n    (Use up/down cursor keys to rotate, and <code>Page Up</code>/<code>Page Down</code> to zoom out/in)\n    ',z)
this.x=H.b(C.b.i(document,"#twinkle"),"$isl")},
n:{
hP:function(){var z=new V.hO(H.c([],[V.dq]),90,0,-15,0)
z.cc()
return z}}},
hQ:{"^":"d:6;a",
$2:function(a,b){var z=$.a;(z&&C.a).av(z,37440,1)
z=$.a;(z&&C.a).q(z,3553,a)
z=$.a;(z&&C.a).ah(z,3553,0,6408,6408,5121,b)
z=$.a;(z&&C.a).S(z,3553,10240,9729)
z=$.a;(z&&C.a).S(z,3553,10241,9729)
z=$.a;(z&&C.a).q(z,3553,null)
this.a.c=a}},
hS:{"^":"d:0;a",
$0:function(){var z=this.a.e+=2
return z}},
hR:{"^":"d:0;a",
$0:function(){var z=this.a.e-=2
return z}},
iJ:{"^":"h;"},
iF:{"^":"h;a",
sbI:function(a,b){C.l.U(this.a,0,b)
return b},
sbJ:function(a,b){C.l.U(this.a,1,b)
return b},
sbK:function(a,b){C.l.U(this.a,2,b)
return b},
aY:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
if(v===0)throw H.k(new V.iJ())
return V.bU(z[0]/v,z[1]/v,z[2]/v)},
aK:function(a,b){var z=this.a
this.sbI(0,z[0]*b)
this.sbJ(0,z[1]*b)
this.sbK(0,z[2]*b)
return this},
l:function(a){var z=this.a
return"Vector3("+H.n(z[0])+","+H.n(z[1])+","+H.n(z[2])+")"},
n:{
bU:function(a,b,c){var z=new V.iF(new Float32Array(3))
z.sbI(0,a)
z.sbJ(0,b)
z.sbK(0,c)
return z}}},
K:{"^":"h;a",
l:function(a){var z,y,x,w,v,u,t,s,r,q,p
x=[P.e]
w=H.c([],x)
for(v=this.a,u=v.length,t=0;t<4;++t){s=H.c([],x)
for(r=0;r<4;++r){q=t+r*4
if(q>=u)return H.j(v,q)
z=v[q]
if(J.cM(z)<1e-16)z=0
y=null
try{y=J.cP(z,4)}catch(p){H.a6(p)
y=J.aw(z)}C.c.m(s,y)}C.c.m(w,"| "+C.c.aF(s,", ")+" |")}return"Matrix4:\n"+C.c.aF(w,"\n")},
aX:function(){var z,y,x
for(z=this.a,y=z.length,x=0;x<16;++x){if(x>=y)return H.j(z,x)
z[x]=0}if(0>=y)return H.j(z,0)
z[0]=1
if(5>=y)return H.j(z,5)
z[5]=1
if(10>=y)return H.j(z,10)
z[10]=1
if(15>=y)return H.j(z,15)
z[15]=1},
a1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x.length
if(4>=w)return H.j(x,4)
v=x[4]
if(8>=w)return H.j(x,8)
u=x[8]
t=x[5]
if(9>=w)return H.j(x,9)
s=x[9]
r=x[6]
if(10>=w)return H.j(x,10)
q=x[10]
p=x[7]
if(11>=w)return H.j(x,11)
w=x[11]
o=-y
x[4]=v*z+u*y
x[5]=t*z+s*y
x[6]=r*z+q*y
x[7]=p*z+w*y
x[8]=v*o+u*z
x[9]=t*o+s*z
x[10]=r*o+q*z
x[11]=p*o+w*z
return this},
N:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x.length
if(0>=w)return H.j(x,0)
v=x[0]
if(8>=w)return H.j(x,8)
u=x[8]
t=-y
s=x[1]
if(9>=w)return H.j(x,9)
r=x[9]
q=x[2]
if(10>=w)return H.j(x,10)
p=x[10]
o=x[3]
if(11>=w)return H.j(x,11)
w=x[11]
x[0]=v*z+u*t
x[1]=s*z+r*t
x[2]=q*z+p*t
x[3]=o*z+w*t
x[8]=v*y+u*z
x[9]=s*y+r*z
x[10]=q*y+p*z
x[11]=o*y+w*z
return this},
bE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x.length
if(0>=w)return H.j(x,0)
v=x[0]
if(4>=w)return H.j(x,4)
u=x[4]
t=x[1]
if(5>=w)return H.j(x,5)
s=x[5]
r=x[2]
if(6>=w)return H.j(x,6)
q=x[6]
p=x[3]
if(7>=w)return H.j(x,7)
w=x[7]
o=-y
x[0]=v*z+u*y
x[1]=t*z+s*y
x[2]=r*z+q*y
x[3]=p*z+w*y
x[4]=v*o+u*z
x[5]=t*o+s*z
x[6]=r*o+q*z
x[7]=p*o+w*z
return this},
A:function(a,b){var z,y,x,w,v,u,t,s
H.Y(b,"$iso",[P.E],"$aso")
z=b[0]
y=b[1]
x=b[2]
w=this.a
v=w.length
if(0>=v)return H.j(w,0)
u=w[0]
if(4>=v)return H.j(w,4)
t=w[4]
if(8>=v)return H.j(w,8)
s=w[8]
if(12>=v)return H.j(w,12)
w[12]=u*z+t*y+s*x+w[12]
s=w[1]
t=w[5]
u=w[9]
if(13>=v)return H.j(w,13)
w[13]=s*z+t*y+u*x+w[13]
u=w[2]
t=w[6]
s=w[10]
if(14>=v)return H.j(w,14)
w[14]=u*z+t*y+s*x+w[14]
s=w[3]
t=w[7]
u=w[11]
if(15>=v)return H.j(w,15)
w[15]=s*z+t*y+u*x+w[15]
return this},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=new Float32Array(16)
y=this.a
x=b.a
for(w=z.length,v=y.length,u=x.length,t=0;t<4;++t)for(s=0;s<4;++s)for(r=s*4,q=t+r,p=0;p<4;++p){if(q>=w)return H.j(z,q)
o=z[q]
n=t+p*4
if(n>=v)return H.j(y,n)
n=y[n]
m=p+r
if(m>=u)return H.j(x,m)
z[q]=o+n*x[m]}return new V.K(z)},
ab:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.a
y=z.length
if(0>=y)return H.j(z,0)
x=z[0]
if(1>=y)return H.j(z,1)
w=z[1]
if(2>=y)return H.j(z,2)
v=z[2]
if(4>=y)return H.j(z,4)
u=z[4]
if(5>=y)return H.j(z,5)
t=z[5]
if(6>=y)return H.j(z,6)
s=z[6]
if(8>=y)return H.j(z,8)
r=z[8]
if(9>=y)return H.j(z,9)
q=z[9]
if(10>=y)return H.j(z,10)
p=z[10]
o=p*t-s*q
z=-p
n=z*u+s*r
m=q*u-t*r
l=x*o+w*n+v*m
if(l===0)return
k=1/l
y=new Float32Array(9)
y[0]=o*k
y[1]=(z*w+v*q)*k
y[2]=(s*w-v*t)*k
y[3]=n*k
y[4]=(p*x-v*r)*k
y[5]=(-s*x+v*u)*k
y[6]=m*k
y[7]=(-q*x+w*r)*k
y[8]=(t*x-w*u)*k
return new V.i0(y)},
aH:function(a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
H.Y(a5,"$iso",[P.M],"$aso")
z=a5[0]
y=a5[1]
x=a5[2]
w=Math.sqrt(z*z+y*y+x*x)
if(Math.abs(w)<0.000001)throw H.k("length of normal vector <~ 0.000001")
if(w!==1){w=1/w
z*=w
y*=w
x*=w}v=Math.cos(a4)
u=Math.sin(a4)
t=1-v
s=z*z*t+v
r=x*u
q=z*y*t-r
p=y*u
o=z*x*t+p
n=y*z*t+r
m=y*y*t+v
r=z*u
l=y*x*t-r
k=x*z*t-p
j=x*y*t+r
i=x*x*t+v
r=this.a
p=r.length
if(0>=p)return H.j(r,0)
h=r[0]
if(4>=p)return H.j(r,4)
g=r[4]
if(8>=p)return H.j(r,8)
f=r[8]
e=r[1]
d=r[5]
if(9>=p)return H.j(r,9)
c=r[9]
b=r[2]
a=r[6]
if(10>=p)return H.j(r,10)
a0=r[10]
a1=r[3]
a2=r[7]
if(11>=p)return H.j(r,11)
p=r[11]
r[0]=h*s+g*n+f*k
r[1]=e*s+d*n+c*k
r[2]=b*s+a*n+a0*k
r[3]=a1*s+a2*n+p*k
r[4]=h*q+g*m+f*j
r[5]=e*q+d*m+c*j
r[6]=b*q+a*m+a0*j
r[7]=a1*q+a2*m+p*j
r[8]=h*o+g*l+f*i
r[9]=e*o+d*l+c*i
r[10]=b*o+a*l+a0*i
r[11]=a1*o+a2*l+p*i
return this},
n:{
X:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q
z=Math.tan(a*0.017453292519943295*0.5)*c
y=z*b
x=-y
w=-z
v=new Float32Array(16)
u=2*c
t=y-x
s=z-w
r=d-c
q=v.length
if(0>=q)return H.j(v,0)
v[0]=u/t
if(5>=q)return H.j(v,5)
v[5]=u/s
if(8>=q)return H.j(v,8)
v[8]=(y+x)/t
if(9>=q)return H.j(v,9)
v[9]=(z+w)/s
if(10>=q)return H.j(v,10)
v[10]=-(d+c)/r
if(11>=q)return H.j(v,11)
v[11]=-1
if(14>=q)return H.j(v,14)
v[14]=-(u*d)/r
return new V.K(v)}}},
i0:{"^":"h;a",
l:function(a){var z,y,x,w,v,u,t,s,r,q
x=[P.e]
w=H.c([],x)
for(v=this.a,u=0;u<3;++u){t=H.c([],x)
for(s=0;s<3;++s){r=u+s*3
if(r>=9)return H.j(v,r)
z=v[r]
if(J.cM(z)<1e-16)z=0
y=null
try{y=J.cP(z,4)}catch(q){H.a6(q)
y=J.aw(z)}C.c.m(t,y)}C.c.m(w,"| "+C.c.aF(t,", ")+" |")}return"Matrix3:\n"+C.c.aF(w,"\n")},
ac:function(){var z,y,x,w
z=this.a
y=z[3]
x=z[6]
w=z[7]
z[3]=z[1]
z[6]=z[2]
z[1]=y
z[7]=z[5]
z[2]=x
z[5]=w}},
ig:{"^":"h;0a,0b,0c,0d"},
is:{"^":"h;a,b,c,0d,0e,0f,0r,0x",
cd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=P.E
y=[z]
x=H.c([],y)
w=H.c([],y)
v=H.c([],y)
y=P.S
u=H.c([],[y])
for(t=this.a,s=this.b,z=[z],r=this.c,q=0;q<=t;++q){p=q*3.141592653589793/t
o=Math.sin(p)
n=Math.cos(p)
for(m=1-q/t,l=r*n,k=0;k<=s;++k){j=k*2*3.141592653589793/s
i=Math.sin(j)
h=Math.cos(j)*o
g=i*o
C.c.a_(w,H.c([h,n,g],z))
C.c.a_(v,H.c([1-k/s,m],z))
C.c.a_(x,H.c([r*h,l,r*g],z))}}for(z=s+1,y=[y],q=0;q<t;++q)for(r=q*z,k=0;k<s;++k){f=r+k
e=f+s+1
l=f+1
C.c.a_(u,H.c([f,e,l,e,e+1,l],y))}this.x=u.length
z=$.a.createBuffer()
this.e=z
y=$.a;(y&&C.a).k(y,34962,z)
z=$.a;(z&&C.a).w(z,34962,new Float32Array(H.w(w)),35044)
z=$.a.createBuffer()
this.f=z
y=$.a;(y&&C.a).k(y,34962,z)
z=$.a;(z&&C.a).w(z,34962,new Float32Array(H.w(v)),35044)
z=$.a.createBuffer()
this.d=z
y=$.a;(y&&C.a).k(y,34962,z)
z=$.a;(z&&C.a).w(z,34962,new Float32Array(H.w(x)),35044)
z=$.a.createBuffer()
this.r=z
y=$.a;(y&&C.a).k(y,34963,z)
z=$.a;(z&&C.a).w(z,34963,new Uint16Array(H.w(u)),35044)},
X:function(a,b,c,d){var z
H.m(c,{func:1})
if(d!=null){z=$.a;(z&&C.a).k(z,34962,this.d)
z=$.a;(z&&C.a).D(z,d,3,5126,!1,0,0)}if(b!=null){z=$.a;(z&&C.a).k(z,34962,this.e)
z=$.a;(z&&C.a).D(z,b,3,5126,!1,0,0)}if(a!=null){z=$.a;(z&&C.a).k(z,34962,this.f)
z=$.a;(z&&C.a).k(z,34962,this.f)
z=$.a;(z&&C.a).D(z,a,2,5126,!1,0,0)}c.$0()
z=$.a;(z&&C.a).k(z,34963,this.r)
z=$.a;(z&&C.a).aW(z,4,this.x,5123,0)},
n:{
bS:function(a,b,c){var z=new V.is(a,b,c)
z.cd(a,b,c)
return z}}},
dq:{"^":"h;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bD:function(){this.e=$.$get$aW().ao()
this.f=$.$get$aW().ao()
this.r=$.$get$aW().ao()
this.x=$.$get$aW().ao()
this.y=$.$get$aW().ao()
this.z=$.$get$aW().ao()},
bA:function(a,b,c,d){var z
H.m(d,{func:1})
z=$.a;(z&&C.a).k(z,34962,this.ch)
z=$.a;(z&&C.a).D(z,c,2,5126,!1,0,0)
z=$.a;(z&&C.a).k(z,34962,this.Q)
z=$.a;(z&&C.a).D(z,a,3,5126,!1,0,0)
d.$0()
z=$.a;(z&&C.a).a4(z,5,0,4)}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ch.prototype
return J.fj.prototype}if(typeof a=="string")return J.bQ.prototype
if(a==null)return J.fk.prototype
if(typeof a=="boolean")return J.fi.prototype
if(a.constructor==Array)return J.bq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.h)return a
return J.c1(a)}
J.bE=function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.bq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.h)return a
return J.c1(a)}
J.bF=function(a){if(a==null)return a
if(a.constructor==Array)return J.bq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.h)return a
return J.c1(a)}
J.kA=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ch.prototype
return J.bs.prototype}if(a==null)return a
if(!(a instanceof P.h))return J.bz.prototype
return a}
J.eg=function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.bz.prototype
return a}
J.c0=function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.bz.prototype
return a}
J.a4=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.h)return a
return J.c1(a)}
J.c5=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).aj(a,b)}
J.es=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.eg(a).bQ(a,b)}
J.cL=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kM(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bE(a).h(a,b)}
J.bI=function(a,b){return J.a4(a).cF(a,b)}
J.cM=function(a){if(typeof a==="number")return Math.abs(a)
return J.kA(a).bq(a)}
J.et=function(a,b,c,d){return J.a4(a).br(a,b,c,d)}
J.bJ=function(a,b){return J.bF(a).aC(a,b)}
J.c6=function(a,b,c){return J.bE(a).d_(a,b,c)}
J.cN=function(a,b){return J.bF(a).u(a,b)}
J.cO=function(a,b){return J.bF(a).Y(a,b)}
J.eu=function(a){return J.a4(a).gcU(a)}
J.bK=function(a){return J.N(a).ga0(a)}
J.b2=function(a){return J.bF(a).gR(a)}
J.av=function(a){return J.bE(a).gj(a)}
J.ev=function(a){return J.a4(a).gaZ(a)}
J.ew=function(a){return J.a4(a).gds(a)}
J.c7=function(a,b){return J.a4(a).ap(a,b)}
J.c8=function(a){return J.bF(a).dk(a)}
J.ex=function(a,b){return J.c0(a).bT(a,b)}
J.ey=function(a,b){return J.c0(a).b7(a,b)}
J.ez=function(a){return J.c0(a).dt(a)}
J.aw=function(a){return J.N(a).l(a)}
J.cP=function(a,b){return J.eg(a).dv(a,b)}
J.eA=function(a){return J.c0(a).dw(a)}
I.b0=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.i=W.bL.prototype
C.n=W.cb.prototype
C.e=W.bN.prototype
C.v=W.eZ.prototype
C.w=W.f6.prototype
C.b=W.f7.prototype
C.x=W.b5.prototype
C.y=J.p.prototype
C.c=J.bq.prototype
C.f=J.ch.prototype
C.z=J.bs.prototype
C.h=J.bQ.prototype
C.G=J.bt.prototype
C.l=H.i3.prototype
C.q=W.i5.prototype
C.r=J.ic.prototype
C.t=W.ih.prototype
C.a=P.cq.prototype
C.M=W.bx.prototype
C.u=W.iz.prototype
C.m=J.bz.prototype
C.N=W.iH.prototype
C.d=new P.jD()
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.o=function(hooks) { return hooks; }

C.C=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.D=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.E=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.F=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=new P.fo(null,null)
C.I=new P.fp(null)
C.J=H.c(I.b0(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.K=H.c(I.b0(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.L=H.c(I.b0([]),[P.e])
C.j=H.c(I.b0(["bind","if","ref","repeat","syntax"]),[P.e])
C.k=H.c(I.b0(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
$.ah=0
$.b3=null
$.cU=null
$.cz=!1
$.ei=null
$.e9=null
$.eo=null
$.c_=null
$.c2=null
$.cF=null
$.aY=null
$.bd=null
$.be=null
$.cA=!1
$.J=C.d
$.aq=null
$.ce=null
$.d7=null
$.d6=null
$.d4=null
$.d3=null
$.d2=null
$.d1=null
$.a=null
$.bG=null
$.I=null
$.i=null
$.cE=0
$.ek=0
$.ec=1
$.er=!1
$.P=null
$.dr=0
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryParts={}
init.deferredPartUris=[]
init.deferredPartHashes=[];(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["d0","$get$d0",function(){return H.eh("_$dart_dartClosure")},"ci","$get$ci",function(){return H.eh("_$dart_js")},"dv","$get$dv",function(){return H.am(H.bT({
toString:function(){return"$receiver$"}}))},"dw","$get$dw",function(){return H.am(H.bT({$method$:null,
toString:function(){return"$receiver$"}}))},"dx","$get$dx",function(){return H.am(H.bT(null))},"dy","$get$dy",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dC","$get$dC",function(){return H.am(H.bT(void 0))},"dD","$get$dD",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dA","$get$dA",function(){return H.am(H.dB(null))},"dz","$get$dz",function(){return H.am(function(){try{null.$method$}catch(z){return z.message}}())},"dF","$get$dF",function(){return H.am(H.dB(void 0))},"dE","$get$dE",function(){return H.am(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cw","$get$cw",function(){return P.iK()},"bf","$get$bf",function(){return[]},"d_","$get$d_",function(){return{}},"dP","$get$dP",function(){return P.df(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"cx","$get$cx",function(){return P.de(P.e,P.bp)},"bh","$get$bh",function(){return H.b(W.cJ("#lesson01-canvas"),"$iscb")},"a3","$get$a3",function(){return P.bv(null,null,null,P.S)},"ag","$get$ag",function(){return P.hW()},"A","$get$A",function(){return H.c([],[V.K])},"ef","$get$ef",function(){return H.b(W.cJ("#fps"),"$isbN")},"cG","$get$cG",function(){return H.b(W.cJ("#lesson_html"),"$isbN")},"aW","$get$aW",function(){var z=P.jB(42)
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.M},{func:1,ret:-1},{func:1,ret:P.F},{func:1,ret:P.E},{func:1,ret:P.G,args:[P.G]},{func:1,ret:P.F,args:[P.G]},{func:1,ret:P.F,args:[P.G,W.aT]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[W.aV]},{func:1,args:[,]},{func:1,ret:P.F,args:[V.aU]},{func:1,ret:P.F,args:[W.aC]},{func:1,ret:P.Q,args:[W.ai,P.e,P.e,W.bB]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.h],opt:[P.ad]},{func:1,ret:P.F,args:[,,]},{func:1,ret:W.z},{func:1,ret:P.Q,args:[P.e]},{func:1,ret:P.Q,args:[W.ak]},{func:1,ret:P.F,args:[W.a1]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,ret:P.F,args:[P.e]},{func:1,ret:P.Q,args:[,]},{func:1,ret:-1,args:[P.G,W.aT]},{func:1,ret:P.F,args:[P.M]},{func:1,ret:P.Q,args:[P.S]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.e,args:[W.b5]},{func:1,ret:P.Q,args:[W.z]},{func:1,ret:[P.a0,,],args:[,]},{func:1,ret:P.F,args:[W.bw]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1},{func:1,args:[P.e]},{func:1,args:[,P.e]},{func:1,ret:-1,args:[W.a1]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.l_(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.b0=a.b0
Isolate.bj=a.bj
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.el,[])
else V.el([])})})()
//# sourceMappingURL=learn_gl.dart.js.map
