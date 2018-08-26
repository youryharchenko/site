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
b6.$isc=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isD)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="c"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="G"){processStatics(init.statics[b2]=b3.G,b4)
delete b3.G}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cA(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cB=function(){}
var dart=[["","",,H,{"^":"",kk:{"^":"c;a"}}],["","",,J,{"^":"",
cE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bs:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cD==null){H.jw()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.e2("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ca()]
if(v!=null)return v
v=H.jB(a)
if(v!=null)return v
if(typeof a=="function")return C.a4
y=Object.getPrototypeOf(a)
if(y==null)return C.P
if(y===Object.prototype)return C.P
if(typeof w=="function"){Object.defineProperty(w,$.$get$ca(),{value:C.G,enumerable:false,writable:true,configurable:true})
return C.G}return C.G},
D:{"^":"c;",
at:function(a,b){return a===b},
ga1:function(a){return H.b6(a)},
u:["ec",function(a){return"Instance of '"+H.b7(a)+"'"}],
"%":"ApplicationCacheErrorEvent|ArrayBuffer|CanvasGradient|CanvasPattern|DOMError|ErrorEvent|Event|InputEvent|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedEnumeration|SVGAnimatedString|SVGAnimatedTransformList|SensorErrorEvent|SpeechRecognitionError|StorageManager"},
fP:{"^":"D;",
u:function(a){return String(a)},
ga1:function(a){return a?519018:218159},
$isV:1},
dg:{"^":"D;",
at:function(a,b){return null==b},
u:function(a){return"null"},
ga1:function(a){return 0},
$isP:1},
cb:{"^":"D;",
ga1:function(a){return 0},
u:["ee",function(a){return String(a)}]},
hy:{"^":"cb;"},
b8:{"^":"cb;"},
b3:{"^":"cb;",
u:function(a){var z=a[$.$get$cY()]
if(z==null)return this.ee(a)
return"JavaScript function for "+H.e(J.aO(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbj:1},
b1:{"^":"D;$ti",
q:function(a,b){H.p(b,H.m(a,0))
if(!!a.fixed$length)H.aL(P.a7("add"))
a.push(b)},
cC:function(a,b){return H.cm(a,b,null,H.m(a,0))},
aw:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
ak:function(a,b,c,d,e){var z,y,x,w,v,u
z=H.m(a,0)
H.i(d,"$isx",[z],"$asx")
if(!!a.immutable$list)H.aL(P.a7("setRange"))
P.dy(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
x=J.C(d)
if(!!x.$isd){H.i(d,"$isd",[z],"$asd")
w=e
v=d}else{v=x.cC(d,e).du(0,!1)
w=0}z=J.W(v)
if(w+y>z.gD(v))throw H.h(H.fM())
if(w<b)for(u=y-1;u>=0;--u)a[b+u]=z.i(v,w+u)
else for(u=0;u<y;++u)a[b+u]=z.i(v,w+u)},
b9:function(a,b,c,d){return this.ak(a,b,c,d,0)},
d0:function(a,b){var z,y
H.u(b,{func:1,ret:P.V,args:[H.m(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.h(P.ad(a))}return!1},
a8:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aa(a[z],b))return!0
return!1},
u:function(a){return P.c8(a,"[","]")},
ga5:function(a){return new J.eY(a,a.length,0,[H.m(a,0)])},
ga1:function(a){return H.b6(a)},
gD:function(a){return a.length},
sD:function(a,b){if(!!a.fixed$length)H.aL(P.a7("set length"))
if(b<0)throw H.h(P.aq(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){H.k(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.bd(a,b))
if(b>=a.length||b<0)throw H.h(H.bd(a,b))
return a[b]},
m:function(a,b,c){H.p(c,H.m(a,0))
if(!!a.immutable$list)H.aL(P.a7("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bd(a,b))
a[b]=c},
B:function(a,b){var z,y
z=[H.m(a,0)]
H.i(b,"$isd",z,"$asd")
y=C.c.B(a.length,b.gD(b))
z=H.f([],z)
this.sD(z,y)
this.b9(z,0,a.length,a)
this.b9(z,a.length,y,b)
return z},
$isx:1,
$isd:1,
G:{
fO:function(a,b){if(a<0||a>4294967295)throw H.h(P.aq(a,0,4294967295,"length",null))
return J.de(new Array(a),b)},
de:function(a,b){return J.bm(H.f(a,[b]))},
bm:function(a){H.bT(a)
a.fixed$length=Array
return a},
ki:[function(a,b){return J.eL(H.eB(a,"$isH"),H.eB(b,"$isH"))},"$2","j2",8,0,20]}},
kj:{"^":"b1;$ti"},
eY:{"^":"c;a,b,c,0d,$ti",
scO:function(a){this.d=H.p(a,H.m(this,0))},
gY:function(){return this.d},
W:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.cH(z))
x=this.c
if(x>=y){this.scO(null)
return!1}this.scO(z[x]);++this.c
return!0},
$isay:1},
az:{"^":"D;",
b5:function(a,b){var z
H.bg(b)
if(typeof b!=="number")throw H.h(H.at(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gca(b)
if(this.gca(a)===z)return 0
if(this.gca(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gca:function(a){return a===0?1/a<0:a<0},
a7:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.a7(""+a+".toInt()"))},
aI:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.a7(""+a+".floor()"))},
u:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga1:function(a){return a&0x1FFFFFFF},
bp:function(a){return-a},
B:function(a,b){return a+b},
H:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a-b},
cm:function(a,b){return a/b},
v:function(a,b){return a*b},
av:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cZ(a,b)},
b3:function(a,b){return(a|0)===a?a/b|0:this.cZ(a,b)},
cZ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.a7("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bf:function(a,b){var z
if(a>0)z=this.f9(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f9:function(a,b){return b>31?0:a>>>b},
ct:function(a,b){return(a|b)>>>0},
L:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a<b},
aM:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a>b},
$isH:1,
$asH:function(){return[P.a0]},
$isaI:1,
$isa0:1},
c9:{"^":"az;",
bp:function(a){return-a},
$isv:1},
df:{"^":"az;"},
b2:{"^":"D;",
eG:function(a,b){if(b>=a.length)throw H.h(H.bd(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.r(b)
if(typeof b!=="string")throw H.h(P.eX(b,null,null))
return a+b},
e7:function(a,b,c){var z
if(c>a.length)throw H.h(P.aq(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
e6:function(a,b){return this.e7(a,b,0)},
cF:function(a,b,c){H.k(c)
if(c==null)c=a.length
if(b>c)throw H.h(P.ci(b,null,null))
if(c>a.length)throw H.h(P.ci(c,null,null))
return a.substring(b,c)},
eb:function(a,b){return this.cF(a,b,null)},
hm:function(a){return a.toLowerCase()},
b5:function(a,b){var z
H.r(b)
if(typeof b!=="string")throw H.h(H.at(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
u:function(a){return a},
ga1:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gD:function(a){return a.length},
$isH:1,
$asH:function(){return[P.n]},
$ishx:1,
$isn:1}}],["","",,H,{"^":"",
fL:function(){return new P.bJ("No element")},
fN:function(){return new P.bJ("Too many elements")},
fM:function(){return new P.bJ("Too few elements")},
hU:function(a,b,c){H.i(a,"$isd",[c],"$asd")
H.u(b,{func:1,ret:P.v,args:[c,c]})
H.bp(a,0,J.aj(a)-1,b,c)},
bp:function(a,b,c,d,e){H.i(a,"$isd",[e],"$asd")
H.u(d,{func:1,ret:P.v,args:[e,e]})
if(c-b<=32)H.hT(a,b,c,d,e)
else H.hS(a,b,c,d,e)},
hT:function(a,b,c,d,e){var z,y,x,w,v
H.i(a,"$isd",[e],"$asd")
H.u(d,{func:1,ret:P.v,args:[e,e]})
for(z=b+1,y=J.W(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ab(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.m(a,w,y.i(a,v))
w=v}y.m(a,w,x)}},
hS:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.i(a,"$isd",[a2],"$asd")
H.u(a1,{func:1,ret:P.v,args:[a2,a2]})
z=C.c.b3(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.b3(b+a0,2)
v=w-z
u=w+z
t=J.W(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.ab(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ab(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ab(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ab(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ab(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ab(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ab(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ab(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ab(a1.$2(p,o),0)){n=o
o=p
p=n}t.m(a,y,s)
t.m(a,w,q)
t.m(a,x,o)
t.m(a,v,t.i(a,b))
t.m(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aa(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.L()
if(i<0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.aM()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.m(a,k,t.i(a,m))
g=m+1
t.m(a,m,t.i(a,l))
t.m(a,l,j)
l=h
m=g
break}else{t.m(a,k,t.i(a,l))
t.m(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.L()
if(e<0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.aM()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.aM()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.L()
h=l-1
if(i<0){t.m(a,k,t.i(a,m))
g=m+1
t.m(a,m,t.i(a,l))
t.m(a,l,j)
m=g}else{t.m(a,k,t.i(a,l))
t.m(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.m(a,b,t.i(a,c))
t.m(a,c,r)
c=l+1
t.m(a,a0,t.i(a,c))
t.m(a,c,p)
H.bp(a,b,m-2,a1,a2)
H.bp(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aa(a1.$2(t.i(a,m),r),0);)++m
for(;J.aa(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.L()
h=l-1
if(i<0){t.m(a,k,t.i(a,m))
g=m+1
t.m(a,m,t.i(a,l))
t.m(a,l,j)
m=g}else{t.m(a,k,t.i(a,l))
t.m(a,l,j)}l=h
break}}H.bp(a,m,l,a1,a2)}else H.bp(a,m,l,a1,a2)},
c5:{"^":"x;"},
bn:{"^":"c5;$ti",
ga5:function(a){return new H.dk(this,this.gD(this),0,[H.au(this,"bn",0)])},
cl:function(a,b){return this.ed(0,H.u(b,{func:1,ret:P.V,args:[H.au(this,"bn",0)]}))}},
hX:{"^":"bn;a,b,c,$ti",
geP:function(){var z,y
z=J.aj(this.a)
y=this.c
if(y==null||y>z)return z
return y},
gfa:function(){var z,y
z=J.aj(this.a)
y=this.b
if(y>z)return z
return y},
gD:function(a){var z,y,x
z=J.aj(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.H()
return x-y},
aw:function(a,b){var z,y
z=this.gfa()+b
if(b>=0){y=this.geP()
if(typeof y!=="number")return H.J(y)
y=z>=y}else y=!0
if(y)throw H.h(P.bl(b,this,"index",null,null))
return J.cK(this.a,z)},
du:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.W(y)
w=x.gD(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.H()
u=w-z
if(u<0)u=0
t=new Array(u)
t.fixed$length=Array
s=H.f(t,this.$ti)
for(r=0;r<u;++r){C.a.m(s,r,x.aw(y,z+r))
if(x.gD(y)<w)throw H.h(P.ad(this))}return s},
G:{
cm:function(a,b,c,d){if(c!=null){if(c<0)H.aL(P.aq(c,0,null,"end",null))
if(b>c)H.aL(P.aq(b,0,c,"start",null))}return new H.hX(a,b,c,[d])}}},
dk:{"^":"c;a,b,c,0d,$ti",
scH:function(a){this.d=H.p(a,H.m(this,0))},
gY:function(){return this.d},
W:function(){var z,y,x,w
z=this.a
y=J.W(z)
x=y.gD(z)
if(this.b!==x)throw H.h(P.ad(z))
w=this.c
if(w>=x){this.scH(null)
return!1}this.scH(y.aw(z,w));++this.c
return!0},
$isay:1},
h2:{"^":"bn;a,b,$ti",
gD:function(a){return J.aj(this.a)},
aw:function(a,b){return this.b.$1(J.cK(this.a,b))},
$asbn:function(a,b){return[b]},
$asx:function(a,b){return[b]}},
e6:{"^":"x;a,b,$ti",
ga5:function(a){return new H.ig(J.bu(this.a),this.b,this.$ti)}},
ig:{"^":"ay;a,b,$ti",
W:function(){var z,y
for(z=this.a,y=this.b;z.W();)if(y.$1(z.gY()))return!0
return!1},
gY:function(){return this.a.gY()}},
bE:{"^":"c;$ti"}}],["","",,H,{"^":"",
bV:function(a){var z,y
z=H.r(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jo:function(a){return init.types[H.k(a)]},
jz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isaA},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aO(a)
if(typeof z!=="string")throw H.h(H.at(a))
return z},
b6:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b7:function(a){return H.hB(a)+H.cy(H.av(a),0,null)},
hB:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Y||!!z.$isb8){u=C.K(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bV(w.length>1&&C.w.eG(w,0)===36?C.w.eb(w,1):w)},
kA:[function(){return Date.now()},"$0","j4",0,0,21],
bH:function(){var z,y
if($.aC!=null)return
$.aC=1000
$.bo=H.j4()
if(typeof window=="undefined")return
z=window
if(z==null)return
y=z.performance
if(y==null)return
if(typeof y.now!="function")return
$.aC=1e6
$.bo=new H.hC(y)},
J:function(a){throw H.h(H.at(a))},
a:function(a,b){if(a==null)J.aj(a)
throw H.h(H.bd(a,b))},
bd:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,"index",null)
z=H.k(J.aj(a))
if(!(b<0)){if(typeof z!=="number")return H.J(z)
y=b>=z}else y=!0
if(y)return P.bl(b,a,"index",null,z)
return P.ci(b,"index",null)},
at:function(a){return new P.aw(!0,a,null,null)},
jg:function(a){return a},
h:function(a){var z
if(a==null)a=new P.du()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eF})
z.name=""}else z.toString=H.eF
return z},
eF:function(){return J.aO(this.dartException)},
aL:function(a){throw H.h(a)},
cH:function(a){throw H.h(P.ad(a))},
aM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bf(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cc(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dt(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dS()
u=$.$get$dT()
t=$.$get$dU()
s=$.$get$dV()
r=$.$get$dZ()
q=$.$get$e_()
p=$.$get$dX()
$.$get$dW()
o=$.$get$e1()
n=$.$get$e0()
m=v.ar(y)
if(m!=null)return z.$1(H.cc(H.r(y),m))
else{m=u.ar(y)
if(m!=null){m.method="call"
return z.$1(H.cc(H.r(y),m))}else{m=t.ar(y)
if(m==null){m=s.ar(y)
if(m==null){m=r.ar(y)
if(m==null){m=q.ar(y)
if(m==null){m=p.ar(y)
if(m==null){m=s.ar(y)
if(m==null){m=o.ar(y)
if(m==null){m=n.ar(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dt(H.r(y),m))}}return z.$1(new H.i8(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dE()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aw(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dE()
return a},
jn:function(a){var z
if(a==null)return new H.ek(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ek(a)},
jy:function(a,b,c,d,e,f){H.l(a,"$isbj")
switch(H.k(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.iy("Unsupported number of arguments for wrapped closure"))},
bc:function(a,b){var z
H.k(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jy)
a.$identity=z
return z},
f5:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.C(d).$isd){z.$reflectionInfo=d
x=H.hI(z).r}else x=d
w=e?Object.create(new H.hW().constructor.prototype):Object.create(new H.c1(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ac
if(typeof u!=="number")return u.B()
$.ac=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cU(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jo,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cR:H.c2
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cU(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
f2:function(a,b,c,d){var z=H.c2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cU:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.f4(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f2(y,!w,z,b)
if(y===0){w=$.ac
if(typeof w!=="number")return w.B()
$.ac=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aQ
if(v==null){v=H.bw("self")
$.aQ=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ac
if(typeof w!=="number")return w.B()
$.ac=w+1
t+=w
w="return function("+t+"){return this."
v=$.aQ
if(v==null){v=H.bw("self")
$.aQ=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
f3:function(a,b,c,d){var z,y
z=H.c2
y=H.cR
switch(b?-1:a){case 0:throw H.h(H.hM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
f4:function(a,b){var z,y,x,w,v,u,t,s
z=$.aQ
if(z==null){z=H.bw("self")
$.aQ=z}y=$.cQ
if(y==null){y=H.bw("receiver")
$.cQ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f3(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ac
if(typeof y!=="number")return y.B()
$.ac=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ac
if(typeof y!=="number")return y.B()
$.ac=y+1
return new Function(z+y+"}")()},
cA:function(a,b,c,d,e,f,g){var z,y
z=J.bm(H.bT(b))
H.k(c)
y=!!J.C(d).$isd?J.bm(d):d
return H.f5(a,z,c,y,!!e,f,g)},
r:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ai(a,"String"))},
be:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ai(a,"double"))},
bg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ai(a,"num"))},
je:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ai(a,"bool"))},
k:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ai(a,"int"))},
cF:function(a,b){throw H.h(H.ai(a,H.r(b).substring(3)))},
jE:function(a,b){var z=J.W(b)
throw H.h(H.f1(a,z.cF(b,3,z.gD(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cF(a,b)},
w:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.jE(a,b)},
eB:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cF(a,b)},
bT:function(a){if(a==null)return a
if(!!J.C(a).$isd)return a
throw H.h(H.ai(a,"List"))},
jA:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isd)return a
if(z[b])return a
H.cF(a,b)},
ev:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.k(z)]
else return a.$S()}return},
ew:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ev(J.C(a))
if(z==null)return!1
return H.eo(z,null,b,null)},
u:function(a,b){var z,y
if(a==null)return a
if($.cv)return a
$.cv=!0
try{if(H.ew(a,b))return a
z=H.cG(b)
y=H.ai(a,z)
throw H.h(y)}finally{$.cv=!1}},
ep:function(a){var z,y
z=J.C(a)
if(!!z.$ist){y=H.ev(z)
if(y!=null)return H.cG(y)
return"Closure"}return H.b7(a)},
jF:function(a){throw H.h(new P.fe(H.r(a)))},
ex:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
av:function(a){if(a==null)return
return a.$ti},
l2:function(a,b,c){return H.aK(a["$as"+H.e(c)],H.av(b))},
bf:function(a,b,c,d){var z
H.r(c)
H.k(d)
z=H.aK(a["$as"+H.e(c)],H.av(b))
return z==null?null:z[d]},
au:function(a,b,c){var z
H.r(b)
H.k(c)
z=H.aK(a["$as"+H.e(b)],H.av(a))
return z==null?null:z[c]},
m:function(a,b){var z
H.k(b)
z=H.av(a)
return z==null?null:z[b]},
cG:function(a){return H.as(a,null)},
as:function(a,b){var z,y
H.i(b,"$isd",[P.n],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bV(a[0].builtin$cls)+H.cy(a,1,b)
if(typeof a=="function")return H.bV(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.k(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.a(b,y)
return H.e(b[y])}if('func' in a)return H.j1(a,b)
if('futureOr' in a)return"FutureOr<"+H.as("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
j1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.i(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.q(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.a(b,r)
t=C.w.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.as(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.as(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.as(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.as(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ji(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.r(z[l])
n=n+m+H.as(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cy:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isd",[P.n],"$asd")
if(a==null)return""
z=new P.cl("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.as(u,c)}return"<"+z.u(0)+">"},
aK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jh:function(a,b,c,d){var z,y
H.r(b)
H.bT(c)
H.r(d)
if(a==null)return!1
z=H.av(a)
y=J.C(a)
if(y[b]==null)return!1
return H.er(H.aK(y[d],z),null,c,null)},
i:function(a,b,c,d){H.r(b)
H.bT(c)
H.r(d)
if(a==null)return a
if(H.jh(a,b,c,d))return a
throw H.h(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.cy(c,0,null),init.mangledGlobalNames)))},
er:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a_(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a_(a[y],b,c[y],d))return!1
return!0},
l0:function(a,b,c){return a.apply(b,H.aK(J.C(b)["$as"+H.e(c)],H.av(b)))},
ez:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="P"||a===-1||a===-2||H.ez(z)}return!1},
eu:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="P"||b===-1||b===-2||H.ez(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.eu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ew(a,b)}z=J.C(a).constructor
y=H.av(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a_(z,null,b,null)},
p:function(a,b){if(a!=null&&!H.eu(a,b))throw H.h(H.ai(a,H.cG(b)))
return a},
a_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a_(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="P")return!0
if('func' in c)return H.eo(a,b,c,d)
if('func' in a)return c.builtin$cls==="bj"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a_("type" in a?a.type:null,b,x,d)
else if(H.a_(a,b,x,d))return!0
else{if(!('$is'+"fE" in y.prototype))return!1
w=y.prototype["$as"+"fE"]
v=H.aK(w,z?a.slice(1):null)
return H.a_(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.er(H.aK(r,z),b,u,d)},
eo:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a_(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a_(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a_(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a_(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jD(m,b,l,d)},
jD:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a_(c[w],d,a[w],b))return!1}return!0},
l1:function(a,b,c){Object.defineProperty(a,H.r(b),{value:c,enumerable:false,writable:true,configurable:true})},
jB:function(a){var z,y,x,w,v,u
z=H.r($.ey.$1(a))
y=$.bP[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.r($.eq.$2(a,z))
if(z!=null){y=$.bP[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bU(x)
$.bP[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bS[z]=x
return x}if(v==="-"){u=H.bU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eC(a,x)
if(v==="*")throw H.h(P.e2(z))
if(init.leafTags[z]===true){u=H.bU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eC(a,x)},
eC:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bU:function(a){return J.cE(a,!1,null,!!a.$isaA)},
jC:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bU(z)
else return J.cE(z,c,null,null)},
jw:function(){if(!0===$.cD)return
$.cD=!0
H.jx()},
jx:function(){var z,y,x,w,v,u,t,s
$.bP=Object.create(null)
$.bS=Object.create(null)
H.js()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eD.$1(v)
if(u!=null){t=H.jC(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
js:function(){var z,y,x,w,v,u,t
z=C.a1()
z=H.aH(C.Z,H.aH(C.a3,H.aH(C.J,H.aH(C.J,H.aH(C.a2,H.aH(C.a_,H.aH(C.a0(C.K),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ey=new H.jt(v)
$.eq=new H.ju(u)
$.eD=new H.jv(t)},
aH:function(a,b){return a(b)||b},
hH:{"^":"c;a,b,c,d,e,f,r,0x",G:{
hI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bm(z)
y=z[0]
x=z[1]
return new H.hH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hC:{"^":"t:9;a",
$0:function(){return C.b.aI(1000*this.a.now())}},
i5:{"^":"c;a,b,c,d,e,f",
ar:function(a){var z,y,x
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
G:{
ah:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hl:{"^":"K;a,b",
u:function(a){var z=this.b
if(z==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+z+"' on null"},
G:{
dt:function(a,b){return new H.hl(a,b==null?null:b.method)}}},
fT:{"^":"K;a,b,c",
u:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
G:{
cc:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fT(a,y,z?null:b.receiver)}}},
i8:{"^":"K;a",
u:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jG:{"^":"t:2;a",
$1:function(a){if(!!J.C(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ek:{"^":"c;a,0b",
u:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$ishV:1},
t:{"^":"c;",
u:function(a){return"Closure '"+H.b7(this).trim()+"'"},
gdw:function(){return this},
$isbj:1,
gdw:function(){return this}},
dH:{"^":"t;"},
hW:{"^":"dH;",
u:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bV(z)+"'"}},
c1:{"^":"dH;a,b,c,d",
at:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c1))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga1:function(a){var z,y
z=this.c
if(z==null)y=H.b6(this.a)
else y=typeof z!=="object"?J.aN(z):H.b6(z)
return(y^H.b6(this.b))>>>0},
u:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b7(z)+"'")},
G:{
c2:function(a){return a.a},
cR:function(a){return a.c},
bw:function(a){var z,y,x,w,v
z=new H.c1("self","target","receiver","name")
y=J.bm(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i6:{"^":"K;a",
u:function(a){return this.a},
G:{
ai:function(a,b){return new H.i6("TypeError: "+H.e(P.bD(a))+": type '"+H.ep(a)+"' is not a subtype of type '"+b+"'")}}},
f0:{"^":"K;a",
u:function(a){return this.a},
G:{
f1:function(a,b){return new H.f0("CastError: "+H.e(P.bD(a))+": type '"+H.ep(a)+"' is not a subtype of type '"+b+"'")}}},
hL:{"^":"K;a",
u:function(a){return"RuntimeError: "+H.e(this.a)},
G:{
hM:function(a){return new H.hL(a)}}},
fS:{"^":"ce;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){return this.a},
gaK:function(){return new H.fV(this,[H.m(this,0)])},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bP(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bP(w,b)
x=y==null?null:y.b
return x}else return this.fZ(b)},
fZ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cQ(z,J.aN(a)&0x3ffffff)
x=this.dk(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.p(b,H.m(this,0))
H.p(c,H.m(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bQ()
this.b=z}this.cI(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bQ()
this.c=y}this.cI(y,b,c)}else{x=this.d
if(x==null){x=this.bQ()
this.d=x}w=J.aN(b)&0x3ffffff
v=this.cQ(x,w)
if(v==null)this.bV(x,w,[this.bK(b,c)])
else{u=this.dk(v,b)
if(u>=0)v[u].b=c
else v.push(this.bK(b,c))}}},
bA:function(a,b){var z,y
H.u(b,{func:1,ret:-1,args:[H.m(this,0),H.m(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.ad(this))
z=z.c}},
cI:function(a,b,c){var z
H.p(b,H.m(this,0))
H.p(c,H.m(this,1))
z=this.bP(a,b)
if(z==null)this.bV(a,b,this.bK(b,c))
else z.b=c},
ey:function(){this.r=this.r+1&67108863},
bK:function(a,b){var z,y
z=new H.fU(H.p(a,H.m(this,0)),H.p(b,H.m(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ey()
return z},
dk:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aa(a[y].a,b))return y
return-1},
u:function(a){return P.dn(this)},
bP:function(a,b){return a[b]},
cQ:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
eM:function(a,b){delete a[b]},
bQ:function(){var z=Object.create(null)
this.bV(z,"<non-identifier-key>",z)
this.eM(z,"<non-identifier-key>")
return z}},
fU:{"^":"c;a,b,0c,0d"},
fV:{"^":"c5;a,$ti",
gD:function(a){return this.a.a},
ga5:function(a){var z,y
z=this.a
y=new H.fW(z,z.r,this.$ti)
y.c=z.e
return y}},
fW:{"^":"c;a,b,0c,0d,$ti",
scJ:function(a){this.d=H.p(a,H.m(this,0))},
gY:function(){return this.d},
W:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.ad(z))
else{z=this.c
if(z==null){this.scJ(null)
return!1}else{this.scJ(z.a)
this.c=this.c.c
return!0}}},
$isay:1},
jt:{"^":"t:2;a",
$1:function(a){return this.a(a)}},
ju:{"^":"t:10;a",
$2:function(a,b){return this.a(a,b)}},
jv:{"^":"t:11;a",
$1:function(a){return this.a(H.r(a))}}}],["","",,H,{"^":"",
ji:function(a){return J.de(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bN:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bd(b,a))},
hg:{"^":"D;","%":";ArrayBufferView;cg|eg|eh|dq|ei|ej|dr"},
cg:{"^":"hg;",
gD:function(a){return a.length},
$isaA:1,
$asaA:I.cB},
dq:{"^":"eh;",
i:function(a,b){H.bN(b,a,a.length)
return a[b]},
m:function(a,b,c){H.be(c)
H.bN(b,a,a.length)
a[b]=c},
$asbE:function(){return[P.aI]},
$asN:function(){return[P.aI]},
$isx:1,
$asx:function(){return[P.aI]},
$isd:1,
$asd:function(){return[P.aI]}},
dr:{"^":"ej;",
m:function(a,b,c){H.k(c)
H.bN(b,a,a.length)
a[b]=c},
$asbE:function(){return[P.v]},
$asN:function(){return[P.v]},
$isx:1,
$asx:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]}},
hf:{"^":"dq;",$isdb:1,"%":"Float64Array"},
ko:{"^":"dr;",
i:function(a,b){H.bN(b,a,a.length)
return a[b]},
$iskh:1,
"%":"Int8Array"},
eg:{"^":"cg+N;"},
eh:{"^":"eg+bE;"},
ei:{"^":"cg+N;"},
ej:{"^":"ei+bE;"}}],["","",,P,{"^":"",
ip:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bc(new P.ir(z),1)).observe(y,{childList:true})
return new P.iq(z,y,x)}else if(self.setImmediate!=null)return P.jc()
return P.jd()},
kU:[function(a){self.scheduleImmediate(H.bc(new P.is(H.u(a,{func:1,ret:-1})),0))},"$1","jb",4,0,1],
kV:[function(a){self.setImmediate(H.bc(new P.it(H.u(a,{func:1,ret:-1})),0))},"$1","jc",4,0,1],
kW:[function(a){H.u(a,{func:1,ret:-1})
P.iT(0,a)},"$1","jd",4,0,1],
dQ:function(a,b){var z
H.u(b,{func:1,ret:-1,args:[P.ar]})
z=C.c.b3(a.a,1000)
return P.iU(z<0?0:z,b)},
j5:function(){var z,y
for(;z=$.ba,z!=null;){$.b9=null
y=z.b
$.ba=y
if(y==null)$.bO=null
z.a.$0()}},
l_:[function(){$.cw=!0
try{P.j5()}finally{$.b9=null
$.cw=!1
if($.ba!=null)$.$get$cq().$1(P.es())}},"$0","es",0,0,3],
j9:function(a){var z,y,x,w
H.u(a,{func:1,ret:-1})
z=$.ba
if(z==null){y=new P.e8(a)
$.bO=y
$.ba=y
if(!$.cw)$.$get$cq().$1(P.es())
$.b9=$.bO
return}x=new P.e8(a)
w=$.b9
if(w==null){x.b=z
$.b9=x
$.ba=x}else{x.b=w.b
w.b=x
$.b9=x
if(x.b==null)$.bO=x}},
dP:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.ar]}
H.u(b,z)
y=$.aG
if(y===C.t){y.toString
return P.dQ(a,b)}x=y.d1(b,P.ar)
$.aG.toString
return P.dQ(a,H.u(x,z))},
j6:function(a,b,c,d,e){var z={}
z.a=d
P.j9(new P.j7(z,e))},
j8:function(a,b,c,d,e,f,g){var z,y
H.u(d,{func:1,ret:f,args:[g]})
H.p(e,g)
y=$.aG
if(y===c)return d.$1(e)
$.aG=c
z=y
try{y=d.$1(e)
return y}finally{$.aG=z}},
ir:{"^":"t:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iq:{"^":"t:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.u(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
is:{"^":"t:0;a",
$0:function(){this.a.$0()}},
it:{"^":"t:0;a",
$0:function(){this.a.$0()}},
em:{"^":"c;a,0b,c",
ew:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bc(new P.iW(this,b),0),a)
else throw H.h(P.a7("`setTimeout()` not found."))},
ex:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bc(new P.iV(this,a,Date.now(),b),0),a)
else throw H.h(P.a7("Periodic timer."))},
$isar:1,
G:{
iT:function(a,b){var z=new P.em(!0,0)
z.ew(a,b)
return z},
iU:function(a,b){var z=new P.em(!1,0)
z.ex(a,b)
return z}}},
iW:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iV:{"^":"t:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.av(w,x)}z.c=y
this.d.$1(z)}},
e8:{"^":"c;a,0b"},
ar:{"^":"c;"},
iY:{"^":"c;",$iskT:1},
j7:{"^":"t:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.du()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.u(0)
throw x}},
iJ:{"^":"iY;",
gaV:function(a){return},
hh:function(a,b,c){var z,y,x
H.u(a,{func:1,ret:-1,args:[c]})
H.p(b,c)
try{if(C.t===$.aG){a.$1(b)
return}P.j8(null,null,this,a,b,-1,c)}catch(x){z=H.aM(x)
y=H.jn(x)
P.j6(null,null,this,z,H.l(y,"$ishV"))}},
d1:function(a,b){return new P.iK(this,H.u(a,{func:1,ret:-1,args:[b]}),b)}},
iK:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hh(this.b,H.p(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
bk:function(a,b,c,d,e){return new P.iz(0,[d,e])},
fX:function(a,b){return new H.fS(0,0,[a,b])},
bF:function(a,b,c,d){return new P.iD(0,0,[d])},
fK:function(a,b,c){var z,y
if(P.cx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bb()
C.a.q(y,a)
try{P.j3(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.dG(b,H.jA(z,"$isx"),", ")+c
return y.charCodeAt(0)==0?y:y},
c8:function(a,b,c){var z,y,x
if(P.cx(a))return b+"..."+c
z=new P.cl(b)
y=$.$get$bb()
C.a.q(y,a)
try{x=z
x.a=P.dG(x.gb1(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.gb1()+c
y=z.gb1()
return y.charCodeAt(0)==0?y:y},
cx:function(a){var z,y
for(z=0;y=$.$get$bb(),z<y.length;++z)if(a===y[z])return!0
return!1},
j3:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga5(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.W())return
w=H.e(z.gY())
C.a.q(b,w)
y+=w.length+2;++x}if(!z.W()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gY();++x
if(!z.W()){if(x<=4){C.a.q(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gY();++x
for(;z.W();t=s,s=r){r=z.gY();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}C.a.q(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.q(b,q)
C.a.q(b,u)
C.a.q(b,v)},
dj:function(a,b){var z,y,x
z=P.bF(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.cH)(a),++x)z.q(0,H.p(a[x],b))
return z},
dn:function(a){var z,y,x
z={}
if(P.cx(a))return"{...}"
y=new P.cl("")
try{C.a.q($.$get$bb(),a)
x=y
x.a=x.gb1()+"{"
z.a=!0
a.bA(0,new P.h1(z,y))
z=y
z.a=z.gb1()+"}"}finally{z=$.$get$bb()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gb1()
return z.charCodeAt(0)==0?z:z},
iz:{"^":"ce;a,0b,0c,0d,0e,$ti",
gD:function(a){return this.a},
gaK:function(){return new P.iA(this,[H.m(this,0)])},
c1:function(a){var z
if((a&0x3ffffff)===a){z=this.c
return z==null?!1:z[a]!=null}else return this.eJ(a)},
eJ:function(a){var z=this.d
if(z==null)return!1
return this.b2(this.bu(z,a),a)>=0},
i:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
y=z==null?null:P.ec(z,b)
return y}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
y=x==null?null:P.ec(x,b)
return y}else return this.eS(b)},
eS:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bu(z,a)
x=this.b2(y,a)
return x<0?null:y[x+1]},
m:function(a,b,c){var z
H.p(b,H.m(this,0))
H.p(c,H.m(this,1))
if((b&0x3ffffff)===b){z=this.c
if(z==null){z=P.ed()
this.c=z}this.eA(z,b,c)}else this.f8(b,c)},
f8:function(a,b){var z,y,x,w
H.p(a,H.m(this,0))
H.p(b,H.m(this,1))
z=this.d
if(z==null){z=P.ed()
this.d=z}y=this.bc(a)
x=z[y]
if(x==null){P.cr(z,y,[a,b]);++this.a
this.e=null}else{w=this.b2(x,a)
if(w>=0)x[w+1]=b
else{x.push(a,b);++this.a
this.e=null}}},
bA:function(a,b){var z,y,x,w,v
z=H.m(this,0)
H.u(b,{func:1,ret:-1,args:[z,H.m(this,1)]})
y=this.cN()
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(H.p(v,z),this.i(0,v))
if(y!==this.e)throw H.h(P.ad(this))}},
cN:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.e
if(z!=null)return z
y=new Array(this.a)
y.fixed$length=Array
x=this.b
if(x!=null){w=Object.getOwnPropertyNames(x)
v=w.length
for(u=0,t=0;t<v;++t){y[u]=w[t];++u}}else u=0
s=this.c
if(s!=null){w=Object.getOwnPropertyNames(s)
v=w.length
for(t=0;t<v;++t){y[u]=+w[t];++u}}r=this.d
if(r!=null){w=Object.getOwnPropertyNames(r)
v=w.length
for(t=0;t<v;++t){q=r[w[t]]
p=q.length
for(o=0;o<p;o+=2){y[u]=q[o];++u}}}this.e=y
return y},
eA:function(a,b,c){H.p(b,H.m(this,0))
H.p(c,H.m(this,1))
if(a[b]==null){++this.a
this.e=null}P.cr(a,b,c)},
bc:function(a){return J.aN(a)&0x3ffffff},
bu:function(a,b){return a[this.bc(b)]},
b2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;y+=2)if(J.aa(a[y],b))return y
return-1},
$iskb:1,
G:{
ec:function(a,b){var z=a[b]
return z===a?null:z},
cr:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ed:function(){var z=Object.create(null)
P.cr(z,"<non-identifier-key>",z)
delete z["<non-identifier-key>"]
return z}}},
iA:{"^":"c5;a,$ti",
gD:function(a){return this.a.a},
ga5:function(a){var z=this.a
return new P.iB(z,z.cN(),0,this.$ti)}},
iB:{"^":"c;a,b,c,0d,$ti",
sbb:function(a){this.d=H.p(a,H.m(this,0))},
gY:function(){return this.d},
W:function(){var z,y,x
z=this.b
y=this.c
x=this.a
if(z!==x.e)throw H.h(P.ad(x))
else if(y>=z.length){this.sbb(null)
return!1}else{this.sbb(z[y])
this.c=y+1
return!0}},
$isay:1},
iD:{"^":"iC;a,0b,0c,0d,0e,0f,r,$ti",
ga5:function(a){var z=new P.iE(this,this.r,this.$ti)
z.c=this.e
return z},
gD:function(a){return this.a},
a8:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.l(z[b],"$isct")!=null}else{y=this.eI(b)
return y}},
eI:function(a){var z=this.d
if(z==null)return!1
return this.b2(this.bu(z,a),a)>=0},
q:function(a,b){var z,y
H.p(b,H.m(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cu()
this.b=z}return this.cK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cu()
this.c=y}return this.cK(y,b)}else return this.ez(b)},
ez:function(a){var z,y,x
H.p(a,H.m(this,0))
z=this.d
if(z==null){z=P.cu()
this.d=z}y=this.bc(a)
x=z[y]
if(x==null)z[y]=[this.bR(a)]
else{if(this.b2(x,a)>=0)return!1
x.push(this.bR(a))}return!0},
cK:function(a,b){H.p(b,H.m(this,0))
if(H.l(a[b],"$isct")!=null)return!1
a[b]=this.bR(b)
return!0},
eY:function(){this.r=this.r+1&67108863},
bR:function(a){var z,y
z=new P.ct(H.p(a,H.m(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.eY()
return z},
bc:function(a){return J.aN(a)&0x3ffffff},
bu:function(a,b){return a[this.bc(b)]},
b2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aa(a[y].a,b))return y
return-1},
G:{
cu:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ct:{"^":"c;a,0b,0c"},
iE:{"^":"c;a,b,0c,0d,$ti",
sbb:function(a){this.d=H.p(a,H.m(this,0))},
gY:function(){return this.d},
W:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.ad(z))
else{z=this.c
if(z==null){this.sbb(null)
return!1}else{this.sbb(H.p(z.a,H.m(this,0)))
this.c=this.c.b
return!0}}},
$isay:1},
iC:{"^":"hO;"},
fY:{"^":"iF;",$isx:1,$isd:1},
N:{"^":"c;$ti",
ga5:function(a){return new H.dk(a,this.gD(a),0,[H.bf(this,a,"N",0)])},
aw:function(a,b){return this.i(a,b)},
fV:function(a,b,c,d){var z,y,x
H.p(b,d)
H.u(c,{func:1,ret:d,args:[d,H.bf(this,a,"N",0)]})
z=this.gD(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gD(a))throw H.h(P.ad(a))}return y},
cC:function(a,b){return H.cm(a,b,null,H.bf(this,a,"N",0))},
B:function(a,b){var z,y
z=[H.bf(this,a,"N",0)]
H.i(b,"$isd",z,"$asd")
y=H.f([],z)
C.a.sD(y,C.c.B(this.gD(a),b.gD(b)))
C.a.b9(y,0,this.gD(a),a)
C.a.b9(y,this.gD(a),y.length,b)
return y},
u:function(a){return P.c8(a,"[","]")}},
ce:{"^":"bG;"},
h1:{"^":"t:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
bG:{"^":"c;$ti",
bA:function(a,b){var z,y
H.u(b,{func:1,ret:-1,args:[H.au(this,"bG",0),H.au(this,"bG",1)]})
for(z=J.bu(this.gaK());z.W();){y=z.gY()
b.$2(y,this.i(0,y))}},
gD:function(a){return J.aj(this.gaK())},
u:function(a){return P.dn(this)},
$isdm:1},
hP:{"^":"c;$ti",
aE:function(a,b){var z
for(z=J.bu(H.i(b,"$isx",this.$ti,"$asx"));z.W();)this.q(0,z.gY())},
u:function(a){return P.c8(this,"{","}")},
$isx:1,
$iskJ:1},
hO:{"^":"hP;"},
iF:{"^":"c+N;"}}],["","",,P,{"^":"",
fB:function(a){if(a instanceof H.t)return a.u(0)
return"Instance of '"+H.b7(a)+"'"},
aB:function(a,b,c,d){var z,y
H.p(b,d)
z=J.fO(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.i(z,"$isd",[d],"$asd")},
fZ:function(a,b,c){var z,y
z=H.f([],[c])
for(y=a.ga5(a);y.W();)C.a.q(z,H.p(y.gY(),c))
return z},
bD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aO(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fB(a)},
V:{"^":"c;"},
"+bool":0,
aI:{"^":"a0;"},
"+double":0,
ao:{"^":"c;a",
B:function(a,b){return new P.ao(C.c.B(this.a,b.ghC()))},
L:function(a,b){return C.c.L(this.a,H.l(b,"$isao").a)},
aM:function(a,b){return C.c.aM(this.a,H.l(b,"$isao").a)},
at:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a},
ga1:function(a){return this.a&0x1FFFFFFF},
b5:function(a,b){return C.c.b5(this.a,H.l(b,"$isao").a)},
u:function(a){var z,y,x,w,v
z=new P.fu()
y=this.a
if(y<0)return"-"+new P.ao(0-y).u(0)
x=z.$1(C.c.b3(y,6e7)%60)
w=z.$1(C.c.b3(y,1e6)%60)
v=new P.ft().$1(y%1e6)
return""+C.c.b3(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isH:1,
$asH:function(){return[P.ao]},
G:{
d3:function(a,b,c,d,e,f){return new P.ao(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ft:{"^":"t:4;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fu:{"^":"t:4;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"c;"},
du:{"^":"K;",
u:function(a){return"Throw of null."}},
aw:{"^":"K;a,b,c,d",
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
u:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gbO()+y+x
if(!this.a)return w
v=this.gbN()
u=P.bD(this.b)
return w+v+": "+H.e(u)},
G:{
eX:function(a,b,c){return new P.aw(!0,a,b,c)}}},
dx:{"^":"aw;e,f,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
G:{
ci:function(a,b,c){return new P.dx(null,null,!0,a,b,"Value not in range")},
aq:function(a,b,c,d,e){return new P.dx(b,c,!0,a,d,"Invalid value")},
dy:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.aq(a,0,c,"start",f))
if(a>b||b>c)throw H.h(P.aq(b,a,c,"end",f))
return b}}},
fJ:{"^":"aw;e,D:f>,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){if(J.cI(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
G:{
bl:function(a,b,c,d,e){var z=H.k(e!=null?e:J.aj(b))
return new P.fJ(b,z,!0,a,c,"Index out of range")}}},
i9:{"^":"K;a",
u:function(a){return"Unsupported operation: "+this.a},
G:{
a7:function(a){return new P.i9(a)}}},
i7:{"^":"K;a",
u:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
G:{
e2:function(a){return new P.i7(a)}}},
bJ:{"^":"K;a",
u:function(a){return"Bad state: "+this.a},
G:{
dF:function(a){return new P.bJ(a)}}},
f7:{"^":"K;a",
u:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bD(z))+"."},
G:{
ad:function(a){return new P.f7(a)}}},
dE:{"^":"c;",
u:function(a){return"Stack Overflow"},
$isK:1},
fe:{"^":"K;a",
u:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iy:{"^":"c;a",
u:function(a){return"Exception: "+this.a}},
bj:{"^":"c;"},
v:{"^":"a0;"},
"+int":0,
x:{"^":"c;$ti",
cl:["ed",function(a,b){var z=H.au(this,"x",0)
return new H.e6(this,H.u(b,{func:1,ret:P.V,args:[z]}),[z])}],
gD:function(a){var z,y
z=this.ga5(this)
for(y=0;z.W();)++y
return y},
gaZ:function(a){var z,y
z=this.ga5(this)
if(!z.W())throw H.h(H.fL())
y=z.gY()
if(z.W())throw H.h(H.fN())
return y},
aw:function(a,b){var z,y,x
if(b<0)H.aL(P.aq(b,0,null,"index",null))
for(z=this.ga5(this),y=0;z.W();){x=z.gY()
if(b===y)return x;++y}throw H.h(P.bl(b,this,"index",null,y))},
u:function(a){return P.fK(this,"(",")")}},
ay:{"^":"c;$ti"},
d:{"^":"c;$ti",$isx:1},
"+List":0,
P:{"^":"c;",
ga1:function(a){return P.c.prototype.ga1.call(this,this)},
u:function(a){return"null"}},
"+Null":0,
a0:{"^":"c;",$isH:1,
$asH:function(){return[P.a0]}},
"+num":0,
c:{"^":";",
at:function(a,b){return this===b},
ga1:function(a){return H.b6(this)},
u:function(a){return"Instance of '"+H.b7(this)+"'"},
toString:function(){return this.u(this)}},
bK:{"^":"c;a,b",
bq:function(a){var z,y,x
if(this.b!=null){z=this.a
y=H.k($.bo.$0())
x=this.b
if(typeof y!=="number")return y.H()
if(typeof x!=="number")return H.J(x)
if(typeof z!=="number")return z.B()
this.a=z+(y-x)
this.b=null}},
aL:function(a){var z=this.b
this.a=z==null?H.k($.bo.$0()):z},
gaG:function(){var z,y
z=this.b
if(z==null)z=H.k($.bo.$0())
y=this.a
if(typeof z!=="number")return z.H()
if(typeof y!=="number")return H.J(y)
return z-y}},
n:{"^":"c;",$isH:1,
$asH:function(){return[P.n]},
$ishx:1},
"+String":0,
cl:{"^":"c;b1:a<",
gD:function(a){return this.a.length},
u:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
G:{
dG:function(a,b,c){var z=J.bu(b)
if(!z.W())return a
if(c.length===0){do a+=H.e(z.gY())
while(z.W())}else{a+=H.e(z.gY())
for(;z.W();)a=a+c+H.e(z.gY())}return a}}}}],["","",,W,{"^":"",
fz:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).ao(z,a,b,c)
y.toString
z=W.q
z=new H.e6(new W.a9(y),H.u(new W.fA(),{func:1,ret:P.V,args:[z]}),[z])
return H.l(z.gaZ(z),"$isa3")},
aZ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eP(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aM(x)}return z},
ix:function(a,b){return document.createElement(a)},
j0:function(a){if(a==null)return
return W.ea(a)},
ja:function(a,b){var z
H.u(a,{func:1,ret:-1,args:[b]})
z=$.aG
if(z===C.t)return a
return z.d1(a,b)},
G:{"^":"a3;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
eT:{"^":"G;",
u:function(a){return String(a)},
$iseT:1,
"%":"HTMLAnchorElement"},
jI:{"^":"G;",
u:function(a){return String(a)},
"%":"HTMLAreaElement"},
cP:{"^":"G;",$iscP:1,"%":"HTMLBaseElement"},
bv:{"^":"G;",$isbv:1,"%":"HTMLBodyElement"},
cS:{"^":"G;0height",
saJ:function(a,b){a.height=H.k(b)},
$iscS:1,
"%":"HTMLCanvasElement"},
cT:{"^":"D;",
fj:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
hA:function(a,b,c,d,e){return a.strokeText(b,c,d,e)},
ea:function(a,b,c,d){return a.strokeText(b,c,d)},
cd:function(a,b,c){return a.lineTo(H.bg(b),H.bg(c))},
dm:function(a,b,c){return a.moveTo(H.bg(b),H.bg(c))},
$iscT:1,
"%":"CanvasRenderingContext2D"},
jL:{"^":"q;0D:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fr:{"^":"q;",
ff:function(a,b){return a.adoptNode(b)},
cf:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
jO:{"^":"D;",
u:function(a){return String(a)},
"%":"DOMException"},
fs:{"^":"D;",
fA:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
a3:{"^":"q;0hj:tagName=",
gfh:function(a){return new W.iw(a)},
u:function(a){return a.localName},
ao:["bJ",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.f([],[W.af])
y=new W.ds(z)
C.a.q(z,W.ee(null))
C.a.q(z,W.el())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.en(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.al==null){z=document
y=z.implementation
y=(y&&C.W).fA(y,"")
$.al=y
$.c6=y.createRange()
y=$.al
y.toString
y=y.createElement("base")
H.l(y,"$iscP")
y.href=z.baseURI
z=$.al.head;(z&&C.X).aF(z,y)}z=$.al
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.l(y,"$isbv")}z=$.al
if(!!this.$isbv)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.al.body;(z&&C.r).aF(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.a8(C.af,a.tagName)){z=$.c6;(z&&C.Q).dJ(z,x)
z=$.c6
w=(z&&C.Q).fv(z,b)}else{x.innerHTML=b
w=$.al.createDocumentFragment()
for(z=J.F(w);y=x.firstChild,y!=null;)z.aF(w,y)}z=$.al.body
if(x==null?z!=null:x!==z)J.cL(x)
c.cv(w)
C.v.ff(document,w)
return w},function(a,b,c){return this.ao(a,b,c,null)},"fz",null,null,"ghH",5,5,null],
sdj:function(a,b){this.bG(a,b)},
bH:function(a,b,c,d){a.textContent=null
this.aF(a,this.ao(a,b,c,d))},
bG:function(a,b){return this.bH(a,b,null,null)},
b7:function(a,b){return a.getAttribute(b)},
f1:function(a,b){return a.removeAttribute(b)},
dL:function(a,b,c){return a.setAttribute(b,c)},
$isa3:1,
"%":";Element"},
fA:{"^":"t:15;",
$1:function(a){return!!J.C(H.l(a,"$isq")).$isa3}},
jP:{"^":"G;0height",
saJ:function(a,b){a.height=H.r(b)},
"%":"HTMLEmbedElement"},
d7:{"^":"D;","%":";EventTarget"},
k9:{"^":"G;0D:length=","%":"HTMLFormElement"},
fH:{"^":"G;","%":"HTMLHeadElement"},
fI:{"^":"fr;","%":"HTMLDocument"},
kc:{"^":"G;0height",
saJ:function(a,b){a.height=H.r(b)},
"%":"HTMLIFrameElement"},
ke:{"^":"G;0height",
saJ:function(a,b){a.height=H.k(b)},
"%":"HTMLImageElement"},
kg:{"^":"G;0height",
saJ:function(a,b){a.height=H.k(b)},
"%":"HTMLInputElement"},
h_:{"^":"D;",
u:function(a){return String(a)},
$ish_:1,
"%":"Location"},
h5:{"^":"G;","%":"HTMLAudioElement;HTMLMediaElement"},
a9:{"^":"fY;a",
gaZ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.h(P.dF("No elements"))
if(y>1)throw H.h(P.dF("More than one element"))
return z.firstChild},
aE:function(a,b){var z,y,x,w,v
H.i(b,"$isx",[W.q],"$asx")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.F(y),v=0;v<x;++v)w.aF(y,z.firstChild)
return},
m:function(a,b,c){var z,y
H.l(c,"$isq")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.a(y,b)
J.eJ(z,c,y[b])},
ga5:function(a){var z=this.a.childNodes
return new W.d8(z,z.length,-1,[H.bf(C.ah,z,"b0",0)])},
gD:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.a(z,b)
return z[b]},
$asN:function(){return[W.q]},
$asx:function(){return[W.q]},
$asd:function(){return[W.q]}},
q:{"^":"d7;0aV:parentElement=,0ha:previousSibling=",
hf:function(a){var z=a.parentNode
if(z!=null)J.bt(z,a)},
u:function(a){var z=a.nodeValue
return z==null?this.ec(a):z},
aF:function(a,b){return a.appendChild(b)},
f2:function(a,b){return a.removeChild(b)},
f4:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hi:{"^":"iH;",
gD:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bl(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.l(c,"$isq")
throw H.h(P.a7("Cannot assign element of immutable List."))},
aw:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isaA:1,
$asaA:function(){return[W.q]},
$asN:function(){return[W.q]},
$isx:1,
$asx:function(){return[W.q]},
$isd:1,
$asd:function(){return[W.q]},
$asb0:function(){return[W.q]},
"%":"NodeList|RadioNodeList"},
kq:{"^":"G;0height",
saJ:function(a,b){a.height=H.r(b)},
"%":"HTMLObjectElement"},
hG:{"^":"D;",
fv:function(a,b){return a.createContextualFragment(b)},
dJ:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
kI:{"^":"G;0D:length=","%":"HTMLSelectElement"},
i_:{"^":"G;",
ao:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
z=W.fz("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).aE(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
kL:{"^":"G;",
ao:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.T.ao(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gaZ(z)
x.toString
z=new W.a9(x)
w=z.gaZ(z)
y.toString
w.toString
new W.a9(y).aE(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
kM:{"^":"G;",
ao:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.T.ao(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gaZ(z)
y.toString
x.toString
new W.a9(y).aE(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
dI:{"^":"G;",
bH:function(a,b,c,d){var z
a.textContent=null
z=this.ao(a,b,c,d)
J.eK(a.content,z)},
bG:function(a,b){return this.bH(a,b,null,null)},
$isdI:1,
"%":"HTMLTemplateElement"},
kQ:{"^":"h5;0height",
saJ:function(a,b){a.height=H.k(b)},
"%":"HTMLVideoElement"},
ih:{"^":"d7;",
dt:function(a,b){H.u(b,{func:1,ret:-1,args:[P.a0]})
this.eQ(a)
return this.f5(a,W.ja(b,P.a0))},
f5:function(a,b){return a.requestAnimationFrame(H.bc(H.u(b,{func:1,ret:-1,args:[P.a0]}),1))},
eQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
gaV:function(a){return W.j0(a.parent)},
$ise7:1,
"%":"DOMWindow|Window"},
e9:{"^":"q;",$ise9:1,"%":"Attr"},
kZ:{"^":"j_;",
gD:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bl(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.l(c,"$isq")
throw H.h(P.a7("Cannot assign element of immutable List."))},
aw:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isaA:1,
$asaA:function(){return[W.q]},
$asN:function(){return[W.q]},
$isx:1,
$asx:function(){return[W.q]},
$isd:1,
$asd:function(){return[W.q]},
$asb0:function(){return[W.q]},
"%":"MozNamedAttrMap|NamedNodeMap"},
iu:{"^":"ce;eO:a<",
bA:function(a,b){var z,y,x,w,v,u
H.u(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=this.gaK(),y=z.length,x=this.a,w=J.F(x),v=0;v<z.length;z.length===y||(0,H.cH)(z),++v){u=z[v]
b.$2(u,w.b7(x,u))}},
gaK:function(){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=H.l(z[w],"$ise9")
if(v.namespaceURI==null)C.a.q(y,v.name)}return y},
$asbG:function(){return[P.n,P.n]},
$asdm:function(){return[P.n,P.n]}},
iw:{"^":"iu;a",
i:function(a,b){return J.bW(this.a,H.r(b))},
m:function(a,b,c){J.eQ(this.a,b,c)},
gD:function(a){return this.gaK().length}},
br:{"^":"c;a",
eu:function(a){var z,y
z=$.$get$cs()
if(z.a===0){for(y=0;y<262;++y)z.m(0,C.ae[y],W.jq())
for(y=0;y<12;++y)z.m(0,C.B[y],W.jr())}},
b4:function(a){return $.$get$ef().a8(0,W.aZ(a))},
aS:function(a,b,c){var z,y,x
z=W.aZ(a)
y=$.$get$cs()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.je(x.$4(a,b,c,this))},
$isaf:1,
G:{
ee:function(a){var z,y
z=document.createElement("a")
y=new W.iL(z,window.location)
y=new W.br(y)
y.eu(a)
return y},
kX:[function(a,b,c,d){H.l(a,"$isa3")
H.r(b)
H.r(c)
H.l(d,"$isbr")
return!0},"$4","jq",16,0,8],
kY:[function(a,b,c,d){var z,y,x,w,v
H.l(a,"$isa3")
H.r(b)
H.r(c)
z=H.l(d,"$isbr").a
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
return z},"$4","jr",16,0,8]}},
b0:{"^":"c;$ti",
ga5:function(a){return new W.d8(a,this.gD(a),-1,[H.bf(this,a,"b0",0)])}},
ds:{"^":"c;a",
b4:function(a){return C.a.d0(this.a,new W.hk(a))},
aS:function(a,b,c){return C.a.d0(this.a,new W.hj(a,b,c))},
$isaf:1},
hk:{"^":"t:5;a",
$1:function(a){return H.l(a,"$isaf").b4(this.a)}},
hj:{"^":"t:5;a,b,c",
$1:function(a){return H.l(a,"$isaf").aS(this.a,this.b,this.c)}},
iM:{"^":"c;",
ev:function(a,b,c,d){var z,y,x
this.a.aE(0,c)
z=b.cl(0,new W.iN())
y=b.cl(0,new W.iO())
this.b.aE(0,z)
x=this.c
x.aE(0,C.ag)
x.aE(0,y)},
b4:function(a){return this.a.a8(0,W.aZ(a))},
aS:["ef",function(a,b,c){var z,y
z=W.aZ(a)
y=this.c
if(y.a8(0,H.e(z)+"::"+b))return this.d.fg(c)
else if(y.a8(0,"*::"+b))return this.d.fg(c)
else{y=this.b
if(y.a8(0,H.e(z)+"::"+b))return!0
else if(y.a8(0,"*::"+b))return!0
else if(y.a8(0,H.e(z)+"::*"))return!0
else if(y.a8(0,"*::*"))return!0}return!1}],
$isaf:1},
iN:{"^":"t:6;",
$1:function(a){return!C.a.a8(C.B,H.r(a))}},
iO:{"^":"t:6;",
$1:function(a){return C.a.a8(C.B,H.r(a))}},
iR:{"^":"iM;e,a,b,c,d",
aS:function(a,b,c){if(this.ef(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bW(a,"template")==="")return this.e.a8(0,b)
return!1},
G:{
el:function(){var z,y,x,w,v
z=P.n
y=P.dj(C.A,z)
x=H.m(C.A,0)
w=H.u(new W.iS(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.iR(y,P.bF(null,null,null,z),P.bF(null,null,null,z),P.bF(null,null,null,z),null)
y.ev(null,new H.h2(C.A,w,[x,z]),v,null)
return y}}},
iS:{"^":"t:16;",
$1:function(a){return"TEMPLATE::"+H.e(H.r(a))}},
iQ:{"^":"c;",
b4:function(a){var z=J.C(a)
if(!!z.$isdA)return!1
z=!!z.$isB
if(z&&W.aZ(a)==="foreignObject")return!1
if(z)return!0
return!1},
aS:function(a,b,c){if(b==="is"||C.w.e6(b,"on"))return!1
return this.b4(a)},
$isaf:1},
d8:{"^":"c;a,b,c,0d,$ti",
scS:function(a){this.d=H.p(a,H.m(this,0))},
W:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scS(J.eH(this.a,z))
this.c=z
return!0}this.scS(null)
this.c=y
return!1},
gY:function(){return this.d},
$isay:1},
iv:{"^":"c;a",
gaV:function(a){return W.ea(this.a.parent)},
$ise7:1,
G:{
ea:function(a){if(a===window)return H.l(a,"$ise7")
else return new W.iv(a)}}},
af:{"^":"c;"},
iL:{"^":"c;a,b",$iskO:1},
en:{"^":"c;a",
cv:function(a){new W.iX(this).$2(a,null)},
be:function(a,b){if(b==null)J.cL(a)
else J.bt(b,a)},
f7:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eM(a)
x=J.bW(y.geO(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aM(t)}v="element unprintable"
try{v=J.aO(a)}catch(t){H.aM(t)}try{u=W.aZ(a)
this.f6(H.l(a,"$isa3"),b,z,v,u,H.l(y,"$isdm"),H.r(x))}catch(t){if(H.aM(t) instanceof P.aw)throw t
else{this.be(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
f6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.be(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b4(a)){this.be(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aS(a,"is",g)){this.be(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaK()
y=H.f(z.slice(0),[H.m(z,0)])
for(x=f.gaK().length-1,z=f.a,w=J.F(z);x>=0;--x){if(x>=y.length)return H.a(y,x)
v=y[x]
if(!this.a.aS(a,J.eR(v),w.b7(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.b7(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b7(z,v)
w.f1(z,v)}}if(!!J.C(a).$isdI)this.cv(a.content)},
$iskp:1},
iX:{"^":"t:17;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.f7(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.be(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eO(z)}catch(w){H.aM(w)
v=H.l(z,"$isq")
if(x){u=v.parentNode
if(u!=null)J.bt(u,v)}else J.bt(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.l(y,"$isq")}}},
iG:{"^":"D+N;"},
iH:{"^":"iG+b0;"},
iZ:{"^":"D+N;"},
j_:{"^":"iZ+b0;"}}],["","",,P,{"^":"",eU:{"^":"D;",$iseU:1,"%":"SVGAnimatedLength"},eV:{"^":"D;",$iseV:1,"%":"SVGAnimatedLengthList"},eW:{"^":"D;",$iseW:1,"%":"SVGAnimatedNumber"},jQ:{"^":"B;0j:x=,0k:y=","%":"SVGFEBlendElement"},jR:{"^":"B;0j:x=,0k:y=","%":"SVGFEColorMatrixElement"},jS:{"^":"B;0j:x=,0k:y=","%":"SVGFEComponentTransferElement"},jT:{"^":"B;0j:x=,0k:y=","%":"SVGFECompositeElement"},jU:{"^":"B;0j:x=,0k:y=","%":"SVGFEConvolveMatrixElement"},jV:{"^":"B;0j:x=,0k:y=","%":"SVGFEDiffuseLightingElement"},jW:{"^":"B;0j:x=,0k:y=","%":"SVGFEDisplacementMapElement"},jX:{"^":"B;0j:x=,0k:y=","%":"SVGFEFloodElement"},jY:{"^":"B;0j:x=,0k:y=","%":"SVGFEGaussianBlurElement"},jZ:{"^":"B;0j:x=,0k:y=","%":"SVGFEImageElement"},k_:{"^":"B;0j:x=,0k:y=","%":"SVGFEMergeElement"},k0:{"^":"B;0j:x=,0k:y=","%":"SVGFEMorphologyElement"},k1:{"^":"B;0j:x=,0k:y=","%":"SVGFEOffsetElement"},k2:{"^":"B;0j:x=,0k:y=","%":"SVGFEPointLightElement"},k3:{"^":"B;0j:x=,0k:y=","%":"SVGFESpecularLightingElement"},k4:{"^":"B;0j:x=,0k:y=","%":"SVGFESpotLightElement"},k5:{"^":"B;0j:x=,0k:y=","%":"SVGFETileElement"},k6:{"^":"B;0j:x=,0k:y=","%":"SVGFETurbulenceElement"},k7:{"^":"B;0j:x=,0k:y=","%":"SVGFilterElement"},k8:{"^":"b_;0j:x=,0k:y=","%":"SVGForeignObjectElement"},fG:{"^":"b_;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b_:{"^":"B;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kf:{"^":"b_;0j:x=,0k:y=","%":"SVGImageElement"},kl:{"^":"B;0j:x=,0k:y=","%":"SVGMaskElement"},ky:{"^":"B;0j:x=,0k:y=","%":"SVGPatternElement"},kz:{"^":"D;0D:length=","%":"SVGPointList"},kF:{"^":"fG;0j:x=,0k:y=","%":"SVGRectElement"},dA:{"^":"B;",$isdA:1,"%":"SVGScriptElement"},B:{"^":"a3;",
sdj:function(a,b){this.bG(a,b)},
ao:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.af])
C.a.q(z,W.ee(null))
C.a.q(z,W.el())
C.a.q(z,new W.iQ())
c=new W.en(new W.ds(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).fz(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.gaZ(z)
for(z=J.F(v);x=u.firstChild,x!=null;)z.aF(v,x)
return v},
$isB:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kK:{"^":"b_;0j:x=,0k:y=","%":"SVGSVGElement"},i2:{"^":"b_;","%":"SVGTextPathElement;SVGTextContentElement"},kN:{"^":"i2;0j:x=,0k:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},kP:{"^":"b_;0j:x=,0k:y=","%":"SVGUseElement"}}],["","",,P,{"^":"",db:{"^":"c;",$isx:1,
$asx:function(){return[P.aI]},
$isd:1,
$asd:function(){return[P.aI]}}}],["","",,P,{"^":""}],["","",,V,{"^":"",
fR:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
switch(a0.a){case C.O:H.w(a0,"$iskn")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new E.b(new Float64Array(2))
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(4)
w=new V.h7(z,y,0,0,0,x,0,0,0,new E.b(w),new E.b(v),0,0,new E.X(u),new E.b(new Float64Array(2)),a0.gaA(a0),!1,!1)
w.ag(a.ch,a0)
y.h(a0.gi_(a0))
G.cp(w.r.d,y,z)
w.fr=a0.gh4()
x.K()
w.cy=a0.gdf()
w.db=a0.gd8()
return w
case C.M:H.w(a0,"$isjN")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new E.b(new Float64Array(2))
u.h(a0.f)
t=new E.b(new Float64Array(2))
t.h(a0.r)
v=new V.fp(0,0,0,u,t,0,0,0,0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),new E.b(v),0,0,0,0,0,a0.a,!1,!1)
v.ag(a.ch,a0)
v.fx=a0.x
v.ch=a0.y
v.cx=a0.z
return v
case C.a9:H.w(a0,"$iskB")
z=new Float64Array(3)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(9)
t=a0.gbi()
s=new E.b(new Float64Array(2))
s.h(t)
t=a0.gbj()
r=new E.b(new Float64Array(2))
r.h(t)
t=a0.gh2()
q=new E.b(new Float64Array(2))
q.h(t)
q.Z()
t=new E.b(new Float64Array(2))
u=new V.hD(s,r,q,t,new E.a8(z),0,0,0,0,0,!1,!1,0,0,new E.b(y),new E.b(x),0,0,0,0,new E.b(w),new E.b(v),0,0,0,0,new E.ae(u),0,a0.gaA(a0),!1,!1)
u.ag(a.ch,a0)
q.T(1,t)
u.dx=a0.gdr()
u.fx=a0.ghR()
u.fy=a0.gi2()
u.go=a0.ghU()
u.id=a0.gdl()
u.k1=a0.gfL()
u.k2=a0.gda()
u.k3=C.n
return u
case C.a6:H.w(a0,"$iskG")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new Float64Array(3)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
x=new V.hJ(z,y,new E.a8(x),0,!1,0,0,!1,0,0,0,0,0,new E.b(w),new E.b(v),new E.b(u),new E.b(t),0,0,0,0,new E.ae(new Float64Array(9)),0,C.n,a0.gaA(a0),!1,!1)
x.ag(a.ch,a0)
z.h(a0.gbi())
y.h(a0.gbj())
x.fy=a0.gdr()
x.go=a0.ghQ()
x.id=a0.gi1()
x.dy=a0.gh5()
x.fr=a0.gdl()
x.fx=a0.gfL()
x.dx=a0.gda()
return x
case C.ac:H.w(a0,"$iskR")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(9)
u=a0.gbi()
t=new E.b(new Float64Array(2))
t.h(u)
u=a0.gbj()
s=new E.b(new Float64Array(2))
s.h(u)
z=new V.id(0,0,0,t,s,0,0,new E.a8(new Float64Array(3)),0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),0,0,0,0,new E.ae(v),a0.gaA(a0),!1,!1)
z.ag(a.ch,a0)
z.dy=a0.gdr()
z.ch=a0.gdf()
z.cx=a0.gd8()
return z
case C.z:H.w(a0,"$isdc")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(4)
u=new E.b(new Float64Array(2))
u.h(a0.f)
t=new E.b(new Float64Array(2))
t.h(a0.r)
z=new V.fC(u,t,new E.b(new Float64Array(2)),0,0,0,0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),0,0,0,0,new E.X(v),0,a0.a,!1,!1)
z.ag(a.ch,a0)
z.dx=a0.x
z.dy=a0.y
return z
case C.ab:H.w(a0,"$iskS")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new E.b(new Float64Array(2))
w=new E.b(new Float64Array(2))
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
v=new V.ie(0,0,z,y,x,w,0,0,0,0,0,!1,0,0,new E.b(v),new E.b(u),0,0,0,0,new E.b(t),new E.b(s),0,0,0,0,0,0,0,0,0,new E.b(r),new E.b(q),new E.b(new Float64Array(2)),a0.gaA(a0),!1,!1)
v.ag(a.ch,a0)
z.h(a0.gbi())
y.h(a0.gbj())
x.h(a0.gh2())
x.T(1,w)
v.U=0
v.fx=0
v.go=a0.gh5()
v.id=a0.gdl()
v.k1=a0.gda()
v.ch=a0.gdf()
v.cx=a0.gd8()
return v
case C.aa:H.w(a0,"$iska")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new E.b(new Float64Array(2))
w=new E.b(new Float64Array(2))
v=new E.b(new Float64Array(2))
u=new E.b(new Float64Array(2))
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=a0.gcb()
m=a0.gcc()
l=a0.gcb().dI()
k=a0.gcc().dI()
j=a0.gcb().dA()
i=a0.gcc().dA()
o=new V.fF(n,m,l,k,j,i,z,y,x,w,v,u,0,0,0,0,0,0,0,0,0,new E.b(t),new E.b(s),new E.b(r),new E.b(q),0,0,0,0,0,0,0,0,new E.b(p),new E.b(o),0,0,0,0,0,a0.gaA(a0),!1,!1)
o.ag(a.ch,a0)
n=n.dC()
o.f=n
h=n.d
g=j.gbW()
j.gaP().gt()
t=o.Q.a.l()
s=o.Q.a.l()
f=a0.gcb()
x.h(f.geV())
z.h(f.geW())
o.k2=f.gf0()
v.h(f.geX())
G.j(h.b,z,s)
s.q(0,h.a)
s.n(g.gab())
G.a6(g.gce(),s,t)
t.n(x)
e=t.E(v)
o.Q.a.b-=2
z=m.dC()
o.r=z
d=z.d
c=i.gbW()
i.gaP().gt()
z=o.Q.a.l()
x=o.Q.a.l()
f=a0.gcc()
w.h(f.geV())
y.h(f.geW())
o.k3=f.gf0()
u.h(f.geX())
G.j(d.b,y,x)
x.q(0,d.a)
x.n(c.gab())
G.a6(c.gce(),x,z)
z.n(w)
b=z.E(u)
o.Q.a.b-=2
z=a0.ghd()
o.r1=z
o.k4=e+z*b
o.r2=0
return o
case C.N:H.w(a0,"$iskE")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new E.b(new Float64Array(2))
w=new E.b(new Float64Array(2))
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
v=new V.dw(z,y,0,0,x,w,0,0,0,0,0,new E.b(v),new E.b(u),new E.b(t),new E.b(s),new E.b(r),new E.b(new Float64Array(2)),0,0,0,0,0,a0.gaA(a0),!1,!1)
v.ag(a.ch,a0)
z.h(a0.ghu())
y.h(a0.ghv())
x.h(a0.gbi())
w.h(a0.gbj())
v.fx=a0.ghd()
v.cy=a0.gh0()
v.db=a0.gh1()
v.fr=a0.gh0().B(0,C.c.v(v.fx,a0.gh1()))
v.fy=0
return v
case C.L:return V.f9(a,H.w(a0,"$isjM"))
case C.a7:H.w(a0,"$iskH")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
x=new V.hK(z,y,0,0,0,0,0,new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(new Float64Array(2)),0,0,0,0,0,C.n,a0.gaA(a0),!1,!1)
x.ag(a.ch,a0)
z.h(a0.gbi())
y.h(a0.gbj())
x.cy=a0.ghT(a0)
return x
case C.a8:H.w(a0,"$iskm")
z=new E.b(new Float64Array(2))
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
y=new V.h6(z,0,new E.b(y),0,0,0,0,0,0,new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(t),0,0,0,0,0,new E.X(new Float64Array(4)),0,a0.gaA(a0),!1,!1)
y.ag(a.ch,a0)
z.h(a0.ghP())
y.cx=a0.ghF()
y.db=0
y.dx=a0.gh4()
y.dy=a0.ghV()
y.fr=a0.ghG()
return y
case C.a5:default:return}},
hv:function(a){return a.gc8(a).L(0,0)},
fa:{"^":"c;",
cB:function(a,b){var z,y,x
z=a.y
y=b.y
x=z.c
if(x===y.c&&x!==0)return x>0
return(z.b&y.a)!==0&&(z.a&y.b)!==0}},
cV:{"^":"c;a,b,c"},
ff:{"^":"c;"},
Q:{"^":"c;a,b",
cn:function(a){var z,y
z=this.a.a
y=this.b.a
a.sj(0,(z[0]+y[0])*0.5)
a.sk(0,(z[1]+y[1])*0.5)},
a0:function(a,b){var z,y,x,w,v
z=this.a
y=a.a.a
x=y[0]
w=b.a.a
v=w[0]
z.sj(0,x<v?x:v)
y=y[1]
w=w[1]
z.sk(0,y<w?y:w)
z=this.b
y=a.b.a
x=y[0]
w=b.b.a
v=w[0]
z.sj(0,x>v?x:v)
y=y[1]
w=w[1]
z.sk(0,y>w?y:w)},
aC:function(){var z,y
z=this.b.a
y=this.a.a
return 2*(z[0]-y[0]+z[1]-y[1])},
u:function(a){return"AABB["+this.a.u(0)+" . "+this.b.u(0)+"]"},
G:{
eS:function(a,b){var z,y
z=b.a.a
y=a.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=a.a.a
y=b.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0}}},
fg:{"^":"c;a,b,0c,d,e,0f,r,x,y",
scU:function(a){this.c=H.i(a,"$isd",[P.v],"$asd")},
scV:function(a){this.f=H.i(a,"$isd",[V.ap],"$asd")},
el:function(a){var z,y
z=new Array(this.r)
z.fixed$length=Array
this.scV(H.f(z,[V.ap]))
for(y=0;y<this.r;++y){z=this.f;(z&&C.a).m(z,y,new V.ap(0,0))}this.scU(P.aB(this.d,0,!1,P.v))},
hk:function(a,b){var z,y,x,w
z=this.a
y=z.b
if(a<0||a>=y.length)return H.a(y,a)
x=y[a].gaQ()
z=z.b
if(b<0||b>=z.length)return H.a(z,b)
w=z[b].gaQ()
z=w.a.a
y=x.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=x.a.a
y=w.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0},
ck:function(a){var z,y,x,w,v,u,t,s,r
this.x=0
for(z=this.a,y=0;y<this.e;++y){x=this.c
if(y>=x.length)return H.a(x,y)
x=H.k(x[y])
this.y=x
if(x===-1)continue
z.hb(this,C.a.i(z.b,x).gaQ())}this.e=0
F.eE(this.f,0,this.x,V.ap)
for(y=0;y<this.x;){x=this.f
if(y<0||y>=x.length)return H.a(x,y)
w=x[y]
x=w.a
v=C.a.i(z.b,x).gaB()
x=w.b
a.fe(v,C.a.i(z.b,x).gaB());++y
for(x=this.x,u=this.f;y<x;){if(y>=u.length)return H.a(u,y)
t=u[y]
s=t.a
r=w.a
if(s==null?r==null:s===r){s=t.b
r=w.b
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)break;++y}}},
d3:function(a){var z,y,x
z=this.e
y=this.d
if(z===y){x=this.c
z=y*2
this.d=z
z=new Array(z)
z.fixed$length=Array
this.scU(H.f(z,[P.v]))
C.a.ak(this.c,0,x.length,x,0)}C.a.m(this.c,this.e,a);++this.e},
dv:function(a){var z,y,x,w,v
if(a===this.y)return!0
z=this.x
y=this.r
if(z===y){x=this.f
z=y*2
this.r=z
z=new Array(z)
z.fixed$length=Array
this.scV(H.f(z,[V.ap]))
z=this.f
w=x.length;(z&&C.a).ak(z,0,w,x,0)
for(;w<this.r;++w){z=this.f;(z&&C.a).m(z,w,new V.ap(0,0))}}z=this.y
if(typeof z!=="number")return H.J(z)
y=this.f
v=this.x
if(a<z){if(v>=y.length)return H.a(y,v)
y[v].sdn(a)
z=this.f
y=this.x
if(y>=z.length)return H.a(z,y)
z[y].sdq(this.y)}else{if(v>=y.length)return H.a(y,v)
y[v].sdn(z)
z=this.f
y=this.x
if(y>=z.length)return H.a(z,y)
z[y].sdq(a)}++this.x
return!0},
$isi4:1,
$isjJ:1,
G:{
fh:function(a){var z=new V.fg(a,0,16,0,16,0,-1)
z.el(a)
return z}}},
fv:{"^":"c;0a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy",
seZ:function(a){this.b=H.i(a,"$isd",[V.ak],"$asd")},
sh7:function(a){this.r=H.i(a,"$isd",[V.ak],"$asd")},
en:function(){var z,y,x,w,v
for(z=this.d-1;z>=0;--z){y=this.b
x=new Float64Array(2)
C.a.m(y,z,new V.ak(new V.Q(new E.b(x),new E.b(new Float64Array(2))),z,0))
y=this.b
x=y.length
if(z>=x)return H.a(y,z)
w=y[z]
if(z===this.d-1)y=null
else{v=z+1
if(v>=x)return H.a(y,v)
v=y[v]
y=v}J.cN(w,y)
y=this.b
if(z>=y.length)return H.a(y,z)
J.cM(y[z],-1)}for(y=this.f,z=0;z<4;++z)C.a.m(y,z,new E.b(new Float64Array(2)))},
h6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.b
if(a<0||a>=z.length)return H.a(z,a)
y=z[a]
x=y.a
z=x.a
w=z.a
v=b.a.a
if(w[0]<=v[0])if(w[1]<=v[1]){u=b.b.a
t=x.b.a
u=u[0]<=t[0]&&u[1]<=t[1]}else u=!1
else u=!1
if(u)return!1
this.f3(y)
s=x.b
z.sj(0,v[0]-0.1)
z.sk(0,v[1]-0.1)
v=b.b.a
s.sj(0,v[0]+0.1)
s.sk(0,v[1]+0.1)
v=c.a
r=v[0]*2
q=v[1]*2
if(r<0)z.sj(0,w[0]+r)
else s.sj(0,s.a[0]+r)
if(q<0)z.sk(0,w[1]+q)
else s.sk(0,s.a[1]+q)
this.cT(a)
return!0},
hb:function(a,b){var z,y,x,w,v
this.x=0
z=this.r
this.x=1
C.a.m(z,0,this.a)
for(z=[V.ak];y=this.x,y>0;){x=this.r;--y
this.x=y
if(y>=x.length)return H.a(x,y)
w=x[y]
if(w==null)continue
if(V.eS(w.a,b))if(w.d==null)a.dv(w.f)
else{y=this.r.length
if(y-this.x-2<=0){y=new Array(y*2)
y.fixed$length=Array
v=H.f(y,z)
y=this.r
C.a.ak(v,0,y.length,y,0)
this.sh7(v)}C.a.m(this.r,this.x++,w.d)
C.a.m(this.r,this.x++,w.e)}}},
bL:function(a){var z=a.d
if(z==null)return 0
return H.k(1+Math.max(this.bL(z),this.bL(a.e)))},
cL:function(){var z,y,x,w,v,u,t
z=this.e
if(z===-1){y=this.b
z=this.d*=2
z=new Array(z)
z.fixed$length=Array
this.seZ(H.f(z,[V.ak]))
C.a.ak(this.b,0,y.length,y,0)
for(x=this.d-1;z=this.c,x>=z;--x){z=this.b
w=new Float64Array(2)
C.a.m(z,x,new V.ak(new V.Q(new E.b(w),new E.b(new Float64Array(2))),x,0))
z=this.b
w=z.length
if(x<0||x>=w)return H.a(z,x)
v=z[x]
if(x===this.d-1)z=null
else{u=x+1
if(u>=w)return H.a(z,u)
u=z[u]
z=u}J.cN(v,z)
z=this.b
if(x>=z.length)return H.a(z,x)
J.cM(z[x],-1)}this.e=z}w=this.b
if(z<0||z>=w.length)return H.a(w,z)
t=w[z]
z=t.c
this.e=z!=null?z.f:-1
t.c=null
t.d=null
t.e=null
t.r=0
t.b=null;++this.c
return t},
cP:function(a){var z,y
z=this.e
if(z!==-1){y=this.b
if(z<0||z>=y.length)return H.a(y,z)
z=y[z]}else z=null
a.c=H.l(z,"$isak")
a.r=-1
this.e=a.f;--this.c},
cT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.b
if(a<0||a>=z.length)return H.a(z,a)
y=z[a]
x=this.a
if(x==null){this.a=y
y.c=null
return}w=y.a
for(z=this.ch;v=x.d,v!=null;){u=x.e
t=x.a
s=t.aC()
z.a0(t,w)
r=z.aC()
q=2*r
p=2*(r-s)
if(v.d==null){z.a0(w,v.a)
o=z.aC()+p}else{t=v.a
z.a0(w,t)
n=t.aC()
o=z.aC()-n+p}if(u.d==null){z.a0(w,u.a)
m=z.aC()+p}else{t=u.a
z.a0(w,t)
n=t.aC()
m=z.aC()-n+p}if(q<o&&q<m)break
x=o<m?v:u}z=this.b
t=x.f
if(t<0||t>=z.length)return H.a(z,t)
l=J.eN(z[t])
k=this.cL()
k.c=l
k.b=null
k.a.a0(w,x.a)
k.r=x.r+1
if(l!=null){if(l.d===x)l.d=k
else l.e=k
k.d=x
k.e=y
x.c=k
y.c=k}else{k.d=x
k.e=y
x.c=k
y.c=k
this.a=k}for(x=k;x!=null;){x=this.cM(x)
j=x.d
u=x.e
x.r=H.k(1+Math.max(j.r,u.r))
x.a.a0(j.a,u.a)
x=x.c}},
f3:function(a){var z,y,x,w,v,u,t
if(a===this.a){this.a=null
return}z=a.c
y=z.c
x=z.d
if(x===a)x=z.e
if(y!=null){w=y.d
if(w==null?z==null:w===z)y.d=x
else y.e=x
x.c=y
this.cP(z)
for(v=y;v!=null;){v=this.cM(v)
u=v.d
t=v.e
v.a.a0(u.a,t.a)
v.r=H.k(1+Math.max(u.r,t.r))
v=v.c}}else{this.a=x
x.c=null
this.cP(z)}},
cM:function(a){var z,y,x,w,v,u,t,s
z=a.d
if(z==null||a.r<2)return a
y=a.e
x=y.r-z.r
if(x>1){w=y.d
v=y.e
y.d=a
y.c=a.c
a.c=y
u=y.c
if(u!=null)if(u.d===a)u.d=y
else u.e=y
else this.a=y
u=a.a
if(w.r>v.r){y.e=w
a.e=v
v.c=a
u.a0(z.a,v.a)
y.a.a0(u,w.a)
z=H.k(1+Math.max(z.r,v.r))
a.r=z
y.r=H.k(1+Math.max(z,w.r))}else{y.e=v
a.e=w
w.c=a
u.a0(z.a,w.a)
y.a.a0(u,v.a)
z=H.k(1+Math.max(z.r,w.r))
a.r=z
y.r=H.k(1+Math.max(z,v.r))}return y}if(x<-1){t=z.d
s=z.e
z.d=a
z.c=a.c
a.c=z
u=z.c
if(u!=null)if(u.d===a)u.d=z
else u.e=z
else this.a=z
u=a.a
if(t.r>s.r){z.e=t
a.d=s
s.c=a
u.a0(y.a,s.a)
z.a.a0(u,t.a)
u=H.k(1+Math.max(y.r,s.r))
a.r=u
z.r=H.k(1+Math.max(u,t.r))}else{z.e=s
a.d=t
t.c=a
u.a0(y.a,t.a)
z.a.a0(u,s.a)
u=H.k(1+Math.max(y.r,t.r))
a.r=u
z.r=H.k(1+Math.max(u,s.r))}return z}return a},
fK:function(a){var z,y
z=this.a
if(z==null)return
y=this.bL(z)
this.c7(a,this.a,0,y)},
c7:function(a,b,c,d){var z,y,x,w,v,u
z=b.a
y=H.i(this.f,"$isd",[E.b],"$asd")
x=z.a
y[0].h(x)
y[1].h(x)
w=y[1]
z=z.b
v=z.a
x=x.a
w.sj(0,w.a[0]+(v[0]-x[0]))
y[2].h(z)
y[3].h(z)
w=y[3]
w.sj(0,w.a[0]-(v[0]-x[0]))
x=this.cx
v=(d-c)/d
x.au(1,v,v)
a.by(y,4,x)
y=a.c
y.stroke()
v=this.cy
a.b.b8(z,v)
v=v.a
z=v[0]
v=v[1]
w=c+1
u=H.e(b)+".id-"+w+"/"+d
a.bz(x)
C.k.ea(y,u,z,v)
z=b.d
if(z!=null)this.c7(a,z,w,d)
z=b.e
if(z!=null)this.c7(a,z,w,d)},
$isjK:1,
G:{
fw:function(){var z,y,x,w,v,u,t,s,r,q
z=new Array(16)
z.fixed$length=Array
y=[V.ak]
z=H.f(z,y)
x=new Array(4)
x.fixed$length=Array
x=H.f(x,[E.b])
w=new Array(20)
w.fixed$length=Array
y=H.f(w,y)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
z=new V.fv(z,0,16,0,x,y,0,new E.b(w),new V.Q(new E.b(v),new E.b(u)),new V.cj(new E.b(t),new E.b(s),0),new V.Q(new E.b(r),new E.b(q)),new G.by(0,0,0),new E.b(new Float64Array(2)))
z.en()
return z}}},
ak:{"^":"c;aQ:a<,0aB:b<,0aV:c>,0d,0e,f,r",
saV:function(a,b){this.c=H.l(b,"$isak")},
saJ:function(a,b){this.r=H.k(b)}},
ap:{"^":"c;a,b",
sdn:function(a){this.a=H.k(a)},
sdq:function(a){this.b=H.k(a)},
b5:function(a,b){var z,y
H.l(b,"$isap")
z=this.a
y=b.a
if(typeof z!=="number")return z.L()
if(typeof y!=="number")return H.J(y)
if(z<y)return-1
if(z===y){z=this.b
y=b.b
if(typeof z!=="number")return z.L()
if(typeof y!=="number")return H.J(y)
if(z<y)z=-1
else z=z===y?0:1
return z}return 1},
$isH:1,
$asH:function(){return[V.ap]}},
eb:{"^":"c;a,b"},
R:{"^":"c;C:a<,b",
N:function(a){var z,y
z=this.a
y=a.a.a
z.sj(0,y[0])
z.sk(0,y[1])
y=a.b.a
z=this.b.a
z[0]=y[0]
z[1]=y[1]
z[2]=y[2]
z[3]=y[3]}},
c4:{"^":"c;a,b",
u:function(a){return this.b}},
d4:{"^":"c;a,b,c"},
i0:{"^":"c;a,b,c",
er:function(){var z,y,x
for(z=this.b,y=this.a,x=0;x<8;++x){C.a.m(y,x,new E.b(new Float64Array(2)))
C.a.m(z,x,new E.b(new Float64Array(2)))}},
G:{
i1:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.b]
z=H.f(z,y)
x=new Array(8)
x.fixed$length=Array
y=new V.i0(z,H.f(x,y),0)
y.er()
return y}}},
iI:{"^":"c;a,b,c,d,e,f,r,x,y"},
f6:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3",
fm:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n
a.e=0
z=b.gab()
y=d.gab()
x=c.b
w=C.b.v(x.b,z.gj(z))
v=C.b.v(x.a,z.gk(z))
u=c.a.a
t=u[0]
s=C.b.v(x.a,z.gj(z))
x=C.b.v(x.b,z.gk(z))
u=u[1]
r=e.b
q=e.a.a
p=C.b.v(r.b,y.gj(y))-C.b.v(r.a,y.gk(y))+q[0]-(w-v+t)
o=C.b.v(r.a,y.gj(y))+C.b.v(r.b,y.gk(y))+q[1]-(s+x+u)
n=b.gb6().B(0,d.gb6())
if(C.b.aM(p*p+o*o,n.v(0,n)))return
a.d=C.o
a.c.h(z)
a.b.K()
a.e=1
x=a.a
x[0].a.h(y)
x[0].d.bn()},
fn:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=b0.gab()
y=b1.b
x=a9.b
w=C.b.v(y.b,z.gj(z))
v=C.b.v(y.a,z.gk(z))
u=b1.a.a
t=u[0]
s=C.b.v(y.a,z.gj(z))
r=C.b.v(y.b,z.gk(z))
u=u[1]
q=a9.a.a
p=w-v+t-q[0]
o=s+r+u-q[1]
q=x.b
u=x.a
n=q*p+u*o
m=-u*p+q*o
l=C.b.B(a8.b,b0.gb6())
k=a8.f
j=a8.d
i=a8.e
for(h=0,g=-17976931348623157e292,f=0;f<k;++f){if(f>=8)return H.a(j,f)
w=j[f].a
v=w[0]
w=w[1]
u=i[f].a
e=u[0]*(n-v)+u[1]*(m-w)
if(e>l)return
if(e>g){g=e
h=f}}d=h+1
d=d<k?d:0
if(h<0||h>=8)return H.a(j,h)
c=j[h]
if(d<0||d>=8)return H.a(j,d)
b=j[d]
if(g<11920928955078125e-23){a7.e=1
a7.d=C.h
w=a7.b
v=i[h].a
w.sj(0,v[0])
w.sk(0,v[1])
v=a7.c
w=c.a
u=w[0]
t=b.a
v.sj(0,(u+t[0])*0.5)
v.sk(0,(w[1]+t[1])*0.5)
a=a7.a[0]
t=a.a
t.sj(0,z.gj(z))
t.sk(0,z.gk(z))
a.d.bn()
return}w=c.a
v=w[0]
a0=n-v
u=w[1]
a1=m-u
t=b.a
s=t[0]
r=t[1]
a2=n-s
a3=m-r
if(a0*(s-v)+a1*(r-u)<=0){if(a0*a0+a1*a1>l*l)return
a7.e=1
a7.d=C.h
v=a7.b
v.sj(0,a0)
v.sk(0,m-w[1])
v.Z()
a7.c.h(c)
v=a7.a
v[0].a.h(z)
v[0].d.bn()}else if(a2*(v-s)+a3*(u-r)<=0){if(a2*a2+a3*a3>l*l)return
a7.e=1
a7.d=C.h
w=a7.b
w.sj(0,a2)
w.sk(0,m-t[1])
w.Z()
a7.c.h(b)
w=a7.a
w[0].a.h(z)
w[0].d.bn()}else{a4=(v+s)*0.5
a5=(u+r)*0.5
a6=i[h]
w=a6.a
if((n-a4)*w[0]+(m-a5)*w[1]>l)return
a7.e=1
a7.d=C.h
a7.b.h(a6)
w=a7.c
w.sj(0,a4)
w.sk(0,a5)
w=a7.a
w[0].a.h(z)
w[0].d.bn()}},
dd:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=b.f
y=d.f
x=b.e
w=b.d
v=d.d
u=this.f
G.dR(e,c,u)
t=u.b
for(s=this.r,r=s.a,q=this.x,p=q.a,o=0,n=-17976931348623157e292,m=0;m<z;++m){if(m>=8)return H.a(x,m)
G.j(t,x[m],s)
G.o(u,w[m],q)
for(l=17976931348623157e292,k=0;k<y;++k){if(k>=8)return H.a(v,k)
j=v[k]
i=r[0]
h=j.a
g=i*(h[0]-p[0])+r[1]*(h[1]-p[1])
if(g<l)l=g}if(l>n){n=l
o=m}}a.b=o
a.a=n},
fS:function(a0,a1,a2,a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
H.i(a0,"$isd",[V.R],"$asd")
z=a1.e
y=a4.f
x=a4.d
w=a4.e
v=a0[0]
u=a0[1]
t=a2.b
s=a5.b
if(a3>=8)return H.a(z,a3)
r=z[a3]
q=t.b
p=r.a
o=p[0]
n=t.a
p=p[1]
m=q*o-n*p
l=n*o+q*p
p=s.b
q=s.a
k=p*m+q*l
j=-q*m+p*l
for(i=0,h=17976931348623157e292,g=0;g<y;++g){if(g>=8)return H.a(w,g)
o=w[g].a
f=k*o[0]+j*o[1]
if(f<h){h=f
i=g}}e=i+1
e=e<y?e:0
if(i<0||i>=8)return H.a(x,i)
d=x[i]
c=v.a
o=d.a
n=a5.a.a
c.sj(0,p*o[0]-q*o[1]+n[0])
c.sk(0,s.a*o[0]+s.b*o[1]+n[1])
o=a3&255
q=v.b.a
q[0]=o
q[1]=i&255
q[2]=1
q[3]=0
if(e<0||e>=8)return H.a(x,e)
b=x[e]
a=u.a
q=s.b
p=b.a
a.sj(0,q*p[0]-s.a*p[1]+n[0])
a.sk(0,s.a*p[0]+s.b*p[1]+n[1])
n=u.b.a
n[0]=o
n[1]=e&255
n[2]=1
n[3]=0},
fo:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=a8.b+b0.b
y=this.y
this.dd(y,a8,a9,b0,b1)
if(y.a>z)return
x=this.z
this.dd(x,b0,b1,a8,a9)
w=x.a
if(w>z)return
if(w>y.a+0.0005){v=x.b
a7.d=C.x
u=a9
t=b1
s=a8
r=b0
q=!0}else{v=y.b
a7.d=C.h
u=b1
t=a9
s=b0
r=a8
q=!1}p=t.b
y=this.Q
this.fS(y,r,t,v,s,u)
o=r.f
n=r.d
m=v+1
m=m<o?m:0
x=this.dx
if(v>=8)return H.a(n,v)
x.h(n[v])
w=this.dy
if(m>=8)return H.a(n,m)
w.h(n[m])
l=this.ch
k=w.a
j=x.a
l.sj(0,k[0]-j[0])
l.sk(0,k[1]-j[1])
l.Z()
i=this.cx
l=l.a
i.sj(0,l[1])
i.sk(0,-1*l[0])
h=this.cy
h.sj(0,(j[0]+k[0])*0.5)
h.sk(0,(j[1]+k[1])*0.5)
g=this.db
g.sj(0,p.b*l[0]-p.a*l[1])
g.sk(0,p.a*l[0]+p.b*l[1])
l=g.a
f=l[1]
e=-1*l[0]
G.z(t,x,x)
G.z(t,w,w)
w=j[0]
j=j[1]
d=f*w+e*j
x=l[0]
l=l[1]
c=k[0]
k=k[1]
g.M()
b=this.fr
a=V.bx(b,y,g,-(x*w+l*j)+z,v)
g.M()
if(a<2)return
y=this.fx
if(V.bx(y,b,g,x*c+l*k+z,m)<2)return
a7.b.h(i)
a7.c.h(h)
for(x=a7.a,w=u.a.a,l=u.b,k=l.b,l=l.a,j=-l,a0=0,a1=0;a1<2;++a1){i=y[a1]
h=i.a.a
g=h[0]
h=h[1]
if(f*g+e*h-d<=z){if(a0>=2)return H.a(x,a0)
a2=x[a0]
a3=a2.a
a4=g-w[0]
a5=h-w[1]
h=a3.a
h[0]=k*a4+l*a5
h[1]=j*a4+k*a5
h=a2.d
i=i.b.a
h=h.a
h[0]=i[0]
h[1]=i[1]
h[2]=i[2]
h[3]=i[3]
if(q){a6=h[0]
h[0]=h[1]
h[1]=a6
a6=h[2]
h[2]=h[3]
h[3]=a6}++a0}}a7.e=a0},
d5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n
a.e=0
z=this.e
G.o(e,d.gab(),z)
y=this.fy
G.cp(c,z,y)
x=b.c
w=b.d
v=this.go
v.h(w)
v.n(x)
z.h(w)
z.n(y)
u=v.E(z)
z.h(y)
z.n(x)
t=v.E(z)
s=C.b.B(b.b,d.gb6())
r=this.id
q=r.a
q[1]=0
q[3]=0
if(t<=0){z=$.$get$ax()
z.h(y)
z.n(x)
z=$.$get$ax()
if(z.E(z)>s*s)return
b.r
q[0]=0
q[2]=0
a.e=1
a.d=C.o
a.b.K()
a.c.h(x)
z=a.a
z[0].d.N(r)
z[0].a.h(d.gab())
return}if(u<=0){z=$.$get$ax()
z.h(y)
z.n(w)
z=$.$get$ax()
if(z.E(z)>s*s)return
b.x
q[0]=1
q[2]=0
a.e=1
a.d=C.o
a.b.K()
a.c.h(w)
z=a.a
z[0].d.N(r)
z[0].a.h(d.gab())
return}p=v.E(v)
o=this.k2
o.h(x)
o.F(0,u)
z.h(w)
z.F(0,t)
o.q(0,z)
o.F(0,1/p)
n=$.$get$ax()
n.h(y)
n.n(o)
o=$.$get$ax()
if(o.E(o)>s*s)return
o=this.r
v=v.a
o.sj(0,-v[1])
o.sk(0,v[0])
z.h(y)
z.n(x)
if(o.E(z)<0){z=o.a
o.J(-z[0],-z[1])}o.Z()
q[0]=0
q[2]=1
a.e=1
a.d=C.h
a.b.h(o)
a.c.h(x)
z=a.a
z[0].d.N(r)
z[0].a.h(d.gab())},
G:{
bx:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=[V.R]
H.i(a,"$isd",z,"$asd")
H.i(b,"$isd",z,"$asd")
y=b[0]
x=b[1]
w=y.a
v=x.a
u=c.E(w)-d
t=c.E(v)-d
if(u<=0){a[0].N(y)
s=1}else s=0
if(t<=0){r=s+1
a[s].N(x)
s=r}if(u*t<0){q=u/(u-t)
if(s>=2)return H.a(a,s)
p=a[s]
z=p.a
o=w.a
n=o[0]
m=v.a
z.sj(0,n+q*(m[0]-n))
o=o[1]
z.sk(0,o+q*(m[1]-o))
o=p.b.a
o[0]=e&255
o[1]=y.b.a[1]
o[2]=0
o[3]=1;++s}return s}}},
ib:{"^":"c;a,b",
u:function(a){return this.b}},
fx:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx",
eo:function(){var z,y,x,w,v
for(z=this.k2,y=this.k1,x=this.id,w=0;w<2;++w){v=new Float64Array(2)
C.a.m(x,w,new V.R(new E.b(v),new V.T(new Int8Array(4))))
v=new Float64Array(2)
C.a.m(y,w,new V.R(new E.b(v),new V.T(new Int8Array(4))))
v=new Float64Array(2)
C.a.m(z,w,new V.R(new E.b(v),new V.T(new Int8Array(4))))}},
d4:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.b
G.dR(c,a1,z)
y=this.c
G.o(z,a0.c,y)
this.d=b.e
this.e=b.c
x=b.d
this.f=x
this.r=b.f
b.x
w=this.fr
w.h(x)
w.n(this.e)
w.Z()
x=this.y
w=w.a
x.J(w[1],-w[0])
w=this.fx
w.h(y)
w.n(this.e)
v=x.E(w)
y=v>=0
this.dy=y
u=this.Q
t=x.a
s=this.cy
r=this.db
if(y){u.sj(0,t[0])
u.sk(0,t[1])
s.sj(0,-t[0])
s.sk(0,-t[1])
r.sj(0,-t[0])
r.sk(0,-t[1])}else{u.sj(0,-t[0])
u.sk(0,-t[1])
s.sj(0,t[0])
s.sk(0,t[1])
r.sj(0,t[0])
r.sk(0,t[1])}y=this.a
y.c=a0.f
for(u=y.a,t=z.b,s=y.b,q=0;q<a0.f;++q){r=a0.d
if(q>=8)return H.a(r,q)
G.o(z,r[q],u[q])
G.j(t,a0.e[q],s[q])}this.dx=0.02
a.e=0
p=this.k4
this.fq(p)
if(p.a===C.q)return
if(p.c>this.dx)return
o=this.r1
this.ft(o)
t=o.a===C.q
if(!t&&o.c>this.dx)return
if(!t)if(o.c>0.98*p.c+0.001)p=o
t=this.id
n=t[0]
m=t[1]
if(p.a===C.u){a.d=C.h
r=this.Q
l=r.E(s[0])
for(k=0,q=1;j=y.c,q<j;++q){if(q>=8)return H.a(s,q)
i=r.E(s[q])
if(i<l){l=i
k=q}}h=k+1
h=h<j?h:0
y=n.a
if(k<0||k>=8)return H.a(u,k)
y.h(u[k])
y=n.b.a
y[0]=0
y[1]=k&255
y[2]=1
y[3]=0
y=m.a
if(h<0||h>=8)return H.a(u,h)
y.h(u[h])
u=m.b.a
u[0]=0
u[1]=h&255
u[2]=1
u[3]=0
y=this.k3
u=y.c
s=y.d
r=y.e
if(this.dy){y.a=0
y.b=1
u.h(this.e)
s.h(this.f)
r.h(x)}else{y.a=1
y.b=0
u.h(this.f)
s.h(this.e)
r.h(x)
r.M()}}else{a.d=C.x
n.a.h(this.e)
x=n.b.a
x[0]=0
x[1]=p.b&255
x[2]=0
x[3]=1
m.a.h(this.f)
x=m.b.a
x[0]=0
r=p.b
x[1]=r&255
x[2]=0
x[3]=1
x=this.k3
x.a=r
j=r+1
x.b=j<y.c?j:0
if(r<0||r>=8)return H.a(u,r)
x.c.h(u[r])
r=x.b
if(r<0||r>=8)return H.a(u,r)
x.d.h(u[r])
r=x.a
if(r<0||r>=8)return H.a(s,r)
x.e.h(s[r])
y=x}x=y.f
u=y.e
s=u.a
x.J(s[1],-s[0])
s=y.x
s.h(x)
s.M()
r=y.c
y.r=x.E(r)
y.y=s.E(y.d)
j=this.k1
if(V.bx(j,t,x,y.r,y.a)<2)return
x=this.k2
if(V.bx(x,j,s,y.y,y.b)<2)return
t=a.b
s=a.c
if(p.a===C.u){t.h(u)
s.h(r)}else{j=a0.e
g=y.a
if(g<0||g>=8)return H.a(j,g)
t.h(j[g])
g=a0.d
y=y.a
if(y<0||y>=8)return H.a(g,y)
s.h(g[y])}for(y=w.a,t=a.a,f=0,q=0;q<2;++q){e=x[q].a.a
y[1]=e[1]
y[0]=e[0]
w.n(r)
if(u.E(w)<=this.dx){if(f>=2)return H.a(t,f)
d=t[f]
if(p.a===C.u){G.cp(z,x[q].a,d.a)
s=d.d
j=x[q].b.a
s=s.a
s[0]=j[0]
s[1]=j[1]
s[2]=j[2]
s[3]=j[3]}else{s=d.a
j=x[q]
e=j.a.a
s=s.a
s[1]=e[1]
s[0]=e[0]
s=d.d
j=j.b.a
s=s.a
s[2]=j[3]
s[3]=j[2]
s[0]=j[1]
s[1]=j[0]}++f}}a.e=f},
fq:function(a){var z,y,x,w,v,u,t,s,r,q
a.a=C.u
a.b=this.dy?0:1
a.c=17976931348623157e292
z=this.Q.a
y=z[0]
x=z[1]
for(z=this.a,w=z.a,v=0,u=17976931348623157e292;v<z.c;++v){if(v>=8)return H.a(w,v)
t=w[v].a
s=t[0]
r=this.e.a
q=y*(s-r[0])+x*(t[1]-r[1])
if(q<u){a.c=q
u=q}}},
ft:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
a.a=C.q
a.b=-1
a.c=-17976931348623157e292
z=this.r2
y=this.Q
x=y.a
z.sj(0,-x[1])
z.sk(0,x[0])
for(x=this.a,w=this.fx,v=this.rx.a,u=w.a,t=this.cy,z=z.a,s=x.b,r=x.a,q=this.db,p=0;p<x.c;++p){if(p>=8)return H.a(s,p)
o=s[p]
n=r[p]
m=o.a
v[0]=-m[0]
v[1]=-m[1]
m=n.a
l=m[0]
k=this.e.a
j=k[0]
m=m[1]
k=k[1]
i=v[0]
h=v[1]
g=this.f.a
f=Math.min(i*(l-j)+h*(m-k),i*(l-g[0])+h*(m-g[1]))
if(f>this.dx){a.a=C.I
a.b=p
a.c=f
return}if(i*z[0]+h*z[1]>=0){u[1]=h
u[0]=v[0]
w.n(q)
if(w.E(y)<-0.03490658503988659)continue}else{u[1]=h
u[0]=v[0]
w.n(t)
if(w.E(y)<-0.03490658503988659)continue}if(f>a.c){a.a=C.I
a.b=p
a.c=f}}},
G:{
fy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.i1()
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=new Float64Array(2)
m=new Float64Array(2)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Array(2)
i.fixed$length=Array
h=[V.R]
i=H.f(i,h)
g=new Array(2)
g.fixed$length=Array
g=H.f(g,h)
f=new Array(2)
f.fixed$length=Array
h=H.f(f,h)
f=new Float64Array(2)
e=new Float64Array(2)
d=new Float64Array(2)
c=new Float64Array(2)
b=new Float64Array(2)
a=new Float64Array(2)
z=new V.fx(z,new G.E(new E.b(y),new G.A(0,1)),new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(t),new E.b(s),new E.b(r),new E.b(q),new E.b(p),C.U,C.U,new E.b(o),new E.b(n),0,!1,new E.b(m),new E.b(l),new E.b(k),new E.b(j),i,g,h,new V.iI(0,0,new E.b(f),new E.b(e),new E.b(d),new E.b(c),0,new E.b(b),0),new V.d4(C.q,0,0),new V.d4(C.q,0,0),new E.b(a),new E.b(new Float64Array(2)))
z.eo()
return z}}},
T:{"^":"c;a",
bo:function(){var z=this.a
return(z[0]<<24|z[1]<<16|z[2]<<8|z[3])>>>0},
N:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
bn:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
b5:function(a,b){H.l(b,"$isT")
return this.bo()-b.bo()},
$isH:1,
$asH:function(){return[V.T]}},
bM:{"^":"c;a,b,p:c<,t:d<,e,f",
st:function(a){this.d=H.be(a)},
N:function(a){this.a.h(a.a)
this.b.h(a.b)
this.c.h(a.c)
this.d=a.d
this.e=a.e
this.f=a.f}},
hQ:{"^":"c;a,b,c,d",G:{
dC:function(){var z,y
z=P.v
y=P.aB(3,0,!1,z)
z=P.aB(3,0,!1,z)
C.a.m(y,0,1073741823)
C.a.m(y,1,1073741823)
C.a.m(y,2,1073741823)
C.a.m(z,0,1073741823)
C.a.m(z,1,1073741823)
C.a.m(z,2,1073741823)
return new V.hQ(0,0,y,z)}}},
iP:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
he:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
this.e=a.b
for(z=this.d,y=a.c,x=y.length,w=a.d,v=w.length,u=b.a,t=d.a,s=0;r=this.e,s<r;++s){if(s>=3)return H.a(z,s)
q=z[s]
if(s>=x)return H.a(y,s)
r=H.k(y[s])
q.e=r
if(s>=v)return H.a(w,s)
q.f=H.k(w[s])
p=C.a.i(u,r)
o=C.a.i(t,q.f)
r=q.a
G.o(c,p,r)
n=q.b
G.o(e,o,n)
m=q.c
l=n.a
n=m.a
n[1]=l[1]
n[0]=l[0]
m.n(r)
q.d=0}if(r>1){k=a.a
j=this.cq()
if(j<0.5*k||2*k<j||j<11920928955078125e-23)this.e=0}if(this.e===0){q=z[0]
q.e=0
q.f=0
p=u[0]
o=t[0]
z=q.a
G.o(c,p,z)
y=q.b
G.o(e,o,y)
x=q.c
x.h(y)
x.n(z)
this.e=1}},
hs:function(a){var z,y,x,w
a.a=this.cq()
a.b=this.e
for(z=a.c,y=this.d,x=a.d,w=0;w<this.e;++w){if(w>=3)return H.a(y,w)
C.a.m(z,w,J.cO(y[w].e))
C.a.m(x,w,J.cO(y[w].f))}},
dG:function(a){var z,y
switch(this.e){case 1:a.h(this.a.c)
a.M()
return
case 2:z=this.f
z.h(this.b.c)
y=this.a.c
z.n(y)
a.h(y)
a.M()
if(z.A(a)>0)z.T(1,a)
else z.T(-1,a)
return
default:a.K()
return}},
co:function(a){var z,y,x
switch(this.e){case 0:a.K()
return
case 1:a.h(this.a.c)
return
case 2:z=this.x
y=this.b
z.h(y.c)
z.F(0,y.d)
y=this.r
x=this.a
y.h(x.c)
y.F(0,x.d)
y.q(0,z)
a.h(y)
return
case 3:a.K()
return
default:a.K()
return}},
cq:function(){var z,y,x
switch(this.e){case 0:return 0
case 1:return 0
case 2:return Math.sqrt(this.a.c.c6(this.b.c))
case 3:z=this.y
z.h(this.b.c)
y=this.a.c
z.n(y)
x=this.z
x.h(this.c.c)
x.n(y)
return z.A(x)
default:return 0}},
dN:function(){var z,y,x,w,v,u,t,s
z=this.a
y=z.c
x=this.b
w=x.c
v=this.f
v.h(w)
v.n(y)
u=-y.E(v)
if(u<=0){z.d=1
this.e=1
return}t=w.E(v)
if(t<=0){x.d=1
this.e=1
z.N(x)
return}s=1/(t+u)
z.d=t*s
x.d=u*s
this.e=2},
dO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=this.cx
y=this.a
z.h(y.c)
x=this.cy
w=this.b
x.h(w.c)
v=this.db
u=this.c
v.h(u.c)
t=this.f
t.h(x)
t.n(z)
s=z.E(t)
r=x.E(t)
q=-s
p=this.Q
p.h(v)
p.n(z)
o=z.E(p)
n=v.E(p)
m=-o
l=this.ch
l.h(v)
l.n(x)
k=x.E(l)
j=v.E(l)
i=-k
h=t.A(p)
g=h*x.A(v)
f=h*v.A(z)
e=h*z.A(x)
if(q<=0&&m<=0){y.d=1
this.e=1
return}if(r>0&&q>0&&e<=0){d=1/(r+q)
y.d=r*d
w.d=q*d
this.e=2
return}if(n>0&&m>0&&f<=0){c=1/(n+m)
y.d=n*c
u.d=m*c
this.e=2
w.N(u)
return}if(r<=0&&i<=0){w.d=1
this.e=1
y.N(w)
return}if(n<=0&&j<=0){u.d=1
this.e=1
y.N(u)
return}if(j>0&&i>0&&g<=0){b=1/(j+i)
w.d=j*b
u.d=i*b
this.e=2
y.N(u)
return}a=1/(g+f+e)
y.d=g*a
w.d=f*a
u.d=e*a
this.e=3}},
fq:{"^":"c;a,0b,0c,d",
em:function(){var z,y
for(z=this.a,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
this.b=0
this.c=0},
cw:function(a,b){var z,y,x,w,v,u
switch(a.a){case C.m:H.w(a,"$isaU")
this.a[0].h(a.gab())
this.b=1
this.c=a.gb6()
break
case C.j:z=a.f
this.b=z
this.c=a.b
for(y=this.a,x=0;x<z;++x){if(x>=8)return H.a(y,x)
w=y[x]
v=a.d[x]
w.toString
u=H.l(v,"$isb").a
w=w.a
w[1]=u[1]
w[0]=u[0]}break
case C.y:H.w(a,"$isc3")
z=this.d
C.a.m(z,0,a.gbZ().i(0,b))
y=b+1
if(C.c.L(y,a.geK()))C.a.m(z,1,a.gbZ().i(0,y))
else C.a.m(z,1,a.gbZ().i(0,0))
y=this.a
y[0].h(z[0])
y[1].h(z[1])
this.b=2
this.c=a.gb6()
break
case C.p:H.w(a,"$isaY")
z=this.a
z[0].h(a.c)
z[1].h(a.d)
this.b=2
this.c=a.b
break}},
aX:function(a){var z,y,x,w,v
z=this.a
y=z[0].E(a)
for(x=0,w=1;w<this.b;++w){if(w>=8)return H.a(z,w)
v=z[w].E(a)
if(v>y){y=v
x=w}}return x},
G:{
aV:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.b]
z=H.f(z,y)
x=new Array(2)
x.fixed$length=Array
y=new V.fq(z,H.f(x,y))
y.em()
return y}}},
fo:{"^":"c;a,b,c,d,e,f,r",
fE:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.d0=$.d0+1
z=a6.a
y=a6.b
x=a6.c
w=a6.d
v=this.a
v.he(a5,z,x,y,w)
u=v.d
t=this.d
v.co(t)
t.gV()
for(s=this.b,r=s.length,q=this.c,p=q.length,o=x.b,n=this.e,m=this.f,l=z.a,k=w.b,j=y.a,i=0;i<20;){h=v.e
for(g=0;g<h;++g){if(g>=3)return H.a(u,g)
C.a.m(s,g,u[g].e)
C.a.m(q,g,u[g].f)}switch(v.e){case 1:break
case 2:v.dN()
break
case 3:v.dO()
break}if(v.e===3)break
v.co(t)
t.gV()
v.dG(n)
if(n.gV()<14210854715202004e-30)break
f=v.e
if(f>=3)return H.a(u,f)
e=u[f]
n.M()
G.a6(o,n,m)
f=z.aX(m)
e.e=f
if(f>=8)return H.a(l,f)
f=l[f]
d=e.a
G.o(x,f,d)
n.M()
G.a6(k,n,m)
f=y.aX(m)
e.f=f
if(f>=8)return H.a(j,f)
f=j[f]
c=e.b
G.o(w,f,c)
f=e.c
b=c.a
c=f.a
c[1]=b[1]
c[0]=b[0]
f.n(d);++i
$.d1=$.d1+1
g=0
while(!0){if(!(g<h)){a=!1
break}f=e.e
if(g>=r)return H.a(s,g)
d=s[g]
if(f==null?d==null:f===d){f=e.f
if(g>=p)return H.a(q,g)
d=q[g]
d=f==null?d==null:f===d
f=d}else f=!1
if(f){a=!0
break}++g}if(a)break;++v.e}$.d2=Math.max($.d2,i)
a0=a4.a
a1=a4.b
switch(v.e){case 0:break
case 1:t=v.a
a0.h(t.a)
a1.h(t.b)
break
case 2:t=v.r
s=v.a
t.h(s.a)
t.F(0,s.d)
r=v.b
a0.h(r.a)
a0.F(0,r.d)
a0.q(0,t)
t.h(s.b)
t.F(0,s.d)
a1.h(r.b)
a1.F(0,r.d)
a1.q(0,t)
break
case 3:t=v.a
a0.h(t.a)
a0.F(0,t.d)
t=v.y
s=v.b
t.h(s.a)
t.F(0,s.d)
s=v.z
r=v.c
s.h(r.a)
s.F(0,r.d)
a0.q(0,t)
a0.q(0,s)
a1.h(a0)
break
default:break}a4.c=Math.sqrt(a0.c6(a1))
a4.d=i
v.hs(a5)
if(a6.e){a2=z.c
a3=y.c
v=a4.c
t=a2+a3
if(v>t&&v>11920928955078125e-23){a4.c=v-t
v=this.r
v.h(a1)
v.n(a0)
v.Z()
m.h(v)
m.F(0,a2)
a0.q(0,m)
m.h(v)
m.F(0,a3)
a1.n(m)}else{a0.q(0,a1)
a0.F(0,0.5)
a1.h(a0)
a4.c=0}}}},
cZ:{"^":"c;a,b,c,d,e"},
d_:{"^":"c;a,b,c,d"},
cd:{"^":"c;a,b",
u:function(a){return this.b}},
h0:{"^":"c;a,b,c,d,e",
ep:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.m(z,y,new V.dl(new E.b(x),0,0,new V.T(new Int8Array(4))))}},
N:function(a){var z,y,x,w,v,u,t
for(z=this.a,y=a.a,x=0;x<a.e;++x){if(x>=2)return H.a(z,x)
w=z[x]
v=y[x]
u=w.a
t=v.a.a
u=u.a
u[1]=t[1]
u[0]=t[0]
w.b=v.b
w.c=v.c
w=w.d
v=v.d.a
w=w.a
w[0]=v[0]
w[1]=v[1]
w[2]=v[2]
w[3]=v[3]}this.d=a.d
this.b.h(a.b)
this.c.h(a.c)
this.e=a.e},
G:{
O:function(){var z,y
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.dl])
y=new Float64Array(2)
z=new V.h0(z,new E.b(y),new E.b(new Float64Array(2)),C.o,0)
z.ep()
return z}}},
dl:{"^":"c;a,b,c,d"},
cj:{"^":"c;a,b,c"},
dz:{"^":"c;a,b"},
aY:{"^":"dB;c,d,e,f,r,x,y,a,b"},
h3:{"^":"c;a,b,c"},
hz:{"^":"dB;c,d,e,f,r,x,y,z,Q,a,b",
eq:function(){var z,y
for(z=this.d,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
for(z=this.e,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
this.b=0.01},
fk:function(a){var z,y,x,w,v,u,t,s,r
z=V.ch()
z.c.h(this.c)
for(y=z.e,x=this.e,w=z.d,v=this.d,u=0;u<8;++u){t=y[u]
s=x[u]
t.toString
r=s.a
t=t.a
t[1]=r[1]
t[0]=r[0]
w[u].h(v[u])}z.b=this.b
z.f=this.f
return z},
dK:function(a,b){var z,y,x
this.f=4
z=this.d
y=-a
x=-b
z[0].J(y,x)
z[1].J(a,x)
z[2].J(a,b)
z[3].J(y,b)
y=this.e
y[0].J(0,-1)
y[1].J(1,0)
y[2].J(0,1)
y[3].J(-1,0)
this.c.K()},
bF:function(a,b,c,d){var z,y,x,w,v,u
this.f=4
z=this.d
y=-a
x=-b
z[0].J(y,x)
z[1].J(a,x)
z[2].J(a,b)
z[3].J(y,b)
y=this.e
y[0].J(0,-1)
y[1].J(1,0)
y[2].J(0,1)
y[3].J(-1,0)
this.c.h(c)
w=this.Q
w.a.h(c)
x=w.b
x.I(d)
for(v=0;v<this.f;++v){if(v>=8)return H.a(z,v)
u=z[v]
G.z(w,u,u)
u=y[v]
G.aD(x,u,u)}},
c0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.a
y=a.b
x=this.d
w=x[0]
v=b.b
u=v.b
t=v.a
v=b.a.a
s=v[0]
r=v[1]
v=w.a
z.sj(0,u*v[0]-t*v[1]+s)
z.sk(0,t*v[0]+u*v[1]+r)
v=z.a
y.sj(0,v[0])
y.sk(0,v[1])
for(q=this.f,p=y.a,o=1;o<q;++o){if(o>=8)return H.a(x,o)
n=x[o].a
m=n[0]
n=n[1]
l=u*m-t*n+s
k=t*m+u*n+r
n=v[0]
v[0]=n<l?n:l
n=v[1]
v[1]=n<k?n:k
n=p[0]
p[0]=n>l?n:l
n=p[1]
p[1]=n>k?n:k}z.sj(0,v[0]-this.b)
z.sk(0,v[1]-this.b)
y.sj(0,p[0]+this.b)
y.sk(0,p[1]+this.b)},
fs:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.r
z.K()
y=this.x
y.K()
for(x=this.d,w=0;v=this.f,w<v;++w){if(w>=8)return H.a(x,w)
y.q(0,x[w])}y.F(0,1/v)
u=this.y
t=this.z
for(v=z.a,s=u.a,r=t.a,q=y.a,p=0,o=0,w=0;w<this.f;){if(w>=8)return H.a(x,w)
n=H.l(x[w],"$isb").a
s[1]=n[1]
s[0]=n[0]
u.n(y)
r[1]=q[1]
r[0]=q[0]
t.M();++w
if(w<this.f){if(w>=8)return H.a(x,w)
m=x[w]}else m=x[0]
t.q(0,m)
l=u.A(t)
k=0.5*l
p+=k
m=k*0.3333333333333333
v[0]=v[0]+m*(s[0]+r[0])
v[1]=v[1]+m*(s[1]+r[1])
j=s[0]
i=s[1]
h=r[0]
g=r[1]
o+=0.08333333333333333*l*(j*j+h*j+h*h+(i*i+g*i+g*g))}a.a=b*p
z.F(0,1/p)
x=a.b
x.h(z)
x.q(0,y)
v=o*b
a.c=v
a.c=v+a.a*x.E(x)},
G:{
ch:function(){var z,y,x,w,v,u,t
z=new Float64Array(2)
y=new Array(8)
y.fixed$length=Array
x=[E.b]
y=H.f(y,x)
w=new Array(8)
w.fixed$length=Array
x=H.f(w,x)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
z=new V.hz(new E.b(z),y,x,0,new E.b(w),new E.b(v),new E.b(u),new E.b(t),new G.E(new E.b(new Float64Array(2)),new G.A(0,1)),C.j,0)
z.eq()
return z}}},
dB:{"^":"c;"},
bI:{"^":"c;a,b",
u:function(a){return this.b}},
hY:{"^":"c;a,b,c,d,e"},
bq:{"^":"c;a,b",
u:function(a){return this.b}},
hZ:{"^":"c;a,b"},
i3:{"^":"c;a,b,c,d,e,f,r,x,y,z",
hl:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.dJ=$.dJ+1
a4.a=C.R
a4.b=a5.e
z=a5.a
y=a5.b
x=this.x
x.N(a5.c)
w=this.y
w.N(a5.d)
x.Z()
w.Z()
v=a5.e
u=Math.max(0.005,z.c+y.c-0.015)
t=this.a
t.b=0
s=this.b
s.a=z
s.b=y
s.e=!1
for(r=this.f,q=this.r,p=q.length,o=u+0.00125,n=u-0.00125,m=this.e,l=this.c,k=this.d,j=this.z.fy,i=0,h=0;!0;){x.aD(l,i)
w.aD(k,i)
s.c=l
s.d=k
j.fE(m,t,s)
g=m.c
if(g<=0){a4.a=C.ai
a4.b=0
break}if(g<o){a4.a=C.F
a4.b=i
break}r.fX(0,t,z,x,y,w,i)
e=v
d=0
while(!0){if(!!0){f=!1
break}c=r.fT(q,e)
if(c>o){a4.a=C.aj
a4.b=v
f=!0
break}if(c>n){i=e
f=!1
break}if(0>=p)return H.a(q,0)
g=q[0]
if(1>=p)return H.a(q,1)
b=r.ap(g,q[1],i)
if(b<n){a4.a=C.S
a4.b=i
f=!0
break}if(b<=o){a4.a=C.F
a4.b=i
f=!0
break}for(a=e,a0=i,a1=0;!0;){a2=(a1&1)===1?a0+(u-b)*(a-a0)/(c-b):0.5*(a0+a);++a1
$.dN=$.dN+1
a3=r.ap(q[0],q[1],a2)
if(Math.abs(a3-u)<0.00125){e=a2
break}if(a3>u){a0=a2
b=a3}else{a=a2
c=a3}if(a1===50)break}$.dM=Math.max($.dM,a1);++d
if(d===8||a1===50){f=!1
break}}++h
$.dK=$.dK+1
if(f)break
if(h===20){a4.a=C.S
a4.b=i
break}}$.dL=Math.max($.dL,h)}},
ck:{"^":"c;a,b",
u:function(a){return this.b}},
hN:{"^":"c;0a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go",
fX:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
this.a=c
this.b=e
z=b.b
this.f=d
this.r=f
y=this.fr
d.aD(y,g)
x=this.fx
this.r.aD(x,g)
if(z===1){this.c=C.C
g=this.x
w=this.a
v=b.c
if(0>=v.length)return H.a(v,0)
v=v[0]
w.toString
H.k(v)
g.h(C.a.i(w.a,v))
v=this.y
w=this.b
u=b.d
if(0>=u.length)return H.a(u,0)
u=u[0]
w.toString
H.k(u)
v.h(C.a.i(w.a,u))
u=this.z
G.o(y,g,u)
g=this.Q
G.o(x,v,g)
v=this.e
v.h(g)
v.n(u)
return v.Z()}else{g=b.c
w=g.length
if(0>=w)return H.a(g,0)
v=g[0]
if(1>=w)return H.a(g,1)
w=b.d
u=this.z
t=this.d
s=this.cy
r=this.e
q=this.Q
p=this.dy
o=w.length
if(J.aa(v,g[1])){this.c=C.E
v=this.db
n=this.b
if(0>=o)return H.a(w,0)
m=w[0]
n.toString
H.k(m)
v.h(C.a.i(n.a,m))
m=this.dx
n=this.b
if(1>=o)return H.a(w,1)
w=w[1]
n.toString
H.k(w)
m.h(C.a.i(n.a,w))
p.h(m)
p.n(v)
p.T(-1,r)
r.Z()
G.j(x.b,r,s)
t.h(v)
t.q(0,m)
t.F(0,0.5)
G.o(x,t,q)
t=this.x
x=this.a
g=g[0]
x.toString
H.k(g)
t.h(C.a.i(x.a,g))
G.o(y,t,u)
p.h(u)
p.n(q)
l=p.E(s)
if(l<0){r.M()
l=-l}return l}else{this.c=C.D
v=this.ch
n=this.a
m=g[0]
n.toString
H.k(m)
v.h(C.a.i(n.a,m))
m=this.cx
n=this.a
g=g[1]
n.toString
H.k(g)
m.h(C.a.i(n.a,g))
p.h(m)
p.n(v)
p.T(-1,r)
r.Z()
G.j(y.b,r,s)
t.h(v)
t.q(0,m)
t.F(0,0.5)
G.o(y,t,u)
t=this.y
y=this.b
if(0>=o)return H.a(w,0)
w=w[0]
y.toString
H.k(w)
t.h(C.a.i(y.a,w))
G.o(x,t,q)
p.h(q)
p.n(u)
l=p.E(s)
if(l<0){r.M()
l=-l}return l}}},
fT:function(a,b){var z,y,x,w,v,u,t
H.i(a,"$isd",[P.v],"$asd")
z=this.fr
this.f.aD(z,b)
y=this.fx
this.r.aD(y,b)
switch(this.c){case C.C:x=this.e
w=this.fy
G.a6(z.b,x,w)
x.M()
v=this.go
G.a6(y.b,x,v)
x.M()
C.a.m(a,0,this.a.aX(w))
C.a.m(a,1,this.b.aX(v))
v=this.x
w=this.a
u=a.length
if(0>=u)return H.a(a,0)
t=a[0]
w.toString
H.k(t)
v.h(C.a.i(w.a,t))
t=this.y
w=this.b
if(1>=u)return H.a(a,1)
u=a[1]
w.toString
H.k(u)
t.h(C.a.i(w.a,u))
u=this.z
G.o(z,v,u)
v=this.Q
G.o(y,t,v)
v.n(u)
return v.E(x)
case C.D:x=this.cy
G.j(z.b,this.e,x)
w=this.z
G.o(z,this.d,w)
x.M()
z=this.go
G.a6(y.b,x,z)
x.M()
C.a.m(a,0,-1)
C.a.m(a,1,this.b.aX(z))
z=this.y
v=this.b
if(1>=a.length)return H.a(a,1)
u=a[1]
v.toString
H.k(u)
z.h(C.a.i(v.a,u))
u=this.Q
G.o(y,z,u)
u.n(w)
return u.E(x)
case C.E:x=this.cy
G.j(y.b,this.e,x)
w=this.Q
G.o(y,this.d,w)
x.M()
y=this.fy
G.a6(z.b,x,y)
x.M()
C.a.m(a,1,-1)
C.a.m(a,0,this.a.aX(y))
y=this.x
v=this.a
if(0>=a.length)return H.a(a,0)
u=a[0]
v.toString
H.k(u)
y.h(C.a.i(v.a,u))
u=this.z
G.o(z,y,u)
u.n(w)
return u.E(x)
default:C.a.m(a,0,-1)
C.a.m(a,1,-1)
return 0}},
ap:function(a,b,c){var z,y,x,w,v
H.k(a)
H.k(b)
z=this.fr
this.f.aD(z,c)
y=this.fx
this.r.aD(y,c)
switch(this.c){case C.C:x=this.x
x.h(C.a.i(this.a.a,a))
w=this.y
w.h(C.a.i(this.b.a,b))
v=this.z
G.o(z,x,v)
x=this.Q
G.o(y,w,x)
x.n(v)
return x.E(this.e)
case C.D:x=this.cy
G.j(z.b,this.e,x)
w=this.z
G.o(z,this.d,w)
z=this.y
z.h(C.a.i(this.b.a,b))
v=this.Q
G.o(y,z,v)
v.n(w)
return v.E(x)
case C.E:x=this.cy
G.j(y.b,this.e,x)
w=this.Q
G.o(y,this.d,w)
y=this.x
y.h(C.a.i(this.a.a,a))
v=this.z
G.o(z,y,v)
v.n(w)
return v.E(x)
default:return 0}}},
ij:{"^":"c;a,b,c,d,e",
es:function(){var z,y
for(z=this.b,y=0;y<2;++y)C.a.m(z,y,new E.b(new Float64Array(2)))},
fW:function(a,b,c,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b.e===0)return
switch(b.d){case C.o:z=this.d
y=this.e
x=this.a
x.sj(0,1)
x.sk(0,0)
w=c.b
v=b.c.a
u=c.a.a
z.sj(0,w.b*v[0]-w.a*v[1]+u[0])
z.sk(0,w.a*v[0]+w.b*v[1]+u[1])
u=a1.b
v=b.a[0].a.a
w=a1.a.a
y.sj(0,u.b*v[0]-u.a*v[1]+w[0])
y.sk(0,u.a*v[0]+u.b*v[1]+w[1])
if(z.c6(y)>14210854715202004e-30){w=y.a
v=z.a
x.sj(0,w[0]-v[0])
x.sk(0,w[1]-v[1])
x.Z()}x=x.a
w=x[0]
v=z.a
t=w*a0+v[0]
u=x[1]
s=u*a0+v[1]
v=y.a
r=-w*a2+v[0]
q=-u*a2+v[1]
v=this.b
v[0].sj(0,(t+r)*0.5)
v[0].sk(0,(s+q)*0.5)
this.c[0]=(r-t)*x[0]+(q-s)*x[1]
break
case C.h:p=this.d
x=this.a
G.j(c.b,b.b,x)
G.z(c,b.c,p)
o=this.e
for(w=b.a,v=o.a,u=p.a,x=x.a,n=this.b,m=this.c,l=0;l<b.e;++l){if(l>=2)return H.a(w,l)
G.z(a1,w[l].a,o)
k=v[0]
j=u[0]
i=x[0]
h=v[1]
g=u[1]
f=x[1]
e=a0-((k-j)*i+(h-g)*f)
t=i*e+k
s=f*e+h
r=-i*a2+k
q=-f*a2+h
h=n[l].a
h[0]=(t+r)*0.5
h[1]=(s+q)*0.5
m[l]=(r-t)*x[0]+(q-s)*x[1]}break
case C.x:p=this.d
x=this.a
G.j(a1.b,b.b,x)
G.z(a1,b.c,p)
o=this.e
for(w=b.a,v=o.a,u=p.a,n=x.a,m=this.b,k=this.c,l=0;l<b.e;++l){if(l>=2)return H.a(w,l)
G.z(c,w[l].a,o)
j=v[0]
i=u[0]
h=n[0]
g=v[1]
f=u[1]
d=n[1]
e=a2-((j-i)*h+(g-f)*d)
r=h*e+j
q=d*e+g
t=-h*a0+j
s=-d*a0+g
g=m[l].a
g[0]=(t+r)*0.5
g[1]=(s+q)*0.5
k[l]=(t-r)*n[0]+(s-q)*n[1]}x.sj(0,-n[0])
x.sk(0,-n[1])
break}},
G:{
ik:function(){var z,y,x,w
z=new Float64Array(2)
y=new Array(2)
y.fixed$length=Array
y=H.f(y,[E.b])
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.ij(new E.b(z),y,x,new E.b(w),new E.b(new Float64Array(2)))
z.es()
return z}}},
aP:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,0cx,0cy,db,0dx,0dy,fr,fx,fy,go,id,k1,k2,k3,0aB:k4<,r1,r2,rx",
c3:function(a){var z,y,x,w,v,u
z=this.Q
if((z.a&2)===2)return
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new V.d9(0,0,0,0,new V.c7(1,65535,0),!1,new V.Q(new E.b(y),new E.b(x)),new V.Q(new E.b(w),new E.b(v)),new E.b(new Float64Array(2)))
u.fu(this,a)
if((this.b&32)===32)u.fC(z.b.a,this.d)
u.b=this.cy
this.cy=u;++this.db
u.c=this
if(u.a>0)this.hg()
z.a|=1
return u},
fw:function(a,b){var z=this.r1
z.a=a
z.e=b
return this.c3(z)},
c4:function(a){return this.fw(a,0)},
hg:function(){var z,y,x,w,v,u,t,s,r,q
this.fr=0
this.fx=0
this.fy=0
this.go=0
z=this.f
y=z.a
y.K()
x=this.a
if(x===C.e||x===C.H){y=this.d.a
z.b.h(y)
z.c.h(y)
z.d=z.e
return}x=this.Q.ch.a
w=x.l()
w.K()
v=x.l()
u=this.r2
for(t=this.cy,s=u.b.a;t!=null;t=t.b){r=t.a
if(r===0)continue
t.d.fs(u,r)
r=this.fr
q=u.a
this.fr=r+q
r=v.a
r[1]=s[1]
r[0]=s[0]
v.F(0,q)
w.q(0,v)
this.fy=this.fy+u.c}r=this.fr
if(r>0){r=1/r
this.fx=r
w.F(0,r)}else{this.fr=1
this.fx=1}r=this.fy
if(r>0&&(this.b&16)===0){r-=this.fr*w.E(w)
this.fy=r
this.go=1/r}else{this.fy=0
this.go=0}r=x.l()
q=z.c
r.h(q)
y.h(w)
z=z.b
G.o(this.d,y,z)
q.h(z)
v.h(q)
v.n(r)
v.T(this.x,r)
this.r.q(0,r)
x.b-=3},
aj:function(a){var z
if(a){z=this.b
if((z&2)===0){this.b=z|2
this.k3=0}}else{this.b&=4294967293
this.k3=0
this.r.K()
this.x=0
this.y.K()
this.z=0}},
cG:function(){var z,y,x,w,v,u,t
z=this.rx
y=z.b
x=this.f
y.a=Math.sin(x.d)
w=Math.cos(x.d)
y.b=w
v=z.a
u=x.b.a
x=x.a.a
v.sj(0,u[0]-w*x[0]+y.a*x[1])
v.sk(0,u[1]-y.a*x[0]-y.b*x[1])
for(t=this.cy,y=this.Q,x=this.d;t!=null;t=t.b)t.eg(y.b.a,z,x)},
b_:function(){var z,y,x,w,v
z=this.d
y=z.b
x=this.f
y.a=Math.sin(x.e)
w=Math.cos(x.e)
y.b=w
z=z.a
v=x.c.a
x=x.a.a
z.sj(0,v[0]-w*x[0]+y.a*x[1])
z.sk(0,v[1]-y.a*x[0]-y.b*x[1])},
cA:function(a){var z,y
if(this.a!==C.f&&a.a!==C.f)return!1
for(z=this.dx;z!=null;z=z.d){y=z.a
if(y==null?a==null:y===a)if(!z.b.y)return!1}return!0},
aR:function(a){var z,y,x,w,v
z=this.f
z.aR(a)
y=z.c
y.h(z.b)
x=z.d
z.e=x
w=this.d
v=w.b
v.I(x)
w=w.a
G.j(v,z.a,w)
w.F(0,-1)
w.q(0,y)},
u:function(a){return"Body[pos: "+this.d.a.u(0)+" linVel: "+this.r.u(0)+" angVel: "+H.e(this.x)+"]"}},
c_:{"^":"c;a,0aB:b<,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},
c0:{"^":"c;a,b",
u:function(a){return this.b}},
fb:{"^":"c;0a,0b,c,0d,0e,f",
fe:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.b
y=b.b
x=a.c
w=b.c
v=z.c
u=y.c
if(v==null?u==null:v===u)return
t=u.dy
for(;t!=null;){s=t.a
if(s==null?v==null:s===v){s=t.b
r=s.f
q=s.r
p=s.x
o=s.y
if((r==null?z==null:r===z)&&p===x&&(q==null?y==null:q===y)&&o===w)return
if((r==null?y==null:r===y)&&p===w&&(q==null?z==null:q===z)&&o===x)return}t=t.d}if(!u.cA(v))return
s=this.d.cB(z,y)
if(!s)return
n=this.f.h8(z,x,y,w)
if(n==null)return
z=n.f
y=n.r
v=z.c
u=y.c
n.b=null
s=this.b
n.c=s
if(s!=null)s.b=n
this.b=n
s=n.d
s.b=n
s.a=u
s.c=null
m=v.dy
s.d=m
if(m!=null)m.c=s
v.dy=s
s=n.e
s.b=n
s.a=v
s.c=null
m=u.dy
s.d=m
if(m!=null)m.c=s
u.dy=s
z.z
y.z
v.aj(!0)
u.aj(!0);++this.c},
c5:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.f
y=a.r
x=z.c
w=y.c
v=a.b
if(v!=null)v.c=a.c
u=a.c
if(u!=null)u.b=v
if(a===this.b)this.b=u
v=a.d
u=v.c
if(u!=null)u.d=v.d
t=v.d
if(t!=null)t.c=u
if(v===x.dy)x.dy=t
v=a.e
u=v.c
if(u!=null)u.d=v.d
t=v.d
if(t!=null)t.c=u
if(v===w.dy)w.dy=t
z=a.f
y=a.r
if(a.z.e>0){z.z
y.z
v=!0}else v=!1
if(v){z.c.aj(!0)
y.c.aj(!0)}s=z.d.a
r=y.d.a
v=this.f.fy
u=s.a
if(u>=v.length)return H.a(v,u)
u=v[u]
v=r.a
if(v>=u.length)return H.a(u,v)
q=u[v].a
q.toString
H.p(a,H.au(q,"a5",0))
v=q.a;(v&&C.a).m(v,--q.b,a);--this.c},
fl:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.b
for(;z!=null;){y=z.f
x=z.r
w=z.x
v=z.y
u=y.c
t=x.c
if((z.a&8)===8){if(!t.cA(u)){s=z.c
this.c5(z)
z=s
continue}r=this.d.cB(y,x)
if(!r){s=z.c
this.c5(z)
z=s
continue}z.a&=4294967287}q=(u.b&2)===2&&u.a!==C.e
p=(t.b&2)===2&&t.a!==C.e
if(!q&&!p){z=z.c
continue}r=y.r
if(w>=r.length)return H.a(r,w)
o=r[w].gbk()
r=x.r
if(v>=r.length)return H.a(r,v)
n=r[v].gbk()
if(!this.a.hk(o,n)){s=z.c
this.c5(z)
z=s
continue}z.cj(this.e)
z=z.c}},
$iskr:1},
aR:{"^":"S;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
az:function(a,b,c,d){this.br(a,b,c,d)},
ap:function(a,b,c){var z=this.fr
H.w(this.f.d,"$isc3").dD(z,this.x)
this.dx.fr.d5(a,z,b,H.w(this.r.d,"$isaU"),c)}},
aS:{"^":"S;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
az:function(a,b,c,d){this.br(a,b,c,d)},
ap:function(a,b,c){var z,y,x
z=this.fr
H.w(this.f.d,"$isc3").dD(z,this.x)
y=this.dx.fr
x=this.r.d
y.k3.d4(a,z,b,x,c)}},
aT:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ap:function(a,b,c){this.dx.fr.fm(a,H.w(this.f.d,"$isaU"),b,H.w(this.r.d,"$isaU"),c)}},
S:{"^":"c;",
az:["br",function(a,b,c,d){var z,y
this.a=4
this.f=a
this.r=c
this.x=b
this.y=d
this.z.e=0
this.b=null
this.c=null
z=this.d
z.b=null
z.c=null
z.d=null
z.a=null
z=this.e
z.b=null
z.c=null
z.d=null
z.a=null
this.Q=0
this.cx=Math.sqrt(a.e*c.e)
z=a.f
y=c.f
this.cy=z>y?z:y
this.db=0}],
cj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.dy
y=this.z
z.N(y)
x=this.a|=4
w=this.f
w.z
v=this.r
v.z
u=w.c
t=v.c
this.ap(y,u.d,t.d)
s=y.e>0
for(w=z.a,v=y.a,r=0;r<y.e;++r){if(r>=2)return H.a(v,r)
q=v[r]
q.b=0
q.c=0
p=q.d
for(o=0;o<z.e;++o){if(o>=2)return H.a(w,o)
n=w[o]
if(n.d.bo()===p.bo()){q.b=n.b
q.c=n.c
break}}}if(s!==((x&2)===2)){u.aj(!0)
t.aj(!0)}z=this.a
if(s)this.a=z|2
else this.a=z&4294967293
return}},
L:{"^":"c;0a,0b,0c,0d"},
bz:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,cx,cy,db",
ei:function(){var z,y
for(z=this.a,y=0;y<2;++y)C.a.m(z,y,new E.b(new Float64Array(2)))},
G:{
cW:function(){var z,y,x,w
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[E.b])
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.bz(z,new E.b(y),new E.b(x),0,0,0,0,new E.b(w),new E.b(new Float64Array(2)),0,0,0,0,0)
z.ei()
return z}}},
bA:{"^":"c;0a,b",
sd7:function(a){this.a=H.i(a,"$isa4",[V.S],"$asa4")}},
bC:{"^":"c;0a,0b,c,0d,0e",
sd6:function(a){this.b=H.i(a,"$isd",[V.S],"$asd")},
sbC:function(a){this.d=H.i(a,"$isd",[V.an],"$asd")},
sbD:function(a){this.e=H.i(a,"$isd",[V.aF],"$asd")}},
fc:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q",
sbT:function(a){this.b=H.i(a,"$isd",[V.an],"$asd")},
sbY:function(a){this.c=H.i(a,"$isd",[V.aF],"$asd")},
scW:function(a){this.d=H.i(a,"$isd",[V.bz],"$asd")},
sd_:function(a){this.e=H.i(a,"$isd",[V.bh],"$asd")},
sbM:function(a){this.f=H.i(a,"$isd",[V.S],"$asd")},
ej:function(){var z,y
z=new Array(256)
z.fixed$length=Array
this.scW(H.f(z,[V.bz]))
z=new Array(256)
z.fixed$length=Array
this.sd_(H.f(z,[V.bh]))
for(y=0;y<256;++y){z=this.d;(z&&C.a).m(z,y,V.cW())
z=this.e;(z&&C.a).m(z,y,V.cX())}},
dg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
this.a=a.a
z=a.c
this.r=z
y=this.d
x=y.length
if(x<z){z=new Array(Math.max(x*2,z))
z.fixed$length=Array
this.scW(H.f(z,[V.bz]))
z=this.d;(z&&C.a).ak(z,0,x,y,0)
for(;z=this.d,x<z.length;++x)(z&&C.a).m(z,x,V.cW())}z=this.e
x=z.length
y=this.r
if(x<y){y=new Array(Math.max(x*2,y))
y.fixed$length=Array
this.sd_(H.f(y,[V.bh]))
y=this.e;(y&&C.a).ak(y,0,x,z,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).m(z,x,V.cX())}this.sbT(a.d)
this.sbY(a.e)
this.sbM(a.b)
for(x=0;x<this.r;++x){z=this.f
if(x>=z.length)return H.a(z,x)
w=z[x]
v=w.f
u=w.r
t=v.d
s=u.d
r=t.b
q=s.b
p=v.c
o=u.c
n=w.z
m=n.e
z=this.e
if(x>=z.length)return H.a(z,x)
l=z[x]
l.Q=w.cx
l.ch=w.cy
l.cx=w.db
l.e=p.c
l.f=o.c
l.r=p.fx
l.x=o.fx
l.y=p.go
l.z=o.go
l.db=x
l.cy=m
l.d.K()
l.c.K()
z=this.d
if(x>=z.length)return H.a(z,x)
k=z[x]
k.d=p.c
k.e=o.c
k.f=p.fx
k.r=o.fx
z=k.x
j=p.f.a.a
z=z.a
z[1]=j[1]
z[0]=j[0]
z=k.y
j=o.f.a.a
z=z.a
z[1]=j[1]
z[0]=j[0]
k.z=p.go
k.Q=o.go
j=n.b.a
z=k.b.a
z[1]=j[1]
z[0]=j[0]
j=n.c.a
z=k.c.a
z[1]=j[1]
z[0]=j[0]
k.db=m
k.cx=r
k.cy=q
k.ch=n.d
for(z=n.a,i=0;i<m;++i){if(i>=2)return H.a(z,i)
h=z[i]
g=l.a[i]
y=this.a
if(y.f){y=y.c
g.c=y*h.b
g.d=y*h.c}else{g.c=0
g.d=0}y=g.a.a
y[0]=0
y[1]=0
y=g.b.a
y[0]=0
y[1]=0
g.e=0
g.f=0
g.r=0
y=k.a[i]
f=h.a.a
e=f[0]
y=y.a
y[0]=e
y[1]=f[1]}}},
hr:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
x=y[z]
w=x.e
v=x.f
u=x.r
t=x.y
s=x.x
r=x.z
q=x.cy
y=this.c
if(w>=y.length)return H.a(y,w)
p=y[w].gC()
y=this.c
if(w>=y.length)return H.a(y,w)
o=y[w].gp()
y=this.c
if(v>=y.length)return H.a(y,v)
n=y[v].gC()
y=this.c
if(v>=y.length)return H.a(y,v)
m=y[v].gp()
y=x.b.a
l=y[1]
k=-1*y[0]
for(j=p.a,i=n.a,h=0;h<q;++h){g=x.a
if(h>=2)return H.a(g,h)
f=g[h]
g=f.d
e=y[0]
d=f.c
c=l*g+e*d
b=k*g+y[1]*d
d=f.a.a
o-=t*(d[0]*b-d[1]*c)
j[0]=j[0]-c*u
j[1]=j[1]-b*u
d=f.b.a
m+=r*(d[0]*b-d[1]*c)
i[0]=i[0]+c*s
i[1]=i[1]+b*s}y=this.c
if(w>=y.length)return H.a(y,w)
y[w].sp(o)
y=this.c
if(v>=y.length)return H.a(y,v)
y[v].sp(m)}},
di:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
for(z=this.z,y=z.b,x=this.x,w=x.b,v=this.y,u=v.b,t=x.a.a,s=v.a.a,r=z.a.a,q=0;q<this.r;++q){p=this.e
if(q>=p.length)return H.a(p,q)
o=p[q]
p=this.d
if(q>=p.length)return H.a(p,q)
n=p[q]
m=n.cx
l=n.cy
p=this.f
k=o.db
if(k>=p.length)return H.a(p,k)
j=p[k].z
i=o.e
h=o.f
g=o.r
f=o.x
e=o.y
d=o.z
c=n.x
b=n.y
k=this.b
if(i>=k.length)return H.a(k,i)
a=k[i].gw()
k=this.b
if(i>=k.length)return H.a(k,i)
a0=k[i].gt()
k=this.c
if(i>=k.length)return H.a(k,i)
a1=k[i].gC()
k=this.c
if(i>=k.length)return H.a(k,i)
a2=k[i].gp()
k=this.b
if(h>=k.length)return H.a(k,h)
a3=k[h].gw()
k=this.b
if(h>=k.length)return H.a(k,h)
a4=k[h].gt()
k=this.c
if(h>=k.length)return H.a(k,h)
a5=k[h].gC()
k=this.c
if(h>=k.length)return H.a(k,h)
a6=k[h].gp()
w.a=Math.sin(a0)
w.b=Math.cos(a0)
u.a=Math.sin(a4)
k=Math.cos(a4)
u.b=k
p=a.a
a7=p[0]
a8=w.b
a9=c.a
b0=a9[0]
b1=w.a
t[0]=a7-(a8*b0-b1*a9[1])
t[1]=p[1]-(b1*a9[0]+a8*a9[1])
a9=a3.a
a8=a9[0]
b1=b.a
b0=b1[0]
a7=u.a
s[0]=a8-(k*b0-a7*b1[1])
s[1]=a9[1]-(a7*b1[0]+k*b1[1])
z.fW(0,j,x,m,v,l)
b1=o.b.a
b1[0]=r[0]
b1[1]=r[1]
b2=o.cy
for(k=-$.jH,a7=a5.a,a8=-a6,b0=a1.a,b3=-a2,b4=g+f,b5=0;b5<b2;++b5){b6=o.a
if(b5>=2)return H.a(b6,b5)
b7=b6[b5]
b8=y[b5]
b9=b7.a
c0=b7.b
b6=b8.a
c1=b9.a
c1[0]=b6[0]-p[0]
c1[1]=b6[1]-p[1]
c2=c0.a
c2[0]=b6[0]-a9[0]
c2[1]=b6[1]-a9[1]
b6=c1[0]
c3=b1[1]
c1=c1[1]
c4=b1[0]
c5=b6*c3-c1*c4
c6=c2[0]
c2=c2[1]
c7=c6*c3-c2*c4
c8=b4+e*c5*c5+d*c7*c7
b7.e=c8>0?1/c8:0
c9=-1*c4
d0=b6*c9-c1*c3
d1=c6*c9-c2*c3
d2=b4+e*d0*d0+d*d1*d1
b7.f=d2>0?1/d2:0
b7.r=0
d3=c4*(a7[0]+a8*c2-b0[0]-b3*c1)+c3*(a7[1]+a6*c6-b0[1]-a2*b6)
if(d3<k)b7.r=-o.ch*d3}if(o.cy===2){p=o.a
d4=p[0]
d5=p[1]
p=d4.a.a
k=p[0]
a7=b1[1]
p=p[1]
b1=b1[0]
d6=k*a7-p*b1
p=d4.b.a
d7=p[0]*a7-p[1]*b1
p=d5.a.a
d8=p[0]*a7-p[1]*b1
p=d5.b.a
d9=p[0]*a7-p[1]*b1
b1=e*d6
p=d*d7
e0=b4+b1*d6+p*d7
e1=b4+e*d8*d8+d*d9*d9
e2=b4+b1*d8+p*d9
if(e0*e0<100*(e0*e1-e2*e2)){p=o.d
k=p.a
k[3]=e1
k[2]=e2
k[1]=e2
k[0]=e0
k=o.c
k.h(p)
k.bB()}else o.cy=1}}},
cD:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
x=y[z]
w=x.e
v=x.f
u=x.r
t=x.x
s=x.y
r=x.z
q=x.cy
y=this.c
if(w>=y.length)return H.a(y,w)
p=y[w].gC()
y=this.c
if(w>=y.length)return H.a(y,w)
o=y[w].gp()
y=this.c
if(v>=y.length)return H.a(y,v)
n=y[v].gC()
y=this.c
if(v>=y.length)return H.a(y,v)
m=y[v].gp()
y=x.b.a
l=y[0]
k=y[1]
j=-1*l
i=x.Q
for(y=n.a,h=p.a,g=0;g<q;++g){f=x.a
if(g>=2)return H.a(f,g)
e=f[g]
d=e.a
f=e.b.a
c=f[1]
b=y[0]
a=h[0]
a0=d.a
a1=a0[1]
a2=f[0]
a3=y[1]
a4=h[1]
a5=a0[0]
a6=x.cx
a7=e.f
a8=i*e.c
a9=e.d
b0=Math.max(-a8,Math.min(a9+a7*-((-m*c+b-a+o*a1)*k+(m*a2+a3-a4-o*a5)*j-a6),a8))
b1=b0-a9
e.d=b0
b2=k*b1
b3=j*b1
h[0]=a-b2*u
h[1]=a4-b3*u
o-=s*(a0[0]*b3-a0[1]*b2)
y[0]=y[0]+b2*t
y[1]=y[1]+b3*t
m+=r*(f[0]*b3-f[1]*b2)}f=x.cy
c=x.a
b=-m
if(f===1){e=c[0]
f=e.b.a
c=f[1]
a=y[0]
a0=h[0]
a1=e.a.a
a2=a1[1]
a3=f[0]
a4=y[1]
a5=h[1]
a6=a1[0]
a7=e.e
a9=e.r
b4=e.c
d=b4+-a7*((b*c+a-a0+o*a2)*l+(m*a3+a4-a5-o*a6)*k-a9)
b0=d>0?d:0
b1=b0-b4
e.c=b0
b2=l*b1
b3=k*b1
h[0]=a0-b2*u
h[1]=a5-b3*u
o-=s*(a1[0]*b3-a1[1]*b2)
y[0]=y[0]+b2*t
y[1]=y[1]+b3*t
m+=r*(f[0]*b3-f[1]*b2)}else{b5=c[0]
b6=c[1]
b7=b5.a
b8=b5.b
b9=b6.a
c0=b6.b
c1=b5.c
c2=b6.c
f=b8.a
c=f[1]
a=y[0]
a0=h[0]
a1=b7.a
a2=a1[1]
a3=f[0]
a4=y[1]
a5=h[1]
a6=a1[0]
a7=c0.a
a9=a7[1]
b4=b9.a
c3=b4[1]
c4=a7[0]
c5=b4[0]
c6=b5.r
c7=b6.r
c8=x.d.a
c9=c8[0]
d0=c8[2]
d1=(b*c+a-a0+o*a2)*l+(m*a3+a4-a5-o*a6)*k-c6-(c9*c1+d0*c2)
c9=c8[1]
d2=(b*a9+a-a0+o*c3)*l+(m*c4+a4-a5-o*c5)*k-c7-(c9*c1+c8[3]*c2)
$loop$0:{c=x.c.a
d3=(c[0]*d1+c[2]*d2)*-1
d4=(c[1]*d1+c[3]*d2)*-1
if(d3>=0&&d4>=0){d5=d3-c1
d6=d4-c2
d7=d5*l
d8=d5*k
d9=d6*l
e0=d6*k
c=d7+d9
h[0]=a0-u*c
a0=d8+e0
h[1]=a5-u*a0
y[0]=y[0]+t*c
y[1]=y[1]+t*a0
o-=s*(a1[0]*d8-a1[1]*d7+(b4[0]*e0-b4[1]*d9))
m+=r*(f[0]*d8-f[1]*d7+(a7[0]*e0-a7[1]*d9))
b5.c=d3
b6.c=d4
break $loop$0}d3=-b5.e*d1
if(d3>=0&&c9*d3+d2>=0){d5=d3-c1
d6=0-c2
d7=l*d5
d8=k*d5
d9=l*d6
e0=k*d6
c=d7+d9
h[0]=a0-u*c
a0=d8+e0
h[1]=a5-u*a0
y[0]=y[0]+t*c
y[1]=y[1]+t*a0
o-=s*(a1[0]*d8-a1[1]*d7+(b4[0]*e0-b4[1]*d9))
m+=r*(f[0]*d8-f[1]*d7+(a7[0]*e0-a7[1]*d9))
b5.c=d3
b6.c=0
break $loop$0}d4=-b6.e*d2
if(d4>=0&&d0*d4+d1>=0){d5=0-c1
d6=d4-c2
d7=l*d5
d8=k*d5
d9=l*d6
e0=k*d6
c=d7+d9
h[0]=a0-u*c
a0=d8+e0
h[1]=a5-u*a0
y[0]=y[0]+t*c
y[1]=y[1]+t*a0
o-=s*(a1[0]*d8-a1[1]*d7+(b4[0]*e0-b4[1]*d9))
m+=r*(f[0]*d8-f[1]*d7+(a7[0]*e0-a7[1]*d9))
b5.c=0
b6.c=d4
break $loop$0}if(d1>=0&&d2>=0){d5=0-c1
d6=0-c2
d7=l*d5
d8=k*d5
d9=l*d6
e0=k*d6
c=d7+d9
h[0]=a0-u*c
a0=d8+e0
h[1]=a5-u*a0
y[0]=y[0]+t*c
y[1]=y[1]+t*a0
o-=s*(a1[0]*d8-a1[1]*d7+(b4[0]*e0-b4[1]*d9))
m+=r*(f[0]*d8-f[1]*d7+(a7[0]*e0-a7[1]*d9))
b5.c=0
b6.c=0
break $loop$0}break $loop$0}}y=this.c
if(w>=y.length)return H.a(y,w)
y[w].sp(o)
y=this.c
if(v>=y.length)return H.a(y,v)
y[v].sp(m)}},
e8:function(){var z,y,x,w,v,u
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
x=y[z]
y=this.f
w=x.db
if(w>=y.length)return H.a(y,w)
for(y=y[w].z.a,v=0;v<x.cy;++v){if(v>=2)return H.a(y,v)
w=y[v]
u=x.a[v]
w.b=u.c
w.c=u.d}}},
dT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
for(z=this.x,y=z.b,x=this.y,w=x.b,v=z.a.a,u=x.a.a,t=this.Q,s=t.b.a,r=t.a.a,q=0,p=0;p<this.r;++p){o=this.d
if(p>=o.length)return H.a(o,p)
n=o[p]
m=n.d
l=n.e
k=n.f
j=n.z
o=n.x.a
i=o[0]
h=o[1]
g=n.r
f=n.Q
o=n.y.a
e=o[0]
d=o[1]
c=n.db
o=this.b
if(m>=o.length)return H.a(o,m)
b=o[m].gw()
o=this.b
if(m>=o.length)return H.a(o,m)
a=o[m].gt()
o=this.b
if(l>=o.length)return H.a(o,l)
a0=o[l].gw()
o=this.b
if(l>=o.length)return H.a(o,l)
a1=o[l].gt()
for(o=b.a,a2=a0.a,a3=k+g,a4=0;a4<c;++a4){y.a=Math.sin(a)
y.b=Math.cos(a)
w.a=Math.sin(a1)
a5=Math.cos(a1)
w.b=a5
a6=o[0]
a7=y.b
a8=y.a
v[0]=a6-a7*i+a8*h
v[1]=o[1]-a8*i-a7*h
a7=a2[0]
a8=w.a
u[0]=a7-a5*e+a8*d
u[1]=a2[1]-a8*e-a5*d
t.dh(0,n,z,x,a4)
a9=t.c
a5=s[0]
a8=o[0]
b0=a5-a8
a7=s[1]
a6=o[1]
b1=a7-a6
b2=a5-a2[0]
b3=a7-a2[1]
q=Math.min(q,a9)
b4=Math.max(-0.2,Math.min(0.2*(a9+0.005),0))
a7=r[1]
a5=r[0]
b5=b0*a7-b1*a5
b6=b2*a7-b3*a5
b7=a3+j*b5*b5+f*b6*b6
b8=b7>0?-b4/b7:0
b9=a5*b8
c0=a7*b8
o[0]=a8-b9*k
o[1]=a6-c0*k
a-=j*(b0*c0-b1*b9)
a2[0]=a2[0]+b9*g
a2[1]=a2[1]+c0*g
a1+=f*(b2*c0-b3*b9)}o=this.b
if(m>=o.length)return H.a(o,m)
o[m].st(a)
o=this.b
if(l>=o.length)return H.a(o,l)
o[l].st(a1)}return q>=-0.015},
e0:function(c3,c4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
for(z=this.x,y=z.b,x=this.y,w=x.b,v=z.a.a,u=x.a.a,t=this.Q,s=t.b.a,r=t.a.a,q=0,p=0;p<this.r;++p){o=this.d
if(p>=o.length)return H.a(o,p)
n=o[p]
m=n.d
l=n.e
k=n.x
j=n.y
o=k.a
i=o[0]
h=o[1]
o=j.a
g=o[0]
f=o[1]
e=n.db
if(m===c3||m===c4){d=n.f
c=n.z}else{d=0
c=0}if(l===c3||l===c4){b=n.r
a=n.Q}else{b=0
a=0}o=this.b
if(m>=o.length)return H.a(o,m)
a0=o[m].gw()
o=this.b
if(m>=o.length)return H.a(o,m)
a1=o[m].gt()
o=this.b
if(l>=o.length)return H.a(o,l)
a2=o[l].gw()
o=this.b
if(l>=o.length)return H.a(o,l)
a3=o[l].gt()
for(o=a0.a,a4=a2.a,a5=d+b,a6=0;a6<e;++a6){y.a=Math.sin(a1)
y.b=Math.cos(a1)
w.a=Math.sin(a3)
a7=Math.cos(a3)
w.b=a7
a8=o[0]
a9=y.b
b0=y.a
v[0]=a8-a9*i+b0*h
v[1]=o[1]-b0*i-a9*h
a9=a4[0]
b0=w.a
u[0]=a9-a7*g+b0*f
u[1]=a4[1]-b0*g-a7*f
t.dh(0,n,z,x,a6)
b1=t.c
a7=s[0]
b0=o[0]
b2=a7-b0
a9=s[1]
a8=o[1]
b3=a9-a8
b4=a7-a4[0]
b5=a9-a4[1]
q=Math.min(q,b1)
b6=Math.max(-0.2,Math.min(0.75*(b1+0.005),0))
a9=r[1]
a7=r[0]
b7=b2*a9-b3*a7
b8=b4*a9-b5*a7
b9=a5+c*b7*b7+a*b8*b8
c0=b9>0?-b6/b9:0
c1=a7*c0
c2=a9*c0
o[0]=b0-c1*d
o[1]=a8-c2*d
a1-=c*(b2*c2-b3*c1)
a4[0]=a4[0]+c1*b
a4[1]=a4[1]+c2*b
a3+=a*(b4*c2-b5*c1)}o=this.b
if(m>=o.length)return H.a(o,m)
o[m].st(a1)
o=this.b
if(l>=o.length)return H.a(o,l)
o[l].st(a3)}return q>=-0.0075},
G:{
bB:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=V.ik()
w=new Float64Array(2)
z=new V.fc(0,new G.E(new E.b(z),new G.A(0,1)),new G.E(new E.b(y),new G.A(0,1)),x,new V.hA(new E.b(w),new E.b(new Float64Array(2)),0))
z.ej()
return z}}},
hA:{"^":"c;a,b,c",
dh:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c.b
y=d.b
x=b.a
if(a0>=2)return H.a(x,a0)
w=x[a0]
switch(b.ch){case C.o:v=x[0]
x=z.b
u=b.c.a
t=u[0]
s=z.a
u=u[1]
r=c.a.a
q=x*t-s*u+r[0]
p=s*t+x*u+r[1]
r=y.b
u=v.a
x=u[0]
t=y.a
u=u[1]
s=d.a.a
o=r*x-t*u+s[0]
n=t*x+r*u+s[1]
s=this.a
u=o-q
s.sj(0,u)
r=n-p
s.sk(0,r)
s.Z()
x=this.b
x.sj(0,(q+o)*0.5)
x.sk(0,(p+n)*0.5)
s=s.a
this.c=u*s[0]+r*s[1]-b.cx-b.cy
break
case C.h:x=this.a
u=b.b.a
x.sj(0,z.b*u[0]-z.a*u[1])
x.sk(0,z.a*u[0]+z.b*u[1])
u=z.b
t=b.c.a
s=t[0]
r=z.a
t=t[1]
m=c.a.a
l=m[0]
m=m[1]
k=y.b
j=w.a
i=j[0]
h=y.a
j=j[1]
g=d.a.a
f=k*i-h*j+g[0]
e=h*i+k*j+g[1]
x=x.a
this.c=(f-(u*s-r*t+l))*x[0]+(e-(r*s+u*t+m))*x[1]-b.cx-b.cy
x=this.b
x.sj(0,f)
x.sk(0,e)
break
case C.x:x=this.a
u=b.b.a
x.sj(0,y.b*u[0]-y.a*u[1])
x.sk(0,y.a*u[0]+y.b*u[1])
u=y.b
t=b.c.a
s=t[0]
r=y.a
t=t[1]
m=d.a.a
l=m[0]
m=m[1]
k=z.b
j=w.a
i=j[0]
h=z.a
j=j[1]
g=c.a.a
f=k*i-h*j+g[0]
e=h*i+k*j+g[1]
g=x.a
this.c=(f-(u*s-r*t+l))*g[0]+(e-(r*s+u*t+m))*g[1]-b.cx-b.cy
m=this.b
m.sj(0,f)
m.sk(0,e)
x.sj(0,g[0]*-1)
x.sk(0,g[1]*-1)
break}}},
e5:{"^":"c;a,b,c,d,e,f,r"},
bh:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
ek:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.m(z,y,new V.e5(new E.b(x),new E.b(new Float64Array(2)),0,0,0,0,0))}},
G:{
cX:function(){var z,y,x
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.e5])
y=new Float64Array(2)
x=new Float64Array(4)
z=new V.bh(z,new E.b(y),new E.X(x),new E.X(new Float64Array(4)),0,0,0,0,0,0,0,0,0,0,0)
z.ek()
return z}}},
aW:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
az:function(a,b,c,d){this.br(a,b,c,d)},
ap:function(a,b,c){this.dx.fr.d5(a,H.w(this.f.d,"$isaY"),b,H.w(this.r.d,"$isaU"),c)}},
aX:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
az:function(a,b,c,d){this.br(a,b,c,d)},
ap:function(a,b,c){var z,y,x
z=this.dx.fr
y=H.w(this.f.d,"$isaY")
x=this.r.d
z.k3.d4(a,y,b,x,c)}},
b4:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ap:function(a,b,c){this.dx.fr.fn(a,this.f.d,b,H.w(this.r.d,"$isaU"),c)}},
b5:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ap:function(a,b,c){this.dx.fr.fo(a,this.f.d,b,this.r.d,c)}},
an:{"^":"c;w:a<,t:b<",
st:function(a){this.b=H.be(a)}},
aF:{"^":"c;C:a<,p:b<",
sp:function(a){this.b=H.be(a)}},
c7:{"^":"c;a,b,c"},
d9:{"^":"c;a,0b,0c,0d,e,f,0r,x,y,z,0aB:Q<,ch,cx,cy",
scX:function(a){this.r=H.i(a,"$isd",[V.bi],"$asd")},
fu:function(a,b){var z,y,x,w,v
this.Q=b.b
this.e=b.c
this.f=b.d
this.c=a
this.b=null
z=this.y
y=b.r
z.a=y.a
z.b=y.b
z.c=y.c
b.f
this.z=!1
this.d=b.a.fk(0)
if(this.r==null){z=new Array(1)
z.fixed$length=Array
this.scX(H.f(z,[V.bi]))
for(x=0;x<1;++x){z=this.r
y=new Float64Array(2);(z&&C.a).m(z,x,new V.bi(new V.Q(new E.b(y),new E.b(new Float64Array(2))),0,0))
z=this.r
if(x>=z.length)return H.a(z,x)
z[x].sde(null)
z=this.r
if(x>=z.length)return H.a(z,x)
z[x].sbk(-1)}}z=this.r
y=z.length
if(y<1){w=Math.max(y*2,1)
v=new Array(w)
v.fixed$length=Array
this.scX(H.f(v,[V.bi]))
v=this.r;(v&&C.a).ak(v,0,y,z,0)
for(x=0;x<w;++x){z=this.r
y=new Float64Array(2);(z&&C.a).m(z,x,new V.bi(new V.Q(new E.b(y),new E.b(new Float64Array(2))),0,0))
z=this.r
if(x>=z.length)return H.a(z,x)
z[x].sde(null)
z=this.r
if(x>=z.length)return H.a(z,x)
z[x].sbk(-1)}}this.x=0
this.a=b.e},
fC:function(a,b){var z,y,x,w,v,u,t,s,r
this.d.toString
this.x=1
for(z=a.a,y=0;y<this.x;++y){x=this.r
if(y>=x.length)return H.a(x,y)
w=x[y]
x=this.d
v=w.a
x.c0(v,b,y)
u=z.cL()
t=u.f
s=u.a
x=v.a.a
r=s.a.a
r[0]=x[0]-0.1
r[1]=x[1]-0.1
v=v.b.a
x=s.b.a
x[0]=v[0]+0.1
x[1]=v[1]+0.1
u.b=w
z.cT(t);++a.b
a.d3(t)
w.d=t
w.b=this
w.c=y}},
eg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.x===0)return
for(z=this.cy,y=c.a.a,x=b.a.a,w=z.a,v=a.a,u=this.ch,t=this.cx,s=u.a.a,r=u.b.a,q=0;q<this.x;++q){p=this.r
if(q>=p.length)return H.a(p,q)
o=p[q]
this.d.c0(u,b,o.c)
this.d.c0(t,c,o.c)
p=o.a
n=s[0]
m=t.a.a
l=m[0]
n=n<l?n:l
l=p.a.a
l[0]=n
n=s[1]
m=m[1]
l[1]=n<m?n:m
n=r[0]
m=t.b.a
l=m[0]
n=n>l?n:l
l=p.b.a
l[0]=n
n=r[1]
m=m[1]
l[1]=n>m?n:m
w[0]=y[0]-x[0]
w[1]=y[1]-x[1]
n=o.d
if(v.h6(n,p,z))a.d3(n)}}},
da:{"^":"c;0a,0aB:b<,c,d,e,f,r"},
bi:{"^":"c;aQ:a<,0b,c,bk:d<",
sde:function(a){this.b=H.l(a,"$isd9")},
sbk:function(a){this.d=H.k(a)}},
dd:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
seB:function(a){this.b=H.i(a,"$isd",[V.aP],"$asd")},
sbM:function(a){this.c=H.i(a,"$isd",[V.S],"$asd")},
seU:function(a){this.d=H.i(a,"$isd",[V.M],"$asd")},
sbT:function(a){this.e=H.i(a,"$isd",[V.an],"$asd")},
sbY:function(a){this.f=H.i(a,"$isd",[V.aF],"$asd")},
az:function(a,b,c,d){var z,y,x
this.z=a
this.Q=b
this.ch=c
this.r=0
this.y=0
this.x=0
this.a=d
z=this.b
if(z==null||a>z.length){z=new Array(a)
z.fixed$length=Array
this.seB(H.f(z,[V.aP]))}z=this.d
if(z==null||this.ch>z.length){z=new Array(this.ch)
z.fixed$length=Array
this.seU(H.f(z,[V.M]))}z=this.c
if(z==null||this.Q>z.length){z=new Array(this.Q)
z.fixed$length=Array
this.sbM(H.f(z,[V.S]))}y=this.f
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.aF])}z=new Array(this.z)
z.fixed$length=Array
this.sbY(H.f(z,[V.aF]))
z=this.f
x=y.length;(z&&C.a).ak(z,0,x,y,0)
for(;z=this.f,x<z.length;++x)(z&&C.a).m(z,x,new V.aF(new E.b(new Float64Array(2)),0))}y=this.e
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.an])}z=new Array(this.z)
z.fixed$length=Array
this.sbT(H.f(z,[V.an]))
z=this.e
x=y.length;(z&&C.a).ak(z,0,x,y,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).m(z,x,new V.an(new E.b(new Float64Array(2)),0))}},
dM:function(a1,a2,a3,a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=a2.a
for(y=a3.a,x=0;x<this.r;++x){w=this.b
if(x>=w.length)return H.a(w,x)
v=w[x]
u=v.f
t=u.e
s=v.r
r=v.x
q=u.c.a
w=u.b.a
w[1]=q[1]
w[0]=q[0]
u.d=t
if(v.a===C.f){w=s.a
p=w[0]
o=v.k2
n=y[0]
m=v.fx
l=v.y.a
w[0]=p+z*(o*n+m*l[0])
w[1]=w[1]+z*(o*y[1]+m*l[1])
l=v.go
m=v.z
o=w[0]
n=1/(1+z*v.id)
w[0]=o*n
w[1]=w[1]*n
r=(r+z*l*m)*(1/(1+z*v.k1))}w=this.e
if(x>=w.length)return H.a(w,x)
J.bY(w[x].gw(),q[0])
w=this.e
if(x>=w.length)return H.a(w,x)
J.bZ(w[x].gw(),q[1])
w=this.e
if(x>=w.length)return H.a(w,x)
w[x].st(t)
w=this.f
if(x>=w.length)return H.a(w,x)
p=s.a
w[x].gC().a[0]=p[0]
w=this.f
if(x>=w.length)return H.a(w,x)
w[x].gC().a[1]=p[1]
p=this.f
if(x>=p.length)return H.a(p,x)
p[x].sp(r)}y=this.cy
y.a=a2
y.sbC(this.e)
y.sbD(this.f)
w=this.db
w.a=a2
w.sd6(this.c)
w.c=this.y
w.sbC(this.e)
w.sbD(this.f)
p=this.cx
p.dg(w)
p.di()
if(a2.f)p.hr()
for(x=0;x<this.x;++x){w=this.d
if(x>=w.length)return H.a(w,x)
w[x].ah(y)}for(x=0;x<a2.d;++x){for(k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.a(w,k)
w[k].af(y)}p.cD()}p.e8()
for(x=0;x<this.r;++x){w=this.e
if(x>=w.length)return H.a(w,x)
j=w[x].gw()
w=this.e
if(x>=w.length)return H.a(w,x)
t=w[x].gt()
w=this.f
if(x>=w.length)return H.a(w,x)
s=w[x].gC()
w=this.f
if(x>=w.length)return H.a(w,x)
r=w[x].gp()
w=s.a
i=w[0]*z
h=w[1]*z
o=i*i+h*h
if(o>4){g=2/Math.sqrt(o)
w[0]=w[0]*g
w[1]=w[1]*g}f=z*r
if(f*f>2.4674011002723395)r*=1.5707963267948966/Math.abs(f)
o=j.a
o[0]=o[0]+z*w[0]
o[1]=o[1]+z*w[1]
w=this.e
if(x>=w.length)return H.a(w,x)
w[x].st(t+z*r)
w=this.f
if(x>=w.length)return H.a(w,x)
w[x].sp(r)}x=0
while(!0){if(!(x<a2.e)){e=!1
break}d=p.dT()
for(c=!0,k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.a(w,k)
b=w[k].ae(y)
c=c&&b}if(d&&c){e=!0
break}++x}for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
a=y[x]
y=a.f
w=this.e
if(x>=w.length)return H.a(w,x)
o=y.c.a
o[0]=J.a1(w[x].gw())
w=this.e
if(x>=w.length)return H.a(w,x)
o[1]=J.a2(w[x].gw())
w=this.e
if(x>=w.length)return H.a(w,x)
y.e=w[x].gt()
w=a.r
y=this.f
if(x>=y.length)return H.a(y,x)
w=w.a
w[0]=y[x].gC().a[0]
y=this.f
if(x>=y.length)return H.a(y,x)
w[1]=y[x].gC().a[1]
y=this.f
if(x>=y.length)return H.a(y,x)
a.x=H.be(y[x].gp())
a.b_()}this.ds(p.e)
if(a4){for(a0=17976931348623157e292,x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
v=y[x]
if(v.a===C.e)continue
if((v.b&4)!==0){y=v.x
if(!(y*y>0.0012184696791468343)){y=v.r
y=y.E(y)>0.0001}else y=!0}else y=!0
if(y){v.k3=0
a0=0}else{y=v.k3+=z
a0=Math.min(a0,y)}}if(a0>=0.5&&e)for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
y[x].aj(!1)}}},
e_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
y=y[z].gw()
x=this.b
if(z>=x.length)return H.a(x,z)
J.bY(y,x[z].f.c.a[0])
x=this.e
if(z>=x.length)return H.a(x,z)
x=x[z].gw()
y=this.b
if(z>=y.length)return H.a(y,z)
J.bZ(x,y[z].f.c.a[1])
y=this.e
if(z>=y.length)return H.a(y,z)
y=y[z]
x=this.b
if(z>=x.length)return H.a(x,z)
y.st(x[z].f.e)
x=this.f
if(z>=x.length)return H.a(x,z)
x=x[z].gC()
y=this.b
if(z>=y.length)return H.a(y,z)
x.a[0]=y[z].r.a[0]
y=this.f
if(z>=y.length)return H.a(y,z)
y=y[z].gC()
x=this.b
if(z>=x.length)return H.a(x,z)
y.a[1]=x[z].r.a[1]
y=this.f
if(z>=y.length)return H.a(y,z)
y[z].sp(x[z].x)}y=this.dy
y.sd6(this.c)
y.c=this.y
y.a=a
y.sbC(this.e)
y.sbD(this.f)
x=this.dx
x.dg(y)
for(z=0;z<a.e;++z)if(x.e0(b,c))break
y=this.b
if(b>=y.length)return H.a(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.a(w,b)
y.b.sj(0,J.a1(w[b].gw()))
w=this.b
if(b>=w.length)return H.a(w,b)
w=w[b].f
y=this.e
if(b>=y.length)return H.a(y,b)
w.b.sk(0,J.a2(y[b].gw()))
y=this.b
if(b>=y.length)return H.a(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.a(w,b)
y.d=w[b].gt()
w=this.b
if(c>=w.length)return H.a(w,c)
w=w[c].f
y=this.e
if(c>=y.length)return H.a(y,c)
w.b.h(y[c].gw())
y=this.b
if(c>=y.length)return H.a(y,c)
y=y[c].f
w=this.e
if(c>=w.length)return H.a(w,c)
y.d=w[c].gt()
x.di()
for(z=0;z<a.d;++z)x.cD()
v=a.a
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
u=y[z].gw()
y=this.e
if(z>=y.length)return H.a(y,z)
t=y[z].gt()
y=this.f
if(z>=y.length)return H.a(y,z)
s=y[z].gC()
y=this.f
if(z>=y.length)return H.a(y,z)
r=y[z].gp()
y=s.a
q=y[0]*v
p=y[1]*v
w=q*q+p*p
if(w>4)s.F(0,2/Math.sqrt(w))
o=v*r
if(o*o>2.4674011002723395)r*=1.5707963267948966/Math.abs(o)
w=u.a
w[0]=w[0]+y[0]*v
w[1]=w[1]+y[1]*v
t+=v*r
n=this.e
if(z>=n.length)return H.a(n,z)
J.bY(n[z].gw(),w[0])
n=this.e
if(z>=n.length)return H.a(n,z)
J.bZ(n[z].gw(),w[1])
n=this.e
if(z>=n.length)return H.a(n,z)
n[z].st(t)
n=this.f
if(z>=n.length)return H.a(n,z)
n[z].gC().a[0]=y[0]
n=this.f
if(z>=n.length)return H.a(n,z)
n[z].gC().a[1]=y[1]
n=this.f
if(z>=n.length)return H.a(n,z)
n[z].sp(r)
n=this.b
if(z>=n.length)return H.a(n,z)
m=n[z]
n=m.f
l=n.c.a
l[0]=w[0]
l[1]=w[1]
n.e=t
n=m.r.a
n[0]=y[0]
n[1]=y[1]
m.x=r
m.b_()}this.ds(x.e)},
ds:function(a){H.i(a,"$isd",[V.bh],"$asd")
return}},
f8:{"^":"M;ch,0cx,cy,0db,dx,0dy,0fr,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
eh:function(a,b){var z,y,x,w,v
this.dy=a
z=b.gd2()
if(z.gD(z).hw(0,2))throw H.h("You cannot create a constant volume joint with less than three _bodies.")
z=this.ch
y=z.gD(z)
this.cx=new Float64Array(y)
for(x=0;y=this.cx.length,x<y;++x){w=x===y-1?0:x+1
y=z.i(0,x).gbl().H(0,z.i(0,w).gbl())
v=y.gD(y)
y=this.cx;(y&&C.i).m(y,x,v)}this.cy=this.dB()
b.gh_()
z=b.gh_()
z.gD(z)
z=b.gd2()
z.gD(z)
throw H.h("Incorrect joint definition.  Joints have to correspond to the _bodies")},
dB:function(){var z,y,x,w,v,u,t
for(z=this.ch,y=0,x=0;C.c.L(x,z.gD(z));x=w){z.gD(z).H(0,1)
w=x+1
v=z.i(0,x).gbl()
v=v.gj(v)
u=z.i(0,w).gbl()
u=v.v(0,u.gk(u))
v=z.i(0,w).gbl()
v=v.gj(v)
t=z.i(0,x).gbl()
y=C.b.B(y,u.H(0,v.v(0,t.gk(t))))}return y*0.5},
dH:function(a){var z,y,x,w,v
H.i(a,"$isd",[V.an],"$asd")
for(z=this.ch,y=a&&C.a,x=0,w=0;C.c.L(w,z.gD(z));w=v){z.gD(z).H(0,1)
v=w+1
x+=J.a1(y.i(a,z.i(0,w).gX()).gw())*J.a2(C.a.i(a,z.i(0,v).gX()).gw())-J.a1(C.a.i(a,z.i(0,v).gX()).gw())*J.a2(C.a.i(a,z.i(0,w).gX()).gw())}return x*0.5},
eH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
H.i(a,"$isd",[V.an],"$asd")
for(z=this.ch,y=a&&C.a,x=0,w=0;C.c.L(w,z.gD(z));w=v){z.gD(z).H(0,1)
v=w+1
u=J.a1(y.i(a,z.i(0,v).gX()).gw())-J.a1(C.a.i(a,z.i(0,w).gX()).gw())
t=J.a2(C.a.i(a,z.i(0,v).gX()).gw())-J.a2(C.a.i(a,z.i(0,w).gX()).gw())
s=Math.sqrt(u*u+t*t)
if(s<11920928955078125e-23)s=1
r=this.db
if(w>=r.length)return H.a(r,w)
r[w].a[0]=t/s
r[w].a[1]=-u/s
x+=s}r=this.Q.a.l()
q=0.5*(this.cy-this.dH(a))/x
for(p=!0,w=0;C.c.L(w,z.gD(z));w=v){z.gD(z).H(0,1)
v=w+1
o=this.db
n=o.length
if(w>=n)return H.a(o,w)
m=o[w].a
l=m[0]
if(v>=n)return H.a(o,v)
o=o[v].a
n=o[0]
m=m[1]
o=o[1]
k=r.a
k[0]=q*(l+n)
k[1]=q*(m+o)
j=r.gV()
if(j>0.04000000000000001)r.F(0,0.2/Math.sqrt(j))
if(j>0.000025)p=!1
o=y.i(a,z.i(0,v).gX()).gw()
o.a[0]=o.gbX()[0]+k[0]
o=C.a.i(a,z.i(0,v).gX()).gw()
o.a[1]=o.gbX()[1]+k[1]}--this.Q.a.b
return p},
ah:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.b
x=this.ch
w=this.Q.cs(x.gD(x))
for(v=J.W(w),u=y&&C.a,t=0;C.c.L(t,x.gD(x));t=r){s=t===0?x.gD(x).H(0,1):t-1
x.gD(x).H(0,1)
r=t+1
v.i(w,t).h(u.i(y,x.i(0,r).gX()).gw())
v.i(w,t).n(C.a.i(y,x.i(0,s).gX()).gw())}u=a.a
if(u.f){this.dx=this.dx*u.c
for(u=z&&C.a,t=0;C.c.L(t,x.gD(x));++t){q=u.i(z,x.i(0,t).gX()).gC().a
q[0]=C.b.B(q[0],x.i(0,t).gbd().v(0,J.a2(v.i(w,t))).v(0,0.5).v(0,this.dx))
q=C.a.i(z,x.i(0,t).gX()).gC().a
q[1]=C.b.B(q[1],x.i(0,t).gbd().v(0,J.cJ(J.a1(v.i(w,t)))).v(0,0.5).v(0,this.dx))}}else this.dx=0},
ae:function(a){return this.eH(a.b)},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=a.c
y=a.b
x=this.ch
w=this.Q.cs(x.gD(x))
for(v=J.W(w),u=y&&C.a,t=z&&C.a,s=0,r=0,q=0;C.c.L(q,x.gD(x));q=o){p=q===0?x.gD(x).H(0,1):q-1
x.gD(x).H(0,1)
o=q+1
v.i(w,q).h(u.i(y,x.i(0,o).gX()).gw())
v.i(w,q).n(C.a.i(y,x.i(0,p).gX()).gw())
r+=C.b.cm(v.i(w,q).gV(),x.i(0,q).ghS())
s+=t.i(z,x.i(0,q).gX()).gC().A(v.i(w,q))}n=-2*s/r
this.dx+=n
for(q=0;C.c.L(q,x.gD(x));++q){u=t.i(z,x.i(0,q).gX()).gC().a
u[0]=C.b.B(u[0],x.i(0,q).gbd().v(0,J.a2(v.i(w,q))).v(0,0.5).v(0,n))
u=C.a.i(z,x.i(0,q).gX()).gC().a
u[1]=C.b.B(u[1],x.i(0,q).gbd().v(0,J.cJ(J.a1(v.i(w,q)))).v(0,0.5).v(0,n))}},
ac:function(a){},
ad:function(a){},
G:{
f9:function(a,b){var z=new V.f8(b.gd2().du(0,!1),0,0,b.gaA(b),!1,!1)
z.ag(a.ch,b)
z.eh(a,b)
return z}}},
fp:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){G.z(this.f.d,this.db,a)},
ad:function(a){G.z(this.r.d,this.dx,a)},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=this.f
this.fy=z.c
this.go=this.r.c
y=this.k3
y.h(z.f.a)
z=this.k4
z.h(this.r.f.a)
x=this.f
this.r1=x.fx
w=this.r
this.r2=w.fx
this.rx=x.go
this.ry=w.go
w=a.b
x=this.fy
if(x>=w.length)return H.a(w,x)
v=w[x].gw()
x=a.b
w=this.fy
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.fy
if(x>=w.length)return H.a(w,x)
t=w[x].gC()
x=a.c
w=this.fy
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.go
if(x>=w.length)return H.a(w,x)
r=w[x].gw()
x=a.b
w=this.go
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.go
if(x>=w.length)return H.a(w,x)
p=w[x].gC()
x=a.c
w=this.go
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
w.I(u)
x.I(q)
n=this.id
n.h(this.db)
n.n(y)
y=this.k1
G.j(w,n,y)
n.h(this.dx)
n.n(z)
z=this.k2
G.j(x,n,z)
n.h(r)
n.q(0,z)
n.n(v)
n.n(y)
this.Q.f.b-=2
m=Math.sqrt(n.gV())
if(m>0.005){x=n.a
w=1/m
n.sj(0,x[0]*w)
n.sk(0,x[1]*w)}else n.J(0,0)
l=y.A(n)
k=z.A(n)
j=this.r1+this.rx*l*l+this.r2+this.ry*k*k
x=j!==0?1/j:0
this.x1=x
w=this.ch
if(w>0){i=this.fx
h=6.283185307179586*w
w=this.cx
g=x*h*h
f=a.a.a
w=f*(2*x*w*h+f*g)
this.dy=w
x=w!==0?1/w:0
this.dy=x
this.cy=(m-i)*f*g*x
j+=x
this.x1=j!==0?1/j:0}else{this.dy=0
this.cy=0}x=a.a
if(x.f){this.fr=this.fr*x.c
x=this.Q.a.l()
x.h(n)
x.F(0,this.fr)
n=t.a
w=n[0]
i=this.r1
e=x.a
t.sj(0,w-i*e[0])
t.sk(0,n[1]-this.r1*e[1])
s-=this.rx*y.A(x)
y=p.a
p.sj(0,y[0]+this.r2*e[0])
p.sk(0,y[1]+this.r2*e[1])
o+=this.ry*z.A(x);--this.Q.a.b}else this.fr=0
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
z[y].sp(s)
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
y[z].sp(o)},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.k1
t.T(w,z)
z.q(0,x)
s=this.k2
s.T(u,y)
y.q(0,v)
r=this.id
y.n(z)
q=r.E(y)
y=this.x1
z=this.cy
p=this.dy
o=this.fr
n=-y*(q+z+p*o)
this.fr=o+n
r=r.a
m=n*r[0]
l=n*r[1]
r=x.a
x.sj(0,r[0]-this.r1*m)
x.sk(0,r[1]-this.r1*l)
r=this.rx
t=t.a
o=t[0]
t=t[1]
p=v.a
v.sj(0,p[0]+this.r2*m)
v.sk(0,p[1]+this.r2*l)
p=this.ry
s=s.a
z=s[0]
s=s[1]
y=a.c
k=this.fy
if(k>=y.length)return H.a(y,k)
y[k].sp(w-r*(o*l-t*m))
t=a.c
o=this.go
if(o>=t.length)return H.a(t,o)
t[o].sp(u+p*(z*l-s*m))
this.Q.a.b-=2},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(this.ch>0)return!0
z=this.Q.f.l()
y=this.Q.f.l()
x=this.Q.a.l()
w=this.Q.a.l()
v=this.Q.a.l()
u=a.b
t=this.fy
if(t>=u.length)return H.a(u,t)
s=u[t].gw()
t=a.b
u=this.fy
if(u>=t.length)return H.a(t,u)
r=t[u].gt()
u=a.b
t=this.go
if(t>=u.length)return H.a(u,t)
q=u[t].gw()
t=a.b
u=this.go
if(u>=t.length)return H.a(t,u)
p=t[u].gt()
z.I(r)
y.I(p)
v.h(this.db)
v.n(this.k3)
G.j(z,v,x)
v.h(this.dx)
v.n(this.k4)
G.j(y,v,w)
v.h(q)
v.q(0,w)
v.n(s)
v.n(x)
o=Math.max(-0.2,Math.min(v.Z()-this.fx,0.2))
n=-this.x1*o
v=v.a
m=n*v[0]
l=n*v[1]
v=s.a
s.sj(0,v[0]-this.r1*m)
s.sk(0,v[1]-this.r1*l)
v=this.rx
x=x.a
y=x[0]
x=x[1]
z=q.a
q.sj(0,z[0]+this.r2*m)
q.sk(0,z[1]+this.r2*l)
z=this.ry
w=w.a
u=w[0]
w=w[1]
t=a.b
k=this.fy
if(k>=t.length)return H.a(t,k)
t[k].st(r-v*(y*l-x*m))
x=a.b
y=this.go
if(y>=x.length)return H.a(x,y)
x[y].st(p+z*(u*l-w*m))
w=this.Q
w.a.b-=3
w.f.b-=2
return Math.abs(o)<0.005}},
fC:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){G.z(this.f.d,this.ch,a)},
ad:function(a){G.z(this.r.d,this.cx,a)},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.f
this.fr=z.c
this.fx=this.r.c
y=this.id
y.h(z.f.a)
z=this.k1
z.h(this.r.f.a)
x=this.f
this.k2=x.fx
w=this.r
this.k3=w.fx
this.k4=x.go
this.r1=w.go
w=a.b
x=this.fr
if(x>=w.length)return H.a(w,x)
v=w[x].gt()
x=a.c
w=this.fr
if(w>=x.length)return H.a(x,w)
u=x[w].gC()
w=a.c
x=this.fr
if(x>=w.length)return H.a(w,x)
t=w[x].gp()
x=a.b
w=this.fx
if(w>=x.length)return H.a(x,w)
s=x[w].gt()
w=a.c
x=this.fx
if(x>=w.length)return H.a(w,x)
r=w[x].gC()
x=a.c
w=this.fx
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.a.l()
x=this.Q.f.l()
p=this.Q.f.l()
x.I(v)
p.I(s)
w.h(this.ch)
w.n(y)
y=this.fy
G.j(x,w,y)
w.h(this.cx)
w.n(z)
z=this.go
G.j(p,w,z)
o=this.k2
n=this.k3
m=this.k4
l=this.r1
p=this.Q.c.l()
x=o+n
k=y.a
j=k[1]
i=z.a
h=i[1]
k=k[0]
i=i[0]
g=l*i
f=-m*k*j-g*h
p.ba(x+m*j*j+l*h*h,f,f,x+m*k*k+g*i)
i=this.r2
i.h(p)
i.bB()
i=m+l
this.rx=i
if(i>0)this.rx=1/i
x=a.a
p=this.cy
if(x.f){p.F(0,x.c)
this.db=this.db*a.a.c
x=this.Q.a.l()
x.h(p)
w.h(x)
w.F(0,o)
u.n(w)
t-=m*(y.A(x)+this.db)
w.h(x)
w.F(0,n)
r.q(0,w)
q+=l*(z.A(x)+this.db);--this.Q.a.b}else{p.K()
this.db=0}z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
J.aa(z[y].gp(),t)
z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
z[y].sp(t)
y=a.c
z=this.fx
if(z>=y.length)return H.a(y,z)
y[z].sp(q)
z=this.Q
z.f.b-=2;--z.a.b;--z.c.b},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.fr
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fx
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.fx
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
t=this.k2
s=this.k3
r=this.k4
q=this.r1
p=a.a.a
z=this.rx
o=this.db
n=p*this.dy
z=Math.max(-n,Math.min(o+-z*(u-w),n))
this.db=z
m=z-o
w-=r*m
u+=q*m
z=this.Q.a.l()
y=this.Q.a.l()
l=this.fy
l.T(w,y)
k=this.go
k.T(u,z)
z.q(0,v)
z.n(x)
z.n(y)
j=this.Q.a.l()
this.r2.ci(z,j)
j.M()
z=this.Q.a.l()
i=this.cy
z.h(i)
i.q(0,j)
n=p*this.dx
if(i.gV()>n*n){i.Z()
i.F(0,n)}j.h(i)
j.n(z)
y.h(j)
y.F(0,t)
x.n(y)
w-=r*l.A(j)
y.h(j)
y.F(0,s)
v.q(0,y)
z=k.A(j)
y=a.c
l=this.fr
if(l>=y.length)return H.a(y,l)
J.aa(y[l].gp(),w)
y=a.c
l=this.fr
if(l>=y.length)return H.a(y,l)
y[l].sp(w)
l=a.c
y=this.fx
if(y>=l.length)return H.a(l,y)
l[y].sp(u+q*z)
this.Q.a.b-=4},
ae:function(a){return!0}},
dc:{"^":"fQ;f,r,x,y,0a,0b,0c,0d,e"},
fF:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,P,R,O,U,S,a_,a3,a9,aa,aq,aH,ax,ay,a4,am,an,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){G.z(this.f.d,this.fr,a)},
ad:function(a){G.z(this.r.d,this.fx,a)},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
this.rx=this.f.c
this.ry=this.r.c
z=this.dx
this.x1=z.gX()
y=this.dy
this.x2=y.gX()
x=this.y1
x.h(this.f.f.a)
w=this.y2
w.h(this.r.f.a)
v=this.a2
v.h(z.gaP().gh3())
u=this.P
u.h(y.gaP().gh3())
this.R=this.f.fx
this.O=this.r.fx
this.U=z.gbd()
this.S=y.gbd()
this.a_=this.f.go
this.a3=this.r.go
this.a9=z.geT()
this.aa=y.geT()
y=a.b
z=this.rx
if(z>=y.length)return H.a(y,z)
t=y[z].gt()
z=a.c
y=this.rx
if(y>=z.length)return H.a(z,y)
s=z[y].gC()
y=a.c
z=this.rx
if(z>=y.length)return H.a(y,z)
r=y[z].gp()
z=a.b
y=this.ry
if(y>=z.length)return H.a(z,y)
q=z[y].gt()
y=a.c
z=this.ry
if(z>=y.length)return H.a(y,z)
p=y[z].gC()
z=a.c
y=this.ry
if(y>=z.length)return H.a(z,y)
o=z[y].gp()
y=a.b
z=this.x1
if(z>=y.length)return H.a(y,z)
n=y[z].gt()
z=a.c
y=this.x1
if(y>=z.length)return H.a(z,y)
m=z[y].gC()
y=a.c
z=this.x1
if(z>=y.length)return H.a(y,z)
l=y[z].gp()
z=a.b
y=this.x2
if(y>=z.length)return H.a(z,y)
k=z[y].gt()
y=a.c
z=this.x2
if(z>=y.length)return H.a(y,z)
j=y[z].gC()
z=a.c
y=this.x2
if(y>=z.length)return H.a(z,y)
i=z[y].gp()
y=this.Q.f.l()
z=this.Q.f.l()
h=this.Q.f.l()
g=this.Q.f.l()
y.I(t)
z.I(q)
h.I(n)
g.I(k)
this.an=0
f=this.Q.a.l()
e=this.Q.a.l()
d=this.Q.a.l()
c=this.aq
G.j(h,this.id,c)
f.h(this.fy)
f.n(v)
G.j(h,f,e)
f.h(this.fr)
f.n(x)
G.j(y,f,d)
this.a4=e.A(c)
c=d.A(c)
this.ax=c
d=this.an
e=this.U
y=this.R
x=this.a9
h=this.a4
this.an=d+(e+y+x*h*h+this.a_*c*c)
this.Q.a.b-=2
y=this.Q.a.l()
x=this.Q.a.l()
v=this.Q.a.l()
G.j(g,this.k1,y)
f.h(this.go)
f.n(u)
G.j(g,f,x)
f.h(this.fx)
f.n(w)
G.j(z,f,v)
f=this.aH
f.h(y)
f.F(0,this.r1)
this.am=this.r1*x.A(y)
y=this.r1*v.A(y)
this.ay=y
v=this.an
x=this.r1
f=this.S
z=this.O
w=this.aa
g=this.am
this.an=v+(x*x*(f+z)+w*g*g+this.a3*y*y)
this.Q.a.b-=3
z=this.an
this.an=z>0?1/z:0
if(a.a.f){z=s.a
y=this.aq.a
s.sj(0,z[0]+this.R*this.r2*y[0])
s.sk(0,z[1]+this.R*this.r2*y[1])
z=this.a_
x=this.r2
r+=z*x*this.ax
z=p.a
w=this.aH.a
p.sj(0,z[0]+this.O*x*w[0])
p.sk(0,z[1]+this.O*this.r2*w[1])
z=this.a3
x=this.r2
o+=z*x*this.ay
z=m.a
m.sj(0,z[0]-this.U*x*y[0])
m.sk(0,z[1]-this.U*this.r2*y[1])
y=this.a9
z=this.r2
l-=y*z*this.a4
y=j.a
j.sj(0,y[0]-this.S*z*w[0])
j.sk(0,y[1]-this.S*this.r2*w[1])
i-=this.aa*this.r2*this.am}else this.r2=0
z=this.Q;--z.a.b
z.f.b-=4
z=a.c
y=this.rx
if(y>=z.length)return H.a(z,y)
z[y].sp(r)
y=a.c
z=this.ry
if(z>=y.length)return H.a(y,z)
y[z].sp(o)
z=a.c
y=this.x1
if(y>=z.length)return H.a(z,y)
z[y].sp(l)
y=a.c
z=this.x2
if(z>=y.length)return H.a(y,z)
y[z].sp(i)},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.c
y=this.rx
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.rx
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.ry
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.ry
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=a.c
y=this.x1
if(y>=z.length)return H.a(z,y)
t=z[y].gC()
y=a.c
z=this.x1
if(z>=y.length)return H.a(y,z)
s=y[z].gp()
z=a.c
y=this.x2
if(y>=z.length)return H.a(z,y)
r=z[y].gC()
y=a.c
z=this.x2
if(z>=y.length)return H.a(y,z)
q=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
p=this.aq
z.h(x)
z.n(t)
z=p.E(z)
o=this.aH
y.h(v)
y.n(r)
y=o.E(y)
n=this.ax
m=this.a4
l=this.ay
k=this.am
this.Q.a.b-=2
j=-this.an*(z+y+(n*w-m*s+(l*u-k*q)))
this.r2+=j
k=x.a
p=p.a
x.sj(0,k[0]+this.R*j*p[0])
x.sk(0,k[1]+this.R*j*p[1])
k=this.a_
l=this.ax
m=v.a
o=o.a
v.sj(0,m[0]+this.O*j*o[0])
v.sk(0,m[1]+this.O*j*o[1])
m=this.a3
n=this.ay
y=t.a
t.sj(0,y[0]-this.U*j*p[0])
t.sk(0,y[1]-this.U*j*p[1])
p=this.a9
y=this.a4
z=r.a
r.sj(0,z[0]-this.S*j*o[0])
r.sk(0,z[1]-this.S*j*o[1])
o=this.aa
z=this.am
i=a.c
h=this.rx
if(h>=i.length)return H.a(i,h)
i[h].sp(w+k*j*l)
l=a.c
k=this.ry
if(k>=l.length)return H.a(l,k)
l[k].sp(u+m*j*n)
n=a.c
m=this.x1
if(m>=n.length)return H.a(n,m)
n[m].sp(s-p*j*y)
y=a.c
p=this.x2
if(p>=y.length)return H.a(y,p)
y[p].sp(q-o*j*z)},
ae:function(a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=a4.b
y=this.rx
if(y>=z.length)return H.a(z,y)
x=z[y].gw()
y=a4.b
z=this.rx
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a4.b
y=this.ry
if(y>=z.length)return H.a(z,y)
v=z[y].gw()
y=a4.b
z=this.ry
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=a4.b
y=this.x1
if(y>=z.length)return H.a(z,y)
t=z[y].gw()
y=a4.b
z=this.x1
if(z>=y.length)return H.a(y,z)
s=y[z].gt()
z=a4.b
y=this.x2
if(y>=z.length)return H.a(z,y)
r=z[y].gw()
y=a4.b
z=this.x2
if(z>=y.length)return H.a(y,z)
q=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
p=this.Q.f.l()
o=this.Q.f.l()
z.I(w)
y.I(u)
p.I(s)
o.I(q)
n=this.Q.a.l()
m=this.Q.a.l()
l=this.Q.a.l()
k=this.Q.a.l()
j=this.Q.a.l()
i=this.Q.a.l()
h=this.Q.a.l()
g=this.id
G.j(p,g,m)
f=this.fy
n.h(f)
e=this.a2
n.n(e)
G.j(p,n,k)
n.h(this.fr)
n.n(this.y1)
G.j(z,n,j)
d=k.A(m)
c=j.A(m)
b=0+(this.U+this.R+this.a9*d*d+this.a_*c*c)
i.h(f)
i.n(e)
n.h(j)
n.q(0,x)
n.n(t)
G.a6(p,n,h)
h.n(i)
a=h.E(g)
this.Q.a.b-=4
z=this.Q.a.l()
p=this.Q.a.l()
k=this.Q.a.l()
j=this.Q.a.l()
i=this.Q.a.l()
h=this.k1
G.j(o,h,z)
g=this.go
n.h(g)
f=this.P
n.n(f)
G.j(o,n,p)
n.h(this.fx)
n.n(this.y2)
G.j(y,n,k)
l.h(z)
l.F(0,this.r1)
a0=p.A(z)
a1=k.A(z)
z=this.r1
b+=z*z*(this.S+this.O)+this.aa*a0*a0+this.a3*a1*a1
j.h(g)
j.n(f)
n.h(k)
n.q(0,v)
n.n(r)
G.a6(o,n,i)
i.n(j)
a2=i.E(h)
this.Q.a.b-=5
z=this.r1
y=this.k4
a3=b>0?-(a+z*a2-y)/b:0
z=this.Q
z.a.b-=3
z.f.b-=4
z=x.a
y=z[0]
p=this.R
m=m.a
x.sj(0,y+p*a3*m[0])
x.sk(0,z[1]+this.R*a3*m[1])
z=this.a_
p=v.a
y=p[0]
o=this.O
l=l.a
v.sj(0,y+o*a3*l[0])
v.sk(0,p[1]+this.O*a3*l[1])
p=this.a3
o=t.a
t.sj(0,o[0]-this.U*a3*m[0])
t.sk(0,o[1]-this.U*a3*m[1])
m=this.a9
o=r.a
r.sj(0,o[0]-this.S*a3*l[0])
r.sk(0,o[1]-this.S*a3*l[1])
l=this.aa
o=a4.b
y=this.rx
if(y>=o.length)return H.a(o,y)
o[y].st(w+z*a3*c)
z=a4.b
y=this.ry
if(y>=z.length)return H.a(z,y)
z[y].st(u+p*a3*a1)
p=a4.b
y=this.x1
if(y>=p.length)return H.a(p,y)
p[y].st(s-m*a3*d)
m=a4.b
y=this.x2
if(y>=m.length)return H.a(m,y)
m[y].st(q-l*a3*a0)
return!0}},
M:{"^":"c;",
ag:function(a,b){this.Q=a
this.b=null
this.c=null
this.f=b.c
this.r=b.d
this.y=b.e
this.x=!1
this.z=b.b
this.d=new V.dh()
this.e=new V.dh()}},
fQ:{"^":"c;0aB:b<"},
dh:{"^":"c;0a,0b,0c,0d"},
U:{"^":"c;a,b",
u:function(a){return this.b}},
di:{"^":"c;a,b",
u:function(a){return this.b}},
h6:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){a.h(this.f.d.a)},
ad:function(a){a.h(this.r.d.a)},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.f
this.fx=z.c
this.fy=this.r.c
y=this.k1
y.h(z.f.a)
z=this.k2
z.h(this.r.f.a)
x=this.f
this.r1=x.fx
w=this.r
this.r2=w.fx
this.rx=x.go
this.ry=w.go
w=a.b
x=this.fx
if(x>=w.length)return H.a(w,x)
v=w[x].gw()
x=a.b
w=this.fx
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.fx
if(x>=w.length)return H.a(w,x)
t=w[x].gC()
x=a.c
w=this.fx
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.fy
if(x>=w.length)return H.a(w,x)
r=w[x].gw()
x=a.b
w=this.fy
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.fy
if(x>=w.length)return H.a(w,x)
p=w[x].gC()
x=a.c
w=this.fy
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
m=this.Q.c.l()
w.I(u)
x.I(q)
l=this.go
y=y.a
l.sj(0,w.b*-y[0]-w.a*-y[1])
l.sk(0,w.a*-y[0]+w.b*-y[1])
y=this.id
z=z.a
y.sj(0,x.b*-z[0]-x.a*-z[1])
y.sk(0,x.a*-z[0]+x.b*-z[1])
k=this.r1
j=this.r2
i=this.rx
h=this.ry
z=k+j
l=l.a
x=l[1]
y=y.a
g=y[1]
f=l[0]
e=y[0]
d=h*e
c=-i*f*x-d*g
m.ba(z+i*x*x+h*g*g,c,c,z+i*f*f+d*e)
e=this.x1
e.h(m)
e.bB()
e=i+h
this.x2=e
if(e>0)this.x2=1/e
G.j(w,this.ch,n)
z=this.k3
x=r.a
w=x[0]
m=y[0]
g=v.a
f=g[0]
e=l[0]
n=n.a
z.sj(0,w+m-f-e-n[0])
z.sk(0,x[1]+y[1]-g[1]-l[1]-n[1])
this.k4=q-u-this.cx
z=a.a
x=this.cy
if(z.f){w=x.a
x.sj(0,w[0]*z.c)
x.sk(0,w[1]*a.a.c)
this.db=this.db*a.a.c
x=t.a
t.sj(0,x[0]-k*w[0])
t.sk(0,x[1]-k*w[1])
x=l[0]
z=w[1]
l=l[1]
n=w[0]
s-=i*(x*z-l*n+this.db)
l=p.a
p.sj(0,l[0]+j*n)
p.sk(0,l[1]+j*w[1])
o+=h*(y[0]*w[1]-y[1]*w[0]+this.db)}else{x.K()
this.db=0}z=this.Q;--z.a.b;--z.c.b
z.f.b-=2
z=a.c
y=this.fx
if(y>=z.length)return H.a(z,y)
z[y].sp(s)
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
y[z].sp(o)},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=a.c
y=this.fx
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.fx
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
t=this.r1
s=this.r2
r=this.rx
q=this.ry
z=a.a
p=z.a
o=z.b
z=this.Q.a.l()
y=this.fr
n=this.k4
m=this.x2
l=this.db
k=p*this.dy
n=Math.max(-k,Math.min(l+-m*(u-w+o*y*n),k))
this.db=n
j=n-l
w-=r*j
u+=q*j
n=this.Q.a.l()
y=v.a
m=this.id.a
i=x.a
h=this.go.a
g=this.k3.a
n.sj(0,y[0]+-u*m[1]-i[0]- -w*h[1]+o*this.fr*g[0])
n.sk(0,y[1]+u*m[0]-i[1]-w*h[0]+o*this.fr*g[1])
this.x1.ci(n,z)
z.M()
n=this.Q.a.l()
g=this.cy
n.h(g)
g.q(0,z)
k=p*this.dx
if(g.gV()>k*k){g.Z()
g.F(0,k)}g=g.a
f=g[0]
n=n.a
z.sj(0,f-n[0])
z.sk(0,g[1]-n[1])
n=i[0]
z=z.a
x.sj(0,n-t*z[0])
x.sk(0,i[1]-t*z[1])
i=h[0]
n=z[1]
h=h[1]
g=z[0]
v.sj(0,y[0]+s*g)
v.sk(0,y[1]+s*z[1])
y=m[0]
f=z[1]
m=m[1]
z=z[0]
this.Q.a.b-=3
e=a.c
d=this.fx
if(d>=e.length)return H.a(e,d)
e[d].sp(w-r*(i*n-h*g))
g=a.c
h=this.fy
if(h>=g.length)return H.a(g,h)
g[h].sp(u+q*(y*f-m*z))},
ae:function(a){return!0}},
h7:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){a.h(this.cx)},
ad:function(a){G.z(this.r.d,this.ch,a)},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.r
this.fy=z.c
y=this.id
y.h(z.f.a)
z=this.r
this.k1=z.fx
this.k2=z.go
z=a.b
x=this.fy
if(x>=z.length)return H.a(z,x)
w=z[x].gw()
x=a.b
z=this.fy
if(z>=x.length)return H.a(x,z)
v=x[z].gt()
z=a.c
x=this.fy
if(x>=z.length)return H.a(z,x)
u=z[x].gC()
x=a.c
z=this.fy
if(z>=x.length)return H.a(x,z)
t=x[z].gp()
z=this.Q.f.l()
z.I(v)
s=this.r.fr
r=6.283185307179586*this.cy
x=this.db
q=a.a.a
p=q*(s*(r*r))
x=q*(2*s*x*r+p)
this.fx=x
if(x!==0){x=1/x
this.fx=x}this.dx=p*x
x=this.Q.a.l()
x.h(this.ch)
x.n(y)
y=this.go
G.j(z,x,y)
x=this.Q.c.l()
z=this.k1
p=this.k2
o=y.a
n=o[1]
m=this.fx
o=o[0]
l=-p*o*n
x.ba(z+p*n*n+m,l,l,z+p*o*o+m)
m=this.k3
m.h(x)
m.bB()
m=this.k4
m.h(w)
m.q(0,y)
m.n(this.cx)
m.F(0,this.dx)
t*=0.98
z=a.a
x=this.dy
if(z.f){x.F(0,z.c)
z=u.a
p=x.a
u.sj(0,z[0]+this.k1*p[0])
u.sk(0,z[1]+this.k1*p[1])
t+=this.k2*y.A(x)}else x.K()
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
z[y].sp(t)
y=this.Q;--y.a.b;--y.c.b;--y.f.b},
ae:function(a){return!0},
af:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=this.Q.a.l()
y=this.go
y.T(w,z)
z.q(0,x)
v=this.Q.a.l()
u=this.Q.a.l()
t=this.dy
u.h(t)
u.F(0,this.fx)
u.q(0,this.k4)
u.q(0,z)
u.M()
this.k3.ci(u,v)
u.h(t)
t.q(0,v)
s=a.a.a*this.fr
if(t.gV()>s*s)t.F(0,s/Math.sqrt(t.gV()))
v.h(t)
v.n(u)
z=x.a
u=z[0]
t=this.k1
r=v.a
x.sj(0,u+t*r[0])
x.sk(0,z[1]+this.k1*r[1])
r=this.k2
v=y.A(v)
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
y[z].sp(w+r*v)
this.Q.a.b-=3}},
hD:{"^":"M;ch,cx,cy,db,0dx,dy,fr,fx,fy,go,id,k1,k2,0k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,P,R,O,U,S,a_,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){G.z(this.f.d,this.ch,a)},
ad:function(a){G.z(this.r.d,this.cx,a)},
ah:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=this.f
this.k4=z.c
this.r1=this.r.c
y=this.r2
y.h(z.f.a)
z=this.rx
z.h(this.r.f.a)
x=this.f
this.ry=x.fx
w=this.r
this.x1=w.fx
this.x2=x.go
this.y1=w.go
w=a2.b
x=this.k4
if(x>=w.length)return H.a(w,x)
v=w[x].gw()
x=a2.b
w=this.k4
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a2.c
x=this.k4
if(x>=w.length)return H.a(w,x)
t=w[x].gC()
x=a2.c
w=this.k4
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a2.b
x=this.r1
if(x>=w.length)return H.a(w,x)
r=w[x].gw()
x=a2.b
w=this.r1
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a2.c
x=this.r1
if(x>=w.length)return H.a(w,x)
p=w[x].gC()
x=a2.c
w=this.r1
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
m=this.Q.a.l()
l=this.Q.a.l()
k=this.Q.a.l()
w.I(u)
x.I(q)
n.h(this.ch)
n.n(y)
G.j(w,n,l)
n.h(this.cx)
n.n(z)
G.j(x,n,k)
n.h(r)
n.n(v)
n.q(0,k)
n.n(l)
j=this.ry
i=this.x1
h=this.x2
g=this.y1
x=this.y2
G.j(w,this.cy,x)
m.h(n)
m.q(0,l)
this.O=m.A(x)
z=k.A(x)
this.U=z
y=j+i
f=this.O
z=y+h*f*f+g*z*z
this.a_=z
if(z>0)this.a_=1/z
z=this.a2
G.j(w,this.db,z)
m.h(n)
m.q(0,l)
this.P=m.A(z)
k=k.A(z)
this.R=k
l=this.P
n=h*l
w=g*k
e=n+w
f=this.O
d=this.U
c=n*f+w*d
b=h+g
if(b===0)b=1
a=h*f
a0=g*d
a1=a+a0
this.S.aY(y+n*l+w*k,e,c,e,b,a1,c,a1,y+a*f+a0*d)
this.k3=C.n
y=this.dy
y.sbm(0,0)
this.fr=0
w=a2.a
if(w.f){y.F(0,w.c)
this.fr=this.fr*a2.a.c
w=this.Q.a.l()
m.h(x)
y=y.a
m.F(0,this.fr+y[2])
w.h(z)
w.F(0,y[0])
w.q(0,m)
m=y[0]
z=this.P
x=y[1]
y=this.fr+y[2]
n=this.O
l=this.R
k=this.U
f=t.a
d=f[0]
w=w.a
t.sj(0,d-j*w[0])
t.sk(0,f[1]-j*w[1])
s-=h*(m*z+x+y*n)
n=p.a
p.sj(0,n[0]+i*w[0])
p.sk(0,n[1]+i*w[1])
o+=g*(m*l+x+y*k);--this.Q.a.b}else{y.K()
this.fr=0}z=a2.c
y=this.k4
if(y>=z.length)return H.a(z,y)
z[y].sp(s)
y=a2.c
z=this.r1
if(z>=y.length)return H.a(y,z)
y[z].sp(o)
z=this.Q
z.f.b-=2
z.a.b-=4},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=a.c
y=this.k4
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.k4
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.r1
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.r1
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
t=this.ry
s=this.x1
r=this.x2
q=this.y1
z=this.Q.a.l()
y=this.Q.a.l()
z.h(v)
z.n(x)
p=this.a2
y.sj(0,p.E(z)+this.R*u-this.P*w)
y.sk(0,u-w)
z=this.dy
o=this.Q.a.l()
y.M()
E.cf(this.S,o,y)
y.M()
y=z.a
n=y[0]
o=o.a
z.sj(0,n+o[0])
z.sk(0,y[1]+o[1])
y=this.Q.a.l()
y.h(p)
y.F(0,o[0])
p=o[0]
z=this.P
o=o[1]
n=this.R
m=x.a
l=m[0]
y=y.a
x.sj(0,l-t*y[0])
x.sk(0,m[1]-t*y[1])
w-=r*(p*z+o)
z=v.a
v.sj(0,z[0]+s*y[0])
v.sk(0,z[1]+s*y[1])
u+=q*(p*n+o)
this.Q.a.b-=2
z=a.c
y=this.k4
if(y>=z.length)return H.a(z,y)
z[y].sp(w)
y=a.c
z=this.r1
if(z>=y.length)return H.a(y,z)
y[z].sp(u)
this.Q.a.b-=2},
ae:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=this.Q.f.l()
y=this.Q.f.l()
x=this.Q.a.l()
w=this.Q.a.l()
v=this.Q.a.l()
u=this.Q.a.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.Q.a.l()
q=this.Q.b.l()
p=a2.b
o=this.k4
if(o>=p.length)return H.a(p,o)
n=p[o].gw()
o=a2.b
p=this.k4
if(p>=o.length)return H.a(o,p)
m=o[p].gt()
p=a2.b
o=this.r1
if(o>=p.length)return H.a(p,o)
l=p[o].gw()
o=a2.b
p=this.r1
if(p>=o.length)return H.a(o,p)
k=o[p].gt()
z.I(m)
y.I(k)
j=this.ry
i=this.x1
h=this.x2
g=this.y1
s.h(this.ch)
s.n(this.r2)
G.j(z,s,x)
s.h(this.cx)
s.n(this.rx)
G.j(y,s,w)
v.h(l)
v.q(0,w)
v.n(n)
v.n(x)
G.j(z,this.cy,u)
s.h(v)
s.q(0,x)
f=s.A(u)
e=w.A(u)
G.j(z,this.db,t)
s.h(v)
s.q(0,x)
d=s.A(t)
c=w.A(t)
r.sj(0,t.E(v))
r.sk(0,C.b.H(k-m,this.dx))
v=r.a
w=v[0]
v=v[1]
z=g*c
y=h*d
b=h+g
a=y+z
if(b===0)b=1
x=this.Q.c.l()
x.ba(j+i+y*d+z*c,a,a,b)
r.M()
E.dp(x,s,r)
r.M()
s=s.a
q.sj(0,s[0])
q.sk(0,s[1])
q.sbm(0,0);--this.Q.c.b
z=q.a
y=z[0]
t=t.a
x=t[0]
s=z[2]
u=u.a
a0=y*x+s*u[0]
a1=y*t[1]+s*u[1]
z=z[1]
u=n.a
n.sj(0,u[0]-j*a0)
n.sk(0,u[1]-j*a1)
u=l.a
l.sj(0,u[0]+i*a0)
l.sk(0,u[1]+i*a1)
u=a2.b
t=this.k4
if(t>=u.length)return H.a(u,t)
u[t].st(m-h*(y*d+z+s*f))
t=a2.b
u=this.r1
if(u>=t.length)return H.a(t,u)
t[u].st(k+g*(y*c+z+s*e))
s=this.Q
s.a.b-=7;--s.b.b
s.f.b-=2
return Math.abs(w)<=0.005&&Math.abs(v)<=0.03490658503988659}},
dw:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){G.z(this.f.d,this.dx,a)},
ad:function(a){G.z(this.r.d,this.dy,a)},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.f
this.go=z.c
this.id=this.r.c
y=this.r1
y.h(z.f.a)
z=this.r2
z.h(this.r.f.a)
x=this.f
this.rx=x.fx
w=this.r
this.ry=w.fx
this.x1=x.go
this.x2=w.go
w=a.b
x=this.go
if(x>=w.length)return H.a(w,x)
v=w[x].gw()
x=a.b
w=this.go
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.go
if(x>=w.length)return H.a(w,x)
t=w[x].gC()
x=a.c
w=this.go
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.id
if(x>=w.length)return H.a(w,x)
r=w[x].gw()
x=a.b
w=this.id
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.id
if(x>=w.length)return H.a(w,x)
p=w[x].gC()
x=a.c
w=this.id
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
w.I(u)
x.I(q)
n.h(this.dx)
n.n(y)
y=this.k3
G.j(w,n,y)
n.h(this.dy)
n.n(z)
z=this.k4
G.j(x,n,z)
n=this.k1
n.h(v)
n.q(0,y)
n.n(this.ch)
x=this.k2
x.h(r)
x.q(0,z)
x.n(this.cx)
m=Math.sqrt(n.gV())
l=Math.sqrt(x.gV())
if(m>0.05)n.F(0,1/m)
else n.K()
if(l>0.05)x.F(0,1/l)
else x.K()
k=y.A(n)
j=z.A(x)
w=this.rx
i=this.x1
h=this.ry
g=this.x2
f=this.fx
g=w+i*k*k+f*f*(h+g*j*j)
this.y1=g
if(g>0)this.y1=1/g
w=a.a
if(w.f){this.fy=this.fy*w.c
w=this.Q.a.l()
i=this.Q.a.l()
w.h(n)
w.F(0,-this.fy)
i.h(x)
i.F(0,-this.fx*this.fy)
x=t.a
n=x[0]
h=this.rx
g=w.a
t.sj(0,n+h*g[0])
t.sk(0,x[1]+this.rx*g[1])
s+=this.x1*y.A(w)
w=p.a
y=w[0]
g=this.ry
x=i.a
p.sj(0,y+g*x[0])
p.sk(0,w[1]+this.ry*x[1])
o+=this.x2*z.A(i)
this.Q.a.b-=2}else this.fy=0
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
z[y].sp(s)
y=a.c
z=this.id
if(z>=y.length)return H.a(y,z)
y[z].sp(o)
z=this.Q;--z.a.b
z.f.b-=2},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.id
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.id
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.k3
r.T(w,z)
z.q(0,x)
q=this.k4
q.T(u,y)
y.q(0,v)
p=this.k1
z=p.E(z)
o=this.fx
n=this.k2
y=n.E(y)
m=-this.y1*(-z-o*y)
this.fy+=m
t.h(p)
t.F(0,-m)
s.h(n)
s.F(0,-this.fx*m)
n=x.a
p=n[0]
y=this.rx
o=t.a
x.sj(0,p+y*o[0])
x.sk(0,n[1]+this.rx*o[1])
o=this.x1
t=r.A(t)
r=v.a
n=r[0]
y=this.ry
p=s.a
v.sj(0,n+y*p[0])
v.sk(0,r[1]+this.ry*p[1])
p=this.x2
s=q.A(s)
q=a.c
r=this.go
if(r>=q.length)return H.a(q,r)
q[r].sp(w+o*t)
t=a.c
o=this.id
if(o>=t.length)return H.a(t,o)
t[o].sp(u+p*s)
this.Q.a.b-=4},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=this.Q.f.l()
y=this.Q.f.l()
x=this.Q.a.l()
w=this.Q.a.l()
v=this.Q.a.l()
u=this.Q.a.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.Q.a.l()
q=a.b
p=this.go
if(p>=q.length)return H.a(q,p)
o=q[p].gw()
p=a.b
q=this.go
if(q>=p.length)return H.a(p,q)
n=p[q].gt()
q=a.b
p=this.id
if(p>=q.length)return H.a(q,p)
m=q[p].gw()
p=a.b
q=this.id
if(q>=p.length)return H.a(p,q)
l=p[q].gt()
z.I(n)
y.I(l)
t.h(this.dx)
t.n(this.r1)
G.j(z,t,x)
t.h(this.dy)
t.n(this.r2)
G.j(y,t,w)
v.h(o)
v.q(0,x)
v.n(this.ch)
u.h(m)
u.q(0,w)
u.n(this.cx)
k=Math.sqrt(v.gV())
j=Math.sqrt(u.gV())
if(k>0.05)v.F(0,1/k)
else v.K()
if(j>0.05)u.F(0,1/j)
else u.K()
i=x.A(v)
h=w.A(u)
z=this.rx
y=this.x1
t=this.ry
q=this.x2
p=this.fx
g=z+y*i*i+p*p*(t+q*h*h)
if(g>0)g=1/g
f=this.fr-k-p*j
e=-g*f
s.h(v)
s.F(0,-e)
r.h(u)
r.F(0,-this.fx*e)
z=o.a
y=z[0]
v=this.rx
u=s.a
o.sj(0,y+v*u[0])
o.sk(0,z[1]+this.rx*u[1])
u=this.x1
s=x.A(s)
x=m.a
z=x[0]
v=this.ry
y=r.a
m.sj(0,z+v*y[0])
m.sk(0,x[1]+this.ry*y[1])
y=this.x2
r=w.A(r)
w=a.b
x=this.go
if(x>=w.length)return H.a(w,x)
w[x].st(n+u*s)
s=a.b
u=this.id
if(u>=s.length)return H.a(s,u)
s[u].st(l+y*r)
r=this.Q
r.f.b-=2
r.a.b-=7
return Math.abs(f)<0.005}},
hJ:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.f
this.k1=z.c
this.k2=this.r.c
y=this.r1
y.h(z.f.a)
z=this.r2
z.h(this.r.f.a)
x=this.f
this.rx=x.fx
w=this.r
this.ry=w.fx
this.x1=x.go
this.x2=w.go
w=a.b
x=this.k1
if(x>=w.length)return H.a(w,x)
v=w[x].gt()
x=a.c
w=this.k1
if(w>=x.length)return H.a(x,w)
u=x[w].gC()
w=a.c
x=this.k1
if(x>=w.length)return H.a(w,x)
t=w[x].gp()
x=a.b
w=this.k2
if(w>=x.length)return H.a(x,w)
s=x[w].gt()
w=a.c
x=this.k2
if(x>=w.length)return H.a(w,x)
r=w[x].gC()
x=a.c
w=this.k2
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
p=this.Q.a.l()
w.I(v)
x.I(s)
p.h(this.ch)
p.n(y)
y=this.k3
G.j(w,p,y)
p.h(this.cx)
p.n(z)
z=this.k4
G.j(x,p,z)
o=this.rx
n=this.ry
m=this.x1
l=this.x2
p=m+l
x=o+n
w=y.a
k=w[1]
j=z.a
i=j[1]
h=-k
w=w[0]
j=j[0]
g=this.y1
f=g.a
g.aY(x+k*k*m+i*i*l,f[3],f[6],h*w*m-i*j*l,x+w*w*m+j*j*l,f[7],h*m-i*l,w*m+j*l,p)
this.y2=p
if(p>0)this.y2=1/p
this.db=0
this.a2=C.n
x=this.cy
if(a.a.f){w=this.Q.a.l()
p=x.a
x.sj(0,p[0]*a.a.c)
x.sk(0,p[1]*a.a.c)
this.db=this.db*a.a.c
w.sj(0,p[0])
w.sk(0,p[1])
x=u.a
k=x[0]
j=w.a
u.sj(0,k-o*j[0])
u.sk(0,x[1]-o*j[1])
t-=m*(y.A(w)+this.db+p[2])
y=r.a
r.sj(0,y[0]+n*j[0])
r.sk(0,y[1]+n*j[1])
q+=l*(z.A(w)+this.db+p[2]);--this.Q.a.b}else{x.K()
this.db=0}z=a.c
y=this.k1
if(y>=z.length)return H.a(z,y)
z[y].sp(t)
y=a.c
z=this.k2
if(z>=y.length)return H.a(y,z)
y[z].sp(q)
z=this.Q;--z.a.b
z.f.b-=2},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=a.c
y=this.k1
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.k1
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.k2
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.k2
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
t=this.rx
s=this.ry
r=this.x1
q=this.x2
z=this.Q.a.l()
y=this.k4
p=this.k3
o=this.Q.a.l()
n=this.Q.a.l()
p.T(w,z)
y.T(u,o)
o.q(0,v)
o.n(x)
o.n(z)
o.M()
E.cf(this.y1,n,o)
o=this.cy
z=o.a
m=z[0]
l=n.a
o.sj(0,m+l[0])
o.sk(0,z[1]+l[1])
z=x.a
x.sj(0,z[0]-t*l[0])
x.sk(0,z[1]-t*l[1])
w-=r*p.A(n)
p=v.a
v.sj(0,p[0]+s*l[0])
v.sk(0,p[1]+s*l[1])
u+=q*y.A(n)
this.Q.a.b-=2
z=a.c
y=this.k1
if(y>=z.length)return H.a(z,y)
z[y].sp(w)
y=a.c
z=this.k2
if(z>=y.length)return H.a(y,z)
y[z].sp(u);--this.Q.a.b},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.Q.f.l()
y=this.Q.f.l()
x=a.b
w=this.k1
if(w>=x.length)return H.a(x,w)
v=x[w].gw()
w=a.b
x=this.k1
if(x>=w.length)return H.a(w,x)
u=w[x].gt()
x=a.b
w=this.k2
if(w>=x.length)return H.a(x,w)
t=x[w].gw()
w=a.b
x=this.k2
if(x>=w.length)return H.a(w,x)
s=w[x].gt()
z.I(u)
y.I(s)
z.I(u)
y.I(s)
x=this.Q.a.l()
w=this.Q.a.l()
r=this.Q.a.l()
q=this.Q.a.l()
r.h(this.ch)
r.n(this.r1)
G.j(z,r,x)
r.h(this.cx)
r.n(this.r2)
G.j(y,r,w)
r.h(t)
r.q(0,w)
r.n(v)
r.n(x)
p=Math.sqrt(r.gV())
o=this.rx
n=this.ry
m=this.x1
l=this.x2
y=this.Q.c.l()
z=o+n
k=x.a
j=k[1]
i=w.a
h=i[1]
k=k[0]
i=i[0]
g=l*i
f=-m*k*j-g*h
y.ba(z+m*j*j+l*h*h,f,f,z+m*k*k+g*i)
E.dp(y,q,r)
q.M()
r=v.a
y=r[0]
i=q.a
v.sj(0,y-o*i[0])
v.sk(0,r[1]-o*i[1])
x=x.A(q)
r=t.a
t.sj(0,r[0]+n*i[0])
t.sk(0,r[1]+n*i[1])
q=w.A(q)
w=this.Q
w.a.b-=4;--w.c.b
w=a.b
i=this.k1
if(i>=w.length)return H.a(w,i)
w[i].st(u-m*x)
x=a.b
i=this.k2
if(i>=x.length)return H.a(x,i)
x[i].st(s+l*q)
this.Q.f.b-=2
return p<=0.005&&!0},
ac:function(a){G.z(this.f.d,this.ch,a)},
ad:function(a){G.z(this.r.d,this.cx,a)}},
hK:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.f
this.dy=z.c
this.fr=this.r.c
y=this.id
y.h(z.f.a)
z=this.k1
z.h(this.r.f.a)
x=this.f
this.k2=x.fx
w=this.r
this.k3=w.fx
this.k4=x.go
this.r1=w.go
w=a.b
x=this.dy
if(x>=w.length)return H.a(w,x)
v=w[x].gw()
x=a.b
w=this.dy
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.dy
if(x>=w.length)return H.a(w,x)
t=w[x].gC()
x=a.c
w=this.dy
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.fr
if(x>=w.length)return H.a(w,x)
r=w[x].gw()
x=a.b
w=this.fr
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.fr
if(x>=w.length)return H.a(w,x)
p=w[x].gC()
x=a.c
w=this.fr
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
w.I(u)
x.I(q)
n.h(this.ch)
n.n(y)
y=this.fy
G.j(w,n,y)
n.h(this.cx)
n.n(z)
z=this.go
G.j(x,n,z)
n=this.fx
n.h(r)
n.q(0,z)
n.n(v)
n.n(y)
x=Math.sqrt(n.gV())
this.db=x
if(x-this.cy>0)this.rx=C.ad
else this.rx=C.n
if(x>0.005)n.F(0,1/x)
else{n.K()
this.r2=0
this.dx=0
z=this.Q
z.f.b-=2;--z.a.b
return}m=y.A(n)
l=z.A(n)
x=this.k2
k=x+this.k4*m*m+this.k3+this.r1*l*l
this.r2=k!==0?1/k:0
w=a.a
if(w.f){w=this.dx*w.c
this.dx=w
n=n.a
j=w*n[0]
i=w*n[1]
n=t.a
t.sj(0,n[0]-x*j)
t.sk(0,n[1]-this.k2*i)
y=y.a
s-=this.k4*(y[0]*i-y[1]*j)
y=p.a
p.sj(0,y[0]+this.k3*j)
p.sk(0,y[1]+this.k3*i)
z=z.a
o+=this.r1*(z[0]*i-z[1]*j)}else this.dx=0
z=this.Q
z.f.b-=2;--z.a.b
z=a.c
y=this.dy
if(y>=z.length)return H.a(z,y)
z[y].sp(s)
y=a.c
z=this.fr
if(z>=y.length)return H.a(y,z)
y[z].sp(o)},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.dy
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.dy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.fr
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.Q.a.l()
s=this.fy
s.T(w,z)
z.q(0,x)
r=this.go
r.T(u,y)
y.q(0,v)
q=this.db-this.cy
p=this.fx
t.h(y)
t.n(z)
o=p.E(t)
if(q<0)o+=a.a.b*q
z=this.r2
n=this.dx
z=Math.min(0,n+-z*o)
this.dx=z
m=z-n
p=p.a
l=m*p[0]
k=m*p[1]
p=x.a
x.sj(0,p[0]-this.k2*l)
x.sk(0,p[1]-this.k2*k)
p=this.k4
s=s.a
z=s[0]
s=s[1]
y=v.a
v.sj(0,y[0]+this.k3*l)
v.sk(0,y[1]+this.k3*k)
y=this.r1
r=r.a
t=r[0]
r=r[1]
this.Q.a.b-=3
j=a.c
i=this.dy
if(i>=j.length)return H.a(j,i)
j[i].sp(w-p*(z*k-s*l))
s=a.c
z=this.fr
if(z>=s.length)return H.a(s,z)
s[z].sp(u+y*(t*k-r*l))},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.b
y=this.dy
if(y>=z.length)return H.a(z,y)
x=z[y].gw()
y=a.b
z=this.dy
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.fr
if(y>=z.length)return H.a(z,y)
v=z[y].gw()
y=a.b
z=this.fr
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.Q.a.l()
q=this.Q.a.l()
z.I(w)
y.I(u)
q.h(this.ch)
q.n(this.id)
G.j(z,q,s)
q.h(this.cx)
q.n(this.k1)
G.j(y,q,r)
t.h(v)
t.q(0,r)
t.n(x)
t.n(s)
p=t.Z()
o=Math.max(0,Math.min(p-this.cy,0.2))
n=-this.r2*o
t=t.a
m=n*t[0]
l=n*t[1]
t=x.a
x.sj(0,t[0]-this.k2*m)
x.sk(0,t[1]-this.k2*l)
t=this.k4
s=s.a
q=s[0]
s=s[1]
y=v.a
v.sj(0,y[0]+this.k3*m)
v.sk(0,y[1]+this.k3*l)
y=this.r1
r=r.a
z=r[0]
r=r[1]
k=this.Q
k.f.b-=2
k.a.b-=4
k=a.b
j=this.dy
if(j>=k.length)return H.a(k,j)
k[j].st(w-t*(q*l-s*m))
s=a.b
q=this.fr
if(q>=s.length)return H.a(s,q)
s[q].st(u+y*(z*l-r*m))
return p-this.cy<0.005},
ac:function(a){G.z(this.f.d,this.ch,a)},
ad:function(a){G.z(this.r.d,this.cx,a)}},
id:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){G.z(this.f.d,this.db,a)},
ad:function(a){G.z(this.r.d,this.dx,a)},
ah:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
z=this.f
this.fy=z.c
this.go=this.r.c
y=this.k2
y.h(z.f.a)
z=this.k3
z.h(this.r.f.a)
x=this.f
this.k4=x.fx
w=this.r
this.r1=w.fx
this.r2=x.go
this.rx=w.go
w=a9.b
x=this.fy
if(x>=w.length)return H.a(w,x)
v=w[x].gt()
x=a9.c
w=this.fy
if(w>=x.length)return H.a(x,w)
u=x[w].gC()
w=a9.c
x=this.fy
if(x>=w.length)return H.a(w,x)
t=w[x].gp()
x=a9.b
w=this.go
if(w>=x.length)return H.a(x,w)
s=x[w].gt()
w=a9.c
x=this.go
if(x>=w.length)return H.a(w,x)
r=w[x].gC()
x=a9.c
w=this.go
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
p=this.Q.a.l()
w.I(v)
x.I(s)
p.h(this.db)
p.n(y)
y=this.id
G.j(w,p,y)
p.h(this.dx)
p.n(z)
z=this.k1
G.j(x,p,z)
o=this.k4
n=this.r1
m=this.r2
l=this.rx
p=this.Q.d.l()
x=o+n
w=y.a
k=w[1]
j=z.a
i=j[1]
h=-k
w=w[0]
j=j[0]
g=p.a
f=m+l
p.aY(x+k*k*m+i*i*l,g[3],g[6],h*w*m-i*j*l,x+w*w*m+j*j*l,g[7],h*m-i*l,w*m+j*l,f)
x=this.ry
if(this.ch>0){e=g[0]
d=g[3]
c=g[1]
b=g[4]
a=e*b-d*c
if(a!==0)a=1/a
w=-a
x.aY(a*b,w*c,0,w*d,a*e,0,0,0,0)
a0=f>0?1/f:0
w=this.dy
a1=6.283185307179586*this.ch
p=this.cx
a2=a0*a1*a1
a3=a9.a.a
p=a3*(2*a0*p*a1+a3*a2)
this.fr=p
p=p!==0?1/p:0
this.fr=p
this.cy=(s-v-w)*a3*a2*p
a4=f+p
w=a4!==0?1/a4:0
x.a[8]=w}else{w=g[4]
p=g[8]
k=w*p
j=g[5]
i=g[7]
h=g[6]
a5=g[3]
a6=a5*p
a7=a5*i
a8=g[0]
a=a8*(k-j*i)+g[1]*(j*h-a6)+g[2]*(a7-w*h)
if(a!==0)a=1/a
j=x.a
x.aY(a*(k-i*i),a*(h*i-a6),a*(a7-h*w),j[1],a*(a8*p-h*h),a*(h*a5-a8*i),j[2],j[5],a*(a8*w-a5*a5))
this.fr=0
this.cy=0}x=this.fx
if(a9.a.f){w=this.Q.a.l()
x.F(0,a9.a.c)
x=x.a
w.J(x[0],x[1])
p=u.a
k=p[0]
j=w.a
u.sj(0,k-o*j[0])
u.sk(0,p[1]-o*j[1])
t-=m*(y.A(w)+x[2])
y=r.a
r.sj(0,y[0]+n*j[0])
r.sk(0,y[1]+n*j[1])
q+=l*(z.A(w)+x[2]);--this.Q.a.b}else x.K()
z=a9.c
y=this.fy
if(y>=z.length)return H.a(z,y)
z[y].sp(t)
y=a9.c
z=this.go
if(z>=y.length)return H.a(y,z)
y[z].sp(q)
z=this.Q;--z.a.b
z.f.b-=2;--z.d.b},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gC()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gC()
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
t=this.k4
s=this.r1
r=this.r2
q=this.rx
z=this.Q.a.l()
y=this.Q.a.l()
p=this.Q.a.l()
o=v.a
n=x.a
m=this.fx
l=this.id
k=u-w
j=this.k1
i=this.ry.a
if(this.ch>0){h=i[8]
g=this.cy
f=this.fr
e=m.a
d=e[2]
c=-h*(k+g+f*d)
m.sbm(0,d+c)
w-=r*c
u+=q*c
j.T(u,z)
l.T(w,p)
z.q(0,v)
z.n(x)
z.n(p)
p=i[1]
z=z.a
y.sk(0,p*z[0]+i[4]*z[1])
y.sj(0,i[0]*z[0]+i[3]*z[1])
y.M()
z=e[0]
i=y.a
m.sj(0,z+i[0])
m.sk(0,e[1]+i[1])
x.sj(0,n[0]-t*i[0])
x.sk(0,n[1]-t*i[1])
w-=r*l.A(y)
v.sj(0,o[0]+s*i[0])
v.sk(0,o[1]+s*i[1])
u+=q*j.A(y)}else{l.T(w,p)
j.T(u,z)
z.q(0,v)
z.n(x)
z.n(p)
p=this.Q.b.l()
z=z.a
p.cz(z[0],z[1],k)
k=this.Q.b.l()
p=p.a
k.sj(0,p[0]*i[0]+p[1]*i[3]+p[2]*i[6])
k.sk(0,p[0]*i[1]+p[1]*i[4]+p[2]*i[7])
k.sbm(0,p[0]*i[2]+p[1]*i[5]+p[2]*i[8])
k.M()
m.q(0,k)
k=k.a
y.J(k[0],k[1])
m=n[0]
i=y.a
x.sj(0,m-t*i[0])
x.sk(0,n[1]-t*i[1])
w-=r*(l.A(y)+k[2])
v.sj(0,o[0]+s*i[0])
v.sk(0,o[1]+s*i[1])
u+=q*(j.A(y)+k[2])
this.Q.b.b-=2}z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
z[y].sp(w)
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
y[z].sp(u)
this.Q.a.b-=3},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=a.b
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gw()
y=a.b
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gw()
y=a.b
z=this.go
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.Q.a.l()
z.I(w)
y.I(u)
q=this.k4
p=this.r1
o=this.r2
n=this.rx
t.h(this.db)
t.n(this.k2)
G.j(z,t,s)
t.h(this.dx)
t.n(this.k3)
G.j(y,t,r)
t=this.Q.d.l()
y=this.Q.a.l()
z=this.Q.a.l()
m=q+p
l=s.a
k=l[1]
j=r.a
i=j[1]
h=-k
l=l[0]
j=j[0]
g=t.a
t.aY(m+k*k*o+i*i*n,g[3],g[6],h*l*o-i*j*n,m+l*l*o+j*j*n,g[7],h*o-i*n,l*o+j*n,o+n)
m=x.a
l=v.a
if(this.ch>0){y.h(v)
y.q(0,r)
y.n(x)
y.n(s)
f=Math.sqrt(y.gV())
E.cf(t,z,y)
z.M()
y=m[0]
t=z.a
x.sj(0,y-q*t[0])
x.sk(0,m[1]-q*t[1])
w-=o*s.A(z)
v.sj(0,l[0]+p*t[0])
v.sk(0,l[1]+p*t[1])
u+=n*r.A(z)
e=0}else{y.h(v)
y.q(0,r)
y.n(x)
y.n(s)
d=u-w-this.dy
f=Math.sqrt(y.gV())
e=Math.abs(d)
k=this.Q.b.l()
j=this.Q.b.l()
y=y.a
k.cz(y[0],y[1],d)
E.h4(t,j,k)
j.M()
j=j.a
z.J(j[0],j[1])
k=m[0]
t=z.a
x.sj(0,k-q*t[0])
x.sk(0,m[1]-q*t[1])
w-=o*(s.A(z)+j[2])
v.sj(0,l[0]+p*t[0])
v.sk(0,l[1]+p*t[1])
u+=n*(r.A(z)+j[2])
this.Q.b.b-=2}z=a.b
y=this.fy
if(y>=z.length)return H.a(z,y)
z[y].st(w)
y=a.b
z=this.go
if(z>=y.length)return H.a(y,z)
y[z].st(u)
z=this.Q
z.a.b-=5
z.f.b-=2;--z.d.b
return f<=0.005&&e<=0.03490658503988659}},
ie:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,P,R,O,U,S,a_,a3,a9,aa,aq,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ac:function(a){G.z(this.f.d,this.cy,a)},
ad:function(a){G.z(this.r.d,this.db,a)},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.f
this.k2=z.c
this.k3=this.r.c
y=this.k4
y.h(z.f.a)
z=this.r1
z.h(this.r.f.a)
x=this.f
w=x.fx
this.r2=w
v=this.r
u=v.fx
this.rx=u
x=x.go
this.ry=x
v=v.go
this.x1=v
t=a.b
s=this.k2
if(s>=t.length)return H.a(t,s)
r=t[s].gw()
s=a.b
t=this.k2
if(t>=s.length)return H.a(s,t)
q=s[t].gt()
t=a.c
s=this.k2
if(s>=t.length)return H.a(t,s)
p=t[s].gC()
s=a.c
t=this.k2
if(t>=s.length)return H.a(s,t)
o=s[t].gp()
t=a.b
s=this.k3
if(s>=t.length)return H.a(t,s)
n=t[s].gw()
s=a.b
t=this.k3
if(t>=s.length)return H.a(s,t)
m=s[t].gt()
t=a.c
s=this.k3
if(s>=t.length)return H.a(t,s)
l=t[s].gC()
s=a.c
t=this.k3
if(t>=s.length)return H.a(s,t)
k=s[t].gp()
t=this.Q.f.l()
s=this.Q.f.l()
j=this.Q.a.l()
t.I(q)
s.I(m)
j.h(this.cy)
j.n(y)
y=this.a9
G.j(t,j,y)
j.h(this.db)
j.n(z)
z=this.aa
G.j(s,j,z)
s=this.aq
s.h(n)
s.q(0,z)
s.n(r)
s.n(y)
i=this.y1
G.aD(t,this.dy,i)
j.h(s)
j.q(0,y)
this.P=j.A(i)
h=z.A(i)
this.R=h
u=w+u
w=this.P
h=u+x*w*w+v*h*h
this.O=h
if(h>0)this.O=1/h
this.S=0
this.a_=0
this.a3=0
if(this.ch>0){w=this.x2
G.aD(t,this.dx,w)
j.h(s)
j.q(0,y)
this.y2=j.A(w)
z=z.A(w)
this.a2=z
j=this.y2
g=u+x*j*j+v*z*z
if(g>0){this.S=1/g
f=s.E(w)
e=6.283185307179586*this.ch
z=this.S
y=this.cx
d=z*e*e
c=a.a.a
y=c*(2*z*y*e+c*d)
this.a3=y
if(y>0){z=1/y
this.a3=z}else z=y
this.a_=f*c*d*z
z=g+z
this.S=z
if(z>0)this.S=1/z}}else this.fy=0
this.U=0
this.fx=0
if(a.a.f){z=this.Q.a.l()
y=this.fr
x=a.a.c
y*=x
this.fr=y
w=this.fy*=x
this.fx*=x
i=i.a
x=this.x2.a
z.sj(0,y*i[0]+w*x[0])
z.sk(0,this.fr*i[1]+this.fy*x[1])
x=this.fr
i=this.P
w=this.fy
y=this.y2
v=this.fx
u=this.R
t=this.a2
s=p.a
j=s[0]
h=this.r2
z=z.a
p.sj(0,j-h*z[0])
p.sk(0,s[1]-this.r2*z[1])
o-=this.ry*(x*i+w*y+v)
y=l.a
l.sj(0,y[0]+this.rx*z[0])
l.sk(0,y[1]+this.rx*z[1])
k+=this.x1*(x*u+w*t+v);--this.Q.a.b}else{this.fr=0
this.fy=0}z=this.Q
z.f.b-=2;--z.a.b
z=a.c
y=this.k2
if(y>=z.length)return H.a(z,y)
z[y].sp(o)
y=a.c
z=this.k3
if(z>=y.length)return H.a(y,z)
y[z].sp(k)},
af:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.r2
y=this.rx
x=this.ry
w=this.x1
v=a.c
u=this.k2
if(u>=v.length)return H.a(v,u)
t=v[u].gC()
u=a.c
v=this.k2
if(v>=u.length)return H.a(u,v)
s=u[v].gp()
v=a.c
u=this.k3
if(u>=v.length)return H.a(v,u)
r=v[u].gC()
u=a.c
v=this.k3
if(v>=u.length)return H.a(u,v)
q=u[v].gp()
v=this.Q.a.l()
u=this.Q.a.l()
p=this.x2
v.h(r)
v.n(t)
o=p.E(v)
n=this.a2
m=this.y2
l=this.S
k=this.a_
j=this.a3
i=this.fy
h=-l*(o+n*q-m*s+k+j*i)
this.fy=i+h
p=p.a
u.sj(0,h*p[0])
u.sk(0,h*p[1])
p=this.y2
i=this.a2
j=t.a
k=j[0]
m=u.a
t.sj(0,k-z*m[0])
t.sk(0,j[1]-z*m[1])
s-=x*(h*p)
p=r.a
r.sj(0,p[0]+y*m[0])
r.sk(0,p[1]+y*m[1])
q+=w*(h*i)
i=this.id
k=this.U
g=this.fx
f=a.a.a*this.go
i=Math.max(-f,Math.min(g+-k*(q-s-i),f))
this.fx=i
h=i-g
s-=x*h
q+=w*h
i=this.y1
v.h(r)
v.n(t)
v=i.E(v)
k=this.R
n=this.P
h=-this.O*(v+k*q-n*s)
this.fr+=h
i=i.a
u.sj(0,h*i[0])
u.sk(0,h*i[1])
i=this.P
u=this.R
t.sj(0,j[0]-z*m[0])
t.sk(0,j[1]-z*m[1])
r.sj(0,p[0]+y*m[0])
r.sk(0,p[1]+y*m[1])
this.Q.a.b-=2
m=a.c
p=this.k2
if(p>=m.length)return H.a(m,p)
m[p].sp(s-x*(h*i))
i=a.c
p=this.k3
if(p>=i.length)return H.a(i,p)
i[p].sp(q+w*(h*u))},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.b
y=this.k2
if(y>=z.length)return H.a(z,y)
x=z[y].gw()
y=a.b
z=this.k2
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.k3
if(y>=z.length)return H.a(z,y)
v=z[y].gw()
y=a.b
z=this.k3
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
t=this.Q.a.l()
z.I(w)
y.I(u)
t.h(this.cy)
t.n(this.k4)
s=this.a9
G.aD(z,t,s)
t.h(this.db)
t.n(this.r1)
r=this.aa
G.aD(y,t,r)
y=this.aq
y.h(v)
y.n(x)
y.q(0,r)
y.n(s)
q=this.Q.a.l()
G.aD(z,this.dy,q)
t.h(y)
t.q(0,s)
p=t.A(q)
o=r.A(q)
n=y.E(q)
y=this.r2
r=this.rx
t=this.ry
s=this.P
z=this.x1
m=this.R
l=y+r+t*s*s+z*m*m
k=l!==0?-n/l:0
z=this.Q.a.l()
q=q.a
z.sj(0,k*q[0])
z.sk(0,k*q[1])
q=x.a
y=q[0]
t=this.r2
z=z.a
x.sj(0,y-t*z[0])
x.sk(0,q[1]-this.r2*z[1])
q=this.ry
t=v.a
v.sj(0,t[0]+this.rx*z[0])
v.sk(0,t[1]+this.rx*z[1])
z=this.x1
t=this.Q
t.a.b-=3
t.f.b-=2
t=a.b
y=this.k2
if(y>=t.length)return H.a(t,y)
t[y].st(w-q*(k*p))
q=a.b
y=this.k3
if(y>=q.length)return H.a(q,y)
q[y].st(u+z*(k*o))
return Math.abs(n)<=0.005}},
ag:{"^":"c;a,b,c,d,e",
as:function(a){this.a=this.a*0.95+a*0.05
this.b=this.b*0.8+a*0.2
this.c=Math.min(a,this.c)
this.d=Math.max(a,this.d)},
u:function(a){return H.e(this.b)+" ("+H.e(this.a)+") ["+H.e(this.c)+","+H.e(this.d)+"]"}},
hE:{"^":"c;a,b,c,d,e,f,r,x,y,z"},
dD:{"^":"c;0a,0b,0c",
sbC:function(a){this.b=H.i(a,"$isd",[V.an],"$asd")},
sbD:function(a){this.c=H.i(a,"$isd",[V.aF],"$asd")}},
dO:{"^":"c;a,b,c,d,e,f"},
ii:{"^":"c;a,0b,0c,0d,e,f,r,x,0y,0z,0Q,ch,cx,cy,db,dx,dy,0fr,0fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,P,R,O,U,S,a_,a3,a9,aa,aq,aH,ax,ay,a4,am,an",
se5:function(a){this.y1=H.i(a,"$isd",[V.aP],"$asd")},
aO:function(a,b,c){var z,y,x,w,v,u,t
H.i(a,"$isa4",[V.S],"$asa4")
z=new V.bA(!1)
z.sd7(a)
z.b=!0
y=this.fy
x=b.a
w=y.length
if(x>=w)return H.a(y,x)
v=y[x]
u=c.a;(v&&C.a).m(v,u,z)
if(b!==c){t=new V.bA(!1)
t.sd7(a)
t.b=!1
if(u>=w)return H.a(y,u)
y=y[u];(y&&C.a).m(y,x,t)}},
h8:function(a,b,c,d){var z,y,x,w,v,u
z=a.d.a
y=c.d.a
x=this.fy
w=z.a
if(w>=x.length)return H.a(x,w)
w=x[w]
x=y.a
if(x>=w.length)return H.a(w,x)
v=w[x]
if(v!=null){x=v.b
w=v.a
if(x){u=w.l()
u.az(a,b,c,d)
return u}else{u=w.l()
u.az(c,d,a,b)
return u}}else return},
c2:function(a){var z,y,x,w,v,u,t,s,r,q,p
if((this.a&2)===2)return
z=new E.b(new Float64Array(2))
y=new G.A(0,1)
x=new Float64Array(2)
w=new E.b(new Float64Array(2))
v=new E.b(new Float64Array(2))
u=new E.b(new Float64Array(2))
t=new G.aE(w,v,u,0,0,0)
s=new E.b(new Float64Array(2))
r=new E.b(new Float64Array(2))
q=new Float64Array(2)
p=new V.aP(C.e,0,0,new G.E(z,y),new G.E(new E.b(x),new G.A(0,1)),t,s,0,r,0,this,0,0,0,0,0,0,0,0,0,new V.da(0.2,0,0,!1,new V.c7(1,65535,0)),new V.h3(0,new E.b(q),0),new G.E(new E.b(new Float64Array(2)),new G.A(0,1)))
p.b=4
p.b=6
p.b=38
z.h(a.c)
y.I(a.d)
w.K()
v.h(z)
u.h(z)
z=a.d
t.d=z
t.e=z
t.f=0
s.h(a.e)
p.x=a.f
p.id=a.r
p.k1=a.x
p.k2=a.cy
r.K()
r=a.a
p.a=r
if(r===C.f){p.fr=1
p.fx=1}p.k4=a.b
z=this.c
p.cx=z
if(z!=null)z.ch=p
this.c=p;++this.e
return p},
fB:function(a){var z,y,x,w,v,u,t,s
if((this.a&2)===2)return
z=V.fR(this,a)
z.b=null
y=this.d
z.c=y
if(y!=null)y.b=z
this.d=z;++this.f
y=z.d
y.b=z
x=z.r
y.a=x
y.c=null
w=z.f
v=w.dx
y.d=v
if(v!=null)v.c=y
w.dx=y
y=z.e
y.b=z
y.a=w
y.c=null
w=x.dx
y.d=w
if(w!=null)w.c=y
x.dx=y
u=a.c
t=a.d
if(!a.e){s=t.dy
for(;s!=null;){y=s.a
if(y==null?u==null:y===u)s.b.a|=8
s=s.d}}return z},
fi:function(){var z,y
for(z=this.c;z!=null;z=z.cx){y=z.y.a
y[0]=0
y[1]=0
z.z=0}},
fH:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=this.Q
if(z==null)return
y=z.a
x=(y&128)!==0
if((y&2)!==0){for(w=this.c,z=this.k2,v=this.k3,u=v.a.a,t=v.b;w!=null;w=w.cx){s=w.d
r=s.a.a
u[1]=r[1]
u[0]=r[0]
s=s.b
t.a=s.a
t.b=s.b
for(q=w.cy;q!=null;q=q.b){s=w.b
if((s&32)!==32){z.au(0.5,0.5,0.3)
this.bg(q,v,z,x)}else{p=w.a
if(p===C.e){z.au(0.5,0.9,0.3)
this.bg(q,v,z,x)}else if(p===C.H){z.au(0.5,0.5,0.9)
this.bg(q,v,z,x)}else if((s&2)!==2){z.au(0.5,0.5,0.5)
this.bg(q,v,z,x)}else{z.au(0.9,0.7,0.7)
this.bg(q,v,z,x)}}}}z=this.fx
v=this.Q.a
o=z.z
if(o!==0){n=z.r/2
m=z.cy.a
l=z.fx.a!=null?z.dF():null
z=this.Q
if((v&128)!==0)z.fJ(m,n,l,o)
else z.fI(m,n,l,o)}}if((y&4)!==0)for(k=this.d,z=this.ch.a,v=this.k2,u=z.a,t=u.length;k!=null;k=k.c){j=k.f
i=k.r
h=j.d.a
g=i.d.a
s=z.b
p=s+1
z.b=p
if(s<0||s>=t)return H.a(u,s)
s=u[s]
z.b=p+1
if(p<0||p>=t)return H.a(u,p)
p=u[p]
k.ac(s)
k.ad(p)
v.au(0.5,0.8,0.8)
switch(k.a){case C.M:this.Q.al(s,p,v)
break
case C.N:H.w(k,"$isdw")
f=k.ch
e=k.cx
this.Q.al(f,s,v)
this.Q.al(e,p,v)
this.Q.al(f,e,v)
break
case C.z:this.Q.al(h,g,v)
break
case C.L:case C.O:break
default:this.Q.al(h,s,v)
this.Q.al(s,p,v)
this.Q.al(g,p,v)}z.b-=2}if((y&16)!==0){z=this.k2
z.au(0.3,0.9,0.9)
for(d=this.b.b,v=this.k4,u=this.r1;d!=null;d=d.c){c=d.f
b=d.r
t=d.x
s=c.r
if(t>=s.length)return H.a(s,t)
s[t].gaQ().cn(v)
t=d.y
s=b.r
if(t>=s.length)return H.a(s,t)
s[t].gaQ().cn(u)
this.Q.al(v,u,z)}}if((y&8)!==0){z=this.k2
z.au(0.9,0.3,0.9)
for(w=this.c,v=this.r2,u=v.a,t=[E.b];w!=null;w=w.cx){if((w.b&32)!==32)continue
for(q=w.cy;q!=null;q=q.b)for(a=0;a<q.x;++a){s=q.r
if(a>=s.length)return H.a(s,a)
a0=s[a]
s=this.b.a
p=a0.d
s=s.a.b
if(p<0||p>=s.length)return H.a(s,p)
a1=s[p].gaQ()
if(!u.c1(4))u.m(0,4,v.cp(4))
s=u.i(0,4)
p=J.W(s)
a2=a1.a.a
p.i(s,0).J(a2[0],a2[1])
a3=a1.b.a
p.i(s,1).J(a3[0],a2[1])
p.i(s,2).J(a3[0],a3[1])
p.i(s,3).J(a2[0],a3[1])
a3=this.Q
a3.toString
a3.by(H.i(s,"$isd",t,"$asd"),4,z)
a3.c.stroke()}}}if((y&32)!==0){a4=new G.by(255,0,0)
for(w=this.c,z=this.k3,v=z.a,u=v.a,z=z.b;w!=null;w=w.cx){t=w.d
r=t.a.a
u[1]=r[1]
u[0]=r[0]
t=t.b
z.a=t.a
z.b=t.b
r=w.f.c.a
u[1]=r[1]
u[0]=r[0]
t=this.Q
t.bx(v,0.1*t.b.c,a4)
t.c.stroke()}}if((y&64)!==0)this.b.a.a.fK(this.Q)
this.Q.toString},
bI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.fr
z.f.e=0
z.r.e=0
z.x.e=0
for(y=this.c;y!=null;y=y.cx){z=y.e
x=y.d
w=x.a.a
v=z.a.a
v[1]=w[1]
v[0]=w[0]
z=z.b
x=x.b
z.a=x.a
z.b=x.b}z=this.x2
x=this.e
v=this.b
z.az(x,v.c,this.f,v.e)
for(y=this.c;y!=null;y=y.cx)y.b&=4294967294
for(u=this.b.b;u!=null;u=u.c)u.a&=4294967294
for(t=this.d;t!=null;t=t.c)t.x=!1
s=this.e
if(this.y1.length<s){x=new Array(s)
x.fixed$length=Array
this.se5(H.f(x,[V.aP]))}for(r=this.c,x=this.r;r!=null;r=r.cx){v=r.b
if((v&1)===1)continue
if((v&2)!==2||(v&32)!==32)continue
if(r.a===C.e)continue
z.r=0
z.y=0
z.x=0
C.a.m(this.y1,0,r)
r.b|=1
for(q=1;q>0;){v=this.y1;--q
if(q>=v.length)return H.a(v,q)
y=v[q]
v=z.r
y.c=v
p=z.b;(p&&C.a).m(p,v,y);++z.r
y.aj(!0)
if(y.a===C.e)continue
for(o=y.dy;o!=null;o=o.d){n=o.b
v=n.a
if((v&1)===1)continue
if((v&4)!==4||(v&2)!==2)continue
n.f.z
n.r.z
v=z.c;(v&&C.a).m(v,z.y++,n)
n.a|=1
m=o.a
if((m.b&1)===1)continue
l=q+1
C.a.m(this.y1,q,m)
m.b|=1
q=l}for(k=y.dx;k!=null;k=k.d){v=k.b
if(v.x)continue
m=k.a
if((m.b&32)!==32)continue
p=z.d;(p&&C.a).m(p,z.x++,v)
k.b.x=!0
if((m.b&1)===1)continue
l=q+1
C.a.m(this.y1,q,m)
m.b|=1
q=l}}z.dM(this.fr,a,x,this.x)
for(j=0;j<z.r;++j){v=z.b
if(j>=v.length)return H.a(v,j)
y=v[j]
if(y.a===C.e)y.b&=4294967294}}z=this.fr.f
z.as(z.e)
z=this.fr.r
z.as(z.e)
z=this.fr.x
z.as(z.e)
z=this.y2.a
z.aL(0)
for(y=this.c;y!=null;y=y.cx){if((y.b&1)===0)continue
if(y.a===C.e)continue
y.cG()}x=this.b
x.a.ck(x)
x=this.fr.y
z=z.gaG()
v=$.I
if(typeof v!=="number")return H.J(v)
x.as(C.c.av(z*1000,v))},
dZ:function(b4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
z=this.a2
z.az(64,32,0,this.b.e)
if(this.dy){for(y=this.c;y!=null;y=y.cx){y.b&=4294967294
y.f.f=0}for(x=this.b.b;x!=null;x=x.c){x.a&=4294967262
x.Q=0
x.ch=1}}for(w=this.O,v=this.U,u=this.S,t=this.a_,s=this.R,r=this.P,q=r.a,p=r.b,o=r.c,n=r.d,m=this.ch;!0;){for(x=this.b.b,l=null,k=1;x!=null;x=x.c){j=x.a
if((j&4)!==4)continue
if(x.Q>8)continue
if((j&32)!==0)i=x.ch
else{h=x.f
g=x.r
h.z
g.z
f=h.c
e=g.c
d=f.a
c=e.a
j=f.b
b=(j&2)===2&&d!==C.e
a=e.b
a0=(a&2)===2&&c!==C.e
if(!b&&!a0)continue
a1=(j&8)===8||d!==C.f
a2=(a&8)===8||c!==C.f
if(!a1&&!a2)continue
j=f.f
a3=j.f
a=e.f
a4=a.f
if(a3<a4){j.aR(a4)
a3=a4}else if(a4<a3)a.aR(a3)
a5=x.x
a6=x.y
q.cw(h.d,a5)
p.cw(g.d,a6)
o.N(j)
n.N(a)
r.e=1
m.fx.hl(s,r)
a7=s.b
i=s.a===C.F?Math.min(a3+(1-a3)*a7,1):1
x.ch=i
x.a|=32}if(i<k){k=i
l=x}}if(l==null||0.9999988079071045<k){this.dy=!0
break}h=l.f
g=l.r
f=h.c
e=g.c
j=f.f
u.N(j)
a=e.f
t.N(a)
f.aR(k)
e.aR(k)
l.cj(this.b.e)
a8=l.a&=4294967263;++l.Q
if((a8&4)!==4||(a8&2)!==2){l.a=a8&4294967291
j.N(u)
a.N(t)
f.b_()
e.b_()
continue}f.aj(!0)
e.aj(!0)
z.r=0
z.y=0
z.x=0
f.c=0
j=z.b;(j&&C.a).m(j,0,f)
j=++z.r
e.c=j
a=z.b;(a&&C.a).m(a,j,e);++z.r
j=z.c;(j&&C.a).m(j,z.y++,l)
f.b|=1
e.b|=1
l.a|=1
C.a.m(v,0,f)
C.a.m(v,1,e)
for(a9=0;a9<2;++a9){b0=v[a9]
if(b0.a===C.f)for(b1=b0.dy;b1!=null;b1=b1.d){if(z.r===z.z)break
if(z.y===z.Q)break
b2=b1.b
if((b2.a&1)!==0)continue
b3=b1.a
if(b3.a===C.f&&(b0.b&8)!==8&&(b3.b&8)!==8)continue
b2.f.z
b2.r.z
j=b3.f
u.N(j)
if((b3.b&1)===0)b3.aR(k)
b2.cj(this.b.e)
a=b2.a
if((a&4)!==4){j.N(u)
b3.b_()
continue}if((a&2)!==2){j.N(u)
b3.b_()
continue}b2.a=a|1
j=z.c;(j&&C.a).m(j,z.y++,b2)
j=b3.b
if((j&1)!==0)continue
b3.b=j|1
if(b3.a!==C.e)b3.aj(!0)
j=z.r
b3.c=j
a=z.b;(a&&C.a).m(a,j,b3);++z.r}}j=(1-k)*b4.a
w.a=j
w.b=1/j
w.c=1
w.e=20
w.d=b4.d
w.f=!1
z.e_(w,f.c,e.c)
for(a9=0;a9<z.r;++a9){j=z.b
if(a9>=j.length)return H.a(j,a9)
b0=j[a9]
b0.b&=4294967294
if(b0.a!==C.f)continue
b0.cG()
for(b1=b0.dy;b1!=null;b1=b1.d)b1.b.a&=4294967262}j=this.b
j.a.ck(j)}},
bg:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q
z=a.d
switch(z.a){case C.m:H.w(z,"$isaU")
y=this.ax
G.o(b,z.gab(),y)
x=z.gb6()
z=b.b
this.ay.J(z.b,z.a)
z=this.Q
if(d)z.fF(y,x,c)
else{z.bx(y,x.v(0,z.b.c),c)
z.c.fill()}break
case C.j:w=z.f
v=this.an.dz(8)
for(y=J.W(v),u=0;u<w;++u){t=z.d
if(u>=8)return H.a(t,u)
G.o(b,t[u],y.i(v,u))}z=this.Q
y=[E.b]
if(d){z.toString
z.by(H.i(v,"$isd",y,"$asd"),w,c)
z.c.stroke()}else{z.toString
z.by(H.i(v,"$isd",y,"$asd"),w,c)
z.c.fill()}break
case C.p:H.w(z,"$isaY")
y=this.a4
G.o(b,z.c,y)
t=this.am
G.o(b,z.d,t)
this.Q.al(y,t,c)
break
case C.y:H.w(z,"$isc3")
s=z.geK()
v=z.gbZ()
z=this.a4
G.o(b,v.i(0,0),z)
for(y=this.am,r=y.a,t=z.a,u=1;C.c.L(u,s);++u){G.o(b,v.i(0,u),y)
this.Q.al(z,y,c)
q=this.Q
q.bx(z,0.05*q.b.c,c)
q.c.stroke()
t[1]=r[1]
t[0]=r[0]}break
default:break}},
G:{
io:function(a,b){var z,y,x,w
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[[P.d,V.bA]])
for(z=[V.bA],x=0;x<a;++x){w=new Array(b)
w.fixed$length=Array
C.a.m(y,x,H.f(w,z))}return y}}},
il:{"^":"c;0a,0b",
dv:function(a){var z,y
z=this.a.a.b
if(a<0||a>=z.length)return H.a(z,a)
y=z[a].gaB()
return this.b.hZ(y.b)},
$isi4:1},
im:{"^":"c;a,b,c,0d,0e"},
ks:{"^":"c;"},
am:{"^":"c;a",
st:function(a){this.a[3]=H.k(a)},
gt:function(){return this.a[3]}},
kt:{"^":"c;"},
ht:{"^":"c;a,b,c,0d,0aB:e<"},
ku:{"^":"c;"},
Z:{"^":"c;0a,b,c,$ti",
sd9:function(a,b){this.a=H.i(b,"$isd",this.$ti,"$asd")}},
hs:{"^":"c;0a,0b"},
kC:{"^":"c;"},
kD:{"^":"c;"},
dv:{"^":"c;",$isH:1,
$asH:function(){return[V.dv]}},
hh:{"^":"c;a,b,c"},
fn:{"^":"c;0a,0b,0c,d,e"},
ia:{"^":"c;0a,b",$ishF:1},
fd:{"^":"c;0a,0b,0c"},
hR:{"^":"c;0a,0b,c,d,e,f",$ishF:1},
hu:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,id,k1,0k2,k3,k4,0r1,r2,rx,0ry,x1,x2,0y1,y2,a2,0P,R,0O,0U,0S,0a_,0a3,0a9,0aa,0aq,0aH,0ax,0ay,0a4,am,an,hJ,bh,hK,hL,hM,hN,fM,fN,fO,fP,fQ,fR,hO",
sh9:function(a){this.cy=H.i(a,"$isZ",[E.b],"$asZ")},
shq:function(a){this.db=H.i(a,"$isZ",[E.b],"$asZ")},
sfd:function(a){this.dy=H.i(a,"$isd",[E.b],"$asd")},
sfp:function(a){this.fx=H.i(a,"$isZ",[V.am],"$asZ")},
shp:function(a){this.go=H.i(a,"$isZ",[P.c],"$asZ")},
cg:function(a,b,c){var z,y,x,w,v
H.i(a,"$isd",[c],"$asd")
H.u(b,{func:1,ret:c})
if(a==null){x=this.Q
w=new Array(x)
w.fixed$length=Array
a=H.f(w,[c])
for(z=0;J.cI(z,x);z=J.eG(z,1))try{J.eI(a,z,b.$0())}catch(v){y=H.aM(v)
x="Exception "+H.e(y)
throw H.h(x)}}return a},
fD:function(a){var z,y
z=this.a4
z.cr()
z.cr().hy(a)
for(y=a.gbt(),z=this.fy;y.L(0,a.gbv());y=y.B(0,1))C.d.m(z,y,null)
a.gbU()
a.gbU().sbS(a.gbS())
a.gbS()
a.gbS().sbU(a.gbU());--this.R},
ho:function(a){var z,y,x,w,v,u,t
for(z=this.k2,y=this.x,x=0;w=this.id,x<w;++x){v=C.d.i(z,x)
u=v.gc8(v)
w=this.cy.a
w=(w&&C.a).i(w,u).a
t=w[0]
v.shi((C.b.a7(y*w[1]+2048)<<19>>>0)+(C.b.a7(128*(y*t))+262144))}F.eE(z,0,w,V.dv)
this.k3=0
for(u=0;u<this.id;++u)V.hw(C.d.i(z,u).ghi(),1,0)},
hn:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.am
y=z.a
y.sj(0,17976931348623157e292)
y.sk(0,17976931348623157e292)
x=z.b
x.sj(0,-17976931348623157e292)
x.sk(0,-17976931348623157e292)
for(w=this.z,v=this.cy.a,u=y.a,t=x.a,s=0;s<w;++s){if(s>=v.length)return H.a(v,s)
r=v[s]
q=u[0]
p=r.a
u[0]=Math.min(q,p[0])
u[1]=Math.min(u[1],p[1])
t[0]=Math.max(t[0],p[0])
t[1]=Math.max(t[1],p[1])}w=this.r
y.sj(0,u[0]-w)
y.sk(0,u[1]-w)
x.sj(0,t[0]+w)
x.sk(0,t[1]+w)
this.r2=0
w=this.fM
w.a=this
this.a4.hc(w,z)},
dP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.am
y=z.a
x=z.b
y.sj(0,17976931348623157e292)
y.sk(0,17976931348623157e292)
x.sj(0,-17976931348623157e292)
x.sk(0,-17976931348623157e292)
for(w=this.z,v=x.a,u=y.a,t=this.db.a,s=this.cy.a,r=a.a,q=0;q<w;++q){if(q>=t.length)return H.a(t,q)
p=t[q]
if(q>=s.length)return H.a(s,q)
o=s[q].a
n=o[0]
m=o[1]
o=p.a
l=n+r*o[0]
k=m+r*o[1]
j=n<l?n:l
i=m<k?m:k
o=u[0]
u[0]=o<j?o:j
o=u[1]
u[1]=o<i?o:i
h=n>l?n:l
g=m>k?m:k
o=v[0]
v[0]=o>h?o:h
o=v[1]
v[1]=o>g?o:g}w=this.fN
w.b=a
w.a=this
this.a4.hc(w,z)},
bI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j;++this.a
if(this.z===0)return
this.b=0
for(z=0,y=0;z<this.z;++z){y=C.c.ct(y,C.d.i(this.cx.a,z))
this.b=y}if((y&2)!==0)this.e4()
if(this.z===0)return
this.c=0
for(x=this.O;!1;x=x.bE())this.c=C.c.ct(this.c,x.gcR())
y=a.a
w=this.f
v=this.a4
u=v.dE()
t=C.b.v(y*w,u.gj(u))
u=a.a
v=v.dE()
s=C.b.v(u*w,v.gk(v))
r=this.r*a.b
q=r*r
for(z=0;z<this.z;++z){y=this.db.a
if(z>=y.length)return H.a(y,z)
y=y[z].a
y[0]=y[0]+t
y[1]=y[1]+s
w=y[0]
v=y[1]
p=w*w+v*v
if(p>q){o=p===0?17976931348623157e292:Math.sqrt(q/p)
y[0]=y[0]*o
y[1]=y[1]*o}}this.dP(a)
if((this.c&2)!==0)this.dW(a)
if((this.b&4)!==0)this.e3(a)
for(y=this.z,w=this.cy.a,v=this.db.a,u=a.a,z=0;z<y;++z){if(z>=w.length)return H.a(w,z)
n=w[z]
if(z>=v.length)return H.a(v,z)
m=v[z]
l=n.a
k=l[0]
j=m.a
l[0]=k+u*j[0]
l[1]=l[1]+u*j[1]}this.hn()
this.ho(!1)
if((this.b&32)!==0)this.e2(a)
if((this.b&64)!==0)this.dU(a)
if((this.b&128)!==0)this.e1(a)
if((this.b&16)!==0)this.dS(a)
if((this.b&8)!==0)this.dY(a)
if((this.c&1)!==0)this.dX(a)
if((this.b&256)!==0)this.dQ(a)
this.dV(a)
this.dR(a)},
dV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(z=this.dx,y=0;y<this.z;++y)C.d.m(z,y,0)
for(x=0;x<this.r2;++x){w=this.ry
if(x>=w.length)return H.a(w,x)
v=w[x]
u=v.a
t=v.c
z.m(0,u,C.d.i(z,u).B(0,t))}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.a(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
z.m(0,u,C.d.i(z,u).B(0,t))
z.m(0,s,z.i(0,s).B(0,t))}if((this.b&64)!==0)for(y=0;y<this.z;++y){C.d.i(this.cx.a,y).ai(0,64)
C.d.m(z,y,0)}w=this.U
r=this.d
q=this.r
p=q*a.b
o=w*(r*(p*p))
for(y=0;y<this.z;++y)z.m(0,y,o*Math.max(0,Math.min(H.jg(C.d.i(z,y)),5)-1))
n=a.a/(this.d*q)
for(m=this.bh,w=m.a,r=this.x,l=1.777777*this.e*r*r,x=0;x<this.r2;++x){r=this.ry
if(x>=r.length)return H.a(r,x)
v=r[x]
u=v.a
s=v.b
t=v.c
k=v.e
j=v.d
r=this.cy.a
i=(r&&C.a).i(r,u)
h=C.l.v(n*t*k,C.d.i(z,u).B(0,o*t))
r=j.a
w[0]=h*r[0]
w[1]=h*r[1]
r=this.db.a
r=(r&&C.a).i(r,u).a
r[0]=r[0]-l*w[0]
r[1]=r[1]-l*w[1]
s.c_(m,i,!0)}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.a(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
j=v.e
g=C.d.i(z,u).B(0,z.i(0,s))
w=n*t
r=j.a
f=C.l.v(w,g)*r[0]
e=C.l.v(w,g)*r[1]
r=this.db.a
d=(r&&C.a).i(r,u)
r=this.db.a
c=(r&&C.a).i(r,s)
r=d.a
r[0]=r[0]-f
r[1]=r[1]-e
r=c.a
r[0]=r[0]+f
r[1]=r[1]+e}},
dR:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.S
for(y=this.bh,x=y.a,w=this.x,v=1.777777*this.e*w*w,u=0;u<this.r2;++u){w=this.ry
if(u>=w.length)return H.a(w,u)
t=w[u]
s=t.a
r=t.b
q=t.c
p=t.e
o=t.d
w=this.cy.a
n=(w&&C.a).i(w,s)
w=n.a
m=w[0]
l=r.gaP().gw()
k=C.b.H(m,l.gj(l))
w=w[1]
l=r.gaP().gw()
j=C.b.H(w,l.gk(l))
l=this.db.a
i=(l&&C.a).i(l,s)
l=r.gbs().bp(0).v(0,j)
w=r.gbw()
w=l.B(0,w.gj(w))
l=i.a
h=w.H(0,l[0])
w=r.gbs().v(0,k)
m=r.gbw()
g=w.B(0,m.gk(m)).H(0,l[1])
m=o.a
f=h.v(0,m[0]).B(0,g.v(0,m[1]))
if(f.L(0,0)){w=z*q*p
x[0]=C.b.v(w,f)*m[0]
x[1]=C.b.v(w,f)*m[1]
l[0]=l[0]+v*x[0]
l[1]=l[1]+v*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.c_(y,n,!0)}}for(u=0;u<this.k3;++u){x=this.r1
if(u>=x.length)return H.a(x,u)
t=x[u]
s=t.a
r=t.b
q=t.d
o=t.e
x=this.db.a
i=(x&&C.a).i(x,s)
x=this.db.a
x=(x&&C.a).i(x,r).a
w=x[0]
m=i.a
l=m[0]
e=x[1]
d=m[1]
c=o.a
b=c[0]
c=c[1]
f=(w-l)*b+(e-d)*c
if(f<0){w=z*q*f
a=w*b
a0=w*c
m[0]=l+a
m[1]=d+a0
x[0]=x[0]-a
x[1]=x[1]-a0}}},
e3:function(a){var z,y,x
for(z=0;z<this.z;++z){C.d.i(this.cx.a,z).ai(0,4)
y=this.db.a
x=y.length
if(z>=x)return H.a(y,z)
y=y[z].a
y[0]=0
y[1]=0}},
dW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
for(z=this.O,y=this.bh,x=this.fO,w=this.fP,v=y.a,u=this.fQ,t=u.a,s=t.a,u=u.b,r=this.fR,q=r.a.a,p=r.b;!1;z=z.bE()){z.gcR().ai(0,2)
z.i0()
o=C.b.v(a.a,z.gbs())
w.a=Math.sin(o)
w.b=Math.cos(o)
G.j(w,z.geD(),x)
n=z.gbw().gbX()
o=n.length
if(1>=o)return H.a(n,1)
v[1]=n[1]
v[0]=n[0]
y.F(0,a.a)
y.q(0,z.geD())
y.n(x)
s[1]=v[1]
s[0]=v[0]
u.a=w.a
u.b=w.b
o=z.gbW()
m=z.gbW()
l=o.gce()
k=m.gce()
j=C.b.v(u.b,l.gw())
i=C.b.v(u.a,l.gcu())
k.scu(C.b.v(u.a,l.gw())+C.b.v(u.b,l.gcu()))
k.sw(j-i)
G.aD(u,o.gab(),m.gab())
m.gab().q(0,t)
m=a.b
q[0]=m*s[0]
q[1]=m*s[1]
p.a=m*u.a
p.b=m*(u.b-1)
for(h=z.gbt();h.L(0,z.gbv());h=h.B(0,1)){o=this.cy.a
o=(o&&C.a).i(o,h)
m=this.db.a
G.o(r,o,(m&&C.a).i(m,h))}}},
dS:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=a6.b*this.a_
for(y=0;y<this.y2;++y){x=C.d.i(this.P,y)
x.gfU().ai(0,16)
w=x.gaT()
v=x.gaU()
u=x.gc9()
t=x.ghW()
s=x.ghX()
r=x.ghY()
q=this.cy.a
p=(q&&C.a).i(q,w)
q=this.cy.a
o=(q&&C.a).i(q,v)
q=this.cy.a
n=(q&&C.a).i(q,u)
q=p.a
m=q[0]
l=o.a
k=l[0]
j=n.a
i=0.3333333333333333*(m+k+j[0])
h=0.3333333333333333*(q[1]+l[1]+j[1])
g=t.A(p).B(0,s.A(o)).B(0,r.A(n))
f=t.E(p).B(0,s.E(o)).B(0,r.E(n))
e=Math.sqrt(C.c.cm(1,g.v(0,g).B(0,f.v(0,f))))
g=g.v(0,e)
f=f.v(0,e)
d=C.b.v(z,x.ge9())
c=f.v(0,t.gj(t)).H(0,g.v(0,t.gk(t)))
b=g.v(0,t.gj(t)).B(0,f.v(0,t.gk(t)))
a=f.v(0,s.gj(s)).H(0,g.v(0,s.gk(s)))
a0=g.v(0,s.gj(s)).B(0,f.v(0,s.gk(s)))
a1=f.v(0,r.gj(r)).H(0,g.v(0,r.gk(r)))
a2=g.v(0,r.gj(r)).B(0,f.v(0,r.gk(r)))
m=this.db.a
a3=(m&&C.a).i(m,w)
m=this.db.a
a4=(m&&C.a).i(m,v)
m=this.db.a
a5=(m&&C.a).i(m,u)
m=a3.a
m[0]=m[0]+C.b.v(d,c.H(0,q[0]-i))
m[1]=m[1]+C.b.v(d,b.H(0,q[1]-h))
q=a4.a
q[0]=q[0]+C.b.v(d,a.H(0,l[0]-i))
q[1]=q[1]+C.b.v(d,a0.H(0,l[1]-h))
l=a5.a
l[0]=l[0]+C.b.v(d,a1.H(0,j[0]-i))
l[1]=l[1]+C.b.v(d,a2.H(0,j[1]-h))}},
dY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.b*this.a3
for(y=this.y1,x=0;x<this.x1;++x){w=C.d.i(y,x)
w.gfU().ai(0,8)
v=w.gaT()
u=w.gaU()
t=this.cy.a
s=(t&&C.a).i(t,v)
t=this.cy.a
t=(t&&C.a).i(t,u).a
r=t[0]
q=s.a
p=r-q[0]
o=t[1]-q[1]
n=w.ghI()
m=Math.sqrt(p*p+o*o)
if(m===0)m=17976931348623157e292
l=C.b.v(z,w.ge9())
k=C.b.v(l,n.H(0,m))/m*p
j=C.b.v(l,n.H(0,m))/m*o
t=this.db.a
i=(t&&C.a).i(t,v)
t=this.db.a
h=(t&&C.a).i(t,u)
t=i.a
t[0]=t[0]-k
t[1]=t[1]-j
t=h.a
t[0]=t[0]+k
t[1]=t[1]+j}},
e1:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
this.sfd(this.cg(this.dy,V.cz(),E.b))
for(z=this.dx,y=0;y<this.z;++y){C.d.m(z,y,0)
x=this.dy
if(y>=x.length)return H.a(x,y)
x[y].K()}for(w=0;w<this.k3;++w){x=this.r1
if(w>=x.length)return H.a(x,w)
v=x[w]
if((v.c&128)!==0){u=v.a
t=v.b
s=v.d
r=v.e
z.m(0,u,C.d.i(z,u).B(0,s))
z.m(0,t,z.i(0,t).B(0,s))
x=this.dy
q=(x&&C.a).i(x,u)
x=this.dy
p=(x&&C.a).i(x,t)
o=(1-s)*s
x=q.a
n=r.a
x[0]=x[0]-o*n[0]
x[1]=x[1]-o*n[1]
x=p.a
x[0]=x[0]+o*n[0]
x[1]=x[1]+o*n[1]}}x=this.aa
n=this.r*a0.b
m=x*n
l=this.aq*n
for(w=0;w<this.k3;++w){x=this.r1
if(w>=x.length)return H.a(x,w)
v=x[w]
if((v.c&128)!==0){u=v.a
t=v.b
s=v.d
r=v.e
x=this.dy
q=(x&&C.a).i(x,u)
x=this.dy
p=(x&&C.a).i(x,t)
k=C.d.i(z,u).B(0,z.i(0,t))
x=p.a
n=x[0]
j=q.a
i=j[0]
x=x[1]
j=j[1]
h=C.l.v(m,k.H(0,2))
g=r.a
f=g[0]
g=g[1]
e=(h+l*((n-i)*f+(x-j)*g))*s
d=e*f
c=e*g
g=this.db.a
b=(g&&C.a).i(g,u)
g=this.db.a
a=(g&&C.a).i(g,t)
g=b.a
g[0]=g[0]-d
g[1]=g[1]-c
g=a.a
g[0]=g[0]+d
g[1]=g[1]+c}}},
e2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a9
for(y=this.bh,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.a(u,v)
t=u[v]
s=t.a
C.d.i(this.cx.a,s).ai(0,32)
r=t.b
q=t.c
p=t.e
u=this.cy.a
o=(u&&C.a).i(u,s)
u=this.db.a
n=(u&&C.a).i(u,s)
u=o.a
m=u[0]
l=r.gaP().gw()
k=C.b.H(m,l.gj(l))
u=u[1]
l=r.gaP().gw()
j=C.b.H(u,l.gk(l))
l=r.gbs().bp(0).v(0,j)
u=r.gbw()
u=l.B(0,u.gj(u))
l=n.a
i=u.H(0,l[0])
u=r.gbs().v(0,k)
m=r.gbw()
h=u.B(0,m.gk(m)).H(0,l[1])
m=z*p*q
x[0]=C.l.v(m,i)
x[1]=C.l.v(m,h)
l[0]=l[0]+w*x[0]
l[1]=l[1]+w*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.c_(y,o,!0)}for(v=0;v<this.k3;++v){x=this.r1
if(v>=x.length)return H.a(x,v)
t=x[v]
if((t.c&32)!==0){s=t.a
r=t.b
q=t.d
x=this.db.a
n=(x&&C.a).i(x,s)
x=this.db.a
x=(x&&C.a).i(x,r).a
u=x[0]
m=n.a
l=m[0]
g=x[1]
f=m[1]
e=z*q
d=e*(u-l)
c=e*(g-f)
m[0]=l+d
m[1]=f+c
x[0]=x[0]-d
x[1]=x[1]-c}}},
dU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.aH*(this.r*a.b)
for(y=this.bh,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.a(u,v)
t=u[v]
s=t.a
C.d.i(this.cx.a,s).ai(0,64)
r=t.c
if(r>0.25){q=t.b
p=t.e
u=this.cy.a
o=(u&&C.a).i(u,s)
n=t.d
u=this.db.a
m=(u&&C.a).i(u,s)
l=z*p*(r-0.25)
u=n.a
x[0]=l*u[0]
x[1]=l*u[1]
u=m.a
u[0]=u[0]-w*x[0]
u[1]=u[1]-w*x[1]
q.c_(y,o,!0)}}for(v=0;v<this.k3;++v){x=this.r1
if(v>=x.length)return H.a(x,v)
t=x[v]
if((t.c&64)!==0){r=t.d
if(r>0.25){s=t.a
q=t.b
n=t.e
x=this.db.a
m=(x&&C.a).i(x,s)
x=this.db.a
k=(x&&C.a).i(x,q)
l=this.aH*(r-0.25)
x=n.a
j=l*x[0]
i=l*x[1]
x=m.a
x[0]=x[0]-j
x[1]=x[1]-i
x=k.a
x[0]=x[0]+j
x[1]=x[1]+i}}}},
dX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.fr
if(z==null)z=new Float64Array(this.Q)
this.fr=z
y=a.b*this.ax
for(x=this.fy,w=0;w<this.k3;++w){v=this.r1
if(w>=v.length)return H.a(v,w)
u=v[w]
t=u.a
s=u.b
C.d.i(x,t)
x.i(0,s)
r=u.d
q=u.e
v=this.fr
v=(v&&C.i).i(v,t)
p=this.fr
p=(p&&C.i).i(p,s)
o=this.db.a
n=(o&&C.a).i(o,t)
o=this.db.a
m=(o&&C.a).i(o,s)
l=y*(v+p)*r
p=q.a
k=l*p[0]
j=l*p[1]
p=n.a
p[0]=p[0]-k
p[1]=p[1]-j
p=m.a
p[0]=p[0]+k
p[1]=p[1]+j}},
dQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.fx
z.sd9(0,this.cg(z.a,V.et(),V.am))
y=C.b.a7(256*this.ay)
for(x=0;x<this.k3;++x){z=this.r1
if(x>=z.length)return H.a(z,x)
w=z[x]
v=w.a
u=w.b
C.d.i(this.cx.a,v).ai(0,C.d.i(this.cx.a,u)).ai(0,256)
z=this.fx.a
t=(z&&C.a).i(z,v)
z=this.fx.a
z=(z&&C.a).i(z,u).a
s=z[0]
r=t.a
q=C.c.bf(C.c.a7(y*(s-r[0])),8)
p=C.c.bf(C.c.a7(y*(z[1]-r[1])),8)
o=C.c.bf(C.c.a7(y*(z[2]-r[2])),8)
n=C.c.bf(C.c.a7(y*(z[3]-r[3])),8)
r[0]=r[0]+q
r[1]=r[1]+p
r[2]=r[2]+o
r[3]=r[3]+n
z[0]=z[0]-q
z[1]=z[1]-p
z[2]=z[2]-o
z[3]=z[3]-n}},
e4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=P.aB(this.z,0,!1,P.v)
for(y=this.a4,x=0;x<this.z;++x){w=C.d.i(this.cx.a,x)
w.ai(0,2)
v=y.cr()
w.ai(0,512)
v.hx(x)
C.a.m(z,x,-1)}for(y=this.k2,u=0;t=this.id,u<t;++u){s=C.d.i(y,u)
s.sc8(0,C.a.i(z,s.gc8(s)))}for(x=0;x<t;++x)if(V.hv(C.d.i(y,x))){--t
r=y.i(0,t)
y.m(0,t,y.i(0,x))
y.m(0,x,r);--x}this.id=t
for(u=0;t=this.k3,u<t;++u){y=this.r1
if(u>=y.length)return H.a(y,u)
q=y[u]
q.a=H.k(C.a.i(z,q.a))
q.b=H.k(C.a.i(z,q.b))}for(x=0;x<t;++x){y=this.r1
p=y.length
if(x<0||x>=p)return H.a(y,x)
o=y[x]
n=o.a
if(typeof n!=="number")return n.L()
if(n>=0){n=o.b
if(typeof n!=="number")return n.L()
n=n<0}else n=!0
if(n){--t
if(t<0||t>=p)return H.a(y,t)
r=y[t];(y&&C.a).m(y,t,o)
y=this.r1;(y&&C.a).m(y,x,r);--x}}this.k3=t
for(u=0;t=this.r2,u<t;++u){y=this.ry
if(u>=y.length)return H.a(y,u)
q=y[u]
q.a=H.k(C.a.i(z,q.a))}for(x=0;x<t;++x){y=this.ry
p=y.length
if(x<0||x>=p)return H.a(y,x)
o=y[x]
n=o.a
if(typeof n!=="number")return n.L()
if(n<0){--t
if(t<0||t>=p)return H.a(y,t)
r=y[t];(y&&C.a).m(y,t,o)
y=this.ry;(y&&C.a).m(y,x,r);--x}}this.r2=t
for(y=this.y1,u=0;t=this.x1,u<t;++u){m=C.d.i(y,u)
m.saT(C.a.i(z,m.gaT()))
m.saU(C.a.i(z,m.gaU()))}for(x=0;x<t;++x){p=C.d.i(y,x)
if(p.gaT().L(0,0)||p.gaU().L(0,0)){--t
r=y.i(0,t)
y.m(0,t,y.i(0,x))
y.m(0,x,r);--x}}this.x1=t
for(u=0;t=this.y2,u<t;++u){l=C.d.i(this.P,u)
l.saT(C.a.i(z,l.gaT()))
l.saU(C.a.i(z,l.gaU()))
l.sc9(C.a.i(z,l.gc9()))}for(x=0;x<t;++x){y=C.d.i(this.P,x)
if(y.gaT().L(0,0)||y.gaU().L(0,0)||y.gc9().L(0,0)){--t
r=C.d.i(this.P,t)
y=this.P
y.m(0,t,C.d.i(y,x))
C.d.m(this.P,x,r);--x}}this.y2=t
for(k=this.O;!1;k=k.bE()){for(x=k.gbt(),j=0,i=0,h=!1;x.L(0,k.gbv());x=x.B(0,1)){t=C.a.i(z,x)
if(typeof t!=="number")return t.ht()
if(t>=0){j=Math.min(j,t)
i=Math.max(i,t+1)}else h=!0}if(j<i){k.sbt(j)
k.sbv(i)
if(h){k.gcR().ai(0,2)
k.sfc(!0)}}else{k.sbt(0)
k.sbv(0)
if(k.ghB())k.sfb(!0)}}this.z=0
for(k=this.O;!1;k=g){g=k.bE()
if(k.gfb())this.fD(k)
else k.gfc()}},
dF:function(){var z=this.fx
z.sd9(0,this.cg(z.a,z.b,V.am))
return this.fx.a},
G:{
hw:function(a,b,c){return a.B(0,c<<19>>>0).B(0,b<<7>>>0)},
kx:[function(){return new E.b(new Float64Array(2))},"$0","cz",0,0,22],
kv:[function(){return new P.c()},"$0","jf",0,0,23],
kw:[function(){var z=new Int8Array(4)
z[0]=127
z[1]=127
z[2]=127
z[3]=50
return new V.am(z)},"$0","et",0,0,24]}},
e3:{"^":"c;a",
dz:function(a){var z=this.a
if(!z.c1(a))z.m(0,a,this.cp(a))
return z.i(0,a)},
cp:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[E.b])
for(z=y.length,x=0;x<z;++x)C.a.m(y,x,new E.b(new Float64Array(2)))
return y}},
hq:{"^":"Y;a,b,c,d",
a6:function(){return new E.b(new Float64Array(2))},
$asY:function(){return[E.b]}},
hr:{"^":"Y;a,b,c,d",
a6:function(){return new E.a8(new Float64Array(3))},
$asY:function(){return[E.a8]}},
hn:{"^":"Y;a,b,c,d",
a6:function(){return new E.X(new Float64Array(4))},
$asY:function(){return[E.X]}},
ho:{"^":"Y;a,b,c,d",
a6:function(){return new E.ae(new Float64Array(9))},
$asY:function(){return[E.ae]}},
hm:{"^":"Y;a,b,c,d",
a6:function(){var z=new Float64Array(2)
return new V.Q(new E.b(z),new E.b(new Float64Array(2)))},
$asY:function(){return[V.Q]}},
hp:{"^":"Y;a,b,c,d",
a6:function(){return new G.A(0,1)},
$asY:function(){return[G.A]}},
y:{"^":"a5;$ti"},
he:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.b5(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.b5]},
$asy:function(){return[V.b5]},
$asa5:function(){return[V.b5]}},
ha:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.aT(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aT]},
$asy:function(){return[V.aT]},
$asa5:function(){return[V.aT]}},
hd:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.b4(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.b4]},
$asy:function(){return[V.b4]},
$asa5:function(){return[V.b4]}},
hb:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.aW(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aW]},
$asy:function(){return[V.aW]},
$asa5:function(){return[V.aW]}},
hc:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.aX(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aX]},
$asy:function(){return[V.aX]},
$asa5:function(){return[V.aX]}},
h8:{"^":"y;d,0a,0b,0c",
a6:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.aY(new E.b(z),new E.b(y),new E.b(x),new E.b(w),!1,!1,new E.b(new Float64Array(2)),C.p,0)
z.b=0.01
return new V.aR(z,0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aR]},
$asy:function(){return[V.aR]},
$asa5:function(){return[V.aR]}},
h9:{"^":"y;d,0a,0b,0c",
a6:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.aY(new E.b(z),new E.b(y),new E.b(x),new E.b(w),!1,!1,new E.b(new Float64Array(2)),C.p,0)
z.b=0.01
return new V.aS(z,0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aS]},
$asy:function(){return[V.aS]},
$asa5:function(){return[V.aS]}},
fi:{"^":"c;a,b,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,fy",
sf_:function(a){this.Q=H.i(a,"$isy",[V.b5],"$asy")},
seC:function(a){this.ch=H.i(a,"$isy",[V.aT],"$asy")},
seL:function(a){this.cx=H.i(a,"$isy",[V.b4],"$asy")},
seN:function(a){this.cy=H.i(a,"$isy",[V.aW],"$asy")},
seR:function(a){this.db=H.i(a,"$isy",[V.aX],"$asy")},
seE:function(a){this.dx=H.i(a,"$isy",[V.aR],"$asy")},
seF:function(a){this.dy=H.i(a,"$isy",[V.aS],"$asy")},
cs:function(a){var z,y,x,w
z=this.y
if(!z.c1(a)){y=new Array(a)
y.fixed$length=Array
x=H.f(y,[E.b])
for(w=0;C.c.L(w,a);++w)C.a.m(x,w,new E.b(new Float64Array(2)))
z.m(0,a,x)}return z.i(0,a)},
$iskd:1,
G:{
fj:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=P.v
y=P.bk(null,null,null,z,P.db)
x=P.bk(null,null,null,z,[P.d,P.v])
w=P.bk(null,null,null,z,[P.d,E.b])
v=E.b
u=new Array(a6)
u.fixed$length=Array
t=[v]
u=H.f(u,t)
s=new Array(a7)
s.fixed$length=Array
t=new V.hq(u,0,a6,H.f(s,t))
t.b0(a6,a7,v)
v=E.a8
s=new Array(a6)
s.fixed$length=Array
u=[v]
s=H.f(s,u)
r=new Array(a7)
r.fixed$length=Array
u=new V.hr(s,0,a6,H.f(r,u))
u.b0(a6,a7,v)
v=E.X
r=new Array(a6)
r.fixed$length=Array
s=[v]
r=H.f(r,s)
q=new Array(a7)
q.fixed$length=Array
s=new V.hn(r,0,a6,H.f(q,s))
s.b0(a6,a7,v)
v=V.Q
q=new Array(a6)
q.fixed$length=Array
r=[v]
q=H.f(q,r)
p=new Array(a7)
p.fixed$length=Array
r=new V.hm(q,0,a6,H.f(p,r))
r.b0(a6,a7,v)
v=G.A
p=new Array(a6)
p.fixed$length=Array
q=[v]
p=H.f(p,q)
o=new Array(a7)
o.fixed$length=Array
q=new V.hp(p,0,a6,H.f(o,q))
q.b0(a6,a7,v)
v=E.ae
o=new Array(a6)
o.fixed$length=Array
p=[v]
o=H.f(o,p)
n=new Array(a7)
n.fixed$length=Array
p=new V.ho(o,0,a6,H.f(n,p))
p.b0(a6,a7,v)
v=new Float64Array(2)
o=new Float64Array(2)
v=new V.bM(new E.b(v),new E.b(o),new E.b(new Float64Array(2)),0,0,0)
o=new Float64Array(2)
n=new Float64Array(2)
o=new V.bM(new E.b(o),new E.b(n),new E.b(new Float64Array(2)),0,0,0)
n=new Float64Array(2)
m=new Float64Array(2)
n=new V.bM(new E.b(n),new E.b(m),new E.b(new Float64Array(2)),0,0,0)
m=new Array(3)
m.fixed$length=Array
m=H.f(m,[V.bM])
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=new Float64Array(2)
f=new Float64Array(2)
e=new Float64Array(2)
d=new Float64Array(2)
c=new Float64Array(2)
C.a.m(m,0,v)
C.a.m(m,1,o)
C.a.m(m,2,n)
b=P.aB(3,0,!1,z)
a=P.aB(3,0,!1,z)
a0=new Float64Array(2)
a1=new Float64Array(2)
a2=new Float64Array(2)
y=new V.fi(t,u,s,p,r,q,y,x,w,new V.fo(new V.iP(v,o,n,m,0,new E.b(l),new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),new E.b(e),new E.b(d),new E.b(c)),b,a,new E.b(a0),new E.b(a1),new E.b(a2),new E.b(new Float64Array(2))))
x=new V.he(y)
x.aN(10,V.b5)
y.sf_(x)
x=new V.ha(y)
x.aN(10,V.aT)
y.seC(x)
x=new V.hd(y)
x.aN(10,V.b4)
y.seL(x)
x=new V.hb(y)
x.aN(10,V.aW)
y.seN(x)
x=new V.hc(y)
x.aN(10,V.aX)
y.seR(x)
x=new V.h8(y)
x.aN(10,V.aR)
y.seE(x)
x=new V.h9(y)
x.aN(10,V.aS)
y.seF(x)
x=V.aV()
w=V.aV()
v=new Float64Array(2)
u=new Float64Array(2)
t=V.dC()
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=new Float64Array(2)
m=new Array(2)
m.fixed$length=Array
l=[V.R]
m=H.f(m,l)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=new Float64Array(2)
f=new Float64Array(2)
e=new Array(2)
e.fixed$length=Array
e=H.f(e,l)
d=new Array(2)
d.fixed$length=Array
l=H.f(d,l)
d=new Float64Array(2)
c=new Float64Array(2)
b=new Int8Array(4)
a=new Float64Array(2)
a0=new Float64Array(2)
a1=V.fy()
a2=new Float64Array(2)
C.a.m(m,0,new V.R(new E.b(a2),new V.T(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(m,1,new V.R(new E.b(a2),new V.T(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(e,0,new V.R(new E.b(a2),new V.T(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(e,1,new V.R(new E.b(a2),new V.T(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(l,0,new V.R(new E.b(a2),new V.T(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(l,1,new V.R(new E.b(a2),new V.T(new Int8Array(4))))
y.fr=new V.f6(y,new V.cZ(x,w,new G.E(new E.b(v),new G.A(0,1)),new G.E(new E.b(u),new G.A(0,1)),!1),t,new V.d_(new E.b(s),new E.b(r),0,0),new E.b(q),new G.E(new E.b(p),new G.A(0,1)),new E.b(o),new E.b(n),new V.eb(0,0),new V.eb(0,0),m,new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),e,l,new E.b(d),new E.b(c),new V.T(b),new E.b(a),new E.b(a0),a1)
x=V.dC()
w=V.aV()
v=V.aV()
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=new Float64Array(2)
m=new Float64Array(2)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=new Float64Array(2)
f=new Float64Array(2)
e=new Float64Array(2)
d=new Float64Array(2)
c=new Float64Array(2)
b=new Float64Array(2)
a=new Float64Array(2)
a0=new Float64Array(2)
z=P.aB(2,0,!1,z)
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=new Float64Array(2)
a4=new Float64Array(2)
a5=new Float64Array(2)
y.fx=new V.i3(x,new V.cZ(w,v,new G.E(new E.b(u),new G.A(0,1)),new G.E(new E.b(t),new G.A(0,1)),!1),new G.E(new E.b(s),new G.A(0,1)),new G.E(new E.b(r),new G.A(0,1)),new V.d_(new E.b(q),new E.b(p),0,0),new V.hN(new E.b(o),new E.b(n),new E.b(m),new E.b(l),new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),new E.b(e),new E.b(d),new G.E(new E.b(c),new G.A(0,1)),new G.E(new E.b(b),new G.A(0,1)),new E.b(a),new E.b(a0)),z,new G.aE(new E.b(a1),new E.b(a2),new E.b(a3),0,0,0),new G.aE(new E.b(a4),new E.b(a5),new E.b(new Float64Array(2)),0,0,0),y)
y.z=y
return y}}},
a5:{"^":"c;0a,$ti",
scY:function(a){this.a=H.i(a,"$isd",[H.au(this,"a5",0)],"$asd")},
aN:function(a,b){this.b=0
this.scY(null)
this.b=0
this.c=0
this.dc(a)},
dc:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[H.au(this,"a5",0)])
z=this.a
if(z!=null)C.a.ak(y,0,this.c,z,0)
for(z=y.length,x=0;x<z;++x)C.a.m(y,x,this.a6())
this.scY(y)
this.c=z},
l:function(){var z,y
z=this.b
y=this.c
if(z>=y)this.dc(y*2)
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.a(z,y)
return z[y]},
$isa4:1},
Y:{"^":"c;$ti",
b0:function(a,b,c){var z,y
for(z=this.a,y=0;y<a;++y)C.a.m(z,y,this.a6())},
l:function(){var z,y
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.a(z,y)
return z[y]}}}],["","",,F,{"^":"",
eE:function(a,b,c,d){var z
H.i(a,"$isd",[d],"$asd")
P.dy(b,c,a.length,null,null,null)
z=P.fZ(H.cm(a,b,c,H.m(a,0)),!0,d)
H.hU(z,J.j2(),H.m(z,0))
C.a.b9(a,b,c,z)}}],["","",,N,{"^":"",eZ:{"^":"ff;c,a,b",
by:function(a,b,c){var z,y,x,w,v
H.i(a,"$isd",[E.b],"$asd")
this.bz(c)
for(z=J.W(a),y=this.b,x=0;x<b;++x){w=z.i(a,x)
v=z.i(a,x)
y.b8(H.l(w,"$isb"),H.l(v,"$isb"))}y=this.c
y.beginPath()
C.k.dm(y,J.a1(z.i(a,0)),J.a2(z.i(a,0)))
for(x=1;x<b;++x)C.k.cd(y,J.a1(z.i(a,x)),J.a2(z.i(a,x)))
C.k.cd(y,J.a1(z.i(a,0)),J.a2(z.i(a,0)))
y.closePath()},
al:function(a,b,c){var z,y
this.bz(c)
z=this.b
z.b8(a,a)
z.b8(b,b)
z=this.c
z.beginPath()
y=a.a
C.k.dm(z,y[0],y[1])
y=b.a
C.k.cd(z,y[0],y[1])
z.closePath()
z.stroke()},
fG:function(a,b,c,d){this.bx(a,b*this.b.c,c)
this.c.stroke()},
fF:function(a,b,c){return this.fG(a,b,c,null)},
bx:function(a,b,c){var z,y
this.bz(c)
this.b.b8(a,a)
z=this.c
z.beginPath()
y=a.a
z.arc(y[0],y[1],b,0,6.283185307179586,!0)
z.closePath()},
bz:function(a){var z,y,x,w
z=this.c
y=a.a
x=a.b
w=a.c
z.toString
z.strokeStyle="rgba("+y+", "+x+", "+w+", 0.9)"
w=a.a
x=a.b
y=a.c
z.fillStyle="rgba("+w+", "+x+", "+y+", 0.8)"},
fI:function(a,b,c,d){H.i(a,"$isd",[E.b],"$asd")
H.i(c,"$isd",[V.am],"$asd")
throw H.h("Unimplemented")},
fJ:function(a,b,c,d){H.i(a,"$isd",[E.b],"$asd")
H.i(c,"$isd",[V.am],"$asd")
throw H.h("Unimplemented")}}}],["","",,G,{"^":"",by:{"^":"c;j:a>,k:b>,c",
au:function(a,b,c){this.a=C.c.a7(C.b.aI(a*255))
this.b=C.c.a7(C.b.aI(b*255))
this.c=C.c.a7(C.b.aI(c*255))}},A:{"^":"c;a,w:b<",
I:function(a){this.a=Math.sin(a)
this.b=Math.cos(a)
return this},
u:function(a){return"Rot(s:"+H.e(this.a)+", c:"+H.e(this.b)+")"},
G:{
aD:function(a,b,c){var z,y,x,w
z=a.a
y=b.a
x=y[0]
w=a.b
y=y[1]
c.sj(0,w*x-z*y)
c.sk(0,z*x+w*y)},
j:function(a,b,c){var z,y
z=a.b
y=b.a
c.sj(0,z*y[0]-a.a*y[1])
c.sk(0,a.a*y[0]+a.b*y[1])},
a6:function(a,b,c){var z,y
z=a.b
y=b.a
c.sj(0,z*y[0]+a.a*y[1])
c.sk(0,-a.a*y[0]+a.b*y[1])}}},aE:{"^":"c;a,b,w:c<,d,t:e<,f",
st:function(a){this.e=H.be(a)},
u:function(a){return"Sweep:\nlocalCenter: "+this.a.u(0)+"\n"+("c0: "+this.b.u(0)+", c: "+this.c.u(0)+"\n")+("a0: "+H.e(this.d)+", a: "+H.e(this.e)+"\n")+("alpha0: "+H.e(this.f))},
Z:function(){var z=6.283185307179586*C.l.aI(this.d/6.283185307179586)
this.d-=z
this.e-=z},
N:function(a){this.a.h(a.a)
this.b.h(a.b)
this.c.h(a.c)
this.d=a.d
this.e=a.e
this.f=a.f
return this},
aD:function(a,b){var z,y,x,w
z=a.a
y=1-b
x=this.b.a
w=this.c.a
z.sj(0,y*x[0]+b*w[0])
z.sk(0,y*x[1]+b*w[1])
w=a.b
w.I(y*this.d+b*this.e)
y=z.a
x=this.a.a
z.sj(0,y[0]-(w.b*x[0]-w.a*x[1]))
z.sk(0,y[1]-(w.a*x[0]+w.b*x[1]))},
aR:function(a){var z,y,x,w,v
z=this.f
y=(a-z)/(1-z)
z=this.b
x=z.a
w=x[0]
v=this.c.a
z.sj(0,w+y*(v[0]-w))
x=x[1]
z.sk(0,x+y*(v[1]-x))
x=this.d
this.d=x+y*(this.e-x)
this.f=a}},cn:{"^":"c;a"},E:{"^":"c;a,b",
u:function(a){return"XForm:\n"+("Position: "+this.a.u(0)+"\n")+("R: \t"+this.b.u(0)+"\n")},
G:{
z:function(a,b,c){var z,y,x,w,v,u
H.l(b,"$isb")
H.l(c,"$isb")
z=a.b
y=z.a
x=b.a
w=x[0]
z=z.b
x=x[1]
v=a.a.a
u=v[1]
c.sj(0,z*w-y*x+v[0])
c.sk(0,y*w+z*x+u)},
o:function(a,b,c){var z,y,x,w
H.l(b,"$isb")
H.l(c,"$isb")
z=a.b
y=z.b
x=b.a
w=a.a.a
c.sj(0,y*x[0]-z.a*x[1]+w[0])
c.sk(0,z.a*x[0]+z.b*x[1]+w[1])},
cp:function(a,b,c){var z,y,x,w
z=b.a
y=a.a.a
x=z[0]-y[0]
w=z[1]-y[1]
y=a.b
c.sj(0,y.b*x+y.a*w)
c.sk(0,-y.a*x+y.b*w)},
dR:function(a,b,c){var z,y,x,w,v,u,t
z=a.b
y=b.b
x=c.b
w=z.b
v=y.a
u=z.a
t=y.b
x.a=w*v-u*t
x.b=w*t+z.a*y.a
y=$.$get$co()
y.h(b.a)
y.n(a.a)
G.a6(z,$.$get$co(),c.a)}}},ic:{"^":"c;",
b8:function(a,b){var z,y,x,w,v,u,t,s
z=a.a
y=z[0]
x=this.c
w=this.b
v=w.a
u=v[0]
v=v[1]
z=z[1]
t=new Float64Array(2)
s=new E.b(t)
s.h(w)
s.n(this.d)
b.J(y*x+u+t[0],v-z*x+-t[1])}}}],["","",,X,{"^":"",f_:{"^":"ic;0a,b,c,d"}}],["","",,A,{"^":"",
bR:function(a){var z,y
z=C.i.fV(H.i(a,"$isx",[P.c],"$asx"),0,new A.jp(),P.v)
if(typeof z!=="number")return H.J(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jp:{"^":"t:18;",
$2:function(a,b){var z,y
H.k(a)
z=J.aN(b)
if(typeof a!=="number")return a.B()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,E,{"^":"",X:{"^":"c;a",
ba:function(a,b,c,d){var z=this.a
z[3]=d
z[2]=c
z[1]=b
z[0]=a},
h:function(a){var z,y
z=H.l(a,"$isX").a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
u:function(a){return"[0] "+this.aW(0).u(0)+"\n[1] "+this.aW(1).u(0)+"\n"},
m:function(a,b,c){C.i.m(this.a,b,c)},
at:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.X){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
ga1:function(a){return A.bR(this.a)},
aW:function(a){var z,y,x
z=new Float64Array(2)
y=this.a
if(a>=4)return H.a(y,a)
z[0]=y[a]
x=2+a
if(x>=4)return H.a(y,x)
z[1]=y[x]
return new E.b(z)},
B:function(a,b){var z,y,x
z=new Float64Array(4)
y=new E.X(z)
y.h(this)
x=b.ghD()
z[0]=C.b.B(z[0],x.i(0,0))
z[1]=C.b.B(z[1],x.i(0,1))
z[2]=C.b.B(z[2],x.i(0,2))
z[3]=C.b.B(z[3],x.i(0,3))
return y},
K:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
bB:function(){var z,y,x,w,v,u,t
z=this.a
y=z[0]
x=z[3]
w=z[1]
v=z[2]
u=y*x-w*v
if(u===0)return 0
t=1/u
z[0]=x*t
z[1]=-w*t
z[2]=-v*t
z[3]=y*t
return u},
n:function(a){var z,y
z=H.l(a,"$isX").a
y=this.a
y[0]=C.b.H(y[0],z.i(0,0))
y[1]=C.b.H(y[1],z.i(0,1))
y[2]=C.b.H(y[2],z.i(0,2))
y[3]=C.b.H(y[3],z.i(0,3))},
ci:function(a,b){var z,y,x,w,v,u,t
if(b==null){b=new E.b(new Float64Array(2))
b.h(a)}else b.h(a)
z=b.a
y=this.a
x=y[0]
w=z[0]
v=y[2]
u=z[1]
t=y[1]
y=y[3]
z[0]=x*w+v*u
z[1]=t*w+y*u
return b},
G:{
dp:function(a,b,c){var z,y,x,w,v,u,t,s
z=a.a
y=z[0]
x=z[2]
w=z[1]
v=z[3]
z=c.a
u=z[0]
t=z[1]
s=y*v-x*w
if(s!==0)s=1/s
b.sj(0,s*(v*u-x*t))
b.sk(0,s*(y*t-w*u))}}},ae:{"^":"c;a",
aY:function(a,b,c,d,e,f,g,h,i){var z=this.a
z[8]=i
z[7]=h
z[6]=g
z[5]=f
z[4]=e
z[3]=d
z[2]=c
z[1]=b
z[0]=a},
h:function(a){var z,y
z=H.l(a,"$isae").a
y=this.a
y[8]=z[8]
y[7]=z[7]
y[6]=z[6]
y[5]=z[5]
y[4]=z[4]
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
u:function(a){return"[0] "+this.aW(0).u(0)+"\n[1] "+this.aW(1).u(0)+"\n[2] "+this.aW(2).u(0)+"\n"},
m:function(a,b,c){C.i.m(this.a,b,c)},
at:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
ga1:function(a){return A.bR(this.a)},
aW:function(a){var z,y,x
z=new Float64Array(3)
y=this.a
if(a>=9)return H.a(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.a(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.a(y,x)
z[2]=y[x]
return new E.a8(z)},
B:function(a,b){var z,y,x
z=new Float64Array(9)
y=new E.ae(z)
y.h(this)
x=b.ghE()
z[0]=C.b.B(z[0],x.i(0,0))
z[1]=C.b.B(z[1],x.i(0,1))
z[2]=C.b.B(z[2],x.i(0,2))
z[3]=C.b.B(z[3],x.i(0,3))
z[4]=C.b.B(z[4],x.i(0,4))
z[5]=C.b.B(z[5],x.i(0,5))
z[6]=C.b.B(z[6],x.i(0,6))
z[7]=C.b.B(z[7],x.i(0,7))
z[8]=C.b.B(z[8],x.i(0,8))
return y},
K:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=0
z[6]=0
z[7]=0
z[8]=0},
n:function(a){var z,y
z=H.l(a,"$isae").a
y=this.a
y[0]=C.b.H(y[0],z.i(0,0))
y[1]=C.b.H(y[1],z.i(0,1))
y[2]=C.b.H(y[2],z.i(0,2))
y[3]=C.b.H(y[3],z.i(0,3))
y[4]=C.b.H(y[4],z.i(0,4))
y[5]=C.b.H(y[5],z.i(0,5))
y[6]=C.b.H(y[6],z.i(0,6))
y[7]=C.b.H(y[7],z.i(0,7))
y[8]=C.b.H(y[8],z.i(0,8))},
G:{
cf:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=a.a
y=z[0]
x=z[3]
w=z[1]
v=z[4]
u=c.a
t=u[0]-z[6]
s=u[1]-z[7]
r=y*v-x*w
if(r!==0)r=1/r
b.sj(0,r*(v*t-x*s))
b.sk(0,r*(y*s-w*t))},
h4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
u=z[4]
t=z[5]
s=z[6]
r=z[7]
q=z[8]
p=u*q-t*r
o=t*s-v*q
n=v*r-u*s
m=y*p+x*o+w*n
if(m!==0)m=1/m
z=c.a
l=z[0]
k=z[1]
z=z[2]
b.sj(0,m*(l*p+k*o+z*n))
b.sk(0,m*(y*-(r*z-q*k)+x*-(q*l-s*z)+w*-(s*k-r*l)))
b.sbm(0,m*(y*-(k*t-z*u)+x*-(z*v-l*t)+w*-(l*u-k*v)))}}},b:{"^":"c;bX:a<",
J:function(a,b){var z=this.a
z[0]=a
z[1]=b},
K:function(){var z=this.a
z[0]=0
z[1]=0},
h:function(a){var z,y
z=H.l(a,"$isb").a
y=this.a
y[1]=z[1]
y[0]=z[0]},
u:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
at:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
ga1:function(a){return A.bR(this.a)},
B:function(a,b){var z=new E.b(new Float64Array(2))
z.h(this)
z.q(0,b)
return z},
m:function(a,b,c){C.i.m(this.a,b,c)},
gD:function(a){return Math.sqrt(this.gV())},
gV:function(){var z,y
z=this.a
y=z[0]
z=z[1]
return y*y+z*z},
Z:function(){var z,y,x
z=Math.sqrt(this.gV())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
return z},
c6:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=a.a
w=y-x[0]
v=z[1]-x[1]
return w*w+v*v},
E:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]},
A:function(a){var z,y
z=H.l(a,"$isb").a
y=this.a
return y[0]*z[1]-y[1]*z[0]},
T:function(a,b){var z=this.a
b.J(-a*z[1],a*z[0])
return b},
q:function(a,b){var z,y
z=H.l(b,"$isb").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]},
n:function(a){var z,y
z=H.l(a,"$isb").a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
F:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
M:function(){var z=this.a
z[1]=-z[1]
z[0]=-z[0]},
sj:function(a,b){this.a[0]=b
return b},
sk:function(a,b){this.a[1]=b
return b},
gj:function(a){return this.a[0]},
gk:function(a){return this.a[1]},
G:{
e4:function(){return new E.b(new Float64Array(2))}}},a8:{"^":"c;a",
cz:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
K:function(){var z=this.a
z[2]=0
z[1]=0
z[0]=0},
h:function(a){var z,y
z=H.l(a,"$isa8").a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
u:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
at:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.a8){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
ga1:function(a){return A.bR(this.a)},
B:function(a,b){var z=new E.a8(new Float64Array(3))
z.h(this)
z.q(0,b)
return z},
m:function(a,b,c){C.i.m(this.a,b,c)},
gD:function(a){return Math.sqrt(this.gV())},
gV:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
q:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
n:function(a){var z,y
z=H.l(a,"$isa8").a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
F:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
M:function(){var z=this.a
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]},
sj:function(a,b){this.a[0]=b
return b},
sk:function(a,b){this.a[1]=b
return b},
sbm:function(a,b){this.a[2]=b
return b},
gj:function(a){return this.a[0]},
gk:function(a){return this.a[1]}}}],["","",,Q,{"^":"",fk:{"^":"c;",
hz:[function(a,b){var z,y,x,w,v,u,t,s
H.bg(b)
z=this.c
z.aL(0)
y=this.b
x=y.id.a
x.aL(0)
w=y.k1.a
w.aL(0)
v=y.a
if((v&1)===1){v=y.b
v.a.ck(v)
v=y.a&=4294967294}y.a=v|2
v=y.go
v.a=0.016666666666666666
v.d=10
v.e=10
v.b=60
v.c=y.cx*0.016666666666666666
v.f=y.cy
u=y.fr.b
t=w.gaG()
s=$.I
if(typeof s!=="number")return H.J(s)
u.as(C.c.av(t*1000,s))
w.aL(0)
y.b.fl()
s=y.fr.c
t=w.gaG()
u=$.I
if(typeof u!=="number")return H.J(u)
s.as(C.c.av(t*1000,u))
if(y.dy&&v.a>0){w.aL(0)
y.fx.bI(v)
u=y.fr.d
t=w.gaG()
s=$.I
if(typeof s!=="number")return H.J(s)
u.as(C.c.av(t*1000,s))
w.aL(0)
y.bI(v)
s=y.fr.e
t=w.gaG()
u=$.I
if(typeof u!=="number")return H.J(u)
s.as(C.c.av(t*1000,u))}if(y.db&&v.a>0){w.aL(0)
y.dZ(v)
u=y.fr.z
w=w.gaG()
t=$.I
if(typeof t!=="number")return H.J(t)
u.as(C.c.av(w*1000,t))}if(v.a>0)y.cx=v.b
if((y.a&4)===4)y.fi()
y.a&=4294967293
w=y.fr.a
x=x.gaG()
v=$.I
if(typeof v!=="number")return H.J(v)
w.as(C.c.av(x*1000,v))
z=z.gaG()
v=$.I
if(typeof v!=="number")return H.J(v)
this.Q=C.c.av(z*1e6,v)
v=this.f;(v&&C.k).fj(v,0,0,900,600)
y.fH()
y=this.y
if(typeof y!=="number")return y.B()
this.y=y+1
C.V.dt(window,this.gcE(this))},"$1","gcE",5,0,19],
fY:function(){var z,y,x,w
z=H.w(H.l(W.ix("canvas",null),"$isa3"),"$iscS")
z.width=900
z.height=600
this.e=z
y=document
x=y.body;(x&&C.r).aF(x,z)
z=this.e
z.toString
this.f=z.getContext("2d")
w=new E.b(new Float64Array(2))
w.J(450,300)
z=new E.b(new Float64Array(2))
z.h(w)
x=new E.b(new Float64Array(2))
x.h(w)
x=new X.f_(z,20,x)
x.a=!0
x.c=this.d
this.r=x
x=new N.eZ(this.f,2,x)
this.x=x
this.b.Q=x
this.y=0
this.z=C.v.cf(y,"#fps-counter")
this.ch=C.v.cf(y,"#world-step-time")
P.dP(P.d3(0,0,0,0,0,1),new Q.fl(this))
P.dP(P.d3(0,0,0,200,0,0),new Q.fm(this))}},fl:{"^":"t:7;a",
$1:function(a){var z
H.l(a,"$isar")
z=this.a
J.bX(z.z,J.aO(z.y))
z.y=0}},fm:{"^":"t:7;a",
$1:function(a){var z,y
H.l(a,"$isar")
z=this.a
y=z.Q
if(y==null)return
J.bX(z.ch,H.e(y/1000)+" ms")}}}],["","",,Y,{"^":"",
eA:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2
z=[V.aP]
y=H.f([],z)
x=new E.b(new Float64Array(2))
x.J(0,-10)
w=V.fj(100,10)
v=V.fh(V.fw())
u=V.io(4,4)
t=new P.bK(0,0)
if($.I==null){H.bH()
$.I=$.aC}t.bq(0)
s=new P.bK(0,0)
if($.I==null){H.bH()
$.I=$.aC}s.bq(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.v
n=[P.d,E.b]
m=P.bk(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.bB()
f=V.bB()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.bK(0,0)
if($.I==null){H.bH()
$.I=$.aC}b.bq(0)
a=V.bB()
a0=V.bB()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.aV()
a4=V.aV()
a5=new Float64Array(2)
a6=new Float64Array(2)
a7=new Float64Array(2)
a8=new Float64Array(2)
a9=new Float64Array(2)
b0=new Float64Array(2)
b1=new Array(2)
b1.fixed$length=Array
z=H.f(b1,z)
b1=new Float64Array(2)
b2=new Float64Array(2)
b3=new Float64Array(2)
b4=new Float64Array(2)
b5=new Float64Array(2)
b6=new Float64Array(2)
b7=new Float64Array(2)
b8=new Float64Array(2)
b9=C.c.a7(C.c.aI(102))
c0=C.c.a7(C.c.aI(102))
c1=C.c.a7(C.c.aI(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.bk(null,null,null,o,n)
o=new E.b(new Float64Array(2))
o.h(x)
c6=new V.ii(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.dO(0,0,0,0,0,!1),new G.cn(t),new G.cn(s),new G.by(0,0,0),new G.E(new E.b(r),new G.A(0,1)),new E.b(q),new E.b(p),new V.e3(m),new V.il(),new V.im(new V.dz(new E.b(l),0),new E.b(k),new E.b(j)),new V.cj(new E.b(i),new E.b(h),0),new V.dd(0,0,0,0,0,0,g,new V.dD(),new V.bC(0),f,new V.bC(0),new V.cV(e,d,0)),c,new G.cn(b),new V.dd(0,0,0,0,0,0,a,new V.dD(),new V.bC(0),a0,new V.bC(0),new V.cV(a1,a2,0)),new V.hY(a3,a4,new G.aE(new E.b(a5),new E.b(a6),new E.b(a7),0,0,0),new G.aE(new E.b(a8),new E.b(a9),new E.b(b0),0,0,0),0),new V.hZ(C.R,0),new V.dO(0,0,0,0,0,!1),z,new G.aE(new E.b(b1),new E.b(b2),new E.b(b3),0,0,0),new G.aE(new E.b(b4),new E.b(b5),new E.b(b6),0,0,0),0.12,-1,new E.b(b7),new E.b(b8),new G.by(b9,c0,c1),new E.b(c2),new E.b(c3),new E.b(c4),new E.b(c5),new V.e3(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.fb(0,c6)
n.d=new V.fa()
n.a=v
c6.b=n
c6.fr=new V.hE(new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0))
z=new Float64Array(2)
x=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=new Float64Array(2)
m=new Float64Array(2)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
z=new V.hu(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.Q(new E.b(z),new E.b(x)),new V.fn(!1,0),new V.Q(new E.b(v),new E.b(u)),new E.b(t),new G.E(new E.b(s),new G.A(0,1)),new G.E(new E.b(r),new G.A(0,1)),new V.fd(),new V.ht(0,new E.b(q),new E.b(p)),new V.ia(new E.b(o)),new V.hR(new V.cj(new E.b(n),new E.b(m),0),new V.dz(new E.b(l),0),new E.b(k),new E.b(j)),new E.b(i),new G.A(0,1),new G.E(new E.b(h),new G.A(0,1)),new G.E(new E.b(new Float64Array(2)),new G.A(0,1)),new V.hh(0,0,0))
z.U=0.05
z.S=1
z.a_=0.25
z.a3=0.25
z.a9=0.25
z.aa=0.1
z.aq=0.2
z.aH=0.5
z.ax=0.5
z.ay=0.5
z.cx=new V.hs()
x=[E.b]
z.sh9(new V.Z(V.cz(),0,x))
z.shq(new V.Z(V.cz(),0,x))
z.sfp(new V.Z(V.et(),0,[V.am]))
z.shp(new V.Z(V.jf(),0,[P.c]))
c6.fx=z
c6.aO(w.ch,C.m,C.m)
c6.aO(w.cx,C.j,C.m)
c6.aO(w.Q,C.j,C.j)
c6.aO(w.cy,C.p,C.m)
c6.aO(w.db,C.p,C.j)
c6.aO(w.dx,C.y,C.m)
c6.aO(w.dy,C.y,C.j)
w=new P.bK(0,0)
if($.I==null){H.bH()
$.I=$.aC}w.bq(0)
c7=new Y.fD(y,c6,w,10)
J.bX(C.v.cf(document,"#title"),"FrictionJoint test")
c8=V.ch()
z=new E.b(new Float64Array(2))
x=new Float64Array(2)
z.J(0,0)
x=c6.c2(new V.c_(C.e,z,0,new E.b(x),0,0,0,!0,!0,!1,!1,!0,1))
c7.cx=x
c8.dK(50,0.4)
x.c4(c8)
z=new E.b(new Float64Array(2))
z.J(-20,0)
c8.bF(0.4,50,z,0)
x.c4(c8)
z=new E.b(new Float64Array(2))
z.J(20,0)
c8.bF(0.4,50,z,0)
x.c4(c8)
C.a.q(y,x)
c9=V.ch()
c9.bF(3,1.5,new E.b(new Float64Array(2)),1.5707963267948966)
z=new V.da(0.2,0,0,!1,new V.c7(1,65535,0))
c7.cy=z
z.d=0.5
z.e=0.1
z.a=c9
w=new Float64Array(2)
d0=new V.c_(C.e,new E.b(w),0,new E.b(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
d0.a=C.f
w=new E.b(new Float64Array(2))
w.J(-10,30)
d0.c=w
d1=c6.c2(d0)
d1.c3(z)
C.a.q(y,d1)
w=new Float64Array(2)
d0=new V.c_(C.e,new E.b(w),0,new E.b(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
d0.a=C.f
w=new E.b(new Float64Array(2))
w.J(10,30)
d0.c=w
d1=c6.c2(d0)
d1.c3(z)
z=new Float64Array(2)
d2=new V.dc(new E.b(z),new E.b(new Float64Array(2)),0,0,!1)
d2.a=C.z
d2.c=d1
d2.d=x
d2.x=3
d2.y=5
d2.e=!0
c6.fB(d2)
C.a.q(y,d1)
c7.fY()
c7.x.a|=4
C.V.dt(window,c7.gcE(c7))},
fD:{"^":"fk;0cx,0cy,a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch"}},1],["","",,O,{"^":""}]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c9.prototype
return J.df.prototype}if(typeof a=="string")return J.b2.prototype
if(a==null)return J.dg.prototype
if(typeof a=="boolean")return J.fP.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.c)return a
return J.bs(a)}
J.jj=function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.b2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.c)return a
return J.bs(a)}
J.W=function(a){if(typeof a=="string")return J.b2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.c)return a
return J.bs(a)}
J.bQ=function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.c)return a
return J.bs(a)}
J.jk=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c9.prototype
return J.az.prototype}if(a==null)return a
if(!(a instanceof P.c))return J.b8.prototype
return a}
J.cC=function(a){if(typeof a=="number")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b8.prototype
return a}
J.jl=function(a){if(typeof a=="number")return J.az.prototype
if(typeof a=="string")return J.b2.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b8.prototype
return a}
J.jm=function(a){if(typeof a=="string")return J.b2.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b8.prototype
return a}
J.F=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.c)return a
return J.bs(a)}
J.eG=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jj(a).B(a,b)}
J.aa=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).at(a,b)}
J.ab=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cC(a).aM(a,b)}
J.cI=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cC(a).L(a,b)}
J.cJ=function(a){if(typeof a=="number")return-a
return J.jk(a).bp(a)}
J.eH=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.W(a).i(a,b)}
J.eI=function(a,b,c){return J.bQ(a).m(a,b,c)}
J.bt=function(a,b){return J.F(a).f2(a,b)}
J.eJ=function(a,b,c){return J.F(a).f4(a,b,c)}
J.eK=function(a,b){return J.F(a).aF(a,b)}
J.eL=function(a,b){return J.jl(a).b5(a,b)}
J.cK=function(a,b){return J.bQ(a).aw(a,b)}
J.eM=function(a){return J.F(a).gfh(a)}
J.aN=function(a){return J.C(a).ga1(a)}
J.bu=function(a){return J.bQ(a).ga5(a)}
J.aj=function(a){return J.W(a).gD(a)}
J.eN=function(a){return J.F(a).gaV(a)}
J.eO=function(a){return J.F(a).gha(a)}
J.eP=function(a){return J.F(a).ghj(a)}
J.a1=function(a){return J.F(a).gj(a)}
J.a2=function(a){return J.F(a).gk(a)}
J.bW=function(a,b){return J.F(a).b7(a,b)}
J.cL=function(a){return J.bQ(a).hf(a)}
J.cM=function(a,b){return J.F(a).saJ(a,b)}
J.bX=function(a,b){return J.F(a).sdj(a,b)}
J.cN=function(a,b){return J.F(a).saV(a,b)}
J.bY=function(a,b){return J.F(a).sj(a,b)}
J.bZ=function(a,b){return J.F(a).sk(a,b)}
J.eQ=function(a,b,c){return J.F(a).dL(a,b,c)}
J.cO=function(a){return J.cC(a).a7(a)}
J.eR=function(a){return J.jm(a).hm(a)}
J.aO=function(a){return J.C(a).u(a)}
I.aJ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bv.prototype
C.k=W.cT.prototype
C.W=W.fs.prototype
C.X=W.fH.prototype
C.v=W.fI.prototype
C.Y=J.D.prototype
C.a=J.b1.prototype
C.l=J.df.prototype
C.c=J.c9.prototype
C.d=J.dg.prototype
C.b=J.az.prototype
C.w=J.b2.prototype
C.a4=J.b3.prototype
C.i=H.hf.prototype
C.ah=W.hi.prototype
C.P=J.hy.prototype
C.Q=W.hG.prototype
C.T=W.i_.prototype
C.G=J.b8.prototype
C.V=W.ih.prototype
C.e=new V.c0(0,"BodyType.STATIC")
C.H=new V.c0(1,"BodyType.KINEMATIC")
C.f=new V.c0(2,"BodyType.DYNAMIC")
C.t=new P.iJ()
C.q=new V.c4(0,"EPAxisType.UNKNOWN")
C.u=new V.c4(1,"EPAxisType.EDGE_A")
C.I=new V.c4(2,"EPAxisType.EDGE_B")
C.Z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a_=function(hooks) {
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
C.J=function(hooks) { return hooks; }

C.a0=function(getTagFallback) {
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
C.a1=function() {
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
C.a2=function(hooks) {
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
C.a3=function(hooks) {
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
C.K=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.a5=new V.U(0,"JointType.UNKNOWN")
C.a6=new V.U(1,"JointType.REVOLUTE")
C.a7=new V.U(10,"JointType.ROPE")
C.L=new V.U(11,"JointType.CONSTANT_VOLUME")
C.a8=new V.U(12,"JointType.MOTOR")
C.a9=new V.U(2,"JointType.PRISMATIC")
C.M=new V.U(3,"JointType.DISTANCE")
C.N=new V.U(4,"JointType.PULLEY")
C.O=new V.U(5,"JointType.MOUSE")
C.aa=new V.U(6,"JointType.GEAR")
C.ab=new V.U(7,"JointType.WHEEL")
C.ac=new V.U(8,"JointType.WELD")
C.z=new V.U(9,"JointType.FRICTION")
C.n=new V.di(0,"LimitState.INACTIVE")
C.ad=new V.di(2,"LimitState.AT_UPPER")
C.ae=H.f(I.aJ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.af=H.f(I.aJ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.ag=H.f(I.aJ([]),[P.n])
C.A=H.f(I.aJ(["bind","if","ref","repeat","syntax"]),[P.n])
C.B=H.f(I.aJ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.o=new V.cd(0,"ManifoldType.CIRCLES")
C.h=new V.cd(1,"ManifoldType.FACE_A")
C.x=new V.cd(2,"ManifoldType.FACE_B")
C.C=new V.ck(0,"SeparationFunctionType.POINTS")
C.D=new V.ck(1,"SeparationFunctionType.FACE_A")
C.E=new V.ck(2,"SeparationFunctionType.FACE_B")
C.m=new V.bI(0,"ShapeType.CIRCLE")
C.p=new V.bI(1,"ShapeType.EDGE")
C.j=new V.bI(2,"ShapeType.POLYGON")
C.y=new V.bI(3,"ShapeType.CHAIN")
C.R=new V.bq(0,"TOIOutputState.UNKNOWN")
C.S=new V.bq(1,"TOIOutputState.FAILED")
C.ai=new V.bq(2,"TOIOutputState.OVERLAPPED")
C.F=new V.bq(3,"TOIOutputState.TOUCHING")
C.aj=new V.bq(4,"TOIOutputState.SEPARATED")
C.U=new V.ib(0,"VertexType.ISOLATED")
$.aC=null
$.bo=null
$.ac=0
$.aQ=null
$.cQ=null
$.cv=!1
$.ey=null
$.eq=null
$.eD=null
$.bP=null
$.bS=null
$.cD=null
$.ba=null
$.bO=null
$.b9=null
$.cw=!1
$.aG=C.t
$.I=null
$.al=null
$.c6=null
$.d6=null
$.d5=null
$.d0=0
$.d1=0
$.d2=20
$.dJ=0
$.dK=0
$.dL=0
$.dN=0
$.dM=0
$.jH=1
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
I.$lazy(y,x,w)}})(["cY","$get$cY",function(){return H.ex("_$dart_dartClosure")},"ca","$get$ca",function(){return H.ex("_$dart_js")},"dS","$get$dS",function(){return H.ah(H.bL({
toString:function(){return"$receiver$"}}))},"dT","$get$dT",function(){return H.ah(H.bL({$method$:null,
toString:function(){return"$receiver$"}}))},"dU","$get$dU",function(){return H.ah(H.bL(null))},"dV","$get$dV",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dZ","$get$dZ",function(){return H.ah(H.bL(void 0))},"e_","$get$e_",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dX","$get$dX",function(){return H.ah(H.dY(null))},"dW","$get$dW",function(){return H.ah(function(){try{null.$method$}catch(z){return z.message}}())},"e1","$get$e1",function(){return H.ah(H.dY(void 0))},"e0","$get$e0",function(){return H.ah(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cq","$get$cq",function(){return P.ip()},"bb","$get$bb",function(){return[]},"ef","$get$ef",function(){return P.dj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)},"cs","$get$cs",function(){return P.fX(P.n,P.bj)},"ax","$get$ax",function(){return E.e4()},"co","$get$co",function(){return E.e4()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.P},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:P.n,args:[P.v]},{func:1,ret:P.V,args:[W.af]},{func:1,ret:P.V,args:[P.n]},{func:1,ret:P.P,args:[P.ar]},{func:1,ret:P.V,args:[W.a3,P.n,P.n,W.br]},{func:1,ret:P.v},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.V,args:[W.q]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[W.q,W.q]},{func:1,ret:P.v,args:[P.v,P.c]},{func:1,ret:-1,args:[P.a0]},{func:1,ret:P.v,args:[,,]},{func:1,ret:P.a0},{func:1,ret:E.b},{func:1,ret:P.c},{func:1,ret:V.am}]
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
if(x==y)H.jF(d||a)
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
Isolate.aJ=a.aJ
Isolate.cB=a.cB
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.eA,[])
else Y.eA([])})})()
//# sourceMappingURL=friction_joint_test.dart.js.map
