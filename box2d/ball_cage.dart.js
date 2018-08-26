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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cv(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cw=function(){}
var dart=[["","",,H,{"^":"",jT:{"^":"c;a"}}],["","",,J,{"^":"",
cz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bq:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cy==null){H.j7()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.dV("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c8()]
if(v!=null)return v
v=H.jc(a)
if(v!=null)return v
if(typeof a=="function")return C.Z
y=Object.getPrototypeOf(a)
if(y==null)return C.J
if(y===Object.prototype)return C.J
if(typeof w=="function"){Object.defineProperty(w,$.$get$c8(),{value:C.E,enumerable:false,writable:true,configurable:true})
return C.E}return C.E},
A:{"^":"c;",
a3:function(a,b){return a===b},
gM:function(a){return H.b0(a)},
n:["dI",function(a){return"Instance of '"+H.b1(a)+"'"}],
"%":"ApplicationCacheErrorEvent|ArrayBuffer|CanvasGradient|CanvasPattern|DOMError|ErrorEvent|Event|InputEvent|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedEnumeration|SVGAnimatedTransformList|SensorErrorEvent|SpeechRecognitionError|StorageManager"},
fC:{"^":"A;",
n:function(a){return String(a)},
gM:function(a){return a?519018:218159},
$isR:1},
da:{"^":"A;",
a3:function(a,b){return null==b},
n:function(a){return"null"},
gM:function(a){return 0},
$isM:1},
c9:{"^":"A;",
gM:function(a){return 0},
n:["dK",function(a){return String(a)}]},
hg:{"^":"c9;"},
bo:{"^":"c9;"},
aW:{"^":"c9;",
n:function(a){var z=a[$.$get$cT()]
if(z==null)return this.dK(a)
return"JavaScript function for "+H.e(J.aG(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbf:1},
aT:{"^":"A;$ti",
u:function(a,b){H.o(b,H.l(a,0))
if(!!a.fixed$length)H.aD(P.a_("add"))
a.push(b)},
c8:function(a,b){return H.ci(a,b,null,H.l(a,0))},
a8:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
Y:function(a,b,c,d,e){var z,y,x,w,v,u
z=H.l(a,0)
H.i(d,"$isv",[z],"$asv")
if(!!a.immutable$list)H.aD(P.a_("setRange"))
P.dp(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
x=J.z(d)
if(!!x.$isd){H.i(d,"$isd",[z],"$asd")
w=e
v=d}else{v=x.c8(d,e).fD(0,!1)
w=0}z=J.a1(v)
if(w+y>z.gv(v))throw H.h(H.fz())
if(w<b)for(u=y-1;u>=0;--u)a[b+u]=z.h(v,w+u)
else for(u=0;u<y;++u)a[b+u]=z.h(v,w+u)},
aK:function(a,b,c,d){return this.Y(a,b,c,d,0)},
cC:function(a,b){var z,y
H.t(b,{func:1,ret:P.R,args:[H.l(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.h(P.a4(a))}return!1},
V:function(a,b){var z
for(z=0;z<a.length;++z)if(J.ae(a[z],b))return!0
return!1},
n:function(a){return P.c7(a,"[","]")},
gP:function(a){return new J.eQ(a,a.length,0,[H.l(a,0)])},
gM:function(a){return H.b0(a)},
gv:function(a){return a.length},
sv:function(a,b){if(!!a.fixed$length)H.aD(P.a_("set length"))
if(b<0)throw H.h(P.ai(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.b7(a,b))
if(b>=a.length||b<0)throw H.h(H.b7(a,b))
return a[b]},
i:function(a,b,c){H.o(c,H.l(a,0))
if(!!a.immutable$list)H.aD(P.a_("indexed set"))
if(b>=a.length||b<0)throw H.h(H.b7(a,b))
a[b]=c},
p:function(a,b){var z,y
z=[H.l(a,0)]
H.i(b,"$isd",z,"$asd")
y=C.c.p(a.length,b.gv(b))
z=H.f([],z)
this.sv(z,y)
this.aK(z,0,a.length,a)
this.aK(z,a.length,y,b)
return z},
$isv:1,
$isd:1,
q:{
fB:function(a,b){if(a<0||a>4294967295)throw H.h(P.ai(a,0,4294967295,"length",null))
return J.d7(new Array(a),b)},
d7:function(a,b){return J.bi(H.f(a,[b]))},
bi:function(a){H.bS(a)
a.fixed$length=Array
return a},
jR:[function(a,b){return J.eD(H.et(a,"$isE"),H.et(b,"$isE"))},"$2","iF",8,0,20]}},
jS:{"^":"aT;$ti"},
eQ:{"^":"c;a,b,c,0d,$ti",
scl:function(a){this.d=H.o(a,H.l(this,0))},
gH:function(){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.cC(z))
x=this.c
if(x>=y){this.scl(null)
return!1}this.scl(z[x]);++this.c
return!0},
$isap:1},
aU:{"^":"A;",
aE:function(a,b){var z
H.ba(b)
if(typeof b!=="number")throw H.h(H.ad(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbS(b)
if(this.gbS(a)===z)return 0
if(this.gbS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbS:function(a){return a===0?1/a<0:a<0},
T:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.a_(""+a+".toInt()"))},
ah:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.a_(""+a+".floor()"))},
n:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){return a&0x1FFFFFFF},
p:function(a,b){return a+b},
t:function(a,b){if(typeof b!=="number")throw H.h(H.ad(b))
return a-b},
d2:function(a,b){return a/b},
m:function(a,b){return a*b},
a5:function(a,b){if(typeof b!=="number")throw H.h(H.ad(b))
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cA(a,b)},
aC:function(a,b){return(a|0)===a?a/b|0:this.cA(a,b)},
cA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.a_("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aO:function(a,b){var z
if(a>0)z=this.ex(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ex:function(a,b){return b>31?0:a>>>b},
bl:function(a,b){return(a|b)>>>0},
B:function(a,b){if(typeof b!=="number")throw H.h(H.ad(b))
return a<b},
U:function(a,b){if(typeof b!=="number")throw H.h(H.ad(b))
return a>b},
d8:function(a,b){if(typeof b!=="number")throw H.h(H.ad(b))
return a<=b},
$isE:1,
$asE:function(){return[P.W]},
$isaA:1,
$isW:1},
d9:{"^":"aU;",$isu:1},
d8:{"^":"aU;"},
aV:{"^":"A;",
e8:function(a,b){if(b>=a.length)throw H.h(H.b7(a,b))
return a.charCodeAt(b)},
p:function(a,b){H.q(b)
if(typeof b!=="string")throw H.h(P.eP(b,null,null))
return a+b},
dD:function(a,b,c){var z
if(c>a.length)throw H.h(P.ai(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
dC:function(a,b){return this.dD(a,b,0)},
cb:function(a,b,c){H.j(c)
if(c==null)c=a.length
if(b>c)throw H.h(P.ce(b,null,null))
if(c>a.length)throw H.h(P.ce(c,null,null))
return a.substring(b,c)},
dH:function(a,b){return this.cb(a,b,null)},
fE:function(a){return a.toLowerCase()},
aE:function(a,b){var z
H.q(b)
if(typeof b!=="string")throw H.h(H.ad(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
n:function(a){return a},
gM:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gv:function(a){return a.length},
$isE:1,
$asE:function(){return[P.m]},
$ishf:1,
$ism:1}}],["","",,H,{"^":"",
fy:function(){return new P.bI("No element")},
fA:function(){return new P.bI("Too many elements")},
fz:function(){return new P.bI("Too few elements")},
hy:function(a,b,c){H.i(a,"$isd",[c],"$asd")
H.t(b,{func:1,ret:P.u,args:[c,c]})
H.bm(a,0,J.a9(a)-1,b,c)},
bm:function(a,b,c,d,e){H.i(a,"$isd",[e],"$asd")
H.t(d,{func:1,ret:P.u,args:[e,e]})
if(c-b<=32)H.hx(a,b,c,d,e)
else H.hw(a,b,c,d,e)},
hx:function(a,b,c,d,e){var z,y,x,w,v
H.i(a,"$isd",[e],"$asd")
H.t(d,{func:1,ret:P.u,args:[e,e]})
for(z=b+1,y=J.a1(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a2(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hw:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.i(a,"$isd",[a2],"$asd")
H.t(a1,{func:1,ret:P.u,args:[a2,a2]})
z=C.c.aC(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.aC(b+a0,2)
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
if(J.ae(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.B()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.U()
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
if(typeof e!=="number")return e.B()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.U()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.U()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.B()
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
if(m<y&&l>x){for(;J.ae(a1.$2(t.h(a,m),r),0);)++m
for(;J.ae(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.B()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bm(a,m,l,a1,a2)}else H.bm(a,m,l,a1,a2)},
c4:{"^":"v;"},
bk:{"^":"c4;$ti",
gP:function(a){return new H.dd(this,this.gv(this),0,[H.al(this,"bk",0)])},
bY:function(a,b){return this.dJ(0,H.t(b,{func:1,ret:P.R,args:[H.al(this,"bk",0)]}))}},
hB:{"^":"bk;a,b,c,$ti",
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
gv:function(a){var z,y,x
z=J.a9(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.t()
return x-y},
a8:function(a,b){var z,y
z=this.gey()+b
if(b>=0){y=this.geg()
if(typeof y!=="number")return H.G(y)
y=z>=y}else y=!0
if(y)throw H.h(P.bh(b,this,"index",null,null))
return J.cE(this.a,z)},
fD:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.a1(y)
w=x.gv(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.t()
u=w-z
if(u<0)u=0
t=new Array(u)
t.fixed$length=Array
s=H.f(t,this.$ti)
for(r=0;r<u;++r){C.a.i(s,r,x.a8(y,z+r))
if(x.gv(y)<w)throw H.h(P.a4(this))}return s},
q:{
ci:function(a,b,c,d){if(c!=null){if(c<0)H.aD(P.ai(c,0,null,"end",null))
if(b>c)H.aD(P.ai(b,0,c,"start",null))}return new H.hB(a,b,c,[d])}}},
dd:{"^":"c;a,b,c,0d,$ti",
scd:function(a){this.d=H.o(a,H.l(this,0))},
gH:function(){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.a1(z)
x=y.gv(z)
if(this.b!==x)throw H.h(P.a4(z))
w=this.c
if(w>=x){this.scd(null)
return!1}this.scd(y.a8(z,w));++this.c
return!0},
$isap:1},
fO:{"^":"bk;a,b,$ti",
gv:function(a){return J.a9(this.a)},
a8:function(a,b){return this.b.$1(J.cE(this.a,b))},
$asbk:function(a,b){return[b]},
$asv:function(a,b){return[b]}},
dZ:{"^":"v;a,b,$ti",
gP:function(a){return new H.hS(J.bs(this.a),this.b,this.$ti)}},
hS:{"^":"ap;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gH()))return!0
return!1},
gH:function(){return this.a.gH()}},
bD:{"^":"c;$ti"}}],["","",,H,{"^":"",
bU:function(a){var z,y
z=H.q(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
j_:function(a){return init.types[H.j(a)]},
ja:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.z(a).$isaq},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aG(a)
if(typeof z!=="string")throw H.h(H.ad(a))
return z},
b0:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b1:function(a){return H.hi(a)+H.ct(H.am(a),0,null)},
hi:function(a){var z,y,x,w,v,u,t,s,r
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
return H.bU(w.length>1&&C.v.e8(w,0)===36?C.v.dH(w,1):w)},
k6:[function(){return Date.now()},"$0","iH",0,0,21],
bG:function(){var z,y
if($.at!=null)return
$.at=1000
$.bl=H.iH()
if(typeof window=="undefined")return
z=window
if(z==null)return
y=z.performance
if(y==null)return
if(typeof y.now!="function")return
$.at=1e6
$.bl=new H.hj(y)},
G:function(a){throw H.h(H.ad(a))},
b:function(a,b){if(a==null)J.a9(a)
throw H.h(H.b7(a,b))},
b7:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
z=H.j(J.a9(a))
if(!(b<0)){if(typeof z!=="number")return H.G(z)
y=b>=z}else y=!0
if(y)return P.bh(b,a,"index",null,z)
return P.ce(b,"index",null)},
ad:function(a){return new P.an(!0,a,null,null)},
iT:function(a){return a},
h:function(a){var z
if(a==null)a=new P.dl()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ex})
z.name=""}else z.toString=H.ex
return z},
ex:function(){return J.aG(this.dartException)},
aD:function(a){throw H.h(a)},
cC:function(a){throw H.h(P.a4(a))},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aO(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ca(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dk(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dK()
u=$.$get$dL()
t=$.$get$dM()
s=$.$get$dN()
r=$.$get$dR()
q=$.$get$dS()
p=$.$get$dP()
$.$get$dO()
o=$.$get$dU()
n=$.$get$dT()
m=v.a1(y)
if(m!=null)return z.$1(H.ca(H.q(y),m))
else{m=u.a1(y)
if(m!=null){m.method="call"
return z.$1(H.ca(H.q(y),m))}else{m=t.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=r.a1(y)
if(m==null){m=q.a1(y)
if(m==null){m=p.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=o.a1(y)
if(m==null){m=n.a1(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dk(H.q(y),m))}}return z.$1(new H.hN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.an(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dv()
return a},
iZ:function(a){var z
if(a==null)return new H.ec(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ec(a)},
j9:function(a,b,c,d,e,f){H.k(a,"$isbf")
switch(H.j(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.i8("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.j(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j9)
a.$identity=z
return z},
eZ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.z(d).$isd){z.$reflectionInfo=d
x=H.ho(z).r}else x=d
w=e?Object.create(new H.hA().constructor.prototype):Object.create(new H.c_(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a3
if(typeof u!=="number")return u.p()
$.a3=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cP(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.j_,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cM:H.c0
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cP(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eW:function(a,b,c,d){var z=H.c0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eY(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eW(y,!w,z,b)
if(y===0){w=$.a3
if(typeof w!=="number")return w.p()
$.a3=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aI
if(v==null){v=H.bu("self")
$.aI=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a3
if(typeof w!=="number")return w.p()
$.a3=w+1
t+=w
w="return function("+t+"){return this."
v=$.aI
if(v==null){v=H.bu("self")
$.aI=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
eX:function(a,b,c,d){var z,y
z=H.c0
y=H.cM
switch(b?-1:a){case 0:throw H.h(H.hq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eY:function(a,b){var z,y,x,w,v,u,t,s
z=$.aI
if(z==null){z=H.bu("self")
$.aI=z}y=$.cL
if(y==null){y=H.bu("receiver")
$.cL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eX(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a3
if(typeof y!=="number")return y.p()
$.a3=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a3
if(typeof y!=="number")return y.p()
$.a3=y+1
return new Function(z+y+"}")()},
cv:function(a,b,c,d,e,f,g){var z,y
z=J.bi(H.bS(b))
H.j(c)
y=!!J.z(d).$isd?J.bi(d):d
return H.eZ(a,z,c,y,!!e,f,g)},
q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a8(a,"String"))},
b8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a8(a,"double"))},
ba:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a8(a,"num"))},
iR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a8(a,"bool"))},
j:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a8(a,"int"))},
cA:function(a,b){throw H.h(H.a8(a,H.q(b).substring(3)))},
jf:function(a,b){var z=J.a1(b)
throw H.h(H.eV(a,z.cb(b,3,z.gv(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.z(a)[b])return a
H.cA(a,b)},
H:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.z(a)[b]
else z=!0
if(z)return a
H.jf(a,b)},
et:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.z(a)[b])return a
H.cA(a,b)},
bS:function(a){if(a==null)return a
if(!!J.z(a).$isd)return a
throw H.h(H.a8(a,"List"))},
jb:function(a,b){var z
if(a==null)return a
z=J.z(a)
if(!!z.$isd)return a
if(z[b])return a
H.cA(a,b)},
en:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.j(z)]
else return a.$S()}return},
eo:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.en(J.z(a))
if(z==null)return!1
return H.eg(z,null,b,null)},
t:function(a,b){var z,y
if(a==null)return a
if($.cq)return a
$.cq=!0
try{if(H.eo(a,b))return a
z=H.cB(b)
y=H.a8(a,z)
throw H.h(y)}finally{$.cq=!1}},
eh:function(a){var z,y
z=J.z(a)
if(!!z.$isr){y=H.en(z)
if(y!=null)return H.cB(y)
return"Closure"}return H.b1(a)},
jg:function(a){throw H.h(new P.f5(H.q(a)))},
ep:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
kt:function(a,b,c){return H.aC(a["$as"+H.e(c)],H.am(b))},
b9:function(a,b,c,d){var z
H.q(c)
H.j(d)
z=H.aC(a["$as"+H.e(c)],H.am(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.q(b)
H.j(c)
z=H.aC(a["$as"+H.e(b)],H.am(a))
return z==null?null:z[c]},
l:function(a,b){var z
H.j(b)
z=H.am(a)
return z==null?null:z[b]},
cB:function(a){return H.ak(a,null)},
ak:function(a,b){var z,y
H.i(b,"$isd",[P.m],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bU(a[0].builtin$cls)+H.ct(a,1,b)
if(typeof a=="function")return H.bU(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.j(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.b(b,y)
return H.e(b[y])}if('func' in a)return H.iE(a,b)
if('futureOr' in a)return"FutureOr<"+H.ak("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.i(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.u(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.b(b,r)
t=C.v.p(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.ak(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ak(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ak(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ak(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.iV(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.q(z[l])
n=n+m+H.ak(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
ct:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isd",[P.m],"$asd")
if(a==null)return""
z=new P.ch("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ak(u,c)}return"<"+z.n(0)+">"},
aC:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
iU:function(a,b,c,d){var z,y
H.q(b)
H.bS(c)
H.q(d)
if(a==null)return!1
z=H.am(a)
y=J.z(a)
if(y[b]==null)return!1
return H.ej(H.aC(y[d],z),null,c,null)},
i:function(a,b,c,d){H.q(b)
H.bS(c)
H.q(d)
if(a==null)return a
if(H.iU(a,b,c,d))return a
throw H.h(H.a8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.ct(c,0,null),init.mangledGlobalNames)))},
ej:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.V(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.V(a[y],b,c[y],d))return!1
return!0},
kr:function(a,b,c){return a.apply(b,H.aC(J.z(b)["$as"+H.e(c)],H.am(b)))},
er:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="M"||a===-1||a===-2||H.er(z)}return!1},
em:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="M"||b===-1||b===-2||H.er(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.em(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eo(a,b)}z=J.z(a).constructor
y=H.am(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.V(z,null,b,null)},
o:function(a,b){if(a!=null&&!H.em(a,b))throw H.h(H.a8(a,H.cB(b)))
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
if('func' in c)return H.eg(a,b,c,d)
if('func' in a)return c.builtin$cls==="bf"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.V("type" in a?a.type:null,b,x,d)
else if(H.V(a,b,x,d))return!0
else{if(!('$is'+"fs" in y.prototype))return!1
w=y.prototype["$as"+"fs"]
v=H.aC(w,z?a.slice(1):null)
return H.V(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ej(H.aC(r,z),b,u,d)},
eg:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.je(m,b,l,d)},
je:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.V(c[w],d,a[w],b))return!1}return!0},
ks:function(a,b,c){Object.defineProperty(a,H.q(b),{value:c,enumerable:false,writable:true,configurable:true})},
jc:function(a){var z,y,x,w,v,u
z=H.q($.eq.$1(a))
y=$.bO[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bR[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.q($.ei.$2(a,z))
if(z!=null){y=$.bO[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bR[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bT(x)
$.bO[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bR[z]=x
return x}if(v==="-"){u=H.bT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eu(a,x)
if(v==="*")throw H.h(P.dV(z))
if(init.leafTags[z]===true){u=H.bT(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eu(a,x)},
eu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bT:function(a){return J.cz(a,!1,null,!!a.$isaq)},
jd:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bT(z)
else return J.cz(z,c,null,null)},
j7:function(){if(!0===$.cy)return
$.cy=!0
H.j8()},
j8:function(){var z,y,x,w,v,u,t,s
$.bO=Object.create(null)
$.bR=Object.create(null)
H.j3()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ev.$1(v)
if(u!=null){t=H.jd(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
j3:function(){var z,y,x,w,v,u,t
z=C.W()
z=H.az(C.T,H.az(C.Y,H.az(C.H,H.az(C.H,H.az(C.X,H.az(C.U,H.az(C.V(C.I),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eq=new H.j4(v)
$.ei=new H.j5(u)
$.ev=new H.j6(t)},
az:function(a,b){return a(b)||b},
hn:{"^":"c;a,b,c,d,e,f,r,0x",q:{
ho:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bi(z)
y=z[0]
x=z[1]
return new H.hn(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hj:{"^":"r:9;a",
$0:function(){return C.b.ah(1000*this.a.now())}},
hK:{"^":"c;a,b,c,d,e,f",
a1:function(a){var z,y,x
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
return new H.hK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dQ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h3:{"^":"I;a,b",
n:function(a){var z=this.b
if(z==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dk:function(a,b){return new H.h3(a,b==null?null:b.method)}}},
fE:{"^":"I;a,b,c",
n:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
q:{
ca:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fE(a,y,z?null:b.receiver)}}},
hN:{"^":"I;a",
n:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jh:{"^":"r:2;a",
$1:function(a){if(!!J.z(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ec:{"^":"c;a,0b",
n:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$ishz:1},
r:{"^":"c;",
n:function(a){return"Closure '"+H.b1(this).trim()+"'"},
gd1:function(){return this},
$isbf:1,
gd1:function(){return this}},
dy:{"^":"r;"},
hA:{"^":"dy;",
n:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bU(z)+"'"}},
c_:{"^":"dy;a,b,c,d",
a3:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c_))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gM:function(a){var z,y
z=this.c
if(z==null)y=H.b0(this.a)
else y=typeof z!=="object"?J.aF(z):H.b0(z)
return(y^H.b0(this.b))>>>0},
n:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b1(z)+"'")},
q:{
c0:function(a){return a.a},
cM:function(a){return a.c},
bu:function(a){var z,y,x,w,v
z=new H.c_("self","target","receiver","name")
y=J.bi(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hL:{"^":"I;a",
n:function(a){return this.a},
q:{
a8:function(a,b){return new H.hL("TypeError: "+H.e(P.bB(a))+": type '"+H.eh(a)+"' is not a subtype of type '"+b+"'")}}},
eU:{"^":"I;a",
n:function(a){return this.a},
q:{
eV:function(a,b){return new H.eU("CastError: "+H.e(P.bB(a))+": type '"+H.eh(a)+"' is not a subtype of type '"+b+"'")}}},
hp:{"^":"I;a",
n:function(a){return"RuntimeError: "+H.e(this.a)},
q:{
hq:function(a){return new H.hp(a)}}},
fD:{"^":"cc;a,0b,0c,0d,0e,0f,r,$ti",
gv:function(a){return this.a},
gaj:function(){return new H.fG(this,[H.l(this,0)])},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bw(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bw(w,b)
x=y==null?null:y.b
return x}else return this.fg(b)},
fg:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.co(z,J.aF(a)&0x3ffffff)
x=this.cU(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.o(b,H.l(this,0))
H.o(c,H.l(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bx()
this.b=z}this.ce(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bx()
this.c=y}this.ce(y,b,c)}else{x=this.d
if(x==null){x=this.bx()
this.d=x}w=J.aF(b)&0x3ffffff
v=this.co(x,w)
if(v==null)this.bB(x,w,[this.br(b,c)])
else{u=this.cU(v,b)
if(u>=0)v[u].b=c
else v.push(this.br(b,c))}}},
bg:function(a,b){var z,y
H.t(b,{func:1,ret:-1,args:[H.l(this,0),H.l(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.a4(this))
z=z.c}},
ce:function(a,b,c){var z
H.o(b,H.l(this,0))
H.o(c,H.l(this,1))
z=this.bw(a,b)
if(z==null)this.bB(a,b,this.br(b,c))
else z.b=c},
e0:function(){this.r=this.r+1&67108863},
br:function(a,b){var z,y
z=new H.fF(H.o(a,H.l(this,0)),H.o(b,H.l(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e0()
return z},
cU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ae(a[y].a,b))return y
return-1},
n:function(a){return P.dg(this)},
bw:function(a,b){return a[b]},
co:function(a,b){return a[b]},
bB:function(a,b,c){a[b]=c},
ed:function(a,b){delete a[b]},
bx:function(){var z=Object.create(null)
this.bB(z,"<non-identifier-key>",z)
this.ed(z,"<non-identifier-key>")
return z}},
fF:{"^":"c;a,b,0c,0d"},
fG:{"^":"c4;a,$ti",
gv:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.fH(z,z.r,this.$ti)
y.c=z.e
return y}},
fH:{"^":"c;a,b,0c,0d,$ti",
scf:function(a){this.d=H.o(a,H.l(this,0))},
gH:function(){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.a4(z))
else{z=this.c
if(z==null){this.scf(null)
return!1}else{this.scf(z.a)
this.c=this.c.c
return!0}}},
$isap:1},
j4:{"^":"r:2;a",
$1:function(a){return this.a(a)}},
j5:{"^":"r:10;a",
$2:function(a,b){return this.a(a,b)}},
j6:{"^":"r:11;a",
$1:function(a){return this.a(H.q(a))}}}],["","",,H,{"^":"",
iV:function(a){return J.d7(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.b7(b,a))},
fZ:{"^":"A;","%":";ArrayBufferView;cd|e8|e9|dh|ea|eb|di"},
cd:{"^":"fZ;",
gv:function(a){return a.length},
$isaq:1,
$asaq:I.cw},
dh:{"^":"e9;",
h:function(a,b){H.bM(b,a,a.length)
return a[b]},
i:function(a,b,c){H.b8(c)
H.bM(b,a,a.length)
a[b]=c},
$asbD:function(){return[P.aA]},
$asK:function(){return[P.aA]},
$isv:1,
$asv:function(){return[P.aA]},
$isd:1,
$asd:function(){return[P.aA]}},
di:{"^":"eb;",
i:function(a,b,c){H.j(c)
H.bM(b,a,a.length)
a[b]=c},
$asbD:function(){return[P.u]},
$asK:function(){return[P.u]},
$isv:1,
$asv:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]}},
fY:{"^":"dh;",$isd5:1,"%":"Float64Array"},
jV:{"^":"di;",
h:function(a,b){H.bM(b,a,a.length)
return a[b]},
$isjQ:1,
"%":"Int8Array"},
e8:{"^":"cd+K;"},
e9:{"^":"e8+bD;"},
ea:{"^":"cd+K;"},
eb:{"^":"ea+bD;"}}],["","",,P,{"^":"",
i_:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iO()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.i1(z),1)).observe(y,{childList:true})
return new P.i0(z,y,x)}else if(self.setImmediate!=null)return P.iP()
return P.iQ()},
kk:[function(a){self.scheduleImmediate(H.b6(new P.i2(H.t(a,{func:1,ret:-1})),0))},"$1","iO",4,0,1],
kl:[function(a){self.setImmediate(H.b6(new P.i3(H.t(a,{func:1,ret:-1})),0))},"$1","iP",4,0,1],
km:[function(a){H.t(a,{func:1,ret:-1})
P.iv(0,a)},"$1","iQ",4,0,1],
dH:function(a,b){var z
H.t(b,{func:1,ret:-1,args:[P.aj]})
z=C.c.aC(a.a,1000)
return P.iw(z<0?0:z,b)},
iI:function(){var z,y
for(;z=$.b4,z!=null;){$.b3=null
y=z.b
$.b4=y
if(y==null)$.bN=null
z.a.$0()}},
kq:[function(){$.cr=!0
try{P.iI()}finally{$.b3=null
$.cr=!1
if($.b4!=null)$.$get$cl().$1(P.ek())}},"$0","ek",0,0,3],
iM:function(a){var z,y,x,w
H.t(a,{func:1,ret:-1})
z=$.b4
if(z==null){y=new P.e0(a)
$.bN=y
$.b4=y
if(!$.cr)$.$get$cl().$1(P.ek())
$.b3=$.bN
return}x=new P.e0(a)
w=$.b3
if(w==null){x.b=z
$.b3=x
$.b4=x}else{x.b=w.b
w.b=x
$.b3=x
if(x.b==null)$.bN=x}},
dG:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aj]}
H.t(b,z)
y=$.ay
if(y===C.r){y.toString
return P.dH(a,b)}x=y.cD(b,P.aj)
$.ay.toString
return P.dH(a,H.t(x,z))},
iJ:function(a,b,c,d,e){var z={}
z.a=d
P.iM(new P.iK(z,e))},
iL:function(a,b,c,d,e,f,g){var z,y
H.t(d,{func:1,ret:f,args:[g]})
H.o(e,g)
y=$.ay
if(y===c)return d.$1(e)
$.ay=c
z=y
try{y=d.$1(e)
return y}finally{$.ay=z}},
i1:{"^":"r:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
i0:{"^":"r:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.t(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i2:{"^":"r:0;a",
$0:function(){this.a.$0()}},
i3:{"^":"r:0;a",
$0:function(){this.a.$0()}},
ee:{"^":"c;a,0b,c",
dZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.iy(this,b),0),a)
else throw H.h(P.a_("`setTimeout()` not found."))},
e_:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b6(new P.ix(this,a,Date.now(),b),0),a)
else throw H.h(P.a_("Periodic timer."))},
$isaj:1,
q:{
iv:function(a,b){var z=new P.ee(!0,0)
z.dZ(a,b)
return z},
iw:function(a,b){var z=new P.ee(!1,0)
z.e_(a,b)
return z}}},
iy:{"^":"r:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ix:{"^":"r:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.a5(w,x)}z.c=y
this.d.$1(z)}},
e0:{"^":"c;a,0b"},
aj:{"^":"c;"},
iA:{"^":"c;",$iskj:1},
iK:{"^":"r:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dl()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.n(0)
throw x}},
ik:{"^":"iA;",
gau:function(a){return},
fw:function(a,b,c){var z,y,x
H.t(a,{func:1,ret:-1,args:[c]})
H.o(b,c)
try{if(C.r===$.ay){a.$1(b)
return}P.iL(null,null,this,a,b,-1,c)}catch(x){z=H.aE(x)
y=H.iZ(x)
P.iJ(null,null,this,z,H.k(y,"$ishz"))}},
cD:function(a,b){return new P.il(this,H.t(a,{func:1,ret:-1,args:[b]}),b)}},
il:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.fw(this.b,H.o(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
bg:function(a,b,c,d,e){return new P.i9(0,[d,e])},
fI:function(a,b){return new H.fD(0,0,[a,b])},
bE:function(a,b,c,d){return new P.id(0,0,[d])},
fx:function(a,b,c){var z,y
if(P.cs(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$b5()
C.a.u(y,a)
try{P.iG(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.dx(b,H.jb(z,"$isv"),", ")+c
return y.charCodeAt(0)==0?y:y},
c7:function(a,b,c){var z,y,x
if(P.cs(a))return b+"..."+c
z=new P.ch(b)
y=$.$get$b5()
C.a.u(y,a)
try{x=z
x.a=P.dx(x.gaA(),a,", ")}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.a=y.gaA()+c
y=z.gaA()
return y.charCodeAt(0)==0?y:y},
cs:function(a){var z,y
for(z=0;y=$.$get$b5(),z<y.length;++z)if(a===y[z])return!0
return!1},
iG:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.e(z.gH())
C.a.u(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.gH();++x
if(!z.G()){if(x<=4){C.a.u(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gH();++x
for(;z.G();t=s,s=r){r=z.gH();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2;--x}C.a.u(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.u(b,q)
C.a.u(b,u)
C.a.u(b,v)},
dc:function(a,b){var z,y,x
z=P.bE(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.cC)(a),++x)z.u(0,H.o(a[x],b))
return z},
dg:function(a){var z,y,x
z={}
if(P.cs(a))return"{...}"
y=new P.ch("")
try{C.a.u($.$get$b5(),a)
x=y
x.a=x.gaA()+"{"
z.a=!0
a.bg(0,new P.fN(z,y))
z=y
z.a=z.gaA()+"}"}finally{z=$.$get$b5()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.gaA()
return z.charCodeAt(0)==0?z:z},
i9:{"^":"cc;a,0b,0c,0d,0e,$ti",
gv:function(a){return this.a},
gaj:function(){return new P.ia(this,[H.l(this,0)])},
cI:function(a){var z
if((a&0x3ffffff)===a){z=this.c
return z==null?!1:z[a]!=null}else return this.ea(a)},
ea:function(a){var z=this.d
if(z==null)return!1
return this.aB(this.b3(z,a),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
y=z==null?null:P.e4(z,b)
return y}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
y=x==null?null:P.e4(x,b)
return y}else return this.ej(b)},
ej:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.b3(z,a)
x=this.aB(y,a)
return x<0?null:y[x+1]},
i:function(a,b,c){var z
H.o(b,H.l(this,0))
H.o(c,H.l(this,1))
if((b&0x3ffffff)===b){z=this.c
if(z==null){z=P.e5()
this.c=z}this.e2(z,b,c)}else this.ew(b,c)},
ew:function(a,b){var z,y,x,w
H.o(a,H.l(this,0))
H.o(b,H.l(this,1))
z=this.d
if(z==null){z=P.e5()
this.d=z}y=this.aM(a)
x=z[y]
if(x==null){P.cm(z,y,[a,b]);++this.a
this.e=null}else{w=this.aB(x,a)
if(w>=0)x[w+1]=b
else{x.push(a,b);++this.a
this.e=null}}},
bg:function(a,b){var z,y,x,w,v
z=H.l(this,0)
H.t(b,{func:1,ret:-1,args:[z,H.l(this,1)]})
y=this.ck()
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(H.o(v,z),this.h(0,v))
if(y!==this.e)throw H.h(P.a4(this))}},
ck:function(){var z,y,x,w,v,u,t,s,r,q,p,o
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
this.e=null}P.cm(a,b,c)},
aM:function(a){return J.aF(a)&0x3ffffff},
b3:function(a,b){return a[this.aM(b)]},
aB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;y+=2)if(J.ae(a[y],b))return y
return-1},
$isjK:1,
q:{
e4:function(a,b){var z=a[b]
return z===a?null:z},
cm:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
e5:function(){var z=Object.create(null)
P.cm(z,"<non-identifier-key>",z)
delete z["<non-identifier-key>"]
return z}}},
ia:{"^":"c4;a,$ti",
gv:function(a){return this.a.a},
gP:function(a){var z=this.a
return new P.ib(z,z.ck(),0,this.$ti)}},
ib:{"^":"c;a,b,c,0d,$ti",
saL:function(a){this.d=H.o(a,H.l(this,0))},
gH:function(){return this.d},
G:function(){var z,y,x
z=this.b
y=this.c
x=this.a
if(z!==x.e)throw H.h(P.a4(x))
else if(y>=z.length){this.saL(null)
return!1}else{this.saL(z[y])
this.c=y+1
return!0}},
$isap:1},
id:{"^":"ic;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){var z=new P.ie(this,this.r,this.$ti)
z.c=this.e
return z},
gv:function(a){return this.a},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.k(z[b],"$isco")!=null}else{y=this.e9(b)
return y}},
e9:function(a){var z=this.d
if(z==null)return!1
return this.aB(this.b3(z,a),a)>=0},
u:function(a,b){var z,y
H.o(b,H.l(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cp()
this.b=z}return this.cg(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cp()
this.c=y}return this.cg(y,b)}else return this.e1(b)},
e1:function(a){var z,y,x
H.o(a,H.l(this,0))
z=this.d
if(z==null){z=P.cp()
this.d=z}y=this.aM(a)
x=z[y]
if(x==null)z[y]=[this.by(a)]
else{if(this.aB(x,a)>=0)return!1
x.push(this.by(a))}return!0},
cg:function(a,b){H.o(b,H.l(this,0))
if(H.k(a[b],"$isco")!=null)return!1
a[b]=this.by(b)
return!0},
el:function(){this.r=this.r+1&67108863},
by:function(a){var z,y
z=new P.co(H.o(a,H.l(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.el()
return z},
aM:function(a){return J.aF(a)&0x3ffffff},
b3:function(a,b){return a[this.aM(b)]},
aB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ae(a[y].a,b))return y
return-1},
q:{
cp:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
co:{"^":"c;a,0b,0c"},
ie:{"^":"c;a,b,0c,0d,$ti",
saL:function(a){this.d=H.o(a,H.l(this,0))},
gH:function(){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.a4(z))
else{z=this.c
if(z==null){this.saL(null)
return!1}else{this.saL(H.o(z.a,H.l(this,0)))
this.c=this.c.b
return!0}}},
$isap:1},
ic:{"^":"hs;"},
fJ:{"^":"ig;",$isv:1,$isd:1},
K:{"^":"c;$ti",
gP:function(a){return new H.dd(a,this.gv(a),0,[H.b9(this,a,"K",0)])},
a8:function(a,b){return this.h(a,b)},
fb:function(a,b,c,d){var z,y,x
H.o(b,d)
H.t(c,{func:1,ret:d,args:[d,H.b9(this,a,"K",0)]})
z=this.gv(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gv(a))throw H.h(P.a4(a))}return y},
c8:function(a,b){return H.ci(a,b,null,H.b9(this,a,"K",0))},
p:function(a,b){var z,y
z=[H.b9(this,a,"K",0)]
H.i(b,"$isd",z,"$asd")
y=H.f([],z)
C.a.sv(y,C.c.p(this.gv(a),b.gv(b)))
C.a.aK(y,0,this.gv(a),a)
C.a.aK(y,this.gv(a),y.length,b)
return y},
n:function(a){return P.c7(a,"[","]")}},
cc:{"^":"bF;"},
fN:{"^":"r:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
bF:{"^":"c;$ti",
bg:function(a,b){var z,y
H.t(b,{func:1,ret:-1,args:[H.al(this,"bF",0),H.al(this,"bF",1)]})
for(z=J.bs(this.gaj());z.G();){y=z.gH()
b.$2(y,this.h(0,y))}},
gv:function(a){return J.a9(this.gaj())},
n:function(a){return P.dg(this)},
$isdf:1},
ht:{"^":"c;$ti",
ac:function(a,b){var z
for(z=J.bs(H.i(b,"$isv",this.$ti,"$asv"));z.G();)this.u(0,z.gH())},
n:function(a){return P.c7(this,"{","}")},
$isv:1,
$iskb:1},
hs:{"^":"ht;"},
ig:{"^":"c+K;"}}],["","",,P,{"^":"",
fr:function(a){if(a instanceof H.r)return a.n(0)
return"Instance of '"+H.b1(a)+"'"},
ar:function(a,b,c,d){var z,y
H.o(b,d)
z=J.fB(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.i(z,y,b)
return H.i(z,"$isd",[d],"$asd")},
fK:function(a,b,c){var z,y
z=H.f([],[c])
for(y=a.gP(a);y.G();)C.a.u(z,H.o(y.gH(),c))
return z},
bB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aG(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fr(a)},
R:{"^":"c;"},
"+bool":0,
aA:{"^":"W;"},
"+double":0,
af:{"^":"c;a",
p:function(a,b){return new P.af(C.c.p(this.a,b.gh_()))},
B:function(a,b){return C.c.B(this.a,H.k(b,"$isaf").a)},
U:function(a,b){return C.c.U(this.a,H.k(b,"$isaf").a)},
a3:function(a,b){if(b==null)return!1
if(!(b instanceof P.af))return!1
return this.a===b.a},
gM:function(a){return this.a&0x1FFFFFFF},
aE:function(a,b){return C.c.aE(this.a,H.k(b,"$isaf").a)},
n:function(a){var z,y,x,w,v
z=new P.fk()
y=this.a
if(y<0)return"-"+new P.af(0-y).n(0)
x=z.$1(C.c.aC(y,6e7)%60)
w=z.$1(C.c.aC(y,1e6)%60)
v=new P.fj().$1(y%1e6)
return""+C.c.aC(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isE:1,
$asE:function(){return[P.af]},
q:{
cZ:function(a,b,c,d,e,f){return new P.af(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fj:{"^":"r:4;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fk:{"^":"r:4;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{"^":"c;"},
dl:{"^":"I;",
n:function(a){return"Throw of null."}},
an:{"^":"I;a,b,c,d",
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
n:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gbv()+y+x
if(!this.a)return w
v=this.gbu()
u=P.bB(this.b)
return w+v+": "+H.e(u)},
q:{
eP:function(a,b,c){return new P.an(!0,a,b,c)}}},
dn:{"^":"an;e,f,a,b,c,d",
gbv:function(){return"RangeError"},
gbu:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
q:{
ce:function(a,b,c){return new P.dn(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")},
dp:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.ai(a,0,c,"start",f))
if(a>b||b>c)throw H.h(P.ai(b,a,c,"end",f))
return b}}},
fw:{"^":"an;e,v:f>,a,b,c,d",
gbv:function(){return"RangeError"},
gbu:function(){if(J.cD(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
q:{
bh:function(a,b,c,d,e){var z=H.j(e!=null?e:J.a9(b))
return new P.fw(b,z,!0,a,c,"Index out of range")}}},
hO:{"^":"I;a",
n:function(a){return"Unsupported operation: "+this.a},
q:{
a_:function(a){return new P.hO(a)}}},
hM:{"^":"I;a",
n:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
dV:function(a){return new P.hM(a)}}},
bI:{"^":"I;a",
n:function(a){return"Bad state: "+this.a},
q:{
dw:function(a){return new P.bI(a)}}},
f0:{"^":"I;a",
n:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bB(z))+"."},
q:{
a4:function(a){return new P.f0(a)}}},
dv:{"^":"c;",
n:function(a){return"Stack Overflow"},
$isI:1},
f5:{"^":"I;a",
n:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
i8:{"^":"c;a",
n:function(a){return"Exception: "+this.a}},
bf:{"^":"c;"},
u:{"^":"W;"},
"+int":0,
v:{"^":"c;$ti",
bY:["dJ",function(a,b){var z=H.al(this,"v",0)
return new H.dZ(this,H.t(b,{func:1,ret:P.R,args:[z]}),[z])}],
gv:function(a){var z,y
z=this.gP(this)
for(y=0;z.G();)++y
return y},
gax:function(a){var z,y
z=this.gP(this)
if(!z.G())throw H.h(H.fy())
y=z.gH()
if(z.G())throw H.h(H.fA())
return y},
a8:function(a,b){var z,y,x
if(b<0)H.aD(P.ai(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.G();){x=z.gH()
if(b===y)return x;++y}throw H.h(P.bh(b,this,"index",null,y))},
n:function(a){return P.fx(this,"(",")")}},
ap:{"^":"c;$ti"},
d:{"^":"c;$ti",$isv:1},
"+List":0,
M:{"^":"c;",
gM:function(a){return P.c.prototype.gM.call(this,this)},
n:function(a){return"null"}},
"+Null":0,
W:{"^":"c;",$isE:1,
$asE:function(){return[P.W]}},
"+num":0,
c:{"^":";",
a3:function(a,b){return this===b},
gM:function(a){return H.b0(this)},
n:function(a){return"Instance of '"+H.b1(this)+"'"},
toString:function(){return this.n(this)}},
bJ:{"^":"c;a,b",
b_:function(a){var z,y,x
if(this.b!=null){z=this.a
y=H.j($.bl.$0())
x=this.b
if(typeof y!=="number")return y.t()
if(typeof x!=="number")return H.G(x)
if(typeof z!=="number")return z.p()
this.a=z+(y-x)
this.b=null}},
ak:function(a){var z=this.b
this.a=z==null?H.j($.bl.$0()):z},
gae:function(){var z,y
z=this.b
if(z==null)z=H.j($.bl.$0())
y=this.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.G(y)
return z-y}},
m:{"^":"c;",$isE:1,
$asE:function(){return[P.m]},
$ishf:1},
"+String":0,
ch:{"^":"c;aA:a<",
gv:function(a){return this.a.length},
n:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dx:function(a,b,c){var z=J.bs(b)
if(!z.G())return a
if(c.length===0){do a+=H.e(z.gH())
while(z.G())}else{a+=H.e(z.gH())
for(;z.G();)a=a+c+H.e(z.gH())}return a}}}}],["","",,W,{"^":"",
fp:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).a_(z,a,b,c)
y.toString
z=W.p
z=new H.dZ(new W.a0(y),H.t(new W.fq(),{func:1,ret:P.R,args:[z]}),[z])
return H.k(z.gax(z),"$isX")},
aQ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eH(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aE(x)}return z},
i7:function(a,b){return document.createElement(a)},
iD:function(a){if(a==null)return
return W.e2(a)},
iN:function(a,b){var z
H.t(a,{func:1,ret:-1,args:[b]})
z=$.ay
if(z===C.r)return a
return z.cD(a,b)},
D:{"^":"X;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
eL:{"^":"D;",
n:function(a){return String(a)},
$iseL:1,
"%":"HTMLAnchorElement"},
jj:{"^":"D;",
n:function(a){return String(a)},
"%":"HTMLAreaElement"},
cJ:{"^":"D;",$iscJ:1,"%":"HTMLBaseElement"},
bt:{"^":"D;",$isbt:1,"%":"HTMLBodyElement"},
cN:{"^":"D;0height",
sai:function(a,b){a.height=H.j(b)},
$iscN:1,
"%":"HTMLCanvasElement"},
cO:{"^":"A;",
eI:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
fY:function(a,b,c,d,e){return a.strokeText(b,c,d,e)},
dG:function(a,b,c,d){return a.strokeText(b,c,d)},
bT:function(a,b,c){return a.lineTo(H.ba(b),H.ba(c))},
cW:function(a,b,c){return a.moveTo(H.ba(b),H.ba(c))},
$iscO:1,
"%":"CanvasRenderingContext2D"},
jm:{"^":"p;0v:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fh:{"^":"p;",
eE:function(a,b){return a.adoptNode(b)},
bU:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
jn:{"^":"A;",
n:function(a){return String(a)},
"%":"DOMException"},
fi:{"^":"A;",
eT:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
X:{"^":"p;0fA:tagName=",
geG:function(a){return new W.i6(a)},
n:function(a){return a.localName},
a_:["bq",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d1
if(z==null){z=H.f([],[W.a5])
y=new W.dj(z)
C.a.u(z,W.e6(null))
C.a.u(z,W.ed())
$.d1=y
d=y}else d=z
z=$.d0
if(z==null){z=new W.ef(d)
$.d0=z
c=z}else{z.a=d
c=z}}if($.ab==null){z=document
y=z.implementation
y=(y&&C.Q).eT(y,"")
$.ab=y
$.c5=y.createRange()
y=$.ab
y.toString
y=y.createElement("base")
H.k(y,"$iscJ")
y.href=z.baseURI
z=$.ab.head;(z&&C.R).ad(z,y)}z=$.ab
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.k(y,"$isbt")}z=$.ab
if(!!this.$isbt)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ab.body;(z&&C.q).ad(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.a5,a.tagName)){z=$.c5;(z&&C.K).da(z,x)
z=$.c5
w=(z&&C.K).eR(z,b)}else{x.innerHTML=b
w=$.ab.createDocumentFragment()
for(z=J.B(w);y=x.firstChild,y!=null;)z.ad(w,y)}z=$.ab.body
if(x==null?z!=null:x!==z)J.cF(x)
c.c4(w)
C.u.eE(document,w)
return w},function(a,b,c){return this.a_(a,b,c,null)},"eS",null,null,"gh4",5,5,null],
scT:function(a,b){this.bn(a,b)},
bo:function(a,b,c,d){a.textContent=null
this.ad(a,this.a_(a,b,c,d))},
bn:function(a,b){return this.bo(a,b,null,null)},
aH:function(a,b){return a.getAttribute(b)},
eo:function(a,b){return a.removeAttribute(b)},
dc:function(a,b,c){return a.setAttribute(b,c)},
$isX:1,
"%":";Element"},
fq:{"^":"r:15;",
$1:function(a){return!!J.z(H.k(a,"$isp")).$isX}},
jo:{"^":"D;0height",
sai:function(a,b){a.height=H.q(b)},
"%":"HTMLEmbedElement"},
d2:{"^":"A;","%":";EventTarget"},
jJ:{"^":"D;0v:length=","%":"HTMLFormElement"},
fu:{"^":"D;","%":"HTMLHeadElement"},
fv:{"^":"fh;","%":"HTMLDocument"},
jL:{"^":"D;0height",
sai:function(a,b){a.height=H.q(b)},
"%":"HTMLIFrameElement"},
jN:{"^":"D;0height",
sai:function(a,b){a.height=H.j(b)},
"%":"HTMLImageElement"},
jP:{"^":"D;0height",
sai:function(a,b){a.height=H.j(b)},
"%":"HTMLInputElement"},
fL:{"^":"A;",
n:function(a){return String(a)},
$isfL:1,
"%":"Location"},
fQ:{"^":"D;","%":"HTMLAudioElement;HTMLMediaElement"},
a0:{"^":"fJ;a",
gax:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.h(P.dw("No elements"))
if(y>1)throw H.h(P.dw("More than one element"))
return z.firstChild},
ac:function(a,b){var z,y,x,w,v
H.i(b,"$isv",[W.p],"$asv")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.B(y),v=0;v<x;++v)w.ad(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.k(c,"$isp")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.b(y,b)
J.eB(z,c,y[b])},
gP:function(a){var z=this.a.childNodes
return new W.d3(z,z.length,-1,[H.b9(C.a7,z,"aS",0)])},
gv:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.b(z,b)
return z[b]},
$asK:function(){return[W.p]},
$asv:function(){return[W.p]},
$asd:function(){return[W.p]}},
p:{"^":"d2;0au:parentElement=,0fo:previousSibling=",
fu:function(a){var z=a.parentNode
if(z!=null)J.br(z,a)},
n:function(a){var z=a.nodeValue
return z==null?this.dI(a):z},
ad:function(a,b){return a.appendChild(b)},
ep:function(a,b){return a.removeChild(b)},
er:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
h0:{"^":"ii;",
gv:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bh(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.k(c,"$isp")
throw H.h(P.a_("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$isaq:1,
$asaq:function(){return[W.p]},
$asK:function(){return[W.p]},
$isv:1,
$asv:function(){return[W.p]},
$isd:1,
$asd:function(){return[W.p]},
$asaS:function(){return[W.p]},
"%":"NodeList|RadioNodeList"},
jX:{"^":"D;0height",
sai:function(a,b){a.height=H.q(b)},
"%":"HTMLObjectElement"},
hm:{"^":"A;",
eR:function(a,b){return a.createContextualFragment(b)},
da:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
ka:{"^":"D;0v:length=","%":"HTMLSelectElement"},
hE:{"^":"D;",
a_:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
z=W.fp("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a0(y).ac(0,new W.a0(z))
return y},
"%":"HTMLTableElement"},
kd:{"^":"D;",
a_:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.N.a_(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.gax(z)
x.toString
z=new W.a0(x)
w=z.gax(z)
y.toString
w.toString
new W.a0(y).ac(0,new W.a0(w))
return y},
"%":"HTMLTableRowElement"},
ke:{"^":"D;",
a_:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.N.a_(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.gax(z)
y.toString
x.toString
new W.a0(y).ac(0,new W.a0(x))
return y},
"%":"HTMLTableSectionElement"},
dz:{"^":"D;",
bo:function(a,b,c,d){var z
a.textContent=null
z=this.a_(a,b,c,d)
J.eC(a.content,z)},
bn:function(a,b){return this.bo(a,b,null,null)},
$isdz:1,
"%":"HTMLTemplateElement"},
ki:{"^":"fQ;0height",
sai:function(a,b){a.height=H.j(b)},
"%":"HTMLVideoElement"},
hT:{"^":"d2;",
d_:function(a,b){H.t(b,{func:1,ret:-1,args:[P.W]})
this.eh(a)
return this.es(a,W.iN(b,P.W))},
es:function(a,b){return a.requestAnimationFrame(H.b6(H.t(b,{func:1,ret:-1,args:[P.W]}),1))},
eh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
gau:function(a){return W.iD(a.parent)},
$ise_:1,
"%":"DOMWindow|Window"},
e1:{"^":"p;",$ise1:1,"%":"Attr"},
kp:{"^":"iC;",
gv:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bh(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.k(c,"$isp")
throw H.h(P.a_("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$isaq:1,
$asaq:function(){return[W.p]},
$asK:function(){return[W.p]},
$isv:1,
$asv:function(){return[W.p]},
$isd:1,
$asd:function(){return[W.p]},
$asaS:function(){return[W.p]},
"%":"MozNamedAttrMap|NamedNodeMap"},
i4:{"^":"cc;ef:a<",
bg:function(a,b){var z,y,x,w,v,u
H.t(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=this.gaj(),y=z.length,x=this.a,w=J.B(x),v=0;v<z.length;z.length===y||(0,H.cC)(z),++v){u=z[v]
b.$2(u,w.aH(x,u))}},
gaj:function(){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
v=H.k(z[w],"$ise1")
if(v.namespaceURI==null)C.a.u(y,v.name)}return y},
$asbF:function(){return[P.m,P.m]},
$asdf:function(){return[P.m,P.m]}},
i6:{"^":"i4;a",
h:function(a,b){return J.bV(this.a,H.q(b))},
i:function(a,b,c){J.eI(this.a,b,c)},
gv:function(a){return this.gaj().length}},
bp:{"^":"c;a",
dX:function(a){var z,y
z=$.$get$cn()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.a4[y],W.j1())
for(y=0;y<12;++y)z.i(0,C.z[y],W.j2())}},
aD:function(a){return $.$get$e7().V(0,W.aQ(a))},
ar:function(a,b,c){var z,y,x
z=W.aQ(a)
y=$.$get$cn()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.iR(x.$4(a,b,c,this))},
$isa5:1,
q:{
e6:function(a){var z,y
z=document.createElement("a")
y=new W.im(z,window.location)
y=new W.bp(y)
y.dX(a)
return y},
kn:[function(a,b,c,d){H.k(a,"$isX")
H.q(b)
H.q(c)
H.k(d,"$isbp")
return!0},"$4","j1",16,0,8],
ko:[function(a,b,c,d){var z,y,x,w,v
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
return z},"$4","j2",16,0,8]}},
aS:{"^":"c;$ti",
gP:function(a){return new W.d3(a,this.gv(a),-1,[H.b9(this,a,"aS",0)])}},
dj:{"^":"c;a",
aD:function(a){return C.a.cC(this.a,new W.h2(a))},
ar:function(a,b,c){return C.a.cC(this.a,new W.h1(a,b,c))},
$isa5:1},
h2:{"^":"r:5;a",
$1:function(a){return H.k(a,"$isa5").aD(this.a)}},
h1:{"^":"r:5;a,b,c",
$1:function(a){return H.k(a,"$isa5").ar(this.a,this.b,this.c)}},
io:{"^":"c;",
dY:function(a,b,c,d){var z,y,x
this.a.ac(0,c)
z=b.bY(0,new W.ip())
y=b.bY(0,new W.iq())
this.b.ac(0,z)
x=this.c
x.ac(0,C.a6)
x.ac(0,y)},
aD:function(a){return this.a.V(0,W.aQ(a))},
ar:["dL",function(a,b,c){var z,y
z=W.aQ(a)
y=this.c
if(y.V(0,H.e(z)+"::"+b))return this.d.eF(c)
else if(y.V(0,"*::"+b))return this.d.eF(c)
else{y=this.b
if(y.V(0,H.e(z)+"::"+b))return!0
else if(y.V(0,"*::"+b))return!0
else if(y.V(0,H.e(z)+"::*"))return!0
else if(y.V(0,"*::*"))return!0}return!1}],
$isa5:1},
ip:{"^":"r:6;",
$1:function(a){return!C.a.V(C.z,H.q(a))}},
iq:{"^":"r:6;",
$1:function(a){return C.a.V(C.z,H.q(a))}},
it:{"^":"io;e,a,b,c,d",
ar:function(a,b,c){if(this.dL(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bV(a,"template")==="")return this.e.V(0,b)
return!1},
q:{
ed:function(){var z,y,x,w,v
z=P.m
y=P.dc(C.y,z)
x=H.l(C.y,0)
w=H.t(new W.iu(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.it(y,P.bE(null,null,null,z),P.bE(null,null,null,z),P.bE(null,null,null,z),null)
y.dY(null,new H.fO(C.y,w,[x,z]),v,null)
return y}}},
iu:{"^":"r:16;",
$1:function(a){return"TEMPLATE::"+H.e(H.q(a))}},
is:{"^":"c;",
aD:function(a){var z=J.z(a)
if(!!z.$isdr)return!1
z=!!z.$isx
if(z&&W.aQ(a)==="foreignObject")return!1
if(z)return!0
return!1},
ar:function(a,b,c){if(b==="is"||C.v.dC(b,"on"))return!1
return this.aD(a)},
$isa5:1},
d3:{"^":"c;a,b,c,0d,$ti",
scq:function(a){this.d=H.o(a,H.l(this,0))},
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scq(J.ez(this.a,z))
this.c=z
return!0}this.scq(null)
this.c=y
return!1},
gH:function(){return this.d},
$isap:1},
i5:{"^":"c;a",
gau:function(a){return W.e2(this.a.parent)},
$ise_:1,
q:{
e2:function(a){if(a===window)return H.k(a,"$ise_")
else return new W.i5(a)}}},
a5:{"^":"c;"},
im:{"^":"c;a,b",$iskg:1},
ef:{"^":"c;a",
c4:function(a){new W.iz(this).$2(a,null)},
aN:function(a,b){if(b==null)J.cF(a)
else J.br(b,a)},
ev:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eE(a)
x=J.bV(y.gef(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aE(t)}v="element unprintable"
try{v=J.aG(a)}catch(t){H.aE(t)}try{u=W.aQ(a)
this.eu(H.k(a,"$isX"),b,z,v,u,H.k(y,"$isdf"),H.q(x))}catch(t){if(H.aE(t) instanceof P.an)throw t
else{this.aN(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
eu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.aN(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aD(a)){this.aN(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ar(a,"is",g)){this.aN(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaj()
y=H.f(z.slice(0),[H.l(z,0)])
for(x=f.gaj().length-1,z=f.a,w=J.B(z);x>=0;--x){if(x>=y.length)return H.b(y,x)
v=y[x]
if(!this.a.ar(a,J.eJ(v),w.aH(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.aH(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aH(z,v)
w.eo(z,v)}}if(!!J.z(a).$isdz)this.c4(a.content)},
$isjW:1},
iz:{"^":"r:17;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ev(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aN(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eG(z)}catch(w){H.aE(w)
v=H.k(z,"$isp")
if(x){u=v.parentNode
if(u!=null)J.br(u,v)}else J.br(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.k(y,"$isp")}}},
ih:{"^":"A+K;"},
ii:{"^":"ih+aS;"},
iB:{"^":"A+K;"},
iC:{"^":"iB+aS;"}}],["","",,P,{"^":"",eM:{"^":"A;",$iseM:1,"%":"SVGAnimatedLength"},eN:{"^":"A;",$iseN:1,"%":"SVGAnimatedLengthList"},eO:{"^":"A;",$iseO:1,"%":"SVGAnimatedNumber"},jp:{"^":"x;0k:x=,0l:y=","%":"SVGFEBlendElement"},jq:{"^":"x;0k:x=,0l:y=","%":"SVGFEColorMatrixElement"},jr:{"^":"x;0k:x=,0l:y=","%":"SVGFEComponentTransferElement"},js:{"^":"x;0k:x=,0l:y=","%":"SVGFECompositeElement"},jt:{"^":"x;0k:x=,0l:y=","%":"SVGFEConvolveMatrixElement"},ju:{"^":"x;0k:x=,0l:y=","%":"SVGFEDiffuseLightingElement"},jv:{"^":"x;0k:x=,0l:y=","%":"SVGFEDisplacementMapElement"},jw:{"^":"x;0k:x=,0l:y=","%":"SVGFEFloodElement"},jx:{"^":"x;0k:x=,0l:y=","%":"SVGFEGaussianBlurElement"},jy:{"^":"x;0k:x=,0l:y=","%":"SVGFEImageElement"},jz:{"^":"x;0k:x=,0l:y=","%":"SVGFEMergeElement"},jA:{"^":"x;0k:x=,0l:y=","%":"SVGFEMorphologyElement"},jB:{"^":"x;0k:x=,0l:y=","%":"SVGFEOffsetElement"},jC:{"^":"x;0k:x=,0l:y=","%":"SVGFEPointLightElement"},jD:{"^":"x;0k:x=,0l:y=","%":"SVGFESpecularLightingElement"},jE:{"^":"x;0k:x=,0l:y=","%":"SVGFESpotLightElement"},jF:{"^":"x;0k:x=,0l:y=","%":"SVGFETileElement"},jG:{"^":"x;0k:x=,0l:y=","%":"SVGFETurbulenceElement"},jH:{"^":"x;0k:x=,0l:y=","%":"SVGFilterElement"},jI:{"^":"aR;0k:x=,0l:y=","%":"SVGForeignObjectElement"},ft:{"^":"aR;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aR:{"^":"x;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},jO:{"^":"aR;0k:x=,0l:y=","%":"SVGImageElement"},jU:{"^":"x;0k:x=,0l:y=","%":"SVGMaskElement"},k4:{"^":"x;0k:x=,0l:y=","%":"SVGPatternElement"},k5:{"^":"A;0v:length=","%":"SVGPointList"},k9:{"^":"ft;0k:x=,0l:y=","%":"SVGRectElement"},dr:{"^":"x;",$isdr:1,"%":"SVGScriptElement"},x:{"^":"X;",
scT:function(a,b){this.bn(a,b)},
a_:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.a5])
C.a.u(z,W.e6(null))
C.a.u(z,W.ed())
C.a.u(z,new W.is())
c=new W.ef(new W.dj(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).eS(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a0(w)
u=z.gax(z)
for(z=J.B(v);x=u.firstChild,x!=null;)z.ad(v,x)
return v},
$isx:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kc:{"^":"aR;0k:x=,0l:y=","%":"SVGSVGElement"},hH:{"^":"aR;","%":"SVGTextPathElement;SVGTextContentElement"},kf:{"^":"hH;0k:x=,0l:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},kh:{"^":"aR;0k:x=,0l:y=","%":"SVGUseElement"}}],["","",,P,{"^":"",d5:{"^":"c;",$isv:1,
$asv:function(){return[P.aA]},
$isd:1,
$asd:function(){return[P.aA]}}}],["","",,P,{"^":""}],["","",,V,{"^":"",
hd:function(a){return a.gbQ(a).B(0,0)},
f1:{"^":"c;",
c7:function(a,b){var z,y,x
z=a.y
y=b.y
x=z.c
if(x===y.c&&x!==0)return x>0
return(z.b&y.a)!==0&&(z.a&y.b)!==0}},
cQ:{"^":"c;a,b,c"},
f6:{"^":"c;"},
N:{"^":"c;a,b",
bZ:function(a){var z,y
z=this.a.a
y=this.b.a
a.sk(0,(z[0]+y[0])*0.5)
a.sl(0,(z[1]+y[1])*0.5)},
L:function(a,b){var z,y,x,w,v
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
aa:function(){var z,y
z=this.b.a
y=this.a.a
return 2*(z[0]-y[0]+z[1]-y[1])},
n:function(a){return"AABB["+this.a.n(0)+" . "+this.b.n(0)+"]"},
q:{
eK:function(a,b){var z,y
z=b.a.a
y=a.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=a.a.a
y=b.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0}}},
f7:{"^":"c;a,b,0c,d,e,0f,r,x,y",
sct:function(a){this.c=H.i(a,"$isd",[P.u],"$asd")},
scu:function(a){this.f=H.i(a,"$isd",[V.ah],"$asd")},
dQ:function(a){var z,y
z=new Array(this.r)
z.fixed$length=Array
this.scu(H.f(z,[V.ah]))
for(y=0;y<this.r;++y){z=this.f;(z&&C.a).i(z,y,new V.ah(0,0))}this.sct(P.ar(this.d,0,!1,P.u))},
fB:function(a,b){var z,y,x,w
z=this.a
y=z.b
if(a<0||a>=y.length)return H.b(y,a)
x=y[a].gap()
z=z.b
if(b<0||b>=z.length)return H.b(z,b)
w=z[b].gap()
z=w.a.a
y=x.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=x.a.a
y=w.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0},
bX:function(a){var z,y,x,w,v,u,t,s,r
this.x=0
for(z=this.a,y=0;y<this.e;++y){x=this.c
if(y>=x.length)return H.b(x,y)
x=H.j(x[y])
this.y=x
if(x===-1)continue
z.fq(this,C.a.h(z.b,x).gap())}this.e=0
F.ew(this.f,0,this.x,V.ah)
for(y=0;y<this.x;){x=this.f
if(y<0||y>=x.length)return H.b(x,y)
w=x[y]
x=w.a
v=C.a.h(z.b,x).gal()
x=w.b
a.eD(v,C.a.h(z.b,x).gal());++y
for(x=this.x,u=this.f;y<x;){if(y>=u.length)return H.b(u,y)
t=u[y]
s=t.a
r=w.a
if(s==null?r==null:s===r){s=t.b
r=w.b
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)break;++y}}},
cE:function(a){var z,y,x
z=this.e
y=this.d
if(z===y){x=this.c
z=y*2
this.d=z
z=new Array(z)
z.fixed$length=Array
this.sct(H.f(z,[P.u]))
C.a.Y(this.c,0,x.length,x,0)}C.a.i(this.c,this.e,a);++this.e},
d0:function(a){var z,y,x,w,v
if(a===this.y)return!0
z=this.x
y=this.r
if(z===y){x=this.f
z=y*2
this.r=z
z=new Array(z)
z.fixed$length=Array
this.scu(H.f(z,[V.ah]))
z=this.f
w=x.length;(z&&C.a).Y(z,0,w,x,0)
for(;w<this.r;++w){z=this.f;(z&&C.a).i(z,w,new V.ah(0,0))}}z=this.y
if(typeof z!=="number")return H.G(z)
y=this.f
v=this.x
if(a<z){if(v>=y.length)return H.b(y,v)
y[v].scX(a)
z=this.f
y=this.x
if(y>=z.length)return H.b(z,y)
z[y].scY(this.y)}else{if(v>=y.length)return H.b(y,v)
y[v].scX(z)
z=this.f
y=this.x
if(y>=z.length)return H.b(z,y)
z[y].scY(a)}++this.x
return!0},
$ishJ:1,
$isjk:1,
q:{
f8:function(a){var z=new V.f7(a,0,16,0,16,0,-1)
z.dQ(a)
return z}}},
fl:{"^":"c;0a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy",
sem:function(a){this.b=H.i(a,"$isd",[V.aa],"$asd")},
sfk:function(a){this.r=H.i(a,"$isd",[V.aa],"$asd")},
dS:function(){var z,y,x,w,v
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
y=v}J.cH(w,y)
y=this.b
if(z>=y.length)return H.b(y,z)
J.cG(y[z],-1)}for(y=this.f,z=0;z<4;++z)C.a.i(y,z,new E.a(new Float64Array(2)))},
fi:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
this.cr(a)
return!0},
fq:function(a,b){var z,y,x,w,v
this.x=0
z=this.r
this.x=1
C.a.i(z,0,this.a)
for(z=[V.aa];y=this.x,y>0;){x=this.r;--y
this.x=y
if(y>=x.length)return H.b(x,y)
w=x[y]
if(w==null)continue
if(V.eK(w.a,b))if(w.d==null)a.d0(w.f)
else{y=this.r.length
if(y-this.x-2<=0){y=new Array(y*2)
y.fixed$length=Array
v=H.f(y,z)
y=this.r
C.a.Y(v,0,y.length,y,0)
this.sfk(v)}C.a.i(this.r,this.x++,w.d)
C.a.i(this.r,this.x++,w.e)}}},
bs:function(a){var z=a.d
if(z==null)return 0
return H.j(1+Math.max(this.bs(z),this.bs(a.e)))},
ci:function(){var z,y,x,w,v,u,t
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
z=u}J.cH(v,z)
z=this.b
if(x>=z.length)return H.b(z,x)
J.cG(z[x],-1)}this.e=z}w=this.b
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
cn:function(a){var z,y
z=this.e
if(z!==-1){y=this.b
if(z<0||z>=y.length)return H.b(y,z)
z=y[z]}else z=null
a.c=H.k(z,"$isaa")
a.r=-1
this.e=a.f;--this.c},
cr:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.b
if(a<0||a>=z.length)return H.b(z,a)
y=z[a]
x=this.a
if(x==null){this.a=y
y.c=null
return}w=y.a
for(z=this.ch;v=x.d,v!=null;){u=x.e
t=x.a
s=t.aa()
z.L(t,w)
r=z.aa()
q=2*r
p=2*(r-s)
if(v.d==null){z.L(w,v.a)
o=z.aa()+p}else{t=v.a
z.L(w,t)
n=t.aa()
o=z.aa()-n+p}if(u.d==null){z.L(w,u.a)
m=z.aa()+p}else{t=u.a
z.L(w,t)
n=t.aa()
m=z.aa()-n+p}if(q<o&&q<m)break
x=o<m?v:u}z=this.b
t=x.f
if(t<0||t>=z.length)return H.b(z,t)
l=J.eF(z[t])
k=this.ci()
k.c=l
k.b=null
k.a.L(w,x.a)
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
this.a=k}for(x=k;x!=null;){x=this.cj(x)
j=x.d
u=x.e
x.r=H.j(1+Math.max(j.r,u.r))
x.a.L(j.a,u.a)
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
this.cn(z)
for(v=y;v!=null;){v=this.cj(v)
u=v.d
t=v.e
v.a.L(u.a,t.a)
v.r=H.j(1+Math.max(u.r,t.r))
v=v.c}}else{this.a=x
x.c=null
this.cn(z)}},
cj:function(a){var z,y,x,w,v,u,t,s
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
u.L(z.a,v.a)
y.a.L(u,w.a)
z=H.j(1+Math.max(z.r,v.r))
a.r=z
y.r=H.j(1+Math.max(z,w.r))}else{y.e=v
a.e=w
w.c=a
u.L(z.a,w.a)
y.a.L(u,v.a)
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
u.L(y.a,s.a)
z.a.L(u,t.a)
u=H.j(1+Math.max(y.r,s.r))
a.r=u
z.r=H.j(1+Math.max(u,t.r))}else{z.e=s
a.d=t
t.c=a
u.L(y.a,t.a)
z.a.L(u,s.a)
u=H.j(1+Math.max(y.r,t.r))
a.r=u
z.r=H.j(1+Math.max(u,s.r))}return z}return a},
f1:function(a){var z,y
z=this.a
if(z==null)return
y=this.bs(z)
this.bK(a,this.a,0,y)},
bK:function(a,b,c,d){var z,y,x,w,v,u
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
x.a4(1,v,v)
a.b8(y,4,x)
y=a.c
y.stroke()
v=this.cy
a.b.aI(z,v)
v=v.a
z=v[0]
v=v[1]
w=c+1
u=H.e(b)+".id-"+w+"/"+d
a.b9(x)
C.j.dG(y,u,z,v)
z=b.d
if(z!=null)this.bK(a,z,w,d)
z=b.e
if(z!=null)this.bK(a,z,w,d)},
$isjl:1,
q:{
fm:function(){var z,y,x,w,v,u,t,s,r,q
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
z=new V.fl(z,0,16,0,x,y,0,new E.a(w),new V.N(new E.a(v),new E.a(u)),new V.cf(new E.a(t),new E.a(s),0),new V.N(new E.a(r),new E.a(q)),new G.bw(0,0,0),new E.a(new Float64Array(2)))
z.dS()
return z}}},
aa:{"^":"c;ap:a<,0al:b<,0au:c>,0d,0e,f,r",
sau:function(a,b){this.c=H.k(b,"$isaa")},
sai:function(a,b){this.r=H.j(b)}},
ah:{"^":"c;a,b",
scX:function(a){this.a=H.j(a)},
scY:function(a){this.b=H.j(a)},
aE:function(a,b){var z,y
H.k(b,"$isah")
z=this.a
y=b.a
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.G(y)
if(z<y)return-1
if(z===y){z=this.b
y=b.b
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.G(y)
if(z<y)z=-1
else z=z===y?0:1
return z}return 1},
$isE:1,
$asE:function(){return[V.ah]}},
e3:{"^":"c;a,b"},
O:{"^":"c;K:a<,b",
D:function(a){var z,y
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
c3:{"^":"c;a,b",
n:function(a){return this.b}},
d_:{"^":"c;a,b,c"},
hF:{"^":"c;a,b,c",
dV:function(){var z,y,x
for(z=this.b,y=this.a,x=0;x<8;++x){C.a.i(y,x,new E.a(new Float64Array(2)))
C.a.i(z,x,new E.a(new Float64Array(2)))}},
q:{
hG:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.a]
z=H.f(z,y)
x=new Array(8)
x.fixed$length=Array
y=new V.hF(z,H.f(x,y),0)
y.dV()
return y}}},
ij:{"^":"c;a,b,c,d,e,f,r,x,y"},
f_:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3",
eK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
a.e=0
z=b.c
y=d.c
x=c.b
w=x.b
v=z.a
u=v[0]
x=x.a
v=v[1]
t=c.a.a
s=t[0]
t=t[1]
r=e.b
q=r.b
p=y.a
o=p[0]
r=r.a
p=p[1]
n=e.a.a
m=q*o-r*p+n[0]-(w*u-x*v+s)
l=r*o+q*p+n[1]-(x*u+w*v+t)
k=b.b+d.b
if(m*m+l*l>k*k)return
a.d=C.n
a.c.j(z)
a.b.I()
a.e=1
x=a.a
x[0].a.j(y)
x[0].d.aX()},
eL:function(b9,c0,c1,c2,c3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
b9.e=0
z=c2.c
y=c3.b
x=c1.b
w=y.b
v=z.a
u=v[0]
t=y.a
s=v[1]
r=c3.a.a
q=r[0]
r=r[1]
p=c1.a.a
o=w*u-t*s+q-p[0]
n=t*u+w*s+r-p[1]
p=x.b
r=x.a
m=p*o+r*n
l=-r*o+p*n
k=c0.gbj().p(0,c2.b)
j=c0.ga6()
i=c0.gam()
h=c0.gaV()
for(g=0,f=-17976931348623157e292,e=0;C.c.B(e,j);++e){d=i.h(0,e)
c=C.b.t(m,d.gk(d))
b=C.b.t(l,d.gl(d))
w=h.h(0,e)
w=w.gk(w).m(0,c)
u=h.h(0,e)
a=w.p(0,u.gl(u).m(0,b))
if(a.U(0,k))return
if(a.U(0,f)){f=a
g=e}}a0=g+1
a0=C.c.B(a0,j)?a0:0
a1=i.h(0,g)
a2=i.h(0,a0)
if(f<11920928955078125e-23){b9.e=1
b9.d=C.i
a3=h.h(0,g)
w=b9.b
w.sk(0,a3.gk(a3))
w.sl(0,a3.gl(a3))
w=b9.c
w.sk(0,a1.gk(a1).p(0,a2.gk(a2)).m(0,0.5))
w.sl(0,a1.gl(a1).p(0,a2.gl(a2)).m(0,0.5))
a4=b9.a[0]
w=a4.a
w.sk(0,v[0])
w.sl(0,v[1])
a4.d.aX()
return}a5=C.b.t(m,a1.gk(a1))
a6=C.b.t(l,a1.gl(a1))
a7=a2.gk(a2).t(0,a1.gk(a1))
a8=a2.gl(a2).t(0,a1.gl(a1))
w=C.b.m(a5,a7)
v=C.b.m(a6,a8)
a9=C.b.t(m,a2.gk(a2))
b0=C.b.t(l,a2.gl(a2))
b1=a1.gk(a1).t(0,a2.gk(a2))
b2=a1.gl(a1).t(0,a2.gl(a2))
u=C.b.m(a9,b1)
t=C.b.m(b0,b2)
if(w+v<=0){b3=C.b.t(m,a1.gk(a1))
b4=C.b.t(l,a1.gl(a1))
if(C.b.U(b3*b3+b4*b4,k.m(0,k)))return
b9.e=1
b9.d=C.i
w=b9.b
w.sk(0,C.b.t(m,a1.gk(a1)))
w.sl(0,C.b.t(l,a1.gl(a1)))
w.S()
b9.c.j(a1)
w=b9.a
w[0].a.j(z)
w[0].d.aX()}else if(u+t<=0){b3=C.b.t(m,a2.gk(a2))
b4=C.b.t(l,a2.gl(a2))
if(C.b.U(b3*b3+b4*b4,k.m(0,k)))return
b9.e=1
b9.d=C.i
w=b9.b
w.sk(0,C.b.t(m,a2.gk(a2)))
w.sl(0,C.b.t(l,a2.gl(a2)))
w.S()
b9.c.j(a2)
w=b9.a
w[0].a.j(z)
w[0].d.aX()}else{b5=a1.gk(a1).p(0,a2.gk(a2)).m(0,0.5)
b6=a1.gl(a1).p(0,a2.gl(a2)).m(0,0.5)
b7=C.b.t(m,b5)
b8=C.b.t(l,b6)
a3=h.h(0,g)
if(C.b.U(C.b.m(b7,a3.gk(a3))+C.b.m(b8,a3.gl(a3)),k))return
b9.e=1
b9.d=C.i
b9.b.j(h.h(0,g))
w=b9.c
w.sk(0,b5)
w.sl(0,b6)
w=b9.a
w[0].a.j(z)
w[0].d.aX()}},
cO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=b.ga6()
y=d.ga6()
x=b.gaV()
w=b.gam()
v=d.gam()
u=this.f
G.dI(e,c,u)
t=u.b
for(s=this.r,r=s.a,q=this.x,p=q.a,o=0,n=-17976931348623157e292,m=0;C.c.B(m,z);++m){G.U(t,x.h(0,m),s)
G.n(u,w.h(0,m),q)
for(l=17976931348623157e292,k=0;C.c.B(k,y);++k){j=v.h(0,k)
i=C.b.m(r[0],j.gk(j).t(0,p[0]))+C.b.m(r[1],j.gl(j).t(0,p[1]))
if(i<l)l=i}if(l>n){n=l
o=m}}a.b=o
a.a=n},
f8:function(a0,a1,a2,a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
H.i(a0,"$isd",[V.O],"$asd")
a1.ga6()
z=a1.gaV()
y=a4.ga6()
x=a4.gam()
w=a4.gaV()
v=a0[0]
u=a0[1]
t=a2.b
s=a5.b
r=z.h(0,a3)
q=C.b.m(t.b,r.gk(r))-C.b.m(t.a,r.gl(r))
p=C.b.m(t.a,r.gk(r))+C.b.m(t.b,r.gl(r))
o=s.b
n=s.a
m=o*q+n*p
l=-n*q+o*p
for(k=0,j=17976931348623157e292,i=0;C.c.B(i,y);++i){h=w.h(0,i)
g=C.b.m(m,h.gk(h))+C.b.m(l,h.gl(h))
if(g<j){j=g
k=i}}f=k+1
f=C.c.B(f,y)?f:0
e=x.h(0,k)
d=v.a
o=a5.a.a
d.sk(0,C.b.m(s.b,e.gk(e))-C.b.m(s.a,e.gl(e))+o[0])
d.sl(0,C.b.m(s.a,e.gk(e))+C.b.m(s.b,e.gl(e))+o[1])
n=a3&255
c=v.b.a
c[0]=n
c[1]=k&255
c[2]=1
c[3]=0
b=x.h(0,f)
a=u.a
a.sk(0,C.b.m(s.b,b.gk(b))-C.b.m(s.a,b.gl(b))+o[0])
a.sl(0,C.b.m(s.a,b.gk(b))+C.b.m(s.b,b.gl(b))+o[1])
o=u.b.a
o[0]=n
o[1]=f&255
o[2]=1
o[3]=0},
eM:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=a8.gbj().p(0,b0.gbj())
y=this.y
this.cO(y,a8,a9,b0,b1)
if(C.b.U(y.a,z))return
x=this.z
this.cO(x,b0,b1,a8,a9)
if(C.b.U(x.a,z))return
if(x.a>y.a+0.0005){w=x.b
a7.d=C.w
v=a9
u=b1
t=a8
s=b0
r=!0}else{w=y.b
a7.d=C.i
v=b1
u=a9
t=b0
s=a8
r=!1}q=u.b
y=this.Q
this.f8(y,s,u,w,t,v)
p=s.ga6()
o=s.gam()
n=w+1
n=C.c.B(n,p)?n:0
x=this.dx
x.j(o.h(0,w))
m=this.dy
m.j(o.h(0,n))
l=this.ch
k=m.a
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
g.sk(0,q.b*l[0]-q.a*l[1])
g.sl(0,q.a*l[0]+q.b*l[1])
l=g.a
f=l[1]
e=-1*l[0]
G.b2(u,x,x)
G.b2(u,m,m)
m=j[0]
j=j[1]
d=f*m+e*j
c=C.b.p(-(l[0]*m+l[1]*j),z)
b=C.b.p(l[0]*k[0]+l[1]*k[1],z)
g.N()
k=this.fr
a=V.bv(k,y,g,c,w)
g.N()
if(a<2)return
y=this.fx
if(V.bv(y,k,g,b,n)<2)return
a7.b.j(i)
a7.c.j(h)
for(x=a7.a,m=v.a.a,l=v.b,a0=0,a1=0;a1<2;++a1){k=y[a1].a.a
if(C.b.d8(f*k[0]+e*k[1]-d,z)){if(a0>=2)return H.b(x,a0)
a2=x[a0]
a3=a2.a
k=y[a1]
j=k.a.a
a4=j[0]-m[0]
a5=j[1]-m[1]
j=l.b
i=l.a
h=a3.a
h[0]=j*a4+i*a5
h[1]=-i*a4+j*a5
j=a2.d
k=k.b.a
j=j.a
j[0]=k[0]
j[1]=k[1]
j[2]=k[2]
j[3]=k[3]
if(r){a6=j[0]
j[0]=j[1]
j[1]=a6
a6=j[2]
j[2]=j[3]
j[3]=a6}++a0}}a7.e=a0},
cG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
a.e=0
z=d.c
y=this.e
G.n(e,z,y)
x=this.fy
G.dJ(c,y,x)
w=b.c
v=b.d
u=this.go
u.j(v)
u.A(w)
y.j(v)
y.A(x)
t=u.w(y)
y.j(x)
y.A(w)
s=u.w(y)
r=b.b+d.b
q=this.id
p=q.a
p[1]=0
p[3]=0
if(s<=0){y=$.$get$ao()
y.j(x)
y.A(w)
y=$.$get$ao()
if(y.w(y)>r*r)return
b.r
p[0]=0
p[2]=0
a.e=1
a.d=C.n
a.b.I()
a.c.j(w)
y=a.a
y[0].d.D(q)
y[0].a.j(z)
return}if(t<=0){y=$.$get$ao()
y.j(x)
y.A(v)
y=$.$get$ao()
if(y.w(y)>r*r)return
b.x
p[0]=1
p[2]=0
a.e=1
a.d=C.n
a.b.I()
a.c.j(v)
y=a.a
y[0].d.D(q)
y[0].a.j(z)
return}o=u.w(u)
n=this.k2
n.j(w)
n.F(0,t)
y.j(v)
y.F(0,s)
n.u(0,y)
n.F(0,1/o)
m=$.$get$ao()
m.j(x)
m.A(n)
n=$.$get$ao()
if(n.w(n)>r*r)return
n=this.r
u=u.a
n.sk(0,-u[1])
n.sl(0,u[0])
y.j(x)
y.A(w)
if(n.w(y)<0){y=n.a
n.O(-y[0],-y[1])}n.S()
p[0]=0
p[2]=1
a.e=1
a.d=C.i
a.b.j(n)
a.c.j(w)
y=a.a
y[0].d.D(q)
y[0].a.j(z)},
q:{
bv:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=[V.O]
H.i(a,"$isd",z,"$asd")
H.i(b,"$isd",z,"$asd")
y=b[0]
x=b[1]
w=y.a
v=x.a
u=c.w(w)-d
t=c.w(v)-d
if(u<=0){a[0].D(y)
s=1}else s=0
if(t<=0){r=s+1
a[s].D(x)
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
hQ:{"^":"c;a,b",
n:function(a){return this.b}},
fn:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx",
dT:function(){var z,y,x,w,v
for(z=this.k2,y=this.k1,x=this.id,w=0;w<2;++w){v=new Float64Array(2)
C.a.i(x,w,new V.O(new E.a(v),new V.Q(new Int8Array(4))))
v=new Float64Array(2)
C.a.i(y,w,new V.O(new E.a(v),new V.Q(new Int8Array(4))))
v=new Float64Array(2)
C.a.i(z,w,new V.O(new E.a(v),new V.Q(new Int8Array(4))))}},
cF:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=this.b
G.dI(c,a0,z)
y=this.c
G.n(z,d.gh3(),y)
this.d=b.e
this.e=b.c
x=b.d
this.f=x
this.r=b.f
b.x
w=this.fr
w.j(x)
w.A(this.e)
w.S()
x=this.y
w=w.a
x.O(w[1],-w[0])
w=this.fx
w.j(y)
w.A(this.e)
v=x.w(w)
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
y.c=d.ga6()
for(u=y.a,t=z.b,s=y.b,q=0;C.c.B(q,d.ga6());++q){r=d.gam().h(0,q)
if(q>=8)return H.b(u,q)
G.n(z,r,u[q])
G.U(t,d.gaV().h(0,q),s[q])}this.dx=0.02
a.e=0
p=this.k4
this.eO(p)
if(p.a===C.p)return
if(p.c>this.dx)return
o=this.r1
this.eP(o)
t=o.a===C.p
if(!t&&o.c>this.dx)return
if(!t)if(o.c>0.98*p.c+0.001)p=o
t=this.id
n=t[0]
m=t[1]
if(p.a===C.t){a.d=C.i
r=this.Q
l=r.w(s[0])
for(k=0,q=1;j=y.c,q<j;++q){if(q>=8)return H.b(s,q)
i=r.w(s[q])
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
r.N()}}else{a.d=C.w
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
x.O(s[1],-s[0])
s=y.x
s.j(x)
s.N()
r=y.c
y.r=x.w(r)
y.y=s.w(y.d)
j=this.k1
if(V.bv(j,t,x,y.r,y.a)<2)return
x=this.k2
if(V.bv(x,j,s,y.y,y.b)<2)return
t=a.b
s=a.c
if(p.a===C.t){t.j(u)
s.j(r)}else{t.j(d.gaV().h(0,y.a))
s.j(d.gam().h(0,y.a))}for(y=w.a,t=a.a,g=0,q=0;q<2;++q){f=x[q].a.a
y[1]=f[1]
y[0]=f[0]
w.A(r)
if(u.w(w)<=this.dx){if(g>=2)return H.b(t,g)
e=t[g]
if(p.a===C.t){G.dJ(z,x[q].a,e.a)
s=e.d
j=x[q].b.a
s=s.a
s[0]=j[0]
s[1]=j[1]
s[2]=j[2]
s[3]=j[3]}else{s=e.a
j=x[q]
f=j.a.a
s=s.a
s[1]=f[1]
s[0]=f[0]
s=e.d
j=j.b.a
s=s.a
s[2]=j[3]
s[3]=j[2]
s[0]=j[1]
s[1]=j[0]}++g}}a.e=g},
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
eP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
w.A(q)
if(w.w(y)<-0.03490658503988659)continue}else{u[1]=h
u[0]=v[0]
w.A(t)
if(w.w(y)<-0.03490658503988659)continue}if(f>a.c){a.a=C.G
a.b=p
a.c=f}}},
q:{
fo:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.hG()
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
z=new V.fn(z,new G.C(new E.a(y),new G.y(0,1)),new E.a(x),new E.a(w),new E.a(v),new E.a(u),new E.a(t),new E.a(s),new E.a(r),new E.a(q),new E.a(p),C.O,C.O,new E.a(o),new E.a(n),0,!1,new E.a(m),new E.a(l),new E.a(k),new E.a(j),i,g,h,new V.ij(0,0,new E.a(f),new E.a(e),new E.a(d),new E.a(c),0,new E.a(b),0),new V.d_(C.p,0,0),new V.d_(C.p,0,0),new E.a(a),new E.a(new Float64Array(2)))
z.dT()
return z}}},
Q:{"^":"c;a",
aY:function(){var z=this.a
return(z[0]<<24|z[1]<<16|z[2]<<8|z[3])>>>0},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
aX:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
aE:function(a,b){H.k(b,"$isQ")
return this.aY()-b.aY()},
$isE:1,
$asE:function(){return[V.Q]}},
bL:{"^":"c;a,b,J:c<,E:d<,e,f",
sE:function(a){this.d=H.b8(a)},
D:function(a){this.a.j(a.a)
this.b.j(a.b)
this.c.j(a.c)
this.d=a.d
this.e=a.e
this.f=a.f}},
hu:{"^":"c;a,b,c,d",q:{
dt:function(){var z,y
z=P.u
y=P.ar(3,0,!1,z)
z=P.ar(3,0,!1,z)
C.a.i(y,0,1073741823)
C.a.i(y,1,1073741823)
C.a.i(y,2,1073741823)
C.a.i(z,0,1073741823)
C.a.i(z,1,1073741823)
C.a.i(z,2,1073741823)
return new V.hu(0,0,y,z)}}},
ir:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
ft:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
m.A(r)
q.d=0}if(r>1){k=a.a
j=this.c1()
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
x.A(z)
this.e=1}},
fK:function(a){var z,y,x,w
a.a=this.c1()
a.b=this.e
for(z=a.c,y=this.d,x=a.d,w=0;w<this.e;++w){if(w>=3)return H.b(y,w)
C.a.i(z,w,J.cI(y[w].e))
C.a.i(x,w,J.cI(y[w].f))}},
d7:function(a){var z,y
switch(this.e){case 1:a.j(this.a.c)
a.N()
return
case 2:z=this.f
z.j(this.b.c)
y=this.a.c
z.A(y)
a.j(y)
a.N()
if(z.a7(a)>0)z.aJ(1,a)
else z.aJ(-1,a)
return
default:a.I()
return}},
c_:function(a){var z,y,x
switch(this.e){case 0:a.I()
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
y.u(0,z)
a.j(y)
return
case 3:a.I()
return
default:a.I()
return}},
c1:function(){var z,y,x
switch(this.e){case 0:return 0
case 1:return 0
case 2:return Math.sqrt(this.a.c.bJ(this.b.c))
case 3:z=this.y
z.j(this.b.c)
y=this.a.c
z.A(y)
x=this.z
x.j(this.c.c)
x.A(y)
return z.a7(x)
default:return 0}},
de:function(){var z,y,x,w,v,u,t,s
z=this.a
y=z.c
x=this.b
w=x.c
v=this.f
v.j(w)
v.A(y)
u=-y.w(v)
if(u<=0){z.d=1
this.e=1
return}t=w.w(v)
if(t<=0){x.d=1
this.e=1
z.D(x)
return}s=1/(t+u)
z.d=t*s
x.d=u*s
this.e=2},
df:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
t.A(z)
s=z.w(t)
r=x.w(t)
q=-s
p=this.Q
p.j(v)
p.A(z)
o=z.w(p)
n=v.w(p)
m=-o
l=this.ch
l.j(v)
l.A(x)
k=x.w(l)
j=v.w(l)
i=-k
h=t.a7(p)
g=h*x.a7(v)
f=h*v.a7(z)
e=h*z.a7(x)
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
w.D(u)
return}if(r<=0&&i<=0){w.d=1
this.e=1
y.D(w)
return}if(n<=0&&j<=0){u.d=1
this.e=1
y.D(u)
return}if(j>0&&i>0&&g<=0){b=1/(j+i)
w.d=j*b
u.d=i*b
this.e=2
y.D(u)
return}a=1/(g+f+e)
y.d=g*a
w.d=f*a
u.d=e*a
this.e=3}},
fg:{"^":"c;a,0b,0c,d",
dR:function(){var z,y
for(z=this.a,y=0;y<8;++y)C.a.i(z,y,new E.a(new Float64Array(2)))
this.b=0
this.c=0},
c5:function(a,b){var z,y,x,w,v
switch(a.a){case C.h:this.a[0].j(a.c)
this.b=1
this.c=a.b
break
case C.m:H.H(a,"$isb_")
this.b=a.ga6()
this.c=a.gbj()
for(z=this.a,y=0;y<this.b;++y){if(y>=8)return H.b(z,y)
x=z[y]
w=a.gam().h(0,y)
x.toString
v=w.geB()
x=x.a
if(1>=v.length)return H.b(v,1)
x[1]=v[1]
x[0]=v[0]}break
case C.x:H.H(a,"$isc1")
z=this.d
C.a.i(z,0,a.gbF().h(0,b))
x=b+1
if(C.c.B(x,a.geb()))C.a.i(z,1,a.gbF().h(0,x))
else C.a.i(z,1,a.gbF().h(0,0))
x=this.a
x[0].j(z[0])
x[1].j(z[1])
this.b=2
this.c=a.gbj()
break
case C.o:H.H(a,"$isaP")
z=this.a
z[0].j(a.c)
z[1].j(a.d)
this.b=2
this.c=a.b
break}},
aw:function(a){var z,y,x,w,v
z=this.a
y=z[0].w(a)
for(x=0,w=1;w<this.b;++w){if(w>=8)return H.b(z,w)
v=z[w].w(a)
if(v>y){y=v
x=w}}return x},
q:{
aM:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.a]
z=H.f(z,y)
x=new Array(2)
x.fixed$length=Array
y=new V.fg(z,H.f(x,y))
y.dR()
return y}}},
ff:{"^":"c;a,b,c,d,e,f,r",
eW:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.cW=$.cW+1
z=a6.a
y=a6.b
x=a6.c
w=a6.d
v=this.a
v.ft(a5,z,x,y,w)
u=v.d
t=this.d
v.c_(t)
t.gaU()
for(s=this.b,r=s.length,q=this.c,p=q.length,o=x.b,n=this.e,m=this.f,l=z.a,k=w.b,j=y.a,i=0;i<20;){h=v.e
for(g=0;g<h;++g){if(g>=3)return H.b(u,g)
C.a.i(s,g,u[g].e)
C.a.i(q,g,u[g].f)}switch(v.e){case 1:break
case 2:v.de()
break
case 3:v.df()
break}if(v.e===3)break
v.c_(t)
t.gaU()
v.d7(n)
if(n.gaU()<14210854715202004e-30)break
f=v.e
if(f>=3)return H.b(u,f)
e=u[f]
n.N()
G.au(o,n,m)
f=z.aw(m)
e.e=f
if(f>=8)return H.b(l,f)
f=l[f]
d=e.a
G.n(x,f,d)
n.N()
G.au(k,n,m)
f=y.aw(m)
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
f.A(d);++i
$.cX=$.cX+1
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
break}++g}if(a)break;++v.e}$.cY=Math.max($.cY,i)
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
a0.u(0,t)
t.j(s.b)
t.F(0,s.d)
a1.j(r.b)
a1.F(0,r.d)
a1.u(0,t)
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
a0.u(0,t)
a0.u(0,s)
a1.j(a0)
break
default:break}a4.c=Math.sqrt(a0.bJ(a1))
a4.d=i
v.fK(a5)
if(a6.e){a2=z.c
a3=y.c
v=a4.c
t=a2+a3
if(v>t&&v>11920928955078125e-23){a4.c=v-t
v=this.r
v.j(a1)
v.A(a0)
v.S()
m.j(v)
m.F(0,a2)
a0.u(0,m)
m.j(v)
m.F(0,a3)
a1.A(m)}else{a0.u(0,a1)
a0.F(0,0.5)
a1.j(a0)
a4.c=0}}}},
cU:{"^":"c;a,b,c,d,e"},
cV:{"^":"c;a,b,c,d"},
cb:{"^":"c;a,b",
n:function(a){return this.b}},
fM:{"^":"c;a,b,c,d,e",
dU:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.i(z,y,new V.de(new E.a(x),0,0,new V.Q(new Int8Array(4))))}},
D:function(a){var z,y,x,w,v,u,t
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
z=new V.fM(z,new E.a(y),new E.a(new Float64Array(2)),C.n,0)
z.dU()
return z}}},
de:{"^":"c;a,b,c,d"},
cf:{"^":"c;a,b,c"},
dq:{"^":"c;a,b"},
c2:{"^":"ds;c,a,b",
bH:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.b
y=z.b
x=this.c.a
w=x[0]
v=z.a
x=x[1]
u=b.a.a
t=y*w-v*x+u[0]
s=v*w+y*x+u[1]
u=a.a
u.sk(0,t-this.b)
u.sl(0,s-this.b)
u=a.b
u.sk(0,t+this.b)
u.sl(0,s+this.b)}},
aP:{"^":"ds;c,d,e,f,r,x,y,a,b"},
fP:{"^":"c;a,b,c"},
ds:{"^":"c;"},
bH:{"^":"c;a,b",
n:function(a){return this.b}},
hC:{"^":"c;a,b,c,d,e"},
bn:{"^":"c;a,b",
n:function(a){return this.b}},
hD:{"^":"c;a,b"},
hI:{"^":"c;a,b,c,d,e,f,r,x,y,z",
fC:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.dA=$.dA+1
a4.a=C.L
a4.b=a5.e
z=a5.a
y=a5.b
x=this.x
x.D(a5.c)
w=this.y
w.D(a5.d)
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
for(r=this.f,q=this.r,p=q.length,o=u+0.00125,n=u-0.00125,m=this.e,l=this.c,k=this.d,j=this.z.fy,i=0,h=0;!0;){x.ab(l,i)
w.ab(k,i)
s.c=l
s.d=k
j.eW(m,t,s)
g=m.c
if(g<=0){a4.a=C.a8
a4.b=0
break}if(g<o){a4.a=C.D
a4.b=i
break}r.fe(0,t,z,x,y,w,i)
e=v
d=0
while(!0){if(!!0){f=!1
break}c=r.f9(q,e)
if(c>o){a4.a=C.a9
a4.b=v
f=!0
break}if(c>n){i=e
f=!1
break}if(0>=p)return H.b(q,0)
g=q[0]
if(1>=p)return H.b(q,1)
b=r.a0(g,q[1],i)
if(b<n){a4.a=C.M
a4.b=i
f=!0
break}if(b<=o){a4.a=C.D
a4.b=i
f=!0
break}for(a=e,a0=i,a1=0;!0;){a2=(a1&1)===1?a0+(u-b)*(a-a0)/(c-b):0.5*(a0+a);++a1
$.dE=$.dE+1
a3=r.a0(q[0],q[1],a2)
if(Math.abs(a3-u)<0.00125){e=a2
break}if(a3>u){a0=a2
b=a3}else{a=a2
c=a3}if(a1===50)break}$.dD=Math.max($.dD,a1);++d
if(d===8||a1===50){f=!1
break}}++h
$.dB=$.dB+1
if(f)break
if(h===20){a4.a=C.M
a4.b=i
break}}$.dC=Math.max($.dC,h)}},
cg:{"^":"c;a,b",
n:function(a){return this.b}},
hr:{"^":"c;0a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go",
fe:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
this.a=c
this.b=e
z=b.b
this.f=d
this.r=f
y=this.fr
d.ab(y,g)
x=this.fx
this.r.ab(x,g)
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
v.A(u)
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
if(J.ae(v,g[1])){this.c=C.C
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
p.A(v)
p.aJ(-1,r)
r.S()
G.U(x.b,r,s)
t.j(v)
t.u(0,m)
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
p.A(q)
l=p.w(s)
if(l<0){r.N()
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
p.A(v)
p.aJ(-1,r)
r.S()
G.U(y.b,r,s)
t.j(v)
t.u(0,m)
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
p.A(u)
l=p.w(s)
if(l<0){r.N()
l=-l}return l}}},
f9:function(a,b){var z,y,x,w,v,u,t
H.i(a,"$isd",[P.u],"$asd")
z=this.fr
this.f.ab(z,b)
y=this.fx
this.r.ab(y,b)
switch(this.c){case C.A:x=this.e
w=this.fy
G.au(z.b,x,w)
x.N()
v=this.go
G.au(y.b,x,v)
x.N()
C.a.i(a,0,this.a.aw(w))
C.a.i(a,1,this.b.aw(v))
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
v.A(u)
return v.w(x)
case C.B:x=this.cy
G.U(z.b,this.e,x)
w=this.z
G.n(z,this.d,w)
x.N()
z=this.go
G.au(y.b,x,z)
x.N()
C.a.i(a,0,-1)
C.a.i(a,1,this.b.aw(z))
z=this.y
v=this.b
if(1>=a.length)return H.b(a,1)
u=a[1]
v.toString
H.j(u)
z.j(C.a.h(v.a,u))
u=this.Q
G.n(y,z,u)
u.A(w)
return u.w(x)
case C.C:x=this.cy
G.U(y.b,this.e,x)
w=this.Q
G.n(y,this.d,w)
x.N()
y=this.fy
G.au(z.b,x,y)
x.N()
C.a.i(a,1,-1)
C.a.i(a,0,this.a.aw(y))
y=this.x
v=this.a
if(0>=a.length)return H.b(a,0)
u=a[0]
v.toString
H.j(u)
y.j(C.a.h(v.a,u))
u=this.z
G.n(z,y,u)
u.A(w)
return u.w(x)
default:C.a.i(a,0,-1)
C.a.i(a,1,-1)
return 0}},
a0:function(a,b,c){var z,y,x,w,v
H.j(a)
H.j(b)
z=this.fr
this.f.ab(z,c)
y=this.fx
this.r.ab(y,c)
switch(this.c){case C.A:x=this.x
x.j(C.a.h(this.a.a,a))
w=this.y
w.j(C.a.h(this.b.a,b))
v=this.z
G.n(z,x,v)
x=this.Q
G.n(y,w,x)
x.A(v)
return x.w(this.e)
case C.B:x=this.cy
G.U(z.b,this.e,x)
w=this.z
G.n(z,this.d,w)
z=this.y
z.j(C.a.h(this.b.a,b))
v=this.Q
G.n(y,z,v)
v.A(w)
return v.w(x)
case C.C:x=this.cy
G.U(y.b,this.e,x)
w=this.Q
G.n(y,this.d,w)
y=this.x
y.j(C.a.h(this.a.a,a))
v=this.z
G.n(z,y,v)
v.A(w)
return v.w(x)
default:return 0}}},
hV:{"^":"c;a,b,c,d,e",
dW:function(){var z,y
for(z=this.b,y=0;y<2;++y)C.a.i(z,y,new E.a(new Float64Array(2)))},
fd:function(a,b,c,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(z.bJ(y)>14210854715202004e-30){w=y.a
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
case C.i:p=this.d
x=this.a
G.U(c.b,b.b,x)
G.b2(c,b.c,p)
o=this.e
for(w=b.a,v=o.a,u=p.a,x=x.a,n=this.b,m=this.c,l=0;l<b.e;++l){if(l>=2)return H.b(w,l)
G.b2(a1,w[l].a,o)
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
G.b2(a1,b.c,p)
o=this.e
for(w=b.a,v=o.a,u=p.a,n=x.a,m=this.b,k=this.c,l=0;l<b.e;++l){if(l>=2)return H.b(w,l)
G.b2(c,w[l].a,o)
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
hW:function(){var z,y,x,w
z=new Float64Array(2)
y=new Array(2)
y.fixed$length=Array
y=H.f(y,[E.a])
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.hV(new E.a(z),y,x,new E.a(w),new E.a(new Float64Array(2)))
z.dW()
return z}}},
aH:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,0cx,0cy,db,0dx,0dy,fr,fx,fy,go,id,k1,k2,k3,0al:k4<,r1,r2,rx",
aQ:function(a){var z,y,x,w,v,u
z=this.Q
if((z.a&2)===2)return
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new V.d4(0,0,0,0,new V.bC(1,65535,0),!1,new V.N(new E.a(y),new E.a(x)),new V.N(new E.a(w),new E.a(v)),new E.a(new Float64Array(2)))
u.eQ(this,a)
if((this.b&32)===32)u.eU(z.b.a,this.d)
u.b=this.cy
this.cy=u;++this.db
u.c=this
if(u.a>0)this.fv()
z.a|=1
return u},
fv:function(){var z,y,x,w,v,u,t,s,r,q,p,o
this.fr=0
this.fx=0
this.fy=0
this.go=0
z=this.f
y=z.a
y.I()
x=this.a
if(x===C.e||x===C.F){y=this.d.a
z.b.j(y)
z.c.j(y)
z.d=z.e
return}x=this.Q.ch.a
w=x.aG()
w.I()
v=x.aG()
u=this.r2
for(t=this.cy,s=u.b.a;t!=null;t=t.b){r=t.a
if(r===0)continue
q=t.d
p=q.b
r=r*3.141592653589793*p*p
u.a=r
q=q.c.a
s[0]=q[0]
s[1]=q[1]
o=q[0]
q=q[1]
u.c=r*(0.5*p*p+(o*o+q*q))
this.fr+=r
q=v.a
q[1]=s[1]
q[0]=s[0]
v.F(0,r)
w.u(0,v)
this.fy=this.fy+u.c}s=this.fr
if(s>0){s=1/s
this.fx=s
w.F(0,s)}else{this.fr=1
this.fx=1}s=this.fy
if(s>0&&(this.b&16)===0){s-=this.fr*w.w(w)
this.fy=s
this.go=1/s}else{this.fy=0
this.go=0}s=x.aG()
r=z.c
s.j(r)
y.j(w)
z=z.b
G.n(this.d,y,z)
r.j(z)
v.j(r)
v.A(s)
v.aJ(this.x,s)
this.r.u(0,s)
x.b-=3},
X:function(a){var z
if(a){z=this.b
if((z&2)===0){this.b=z|2
this.k3=0}}else{this.b&=4294967293
this.k3=0
this.r.I()
this.x=0
this.y.I()
this.z=0}},
cc:function(){var z,y,x,w,v,u,t
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
for(t=this.cy,y=this.Q,x=this.d;t!=null;t=t.b)t.dM(y.b.a,z,x)},
ay:function(){var z,y,x,w,v
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
c6:function(a){var z
if(this.a!==C.f&&a.a!==C.f)return!1
for(z=this.dx;!1;z=z.gfj())z.gfl()
return!0},
aq:function(a){var z,y,x,w,v
z=this.f
z.aq(a)
y=z.c
y.j(z.b)
x=z.d
z.e=x
w=this.d
v=w.b
v.bm(x)
w=w.a
G.U(v,z.a,w)
w.F(0,-1)
w.u(0,y)},
n:function(a){return"Body[pos: "+this.d.a.n(0)+" linVel: "+this.r.n(0)+" angVel: "+H.e(this.x)+"]"}},
cK:{"^":"c;a,0al:b<,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},
bZ:{"^":"c;a,b",
n:function(a){return this.b}},
f2:{"^":"c;0a,0b,c,0d,0e,f",
eD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
if((r==null?y==null:r===y)&&p===w&&(q==null?z==null:q===z)&&o===x)return}t=t.d}if(!u.c6(v))return
s=this.d.c7(z,y)
if(!s)return
n=this.f.fm(z,x,y,w)
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
bI:function(a){var z,y,x,w,v,u,t,s,r,q
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
if((z.a&8)===8){if(!t.c6(u)){s=z.c
this.bI(z)
z=s
continue}r=this.d.c7(y,x)
if(!r){s=z.c
this.bI(z)
z=s
continue}z.a&=4294967287}q=(u.b&2)===2&&u.a!==C.e
p=(t.b&2)===2&&t.a!==C.e
if(!q&&!p){z=z.c
continue}r=y.r
if(w>=r.length)return H.b(r,w)
o=r[w].gaW()
r=x.r
if(v>=r.length)return H.b(r,v)
n=r[v].gaW()
if(!this.a.fB(o,n)){s=z.c
this.bI(z)
z=s
continue}z.bW(this.e)
z=z.c}},
$isjY:1},
aJ:{"^":"P;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a9:function(a,b,c,d){this.b0(a,b,c,d)},
a0:function(a,b,c){var z=this.fr
H.H(this.f.d,"$isc1").d4(z,this.x)
this.dx.fr.cG(a,z,b,this.r.d,c)}},
aK:{"^":"P;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a9:function(a,b,c,d){this.b0(a,b,c,d)},
a0:function(a,b,c){var z,y,x
z=this.fr
H.H(this.f.d,"$isc1").d4(z,this.x)
y=this.dx.fr
x=H.H(this.r.d,"$isb_")
y.k3.cF(a,z,b,x,c)}},
aL:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a0:function(a,b,c){this.dx.fr.eK(a,this.f.d,b,this.r.d,c)}},
P:{"^":"c;",
a9:["b0",function(a,b,c,d){var z,y
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
bW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.dy
y=this.z
z.D(y)
x=this.a|=4
w=this.f
w.z
v=this.r
v.z
u=w.c
t=v.c
this.a0(y,u.d,t.d)
s=y.e>0
for(w=z.a,v=y.a,r=0;r<y.e;++r){if(r>=2)return H.b(v,r)
q=v[r]
q.b=0
q.c=0
p=q.d
for(o=0;o<z.e;++o){if(o>=2)return H.b(w,o)
n=w[o]
if(n.d.aY()===p.aY()){q.b=n.b
q.c=n.c
break}}}if(s!==((x&2)===2)){u.X(!0)
t.X(!0)}z=this.a
if(s)this.a=z|2
else this.a=z&4294967293
return}},
J:{"^":"c;0a,0b,0c,0d"},
bx:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,cx,cy,db",
dN:function(){var z,y
for(z=this.a,y=0;y<2;++y)C.a.i(z,y,new E.a(new Float64Array(2)))},
q:{
cR:function(){var z,y,x,w
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[E.a])
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.bx(z,new E.a(y),new E.a(x),0,0,0,0,new E.a(w),new E.a(new Float64Array(2)),0,0,0,0,0)
z.dN()
return z}}},
by:{"^":"c;0a,b",
scJ:function(a){this.a=H.i(a,"$isY",[V.P],"$asY")}},
bA:{"^":"c;0a,0b,c,0d,0e",
scH:function(a){this.b=H.i(a,"$isd",[V.P],"$asd")},
sbi:function(a){this.d=H.i(a,"$isd",[V.as],"$asd")},
sbk:function(a){this.e=H.i(a,"$isd",[V.ax],"$asd")}},
f3:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q",
sbz:function(a){this.b=H.i(a,"$isd",[V.as],"$asd")},
sbE:function(a){this.c=H.i(a,"$isd",[V.ax],"$asd")},
scv:function(a){this.d=H.i(a,"$isd",[V.bx],"$asd")},
scB:function(a){this.e=H.i(a,"$isd",[V.bd],"$asd")},
sbt:function(a){this.f=H.i(a,"$isd",[V.P],"$asd")},
dO:function(){var z,y
z=new Array(256)
z.fixed$length=Array
this.scv(H.f(z,[V.bx]))
z=new Array(256)
z.fixed$length=Array
this.scB(H.f(z,[V.bd]))
for(y=0;y<256;++y){z=this.d;(z&&C.a).i(z,y,V.cR())
z=this.e;(z&&C.a).i(z,y,V.cS())}},
cQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
this.a=a.a
z=a.c
this.r=z
y=this.d
x=y.length
if(x<z){z=new Array(Math.max(x*2,z))
z.fixed$length=Array
this.scv(H.f(z,[V.bx]))
z=this.d;(z&&C.a).Y(z,0,x,y,0)
for(;z=this.d,x<z.length;++x)(z&&C.a).i(z,x,V.cR())}z=this.e
x=z.length
y=this.r
if(x<y){y=new Array(Math.max(x*2,y))
y.fixed$length=Array
this.scB(H.f(y,[V.bd]))
y=this.e;(y&&C.a).Y(y,0,x,z,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).i(z,x,V.cS())}this.sbz(a.d)
this.sbE(a.e)
this.sbt(a.b)
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
l.d.I()
l.c.I()
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
fJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
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
p=y[w].gK()
y=this.c
if(w>=y.length)return H.b(y,w)
o=y[w].gJ()
y=this.c
if(v>=y.length)return H.b(y,v)
n=y[v].gK()
y=this.c
if(v>=y.length)return H.b(y,v)
m=y[v].gJ()
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
y[w].sJ(o)
y=this.c
if(v>=y.length)return H.b(y,v)
y[v].sJ(m)}},
cS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
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
a=k[i].gC()
k=this.b
if(i>=k.length)return H.b(k,i)
a0=k[i].gE()
k=this.c
if(i>=k.length)return H.b(k,i)
a1=k[i].gK()
k=this.c
if(i>=k.length)return H.b(k,i)
a2=k[i].gJ()
k=this.b
if(h>=k.length)return H.b(k,h)
a3=k[h].gC()
k=this.b
if(h>=k.length)return H.b(k,h)
a4=k[h].gE()
k=this.c
if(h>=k.length)return H.b(k,h)
a5=k[h].gK()
k=this.c
if(h>=k.length)return H.b(k,h)
a6=k[h].gJ()
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
z.fd(0,j,x,m,v,l)
b1=o.b.a
b1[0]=r[0]
b1[1]=r[1]
b2=o.cy
for(k=-$.ji,a7=a5.a,a8=-a6,b0=a1.a,b3=-a2,b4=g+f,b5=0;b5<b2;++b5){b6=o.a
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
k.fh()}else o.cy=1}}},
c9:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
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
p=y[w].gK()
y=this.c
if(w>=y.length)return H.b(y,w)
o=y[w].gJ()
y=this.c
if(v>=y.length)return H.b(y,v)
n=y[v].gK()
y=this.c
if(v>=y.length)return H.b(y,v)
m=y[v].gJ()
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
y[w].sJ(o)
y=this.c
if(v>=y.length)return H.b(y,v)
y[v].sJ(m)}},
dE:function(){var z,y,x,w,v,u
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
dk:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
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
b=o[m].gC()
o=this.b
if(m>=o.length)return H.b(o,m)
a=o[m].gE()
o=this.b
if(l>=o.length)return H.b(o,l)
a0=o[l].gC()
o=this.b
if(l>=o.length)return H.b(o,l)
a1=o[l].gE()
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
t.cR(0,n,z,x,a4)
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
o[m].sE(a)
o=this.b
if(l>=o.length)return H.b(o,l)
o[l].sE(a1)}return q>=-0.015},
du:function(c3,c4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
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
a0=o[m].gC()
o=this.b
if(m>=o.length)return H.b(o,m)
a1=o[m].gE()
o=this.b
if(l>=o.length)return H.b(o,l)
a2=o[l].gC()
o=this.b
if(l>=o.length)return H.b(o,l)
a3=o[l].gE()
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
t.cR(0,n,z,x,a6)
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
o[m].sE(a1)
o=this.b
if(l>=o.length)return H.b(o,l)
o[l].sE(a3)}return q>=-0.0075},
q:{
bz:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=V.hW()
w=new Float64Array(2)
z=new V.f3(0,new G.C(new E.a(z),new G.y(0,1)),new G.C(new E.a(y),new G.y(0,1)),x,new V.hh(new E.a(w),new E.a(new Float64Array(2)),0))
z.dO()
return z}}},
hh:{"^":"c;a,b,c",
cR:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
case C.i:x=this.a
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
dY:{"^":"c;a,b,c,d,e,f,r"},
bd:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
dP:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.i(z,y,new V.dY(new E.a(x),new E.a(new Float64Array(2)),0,0,0,0,0))}},
q:{
cS:function(){var z,y,x
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.dY])
y=new Float64Array(2)
x=new Float64Array(4)
z=new V.bd(z,new E.a(y),new E.ag(x),new E.ag(new Float64Array(4)),0,0,0,0,0,0,0,0,0,0,0)
z.dP()
return z}}},
aN:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a9:function(a,b,c,d){this.b0(a,b,c,d)},
a0:function(a,b,c){this.dx.fr.cG(a,H.H(this.f.d,"$isaP"),b,this.r.d,c)}},
aO:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a9:function(a,b,c,d){this.b0(a,b,c,d)},
a0:function(a,b,c){var z,y,x
z=this.dx.fr
y=H.H(this.f.d,"$isaP")
x=H.H(this.r.d,"$isb_")
z.k3.cF(a,y,b,x,c)}},
aY:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a0:function(a,b,c){this.dx.fr.eL(a,H.H(this.f.d,"$isb_"),b,this.r.d,c)}},
aZ:{"^":"P;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
a0:function(a,b,c){this.dx.fr.eM(a,H.H(this.f.d,"$isb_"),b,H.H(this.r.d,"$isb_"),c)}},
as:{"^":"c;C:a<,E:b<",
sE:function(a){this.b=H.b8(a)}},
ax:{"^":"c;K:a<,J:b<",
sJ:function(a){this.b=H.b8(a)}},
bC:{"^":"c;a,b,c"},
d4:{"^":"c;a,0b,0c,0d,e,f,0r,x,y,z,0al:Q<,ch,cx,cy",
scw:function(a){this.r=H.i(a,"$isd",[V.be],"$asd")},
eQ:function(a,b){var z,y,x,w,v,u
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
y=b.a
y.toString
z=new E.a(new Float64Array(2))
x=new V.c2(z,C.h,0)
w=y.c.a
z.sk(0,w[0])
z.sl(0,w[1])
x.b=y.b
this.d=x
if(this.r==null){z=new Array(1)
z.fixed$length=Array
this.scw(H.f(z,[V.be]))
for(v=0;v<1;++v){z=this.r
y=new Float64Array(2);(z&&C.a).i(z,v,new V.be(new V.N(new E.a(y),new E.a(new Float64Array(2))),0,0))
z=this.r
if(v>=z.length)return H.b(z,v)
z[v].scP(null)
z=this.r
if(v>=z.length)return H.b(z,v)
z[v].saW(-1)}}z=this.r
y=z.length
if(y<1){u=Math.max(y*2,1)
w=new Array(u)
w.fixed$length=Array
this.scw(H.f(w,[V.be]))
w=this.r;(w&&C.a).Y(w,0,y,z,0)
for(v=0;v<u;++v){z=this.r
y=new Float64Array(2);(z&&C.a).i(z,v,new V.be(new V.N(new E.a(y),new E.a(new Float64Array(2))),0,0))
z=this.r
if(v>=z.length)return H.b(z,v)
z[v].scP(null)
z=this.r
if(v>=z.length)return H.b(z,v)
z[v].saW(-1)}}this.x=0
this.a=b.e},
eU:function(a,b){var z,y,x,w,v,u,t,s,r
this.d.toString
this.x=1
for(z=a.a,y=0;y<this.x;++y){x=this.r
if(y>=x.length)return H.b(x,y)
w=x[y]
x=this.d
v=w.a
x.bH(v,b,y)
u=z.ci()
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
z.cr(t);++a.b
a.cE(t)
w.d=t
w.b=this
w.c=y}},
dM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.x===0)return
for(z=this.cy,y=c.a.a,x=b.a.a,w=z.a,v=a.a,u=this.ch,t=this.cx,s=u.a.a,r=u.b.a,q=0;q<this.x;++q){p=this.r
if(q>=p.length)return H.b(p,q)
o=p[q]
this.d.bH(u,b,o.c)
this.d.bH(t,c,o.c)
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
if(v.fi(n,p,z))a.cE(n)}}},
c6:{"^":"c;0a,0al:b<,c,d,e,f,r"},
be:{"^":"c;ap:a<,0b,c,aW:d<",
scP:function(a){this.b=H.k(a,"$isd4")},
saW:function(a){this.d=H.j(a)}},
d6:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
se3:function(a){this.b=H.i(a,"$isd",[V.aH],"$asd")},
sbt:function(a){this.c=H.i(a,"$isd",[V.P],"$asd")},
sek:function(a){this.d=H.i(a,"$isd",[V.db],"$asd")},
sbz:function(a){this.e=H.i(a,"$isd",[V.as],"$asd")},
sbE:function(a){this.f=H.i(a,"$isd",[V.ax],"$asd")},
a9:function(a,b,c,d){var z,y,x
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
this.se3(H.f(z,[V.aH]))}z=this.d
if(z==null||this.ch>z.length){z=new Array(this.ch)
z.fixed$length=Array
this.sek(H.f(z,[V.db]))}z=this.c
if(z==null||this.Q>z.length){z=new Array(this.Q)
z.fixed$length=Array
this.sbt(H.f(z,[V.P]))}y=this.f
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.ax])}z=new Array(this.z)
z.fixed$length=Array
this.sbE(H.f(z,[V.ax]))
z=this.f
x=y.length;(z&&C.a).Y(z,0,x,y,0)
for(;z=this.f,x<z.length;++x)(z&&C.a).i(z,x,new V.ax(new E.a(new Float64Array(2)),0))}y=this.e
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.as])}z=new Array(this.z)
z.fixed$length=Array
this.sbz(H.f(z,[V.as]))
z=this.e
x=y.length;(z&&C.a).Y(z,0,x,y,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).i(z,x,new V.as(new E.a(new Float64Array(2)),0))}},
dd:function(a1,a2,a3,a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
J.bX(w[x].gC(),q[0])
w=this.e
if(x>=w.length)return H.b(w,x)
J.bY(w[x].gC(),q[1])
w=this.e
if(x>=w.length)return H.b(w,x)
w[x].sE(t)
w=this.f
if(x>=w.length)return H.b(w,x)
p=s.a
w[x].gK().a[0]=p[0]
w=this.f
if(x>=w.length)return H.b(w,x)
w[x].gK().a[1]=p[1]
p=this.f
if(x>=p.length)return H.b(p,x)
p[x].sJ(r)}y=this.cy
y.a=a2
y.sbi(this.e)
y.sbk(this.f)
w=this.db
w.a=a2
w.scH(this.c)
w.c=this.y
w.sbi(this.e)
w.sbk(this.f)
p=this.cx
p.cQ(w)
p.cS()
if(a2.f)p.fJ()
for(x=0;x<this.x;++x){w=this.d
if(x>=w.length)return H.b(w,x)
w[x].hc(y)}for(x=0;x<a2.d;++x){for(k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.b(w,k)
w[k].fW(y)}p.c9()}p.dE()
for(x=0;x<this.r;++x){w=this.e
if(x>=w.length)return H.b(w,x)
j=w[x].gC()
w=this.e
if(x>=w.length)return H.b(w,x)
t=w[x].gE()
w=this.f
if(x>=w.length)return H.b(w,x)
s=w[x].gK()
w=this.f
if(x>=w.length)return H.b(w,x)
r=w[x].gJ()
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
w[x].sE(t+z*r)
w=this.f
if(x>=w.length)return H.b(w,x)
w[x].sJ(r)}x=0
while(!0){if(!(x<a2.e)){e=!1
break}d=p.dk()
for(c=!0,k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.b(w,k)
b=w[k].fV(y)
c=c&&b}if(d&&c){e=!0
break}++x}for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
a=y[x]
y=a.f
w=this.e
if(x>=w.length)return H.b(w,x)
o=y.c.a
o[0]=J.bb(w[x].gC())
w=this.e
if(x>=w.length)return H.b(w,x)
o[1]=J.bc(w[x].gC())
w=this.e
if(x>=w.length)return H.b(w,x)
y.e=w[x].gE()
w=a.r
y=this.f
if(x>=y.length)return H.b(y,x)
w=w.a
w[0]=y[x].gK().a[0]
y=this.f
if(x>=y.length)return H.b(y,x)
w[1]=y[x].gK().a[1]
y=this.f
if(x>=y.length)return H.b(y,x)
a.x=H.b8(y[x].gJ())
a.ay()}this.cZ(p.e)
if(a4){for(a0=17976931348623157e292,x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
v=y[x]
if(v.a===C.e)continue
if((v.b&4)!==0){y=v.x
if(!(y*y>0.0012184696791468343)){y=v.r
y=y.w(y)>0.0001}else y=!0}else y=!0
if(y){v.k3=0
a0=0}else{y=v.k3+=z
a0=Math.min(a0,y)}}if(a0>=0.5&&e)for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
y[x].X(!1)}}},
dt:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
y=y[z].gC()
x=this.b
if(z>=x.length)return H.b(x,z)
J.bX(y,x[z].f.c.a[0])
x=this.e
if(z>=x.length)return H.b(x,z)
x=x[z].gC()
y=this.b
if(z>=y.length)return H.b(y,z)
J.bY(x,y[z].f.c.a[1])
y=this.e
if(z>=y.length)return H.b(y,z)
y=y[z]
x=this.b
if(z>=x.length)return H.b(x,z)
y.sE(x[z].f.e)
x=this.f
if(z>=x.length)return H.b(x,z)
x=x[z].gK()
y=this.b
if(z>=y.length)return H.b(y,z)
x.a[0]=y[z].r.a[0]
y=this.f
if(z>=y.length)return H.b(y,z)
y=y[z].gK()
x=this.b
if(z>=x.length)return H.b(x,z)
y.a[1]=x[z].r.a[1]
y=this.f
if(z>=y.length)return H.b(y,z)
y[z].sJ(x[z].x)}y=this.dy
y.scH(this.c)
y.c=this.y
y.a=a
y.sbi(this.e)
y.sbk(this.f)
x=this.dx
x.cQ(y)
for(z=0;z<a.e;++z)if(x.du(b,c))break
y=this.b
if(b>=y.length)return H.b(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.b(w,b)
y.b.sk(0,J.bb(w[b].gC()))
w=this.b
if(b>=w.length)return H.b(w,b)
w=w[b].f
y=this.e
if(b>=y.length)return H.b(y,b)
w.b.sl(0,J.bc(y[b].gC()))
y=this.b
if(b>=y.length)return H.b(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.b(w,b)
y.d=w[b].gE()
w=this.b
if(c>=w.length)return H.b(w,c)
w=w[c].f
y=this.e
if(c>=y.length)return H.b(y,c)
w.b.j(y[c].gC())
y=this.b
if(c>=y.length)return H.b(y,c)
y=y[c].f
w=this.e
if(c>=w.length)return H.b(w,c)
y.d=w[c].gE()
x.cS()
for(z=0;z<a.d;++z)x.c9()
v=a.a
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
u=y[z].gC()
y=this.e
if(z>=y.length)return H.b(y,z)
t=y[z].gE()
y=this.f
if(z>=y.length)return H.b(y,z)
s=y[z].gK()
y=this.f
if(z>=y.length)return H.b(y,z)
r=y[z].gJ()
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
J.bX(n[z].gC(),w[0])
n=this.e
if(z>=n.length)return H.b(n,z)
J.bY(n[z].gC(),w[1])
n=this.e
if(z>=n.length)return H.b(n,z)
n[z].sE(t)
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].gK().a[0]=y[0]
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].gK().a[1]=y[1]
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].sJ(r)
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
m.ay()}this.cZ(x.e)},
cZ:function(a){H.i(a,"$isd",[V.bd],"$asd")
return}},
db:{"^":"c;"},
bj:{"^":"c;a,b",
n:function(a){return this.b}},
a6:{"^":"c;a,b,c,d,e",
a2:function(a){this.a=this.a*0.95+a*0.05
this.b=this.b*0.8+a*0.2
this.c=Math.min(a,this.c)
this.d=Math.max(a,this.d)},
n:function(a){return H.e(this.b)+" ("+H.e(this.a)+") ["+H.e(this.c)+","+H.e(this.d)+"]"}},
hk:{"^":"c;a,b,c,d,e,f,r,x,y,z"},
du:{"^":"c;0a,0b,0c",
sbi:function(a){this.b=H.i(a,"$isd",[V.as],"$asd")},
sbk:function(a){this.c=H.i(a,"$isd",[V.ax],"$asd")}},
dF:{"^":"c;a,b,c,d,e,f"},
hU:{"^":"c;a,0b,0c,0d,e,f,r,x,0y,0z,0Q,ch,cx,cy,db,dx,dy,0fr,0fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,cM,af,bL,aF,ba,bb,bc,bM,bN,bO,bP,bd,be,bf,ag,aS,cN",
sdB:function(a){this.y1=H.i(a,"$isd",[V.aH],"$asd")},
ao:function(a,b,c){var z,y,x,w,v,u,t
H.i(a,"$isY",[V.P],"$asY")
z=new V.by(!1)
z.scJ(a)
z.b=!0
y=this.fy
x=b.a
w=y.length
if(x>=w)return H.b(y,x)
v=y[x]
u=c.a;(v&&C.a).i(v,u,z)
if(b!==c){t=new V.by(!1)
t.scJ(a)
t.b=!1
if(u>=w)return H.b(y,u)
y=y[u];(y&&C.a).i(y,x,t)}},
fm:function(a,b,c,d){var z,y,x,w,v,u
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
if(x){u=w.aG()
u.a9(a,b,c,d)
return u}else{u=w.aG()
u.a9(c,d,a,b)
return u}}else return},
aP:function(a){var z,y,x,w,v,u,t,s,r,q,p
if((this.a&2)===2)return
z=new E.a(new Float64Array(2))
y=new G.y(0,1)
x=new Float64Array(2)
w=new E.a(new Float64Array(2))
v=new E.a(new Float64Array(2))
u=new E.a(new Float64Array(2))
t=new G.av(w,v,u,0,0,0)
s=new E.a(new Float64Array(2))
r=new E.a(new Float64Array(2))
q=new Float64Array(2)
p=new V.aH(C.e,0,0,new G.C(z,y),new G.C(new E.a(x),new G.y(0,1)),t,s,0,r,0,this,0,0,0,0,0,0,0,0,0,new V.c6(0.2,0,0,!1,new V.bC(1,65535,0)),new V.fP(0,new E.a(q),0),new G.C(new E.a(new Float64Array(2)),new G.y(0,1)))
if(a.ch){p.b=8
x=8}else x=0
x|=4
p.b=x
x|=2
p.b=x
p.b=x|32
z.j(a.c)
y.bm(a.d)
w.I()
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
r.I()
r=a.a
p.a=r
if(r===C.f){p.fr=1
p.fx=1}p.k4=a.b
z=this.c
p.cx=z
if(z!=null)z.ch=p
this.c=p;++this.e
return p},
eH:function(){var z,y
for(z=this.c;z!=null;z=z.cx){y=z.y.a
y[0]=0
y[1]=0
z.z=0}},
eZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
if((s&32)!==32){z.a4(0.5,0.5,0.3)
this.aR(q,v,z,x)}else{p=w.a
if(p===C.e){z.a4(0.5,0.9,0.3)
this.aR(q,v,z,x)}else if(p===C.F){z.a4(0.5,0.5,0.9)
this.aR(q,v,z,x)}else if((s&2)!==2){z.a4(0.5,0.5,0.5)
this.aR(q,v,z,x)}else{z.a4(0.9,0.7,0.7)
this.aR(q,v,z,x)}}}}z=this.fx
v=this.Q.a
o=z.z
if(o!==0){n=z.r/2
m=z.cy.a
l=z.fx.a!=null?z.d6():null
z=this.Q
if((v&128)!==0)z.f0(m,n,l,o)
else z.f_(m,n,l,o)}}if((y&4)!==0)for(k=this.d,z=this.ch.a,v=this.k2,u=z.a,t=u.length;!1;k=k.aZ()){j=k.fO()
i=k.fP()
h=j.gbD()
g=i.gbD()
f=h.gbh()
e=g.gbh()
s=z.b
p=s+1
z.b=p
if(s<0||s>=t)return H.b(u,s)
s=u[s]
z.b=p+1
if(p<0||p>=t)return H.b(u,p)
p=u[p]
k.fM(s)
k.fN(p)
v.a4(0.5,0.8,0.8)
switch(k.fS()){case C.a0:this.Q.Z(s,p,v)
break
case C.a1:d=k.fQ()
c=k.fR()
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
z.a4(0.3,0.9,0.9)
for(b=this.b.b,v=this.k4,u=this.r1;b!=null;b=b.c){a=b.f
a0=b.r
t=b.x
s=a.r
if(t>=s.length)return H.b(s,t)
s[t].gap().bZ(v)
t=b.y
s=a0.r
if(t>=s.length)return H.b(s,t)
s[t].gap().bZ(u)
this.Q.Z(v,u,z)}}if((y&8)!==0){z=this.k2
z.a4(0.9,0.3,0.9)
for(w=this.c,v=this.r2,u=v.a,t=[E.a];w!=null;w=w.cx){if((w.b&32)!==32)continue
for(q=w.cy;q!=null;q=q.b)for(a1=0;a1<q.x;++a1){s=q.r
if(a1>=s.length)return H.b(s,a1)
a2=s[a1]
s=this.b.a
p=a2.d
s=s.a.b
if(p<0||p>=s.length)return H.b(s,p)
a3=s[p].gap()
if(!u.cI(4))u.i(0,4,v.c0(4))
s=u.h(0,4)
p=J.a1(s)
a4=a3.a.a
p.h(s,0).O(a4[0],a4[1])
a5=a3.b.a
p.h(s,1).O(a5[0],a4[1])
p.h(s,2).O(a5[0],a5[1])
p.h(s,3).O(a4[0],a5[1])
a5=this.Q
a5.toString
a5.b8(H.i(s,"$isd",t,"$asd"),4,z)
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
t.b7(v,0.1*t.b.c,a6)
t.c.stroke()}}if((y&64)!==0)this.b.a.a.f1(this.Q)
this.Q.toString},
bp:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.a9(x,v.c,this.f,v.e)
for(y=this.c;y!=null;y=y.cx)y.b&=4294967294
for(u=this.b.b;u!=null;u=u.c)u.a&=4294967294
for(t=this.d;!1;t=t.gb6())t.scs(!1)
s=this.e
if(this.y1.length<s){x=new Array(s)
x.fixed$length=Array
this.sdB(H.f(x,[V.aH]))}for(r=this.c,x=this.r;r!=null;r=r.cx){v=r.b
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
q=l}for(k=y.dx;!1;k=k.gfj()){k.gcV().gcs()
m=k.gfl()
m.hd()
v=k.gcV()
p=z.d;(p&&C.a).i(p,z.x++,v)
k.gcV().scs(!0)
m.gcm().W(0,1)
l=q+1
C.a.i(this.y1,q,m)
m.scm(m.gcm().bl(0,1))
q=l}}z.dd(this.fr,a,x,this.x)
for(j=0;j<z.r;++j){v=z.b
if(j>=v.length)return H.b(v,j)
y=v[j]
if(y.a===C.e)y.b&=4294967294}}z=this.fr.f
z.a2(z.e)
z=this.fr.r
z.a2(z.e)
z=this.fr.x
z.a2(z.e)
z=this.y2.a
z.ak(0)
for(y=this.c;y!=null;y=y.cx){if((y.b&1)===0)continue
if(y.a===C.e)continue
y.cc()}x=this.b
x.a.bX(x)
x=this.fr.y
z=z.gae()
v=$.F
if(typeof v!=="number")return H.G(v)
x.a2(C.c.a5(z*1000,v))},
ds:function(b4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
z=this.cM
z.a9(64,32,0,this.b.e)
if(this.dy){for(y=this.c;y!=null;y=y.cx){y.b&=4294967294
y.f.f=0}for(x=this.b.b;x!=null;x=x.c){x.a&=4294967262
x.Q=0
x.ch=1}}for(w=this.aF,v=this.ba,u=this.bb,t=this.bc,s=this.bL,r=this.af,q=r.a,p=r.b,o=r.c,n=r.d,m=this.ch;!0;){for(x=this.b.b,l=null,k=1;x!=null;x=x.c){j=x.a
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
if(a3<a4){j.aq(a4)
a3=a4}else if(a4<a3)a.aq(a3)
a5=x.x
a6=x.y
q.c5(h.d,a5)
p.c5(g.d,a6)
o.D(j)
n.D(a)
r.e=1
m.fx.fC(s,r)
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
u.D(j)
a=e.f
t.D(a)
f.aq(k)
e.aq(k)
l.bW(this.b.e)
a8=l.a&=4294967263;++l.Q
if((a8&4)!==4||(a8&2)!==2){l.a=a8&4294967291
j.D(u)
a.D(t)
f.ay()
e.ay()
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
u.D(j)
if((b3.b&1)===0)b3.aq(k)
b2.bW(this.b.e)
a=b2.a
if((a&4)!==4){j.D(u)
b3.ay()
continue}if((a&2)!==2){j.D(u)
b3.ay()
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
z.dt(w,f.c,e.c)
for(a9=0;a9<z.r;++a9){j=z.b
if(a9>=j.length)return H.b(j,a9)
b0=j[a9]
b0.b&=4294967294
if(b0.a!==C.f)continue
b0.cc()
for(b1=b0.dy;b1!=null;b1=b1.d)b1.b.a&=4294967262}j=this.b
j.a.bX(j)}},
aR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q
z=a.d
switch(z.a){case C.h:y=this.be
G.n(b,z.c,y)
x=z.b
z=b.b
this.bf.O(z.b,z.a)
z=this.Q
if(d)z.eX(y,x,c)
else{z.b7(y,x*z.b.c,c)
z.c.fill()}break
case C.m:H.H(z,"$isb_")
w=z.ga6()
v=this.cN.d3(8)
for(y=J.a1(v),u=0;C.c.B(u,w);++u)G.n(b,z.gam().h(0,u),y.h(v,u))
z=this.Q
y=[E.a]
if(d){z.toString
z.b8(H.i(v,"$isd",y,"$asd"),w,c)
z.c.stroke()}else{z.toString
z.b8(H.i(v,"$isd",y,"$asd"),w,c)
z.c.fill()}break
case C.o:H.H(z,"$isaP")
y=this.ag
G.n(b,z.c,y)
t=this.aS
G.n(b,z.d,t)
this.Q.Z(y,t,c)
break
case C.x:H.H(z,"$isc1")
s=z.geb()
v=z.gbF()
z=this.ag
G.n(b,v.h(0,0),z)
for(y=this.aS,r=y.a,t=z.a,u=1;C.c.B(u,s);++u){G.n(b,v.h(0,u),y)
this.Q.Z(z,y,c)
q=this.Q
q.b7(z,0.05*q.b.c,c)
q.c.stroke()
t[1]=r[1]
t[0]=r[0]}break
default:break}},
q:{
hZ:function(a,b){var z,y,x,w
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[[P.d,V.by]])
for(z=[V.by],x=0;x<a;++x){w=new Array(b)
w.fixed$length=Array
C.a.i(y,x,H.f(w,z))}return y}}},
hX:{"^":"c;0a,0b",
d0:function(a){var z,y
z=this.a.a.b
if(a<0||a>=z.length)return H.b(z,a)
y=z[a].gal()
return this.b.hh(y.b)},
$ishJ:1},
hY:{"^":"c;a,b,c,0d,0e"},
jZ:{"^":"c;"},
ac:{"^":"c;a",
sE:function(a){this.a[3]=H.j(a)},
gE:function(){return this.a[3]}},
k_:{"^":"c;"},
hb:{"^":"c;a,b,c,0d,0al:e<"},
k0:{"^":"c;"},
T:{"^":"c;0a,b,c,$ti",
scK:function(a,b){this.a=H.i(b,"$isd",this.$ti,"$asd")}},
ha:{"^":"c;0a,0b"},
k7:{"^":"c;"},
k8:{"^":"c;"},
dm:{"^":"c;",$isE:1,
$asE:function(){return[V.dm]}},
h_:{"^":"c;a,b,c"},
fe:{"^":"c;0a,0b,0c,d,e"},
hP:{"^":"c;0a,b",$ishl:1},
f4:{"^":"c;0a,0b,0c"},
hv:{"^":"c;0a,0b,c,d,e,f",$ishl:1},
hc:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,id,k1,0k2,k3,k4,0r1,r2,rx,0ry,x1,x2,0y1,y2,cM,0af,bL,0aF,0ba,0bb,0bc,0bM,0bN,0bO,0bP,0bd,0be,0bf,0ag,aS,cN,h6,aT,h7,h8,h9,ha,f2,f3,f4,f5,f6,f7,hb",
sfn:function(a){this.cy=H.i(a,"$isT",[E.a],"$asT")},
sfI:function(a){this.db=H.i(a,"$isT",[E.a],"$asT")},
seC:function(a){this.dy=H.i(a,"$isd",[E.a],"$asd")},
seN:function(a){this.fx=H.i(a,"$isT",[V.ac],"$asT")},
sfH:function(a){this.go=H.i(a,"$isT",[P.c],"$asT")},
bV:function(a,b,c){var z,y,x,w,v
H.i(a,"$isd",[c],"$asd")
H.t(b,{func:1,ret:c})
if(a==null){x=this.Q
w=new Array(x)
w.fixed$length=Array
a=H.f(w,[c])
for(z=0;J.cD(z,x);z=J.ey(z,1))try{J.eA(a,z,b.$0())}catch(v){y=H.aE(v)
x="Exception "+H.e(y)
throw H.h(x)}}return a},
eV:function(a){var z,y
z=this.ag
z.c2()
z.c2().fU(a)
for(y=a.gb2(),z=this.fy;y.B(0,a.gb4());y=y.p(0,1))C.d.i(z,y,null)
a.gbA()
a.gbA().sb6(a.gb6())
a.gb6()
a.gb6().sbA(a.gbA());--this.bL},
fG:function(a){var z,y,x,w,v,u,t
for(z=this.k2,y=this.x,x=0;w=this.id,x<w;++x){v=C.d.h(z,x)
u=v.gbQ(v)
w=this.cy.a
w=(w&&C.a).h(w,u).a
t=w[0]
v.sfz((C.b.T(y*w[1]+2048)<<19>>>0)+(C.b.T(128*(y*t))+262144))}F.ew(z,0,w,V.dm)
this.k3=0
for(u=0;u<this.id;++u)V.he(C.d.h(z,u).gfz(),1,0)},
fF:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.aS
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
w=this.f2
w.a=this
this.ag.fs(w,z)},
dg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.aS
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
v[1]=o>g?o:g}w=this.f3
w.b=a
w.a=this
this.ag.fs(w,z)},
bp:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j;++this.a
if(this.z===0)return
this.b=0
for(z=0,y=0;z<this.z;++z){y=C.c.bl(y,C.d.h(this.cx.a,z))
this.b=y}if((y&2)!==0)this.dA()
if(this.z===0)return
this.c=0
for(x=this.aF;!1;x=x.aZ())this.c=C.c.bl(this.c,x.gcp())
y=a.a
w=this.f
v=this.ag
u=v.d5()
t=C.b.m(y*w,u.gk(u))
u=a.a
v=v.d5()
s=C.b.m(u*w,v.gl(v))
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
y[1]=y[1]*o}}this.dg(a)
if((this.c&2)!==0)this.dn(a)
if((this.b&4)!==0)this.dz(a)
for(y=this.z,w=this.cy.a,v=this.db.a,u=a.a,z=0;z<y;++z){if(z>=w.length)return H.b(w,z)
n=w[z]
if(z>=v.length)return H.b(v,z)
m=v[z]
l=n.a
k=l[0]
j=m.a
l[0]=k+u*j[0]
l[1]=l[1]+u*j[1]}this.fF()
this.fG(!1)
if((this.b&32)!==0)this.dw(a)
if((this.b&64)!==0)this.dl(a)
if((this.b&128)!==0)this.dv(a)
if((this.b&16)!==0)this.dj(a)
if((this.b&8)!==0)this.dr(a)
if((this.c&1)!==0)this.dq(a)
if((this.b&256)!==0)this.dh(a)
this.dm(a)
this.di(a)},
dm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(z=this.dx,y=0;y<this.z;++y)C.d.i(z,y,0)
for(x=0;x<this.r2;++x){w=this.ry
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
t=v.c
z.i(0,u,C.d.h(z,u).p(0,t))}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
z.i(0,u,C.d.h(z,u).p(0,t))
z.i(0,s,z.h(0,s).p(0,t))}if((this.b&64)!==0)for(y=0;y<this.z;++y){C.d.h(this.cx.a,y).W(0,64)
C.d.i(z,y,0)}w=this.ba
r=this.d
q=this.r
p=q*a.b
o=w*(r*(p*p))
for(y=0;y<this.z;++y)z.i(0,y,o*Math.max(0,Math.min(H.iT(C.d.h(z,y)),5)-1))
n=a.a/(this.d*q)
for(m=this.aT,w=m.a,r=this.x,l=1.777777*this.e*r*r,x=0;x<this.r2;++x){r=this.ry
if(x>=r.length)return H.b(r,x)
v=r[x]
u=v.a
s=v.b
t=v.c
k=v.e
j=v.d
r=this.cy.a
i=(r&&C.a).h(r,u)
h=C.k.m(n*t*k,C.d.h(z,u).p(0,o*t))
r=j.a
w[0]=h*r[0]
w[1]=h*r[1]
r=this.db.a
r=(r&&C.a).h(r,u).a
r[0]=r[0]-l*w[0]
r[1]=r[1]-l*w[1]
s.bG(m,i,!0)}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
j=v.e
g=C.d.h(z,u).p(0,z.h(0,s))
w=n*t
r=j.a
f=C.k.m(w,g)*r[0]
e=C.k.m(w,g)*r[1]
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
di:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.bb
for(y=this.aT,x=y.a,w=this.x,v=1.777777*this.e*w*w,u=0;u<this.r2;++u){w=this.ry
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
l=r.gbC().gC()
k=C.b.t(m,l.gk(l))
w=w[1]
l=r.gbC().gC()
j=C.b.t(w,l.gl(l))
l=this.db.a
i=(l&&C.a).h(l,s)
l=r.gb1().d9(0).m(0,j)
w=r.gb5()
w=l.p(0,w.gk(w))
l=i.a
h=w.t(0,l[0])
w=r.gb1().m(0,k)
m=r.gb5()
g=w.p(0,m.gl(m)).t(0,l[1])
m=o.a
f=h.m(0,m[0]).p(0,g.m(0,m[1]))
if(f.B(0,0)){w=z*q*p
x[0]=C.b.m(w,f)*m[0]
x[1]=C.b.m(w,f)*m[1]
l[0]=l[0]+v*x[0]
l[1]=l[1]+v*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.bG(y,n,!0)}}for(u=0;u<this.k3;++u){x=this.r1
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
dz:function(a){var z,y,x
for(z=0;z<this.z;++z){C.d.h(this.cx.a,z).W(0,4)
y=this.db.a
x=y.length
if(z>=x)return H.b(y,z)
y=y[z].a
y[0]=0
y[1]=0}},
dn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
for(z=this.aF,y=this.aT,x=this.f4,w=this.f5,v=y.a,u=this.f6,t=u.a,s=t.a,u=u.b,r=this.f7,q=r.a.a,p=r.b;!1;z=z.aZ()){z.gcp().W(0,2)
z.hi()
o=C.b.m(a.a,z.gb1())
w.a=Math.sin(o)
w.b=Math.cos(o)
G.U(w,z.ge5(),x)
n=z.gb5().geB()
o=n.length
if(1>=o)return H.b(n,1)
v[1]=n[1]
v[0]=n[0]
y.F(0,a.a)
y.u(0,z.ge5())
y.A(x)
s[1]=v[1]
s[0]=v[0]
u.a=w.a
u.b=w.b
o=z.gbD()
m=z.gbD()
l=o.gfp()
k=m.gfp()
j=C.b.m(u.b,l.gC())
i=C.b.m(u.a,l.gc3())
k.sc3(C.b.m(u.a,l.gC())+C.b.m(u.b,l.gc3()))
k.sC(j-i)
o=o.gbh()
i=m.gbh()
j=C.b.m(u.a,o.gk(o))
k=C.b.m(u.b,o.gl(o))
i.sk(0,C.b.m(u.b,o.gk(o))-C.b.m(u.a,o.gl(o)))
i.sl(0,j+k)
m.gbh().u(0,t)
m=a.b
q[0]=m*s[0]
q[1]=m*s[1]
p.a=m*u.a
p.b=m*(u.b-1)
for(h=z.gb2();h.B(0,z.gb4());h=h.p(0,1)){o=this.cy.a
o=(o&&C.a).h(o,h)
m=this.db.a
G.n(r,o,(m&&C.a).h(m,h))}}},
dj:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=a6.b*this.bc
for(y=0;y<this.y2;++y){x=C.d.h(this.af,y)
x.gfa().W(0,16)
w=x.gas()
v=x.gat()
u=x.gbR()
t=x.ghe()
s=x.ghf()
r=x.ghg()
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
g=t.a7(p).p(0,s.a7(o)).p(0,r.a7(n))
f=t.w(p).p(0,s.w(o)).p(0,r.w(n))
e=Math.sqrt(C.c.d2(1,g.m(0,g).p(0,f.m(0,f))))
g=g.m(0,e)
f=f.m(0,e)
d=C.b.m(z,x.gdF())
c=f.m(0,t.gk(t)).t(0,g.m(0,t.gl(t)))
b=g.m(0,t.gk(t)).p(0,f.m(0,t.gl(t)))
a=f.m(0,s.gk(s)).t(0,g.m(0,s.gl(s)))
a0=g.m(0,s.gk(s)).p(0,f.m(0,s.gl(s)))
a1=f.m(0,r.gk(r)).t(0,g.m(0,r.gl(r)))
a2=g.m(0,r.gk(r)).p(0,f.m(0,r.gl(r)))
m=this.db.a
a3=(m&&C.a).h(m,w)
m=this.db.a
a4=(m&&C.a).h(m,v)
m=this.db.a
a5=(m&&C.a).h(m,u)
m=a3.a
m[0]=m[0]+C.b.m(d,c.t(0,q[0]-i))
m[1]=m[1]+C.b.m(d,b.t(0,q[1]-h))
q=a4.a
q[0]=q[0]+C.b.m(d,a.t(0,l[0]-i))
q[1]=q[1]+C.b.m(d,a0.t(0,l[1]-h))
l=a5.a
l[0]=l[0]+C.b.m(d,a1.t(0,j[0]-i))
l[1]=l[1]+C.b.m(d,a2.t(0,j[1]-h))}},
dr:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.b*this.bM
for(y=this.y1,x=0;x<this.x1;++x){w=C.d.h(y,x)
w.gfa().W(0,8)
v=w.gas()
u=w.gat()
t=this.cy.a
s=(t&&C.a).h(t,v)
t=this.cy.a
t=(t&&C.a).h(t,u).a
r=t[0]
q=s.a
p=r-q[0]
o=t[1]-q[1]
n=w.gh5()
m=Math.sqrt(p*p+o*o)
if(m===0)m=17976931348623157e292
l=C.b.m(z,w.gdF())
k=C.b.m(l,n.t(0,m))/m*p
j=C.b.m(l,n.t(0,m))/m*o
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
dv:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
this.seC(this.bV(this.dy,V.cu(),E.a))
for(z=this.dx,y=0;y<this.z;++y){C.d.i(z,y,0)
x=this.dy
if(y>=x.length)return H.b(x,y)
x[y].I()}for(w=0;w<this.k3;++w){x=this.r1
if(w>=x.length)return H.b(x,w)
v=x[w]
if((v.c&128)!==0){u=v.a
t=v.b
s=v.d
r=v.e
z.i(0,u,C.d.h(z,u).p(0,s))
z.i(0,t,z.h(0,t).p(0,s))
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
x[1]=x[1]+o*n[1]}}x=this.bO
n=this.r*a0.b
m=x*n
l=this.bP*n
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
k=C.d.h(z,u).p(0,z.h(0,t))
x=p.a
n=x[0]
j=q.a
i=j[0]
x=x[1]
j=j[1]
h=C.k.m(m,k.t(0,2))
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
dw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.bN
for(y=this.aT,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
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
l=r.gbC().gC()
k=C.b.t(m,l.gk(l))
u=u[1]
l=r.gbC().gC()
j=C.b.t(u,l.gl(l))
l=r.gb1().d9(0).m(0,j)
u=r.gb5()
u=l.p(0,u.gk(u))
l=n.a
i=u.t(0,l[0])
u=r.gb1().m(0,k)
m=r.gb5()
h=u.p(0,m.gl(m)).t(0,l[1])
m=z*p*q
x[0]=C.k.m(m,i)
x[1]=C.k.m(m,h)
l[0]=l[0]+w*x[0]
l[1]=l[1]+w*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.bG(y,o,!0)}for(v=0;v<this.k3;++v){x=this.r1
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
dl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.bd*(this.r*a.b)
for(y=this.aT,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
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
q.bG(y,o,!0)}}for(v=0;v<this.k3;++v){x=this.r1
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
l=this.bd*(r-0.25)
x=n.a
j=l*x[0]
i=l*x[1]
x=m.a
x[0]=x[0]-j
x[1]=x[1]-i
x=k.a
x[0]=x[0]+j
x[1]=x[1]+i}}}},
dq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.fr
if(z==null)z=new Float64Array(this.Q)
this.fr=z
y=a.b*this.be
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
dh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.fx
z.scK(0,this.bV(z.a,V.el(),V.ac))
y=C.b.T(256*this.bf)
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
dA:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=P.ar(this.z,0,!1,P.u)
for(y=this.ag,x=0;x<this.z;++x){w=C.d.h(this.cx.a,x)
w.W(0,2)
v=y.c2()
w.W(0,512)
v.fT(x)
C.a.i(z,x,-1)}for(y=this.k2,u=0;t=this.id,u<t;++u){s=C.d.h(y,u)
s.sbQ(0,C.a.h(z,s.gbQ(s)))}for(x=0;x<t;++x)if(V.hd(C.d.h(y,x))){--t
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
if(typeof n!=="number")return n.B()
if(n>=0){n=o.b
if(typeof n!=="number")return n.B()
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
if(typeof n!=="number")return n.B()
if(n<0){--t
if(t<0||t>=p)return H.b(y,t)
r=y[t];(y&&C.a).i(y,t,o)
y=this.ry;(y&&C.a).i(y,x,r);--x}}this.r2=t
for(y=this.y1,u=0;t=this.x1,u<t;++u){m=C.d.h(y,u)
m.sas(C.a.h(z,m.gas()))
m.sat(C.a.h(z,m.gat()))}for(x=0;x<t;++x){p=C.d.h(y,x)
if(p.gas().B(0,0)||p.gat().B(0,0)){--t
r=y.h(0,t)
y.i(0,t,y.h(0,x))
y.i(0,x,r);--x}}this.x1=t
for(u=0;t=this.y2,u<t;++u){l=C.d.h(this.af,u)
l.sas(C.a.h(z,l.gas()))
l.sat(C.a.h(z,l.gat()))
l.sbR(C.a.h(z,l.gbR()))}for(x=0;x<t;++x){y=C.d.h(this.af,x)
if(y.gas().B(0,0)||y.gat().B(0,0)||y.gbR().B(0,0)){--t
r=C.d.h(this.af,t)
y=this.af
y.i(0,t,C.d.h(y,x))
C.d.i(this.af,x,r);--x}}this.y2=t
for(k=this.aF;!1;k=k.aZ()){for(x=k.gb2(),j=0,i=0,h=!1;x.B(0,k.gb4());x=x.p(0,1)){t=C.a.h(z,x)
if(typeof t!=="number")return t.fL()
if(t>=0){j=Math.min(j,t)
i=Math.max(i,t+1)}else h=!0}if(j<i){k.sb2(j)
k.sb4(i)
if(h){k.gcp().W(0,2)
k.seA(!0)}}else{k.sb2(0)
k.sb4(0)
if(k.gfZ())k.sez(!0)}}this.z=0
for(k=this.aF;!1;k=g){g=k.aZ()
if(k.gez())this.eV(k)
else k.geA()}},
d6:function(){var z=this.fx
z.scK(0,this.bV(z.a,z.b,V.ac))
return this.fx.a},
q:{
he:function(a,b,c){return a.p(0,c<<19>>>0).p(0,b<<7>>>0)},
k3:[function(){return new E.a(new Float64Array(2))},"$0","cu",0,0,22],
k1:[function(){return new P.c()},"$0","iS",0,0,23],
k2:[function(){var z=new Int8Array(4)
z[0]=127
z[1]=127
z[2]=127
z[3]=50
return new V.ac(z)},"$0","el",0,0,24]}},
dW:{"^":"c;a",
d3:function(a){var z=this.a
if(!z.cI(a))z.i(0,a,this.c0(a))
return z.h(0,a)},
c0:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[E.a])
for(z=y.length,x=0;x<z;++x)C.a.i(y,x,new E.a(new Float64Array(2)))
return y}},
h8:{"^":"S;a,b,c,d",
R:function(){return new E.a(new Float64Array(2))},
$asS:function(){return[E.a]}},
h9:{"^":"S;a,b,c,d",
R:function(){return new E.aw(new Float64Array(3))},
$asS:function(){return[E.aw]}},
h5:{"^":"S;a,b,c,d",
R:function(){return new E.ag(new Float64Array(4))},
$asS:function(){return[E.ag]}},
h6:{"^":"S;a,b,c,d",
R:function(){return new E.aX(new Float64Array(9))},
$asS:function(){return[E.aX]}},
h4:{"^":"S;a,b,c,d",
R:function(){var z=new Float64Array(2)
return new V.N(new E.a(z),new E.a(new Float64Array(2)))},
$asS:function(){return[V.N]}},
h7:{"^":"S;a,b,c,d",
R:function(){return new G.y(0,1)},
$asS:function(){return[G.y]}},
w:{"^":"Z;$ti"},
fX:{"^":"w;d,0a,0b,0c",
R:function(){return new V.aZ(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aZ]},
$asw:function(){return[V.aZ]},
$asZ:function(){return[V.aZ]}},
fT:{"^":"w;d,0a,0b,0c",
R:function(){return new V.aL(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aL]},
$asw:function(){return[V.aL]},
$asZ:function(){return[V.aL]}},
fW:{"^":"w;d,0a,0b,0c",
R:function(){return new V.aY(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aY]},
$asw:function(){return[V.aY]},
$asZ:function(){return[V.aY]}},
fU:{"^":"w;d,0a,0b,0c",
R:function(){return new V.aN(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aN]},
$asw:function(){return[V.aN]},
$asZ:function(){return[V.aN]}},
fV:{"^":"w;d,0a,0b,0c",
R:function(){return new V.aO(0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aO]},
$asw:function(){return[V.aO]},
$asZ:function(){return[V.aO]}},
fR:{"^":"w;d,0a,0b,0c",
R:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.aP(new E.a(z),new E.a(y),new E.a(x),new E.a(w),!1,!1,new E.a(new Float64Array(2)),C.o,0)
z.b=0.01
return new V.aJ(z,0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aJ]},
$asw:function(){return[V.aJ]},
$asZ:function(){return[V.aJ]}},
fS:{"^":"w;d,0a,0b,0c",
R:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.aP(new E.a(z),new E.a(y),new E.a(x),new E.a(w),!1,!1,new E.a(new Float64Array(2)),C.o,0)
z.b=0.01
return new V.aK(z,0,new V.J(),new V.J(),0,0,V.L(),0,0,0,0,0,this.d,V.L())},
$asY:function(){return[V.aK]},
$asw:function(){return[V.aK]},
$asZ:function(){return[V.aK]}},
f9:{"^":"c;a,b,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,fy",
sen:function(a){this.Q=H.i(a,"$isw",[V.aZ],"$asw")},
se4:function(a){this.ch=H.i(a,"$isw",[V.aL],"$asw")},
sec:function(a){this.cx=H.i(a,"$isw",[V.aY],"$asw")},
see:function(a){this.cy=H.i(a,"$isw",[V.aN],"$asw")},
sei:function(a){this.db=H.i(a,"$isw",[V.aO],"$asw")},
se6:function(a){this.dx=H.i(a,"$isw",[V.aJ],"$asw")},
se7:function(a){this.dy=H.i(a,"$isw",[V.aK],"$asw")},
$isjM:1,
q:{
fa:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
t=new V.h8(u,0,a6,H.f(s,t))
t.az(a6,a7,v)
v=E.aw
s=new Array(a6)
s.fixed$length=Array
u=[v]
s=H.f(s,u)
r=new Array(a7)
r.fixed$length=Array
u=new V.h9(s,0,a6,H.f(r,u))
u.az(a6,a7,v)
v=E.ag
r=new Array(a6)
r.fixed$length=Array
s=[v]
r=H.f(r,s)
q=new Array(a7)
q.fixed$length=Array
s=new V.h5(r,0,a6,H.f(q,s))
s.az(a6,a7,v)
v=V.N
q=new Array(a6)
q.fixed$length=Array
r=[v]
q=H.f(q,r)
p=new Array(a7)
p.fixed$length=Array
r=new V.h4(q,0,a6,H.f(p,r))
r.az(a6,a7,v)
v=G.y
p=new Array(a6)
p.fixed$length=Array
q=[v]
p=H.f(p,q)
o=new Array(a7)
o.fixed$length=Array
q=new V.h7(p,0,a6,H.f(o,q))
q.az(a6,a7,v)
v=E.aX
o=new Array(a6)
o.fixed$length=Array
p=[v]
o=H.f(o,p)
n=new Array(a7)
n.fixed$length=Array
p=new V.h6(o,0,a6,H.f(n,p))
p.az(a6,a7,v)
v=new Float64Array(2)
o=new Float64Array(2)
v=new V.bL(new E.a(v),new E.a(o),new E.a(new Float64Array(2)),0,0,0)
o=new Float64Array(2)
n=new Float64Array(2)
o=new V.bL(new E.a(o),new E.a(n),new E.a(new Float64Array(2)),0,0,0)
n=new Float64Array(2)
m=new Float64Array(2)
n=new V.bL(new E.a(n),new E.a(m),new E.a(new Float64Array(2)),0,0,0)
m=new Array(3)
m.fixed$length=Array
m=H.f(m,[V.bL])
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
y=new V.f9(t,u,s,p,r,q,y,x,w,new V.ff(new V.ir(v,o,n,m,0,new E.a(l),new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),new E.a(e),new E.a(d),new E.a(c)),b,a,new E.a(a0),new E.a(a1),new E.a(a2),new E.a(new Float64Array(2))))
x=new V.fX(y)
x.an(10,V.aZ)
y.sen(x)
x=new V.fT(y)
x.an(10,V.aL)
y.se4(x)
x=new V.fW(y)
x.an(10,V.aY)
y.sec(x)
x=new V.fU(y)
x.an(10,V.aN)
y.see(x)
x=new V.fV(y)
x.an(10,V.aO)
y.sei(x)
x=new V.fR(y)
x.an(10,V.aJ)
y.se6(x)
x=new V.fS(y)
x.an(10,V.aK)
y.se7(x)
x=V.aM()
w=V.aM()
v=new Float64Array(2)
u=new Float64Array(2)
t=V.dt()
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
a1=V.fo()
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
y.fr=new V.f_(y,new V.cU(x,w,new G.C(new E.a(v),new G.y(0,1)),new G.C(new E.a(u),new G.y(0,1)),!1),t,new V.cV(new E.a(s),new E.a(r),0,0),new E.a(q),new G.C(new E.a(p),new G.y(0,1)),new E.a(o),new E.a(n),new V.e3(0,0),new V.e3(0,0),m,new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),e,l,new E.a(d),new E.a(c),new V.Q(b),new E.a(a),new E.a(a0),a1)
x=V.dt()
w=V.aM()
v=V.aM()
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
y.fx=new V.hI(x,new V.cU(w,v,new G.C(new E.a(u),new G.y(0,1)),new G.C(new E.a(t),new G.y(0,1)),!1),new G.C(new E.a(s),new G.y(0,1)),new G.C(new E.a(r),new G.y(0,1)),new V.cV(new E.a(q),new E.a(p),0,0),new V.hr(new E.a(o),new E.a(n),new E.a(m),new E.a(l),new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),new E.a(e),new E.a(d),new G.C(new E.a(c),new G.y(0,1)),new G.C(new E.a(b),new G.y(0,1)),new E.a(a),new E.a(a0)),z,new G.av(new E.a(a1),new E.a(a2),new E.a(a3),0,0,0),new G.av(new E.a(a4),new E.a(a5),new E.a(new Float64Array(2)),0,0,0),y)
y.z=y
return y}}},
Z:{"^":"c;0a,$ti",
scz:function(a){this.a=H.i(a,"$isd",[H.al(this,"Z",0)],"$asd")},
an:function(a,b){this.b=0
this.scz(null)
this.b=0
this.c=0
this.cL(a)},
cL:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[H.al(this,"Z",0)])
z=this.a
if(z!=null)C.a.Y(y,0,this.c,z,0)
for(z=y.length,x=0;x<z;++x)C.a.i(y,x,this.R())
this.scz(y)
this.c=z},
aG:function(){var z,y
z=this.b
y=this.c
if(z>=y)this.cL(y*2)
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.b(z,y)
return z[y]},
$isY:1},
S:{"^":"c;$ti",
az:function(a,b,c){var z,y
for(z=this.a,y=0;y<a;++y)C.a.i(z,y,this.R())},
aG:function(){var z,y
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.b(z,y)
return z[y]}}}],["","",,F,{"^":"",
ew:function(a,b,c,d){var z
H.i(a,"$isd",[d],"$asd")
P.dp(b,c,a.length,null,null,null)
z=P.fK(H.ci(a,b,c,H.l(a,0)),!0,d)
H.hy(z,J.iF(),H.l(z,0))
C.a.aK(a,b,c,z)}}],["","",,N,{"^":"",eS:{"^":"f6;c,a,b",
b8:function(a,b,c){var z,y,x,w,v
H.i(a,"$isd",[E.a],"$asd")
this.b9(c)
for(z=J.a1(a),y=this.b,x=0;x<b;++x){w=z.h(a,x)
v=z.h(a,x)
y.aI(H.k(w,"$isa"),H.k(v,"$isa"))}y=this.c
y.beginPath()
C.j.cW(y,J.bb(z.h(a,0)),J.bc(z.h(a,0)))
for(x=1;x<b;++x)C.j.bT(y,J.bb(z.h(a,x)),J.bc(z.h(a,x)))
C.j.bT(y,J.bb(z.h(a,0)),J.bc(z.h(a,0)))
y.closePath()},
Z:function(a,b,c){var z,y
this.b9(c)
z=this.b
z.aI(a,a)
z.aI(b,b)
z=this.c
z.beginPath()
y=a.a
C.j.cW(z,y[0],y[1])
y=b.a
C.j.bT(z,y[0],y[1])
z.closePath()
z.stroke()},
eY:function(a,b,c,d){this.b7(a,b*this.b.c,c)
this.c.stroke()},
eX:function(a,b,c){return this.eY(a,b,c,null)},
b7:function(a,b,c){var z,y
this.b9(c)
this.b.aI(a,a)
z=this.c
z.beginPath()
y=a.a
z.arc(y[0],y[1],b,0,6.283185307179586,!0)
z.closePath()},
b9:function(a){var z,y,x,w
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
f_:function(a,b,c,d){H.i(a,"$isd",[E.a],"$asd")
H.i(c,"$isd",[V.ac],"$asd")
throw H.h("Unimplemented")},
f0:function(a,b,c,d){H.i(a,"$isd",[E.a],"$asd")
H.i(c,"$isd",[V.ac],"$asd")
throw H.h("Unimplemented")}}}],["","",,G,{"^":"",bw:{"^":"c;k:a>,l:b>,c",
a4:function(a,b,c){this.a=C.c.T(C.b.ah(a*255))
this.b=C.c.T(C.b.ah(b*255))
this.c=C.c.T(C.b.ah(c*255))}},y:{"^":"c;a,C:b<",
bm:function(a){this.a=Math.sin(a)
this.b=Math.cos(a)
return this},
n:function(a){return"Rot(s:"+H.e(this.a)+", c:"+H.e(this.b)+")"},
q:{
U:function(a,b,c){var z=b.a
c.sk(0,a.b*z[0]-a.a*z[1])
c.sl(0,a.a*z[0]+a.b*z[1])},
au:function(a,b,c){var z,y
z=a.b
y=b.a
c.sk(0,z*y[0]+a.a*y[1])
c.sl(0,-a.a*y[0]+a.b*y[1])}}},av:{"^":"c;a,b,C:c<,d,E:e<,f",
sE:function(a){this.e=H.b8(a)},
n:function(a){return"Sweep:\nlocalCenter: "+this.a.n(0)+"\n"+("c0: "+this.b.n(0)+", c: "+this.c.n(0)+"\n")+("a0: "+H.e(this.d)+", a: "+H.e(this.e)+"\n")+("alpha0: "+H.e(this.f))},
S:function(){var z=6.283185307179586*C.k.ah(this.d/6.283185307179586)
this.d-=z
this.e-=z},
D:function(a){this.a.j(a.a)
this.b.j(a.b)
this.c.j(a.c)
this.d=a.d
this.e=a.e
this.f=a.f
return this},
ab:function(a,b){var z,y,x,w
z=a.a
y=1-b
x=this.b.a
w=this.c.a
z.sk(0,y*x[0]+b*w[0])
z.sl(0,y*x[1]+b*w[1])
w=a.b
w.bm(y*this.d+b*this.e)
y=z.a
x=this.a.a
z.sk(0,y[0]-(w.b*x[0]-w.a*x[1]))
z.sl(0,y[1]-(w.a*x[0]+w.b*x[1]))},
aq:function(a){var z,y,x,w,v
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
this.f=a}},cj:{"^":"c;a"},C:{"^":"c;a,b",
n:function(a){return"XForm:\n"+("Position: "+this.a.n(0)+"\n")+("R: \t"+this.b.n(0)+"\n")},
q:{
b2:function(a,b,c){var z,y,x,w,v,u
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
dJ:function(a,b,c){var z,y,x,w
z=b.a
y=a.a.a
x=z[0]-y[0]
w=z[1]-y[1]
y=a.b
c.sk(0,y.b*x+y.a*w)
c.sl(0,-y.a*x+y.b*w)},
dI:function(a,b,c){var z,y,x,w,v,u,t
z=a.b
y=b.b
x=c.b
w=z.b
v=y.a
u=z.a
t=y.b
x.a=w*v-u*t
x.b=w*t+z.a*y.a
y=$.$get$ck()
y.j(b.a)
y.A(a.a)
G.au(z,$.$get$ck(),c.a)}}},hR:{"^":"c;",
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
s.A(this.d)
b.O(y*x+u+t[0],v-z*x+-t[1])}}}],["","",,X,{"^":"",eT:{"^":"hR;0a,b,c,d"}}],["","",,A,{"^":"",
bQ:function(a){var z,y
z=C.l.fb(H.i(a,"$isv",[P.c],"$asv"),0,new A.j0(),P.u)
if(typeof z!=="number")return H.G(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
j0:{"^":"r:18;",
$2:function(a,b){var z,y
H.j(a)
z=J.aF(b)
if(typeof a!=="number")return a.p()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,E,{"^":"",ag:{"^":"c;a",
j:function(a){var z,y
z=H.k(a,"$isag").a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
n:function(a){return"[0] "+this.av(0).n(0)+"\n[1] "+this.av(1).n(0)+"\n"},
i:function(a,b,c){C.l.i(this.a,b,c)},
a3:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.ag){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gM:function(a){return A.bQ(this.a)},
av:function(a){var z,y,x
z=new Float64Array(2)
y=this.a
if(a>=4)return H.b(y,a)
z[0]=y[a]
x=2+a
if(x>=4)return H.b(y,x)
z[1]=y[x]
return new E.a(z)},
p:function(a,b){var z,y,x
z=new Float64Array(4)
y=new E.ag(z)
y.j(this)
x=b.gh0()
z[0]=C.b.p(z[0],x.h(0,0))
z[1]=C.b.p(z[1],x.h(0,1))
z[2]=C.b.p(z[2],x.h(0,2))
z[3]=C.b.p(z[3],x.h(0,3))
return y},
I:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
fh:function(){var z,y,x,w,v,u,t
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
return u}},aX:{"^":"c;a",
j:function(a){var z,y
z=H.k(a,"$isaX").a
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
n:function(a){return"[0] "+this.av(0).n(0)+"\n[1] "+this.av(1).n(0)+"\n[2] "+this.av(2).n(0)+"\n"},
i:function(a,b,c){C.l.i(this.a,b,c)},
a3:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.aX){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gM:function(a){return A.bQ(this.a)},
av:function(a){var z,y,x
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
return new E.aw(z)},
p:function(a,b){var z,y,x
z=new Float64Array(9)
y=new E.aX(z)
y.j(this)
x=b.gh1()
z[0]=C.b.p(z[0],x.h(0,0))
z[1]=C.b.p(z[1],x.h(0,1))
z[2]=C.b.p(z[2],x.h(0,2))
z[3]=C.b.p(z[3],x.h(0,3))
z[4]=C.b.p(z[4],x.h(0,4))
z[5]=C.b.p(z[5],x.h(0,5))
z[6]=C.b.p(z[6],x.h(0,6))
z[7]=C.b.p(z[7],x.h(0,7))
z[8]=C.b.p(z[8],x.h(0,8))
return y},
I:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=0
z[6]=0
z[7]=0
z[8]=0}},a:{"^":"c;a",
O:function(a,b){var z=this.a
z[0]=a
z[1]=b},
I:function(){var z=this.a
z[0]=0
z[1]=0},
j:function(a){var z,y
z=H.k(a,"$isa").a
y=this.a
y[1]=z[1]
y[0]=z[0]},
n:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
a3:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.a){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gM:function(a){return A.bQ(this.a)},
p:function(a,b){var z=new E.a(new Float64Array(2))
z.j(this)
z.u(0,b)
return z},
i:function(a,b,c){C.l.i(this.a,b,c)},
gv:function(a){return Math.sqrt(this.gaU())},
gaU:function(){var z,y
z=this.a
y=z[0]
z=z[1]
return y*y+z*z},
S:function(){var z,y,x
z=Math.sqrt(this.gaU())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
return z},
bJ:function(a){var z,y,x,w
z=this.a
y=a.a
x=z[0]-y[0]
w=z[1]-y[1]
return x*x+w*w},
w:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]},
a7:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[1]-y[1]*z[0]},
aJ:function(a,b){var z=this.a
b.O(-a*z[1],a*z[0])
return b},
u:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]},
A:function(a){var z,y
z=a.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
F:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
N:function(){var z=this.a
z[1]=-z[1]
z[0]=-z[0]},
sk:function(a,b){this.a[0]=b
return b},
sl:function(a,b){this.a[1]=b
return b},
gk:function(a){return this.a[0]},
gl:function(a){return this.a[1]},
q:{
dX:function(){return new E.a(new Float64Array(2))}}},aw:{"^":"c;a",
I:function(){var z=this.a
z[2]=0
z[1]=0
z[0]=0},
j:function(a){var z,y
z=H.k(a,"$isaw").a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
n:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
a3:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.aw){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gM:function(a){return A.bQ(this.a)},
p:function(a,b){var z,y,x
z=new Float64Array(3)
y=new E.aw(z)
y.j(this)
x=b.gh2()
z[0]=C.b.p(z[0],x.h(0,0))
z[1]=C.b.p(z[1],x.h(0,1))
z[2]=C.b.p(z[2],x.h(0,2))
return y},
i:function(a,b,c){C.l.i(this.a,b,c)},
gv:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gk:function(a){return this.a[0]},
gl:function(a){return this.a[1]}}}],["","",,D,{"^":"",
es:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
z=[V.aH]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.O(0,-10)
w=V.fa(100,10)
v=V.f8(V.fm())
u=V.hZ(4,4)
t=new P.bJ(0,0)
if($.F==null){H.bG()
$.F=$.at}t.b_(0)
s=new P.bJ(0,0)
if($.F==null){H.bG()
$.F=$.at}s.b_(0)
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
b=new P.bJ(0,0)
if($.F==null){H.bG()
$.F=$.at}b.b_(0)
a=V.bz()
a0=V.bz()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.aM()
a4=V.aM()
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
b9=C.c.T(C.c.ah(102))
c0=C.c.T(C.c.ah(102))
c1=C.c.T(C.c.ah(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.bg(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.j(x)
c6=new V.hU(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.dF(0,0,0,0,0,!1),new G.cj(t),new G.cj(s),new G.bw(0,0,0),new G.C(new E.a(r),new G.y(0,1)),new E.a(q),new E.a(p),new V.dW(m),new V.hX(),new V.hY(new V.dq(new E.a(l),0),new E.a(k),new E.a(j)),new V.cf(new E.a(i),new E.a(h),0),new V.d6(0,0,0,0,0,0,g,new V.du(),new V.bA(0),f,new V.bA(0),new V.cQ(e,d,0)),c,new G.cj(b),new V.d6(0,0,0,0,0,0,a,new V.du(),new V.bA(0),a0,new V.bA(0),new V.cQ(a1,a2,0)),new V.hC(a3,a4,new G.av(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.av(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.hD(C.L,0),new V.dF(0,0,0,0,0,!1),z,new G.av(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.av(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.bw(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.dW(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.f2(0,c6)
n.d=new V.f1()
n.a=v
c6.b=n
c6.fr=new V.hk(new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0),new V.a6(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.hc(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.N(new E.a(z),new E.a(x)),new V.fe(!1,0),new V.N(new E.a(v),new E.a(u)),new E.a(t),new G.C(new E.a(s),new G.y(0,1)),new G.C(new E.a(r),new G.y(0,1)),new V.f4(),new V.hb(0,new E.a(q),new E.a(p)),new V.hP(new E.a(o)),new V.hv(new V.cf(new E.a(n),new E.a(m),0),new V.dq(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.y(0,1),new G.C(new E.a(h),new G.y(0,1)),new G.C(new E.a(new Float64Array(2)),new G.y(0,1)),new V.h_(0,0,0))
z.ba=0.05
z.bb=1
z.bc=0.25
z.bM=0.25
z.bN=0.25
z.bO=0.1
z.bP=0.2
z.bd=0.5
z.be=0.5
z.bf=0.5
z.cx=new V.ha()
x=[E.a]
z.sfn(new V.T(V.cu(),0,x))
z.sfI(new V.T(V.cu(),0,x))
z.seN(new V.T(V.el(),0,[V.ac]))
z.sfH(new V.T(V.iS(),0,[P.c]))
c6.fx=z
c6.ao(w.ch,C.h,C.h)
c6.ao(w.cx,C.m,C.h)
c6.ao(w.Q,C.m,C.m)
c6.ao(w.cy,C.o,C.h)
c6.ao(w.db,C.o,C.m)
c6.ao(w.dx,C.x,C.h)
c6.ao(w.dy,C.x,C.m)
w=new P.bJ(0,0)
if($.F==null){H.bG()
$.F=$.at}w.b_(0)
c7=new D.eR(y,c6,w,10)
J.bW(C.u.bU(document,"#title"),"Ball cage")
c7.fc(0)
c7.ff()
C.P.d_(window,c7.gca(c7))},
eR:{"^":"fb;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
fc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=new V.c2(new E.a(new Float64Array(2)),C.h,0)
z.b=2
y=new V.c6(0.2,0,0,!1,new V.bC(1,65535,0))
y.a=z
y.c=0.9
y.d=1
x=new Float64Array(2)
w=new V.cK(C.e,new E.a(x),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
v=-20+20*z.b
for(x=this.b,u=this.a,t=0;t<10;++t){s=-20+z.b*2*t
r=new Float64Array(2)
r[0]=s
r[1]=-20
w.c=new E.a(r)
q=x.aP(w)
C.a.u(u,q)
q.aQ(y)
r=new Float64Array(2)
r[0]=s
r[1]=v
w.c=new E.a(r)
q=x.aP(w)
C.a.u(u,q)
q.aQ(y)
r=new Float64Array(2)
r[0]=-20
r[1]=s
w.c=new E.a(r)
q=x.aP(w)
C.a.u(u,q)
q.aQ(y)
r=new Float64Array(2)
r[0]=v
r[1]=s
w.c=new E.a(r)
q=x.aP(w)
C.a.u(u,q)
q.aQ(y)}p=new V.c2(new E.a(new Float64Array(2)),C.h,0)
p.b=1
o=new V.c6(0.2,0,0,!1,new V.bC(1,65535,0))
o.d=1
o.e=0.05
o.a=p
r=new Float64Array(2)
n=new V.cK(C.e,new E.a(r),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
r=new E.a(new Float64Array(2))
r.O(0,-20)
n.e=r
r=new E.a(new Float64Array(2))
r.O(15,15)
n.c=r
n.a=C.f
n.ch=!0
m=x.aP(n)
C.a.u(u,m)
m.aQ(o)}}},1],["","",,Q,{"^":"",fb:{"^":"c;",
fX:[function(a,b){var z,y,x,w,v,u,t,s
H.ba(b)
z=this.c
z.ak(0)
y=this.b
x=y.id.a
x.ak(0)
w=y.k1.a
w.ak(0)
v=y.a
if((v&1)===1){v=y.b
v.a.bX(v)
v=y.a&=4294967294}y.a=v|2
v=y.go
v.a=0.016666666666666666
v.d=10
v.e=10
v.b=60
v.c=y.cx*0.016666666666666666
v.f=y.cy
u=y.fr.b
t=w.gae()
s=$.F
if(typeof s!=="number")return H.G(s)
u.a2(C.c.a5(t*1000,s))
w.ak(0)
y.b.eJ()
s=y.fr.c
t=w.gae()
u=$.F
if(typeof u!=="number")return H.G(u)
s.a2(C.c.a5(t*1000,u))
if(y.dy&&v.a>0){w.ak(0)
y.fx.bp(v)
u=y.fr.d
t=w.gae()
s=$.F
if(typeof s!=="number")return H.G(s)
u.a2(C.c.a5(t*1000,s))
w.ak(0)
y.bp(v)
s=y.fr.e
t=w.gae()
u=$.F
if(typeof u!=="number")return H.G(u)
s.a2(C.c.a5(t*1000,u))}if(y.db&&v.a>0){w.ak(0)
y.ds(v)
u=y.fr.z
w=w.gae()
t=$.F
if(typeof t!=="number")return H.G(t)
u.a2(C.c.a5(w*1000,t))}if(v.a>0)y.cx=v.b
if((y.a&4)===4)y.eH()
y.a&=4294967293
w=y.fr.a
x=x.gae()
v=$.F
if(typeof v!=="number")return H.G(v)
w.a2(C.c.a5(x*1000,v))
z=z.gae()
v=$.F
if(typeof v!=="number")return H.G(v)
this.Q=C.c.a5(z*1e6,v)
v=this.f;(v&&C.j).eI(v,0,0,900,600)
y.eZ()
y=this.y
if(typeof y!=="number")return y.p()
this.y=y+1
C.P.d_(window,this.gca(this))},"$1","gca",5,0,19],
ff:function(){var z,y,x,w
z=H.H(H.k(W.i7("canvas",null),"$isX"),"$iscN")
z.width=900
z.height=600
this.e=z
y=document
x=y.body;(x&&C.q).ad(x,z)
z=this.e
z.toString
this.f=z.getContext("2d")
w=new E.a(new Float64Array(2))
w.O(450,300)
z=new E.a(new Float64Array(2))
z.j(w)
x=new E.a(new Float64Array(2))
x.j(w)
x=new X.eT(z,20,x)
x.a=!0
x.c=this.d
this.r=x
x=new N.eS(this.f,2,x)
this.x=x
this.b.Q=x
this.y=0
this.z=C.u.bU(y,"#fps-counter")
this.ch=C.u.bU(y,"#world-step-time")
P.dG(P.cZ(0,0,0,0,0,1),new Q.fc(this))
P.dG(P.cZ(0,0,0,200,0,0),new Q.fd(this))}},fc:{"^":"r:7;a",
$1:function(a){var z
H.k(a,"$isaj")
z=this.a
J.bW(z.z,J.aG(z.y))
z.y=0}},fd:{"^":"r:7;a",
$1:function(a){var z,y
H.k(a,"$isaj")
z=this.a
y=z.Q
if(y==null)return
J.bW(z.ch,H.e(y/1000)+" ms")}}}],["","",,O,{"^":""}]]
setupProgram(dart,0,0)
J.z=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d9.prototype
return J.d8.prototype}if(typeof a=="string")return J.aV.prototype
if(a==null)return J.da.prototype
if(typeof a=="boolean")return J.fC.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.iW=function(a){if(typeof a=="number")return J.aU.prototype
if(typeof a=="string")return J.aV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.a1=function(a){if(typeof a=="string")return J.aV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.bP=function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.cx=function(a){if(typeof a=="number")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bo.prototype
return a}
J.iX=function(a){if(typeof a=="number")return J.aU.prototype
if(typeof a=="string")return J.aV.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bo.prototype
return a}
J.iY=function(a){if(typeof a=="string")return J.aV.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bo.prototype
return a}
J.B=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.c)return a
return J.bq(a)}
J.ey=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.iW(a).p(a,b)}
J.ae=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.z(a).a3(a,b)}
J.a2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cx(a).U(a,b)}
J.cD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cx(a).B(a,b)}
J.ez=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ja(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a1(a).h(a,b)}
J.eA=function(a,b,c){return J.bP(a).i(a,b,c)}
J.br=function(a,b){return J.B(a).ep(a,b)}
J.eB=function(a,b,c){return J.B(a).er(a,b,c)}
J.eC=function(a,b){return J.B(a).ad(a,b)}
J.eD=function(a,b){return J.iX(a).aE(a,b)}
J.cE=function(a,b){return J.bP(a).a8(a,b)}
J.eE=function(a){return J.B(a).geG(a)}
J.aF=function(a){return J.z(a).gM(a)}
J.bs=function(a){return J.bP(a).gP(a)}
J.a9=function(a){return J.a1(a).gv(a)}
J.eF=function(a){return J.B(a).gau(a)}
J.eG=function(a){return J.B(a).gfo(a)}
J.eH=function(a){return J.B(a).gfA(a)}
J.bb=function(a){return J.B(a).gk(a)}
J.bc=function(a){return J.B(a).gl(a)}
J.bV=function(a,b){return J.B(a).aH(a,b)}
J.cF=function(a){return J.bP(a).fu(a)}
J.cG=function(a,b){return J.B(a).sai(a,b)}
J.bW=function(a,b){return J.B(a).scT(a,b)}
J.cH=function(a,b){return J.B(a).sau(a,b)}
J.bX=function(a,b){return J.B(a).sk(a,b)}
J.bY=function(a,b){return J.B(a).sl(a,b)}
J.eI=function(a,b,c){return J.B(a).dc(a,b,c)}
J.cI=function(a){return J.cx(a).T(a)}
J.eJ=function(a){return J.iY(a).fE(a)}
J.aG=function(a){return J.z(a).n(a)}
I.aB=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bt.prototype
C.j=W.cO.prototype
C.Q=W.fi.prototype
C.R=W.fu.prototype
C.u=W.fv.prototype
C.S=J.A.prototype
C.a=J.aT.prototype
C.k=J.d8.prototype
C.c=J.d9.prototype
C.d=J.da.prototype
C.b=J.aU.prototype
C.v=J.aV.prototype
C.Z=J.aW.prototype
C.l=H.fY.prototype
C.a7=W.h0.prototype
C.J=J.hg.prototype
C.K=W.hm.prototype
C.N=W.hE.prototype
C.E=J.bo.prototype
C.P=W.hT.prototype
C.e=new V.bZ(0,"BodyType.STATIC")
C.F=new V.bZ(1,"BodyType.KINEMATIC")
C.f=new V.bZ(2,"BodyType.DYNAMIC")
C.r=new P.ik()
C.p=new V.c3(0,"EPAxisType.UNKNOWN")
C.t=new V.c3(1,"EPAxisType.EDGE_A")
C.G=new V.c3(2,"EPAxisType.EDGE_B")
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
C.a4=H.f(I.aB(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.a5=H.f(I.aB(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.a6=H.f(I.aB([]),[P.m])
C.y=H.f(I.aB(["bind","if","ref","repeat","syntax"]),[P.m])
C.z=H.f(I.aB(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.n=new V.cb(0,"ManifoldType.CIRCLES")
C.i=new V.cb(1,"ManifoldType.FACE_A")
C.w=new V.cb(2,"ManifoldType.FACE_B")
C.A=new V.cg(0,"SeparationFunctionType.POINTS")
C.B=new V.cg(1,"SeparationFunctionType.FACE_A")
C.C=new V.cg(2,"SeparationFunctionType.FACE_B")
C.h=new V.bH(0,"ShapeType.CIRCLE")
C.o=new V.bH(1,"ShapeType.EDGE")
C.m=new V.bH(2,"ShapeType.POLYGON")
C.x=new V.bH(3,"ShapeType.CHAIN")
C.L=new V.bn(0,"TOIOutputState.UNKNOWN")
C.M=new V.bn(1,"TOIOutputState.FAILED")
C.a8=new V.bn(2,"TOIOutputState.OVERLAPPED")
C.D=new V.bn(3,"TOIOutputState.TOUCHING")
C.a9=new V.bn(4,"TOIOutputState.SEPARATED")
C.O=new V.hQ(0,"VertexType.ISOLATED")
$.at=null
$.bl=null
$.a3=0
$.aI=null
$.cL=null
$.cq=!1
$.eq=null
$.ei=null
$.ev=null
$.bO=null
$.bR=null
$.cy=null
$.b4=null
$.bN=null
$.b3=null
$.cr=!1
$.ay=C.r
$.F=null
$.ab=null
$.c5=null
$.d1=null
$.d0=null
$.cW=0
$.cX=0
$.cY=20
$.dA=0
$.dB=0
$.dC=0
$.dE=0
$.dD=0
$.ji=1
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
I.$lazy(y,x,w)}})(["cT","$get$cT",function(){return H.ep("_$dart_dartClosure")},"c8","$get$c8",function(){return H.ep("_$dart_js")},"dK","$get$dK",function(){return H.a7(H.bK({
toString:function(){return"$receiver$"}}))},"dL","$get$dL",function(){return H.a7(H.bK({$method$:null,
toString:function(){return"$receiver$"}}))},"dM","$get$dM",function(){return H.a7(H.bK(null))},"dN","$get$dN",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dR","$get$dR",function(){return H.a7(H.bK(void 0))},"dS","$get$dS",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dP","$get$dP",function(){return H.a7(H.dQ(null))},"dO","$get$dO",function(){return H.a7(function(){try{null.$method$}catch(z){return z.message}}())},"dU","$get$dU",function(){return H.a7(H.dQ(void 0))},"dT","$get$dT",function(){return H.a7(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cl","$get$cl",function(){return P.i_()},"b5","$get$b5",function(){return[]},"e7","$get$e7",function(){return P.dc(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)},"cn","$get$cn",function(){return P.fI(P.m,P.bf)},"ao","$get$ao",function(){return E.dX()},"ck","$get$ck",function(){return E.dX()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.M},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:P.m,args:[P.u]},{func:1,ret:P.R,args:[W.a5]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:P.M,args:[P.aj]},{func:1,ret:P.R,args:[W.X,P.m,P.m,W.bp]},{func:1,ret:P.u},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,ret:P.M,args:[,]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.R,args:[W.p]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[W.p,W.p]},{func:1,ret:P.u,args:[P.u,P.c]},{func:1,ret:-1,args:[P.W]},{func:1,ret:P.u,args:[,,]},{func:1,ret:P.W},{func:1,ret:E.a},{func:1,ret:P.c},{func:1,ret:V.ac}]
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
if(x==y)H.jg(d||a)
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
Isolate.aB=a.aB
Isolate.cw=a.cw
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
if(typeof dartMainRunner==="function")dartMainRunner(D.es,[])
else D.es([])})})()
//# sourceMappingURL=ball_cage.dart.js.map
