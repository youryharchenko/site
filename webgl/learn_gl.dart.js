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
b6.$isi=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isr)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="i"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="l"){processStatics(init.statics[b2]=b3.l,b4)
delete b3.l}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cy(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bh=function(){}
var dart=[["","",,H,{"^":"",l8:{"^":"i;a"}}],["","",,J,{"^":"",
cD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.ks()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.k(P.dE("Return interceptor for "+H.n(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ce()]
if(v!=null)return v
v=H.kA(a)
if(v!=null)return v
if(typeof a=="function")return C.B
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$ce(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
r:{"^":"i;",
a0:function(a,b){return a===b},
gL:function(a){return H.b7(a)},
j:["bf",function(a){return"Instance of '"+H.b8(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
f8:{"^":"r;",
j:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$isQ:1},
fa:{"^":"r;",
a0:function(a,b){return null==b},
j:function(a){return"null"},
gL:function(a){return 0},
$isF:1},
cf:{"^":"r;",
gL:function(a){return 0},
j:["bh",function(a){return String(a)}]},
i1:{"^":"cf;"},
bw:{"^":"cf;"},
br:{"^":"cf;",
j:function(a){var z=a[$.$get$cY()]
if(z==null)return this.bh(a)
return"JavaScript function for "+H.n(J.av(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbn:1},
bo:{"^":"r;$ti",
ae:function(a,b){return new H.c9(a,[H.A(a,0),b])},
k:function(a,b){H.K(b,H.A(a,0))
if(!!a.fixed$length)H.at(P.bx("add"))
a.push(b)},
K:function(a,b){var z
H.Y(b,"$isp",[H.A(a,0)],"$asp")
if(!!a.fixed$length)H.at(P.bx("addAll"))
for(z=J.b0(b);z.q();)a.push(z.gu(z))},
ah:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.F(z,y,H.n(a[y]))
return z.join(b)},
cd:function(a,b,c){var z,y,x,w
z=H.A(a,0)
H.m(b,{func:1,ret:P.Q,args:[z]})
H.m(c,{func:1,ret:z})
y=a.length
for(x=0;x<y;++x){w=a[x]
if(b.$1(w))return w
if(a.length!==y)throw H.k(P.aw(a))}return c.$0()},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
aV:function(a,b){var z,y
H.m(b,{func:1,ret:P.Q,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.k(P.aw(a))}return!1},
p:function(a,b){var z
for(z=0;z<a.length;++z)if(J.c3(a[z],b))return!0
return!1},
j:function(a){return P.cc(a,"[","]")},
gE:function(a){return new J.cO(a,a.length,0,[H.A(a,0)])},
gL:function(a){return H.b7(a)},
gi:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.as(a,b))
if(b>=a.length||b<0)throw H.k(H.as(a,b))
return a[b]},
F:function(a,b,c){H.v(b)
H.K(c,H.A(a,0))
if(!!a.immutable$list)H.at(P.bx("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.as(a,b))
if(b>=a.length||b<0)throw H.k(H.as(a,b))
a[b]=c},
$isB:1,
$asB:I.bh,
$ist:1,
$isp:1,
$iso:1,
l:{
f7:function(a,b){return J.bp(H.c(a,[b]))},
bp:function(a){H.bE(a)
a.fixed$length=Array
return a}}},
l7:{"^":"bo;$ti"},
cO:{"^":"i;a,b,c,0d,$ti",
gu:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.k(H.aP(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bq:{"^":"r;",
gb_:function(a){return a===0?1/a<0:a<0},
aT:function(a){return Math.abs(a)},
ct:function(a,b){var z
if(b>20)throw H.k(P.b9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gb_(a))return"-"+z
return z},
cu:function(a,b){var z
if(b<1||b>21)throw H.k(P.b9(b,1,21,"precision",null))
z=a.toPrecision(b)
if(a===0&&this.gb_(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
R:function(a,b){return(a|0)===a?a/b|0:this.bY(a,b)},
bY:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.k(P.bx("Result of truncating division is "+H.n(z)+": "+H.n(a)+" ~/ "+b))},
bW:function(a,b){var z
if(a>0)z=this.bV(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
bV:function(a,b){return b>31?0:a>>>b},
ba:function(a,b){if(typeof b!=="number")throw H.k(H.be(b))
return a<b},
$isD:1,
$isM:1},
cd:{"^":"bq;",
aT:function(a){return Math.abs(a)},
$isS:1},
f9:{"^":"bq;"},
bN:{"^":"r;",
aX:function(a,b){if(b<0)throw H.k(H.as(a,b))
if(b>=a.length)H.at(H.as(a,b))
return a.charCodeAt(b)},
ao:function(a,b){if(b>=a.length)throw H.k(H.as(a,b))
return a.charCodeAt(b)},
T:function(a,b){H.E(b)
if(typeof b!=="string")throw H.k(P.cN(b,null,null))
return a+b},
bc:function(a,b){var z=H.c(a.split(b),[P.f])
return z},
bd:function(a,b,c){var z
if(c>a.length)throw H.k(P.b9(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aG:function(a,b){return this.bd(a,b,0)},
aI:function(a,b,c){H.v(c)
if(c==null)c=a.length
if(b<0)throw H.k(P.bO(b,null,null))
if(b>c)throw H.k(P.bO(b,null,null))
if(c>a.length)throw H.k(P.bO(c,null,null))
return a.substring(b,c)},
aH:function(a,b){return this.aI(a,b,null)},
cs:function(a){return a.toLowerCase()},
cv:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.ao(z,0)===133){x=J.fb(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.aX(z,w)===133?J.fc(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
c7:function(a,b,c){if(c>a.length)throw H.k(P.b9(c,0,a.length,null,null))
return H.kJ(a,b,c)},
j:function(a){return a},
gL:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
$isB:1,
$asB:I.bh,
$isi0:1,
$isf:1,
l:{
d6:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fb:function(a,b){var z,y
for(z=a.length;b<z;){y=C.e.ao(a,b)
if(y!==32&&y!==13&&!J.d6(y))break;++b}return b},
fc:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.e.aX(a,z)
if(y!==32&&y!==13&&!J.d6(y))break}return b}}}}],["","",,H,{"^":"",
f4:function(){return new P.cn("No element")},
f5:function(){return new P.cn("Too many elements")},
dI:{"^":"p;$ti",
gE:function(a){return new H.eF(J.b0(this.ga7()),this.$ti)},
gi:function(a){return J.au(this.ga7())},
m:function(a,b){return H.cG(J.cJ(this.ga7(),b),H.A(this,1))},
j:function(a){return J.av(this.ga7())},
$asp:function(a,b){return[b]}},
eF:{"^":"i;a,$ti",
q:function(){return this.a.q()},
gu:function(a){var z=this.a
return H.cG(z.gu(z),H.A(this,1))}},
cS:{"^":"dI;a7:a<,$ti",l:{
eE:function(a,b,c){var z
H.Y(a,"$isp",[b],"$asp")
z=H.aM(a,"$ist",[b],"$ast")
if(z)return new H.iI(a,[b,c])
return new H.cS(a,[b,c])}}},
iI:{"^":"cS;a,$ti",$ist:1,
$ast:function(a,b){return[b]}},
iC:{"^":"jS;$ti",
h:function(a,b){return H.cG(J.cH(this.a,b),H.A(this,1))},
$ist:1,
$ast:function(a,b){return[b]},
$asu:function(a,b){return[b]},
$iso:1,
$aso:function(a,b){return[b]}},
c9:{"^":"iC;a7:a<,$ti",
ae:function(a,b){return new H.c9(this.a,[H.A(this,0),b])}},
t:{"^":"p;$ti"},
b5:{"^":"t;$ti",
gE:function(a){return new H.dd(this,this.gi(this),0,[H.bk(this,"b5",0)])},
aC:function(a,b){return this.bg(0,H.m(b,{func:1,ret:P.Q,args:[H.bk(this,"b5",0)]}))}},
dd:{"^":"i;a,b,c,0d,$ti",
gu:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.bB(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.k(P.aw(z))
w=this.c
if(typeof x!=="number")return H.R(x)
if(w>=x){this.d=null
return!1}this.d=y.m(z,w);++this.c
return!0}},
hP:{"^":"b5;a,b,$ti",
gi:function(a){return J.au(this.a)},
m:function(a,b){return this.b.$1(J.cJ(this.a,b))},
$ast:function(a,b){return[b]},
$asb5:function(a,b){return[b]},
$asp:function(a,b){return[b]}},
dF:{"^":"p;a,b,$ti",
gE:function(a){return new H.ir(J.b0(this.a),this.b,this.$ti)}},
ir:{"^":"f6;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gu(z)))return!0
return!1},
gu:function(a){var z=this.a
return z.gu(z)}},
bM:{"^":"i;$ti"},
jS:{"^":"dI+u;"}}],["","",,H,{"^":"",
c2:function(a){var z,y
z=H.E(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kl:function(a){return init.types[H.v(a)]},
kw:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isC},
n:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.av(a)
if(typeof z!=="string")throw H.k(H.be(a))
return z},
b7:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
cl:function(a,b){var z,y
if(typeof a!=="string")H.at(H.be(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.E(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
di:function(a){var z,y
if(typeof a!=="string")H.at(H.be(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.ex(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
b8:function(a){var z,y,x
z=H.i2(a)
y=H.aN(a)
x=H.cB(y,0,null)
return z+x},
i2:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.t||!!z.$isbw){u=C.o(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.c2(w.length>1&&C.e.ao(w,0)===36?C.e.aH(w,1):w)},
R:function(a){throw H.k(H.be(a))},
e:function(a,b){if(a==null)J.au(a)
throw H.k(H.as(a,b))},
as:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
z=H.v(J.au(a))
if(!(b<0)){if(typeof z!=="number")return H.R(z)
y=b>=z}else y=!0
if(y)return P.L(b,a,"index",null,z)
return P.bO(b,"index",null)},
be:function(a){return new P.ao(!0,a,null,null)},
k:function(a){var z
if(a==null)a=new P.ck()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.en})
z.name=""}else z.toString=H.en
return z},
en:function(){return J.av(this.dartException)},
at:function(a){throw H.k(a)},
aP:function(a){throw H.k(P.aw(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bW(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cg(H.n(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dh(H.n(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ds()
u=$.$get$dt()
t=$.$get$du()
s=$.$get$dv()
r=$.$get$dz()
q=$.$get$dA()
p=$.$get$dx()
$.$get$dw()
o=$.$get$dC()
n=$.$get$dB()
m=v.P(y)
if(m!=null)return z.$1(H.cg(H.E(y),m))
else{m=u.P(y)
if(m!=null){m.method="call"
return z.$1(H.cg(H.E(y),m))}else{m=t.P(y)
if(m==null){m=s.P(y)
if(m==null){m=r.P(y)
if(m==null){m=q.P(y)
if(m==null){m=p.P(y)
if(m==null){m=s.P(y)
if(m==null){m=o.P(y)
if(m==null){m=n.P(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dh(H.E(y),m))}}return z.$1(new H.io(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dl()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ao(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dl()
return a},
bm:function(a){var z
if(a==null)return new H.dV(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dV(a)},
ki:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.F(0,a[y],a[x])}return b},
kv:function(a,b,c,d,e,f){H.b(a,"$isbn")
switch(H.v(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(new P.iN("Unsupported number of arguments for wrapped closure"))},
bg:function(a,b){var z
H.v(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kv)
a.$identity=z
return z},
eJ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.N(d).$iso){z.$reflectionInfo=d
x=H.i5(z).r}else x=d
w=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.c6(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ag
if(typeof u!=="number")return u.T()
$.ag=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cT(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kl,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cR:H.c7
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.k("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cT(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eG:function(a,b,c,d){var z=H.c7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eI(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eG(y,!w,z,b)
if(y===0){w=$.ag
if(typeof w!=="number")return w.T()
$.ag=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b1
if(v==null){v=H.bJ("self")
$.b1=v}return new Function(w+H.n(v)+";return "+u+"."+H.n(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ag
if(typeof w!=="number")return w.T()
$.ag=w+1
t+=w
w="return function("+t+"){return this."
v=$.b1
if(v==null){v=H.bJ("self")
$.b1=v}return new Function(w+H.n(v)+"."+H.n(z)+"("+t+");}")()},
eH:function(a,b,c,d){var z,y
z=H.c7
y=H.cR
switch(b?-1:a){case 0:throw H.k(H.i8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eI:function(a,b){var z,y,x,w,v,u,t,s
z=$.b1
if(z==null){z=H.bJ("self")
$.b1=z}y=$.cQ
if(y==null){y=H.bJ("receiver")
$.cQ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eH(w,!u,x,b)
if(w===1){z="return function(){return this."+H.n(z)+"."+H.n(x)+"(this."+H.n(y)+");"
y=$.ag
if(typeof y!=="number")return y.T()
$.ag=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.n(z)+"."+H.n(x)+"(this."+H.n(y)+", "+s+");"
y=$.ag
if(typeof y!=="number")return y.T()
$.ag=y+1
return new Function(z+y+"}")()},
cy:function(a,b,c,d,e,f,g){var z,y
z=J.bp(H.bE(b))
H.v(c)
y=!!J.N(d).$iso?J.bp(d):d
return H.eJ(a,z,c,y,!!e,f,g)},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.ad(a,"String"))},
kg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.ad(a,"double"))},
cE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.ad(a,"num"))},
e9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.ad(a,"bool"))},
v:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.ad(a,"int"))},
ek:function(a,b){throw H.k(H.ad(a,H.E(b).substring(3)))},
b:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.ek(a,b)},
bE:function(a){if(a==null)return a
if(!!J.N(a).$iso)return a
throw H.k(H.ad(a,"List"))},
ky:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$iso)return a
if(z[b])return a
H.ek(a,b)},
ea:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.v(z)]
else return a.$S()}return},
bA:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ea(J.N(a))
if(z==null)return!1
y=H.ef(z,null,b,null)
return y},
m:function(a,b){var z,y
if(a==null)return a
if($.cv)return a
$.cv=!0
try{if(H.bA(a,b))return a
z=H.bF(b)
y=H.ad(a,z)
throw H.k(y)}finally{$.cv=!1}},
bi:function(a,b){if(a!=null&&!H.bX(a,b))H.at(H.ad(a,H.bF(b)))
return a},
e3:function(a){var z,y
z=J.N(a)
if(!!z.$isd){y=H.ea(z)
if(y!=null)return H.bF(y)
return"Closure"}return H.b8(a)},
kK:function(a){throw H.k(new P.eQ(H.E(a)))},
ed:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
m0:function(a,b,c){return H.b_(a["$as"+H.n(c)],H.aN(b))},
bl:function(a,b,c,d){var z
H.E(c)
H.v(d)
z=H.b_(a["$as"+H.n(c)],H.aN(b))
return z==null?null:z[d]},
bk:function(a,b,c){var z
H.E(b)
H.v(c)
z=H.b_(a["$as"+H.n(b)],H.aN(a))
return z==null?null:z[c]},
A:function(a,b){var z
H.v(b)
z=H.aN(a)
return z==null?null:z[b]},
bF:function(a){var z=H.aO(a,null)
return z},
aO:function(a,b){var z,y
H.Y(b,"$iso",[P.f],"$aso")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c2(a[0].builtin$cls)+H.cB(a,1,b)
if(typeof a=="function")return H.c2(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.v(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.n(b[y])}if('func' in a)return H.k2(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.Y(b,"$iso",z,"$aso")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.k(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.e.T(t,b[r])
q=y[u]
if(q!=null&&q!==P.i)t+=" extends "+H.aO(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aO(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aO(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kh(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.E(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.n(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cB:function(a,b,c){var z,y,x,w,v,u
H.Y(c,"$iso",[P.f],"$aso")
if(a==null)return""
z=new P.cp("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aO(u,c)}v="<"+z.j(0)+">"
return v},
b_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aM:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aN(a)
y=J.N(a)
if(y[b]==null)return!1
return H.e6(H.b_(y[d],z),null,c,null)},
Y:function(a,b,c,d){var z,y
H.E(b)
H.bE(c)
H.E(d)
if(a==null)return a
z=H.aM(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cB(c,0,null)
throw H.k(H.ad(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
e6:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ab(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ab(a[y],b,c[y],d))return!1
return!0},
lZ:function(a,b,c){return a.apply(b,H.b_(J.N(b)["$as"+H.n(c)],H.aN(b)))},
eg:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="i"||a.builtin$cls==="F"||a===-1||a===-2||H.eg(z)}return!1},
bX:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="i"||b.builtin$cls==="F"||b===-1||b===-2||H.eg(b)
return z}z=b==null||b===-1||b.builtin$cls==="i"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.bX(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bA(a,b)}y=J.N(a).constructor
x=H.aN(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ab(y,null,b,null)
return z},
cG:function(a,b){if(a!=null&&!H.bX(a,b))throw H.k(H.eD(a,H.bF(b)))
return a},
K:function(a,b){if(a!=null&&!H.bX(a,b))throw H.k(H.ad(a,H.bF(b)))
return a},
ab:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="i"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="i"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ab(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.ef(a,b,c,d)
if('func' in a)return c.builtin$cls==="bn"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ab("type" in a?a.type:null,b,x,d)
else if(H.ab(a,b,x,d))return!0
else{if(!('$is'+"ai" in y.prototype))return!1
w=y.prototype["$as"+"ai"]
v=H.b_(w,z?a.slice(1):null)
return H.ab(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e6(H.b_(r,z),b,u,d)},
ef:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ab(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ab(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ab(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ab(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kF(m,b,l,d)},
kF:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ab(c[w],d,a[w],b))return!1}return!0},
m_:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
kA:function(a){var z,y,x,w,v,u
z=H.E($.ee.$1(a))
y=$.bY[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c0[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.E($.e5.$2(a,z))
if(z!=null){y=$.bY[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c0[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c1(x)
$.bY[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c0[z]=x
return x}if(v==="-"){u=H.c1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ej(a,x)
if(v==="*")throw H.k(P.dE(z))
if(init.leafTags[z]===true){u=H.c1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ej(a,x)},
ej:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c1:function(a){return J.cD(a,!1,null,!!a.$isC)},
kE:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c1(z)
else return J.cD(z,c,null,null)},
ks:function(){if(!0===$.cA)return
$.cA=!0
H.kt()},
kt:function(){var z,y,x,w,v,u,t,s
$.bY=Object.create(null)
$.c0=Object.create(null)
H.ko()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kE(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ko:function(){var z,y,x,w,v,u,t
z=C.y()
z=H.aY(C.v,H.aY(C.A,H.aY(C.n,H.aY(C.n,H.aY(C.z,H.aY(C.w,H.aY(C.x(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ee=new H.kp(v)
$.e5=new H.kq(u)
$.el=new H.kr(t)},
aY:function(a,b){return a(b)||b},
kJ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i4:{"^":"i;a,b,c,d,e,f,r,0x",l:{
i5:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bp(z)
y=z[0]
x=z[1]
return new H.i4(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ik:{"^":"i;a,b,c,d,e,f",
P:function(a){var z,y,x
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
l:{
al:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ik(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dy:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"V;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.n(this.a)
return"NullError: method not found: '"+z+"' on null"},
l:{
dh:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
fd:{"^":"V;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.n(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.n(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.n(this.a)+")"},
l:{
cg:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fd(a,y,z?null:b.receiver)}}},
io:{"^":"V;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kM:{"^":"d:10;a",
$1:function(a){if(!!J.N(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dV:{"^":"i;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isac:1},
d:{"^":"i;",
j:function(a){return"Closure '"+H.b8(this).trim()+"'"},
gb8:function(){return this},
$isbn:1,
gb8:function(){return this}},
dq:{"^":"d;"},
ic:{"^":"dq;",
j:function(a){var z,y
z=this.$static_name
if(z==null)return"Closure of unknown static method"
y="Closure '"+H.c2(z)+"'"
return y}},
c6:{"^":"dq;a,b,c,d",
a0:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c6))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var z,y
z=this.c
if(z==null)y=H.b7(this.a)
else y=typeof z!=="object"?J.bH(z):H.b7(z)
return(y^H.b7(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.b8(z)+"'")},
l:{
c7:function(a){return a.a},
cR:function(a){return a.c},
bJ:function(a){var z,y,x,w,v
z=new H.c6("self","target","receiver","name")
y=J.bp(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
il:{"^":"V;a",
j:function(a){return this.a},
l:{
ad:function(a,b){return new H.il("TypeError: "+H.n(P.bL(a))+": type '"+H.e3(a)+"' is not a subtype of type '"+b+"'")}}},
eC:{"^":"V;a",
j:function(a){return this.a},
l:{
eD:function(a,b){return new H.eC("CastError: "+H.n(P.bL(a))+": type '"+H.e3(a)+"' is not a subtype of type '"+b+"'")}}},
i7:{"^":"V;a",
j:function(a){return"RuntimeError: "+H.n(this.a)},
l:{
i8:function(a){return new H.i7(a)}}},
bs:{"^":"ci;a,0b,0c,0d,0e,0f,r,$ti",
gi:function(a){return this.a},
gJ:function(a){return new H.da(this,[H.A(this,0)])},
a9:function(a,b){var z=this.b
if(z==null)return!1
return this.bK(z,b)},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ab(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ab(w,b)
x=y==null?null:y.b
return x}else return this.cf(b)},
cf:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aO(z,J.bH(a)&0x3ffffff)
x=this.aZ(y,a)
if(x<0)return
return y[x].b},
F:function(a,b,c){var z,y,x,w,v,u
H.K(b,H.A(this,0))
H.K(c,H.A(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.au()
this.b=z}this.aJ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.au()
this.c=y}this.aJ(y,b,c)}else{x=this.d
if(x==null){x=this.au()
this.d=x}w=J.bH(b)&0x3ffffff
v=this.aO(x,w)
if(v==null)this.aw(x,w,[this.av(b,c)])
else{u=this.aZ(v,b)
if(u>=0)v[u].b=c
else v.push(this.av(b,c))}}},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.A(this,0),H.A(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.k(P.aw(this))
z=z.c}},
aJ:function(a,b,c){var z
H.K(b,H.A(this,0))
H.K(c,H.A(this,1))
z=this.ab(a,b)
if(z==null)this.aw(a,b,this.av(b,c))
else z.b=c},
bO:function(){this.r=this.r+1&67108863},
av:function(a,b){var z,y
z=new H.hJ(H.K(a,H.A(this,0)),H.K(b,H.A(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bO()
return z},
aZ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.c3(a[y].a,b))return y
return-1},
j:function(a){return P.de(this)},
ab:function(a,b){return a[b]},
aO:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
bL:function(a,b){delete a[b]},
bK:function(a,b){return this.ab(a,b)!=null},
au:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.bL(z,"<non-identifier-key>")
return z},
$isd9:1},
hJ:{"^":"i;a,b,0c,0d"},
da:{"^":"t;a,$ti",
gi:function(a){return this.a.a},
gE:function(a){var z,y
z=this.a
y=new H.hK(z,z.r,this.$ti)
y.c=z.e
return y}},
hK:{"^":"i;a,b,0c,0d,$ti",
gu:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.aw(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kp:{"^":"d:10;a",
$1:function(a){return this.a(a)}},
kq:{"^":"d:37;a",
$2:function(a,b){return this.a(a,b)}},
kr:{"^":"d:36;a",
$1:function(a){return this.a(H.E(a))}}}],["","",,H,{"^":"",
kh:function(a){return J.f7(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
w:function(a){var z,y,x,w
z=J.N(a)
if(!!z.$isB)return a
y=z.gi(a)
if(typeof y!=="number")return H.R(y)
x=new Array(y)
x.fixed$length=Array
w=0
while(!0){y=z.gi(a)
if(typeof y!=="number")return H.R(y)
if(!(w<y))break
C.a.F(x,w,z.h(a,w));++w}return x},
aq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.as(b,a))},
hU:{"^":"r;",$islH:1,"%":"DataView;ArrayBufferView;cj|dP|dQ|df|dR|dS|aC"},
cj:{"^":"hU;",
gi:function(a){return a.length},
$isB:1,
$asB:I.bh,
$isC:1,
$asC:I.bh},
df:{"^":"dQ;",
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
F:function(a,b,c){H.v(b)
H.kg(c)
H.aq(b,a,a.length)
a[b]=c},
$ist:1,
$ast:function(){return[P.D]},
$asbM:function(){return[P.D]},
$asu:function(){return[P.D]},
$isp:1,
$asp:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]},
"%":"Float64Array"},
aC:{"^":"dS;",$ist:1,
$ast:function(){return[P.S]},
$asbM:function(){return[P.S]},
$asu:function(){return[P.S]},
$isp:1,
$asp:function(){return[P.S]},
$iso:1,
$aso:function(){return[P.S]}},
hT:{"^":"df;","%":"Float32Array"},
lg:{"^":"aC;",
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lh:{"^":"aC;",
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Int32Array"},
li:{"^":"aC;",
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lj:{"^":"aC;",
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lk:{"^":"aC;",
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ll:{"^":"aC;",
gi:function(a){return a.length},
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lm:{"^":"aC;",
gi:function(a){return a.length},
h:function(a,b){H.aq(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dP:{"^":"cj+u;"},
dQ:{"^":"dP+bM;"},
dR:{"^":"cj+u;"},
dS:{"^":"dR+bM;"}}],["","",,P,{"^":"",
iv:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bg(new P.ix(z),1)).observe(y,{childList:true})
return new P.iw(z,y,x)}else if(self.setImmediate!=null)return P.kc()
return P.kd()},
lM:[function(a){self.scheduleImmediate(H.bg(new P.iy(H.m(a,{func:1,ret:-1})),0))},"$1","kb",4,0,8],
lN:[function(a){self.setImmediate(H.bg(new P.iz(H.m(a,{func:1,ret:-1})),0))},"$1","kc",4,0,8],
lO:[function(a){H.m(a,{func:1,ret:-1})
P.jK(0,a)},"$1","kd",4,0,8],
e_:function(a,b){if(H.bA(a,{func:1,args:[P.i,P.ac]}))return b.cl(a,null,P.i,P.ac)
if(H.bA(a,{func:1,args:[P.i]})){b.toString
return H.m(a,{func:1,ret:null,args:[P.i]})}throw H.k(P.cN(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k4:function(){var z,y
for(;z=$.aW,z!=null;){$.bc=null
y=z.b
$.aW=y
if(y==null)$.bb=null
z.a.$0()}},
lY:[function(){$.cw=!0
try{P.k4()}finally{$.bc=null
$.cw=!1
if($.aW!=null)$.$get$cs().$1(P.e7())}},"$0","e7",0,0,1],
e2:function(a){var z=new P.dG(H.m(a,{func:1,ret:-1}))
if($.aW==null){$.bb=z
$.aW=z
if(!$.cw)$.$get$cs().$1(P.e7())}else{$.bb.b=z
$.bb=z}},
k8:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aW
if(z==null){P.e2(a)
$.bc=$.bb
return}y=new P.dG(a)
x=$.bc
if(x==null){y.b=z
$.bc=y
$.aW=y}else{y.b=x.b
x.b=y
$.bc=y
if(y.b==null)$.bb=y}},
kI:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.I
if(C.b===y){P.aX(null,null,C.b,a)
return}y.toString
P.aX(null,null,y,H.m(y.aW(a),z))},
bW:function(a,b,c,d,e){var z={}
z.a=d
P.k8(new P.k6(z,e))},
e0:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.I
if(y===c)return d.$0()
$.I=c
z=y
try{y=d.$0()
return y}finally{$.I=z}},
e1:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.K(e,g)
y=$.I
if(y===c)return d.$1(e)
$.I=c
z=y
try{y=d.$1(e)
return y}finally{$.I=z}},
k7:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.K(e,h)
H.K(f,i)
y=$.I
if(y===c)return d.$2(e,f)
$.I=c
z=y
try{y=d.$2(e,f)
return y}finally{$.I=z}},
aX:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.b!==c
if(z)d=!(!z||!1)?c.aW(d):c.c2(d,-1)
P.e2(d)},
ix:{"^":"d:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iw:{"^":"d:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iy:{"^":"d:2;a",
$0:function(){this.a.$0()}},
iz:{"^":"d:2;a",
$0:function(){this.a.$0()}},
jJ:{"^":"i;a,0b,c",
bB:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bg(new P.jL(this,b),0),a)
else throw H.k(P.bx("`setTimeout()` not found."))},
l:{
jK:function(a,b){var z=new P.jJ(!0,0)
z.bB(a,b)
return z}}},
jL:{"^":"d:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
dJ:{"^":"i;$ti",
c6:[function(a,b){if(a==null)a=new P.ck()
if(this.a.a!==0)throw H.k(P.bv("Future already completed"))
$.I.toString
this.U(a,b)},function(a){return this.c6(a,null)},"c5","$2","$1","gc4",4,2,15]},
cr:{"^":"dJ;a,$ti",
a8:function(a,b){var z
H.bi(b,{futureOr:1,type:H.A(this,0)})
z=this.a
if(z.a!==0)throw H.k(P.bv("Future already completed"))
z.bE(b)},
U:function(a,b){this.a.bF(a,b)}},
jE:{"^":"dJ;a,$ti",
a8:function(a,b){var z
H.bi(b,{futureOr:1,type:H.A(this,0)})
z=this.a
if(z.a!==0)throw H.k(P.bv("Future already completed"))
z.aq(b)},
U:function(a,b){this.a.U(a,b)}},
aL:{"^":"i;0a,b,c,d,e,$ti",
ci:function(a){if(this.c!==6)return!0
return this.b.b.aA(H.m(this.d,{func:1,ret:P.Q,args:[P.i]}),a.a,P.Q,P.i)},
ce:function(a){var z,y,x,w
z=this.e
y=P.i
x={futureOr:1,type:H.A(this,1)}
w=this.b.b
if(H.bA(z,{func:1,args:[P.i,P.ac]}))return H.bi(w.co(z,a.a,a.b,null,y,P.ac),x)
else return H.bi(w.aA(H.m(z,{func:1,args:[P.i]}),a.a,null,y),x)}},
a_:{"^":"i;aR:a<,b,0bS:c<,$ti",
b4:function(a,b,c){var z,y,x,w
z=H.A(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.I
if(y!==C.b){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.e_(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a_(0,$.I,[c])
w=b==null?1:3
this.an(new P.aL(x,w,a,b,[z,c]))
return x},
w:function(a,b){return this.b4(a,null,b)},
an:function(a){var z,y
z=this.a
if(z<=1){a.a=H.b(this.c,"$isaL")
this.c=a}else{if(z===2){y=H.b(this.c,"$isa_")
z=y.a
if(z<4){y.an(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aX(null,null,z,H.m(new P.iQ(this,a),{func:1,ret:-1}))}},
aP:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.b(this.c,"$isaL")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.b(this.c,"$isa_")
y=u.a
if(y<4){u.aP(a)
return}this.a=y
this.c=u.c}z.a=this.ad(a)
y=this.b
y.toString
P.aX(null,null,y,H.m(new P.iX(z,this),{func:1,ret:-1}))}},
ac:function(){var z=H.b(this.c,"$isaL")
this.c=null
return this.ad(z)},
ad:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aq:function(a){var z,y,x,w
z=H.A(this,0)
H.bi(a,{futureOr:1,type:z})
y=this.$ti
x=H.aM(a,"$isai",y,"$asai")
if(x){z=H.aM(a,"$isa_",y,null)
if(z)P.bT(a,this)
else P.dK(a,this)}else{w=this.ac()
H.K(a,z)
this.a=4
this.c=a
P.aV(this,w)}},
U:[function(a,b){var z
H.b(b,"$isac")
z=this.ac()
this.a=8
this.c=new P.a8(a,b)
P.aV(this,z)},function(a){return this.U(a,null)},"cB","$2","$1","gbI",4,2,15],
bE:function(a){var z
H.bi(a,{futureOr:1,type:H.A(this,0)})
z=H.aM(a,"$isai",this.$ti,"$asai")
if(z){this.bH(a)
return}this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.m(new P.iS(this,a),{func:1,ret:-1}))},
bH:function(a){var z=this.$ti
H.Y(a,"$isai",z,"$asai")
z=H.aM(a,"$isa_",z,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.m(new P.iW(this,a),{func:1,ret:-1}))}else P.bT(a,this)
return}P.dK(a,this)},
bF:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aX(null,null,z,H.m(new P.iR(this,a,b),{func:1,ret:-1}))},
$isai:1,
l:{
dK:function(a,b){var z,y,x
b.a=1
try{a.b4(new P.iT(b),new P.iU(b),null)}catch(x){z=H.a5(x)
y=H.bm(x)
P.kI(new P.iV(b,z,y))}},
bT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.b(a.c,"$isa_")
if(z>=4){y=b.ac()
b.a=a.a
b.c=a.c
P.aV(b,y)}else{y=H.b(b.c,"$isaL")
b.a=2
b.c=a
a.aP(y)}},
aV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.b(y.c,"$isa8")
y=y.b
u=v.a
t=v.b
y.toString
P.bW(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aV(z.a,b)}y=z.a
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
if(p){H.b(r,"$isa8")
y=y.b
u=r.a
t=r.b
y.toString
P.bW(null,null,y,u,t)
return}o=$.I
if(o==null?q!=null:o!==q)$.I=q
else o=null
y=b.c
if(y===8)new P.j_(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iZ(x,b,r).$0()}else if((y&2)!==0)new P.iY(z,x,b).$0()
if(o!=null)$.I=o
y=x.b
if(!!J.N(y).$isai){if(y.a>=4){n=H.b(t.c,"$isaL")
t.c=null
b=t.ad(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bT(y,t)
return}}m=b.b
n=H.b(m.c,"$isaL")
m.c=null
b=m.ad(n)
y=x.a
u=x.b
if(!y){H.K(u,H.A(m,0))
m.a=4
m.c=u}else{H.b(u,"$isa8")
m.a=8
m.c=u}z.a=m
y=m}}}},
iQ:{"^":"d:2;a,b",
$0:function(){P.aV(this.a,this.b)}},
iX:{"^":"d:2;a,b",
$0:function(){P.aV(this.b,this.a.a)}},
iT:{"^":"d:14;a",
$1:function(a){var z=this.a
z.a=0
z.aq(a)}},
iU:{"^":"d:33;a",
$2:function(a,b){this.a.U(a,H.b(b,"$isac"))},
$1:function(a){return this.$2(a,null)}},
iV:{"^":"d:2;a,b,c",
$0:function(){this.a.U(this.b,this.c)}},
iS:{"^":"d:2;a,b",
$0:function(){var z,y,x
z=this.a
y=H.K(this.b,H.A(z,0))
x=z.ac()
z.a=4
z.c=y
P.aV(z,x)}},
iW:{"^":"d:2;a,b",
$0:function(){P.bT(this.b,this.a)}},
iR:{"^":"d:2;a,b,c",
$0:function(){this.a.U(this.b,this.c)}},
j_:{"^":"d:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.b2(H.m(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.bm(v)
if(this.d){w=H.b(this.a.a.c,"$isa8").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.b(this.a.a.c,"$isa8")
else u.b=new P.a8(y,x)
u.a=!0
return}if(!!J.N(z).$isai){if(z instanceof P.a_&&z.gaR()>=4){if(z.gaR()===8){w=this.b
w.b=H.b(z.gbS(),"$isa8")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.w(new P.j0(t),null)
w.a=!1}}},
j0:{"^":"d:31;a",
$1:function(a){return this.a}},
iZ:{"^":"d:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.A(x,0)
v=H.K(this.c,w)
u=H.A(x,1)
this.a.b=x.b.b.aA(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.bm(t)
x=this.a
x.b=new P.a8(z,y)
x.a=!0}}},
iY:{"^":"d:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.b(this.a.a.c,"$isa8")
w=this.c
if(w.ci(z)&&w.e!=null){v=this.b
v.b=w.ce(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.bm(u)
w=H.b(this.a.a.c,"$isa8")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a8(y,x)
s.a=!0}}},
dG:{"^":"i;a,0b"},
co:{"^":"i;$ti",
gi:function(a){var z,y
z={}
y=new P.a_(0,$.I,[P.S])
z.a=0
this.cg(new P.ih(z,this),!0,new P.ii(z,y),y.gbI())
return y}},
ih:{"^":"d;a,b",
$1:function(a){H.K(a,H.bk(this.b,"co",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.bk(this.b,"co",0)]}}},
ii:{"^":"d:2;a,b",
$0:function(){this.b.aq(this.a.a)}},
ie:{"^":"i;$ti"},
ig:{"^":"i;"},
a8:{"^":"i;a,b",
j:function(a){return H.n(this.a)},
$isV:1},
jR:{"^":"i;",$islL:1},
k6:{"^":"d:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ck()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.k(z)
x=H.k(z)
x.stack=y.j(0)
throw x}},
jn:{"^":"jR;",
cp:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.b===$.I){a.$0()
return}P.e0(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.bm(x)
P.bW(null,null,this,z,H.b(y,"$isac"))}},
cq:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.K(b,c)
try{if(C.b===$.I){a.$1(b)
return}P.e1(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.bm(x)
P.bW(null,null,this,z,H.b(y,"$isac"))}},
c2:function(a,b){return new P.jp(this,H.m(a,{func:1,ret:b}),b)},
aW:function(a){return new P.jo(this,H.m(a,{func:1,ret:-1}))},
c3:function(a,b){return new P.jq(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
b2:function(a,b){H.m(a,{func:1,ret:b})
if($.I===C.b)return a.$0()
return P.e0(null,null,this,a,b)},
aA:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.K(b,d)
if($.I===C.b)return a.$1(b)
return P.e1(null,null,this,a,b,c,d)},
co:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.K(b,e)
H.K(c,f)
if($.I===C.b)return a.$2(b,c)
return P.k7(null,null,this,a,b,c,d,e,f)},
cl:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}},
jp:{"^":"d;a,b,c",
$0:function(){return this.a.b2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jo:{"^":"d:1;a,b",
$0:function(){return this.a.cp(this.b)}},
jq:{"^":"d;a,b,c",
$1:function(a){var z=this.c
return this.a.cq(this.b,H.K(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hL:function(a,b,c){H.bE(a)
return H.Y(H.ki(a,new H.bs(0,0,[b,c])),"$isd9",[b,c],"$asd9")},
db:function(a,b){return new H.bs(0,0,[a,b])},
hM:function(){return new H.bs(0,0,[null,null])},
bt:function(a,b,c,d){return new P.j8(0,0,[d])},
f3:function(a,b,c){var z,y
if(P.cx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bd()
C.a.k(y,a)
try{P.k3(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.dp(b,H.ky(z,"$isp"),", ")+c
return y.charCodeAt(0)==0?y:y},
cc:function(a,b,c){var z,y,x
if(P.cx(a))return b+"..."+c
z=new P.cp(b)
y=$.$get$bd()
C.a.k(y,a)
try{x=z
x.a=P.dp(x.ga2(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.ga2()+c
y=z.ga2()
return y.charCodeAt(0)==0?y:y},
cx:function(a){var z,y
for(z=0;y=$.$get$bd(),z<y.length;++z)if(a===y[z])return!0
return!1},
k3:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gE(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.n(z.gu(z))
C.a.k(b,w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gu(z);++x
if(!z.q()){if(x<=4){C.a.k(b,H.n(t))
return}v=H.n(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gu(z);++x
for(;z.q();t=s,s=r){r=z.gu(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.k(b,"...")
return}}u=H.n(t)
v=H.n(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.k(b,q)
C.a.k(b,u)
C.a.k(b,v)},
dc:function(a,b){var z,y,x
z=P.bt(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.aP)(a),++x)z.k(0,H.K(a[x],b))
return z},
de:function(a){var z,y,x
z={}
if(P.cx(a))return"{...}"
y=new P.cp("")
try{C.a.k($.$get$bd(),a)
x=y
x.a=x.ga2()+"{"
z.a=!0
J.cK(a,new P.hO(z,y))
z=y
z.a=z.ga2()+"}"}finally{z=$.$get$bd()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.ga2()
return z.charCodeAt(0)==0?z:z},
j8:{"^":"j1;a,0b,0c,0d,0e,0f,r,$ti",
gE:function(a){var z=new P.dO(this,this.r,this.$ti)
z.c=this.e
return z},
gi:function(a){return this.a},
p:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.b(z[b],"$isbz")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.b(y[b],"$isbz")!=null}else return this.bJ(b)},
bJ:function(a){var z=this.d
if(z==null)return!1
return this.at(this.aN(z,a),a)>=0},
k:function(a,b){var z,y
H.K(b,H.A(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cu()
this.b=z}return this.aK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cu()
this.c=y}return this.aK(y,b)}else return this.bC(0,b)},
bC:function(a,b){var z,y,x
H.K(b,H.A(this,0))
z=this.d
if(z==null){z=P.cu()
this.d=z}y=this.aM(b)
x=z[y]
if(x==null)z[y]=[this.ap(b)]
else{if(this.at(x,b)>=0)return!1
x.push(this.ap(b))}return!0},
cn:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aQ(this.c,b)
else return this.bQ(0,b)},
bQ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.aN(z,b)
x=this.at(y,b)
if(x<0)return!1
this.aS(y.splice(x,1)[0])
return!0},
aK:function(a,b){H.K(b,H.A(this,0))
if(H.b(a[b],"$isbz")!=null)return!1
a[b]=this.ap(b)
return!0},
aQ:function(a,b){var z
if(a==null)return!1
z=H.b(a[b],"$isbz")
if(z==null)return!1
this.aS(z)
delete a[b]
return!0},
aL:function(){this.r=this.r+1&67108863},
ap:function(a){var z,y
z=new P.bz(H.K(a,H.A(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aL()
return z},
aS:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aL()},
aM:function(a){return J.bH(a)&0x3ffffff},
aN:function(a,b){return a[this.aM(b)]},
at:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.c3(a[y].a,b))return y
return-1},
l:{
cu:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bz:{"^":"i;a,0b,0c"},
dO:{"^":"i;a,b,0c,0d,$ti",
gu:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.aw(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.K(z.a,H.A(this,0))
this.c=z.b
return!0}}}},
j1:{"^":"i9;$ti"},
hN:{"^":"j9;",$ist:1,$isp:1,$iso:1},
u:{"^":"i;$ti",
gE:function(a){return new H.dd(a,this.gi(a),0,[H.bl(this,a,"u",0)])},
m:function(a,b){return this.h(a,b)},
ae:function(a,b){return new H.c9(a,[H.bl(this,a,"u",0),b])},
j:function(a){return P.cc(a,"[","]")}},
ci:{"^":"Z;"},
hO:{"^":"d:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.n(a)
z.a=y+": "
z.a+=H.n(b)}},
Z:{"^":"i;$ti",
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bl(this,a,"Z",0),H.bl(this,a,"Z",1)]})
for(z=J.b0(this.gJ(a));z.q();){y=z.gu(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.au(this.gJ(a))},
j:function(a){return P.de(a)},
$isO:1},
ia:{"^":"i;$ti",
K:function(a,b){var z
for(z=J.b0(H.Y(b,"$isp",this.$ti,"$asp"));z.q();)this.k(0,z.gu(z))},
j:function(a){return P.cc(this,"{","}")},
m:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.cM("index"))
if(b<0)H.at(P.b9(b,0,null,"index",null))
for(z=new P.dO(this,this.r,this.$ti),z.c=this.e,y=0;z.q();){x=z.d
if(b===y)return x;++y}throw H.k(P.L(b,this,"index",null,y))},
$ist:1,
$isp:1},
i9:{"^":"ia;"},
j9:{"^":"i+u;"}}],["","",,P,{"^":"",
k5:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.k(H.be(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.a5(x)
w=P.cb(String(y),null,null)
throw H.k(w)}w=P.bV(z)
return w},
bV:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.j4(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.bV(a[z])
return a},
j4:{"^":"ci;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.bP(b):y}},
gi:function(a){return this.b==null?this.c.a:this.aa().length},
gJ:function(a){var z
if(this.b==null){z=this.c
return new H.da(z,[H.A(z,0)])}return new P.j5(this)},
I:function(a,b){var z,y,x,w
H.m(b,{func:1,ret:-1,args:[P.f,,]})
if(this.b==null)return this.c.I(0,b)
z=this.aa()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.bV(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.k(P.aw(this))}},
aa:function(){var z=H.bE(this.c)
if(z==null){z=H.c(Object.keys(this.a),[P.f])
this.c=z}return z},
bP:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.bV(this.a[a])
return this.b[a]=z},
$asZ:function(){return[P.f,null]},
$asO:function(){return[P.f,null]}},
j5:{"^":"b5;a",
gi:function(a){var z=this.a
return z.gi(z)},
m:function(a,b){var z=this.a
if(z.b==null)z=z.gJ(z).m(0,b)
else{z=z.aa()
if(b>>>0!==b||b>=z.length)return H.e(z,b)
z=z[b]}return z},
gE:function(a){var z=this.a
if(z.b==null){z=z.gJ(z)
z=z.gE(z)}else{z=z.aa()
z=new J.cO(z,z.length,0,[H.A(z,0)])}return z},
$ast:function(){return[P.f]},
$asb5:function(){return[P.f]},
$asp:function(){return[P.f]}},
cU:{"^":"i;$ti"},
cV:{"^":"ig;$ti"},
fe:{"^":"cU;a,b",
ca:function(a,b,c){var z=P.k5(b,this.gcb().a)
return z},
c9:function(a,b){return this.ca(a,b,null)},
gcb:function(){return C.D},
$ascU:function(){return[P.i,P.f]}},
ff:{"^":"cV;a",
$ascV:function(){return[P.f,P.i]}}}],["","",,P,{"^":"",
ku:function(a,b,c){var z=H.cl(a,c)
if(z!=null)return z
throw H.k(P.cb(a,null,null))},
q:function(a,b){var z=H.di(a)
if(z!=null)return z
throw H.k(P.cb("Invalid double",a,null))},
eV:function(a){if(a instanceof H.d)return a.j(0)
return"Instance of '"+H.b8(a)+"'"},
bL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eV(a)},
a4:function(a){H.kH(H.n(a))},
Q:{"^":"i;"},
"+bool":0,
D:{"^":"M;"},
"+double":0,
V:{"^":"i;"},
ck:{"^":"V;",
j:function(a){return"Throw of null."}},
ao:{"^":"V;a,b,c,d",
gas:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gar:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.n(z)
w=this.gas()+y+x
if(!this.a)return w
v=this.gar()
u=P.bL(this.b)
return w+v+": "+H.n(u)},
l:{
ey:function(a){return new P.ao(!1,null,null,a)},
cN:function(a,b,c){return new P.ao(!0,a,b,c)},
cM:function(a){return new P.ao(!1,null,a,"Must not be null")}}},
dj:{"^":"ao;e,f,a,b,c,d",
gas:function(){return"RangeError"},
gar:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.n(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.n(z)
else if(x>z)y=": Not in range "+H.n(z)+".."+H.n(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.n(z)}return y},
l:{
bO:function(a,b,c){return new P.dj(null,null,!0,a,b,"Value not in range")},
b9:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")}}},
f2:{"^":"ao;e,i:f>,a,b,c,d",
gas:function(){return"RangeError"},
gar:function(){if(J.ep(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.n(z)},
l:{
L:function(a,b,c,d,e){var z=H.v(e!=null?e:J.au(b))
return new P.f2(b,z,!0,a,c,"Index out of range")}}},
ip:{"^":"V;a",
j:function(a){return"Unsupported operation: "+this.a},
l:{
bx:function(a){return new P.ip(a)}}},
im:{"^":"V;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
l:{
dE:function(a){return new P.im(a)}}},
cn:{"^":"V;a",
j:function(a){return"Bad state: "+this.a},
l:{
bv:function(a){return new P.cn(a)}}},
eK:{"^":"V;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.n(P.bL(z))+"."},
l:{
aw:function(a){return new P.eK(a)}}},
dl:{"^":"i;",
j:function(a){return"Stack Overflow"},
$isV:1},
eQ:{"^":"V;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iN:{"^":"i;a",
j:function(a){return"Exception: "+this.a}},
eW:{"^":"i;a,b,c",
j:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.n(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.e.aI(x,0,75)+"..."
return y+"\n"+x},
l:{
cb:function(a,b,c){return new P.eW(a,b,c)}}},
bn:{"^":"i;"},
S:{"^":"M;"},
"+int":0,
p:{"^":"i;$ti",
ae:function(a,b){return H.eE(this,H.bk(this,"p",0),b)},
aC:["bg",function(a,b){var z=H.bk(this,"p",0)
return new H.dF(this,H.m(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gi:function(a){var z,y
z=this.gE(this)
for(y=0;z.q();)++y
return y},
ga1:function(a){var z,y
z=this.gE(this)
if(!z.q())throw H.k(H.f4())
y=z.gu(z)
if(z.q())throw H.k(H.f5())
return y},
m:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.cM("index"))
if(b<0)H.at(P.b9(b,0,null,"index",null))
for(z=this.gE(this),y=0;z.q();){x=z.gu(z)
if(b===y)return x;++y}throw H.k(P.L(b,this,"index",null,y))},
j:function(a){return P.f3(this,"(",")")}},
f6:{"^":"i;$ti"},
o:{"^":"i;$ti",$ist:1,$isp:1},
"+List":0,
O:{"^":"i;$ti"},
F:{"^":"i;",
gL:function(a){return P.i.prototype.gL.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
M:{"^":"i;"},
"+num":0,
i:{"^":";",
a0:function(a,b){return this===b},
gL:function(a){return H.b7(this)},
j:function(a){return"Instance of '"+H.b8(this)+"'"},
toString:function(){return this.j(this)}},
ac:{"^":"i;"},
f:{"^":"i;",$isi0:1},
"+String":0,
cp:{"^":"i;a2:a<",
gi:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
l:{
dp:function(a,b,c){var z=J.b0(b)
if(!z.q())return a
if(c.length===0){do a+=H.n(z.gu(z))
while(z.q())}else{a+=H.n(z.gu(z))
for(;z.q();)a=a+c+H.n(z.gu(z))}return a}}}}],["","",,W,{"^":"",
eT:function(a,b,c){var z,y
z=document.body
y=(z&&C.l).S(z,a,b,c)
y.toString
z=W.z
z=new H.dF(new W.aa(y),H.m(new W.eU(),{func:1,ret:P.Q,args:[z]}),[z])
return H.b(z.ga1(z),"$isah")},
b2:function(a){var z,y,x
z="element tag unavailable"
try{y=J.et(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
eZ:function(a,b,c){return W.f0(a,null,null,b,null,null,null,c).w(new W.f_(),P.f)},
f0:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=W.b3
y=new P.a_(0,$.I,[z])
x=new P.cr(y,[z])
w=new XMLHttpRequest()
C.r.cj(w,"GET",a,!0)
z=W.bu
v={func:1,ret:-1,args:[z]}
W.ae(w,"load",H.m(new W.f1(w,x),v),!1,z)
W.ae(w,"error",H.m(x.gc4(),v),!1,z)
w.send()
return y},
a9:function(a){var z,y
y=document.createElement("input")
z=H.b(y,"$isl")
return z},
i_:function(a,b,c,d){var z=new Option(a,b,c,d)
return z},
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dN:function(a,b,c,d){var z,y
z=W.bU(W.bU(W.bU(W.bU(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e4:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.I
if(z===C.b)return a
return z.c3(a,b)},
cF:function(a){return document.querySelector(a)},
a2:{"^":"ah;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kN:{"^":"r;0i:length=","%":"AccessibleNodeList"},
kO:{"^":"a2;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kP:{"^":"a2;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cP:{"^":"a2;",$iscP:1,"%":"HTMLBaseElement"},
eB:{"^":"r;","%":";Blob"},
bI:{"^":"a2;",$isbI:1,"%":"HTMLBodyElement"},
c8:{"^":"a2;",
aD:function(a,b,c){var z=a.getContext(b,P.ke(c,null))
return z},
$isc8:1,
"%":"HTMLCanvasElement"},
kT:{"^":"z;0i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kU:{"^":"eM;0i:length=","%":"CSSPerspective"},
ax:{"^":"r;",$isax:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kV:{"^":"iD;0i:length=",
b9:function(a,b){var z=a.getPropertyValue(this.bG(a,b))
return z==null?"":z},
bG:function(a,b){var z,y
z=$.$get$cW()
y=z[b]
if(typeof y==="string")return y
y=this.bX(a,b)
z[b]=y
return y},
bX:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eR()+b
if(z in a)return z
return b},
gY:function(a){return a.height},
gai:function(a){return a.left},
gaB:function(a){return a.top},
ga_:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eL:{"^":"i;",
gai:function(a){return this.b9(a,"left")}},
cX:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
eM:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kW:{"^":"cX;0i:length=","%":"CSSTransformValue"},
kX:{"^":"cX;0i:length=","%":"CSSUnparsedValue"},
kY:{"^":"r;0i:length=","%":"DataTransferItemList"},
bK:{"^":"a2;",$isbK:1,"%":"HTMLDivElement"},
kZ:{"^":"r;",
j:function(a){return String(a)},
"%":"DOMException"},
l_:{"^":"iF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a6,P.M]]},
$ist:1,
$ast:function(){return[[P.a6,P.M]]},
$isC:1,
$asC:function(){return[[P.a6,P.M]]},
$asu:function(){return[[P.a6,P.M]]},
$isp:1,
$asp:function(){return[[P.a6,P.M]]},
$iso:1,
$aso:function(){return[[P.a6,P.M]]},
$asx:function(){return[[P.a6,P.M]]},
"%":"ClientRectList|DOMRectList"},
eS:{"^":"r;",
j:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.ga_(a))+" x "+H.n(this.gY(a))},
a0:function(a,b){var z
if(b==null)return!1
z=H.aM(b,"$isa6",[P.M],"$asa6")
if(!z)return!1
z=J.bj(b)
return a.left===z.gai(b)&&a.top===z.gaB(b)&&this.ga_(a)===z.ga_(b)&&this.gY(a)===z.gY(b)},
gL:function(a){return W.dN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga_(a)&0x1FFFFFFF,this.gY(a)&0x1FFFFFFF)},
gY:function(a){return a.height},
gai:function(a){return a.left},
gaB:function(a){return a.top},
ga_:function(a){return a.width},
$isa6:1,
$asa6:function(){return[P.M]},
"%":";DOMRectReadOnly"},
l0:{"^":"iH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.f]},
$ist:1,
$ast:function(){return[P.f]},
$isC:1,
$asC:function(){return[P.f]},
$asu:function(){return[P.f]},
$isp:1,
$asp:function(){return[P.f]},
$iso:1,
$aso:function(){return[P.f]},
$asx:function(){return[P.f]},
"%":"DOMStringList"},
l1:{"^":"r;0i:length=","%":"DOMTokenList"},
ah:{"^":"z;0cr:tagName=",
gc1:function(a){return new W.iJ(a)},
j:function(a){return a.localName},
S:["am",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d4
if(z==null){z=H.c([],[W.aj])
y=new W.dg(z)
C.a.k(z,W.dL(null))
C.a.k(z,W.dW())
$.d4=y
d=y}else d=z
z=$.d3
if(z==null){z=new W.dZ(d)
$.d3=z
c=z}else{z.a=d
c=z}}if($.ap==null){z=document
y=z.implementation.createHTMLDocument("")
$.ap=y
$.ca=y.createRange()
y=$.ap
y.toString
y=y.createElement("base")
H.b(y,"$iscP")
y.href=z.baseURI
$.ap.head.appendChild(y)}z=$.ap
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.b(y,"$isbI")}z=$.ap
if(!!this.$isbI)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.ap.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.p(C.F,a.tagName)){$.ca.selectNodeContents(x)
w=$.ca.createContextualFragment(b)}else{x.innerHTML=b
w=$.ap.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.ap.body
if(x==null?z!=null:x!==z)J.c5(x)
c.ak(w)
document.adoptNode(w)
return w},function(a,b,c){return this.S(a,b,c,null)},"c8",null,null,"gcC",5,5,null],
aF:function(a,b,c,d){a.textContent=null
a.appendChild(this.S(a,b,c,d))},
O:function(a,b,c){return this.aF(a,b,c,null)},
bb:function(a,b){return this.aF(a,b,null,null)},
$isah:1,
"%":";Element"},
eU:{"^":"d:30;",
$1:function(a){return!!J.N(H.b(a,"$isz")).$isah}},
a0:{"^":"r;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a1:{"^":"r;",
aU:["be",function(a,b,c,d){H.m(c,{func:1,args:[W.a0]})
if(c!=null)this.bD(a,b,c,!1)}],
bD:function(a,b,c,d){return a.addEventListener(b,H.bg(H.m(c,{func:1,args:[W.a0]}),1),!1)},
$isa1:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dT|dU|dX|dY"},
ay:{"^":"eB;",$isay:1,"%":"File"},
l2:{"^":"iP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.ay]},
$ist:1,
$ast:function(){return[W.ay]},
$isC:1,
$asC:function(){return[W.ay]},
$asu:function(){return[W.ay]},
$isp:1,
$asp:function(){return[W.ay]},
$iso:1,
$aso:function(){return[W.ay]},
$asx:function(){return[W.ay]},
"%":"FileList"},
l3:{"^":"a1;0i:length=","%":"FileWriter"},
l4:{"^":"a2;0i:length=","%":"HTMLFormElement"},
az:{"^":"r;",$isaz:1,"%":"Gamepad"},
l5:{"^":"r;0i:length=","%":"History"},
l6:{"^":"j3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.z]},
$ist:1,
$ast:function(){return[W.z]},
$isC:1,
$asC:function(){return[W.z]},
$asu:function(){return[W.z]},
$isp:1,
$asp:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asx:function(){return[W.z]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
b3:{"^":"eY;",
cD:function(a,b,c,d,e,f){return a.open(b,c)},
cj:function(a,b,c,d){return a.open(b,c,d)},
$isb3:1,
"%":"XMLHttpRequest"},
f_:{"^":"d:29;",
$1:function(a){return H.b(a,"$isb3").responseText}},
f1:{"^":"d:32;a,b",
$1:function(a){var z,y,x,w,v
H.b(a,"$isbu")
z=this.a
y=z.status
if(typeof y!=="number")return y.cz()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.b
if(y)v.a8(0,z)
else v.c5(a)}},
eY:{"^":"a1;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
aR:{"^":"a2;",$isaR:1,"%":"HTMLImageElement"},
l:{"^":"a2;",$isl:1,"%":"HTMLInputElement"},
aA:{"^":"dD;",$isaA:1,"%":"KeyboardEvent"},
la:{"^":"r;",
j:function(a){return String(a)},
"%":"Location"},
lb:{"^":"r;0i:length=","%":"MediaList"},
lc:{"^":"a1;",
aU:function(a,b,c,d){H.m(c,{func:1,args:[W.a0]})
if(b==="message")a.start()
this.be(a,b,c,!1)},
"%":"MessagePort"},
ld:{"^":"ja;",
h:function(a,b){return P.ar(a.get(H.E(b)))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ar(y.value[1]))}},
gJ:function(a){var z=H.c([],[P.f])
this.I(a,new W.hR(z))
return z},
gi:function(a){return a.size},
$asZ:function(){return[P.f,null]},
$isO:1,
$asO:function(){return[P.f,null]},
"%":"MIDIInputMap"},
hR:{"^":"d:7;a",
$2:function(a,b){return C.a.k(this.a,a)}},
le:{"^":"jb;",
h:function(a,b){return P.ar(a.get(H.E(b)))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ar(y.value[1]))}},
gJ:function(a){var z=H.c([],[P.f])
this.I(a,new W.hS(z))
return z},
gi:function(a){return a.size},
$asZ:function(){return[P.f,null]},
$isO:1,
$asO:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
hS:{"^":"d:7;a",
$2:function(a,b){return C.a.k(this.a,a)}},
aB:{"^":"r;",$isaB:1,"%":"MimeType"},
lf:{"^":"jd;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aB]},
$ist:1,
$ast:function(){return[W.aB]},
$isC:1,
$asC:function(){return[W.aB]},
$asu:function(){return[W.aB]},
$isp:1,
$asp:function(){return[W.aB]},
$iso:1,
$aso:function(){return[W.aB]},
$asx:function(){return[W.aB]},
"%":"MimeTypeArray"},
aT:{"^":"dD;",$isaT:1,"%":"DragEvent|MouseEvent|PointerEvent|WheelEvent"},
aa:{"^":"hN;a",
ga1:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.k(P.bv("No elements"))
if(y>1)throw H.k(P.bv("More than one element"))
return z.firstChild},
K:function(a,b){var z,y,x,w
H.Y(b,"$isp",[W.z],"$asp")
if(!!b.$isaa){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=b.gE(b),y=this.a;z.q();)y.appendChild(z.gu(z))},
gE:function(a){var z=this.a.childNodes
return new W.d5(z,z.length,-1,[H.bl(C.H,z,"x",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$ast:function(){return[W.z]},
$asu:function(){return[W.z]},
$asp:function(){return[W.z]},
$aso:function(){return[W.z]}},
z:{"^":"a1;0az:previousSibling=",
cm:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
j:function(a){var z=a.nodeValue
return z==null?this.bf(a):z},
$isz:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ln:{"^":"r;",
ck:[function(a){return a.previousNode()},"$0","gaz",1,0,17],
"%":"NodeIterator"},
hV:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.z]},
$ist:1,
$ast:function(){return[W.z]},
$isC:1,
$asC:function(){return[W.z]},
$asu:function(){return[W.z]},
$isp:1,
$asp:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asx:function(){return[W.z]},
"%":"NodeList|RadioNodeList"},
aD:{"^":"r;0i:length=",$isaD:1,"%":"Plugin"},
lq:{"^":"jj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aD]},
$ist:1,
$ast:function(){return[W.aD]},
$isC:1,
$asC:function(){return[W.aD]},
$asu:function(){return[W.aD]},
$isp:1,
$asp:function(){return[W.aD]},
$iso:1,
$aso:function(){return[W.aD]},
$asx:function(){return[W.aD]},
"%":"PluginArray"},
bu:{"^":"a0;",$isbu:1,"%":"ProgressEvent|ResourceProgressEvent"},
ls:{"^":"jr;",
h:function(a,b){return P.ar(a.get(H.E(b)))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ar(y.value[1]))}},
gJ:function(a){var z=H.c([],[P.f])
this.I(a,new W.i6(z))
return z},
gi:function(a){return a.size},
$asZ:function(){return[P.f,null]},
$isO:1,
$asO:function(){return[P.f,null]},
"%":"RTCStatsReport"},
i6:{"^":"d:7;a",
$2:function(a,b){return C.a.k(this.a,a)}},
bP:{"^":"a2;0i:length=",$isbP:1,"%":"HTMLSelectElement"},
aE:{"^":"a1;",$isaE:1,"%":"SourceBuffer"},
lt:{"^":"dU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aE]},
$ist:1,
$ast:function(){return[W.aE]},
$isC:1,
$asC:function(){return[W.aE]},
$asu:function(){return[W.aE]},
$isp:1,
$asp:function(){return[W.aE]},
$iso:1,
$aso:function(){return[W.aE]},
$asx:function(){return[W.aE]},
"%":"SourceBufferList"},
aF:{"^":"r;",$isaF:1,"%":"SpeechGrammar"},
lu:{"^":"jx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aF]},
$ist:1,
$ast:function(){return[W.aF]},
$isC:1,
$asC:function(){return[W.aF]},
$asu:function(){return[W.aF]},
$isp:1,
$asp:function(){return[W.aF]},
$iso:1,
$aso:function(){return[W.aF]},
$asx:function(){return[W.aF]},
"%":"SpeechGrammarList"},
aG:{"^":"r;0i:length=",$isaG:1,"%":"SpeechRecognitionResult"},
lw:{"^":"jA;",
h:function(a,b){return a.getItem(H.E(b))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gJ:function(a){var z=H.c([],[P.f])
this.I(a,new W.id(z))
return z},
gi:function(a){return a.length},
$asZ:function(){return[P.f,P.f]},
$isO:1,
$asO:function(){return[P.f,P.f]},
"%":"Storage"},
id:{"^":"d:28;a",
$2:function(a,b){return C.a.k(this.a,a)}},
aH:{"^":"r;",$isaH:1,"%":"CSSStyleSheet|StyleSheet"},
ij:{"^":"a2;",
S:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=W.eT("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aa(y).K(0,new W.aa(z))
return y},
"%":"HTMLTableElement"},
ly:{"^":"a2;",
S:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.q.S(z.createElement("table"),b,c,d)
z.toString
z=new W.aa(z)
x=z.ga1(z)
x.toString
z=new W.aa(x)
w=z.ga1(z)
y.toString
w.toString
new W.aa(y).K(0,new W.aa(w))
return y},
"%":"HTMLTableRowElement"},
lz:{"^":"a2;",
S:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.q.S(z.createElement("table"),b,c,d)
z.toString
z=new W.aa(z)
x=z.ga1(z)
y.toString
x.toString
new W.aa(y).K(0,new W.aa(x))
return y},
"%":"HTMLTableSectionElement"},
dr:{"^":"a2;",$isdr:1,"%":"HTMLTemplateElement"},
aI:{"^":"a1;",$isaI:1,"%":"TextTrack"},
aJ:{"^":"a1;",$isaJ:1,"%":"TextTrackCue|VTTCue"},
lA:{"^":"jI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aJ]},
$ist:1,
$ast:function(){return[W.aJ]},
$isC:1,
$asC:function(){return[W.aJ]},
$asu:function(){return[W.aJ]},
$isp:1,
$asp:function(){return[W.aJ]},
$iso:1,
$aso:function(){return[W.aJ]},
$asx:function(){return[W.aJ]},
"%":"TextTrackCueList"},
lB:{"^":"dY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aI]},
$ist:1,
$ast:function(){return[W.aI]},
$isC:1,
$asC:function(){return[W.aI]},
$asu:function(){return[W.aI]},
$isp:1,
$asp:function(){return[W.aI]},
$iso:1,
$aso:function(){return[W.aI]},
$asx:function(){return[W.aI]},
"%":"TextTrackList"},
lC:{"^":"r;0i:length=","%":"TimeRanges"},
aK:{"^":"r;",$isaK:1,"%":"Touch"},
lD:{"^":"jN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aK]},
$ist:1,
$ast:function(){return[W.aK]},
$isC:1,
$asC:function(){return[W.aK]},
$asu:function(){return[W.aK]},
$isp:1,
$asp:function(){return[W.aK]},
$iso:1,
$aso:function(){return[W.aK]},
$asx:function(){return[W.aK]},
"%":"TouchList"},
lE:{"^":"r;0i:length=","%":"TrackDefaultList"},
lG:{"^":"r;",
ck:[function(a){return a.previousNode()},"$0","gaz",1,0,17],
"%":"TreeWalker"},
dD:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lJ:{"^":"r;",
j:function(a){return String(a)},
"%":"URL"},
lK:{"^":"a1;0i:length=","%":"VideoTrackList"},
is:{"^":"a1;",
gc0:function(a){var z,y,x
z=P.M
y=new P.a_(0,$.I,[z])
x=H.m(new W.it(new P.jE(y,[z])),{func:1,ret:-1,args:[P.M]})
this.bN(a)
this.bR(a,W.e4(x,z))
return y},
bR:function(a,b){return a.requestAnimationFrame(H.bg(H.m(b,{func:1,ret:-1,args:[P.M]}),1))},
bN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
it:{"^":"d:26;a",
$1:function(a){this.a.a8(0,H.cE(a))}},
dH:{"^":"z;",$isdH:1,"%":"Attr"},
lP:{"^":"jU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.ax]},
$ist:1,
$ast:function(){return[W.ax]},
$isC:1,
$asC:function(){return[W.ax]},
$asu:function(){return[W.ax]},
$isp:1,
$asp:function(){return[W.ax]},
$iso:1,
$aso:function(){return[W.ax]},
$asx:function(){return[W.ax]},
"%":"CSSRuleList"},
lQ:{"^":"eS;",
j:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
a0:function(a,b){var z
if(b==null)return!1
z=H.aM(b,"$isa6",[P.M],"$asa6")
if(!z)return!1
z=J.bj(b)
return a.left===z.gai(b)&&a.top===z.gaB(b)&&a.width===z.ga_(b)&&a.height===z.gY(b)},
gL:function(a){return W.dN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gY:function(a){return a.height},
ga_:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lS:{"^":"jW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.az]},
$ist:1,
$ast:function(){return[W.az]},
$isC:1,
$asC:function(){return[W.az]},
$asu:function(){return[W.az]},
$isp:1,
$asp:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
$asx:function(){return[W.az]},
"%":"GamepadList"},
lV:{"^":"jY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.z]},
$ist:1,
$ast:function(){return[W.z]},
$isC:1,
$asC:function(){return[W.z]},
$asu:function(){return[W.z]},
$isp:1,
$asp:function(){return[W.z]},
$iso:1,
$aso:function(){return[W.z]},
$asx:function(){return[W.z]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lW:{"^":"k_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aG]},
$ist:1,
$ast:function(){return[W.aG]},
$isC:1,
$asC:function(){return[W.aG]},
$asu:function(){return[W.aG]},
$isp:1,
$asp:function(){return[W.aG]},
$iso:1,
$aso:function(){return[W.aG]},
$asx:function(){return[W.aG]},
"%":"SpeechRecognitionResultList"},
lX:{"^":"k1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.aH]},
$ist:1,
$ast:function(){return[W.aH]},
$isC:1,
$asC:function(){return[W.aH]},
$asu:function(){return[W.aH]},
$isp:1,
$asp:function(){return[W.aH]},
$iso:1,
$aso:function(){return[W.aH]},
$asx:function(){return[W.aH]},
"%":"StyleSheetList"},
iA:{"^":"ci;bM:a<",
I:function(a,b){var z,y,x,w,v
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.gJ(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.aP)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.e(z,w)
v=H.b(z[w],"$isdH")
if(v.namespaceURI==null)C.a.k(y,v.name)}return y},
$asZ:function(){return[P.f,P.f]},
$asO:function(){return[P.f,P.f]}},
iJ:{"^":"iA;a",
h:function(a,b){return this.a.getAttribute(H.E(b))},
gi:function(a){return this.gJ(this).length}},
iK:{"^":"co;a,b,c,$ti",
cg:function(a,b,c,d){var z=H.A(this,0)
H.m(a,{func:1,ret:-1,args:[z]})
H.m(c,{func:1,ret:-1})
return W.ae(this.a,this.b,a,!1,z)}},
lR:{"^":"iK;a,b,c,$ti"},
iL:{"^":"ie;a,b,c,d,e,$ti",
bZ:function(){var z=this.d
if(z!=null&&this.a<=0)J.eq(this.b,this.c,z,!1)},
l:{
ae:function(a,b,c,d,e){var z=c==null?null:W.e4(new W.iM(c),W.a0)
z=new W.iL(0,a,b,z,!1,[e])
z.bZ()
return z}}},
iM:{"^":"d:38;a",
$1:function(a){return this.a.$1(H.b(a,"$isa0"))}},
by:{"^":"i;a",
by:function(a){var z,y
z=$.$get$ct()
if(z.a===0){for(y=0;y<262;++y)z.F(0,C.E[y],W.km())
for(y=0;y<12;++y)z.F(0,C.i[y],W.kn())}},
a4:function(a){return $.$get$dM().p(0,W.b2(a))},
X:function(a,b,c){var z,y,x
z=W.b2(a)
y=$.$get$ct()
x=y.h(0,H.n(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.e9(x.$4(a,b,c,this))},
$isaj:1,
l:{
dL:function(a){var z,y
z=document.createElement("a")
y=new W.js(z,window.location)
y=new W.by(y)
y.by(a)
return y},
lT:[function(a,b,c,d){H.b(a,"$isah")
H.E(b)
H.E(c)
H.b(d,"$isby")
return!0},"$4","km",16,0,13],
lU:[function(a,b,c,d){var z,y,x,w,v
H.b(a,"$isah")
H.E(b)
H.E(c)
z=H.b(d,"$isby").a
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
return z},"$4","kn",16,0,13]}},
x:{"^":"i;$ti",
gE:function(a){return new W.d5(a,this.gi(a),-1,[H.bl(this,a,"x",0)])}},
dg:{"^":"i;a",
a4:function(a){return C.a.aV(this.a,new W.hY(a))},
X:function(a,b,c){return C.a.aV(this.a,new W.hX(a,b,c))},
$isaj:1},
hY:{"^":"d:19;a",
$1:function(a){return H.b(a,"$isaj").a4(this.a)}},
hX:{"^":"d:19;a,b,c",
$1:function(a){return H.b(a,"$isaj").X(this.a,this.b,this.c)}},
jt:{"^":"i;",
bA:function(a,b,c,d){var z,y,x
this.a.K(0,c)
z=b.aC(0,new W.ju())
y=b.aC(0,new W.jv())
this.b.K(0,z)
x=this.c
x.K(0,C.G)
x.K(0,y)},
a4:function(a){return this.a.p(0,W.b2(a))},
X:["bi",function(a,b,c){var z,y
z=W.b2(a)
y=this.c
if(y.p(0,H.n(z)+"::"+b))return this.d.c_(c)
else if(y.p(0,"*::"+b))return this.d.c_(c)
else{y=this.b
if(y.p(0,H.n(z)+"::"+b))return!0
else if(y.p(0,"*::"+b))return!0
else if(y.p(0,H.n(z)+"::*"))return!0
else if(y.p(0,"*::*"))return!0}return!1}],
$isaj:1},
ju:{"^":"d:18;",
$1:function(a){return!C.a.p(C.i,H.E(a))}},
jv:{"^":"d:18;",
$1:function(a){return C.a.p(C.i,H.E(a))}},
jF:{"^":"jt;e,a,b,c,d",
X:function(a,b,c){if(this.bi(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.p(0,b)
return!1},
l:{
dW:function(){var z,y,x,w,v
z=P.f
y=P.dc(C.h,z)
x=H.A(C.h,0)
w=H.m(new W.jG(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.jF(y,P.bt(null,null,null,z),P.bt(null,null,null,z),P.bt(null,null,null,z),null)
y.bA(null,new H.hP(C.h,w,[x,z]),v,null)
return y}}},
jG:{"^":"d:21;",
$1:function(a){return"TEMPLATE::"+H.n(H.E(a))}},
jD:{"^":"i;",
a4:function(a){var z=J.N(a)
if(!!z.$isdk)return!1
z=!!z.$iscq
if(z&&W.b2(a)==="foreignObject")return!1
if(z)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.e.aG(b,"on"))return!1
return this.a4(a)},
$isaj:1},
d5:{"^":"i;a,b,c,0d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.cH(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gu:function(a){return this.d}},
aj:{"^":"i;"},
js:{"^":"i;a,b",$islI:1},
dZ:{"^":"i;a",
ak:function(a){new W.jQ(this).$2(a,null)},
a6:function(a,b){if(b==null)J.c5(a)
else b.removeChild(a)},
bU:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.er(a)
x=y.gbM().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.av(a)}catch(t){H.a5(t)}try{u=W.b2(a)
this.bT(H.b(a,"$isah"),b,z,v,u,H.b(y,"$isO"),H.E(x))}catch(t){if(H.a5(t) instanceof P.ao)throw t
else{this.a6(a,b)
window
s="Removing corrupted element "+H.n(v)
if(typeof console!="undefined")window.console.warn(s)}}},
bT:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a6(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a4(a)){this.a6(a,b)
window
z="Removing disallowed element <"+H.n(e)+"> from "+H.n(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.a6(a,b)
window
z="Removing disallowed type extension <"+H.n(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.c(z.slice(0),[H.A(z,0)])
for(x=f.gJ(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.e(y,x)
w=y[x]
if(!this.a.X(a,J.ew(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.n(e)+" "+w+'="'+H.n(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.N(a).$isdr)this.ak(a.content)},
$ishW:1},
jQ:{"^":"d:22;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.bU(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a6(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.es(z)}catch(w){H.a5(w)
v=H.b(z,"$isz")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.b(y,"$isz")}}},
iD:{"^":"r+eL;"},
iE:{"^":"r+u;"},
iF:{"^":"iE+x;"},
iG:{"^":"r+u;"},
iH:{"^":"iG+x;"},
iO:{"^":"r+u;"},
iP:{"^":"iO+x;"},
j2:{"^":"r+u;"},
j3:{"^":"j2+x;"},
ja:{"^":"r+Z;"},
jb:{"^":"r+Z;"},
jc:{"^":"r+u;"},
jd:{"^":"jc+x;"},
je:{"^":"r+u;"},
jf:{"^":"je+x;"},
ji:{"^":"r+u;"},
jj:{"^":"ji+x;"},
jr:{"^":"r+Z;"},
dT:{"^":"a1+u;"},
dU:{"^":"dT+x;"},
jw:{"^":"r+u;"},
jx:{"^":"jw+x;"},
jA:{"^":"r+Z;"},
jH:{"^":"r+u;"},
jI:{"^":"jH+x;"},
dX:{"^":"a1+u;"},
dY:{"^":"dX+x;"},
jM:{"^":"r+u;"},
jN:{"^":"jM+x;"},
jT:{"^":"r+u;"},
jU:{"^":"jT+x;"},
jV:{"^":"r+u;"},
jW:{"^":"jV+x;"},
jX:{"^":"r+u;"},
jY:{"^":"jX+x;"},
jZ:{"^":"r+u;"},
k_:{"^":"jZ+x;"},
k0:{"^":"r+u;"},
k1:{"^":"k0+x;"}}],["","",,P,{"^":"",
ar:function(a){var z,y,x,w,v
if(a==null)return
z=P.db(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.aP)(y),++w){v=H.E(y[w])
z.F(0,v,a[v])}return z},
ke:function(a,b){var z
H.b(a,"$isO")
H.m(b,{func:1,ret:-1,args:[P.i]})
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cK(a,new P.kf(z))
return z},
d2:function(){var z=$.d1
if(z==null){z=J.c4(window.navigator.userAgent,"Opera",0)
$.d1=z}return z},
eR:function(){var z,y
z=$.cZ
if(z!=null)return z
y=$.d_
if(y==null){y=J.c4(window.navigator.userAgent,"Firefox",0)
$.d_=y}if(y)z="-moz-"
else{y=$.d0
if(y==null){y=!P.d2()&&J.c4(window.navigator.userAgent,"Trident/",0)
$.d0=y}if(y)z="-ms-"
else z=P.d2()?"-o-":"-webkit-"}$.cZ=z
return z},
kf:{"^":"d:16;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",jk:{"^":"i;a,b",
bz:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.d.R(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.d.R(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.d.R(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.d.R(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.d.R(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.d.R(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.d.R(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.a3()
this.a3()
this.a3()
this.a3()},
a3:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.d.R(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
a5:function(){this.a3()
var z=this.a
this.a3()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
l:{
jl:function(a){var z=new P.jk(0,0)
z.bz(a)
return z}}},jm:{"^":"i;$ti"},a6:{"^":"jm;$ti"}}],["","",,P,{"^":"",b4:{"^":"r;",$isb4:1,"%":"SVGLength"},l9:{"^":"j7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b){return this.h(a,b)},
$ist:1,
$ast:function(){return[P.b4]},
$asu:function(){return[P.b4]},
$isp:1,
$asp:function(){return[P.b4]},
$iso:1,
$aso:function(){return[P.b4]},
$asx:function(){return[P.b4]},
"%":"SVGLengthList"},b6:{"^":"r;",$isb6:1,"%":"SVGNumber"},lo:{"^":"jh;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b){return this.h(a,b)},
$ist:1,
$ast:function(){return[P.b6]},
$asu:function(){return[P.b6]},
$isp:1,
$asp:function(){return[P.b6]},
$iso:1,
$aso:function(){return[P.b6]},
$asx:function(){return[P.b6]},
"%":"SVGNumberList"},lr:{"^":"r;0i:length=","%":"SVGPointList"},dk:{"^":"cq;",$isdk:1,"%":"SVGScriptElement"},lx:{"^":"jC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b){return this.h(a,b)},
$ist:1,
$ast:function(){return[P.f]},
$asu:function(){return[P.f]},
$isp:1,
$asp:function(){return[P.f]},
$iso:1,
$aso:function(){return[P.f]},
$asx:function(){return[P.f]},
"%":"SVGStringList"},cq:{"^":"ah;",
S:function(a,b,c,d){var z,y,x,w,v,u
if(c==null){z=H.c([],[W.aj])
C.a.k(z,W.dL(null))
C.a.k(z,W.dW())
C.a.k(z,new W.jD())
c=new W.dZ(new W.dg(z))}y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.l).c8(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aa(w)
u=z.ga1(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscq:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},ba:{"^":"r;",$isba:1,"%":"SVGTransform"},lF:{"^":"jP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b){return this.h(a,b)},
$ist:1,
$ast:function(){return[P.ba]},
$asu:function(){return[P.ba]},
$isp:1,
$asp:function(){return[P.ba]},
$iso:1,
$aso:function(){return[P.ba]},
$asx:function(){return[P.ba]},
"%":"SVGTransformList"},j6:{"^":"r+u;"},j7:{"^":"j6+x;"},jg:{"^":"r+u;"},jh:{"^":"jg+x;"},jB:{"^":"r+u;"},jC:{"^":"jB+x;"},jO:{"^":"r+u;"},jP:{"^":"jO+x;"}}],["","",,P,{"^":"",kQ:{"^":"r;0i:length=","%":"AudioBuffer"},kR:{"^":"iB;",
h:function(a,b){return P.ar(a.get(H.E(b)))},
I:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ar(y.value[1]))}},
gJ:function(a){var z=H.c([],[P.f])
this.I(a,new P.ez(z))
return z},
gi:function(a){return a.size},
$asZ:function(){return[P.f,null]},
$isO:1,
$asO:function(){return[P.f,null]},
"%":"AudioParamMap"},ez:{"^":"d:7;a",
$2:function(a,b){return C.a.k(this.a,a)}},kS:{"^":"a1;0i:length=","%":"AudioTrackList"},eA:{"^":"a1;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lp:{"^":"eA;0i:length=","%":"OfflineAudioContext"},iB:{"^":"r+Z;"}}],["","",,P,{"^":"",cm:{"^":"r;",
b3:function(a,b,c,d,e,f,g,h,i,j){var z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(!!J.N(g).$isaR&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.k(P.ey("Incorrect number or type of arguments"))},
Z:function(a,b,c,d,e,f,g){return this.b3(a,b,c,d,e,f,g,null,null,null)},
$iscm:1,
"%":"WebGLRenderingContext"},G:{"^":"r;",$isG:1,"%":"WebGLTexture"},h:{"^":"r;",$ish:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lv:{"^":"jz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.L(b,a,null,null,null))
return P.ar(a.item(b))},
m:function(a,b){return this.h(a,b)},
$ist:1,
$ast:function(){return[[P.O,,,]]},
$asu:function(){return[[P.O,,,]]},
$isp:1,
$asp:function(){return[[P.O,,,]]},
$iso:1,
$aso:function(){return[[P.O,,,]]},
$asx:function(){return[[P.O,,,]]},
"%":"SQLResultSetRowList"},jy:{"^":"r+u;"},jz:{"^":"jy+x;"}}],["","",,V,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r
z=new V.J(new Float32Array(16))
z.ax()
$.j=z
z=$.$get$bf()
z.toString
y=P.hL(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=(z&&C.m).aD(z,"webgl",y)
x=H.b(x==null?C.m.aD(z,"experimental-webgl",y):x,"$iscm")
$.a=x
if(x==null)return
V.kG()
z=$.$get$af().a9(0,"fps")
$.eo=z
if(!z)J.c5(document.querySelector("#fps"))
if($.$get$af().a9(0,"width")){w=H.E($.$get$af().h(0,"width"))
z=$.$get$bf()
v=H.cl(w,null)
z.width=v==null?500:v}if($.$get$af().a9(0,"height")){u=H.E($.$get$af().h(0,"height"))
z=$.$get$bf()
v=H.cl(u,null)
z.height=v==null?500:v}if($.$get$af().a9(0,"overflow")){z=document.body.style
z.overflow="hidden"}t=$.$get$af().a9(0,"lsn")?P.ku(H.E($.$get$af().h(0,"lsn")),null,null):1
s=H.b(document.querySelector("#lessonNumber"),"$isbP")
for(r=1;r<17;++r){s.children
s.appendChild(W.i_("Lesson "+r,""+r,null,t===r))}s.toString
z=W.a0
W.ae(s,"change",H.m(new V.kB(s),{func:1,ret:-1,args:[z]}),!1,z)
z=s.selectedIndex
if(typeof z!=="number")return z.T()
z=V.em(z+1)
z.N($.$get$cC())
$.bD=z
$.a.clearColor(0,0,0,1)
z=W.aA
v={func:1,ret:-1,args:[z]}
W.ae(window,"keydown",H.m(new V.kC(),v),!1,z)
W.ae(window,"keyup",H.m(new V.kD(),v),!1,z)
V.kL(0)},
kL:[function(a){var z,y,x
C.I.gc0(window).w(V.kx(),null)
if($.eo)V.kj(H.cE(a))
$.bD.B()
$.bD.A(0,H.cE(a))
z=$.bD
y=$.$get$bf()
x=y.width
y=y.height
if(typeof x!=="number")return x.cw()
if(typeof y!=="number")return H.R(y)
z.C(x,y,x/y)},"$1","kx",4,0,10],
am:function(a){return C.a.cd(H.Y(a,"$iso",[P.S],"$aso"),new V.k9(),new V.ka())!=null},
kG:function(){var z,y,x,w,v,u,t,s
z=window.location.search
y=(J.ev(z,"?")?C.e.aH(z,1):z).split("&")
for(x=y.length,w=0;w<x;++w){v=J.eu(y[w],"=")
u=v.length
if(u===1){t=$.$get$af()
if(0>=u)return H.e(v,0)
t.F(0,v[0],"")}else{t=$.$get$af()
if(0>=u)return H.e(v,0)
s=v[0]
if(1>=u)return H.e(v,1)
t.F(0,s,v[1])}}},
an:function(a,b,c,d){var z,y
z={func:1}
H.m(d,z)
H.m(a,z)
H.m(b,z)
H.m(c,z)
if(b!=null&&V.am(H.c([65,37],[P.S])))b.$0()
if(c!=null&&V.am(H.c([68,39],[P.S])))c.$0()
z=[P.S]
y=V.am(H.c([83,40],z))
if(y)a.$0()
z=V.am(H.c([87,38],z))
if(z)d.$0()},
kj:function(a){var z,y
z=$.cz+1
$.cz=z
y=$.eh
if(typeof a!=="number")return a.G()
if(a-y<500)return
z=$.e8*0.1+z*0.9*2
$.e8=z
$.$get$eb().textContent=C.u.ct(z,2)
$.cz=0
$.eh=a},
U:function(a,b){var z,y,x,w,v
H.m(b,{func:1,args:[P.G,W.aR]})
z=P.G
y=new P.a_(0,$.I,[z])
x=$.a.createTexture()
w=document.createElement("img")
v=W.a0
W.ae(w,"load",H.m(new V.kz(b,x,w,new P.cr(y,[z])),{func:1,ret:-1,args:[v]}),!1,v)
w.src=a
return y},
m1:[function(a,b){var z
$.a.pixelStorei(37440,1)
$.a.bindTexture(3553,a)
z=$.a;(z&&C.f).Z(z,3553,0,6408,6408,5121,b)
$.a.texParameteri(3553,10240,9729)
$.a.texParameteri(3553,10241,9985)
$.a.generateMipmap(3553)
$.a.bindTexture(3553,null)},"$2","a7",8,0,25],
em:function(a){var z,y,x,w,v,u
switch(a){case 1:z=new V.fi(0)
y=[P.f]
y=V.T("          precision mediump float;\n\n          void main(void) {\n              gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n          }\n        ","          attribute vec3 aVertexPosition;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n          }\n        ",H.c(["aVertexPosition"],y),H.c(["uMVMatrix","uPMatrix"],y))
z.b=y
$.a.useProgram(y.c)
y=$.a.createBuffer()
z.c=y
$.a.bindBuffer(34962,y)
y=[P.D]
$.a.bufferData(34962,new Float32Array(H.w(H.c([0,1,0,-1,-1,0,1,-1,0],y))),35044)
x=$.a.createBuffer()
z.d=x
$.a.bindBuffer(34962,x)
$.a.bufferData(34962,new Float32Array(H.w(H.c([1,1,0,-1,1,0,1,-1,0,-1,-1,0],y))),35044)
$.a.clearColor(0,0,0,1)
return z
case 2:z=new V.h4(0)
y=[P.f]
y=V.T("          precision mediump float;\n\n          varying vec4 vColor;\n\n          void main(void) {\n            gl_FragColor = vColor;\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec4 aVertexColor;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec4 vColor;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vColor = aVertexColor;\n          }\n        ",H.c(["aVertexPosition","aVertexColor"],y),H.c(["uMVMatrix","uPMatrix"],y))
z.b=y
$.a.useProgram(y.c)
y=$.a.createBuffer()
z.c=y
$.a.bindBuffer(34962,y)
y=[P.D]
$.a.bufferData(34962,new Float32Array(H.w(H.c([0,1,0,-1,-1,0,1,-1,0],y))),35044)
x=$.a.createBuffer()
z.e=x
$.a.bindBuffer(34962,x)
w=H.c([1,0,0,1,0,1,0,1,0,0,1,1],y)
$.a.bufferData(34962,new Float32Array(H.w(w)),35044)
x=$.a.createBuffer()
z.d=x
$.a.bindBuffer(34962,x)
$.a.bufferData(34962,new Float32Array(H.w(H.c([1,1,0,-1,1,0,1,-1,0,-1,-1,0],y))),35044)
x=$.a.createBuffer()
z.f=x
$.a.bindBuffer(34962,x)
w=H.c([0.5,0.5,1,1,0.5,0.5,1,1,0.5,0.5,1,1,0.5,0.5,1,1],y)
$.a.bufferData(34962,new Float32Array(H.w(w)),35044)
$.a.clearColor(0,0,0,1)
return z
case 3:z=new V.h5(0,0,0)
y=[P.f]
y=V.T("          precision mediump float;\n\n          varying vec4 vColor;\n\n          void main(void) {\n            gl_FragColor = vColor;\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec4 aVertexColor;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec4 vColor;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vColor = aVertexColor;\n          }\n        ",H.c(["aVertexPosition","aVertexColor"],y),H.c(["uMVMatrix","uPMatrix"],y))
z.b=y
$.a.useProgram(y.c)
y=$.a.createBuffer()
z.c=y
$.a.bindBuffer(34962,y)
y=[P.D]
$.a.bufferData(34962,new Float32Array(H.w(H.c([0,1,0,-1,-1,0,1,-1,0],y))),35044)
x=$.a.createBuffer()
z.e=x
$.a.bindBuffer(34962,x)
w=H.c([1,0,0,1,0,1,0,1,0,0,1,1],y)
$.a.bufferData(34962,new Float32Array(H.w(w)),35044)
x=$.a.createBuffer()
z.d=x
$.a.bindBuffer(34962,x)
$.a.bufferData(34962,new Float32Array(H.w(H.c([1,1,0,-1,1,0,1,-1,0,-1,-1,0],y))),35044)
x=$.a.createBuffer()
z.f=x
$.a.bindBuffer(34962,x)
w=H.c([0.5,0.5,1,1,0.5,0.5,1,1,0.5,0.5,1,1,0.5,0.5,1,1],y)
$.a.bufferData(34962,new Float32Array(H.w(w)),35044)
$.a.clearColor(0,0,0,1)
return z
case 4:z=new V.i3()
y=$.a.createBuffer()
z.a=y
z.b=$.a.createBuffer()
z.c=$.a.createBuffer()
$.a.bindBuffer(34962,y)
y=[P.D]
v=H.c([0,1,0,-1,-1,1,1,-1,1,0,1,0,1,-1,1,1,-1,-1,0,1,0,1,-1,-1,-1,-1,-1,0,1,0,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,1],y)
$.a.bufferData(34962,new Float32Array(H.w(v)),35044)
x=$.a.createBuffer()
z.b=x
$.a.bindBuffer(34962,x)
u=H.c([0,0.4472135901451111,0.8944271802902222,0,0.4472135901451111,0.8944271802902222,0,0.4472135901451111,0.8944271802902222,0.8944271802902222,0.4472135901451111,0,0.8944271802902222,0.4472135901451111,0,0.8944271802902222,0.4472135901451111,0,0,0.4472135901451111,-0.8944271802902222,0,0.4472135901451111,-0.8944271802902222,0,0.4472135901451111,-0.8944271802902222,-0.8944271802902222,0.4472135901451111,0,-0.8944271802902222,0.4472135901451111,0,-0.8944271802902222,0.4472135901451111,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],y)
$.a.bufferData(34962,new Float32Array(H.w(u)),35044)
x=$.a.createBuffer()
z.d=x
$.a.bindBuffer(34962,x)
w=H.c([1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],y)
$.a.bufferData(34962,new Float32Array(H.w(w)),35044)
y=V.aQ()
z=new V.h6(z,y,0,0,0,0,0,0)
x=[P.f]
x=V.T("          precision mediump float;\n\n          varying vec4 vColor;\n\n          void main(void) {\n            gl_FragColor = vColor;\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec4 aVertexColor;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec4 vColor;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vColor = aVertexColor;\n          }\n        ",H.c(["aVertexPosition","aVertexColor"],x),H.c(["uMVMatrix","uPMatrix"],x))
z.b=x
$.a.useProgram(x.c)
y.e=V.eP()
$.a.clearColor(0,0,0,1)
return z
case 5:return V.hc()
case 6:return V.hj()
case 7:return V.hr()
case 8:return V.hy()
case 9:return V.hF()
case 10:return V.fk()
case 11:return V.fp()
case 12:return V.fv()
case 13:return V.d8()
case 14:return V.fK()
case 15:return V.fU()
case 16:return V.h2()}return},
eN:{"^":"i;0a,0b,0c,0d,0e",
ag:function(a,b,c,d,e){H.v(e)
H.v(c)
H.v(b)
H.v(a)
H.m(d,{func:1})
if(e!=null){$.a.bindBuffer(34962,this.a)
$.a.vertexAttribPointer(e,3,5126,!1,0,0)}if(c!=null){$.a.bindBuffer(34962,this.b)
$.a.vertexAttribPointer(c,3,5126,!1,0,0)}if(b!=null){$.a.bindBuffer(34962,this.c)
$.a.vertexAttribPointer(b,2,5126,!1,0,0)}if(a!=null){$.a.bindBuffer(34962,this.e.a)
$.a.vertexAttribPointer(a,4,5126,!1,0,0)}d.$0()
$.a.bindBuffer(34963,this.d)
$.a.drawElements(4,36,5123,0)},
H:function(a,b,c,d){return this.ag(null,a,b,c,d)},
H:function(a,b,c,d){return this.ag(null,a,b,c,d)},
af:function(a,b,c){return this.ag(null,a,null,b,c)},
cc:function(a,b,c){return this.ag(a,null,null,b,c)},
l:{
aQ:function(){var z,y,x,w,v,u
z=new V.eN()
y=$.a.createBuffer()
z.a=y
$.a.bindBuffer(34962,y)
y=[P.D]
x=H.c([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1],y)
$.a.bufferData(34962,new Float32Array(H.w(x)),35044)
w=$.a.createBuffer()
z.b=w
$.a.bindBuffer(34962,w)
v=H.c([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0],y)
$.a.bufferData(34962,new Float32Array(H.w(v)),35044)
w=$.a.createBuffer()
z.c=w
$.a.bindBuffer(34962,w)
u=H.c([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1],y)
$.a.bufferData(34962,new Float32Array(H.w(u)),35044)
y=$.a.createBuffer()
z.d=y
$.a.bindBuffer(34963,y)
$.a.bufferData(34963,new Uint16Array(H.w(H.c([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],[P.S]))),35044)
return z}}},
eO:{"^":"i;0a",
bj:function(){var z,y,x,w,v,u,t
z=$.a.createBuffer()
this.a=z
$.a.bindBuffer(34962,z)
z=P.D
y=[z]
x=[H.c([1,0,0,1],y),H.c([1,1,0,1],y),H.c([0,1,0,1],y),H.c([1,0.5,0.5,1],y),H.c([1,0,1,1],y),H.c([0,0,1,1],y)]
w=H.c([],[z])
for(v=0;v<6;++v){u=x[v]
for(t=0;t<4;++t)C.a.K(w,u)}$.a.bufferData(34962,new Float32Array(H.w(w)),35044)},
l:{
eP:function(){var z=new V.eO()
z.bj()
return z}}},
eX:{"^":"i;a,b,0c,0d,0e",
bk:function(a,b,c,d){var z,y,x,w,v,u
z=$.a.createShader(35632)
this.d=z
$.a.shaderSource(z,a)
$.a.compileShader(this.d)
z=$.a.createShader(35633)
this.e=z
$.a.shaderSource(z,b)
$.a.compileShader(this.e)
z=$.a.createProgram()
this.c=z
$.a.attachShader(z,this.e)
$.a.attachShader(this.c,this.d)
$.a.linkProgram(this.c)
if(!H.e9($.a.getProgramParameter(this.c,35714)))P.a4("Could not initialise shaders")
for(z=c.length,y=this.a,x=0;x<c.length;c.length===z||(0,H.aP)(c),++x){w=c[x]
v=$.a.getAttribLocation(this.c,w)
$.a.enableVertexAttribArray(v)
y.F(0,w,v)}for(z=d.length,y=this.b,x=0;x<d.length;d.length===z||(0,H.aP)(d),++x){u=d[x]
y.F(0,u,$.a.getUniformLocation(this.c,u))}},
l:{
T:function(a,b,c,d){var z=P.f
z=new V.eX(new H.bs(0,0,[z,P.S]),new H.bs(0,0,[z,P.h]))
z.bk(a,b,c,d)
return z}}},
aS:{"^":"i;0a,0b,0c,0d,0e,f",
H:function(a,b,c,d){var z,y,x
H.m(c,{func:1})
if(d!=null){$.a.bindBuffer(34962,this.c)
$.a.vertexAttribPointer(d,3,5126,!1,0,0)}if(b!=null&&this.a!=null){$.a.bindBuffer(34962,this.a)
$.a.vertexAttribPointer(b,3,5126,!1,0,0)}if(a!=null&&this.b!=null){$.a.bindBuffer(34962,this.b)
$.a.vertexAttribPointer(a,2,5126,!1,0,0)}c.$0()
z=this.d
if(z!=null){$.a.bindBuffer(34963,z)
$.a.drawElements(4,this.e,5123,0)}else{z=this.f
y=this.e
x=$.a
if(z)x.drawArrays(5,0,y)
else x.drawArrays(4,0,y)}},
af:function(a,b,c){return this.H(a,null,b,c)},
l:{
d7:function(a){var z,y,x,w,v,u,t,s,r,q
z=new V.aS(!1)
P.a4(a)
y=H.b(C.C.c9(0,a),"$isO")
x=J.bB(y)
w=[P.M]
v=H.Y(x.h(y,"vertexNormals"),"$iso",w,"$aso")
if(v!=null){u=J.bG(v,P.D)
P.a4(u)
t=$.a.createBuffer()
z.a=t
$.a.bindBuffer(34962,t)
$.a.bufferData(34962,new Float32Array(H.w(u)),35044)}v=H.Y(x.h(y,"vertexTextureCoords"),"$iso",w,"$aso")
if(v!=null){P.a4(v)
s=J.bG(v,P.D)
P.a4(s)
t=$.a.createBuffer()
z.b=t
$.a.bindBuffer(34962,t)
$.a.bufferData(34962,new Float32Array(H.w(s)),35044)}r=J.bG(H.Y(x.h(y,"vertexPositions"),"$iso",w,"$aso"),P.D)
t=$.a.createBuffer()
z.c=t
$.a.bindBuffer(34962,t)
$.a.bufferData(34962,new Float32Array(H.w(r)),35044)
v=H.Y(x.h(y,"indices"),"$iso",w,"$aso")
if(v!=null){q=J.bG(v,P.S)
x=$.a.createBuffer()
z.d=x
$.a.bindBuffer(34963,x)
$.a.bufferData(34963,new Uint16Array(H.w(q)),35044)
z.e=J.au(q.a)}else{x=J.au(r.a)
if(typeof x!=="number")return x.cA()
z.e=C.d.R(x,3)}return z},
ch:function(a){var z,y,x,w,v
P.a4(a)
z=V.aS
y=new P.a_(0,$.I,[z])
z=W.eZ(a,null,null).w(new V.fg(a,new P.cr(y,[z])),null)
x=new V.fh()
w=H.A(z,0)
v=$.I
if(v!==C.b)x=P.e_(x,v)
z.an(new P.aL(new P.a_(0,v,[w]),2,null,x,[w,w]))
return y}}},
fg:{"^":"d:23;a,b",
$1:function(a){var z
H.E(a)
P.a4(a)
z=V.d7(a)
P.a4("json object from "+this.a+" loaded as "+z.j(0))
this.b.a8(0,z)}},
fh:{"^":"d:24;",
$1:function(a){P.a4(a)
return!0}},
kB:{"^":"d:20;a",
$1:function(a){var z=this.a.selectedIndex
if(typeof z!=="number")return z.T()
z=V.em(z+1)
z.N($.$get$cC())
$.bD=z}},
kC:{"^":"d:12;",
$1:function(a){H.b(a,"$isaA")
$.$get$a3().k(0,a.keyCode)}},
kD:{"^":"d:12;",
$1:function(a){H.b(a,"$isaA")
$.$get$a3().cn(0,a.keyCode)}},
k9:{"^":"d:27;",
$1:function(a){H.v(a)
return $.$get$a3().p(0,a)}},
ka:{"^":"d:2;",
$0:function(){return}},
W:{"^":"i;",
A:function(a,b){},
B:function(){},
N:function(a){(a&&C.c).bb(a,"If you see this, don't worry, the lesson doesn't have any parameters for you to change! Generally up/down/left/right or WASD work.")}},
kz:{"^":"d:20;a,b,c,d",
$1:function(a){var z=this.b
this.a.$2(z,this.c)
this.d.a8(0,z)}},
ak:{"^":"i;",
ak:function(a){},
$ishW:1},
fi:{"^":"W;0b,0c,0d,a",
C:function(a,b,c){var z
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=[P.D]
$.j.n(0,H.c([-1.5,0,-7],z))
$.a.bindBuffer(34962,this.c)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
this.v()
$.a.drawArrays(4,0,3)
$.j.n(0,H.c([3,0,0],z))
$.a.bindBuffer(34962,this.d)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
this.v()
$.a.drawArrays(5,0,4)
z=$.$get$y()
if(0>=z.length)return H.e(z,-1)
$.j=z.pop()},
v:function(){$.a.uniformMatrix4fv(this.b.b.h(0,"uPMatrix"),!1,$.H.a)
$.a.uniformMatrix4fv(this.b.b.h(0,"uMVMatrix"),!1,$.j.a)},
A:function(a,b){},
B:function(){}},
fj:{"^":"W;0b,0c,0d,e,f,r,x,y,z,Q,ch,a",
bl:function(){P.a4("Lesson 10")
V.ch("world.json").w(new V.fl(this),null)
V.U("mcdole.gif",new V.fm(this))
var z=[P.f]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec2 vTextureCoord;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n          }\n        ",H.c(["aVertexPosition","aTextureCoord"],z),H.c(["uMVMatrix","uPMatrix","uSampler"],z))
this.b=z
$.a.useProgram(z.c)},
C:function(a,b,c){var z,y
if(!(this.d!=null&&this.c!=null))return
$.a.disable(3042)
$.a.enable(2929)
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=$.j
z.M(-this.e*0.017453292519943295)
z.D(-this.f*0.017453292519943295)
z.n(0,H.c([-this.y,-this.z,-this.Q],[P.D]))
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.c)
$.a.uniform1i(H.b(this.b.b.h(0,"uSampler"),"$ish"),0)
z=this.d
y=H.v(this.b.a.h(0,"aVertexPosition"))
z.af(H.v(this.b.a.h(0,"aTextureCoord")),new V.fn(this),y)
y=$.$get$y()
if(0>=y.length)return H.e(y,-1)
$.j=y.pop()},
A:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
y=b-z
if(this.ch!==0){this.y=this.y-Math.sin(this.f*0.017453292519943295)*this.ch*y
this.Q=this.Q-Math.cos(this.f*0.017453292519943295)*this.ch*y}this.f=this.f+this.x*y
this.e=this.e+this.r*y}this.a=b},
B:function(){var z=[P.S]
if(V.am(H.c([38,87],z)))this.ch=0.003
else if(V.am(H.c([40,83],z)))this.ch=-0.003
else this.ch=0
if(V.am(H.c([37,65],z)))this.x=0.1
else if(V.am(H.c([39,68],z)))this.x=-0.1
else this.x=0
if(V.am(H.c([33,57],z)))this.r=0.1
else if(V.am(H.c([34,51],z)))this.r=-0.1
else this.r=0},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,"    Use the cursor keys or WASD to run around, and <code>Page Up</code>/<code>Page Down</code> to\n    look up and down.\n    ",z)},
l:{
fk:function(){var z=new V.fj(0,0,0,0,0,0.4,0,0,0)
z.bl()
return z}}},
fl:{"^":"d:11;a",
$1:function(a){H.b(a,"$isaS")
this.a.d=a
P.a4("world loaded with "+H.n(a.e))}},
fm:{"^":"d:6;a",
$2:function(a,b){var z
$.a.pixelStorei(37440,1)
$.a.bindTexture(3553,a)
z=$.a;(z&&C.f).Z(z,3553,0,6408,6408,5121,b)
$.a.texParameteri(3553,10240,9729)
$.a.texParameteri(3553,10241,9729)
this.a.c=a
P.a4("texture loaded")}},
fn:{"^":"d:2;a",
$0:function(){var z=this.a
$.a.uniformMatrix4fv(H.b(z.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(z.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)}},
fo:{"^":"W;0b,0c,0d,e,f,0r,0x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,a",
bm:function(){var z,y,x
this.c=V.bQ(30,30,2)
z=[P.f]
this.b=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n\n          uniform vec3 uAmbientColor;\n\n          uniform vec3 uLightingDirection;\n          uniform vec3 uDirectionalColor;\n\n          uniform bool uUseLighting;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n\n              if (!uUseLighting) {\n                  vLightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 transformedNormal = uNMatrix * aVertexNormal;\n                  float directionalLightWeighting = max(dot(transformedNormal, uLightingDirection), 0.0);\n                  vLightWeighting = uAmbientColor + uDirectionalColor * directionalLightWeighting;\n              }\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uSampler","uMVMatrix","uPMatrix","uNMatrix","uAmbientColor","uLightingDirection","uDirectionalColor","uUseLighting"],z))
V.U("moon.bmp",V.a7()).w(new V.fq(this),P.G)
$.a.useProgram(this.b.c)
z=$.$get$bf()
z.toString
y=W.aT
x={func:1,ret:-1,args:[y]}
W.ae(z,"mousedown",H.m(new V.fr(this),x),!1,y)
z=document
W.ae(z,"mouseup",H.m(new V.fs(this),x),!1,y)
W.ae(z,"mousemove",H.m(new V.ft(this),x),!1,y)},
C:function(a,b,c){var z,y,x,w,v
if(this.d==null)return
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=this.ch.checked
y=$.a
x=H.b(this.b.b.h(0,"uUseLighting"),"$ish")
y.uniform1i(x,z?1:0)
if(z){$.a.uniform3f(H.b(this.b.b.h(0,"uAmbientColor"),"$ish"),P.q(this.cx.value,null),P.q(this.cy.value,null),P.q(this.db.value,null))
w=V.bS(P.q(this.dx.value,null),P.q(this.dy.value,null),P.q(this.fr.value,null)).ay(0).al(0,-1)
$.a.uniform3fv(H.b(this.b.b.h(0,"uLightingDirection"),"$ish"),w.a)
$.a.uniform3f(H.b(this.b.b.h(0,"uDirectionalColor"),"$ish"),P.q(this.fx.value,null),P.q(this.fy.value,null),P.q(this.go.value,null))}y=$.$get$y();(y&&C.a).k(y,new V.J(new Float32Array(H.w($.j.a))))
y=$.j
y.n(0,H.c([0,0,-7],[P.D]))
$.j=y
$.j=y.aE(0,this.e)
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.d)
$.a.uniform1i(H.b(this.b.b.h(0,"uSampler"),"$ish"),0)
y=this.c
x=H.v(this.b.a.h(0,"aVertexPosition"))
v=H.v(this.b.a.h(0,"aVertexNormal"))
y.H(H.v(this.b.a.h(0,"aTextureCoord")),v,this.gt(),x)
x=$.$get$y()
if(0>=x.length)return H.e(x,-1)
$.j=x.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)
var z=$.j.V()
z.W()
$.a.uniformMatrix3fv(H.b(this.b.b.h(0,"uNMatrix"),"$ish"),!1,z.a)},"$0","gt",0,0,1],
A:function(a,b){},
B:function(){},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,'"\n    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    Spin the moon by dragging it with the mouse.\n    <br/>\n\n    <h2>Directional light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Direction:</b>\n            <td>X: <input type="text" id="lightDirectionX" value="-1.0" />\n            <td>Y: <input type="text" id="lightDirectionY" value="-1.0" />\n            <td>Z: <input type="text" id="lightDirectionZ" value="-1.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="directionalR" value="0.8" />\n            <td>G: <input type="text" id="directionalG" value="0.8" />\n            <td>B: <input type="text" id="directionalB" value="0.8" />\n        </tr>\n    </table>\n\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n    <br/>\n\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.ch=H.b(z.querySelector("#lighting"),"$isl")
this.cx=H.b(z.querySelector("#ambientR"),"$isl")
this.cy=H.b(z.querySelector("#ambientG"),"$isl")
this.db=H.b(z.querySelector("#ambientB"),"$isl")
this.fx=H.b(z.querySelector("#directionalR"),"$isl")
this.fy=H.b(z.querySelector("#directionalG"),"$isl")
this.go=H.b(z.querySelector("#directionalB"),"$isl")
this.dx=H.b(z.querySelector("#lightDirectionX"),"$isl")
this.dy=H.b(z.querySelector("#lightDirectionY"),"$isl")
this.fr=H.b(z.querySelector("#lightDirectionZ"),"$isl")},
l:{
fp:function(){var z=new V.J(new Float32Array(16))
z.ax()
z=new V.fo(z,!1,!1,0)
z.bm()
return z}}},
fq:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.d=a
return a}},
fr:{"^":"d:9;a",
$1:function(a){var z,y
H.b(a,"$isaT")
z=this.a
z.f=!0
y=a.clientX
a.clientY
z.r=y
z.x=a.clientY}},
fs:{"^":"d:9;a",
$1:function(a){H.b(a,"$isaT")
this.a.f=!1}},
ft:{"^":"d:9;a",
$1:function(a){var z,y,x,w,v
H.b(a,"$isaT")
z=this.a
if(!z.f)return
y=a.clientX
x=a.clientY
w=z.r
if(typeof y!=="number")return y.G()
if(typeof w!=="number")return H.R(w)
v=new V.J(new Float32Array(16))
v.ax()
v.D((y-w)/10*0.017453292519943295)
w=z.x
if(typeof x!=="number")return x.G()
if(typeof w!=="number")return H.R(w)
v.M((x-w)/10*0.017453292519943295)
z.e=v.aE(0,z.e)
z.r=y
z.x=x}},
fu:{"^":"W;0b,0c,0d,0e,0f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a",
bn:function(){this.d=V.bQ(30,30,2)
this.c=V.aQ()
var z=[P.f]
this.b=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n\n          uniform vec3 uAmbientColor;\n\n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingColor;\n\n          uniform bool uUseLighting;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          void main(void) {\n              vec4 mvPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * mvPosition;\n              vTextureCoord = aTextureCoord;\n\n              if (!uUseLighting) {\n                  vLightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 lightDirection = normalize(uPointLightingLocation - mvPosition.xyz);\n\n                  vec3 transformedNormal = uNMatrix * aVertexNormal;\n                  float directionalLightWeighting = max(dot(transformedNormal, lightDirection), 0.0);\n                  vLightWeighting = uAmbientColor + uPointLightingColor * directionalLightWeighting;\n              }\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uSampler","uMVMatrix","uPMatrix","uNMatrix","uAmbientColor","uPointLightingLocation","uPointLightingColor","uUseLighting"],z))
z=P.G
V.U("moon.bmp",V.a7()).w(new V.fw(this),z)
V.U("crate.gif",V.a7()).w(new V.fx(this),z)
$.a.useProgram(this.b.c)
$.a.enable(2929)},
C:function(a,b,c){var z,y,x,w,v,u
if(!(this.e!=null&&this.f!=null))return
$.a.enable(2929)
$.a.disable(3042)
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.H=V.X(45,c,0.1,100)
$.a.useProgram(this.b.c)
z=this.z.checked
y=$.a
x=H.b(this.b.b.h(0,"uUseLighting"),"$ish")
y.uniform1i(x,z?1:0)
if(z){$.a.uniform3f(H.b(this.b.b.h(0,"uAmbientColor"),"$ish"),P.q(this.Q.value,null),P.q(this.ch.value,null),P.q(this.cx.value,null))
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingLocation"),"$ish"),P.q(this.cy.value,null),P.q(this.db.value,null),P.q(this.dx.value,null))
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingColor"),"$ish"),P.q(this.dy.value,null),P.q(this.fr.value,null),P.q(this.fx.value,null))}y=$.$get$y();(y&&C.a).k(y,new V.J(new Float32Array(H.w($.j.a))))
y=$.j
x=[P.D]
y.n(0,H.c([0,0,-20],x))
y.M(this.y*0.017453292519943295)
y=$.$get$y();(y&&C.a).k(y,new V.J(new Float32Array(H.w($.j.a))))
y=$.j
y.D(this.r*0.017453292519943295)
y.n(0,H.c([5,0,0],x))
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.e)
$.a.uniform1i(H.b(this.b.b.h(0,"uSampler"),"$ish"),0)
y=this.d
w=H.v(this.b.a.h(0,"aVertexPosition"))
v=H.v(this.b.a.h(0,"aVertexNormal"))
u=this.gt()
y.H(H.v(this.b.a.h(0,"aTextureCoord")),v,u,w)
w=$.$get$y()
if(0>=w.length)return H.e(w,-1)
w=w.pop()
$.j=w
w.D(this.x*0.017453292519943295)
w.n(0,H.c([5,0,0],x))
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.f)
$.a.uniform1i(H.b(this.b.b.h(0,"uSampler"),"$ish"),0)
x=this.c
w=H.v(this.b.a.h(0,"aVertexPosition"))
v=H.v(this.b.a.h(0,"aVertexNormal"))
x.H(H.v(this.b.a.h(0,"aTextureCoord")),v,u,w)
w=$.$get$y()
if(0>=w.length)return H.e(w,-1)
$.j=w.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)
var z=$.j.V()
z.W()
$.a.uniformMatrix3fv(H.b(this.b.b.h(0,"uNMatrix"),"$ish"),!1,z.a)},"$0","gt",0,0,1],
A:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
z=0.05*(b-z)
this.r=this.r+z
this.x+=z}this.a=b},
B:function(){V.an(new V.fy(this),new V.fz(this),new V.fA(this),new V.fB(this))},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,'    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    <br/>\n\n    <h2>Point light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Location:</b>\n            <td>X: <input type="text" id="lightPositionX" value="0.0" />\n            <td>Y: <input type="text" id="lightPositionY" value="0.0" />\n            <td>Z: <input type="text" id="lightPositionZ" value="-20.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="pointR" value="0.8" />\n            <td>G: <input type="text" id="pointG" value="0.8" />\n            <td>B: <input type="text" id="pointB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n    <br/>\n\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.z=H.b(z.querySelector("#lighting"),"$isl")
this.Q=H.b(z.querySelector("#ambientR"),"$isl")
this.ch=H.b(z.querySelector("#ambientG"),"$isl")
this.cx=H.b(z.querySelector("#ambientB"),"$isl")
this.dy=H.b(z.querySelector("#pointR"),"$isl")
this.fr=H.b(z.querySelector("#pointG"),"$isl")
this.fx=H.b(z.querySelector("#pointB"),"$isl")
this.cy=H.b(z.querySelector("#lightPositionX"),"$isl")
this.db=H.b(z.querySelector("#lightPositionY"),"$isl")
this.dx=H.b(z.querySelector("#lightPositionZ"),"$isl")},
l:{
fv:function(){var z=new V.fu(180,0,0,0)
z.bn()
return z}}},
fw:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.e=a
return a}},
fx:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.f=a
return a}},
fB:{"^":"d:3;a",
$0:function(){return--this.a.y}},
fy:{"^":"d:3;a",
$0:function(){return++this.a.y}},
fz:{"^":"d:2;a",
$0:function(){var z=this.a;--z.r;--z.x}},
fA:{"^":"d:2;a",
$0:function(){var z=this.a;++z.r;++z.x}},
fC:{"^":"W;0b,0c,0d,0e,0f,0r,0x,y,z,Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,a",
bo:function(){var z,y,x
this.c=V.bQ(30,30,1)
this.b=V.aQ()
z=[P.f]
y=H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z)
x=H.c(["uPMatrix","uMVMatrix","uNMatrix","uSampler","uUseTextures","uUseLighting","uAmbientColor","uPointLightingLocation","uPointLightingColor"],z)
this.d=V.T("        precision mediump float;\n    \n        varying vec2 vTextureCoord;\n        varying vec3 vLightWeighting;\n    \n        uniform bool uUseTextures;\n    \n        uniform sampler2D uSampler;\n    \n        void main(void) {\n            vec4 fragmentColor;\n            if (uUseTextures) {\n                fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n            } else {\n                fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n            }\n            gl_FragColor = vec4(fragmentColor.rgb * vLightWeighting, fragmentColor.a);\n        }\n      ","        attribute vec3 aVertexPosition;\n        attribute vec3 aVertexNormal;\n        attribute vec2 aTextureCoord;\n    \n        uniform mat4 uMVMatrix;\n        uniform mat4 uPMatrix;\n        uniform mat3 uNMatrix;\n    \n        uniform vec3 uAmbientColor;\n    \n        uniform vec3 uPointLightingLocation;\n        uniform vec3 uPointLightingColor;\n    \n        uniform bool uUseLighting;\n    \n        varying vec2 vTextureCoord;\n        varying vec3 vLightWeighting;\n    \n        void main(void) {\n            vec4 mvPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n            gl_Position = uPMatrix * mvPosition;\n            vTextureCoord = aTextureCoord;\n    \n            if (!uUseLighting) {\n                vLightWeighting = vec3(1.0, 1.0, 1.0);\n            } else {\n                vec3 lightDirection = normalize(uPointLightingLocation - mvPosition.xyz);\n    \n                vec3 transformedNormal = uNMatrix * aVertexNormal;\n                float directionalLightWeighting = max(dot(transformedNormal, lightDirection), 0.0);\n                vLightWeighting = uAmbientColor + uPointLightingColor * directionalLightWeighting;\n            }\n        }\n      ",y,x)
z=V.T("          precision mediump float;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n          uniform bool uUseLighting;\n          uniform bool uUseTextures;\n      \n          uniform vec3 uAmbientColor;\n      \n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingColor;\n      \n          uniform sampler2D uSampler;\n      \n      \n          void main(void) {\n              vec3 lightWeighting;\n              if (!uUseLighting) {\n                  lightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n      \n                  float directionalLightWeighting = max(dot(normalize(vTransformedNormal), lightDirection), 0.0);\n                  lightWeighting = uAmbientColor + uPointLightingColor * directionalLightWeighting;\n              }\n      \n              vec4 fragmentColor;\n              if (uUseTextures) {\n                  fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              } else {\n                  fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n              }\n              gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n      \n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n      \n          void main(void) {\n              vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * vPosition;\n              vTextureCoord = aTextureCoord;\n              vTransformedNormal = uNMatrix * aVertexNormal;\n          }\n        ",y,x)
this.e=z
this.f=z
z=P.G
V.U("moon.bmp",V.a7()).w(new V.fD(this),z)
V.U("crate.gif",V.a7()).w(new V.fE(this),z)
$.a.enable(2929)},
C:function(a,b,c){var z,y,x,w,v,u
if(!(this.r!=null&&this.x!=null))return
$.a.enable(2929)
$.a.disable(3042)
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.H=V.X(45,c,0.1,100)
if(this.ch.checked){z=this.e
this.f=z}else{z=this.d
this.f=z}$.a.useProgram(z.c)
y=this.cy.checked
z=$.a
x=H.b(this.f.b.h(0,"uUseLighting"),"$ish")
z.uniform1i(x,y?1:0)
if(y){$.a.uniform3f(H.b(this.f.b.h(0,"uAmbientColor"),"$ish"),P.q(this.db.value,null),P.q(this.dx.value,null),P.q(this.dy.value,null))
$.a.uniform3f(H.b(this.f.b.h(0,"uPointLightingLocation"),"$ish"),P.q(this.fr.value,null),P.q(this.fx.value,null),P.q(this.fy.value,null))
$.a.uniform3f(H.b(this.f.b.h(0,"uPointLightingColor"),"$ish"),P.q(this.go.value,null),P.q(this.id.value,null),P.q(this.k1.value,null))}z=$.a
x=H.b(this.f.b.h(0,"uUseTextures"),"$ish")
z.uniform1i(x,this.cx.checked?1:0)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=$.j
x=[P.D]
z.n(0,H.c([0,0,-5],x))
z.M(this.Q*0.017453292519943295)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=$.j
z.D(this.y*0.017453292519943295)
z.n(0,H.c([2,0,0],x))
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.r)
$.a.uniform1i(H.b(this.f.b.h(0,"uSampler"),"$ish"),0)
z=this.c
w=H.v(this.f.a.h(0,"aVertexPosition"))
v=H.v(this.f.a.h(0,"aVertexNormal"))
u=this.gt()
z.H(H.v(this.f.a.h(0,"aTextureCoord")),v,u,w)
w=$.$get$y()
if(0>=w.length)return H.e(w,-1)
w=w.pop()
$.j=w
w.D(this.z*0.017453292519943295)
w.n(0,H.c([1.25,0,0],x))
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.x)
$.a.uniform1i(H.b(this.f.b.h(0,"uSampler"),"$ish"),0)
x=this.b
w=H.v(this.f.a.h(0,"aVertexPosition"))
v=H.v(this.f.a.h(0,"aVertexNormal"))
x.H(H.v(this.f.a.h(0,"aTextureCoord")),v,u,w)
w=$.$get$y()
if(0>=w.length)return H.e(w,-1)
$.j=w.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.f.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.f.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)
var z=$.j.V()
z.W()
$.a.uniformMatrix3fv(H.b(this.f.b.h(0,"uNMatrix"),"$ish"),!1,z.a)},"$0","gt",0,0,1],
A:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
z=0.05*(b-z)
this.y=this.y+z
this.z+=z}this.a=b},
B:function(){V.an(new V.fF(this),new V.fG(this),new V.fH(this),new V.fI(this))},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,'    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    <input type="checkbox" id="per-fragment" checked /> Per-fragment lighting<br/>\n    <input type="checkbox" id="textures" checked /> Use textures<br/>\n    <br/>\n\n    <h2>Point light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Location:</b>\n            <td>X: <input type="text" id="lightPositionX" value="0.0" />\n            <td>Y: <input type="text" id="lightPositionY" value="0.0" />\n            <td>Z: <input type="text" id="lightPositionZ" value="-5.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="pointR" value="0.8" />\n            <td>G: <input type="text" id="pointG" value="0.8" />\n            <td>B: <input type="text" id="pointB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n\n\n    <br/>\n\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.cy=H.b(z.querySelector("#lighting"),"$isl")
this.db=H.b(z.querySelector("#ambientR"),"$isl")
this.dx=H.b(z.querySelector("#ambientG"),"$isl")
this.dy=H.b(z.querySelector("#ambientB"),"$isl")
this.go=H.b(z.querySelector("#pointR"),"$isl")
this.id=H.b(z.querySelector("#pointG"),"$isl")
this.k1=H.b(z.querySelector("#pointB"),"$isl")
this.fr=H.b(z.querySelector("#lightPositionX"),"$isl")
this.fx=H.b(z.querySelector("#lightPositionY"),"$isl")
this.fy=H.b(z.querySelector("#lightPositionZ"),"$isl")
this.ch=H.b(z.querySelector("#per-fragment"),"$isl")
this.cx=H.b(z.querySelector("#textures"),"$isl")},
l:{
d8:function(){var z=new V.fC(180,0,30,0)
z.bo()
return z}}},
fD:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.r=a
return a}},
fE:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.x=a
return a}},
fI:{"^":"d:3;a",
$0:function(){return--this.a.Q}},
fF:{"^":"d:3;a",
$0:function(){return++this.a.Q}},
fG:{"^":"d:2;a",
$0:function(){var z=this.a;--z.y;--z.z}},
fH:{"^":"d:2;a",
$0:function(){var z=this.a;++z.y;++z.z}},
fJ:{"^":"W;0b,0c,0d,0e,0f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,a",
bp:function(){V.ch("Teapot.json").w(new V.fL(this),null)
var z=[P.f]
z=V.T("          precision mediump float;\n          \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n          \n          uniform float uMaterialShininess;\n          \n          uniform bool uShowSpecularHighlights;\n          uniform bool uUseLighting;\n          uniform bool uUseTextures;\n          \n          uniform vec3 uAmbientColor;\n          \n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingSpecularColor;\n          uniform vec3 uPointLightingDiffuseColor;\n          \n          uniform sampler2D uSampler;\n          \n          \n          void main(void) {\n              vec3 lightWeighting;\n              if (!uUseLighting) {\n                  lightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n                  vec3 normal = normalize(vTransformedNormal);\n          \n                  float specularLightWeighting = 0.0;\n                  if (uShowSpecularHighlights) {\n                      vec3 eyeDirection = normalize(-vPosition.xyz);\n                      vec3 reflectionDirection = reflect(-lightDirection, normal);\n          \n                      specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);\n                  }\n          \n                  float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n                  lightWeighting = uAmbientColor\n                      + uPointLightingSpecularColor * specularLightWeighting\n                      + uPointLightingDiffuseColor * diffuseLightWeighting;\n              }\n          \n              vec4 fragmentColor;\n              if (uUseTextures) {\n                  fragmentColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              } else {\n                  fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n              }\n              gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n      \n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n      \n          void main(void) {\n              vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * vPosition;\n              vTextureCoord = aTextureCoord;\n              vTransformedNormal = uNMatrix * aVertexNormal;\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uSampler","uUseTextures","uUseLighting","uAmbientColor","uPointLightingLocation","uPointLightingSpecularColor","uPointLightingDiffuseColor","uMaterialShininess","uShowSpecularHighlights"],z))
this.b=z
$.a.useProgram(z.c)
V.U("earth.jpg",V.a7()).w(new V.fM(this),null)
V.U("moon.bmp",V.a7()).w(new V.fN(this),null)
V.U("galvanizedTexture.jpg",V.a7()).w(new V.fO(this),null)
$.a.enable(2929)},
C:function(a,b,c){var z,y,x,w,v,u
if(!(this.f!=null&&this.r===3))return
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=this.fy.checked
y=$.a
x=H.b(this.b.b.h(0,"uShowSpecularHighlights"),"$ish")
y.uniform1i(x,z?1:0)
w=this.z.checked
y=$.a
x=H.b(this.b.b.h(0,"uUseLighting"),"$ish")
y.uniform1i(x,w?1:0)
if(w){$.a.uniform3f(H.b(this.b.b.h(0,"uAmbientColor"),"$ish"),P.q(this.Q.value,null),P.q(this.ch.value,null),P.q(this.cx.value,null))
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingLocation"),"$ish"),P.q(this.cy.value,null),P.q(this.db.value,null),P.q(this.dx.value,null))
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingSpecularColor"),"$ish"),P.q(this.go.value,null),P.q(this.id.value,null),P.q(this.k1.value,null))
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingDiffuseColor"),"$ish"),P.q(this.dy.value,null),P.q(this.fr.value,null),P.q(this.fx.value,null))}v=this.k3.value
y=$.a
x=H.b(this.b.b.h(0,"uUseTextures"),"$ish")
y.uniform1i(x,v!=="none"?1:0)
y=$.$get$y();(y&&C.a).k(y,new V.J(new Float32Array(H.w($.j.a))))
y=$.j
y.n(0,H.c([0,0,-40],[P.D]))
y.aj(0,this.y*0.017453292519943295,H.c([1,0,-1],[P.M]))
y.D(this.x*0.017453292519943295)
$.a.activeTexture(33984)
if(v==="earth")$.a.bindTexture(3553,this.c)
else if(v==="galvanized")$.a.bindTexture(3553,this.d)
else if(v==="moon")$.a.bindTexture(3553,this.e)
$.a.uniform1i(H.b(this.b.b.h(0,"uSampler"),"$ish"),0)
$.a.uniform1f(H.b(this.b.b.h(0,"uMaterialShininess"),"$ish"),P.q(this.k2.value,null))
y=this.f
x=H.v(this.b.a.h(0,"aVertexPosition"))
u=H.v(this.b.a.h(0,"aVertexNormal"))
y.H(H.v(this.b.a.h(0,"aTextureCoord")),u,this.gt(),x)
x=$.$get$y()
if(0>=x.length)return H.e(x,-1)
$.j=x.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)
var z=$.j.V()
z.W()
$.a.uniformMatrix3fv(H.b(this.b.b.h(0,"uNMatrix"),"$ish"),!1,z.a)},"$0","gt",0,0,1],
A:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
this.x=this.x+0.05*(b-z)}this.a=b},
B:function(){V.an(new V.fP(this),new V.fQ(this),new V.fR(this),new V.fS(this))},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,'    <input type="checkbox" id="specular" checked /> Show specular highlight<br/>\n    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n\n    Texture:\n    <select id="texture">\n        <option value="none">None</option>\n        <option value="earth">Earth</option>\n        <option selected value="galvanized">Galvanized</option>\n        <option value="moon">Moon</option>\n    </select>\n\n    <h2>Material:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Shininess:</b>\n            <td><input type="text" id="shininess" value="32.0" />\n        </tr>\n    </table>\n\n    <h2>Point light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Location:</b>\n            <td>X: <input type="text" id="lightPositionX" value="-10.0" />\n            <td>Y: <input type="text" id="lightPositionY" value="4.0" />\n            <td>Z: <input type="text" id="lightPositionZ" value="-20.0" />\n        </tr>\n        <tr>\n            <td><b>Specular colour:</b>\n            <td>R: <input type="text" id="specularR" value="5.0" />\n            <td>G: <input type="text" id="specularG" value="5.0" />\n            <td>B: <input type="text" id="specularB" value="5.0" />\n        </tr>\n        <tr>\n            <td><b>Diffuse colour:</b>\n            <td>R: <input type="text" id="diffuseR" value="0.8" />\n            <td>G: <input type="text" id="diffuseG" value="0.8" />\n            <td>B: <input type="text" id="diffuseB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.4" />\n            <td>G: <input type="text" id="ambientG" value="0.4" />\n            <td>B: <input type="text" id="ambientB" value="0.4" />\n        </tr>\n    </table>\n\n    Earth texture courtesy of <a href="http://www.esa.int/esaEO/SEMGSY2IU7E_index_0.html">the European Space Agency/Envisat</a>.<br/>\n    Galvanized texture courtesy of <a href="http://www.arroway-textures.com/">Arroway Textures</a>.<br/>\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.z=H.b(z.querySelector("#lighting"),"$isl")
this.Q=H.b(z.querySelector("#ambientR"),"$isl")
this.ch=H.b(z.querySelector("#ambientG"),"$isl")
this.cx=H.b(z.querySelector("#ambientB"),"$isl")
this.cy=H.b(z.querySelector("#lightPositionX"),"$isl")
this.db=H.b(z.querySelector("#lightPositionY"),"$isl")
this.dx=H.b(z.querySelector("#lightPositionZ"),"$isl")
this.dy=H.b(z.querySelector("#diffuseR"),"$isl")
this.fr=H.b(z.querySelector("#diffuseG"),"$isl")
this.fx=H.b(z.querySelector("#diffuseB"),"$isl")
this.fy=H.b(z.querySelector("#specular"),"$isl")
this.go=H.b(z.querySelector("#specularR"),"$isl")
this.id=H.b(z.querySelector("#specularG"),"$isl")
this.k1=H.b(z.querySelector("#specularB"),"$isl")
this.k2=H.b(z.querySelector("#shininess"),"$isl")
this.k3=H.b(z.querySelector("#texture"),"$isbP")},
l:{
fK:function(){var z=new V.fJ(0,180,23.4,0)
z.bp()
return z}}},
fL:{"^":"d:11;a",
$1:function(a){H.b(a,"$isaS")
P.a4("Teapot: "+H.n(a))
this.a.f=a}},
fM:{"^":"d:5;a",
$1:function(a){var z=this.a
z.c=H.b(a,"$isG");++z.r}},
fN:{"^":"d:5;a",
$1:function(a){var z=this.a
z.e=H.b(a,"$isG");++z.r}},
fO:{"^":"d:5;a",
$1:function(a){var z=this.a
z.d=H.b(a,"$isG");++z.r}},
fS:{"^":"d:0;a",
$0:function(){return--this.a.y}},
fP:{"^":"d:0;a",
$0:function(){return++this.a.y}},
fQ:{"^":"d:0;a",
$0:function(){return--this.a.x}},
fR:{"^":"d:0;a",
$0:function(){return++this.a.x}},
fT:{"^":"W;0b,0c,0d,0e,0f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,a",
bq:function(){this.c=V.bQ(30,30,13)
var z=[P.f]
z=V.T("          precision mediump float;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n          uniform bool uUseColorMap;\n          uniform bool uUseSpecularMap;\n          uniform bool uUseLighting;\n      \n          uniform vec3 uAmbientColor;\n      \n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingSpecularColor;\n          uniform vec3 uPointLightingDiffuseColor;\n      \n          uniform sampler2D uColorMapSampler;\n          uniform sampler2D uSpecularMapSampler;\n      \n      \n          void main(void) {\n              vec3 lightWeighting;\n              if (!uUseLighting) {\n                  lightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n                  vec3 normal = normalize(vTransformedNormal);\n      \n                  float specularLightWeighting = 0.0;\n                  float shininess = 32.0;\n                  if (uUseSpecularMap) {\n                      shininess = texture2D(uSpecularMapSampler, vec2(vTextureCoord.s, vTextureCoord.t)).r * 255.0;\n                  }\n                  if (shininess < 255.0) {\n                      vec3 eyeDirection = normalize(-vPosition.xyz);\n                      vec3 reflectionDirection = reflect(-lightDirection, normal);\n      \n                      specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n                  }\n      \n                  float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n                  lightWeighting = uAmbientColor\n                      + uPointLightingSpecularColor * specularLightWeighting\n                      + uPointLightingDiffuseColor * diffuseLightWeighting;\n              }\n      \n              vec4 fragmentColor;\n              if (uUseColorMap) {\n                  fragmentColor = texture2D(uColorMapSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              } else {\n                  fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);\n              }\n              gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n      \n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n      \n          void main(void) {\n              vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * vPosition;\n              vTextureCoord = aTextureCoord;\n              vTransformedNormal = uNMatrix * aVertexNormal;\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uAmbientColor","uPointLightingLocation","uPointLightingSpecularColor","uPointLightingDiffuseColor","uUseColorMap","uUseSpecularMap","uUseLighting","uColorMapSampler","uSpecularMapSampler"],z))
this.b=z
$.a.useProgram(z.c)
V.U("earth.jpg",V.a7()).w(new V.fV(this),null)
V.U("moon.bmp",V.a7()).w(new V.fW(this),null)
V.U("earth-specular.gif",V.a7()).w(new V.fX(this),null)
$.a.enable(2929)},
C:function(a,b,c){var z,y,x
z=this.r
if(z!==3)return
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=$.a
y=H.b(this.b.b.h(0,"uUseColorMap"),"$ish")
z.uniform1i(y,this.k1.checked?1:0)
z=$.a
y=H.b(this.b.b.h(0,"uUseSpecularMap"),"$ish")
z.uniform1i(y,this.k2.checked?1:0)
z=$.a
y=H.b(this.b.b.h(0,"uUseLighting"),"$ish")
z.uniform1i(y,this.z.checked?1:0)
if(this.z.checked){$.a.uniform3f(H.b(this.b.b.h(0,"uAmbientColor"),"$ish"),P.q(this.Q.value,null),P.q(this.ch.value,null),P.q(this.cx.value,null))
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingLocation"),"$ish"),P.q(this.cy.value,null),P.q(this.db.value,null),P.q(this.dx.value,null))
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingSpecularColor"),"$ish"),P.q(this.fy.value,null),P.q(this.go.value,null),P.q(this.id.value,null))
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingDiffuseColor"),"$ish"),P.q(this.dy.value,null),P.q(this.fr.value,null),P.q(this.fx.value,null))}z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=$.j
z.n(0,H.c([0,0,-40],[P.D]))
z.aj(0,this.y*0.017453292519943295,H.c([1,0,-1],[P.M]))
z.D(this.x*0.017453292519943295)
$.a.activeTexture(33984)
z=this.k3.value
if(z==="earth")$.a.bindTexture(3553,this.d)
else if(z==="moon")$.a.bindTexture(3553,this.e)
$.a.uniform1i(H.b(this.b.b.h(0,"uColorMapSampler"),"$ish"),0)
$.a.activeTexture(33985)
$.a.bindTexture(3553,this.f)
$.a.uniform1i(H.b(this.b.b.h(0,"uSpecularMapSampler"),"$ish"),1)
z=this.c
y=H.v(this.b.a.h(0,"aVertexPosition"))
x=H.v(this.b.a.h(0,"aVertexNormal"))
z.H(H.v(this.b.a.h(0,"aTextureCoord")),x,this.gt(),y)
y=$.$get$y()
if(0>=y.length)return H.e(y,-1)
$.j=y.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)
var z=$.j.V()
z.W()
$.a.uniformMatrix3fv(H.b(this.b.b.h(0,"uNMatrix"),"$ish"),!1,z.a)},"$0","gt",0,0,1],
A:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
this.x=this.x+0.05*(b-z)}this.a=b},
B:function(){V.an(new V.fY(this),new V.fZ(this),new V.h_(this),new V.h0(this))},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,'    <input type="checkbox" id="color-map" checked /> Use color map<br/>\n    <input type="checkbox" id="specular-map" checked /> Use specular map<br/>\n    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n\n    Texture:\n    <select id="texture">\n        <option selected value="earth">Earth</option>\n        <option value="moon">Moon</option>\n    </select>\n    <h2>Point light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Location:</b>\n            <td>X: <input type="text" id="lightPositionX" value="-10.0" />\n            <td>Y: <input type="text" id="lightPositionY" value="4.0" />\n            <td>Z: <input type="text" id="lightPositionZ" value="-20.0" />\n        </tr>\n        <tr>\n            <td><b>Specular colour:</b>\n            <td>R: <input type="text" id="specularR" value="5.0" />\n            <td>G: <input type="text" id="specularG" value="5.0" />\n            <td>B: <input type="text" id="specularB" value="5.0" />\n        </tr>\n        <tr>\n            <td><b>Diffuse colour:</b>\n            <td>R: <input type="text" id="diffuseR" value="0.8" />\n            <td>G: <input type="text" id="diffuseG" value="0.8" />\n            <td>B: <input type="text" id="diffuseB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.4" />\n            <td>G: <input type="text" id="ambientG" value="0.4" />\n            <td>B: <input type="text" id="ambientB" value="0.4" />\n        </tr>\n    </table>\n\n    Earth texture courtesy of <a href="http://www.esa.int/esaEO/SEMGSY2IU7E_index_0.html">the European Space Agency/Envisat</a>.<br/>\n    Galvanized texture courtesy of <a href="http://www.arroway-textures.com/">Arroway Textures</a>.<br/>\n    Moon texture courtesy of <a href="http://maps.jpl.nasa.gov/">the Jet Propulsion Laboratory</a>.\n    ',z)
z=document
this.z=H.b(z.querySelector("#lighting"),"$isl")
this.Q=H.b(z.querySelector("#ambientR"),"$isl")
this.ch=H.b(z.querySelector("#ambientG"),"$isl")
this.cx=H.b(z.querySelector("#ambientB"),"$isl")
this.cy=H.b(z.querySelector("#lightPositionX"),"$isl")
this.db=H.b(z.querySelector("#lightPositionY"),"$isl")
this.dx=H.b(z.querySelector("#lightPositionZ"),"$isl")
this.dy=H.b(z.querySelector("#diffuseR"),"$isl")
this.fr=H.b(z.querySelector("#diffuseG"),"$isl")
this.fx=H.b(z.querySelector("#diffuseB"),"$isl")
this.fy=H.b(z.querySelector("#specularR"),"$isl")
this.go=H.b(z.querySelector("#specularG"),"$isl")
this.id=H.b(z.querySelector("#specularB"),"$isl")
this.k1=H.b(z.querySelector("#color-map"),"$isl")
this.k2=H.b(z.querySelector("#specular-map"),"$isl")
this.k3=H.b(z.querySelector("#texture"),"$isbP")},
l:{
fU:function(){var z=new V.fT(0,180,23.4,0)
z.bq()
return z}}},
fV:{"^":"d:5;a",
$1:function(a){var z=this.a
z.d=H.b(a,"$isG");++z.r}},
fW:{"^":"d:5;a",
$1:function(a){var z=this.a
z.e=H.b(a,"$isG");++z.r}},
fX:{"^":"d:5;a",
$1:function(a){var z=this.a
z.f=H.b(a,"$isG");++z.r}},
h0:{"^":"d:3;a",
$0:function(){return--this.a.y}},
fY:{"^":"d:3;a",
$0:function(){return++this.a.y}},
fZ:{"^":"d:3;a",
$0:function(){return--this.a.x}},
h_:{"^":"d:3;a",
$0:function(){return++this.a.x}},
h1:{"^":"W;0b,0c,0d,e,0f,0r,0x,0y,a",
br:function(){var z,y
z=V.d8()
this.f=z
y=W.a9(null)
y.checked=!0
z.cy=y
y=this.f
z=W.a9(null)
z.value="0.2"
y.db=z
z=this.f
y=W.a9(null)
y.value="0.2"
z.dx=y
y=this.f
z=W.a9(null)
z.value="0.2"
y.dy=z
z=this.f
y=W.a9(null)
y.value="0.0"
z.fr=y
y=this.f
z=W.a9(null)
z.value="0.0"
y.fx=z
z=this.f
y=W.a9(null)
y.value="-5.0"
z.fy=y
y=this.f
z=W.a9(null)
z.value="0.8"
y.go=z
z=this.f
y=W.a9(null)
y.value="0.8"
z.id=y
y=this.f
z=W.a9(null)
z.value="0.8"
y.k1=z
z=this.f
y=W.a9(null)
y.checked=!0
z.ch=y
y=this.f
z=W.a9(null)
z.checked=!0
y.cx=z
V.ch("macbook.json").w(new V.h3(this),null)
z=V.d7('      {\n        "vertexPositions": [\n           0.580687, 0.659, 0.813106,\n          -0.580687, 0.659, 0.813107,\n           0.580687, 0.472, 0.113121,\n          -0.580687, 0.472, 0.113121\n        ],\n        "vertexTextureCoords": [\n          1.0, 1.0,\n          0.0, 1.0,\n          1.0, 0.0,\n          0.0, 0.0\n        ],\n        "vertexNormals": [\n          0.000000, -0.965926, 0.258819,\n          0.000000, -0.965926, 0.258819,\n          0.000000, -0.965926, 0.258819,\n          0.000000, -0.965926, 0.258819\n        ]\n      }\n    ')
z.f=!0
this.d=z
z=[P.f]
z=V.T("          precision mediump float;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n          uniform vec3 uMaterialAmbientColor;\n          uniform vec3 uMaterialDiffuseColor;\n          uniform vec3 uMaterialSpecularColor;\n          uniform float uMaterialShininess;\n          uniform vec3 uMaterialEmissiveColor;\n      \n          uniform bool uShowSpecularHighlights;\n          uniform bool uUseTextures;\n      \n          uniform vec3 uAmbientLightingColor;\n      \n          uniform vec3 uPointLightingLocation;\n          uniform vec3 uPointLightingDiffuseColor;\n          uniform vec3 uPointLightingSpecularColor;\n      \n          uniform sampler2D uSampler;\n      \n      \n          void main(void) {\n              vec3 ambientLightWeighting = uAmbientLightingColor;\n      \n              vec3 lightDirection = normalize(uPointLightingLocation - vPosition.xyz);\n              vec3 normal = normalize(vTransformedNormal);\n      \n              vec3 specularLightWeighting = vec3(0.0, 0.0, 0.0);\n              if (uShowSpecularHighlights) {\n                  vec3 eyeDirection = normalize(-vPosition.xyz);\n                  vec3 reflectionDirection = reflect(-lightDirection, normal);\n      \n                  float specularLightBrightness = pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);\n                  specularLightWeighting = uPointLightingSpecularColor * specularLightBrightness;\n              }\n      \n              float diffuseLightBrightness = max(dot(normal, lightDirection), 0.0);\n              vec3 diffuseLightWeighting = uPointLightingDiffuseColor * diffuseLightBrightness;\n      \n              vec3 materialAmbientColor = uMaterialAmbientColor;\n              vec3 materialDiffuseColor = uMaterialDiffuseColor;\n              vec3 materialSpecularColor = uMaterialSpecularColor;\n              vec3 materialEmissiveColor = uMaterialEmissiveColor;\n              float alpha = 1.0;\n              if (uUseTextures) {\n                  vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n                  materialAmbientColor = materialAmbientColor * textureColor.rgb;\n                  materialDiffuseColor = materialDiffuseColor * textureColor.rgb;\n                  materialEmissiveColor = materialEmissiveColor * textureColor.rgb;\n                  alpha = textureColor.a;\n              }\n              gl_FragColor = vec4(\n                  materialAmbientColor * ambientLightWeighting\n                  + materialDiffuseColor * diffuseLightWeighting\n                  + materialSpecularColor * specularLightWeighting\n                  + materialEmissiveColor,\n                  alpha\n              );\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n      \n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n      \n          varying vec2 vTextureCoord;\n          varying vec3 vTransformedNormal;\n          varying vec4 vPosition;\n      \n          void main(void) {\n              vPosition = uMVMatrix * vec4(aVertexPosition, 1.0);\n              gl_Position = uPMatrix * vPosition;\n              vTextureCoord = aTextureCoord;\n              vTransformedNormal = uNMatrix * aVertexNormal;\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uUseTextures","uMaterialAmbientColor","uMaterialDiffuseColor","uMaterialSpecularColor","uMaterialShininess","uMaterialEmissiveColor","uPointLightingDiffuseColor","uPointLightingLocation","uPointLightingSpecularColor","uShowSpecularHighlights","uSampler","uAmbientLightingColor"],z))
this.b=z
$.a.useProgram(z.c)
$.a.enable(2929)
z=$.a.createFramebuffer()
this.r=z
$.a.bindFramebuffer(36160,z)
z=$.a.createTexture()
this.x=z
$.a.bindTexture(3553,z)
$.a.texParameteri(3553,10240,9729)
$.a.texParameteri(3553,10241,9985)
$.a.generateMipmap(3553)
z=$.a;(z&&C.f).b3(z,3553,0,6408,512,512,0,6408,5121,null)
z=$.a.createRenderbuffer()
this.y=z
$.a.bindRenderbuffer(36161,z)
$.a.renderbufferStorage(36161,33189,512,512)
$.a.framebufferTexture2D(36160,36064,3553,this.x,0)
$.a.framebufferRenderbuffer(36160,36096,36161,this.y)
$.a.bindTexture(3553,null)
$.a.bindRenderbuffer(36161,null)
$.a.bindFramebuffer(36160,null)},
C:function(a,b,c){var z,y,x,w
if(this.c==null)return
$.a.bindFramebuffer(36160,this.r)
this.f.C(512,512,1.66)
$.a.bindTexture(3553,this.x)
$.a.generateMipmap(3553)
$.a.bindTexture(3553,null)
$.a.bindFramebuffer(36160,null)
$.a.useProgram(this.b.c)
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=$.j
z.n(0,H.c([0,-0.4,-2.2],[P.D]))
z.D(this.e*0.017453292519943295)
z.M(-1.5707963267948966)
$.a.uniform1i(H.b(this.b.b.h(0,"uShowSpecularHighlights"),"$ish"),1)
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingLocation"),"$ish"),-1,2,-1)
$.a.uniform3f(H.b(this.b.b.h(0,"uAmbientLightingColor"),"$ish"),0.2,0.2,0.2)
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingDiffuseColor"),"$ish"),0.8,0.8,0.8)
$.a.uniform3f(H.b(this.b.b.h(0,"uPointLightingSpecularColor"),"$ish"),0.8,0.8,0.8)
$.a.uniform3f(H.b(this.b.b.h(0,"uMaterialAmbientColor"),"$ish"),1,1,1)
$.a.uniform3f(H.b(this.b.b.h(0,"uMaterialDiffuseColor"),"$ish"),1,1,1)
$.a.uniform3f(H.b(this.b.b.h(0,"uMaterialSpecularColor"),"$ish"),1.5,1.5,1.5)
$.a.uniform1f(H.b(this.b.b.h(0,"uMaterialShininess"),"$ish"),5)
$.a.uniform3f(H.b(this.b.b.h(0,"uMaterialEmissiveColor"),"$ish"),0,0,0)
$.a.uniform1i(H.b(this.b.b.h(0,"uUseTextures"),"$ish"),0)
z=this.c
y=H.v(this.b.a.h(0,"aVertexPosition"))
x=H.v(this.b.a.h(0,"aVertexNormal"))
w=this.gt()
z.H(H.v(this.b.a.h(0,"aTextureCoord")),x,w,y)
$.a.uniform3f(H.b(this.b.b.h(0,"uMaterialAmbientColor"),"$ish"),0,0,0)
$.a.uniform3f(H.b(this.b.b.h(0,"uMaterialDiffuseColor"),"$ish"),0,0,0)
$.a.uniform3f(H.b(this.b.b.h(0,"uMaterialSpecularColor"),"$ish"),0.5,0.5,0.5)
$.a.uniform1f(H.b(this.b.b.h(0,"uMaterialShininess"),"$ish"),20)
$.a.uniform3f(H.b(this.b.b.h(0,"uMaterialEmissiveColor"),"$ish"),1.5,1.5,1.5)
$.a.uniform1i(H.b(this.b.b.h(0,"uUseTextures"),"$ish"),1)
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.x)
$.a.uniform1i(H.b(this.b.b.h(0,"uSampler"),"$ish"),0)
y=this.d
x=H.v(this.b.a.h(0,"aVertexPosition"))
z=H.v(this.b.a.h(0,"aVertexNormal"))
y.H(H.v(this.b.a.h(0,"aTextureCoord")),z,w,x)
x=$.$get$y()
if(0>=x.length)return H.e(x,-1)
$.j=x.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)
var z=$.j.V()
z.W()
$.a.uniformMatrix3fv(H.b(this.b.b.h(0,"uNMatrix"),"$ish"),!1,z.a)},"$0","gt",0,0,1],
A:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
this.e=this.e-0.005*(b-z)}this.a=b
this.f.A(0,b)},
B:function(){if($.$get$a3().p(0,65))--this.e
if($.$get$a3().p(0,68))++this.e
this.f.B()},
l:{
h2:function(){var z=new V.h1(0,0)
z.br()
return z}}},
h3:{"^":"d:11;a",
$1:function(a){H.b(a,"$isaS")
P.a4("macbook: "+H.n(a))
this.a.c=a}},
h4:{"^":"W;0b,0c,0d,0e,0f,a",
C:function(a,b,c){var z
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=[P.D]
$.j.n(0,H.c([-1.5,0,-7],z))
$.a.bindBuffer(34962,this.c)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
$.a.bindBuffer(34962,this.e)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexColor"),4,5126,!1,0,0)
this.v()
$.a.drawArrays(4,0,3)
$.j.n(0,H.c([3,0,0],z))
$.a.bindBuffer(34962,this.d)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
$.a.bindBuffer(34962,this.f)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexColor"),4,5126,!1,0,0)
this.v()
$.a.drawArrays(5,0,4)
z=$.$get$y()
if(0>=z.length)return H.e(z,-1)
$.j=z.pop()},
v:function(){$.a.uniformMatrix4fv(this.b.b.h(0,"uPMatrix"),!1,$.H.a)
$.a.uniformMatrix4fv(this.b.b.h(0,"uMVMatrix"),!1,$.j.a)},
A:function(a,b){},
B:function(){}},
h5:{"^":"W;0b,0c,0d,0e,0f,r,x,a",
C:function(a,b,c){var z,y
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=[P.D]
$.j.n(0,H.c([-1.5,0,-7],z))
y=$.$get$y();(y&&C.a).k(y,new V.J(new Float32Array(H.w($.j.a))))
$.j.D(this.r*0.017453292519943295)
$.a.bindBuffer(34962,this.c)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
$.a.bindBuffer(34962,this.e)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexColor"),4,5126,!1,0,0)
this.v()
$.a.drawArrays(4,0,3)
y=$.$get$y()
if(0>=y.length)return H.e(y,-1)
y=y.pop()
$.j=y
y.n(0,H.c([3,0,0],z))
$.j.M(this.x*0.017453292519943295)
$.a.bindBuffer(34962,this.d)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexPosition"),3,5126,!1,0,0)
$.a.bindBuffer(34962,this.f)
$.a.vertexAttribPointer(this.b.a.h(0,"aVertexColor"),4,5126,!1,0,0)
this.v()
$.a.drawArrays(5,0,4)
z=$.$get$y()
if(0>=z.length)return H.e(z,-1)
$.j=z.pop()},
v:function(){$.a.uniformMatrix4fv(this.b.b.h(0,"uPMatrix"),!1,$.H.a)
$.a.uniformMatrix4fv(this.b.b.h(0,"uMVMatrix"),!1,$.j.a)},
A:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
y=b-z
this.r=this.r+90*y/1000
this.x=this.x+75*y/1000}this.a=b},
B:function(){}},
h6:{"^":"W;0b,c,d,e,f,r,x,y,a",
C:function(a,b,c){var z,y,x,w,v,u
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=[P.D]
$.j.n(0,H.c([-1.5,0,-8],z))
$.j.M(this.r*0.017453292519943295).D(this.x*0.017453292519943295)
y=$.$get$y();(y&&C.a).k(y,new V.J(new Float32Array(H.w($.j.a))))
y=[P.M]
$.j.aj(0,this.e*0.017453292519943295,H.c([0,1,0],y))
x=this.c
w=this.b.a.h(0,"aVertexPosition")
v=H.v(this.b.a.h(0,"aVertexColor"))
u=H.m(this.gt(),{func:1})
H.v(w)
if(w!=null){$.a.bindBuffer(34962,x.a)
$.a.vertexAttribPointer(w,3,5126,!1,0,0)}if(v!=null){$.a.bindBuffer(34962,x.d)
$.a.vertexAttribPointer(v,4,5126,!1,0,0)}u.$0()
$.a.drawArrays(4,0,18)
x=$.$get$y()
if(0>=x.length)return H.e(x,-1)
x=x.pop()
$.j=x
x.n(0,H.c([3,0,0],z))
$.j.aj(0,this.f*0.017453292519943295,H.c([1,1,1],y))
y=this.d
z=this.b.a.h(0,"aVertexPosition")
y.cc(this.b.a.h(0,"aVertexColor"),u,z)
z=$.$get$y()
if(0>=z.length)return H.e(z,-1)
$.j=z.pop()},
v:[function(){$.a.uniformMatrix4fv(this.b.b.h(0,"uPMatrix"),!1,$.H.a)
$.a.uniformMatrix4fv(this.b.b.h(0,"uMVMatrix"),!1,$.j.a)},"$0","gt",0,0,35],
A:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
y=b-z
this.e=this.e+90*y/1000
this.f=this.f-75*y/1000}this.a=b},
B:function(){V.an(new V.h7(this),new V.h8(this),new V.h9(this),new V.ha(this))}},
ha:{"^":"d:0;a",
$0:function(){var z=this.a.x-=0.5
return z}},
h7:{"^":"d:0;a",
$0:function(){var z=this.a.x+=0.5
return z}},
h8:{"^":"d:0;a",
$0:function(){var z=this.a.r-=0.5
return z}},
h9:{"^":"d:0;a",
$0:function(){var z=this.a.r+=0.5
return z}},
hb:{"^":"W;0b,0c,0d,e,f,r,a",
bs:function(){this.d=V.aQ()
V.U("nehe.gif",new V.hd(this))
var z=[P.f]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec2 vTextureCoord;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n          }\n        ",H.c(["aVertexPosition","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uSampler"],z))
this.b=z
$.a.useProgram(z.c)},
C:function(a,b,c){var z,y
if(this.c==null)return
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=$.j
z.n(0,H.c([0,0,-5],[P.D]))
z.M(this.e*0.017453292519943295)
z.D(this.f*0.017453292519943295)
z.b1(this.r*0.017453292519943295)
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.c)
$.a.uniform1i(H.b(this.b.b.h(0,"uSampler"),"$ish"),0)
z=this.d
y=this.b.a.h(0,"aVertexPosition")
z.af(this.b.a.h(0,"aTextureCoord"),this.gt(),y)
y=$.$get$y()
if(0>=y.length)return H.e(y,-1)
$.j=y.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)},"$0","gt",0,0,1],
A:function(a,b){var z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
z=90*(b-z)/1000
this.e=this.e+z
this.f+=z
this.r+=z}this.a=b},
B:function(){V.an(new V.he(this),new V.hf(this),new V.hg(this),new V.hh(this))},
l:{
hc:function(){var z=new V.hb(0,0,0,0)
z.bs()
return z}}},
hd:{"^":"d:6;a",
$2:function(a,b){var z
$.a.bindTexture(3553,a)
$.a.pixelStorei(37440,1)
z=$.a;(z&&C.f).Z(z,3553,0,6408,6408,5121,b)
$.a.texParameteri(3553,10240,9728)
$.a.texParameteri(3553,10241,9728)
$.a.bindTexture(3553,null)
this.a.c=a}},
hh:{"^":"d:0;a",
$0:function(){var z=this.a.f-=0.5
return z}},
he:{"^":"d:0;a",
$0:function(){var z=this.a.f+=0.5
return z}},
hf:{"^":"d:0;a",
$0:function(){var z=this.a.e-=0.5
return z}},
hg:{"^":"d:0;a",
$0:function(){var z=this.a.e+=0.5
return z}},
hi:{"^":"W;0b,c,0d,e,f,r,x,y,z,a",
bt:function(){this.d=V.aQ()
var z=[P.f]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec2 vTextureCoord;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n          }\n        ",H.c(["aVertexPosition","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uSampler"],z))
this.b=z
$.a.useProgram(z.c)
V.U("crate.gif",new V.hk(this))
z=W.aA
W.ae(window,"keydown",H.m(new V.hl(this),{func:1,ret:-1,args:[z]}),!1,z)},
C:function(a,b,c){var z,y,x
z=this.c
if(z.length!==3)return
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
y=$.$get$y();(y&&C.a).k(y,new V.J(new Float32Array(H.w($.j.a))))
y=$.j
y.n(0,H.c([0,0,this.z],[P.D]))
y.M(this.x*0.017453292519943295)
y.D(this.y*0.017453292519943295)
$.a.activeTexture(33984)
y=$.a
x=this.e
if(x>=z.length)return H.e(z,x)
y.bindTexture(3553,z[x])
$.a.uniform1i(H.b(this.b.b.h(0,"uSampler"),"$ish"),0)
x=this.d
z=this.b.a.h(0,"aVertexPosition")
x.af(this.b.a.h(0,"aTextureCoord"),this.gt(),z)
z=$.$get$y()
if(0>=z.length)return H.e(z,-1)
$.j=z.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)},"$0","gt",0,0,1],
A:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
y=b-z
this.x=this.x+this.f*y/1000
this.y=this.y+this.r*y/1000}this.a=b},
B:function(){V.an(new V.hm(this),new V.hn(this),new V.ho(this),new V.hp(this))
if($.$get$a3().p(0,33))this.z-=0.05
if($.$get$a3().p(0,34))this.z+=0.05},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,"    <h2>Controls:</h2>\n\n    <ul>\n        <li><code>Page Up</code>/<code>Page Down</code> to zoom out/in\n        <li>Cursor keys: make the cube rotate (the longer you hold down a cursor key, the more it accelerates)\n        <li><code>F</code> to toggle through three different kinds of texture filters\n    </ul>\n    ",z)},
l:{
hj:function(){var z=new V.hi(H.c([],[P.G]),0,0,0,0,0,-5,0)
z.bt()
return z}}},
hk:{"^":"d:6;a",
$2:function(a,b){var z,y
$.a.pixelStorei(37440,1)
z=this.a.c
C.a.k(z,a)
y=$.a
if(0>=z.length)return H.e(z,0)
y.bindTexture(3553,z[0])
y=$.a;(y&&C.f).Z(y,3553,0,6408,6408,5121,b)
$.a.texParameteri(3553,10240,9728)
$.a.texParameteri(3553,10241,9728)
C.a.k(z,$.a.createTexture())
y=$.a
if(1>=z.length)return H.e(z,1)
y.bindTexture(3553,z[1])
y=$.a;(y&&C.f).Z(y,3553,0,6408,6408,5121,b)
$.a.texParameteri(3553,10240,9729)
$.a.texParameteri(3553,10241,9729)
C.a.k(z,$.a.createTexture())
y=$.a
if(2>=z.length)return H.e(z,2)
y.bindTexture(3553,z[2])
z=$.a;(z&&C.f).Z(z,3553,0,6408,6408,5121,b)
$.a.texParameteri(3553,10240,9729)
$.a.texParameteri(3553,10241,9985)
$.a.generateMipmap(3553)
$.a.bindTexture(3553,null)}},
hl:{"^":"d:12;a",
$1:function(a){var z
if(H.b(a,"$isaA").keyCode===70){z=this.a
z.e=(z.e+1)%3}}},
hp:{"^":"d:0;a",
$0:function(){return--this.a.r}},
hm:{"^":"d:0;a",
$0:function(){return++this.a.r}},
hn:{"^":"d:0;a",
$0:function(){return--this.a.f}},
ho:{"^":"d:0;a",
$0:function(){return++this.a.f}},
hq:{"^":"W;0b,0c,0d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a",
bu:function(){this.b=V.aQ()
V.U("crate.gif",V.a7()).w(new V.hs(this),P.G)
var z=[P.f]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n\n          uniform vec3 uAmbientColor;\n\n          uniform vec3 uLightingDirection;\n          uniform vec3 uDirectionalColor;\n\n          uniform bool uUseLighting;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n\n              if (!uUseLighting) {\n                  vLightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 transformedNormal = uNMatrix * aVertexNormal;\n                  float directionalLightWeighting = max(dot(transformedNormal, uLightingDirection), 0.0);\n                  vLightWeighting = uAmbientColor + uDirectionalColor * directionalLightWeighting;\n              }\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uSampler","uAmbientColor","uLightingDirection","uDirectionalColor","uUseLighting"],z))
this.c=z
$.a.useProgram(z.c)},
v:[function(){$.a.uniformMatrix4fv(H.b(this.c.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.c.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)
var z=$.j.V()
z.W()
$.a.uniformMatrix3fv(H.b(this.c.b.h(0,"uNMatrix"),"$ish"),!1,z.a)},"$0","gt",0,0,1],
C:function(a,b,c){var z,y,x
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.a.enable(2929)
$.a.disable(3042)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=$.j
z.n(0,H.c([0,0,this.y],[P.D]))
z.M(this.r*0.017453292519943295)
z.D(this.x*0.017453292519943295)
z=$.a
y=H.b(this.c.b.h(0,"uUseLighting"),"$ish")
z.uniform1i(y,this.z.checked?1:0)
if(this.z.checked){$.a.uniform3f(H.b(this.c.b.h(0,"uAmbientColor"),"$ish"),P.q(this.Q.value,null),P.q(this.ch.value,null),P.q(this.cx.value,null))
x=V.bS(P.q(this.cy.value,null),P.q(this.db.value,null),P.q(this.dx.value,null)).ay(0).al(0,-1)
$.a.uniform3fv(H.b(this.c.b.h(0,"uLightingDirection"),"$ish"),x.a)
$.a.uniform3f(H.b(this.c.b.h(0,"uDirectionalColor"),"$ish"),P.q(this.dy.value,null),P.q(this.fr.value,null),P.q(this.fx.value,null))}$.a.activeTexture(33984)
$.a.bindTexture(3553,this.d)
$.a.uniform1i(H.b(this.c.b.h(0,"uSampler"),"$ish"),0)
z=this.b
y=this.c.a.h(0,"aVertexPosition")
z.H(this.c.a.h(0,"aTextureCoord"),this.c.a.h(0,"aVertexNormal"),this.gt(),y)
y=$.$get$y()
if(0>=y.length)return H.e(y,-1)
$.j=y.pop()},
A:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
y=b-z
this.r=this.r+this.e*y/1000
this.x=this.x+this.f*y/1000}this.a=b},
B:function(){V.an(new V.ht(this),new V.hu(this),new V.hv(this),new V.hw(this))
if($.$get$a3().p(0,33))this.y-=0.05
if($.$get$a3().p(0,34))this.y+=0.05},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,'    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    (Use cursor keys to spin the box and <code>Page Up</code>/<code>Page Down</code> to zoom out/in)\n\n    <br/>\n    <h2>Directional light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Direction:</b>\n            <td>X: <input type="text" id="lightDirectionX" value="-0.25" />\n            <td>Y: <input type="text" id="lightDirectionY" value="-0.25" />\n            <td>Z: <input type="text" id="lightDirectionZ" value="-1.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="directionalR" value="0.8" />\n            <td>G: <input type="text" id="directionalG" value="0.8" />\n            <td>B: <input type="text" id="directionalB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n    ',z)
z=document
this.z=H.b(z.querySelector("#lighting"),"$isl")
this.Q=H.b(z.querySelector("#ambientR"),"$isl")
this.ch=H.b(z.querySelector("#ambientG"),"$isl")
this.cx=H.b(z.querySelector("#ambientB"),"$isl")
this.dy=H.b(z.querySelector("#directionalR"),"$isl")
this.fr=H.b(z.querySelector("#directionalG"),"$isl")
this.fx=H.b(z.querySelector("#directionalB"),"$isl")
this.cy=H.b(z.querySelector("#lightDirectionX"),"$isl")
this.db=H.b(z.querySelector("#lightDirectionY"),"$isl")
this.dx=H.b(z.querySelector("#lightDirectionZ"),"$isl")},
l:{
hr:function(){var z=new V.hq(3,-3,0,0,-5,0)
z.bu()
return z}}},
hs:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.d=a
return a}},
hw:{"^":"d:0;a",
$0:function(){return--this.a.f}},
ht:{"^":"d:0;a",
$0:function(){return++this.a.f}},
hu:{"^":"d:0;a",
$0:function(){return--this.a.e}},
hv:{"^":"d:0;a",
$0:function(){return++this.a.e}},
hx:{"^":"W;0b,0c,0d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,a",
bv:function(){this.b=V.aQ()
V.U("glass.gif",V.a7()).w(new V.hz(this),P.G)
var z=[P.f]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          uniform float uAlpha;\n\n          uniform sampler2D uSampler;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a * uAlpha);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec3 aVertexNormal;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          uniform mat3 uNMatrix;\n\n          uniform vec3 uAmbientColor;\n\n          uniform vec3 uLightingDirection;\n          uniform vec3 uDirectionalColor;\n\n          uniform bool uUseLighting;\n\n          varying vec2 vTextureCoord;\n          varying vec3 vLightWeighting;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n\n              if (!uUseLighting) {\n                  vLightWeighting = vec3(1.0, 1.0, 1.0);\n              } else {\n                  vec3 transformedNormal = uNMatrix * aVertexNormal;\n                  float directionalLightWeighting = max(dot(transformedNormal, uLightingDirection), 0.0);\n                  vLightWeighting = uAmbientColor + uDirectionalColor * directionalLightWeighting;\n              }\n          }\n        ",H.c(["aVertexPosition","aVertexNormal","aTextureCoord"],z),H.c(["uPMatrix","uMVMatrix","uNMatrix","uSampler","uAmbientColor","uLightingDirection","uDirectionalColor","uUseLighting","uAlpha"],z))
this.c=z
$.a.useProgram(z.c)},
v:[function(){$.a.uniformMatrix4fv(H.b(this.c.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.c.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)
var z=$.j.V()
z.W()
$.a.uniformMatrix3fv(H.b(this.c.b.h(0,"uNMatrix"),"$ish"),!1,z.a)},"$0","gt",0,0,1],
C:function(a,b,c){var z,y,x,w
if(this.d==null)return
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
z=$.j
z.n(0,H.c([0,0,this.y],[P.D]))
z.M(this.r*0.017453292519943295)
z.D(this.x*0.017453292519943295)
z=this.fy.checked
y=$.a
if(z){y.blendFunc(770,1)
$.a.enable(3042)
$.a.disable(2929)
z=$.a
y=H.b(this.c.b.h(0,"uAlpha"),"$ish")
x=H.di(this.go.value)
z.uniform1f(y,x==null?1:x)}else{y.disable(3042)
$.a.enable(2929)}z=$.a
y=H.b(this.c.b.h(0,"uUseLighting"),"$ish")
z.uniform1i(y,this.z.checked?1:0)
if(this.z.checked){$.a.uniform3f(H.b(this.c.b.h(0,"uAmbientColor"),"$ish"),P.q(this.Q.value,null),P.q(this.ch.value,null),P.q(this.cx.value,null))
w=V.bS(P.q(this.cy.value,null),P.q(this.db.value,null),P.q(this.dx.value,null)).ay(0).al(0,-1)
$.a.uniform3fv(H.b(this.c.b.h(0,"uLightingDirection"),"$ish"),w.a)
$.a.uniform3f(H.b(this.c.b.h(0,"uDirectionalColor"),"$ish"),P.q(this.dy.value,null),P.q(this.fr.value,null),P.q(this.fx.value,null))}$.a.activeTexture(33984)
$.a.bindTexture(3553,this.d)
$.a.uniform1i(H.b(this.c.b.h(0,"uSampler"),"$ish"),0)
z=this.b
y=this.c.a.h(0,"aVertexPosition")
z.H(this.c.a.h(0,"aTextureCoord"),this.c.a.h(0,"aVertexNormal"),this.gt(),y)
y=$.$get$y()
if(0>=y.length)return H.e(y,-1)
$.j=y.pop()},
A:function(a,b){var z,y
z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
y=b-z
this.r=this.r+this.e*y/1000
this.x=this.x+this.f*y/1000}this.a=b},
B:function(){V.an(new V.hA(this),new V.hB(this),new V.hC(this),new V.hD(this))
if($.$get$a3().p(0,33))this.y-=0.05
if($.$get$a3().p(0,34))this.y+=0.05},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,'    <input type="checkbox" id="blending" checked /> Use blending<br/>\n    Alpha level <input type="text" id="alpha" value="0.5" /><br/>\n\n    <input type="checkbox" id="lighting" checked /> Use lighting<br/>\n    (Use cursor keys to spin the box and <code>Page Up</code>/<code>Page Down</code> to zoom out/in)\n\n    <br/>\n    <h2>Directional light:</h2>\n\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Direction:</b>\n            <td>X: <input type="text" id="lightDirectionX" value="-0.25" />\n            <td>Y: <input type="text" id="lightDirectionY" value="-0.25" />\n            <td>Z: <input type="text" id="lightDirectionZ" value="-1.0" />\n        </tr>\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="directionalR" value="0.8" />\n            <td>G: <input type="text" id="directionalG" value="0.8" />\n            <td>B: <input type="text" id="directionalB" value="0.8" />\n        </tr>\n    </table>\n\n    <h2>Ambient light:</h2>\n    <table style="border: 0; padding: 10px;">\n        <tr>\n            <td><b>Colour:</b>\n            <td>R: <input type="text" id="ambientR" value="0.2" />\n            <td>G: <input type="text" id="ambientG" value="0.2" />\n            <td>B: <input type="text" id="ambientB" value="0.2" />\n        </tr>\n    </table>\n    ',z)
z=document
this.z=H.b(z.querySelector("#lighting"),"$isl")
this.Q=H.b(z.querySelector("#ambientR"),"$isl")
this.ch=H.b(z.querySelector("#ambientG"),"$isl")
this.cx=H.b(z.querySelector("#ambientB"),"$isl")
this.dy=H.b(z.querySelector("#directionalR"),"$isl")
this.fr=H.b(z.querySelector("#directionalG"),"$isl")
this.fx=H.b(z.querySelector("#directionalB"),"$isl")
this.cy=H.b(z.querySelector("#lightDirectionX"),"$isl")
this.db=H.b(z.querySelector("#lightDirectionY"),"$isl")
this.dx=H.b(z.querySelector("#lightDirectionZ"),"$isl")
this.fy=H.b(z.querySelector("#blending"),"$isl")
this.go=H.b(z.querySelector("#alpha"),"$isl")},
l:{
hy:function(){var z=new V.hx(3,-3,0,0,-5,0)
z.bv()
return z}}},
hz:{"^":"d:4;a",
$1:function(a){H.b(a,"$isG")
this.a.d=a
return a}},
hD:{"^":"d:0;a",
$0:function(){return--this.a.f}},
hA:{"^":"d:0;a",
$0:function(){return++this.a.f}},
hB:{"^":"d:0;a",
$0:function(){return--this.a.e}},
hC:{"^":"d:0;a",
$0:function(){return++this.a.e}},
hE:{"^":"W;0b,0c,d,e,f,r,0x,a",
bw:function(){var z,y,x,w,v,u,t
for(z=this.d,y=[P.D],x=0;x<50;++x){w=x/50
v=$.dn
$.dn=v+1
w=new V.dm(v,w*5,w,0)
w.b0()
v=$.a.createBuffer()
w.Q=v
$.a.bindBuffer(34962,v)
u=H.c([-1,-1,0,1,-1,0,-1,1,0,1,1,0],y)
$.a.bufferData(34962,new Float32Array(H.w(u)),35044)
v=$.a.createBuffer()
w.ch=v
$.a.bindBuffer(34962,v)
t=H.c([0,0,1,0,0,1,1,1],y)
$.a.bufferData(34962,new Float32Array(H.w(t)),35044)
C.a.k(z,w)}V.U("star.gif",new V.hG(this))
z=[P.f]
z=V.T("          precision mediump float;\n\n          varying vec2 vTextureCoord;\n\n          uniform sampler2D uSampler;\n\n          uniform vec3 uColor;\n\n          void main(void) {\n              vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n              gl_FragColor = textureColor * vec4(uColor, 1.0);\n          }\n        ","          attribute vec3 aVertexPosition;\n          attribute vec2 aTextureCoord;\n\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n\n          varying vec2 vTextureCoord;\n\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vTextureCoord = aTextureCoord;\n          }\n        ",H.c(["aVertexPosition","aTextureCoord"],z),H.c(["uMVMatrix","uPMatrix","uColor","uSampler"],z))
this.b=z
$.a.useProgram(z.c)},
C:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
if(this.c==null)return
$.a.viewport(0,0,a,b)
$.a.clear(16640)
$.H=V.X(45,c,0.1,100)
z=$.$get$y();(z&&C.a).k(z,new V.J(new Float32Array(H.w($.j.a))))
$.a.blendFunc(770,1)
$.a.disable(2929)
$.a.enable(3042)
z=$.j
y=[P.D]
z.n(0,H.c([0,0,this.r],y))
z.M(this.e*0.017453292519943295)
$.a.activeTexture(33984)
$.a.bindTexture(3553,this.c)
$.a.uniform1i(this.b.b.h(0,"uSampler"),0)
for(z=this.d,x=z.length,w=this.f,v=this.gt(),u={func:1},t=0;t<z.length;z.length===x||(0,H.aP)(z),++t){s=z[t]
r=this.b.a.h(0,"aVertexPosition")
q=this.b.a.h(0,"aTextureCoord")
p=this.b.b.h(0,"uColor")
o=this.x.checked
n=this.e
H.b(p,"$ish")
H.v(q)
H.m(v,u)
H.v(r)
m=$.$get$y();(m&&C.a).k(m,new V.J(new Float32Array(H.w($.j.a))))
m=$.j
m.D(s.d*0.017453292519943295)
m.n(0,H.c([s.b,0,0],y))
m=$.j
m.D(-s.d*0.017453292519943295)
m.M(-n*0.017453292519943295)
if(o){$.a.uniform3f(p,s.x,s.y,s.z)
s.aY(r,null,q,v)}$.j.b1(w*0.017453292519943295)
$.a.uniform3f(p,s.e,s.f,s.r)
s.aY(r,null,q,v)
r=$.$get$y()
if(0>=r.length)return H.e(r,-1)
$.j=r.pop()}z=$.$get$y()
if(0>=z.length)return H.e(z,-1)
$.j=z.pop()},
v:[function(){$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uPMatrix"),"$ish"),!1,$.H.a)
$.a.uniformMatrix4fv(H.b(this.b.b.h(0,"uMVMatrix"),"$ish"),!1,$.j.a)},"$0","gt",0,0,1],
A:function(a,b){var z,y,x,w,v,u,t
z=this.a
if(z!==0){if(typeof b!=="number")return b.G()
if(typeof z!=="number")return H.R(z)
y=b-z
for(z=this.d,x=z.length,w=0.0006*y,v=0;v<z.length;z.length===x||(0,H.aP)(z),++v){u=z[v]
u.d=u.d+u.c*0.06*y
t=u.b-=w
if(t<0){u.b=t+5
u.b0()}}}this.a=b},
B:function(){V.an(new V.hH(this),null,null,new V.hI(this))
if($.$get$a3().p(0,33))this.r-=0.1
if($.$get$a3().p(0,34))this.r+=0.1},
N:function(a){var z=$.P
if(z==null){z=new V.ak()
$.P=z}(a&&C.c).O(a,'    <input type="checkbox" id="twinkle" /> Twinkle<br/>\n    (Use up/down cursor keys to rotate, and <code>Page Up</code>/<code>Page Down</code> to zoom out/in)\n    ',z)
this.x=H.b(document.querySelector("#twinkle"),"$isl")},
l:{
hF:function(){var z=new V.hE(H.c([],[V.dm]),90,0,-15,0)
z.bw()
return z}}},
hG:{"^":"d:6;a",
$2:function(a,b){var z
$.a.pixelStorei(37440,1)
$.a.bindTexture(3553,a)
z=$.a;(z&&C.f).Z(z,3553,0,6408,6408,5121,b)
$.a.texParameteri(3553,10240,9729)
$.a.texParameteri(3553,10241,9729)
$.a.bindTexture(3553,null)
this.a.c=a}},
hI:{"^":"d:0;a",
$0:function(){var z=this.a.e+=2
return z}},
hH:{"^":"d:0;a",
$0:function(){var z=this.a.e-=2
return z}},
iu:{"^":"i;"},
iq:{"^":"i;a",
sb5:function(a,b){C.j.F(this.a,0,b)
return b},
sb6:function(a,b){C.j.F(this.a,1,b)
return b},
sb7:function(a,b){C.j.F(this.a,2,b)
return b},
ay:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
if(v===0)throw H.k(new V.iu())
return V.bS(z[0]/v,z[1]/v,z[2]/v)},
al:function(a,b){var z=this.a
this.sb5(0,z[0]*b)
this.sb6(0,z[1]*b)
this.sb7(0,z[2]*b)
return this},
j:function(a){var z=this.a
return"Vector3("+H.n(z[0])+","+H.n(z[1])+","+H.n(z[2])+")"},
l:{
bS:function(a,b,c){var z=new V.iq(new Float32Array(3))
z.sb5(0,a)
z.sb6(0,b)
z.sb7(0,c)
return z}}},
J:{"^":"i;a",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p
x=[P.f]
w=H.c([],x)
for(v=this.a,u=v.length,t=0;t<4;++t){s=H.c([],x)
for(r=0;r<4;++r){q=t+r*4
if(q>=u)return H.e(v,q)
z=v[q]
if(J.cI(z)<1e-16)z=0
y=null
try{y=J.cL(z,4)}catch(p){H.a5(p)
y=J.av(z)}C.a.k(s,y)}C.a.k(w,"| "+C.a.ah(s,", ")+" |")}return"Matrix4:\n"+C.a.ah(w,"\n")},
ax:function(){var z,y,x
for(z=this.a,y=z.length,x=0;x<16;++x){if(x>=y)return H.e(z,x)
z[x]=0}if(0>=y)return H.e(z,0)
z[0]=1
if(5>=y)return H.e(z,5)
z[5]=1
if(10>=y)return H.e(z,10)
z[10]=1
if(15>=y)return H.e(z,15)
z[15]=1},
M:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x.length
if(4>=w)return H.e(x,4)
v=x[4]
if(8>=w)return H.e(x,8)
u=x[8]
t=x[5]
if(9>=w)return H.e(x,9)
s=x[9]
r=x[6]
if(10>=w)return H.e(x,10)
q=x[10]
p=x[7]
if(11>=w)return H.e(x,11)
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
D:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x.length
if(0>=w)return H.e(x,0)
v=x[0]
if(8>=w)return H.e(x,8)
u=x[8]
t=-y
s=x[1]
if(9>=w)return H.e(x,9)
r=x[9]
q=x[2]
if(10>=w)return H.e(x,10)
p=x[10]
o=x[3]
if(11>=w)return H.e(x,11)
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
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x.length
if(0>=w)return H.e(x,0)
v=x[0]
if(4>=w)return H.e(x,4)
u=x[4]
t=x[1]
if(5>=w)return H.e(x,5)
s=x[5]
r=x[2]
if(6>=w)return H.e(x,6)
q=x[6]
p=x[3]
if(7>=w)return H.e(x,7)
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
n:function(a,b){var z,y,x,w,v,u,t,s
H.Y(b,"$iso",[P.D],"$aso")
z=b[0]
y=b[1]
x=b[2]
w=this.a
v=w.length
if(0>=v)return H.e(w,0)
u=w[0]
if(4>=v)return H.e(w,4)
t=w[4]
if(8>=v)return H.e(w,8)
s=w[8]
if(12>=v)return H.e(w,12)
w[12]=u*z+t*y+s*x+w[12]
s=w[1]
t=w[5]
u=w[9]
if(13>=v)return H.e(w,13)
w[13]=s*z+t*y+u*x+w[13]
u=w[2]
t=w[6]
s=w[10]
if(14>=v)return H.e(w,14)
w[14]=u*z+t*y+s*x+w[14]
s=w[3]
t=w[7]
u=w[11]
if(15>=v)return H.e(w,15)
w[15]=s*z+t*y+u*x+w[15]
return this},
aE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=new Float32Array(16)
y=this.a
x=b.a
for(w=z.length,v=y.length,u=x.length,t=0;t<4;++t)for(s=0;s<4;++s)for(r=s*4,q=t+r,p=0;p<4;++p){if(q>=w)return H.e(z,q)
o=z[q]
n=t+p*4
if(n>=v)return H.e(y,n)
n=y[n]
m=p+r
if(m>=u)return H.e(x,m)
z[q]=o+n*x[m]}return new V.J(z)},
V:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.a
y=z.length
if(0>=y)return H.e(z,0)
x=z[0]
if(1>=y)return H.e(z,1)
w=z[1]
if(2>=y)return H.e(z,2)
v=z[2]
if(4>=y)return H.e(z,4)
u=z[4]
if(5>=y)return H.e(z,5)
t=z[5]
if(6>=y)return H.e(z,6)
s=z[6]
if(8>=y)return H.e(z,8)
r=z[8]
if(9>=y)return H.e(z,9)
q=z[9]
if(10>=y)return H.e(z,10)
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
return new V.hQ(y)},
aj:function(a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
if(0>=p)return H.e(r,0)
h=r[0]
if(4>=p)return H.e(r,4)
g=r[4]
if(8>=p)return H.e(r,8)
f=r[8]
e=r[1]
d=r[5]
if(9>=p)return H.e(r,9)
c=r[9]
b=r[2]
a=r[6]
if(10>=p)return H.e(r,10)
a0=r[10]
a1=r[3]
a2=r[7]
if(11>=p)return H.e(r,11)
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
l:{
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
if(0>=q)return H.e(v,0)
v[0]=u/t
if(5>=q)return H.e(v,5)
v[5]=u/s
if(8>=q)return H.e(v,8)
v[8]=(y+x)/t
if(9>=q)return H.e(v,9)
v[9]=(z+w)/s
if(10>=q)return H.e(v,10)
v[10]=-(d+c)/r
if(11>=q)return H.e(v,11)
v[11]=-1
if(14>=q)return H.e(v,14)
v[14]=-(u*d)/r
return new V.J(v)}}},
hQ:{"^":"i;a",
j:function(a){var z,y,x,w,v,u,t,s,r,q
x=[P.f]
w=H.c([],x)
for(v=this.a,u=0;u<3;++u){t=H.c([],x)
for(s=0;s<3;++s){r=u+s*3
if(r>=9)return H.e(v,r)
z=v[r]
if(J.cI(z)<1e-16)z=0
y=null
try{y=J.cL(z,4)}catch(q){H.a5(q)
y=J.av(z)}C.a.k(t,y)}C.a.k(w,"| "+C.a.ah(t,", ")+" |")}return"Matrix3:\n"+C.a.ah(w,"\n")},
W:function(){var z,y,x,w
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
i3:{"^":"i;0a,0b,0c,0d"},
ib:{"^":"i;a,b,c,0d,0e,0f,0r,0x",
bx:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=P.D
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
C.a.K(w,H.c([h,n,g],z))
C.a.K(v,H.c([1-k/s,m],z))
C.a.K(x,H.c([r*h,l,r*g],z))}}for(z=s+1,y=[y],q=0;q<t;++q)for(r=q*z,k=0;k<s;++k){f=r+k
e=f+s+1
l=f+1
C.a.K(u,H.c([f,e,l,e,e+1,l],y))}this.x=u.length
z=$.a.createBuffer()
this.e=z
$.a.bindBuffer(34962,z)
$.a.bufferData(34962,new Float32Array(H.w(w)),35044)
z=$.a.createBuffer()
this.f=z
$.a.bindBuffer(34962,z)
$.a.bufferData(34962,new Float32Array(H.w(v)),35044)
z=$.a.createBuffer()
this.d=z
$.a.bindBuffer(34962,z)
$.a.bufferData(34962,new Float32Array(H.w(x)),35044)
z=$.a.createBuffer()
this.r=z
$.a.bindBuffer(34963,z)
$.a.bufferData(34963,new Uint16Array(H.w(u)),35044)},
H:function(a,b,c,d){H.m(c,{func:1})
if(d!=null){$.a.bindBuffer(34962,this.d)
$.a.vertexAttribPointer(d,3,5126,!1,0,0)}if(b!=null){$.a.bindBuffer(34962,this.e)
$.a.vertexAttribPointer(b,3,5126,!1,0,0)}if(a!=null){$.a.bindBuffer(34962,this.f)
$.a.bindBuffer(34962,this.f)
$.a.vertexAttribPointer(a,2,5126,!1,0,0)}c.$0()
$.a.bindBuffer(34963,this.r)
$.a.drawElements(4,this.x,5123,0)},
l:{
bQ:function(a,b,c){var z=new V.ib(a,b,c)
z.bx(a,b,c)
return z}}},
dm:{"^":"i;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
b0:function(){this.e=$.$get$aU().a5()
this.f=$.$get$aU().a5()
this.r=$.$get$aU().a5()
this.x=$.$get$aU().a5()
this.y=$.$get$aU().a5()
this.z=$.$get$aU().a5()},
aY:function(a,b,c,d){H.m(d,{func:1})
$.a.bindBuffer(34962,this.ch)
$.a.vertexAttribPointer(c,2,5126,!1,0,0)
$.a.bindBuffer(34962,this.Q)
$.a.vertexAttribPointer(a,3,5126,!1,0,0)
d.$0()
$.a.drawArrays(5,0,4)}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cd.prototype
return J.f9.prototype}if(typeof a=="string")return J.bN.prototype
if(a==null)return J.fa.prototype
if(typeof a=="boolean")return J.f8.prototype
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.i)return a
return J.c_(a)}
J.bB=function(a){if(typeof a=="string")return J.bN.prototype
if(a==null)return a
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.i)return a
return J.c_(a)}
J.bC=function(a){if(a==null)return a
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.i)return a
return J.c_(a)}
J.kk=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cd.prototype
return J.bq.prototype}if(a==null)return a
if(!(a instanceof P.i))return J.bw.prototype
return a}
J.ec=function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.i))return J.bw.prototype
return a}
J.bZ=function(a){if(typeof a=="string")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.i))return J.bw.prototype
return a}
J.bj=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.i)return a
return J.c_(a)}
J.c3=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).a0(a,b)}
J.ep=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ec(a).ba(a,b)}
J.cH=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kw(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bB(a).h(a,b)}
J.cI=function(a){if(typeof a==="number")return Math.abs(a)
return J.kk(a).aT(a)}
J.eq=function(a,b,c,d){return J.bj(a).aU(a,b,c,d)}
J.bG=function(a,b){return J.bC(a).ae(a,b)}
J.c4=function(a,b,c){return J.bB(a).c7(a,b,c)}
J.cJ=function(a,b){return J.bC(a).m(a,b)}
J.cK=function(a,b){return J.bC(a).I(a,b)}
J.er=function(a){return J.bj(a).gc1(a)}
J.bH=function(a){return J.N(a).gL(a)}
J.b0=function(a){return J.bC(a).gE(a)}
J.au=function(a){return J.bB(a).gi(a)}
J.es=function(a){return J.bj(a).gaz(a)}
J.et=function(a){return J.bj(a).gcr(a)}
J.c5=function(a){return J.bC(a).cm(a)}
J.eu=function(a,b){return J.bZ(a).bc(a,b)}
J.ev=function(a,b){return J.bZ(a).aG(a,b)}
J.ew=function(a){return J.bZ(a).cs(a)}
J.av=function(a){return J.N(a).j(a)}
J.cL=function(a,b){return J.ec(a).cu(a,b)}
J.ex=function(a){return J.bZ(a).cv(a)}
I.aZ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.bI.prototype
C.m=W.c8.prototype
C.c=W.bK.prototype
C.r=W.b3.prototype
C.t=J.r.prototype
C.a=J.bo.prototype
C.d=J.cd.prototype
C.u=J.bq.prototype
C.e=J.bN.prototype
C.B=J.br.prototype
C.j=H.hT.prototype
C.H=W.hV.prototype
C.p=J.i1.prototype
C.f=P.cm.prototype
C.q=W.ij.prototype
C.k=J.bw.prototype
C.I=W.is.prototype
C.b=new P.jn()
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.x=function(getTagFallback) {
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
C.y=function() {
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
C.z=function(hooks) {
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
C.A=function(hooks) {
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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=new P.fe(null,null)
C.D=new P.ff(null)
C.E=H.c(I.aZ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.F=H.c(I.aZ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.G=H.c(I.aZ([]),[P.f])
C.h=H.c(I.aZ(["bind","if","ref","repeat","syntax"]),[P.f])
C.i=H.c(I.aZ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
$.ag=0
$.b1=null
$.cQ=null
$.cv=!1
$.ee=null
$.e5=null
$.el=null
$.bY=null
$.c0=null
$.cA=null
$.aW=null
$.bb=null
$.bc=null
$.cw=!1
$.I=C.b
$.ap=null
$.ca=null
$.d4=null
$.d3=null
$.d1=null
$.d0=null
$.d_=null
$.cZ=null
$.a=null
$.bD=null
$.H=null
$.j=null
$.cz=0
$.eh=0
$.e8=1
$.eo=!1
$.P=null
$.dn=0
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
I.$lazy(y,x,w)}})(["cY","$get$cY",function(){return H.ed("_$dart_dartClosure")},"ce","$get$ce",function(){return H.ed("_$dart_js")},"ds","$get$ds",function(){return H.al(H.bR({
toString:function(){return"$receiver$"}}))},"dt","$get$dt",function(){return H.al(H.bR({$method$:null,
toString:function(){return"$receiver$"}}))},"du","$get$du",function(){return H.al(H.bR(null))},"dv","$get$dv",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dz","$get$dz",function(){return H.al(H.bR(void 0))},"dA","$get$dA",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dx","$get$dx",function(){return H.al(H.dy(null))},"dw","$get$dw",function(){return H.al(function(){try{null.$method$}catch(z){return z.message}}())},"dC","$get$dC",function(){return H.al(H.dy(void 0))},"dB","$get$dB",function(){return H.al(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cs","$get$cs",function(){return P.iv()},"bd","$get$bd",function(){return[]},"cW","$get$cW",function(){return{}},"dM","$get$dM",function(){return P.dc(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"ct","$get$ct",function(){return P.db(P.f,P.bn)},"bf","$get$bf",function(){return H.b(W.cF("#lesson01-canvas"),"$isc8")},"a3","$get$a3",function(){return P.bt(null,null,null,P.S)},"af","$get$af",function(){return P.hM()},"y","$get$y",function(){return H.c([],[V.J])},"eb","$get$eb",function(){return H.b(W.cF("#fps"),"$isbK")},"cC","$get$cC",function(){return H.b(W.cF("#lesson_html"),"$isbK")},"aU","$get$aU",function(){var z=P.jl(42)
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.M},{func:1,ret:-1},{func:1,ret:P.F},{func:1,ret:P.D},{func:1,ret:P.G,args:[P.G]},{func:1,ret:P.F,args:[P.G]},{func:1,ret:P.F,args:[P.G,W.aR]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[W.aT]},{func:1,args:[,]},{func:1,ret:P.F,args:[V.aS]},{func:1,ret:P.F,args:[W.aA]},{func:1,ret:P.Q,args:[W.ah,P.f,P.f,W.by]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.i],opt:[P.ac]},{func:1,ret:P.F,args:[,,]},{func:1,ret:W.z},{func:1,ret:P.Q,args:[P.f]},{func:1,ret:P.Q,args:[W.aj]},{func:1,ret:P.F,args:[W.a0]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,ret:P.F,args:[P.f]},{func:1,ret:P.Q,args:[,]},{func:1,ret:-1,args:[P.G,W.aR]},{func:1,ret:P.F,args:[P.M]},{func:1,ret:P.Q,args:[P.S]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.f,args:[W.b3]},{func:1,ret:P.Q,args:[W.z]},{func:1,ret:[P.a_,,],args:[,]},{func:1,ret:P.F,args:[W.bu]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:-1,args:[W.a0]}]
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
if(x==y)H.kK(d||a)
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
Isolate.aZ=a.aZ
Isolate.bh=a.bh
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
if(typeof dartMainRunner==="function")dartMainRunner(V.ei,[])
else V.ei([])})})()
//# sourceMappingURL=learn_gl.dart.js.map
