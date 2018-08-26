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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isA)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cu(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cv=function(){}
var dart=[["","",,H,{"^":"",jV:{"^":"c;a"}}],["","",,J,{"^":"",
cy:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bq:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cx==null){H.j9()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.dW("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c6()]
if(v!=null)return v
v=H.je(a)
if(v!=null)return v
if(typeof a=="function")return C.Z
y=Object.getPrototypeOf(a)
if(y==null)return C.J
if(y===Object.prototype)return C.J
if(typeof w=="function"){Object.defineProperty(w,$.$get$c6(),{value:C.E,enumerable:false,writable:true,configurable:true})
return C.E}return C.E},
A:{"^":"c;",
a4:function(a,b){return a===b},
gO:function(a){return H.b1(a)},
m:["dH",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"ApplicationCacheErrorEvent|ArrayBuffer|CanvasGradient|CanvasPattern|DOMError|ErrorEvent|Event|InputEvent|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedEnumeration|SVGAnimatedTransformList|SensorErrorEvent|SpeechRecognitionError|StorageManager"},
fD:{"^":"A;",
m:function(a){return String(a)},
gO:function(a){return a?519018:218159},
$isR:1},
da:{"^":"A;",
a4:function(a,b){return null==b},
m:function(a){return"null"},
gO:function(a){return 0},
$isM:1},
c7:{"^":"A;",
gO:function(a){return 0},
m:["dJ",function(a){return String(a)}]},
hh:{"^":"c7;"},
bo:{"^":"c7;"},
aY:{"^":"c7;",
m:function(a){var z=a[$.$get$cS()]
if(z==null)return this.dJ(a)
return"JavaScript function for "+H.e(J.aH(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbf:1},
aV:{"^":"A;$ti",
t:function(a,b){H.o(b,H.l(a,0))
if(!!a.fixed$length)H.aE(P.a_("add"))
a.push(b)},
c5:function(a,b){return H.ch(a,b,null,H.l(a,0))},
a7:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
Y:function(a,b,c,d,e){var z,y,x,w,v,u
z=H.l(a,0)
H.i(d,"$isv",[z],"$asv")
if(!!a.immutable$list)H.aE(P.a_("setRange"))
P.dp(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
x=J.z(d)
if(!!x.$isd){H.i(d,"$isd",[z],"$asd")
w=e
v=d}else{v=x.c5(d,e).fE(0,!1)
w=0}z=J.a1(v)
if(w+y>z.gu(v))throw H.h(H.fA())
if(w<b)for(u=y-1;u>=0;--u)a[b+u]=z.h(v,w+u)
else for(u=0;u<y;++u)a[b+u]=z.h(v,w+u)},
aK:function(a,b,c,d){return this.Y(a,b,c,d,0)},
cz:function(a,b){var z,y
H.t(b,{func:1,ret:P.R,args:[H.l(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.h(P.a4(a))}return!1},
U:function(a,b){var z
for(z=0;z<a.length;++z)if(J.ad(a[z],b))return!0
return!1},
m:function(a){return P.c5(a,"[","]")},
gP:function(a){return new J.eR(a,a.length,0,[H.l(a,0)])},
gO:function(a){return H.b1(a)},
gu:function(a){return a.length},
su:function(a,b){if(!!a.fixed$length)H.aE(P.a_("set length"))
if(b<0)throw H.h(P.ah(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.j(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.b7(a,b))
if(b>=a.length||b<0)throw H.h(H.b7(a,b))
return a[b]},
i:function(a,b,c){H.o(c,H.l(a,0))
if(!!a.immutable$list)H.aE(P.a_("indexed set"))
if(b>=a.length||b<0)throw H.h(H.b7(a,b))
a[b]=c},
n:function(a,b){var z,y
z=[H.l(a,0)]
H.i(b,"$isd",z,"$asd")
y=C.c.n(a.length,b.gu(b))
z=H.f([],z)
this.su(z,y)
this.aK(z,0,a.length,a)
this.aK(z,a.length,y,b)
return z},
$isv:1,
$isd:1,
q:{
fC:function(a,b){if(a<0||a>4294967295)throw H.h(P.ah(a,0,4294967295,"length",null))
return J.d7(new Array(a),b)},
d7:function(a,b){return J.bi(H.f(a,[b]))},
bi:function(a){H.bR(a)
a.fixed$length=Array
return a},
jT:[function(a,b){return J.eE(H.eu(a,"$isE"),H.eu(b,"$isE"))},"$2","iH",8,0,20]}},
jU:{"^":"aV;$ti"},
eR:{"^":"c;a,b,c,0d,$ti",
sci:function(a){this.d=H.o(a,H.l(this,0))},
gJ:function(){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.cB(z))
x=this.c
if(x>=y){this.sci(null)
return!1}this.sci(z[x]);++this.c
return!0},
$isap:1},
aW:{"^":"A;",
aD:function(a,b){var z
H.ba(b)
if(typeof b!=="number")throw H.h(H.ak(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbP(b)
if(this.gbP(a)===z)return 0
if(this.gbP(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbP:function(a){return a===0?1/a<0:a<0},
T:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.a_(""+a+".toInt()"))},
ag:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.a_(""+a+".floor()"))},
m:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){return a&0x1FFFFFFF},
n:function(a,b){return a+b},
G:function(a,b){if(typeof b!=="number")throw H.h(H.ak(b))
return a-b},
d1:function(a,b){return a/b},
p:function(a,b){return a*b},
a6:function(a,b){if(typeof b!=="number")throw H.h(H.ak(b))
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cv(a,b)},
aB:function(a,b){return(a|0)===a?a/b|0:this.cv(a,b)},
cv:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.a_("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aO:function(a,b){var z
if(a>0)z=this.ex(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ex:function(a,b){return b>31?0:a>>>b},
bh:function(a,b){return(a|b)>>>0},
E:function(a,b){if(typeof b!=="number")throw H.h(H.ak(b))
return a<b},
al:function(a,b){if(typeof b!=="number")throw H.h(H.ak(b))
return a>b},
$isE:1,
$asE:function(){return[P.W]},
$isaB:1,
$isW:1},
d9:{"^":"aW;",$isu:1},
d8:{"^":"aW;"},
aX:{"^":"A;",
e8:function(a,b){if(b>=a.length)throw H.h(H.b7(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.q(b)
if(typeof b!=="string")throw H.h(P.eQ(b,null,null))
return a+b},
dC:function(a,b,c){var z
if(c>a.length)throw H.h(P.ah(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
dB:function(a,b){return this.dC(a,b,0)},
c8:function(a,b,c){H.j(c)
if(c==null)c=a.length
if(b>c)throw H.h(P.cd(b,null,null))
if(c>a.length)throw H.h(P.cd(c,null,null))
return a.substring(b,c)},
dG:function(a,b){return this.c8(a,b,null)},
fF:function(a){return a.toLowerCase()},
aD:function(a,b){var z
H.q(b)
if(typeof b!=="string")throw H.h(H.ak(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
m:function(a){return a},
gO:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gu:function(a){return a.length},
$isE:1,
$asE:function(){return[P.m]},
$ishg:1,
$ism:1}}],["","",,H,{"^":"",
fz:function(){return new P.bH("No element")},
fB:function(){return new P.bH("Too many elements")},
fA:function(){return new P.bH("Too few elements")},
hA:function(a,b,c){H.i(a,"$isd",[c],"$asd")
H.t(b,{func:1,ret:P.u,args:[c,c]})
H.bm(a,0,J.a9(a)-1,b,c)},
bm:function(a,b,c,d,e){H.i(a,"$isd",[e],"$asd")
H.t(d,{func:1,ret:P.u,args:[e,e]})
if(c-b<=32)H.hz(a,b,c,d,e)
else H.hy(a,b,c,d,e)},
hz:function(a,b,c,d,e){var z,y,x,w,v
H.i(a,"$isd",[e],"$asd")
H.t(d,{func:1,ret:P.u,args:[e,e]})
for(z=b+1,y=J.a1(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a2(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hy:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.i(a,"$isd",[a2],"$asd")
H.t(a1,{func:1,ret:P.u,args:[a2,a2]})
z=C.c.aB(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.aB(b+a0,2)
v=w-z
u=w+z
t=J.a1(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a2(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a2(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a2(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a2(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a2(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a2(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a2(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a2(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a2(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.ad(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.E()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.al()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=h
m=g
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.E()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.al()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.al()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.E()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.i(a,b,t.h(a,c))
t.i(a,c,r)
c=l+1
t.i(a,a0,t.h(a,c))
t.i(a,c,p)
H.bm(a,b,m-2,a1,a2)
H.bm(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.ad(a1.$2(t.h(a,m),r),0);)++m
for(;J.ad(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.E()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bm(a,m,l,a1,a2)}else H.bm(a,m,l,a1,a2)},
c2:{"^":"v;"},
bk:{"^":"c2;$ti",
gP:function(a){return new H.dd(this,this.gu(this),0,[H.al(this,"bk",0)])},
bV:function(a,b){return this.dI(0,H.t(b,{func:1,ret:P.R,args:[H.al(this,"bk",0)]}))}},
hD:{"^":"bk;a,b,c,$ti",
geg:function(){var z,y
z=J.a9(this.a)
y=this.c
if(y==null||y>z)return z
return y},
gey:function(){var z,y
z=J.a9(this.a)
y=this.b
if(y>z)return z
return y},
gu:function(a){var z,y,x
z=J.a9(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.G()
return x-y},
a7:function(a,b){var z,y
z=this.gey()+b
if(b>=0){y=this.geg()
if(typeof y!=="number")return H.G(y)
y=z>=y}else y=!0
if(y)throw H.h(P.bh(b,this,"index",null,null))
return J.cD(this.a,z)},
fE:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.a1(y)
w=x.gu(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.G()
u=w-z
if(u<0)u=0
t=new Array(u)
t.fixed$length=Array
s=H.f(t,this.$ti)
for(r=0;r<u;++r){C.a.i(s,r,x.a7(y,z+r))
if(x.gu(y)<w)throw H.h(P.a4(this))}return s},
q:{
ch:function(a,b,c,d){if(c!=null){if(c<0)H.aE(P.ah(c,0,null,"end",null))
if(b>c)H.aE(P.ah(b,0,c,"start",null))}return new H.hD(a,b,c,[d])}}},
dd:{"^":"c;a,b,c,0d,$ti",
sca:function(a){this.d=H.o(a,H.l(this,0))},
gJ:function(){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.a1(z)
x=y.gu(z)
if(this.b!==x)throw H.h(P.a4(z))
w=this.c
if(w>=x){this.sca(null)
return!1}this.sca(y.a7(z,w));++this.c
return!0},
$isap:1},
fP:{"^":"bk;a,b,$ti",
gu:function(a){return J.a9(this.a)},
a7:function(a,b){return this.b.$1(J.cD(this.a,b))},
$asbk:function(a,b){return[b]},
$asv:function(a,b){return[b]}},
e_:{"^":"v;a,b,$ti",
gP:function(a){return new H.hU(J.bs(this.a),this.b,this.$ti)}},
hU:{"^":"ap;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gJ()))return!0
return!1},
gJ:function(){return this.a.gJ()}},
bC:{"^":"c;$ti"}}],["","",,H,{"^":"",
bT:function(a){var z,y
z=H.q(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
j1:function(a){return init.types[H.j(a)]},
jc:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.z(a).$isaq},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aH(a)
if(typeof z!=="string")throw H.h(H.ak(a))
return z},
b1:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b2:function(a){return H.hk(a)+H.cs(H.am(a),0,null)},
hk:function(a){var z,y,x,w,v,u,t,s,r
z=J.z(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.S||!!z.$isbo){u=C.I(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bT(w.length>1&&C.v.e8(w,0)===36?C.v.dG(w,1):w)},
k8:[function(){return Date.now()},"$0","iJ",0,0,21],
bF:function(){var z,y
if($.at!=null)return
$.at=1000
$.bl=H.iJ()
if(typeof window=="undefined")return
z=window
if(z==null)return
y=z.performance
if(y==null)return
if(typeof y.now!="function")return
$.at=1e6
$.bl=new H.hl(y)},
G:function(a){throw H.h(H.ak(a))},
b:function(a,b){if(a==null)J.a9(a)
throw H.h(H.b7(a,b))},
b7:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
z=H.j(J.a9(a))
if(!(b<0)){if(typeof z!=="number")return H.G(z)
y=b>=z}else y=!0
if(y)return P.bh(b,a,"index",null,z)
return P.cd(b,"index",null)},
ak:function(a){return new P.an(!0,a,null,null)},
iV:function(a){return a},
h:function(a){var z
if(a==null)a=new P.dl()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ey})
z.name=""}else z.toString=H.ey
return z},
ey:function(){return J.aH(this.dartException)},
aE:function(a){throw H.h(a)},
cB:function(a){throw H.h(P.a4(a))},
aF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aO(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c8(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dk(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dL()
u=$.$get$dM()
t=$.$get$dN()
s=$.$get$dO()
r=$.$get$dS()
q=$.$get$dT()
p=$.$get$dQ()
$.$get$dP()
o=$.$get$dV()
n=$.$get$dU()
m=v.a2(y)
if(m!=null)return z.$1(H.c8(H.q(y),m))
else{m=u.a2(y)
if(m!=null){m.method="call"
return z.$1(H.c8(H.q(y),m))}else{m=t.a2(y)
if(m==null){m=s.a2(y)
if(m==null){m=r.a2(y)
if(m==null){m=q.a2(y)
if(m==null){m=p.a2(y)
if(m==null){m=s.a2(y)
if(m==null){m=o.a2(y)
if(m==null){m=n.a2(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dk(H.q(y),m))}}return z.$1(new H.hP(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dw()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.an(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dw()
return a},
j0:function(a){var z
if(a==null)return new H.ed(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ed(a)},
jb:function(a,b,c,d,e,f){H.k(a,"$isbf")
switch(H.j(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.ia("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.j(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jb)
a.$identity=z
return z},
f_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.z(d).$isd){z.$reflectionInfo=d
x=H.hq(z).r}else x=d
w=e?Object.create(new H.hC().constructor.prototype):Object.create(new H.bZ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a3
if(typeof u!=="number")return u.n()
$.a3=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cO(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.j1,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cL:H.c_
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cO(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eX:function(a,b,c,d){var z=H.c_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cO:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eX(y,!w,z,b)
if(y===0){w=$.a3
if(typeof w!=="number")return w.n()
$.a3=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aJ
if(v==null){v=H.bu("self")
$.aJ=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a3
if(typeof w!=="number")return w.n()
$.a3=w+1
t+=w
w="return function("+t+"){return this."
v=$.aJ
if(v==null){v=H.bu("self")
$.aJ=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
eY:function(a,b,c,d){var z,y
z=H.c_
y=H.cL
switch(b?-1:a){case 0:throw H.h(H.hs("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.aJ
if(z==null){z=H.bu("self")
$.aJ=z}y=$.cK
if(y==null){y=H.bu("receiver")
$.cK=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a3
if(typeof y!=="number")return y.n()
$.a3=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a3
if(typeof y!=="number")return y.n()
$.a3=y+1
return new Function(z+y+"}")()},
cu:function(a,b,c,d,e,f,g){var z,y
z=J.bi(H.bR(b))
H.j(c)
y=!!J.z(d).$isd?J.bi(d):d
return H.f_(a,z,c,y,!!e,f,g)},
q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a8(a,"String"))},
b8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a8(a,"double"))},
ba:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a8(a,"num"))},
iT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a8(a,"bool"))},
j:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a8(a,"int"))},
cz:function(a,b){throw H.h(H.a8(a,H.q(b).substring(3)))},
jh:function(a,b){var z=J.a1(b)
throw H.h(H.eW(a,z.c8(b,3,z.gu(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.z(a)[b])return a
H.cz(a,b)},
H:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.z(a)[b]
else z=!0
if(z)return a
H.jh(a,b)},
eu:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.z(a)[b])return a
H.cz(a,b)},
bR:function(a){if(a==null)return a
if(!!J.z(a).$isd)return a
throw H.h(H.a8(a,"List"))},
jd:function(a,b){var z
if(a==null)return a
z=J.z(a)
if(!!z.$isd)return a
if(z[b])return a
H.cz(a,b)},
eo:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.j(z)]
else return a.$S()}return},
ep:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eo(J.z(a))
if(z==null)return!1
return H.eh(z,null,b,null)},
t:function(a,b){var z,y
if(a==null)return a
if($.cp)return a
$.cp=!0
try{if(H.ep(a,b))return a
z=H.cA(b)
y=H.a8(a,z)
throw H.h(y)}finally{$.cp=!1}},
ei:function(a){var z,y
z=J.z(a)
if(!!z.$isr){y=H.eo(z)
if(y!=null)return H.cA(y)
return"Closure"}return H.b2(a)},
ji:function(a){throw H.h(new P.f6(H.q(a)))},
eq:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
kv:function(a,b,c){return H.aD(a["$as"+H.e(c)],H.am(b))},
b9:function(a,b,c,d){var z
H.q(c)
H.j(d)
z=H.aD(a["$as"+H.e(c)],H.am(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.q(b)
H.j(c)
z=H.aD(a["$as"+H.e(b)],H.am(a))
return z==null?null:z[c]},
l:function(a,b){var z
H.j(b)
z=H.am(a)
return z==null?null:z[b]},
cA:function(a){return H.aj(a,null)},
aj:function(a,b){var z,y
H.i(b,"$isd",[P.m],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bT(a[0].builtin$cls)+H.cs(a,1,b)
if(typeof a=="function")return H.bT(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.j(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.b(b,y)
return H.e(b[y])}if('func' in a)return H.iG(a,b)
if('futureOr' in a)return"FutureOr<"+H.aj("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.i(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.t(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.b(b,r)
t=C.v.n(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aj(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aj(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aj(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aj(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.iX(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.q(z[l])
n=n+m+H.aj(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cs:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isd",[P.m],"$asd")
if(a==null)return""
z=new P.cg("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aj(u,c)}return"<"+z.m(0)+">"},
aD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
iW:function(a,b,c,d){var z,y
H.q(b)
H.bR(c)
H.q(d)
if(a==null)return!1
z=H.am(a)
y=J.z(a)
if(y[b]==null)return!1
return H.ek(H.aD(y[d],z),null,c,null)},
i:function(a,b,c,d){H.q(b)
H.bR(c)
H.q(d)
if(a==null)return a
if(H.iW(a,b,c,d))return a
throw H.h(H.a8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.cs(c,0,null),init.mangledGlobalNames)))},
ek:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.V(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.V(a[y],b,c[y],d))return!1
return!0},
kt:function(a,b,c){return a.apply(b,H.aD(J.z(b)["$as"+H.e(c)],H.am(b)))},
es:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="M"||a===-1||a===-2||H.es(z)}return!1},
en:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="M"||b===-1||b===-2||H.es(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.en(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ep(a,b)}z=J.z(a).constructor
y=H.am(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.V(z,null,b,null)},
o:function(a,b){if(a!=null&&!H.en(a,b))throw H.h(H.a8(a,H.cA(b)))
return a},
V:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.V(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="M")return!0
if('func' in c)return H.eh(a,b,c,d)
if('func' in a)return c.builtin$cls==="bf"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.V("type" in a?a.type:null,b,x,d)
else if(H.V(a,b,x,d))return!0
else{if(!('$is'+"ft" in y.prototype))return!1
w=y.prototype["$as"+"ft"]
v=H.aD(w,z?a.slice(1):null)
return H.V(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ek(H.aD(r,z),b,u,d)},
eh:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.V(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.V(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.V(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.V(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jg(m,b,l,d)},
jg:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.V(c[w],d,a[w],b))return!1}return!0},
ku:function(a,b,c){Object.defineProperty(a,H.q(b),{value:c,enumerable:false,writable:true,configurable:true})},
je:function(a){var z,y,x,w,v,u
z=H.q($.er.$1(a))
y=$.bN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bQ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.q($.ej.$2(a,z))
if(z!=null){y=$.bN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bQ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bS(x)
$.bN[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bQ[z]=x
return x}if(v==="-"){u=H.bS(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ev(a,x)
if(v==="*")throw H.h(P.dW(z))
if(init.leafTags[z]===true){u=H.bS(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ev(a,x)},
ev:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cy(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bS:function(a){return J.cy(a,!1,null,!!a.$isaq)},
jf:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bS(z)
else return J.cy(z,c,null,null)},
j9:function(){if(!0===$.cx)return
$.cx=!0
H.ja()},
ja:function(){var z,y,x,w,v,u,t,s
$.bN=Object.create(null)
$.bQ=Object.create(null)
H.j5()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ew.$1(v)
if(u!=null){t=H.jf(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
j5:function(){var z,y,x,w,v,u,t
z=C.W()
z=H.aA(C.T,H.aA(C.Y,H.aA(C.H,H.aA(C.H,H.aA(C.X,H.aA(C.U,H.aA(C.V(C.I),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.er=new H.j6(v)
$.ej=new H.j7(u)
$.ew=new H.j8(t)},
aA:function(a,b){return a(b)||b},
hp:{"^":"c;a,b,c,d,e,f,r,0x",q:{
hq:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bi(z)
y=z[0]
x=z[1]
return new H.hp(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hl:{"^":"r:9;a",
$0:function(){return C.b.ag(1000*this.a.now())}},
hM:{"^":"c;a,b,c,d,e,f",
a2:function(a){var z,y,x
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
q:{
a7:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h4:{"^":"I;a,b",
m:function(a){var z=this.b
if(z==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dk:function(a,b){return new H.h4(a,b==null?null:b.method)}}},
fF:{"^":"I;a,b,c",
m:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
q:{
c8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fF(a,y,z?null:b.receiver)}}},
hP:{"^":"I;a",
m:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jj:{"^":"r:2;a",
$1:function(a){if(!!J.z(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ed:{"^":"c;a,0b",
m:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$ishB:1},
r:{"^":"c;",
m:function(a){return"Closure '"+H.b2(this).trim()+"'"},
gd0:function(){return this},
$isbf:1,
gd0:function(){return this}},
dz:{"^":"r;"},
hC:{"^":"dz;",
m:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bT(z)+"'"}},
bZ:{"^":"dz;a,b,c,d",
a4:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gO:function(a){var z,y
z=this.c
if(z==null)y=H.b1(this.a)
else y=typeof z!=="object"?J.aG(z):H.b1(z)
return(y^H.b1(this.b))>>>0},
m:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
q:{
c_:function(a){return a.a},
cL:function(a){return a.c},
bu:function(a){var z,y,x,w,v
z=new H.bZ("self","target","receiver","name")
y=J.bi(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hN:{"^":"I;a",
m:function(a){return this.a},
q:{
a8:function(a,b){return new H.hN("TypeError: "+H.e(P.bB(a))+": type '"+H.ei(a)+"' is not a subtype of type '"+b+"'")}}},
eV:{"^":"I;a",
m:function(a){return this.a},
q:{
eW:function(a,b){return new H.eV("CastError: "+H.e(P.bB(a))+": type '"+H.ei(a)+"' is not a subtype of type '"+b+"'")}}},
hr:{"^":"I;a",
m:function(a){return"RuntimeError: "+H.e(this.a)},
q:{
hs:function(a){return new H.hr(a)}}},
fE:{"^":"ca;a,0b,0c,0d,0e,0f,r,$ti",
gu:function(a){return this.a},
gai:function(){return new H.fH(this,[H.l(this,0)])},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bs(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bs(w,b)
x=y==null?null:y.b
return x}else return this.fh(b)},
fh:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cl(z,J.aG(a)&0x3ffffff)
x=this.cT(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.o(b,H.l(this,0))
H.o(c,H.l(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bt()
this.b=z}this.cb(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bt()
this.c=y}this.cb(y,b,c)}else{x=this.d
if(x==null){x=this.bt()
this.d=x}w=J.aG(b)&0x3ffffff
v=this.cl(x,w)
if(v==null)this.bx(x,w,[this.bn(b,c)])
else{u=this.cT(v,b)
if(u>=0)v[u].b=c
else v.push(this.bn(b,c))}}},
be:function(a,b){var z,y
H.t(b,{func:1,ret:-1,args:[H.l(this,0),H.l(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.a4(this))
z=z.c}},
cb:function(a,b,c){var z
H.o(b,H.l(this,0))
H.o(c,H.l(this,1))
z=this.bs(a,b)
if(z==null)this.bx(a,b,this.bn(b,c))
else z.b=c},
e0:function(){this.r=this.r+1&67108863},
bn:function(a,b){var z,y
z=new H.fG(H.o(a,H.l(this,0)),H.o(b,H.l(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e0()
return z},
cT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ad(a[y].a,b))return y
return-1},
m:function(a){return P.dg(this)},
bs:function(a,b){return a[b]},
cl:function(a,b){return a[b]},
bx:function(a,b,c){a[b]=c},
ed:function(a,b){delete a[b]},
bt:function(){var z=Object.create(null)
this.bx(z,"<non-identifier-key>",z)
this.ed(z,"<non-identifier-key>")
return z}},
fG:{"^":"c;a,b,0c,0d"},
fH:{"^":"c2;a,$ti",
gu:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.fI(z,z.r,this.$ti)
y.c=z.e
return y}},
fI:{"^":"c;a,b,0c,0d,$ti",
scc:function(a){this.d=H.o(a,H.l(this,0))},
gJ:function(){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.a4(z))
else{z=this.c
if(z==null){this.scc(null)
return!1}else{this.scc(z.a)
this.c=this.c.c
return!0}}},
$isap:1},
j6:{"^":"r:2;a",
$1:function(a){return this.a(a)}},
j7:{"^":"r:10;a",
$2:function(a,b){return this.a(a,b)}},
j8:{"^":"r:11;a",
$1:function(a){return this.a(H.q(a))}}}],["","",,H,{"^":"",
iX:function(a){return J.d7(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.b7(b,a))},
h_:{"^":"A;","%":";ArrayBufferView;cb|e9|ea|dh|eb|ec|di"},
cb:{"^":"h_;",
gu:function(a){return a.length},
$isaq:1,
$asaq:I.cv},
dh:{"^":"ea;",
h:function(a,b){H.bL(b,a,a.length)
return a[b]},
i:function(a,b,c){H.b8(c)
H.bL(b,a,a.length)
a[b]=c},
$asbC:function(){return[P.aB]},
$asK:function(){return[P.aB]},
$isv:1,
$asv:function(){return[P.aB]},
$isd:1,
$asd:function(){return[P.aB]}},
di:{"^":"ec;",
i:function(a,b,c){H.j(c)
H.bL(b,a,a.length)
a[b]=c},
$asbC:function(){return[P.u]},
$asK:function(){return[P.u]},
$isv:1,
$asv:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]}},
fZ:{"^":"dh;",$isd5:1,"%":"Float64Array"},
jX:{"^":"di;",
h:function(a,b){H.bL(b,a,a.length)
return a[b]},
$isjS:1,
"%":"Int8Array"},
e9:{"^":"cb+K;"},
ea:{"^":"e9+bC;"},
eb:{"^":"cb+K;"},
ec:{"^":"eb+bC;"}}],["","",,P,{"^":"",
i1:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iQ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.i3(z),1)).observe(y,{childList:true})
return new P.i2(z,y,x)}else if(self.setImmediate!=null)return P.iR()
return P.iS()},
km:[function(a){self.scheduleImmediate(H.b6(new P.i4(H.t(a,{func:1,ret:-1})),0))},"$1","iQ",4,0,1],
kn:[function(a){self.setImmediate(H.b6(new P.i5(H.t(a,{func:1,ret:-1})),0))},"$1","iR",4,0,1],
ko:[function(a){H.t(a,{func:1,ret:-1})
P.ix(0,a)},"$1","iS",4,0,1],
dI:function(a,b){var z
H.t(b,{func:1,ret:-1,args:[P.ai]})
z=C.c.aB(a.a,1000)
return P.iy(z<0?0:z,b)},
iK:function(){var z,y
for(;z=$.b4,z!=null;){$.b3=null
y=z.b
$.b4=y
if(y==null)$.bM=null
z.a.$0()}},
ks:[function(){$.cq=!0
try{P.iK()}finally{$.b3=null
$.cq=!1
if($.b4!=null)$.$get$ck().$1(P.el())}},"$0","el",0,0,3],
iO:function(a){var z,y,x,w
H.t(a,{func:1,ret:-1})
z=$.b4
if(z==null){y=new P.e1(a)
$.bM=y
$.b4=y
if(!$.cq)$.$get$ck().$1(P.el())
$.b3=$.bM
return}x=new P.e1(a)
w=$.b3
if(w==null){x.b=z
$.b3=x
$.b4=x}else{x.b=w.b
w.b=x
$.b3=x
if(x.b==null)$.bM=x}},
dH:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.ai]}
H.t(b,z)
y=$.az
if(y===C.r){y.toString
return P.dI(a,b)}x=y.cA(b,P.ai)
$.az.toString
return P.dI(a,H.t(x,z))},
iL:function(a,b,c,d,e){var z={}
z.a=d
P.iO(new P.iM(z,e))},
iN:function(a,b,c,d,e,f,g){var z,y
H.t(d,{func:1,ret:f,args:[g]})
H.o(e,g)
y=$.az
if(y===c)return d.$1(e)
$.az=c
z=y
try{y=d.$1(e)
return y}finally{$.az=z}},
i3:{"^":"r:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
i2:{"^":"r:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.t(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i4:{"^":"r:0;a",
$0:function(){this.a.$0()}},
i5:{"^":"r:0;a",
$0:function(){this.a.$0()}},
ef:{"^":"c;a,0b,c",
dZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.iA(this,b),0),a)
else throw H.h(P.a_("`setTimeout()` not found."))},
e_:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b6(new P.iz(this,a,Date.now(),b),0),a)
else throw H.h(P.a_("Periodic timer."))},
$isai:1,
q:{
ix:function(a,b){var z=new P.ef(!0,0)
z.dZ(a,b)
return z},
iy:function(a,b){var z=new P.ef(!1,0)
z.e_(a,b)
return z}}},
iA:{"^":"r:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iz:{"^":"r:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.a6(w,x)}z.c=y
this.d.$1(z)}},
e1:{"^":"c;a,0b"},
ai:{"^":"c;"},
iC:{"^":"c;",$iskl:1},
iM:{"^":"r:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dl()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.m(0)
throw x}},
im:{"^":"iC;",
gat:function(a){return},
fz:function(a,b,c){var z,y,x
H.t(a,{func:1,ret:-1,args:[c]})
H.o(b,c)
try{if(C.r===$.az){a.$1(b)
return}P.iN(null,null,this,a,b,-1,c)}catch(x){z=H.aF(x)
y=H.j0(x)
P.iL(null,null,this,z,H.k(y,"$ishB"))}},
cA:function(a,b){return new P.io(this,H.t(a,{func:1,ret:-1,args:[b]}),b)}},
io:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.fz(this.b,H.o(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
bg:function(a,b,c,d,e){return new P.ib(0,[d,e])},
fJ:function(a,b){return new H.fE(0,0,[a,b])},
bD:function(a,b,c,d){return new P.ig(0,0,[d])},
fy:function(a,b,c){var z,y
if(P.cr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$b5()
C.a.t(y,a)
try{P.iI(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.dy(b,H.jd(z,"$isv"),", ")+c
return y.charCodeAt(0)==0?y:y},
c5:function(a,b,c){var z,y,x
if(P.cr(a))return b+"..."+c
z=new P.cg(b)
y=$.$get$b5()
C.a.t(y,a)
try{x=z
x.a=P.dy(x.gaz(),a,", ")}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
cr:function(a){var z,y
for(z=0;y=$.$get$b5(),z<y.length;++z)if(a===y[z])return!0
return!1},
iI:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.e(z.gJ())
C.a.t(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.gJ();++x
if(!z.I()){if(x<=4){C.a.t(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ();++x
for(;z.I();t=s,s=r){r=z.gJ();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2;--x}C.a.t(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.t(b,q)
C.a.t(b,u)
C.a.t(b,v)},
dc:function(a,b){var z,y,x
z=P.bD(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.cB)(a),++x)z.t(0,H.o(a[x],b))
return z},
dg:function(a){var z,y,x
z={}
if(P.cr(a))return"{...}"
y=new P.cg("")
try{C.a.t($.$get$b5(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
a.be(0,new P.fO(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$b5()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
ib:{"^":"ca;a,0b,0c,0d,0e,$ti",
gu:function(a){return this.a},
gai:function(){return new P.ic(this,[H.l(this,0)])},
cF:function(a){var z
if((a&0x3ffffff)===a){z=this.c
return z==null?!1:z[a]!=null}else return this.ea(a)},
ea:function(a){var z=this.d
if(z==null)return!1
return this.aA(this.b1(z,a),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
y=z==null?null:P.e5(z,b)
return y}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
y=x==null?null:P.e5(x,b)
return y}else return this.ej(b)},
ej:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.b1(z,a)
x=this.aA(y,a)
return x<0?null:y[x+1]},
i:function(a,b,c){var z
H.o(b,H.l(this,0))
H.o(c,H.l(this,1))
if((b&0x3ffffff)===b){z=this.c
if(z==null){z=P.e6()
this.c=z}this.e2(z,b,c)}else this.ew(b,c)},
ew:function(a,b){var z,y,x,w
H.o(a,H.l(this,0))
H.o(b,H.l(this,1))
z=this.d
if(z==null){z=P.e6()
this.d=z}y=this.aM(a)
x=z[y]
if(x==null){P.cl(z,y,[a,b]);++this.a
this.e=null}else{w=this.aA(x,a)
if(w>=0)x[w+1]=b
else{x.push(a,b);++this.a
this.e=null}}},
be:function(a,b){var z,y,x,w,v
z=H.l(this,0)
H.t(b,{func:1,ret:-1,args:[z,H.l(this,1)]})
y=this.cg()
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(H.o(v,z),this.h(0,v))
if(y!==this.e)throw H.h(P.a4(this))}},
cg:function(){var z,y,x,w,v,u,t,s,r,q,p,o
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
e2:function(a,b,c){H.o(b,H.l(this,0))
H.o(c,H.l(this,1))
if(a[b]==null){++this.a
this.e=null}P.cl(a,b,c)},
aM:function(a){return J.aG(a)&0x3ffffff},
b1:function(a,b){return a[this.aM(b)]},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;y+=2)if(J.ad(a[y],b))return y
return-1},
$isjM:1,
q:{
e5:function(a,b){var z=a[b]
return z===a?null:z},
cl:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
e6:function(){var z=Object.create(null)
P.cl(z,"<non-identifier-key>",z)
delete z["<non-identifier-key>"]
return z}}},
ic:{"^":"c2;a,$ti",
gu:function(a){return this.a.a},
gP:function(a){var z=this.a
return new P.id(z,z.cg(),0,this.$ti)}},
id:{"^":"c;a,b,c,0d,$ti",
saL:function(a){this.d=H.o(a,H.l(this,0))},
gJ:function(){return this.d},
I:function(){var z,y,x
z=this.b
y=this.c
x=this.a
if(z!==x.e)throw H.h(P.a4(x))
else if(y>=z.length){this.saL(null)
return!1}else{this.saL(z[y])
this.c=y+1
return!0}},
$isap:1},
ig:{"^":"ie;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){var z=new P.ih(this,this.r,this.$ti)
z.c=this.e
return z},
gu:function(a){return this.a},
U:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.k(z[b],"$iscn")!=null}else{y=this.e9(b)
return y}},
e9:function(a){var z=this.d
if(z==null)return!1
return this.aA(this.b1(z,a),a)>=0},
t:function(a,b){var z,y
H.o(b,H.l(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.co()
this.b=z}return this.cd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.co()
this.c=y}return this.cd(y,b)}else return this.e1(b)},
e1:function(a){var z,y,x
H.o(a,H.l(this,0))
z=this.d
if(z==null){z=P.co()
this.d=z}y=this.aM(a)
x=z[y]
if(x==null)z[y]=[this.bu(a)]
else{if(this.aA(x,a)>=0)return!1
x.push(this.bu(a))}return!0},
cd:function(a,b){H.o(b,H.l(this,0))
if(H.k(a[b],"$iscn")!=null)return!1
a[b]=this.bu(b)
return!0},
el:function(){this.r=this.r+1&67108863},
bu:function(a){var z,y
z=new P.cn(H.o(a,H.l(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.el()
return z},
aM:function(a){return J.aG(a)&0x3ffffff},
b1:function(a,b){return a[this.aM(b)]},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ad(a[y].a,b))return y
return-1},
q:{
co:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cn:{"^":"c;a,0b,0c"},
ih:{"^":"c;a,b,0c,0d,$ti",
saL:function(a){this.d=H.o(a,H.l(this,0))},
gJ:function(){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.a4(z))
else{z=this.c
if(z==null){this.saL(null)
return!1}else{this.saL(H.o(z.a,H.l(this,0)))
this.c=this.c.b
return!0}}},
$isap:1},
ie:{"^":"hu;"},
fK:{"^":"ii;",$isv:1,$isd:1},
K:{"^":"c;$ti",
gP:function(a){return new H.dd(a,this.gu(a),0,[H.b9(this,a,"K",0)])},
a7:function(a,b){return this.h(a,b)},
fd:function(a,b,c,d){var z,y,x
H.o(b,d)
H.t(c,{func:1,ret:d,args:[d,H.b9(this,a,"K",0)]})
z=this.gu(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gu(a))throw H.h(P.a4(a))}return y},
c5:function(a,b){return H.ch(a,b,null,H.b9(this,a,"K",0))},
n:function(a,b){var z,y
z=[H.b9(this,a,"K",0)]
H.i(b,"$isd",z,"$asd")
y=H.f([],z)
C.a.su(y,C.c.n(this.gu(a),b.gu(b)))
C.a.aK(y,0,this.gu(a),a)
C.a.aK(y,this.gu(a),y.length,b)
return y},
m:function(a){return P.c5(a,"[","]")}},
ca:{"^":"bE;"},
fO:{"^":"r:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
bE:{"^":"c;$ti",
be:function(a,b){var z,y
H.t(b,{func:1,ret:-1,args:[H.al(this,"bE",0),H.al(this,"bE",1)]})
for(z=J.bs(this.gai());z.I();){y=z.gJ()
b.$2(y,this.h(0,y))}},
gu:function(a){return J.a9(this.gai())},
m:function(a){return P.dg(this)},
$isdf:1},
hv:{"^":"c;$ti",
ab:function(a,b){var z
for(z=J.bs(H.i(b,"$isv",this.$ti,"$asv"));z.I();)this.t(0,z.gJ())},
m:function(a){return P.c5(this,"{","}")},
$isv:1,
$iskd:1},
hu:{"^":"hv;"},
ii:{"^":"c+K;"}}],["","",,P,{"^":"",
fs:function(a){if(a instanceof H.r)return a.m(0)
return"Instance of '"+H.b2(a)+"'"},
ar:function(a,b,c,d){var z,y
H.o(b,d)
z=J.fC(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.i(z,y,b)
return H.i(z,"$isd",[d],"$asd")},
fL:function(a,b,c){var z,y
z=H.f([],[c])
for(y=a.gP(a);y.I();)C.a.t(z,H.o(y.gJ(),c))
return z},
bB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aH(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fs(a)},
R:{"^":"c;"},
"+bool":0,
aB:{"^":"W;"},
"+double":0,
ae:{"^":"c;a",
n:function(a,b){return new P.ae(C.c.n(this.a,b.gh0()))},
E:function(a,b){return C.c.E(this.a,H.k(b,"$isae").a)},
al:function(a,b){return C.c.al(this.a,H.k(b,"$isae").a)},
a4:function(a,b){if(b==null)return!1
if(!(b instanceof P.ae))return!1
return this.a===b.a},
gO:function(a){return this.a&0x1FFFFFFF},
aD:function(a,b){return C.c.aD(this.a,H.k(b,"$isae").a)},
m:function(a){var z,y,x,w,v
z=new P.fl()
y=this.a
if(y<0)return"-"+new P.ae(0-y).m(0)
x=z.$1(C.c.aB(y,6e7)%60)
w=z.$1(C.c.aB(y,1e6)%60)
v=new P.fk().$1(y%1e6)
return""+C.c.aB(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isE:1,
$asE:function(){return[P.ae]},
q:{
cY:function(a,b,c,d,e,f){return new P.ae(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fk:{"^":"r:4;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fl:{"^":"r:4;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{"^":"c;"},
dl:{"^":"I;",
m:function(a){return"Throw of null."}},
an:{"^":"I;a,b,c,d",
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
m:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gbr()+y+x
if(!this.a)return w
v=this.gbq()
u=P.bB(this.b)
return w+v+": "+H.e(u)},
q:{
eQ:function(a,b,c){return new P.an(!0,a,b,c)}}},
dn:{"^":"an;e,f,a,b,c,d",
gbr:function(){return"RangeError"},
gbq:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
q:{
cd:function(a,b,c){return new P.dn(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")},
dp:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.ah(a,0,c,"start",f))
if(a>b||b>c)throw H.h(P.ah(b,a,c,"end",f))
return b}}},
fx:{"^":"an;e,u:f>,a,b,c,d",
gbr:function(){return"RangeError"},
gbq:function(){if(J.cC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
q:{
bh:function(a,b,c,d,e){var z=H.j(e!=null?e:J.a9(b))
return new P.fx(b,z,!0,a,c,"Index out of range")}}},
hQ:{"^":"I;a",
m:function(a){return"Unsupported operation: "+this.a},
q:{
a_:function(a){return new P.hQ(a)}}},
hO:{"^":"I;a",
m:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
dW:function(a){return new P.hO(a)}}},
bH:{"^":"I;a",
m:function(a){return"Bad state: "+this.a},
q:{
dx:function(a){return new P.bH(a)}}},
f1:{"^":"I;a",
m:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bB(z))+"."},
q:{
a4:function(a){return new P.f1(a)}}},
dw:{"^":"c;",
m:function(a){return"Stack Overflow"},
$isI:1},
f6:{"^":"I;a",
m:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ia:{"^":"c;a",
m:function(a){return"Exception: "+this.a}},
bf:{"^":"c;"},
u:{"^":"W;"},
"+int":0,
v:{"^":"c;$ti",
bV:["dI",function(a,b){var z=H.al(this,"v",0)
return new H.e_(this,H.t(b,{func:1,ret:P.R,args:[z]}),[z])}],
gu:function(a){var z,y
z=this.gP(this)
for(y=0;z.I();)++y
return y},
gaw:function(a){var z,y
z=this.gP(this)
if(!z.I())throw H.h(H.fz())
y=z.gJ()
if(z.I())throw H.h(H.fB())
return y},
a7:function(a,b){var z,y,x
if(b<0)H.aE(P.ah(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.I();){x=z.gJ()
if(b===y)return x;++y}throw H.h(P.bh(b,this,"index",null,y))},
m:function(a){return P.fy(this,"(",")")}},
ap:{"^":"c;$ti"},
d:{"^":"c;$ti",$isv:1},
"+List":0,
M:{"^":"c;",
gO:function(a){return P.c.prototype.gO.call(this,this)},
m:function(a){return"null"}},
"+Null":0,
W:{"^":"c;",$isE:1,
$asE:function(){return[P.W]}},
"+num":0,
c:{"^":";",
a4:function(a,b){return this===b},
gO:function(a){return H.b1(this)},
m:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.m(this)}},
bI:{"^":"c;a,b",
aY:function(a){var z,y,x
if(this.b!=null){z=this.a
y=H.j($.bl.$0())
x=this.b
if(typeof y!=="number")return y.G()
if(typeof x!=="number")return H.G(x)
if(typeof z!=="number")return z.n()
this.a=z+(y-x)
this.b=null}},
aj:function(a){var z=this.b
this.a=z==null?H.j($.bl.$0()):z},
gad:function(){var z,y
z=this.b
if(z==null)z=H.j($.bl.$0())
y=this.a
if(typeof z!=="number")return z.G()
if(typeof y!=="number")return H.G(y)
return z-y}},
m:{"^":"c;",$isE:1,
$asE:function(){return[P.m]},
$ishg:1},
"+String":0,
cg:{"^":"c;az:a<",
gu:function(a){return this.a.length},
m:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dy:function(a,b,c){var z=J.bs(b)
if(!z.I())return a
if(c.length===0){do a+=H.e(z.gJ())
while(z.I())}else{a+=H.e(z.gJ())
for(;z.I();)a=a+c+H.e(z.gJ())}return a}}}}],["","",,W,{"^":"",
fq:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).a_(z,a,b,c)
y.toString
z=W.p
z=new H.e_(new W.a0(y),H.t(new W.fr(),{func:1,ret:P.R,args:[z]}),[z])
return H.k(z.gaw(z),"$isX")},
aS:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eI(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aF(x)}return z},
i9:function(a,b){return document.createElement(a)},
iF:function(a){if(a==null)return
return W.e3(a)},
iP:function(a,b){var z
H.t(a,{func:1,ret:-1,args:[b]})
z=$.az
if(z===C.r)return a
return z.cA(a,b)},
D:{"^":"X;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
eM:{"^":"D;",
m:function(a){return String(a)},
$iseM:1,
"%":"HTMLAnchorElement"},
jl:{"^":"D;",
m:function(a){return String(a)},
"%":"HTMLAreaElement"},
cI:{"^":"D;",$iscI:1,"%":"HTMLBaseElement"},
bt:{"^":"D;",$isbt:1,"%":"HTMLBodyElement"},
cM:{"^":"D;0height",
sah:function(a,b){a.height=H.j(b)},
$iscM:1,
"%":"HTMLCanvasElement"},
cN:{"^":"A;",
eH:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
fZ:function(a,b,c,d,e){return a.strokeText(b,c,d,e)},
dF:function(a,b,c,d){return a.strokeText(b,c,d)},
bQ:function(a,b,c){return a.lineTo(H.ba(b),H.ba(c))},
cV:function(a,b,c){return a.moveTo(H.ba(b),H.ba(c))},
$iscN:1,
"%":"CanvasRenderingContext2D"},
jo:{"^":"p;0u:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fi:{"^":"p;",
eD:function(a,b){return a.adoptNode(b)},
bR:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
jp:{"^":"A;",
m:function(a){return String(a)},
"%":"DOMException"},
fj:{"^":"A;",
eV:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
X:{"^":"p;0fB:tagName=",
geF:function(a){return new W.i8(a)},
m:function(a){return a.localName},
a_:["bm",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d0
if(z==null){z=H.f([],[W.a5])
y=new W.dj(z)
C.a.t(z,W.e7(null))
C.a.t(z,W.ee())
$.d0=y
d=y}else d=z
z=$.d_
if(z==null){z=new W.eg(d)
$.d_=z
c=z}else{z.a=d
c=z}}if($.ab==null){z=document
y=z.implementation
y=(y&&C.Q).eV(y,"")
$.ab=y
$.c3=y.createRange()
y=$.ab
y.toString
y=y.createElement("base")
H.k(y,"$iscI")
y.href=z.baseURI
z=$.ab.head;(z&&C.R).ac(z,y)}z=$.ab
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.k(y,"$isbt")}z=$.ab
if(!!this.$isbt)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ab.body;(z&&C.q).ac(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.a5,a.tagName)){z=$.c3;(z&&C.K).d8(z,x)
z=$.c3
w=(z&&C.K).eS(z,b)}else{x.innerHTML=b
w=$.ab.createDocumentFragment()
for(z=J.C(w);y=x.firstChild,y!=null;)z.ac(w,y)}z=$.ab.body
if(x==null?z!=null:x!==z)J.cE(x)
c.c1(w)
C.u.eD(document,w)
return w},function(a,b,c){return this.a_(a,b,c,null)},"eU",null,null,"gh5",5,5,null],
scS:function(a,b){this.bj(a,b)},
bk:function(a,b,c,d){a.textContent=null
this.ac(a,this.a_(a,b,c,d))},
bj:function(a,b){return this.bk(a,b,null,null)},
aH:function(a,b){return a.getAttribute(b)},
eo:function(a,b){return a.removeAttribute(b)},
da:function(a,b,c){return a.setAttribute(b,c)},
$isX:1,
"%":";Element"},
fr:{"^":"r:15;",
$1:function(a){return!!J.z(H.k(a,"$isp")).$isX}},
jq:{"^":"D;0height",
sah:function(a,b){a.height=H.q(b)},
"%":"HTMLEmbedElement"},
d1:{"^":"A;","%":";EventTarget"},
jL:{"^":"D;0u:length=","%":"HTMLFormElement"},
fv:{"^":"D;","%":"HTMLHeadElement"},
fw:{"^":"fi;","%":"HTMLDocument"},
jN:{"^":"D;0height",
sah:function(a,b){a.height=H.q(b)},
"%":"HTMLIFrameElement"},
jP:{"^":"D;0height",
sah:function(a,b){a.height=H.j(b)},
"%":"HTMLImageElement"},
jR:{"^":"D;0height",
sah:function(a,b){a.height=H.j(b)},
"%":"HTMLInputElement"},
fM:{"^":"A;",
m:function(a){return String(a)},
$isfM:1,
"%":"Location"},
fR:{"^":"D;","%":"HTMLAudioElement;HTMLMediaElement"},
a0:{"^":"fK;a",
gaw:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.h(P.dx("No elements"))
if(y>1)throw H.h(P.dx("More than one element"))
return z.firstChild},
ab:function(a,b){var z,y,x,w,v
H.i(b,"$isv",[W.p],"$asv")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.C(y),v=0;v<x;++v)w.ac(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.k(c,"$isp")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.b(y,b)
J.eC(z,c,y[b])},
gP:function(a){var z=this.a.childNodes
return new W.d2(z,z.length,-1,[H.b9(C.a7,z,"aU",0)])},
gu:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.b(z,b)
return z[b]},
$asK:function(){return[W.p]},
$asv:function(){return[W.p]},
$asd:function(){return[W.p]}},
p:{"^":"d1;0at:parentElement=,0fp:previousSibling=",
fv:function(a){var z=a.parentNode
if(z!=null)J.br(z,a)},
m:function(a){var z=a.nodeValue
return z==null?this.dH(a):z},
ac:function(a,b){return a.appendChild(b)},
ep:function(a,b){return a.removeChild(b)},
er:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
h1:{"^":"ik;",
gu:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bh(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.k(c,"$isp")
throw H.h(P.a_("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$isaq:1,
$asaq:function(){return[W.p]},
$asK:function(){return[W.p]},
$isv:1,
$asv:function(){return[W.p]},
$isd:1,
$asd:function(){return[W.p]},
$asaU:function(){return[W.p]},
"%":"NodeList|RadioNodeList"},
jZ:{"^":"D;0height",
sah:function(a,b){a.height=H.q(b)},
"%":"HTMLObjectElement"},
ho:{"^":"A;",
eS:function(a,b){return a.createContextualFragment(b)},
d8:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
kc:{"^":"D;0u:length=","%":"HTMLSelectElement"},
hG:{"^":"D;",
a_:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
z=W.fq("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a0(y).ab(0,new W.a0(z))
return y},
"%":"HTMLTableElement"},
kf:{"^":"D;",
a_:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.N.a_(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.gaw(z)
x.toString
z=new W.a0(x)
w=z.gaw(z)
y.toString
w.toString
new W.a0(y).ab(0,new W.a0(w))
return y},
"%":"HTMLTableRowElement"},
kg:{"^":"D;",
a_:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.N.a_(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.gaw(z)
y.toString
x.toString
new W.a0(y).ab(0,new W.a0(x))
return y},
"%":"HTMLTableSectionElement"},
dA:{"^":"D;",
bk:function(a,b,c,d){var z
a.textContent=null
z=this.a_(a,b,c,d)
J.eD(a.content,z)},
bj:function(a,b){return this.bk(a,b,null,null)},
$isdA:1,
"%":"HTMLTemplateElement"},
kk:{"^":"fR;0height",
sah:function(a,b){a.height=H.j(b)},
"%":"HTMLVideoElement"},
hV:{"^":"d1;",
cZ:function(a,b){H.t(b,{func:1,ret:-1,args:[P.W]})
this.eh(a)
return this.es(a,W.iP(b,P.W))},
es:function(a,b){return a.requestAnimationFrame(H.b6(H.t(b,{func:1,ret:-1,args:[P.W]}),1))},
eh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
gat:function(a){return W.iF(a.parent)},
$ise0:1,
"%":"DOMWindow|Window"},
e2:{"^":"p;",$ise2:1,"%":"Attr"},
kr:{"^":"iE;",
gu:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bh(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.k(c,"$isp")
throw H.h(P.a_("Cannot assign element of immutable List."))},
a7:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$isaq:1,
$asaq:function(){return[W.p]},
$asK:function(){return[W.p]},
$isv:1,
$asv:function(){return[W.p]},
$isd:1,
$asd:function(){return[W.p]},
$asaU:function(){return[W.p]},
"%":"MozNamedAttrMap|NamedNodeMap"},
i6:{"^":"ca;ef:a<",
be:function(a,b){var z,y,x,w,v,u
H.t(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=this.gai(),y=z.length,x=this.a,w=J.C(x),v=0;v<z.length;z.length===y||(0,H.cB)(z),++v){u=z[v]
b.$2(u,w.aH(x,u))}},
gai:function(){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
v=H.k(z[w],"$ise2")
if(v.namespaceURI==null)C.a.t(y,v.name)}return y},
$asbE:function(){return[P.m,P.m]},
$asdf:function(){return[P.m,P.m]}},
i8:{"^":"i6;a",
h:function(a,b){return J.bU(this.a,H.q(b))},
i:function(a,b,c){J.eJ(this.a,b,c)},
gu:function(a){return this.gai().length}},
bp:{"^":"c;a",
dX:function(a){var z,y
z=$.$get$cm()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.a4[y],W.j3())
for(y=0;y<12;++y)z.i(0,C.z[y],W.j4())}},
aC:function(a){return $.$get$e8().U(0,W.aS(a))},
aq:function(a,b,c){var z,y,x
z=W.aS(a)
y=$.$get$cm()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.iT(x.$4(a,b,c,this))},
$isa5:1,
q:{
e7:function(a){var z,y
z=document.createElement("a")
y=new W.ip(z,window.location)
y=new W.bp(y)
y.dX(a)
return y},
kp:[function(a,b,c,d){H.k(a,"$isX")
H.q(b)
H.q(c)
H.k(d,"$isbp")
return!0},"$4","j3",16,0,8],
kq:[function(a,b,c,d){var z,y,x,w,v
H.k(a,"$isX")
H.q(b)
H.q(c)
z=H.k(d,"$isbp").a
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
return z},"$4","j4",16,0,8]}},
aU:{"^":"c;$ti",
gP:function(a){return new W.d2(a,this.gu(a),-1,[H.b9(this,a,"aU",0)])}},
dj:{"^":"c;a",
aC:function(a){return C.a.cz(this.a,new W.h3(a))},
aq:function(a,b,c){return C.a.cz(this.a,new W.h2(a,b,c))},
$isa5:1},
h3:{"^":"r:5;a",
$1:function(a){return H.k(a,"$isa5").aC(this.a)}},
h2:{"^":"r:5;a,b,c",
$1:function(a){return H.k(a,"$isa5").aq(this.a,this.b,this.c)}},
iq:{"^":"c;",
dY:function(a,b,c,d){var z,y,x
this.a.ab(0,c)
z=b.bV(0,new W.ir())
y=b.bV(0,new W.is())
this.b.ab(0,z)
x=this.c
x.ab(0,C.a6)
x.ab(0,y)},
aC:function(a){return this.a.U(0,W.aS(a))},
aq:["dK",function(a,b,c){var z,y
z=W.aS(a)
y=this.c
if(y.U(0,H.e(z)+"::"+b))return this.d.eE(c)
else if(y.U(0,"*::"+b))return this.d.eE(c)
else{y=this.b
if(y.U(0,H.e(z)+"::"+b))return!0
else if(y.U(0,"*::"+b))return!0
else if(y.U(0,H.e(z)+"::*"))return!0
else if(y.U(0,"*::*"))return!0}return!1}],
$isa5:1},
ir:{"^":"r:6;",
$1:function(a){return!C.a.U(C.z,H.q(a))}},
is:{"^":"r:6;",
$1:function(a){return C.a.U(C.z,H.q(a))}},
iv:{"^":"iq;e,a,b,c,d",
aq:function(a,b,c){if(this.dK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bU(a,"template")==="")return this.e.U(0,b)
return!1},
q:{
ee:function(){var z,y,x,w,v
z=P.m
y=P.dc(C.y,z)
x=H.l(C.y,0)
w=H.t(new W.iw(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.iv(y,P.bD(null,null,null,z),P.bD(null,null,null,z),P.bD(null,null,null,z),null)
y.dY(null,new H.fP(C.y,w,[x,z]),v,null)
return y}}},
iw:{"^":"r:16;",
$1:function(a){return"TEMPLATE::"+H.e(H.q(a))}},
iu:{"^":"c;",
aC:function(a){var z=J.z(a)
if(!!z.$isds)return!1
z=!!z.$isy
if(z&&W.aS(a)==="foreignObject")return!1
if(z)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.v.dB(b,"on"))return!1
return this.aC(a)},
$isa5:1},
d2:{"^":"c;a,b,c,0d,$ti",
scn:function(a){this.d=H.o(a,H.l(this,0))},
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scn(J.eA(this.a,z))
this.c=z
return!0}this.scn(null)
this.c=y
return!1},
gJ:function(){return this.d},
$isap:1},
i7:{"^":"c;a",
gat:function(a){return W.e3(this.a.parent)},
$ise0:1,
q:{
e3:function(a){if(a===window)return H.k(a,"$ise0")
else return new W.i7(a)}}},
a5:{"^":"c;"},
ip:{"^":"c;a,b",$iski:1},
eg:{"^":"c;a",
c1:function(a){new W.iB(this).$2(a,null)},
aN:function(a,b){if(b==null)J.cE(a)
else J.br(b,a)},
ev:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eF(a)
x=J.bU(y.gef(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aF(t)}v="element unprintable"
try{v=J.aH(a)}catch(t){H.aF(t)}try{u=W.aS(a)
this.eu(H.k(a,"$isX"),b,z,v,u,H.k(y,"$isdf"),H.q(x))}catch(t){if(H.aF(t) instanceof P.an)throw t
else{this.aN(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
eu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.aN(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aC(a)){this.aN(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aq(a,"is",g)){this.aN(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gai()
y=H.f(z.slice(0),[H.l(z,0)])
for(x=f.gai().length-1,z=f.a,w=J.C(z);x>=0;--x){if(x>=y.length)return H.b(y,x)
v=y[x]
if(!this.a.aq(a,J.eK(v),w.aH(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.aH(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aH(z,v)
w.eo(z,v)}}if(!!J.z(a).$isdA)this.c1(a.content)},
$isjY:1},
iB:{"^":"r:17;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ev(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aN(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eH(z)}catch(w){H.aF(w)
v=H.k(z,"$isp")
if(x){u=v.parentNode
if(u!=null)J.br(u,v)}else J.br(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.k(y,"$isp")}}},
ij:{"^":"A+K;"},
ik:{"^":"ij+aU;"},
iD:{"^":"A+K;"},
iE:{"^":"iD+aU;"}}],["","",,P,{"^":"",eN:{"^":"A;",$iseN:1,"%":"SVGAnimatedLength"},eO:{"^":"A;",$iseO:1,"%":"SVGAnimatedLengthList"},eP:{"^":"A;",$iseP:1,"%":"SVGAnimatedNumber"},jr:{"^":"y;0k:x=,0l:y=","%":"SVGFEBlendElement"},js:{"^":"y;0k:x=,0l:y=","%":"SVGFEColorMatrixElement"},jt:{"^":"y;0k:x=,0l:y=","%":"SVGFEComponentTransferElement"},ju:{"^":"y;0k:x=,0l:y=","%":"SVGFECompositeElement"},jv:{"^":"y;0k:x=,0l:y=","%":"SVGFEConvolveMatrixElement"},jw:{"^":"y;0k:x=,0l:y=","%":"SVGFEDiffuseLightingElement"},jx:{"^":"y;0k:x=,0l:y=","%":"SVGFEDisplacementMapElement"},jy:{"^":"y;0k:x=,0l:y=","%":"SVGFEFloodElement"},jz:{"^":"y;0k:x=,0l:y=","%":"SVGFEGaussianBlurElement"},jA:{"^":"y;0k:x=,0l:y=","%":"SVGFEImageElement"},jB:{"^":"y;0k:x=,0l:y=","%":"SVGFEMergeElement"},jC:{"^":"y;0k:x=,0l:y=","%":"SVGFEMorphologyElement"},jD:{"^":"y;0k:x=,0l:y=","%":"SVGFEOffsetElement"},jE:{"^":"y;0k:x=,0l:y=","%":"SVGFEPointLightElement"},jF:{"^":"y;0k:x=,0l:y=","%":"SVGFESpecularLightingElement"},jG:{"^":"y;0k:x=,0l:y=","%":"SVGFESpotLightElement"},jH:{"^":"y;0k:x=,0l:y=","%":"SVGFETileElement"},jI:{"^":"y;0k:x=,0l:y=","%":"SVGFETurbulenceElement"},jJ:{"^":"y;0k:x=,0l:y=","%":"SVGFilterElement"},jK:{"^":"aT;0k:x=,0l:y=","%":"SVGForeignObjectElement"},fu:{"^":"aT;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aT:{"^":"y;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},jQ:{"^":"aT;0k:x=,0l:y=","%":"SVGImageElement"},jW:{"^":"y;0k:x=,0l:y=","%":"SVGMaskElement"},k6:{"^":"y;0k:x=,0l:y=","%":"SVGPatternElement"},k7:{"^":"A;0u:length=","%":"SVGPointList"},kb:{"^":"fu;0k:x=,0l:y=","%":"SVGRectElement"},ds:{"^":"y;",$isds:1,"%":"SVGScriptElement"},y:{"^":"X;",
scS:function(a,b){this.bj(a,b)},
a_:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.a5])
C.a.t(z,W.e7(null))
C.a.t(z,W.ee())
C.a.t(z,new W.iu())
c=new W.eg(new W.dj(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).eU(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a0(w)
u=z.gaw(z)
for(z=J.C(v);x=u.firstChild,x!=null;)z.ac(v,x)
return v},
$isy:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},ke:{"^":"aT;0k:x=,0l:y=","%":"SVGSVGElement"},hJ:{"^":"aT;","%":"SVGTextPathElement;SVGTextContentElement"},kh:{"^":"hJ;0k:x=,0l:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},kj:{"^":"aT;0k:x=,0l:y=","%":"SVGUseElement"}}],["","",,P,{"^":"",d5:{"^":"c;",$isv:1,
$asv:function(){return[P.aB]},
$isd:1,
$asd:function(){return[P.aB]}}}],["","",,P,{"^":""}],["","",,V,{"^":"",
he:function(a){return a.gbN(a).E(0,0)},
f2:{"^":"c;",
c4:function(a,b){var z,y,x
z=a.y
y=b.y
x=z.c
if(x===y.c&&x!==0)return x>0
return(z.b&y.a)!==0&&(z.a&y.b)!==0}},
cP:{"^":"c;a,b,c"},
f7:{"^":"c;"},
N:{"^":"c;a,b",
bW:function(a){var z,y
z=this.a.a
y=this.b.a
a.sk(0,(z[0]+y[0])*0.5)
a.sl(0,(z[1]+y[1])*0.5)},
N:function(a,b){var z,y,x,w,v
z=this.a
y=a.a.a
x=y[0]
w=b.a.a
v=w[0]
z.sk(0,x<v?x:v)
y=y[1]
w=w[1]
z.sl(0,y<w?y:w)
z=this.b
y=a.b.a
x=y[0]
w=b.b.a
v=w[0]
z.sk(0,x>v?x:v)
y=y[1]
w=w[1]
z.sl(0,y>w?y:w)},
a9:function(){var z,y
z=this.b.a
y=this.a.a
return 2*(z[0]-y[0]+z[1]-y[1])},
m:function(a){return"AABB["+this.a.m(0)+" . "+this.b.m(0)+"]"},
q:{
eL:function(a,b){var z,y
z=b.a.a
y=a.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=a.a.a
y=b.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0}}},
f8:{"^":"c;a,b,0c,d,e,0f,r,x,y",
scq:function(a){this.c=H.i(a,"$isd",[P.u],"$asd")},
scr:function(a){this.f=H.i(a,"$isd",[V.ag],"$asd")},
dP:function(a){var z,y
z=new Array(this.r)
z.fixed$length=Array
this.scr(H.f(z,[V.ag]))
for(y=0;y<this.r;++y){z=this.f;(z&&C.a).i(z,y,new V.ag(0,0))}this.scq(P.ar(this.d,0,!1,P.u))},
fC:function(a,b){var z,y,x,w
z=this.a
y=z.b
if(a<0||a>=y.length)return H.b(y,a)
x=y[a].gao()
z=z.b
if(b<0||b>=z.length)return H.b(z,b)
w=z[b].gao()
z=w.a.a
y=x.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=x.a.a
y=w.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0},
bU:function(a){var z,y,x,w,v,u,t,s,r
this.x=0
for(z=this.a,y=0;y<this.e;++y){x=this.c
if(y>=x.length)return H.b(x,y)
x=H.j(x[y])
this.y=x
if(x===-1)continue
z.fs(this,C.a.h(z.b,x).gao())}this.e=0
F.ex(this.f,0,this.x,V.ag)
for(y=0;y<this.x;){x=this.f
if(y<0||y>=x.length)return H.b(x,y)
w=x[y]
x=w.a
v=C.a.h(z.b,x).gak()
x=w.b
a.eC(v,C.a.h(z.b,x).gak());++y
for(x=this.x,u=this.f;y<x;){if(y>=u.length)return H.b(u,y)
t=u[y]
s=t.a
r=w.a
if(s==null?r==null:s===r){s=t.b
r=w.b
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)break;++y}}},
cB:function(a){var z,y,x
z=this.e
y=this.d
if(z===y){x=this.c
z=y*2
this.d=z
z=new Array(z)
z.fixed$length=Array
this.scq(H.f(z,[P.u]))
C.a.Y(this.c,0,x.length,x,0)}C.a.i(this.c,this.e,a);++this.e},
d_:function(a){var z,y,x,w,v
if(a===this.y)return!0
z=this.x
y=this.r
if(z===y){x=this.f
z=y*2
this.r=z
z=new Array(z)
z.fixed$length=Array
this.scr(H.f(z,[V.ag]))
z=this.f
w=x.length;(z&&C.a).Y(z,0,w,x,0)
for(;w<this.r;++w){z=this.f;(z&&C.a).i(z,w,new V.ag(0,0))}}z=this.y
if(typeof z!=="number")return H.G(z)
y=this.f
v=this.x
if(a<z){if(v>=y.length)return H.b(y,v)
y[v].scW(a)
z=this.f
y=this.x
if(y>=z.length)return H.b(z,y)
z[y].scX(this.y)}else{if(v>=y.length)return H.b(y,v)
y[v].scW(z)
z=this.f
y=this.x
if(y>=z.length)return H.b(z,y)
z[y].scX(a)}++this.x
return!0},
$ishL:1,
$isjm:1,
q:{
f9:function(a){var z=new V.f8(a,0,16,0,16,0,-1)
z.dP(a)
return z}}},
fm:{"^":"c;0a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy",
sem:function(a){this.b=H.i(a,"$isd",[V.aa],"$asd")},
sfl:function(a){this.r=H.i(a,"$isd",[V.aa],"$asd")},
dR:function(){var z,y,x,w,v
for(z=this.d-1;z>=0;--z){y=this.b
x=new Float64Array(2)
C.a.i(y,z,new V.aa(new V.N(new E.a(x),new E.a(new Float64Array(2))),z,0))
y=this.b
x=y.length
if(z>=x)return H.b(y,z)
w=y[z]
if(z===this.d-1)y=null
else{v=z+1
if(v>=x)return H.b(y,v)
v=y[v]
y=v}J.cG(w,y)
y=this.b
if(z>=y.length)return H.b(y,z)
J.cF(y[z],-1)}for(y=this.f,z=0;z<4;++z)C.a.i(y,z,new E.a(new Float64Array(2)))},
fj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.b
if(a<0||a>=z.length)return H.b(z,a)
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
this.eq(y)
s=x.b
z.sk(0,v[0]-0.1)
z.sl(0,v[1]-0.1)
v=b.b.a
s.sk(0,v[0]+0.1)
s.sl(0,v[1]+0.1)
v=c.a
r=v[0]*2
q=v[1]*2
if(r<0)z.sk(0,w[0]+r)
else s.sk(0,s.a[0]+r)
if(q<0)z.sl(0,w[1]+q)
else s.sl(0,s.a[1]+q)
this.co(a)
return!0},
fs:function(a,b){var z,y,x,w,v
this.x=0
z=this.r
this.x=1
C.a.i(z,0,this.a)
for(z=[V.aa];y=this.x,y>0;){x=this.r;--y
this.x=y
if(y>=x.length)return H.b(x,y)
w=x[y]
if(w==null)continue
if(V.eL(w.a,b))if(w.d==null)a.d_(w.f)
else{y=this.r.length
if(y-this.x-2<=0){y=new Array(y*2)
y.fixed$length=Array
v=H.f(y,z)
y=this.r
C.a.Y(v,0,y.length,y,0)
this.sfl(v)}C.a.i(this.r,this.x++,w.d)
C.a.i(this.r,this.x++,w.e)}}},
bo:function(a){var z=a.d
if(z==null)return 0
return H.j(1+Math.max(this.bo(z),this.bo(a.e)))},
ce:function(){var z,y,x,w,v,u,t
z=this.e
if(z===-1){y=this.b
z=this.d*=2
z=new Array(z)
z.fixed$length=Array
this.sem(H.f(z,[V.aa]))
C.a.Y(this.b,0,y.length,y,0)
for(x=this.d-1;z=this.c,x>=z;--x){z=this.b
w=new Float64Array(2)
C.a.i(z,x,new V.aa(new V.N(new E.a(w),new E.a(new Float64Array(2))),x,0))
z=this.b
w=z.length
if(x<0||x>=w)return H.b(z,x)
v=z[x]
if(x===this.d-1)z=null
else{u=x+1
if(u>=w)return H.b(z,u)
u=z[u]
z=u}J.cG(v,z)
z=this.b
if(x>=z.length)return H.b(z,x)
J.cF(z[x],-1)}this.e=z}w=this.b
if(z<0||z>=w.length)return H.b(w,z)
t=w[z]
z=t.c
this.e=z!=null?z.f:-1
t.c=null
t.d=null
t.e=null
t.r=0
t.b=null;++this.c
return t},
ck:function(a){var z,y
z=this.e
if(z!==-1){y=this.b
if(z<0||z>=y.length)return H.b(y,z)
z=y[z]}else z=null
a.c=H.k(z,"$isaa")
a.r=-1
this.e=a.f;--this.c},
co:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.b
if(a<0||a>=z.length)return H.b(z,a)
y=z[a]
x=this.a
if(x==null){this.a=y
y.c=null
return}w=y.a
for(z=this.ch;v=x.d,v!=null;){u=x.e
t=x.a
s=t.a9()
z.N(t,w)
r=z.a9()
q=2*r
p=2*(r-s)
if(v.d==null){z.N(w,v.a)
o=z.a9()+p}else{t=v.a
z.N(w,t)
n=t.a9()
o=z.a9()-n+p}if(u.d==null){z.N(w,u.a)
m=z.a9()+p}else{t=u.a
z.N(w,t)
n=t.a9()
m=z.a9()-n+p}if(q<o&&q<m)break
x=o<m?v:u}z=this.b
t=x.f
if(t<0||t>=z.length)return H.b(z,t)
l=J.eG(z[t])
k=this.ce()
k.c=l
k.b=null
k.a.N(w,x.a)
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
this.a=k}for(x=k;x!=null;){x=this.cf(x)
j=x.d
u=x.e
x.r=H.j(1+Math.max(j.r,u.r))
x.a.N(j.a,u.a)
x=x.c}},
eq:function(a){var z,y,x,w,v,u,t
if(a===this.a){this.a=null
return}z=a.c
y=z.c
x=z.d
if(x===a)x=z.e
if(y!=null){w=y.d
if(w==null?z==null:w===z)y.d=x
else y.e=x
x.c=y
this.ck(z)
for(v=y;v!=null;){v=this.cf(v)
u=v.d
t=v.e
v.a.N(u.a,t.a)
v.r=H.j(1+Math.max(u.r,t.r))
v=v.c}}else{this.a=x
x.c=null
this.ck(z)}},
cf:function(a){var z,y,x,w,v,u,t,s
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
u.N(z.a,v.a)
y.a.N(u,w.a)
z=H.j(1+Math.max(z.r,v.r))
a.r=z
y.r=H.j(1+Math.max(z,w.r))}else{y.e=v
a.e=w
w.c=a
u.N(z.a,w.a)
y.a.N(u,v.a)
z=H.j(1+Math.max(z.r,w.r))
a.r=z
y.r=H.j(1+Math.max(z,v.r))}return y}if(x<-1){t=z.d
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
u.N(y.a,s.a)
z.a.N(u,t.a)
u=H.j(1+Math.max(y.r,s.r))
a.r=u
z.r=H.j(1+Math.max(u,t.r))}else{z.e=s
a.d=t
t.c=a
u.N(y.a,t.a)
z.a.N(u,s.a)
u=H.j(1+Math.max(y.r,t.r))
a.r=u
z.r=H.j(1+Math.max(u,s.r))}return z}return a},
f3:function(a){var z,y
z=this.a
if(z==null)return
y=this.bo(z)
this.bH(a,this.a,0,y)},
bH:function(a,b,c,d){var z,y,x,w,v,u
z=b.a
y=H.i(this.f,"$isd",[E.a],"$asd")
x=z.a
y[0].j(x)
y[1].j(x)
w=y[1]
z=z.b
v=z.a
x=x.a
w.sk(0,w.a[0]+(v[0]-x[0]))
y[2].j(z)
y[3].j(z)
w=y[3]
w.sk(0,w.a[0]-(v[0]-x[0]))
x=this.cx
v=(d-c)/d
x.a5(1,v,v)
a.b6(y,4,x)
y=a.c
y.stroke()
v=this.cy
a.b.aI(z,v)
v=v.a
z=v[0]
v=v[1]
w=c+1
u=H.e(b)+".id-"+w+"/"+d
a.b7(x)
C.j.dF(y,u,z,v)
z=b.d
if(z!=null)this.bH(a,z,w,d)
z=b.e
if(z!=null)this.bH(a,z,w,d)},
$isjn:1,
q:{
fn:function(){var z,y,x,w,v,u,t,s,r,q
z=new Array(16)
z.fixed$length=Array
y=[V.aa]
z=H.f(z,y)
x=new Array(4)
x.fixed$length=Array
x=H.f(x,[E.a])
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
z=new V.fm(z,0,16,0,x,y,0,new E.a(w),new V.N(new E.a(v),new E.a(u)),new V.ce(new E.a(t),new E.a(s),0),new V.N(new E.a(r),new E.a(q)),new G.bw(0,0,0),new E.a(new Float64Array(2)))
z.dR()
return z}}},
aa:{"^":"c;ao:a<,0ak:b<,0at:c>,0d,0e,f,r",
sat:function(a,b){this.c=H.k(b,"$isaa")},
sah:function(a,b){this.r=H.j(b)}},
ag:{"^":"c;a,b",
scW:function(a){this.a=H.j(a)},
scX:function(a){this.b=H.j(a)},
aD:function(a,b){var z,y
H.k(b,"$isag")
z=this.a
y=b.a
if(typeof z!=="number")return z.E()
if(typeof y!=="number")return H.G(y)
if(z<y)return-1
if(z===y){z=this.b
y=b.b
if(typeof z!=="number")return z.E()
if(typeof y!=="number")return H.G(y)
if(z<y)z=-1
else z=z===y?0:1
return z}return 1},
$isE:1,
$asE:function(){return[V.ag]}},
e4:{"^":"c;a,b"},
O:{"^":"c;M:a<,b",
C:function(a){var z,y
z=this.a
y=a.a.a
z.sk(0,y[0])
z.sl(0,y[1])
y=a.b.a
z=this.b.a
z[0]=y[0]
z[1]=y[1]
z[2]=y[2]
z[3]=y[3]}},
c1:{"^":"c;a,b",
m:function(a){return this.b}},
cZ:{"^":"c;a,b,c"},
hH:{"^":"c;a,b,c",
dV:function(){var z,y,x
for(z=this.b,y=this.a,x=0;x<8;++x){C.a.i(y,x,new E.a(new Float64Array(2)))
C.a.i(z,x,new E.a(new Float64Array(2)))}},
q:{
hI:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.a]
z=H.f(z,y)
x=new Array(8)
x.fixed$length=Array
y=new V.hH(z,H.f(x,y),0)
y.dV()
return y}}},
il:{"^":"c;a,b,c,d,e,f,r,x,y"},
f0:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3",
eK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n
a.e=0
z=b.gV()
y=d.gV()
x=c.b
w=C.b.p(x.b,z.gk(z))
v=C.b.p(x.a,z.gl(z))
u=c.a.a
t=u[0]
s=C.b.p(x.a,z.gk(z))
x=C.b.p(x.b,z.gl(z))
u=u[1]
r=e.b
q=e.a.a
p=C.b.p(r.b,y.gk(y))-C.b.p(r.a,y.gl(y))+q[0]-(w-v+t)
o=C.b.p(r.a,y.gk(y))+C.b.p(r.b,y.gl(y))+q[1]-(s+x+u)
n=b.gaG().n(0,d.gaG())
if(C.b.al(p*p+o*o,n.p(0,n)))return
a.d=C.n
a.c.j(z)
a.b.H()
a.e=1
x=a.a
x[0].a.j(y)
x[0].d.aU()},
eL:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=b0.gV()
y=b1.b
x=a9.b
w=C.b.p(y.b,z.gk(z))
v=C.b.p(y.a,z.gl(z))
u=b1.a.a
t=u[0]
s=C.b.p(y.a,z.gk(z))
r=C.b.p(y.b,z.gl(z))
u=u[1]
q=a9.a.a
p=w-v+t-q[0]
o=s+r+u-q[1]
q=x.b
u=x.a
n=q*p+u*o
m=-u*p+q*o
l=C.b.n(a8.b,b0.gaG())
k=a8.f
j=a8.d
i=a8.e
for(h=0,g=-17976931348623157e292,f=0;f<k;++f){if(f>=8)return H.b(j,f)
w=j[f].a
v=w[0]
w=w[1]
u=i[f].a
e=u[0]*(n-v)+u[1]*(m-w)
if(e>l)return
if(e>g){g=e
h=f}}d=h+1
d=d<k?d:0
if(h<0||h>=8)return H.b(j,h)
c=j[h]
if(d<0||d>=8)return H.b(j,d)
b=j[d]
if(g<11920928955078125e-23){a7.e=1
a7.d=C.h
w=a7.b
v=i[h].a
w.sk(0,v[0])
w.sl(0,v[1])
v=a7.c
w=c.a
u=w[0]
t=b.a
v.sk(0,(u+t[0])*0.5)
v.sl(0,(w[1]+t[1])*0.5)
a=a7.a[0]
t=a.a
t.sk(0,z.gk(z))
t.sl(0,z.gl(z))
a.d.aU()
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
v.sk(0,a0)
v.sl(0,m-w[1])
v.S()
a7.c.j(c)
v=a7.a
v[0].a.j(z)
v[0].d.aU()}else if(a2*(v-s)+a3*(u-r)<=0){if(a2*a2+a3*a3>l*l)return
a7.e=1
a7.d=C.h
w=a7.b
w.sk(0,a2)
w.sl(0,m-t[1])
w.S()
a7.c.j(b)
w=a7.a
w[0].a.j(z)
w[0].d.aU()}else{a4=(v+s)*0.5
a5=(u+r)*0.5
a6=i[h]
w=a6.a
if((n-a4)*w[0]+(m-a5)*w[1]>l)return
a7.e=1
a7.d=C.h
a7.b.j(a6)
w=a7.c
w.sk(0,a4)
w.sl(0,a5)
w=a7.a
w[0].a.j(z)
w[0].d.aU()}},
cN:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=b.f
y=d.f
x=b.e
w=b.d
v=d.d
u=this.f
G.dJ(e,c,u)
t=u.b
for(s=this.r,r=s.a,q=this.x,p=q.a,o=0,n=-17976931348623157e292,m=0;m<z;++m){if(m>=8)return H.b(x,m)
G.U(t,x[m],s)
G.n(u,w[m],q)
for(l=17976931348623157e292,k=0;k<y;++k){if(k>=8)return H.b(v,k)
j=v[k]
i=r[0]
h=j.a
g=i*(h[0]-p[0])+r[1]*(h[1]-p[1])
if(g<l)l=g}if(l>n){n=l
o=m}}a.b=o
a.a=n},
fa:function(a0,a1,a2,a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
H.i(a0,"$isd",[V.O],"$asd")
z=a1.e
y=a4.f
x=a4.d
w=a4.e
v=a0[0]
u=a0[1]
t=a2.b
s=a5.b
if(a3>=8)return H.b(z,a3)
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
for(i=0,h=17976931348623157e292,g=0;g<y;++g){if(g>=8)return H.b(w,g)
o=w[g].a
f=k*o[0]+j*o[1]
if(f<h){h=f
i=g}}e=i+1
e=e<y?e:0
if(i<0||i>=8)return H.b(x,i)
d=x[i]
c=v.a
o=d.a
n=a5.a.a
c.sk(0,p*o[0]-q*o[1]+n[0])
c.sl(0,s.a*o[0]+s.b*o[1]+n[1])
o=a3&255
q=v.b.a
q[0]=o
q[1]=i&255
q[2]=1
q[3]=0
if(e<0||e>=8)return H.b(x,e)
b=x[e]
a=u.a
q=s.b
p=b.a
a.sk(0,q*p[0]-s.a*p[1]+n[0])
a.sl(0,s.a*p[0]+s.b*p[1]+n[1])
n=u.b.a
n[0]=o
n[1]=e&255
n[2]=1
n[3]=0},
eM:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=a8.b+b0.b
y=this.y
this.cN(y,a8,a9,b0,b1)
if(y.a>z)return
x=this.z
this.cN(x,b0,b1,a8,a9)
w=x.a
if(w>z)return
if(w>y.a+0.0005){v=x.b
a7.d=C.w
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
this.fa(y,r,t,v,s,u)
o=r.f
n=r.d
m=v+1
m=m<o?m:0
x=this.dx
if(v>=8)return H.b(n,v)
x.j(n[v])
w=this.dy
if(m>=8)return H.b(n,m)
w.j(n[m])
l=this.ch
k=w.a
j=x.a
l.sk(0,k[0]-j[0])
l.sl(0,k[1]-j[1])
l.S()
i=this.cx
l=l.a
i.sk(0,l[1])
i.sl(0,-1*l[0])
h=this.cy
h.sk(0,(j[0]+k[0])*0.5)
h.sl(0,(j[1]+k[1])*0.5)
g=this.db
g.sk(0,p.b*l[0]-p.a*l[1])
g.sl(0,p.a*l[0]+p.b*l[1])
l=g.a
f=l[1]
e=-1*l[0]
G.aw(t,x,x)
G.aw(t,w,w)
w=j[0]
j=j[1]
d=f*w+e*j
x=l[0]
l=l[1]
c=k[0]
k=k[1]
g.L()
b=this.fr
a=V.bv(b,y,g,-(x*w+l*j)+z,v)
g.L()
if(a<2)return
y=this.fx
if(V.bv(y,b,g,x*c+l*k+z,m)<2)return
a7.b.j(i)
a7.c.j(h)
for(x=a7.a,w=u.a.a,l=u.b,k=l.b,l=l.a,j=-l,a0=0,a1=0;a1<2;++a1){i=y[a1]
h=i.a.a
g=h[0]
h=h[1]
if(f*g+e*h-d<=z){if(a0>=2)return H.b(x,a0)
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
cD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n
a.e=0
z=this.e
G.n(e,d.gV(),z)
y=this.fy
G.dK(c,z,y)
x=b.c
w=b.d
v=this.go
v.j(w)
v.w(x)
z.j(w)
z.w(y)
u=v.v(z)
z.j(y)
z.w(x)
t=v.v(z)
s=C.b.n(b.b,d.gaG())
r=this.id
q=r.a
q[1]=0
q[3]=0
if(t<=0){z=$.$get$ao()
z.j(y)
z.w(x)
z=$.$get$ao()
if(z.v(z)>s*s)return
b.r
q[0]=0
q[2]=0
a.e=1
a.d=C.n
a.b.H()
a.c.j(x)
z=a.a
z[0].d.C(r)
z[0].a.j(d.gV())
return}if(u<=0){z=$.$get$ao()
z.j(y)
z.w(w)
z=$.$get$ao()
if(z.v(z)>s*s)return
b.x
q[0]=1
q[2]=0
a.e=1
a.d=C.n
a.b.H()
a.c.j(w)
z=a.a
z[0].d.C(r)
z[0].a.j(d.gV())
return}p=v.v(v)
o=this.k2
o.j(x)
o.F(0,u)
z.j(w)
z.F(0,t)
o.t(0,z)
o.F(0,1/p)
n=$.$get$ao()
n.j(y)
n.w(o)
o=$.$get$ao()
if(o.v(o)>s*s)return
o=this.r
v=v.a
o.sk(0,-v[1])
o.sl(0,v[0])
z.j(y)
z.w(x)
if(o.v(z)<0){z=o.a
o.A(-z[0],-z[1])}o.S()
q[0]=0
q[2]=1
a.e=1
a.d=C.h
a.b.j(o)
a.c.j(x)
z=a.a
z[0].d.C(r)
z[0].a.j(d.gV())},
q:{
bv:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=[V.O]
H.i(a,"$isd",z,"$asd")
H.i(b,"$isd",z,"$asd")
y=b[0]
x=b[1]
w=y.a
v=x.a
u=c.v(w)-d
t=c.v(v)-d
if(u<=0){a[0].C(y)
s=1}else s=0
if(t<=0){r=s+1
a[s].C(x)
s=r}if(u*t<0){q=u/(u-t)
if(s>=2)return H.b(a,s)
p=a[s]
z=p.a
o=w.a
n=o[0]
m=v.a
z.sk(0,n+q*(m[0]-n))
o=o[1]
z.sl(0,o+q*(m[1]-o))
o=p.b.a
o[0]=e&255
o[1]=y.b.a[1]
o[2]=0
o[3]=1;++s}return s}}},
hS:{"^":"c;a,b",
m:function(a){return this.b}},
fo:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx",
dS:function(){var z,y,x,w,v
for(z=this.k2,y=this.k1,x=this.id,w=0;w<2;++w){v=new Float64Array(2)
C.a.i(x,w,new V.O(new E.a(v),new V.Q(new Int8Array(4))))
v=new Float64Array(2)
C.a.i(y,w,new V.O(new E.a(v),new V.Q(new Int8Array(4))))
v=new Float64Array(2)
C.a.i(z,w,new V.O(new E.a(v),new V.Q(new Int8Array(4))))}},
cC:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.b
G.dJ(c,a1,z)
y=this.c
G.n(z,a0.c,y)
this.d=b.e
this.e=b.c
x=b.d
this.f=x
this.r=b.f
b.x
w=this.fr
w.j(x)
w.w(this.e)
w.S()
x=this.y
w=w.a
x.A(w[1],-w[0])
w=this.fx
w.j(y)
w.w(this.e)
v=x.v(w)
y=v>=0
this.dy=y
u=this.Q
t=x.a
s=this.cy
r=this.db
if(y){u.sk(0,t[0])
u.sl(0,t[1])
s.sk(0,-t[0])
s.sl(0,-t[1])
r.sk(0,-t[0])
r.sl(0,-t[1])}else{u.sk(0,-t[0])
u.sl(0,-t[1])
s.sk(0,t[0])
s.sl(0,t[1])
r.sk(0,t[0])
r.sl(0,t[1])}y=this.a
y.c=a0.f
for(u=y.a,t=z.b,s=y.b,q=0;q<a0.f;++q){r=a0.d
if(q>=8)return H.b(r,q)
G.n(z,r[q],u[q])
G.U(t,a0.e[q],s[q])}this.dx=0.02
a.e=0
p=this.k4
this.eO(p)
if(p.a===C.p)return
if(p.c>this.dx)return
o=this.r1
this.eQ(o)
t=o.a===C.p
if(!t&&o.c>this.dx)return
if(!t)if(o.c>0.98*p.c+0.001)p=o
t=this.id
n=t[0]
m=t[1]
if(p.a===C.t){a.d=C.h
r=this.Q
l=r.v(s[0])
for(k=0,q=1;j=y.c,q<j;++q){if(q>=8)return H.b(s,q)
i=r.v(s[q])
if(i<l){l=i
k=q}}h=k+1
h=h<j?h:0
y=n.a
if(k<0||k>=8)return H.b(u,k)
y.j(u[k])
y=n.b.a
y[0]=0
y[1]=k&255
y[2]=1
y[3]=0
y=m.a
if(h<0||h>=8)return H.b(u,h)
y.j(u[h])
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
u.j(this.e)
s.j(this.f)
r.j(x)}else{y.a=1
y.b=0
u.j(this.f)
s.j(this.e)
r.j(x)
r.L()}}else{a.d=C.w
n.a.j(this.e)
x=n.b.a
x[0]=0
x[1]=p.b&255
x[2]=0
x[3]=1
m.a.j(this.f)
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
if(r<0||r>=8)return H.b(u,r)
x.c.j(u[r])
r=x.b
if(r<0||r>=8)return H.b(u,r)
x.d.j(u[r])
r=x.a
if(r<0||r>=8)return H.b(s,r)
x.e.j(s[r])
y=x}x=y.f
u=y.e
s=u.a
x.A(s[1],-s[0])
s=y.x
s.j(x)
s.L()
r=y.c
y.r=x.v(r)
y.y=s.v(y.d)
j=this.k1
if(V.bv(j,t,x,y.r,y.a)<2)return
x=this.k2
if(V.bv(x,j,s,y.y,y.b)<2)return
t=a.b
s=a.c
if(p.a===C.t){t.j(u)
s.j(r)}else{j=a0.e
g=y.a
if(g<0||g>=8)return H.b(j,g)
t.j(j[g])
g=a0.d
y=y.a
if(y<0||y>=8)return H.b(g,y)
s.j(g[y])}for(y=w.a,t=a.a,f=0,q=0;q<2;++q){e=x[q].a.a
y[1]=e[1]
y[0]=e[0]
w.w(r)
if(u.v(w)<=this.dx){if(f>=2)return H.b(t,f)
d=t[f]
if(p.a===C.t){G.dK(z,x[q].a,d.a)
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
eO:function(a){var z,y,x,w,v,u,t,s,r,q
a.a=C.t
a.b=this.dy?0:1
a.c=17976931348623157e292
z=this.Q.a
y=z[0]
x=z[1]
for(z=this.a,w=z.a,v=0,u=17976931348623157e292;v<z.c;++v){if(v>=8)return H.b(w,v)
t=w[v].a
s=t[0]
r=this.e.a
q=y*(s-r[0])+x*(t[1]-r[1])
if(q<u){a.c=q
u=q}}},
eQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
a.a=C.p
a.b=-1
a.c=-17976931348623157e292
z=this.r2
y=this.Q
x=y.a
z.sk(0,-x[1])
z.sl(0,x[0])
for(x=this.a,w=this.fx,v=this.rx.a,u=w.a,t=this.cy,z=z.a,s=x.b,r=x.a,q=this.db,p=0;p<x.c;++p){if(p>=8)return H.b(s,p)
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
if(f>this.dx){a.a=C.G
a.b=p
a.c=f
return}if(i*z[0]+h*z[1]>=0){u[1]=h
u[0]=v[0]
w.w(q)
if(w.v(y)<-0.03490658503988659)continue}else{u[1]=h
u[0]=v[0]
w.w(t)
if(w.v(y)<-0.03490658503988659)continue}if(f>a.c){a.a=C.G
a.b=p
a.c=f}}},
q:{
fp:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.hI()
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
h=[V.O]
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
z=new V.fo(z,new G.B(new E.a(y),new G.x(0,1)),new E.a(x),new E.a(w),new E.a(v),new E.a(u),new E.a(t),new E.a(s),new E.a(r),new E.a(q),new E.a(p),C.O,C.O,new E.a(o),new E.a(n),0,!1,new E.a(m),new E.a(l),new E.a(k),new E.a(j),i,g,h,new V.il(0,0,new E.a(f),new E.a(e),new E.a(d),new E.a(c),0,new E.a(b),0),new V.cZ(C.p,0,0),new V.cZ(C.p,0,0),new E.a(a),new E.a(new Float64Array(2)))
z.dS()
return z}}},
Q:{"^":"c;a",
aV:function(){var z=this.a
return(z[0]<<24|z[1]<<16|z[2]<<8|z[3])>>>0},
C:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
aU:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
aD:function(a,b){H.k(b,"$isQ")
return this.aV()-b.aV()},
$isE:1,
$asE:function(){return[V.Q]}},
bK:{"^":"c;a,b,K:c<,D:d<,e,f",
sD:function(a){this.d=H.b8(a)},
C:function(a){this.a.j(a.a)
this.b.j(a.b)
this.c.j(a.c)
this.d=a.d
this.e=a.e
this.f=a.f}},
hw:{"^":"c;a,b,c,d",q:{
du:function(){var z,y
z=P.u
y=P.ar(3,0,!1,z)
z=P.ar(3,0,!1,z)
C.a.i(y,0,1073741823)
C.a.i(y,1,1073741823)
C.a.i(y,2,1073741823)
C.a.i(z,0,1073741823)
C.a.i(z,1,1073741823)
C.a.i(z,2,1073741823)
return new V.hw(0,0,y,z)}}},
it:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
fu:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
this.e=a.b
for(z=this.d,y=a.c,x=y.length,w=a.d,v=w.length,u=b.a,t=d.a,s=0;r=this.e,s<r;++s){if(s>=3)return H.b(z,s)
q=z[s]
if(s>=x)return H.b(y,s)
r=H.j(y[s])
q.e=r
if(s>=v)return H.b(w,s)
q.f=H.j(w[s])
p=C.a.h(u,r)
o=C.a.h(t,q.f)
r=q.a
G.n(c,p,r)
n=q.b
G.n(e,o,n)
m=q.c
l=n.a
n=m.a
n[1]=l[1]
n[0]=l[0]
m.w(r)
q.d=0}if(r>1){k=a.a
j=this.bZ()
if(j<0.5*k||2*k<j||j<11920928955078125e-23)this.e=0}if(this.e===0){q=z[0]
q.e=0
q.f=0
p=u[0]
o=t[0]
z=q.a
G.n(c,p,z)
y=q.b
G.n(e,o,y)
x=q.c
x.j(y)
x.w(z)
this.e=1}},
fL:function(a){var z,y,x,w
a.a=this.bZ()
a.b=this.e
for(z=a.c,y=this.d,x=a.d,w=0;w<this.e;++w){if(w>=3)return H.b(y,w)
C.a.i(z,w,J.cH(y[w].e))
C.a.i(x,w,J.cH(y[w].f))}},
d6:function(a){var z,y
switch(this.e){case 1:a.j(this.a.c)
a.L()
return
case 2:z=this.f
z.j(this.b.c)
y=this.a.c
z.w(y)
a.j(y)
a.L()
if(z.a0(a)>0)z.aJ(1,a)
else z.aJ(-1,a)
return
default:a.H()
return}},
bX:function(a){var z,y,x
switch(this.e){case 0:a.H()
return
case 1:a.j(this.a.c)
return
case 2:z=this.x
y=this.b
z.j(y.c)
z.F(0,y.d)
y=this.r
x=this.a
y.j(x.c)
y.F(0,x.d)
y.t(0,z)
a.j(y)
return
case 3:a.H()
return
default:a.H()
return}},
bZ:function(){var z,y,x
switch(this.e){case 0:return 0
case 1:return 0
case 2:return Math.sqrt(this.a.c.bG(this.b.c))
case 3:z=this.y
z.j(this.b.c)
y=this.a.c
z.w(y)
x=this.z
x.j(this.c.c)
x.w(y)
return z.a0(x)
default:return 0}},
dd:function(){var z,y,x,w,v,u,t,s
z=this.a
y=z.c
x=this.b
w=x.c
v=this.f
v.j(w)
v.w(y)
u=-y.v(v)
if(u<=0){z.d=1
this.e=1
return}t=w.v(v)
if(t<=0){x.d=1
this.e=1
z.C(x)
return}s=1/(t+u)
z.d=t*s
x.d=u*s
this.e=2},
de:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=this.cx
y=this.a
z.j(y.c)
x=this.cy
w=this.b
x.j(w.c)
v=this.db
u=this.c
v.j(u.c)
t=this.f
t.j(x)
t.w(z)
s=z.v(t)
r=x.v(t)
q=-s
p=this.Q
p.j(v)
p.w(z)
o=z.v(p)
n=v.v(p)
m=-o
l=this.ch
l.j(v)
l.w(x)
k=x.v(l)
j=v.v(l)
i=-k
h=t.a0(p)
g=h*x.a0(v)
f=h*v.a0(z)
e=h*z.a0(x)
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
w.C(u)
return}if(r<=0&&i<=0){w.d=1
this.e=1
y.C(w)
return}if(n<=0&&j<=0){u.d=1
this.e=1
y.C(u)
return}if(j>0&&i>0&&g<=0){b=1/(j+i)
w.d=j*b
u.d=i*b
this.e=2
y.C(u)
return}a=1/(g+f+e)
y.d=g*a
w.d=f*a
u.d=e*a
this.e=3}},
fh:{"^":"c;a,0b,0c,d",
dQ:function(){var z,y
for(z=this.a,y=0;y<8;++y)C.a.i(z,y,new E.a(new Float64Array(2)))
this.b=0
this.c=0},
c2:function(a,b){var z,y,x,w,v,u
switch(a.a){case C.m:H.H(a,"$isaN")
this.a[0].j(a.gV())
this.b=1
this.c=a.gaG()
break
case C.i:z=a.f
this.b=z
this.c=a.b
for(y=this.a,x=0;x<z;++x){if(x>=8)return H.b(y,x)
w=y[x]
v=a.d[x]
w.toString
u=H.k(v,"$isa").a
w=w.a
w[1]=u[1]
w[0]=u[0]}break
case C.x:H.H(a,"$isc0")
z=this.d
C.a.i(z,0,a.gbB().h(0,b))
y=b+1
if(C.c.E(y,a.geb()))C.a.i(z,1,a.gbB().h(0,y))
else C.a.i(z,1,a.gbB().h(0,0))
y=this.a
y[0].j(z[0])
y[1].j(z[1])
this.b=2
this.c=a.gaG()
break
case C.o:H.H(a,"$isaR")
z=this.a
z[0].j(a.c)
z[1].j(a.d)
this.b=2
this.c=a.b
break}},
av:function(a){var z,y,x,w,v
z=this.a
y=z[0].v(a)
for(x=0,w=1;w<this.b;++w){if(w>=8)return H.b(z,w)
v=z[w].v(a)
if(v>y){y=v
x=w}}return x},
q:{
aO:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.a]
z=H.f(z,y)
x=new Array(2)
x.fixed$length=Array
y=new V.fh(z,H.f(x,y))
y.dQ()
return y}}},
fg:{"^":"c;a,b,c,d,e,f,r",
eY:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.cV=$.cV+1
z=a6.a
y=a6.b
x=a6.c
w=a6.d
v=this.a
v.fu(a5,z,x,y,w)
u=v.d
t=this.d
v.bX(t)
t.gaS()
for(s=this.b,r=s.length,q=this.c,p=q.length,o=x.b,n=this.e,m=this.f,l=z.a,k=w.b,j=y.a,i=0;i<20;){h=v.e
for(g=0;g<h;++g){if(g>=3)return H.b(u,g)
C.a.i(s,g,u[g].e)
C.a.i(q,g,u[g].f)}switch(v.e){case 1:break
case 2:v.dd()
break
case 3:v.de()
break}if(v.e===3)break
v.bX(t)
t.gaS()
v.d6(n)
if(n.gaS()<14210854715202004e-30)break
f=v.e
if(f>=3)return H.b(u,f)
e=u[f]
n.L()
G.au(o,n,m)
f=z.av(m)
e.e=f
if(f>=8)return H.b(l,f)
f=l[f]
d=e.a
G.n(x,f,d)
n.L()
G.au(k,n,m)
f=y.av(m)
e.f=f
if(f>=8)return H.b(j,f)
f=j[f]
c=e.b
G.n(w,f,c)
f=e.c
b=c.a
c=f.a
c[1]=b[1]
c[0]=b[0]
f.w(d);++i
$.cW=$.cW+1
g=0
while(!0){if(!(g<h)){a=!1
break}f=e.e
if(g>=r)return H.b(s,g)
d=s[g]
if(f==null?d==null:f===d){f=e.f
if(g>=p)return H.b(q,g)
d=q[g]
d=f==null?d==null:f===d
f=d}else f=!1
if(f){a=!0
break}++g}if(a)break;++v.e}$.cX=Math.max($.cX,i)
a0=a4.a
a1=a4.b
switch(v.e){case 0:break
case 1:t=v.a
a0.j(t.a)
a1.j(t.b)
break
case 2:t=v.r
s=v.a
t.j(s.a)
t.F(0,s.d)
r=v.b
a0.j(r.a)
a0.F(0,r.d)
a0.t(0,t)
t.j(s.b)
t.F(0,s.d)
a1.j(r.b)
a1.F(0,r.d)
a1.t(0,t)
break
case 3:t=v.a
a0.j(t.a)
a0.F(0,t.d)
t=v.y
s=v.b
t.j(s.a)
t.F(0,s.d)
s=v.z
r=v.c
s.j(r.a)
s.F(0,r.d)
a0.t(0,t)
a0.t(0,s)
a1.j(a0)
break
default:break}a4.c=Math.sqrt(a0.bG(a1))
a4.d=i
v.fL(a5)
if(a6.e){a2=z.c
a3=y.c
v=a4.c
t=a2+a3
if(v>t&&v>11920928955078125e-23){a4.c=v-t
v=this.r
v.j(a1)
v.w(a0)
v.S()
m.j(v)
m.F(0,a2)
a0.t(0,m)
m.j(v)
m.F(0,a3)
a1.w(m)}else{a0.t(0,a1)
a0.F(0,0.5)
a1.j(a0)
a4.c=0}}}},
cT:{"^":"c;a,b,c,d,e"},
cU:{"^":"c;a,b,c,d"},
c9:{"^":"c;a,b",
m:function(a){return this.b}},
fN:{"^":"c;a,b,c,d,e",
dT:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.i(z,y,new V.de(new E.a(x),0,0,new V.Q(new Int8Array(4))))}},
C:function(a){var z,y,x,w,v,u,t
for(z=this.a,y=a.a,x=0;x<a.e;++x){if(x>=2)return H.b(z,x)
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
this.b.j(a.b)
this.c.j(a.c)
this.e=a.e},
q:{
L:function(){var z,y
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.de])
y=new Float64Array(2)
z=new V.fN(z,new E.a(y),new E.a(new Float64Array(2)),C.n,0)
z.dT()
return z}}},
de:{"^":"c;a,b,c,d"},
ce:{"^":"c;a,b,c"},
dq:{"^":"c;a,b"},
aR:{"^":"dt;c,d,e,f,r,x,y,a,b"},
fQ:{"^":"c;a,b,c"},
hi:{"^":"dt;c,d,e,f,r,x,y,z,Q,a,b",
dU:function(){var z,y
for(z=this.d,y=0;y<8;++y)C.a.i(z,y,new E.a(new Float64Array(2)))
for(z=this.e,y=0;y<8;++y)C.a.i(z,y,new E.a(new Float64Array(2)))
this.b=0.01},
eI:function(a){var z,y,x,w,v,u,t,s,r
z=V.cc()
z.c.j(this.c)
for(y=z.e,x=this.e,w=z.d,v=this.d,u=0;u<8;++u){t=y[u]
s=x[u]
t.toString
r=s.a
t=t.a
t[1]=r[1]
t[0]=r[0]
w[u].j(v[u])}z.b=this.b
z.f=this.f
return z},
d9:function(a,b){var z,y,x
this.f=4
z=this.d
y=-a
x=-b
z[0].A(y,x)
z[1].A(a,x)
z[2].A(a,b)
z[3].A(y,b)
y=this.e
y[0].A(0,-1)
y[1].A(1,0)
y[2].A(0,1)
y[3].A(-1,0)
this.c.H()},
bi:function(a,b,c,d){var z,y,x,w,v,u
this.f=4
z=this.d
y=-a
x=-b
z[0].A(y,x)
z[1].A(a,x)
z[2].A(a,b)
z[3].A(y,b)
y=this.e
y[0].A(0,-1)
y[1].A(1,0)
y[2].A(0,1)
y[3].A(-1,0)
this.c.j(c)
w=this.Q
w.a.j(c)
x=w.b
x.aX(d)
for(v=0;v<this.f;++v){if(v>=8)return H.b(z,v)
u=z[v]
G.aw(w,u,u)
u=y[v]
G.dr(x,u,u)}},
bD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z.sk(0,u*v[0]-t*v[1]+s)
z.sl(0,t*v[0]+u*v[1]+r)
v=z.a
y.sk(0,v[0])
y.sl(0,v[1])
for(q=this.f,p=y.a,o=1;o<q;++o){if(o>=8)return H.b(x,o)
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
p[1]=n>k?n:k}z.sk(0,v[0]-this.b)
z.sl(0,v[1]-this.b)
y.sk(0,p[0]+this.b)
y.sl(0,p[1]+this.b)},
eP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.r
z.H()
y=this.x
y.H()
for(x=this.d,w=0;v=this.f,w<v;++w){if(w>=8)return H.b(x,w)
y.t(0,x[w])}y.F(0,1/v)
u=this.y
t=this.z
for(v=z.a,s=u.a,r=t.a,q=y.a,p=0,o=0,w=0;w<this.f;){if(w>=8)return H.b(x,w)
n=H.k(x[w],"$isa").a
s[1]=n[1]
s[0]=n[0]
u.w(y)
r[1]=q[1]
r[0]=q[0]
t.L();++w
if(w<this.f){if(w>=8)return H.b(x,w)
m=x[w]}else m=x[0]
t.t(0,m)
l=u.a0(t)
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
x.j(z)
x.t(0,y)
v=o*b
a.c=v
a.c=v+a.a*x.v(x)},
q:{
cc:function(){var z,y,x,w,v,u,t
z=new Float64Array(2)
y=new Array(8)
y.fixed$length=Array
x=[E.a]
y=H.f(y,x)
w=new Array(8)
w.fixed$length=Array
x=H.f(w,x)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
z=new V.hi(new E.a(z),y,x,0,new E.a(w),new E.a(v),new E.a(u),new E.a(t),new G.B(new E.a(new Float64Array(2)),new G.x(0,1)),C.i,0)
z.dU()
return z}}},
dt:{"^":"c;"},
bG:{"^":"c;a,b",
m:function(a){return this.b}},
hE:{"^":"c;a,b,c,d,e"},
bn:{"^":"c;a,b",
m:function(a){return this.b}},
hF:{"^":"c;a,b"},
hK:{"^":"c;a,b,c,d,e,f,r,x,y,z",
fD:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.dB=$.dB+1
a4.a=C.L
a4.b=a5.e
z=a5.a
y=a5.b
x=this.x
x.C(a5.c)
w=this.y
w.C(a5.d)
x.S()
w.S()
v=a5.e
u=Math.max(0.005,z.c+y.c-0.015)
t=this.a
t.b=0
s=this.b
s.a=z
s.b=y
s.e=!1
for(r=this.f,q=this.r,p=q.length,o=u+0.00125,n=u-0.00125,m=this.e,l=this.c,k=this.d,j=this.z.fy,i=0,h=0;!0;){x.aa(l,i)
w.aa(k,i)
s.c=l
s.d=k
j.eY(m,t,s)
g=m.c
if(g<=0){a4.a=C.a8
a4.b=0
break}if(g<o){a4.a=C.D
a4.b=i
break}r.ff(0,t,z,x,y,w,i)
e=v
d=0
while(!0){if(!!0){f=!1
break}c=r.fb(q,e)
if(c>o){a4.a=C.a9
a4.b=v
f=!0
break}if(c>n){i=e
f=!1
break}if(0>=p)return H.b(q,0)
g=q[0]
if(1>=p)return H.b(q,1)
b=r.a1(g,q[1],i)
if(b<n){a4.a=C.M
a4.b=i
f=!0
break}if(b<=o){a4.a=C.D
a4.b=i
f=!0
break}for(a=e,a0=i,a1=0;!0;){a2=(a1&1)===1?a0+(u-b)*(a-a0)/(c-b):0.5*(a0+a);++a1
$.dF=$.dF+1
a3=r.a1(q[0],q[1],a2)
if(Math.abs(a3-u)<0.00125){e=a2
break}if(a3>u){a0=a2
b=a3}else{a=a2
c=a3}if(a1===50)break}$.dE=Math.max($.dE,a1);++d
if(d===8||a1===50){f=!1
break}}++h
$.dC=$.dC+1
if(f)break
if(h===20){a4.a=C.M
a4.b=i
break}}$.dD=Math.max($.dD,h)}},
cf:{"^":"c;a,b",
m:function(a){return this.b}},
ht:{"^":"c;0a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go",
ff:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
this.a=c
this.b=e
z=b.b
this.f=d
this.r=f
y=this.fr
d.aa(y,g)
x=this.fx
this.r.aa(x,g)
if(z===1){this.c=C.A
g=this.x
w=this.a
v=b.c
if(0>=v.length)return H.b(v,0)
v=v[0]
w.toString
H.j(v)
g.j(C.a.h(w.a,v))
v=this.y
w=this.b
u=b.d
if(0>=u.length)return H.b(u,0)
u=u[0]
w.toString
H.j(u)
v.j(C.a.h(w.a,u))
u=this.z
G.n(y,g,u)
g=this.Q
G.n(x,v,g)
v=this.e
v.j(g)
v.w(u)
return v.S()}else{g=b.c
w=g.length
if(0>=w)return H.b(g,0)
v=g[0]
if(1>=w)return H.b(g,1)
w=b.d
u=this.z
t=this.d
s=this.cy
r=this.e
q=this.Q
p=this.dy
o=w.length
if(J.ad(v,g[1])){this.c=C.C
v=this.db
n=this.b
if(0>=o)return H.b(w,0)
m=w[0]
n.toString
H.j(m)
v.j(C.a.h(n.a,m))
m=this.dx
n=this.b
if(1>=o)return H.b(w,1)
w=w[1]
n.toString
H.j(w)
m.j(C.a.h(n.a,w))
p.j(m)
p.w(v)
p.aJ(-1,r)
r.S()
G.U(x.b,r,s)
t.j(v)
t.t(0,m)
t.F(0,0.5)
G.n(x,t,q)
t=this.x
x=this.a
g=g[0]
x.toString
H.j(g)
t.j(C.a.h(x.a,g))
G.n(y,t,u)
p.j(u)
p.w(q)
l=p.v(s)
if(l<0){r.L()
l=-l}return l}else{this.c=C.B
v=this.ch
n=this.a
m=g[0]
n.toString
H.j(m)
v.j(C.a.h(n.a,m))
m=this.cx
n=this.a
g=g[1]
n.toString
H.j(g)
m.j(C.a.h(n.a,g))
p.j(m)
p.w(v)
p.aJ(-1,r)
r.S()
G.U(y.b,r,s)
t.j(v)
t.t(0,m)
t.F(0,0.5)
G.n(y,t,u)
t=this.y
y=this.b
if(0>=o)return H.b(w,0)
w=w[0]
y.toString
H.j(w)
t.j(C.a.h(y.a,w))
G.n(x,t,q)
p.j(q)
p.w(u)
l=p.v(s)
if(l<0){r.L()
l=-l}return l}}},
fb:function(a,b){var z,y,x,w,v,u,t
H.i(a,"$isd",[P.u],"$asd")
z=this.fr
this.f.aa(z,b)
y=this.fx
this.r.aa(y,b)
switch(this.c){case C.A:x=this.e
w=this.fy
G.au(z.b,x,w)
x.L()
v=this.go
G.au(y.b,x,v)
x.L()
C.a.i(a,0,this.a.av(w))
C.a.i(a,1,this.b.av(v))
v=this.x
w=this.a
u=a.length
if(0>=u)return H.b(a,0)
t=a[0]
w.toString
H.j(t)
v.j(C.a.h(w.a,t))
t=this.y
w=this.b
if(1>=u)return H.b(a,1)
u=a[1]
w.toString
H.j(u)
t.j(C.a.h(w.a,u))
u=this.z
G.n(z,v,u)
v=this.Q
G.n(y,t,v)
v.w(u)
return v.v(x)
case C.B:x=this.cy
G.U(z.b,this.e,x)
w=this.z
G.n(z,this.d,w)
x.L()
z=this.go
G.au(y.b,x,z)
x.L()
C.a.i(a,0,-1)
C.a.i(a,1,this.b.av(z))
z=this.y
v=this.b
if(1>=a.length)return H.b(a,1)
u=a[1]
v.toString
H.j(u)
z.j(C.a.h(v.a,u))
u=this.Q
G.n(y,z,u)
u.w(w)
return u.v(x)
case C.C:x=this.cy
G.U(y.b,this.e,x)
w=this.Q
G.n(y,this.d,w)
x.L()
y=this.fy
G.au(z.b,x,y)
x.L()
C.a.i(a,1,-1)
C.a.i(a,0,this.a.av(y))
y=this.x
v=this.a
if(0>=a.length)return H.b(a,0)
u=a[0]
v.toString
H.j(u)
y.j(C.a.h(v.a,u))
u=this.z
G.n(z,y,u)
u.w(w)
return u.v(x)
default:C.a.i(a,0,-1)
C.a.i(a,1,-1)
return 0}},
a1:function(a,b,c){var z,y,x,w,v
H.j(a)
H.j(b)
z=this.fr
this.f.aa(z,c)
y=this.fx
this.r.aa(y,c)
switch(this.c){case C.A:x=this.x
x.j(C.a.h(this.a.a,a))
w=this.y
w.j(C.a.h(this.b.a,b))
v=this.z
G.n(z,x,v)
x=this.Q
G.n(y,w,x)
x.w(v)
return x.v(this.e)
case C.B:x=this.cy
G.U(z.b,this.e,x)
w=this.z
G.n(z,this.d,w)
z=this.y
z.j(C.a.h(this.b.a,b))
v=this.Q
G.n(y,z,v)
v.w(w)
return v.v(x)
case C.C:x=this.cy
G.U(y.b,this.e,x)
w=this.Q
G.n(y,this.d,w)
y=this.x
y.j(C.a.h(this.a.a,a))
v=this.z
G.n(z,y,v)
v.w(w)
return v.v(x)
default:return 0}}},
hX:{"^":"c;a,b,c,d,e",
dW:function(){var z,y
for(z=this.b,y=0;y<2;++y)C.a.i(z,y,new E.a(new Float64Array(2)))},
fe:function(a,b,c,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b.e===0)return
switch(b.d){case C.n:z=this.d
y=this.e
x=this.a
x.sk(0,1)
x.sl(0,0)
w=c.b
v=b.c.a
u=c.a.a
z.sk(0,w.b*v[0]-w.a*v[1]+u[0])
z.sl(0,w.a*v[0]+w.b*v[1]+u[1])
u=a1.b
v=b.a[0].a.a
w=a1.a.a
y.sk(0,u.b*v[0]-u.a*v[1]+w[0])
y.sl(0,u.a*v[0]+u.b*v[1]+w[1])
if(z.bG(y)>14210854715202004e-30){w=y.a
v=z.a
x.sk(0,w[0]-v[0])
x.sl(0,w[1]-v[1])
x.S()}x=x.a
w=x[0]
v=z.a
t=w*a0+v[0]
u=x[1]
s=u*a0+v[1]
v=y.a
r=-w*a2+v[0]
q=-u*a2+v[1]
v=this.b
v[0].sk(0,(t+r)*0.5)
v[0].sl(0,(s+q)*0.5)
this.c[0]=(r-t)*x[0]+(q-s)*x[1]
break
case C.h:p=this.d
x=this.a
G.U(c.b,b.b,x)
G.aw(c,b.c,p)
o=this.e
for(w=b.a,v=o.a,u=p.a,x=x.a,n=this.b,m=this.c,l=0;l<b.e;++l){if(l>=2)return H.b(w,l)
G.aw(a1,w[l].a,o)
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
case C.w:p=this.d
x=this.a
G.U(a1.b,b.b,x)
G.aw(a1,b.c,p)
o=this.e
for(w=b.a,v=o.a,u=p.a,n=x.a,m=this.b,k=this.c,l=0;l<b.e;++l){if(l>=2)return H.b(w,l)
G.aw(c,w[l].a,o)
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
k[l]=(t-r)*n[0]+(s-q)*n[1]}x.sk(0,-n[0])
x.sl(0,-n[1])
break}},
q:{
hY:function(){var z,y,x,w
z=new Float64Array(2)
y=new Array(2)
y.fixed$length=Array
y=H.f(y,[E.a])
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.hX(new E.a(z),y,x,new E.a(w),new E.a(new Float64Array(2)))
z.dW()
return z}}},
aI:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,0cx,0cy,db,0dx,0dy,fr,fx,fy,go,id,k1,k2,k3,0ak:k4<,r1,r2,rx",
cH:function(a){var z,y,x,w,v,u
z=this.Q
if((z.a&2)===2)return
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new V.d3(0,0,0,0,new V.c4(1,65535,0),!1,new V.N(new E.a(y),new E.a(x)),new V.N(new E.a(w),new E.a(v)),new E.a(new Float64Array(2)))
u.eR(this,a)
if((this.b&32)===32)u.eW(z.b.a,this.d)
u.b=this.cy
this.cy=u;++this.db
u.c=this
if(u.a>0)this.fw()
z.a|=1
return u},
eT:function(a,b){var z=this.r1
z.a=a
z.e=b
return this.cH(z)},
bE:function(a){return this.eT(a,0)},
fw:function(){var z,y,x,w,v,u,t,s,r,q
this.fr=0
this.fx=0
this.fy=0
this.go=0
z=this.f
y=z.a
y.H()
x=this.a
if(x===C.e||x===C.F){y=this.d.a
z.b.j(y)
z.c.j(y)
z.d=z.e
return}x=this.Q.ch.a
w=x.aF()
w.H()
v=x.aF()
u=this.r2
for(t=this.cy,s=u.b.a;t!=null;t=t.b){r=t.a
if(r===0)continue
t.d.eP(u,r)
r=this.fr
q=u.a
this.fr=r+q
r=v.a
r[1]=s[1]
r[0]=s[0]
v.F(0,q)
w.t(0,v)
this.fy=this.fy+u.c}r=this.fr
if(r>0){r=1/r
this.fx=r
w.F(0,r)}else{this.fr=1
this.fx=1}r=this.fy
if(r>0&&(this.b&16)===0){r-=this.fr*w.v(w)
this.fy=r
this.go=1/r}else{this.fy=0
this.go=0}r=x.aF()
q=z.c
r.j(q)
y.j(w)
z=z.b
G.n(this.d,y,z)
q.j(z)
v.j(q)
v.w(r)
v.aJ(this.x,r)
this.r.t(0,r)
x.b-=3},
X:function(a){var z
if(a){z=this.b
if((z&2)===0){this.b=z|2
this.k3=0}}else{this.b&=4294967293
this.k3=0
this.r.H()
this.x=0
this.y.H()
this.z=0}},
c9:function(){var z,y,x,w,v,u,t
z=this.rx
y=z.b
x=this.f
y.a=Math.sin(x.d)
w=Math.cos(x.d)
y.b=w
v=z.a
u=x.b.a
x=x.a.a
v.sk(0,u[0]-w*x[0]+y.a*x[1])
v.sl(0,u[1]-y.a*x[0]-y.b*x[1])
for(t=this.cy,y=this.Q,x=this.d;t!=null;t=t.b)t.dL(y.b.a,z,x)},
ax:function(){var z,y,x,w,v
z=this.d
y=z.b
x=this.f
y.a=Math.sin(x.e)
w=Math.cos(x.e)
y.b=w
z=z.a
v=x.c.a
x=x.a.a
z.sk(0,v[0]-w*x[0]+y.a*x[1])
z.sl(0,v[1]-y.a*x[0]-y.b*x[1])},
c3:function(a){var z
if(this.a!==C.f&&a.a!==C.f)return!1
for(z=this.dx;!1;z=z.gfk())z.gfm()
return!0},
ap:function(a){var z,y,x,w,v
z=this.f
z.ap(a)
y=z.c
y.j(z.b)
x=z.d
z.e=x
w=this.d
v=w.b
v.aX(x)
w=w.a
G.U(v,z.a,w)
w.F(0,-1)
w.t(0,y)},
m:function(a){return"Body[pos: "+this.d.a.m(0)+" linVel: "+this.r.m(0)+" angVel: "+H.e(this.x)+"]"}},
cJ:{"^":"c;a,0ak:b<,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},
bY:{"^":"c;a,b",
m:function(a){return this.b}},
f3:{"^":"c;0a,0b,c,0d,0e,f",
eC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
if((r==null?y==null:r===y)&&p===w&&(q==null?z==null:q===z)&&o===x)return}t=t.d}if(!u.c3(v))return
s=this.d.c4(z,y)
if(!s)return
n=this.f.fn(z,x,y,w)
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
v.X(!0)
u.X(!0);++this.c},
bF:function(a){var z,y,x,w,v,u,t,s,r,q
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
if(v){z.c.X(!0)
y.c.X(!0)}s=z.d.a
r=y.d.a
v=this.f.fy
u=s.a
if(u>=v.length)return H.b(v,u)
u=v[u]
v=r.a
if(v>=u.length)return H.b(u,v)
q=u[v].a
q.toString
H.o(a,H.al(q,"Z",0))
v=q.a;(v&&C.a).i(v,--q.b,a);--this.c},
eJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.b
for(;z!=null;){y=z.f
x=z.r
w=z.x
v=z.y
u=y.c
t=x.c
if((z.a&8)===8){if(!t.c3(u)){s=z.c
this.bF(z)
z=s
continue}r=this.d.c4(y,x)
if(!r){s=z.c
this.bF(z)
z=s
continue}z.a&=4294967287}q=(u.b&2)===2&&u.a!==C.e
p=(t.b&2)===2&&t.a!==C.e
if(!q&&!p){z=z.c
continue}r=y.r
if(w>=r.length)return H.b(r,w)
o=r[w].gaT()
r=x.r
if(v>=r.length)return H.b(r,v)
n=r[v].gaT()
if(!this.a.fC(o,n)){s=z.c
this.bF(z)
z=s
continue}z.bT(this.e)
z=z.c}},
$isk_:1},
aK:{"^":"P;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a8:function(a,b,c,d){this.aZ(a,b,c,d)},
a1:function(a,b,c){var z=this.fr
H.H(this.f.d,"$isc0").d3(z,this.x)
this.dx.fr.cD(a,z,b,H.H(this.r.d,"$isaN"),c)}},
aL:{"^":"P;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a8:function(a,b,c,d){this.aZ(a,b,c,d)},
a1:function(a,b,c){var z,y,x
z=this.fr
H.H(this.f.d,"$isc0").d3(z,this.x)
y=this.dx.fr
x=this.r.d
y.k3.cC(a,z,b,x,c)}},
aM:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a1:function(a,b,c){this.dx.fr.eK(a,H.H(this.f.d,"$isaN"),b,H.H(this.r.d,"$isaN"),c)}},
P:{"^":"c;",
a8:["aZ",function(a,b,c,d){var z,y
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
bT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.dy
y=this.z
z.C(y)
x=this.a|=4
w=this.f
w.z
v=this.r
v.z
u=w.c
t=v.c
this.a1(y,u.d,t.d)
s=y.e>0
for(w=z.a,v=y.a,r=0;r<y.e;++r){if(r>=2)return H.b(v,r)
q=v[r]
q.b=0
q.c=0
p=q.d
for(o=0;o<z.e;++o){if(o>=2)return H.b(w,o)
n=w[o]
if(n.d.aV()===p.aV()){q.b=n.b
q.c=n.c
break}}}if(s!==((x&2)===2)){u.X(!0)
t.X(!0)}z=this.a
if(s)this.a=z|2
else this.a=z&4294967293
return}},
J:{"^":"c;0a,0b,0c,0d"},
bx:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,cx,cy,db",
dM:function(){var z,y
for(z=this.a,y=0;y<2;++y)C.a.i(z,y,new E.a(new Float64Array(2)))},
q:{
cQ:function(){var z,y,x,w
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[E.a])
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.bx(z,new E.a(y),new E.a(x),0,0,0,0,new E.a(w),new E.a(new Float64Array(2)),0,0,0,0,0)
z.dM()
return z}}},
by:{"^":"c;0a,b",
scI:function(a){this.a=H.i(a,"$isY",[V.P],"$asY")}},
bA:{"^":"c;0a,0b,c,0d,0e",
scE:function(a){this.b=H.i(a,"$isd",[V.P],"$asd")},
sbf:function(a){this.d=H.i(a,"$isd",[V.as],"$asd")},
sbg:function(a){this.e=H.i(a,"$isd",[V.ay],"$asd")}},
f4:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q",
sbv:function(a){this.b=H.i(a,"$isd",[V.as],"$asd")},
sbA:function(a){this.c=H.i(a,"$isd",[V.ay],"$asd")},
scs:function(a){this.d=H.i(a,"$isd",[V.bx],"$asd")},
scw:function(a){this.e=H.i(a,"$isd",[V.bd],"$asd")},
sbp:function(a){this.f=H.i(a,"$isd",[V.P],"$asd")},
dN:function(){var z,y
z=new Array(256)
z.fixed$length=Array
this.scs(H.f(z,[V.bx]))
z=new Array(256)
z.fixed$length=Array
this.scw(H.f(z,[V.bd]))
for(y=0;y<256;++y){z=this.d;(z&&C.a).i(z,y,V.cQ())
z=this.e;(z&&C.a).i(z,y,V.cR())}},
cP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
this.a=a.a
z=a.c
this.r=z
y=this.d
x=y.length
if(x<z){z=new Array(Math.max(x*2,z))
z.fixed$length=Array
this.scs(H.f(z,[V.bx]))
z=this.d;(z&&C.a).Y(z,0,x,y,0)
for(;z=this.d,x<z.length;++x)(z&&C.a).i(z,x,V.cQ())}z=this.e
x=z.length
y=this.r
if(x<y){y=new Array(Math.max(x*2,y))
y.fixed$length=Array
this.scw(H.f(y,[V.bd]))
y=this.e;(y&&C.a).Y(y,0,x,z,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).i(z,x,V.cR())}this.sbv(a.d)
this.sbA(a.e)
this.sbp(a.b)
for(x=0;x<this.r;++x){z=this.f
if(x>=z.length)return H.b(z,x)
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
if(x>=z.length)return H.b(z,x)
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
l.d.H()
l.c.H()
z=this.d
if(x>=z.length)return H.b(z,x)
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
for(z=n.a,i=0;i<m;++i){if(i>=2)return H.b(z,i)
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
fK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
x=y[z]
w=x.e
v=x.f
u=x.r
t=x.y
s=x.x
r=x.z
q=x.cy
y=this.c
if(w>=y.length)return H.b(y,w)
p=y[w].gM()
y=this.c
if(w>=y.length)return H.b(y,w)
o=y[w].gK()
y=this.c
if(v>=y.length)return H.b(y,v)
n=y[v].gM()
y=this.c
if(v>=y.length)return H.b(y,v)
m=y[v].gK()
y=x.b.a
l=y[1]
k=-1*y[0]
for(j=p.a,i=n.a,h=0;h<q;++h){g=x.a
if(h>=2)return H.b(g,h)
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
if(w>=y.length)return H.b(y,w)
y[w].sK(o)
y=this.c
if(v>=y.length)return H.b(y,v)
y[v].sK(m)}},
cR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
for(z=this.z,y=z.b,x=this.x,w=x.b,v=this.y,u=v.b,t=x.a.a,s=v.a.a,r=z.a.a,q=0;q<this.r;++q){p=this.e
if(q>=p.length)return H.b(p,q)
o=p[q]
p=this.d
if(q>=p.length)return H.b(p,q)
n=p[q]
m=n.cx
l=n.cy
p=this.f
k=o.db
if(k>=p.length)return H.b(p,k)
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
if(i>=k.length)return H.b(k,i)
a=k[i].gB()
k=this.b
if(i>=k.length)return H.b(k,i)
a0=k[i].gD()
k=this.c
if(i>=k.length)return H.b(k,i)
a1=k[i].gM()
k=this.c
if(i>=k.length)return H.b(k,i)
a2=k[i].gK()
k=this.b
if(h>=k.length)return H.b(k,h)
a3=k[h].gB()
k=this.b
if(h>=k.length)return H.b(k,h)
a4=k[h].gD()
k=this.c
if(h>=k.length)return H.b(k,h)
a5=k[h].gM()
k=this.c
if(h>=k.length)return H.b(k,h)
a6=k[h].gK()
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
z.fe(0,j,x,m,v,l)
b1=o.b.a
b1[0]=r[0]
b1[1]=r[1]
b2=o.cy
for(k=-$.jk,a7=a5.a,a8=-a6,b0=a1.a,b3=-a2,b4=g+f,b5=0;b5<b2;++b5){b6=o.a
if(b5>=2)return H.b(b6,b5)
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
k.j(p)
k.fi()}else o.cy=1}}},
c6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
x=y[z]
w=x.e
v=x.f
u=x.r
t=x.x
s=x.y
r=x.z
q=x.cy
y=this.c
if(w>=y.length)return H.b(y,w)
p=y[w].gM()
y=this.c
if(w>=y.length)return H.b(y,w)
o=y[w].gK()
y=this.c
if(v>=y.length)return H.b(y,v)
n=y[v].gM()
y=this.c
if(v>=y.length)return H.b(y,v)
m=y[v].gK()
y=x.b.a
l=y[0]
k=y[1]
j=-1*l
i=x.Q
for(y=n.a,h=p.a,g=0;g<q;++g){f=x.a
if(g>=2)return H.b(f,g)
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
if(w>=y.length)return H.b(y,w)
y[w].sK(o)
y=this.c
if(v>=y.length)return H.b(y,v)
y[v].sK(m)}},
dD:function(){var z,y,x,w,v,u
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
x=y[z]
y=this.f
w=x.db
if(w>=y.length)return H.b(y,w)
for(y=y[w].z.a,v=0;v<x.cy;++v){if(v>=2)return H.b(y,v)
w=y[v]
u=x.a[v]
w.b=u.c
w.c=u.d}}},
dj:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
for(z=this.x,y=z.b,x=this.y,w=x.b,v=z.a.a,u=x.a.a,t=this.Q,s=t.b.a,r=t.a.a,q=0,p=0;p<this.r;++p){o=this.d
if(p>=o.length)return H.b(o,p)
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
if(m>=o.length)return H.b(o,m)
b=o[m].gB()
o=this.b
if(m>=o.length)return H.b(o,m)
a=o[m].gD()
o=this.b
if(l>=o.length)return H.b(o,l)
a0=o[l].gB()
o=this.b
if(l>=o.length)return H.b(o,l)
a1=o[l].gD()
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
t.cQ(0,n,z,x,a4)
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
if(m>=o.length)return H.b(o,m)
o[m].sD(a)
o=this.b
if(l>=o.length)return H.b(o,l)
o[l].sD(a1)}return q>=-0.015},
dt:function(c3,c4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
for(z=this.x,y=z.b,x=this.y,w=x.b,v=z.a.a,u=x.a.a,t=this.Q,s=t.b.a,r=t.a.a,q=0,p=0;p<this.r;++p){o=this.d
if(p>=o.length)return H.b(o,p)
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
if(m>=o.length)return H.b(o,m)
a0=o[m].gB()
o=this.b
if(m>=o.length)return H.b(o,m)
a1=o[m].gD()
o=this.b
if(l>=o.length)return H.b(o,l)
a2=o[l].gB()
o=this.b
if(l>=o.length)return H.b(o,l)
a3=o[l].gD()
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
t.cQ(0,n,z,x,a6)
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
if(m>=o.length)return H.b(o,m)
o[m].sD(a1)
o=this.b
if(l>=o.length)return H.b(o,l)
o[l].sD(a3)}return q>=-0.0075},
q:{
bz:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=V.hY()
w=new Float64Array(2)
z=new V.f4(0,new G.B(new E.a(z),new G.x(0,1)),new G.B(new E.a(y),new G.x(0,1)),x,new V.hj(new E.a(w),new E.a(new Float64Array(2)),0))
z.dN()
return z}}},
hj:{"^":"c;a,b,c",
cQ:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c.b
y=d.b
x=b.a
if(a0>=2)return H.b(x,a0)
w=x[a0]
switch(b.ch){case C.n:v=x[0]
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
s.sk(0,u)
r=n-p
s.sl(0,r)
s.S()
x=this.b
x.sk(0,(q+o)*0.5)
x.sl(0,(p+n)*0.5)
s=s.a
this.c=u*s[0]+r*s[1]-b.cx-b.cy
break
case C.h:x=this.a
u=b.b.a
x.sk(0,z.b*u[0]-z.a*u[1])
x.sl(0,z.a*u[0]+z.b*u[1])
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
x.sk(0,f)
x.sl(0,e)
break
case C.w:x=this.a
u=b.b.a
x.sk(0,y.b*u[0]-y.a*u[1])
x.sl(0,y.a*u[0]+y.b*u[1])
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
m.sk(0,f)
m.sl(0,e)
x.sk(0,g[0]*-1)
x.sl(0,g[1]*-1)
break}}},
dZ:{"^":"c;a,b,c,d,e,f,r"},
bd:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
dO:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.i(z,y,new V.dZ(new E.a(x),new E.a(new Float64Array(2)),0,0,0,0,0))}},
q:{
cR:function(){var z,y,x
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.dZ])
y=new Float64Array(2)
x=new Float64Array(4)
z=new V.bd(z,new E.a(y),new E.af(x),new E.af(new Float64Array(4)),0,0,0,0,0,0,0,0,0,0,0)
z.dO()
return z}}},
aP:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a8:function(a,b,c,d){this.aZ(a,b,c,d)},
a1:function(a,b,c){this.dx.fr.cD(a,H.H(this.f.d,"$isaR"),b,H.H(this.r.d,"$isaN"),c)}},
aQ:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a8:function(a,b,c,d){this.aZ(a,b,c,d)},
a1:function(a,b,c){var z,y,x
z=this.dx.fr
y=H.H(this.f.d,"$isaR")
x=this.r.d
z.k3.cC(a,y,b,x,c)}},
b_:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a1:function(a,b,c){this.dx.fr.eL(a,this.f.d,b,H.H(this.r.d,"$isaN"),c)}},
b0:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a1:function(a,b,c){this.dx.fr.eM(a,this.f.d,b,this.r.d,c)}},
as:{"^":"c;B:a<,D:b<",
sD:function(a){this.b=H.b8(a)}},
ay:{"^":"c;M:a<,K:b<",
sK:function(a){this.b=H.b8(a)}},
c4:{"^":"c;a,b,c"},
d3:{"^":"c;a,0b,0c,0d,e,f,0r,x,y,z,0ak:Q<,ch,cx,cy",
sct:function(a){this.r=H.i(a,"$isd",[V.be],"$asd")},
eR:function(a,b){var z,y,x,w,v
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
this.z=!1
this.d=b.a.eI(0)
if(this.r==null){z=new Array(1)
z.fixed$length=Array
this.sct(H.f(z,[V.be]))
for(x=0;x<1;++x){z=this.r
y=new Float64Array(2);(z&&C.a).i(z,x,new V.be(new V.N(new E.a(y),new E.a(new Float64Array(2))),0,0))
z=this.r
if(x>=z.length)return H.b(z,x)
z[x].scO(null)
z=this.r
if(x>=z.length)return H.b(z,x)
z[x].saT(-1)}}z=this.r
y=z.length
if(y<1){w=Math.max(y*2,1)
v=new Array(w)
v.fixed$length=Array
this.sct(H.f(v,[V.be]))
v=this.r;(v&&C.a).Y(v,0,y,z,0)
for(x=0;x<w;++x){z=this.r
y=new Float64Array(2);(z&&C.a).i(z,x,new V.be(new V.N(new E.a(y),new E.a(new Float64Array(2))),0,0))
z=this.r
if(x>=z.length)return H.b(z,x)
z[x].scO(null)
z=this.r
if(x>=z.length)return H.b(z,x)
z[x].saT(-1)}}this.x=0
this.a=b.e},
eW:function(a,b){var z,y,x,w,v,u,t,s,r
this.d.toString
this.x=1
for(z=a.a,y=0;y<this.x;++y){x=this.r
if(y>=x.length)return H.b(x,y)
w=x[y]
x=this.d
v=w.a
x.bD(v,b,y)
u=z.ce()
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
z.co(t);++a.b
a.cB(t)
w.d=t
w.b=this
w.c=y}},
dL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.x===0)return
for(z=this.cy,y=c.a.a,x=b.a.a,w=z.a,v=a.a,u=this.ch,t=this.cx,s=u.a.a,r=u.b.a,q=0;q<this.x;++q){p=this.r
if(q>=p.length)return H.b(p,q)
o=p[q]
this.d.bD(u,b,o.c)
this.d.bD(t,c,o.c)
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
if(v.fj(n,p,z))a.cB(n)}}},
d4:{"^":"c;0a,0ak:b<,c,d,e,f,r"},
be:{"^":"c;ao:a<,0b,c,aT:d<",
scO:function(a){this.b=H.k(a,"$isd3")},
saT:function(a){this.d=H.j(a)}},
d6:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
se3:function(a){this.b=H.i(a,"$isd",[V.aI],"$asd")},
sbp:function(a){this.c=H.i(a,"$isd",[V.P],"$asd")},
sek:function(a){this.d=H.i(a,"$isd",[V.db],"$asd")},
sbv:function(a){this.e=H.i(a,"$isd",[V.as],"$asd")},
sbA:function(a){this.f=H.i(a,"$isd",[V.ay],"$asd")},
a8:function(a,b,c,d){var z,y,x
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
this.se3(H.f(z,[V.aI]))}z=this.d
if(z==null||this.ch>z.length){z=new Array(this.ch)
z.fixed$length=Array
this.sek(H.f(z,[V.db]))}z=this.c
if(z==null||this.Q>z.length){z=new Array(this.Q)
z.fixed$length=Array
this.sbp(H.f(z,[V.P]))}y=this.f
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.ay])}z=new Array(this.z)
z.fixed$length=Array
this.sbA(H.f(z,[V.ay]))
z=this.f
x=y.length;(z&&C.a).Y(z,0,x,y,0)
for(;z=this.f,x<z.length;++x)(z&&C.a).i(z,x,new V.ay(new E.a(new Float64Array(2)),0))}y=this.e
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.as])}z=new Array(this.z)
z.fixed$length=Array
this.sbv(H.f(z,[V.as]))
z=this.e
x=y.length;(z&&C.a).Y(z,0,x,y,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).i(z,x,new V.as(new E.a(new Float64Array(2)),0))}},
dc:function(a1,a2,a3,a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=a2.a
for(y=a3.a,x=0;x<this.r;++x){w=this.b
if(x>=w.length)return H.b(w,x)
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
if(x>=w.length)return H.b(w,x)
J.bW(w[x].gB(),q[0])
w=this.e
if(x>=w.length)return H.b(w,x)
J.bX(w[x].gB(),q[1])
w=this.e
if(x>=w.length)return H.b(w,x)
w[x].sD(t)
w=this.f
if(x>=w.length)return H.b(w,x)
p=s.a
w[x].gM().a[0]=p[0]
w=this.f
if(x>=w.length)return H.b(w,x)
w[x].gM().a[1]=p[1]
p=this.f
if(x>=p.length)return H.b(p,x)
p[x].sK(r)}y=this.cy
y.a=a2
y.sbf(this.e)
y.sbg(this.f)
w=this.db
w.a=a2
w.scE(this.c)
w.c=this.y
w.sbf(this.e)
w.sbg(this.f)
p=this.cx
p.cP(w)
p.cR()
if(a2.f)p.fK()
for(x=0;x<this.x;++x){w=this.d
if(x>=w.length)return H.b(w,x)
w[x].hd(y)}for(x=0;x<a2.d;++x){for(k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.b(w,k)
w[k].fX(y)}p.c6()}p.dD()
for(x=0;x<this.r;++x){w=this.e
if(x>=w.length)return H.b(w,x)
j=w[x].gB()
w=this.e
if(x>=w.length)return H.b(w,x)
t=w[x].gD()
w=this.f
if(x>=w.length)return H.b(w,x)
s=w[x].gM()
w=this.f
if(x>=w.length)return H.b(w,x)
r=w[x].gK()
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
if(x>=w.length)return H.b(w,x)
w[x].sD(t+z*r)
w=this.f
if(x>=w.length)return H.b(w,x)
w[x].sK(r)}x=0
while(!0){if(!(x<a2.e)){e=!1
break}d=p.dj()
for(c=!0,k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.b(w,k)
b=w[k].fW(y)
c=c&&b}if(d&&c){e=!0
break}++x}for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
a=y[x]
y=a.f
w=this.e
if(x>=w.length)return H.b(w,x)
o=y.c.a
o[0]=J.bb(w[x].gB())
w=this.e
if(x>=w.length)return H.b(w,x)
o[1]=J.bc(w[x].gB())
w=this.e
if(x>=w.length)return H.b(w,x)
y.e=w[x].gD()
w=a.r
y=this.f
if(x>=y.length)return H.b(y,x)
w=w.a
w[0]=y[x].gM().a[0]
y=this.f
if(x>=y.length)return H.b(y,x)
w[1]=y[x].gM().a[1]
y=this.f
if(x>=y.length)return H.b(y,x)
a.x=H.b8(y[x].gK())
a.ax()}this.cY(p.e)
if(a4){for(a0=17976931348623157e292,x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
v=y[x]
if(v.a===C.e)continue
if((v.b&4)!==0){y=v.x
if(!(y*y>0.0012184696791468343)){y=v.r
y=y.v(y)>0.0001}else y=!0}else y=!0
if(y){v.k3=0
a0=0}else{y=v.k3+=z
a0=Math.min(a0,y)}}if(a0>=0.5&&e)for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
y[x].X(!1)}}},
ds:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
y=y[z].gB()
x=this.b
if(z>=x.length)return H.b(x,z)
J.bW(y,x[z].f.c.a[0])
x=this.e
if(z>=x.length)return H.b(x,z)
x=x[z].gB()
y=this.b
if(z>=y.length)return H.b(y,z)
J.bX(x,y[z].f.c.a[1])
y=this.e
if(z>=y.length)return H.b(y,z)
y=y[z]
x=this.b
if(z>=x.length)return H.b(x,z)
y.sD(x[z].f.e)
x=this.f
if(z>=x.length)return H.b(x,z)
x=x[z].gM()
y=this.b
if(z>=y.length)return H.b(y,z)
x.a[0]=y[z].r.a[0]
y=this.f
if(z>=y.length)return H.b(y,z)
y=y[z].gM()
x=this.b
if(z>=x.length)return H.b(x,z)
y.a[1]=x[z].r.a[1]
y=this.f
if(z>=y.length)return H.b(y,z)
y[z].sK(x[z].x)}y=this.dy
y.scE(this.c)
y.c=this.y
y.a=a
y.sbf(this.e)
y.sbg(this.f)
x=this.dx
x.cP(y)
for(z=0;z<a.e;++z)if(x.dt(b,c))break
y=this.b
if(b>=y.length)return H.b(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.b(w,b)
y.b.sk(0,J.bb(w[b].gB()))
w=this.b
if(b>=w.length)return H.b(w,b)
w=w[b].f
y=this.e
if(b>=y.length)return H.b(y,b)
w.b.sl(0,J.bc(y[b].gB()))
y=this.b
if(b>=y.length)return H.b(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.b(w,b)
y.d=w[b].gD()
w=this.b
if(c>=w.length)return H.b(w,c)
w=w[c].f
y=this.e
if(c>=y.length)return H.b(y,c)
w.b.j(y[c].gB())
y=this.b
if(c>=y.length)return H.b(y,c)
y=y[c].f
w=this.e
if(c>=w.length)return H.b(w,c)
y.d=w[c].gD()
x.cR()
for(z=0;z<a.d;++z)x.c6()
v=a.a
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
u=y[z].gB()
y=this.e
if(z>=y.length)return H.b(y,z)
t=y[z].gD()
y=this.f
if(z>=y.length)return H.b(y,z)
s=y[z].gM()
y=this.f
if(z>=y.length)return H.b(y,z)
r=y[z].gK()
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
if(z>=n.length)return H.b(n,z)
J.bW(n[z].gB(),w[0])
n=this.e
if(z>=n.length)return H.b(n,z)
J.bX(n[z].gB(),w[1])
n=this.e
if(z>=n.length)return H.b(n,z)
n[z].sD(t)
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].gM().a[0]=y[0]
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].gM().a[1]=y[1]
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].sK(r)
n=this.b
if(z>=n.length)return H.b(n,z)
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
m.ax()}this.cY(x.e)},
cY:function(a){H.i(a,"$isd",[V.bd],"$asd")
return}},
db:{"^":"c;"},
bj:{"^":"c;a,b",
m:function(a){return this.b}},
a6:{"^":"c;a,b,c,d,e",
a3:function(a){this.a=this.a*0.95+a*0.05
this.b=this.b*0.8+a*0.2
this.c=Math.min(a,this.c)
this.d=Math.max(a,this.d)},
m:function(a){return H.e(this.b)+" ("+H.e(this.a)+") ["+H.e(this.c)+","+H.e(this.d)+"]"}},
hm:{"^":"c;a,b,c,d,e,f,r,x,y,z"},
dv:{"^":"c;0a,0b,0c",
sbf:function(a){this.b=H.i(a,"$isd",[V.as],"$asd")},
sbg:function(a){this.c=H.i(a,"$isd",[V.ay],"$asd")}},
dG:{"^":"c;a,b,c,d,e,f"},
hW:{"^":"c;a,0b,0c,0d,e,f,r,x,0y,0z,0Q,ch,cx,cy,db,dx,dy,0fr,0fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,cL,ae,bI,aE,b8,b9,ba,bJ,bK,bL,bM,bb,bc,bd,af,aQ,cM",
sdA:function(a){this.y1=H.i(a,"$isd",[V.aI],"$asd")},
an:function(a,b,c){var z,y,x,w,v,u,t
H.i(a,"$isY",[V.P],"$asY")
z=new V.by(!1)
z.scI(a)
z.b=!0
y=this.fy
x=b.a
w=y.length
if(x>=w)return H.b(y,x)
v=y[x]
u=c.a;(v&&C.a).i(v,u,z)
if(b!==c){t=new V.by(!1)
t.scI(a)
t.b=!1
if(u>=w)return H.b(y,u)
y=y[u];(y&&C.a).i(y,x,t)}},
fn:function(a,b,c,d){var z,y,x,w,v,u
z=a.d.a
y=c.d.a
x=this.fy
w=z.a
if(w>=x.length)return H.b(x,w)
w=x[w]
x=y.a
if(x>=w.length)return H.b(w,x)
v=w[x]
if(v!=null){x=v.b
w=v.a
if(x){u=w.aF()
u.a8(a,b,c,d)
return u}else{u=w.aF()
u.a8(c,d,a,b)
return u}}else return},
cG:function(a){var z,y,x,w,v,u,t,s,r,q,p
if((this.a&2)===2)return
z=new E.a(new Float64Array(2))
y=new G.x(0,1)
x=new Float64Array(2)
w=new E.a(new Float64Array(2))
v=new E.a(new Float64Array(2))
u=new E.a(new Float64Array(2))
t=new G.av(w,v,u,0,0,0)
s=new E.a(new Float64Array(2))
r=new E.a(new Float64Array(2))
q=new Float64Array(2)
p=new V.aI(C.e,0,0,new G.B(z,y),new G.B(new E.a(x),new G.x(0,1)),t,s,0,r,0,this,0,0,0,0,0,0,0,0,0,new V.d4(0.2,0,0,!1,new V.c4(1,65535,0)),new V.fQ(0,new E.a(q),0),new G.B(new E.a(new Float64Array(2)),new G.x(0,1)))
p.b=4
p.b=6
p.b=38
z.j(a.c)
y.aX(a.d)
w.H()
v.j(z)
u.j(z)
z=a.d
t.d=z
t.e=z
t.f=0
s.j(a.e)
p.x=a.f
p.id=a.r
p.k1=a.x
p.k2=a.cy
r.H()
r=a.a
p.a=r
if(r===C.f){p.fr=1
p.fx=1}p.k4=a.b
z=this.c
p.cx=z
if(z!=null)z.ch=p
this.c=p;++this.e
return p},
eG:function(){var z,y
for(z=this.c;z!=null;z=z.cx){y=z.y.a
y[0]=0
y[1]=0
z.z=0}},
f0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
if((s&32)!==32){z.a5(0.5,0.5,0.3)
this.aP(q,v,z,x)}else{p=w.a
if(p===C.e){z.a5(0.5,0.9,0.3)
this.aP(q,v,z,x)}else if(p===C.F){z.a5(0.5,0.5,0.9)
this.aP(q,v,z,x)}else if((s&2)!==2){z.a5(0.5,0.5,0.5)
this.aP(q,v,z,x)}else{z.a5(0.9,0.7,0.7)
this.aP(q,v,z,x)}}}}z=this.fx
v=this.Q.a
o=z.z
if(o!==0){n=z.r/2
m=z.cy.a
l=z.fx.a!=null?z.d5():null
z=this.Q
if((v&128)!==0)z.f2(m,n,l,o)
else z.f1(m,n,l,o)}}if((y&4)!==0)for(k=this.d,z=this.ch.a,v=this.k2,u=z.a,t=u.length;!1;k=k.aW()){j=k.fP()
i=k.fQ()
h=j.gbz()
g=i.gbz()
f=h.gV()
e=g.gV()
s=z.b
p=s+1
z.b=p
if(s<0||s>=t)return H.b(u,s)
s=u[s]
z.b=p+1
if(p<0||p>=t)return H.b(u,p)
p=u[p]
k.fN(s)
k.fO(p)
v.a5(0.5,0.8,0.8)
switch(k.fT()){case C.a0:this.Q.Z(s,p,v)
break
case C.a1:d=k.fR()
c=k.fS()
this.Q.Z(d,s,v)
this.Q.Z(c,p,v)
this.Q.Z(d,c,v)
break
case C.a3:this.Q.Z(f,e,v)
break
case C.a_:case C.a2:break
default:this.Q.Z(f,s,v)
this.Q.Z(s,p,v)
this.Q.Z(e,p,v)}z.b-=2}if((y&16)!==0){z=this.k2
z.a5(0.3,0.9,0.9)
for(b=this.b.b,v=this.k4,u=this.r1;b!=null;b=b.c){a=b.f
a0=b.r
t=b.x
s=a.r
if(t>=s.length)return H.b(s,t)
s[t].gao().bW(v)
t=b.y
s=a0.r
if(t>=s.length)return H.b(s,t)
s[t].gao().bW(u)
this.Q.Z(v,u,z)}}if((y&8)!==0){z=this.k2
z.a5(0.9,0.3,0.9)
for(w=this.c,v=this.r2,u=v.a,t=[E.a];w!=null;w=w.cx){if((w.b&32)!==32)continue
for(q=w.cy;q!=null;q=q.b)for(a1=0;a1<q.x;++a1){s=q.r
if(a1>=s.length)return H.b(s,a1)
a2=s[a1]
s=this.b.a
p=a2.d
s=s.a.b
if(p<0||p>=s.length)return H.b(s,p)
a3=s[p].gao()
if(!u.cF(4))u.i(0,4,v.bY(4))
s=u.h(0,4)
p=J.a1(s)
a4=a3.a.a
p.h(s,0).A(a4[0],a4[1])
a5=a3.b.a
p.h(s,1).A(a5[0],a4[1])
p.h(s,2).A(a5[0],a5[1])
p.h(s,3).A(a4[0],a5[1])
a5=this.Q
a5.toString
a5.b6(H.i(s,"$isd",t,"$asd"),4,z)
a5.c.stroke()}}}if((y&32)!==0){a6=new G.bw(255,0,0)
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
t.b5(v,0.1*t.b.c,a6)
t.c.stroke()}}if((y&64)!==0)this.b.a.a.f3(this.Q)
this.Q.toString},
bl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.a8(x,v.c,this.f,v.e)
for(y=this.c;y!=null;y=y.cx)y.b&=4294967294
for(u=this.b.b;u!=null;u=u.c)u.a&=4294967294
for(t=this.d;!1;t=t.gb4())t.scp(!1)
s=this.e
if(this.y1.length<s){x=new Array(s)
x.fixed$length=Array
this.sdA(H.f(x,[V.aI]))}for(r=this.c,x=this.r;r!=null;r=r.cx){v=r.b
if((v&1)===1)continue
if((v&2)!==2||(v&32)!==32)continue
if(r.a===C.e)continue
z.r=0
z.y=0
z.x=0
C.a.i(this.y1,0,r)
r.b|=1
for(q=1;q>0;){v=this.y1;--q
if(q>=v.length)return H.b(v,q)
y=v[q]
v=z.r
y.c=v
p=z.b;(p&&C.a).i(p,v,y);++z.r
y.X(!0)
if(y.a===C.e)continue
for(o=y.dy;o!=null;o=o.d){n=o.b
v=n.a
if((v&1)===1)continue
if((v&4)!==4||(v&2)!==2)continue
n.f.z
n.r.z
v=z.c;(v&&C.a).i(v,z.y++,n)
n.a|=1
m=o.a
if((m.b&1)===1)continue
l=q+1
C.a.i(this.y1,q,m)
m.b|=1
q=l}for(k=y.dx;!1;k=k.gfk()){k.gcU().gcp()
m=k.gfm()
m.he()
v=k.gcU()
p=z.d;(p&&C.a).i(p,z.x++,v)
k.gcU().scp(!0)
m.gcj().W(0,1)
l=q+1
C.a.i(this.y1,q,m)
m.scj(m.gcj().bh(0,1))
q=l}}z.dc(this.fr,a,x,this.x)
for(j=0;j<z.r;++j){v=z.b
if(j>=v.length)return H.b(v,j)
y=v[j]
if(y.a===C.e)y.b&=4294967294}}z=this.fr.f
z.a3(z.e)
z=this.fr.r
z.a3(z.e)
z=this.fr.x
z.a3(z.e)
z=this.y2.a
z.aj(0)
for(y=this.c;y!=null;y=y.cx){if((y.b&1)===0)continue
if(y.a===C.e)continue
y.c9()}x=this.b
x.a.bU(x)
x=this.fr.y
z=z.gad()
v=$.F
if(typeof v!=="number")return H.G(v)
x.a3(C.c.a6(z*1000,v))},
dr:function(b4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
z=this.cL
z.a8(64,32,0,this.b.e)
if(this.dy){for(y=this.c;y!=null;y=y.cx){y.b&=4294967294
y.f.f=0}for(x=this.b.b;x!=null;x=x.c){x.a&=4294967262
x.Q=0
x.ch=1}}for(w=this.aE,v=this.b8,u=this.b9,t=this.ba,s=this.bI,r=this.ae,q=r.a,p=r.b,o=r.c,n=r.d,m=this.ch;!0;){for(x=this.b.b,l=null,k=1;x!=null;x=x.c){j=x.a
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
if(a3<a4){j.ap(a4)
a3=a4}else if(a4<a3)a.ap(a3)
a5=x.x
a6=x.y
q.c2(h.d,a5)
p.c2(g.d,a6)
o.C(j)
n.C(a)
r.e=1
m.fx.fD(s,r)
a7=s.b
i=s.a===C.D?Math.min(a3+(1-a3)*a7,1):1
x.ch=i
x.a|=32}if(i<k){k=i
l=x}}if(l==null||0.9999988079071045<k){this.dy=!0
break}h=l.f
g=l.r
f=h.c
e=g.c
j=f.f
u.C(j)
a=e.f
t.C(a)
f.ap(k)
e.ap(k)
l.bT(this.b.e)
a8=l.a&=4294967263;++l.Q
if((a8&4)!==4||(a8&2)!==2){l.a=a8&4294967291
j.C(u)
a.C(t)
f.ax()
e.ax()
continue}f.X(!0)
e.X(!0)
z.r=0
z.y=0
z.x=0
f.c=0
j=z.b;(j&&C.a).i(j,0,f)
j=++z.r
e.c=j
a=z.b;(a&&C.a).i(a,j,e);++z.r
j=z.c;(j&&C.a).i(j,z.y++,l)
f.b|=1
e.b|=1
l.a|=1
C.a.i(v,0,f)
C.a.i(v,1,e)
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
u.C(j)
if((b3.b&1)===0)b3.ap(k)
b2.bT(this.b.e)
a=b2.a
if((a&4)!==4){j.C(u)
b3.ax()
continue}if((a&2)!==2){j.C(u)
b3.ax()
continue}b2.a=a|1
j=z.c;(j&&C.a).i(j,z.y++,b2)
j=b3.b
if((j&1)!==0)continue
b3.b=j|1
if(b3.a!==C.e)b3.X(!0)
j=z.r
b3.c=j
a=z.b;(a&&C.a).i(a,j,b3);++z.r}}j=(1-k)*b4.a
w.a=j
w.b=1/j
w.c=1
w.e=20
w.d=b4.d
w.f=!1
z.ds(w,f.c,e.c)
for(a9=0;a9<z.r;++a9){j=z.b
if(a9>=j.length)return H.b(j,a9)
b0=j[a9]
b0.b&=4294967294
if(b0.a!==C.f)continue
b0.c9()
for(b1=b0.dy;b1!=null;b1=b1.d)b1.b.a&=4294967262}j=this.b
j.a.bU(j)}},
aP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q
z=a.d
switch(z.a){case C.m:H.H(z,"$isaN")
y=this.bc
G.n(b,z.gV(),y)
x=z.gaG()
z=b.b
this.bd.A(z.b,z.a)
z=this.Q
if(d)z.eZ(y,x,c)
else{z.b5(y,x.p(0,z.b.c),c)
z.c.fill()}break
case C.i:w=z.f
v=this.cM.d2(8)
for(y=J.a1(v),u=0;u<w;++u){t=z.d
if(u>=8)return H.b(t,u)
G.n(b,t[u],y.h(v,u))}z=this.Q
y=[E.a]
if(d){z.toString
z.b6(H.i(v,"$isd",y,"$asd"),w,c)
z.c.stroke()}else{z.toString
z.b6(H.i(v,"$isd",y,"$asd"),w,c)
z.c.fill()}break
case C.o:H.H(z,"$isaR")
y=this.af
G.n(b,z.c,y)
t=this.aQ
G.n(b,z.d,t)
this.Q.Z(y,t,c)
break
case C.x:H.H(z,"$isc0")
s=z.geb()
v=z.gbB()
z=this.af
G.n(b,v.h(0,0),z)
for(y=this.aQ,r=y.a,t=z.a,u=1;C.c.E(u,s);++u){G.n(b,v.h(0,u),y)
this.Q.Z(z,y,c)
q=this.Q
q.b5(z,0.05*q.b.c,c)
q.c.stroke()
t[1]=r[1]
t[0]=r[0]}break
default:break}},
q:{
i0:function(a,b){var z,y,x,w
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[[P.d,V.by]])
for(z=[V.by],x=0;x<a;++x){w=new Array(b)
w.fixed$length=Array
C.a.i(y,x,H.f(w,z))}return y}}},
hZ:{"^":"c;0a,0b",
d_:function(a){var z,y
z=this.a.a.b
if(a<0||a>=z.length)return H.b(z,a)
y=z[a].gak()
return this.b.hi(y.b)},
$ishL:1},
i_:{"^":"c;a,b,c,0d,0e"},
k0:{"^":"c;"},
ac:{"^":"c;a",
sD:function(a){this.a[3]=H.j(a)},
gD:function(){return this.a[3]}},
k1:{"^":"c;"},
hc:{"^":"c;a,b,c,0d,0ak:e<"},
k2:{"^":"c;"},
T:{"^":"c;0a,b,c,$ti",
scJ:function(a,b){this.a=H.i(b,"$isd",this.$ti,"$asd")}},
hb:{"^":"c;0a,0b"},
k9:{"^":"c;"},
ka:{"^":"c;"},
dm:{"^":"c;",$isE:1,
$asE:function(){return[V.dm]}},
h0:{"^":"c;a,b,c"},
ff:{"^":"c;0a,0b,0c,d,e"},
hR:{"^":"c;0a,b",$ishn:1},
f5:{"^":"c;0a,0b,0c"},
hx:{"^":"c;0a,0b,c,d,e,f",$ishn:1},
hd:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,id,k1,0k2,k3,k4,0r1,r2,rx,0ry,x1,x2,0y1,y2,cL,0ae,bI,0aE,0b8,0b9,0ba,0bJ,0bK,0bL,0bM,0bb,0bc,0bd,0af,aQ,cM,h7,aR,h8,h9,ha,hb,f4,f5,f6,f7,f8,f9,hc",
sfo:function(a){this.cy=H.i(a,"$isT",[E.a],"$asT")},
sfJ:function(a){this.db=H.i(a,"$isT",[E.a],"$asT")},
seB:function(a){this.dy=H.i(a,"$isd",[E.a],"$asd")},
seN:function(a){this.fx=H.i(a,"$isT",[V.ac],"$asT")},
sfI:function(a){this.go=H.i(a,"$isT",[P.c],"$asT")},
bS:function(a,b,c){var z,y,x,w,v
H.i(a,"$isd",[c],"$asd")
H.t(b,{func:1,ret:c})
if(a==null){x=this.Q
w=new Array(x)
w.fixed$length=Array
a=H.f(w,[c])
for(z=0;J.cC(z,x);z=J.ez(z,1))try{J.eB(a,z,b.$0())}catch(v){y=H.aF(v)
x="Exception "+H.e(y)
throw H.h(x)}}return a},
eX:function(a){var z,y
z=this.af
z.c_()
z.c_().fV(a)
for(y=a.gb0(),z=this.fy;y.E(0,a.gb2());y=y.n(0,1))C.d.i(z,y,null)
a.gbw()
a.gbw().sb4(a.gb4())
a.gb4()
a.gb4().sbw(a.gbw());--this.bI},
fH:function(a){var z,y,x,w,v,u,t
for(z=this.k2,y=this.x,x=0;w=this.id,x<w;++x){v=C.d.h(z,x)
u=v.gbN(v)
w=this.cy.a
w=(w&&C.a).h(w,u).a
t=w[0]
v.sfA((C.b.T(y*w[1]+2048)<<19>>>0)+(C.b.T(128*(y*t))+262144))}F.ex(z,0,w,V.dm)
this.k3=0
for(u=0;u<this.id;++u)V.hf(C.d.h(z,u).gfA(),1,0)},
fG:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.aQ
y=z.a
y.sk(0,17976931348623157e292)
y.sl(0,17976931348623157e292)
x=z.b
x.sk(0,-17976931348623157e292)
x.sl(0,-17976931348623157e292)
for(w=this.z,v=this.cy.a,u=y.a,t=x.a,s=0;s<w;++s){if(s>=v.length)return H.b(v,s)
r=v[s]
q=u[0]
p=r.a
u[0]=Math.min(q,p[0])
u[1]=Math.min(u[1],p[1])
t[0]=Math.max(t[0],p[0])
t[1]=Math.max(t[1],p[1])}w=this.r
y.sk(0,u[0]-w)
y.sl(0,u[1]-w)
x.sk(0,t[0]+w)
x.sl(0,t[1]+w)
this.r2=0
w=this.f4
w.a=this
this.af.ft(w,z)},
df:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.aQ
y=z.a
x=z.b
y.sk(0,17976931348623157e292)
y.sl(0,17976931348623157e292)
x.sk(0,-17976931348623157e292)
x.sl(0,-17976931348623157e292)
for(w=this.z,v=x.a,u=y.a,t=this.db.a,s=this.cy.a,r=a.a,q=0;q<w;++q){if(q>=t.length)return H.b(t,q)
p=t[q]
if(q>=s.length)return H.b(s,q)
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
v[1]=o>g?o:g}w=this.f5
w.b=a
w.a=this
this.af.ft(w,z)},
bl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j;++this.a
if(this.z===0)return
this.b=0
for(z=0,y=0;z<this.z;++z){y=C.c.bh(y,C.d.h(this.cx.a,z))
this.b=y}if((y&2)!==0)this.dz()
if(this.z===0)return
this.c=0
for(x=this.aE;!1;x=x.aW())this.c=C.c.bh(this.c,x.gcm())
y=a.a
w=this.f
v=this.af
u=v.d4()
t=C.b.p(y*w,u.gk(u))
u=a.a
v=v.d4()
s=C.b.p(u*w,v.gl(v))
r=this.r*a.b
q=r*r
for(z=0;z<this.z;++z){y=this.db.a
if(z>=y.length)return H.b(y,z)
y=y[z].a
y[0]=y[0]+t
y[1]=y[1]+s
w=y[0]
v=y[1]
p=w*w+v*v
if(p>q){o=p===0?17976931348623157e292:Math.sqrt(q/p)
y[0]=y[0]*o
y[1]=y[1]*o}}this.df(a)
if((this.c&2)!==0)this.dm(a)
if((this.b&4)!==0)this.dw(a)
for(y=this.z,w=this.cy.a,v=this.db.a,u=a.a,z=0;z<y;++z){if(z>=w.length)return H.b(w,z)
n=w[z]
if(z>=v.length)return H.b(v,z)
m=v[z]
l=n.a
k=l[0]
j=m.a
l[0]=k+u*j[0]
l[1]=l[1]+u*j[1]}this.fG()
this.fH(!1)
if((this.b&32)!==0)this.dv(a)
if((this.b&64)!==0)this.dk(a)
if((this.b&128)!==0)this.du(a)
if((this.b&16)!==0)this.di(a)
if((this.b&8)!==0)this.dq(a)
if((this.c&1)!==0)this.dn(a)
if((this.b&256)!==0)this.dg(a)
this.dl(a)
this.dh(a)},
dl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(z=this.dx,y=0;y<this.z;++y)C.d.i(z,y,0)
for(x=0;x<this.r2;++x){w=this.ry
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
t=v.c
z.i(0,u,C.d.h(z,u).n(0,t))}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
z.i(0,u,C.d.h(z,u).n(0,t))
z.i(0,s,z.h(0,s).n(0,t))}if((this.b&64)!==0)for(y=0;y<this.z;++y){C.d.h(this.cx.a,y).W(0,64)
C.d.i(z,y,0)}w=this.b8
r=this.d
q=this.r
p=q*a.b
o=w*(r*(p*p))
for(y=0;y<this.z;++y)z.i(0,y,o*Math.max(0,Math.min(H.iV(C.d.h(z,y)),5)-1))
n=a.a/(this.d*q)
for(m=this.aR,w=m.a,r=this.x,l=1.777777*this.e*r*r,x=0;x<this.r2;++x){r=this.ry
if(x>=r.length)return H.b(r,x)
v=r[x]
u=v.a
s=v.b
t=v.c
k=v.e
j=v.d
r=this.cy.a
i=(r&&C.a).h(r,u)
h=C.k.p(n*t*k,C.d.h(z,u).n(0,o*t))
r=j.a
w[0]=h*r[0]
w[1]=h*r[1]
r=this.db.a
r=(r&&C.a).h(r,u).a
r[0]=r[0]-l*w[0]
r[1]=r[1]-l*w[1]
s.bC(m,i,!0)}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
j=v.e
g=C.d.h(z,u).n(0,z.h(0,s))
w=n*t
r=j.a
f=C.k.p(w,g)*r[0]
e=C.k.p(w,g)*r[1]
r=this.db.a
d=(r&&C.a).h(r,u)
r=this.db.a
c=(r&&C.a).h(r,s)
r=d.a
r[0]=r[0]-f
r[1]=r[1]-e
r=c.a
r[0]=r[0]+f
r[1]=r[1]+e}},
dh:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.b9
for(y=this.aR,x=y.a,w=this.x,v=1.777777*this.e*w*w,u=0;u<this.r2;++u){w=this.ry
if(u>=w.length)return H.b(w,u)
t=w[u]
s=t.a
r=t.b
q=t.c
p=t.e
o=t.d
w=this.cy.a
n=(w&&C.a).h(w,s)
w=n.a
m=w[0]
l=r.gby().gB()
k=C.b.G(m,l.gk(l))
w=w[1]
l=r.gby().gB()
j=C.b.G(w,l.gl(l))
l=this.db.a
i=(l&&C.a).h(l,s)
l=r.gb_().d7(0).p(0,j)
w=r.gb3()
w=l.n(0,w.gk(w))
l=i.a
h=w.G(0,l[0])
w=r.gb_().p(0,k)
m=r.gb3()
g=w.n(0,m.gl(m)).G(0,l[1])
m=o.a
f=h.p(0,m[0]).n(0,g.p(0,m[1]))
if(f.E(0,0)){w=z*q*p
x[0]=C.b.p(w,f)*m[0]
x[1]=C.b.p(w,f)*m[1]
l[0]=l[0]+v*x[0]
l[1]=l[1]+v*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.bC(y,n,!0)}}for(u=0;u<this.k3;++u){x=this.r1
if(u>=x.length)return H.b(x,u)
t=x[u]
s=t.a
r=t.b
q=t.d
o=t.e
x=this.db.a
i=(x&&C.a).h(x,s)
x=this.db.a
x=(x&&C.a).h(x,r).a
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
dw:function(a){var z,y,x
for(z=0;z<this.z;++z){C.d.h(this.cx.a,z).W(0,4)
y=this.db.a
x=y.length
if(z>=x)return H.b(y,z)
y=y[z].a
y[0]=0
y[1]=0}},
dm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
for(z=this.aE,y=this.aR,x=this.f6,w=this.f7,v=y.a,u=this.f8,t=u.a,s=t.a,u=u.b,r=this.f9,q=r.a.a,p=r.b;!1;z=z.aW()){z.gcm().W(0,2)
z.hj()
o=C.b.p(a.a,z.gb_())
w.a=Math.sin(o)
w.b=Math.cos(o)
G.U(w,z.ge5(),x)
n=z.gb3().gh3()
o=n.length
if(1>=o)return H.b(n,1)
v[1]=n[1]
v[0]=n[0]
y.F(0,a.a)
y.t(0,z.ge5())
y.w(x)
s[1]=v[1]
s[0]=v[0]
u.a=w.a
u.b=w.b
o=z.gbz()
m=z.gbz()
l=o.gfq()
k=m.gfq()
j=C.b.p(u.b,l.gB())
i=C.b.p(u.a,l.gc0())
k.sc0(C.b.p(u.a,l.gB())+C.b.p(u.b,l.gc0()))
k.sB(j-i)
G.dr(u,o.gV(),m.gV())
m.gV().t(0,t)
m=a.b
q[0]=m*s[0]
q[1]=m*s[1]
p.a=m*u.a
p.b=m*(u.b-1)
for(h=z.gb0();h.E(0,z.gb2());h=h.n(0,1)){o=this.cy.a
o=(o&&C.a).h(o,h)
m=this.db.a
G.n(r,o,(m&&C.a).h(m,h))}}},
di:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=a6.b*this.ba
for(y=0;y<this.y2;++y){x=C.d.h(this.ae,y)
x.gfc().W(0,16)
w=x.gar()
v=x.gas()
u=x.gbO()
t=x.ghf()
s=x.ghg()
r=x.ghh()
q=this.cy.a
p=(q&&C.a).h(q,w)
q=this.cy.a
o=(q&&C.a).h(q,v)
q=this.cy.a
n=(q&&C.a).h(q,u)
q=p.a
m=q[0]
l=o.a
k=l[0]
j=n.a
i=0.3333333333333333*(m+k+j[0])
h=0.3333333333333333*(q[1]+l[1]+j[1])
g=t.a0(p).n(0,s.a0(o)).n(0,r.a0(n))
f=t.v(p).n(0,s.v(o)).n(0,r.v(n))
e=Math.sqrt(C.c.d1(1,g.p(0,g).n(0,f.p(0,f))))
g=g.p(0,e)
f=f.p(0,e)
d=C.b.p(z,x.gdE())
c=f.p(0,t.gk(t)).G(0,g.p(0,t.gl(t)))
b=g.p(0,t.gk(t)).n(0,f.p(0,t.gl(t)))
a=f.p(0,s.gk(s)).G(0,g.p(0,s.gl(s)))
a0=g.p(0,s.gk(s)).n(0,f.p(0,s.gl(s)))
a1=f.p(0,r.gk(r)).G(0,g.p(0,r.gl(r)))
a2=g.p(0,r.gk(r)).n(0,f.p(0,r.gl(r)))
m=this.db.a
a3=(m&&C.a).h(m,w)
m=this.db.a
a4=(m&&C.a).h(m,v)
m=this.db.a
a5=(m&&C.a).h(m,u)
m=a3.a
m[0]=m[0]+C.b.p(d,c.G(0,q[0]-i))
m[1]=m[1]+C.b.p(d,b.G(0,q[1]-h))
q=a4.a
q[0]=q[0]+C.b.p(d,a.G(0,l[0]-i))
q[1]=q[1]+C.b.p(d,a0.G(0,l[1]-h))
l=a5.a
l[0]=l[0]+C.b.p(d,a1.G(0,j[0]-i))
l[1]=l[1]+C.b.p(d,a2.G(0,j[1]-h))}},
dq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.b*this.bJ
for(y=this.y1,x=0;x<this.x1;++x){w=C.d.h(y,x)
w.gfc().W(0,8)
v=w.gar()
u=w.gas()
t=this.cy.a
s=(t&&C.a).h(t,v)
t=this.cy.a
t=(t&&C.a).h(t,u).a
r=t[0]
q=s.a
p=r-q[0]
o=t[1]-q[1]
n=w.gh6()
m=Math.sqrt(p*p+o*o)
if(m===0)m=17976931348623157e292
l=C.b.p(z,w.gdE())
k=C.b.p(l,n.G(0,m))/m*p
j=C.b.p(l,n.G(0,m))/m*o
t=this.db.a
i=(t&&C.a).h(t,v)
t=this.db.a
h=(t&&C.a).h(t,u)
t=i.a
t[0]=t[0]-k
t[1]=t[1]-j
t=h.a
t[0]=t[0]+k
t[1]=t[1]+j}},
du:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
this.seB(this.bS(this.dy,V.ct(),E.a))
for(z=this.dx,y=0;y<this.z;++y){C.d.i(z,y,0)
x=this.dy
if(y>=x.length)return H.b(x,y)
x[y].H()}for(w=0;w<this.k3;++w){x=this.r1
if(w>=x.length)return H.b(x,w)
v=x[w]
if((v.c&128)!==0){u=v.a
t=v.b
s=v.d
r=v.e
z.i(0,u,C.d.h(z,u).n(0,s))
z.i(0,t,z.h(0,t).n(0,s))
x=this.dy
q=(x&&C.a).h(x,u)
x=this.dy
p=(x&&C.a).h(x,t)
o=(1-s)*s
x=q.a
n=r.a
x[0]=x[0]-o*n[0]
x[1]=x[1]-o*n[1]
x=p.a
x[0]=x[0]+o*n[0]
x[1]=x[1]+o*n[1]}}x=this.bL
n=this.r*a0.b
m=x*n
l=this.bM*n
for(w=0;w<this.k3;++w){x=this.r1
if(w>=x.length)return H.b(x,w)
v=x[w]
if((v.c&128)!==0){u=v.a
t=v.b
s=v.d
r=v.e
x=this.dy
q=(x&&C.a).h(x,u)
x=this.dy
p=(x&&C.a).h(x,t)
k=C.d.h(z,u).n(0,z.h(0,t))
x=p.a
n=x[0]
j=q.a
i=j[0]
x=x[1]
j=j[1]
h=C.k.p(m,k.G(0,2))
g=r.a
f=g[0]
g=g[1]
e=(h+l*((n-i)*f+(x-j)*g))*s
d=e*f
c=e*g
g=this.db.a
b=(g&&C.a).h(g,u)
g=this.db.a
a=(g&&C.a).h(g,t)
g=b.a
g[0]=g[0]-d
g[1]=g[1]-c
g=a.a
g[0]=g[0]+d
g[1]=g[1]+c}}},
dv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.bK
for(y=this.aR,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.b(u,v)
t=u[v]
s=t.a
C.d.h(this.cx.a,s).W(0,32)
r=t.b
q=t.c
p=t.e
u=this.cy.a
o=(u&&C.a).h(u,s)
u=this.db.a
n=(u&&C.a).h(u,s)
u=o.a
m=u[0]
l=r.gby().gB()
k=C.b.G(m,l.gk(l))
u=u[1]
l=r.gby().gB()
j=C.b.G(u,l.gl(l))
l=r.gb_().d7(0).p(0,j)
u=r.gb3()
u=l.n(0,u.gk(u))
l=n.a
i=u.G(0,l[0])
u=r.gb_().p(0,k)
m=r.gb3()
h=u.n(0,m.gl(m)).G(0,l[1])
m=z*p*q
x[0]=C.k.p(m,i)
x[1]=C.k.p(m,h)
l[0]=l[0]+w*x[0]
l[1]=l[1]+w*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.bC(y,o,!0)}for(v=0;v<this.k3;++v){x=this.r1
if(v>=x.length)return H.b(x,v)
t=x[v]
if((t.c&32)!==0){s=t.a
r=t.b
q=t.d
x=this.db.a
n=(x&&C.a).h(x,s)
x=this.db.a
x=(x&&C.a).h(x,r).a
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
dk:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.bb*(this.r*a.b)
for(y=this.aR,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.b(u,v)
t=u[v]
s=t.a
C.d.h(this.cx.a,s).W(0,64)
r=t.c
if(r>0.25){q=t.b
p=t.e
u=this.cy.a
o=(u&&C.a).h(u,s)
n=t.d
u=this.db.a
m=(u&&C.a).h(u,s)
l=z*p*(r-0.25)
u=n.a
x[0]=l*u[0]
x[1]=l*u[1]
u=m.a
u[0]=u[0]-w*x[0]
u[1]=u[1]-w*x[1]
q.bC(y,o,!0)}}for(v=0;v<this.k3;++v){x=this.r1
if(v>=x.length)return H.b(x,v)
t=x[v]
if((t.c&64)!==0){r=t.d
if(r>0.25){s=t.a
q=t.b
n=t.e
x=this.db.a
m=(x&&C.a).h(x,s)
x=this.db.a
k=(x&&C.a).h(x,q)
l=this.bb*(r-0.25)
x=n.a
j=l*x[0]
i=l*x[1]
x=m.a
x[0]=x[0]-j
x[1]=x[1]-i
x=k.a
x[0]=x[0]+j
x[1]=x[1]+i}}}},
dn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.fr
if(z==null)z=new Float64Array(this.Q)
this.fr=z
y=a.b*this.bc
for(x=this.fy,w=0;w<this.k3;++w){v=this.r1
if(w>=v.length)return H.b(v,w)
u=v[w]
t=u.a
s=u.b
C.d.h(x,t)
x.h(0,s)
r=u.d
q=u.e
v=this.fr
v=(v&&C.l).h(v,t)
p=this.fr
p=(p&&C.l).h(p,s)
o=this.db.a
n=(o&&C.a).h(o,t)
o=this.db.a
m=(o&&C.a).h(o,s)
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
dg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.fx
z.scJ(0,this.bS(z.a,V.em(),V.ac))
y=C.b.T(256*this.bd)
for(x=0;x<this.k3;++x){z=this.r1
if(x>=z.length)return H.b(z,x)
w=z[x]
v=w.a
u=w.b
C.d.h(this.cx.a,v).W(0,C.d.h(this.cx.a,u)).W(0,256)
z=this.fx.a
t=(z&&C.a).h(z,v)
z=this.fx.a
z=(z&&C.a).h(z,u).a
s=z[0]
r=t.a
q=C.c.aO(C.c.T(y*(s-r[0])),8)
p=C.c.aO(C.c.T(y*(z[1]-r[1])),8)
o=C.c.aO(C.c.T(y*(z[2]-r[2])),8)
n=C.c.aO(C.c.T(y*(z[3]-r[3])),8)
r[0]=r[0]+q
r[1]=r[1]+p
r[2]=r[2]+o
r[3]=r[3]+n
z[0]=z[0]-q
z[1]=z[1]-p
z[2]=z[2]-o
z[3]=z[3]-n}},
dz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=P.ar(this.z,0,!1,P.u)
for(y=this.af,x=0;x<this.z;++x){w=C.d.h(this.cx.a,x)
w.W(0,2)
v=y.c_()
w.W(0,512)
v.fU(x)
C.a.i(z,x,-1)}for(y=this.k2,u=0;t=this.id,u<t;++u){s=C.d.h(y,u)
s.sbN(0,C.a.h(z,s.gbN(s)))}for(x=0;x<t;++x)if(V.he(C.d.h(y,x))){--t
r=y.h(0,t)
y.i(0,t,y.h(0,x))
y.i(0,x,r);--x}this.id=t
for(u=0;t=this.k3,u<t;++u){y=this.r1
if(u>=y.length)return H.b(y,u)
q=y[u]
q.a=H.j(C.a.h(z,q.a))
q.b=H.j(C.a.h(z,q.b))}for(x=0;x<t;++x){y=this.r1
p=y.length
if(x<0||x>=p)return H.b(y,x)
o=y[x]
n=o.a
if(typeof n!=="number")return n.E()
if(n>=0){n=o.b
if(typeof n!=="number")return n.E()
n=n<0}else n=!0
if(n){--t
if(t<0||t>=p)return H.b(y,t)
r=y[t];(y&&C.a).i(y,t,o)
y=this.r1;(y&&C.a).i(y,x,r);--x}}this.k3=t
for(u=0;t=this.r2,u<t;++u){y=this.ry
if(u>=y.length)return H.b(y,u)
q=y[u]
q.a=H.j(C.a.h(z,q.a))}for(x=0;x<t;++x){y=this.ry
p=y.length
if(x<0||x>=p)return H.b(y,x)
o=y[x]
n=o.a
if(typeof n!=="number")return n.E()
if(n<0){--t
if(t<0||t>=p)return H.b(y,t)
r=y[t];(y&&C.a).i(y,t,o)
y=this.ry;(y&&C.a).i(y,x,r);--x}}this.r2=t
for(y=this.y1,u=0;t=this.x1,u<t;++u){m=C.d.h(y,u)
m.sar(C.a.h(z,m.gar()))
m.sas(C.a.h(z,m.gas()))}for(x=0;x<t;++x){p=C.d.h(y,x)
if(p.gar().E(0,0)||p.gas().E(0,0)){--t
r=y.h(0,t)
y.i(0,t,y.h(0,x))
y.i(0,x,r);--x}}this.x1=t
for(u=0;t=this.y2,u<t;++u){l=C.d.h(this.ae,u)
l.sar(C.a.h(z,l.gar()))
l.sas(C.a.h(z,l.gas()))
l.sbO(C.a.h(z,l.gbO()))}for(x=0;x<t;++x){y=C.d.h(this.ae,x)
if(y.gar().E(0,0)||y.gas().E(0,0)||y.gbO().E(0,0)){--t
r=C.d.h(this.ae,t)
y=this.ae
y.i(0,t,C.d.h(y,x))
C.d.i(this.ae,x,r);--x}}this.y2=t
for(k=this.aE;!1;k=k.aW()){for(x=k.gb0(),j=0,i=0,h=!1;x.E(0,k.gb2());x=x.n(0,1)){t=C.a.h(z,x)
if(typeof t!=="number")return t.fM()
if(t>=0){j=Math.min(j,t)
i=Math.max(i,t+1)}else h=!0}if(j<i){k.sb0(j)
k.sb2(i)
if(h){k.gcm().W(0,2)
k.seA(!0)}}else{k.sb0(0)
k.sb2(0)
if(k.gh_())k.sez(!0)}}this.z=0
for(k=this.aE;!1;k=g){g=k.aW()
if(k.gez())this.eX(k)
else k.geA()}},
d5:function(){var z=this.fx
z.scJ(0,this.bS(z.a,z.b,V.ac))
return this.fx.a},
q:{
hf:function(a,b,c){return a.n(0,c<<19>>>0).n(0,b<<7>>>0)},
k5:[function(){return new E.a(new Float64Array(2))},"$0","ct",0,0,22],
k3:[function(){return new P.c()},"$0","iU",0,0,23],
k4:[function(){var z=new Int8Array(4)
z[0]=127
z[1]=127
z[2]=127
z[3]=50
return new V.ac(z)},"$0","em",0,0,24]}},
dX:{"^":"c;a",
d2:function(a){var z=this.a
if(!z.cF(a))z.i(0,a,this.bY(a))
return z.h(0,a)},
bY:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[E.a])
for(z=y.length,x=0;x<z;++x)C.a.i(y,x,new E.a(new Float64Array(2)))
return y}},
h9:{"^":"S;a,b,c,d",
R:function(){return new E.a(new Float64Array(2))},
$asS:function(){return[E.a]}},
ha:{"^":"S;a,b,c,d",
R:function(){return new E.ax(new Float64Array(3))},
$asS:function(){return[E.ax]}},
h6:{"^":"S;a,b,c,d",
R:function(){return new E.af(new Float64Array(4))},
$asS:function(){return[E.af]}},
h7:{"^":"S;a,b,c,d",
R:function(){return new E.aZ(new Float64Array(9))},
$asS:function(){return[E.aZ]}},
h5:{"^":"S;a,b,c,d",
R:function(){var z=new Float64Array(2)
return new V.N(new E.a(z),new E.a(new Float64Array(2)))},
$asS:function(){return[V.N]}},
h8:{"^":"S;a,b,c,d",
R:function(){return new G.x(0,1)},
$asS:function(){return[G.x]}},
w:{"^":"Z;$ti"},
fY:{"^":"w;d,0a,0b,0c",
R:function(){return new V.b0(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.b0]},
$asw:function(){return[V.b0]},
$asZ:function(){return[V.b0]}},
fU:{"^":"w;d,0a,0b,0c",
R:function(){return new V.aM(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aM]},
$asw:function(){return[V.aM]},
$asZ:function(){return[V.aM]}},
fX:{"^":"w;d,0a,0b,0c",
R:function(){return new V.b_(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.b_]},
$asw:function(){return[V.b_]},
$asZ:function(){return[V.b_]}},
fV:{"^":"w;d,0a,0b,0c",
R:function(){return new V.aP(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aP]},
$asw:function(){return[V.aP]},
$asZ:function(){return[V.aP]}},
fW:{"^":"w;d,0a,0b,0c",
R:function(){return new V.aQ(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aQ]},
$asw:function(){return[V.aQ]},
$asZ:function(){return[V.aQ]}},
fS:{"^":"w;d,0a,0b,0c",
R:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.aR(new E.a(z),new E.a(y),new E.a(x),new E.a(w),!1,!1,new E.a(new Float64Array(2)),C.o,0)
z.b=0.01
return new V.aK(z,0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aK]},
$asw:function(){return[V.aK]},
$asZ:function(){return[V.aK]}},
fT:{"^":"w;d,0a,0b,0c",
R:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.aR(new E.a(z),new E.a(y),new E.a(x),new E.a(w),!1,!1,new E.a(new Float64Array(2)),C.o,0)
z.b=0.01
return new V.aL(z,0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aL]},
$asw:function(){return[V.aL]},
$asZ:function(){return[V.aL]}},
fa:{"^":"c;a,b,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,fy",
sen:function(a){this.Q=H.i(a,"$isw",[V.b0],"$asw")},
se4:function(a){this.ch=H.i(a,"$isw",[V.aM],"$asw")},
sec:function(a){this.cx=H.i(a,"$isw",[V.b_],"$asw")},
see:function(a){this.cy=H.i(a,"$isw",[V.aP],"$asw")},
sei:function(a){this.db=H.i(a,"$isw",[V.aQ],"$asw")},
se6:function(a){this.dx=H.i(a,"$isw",[V.aK],"$asw")},
se7:function(a){this.dy=H.i(a,"$isw",[V.aL],"$asw")},
$isjO:1,
q:{
fb:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=P.u
y=P.bg(null,null,null,z,P.d5)
x=P.bg(null,null,null,z,[P.d,P.u])
w=P.bg(null,null,null,z,[P.d,E.a])
v=E.a
u=new Array(a6)
u.fixed$length=Array
t=[v]
u=H.f(u,t)
s=new Array(a7)
s.fixed$length=Array
t=new V.h9(u,0,a6,H.f(s,t))
t.ay(a6,a7,v)
v=E.ax
s=new Array(a6)
s.fixed$length=Array
u=[v]
s=H.f(s,u)
r=new Array(a7)
r.fixed$length=Array
u=new V.ha(s,0,a6,H.f(r,u))
u.ay(a6,a7,v)
v=E.af
r=new Array(a6)
r.fixed$length=Array
s=[v]
r=H.f(r,s)
q=new Array(a7)
q.fixed$length=Array
s=new V.h6(r,0,a6,H.f(q,s))
s.ay(a6,a7,v)
v=V.N
q=new Array(a6)
q.fixed$length=Array
r=[v]
q=H.f(q,r)
p=new Array(a7)
p.fixed$length=Array
r=new V.h5(q,0,a6,H.f(p,r))
r.ay(a6,a7,v)
v=G.x
p=new Array(a6)
p.fixed$length=Array
q=[v]
p=H.f(p,q)
o=new Array(a7)
o.fixed$length=Array
q=new V.h8(p,0,a6,H.f(o,q))
q.ay(a6,a7,v)
v=E.aZ
o=new Array(a6)
o.fixed$length=Array
p=[v]
o=H.f(o,p)
n=new Array(a7)
n.fixed$length=Array
p=new V.h7(o,0,a6,H.f(n,p))
p.ay(a6,a7,v)
v=new Float64Array(2)
o=new Float64Array(2)
v=new V.bK(new E.a(v),new E.a(o),new E.a(new Float64Array(2)),0,0,0)
o=new Float64Array(2)
n=new Float64Array(2)
o=new V.bK(new E.a(o),new E.a(n),new E.a(new Float64Array(2)),0,0,0)
n=new Float64Array(2)
m=new Float64Array(2)
n=new V.bK(new E.a(n),new E.a(m),new E.a(new Float64Array(2)),0,0,0)
m=new Array(3)
m.fixed$length=Array
m=H.f(m,[V.bK])
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
C.a.i(m,0,v)
C.a.i(m,1,o)
C.a.i(m,2,n)
b=P.ar(3,0,!1,z)
a=P.ar(3,0,!1,z)
a0=new Float64Array(2)
a1=new Float64Array(2)
a2=new Float64Array(2)
y=new V.fa(t,u,s,p,r,q,y,x,w,new V.fg(new V.it(v,o,n,m,0,new E.a(l),new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),new E.a(e),new E.a(d),new E.a(c)),b,a,new E.a(a0),new E.a(a1),new E.a(a2),new E.a(new Float64Array(2))))
x=new V.fY(y)
x.am(10,V.b0)
y.sen(x)
x=new V.fU(y)
x.am(10,V.aM)
y.se4(x)
x=new V.fX(y)
x.am(10,V.b_)
y.sec(x)
x=new V.fV(y)
x.am(10,V.aP)
y.see(x)
x=new V.fW(y)
x.am(10,V.aQ)
y.sei(x)
x=new V.fS(y)
x.am(10,V.aK)
y.se6(x)
x=new V.fT(y)
x.am(10,V.aL)
y.se7(x)
x=V.aO()
w=V.aO()
v=new Float64Array(2)
u=new Float64Array(2)
t=V.du()
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=new Float64Array(2)
m=new Array(2)
m.fixed$length=Array
l=[V.O]
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
a1=V.fp()
a2=new Float64Array(2)
C.a.i(m,0,new V.O(new E.a(a2),new V.Q(new Int8Array(4))))
a2=new Float64Array(2)
C.a.i(m,1,new V.O(new E.a(a2),new V.Q(new Int8Array(4))))
a2=new Float64Array(2)
C.a.i(e,0,new V.O(new E.a(a2),new V.Q(new Int8Array(4))))
a2=new Float64Array(2)
C.a.i(e,1,new V.O(new E.a(a2),new V.Q(new Int8Array(4))))
a2=new Float64Array(2)
C.a.i(l,0,new V.O(new E.a(a2),new V.Q(new Int8Array(4))))
a2=new Float64Array(2)
C.a.i(l,1,new V.O(new E.a(a2),new V.Q(new Int8Array(4))))
y.fr=new V.f0(y,new V.cT(x,w,new G.B(new E.a(v),new G.x(0,1)),new G.B(new E.a(u),new G.x(0,1)),!1),t,new V.cU(new E.a(s),new E.a(r),0,0),new E.a(q),new G.B(new E.a(p),new G.x(0,1)),new E.a(o),new E.a(n),new V.e4(0,0),new V.e4(0,0),m,new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),e,l,new E.a(d),new E.a(c),new V.Q(b),new E.a(a),new E.a(a0),a1)
x=V.du()
w=V.aO()
v=V.aO()
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
z=P.ar(2,0,!1,z)
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=new Float64Array(2)
a4=new Float64Array(2)
a5=new Float64Array(2)
y.fx=new V.hK(x,new V.cT(w,v,new G.B(new E.a(u),new G.x(0,1)),new G.B(new E.a(t),new G.x(0,1)),!1),new G.B(new E.a(s),new G.x(0,1)),new G.B(new E.a(r),new G.x(0,1)),new V.cU(new E.a(q),new E.a(p),0,0),new V.ht(new E.a(o),new E.a(n),new E.a(m),new E.a(l),new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),new E.a(e),new E.a(d),new G.B(new E.a(c),new G.x(0,1)),new G.B(new E.a(b),new G.x(0,1)),new E.a(a),new E.a(a0)),z,new G.av(new E.a(a1),new E.a(a2),new E.a(a3),0,0,0),new G.av(new E.a(a4),new E.a(a5),new E.a(new Float64Array(2)),0,0,0),y)
y.z=y
return y}}},
Z:{"^":"c;0a,$ti",
scu:function(a){this.a=H.i(a,"$isd",[H.al(this,"Z",0)],"$asd")},
am:function(a,b){this.b=0
this.scu(null)
this.b=0
this.c=0
this.cK(a)},
cK:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[H.al(this,"Z",0)])
z=this.a
if(z!=null)C.a.Y(y,0,this.c,z,0)
for(z=y.length,x=0;x<z;++x)C.a.i(y,x,this.R())
this.scu(y)
this.c=z},
aF:function(){var z,y
z=this.b
y=this.c
if(z>=y)this.cK(y*2)
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.b(z,y)
return z[y]},
$isY:1},
S:{"^":"c;$ti",
ay:function(a,b,c){var z,y
for(z=this.a,y=0;y<a;++y)C.a.i(z,y,this.R())},
aF:function(){var z,y
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.b(z,y)
return z[y]}}}],["","",,F,{"^":"",
ex:function(a,b,c,d){var z
H.i(a,"$isd",[d],"$asd")
P.dp(b,c,a.length,null,null,null)
z=P.fL(H.ch(a,b,c,H.l(a,0)),!0,d)
H.hA(z,J.iH(),H.l(z,0))
C.a.aK(a,b,c,z)}}],["","",,N,{"^":"",eT:{"^":"f7;c,a,b",
b6:function(a,b,c){var z,y,x,w,v
H.i(a,"$isd",[E.a],"$asd")
this.b7(c)
for(z=J.a1(a),y=this.b,x=0;x<b;++x){w=z.h(a,x)
v=z.h(a,x)
y.aI(H.k(w,"$isa"),H.k(v,"$isa"))}y=this.c
y.beginPath()
C.j.cV(y,J.bb(z.h(a,0)),J.bc(z.h(a,0)))
for(x=1;x<b;++x)C.j.bQ(y,J.bb(z.h(a,x)),J.bc(z.h(a,x)))
C.j.bQ(y,J.bb(z.h(a,0)),J.bc(z.h(a,0)))
y.closePath()},
Z:function(a,b,c){var z,y
this.b7(c)
z=this.b
z.aI(a,a)
z.aI(b,b)
z=this.c
z.beginPath()
y=a.a
C.j.cV(z,y[0],y[1])
y=b.a
C.j.bQ(z,y[0],y[1])
z.closePath()
z.stroke()},
f_:function(a,b,c,d){this.b5(a,b*this.b.c,c)
this.c.stroke()},
eZ:function(a,b,c){return this.f_(a,b,c,null)},
b5:function(a,b,c){var z,y
this.b7(c)
this.b.aI(a,a)
z=this.c
z.beginPath()
y=a.a
z.arc(y[0],y[1],b,0,6.283185307179586,!0)
z.closePath()},
b7:function(a){var z,y,x,w
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
f1:function(a,b,c,d){H.i(a,"$isd",[E.a],"$asd")
H.i(c,"$isd",[V.ac],"$asd")
throw H.h("Unimplemented")},
f2:function(a,b,c,d){H.i(a,"$isd",[E.a],"$asd")
H.i(c,"$isd",[V.ac],"$asd")
throw H.h("Unimplemented")}}}],["","",,G,{"^":"",bw:{"^":"c;k:a>,l:b>,c",
a5:function(a,b,c){this.a=C.c.T(C.b.ag(a*255))
this.b=C.c.T(C.b.ag(b*255))
this.c=C.c.T(C.b.ag(c*255))}},x:{"^":"c;a,B:b<",
aX:function(a){this.a=Math.sin(a)
this.b=Math.cos(a)
return this},
m:function(a){return"Rot(s:"+H.e(this.a)+", c:"+H.e(this.b)+")"},
q:{
dr:function(a,b,c){var z,y,x,w
z=a.a
y=b.a
x=y[0]
w=a.b
y=y[1]
c.sk(0,w*x-z*y)
c.sl(0,z*x+w*y)},
U:function(a,b,c){var z,y
z=a.b
y=b.a
c.sk(0,z*y[0]-a.a*y[1])
c.sl(0,a.a*y[0]+a.b*y[1])},
au:function(a,b,c){var z,y
z=a.b
y=b.a
c.sk(0,z*y[0]+a.a*y[1])
c.sl(0,-a.a*y[0]+a.b*y[1])}}},av:{"^":"c;a,b,B:c<,d,D:e<,f",
sD:function(a){this.e=H.b8(a)},
m:function(a){return"Sweep:\nlocalCenter: "+this.a.m(0)+"\n"+("c0: "+this.b.m(0)+", c: "+this.c.m(0)+"\n")+("a0: "+H.e(this.d)+", a: "+H.e(this.e)+"\n")+("alpha0: "+H.e(this.f))},
S:function(){var z=6.283185307179586*C.k.ag(this.d/6.283185307179586)
this.d-=z
this.e-=z},
C:function(a){this.a.j(a.a)
this.b.j(a.b)
this.c.j(a.c)
this.d=a.d
this.e=a.e
this.f=a.f
return this},
aa:function(a,b){var z,y,x,w
z=a.a
y=1-b
x=this.b.a
w=this.c.a
z.sk(0,y*x[0]+b*w[0])
z.sl(0,y*x[1]+b*w[1])
w=a.b
w.aX(y*this.d+b*this.e)
y=z.a
x=this.a.a
z.sk(0,y[0]-(w.b*x[0]-w.a*x[1]))
z.sl(0,y[1]-(w.a*x[0]+w.b*x[1]))},
ap:function(a){var z,y,x,w,v
z=this.f
y=(a-z)/(1-z)
z=this.b
x=z.a
w=x[0]
v=this.c.a
z.sk(0,w+y*(v[0]-w))
x=x[1]
z.sl(0,x+y*(v[1]-x))
x=this.d
this.d=x+y*(this.e-x)
this.f=a}},ci:{"^":"c;a"},B:{"^":"c;a,b",
m:function(a){return"XForm:\n"+("Position: "+this.a.m(0)+"\n")+("R: \t"+this.b.m(0)+"\n")},
q:{
aw:function(a,b,c){var z,y,x,w,v,u
H.k(b,"$isa")
H.k(c,"$isa")
z=a.b
y=z.a
x=b.a
w=x[0]
z=z.b
x=x[1]
v=a.a.a
u=v[1]
c.sk(0,z*w-y*x+v[0])
c.sl(0,y*w+z*x+u)},
n:function(a,b,c){var z,y,x,w
H.k(b,"$isa")
H.k(c,"$isa")
z=a.b
y=z.b
x=b.a
w=a.a.a
c.sk(0,y*x[0]-z.a*x[1]+w[0])
c.sl(0,z.a*x[0]+z.b*x[1]+w[1])},
dK:function(a,b,c){var z,y,x,w
z=b.a
y=a.a.a
x=z[0]-y[0]
w=z[1]-y[1]
y=a.b
c.sk(0,y.b*x+y.a*w)
c.sl(0,-y.a*x+y.b*w)},
dJ:function(a,b,c){var z,y,x,w,v,u,t
z=a.b
y=b.b
x=c.b
w=z.b
v=y.a
u=z.a
t=y.b
x.a=w*v-u*t
x.b=w*t+z.a*y.a
y=$.$get$cj()
y.j(b.a)
y.w(a.a)
G.au(z,$.$get$cj(),c.a)}}},hT:{"^":"c;",
aI:function(a,b){var z,y,x,w,v,u,t,s
z=a.a
y=z[0]
x=this.c
w=this.b
v=w.a
u=v[0]
v=v[1]
z=z[1]
t=new Float64Array(2)
s=new E.a(t)
s.j(w)
s.w(this.d)
b.A(y*x+u+t[0],v-z*x+-t[1])}}}],["","",,X,{"^":"",eU:{"^":"hT;0a,b,c,d"}}],["","",,A,{"^":"",
bP:function(a){var z,y
z=C.l.fd(H.i(a,"$isv",[P.c],"$asv"),0,new A.j2(),P.u)
if(typeof z!=="number")return H.G(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
j2:{"^":"r:18;",
$2:function(a,b){var z,y
H.j(a)
z=J.aG(b)
if(typeof a!=="number")return a.n()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,E,{"^":"",af:{"^":"c;a",
j:function(a){var z,y
z=H.k(a,"$isaf").a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
m:function(a){return"[0] "+this.au(0).m(0)+"\n[1] "+this.au(1).m(0)+"\n"},
i:function(a,b,c){C.l.i(this.a,b,c)},
a4:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.af){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gO:function(a){return A.bP(this.a)},
au:function(a){var z,y,x
z=new Float64Array(2)
y=this.a
if(a>=4)return H.b(y,a)
z[0]=y[a]
x=2+a
if(x>=4)return H.b(y,x)
z[1]=y[x]
return new E.a(z)},
n:function(a,b){var z,y,x
z=new Float64Array(4)
y=new E.af(z)
y.j(this)
x=b.gh1()
z[0]=C.b.n(z[0],x.h(0,0))
z[1]=C.b.n(z[1],x.h(0,1))
z[2]=C.b.n(z[2],x.h(0,2))
z[3]=C.b.n(z[3],x.h(0,3))
return y},
H:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
fi:function(){var z,y,x,w,v,u,t
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
return u}},aZ:{"^":"c;a",
j:function(a){var z,y
z=H.k(a,"$isaZ").a
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
m:function(a){return"[0] "+this.au(0).m(0)+"\n[1] "+this.au(1).m(0)+"\n[2] "+this.au(2).m(0)+"\n"},
i:function(a,b,c){C.l.i(this.a,b,c)},
a4:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.aZ){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gO:function(a){return A.bP(this.a)},
au:function(a){var z,y,x
z=new Float64Array(3)
y=this.a
if(a>=9)return H.b(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.b(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.b(y,x)
z[2]=y[x]
return new E.ax(z)},
n:function(a,b){var z,y,x
z=new Float64Array(9)
y=new E.aZ(z)
y.j(this)
x=b.gh2()
z[0]=C.b.n(z[0],x.h(0,0))
z[1]=C.b.n(z[1],x.h(0,1))
z[2]=C.b.n(z[2],x.h(0,2))
z[3]=C.b.n(z[3],x.h(0,3))
z[4]=C.b.n(z[4],x.h(0,4))
z[5]=C.b.n(z[5],x.h(0,5))
z[6]=C.b.n(z[6],x.h(0,6))
z[7]=C.b.n(z[7],x.h(0,7))
z[8]=C.b.n(z[8],x.h(0,8))
return y},
H:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=0
z[6]=0
z[7]=0
z[8]=0}},a:{"^":"c;a",
A:function(a,b){var z=this.a
z[0]=a
z[1]=b},
H:function(){var z=this.a
z[0]=0
z[1]=0},
j:function(a){var z,y
z=H.k(a,"$isa").a
y=this.a
y[1]=z[1]
y[0]=z[0]},
m:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
a4:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.a){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gO:function(a){return A.bP(this.a)},
n:function(a,b){var z=new E.a(new Float64Array(2))
z.j(this)
z.t(0,b)
return z},
i:function(a,b,c){C.l.i(this.a,b,c)},
gu:function(a){return Math.sqrt(this.gaS())},
gaS:function(){var z,y
z=this.a
y=z[0]
z=z[1]
return y*y+z*z},
S:function(){var z,y,x
z=Math.sqrt(this.gaS())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
return z},
bG:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=a.a
w=y-x[0]
v=z[1]-x[1]
return w*w+v*v},
v:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]},
a0:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[1]-y[1]*z[0]},
aJ:function(a,b){var z=this.a
b.A(-a*z[1],a*z[0])
return b},
t:function(a,b){var z,y
z=H.k(b,"$isa").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]},
w:function(a){var z,y
z=H.k(a,"$isa").a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
F:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
L:function(){var z=this.a
z[1]=-z[1]
z[0]=-z[0]},
sk:function(a,b){this.a[0]=b
return b},
sl:function(a,b){this.a[1]=b
return b},
gk:function(a){return this.a[0]},
gl:function(a){return this.a[1]},
q:{
dY:function(){return new E.a(new Float64Array(2))}}},ax:{"^":"c;a",
H:function(){var z=this.a
z[2]=0
z[1]=0
z[0]=0},
j:function(a){var z,y
z=H.k(a,"$isax").a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
m:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
a4:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.ax){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gO:function(a){return A.bP(this.a)},
n:function(a,b){var z,y,x
z=new Float64Array(3)
y=new E.ax(z)
y.j(this)
x=b.gh4()
z[0]=C.b.n(z[0],x.h(0,0))
z[1]=C.b.n(z[1],x.h(0,1))
z[2]=C.b.n(z[2],x.h(0,2))
return y},
i:function(a,b,c){C.l.i(this.a,b,c)},
gu:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gk:function(a){return this.a[0]},
gl:function(a){return this.a[1]}}}],["","",,S,{"^":"",
et:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2
z=[V.aI]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.A(0,-10)
w=V.fb(100,10)
v=V.f9(V.fn())
u=V.i0(4,4)
t=new P.bI(0,0)
if($.F==null){H.bF()
$.F=$.at}t.aY(0)
s=new P.bI(0,0)
if($.F==null){H.bF()
$.F=$.at}s.aY(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.u
n=[P.d,E.a]
m=P.bg(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.bz()
f=V.bz()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.bI(0,0)
if($.F==null){H.bF()
$.F=$.at}b.aY(0)
a=V.bz()
a0=V.bz()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.aO()
a4=V.aO()
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
b9=C.c.T(C.c.ag(102))
c0=C.c.T(C.c.ag(102))
c1=C.c.T(C.c.ag(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.bg(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.j(x)
c6=new V.hW(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.dG(0,0,0,0,0,!1),new G.ci(t),new G.ci(s),new G.bw(0,0,0),new G.B(new E.a(r),new G.x(0,1)),new E.a(q),new E.a(p),new V.dX(m),new V.hZ(),new V.i_(new V.dq(new E.a(l),0),new E.a(k),new E.a(j)),new V.ce(new E.a(i),new E.a(h),0),new V.d6(0,0,0,0,0,0,g,new V.dv(),new V.bA(0),f,new V.bA(0),new V.cP(e,d,0)),c,new G.ci(b),new V.d6(0,0,0,0,0,0,a,new V.dv(),new V.bA(0),a0,new V.bA(0),new V.cP(a1,a2,0)),new V.hE(a3,a4,new G.av(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.av(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.hF(C.L,0),new V.dG(0,0,0,0,0,!1),z,new G.av(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.av(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.bw(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.dX(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.f3(0,c6)
n.d=new V.f2()
n.a=v
c6.b=n
c6.fr=new V.hm(new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.hd(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.N(new E.a(z),new E.a(x)),new V.ff(!1,0),new V.N(new E.a(v),new E.a(u)),new E.a(t),new G.B(new E.a(s),new G.x(0,1)),new G.B(new E.a(r),new G.x(0,1)),new V.f5(),new V.hc(0,new E.a(q),new E.a(p)),new V.hR(new E.a(o)),new V.hx(new V.ce(new E.a(n),new E.a(m),0),new V.dq(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.x(0,1),new G.B(new E.a(h),new G.x(0,1)),new G.B(new E.a(new Float64Array(2)),new G.x(0,1)),new V.h0(0,0,0))
z.b8=0.05
z.b9=1
z.ba=0.25
z.bJ=0.25
z.bK=0.25
z.bL=0.1
z.bM=0.2
z.bb=0.5
z.bc=0.5
z.bd=0.5
z.cx=new V.hb()
x=[E.a]
z.sfo(new V.T(V.ct(),0,x))
z.sfJ(new V.T(V.ct(),0,x))
z.seN(new V.T(V.em(),0,[V.ac]))
z.sfI(new V.T(V.iU(),0,[P.c]))
c6.fx=z
c6.an(w.ch,C.m,C.m)
c6.an(w.cx,C.i,C.m)
c6.an(w.Q,C.i,C.i)
c6.an(w.cy,C.o,C.m)
c6.an(w.db,C.o,C.i)
c6.an(w.dx,C.x,C.m)
c6.an(w.dy,C.x,C.i)
w=new P.bI(0,0)
if($.F==null){H.bF()
$.F=$.at}w.aY(0)
c7=new S.eS(y,c6,w,10)
J.bV(C.u.bR(document,"#title"),"Box test")
c8=V.cc()
z=new E.a(new Float64Array(2))
x=new Float64Array(2)
z.A(0,0)
c9=c6.cG(new V.cJ(C.e,z,0,new E.a(x),0,0,0,!0,!0,!1,!1,!0,1))
c8.d9(50,0.4)
c9.bE(c8)
z=new E.a(new Float64Array(2))
z.A(-10,0)
c8.bi(0.4,50,z,0)
c9.bE(c8)
z=new E.a(new Float64Array(2))
z.A(10,0)
c8.bi(0.4,50,z,0)
c9.bE(c8)
C.a.t(y,c9)
c8=V.cc()
c8.bi(3,1.5,new E.a(new Float64Array(2)),1.5707963267948966)
d0=new V.d4(0.2,0,0,!1,new V.c4(1,65535,0))
d0.d=0.5
d0.e=0.05
d0.a=c8
z=new Float64Array(2)
d1=new V.cJ(C.e,new E.a(z),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
d1.a=C.f
z=new E.a(new Float64Array(2))
z.A(0,30)
d1.c=z
d2=c6.cG(d1)
d2.cH(d0)
C.a.t(y,d2)
c7.fg()
C.P.cZ(window,c7.gc7(c7))},
eS:{"^":"fc;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch"}},1],["","",,Q,{"^":"",fc:{"^":"c;",
fY:[function(a,b){var z,y,x,w,v,u,t,s
H.ba(b)
z=this.c
z.aj(0)
y=this.b
x=y.id.a
x.aj(0)
w=y.k1.a
w.aj(0)
v=y.a
if((v&1)===1){v=y.b
v.a.bU(v)
v=y.a&=4294967294}y.a=v|2
v=y.go
v.a=0.016666666666666666
v.d=10
v.e=10
v.b=60
v.c=y.cx*0.016666666666666666
v.f=y.cy
u=y.fr.b
t=w.gad()
s=$.F
if(typeof s!=="number")return H.G(s)
u.a3(C.c.a6(t*1000,s))
w.aj(0)
y.b.eJ()
s=y.fr.c
t=w.gad()
u=$.F
if(typeof u!=="number")return H.G(u)
s.a3(C.c.a6(t*1000,u))
if(y.dy&&v.a>0){w.aj(0)
y.fx.bl(v)
u=y.fr.d
t=w.gad()
s=$.F
if(typeof s!=="number")return H.G(s)
u.a3(C.c.a6(t*1000,s))
w.aj(0)
y.bl(v)
s=y.fr.e
t=w.gad()
u=$.F
if(typeof u!=="number")return H.G(u)
s.a3(C.c.a6(t*1000,u))}if(y.db&&v.a>0){w.aj(0)
y.dr(v)
u=y.fr.z
w=w.gad()
t=$.F
if(typeof t!=="number")return H.G(t)
u.a3(C.c.a6(w*1000,t))}if(v.a>0)y.cx=v.b
if((y.a&4)===4)y.eG()
y.a&=4294967293
w=y.fr.a
x=x.gad()
v=$.F
if(typeof v!=="number")return H.G(v)
w.a3(C.c.a6(x*1000,v))
z=z.gad()
v=$.F
if(typeof v!=="number")return H.G(v)
this.Q=C.c.a6(z*1e6,v)
v=this.f;(v&&C.j).eH(v,0,0,900,600)
y.f0()
y=this.y
if(typeof y!=="number")return y.n()
this.y=y+1
C.P.cZ(window,this.gc7(this))},"$1","gc7",5,0,19],
fg:function(){var z,y,x,w
z=H.H(H.k(W.i9("canvas",null),"$isX"),"$iscM")
z.width=900
z.height=600
this.e=z
y=document
x=y.body;(x&&C.q).ac(x,z)
z=this.e
z.toString
this.f=z.getContext("2d")
w=new E.a(new Float64Array(2))
w.A(450,300)
z=new E.a(new Float64Array(2))
z.j(w)
x=new E.a(new Float64Array(2))
x.j(w)
x=new X.eU(z,20,x)
x.a=!0
x.c=this.d
this.r=x
x=new N.eT(this.f,2,x)
this.x=x
this.b.Q=x
this.y=0
this.z=C.u.bR(y,"#fps-counter")
this.ch=C.u.bR(y,"#world-step-time")
P.dH(P.cY(0,0,0,0,0,1),new Q.fd(this))
P.dH(P.cY(0,0,0,200,0,0),new Q.fe(this))}},fd:{"^":"r:7;a",
$1:function(a){var z
H.k(a,"$isai")
z=this.a
J.bV(z.z,J.aH(z.y))
z.y=0}},fe:{"^":"r:7;a",
$1:function(a){var z,y
H.k(a,"$isai")
z=this.a
y=z.Q
if(y==null)return
J.bV(z.ch,H.e(y/1000)+" ms")}}}],["","",,O,{"^":""}]]
setupProgram(dart,0,0)
J.z=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d9.prototype
return J.d8.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.da.prototype
if(typeof a=="boolean")return J.fD.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.iY=function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.a1=function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.bO=function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.cw=function(a){if(typeof a=="number")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bo.prototype
return a}
J.iZ=function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bo.prototype
return a}
J.j_=function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bo.prototype
return a}
J.C=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.ez=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.iY(a).n(a,b)}
J.ad=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.z(a).a4(a,b)}
J.a2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cw(a).al(a,b)}
J.cC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cw(a).E(a,b)}
J.eA=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jc(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a1(a).h(a,b)}
J.eB=function(a,b,c){return J.bO(a).i(a,b,c)}
J.br=function(a,b){return J.C(a).ep(a,b)}
J.eC=function(a,b,c){return J.C(a).er(a,b,c)}
J.eD=function(a,b){return J.C(a).ac(a,b)}
J.eE=function(a,b){return J.iZ(a).aD(a,b)}
J.cD=function(a,b){return J.bO(a).a7(a,b)}
J.eF=function(a){return J.C(a).geF(a)}
J.aG=function(a){return J.z(a).gO(a)}
J.bs=function(a){return J.bO(a).gP(a)}
J.a9=function(a){return J.a1(a).gu(a)}
J.eG=function(a){return J.C(a).gat(a)}
J.eH=function(a){return J.C(a).gfp(a)}
J.eI=function(a){return J.C(a).gfB(a)}
J.bb=function(a){return J.C(a).gk(a)}
J.bc=function(a){return J.C(a).gl(a)}
J.bU=function(a,b){return J.C(a).aH(a,b)}
J.cE=function(a){return J.bO(a).fv(a)}
J.cF=function(a,b){return J.C(a).sah(a,b)}
J.bV=function(a,b){return J.C(a).scS(a,b)}
J.cG=function(a,b){return J.C(a).sat(a,b)}
J.bW=function(a,b){return J.C(a).sk(a,b)}
J.bX=function(a,b){return J.C(a).sl(a,b)}
J.eJ=function(a,b,c){return J.C(a).da(a,b,c)}
J.cH=function(a){return J.cw(a).T(a)}
J.eK=function(a){return J.j_(a).fF(a)}
J.aH=function(a){return J.z(a).m(a)}
I.aC=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bt.prototype
C.j=W.cN.prototype
C.Q=W.fj.prototype
C.R=W.fv.prototype
C.u=W.fw.prototype
C.S=J.A.prototype
C.a=J.aV.prototype
C.k=J.d8.prototype
C.c=J.d9.prototype
C.d=J.da.prototype
C.b=J.aW.prototype
C.v=J.aX.prototype
C.Z=J.aY.prototype
C.l=H.fZ.prototype
C.a7=W.h1.prototype
C.J=J.hh.prototype
C.K=W.ho.prototype
C.N=W.hG.prototype
C.E=J.bo.prototype
C.P=W.hV.prototype
C.e=new V.bY(0,"BodyType.STATIC")
C.F=new V.bY(1,"BodyType.KINEMATIC")
C.f=new V.bY(2,"BodyType.DYNAMIC")
C.r=new P.im()
C.p=new V.c1(0,"EPAxisType.UNKNOWN")
C.t=new V.c1(1,"EPAxisType.EDGE_A")
C.G=new V.c1(2,"EPAxisType.EDGE_B")
C.T=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.U=function(hooks) {
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
C.H=function(hooks) { return hooks; }

C.V=function(getTagFallback) {
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
C.W=function() {
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
C.X=function(hooks) {
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
C.Y=function(hooks) {
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
C.I=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.a_=new V.bj(11,"JointType.CONSTANT_VOLUME")
C.a0=new V.bj(3,"JointType.DISTANCE")
C.a1=new V.bj(4,"JointType.PULLEY")
C.a2=new V.bj(5,"JointType.MOUSE")
C.a3=new V.bj(9,"JointType.FRICTION")
C.a4=H.f(I.aC(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.a5=H.f(I.aC(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.a6=H.f(I.aC([]),[P.m])
C.y=H.f(I.aC(["bind","if","ref","repeat","syntax"]),[P.m])
C.z=H.f(I.aC(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.n=new V.c9(0,"ManifoldType.CIRCLES")
C.h=new V.c9(1,"ManifoldType.FACE_A")
C.w=new V.c9(2,"ManifoldType.FACE_B")
C.A=new V.cf(0,"SeparationFunctionType.POINTS")
C.B=new V.cf(1,"SeparationFunctionType.FACE_A")
C.C=new V.cf(2,"SeparationFunctionType.FACE_B")
C.m=new V.bG(0,"ShapeType.CIRCLE")
C.o=new V.bG(1,"ShapeType.EDGE")
C.i=new V.bG(2,"ShapeType.POLYGON")
C.x=new V.bG(3,"ShapeType.CHAIN")
C.L=new V.bn(0,"TOIOutputState.UNKNOWN")
C.M=new V.bn(1,"TOIOutputState.FAILED")
C.a8=new V.bn(2,"TOIOutputState.OVERLAPPED")
C.D=new V.bn(3,"TOIOutputState.TOUCHING")
C.a9=new V.bn(4,"TOIOutputState.SEPARATED")
C.O=new V.hS(0,"VertexType.ISOLATED")
$.at=null
$.bl=null
$.a3=0
$.aJ=null
$.cK=null
$.cp=!1
$.er=null
$.ej=null
$.ew=null
$.bN=null
$.bQ=null
$.cx=null
$.b4=null
$.bM=null
$.b3=null
$.cq=!1
$.az=C.r
$.F=null
$.ab=null
$.c3=null
$.d0=null
$.d_=null
$.cV=0
$.cW=0
$.cX=20
$.dB=0
$.dC=0
$.dD=0
$.dF=0
$.dE=0
$.jk=1
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
I.$lazy(y,x,w)}})(["cS","$get$cS",function(){return H.eq("_$dart_dartClosure")},"c6","$get$c6",function(){return H.eq("_$dart_js")},"dL","$get$dL",function(){return H.a7(H.bJ({
toString:function(){return"$receiver$"}}))},"dM","$get$dM",function(){return H.a7(H.bJ({$method$:null,
toString:function(){return"$receiver$"}}))},"dN","$get$dN",function(){return H.a7(H.bJ(null))},"dO","$get$dO",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dS","$get$dS",function(){return H.a7(H.bJ(void 0))},"dT","$get$dT",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dQ","$get$dQ",function(){return H.a7(H.dR(null))},"dP","$get$dP",function(){return H.a7(function(){try{null.$method$}catch(z){return z.message}}())},"dV","$get$dV",function(){return H.a7(H.dR(void 0))},"dU","$get$dU",function(){return H.a7(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ck","$get$ck",function(){return P.i1()},"b5","$get$b5",function(){return[]},"e8","$get$e8",function(){return P.dc(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)},"cm","$get$cm",function(){return P.fJ(P.m,P.bf)},"ao","$get$ao",function(){return E.dY()},"cj","$get$cj",function(){return E.dY()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.M},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:P.m,args:[P.u]},{func:1,ret:P.R,args:[W.a5]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:P.M,args:[P.ai]},{func:1,ret:P.R,args:[W.X,P.m,P.m,W.bp]},{func:1,ret:P.u},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,ret:P.M,args:[,]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.R,args:[W.p]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[W.p,W.p]},{func:1,ret:P.u,args:[P.u,P.c]},{func:1,ret:-1,args:[P.W]},{func:1,ret:P.u,args:[,,]},{func:1,ret:P.W},{func:1,ret:E.a},{func:1,ret:P.c},{func:1,ret:V.ac}]
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
if(x==y)H.ji(d||a)
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
Isolate.aC=a.aC
Isolate.cv=a.cv
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
if(typeof dartMainRunner==="function")dartMainRunner(S.et,[])
else S.et([])})})()
//# sourceMappingURL=box_test.dart.js.map
