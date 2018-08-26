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
if(a1==="E"){processStatics(init.statics[b2]=b3.E,b4)
delete b3.E}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cE(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cF=function(){}
var dart=[["","",,H,{"^":"",kl:{"^":"c;a"}}],["","",,J,{"^":"",
cI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bt:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cH==null){H.jy()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.e7("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cd()]
if(v!=null)return v
v=H.jD(a)
if(v!=null)return v
if(typeof a=="function")return C.a4
y=Object.getPrototypeOf(a)
if(y==null)return C.P
if(y===Object.prototype)return C.P
if(typeof w=="function"){Object.defineProperty(w,$.$get$cd(),{value:C.H,enumerable:false,writable:true,configurable:true})
return C.H}return C.H},
D:{"^":"c;",
as:function(a,b){return a===b},
ga1:function(a){return H.b8(a)},
u:["eg",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"ApplicationCacheErrorEvent|ArrayBuffer|CanvasGradient|CanvasPattern|DOMError|ErrorEvent|Event|InputEvent|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedEnumeration|SVGAnimatedString|SVGAnimatedTransformList|SensorErrorEvent|SpeechRecognitionError|StorageManager"},
fT:{"^":"D;",
u:function(a){return String(a)},
ga1:function(a){return a?519018:218159},
$isV:1},
dk:{"^":"D;",
as:function(a,b){return null==b},
u:function(a){return"null"},
ga1:function(a){return 0},
$isP:1},
ce:{"^":"D;",
ga1:function(a){return 0},
u:["ei",function(a){return String(a)}]},
hB:{"^":"ce;"},
ba:{"^":"ce;"},
b5:{"^":"ce;",
u:function(a){var z=a[$.$get$d2()]
if(z==null)return this.ei(a)
return"JavaScript function for "+H.e(J.aS(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
b3:{"^":"D;$ti",
q:function(a,b){H.q(b,H.m(a,0))
if(!!a.fixed$length)H.aP(P.a7("add"))
a.push(b)},
cA:function(a,b){return H.cq(a,b,null,H.m(a,0))},
av:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
aj:function(a,b,c,d,e){var z,y,x,w,v,u
z=H.m(a,0)
H.i(d,"$isx",[z],"$asx")
if(!!a.immutable$list)H.aP(P.a7("setRange"))
P.dD(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
x=J.C(d)
if(!!x.$isd){H.i(d,"$isd",[z],"$asd")
w=e
v=d}else{v=x.cA(d,e).ho(0,!1)
w=0}z=J.W(v)
if(w+y>z.gH(v))throw H.h(H.fQ())
if(w<b)for(u=y-1;u>=0;--u)a[b+u]=z.i(v,w+u)
else for(u=0;u<y;++u)a[b+u]=z.i(v,w+u)},
bb:function(a,b,c,d){return this.aj(a,b,c,d,0)},
cZ:function(a,b){var z,y
H.v(b,{func:1,ret:P.V,args:[H.m(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.h(P.ad(a))}return!1},
a8:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aa(a[z],b))return!0
return!1},
u:function(a){return P.ca(a,"[","]")},
ga5:function(a){return new J.f2(a,a.length,0,[H.m(a,0)])},
ga1:function(a){return H.b8(a)},
gH:function(a){return a.length},
sH:function(a,b){if(!!a.fixed$length)H.aP(P.a7("set length"))
if(b<0)throw H.h(P.au(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){H.k(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.bf(a,b))
if(b>=a.length||b<0)throw H.h(H.bf(a,b))
return a[b]},
m:function(a,b,c){H.q(c,H.m(a,0))
if(!!a.immutable$list)H.aP(P.a7("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bf(a,b))
a[b]=c},
B:function(a,b){var z,y
z=[H.m(a,0)]
H.i(b,"$isd",z,"$asd")
y=C.c.B(a.length,b.gH(b))
z=H.f([],z)
this.sH(z,y)
this.bb(z,0,a.length,a)
this.bb(z,a.length,y,b)
return z},
$isx:1,
$isd:1,
E:{
fS:function(a,b){if(a<0||a>4294967295)throw H.h(P.au(a,0,4294967295,"length",null))
return J.cb(new Array(a),b)},
cb:function(a,b){return J.bn(H.f(a,[b]))},
bn:function(a){H.bV(a)
a.fixed$length=Array
return a},
kj:[function(a,b){return J.eQ(H.eG(a,"$isI"),H.eG(b,"$isI"))},"$2","j4",8,0,20]}},
kk:{"^":"b3;$ti"},
f2:{"^":"c;a,b,c,0d,$ti",
scM:function(a){this.d=H.q(a,H.m(this,0))},
gY:function(){return this.d},
X:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.cL(z))
x=this.c
if(x>=y){this.scM(null)
return!1}this.scM(z[x]);++this.c
return!0},
$isaB:1},
aC:{"^":"D;",
b6:function(a,b){var z
H.aN(b)
if(typeof b!=="number")throw H.h(H.ap(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gc9(b)
if(this.gc9(a)===z)return 0
if(this.gc9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc9:function(a){return a===0?1/a<0:a<0},
a7:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.a7(""+a+".toInt()"))},
aH:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.a7(""+a+".floor()"))},
u:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga1:function(a){return a&0x1FFFFFFF},
bn:function(a){return-a},
B:function(a,b){return a+b},
I:function(a,b){if(typeof b!=="number")throw H.h(H.ap(b))
return a-b},
dC:function(a,b){return a/b},
F:function(a,b){H.aN(b)
if(typeof b!=="number")throw H.h(H.ap(b))
return a*b},
au:function(a,b){if(typeof b!=="number")throw H.h(H.ap(b))
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
b4:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.a7("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bg:function(a,b){var z
if(a>0)z=this.ff(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ff:function(a,b){return b>31?0:a>>>b},
cr:function(a,b){return(a|b)>>>0},
O:function(a,b){if(typeof b!=="number")throw H.h(H.ap(b))
return a<b},
aX:function(a,b){if(typeof b!=="number")throw H.h(H.ap(b))
return a>b},
$isI:1,
$asI:function(){return[P.a0]},
$isaL:1,
$isa0:1},
cc:{"^":"aC;",
bn:function(a){return-a},
$isw:1},
dj:{"^":"aC;"},
b4:{"^":"D;",
eK:function(a,b){if(b>=a.length)throw H.h(H.bf(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.t(b)
if(typeof b!=="string")throw H.h(P.f1(b,null,null))
return a+b},
eb:function(a,b,c){var z
if(c>a.length)throw H.h(P.au(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ea:function(a,b){return this.eb(a,b,0)},
cD:function(a,b,c){H.k(c)
if(c==null)c=a.length
if(b>c)throw H.h(P.cl(b,null,null))
if(c>a.length)throw H.h(P.cl(c,null,null))
return a.substring(b,c)},
ef:function(a,b){return this.cD(a,b,null)},
hp:function(a){return a.toLowerCase()},
b6:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.h(H.ap(b))
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
gH:function(a){return a.length},
$isI:1,
$asI:function(){return[P.n]},
$ishA:1,
$isn:1}}],["","",,H,{"^":"",
fP:function(){return new P.bL("No element")},
fR:function(){return new P.bL("Too many elements")},
fQ:function(){return new P.bL("Too few elements")},
hW:function(a,b,c){H.i(a,"$isd",[c],"$asd")
H.v(b,{func:1,ret:P.w,args:[c,c]})
H.bq(a,0,J.aj(a)-1,b,c)},
bq:function(a,b,c,d,e){H.i(a,"$isd",[e],"$asd")
H.v(d,{func:1,ret:P.w,args:[e,e]})
if(c-b<=32)H.hV(a,b,c,d,e)
else H.hU(a,b,c,d,e)},
hV:function(a,b,c,d,e){var z,y,x,w,v
H.i(a,"$isd",[e],"$asd")
H.v(d,{func:1,ret:P.w,args:[e,e]})
for(z=b+1,y=J.W(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ab(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.m(a,w,y.i(a,v))
w=v}y.m(a,w,x)}},
hU:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.i(a,"$isd",[a2],"$asd")
H.v(a1,{func:1,ret:P.w,args:[a2,a2]})
z=C.c.b4(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.b4(b+a0,2)
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
if(typeof i!=="number")return i.O()
if(i<0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.aX()
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
if(typeof e!=="number")return e.O()
if(e<0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.aX()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.aX()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.O()
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
H.bq(a,b,m-2,a1,a2)
H.bq(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aa(a1.$2(t.i(a,m),r),0);)++m
for(;J.aa(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.O()
h=l-1
if(i<0){t.m(a,k,t.i(a,m))
g=m+1
t.m(a,m,t.i(a,l))
t.m(a,l,j)
m=g}else{t.m(a,k,t.i(a,l))
t.m(a,l,j)}l=h
break}}H.bq(a,m,l,a1,a2)}else H.bq(a,m,l,a1,a2)},
c7:{"^":"x;"},
bo:{"^":"c7;$ti",
ga5:function(a){return new H.dq(this,this.gH(this),0,[H.ax(this,"bo",0)])},
ck:function(a,b){return this.eh(0,H.v(b,{func:1,ret:P.V,args:[H.ax(this,"bo",0)]}))}},
hZ:{"^":"bo;a,b,c,$ti",
geU:function(){var z,y
z=J.aj(this.a)
y=this.c
if(y==null||y>z)return z
return y},
gfg:function(){var z,y
z=J.aj(this.a)
y=this.b
if(y>z)return z
return y},
gH:function(a){var z,y,x
z=J.aj(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.I()
return x-y},
av:function(a,b){var z,y
z=this.gfg()+b
if(b>=0){y=this.geU()
if(typeof y!=="number")return H.H(y)
y=z>=y}else y=!0
if(y)throw H.h(P.bm(b,this,"index",null,null))
return J.cO(this.a,z)},
ho:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.W(y)
w=x.gH(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.I()
u=w-z
if(u<0)u=0
t=new Array(u)
t.fixed$length=Array
s=H.f(t,this.$ti)
for(r=0;r<u;++r){C.a.m(s,r,x.av(y,z+r))
if(x.gH(y)<w)throw H.h(P.ad(this))}return s},
E:{
cq:function(a,b,c,d){if(c!=null){if(c<0)H.aP(P.au(c,0,null,"end",null))
if(b>c)H.aP(P.au(b,0,c,"start",null))}return new H.hZ(a,b,c,[d])}}},
dq:{"^":"c;a,b,c,0d,$ti",
scF:function(a){this.d=H.q(a,H.m(this,0))},
gY:function(){return this.d},
X:function(){var z,y,x,w
z=this.a
y=J.W(z)
x=y.gH(z)
if(this.b!==x)throw H.h(P.ad(z))
w=this.c
if(w>=x){this.scF(null)
return!1}this.scF(y.av(z,w));++this.c
return!0},
$isaB:1},
h5:{"^":"bo;a,b,$ti",
gH:function(a){return J.aj(this.a)},
av:function(a,b){return this.b.$1(J.cO(this.a,b))},
$asbo:function(a,b){return[b]},
$asx:function(a,b){return[b]}},
eb:{"^":"x;a,b,$ti",
ga5:function(a){return new H.ii(J.bv(this.a),this.b,this.$ti)}},
ii:{"^":"aB;a,b,$ti",
X:function(){var z,y
for(z=this.a,y=this.b;z.X();)if(y.$1(z.gY()))return!0
return!1},
gY:function(){return this.a.gY()}},
bG:{"^":"c;$ti"}}],["","",,H,{"^":"",
bX:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jq:function(a){return init.types[H.k(a)]},
jB:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isaD},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aS(a)
if(typeof z!=="string")throw H.h(H.ap(a))
return z},
b8:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b9:function(a){return H.hD(a)+H.cC(H.ay(a),0,null)},
hD:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Y||!!z.$isba){u=C.L(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bX(w.length>1&&C.w.eK(w,0)===36?C.w.ef(w,1):w)},
kB:[function(){return Date.now()},"$0","j6",0,0,21],
bJ:function(){var z,y
if($.aF!=null)return
$.aF=1000
$.bp=H.j6()
if(typeof window=="undefined")return
z=window
if(z==null)return
y=z.performance
if(y==null)return
if(typeof y.now!="function")return
$.aF=1e6
$.bp=new H.hE(y)},
H:function(a){throw H.h(H.ap(a))},
a:function(a,b){if(a==null)J.aj(a)
throw H.h(H.bf(a,b))},
bf:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
z=H.k(J.aj(a))
if(!(b<0)){if(typeof z!=="number")return H.H(z)
y=b>=z}else y=!0
if(y)return P.bm(b,a,"index",null,z)
return P.cl(b,"index",null)},
ap:function(a){return new P.az(!0,a,null,null)},
ji:function(a){return a},
h:function(a){var z
if(a==null)a=new P.dz()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eK})
z.name=""}else z.toString=H.eK
return z},
eK:function(){return J.aS(this.dartException)},
aP:function(a){throw H.h(a)},
cL:function(a){throw H.h(P.ad(a))},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jI(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bg(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cf(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dy(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dX()
u=$.$get$dY()
t=$.$get$dZ()
s=$.$get$e_()
r=$.$get$e3()
q=$.$get$e4()
p=$.$get$e1()
$.$get$e0()
o=$.$get$e6()
n=$.$get$e5()
m=v.aq(y)
if(m!=null)return z.$1(H.cf(H.t(y),m))
else{m=u.aq(y)
if(m!=null){m.method="call"
return z.$1(H.cf(H.t(y),m))}else{m=t.aq(y)
if(m==null){m=s.aq(y)
if(m==null){m=r.aq(y)
if(m==null){m=q.aq(y)
if(m==null){m=p.aq(y)
if(m==null){m=s.aq(y)
if(m==null){m=o.aq(y)
if(m==null){m=n.aq(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dy(H.t(y),m))}}return z.$1(new H.ia(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dI()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.az(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dI()
return a},
jp:function(a){var z
if(a==null)return new H.ep(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ep(a)},
jA:function(a,b,c,d,e,f){H.l(a,"$isbk")
switch(H.k(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.iA("Unsupported number of arguments for wrapped closure"))},
be:function(a,b){var z
H.k(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jA)
a.$identity=z
return z},
fb:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.C(d).$isd){z.$reflectionInfo=d
x=H.hK(z).r}else x=d
w=e?Object.create(new H.hY().constructor.prototype):Object.create(new H.c3(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ac
if(typeof u!=="number")return u.B()
$.ac=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cY(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jq,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cV:H.c4
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cY(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
f8:function(a,b,c,d){var z=H.c4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cY:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fa(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f8(y,!w,z,b)
if(y===0){w=$.ac
if(typeof w!=="number")return w.B()
$.ac=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aT
if(v==null){v=H.bx("self")
$.aT=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ac
if(typeof w!=="number")return w.B()
$.ac=w+1
t+=w
w="return function("+t+"){return this."
v=$.aT
if(v==null){v=H.bx("self")
$.aT=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
f9:function(a,b,c,d){var z,y
z=H.c4
y=H.cV
switch(b?-1:a){case 0:throw H.h(H.hO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fa:function(a,b){var z,y,x,w,v,u,t,s
z=$.aT
if(z==null){z=H.bx("self")
$.aT=z}y=$.cU
if(y==null){y=H.bx("receiver")
$.cU=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.f9(w,!u,x,b)
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
cE:function(a,b,c,d,e,f,g){var z,y
z=J.bn(H.bV(b))
H.k(c)
y=!!J.C(d).$isd?J.bn(d):d
return H.fb(a,z,c,y,!!e,f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ai(a,"String"))},
bg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ai(a,"double"))},
aN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ai(a,"num"))},
jg:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ai(a,"bool"))},
k:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ai(a,"int"))},
cJ:function(a,b){throw H.h(H.ai(a,H.t(b).substring(3)))},
jG:function(a,b){var z=J.W(b)
throw H.h(H.f7(a,z.cD(b,3,z.gH(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cJ(a,b)},
o:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.jG(a,b)},
eG:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cJ(a,b)},
bV:function(a){if(a==null)return a
if(!!J.C(a).$isd)return a
throw H.h(H.ai(a,"List"))},
jC:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isd)return a
if(z[b])return a
H.cJ(a,b)},
eA:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.k(z)]
else return a.$S()}return},
eB:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eA(J.C(a))
if(z==null)return!1
return H.et(z,null,b,null)},
v:function(a,b){var z,y
if(a==null)return a
if($.cz)return a
$.cz=!0
try{if(H.eB(a,b))return a
z=H.cK(b)
y=H.ai(a,z)
throw H.h(y)}finally{$.cz=!1}},
eu:function(a){var z,y
z=J.C(a)
if(!!z.$isu){y=H.eA(z)
if(y!=null)return H.cK(y)
return"Closure"}return H.b9(a)},
jH:function(a){throw H.h(new P.fk(H.t(a)))},
eC:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
ay:function(a){if(a==null)return
return a.$ti},
l3:function(a,b,c){return H.aO(a["$as"+H.e(c)],H.ay(b))},
bh:function(a,b,c,d){var z
H.t(c)
H.k(d)
z=H.aO(a["$as"+H.e(c)],H.ay(b))
return z==null?null:z[d]},
ax:function(a,b,c){var z
H.t(b)
H.k(c)
z=H.aO(a["$as"+H.e(b)],H.ay(a))
return z==null?null:z[c]},
m:function(a,b){var z
H.k(b)
z=H.ay(a)
return z==null?null:z[b]},
cK:function(a){return H.aw(a,null)},
aw:function(a,b){var z,y
H.i(b,"$isd",[P.n],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bX(a[0].builtin$cls)+H.cC(a,1,b)
if(typeof a=="function")return H.bX(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.k(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.a(b,y)
return H.e(b[y])}if('func' in a)return H.j3(a,b)
if('futureOr' in a)return"FutureOr<"+H.aw("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
j3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(q!=null&&q!==P.c)t+=" extends "+H.aw(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aw(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aw(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aw(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jk(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aw(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cC:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isd",[P.n],"$asd")
if(a==null)return""
z=new P.cp("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aw(u,c)}return"<"+z.u(0)+">"},
aO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jj:function(a,b,c,d){var z,y
H.t(b)
H.bV(c)
H.t(d)
if(a==null)return!1
z=H.ay(a)
y=J.C(a)
if(y[b]==null)return!1
return H.ew(H.aO(y[d],z),null,c,null)},
i:function(a,b,c,d){H.t(b)
H.bV(c)
H.t(d)
if(a==null)return a
if(H.jj(a,b,c,d))return a
throw H.h(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.cC(c,0,null),init.mangledGlobalNames)))},
ew:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a_(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a_(a[y],b,c[y],d))return!1
return!0},
l1:function(a,b,c){return a.apply(b,H.aO(J.C(b)["$as"+H.e(c)],H.ay(b)))},
eE:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="P"||a===-1||a===-2||H.eE(z)}return!1},
ez:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="P"||b===-1||b===-2||H.eE(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ez(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eB(a,b)}z=J.C(a).constructor
y=H.ay(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a_(z,null,b,null)},
q:function(a,b){if(a!=null&&!H.ez(a,b))throw H.h(H.ai(a,H.cK(b)))
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
if('func' in c)return H.et(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a_("type" in a?a.type:null,b,x,d)
else if(H.a_(a,b,x,d))return!0
else{if(!('$is'+"fI" in y.prototype))return!1
w=y.prototype["$as"+"fI"]
v=H.aO(w,z?a.slice(1):null)
return H.a_(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ew(H.aO(r,z),b,u,d)},
et:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.jF(m,b,l,d)},
jF:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a_(c[w],d,a[w],b))return!1}return!0},
l2:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
jD:function(a){var z,y,x,w,v,u
z=H.t($.eD.$1(a))
y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.ev.$2(a,z))
if(z!=null){y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bW(x)
$.bR[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bU[z]=x
return x}if(v==="-"){u=H.bW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eH(a,x)
if(v==="*")throw H.h(P.e7(z))
if(init.leafTags[z]===true){u=H.bW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eH(a,x)},
eH:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cI(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bW:function(a){return J.cI(a,!1,null,!!a.$isaD)},
jE:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bW(z)
else return J.cI(z,c,null,null)},
jy:function(){if(!0===$.cH)return
$.cH=!0
H.jz()},
jz:function(){var z,y,x,w,v,u,t,s
$.bR=Object.create(null)
$.bU=Object.create(null)
H.ju()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eI.$1(v)
if(u!=null){t=H.jE(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ju:function(){var z,y,x,w,v,u,t
z=C.a1()
z=H.aK(C.Z,H.aK(C.a3,H.aK(C.K,H.aK(C.K,H.aK(C.a2,H.aK(C.a_,H.aK(C.a0(C.L),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eD=new H.jv(v)
$.ev=new H.jw(u)
$.eI=new H.jx(t)},
aK:function(a,b){return a(b)||b},
hJ:{"^":"c;a,b,c,d,e,f,r,0x",E:{
hK:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bn(z)
y=z[0]
x=z[1]
return new H.hJ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hE:{"^":"u:9;a",
$0:function(){return C.b.aH(1000*this.a.now())}},
i7:{"^":"c;a,b,c,d,e,f",
aq:function(a){var z,y,x
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
E:{
ah:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e2:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ho:{"^":"K;a,b",
u:function(a){var z=this.b
if(z==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+z+"' on null"},
E:{
dy:function(a,b){return new H.ho(a,b==null?null:b.method)}}},
fW:{"^":"K;a,b,c",
u:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
E:{
cf:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fW(a,y,z?null:b.receiver)}}},
ia:{"^":"K;a",
u:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jI:{"^":"u:2;a",
$1:function(a){if(!!J.C(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ep:{"^":"c;a,0b",
u:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$ishX:1},
u:{"^":"c;",
u:function(a){return"Closure '"+H.b9(this).trim()+"'"},
gdB:function(){return this},
$isbk:1,
gdB:function(){return this}},
dL:{"^":"u;"},
hY:{"^":"dL;",
u:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bX(z)+"'"}},
c3:{"^":"dL;a,b,c,d",
as:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga1:function(a){var z,y
z=this.c
if(z==null)y=H.b8(this.a)
else y=typeof z!=="object"?J.aR(z):H.b8(z)
return(y^H.b8(this.b))>>>0},
u:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
E:{
c4:function(a){return a.a},
cV:function(a){return a.c},
bx:function(a){var z,y,x,w,v
z=new H.c3("self","target","receiver","name")
y=J.bn(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i8:{"^":"K;a",
u:function(a){return this.a},
E:{
ai:function(a,b){return new H.i8("TypeError: "+H.e(P.bF(a))+": type '"+H.eu(a)+"' is not a subtype of type '"+b+"'")}}},
f6:{"^":"K;a",
u:function(a){return this.a},
E:{
f7:function(a,b){return new H.f6("CastError: "+H.e(P.bF(a))+": type '"+H.eu(a)+"' is not a subtype of type '"+b+"'")}}},
hN:{"^":"K;a",
u:function(a){return"RuntimeError: "+H.e(this.a)},
E:{
hO:function(a){return new H.hN(a)}}},
fV:{"^":"ch;a,0b,0c,0d,0e,0f,r,$ti",
gH:function(a){return this.a},
gaJ:function(){return new H.fY(this,[H.m(this,0)])},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bQ(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bQ(w,b)
x=y==null?null:y.b
return x}else return this.h1(b)},
h1:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cO(z,J.aR(a)&0x3ffffff)
x=this.dm(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.q(b,H.m(this,0))
H.q(c,H.m(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bR()
this.b=z}this.cG(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bR()
this.c=y}this.cG(y,b,c)}else{x=this.d
if(x==null){x=this.bR()
this.d=x}w=J.aR(b)&0x3ffffff
v=this.cO(x,w)
if(v==null)this.bW(x,w,[this.bL(b,c)])
else{u=this.dm(v,b)
if(u>=0)v[u].b=c
else v.push(this.bL(b,c))}}},
bz:function(a,b){var z,y
H.v(b,{func:1,ret:-1,args:[H.m(this,0),H.m(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.ad(this))
z=z.c}},
cG:function(a,b,c){var z
H.q(b,H.m(this,0))
H.q(c,H.m(this,1))
z=this.bQ(a,b)
if(z==null)this.bW(a,b,this.bL(b,c))
else z.b=c},
eC:function(){this.r=this.r+1&67108863},
bL:function(a,b){var z,y
z=new H.fX(H.q(a,H.m(this,0)),H.q(b,H.m(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eC()
return z},
dm:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aa(a[y].a,b))return y
return-1},
u:function(a){return P.dt(this)},
bQ:function(a,b){return a[b]},
cO:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eQ:function(a,b){delete a[b]},
bR:function(){var z=Object.create(null)
this.bW(z,"<non-identifier-key>",z)
this.eQ(z,"<non-identifier-key>")
return z}},
fX:{"^":"c;a,b,0c,0d"},
fY:{"^":"c7;a,$ti",
gH:function(a){return this.a.a},
ga5:function(a){var z,y
z=this.a
y=new H.fZ(z,z.r,this.$ti)
y.c=z.e
return y}},
fZ:{"^":"c;a,b,0c,0d,$ti",
scH:function(a){this.d=H.q(a,H.m(this,0))},
gY:function(){return this.d},
X:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.ad(z))
else{z=this.c
if(z==null){this.scH(null)
return!1}else{this.scH(z.a)
this.c=this.c.c
return!0}}},
$isaB:1},
jv:{"^":"u:2;a",
$1:function(a){return this.a(a)}},
jw:{"^":"u:10;a",
$2:function(a,b){return this.a(a,b)}},
jx:{"^":"u:11;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
jk:function(a){return J.cb(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bf(b,a))},
hj:{"^":"D;","%":";ArrayBufferView;cj|el|em|dv|en|eo|dw"},
cj:{"^":"hj;",
gH:function(a){return a.length},
$isaD:1,
$asaD:I.cF},
dv:{"^":"em;",
i:function(a,b){H.bP(b,a,a.length)
return a[b]},
m:function(a,b,c){H.bg(c)
H.bP(b,a,a.length)
a[b]=c},
$asbG:function(){return[P.aL]},
$asN:function(){return[P.aL]},
$isx:1,
$asx:function(){return[P.aL]},
$isd:1,
$asd:function(){return[P.aL]}},
dw:{"^":"eo;",
m:function(a,b,c){H.k(c)
H.bP(b,a,a.length)
a[b]=c},
$asbG:function(){return[P.w]},
$asN:function(){return[P.w]},
$isx:1,
$asx:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]}},
hi:{"^":"dv;",$isdh:1,"%":"Float64Array"},
kp:{"^":"dw;",
i:function(a,b){H.bP(b,a,a.length)
return a[b]},
$iski:1,
"%":"Int8Array"},
el:{"^":"cj+N;"},
em:{"^":"el+bG;"},
en:{"^":"cj+N;"},
eo:{"^":"en+bG;"}}],["","",,P,{"^":"",
ir:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jd()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.be(new P.it(z),1)).observe(y,{childList:true})
return new P.is(z,y,x)}else if(self.setImmediate!=null)return P.je()
return P.jf()},
kV:[function(a){self.scheduleImmediate(H.be(new P.iu(H.v(a,{func:1,ret:-1})),0))},"$1","jd",4,0,1],
kW:[function(a){self.setImmediate(H.be(new P.iv(H.v(a,{func:1,ret:-1})),0))},"$1","je",4,0,1],
kX:[function(a){H.v(a,{func:1,ret:-1})
P.iV(0,a)},"$1","jf",4,0,1],
dU:function(a,b){var z
H.v(b,{func:1,ret:-1,args:[P.av]})
z=C.c.b4(a.a,1000)
return P.iW(z<0?0:z,b)},
j7:function(){var z,y
for(;z=$.bc,z!=null;){$.bb=null
y=z.b
$.bc=y
if(y==null)$.bQ=null
z.a.$0()}},
l0:[function(){$.cA=!0
try{P.j7()}finally{$.bb=null
$.cA=!1
if($.bc!=null)$.$get$cu().$1(P.ex())}},"$0","ex",0,0,3],
jb:function(a){var z,y,x,w
H.v(a,{func:1,ret:-1})
z=$.bc
if(z==null){y=new P.ed(a)
$.bQ=y
$.bc=y
if(!$.cA)$.$get$cu().$1(P.ex())
$.bb=$.bQ
return}x=new P.ed(a)
w=$.bb
if(w==null){x.b=z
$.bb=x
$.bc=x}else{x.b=w.b
w.b=x
$.bb=x
if(x.b==null)$.bQ=x}},
dT:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.av]}
H.v(b,z)
y=$.aJ
if(y===C.t){y.toString
return P.dU(a,b)}x=y.d_(b,P.av)
$.aJ.toString
return P.dU(a,H.v(x,z))},
j8:function(a,b,c,d,e){var z={}
z.a=d
P.jb(new P.j9(z,e))},
ja:function(a,b,c,d,e,f,g){var z,y
H.v(d,{func:1,ret:f,args:[g]})
H.q(e,g)
y=$.aJ
if(y===c)return d.$1(e)
$.aJ=c
z=y
try{y=d.$1(e)
return y}finally{$.aJ=z}},
it:{"^":"u:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
is:{"^":"u:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.v(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iu:{"^":"u:0;a",
$0:function(){this.a.$0()}},
iv:{"^":"u:0;a",
$0:function(){this.a.$0()}},
er:{"^":"c;a,0b,c",
eA:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.be(new P.iY(this,b),0),a)
else throw H.h(P.a7("`setTimeout()` not found."))},
eB:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.be(new P.iX(this,a,Date.now(),b),0),a)
else throw H.h(P.a7("Periodic timer."))},
$isav:1,
E:{
iV:function(a,b){var z=new P.er(!0,0)
z.eA(a,b)
return z},
iW:function(a,b){var z=new P.er(!1,0)
z.eB(a,b)
return z}}},
iY:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iX:{"^":"u:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.au(w,x)}z.c=y
this.d.$1(z)}},
ed:{"^":"c;a,0b"},
av:{"^":"c;"},
j_:{"^":"c;",$iskU:1},
j9:{"^":"u:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dz()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.u(0)
throw x}},
iL:{"^":"j_;",
gaU:function(a){return},
hj:function(a,b,c){var z,y,x
H.v(a,{func:1,ret:-1,args:[c]})
H.q(b,c)
try{if(C.t===$.aJ){a.$1(b)
return}P.ja(null,null,this,a,b,-1,c)}catch(x){z=H.aQ(x)
y=H.jp(x)
P.j8(null,null,this,z,H.l(y,"$ishX"))}},
d_:function(a,b){return new P.iM(this,H.v(a,{func:1,ret:-1,args:[b]}),b)}},
iM:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hj(this.b,H.q(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
bl:function(a,b,c,d,e){return new P.iB(0,[d,e])},
h_:function(a,b){return new H.fV(0,0,[a,b])},
bH:function(a,b,c,d){return new P.iF(0,0,[d])},
fO:function(a,b,c){var z,y
if(P.cB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bd()
C.a.q(y,a)
try{P.j5(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.dK(b,H.jC(z,"$isx"),", ")+c
return y.charCodeAt(0)==0?y:y},
ca:function(a,b,c){var z,y,x
if(P.cB(a))return b+"..."+c
z=new P.cp(b)
y=$.$get$bd()
C.a.q(y,a)
try{x=z
x.a=P.dK(x.gb1(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.gb1()+c
y=z.gb1()
return y.charCodeAt(0)==0?y:y},
cB:function(a){var z,y
for(z=0;y=$.$get$bd(),z<y.length;++z)if(a===y[z])return!0
return!1},
j5:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga5(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.X())return
w=H.e(z.gY())
C.a.q(b,w)
y+=w.length+2;++x}if(!z.X()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gY();++x
if(!z.X()){if(x<=4){C.a.q(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gY();++x
for(;z.X();t=s,s=r){r=z.gY();++x
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
dp:function(a,b){var z,y,x
z=P.bH(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.cL)(a),++x)z.q(0,H.q(a[x],b))
return z},
dt:function(a){var z,y,x
z={}
if(P.cB(a))return"{...}"
y=new P.cp("")
try{C.a.q($.$get$bd(),a)
x=y
x.a=x.gb1()+"{"
z.a=!0
a.bz(0,new P.h4(z,y))
z=y
z.a=z.gb1()+"}"}finally{z=$.$get$bd()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gb1()
return z.charCodeAt(0)==0?z:z},
iB:{"^":"ch;a,0b,0c,0d,0e,$ti",
gH:function(a){return this.a},
gaJ:function(){return new P.iC(this,[H.m(this,0)])},
c1:function(a){var z
if((a&0x3ffffff)===a){z=this.c
return z==null?!1:z[a]!=null}else return this.eN(a)},
eN:function(a){var z=this.d
if(z==null)return!1
return this.b2(this.bs(z,a),a)>=0},
i:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
y=z==null?null:P.eh(z,b)
return y}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
y=x==null?null:P.eh(x,b)
return y}else return this.eX(b)},
eX:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bs(z,a)
x=this.b2(y,a)
return x<0?null:y[x+1]},
m:function(a,b,c){var z
H.q(b,H.m(this,0))
H.q(c,H.m(this,1))
if((b&0x3ffffff)===b){z=this.c
if(z==null){z=P.ei()
this.c=z}this.eE(z,b,c)}else this.fe(b,c)},
fe:function(a,b){var z,y,x,w
H.q(a,H.m(this,0))
H.q(b,H.m(this,1))
z=this.d
if(z==null){z=P.ei()
this.d=z}y=this.be(a)
x=z[y]
if(x==null){P.cv(z,y,[a,b]);++this.a
this.e=null}else{w=this.b2(x,a)
if(w>=0)x[w+1]=b
else{x.push(a,b);++this.a
this.e=null}}},
bz:function(a,b){var z,y,x,w,v
z=H.m(this,0)
H.v(b,{func:1,ret:-1,args:[z,H.m(this,1)]})
y=this.cL()
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(H.q(v,z),this.i(0,v))
if(y!==this.e)throw H.h(P.ad(this))}},
cL:function(){var z,y,x,w,v,u,t,s,r,q,p,o
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
eE:function(a,b,c){H.q(b,H.m(this,0))
H.q(c,H.m(this,1))
if(a[b]==null){++this.a
this.e=null}P.cv(a,b,c)},
be:function(a){return J.aR(a)&0x3ffffff},
bs:function(a,b){return a[this.be(b)]},
b2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;y+=2)if(J.aa(a[y],b))return y
return-1},
$iskc:1,
E:{
eh:function(a,b){var z=a[b]
return z===a?null:z},
cv:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ei:function(){var z=Object.create(null)
P.cv(z,"<non-identifier-key>",z)
delete z["<non-identifier-key>"]
return z}}},
iC:{"^":"c7;a,$ti",
gH:function(a){return this.a.a},
ga5:function(a){var z=this.a
return new P.iD(z,z.cL(),0,this.$ti)}},
iD:{"^":"c;a,b,c,0d,$ti",
sbd:function(a){this.d=H.q(a,H.m(this,0))},
gY:function(){return this.d},
X:function(){var z,y,x
z=this.b
y=this.c
x=this.a
if(z!==x.e)throw H.h(P.ad(x))
else if(y>=z.length){this.sbd(null)
return!1}else{this.sbd(z[y])
this.c=y+1
return!0}},
$isaB:1},
iF:{"^":"iE;a,0b,0c,0d,0e,0f,r,$ti",
ga5:function(a){var z=new P.iG(this,this.r,this.$ti)
z.c=this.e
return z},
gH:function(a){return this.a},
a8:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.l(z[b],"$iscx")!=null}else{y=this.eM(b)
return y}},
eM:function(a){var z=this.d
if(z==null)return!1
return this.b2(this.bs(z,a),a)>=0},
q:function(a,b){var z,y
H.q(b,H.m(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cy()
this.b=z}return this.cI(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cy()
this.c=y}return this.cI(y,b)}else return this.eD(b)},
eD:function(a){var z,y,x
H.q(a,H.m(this,0))
z=this.d
if(z==null){z=P.cy()
this.d=z}y=this.be(a)
x=z[y]
if(x==null)z[y]=[this.bS(a)]
else{if(this.b2(x,a)>=0)return!1
x.push(this.bS(a))}return!0},
cI:function(a,b){H.q(b,H.m(this,0))
if(H.l(a[b],"$iscx")!=null)return!1
a[b]=this.bS(b)
return!0},
f2:function(){this.r=this.r+1&67108863},
bS:function(a){var z,y
z=new P.cx(H.q(a,H.m(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.f2()
return z},
be:function(a){return J.aR(a)&0x3ffffff},
bs:function(a,b){return a[this.be(b)]},
b2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aa(a[y].a,b))return y
return-1},
E:{
cy:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cx:{"^":"c;a,0b,0c"},
iG:{"^":"c;a,b,0c,0d,$ti",
sbd:function(a){this.d=H.q(a,H.m(this,0))},
gY:function(){return this.d},
X:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.ad(z))
else{z=this.c
if(z==null){this.sbd(null)
return!1}else{this.sbd(H.q(z.a,H.m(this,0)))
this.c=this.c.b
return!0}}},
$isaB:1},
iE:{"^":"hQ;"},
h0:{"^":"iH;",$isx:1,$isd:1},
N:{"^":"c;$ti",
ga5:function(a){return new H.dq(a,this.gH(a),0,[H.bh(this,a,"N",0)])},
av:function(a,b){return this.i(a,b)},
fX:function(a,b,c,d){var z,y,x
H.q(b,d)
H.v(c,{func:1,ret:d,args:[d,H.bh(this,a,"N",0)]})
z=this.gH(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gH(a))throw H.h(P.ad(a))}return y},
cA:function(a,b){return H.cq(a,b,null,H.bh(this,a,"N",0))},
B:function(a,b){var z,y
z=[H.bh(this,a,"N",0)]
H.i(b,"$isd",z,"$asd")
y=H.f([],z)
C.a.sH(y,C.c.B(this.gH(a),b.gH(b)))
C.a.bb(y,0,this.gH(a),a)
C.a.bb(y,this.gH(a),y.length,b)
return y},
u:function(a){return P.ca(a,"[","]")}},
ch:{"^":"bI;"},
h4:{"^":"u:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
bI:{"^":"c;$ti",
bz:function(a,b){var z,y
H.v(b,{func:1,ret:-1,args:[H.ax(this,"bI",0),H.ax(this,"bI",1)]})
for(z=J.bv(this.gaJ());z.X();){y=z.gY()
b.$2(y,this.i(0,y))}},
gH:function(a){return J.aj(this.gaJ())},
u:function(a){return P.dt(this)},
$isds:1},
hR:{"^":"c;$ti",
aD:function(a,b){var z
for(z=J.bv(H.i(b,"$isx",this.$ti,"$asx"));z.X();)this.q(0,z.gY())},
u:function(a){return P.ca(this,"{","}")},
$isx:1,
$iskK:1},
hQ:{"^":"hR;"},
iH:{"^":"c+N;"}}],["","",,P,{"^":"",
fG:function(a){if(a instanceof H.u)return a.u(0)
return"Instance of '"+H.b9(a)+"'"},
aE:function(a,b,c,d){var z,y
H.q(b,d)
z=J.fS(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.i(z,"$isd",[d],"$asd")},
h1:function(a,b,c){var z,y
z=H.f([],[c])
for(y=a.ga5(a);y.X();)C.a.q(z,H.q(y.gY(),c))
return z},
bF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aS(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fG(a)},
V:{"^":"c;"},
"+bool":0,
aL:{"^":"a0;"},
"+double":0,
ar:{"^":"c;a",
B:function(a,b){return new P.ar(C.c.B(this.a,b.ghE()))},
O:function(a,b){return C.c.O(this.a,H.l(b,"$isar").a)},
aX:function(a,b){return C.c.aX(this.a,H.l(b,"$isar").a)},
as:function(a,b){if(b==null)return!1
if(!(b instanceof P.ar))return!1
return this.a===b.a},
ga1:function(a){return this.a&0x1FFFFFFF},
b6:function(a,b){return C.c.b6(this.a,H.l(b,"$isar").a)},
u:function(a){var z,y,x,w,v
z=new P.fz()
y=this.a
if(y<0)return"-"+new P.ar(0-y).u(0)
x=z.$1(C.c.b4(y,6e7)%60)
w=z.$1(C.c.b4(y,1e6)%60)
v=new P.fy().$1(y%1e6)
return""+C.c.b4(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isI:1,
$asI:function(){return[P.ar]},
E:{
d9:function(a,b,c,d,e,f){return new P.ar(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fy:{"^":"u:4;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fz:{"^":"u:4;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"c;"},
dz:{"^":"K;",
u:function(a){return"Throw of null."}},
az:{"^":"K;a,b,c,d",
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
u:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gbP()+y+x
if(!this.a)return w
v=this.gbO()
u=P.bF(this.b)
return w+v+": "+H.e(u)},
E:{
f1:function(a,b,c){return new P.az(!0,a,b,c)}}},
dC:{"^":"az;e,f,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
E:{
cl:function(a,b,c){return new P.dC(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.dC(b,c,!0,a,d,"Invalid value")},
dD:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.au(a,0,c,"start",f))
if(a>b||b>c)throw H.h(P.au(b,a,c,"end",f))
return b}}},
fN:{"^":"az;e,H:f>,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){if(J.cM(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
E:{
bm:function(a,b,c,d,e){var z=H.k(e!=null?e:J.aj(b))
return new P.fN(b,z,!0,a,c,"Index out of range")}}},
ib:{"^":"K;a",
u:function(a){return"Unsupported operation: "+this.a},
E:{
a7:function(a){return new P.ib(a)}}},
i9:{"^":"K;a",
u:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
E:{
e7:function(a){return new P.i9(a)}}},
bL:{"^":"K;a",
u:function(a){return"Bad state: "+this.a},
E:{
dJ:function(a){return new P.bL(a)}}},
fd:{"^":"K;a",
u:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bF(z))+"."},
E:{
ad:function(a){return new P.fd(a)}}},
dI:{"^":"c;",
u:function(a){return"Stack Overflow"},
$isK:1},
fk:{"^":"K;a",
u:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iA:{"^":"c;a",
u:function(a){return"Exception: "+this.a}},
bk:{"^":"c;"},
w:{"^":"a0;"},
"+int":0,
x:{"^":"c;$ti",
ck:["eh",function(a,b){var z=H.ax(this,"x",0)
return new H.eb(this,H.v(b,{func:1,ret:P.V,args:[z]}),[z])}],
gH:function(a){var z,y
z=this.ga5(this)
for(y=0;z.X();)++y
return y},
gaZ:function(a){var z,y
z=this.ga5(this)
if(!z.X())throw H.h(H.fP())
y=z.gY()
if(z.X())throw H.h(H.fR())
return y},
av:function(a,b){var z,y,x
if(b<0)H.aP(P.au(b,0,null,"index",null))
for(z=this.ga5(this),y=0;z.X();){x=z.gY()
if(b===y)return x;++y}throw H.h(P.bm(b,this,"index",null,y))},
u:function(a){return P.fO(this,"(",")")}},
aB:{"^":"c;$ti"},
d:{"^":"c;$ti",$isx:1},
"+List":0,
P:{"^":"c;",
ga1:function(a){return P.c.prototype.ga1.call(this,this)},
u:function(a){return"null"}},
"+Null":0,
a0:{"^":"c;",$isI:1,
$asI:function(){return[P.a0]}},
"+num":0,
c:{"^":";",
as:function(a,b){return this===b},
ga1:function(a){return H.b8(this)},
u:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.u(this)}},
bM:{"^":"c;a,b",
bo:function(a){var z,y,x
if(this.b!=null){z=this.a
y=H.k($.bp.$0())
x=this.b
if(typeof y!=="number")return y.I()
if(typeof x!=="number")return H.H(x)
if(typeof z!=="number")return z.B()
this.a=z+(y-x)
this.b=null}},
aK:function(a){var z=this.b
this.a=z==null?H.k($.bp.$0()):z},
gaF:function(){var z,y
z=this.b
if(z==null)z=H.k($.bp.$0())
y=this.a
if(typeof z!=="number")return z.I()
if(typeof y!=="number")return H.H(y)
return z-y}},
n:{"^":"c;",$isI:1,
$asI:function(){return[P.n]},
$ishA:1},
"+String":0,
cp:{"^":"c;b1:a<",
gH:function(a){return this.a.length},
u:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
E:{
dK:function(a,b,c){var z=J.bv(b)
if(!z.X())return a
if(c.length===0){do a+=H.e(z.gY())
while(z.X())}else{a+=H.e(z.gY())
for(;z.X();)a=a+c+H.e(z.gY())}return a}}}}],["","",,W,{"^":"",
fE:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).an(z,a,b,c)
y.toString
z=W.r
z=new H.eb(new W.a9(y),H.v(new W.fF(),{func:1,ret:P.V,args:[z]}),[z])
return H.l(z.gaZ(z),"$isa3")},
b0:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eU(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aQ(x)}return z},
iz:function(a,b){return document.createElement(a)},
j2:function(a){if(a==null)return
return W.ef(a)},
jc:function(a,b){var z
H.v(a,{func:1,ret:-1,args:[b]})
z=$.aJ
if(z===C.t)return a
return z.d_(a,b)},
G:{"^":"a3;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
eY:{"^":"G;",
u:function(a){return String(a)},
$iseY:1,
"%":"HTMLAnchorElement"},
jK:{"^":"G;",
u:function(a){return String(a)},
"%":"HTMLAreaElement"},
cT:{"^":"G;",$iscT:1,"%":"HTMLBaseElement"},
bw:{"^":"G;",$isbw:1,"%":"HTMLBodyElement"},
cW:{"^":"G;0height",
saI:function(a,b){a.height=H.k(b)},
$iscW:1,
"%":"HTMLCanvasElement"},
cX:{"^":"D;",
fp:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
hC:function(a,b,c,d,e){return a.strokeText(b,c,d,e)},
ee:function(a,b,c,d){return a.strokeText(b,c,d)},
cc:function(a,b,c){return a.lineTo(H.aN(b),H.aN(c))},
ds:function(a,b,c){return a.moveTo(H.aN(b),H.aN(c))},
$iscX:1,
"%":"CanvasRenderingContext2D"},
jN:{"^":"r;0H:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fw:{"^":"r;",
fl:function(a,b){return a.adoptNode(b)},
ce:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
jO:{"^":"D;",
u:function(a){return String(a)},
"%":"DOMException"},
fx:{"^":"D;",
fD:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
a3:{"^":"r;0hl:tagName=",
gfn:function(a){return new W.iy(a)},
u:function(a){return a.localName},
an:["bK",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dc
if(z==null){z=H.f([],[W.af])
y=new W.dx(z)
C.a.q(z,W.ej(null))
C.a.q(z,W.eq())
$.dc=y
d=y}else d=z
z=$.db
if(z==null){z=new W.es(d)
$.db=z
c=z}else{z.a=d
c=z}}if($.am==null){z=document
y=z.implementation
y=(y&&C.W).fD(y,"")
$.am=y
$.c8=y.createRange()
y=$.am
y.toString
y=y.createElement("base")
H.l(y,"$iscT")
y.href=z.baseURI
z=$.am.head;(z&&C.X).aE(z,y)}z=$.am
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.l(y,"$isbw")}z=$.am
if(!!this.$isbw)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.am.body;(z&&C.r).aE(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.a8(C.af,a.tagName)){z=$.c8;(z&&C.Q).dN(z,x)
z=$.c8
w=(z&&C.Q).fB(z,b)}else{x.innerHTML=b
w=$.am.createDocumentFragment()
for(z=J.F(w);y=x.firstChild,y!=null;)z.aE(w,y)}z=$.am.body
if(x==null?z!=null:x!==z)J.cP(x)
c.ct(w)
C.v.fl(document,w)
return w},function(a,b,c){return this.an(a,b,c,null)},"fC",null,null,"ghJ",5,5,null],
sdl:function(a,b){this.bH(a,b)},
bI:function(a,b,c,d){a.textContent=null
this.aE(a,this.an(a,b,c,d))},
bH:function(a,b){return this.bI(a,b,null,null)},
b9:function(a,b){return a.getAttribute(b)},
f7:function(a,b){return a.removeAttribute(b)},
dP:function(a,b,c){return a.setAttribute(b,c)},
$isa3:1,
"%":";Element"},
fF:{"^":"u:15;",
$1:function(a){return!!J.C(H.l(a,"$isr")).$isa3}},
jP:{"^":"G;0height",
saI:function(a,b){a.height=H.t(b)},
"%":"HTMLEmbedElement"},
dd:{"^":"D;","%":";EventTarget"},
k9:{"^":"G;0H:length=","%":"HTMLFormElement"},
fL:{"^":"G;","%":"HTMLHeadElement"},
fM:{"^":"fw;","%":"HTMLDocument"},
kd:{"^":"G;0height",
saI:function(a,b){a.height=H.t(b)},
"%":"HTMLIFrameElement"},
kf:{"^":"G;0height",
saI:function(a,b){a.height=H.k(b)},
"%":"HTMLImageElement"},
kh:{"^":"G;0height",
saI:function(a,b){a.height=H.k(b)},
"%":"HTMLInputElement"},
h2:{"^":"D;",
u:function(a){return String(a)},
$ish2:1,
"%":"Location"},
h8:{"^":"G;","%":"HTMLAudioElement;HTMLMediaElement"},
a9:{"^":"h0;a",
gaZ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.h(P.dJ("No elements"))
if(y>1)throw H.h(P.dJ("More than one element"))
return z.firstChild},
aD:function(a,b){var z,y,x,w,v
H.i(b,"$isx",[W.r],"$asx")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.F(y),v=0;v<x;++v)w.aE(y,z.firstChild)
return},
m:function(a,b,c){var z,y
H.l(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.a(y,b)
J.eO(z,c,y[b])},
ga5:function(a){var z=this.a.childNodes
return new W.de(z,z.length,-1,[H.bh(C.ah,z,"b2",0)])},
gH:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.a(z,b)
return z[b]},
$asN:function(){return[W.r]},
$asx:function(){return[W.r]},
$asd:function(){return[W.r]}},
r:{"^":"dd;0aU:parentElement=,0hc:previousSibling=",
hh:function(a){var z=a.parentNode
if(z!=null)J.bu(z,a)},
u:function(a){var z=a.nodeValue
return z==null?this.eg(a):z},
aE:function(a,b){return a.appendChild(b)},
f8:function(a,b){return a.removeChild(b)},
fa:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hl:{"^":"iJ;",
gH:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bm(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.l(c,"$isr")
throw H.h(P.a7("Cannot assign element of immutable List."))},
av:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.r]},
$asN:function(){return[W.r]},
$isx:1,
$asx:function(){return[W.r]},
$isd:1,
$asd:function(){return[W.r]},
$asb2:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
kr:{"^":"G;0height",
saI:function(a,b){a.height=H.t(b)},
"%":"HTMLObjectElement"},
hI:{"^":"D;",
fB:function(a,b){return a.createContextualFragment(b)},
dN:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
kJ:{"^":"G;0H:length=","%":"HTMLSelectElement"},
i1:{"^":"G;",
an:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
z=W.fE("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).aD(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
kM:{"^":"G;",
an:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.T.an(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gaZ(z)
x.toString
z=new W.a9(x)
w=z.gaZ(z)
y.toString
w.toString
new W.a9(y).aD(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
kN:{"^":"G;",
an:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.T.an(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gaZ(z)
y.toString
x.toString
new W.a9(y).aD(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
dM:{"^":"G;",
bI:function(a,b,c,d){var z
a.textContent=null
z=this.an(a,b,c,d)
J.eP(a.content,z)},
bH:function(a,b){return this.bI(a,b,null,null)},
$isdM:1,
"%":"HTMLTemplateElement"},
kR:{"^":"h8;0height",
saI:function(a,b){a.height=H.k(b)},
"%":"HTMLVideoElement"},
ij:{"^":"dd;",
dz:function(a,b){H.v(b,{func:1,ret:-1,args:[P.a0]})
this.eV(a)
return this.fb(a,W.jc(b,P.a0))},
fb:function(a,b){return a.requestAnimationFrame(H.be(H.v(b,{func:1,ret:-1,args:[P.a0]}),1))},
eV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
gaU:function(a){return W.j2(a.parent)},
$isec:1,
"%":"DOMWindow|Window"},
ee:{"^":"r;",$isee:1,"%":"Attr"},
l_:{"^":"j1;",
gH:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bm(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.l(c,"$isr")
throw H.h(P.a7("Cannot assign element of immutable List."))},
av:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.r]},
$asN:function(){return[W.r]},
$isx:1,
$asx:function(){return[W.r]},
$isd:1,
$asd:function(){return[W.r]},
$asb2:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
iw:{"^":"ch;eT:a<",
bz:function(a,b){var z,y,x,w,v,u
H.v(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=this.gaJ(),y=z.length,x=this.a,w=J.F(x),v=0;v<z.length;z.length===y||(0,H.cL)(z),++v){u=z[v]
b.$2(u,w.b9(x,u))}},
gaJ:function(){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=H.l(z[w],"$isee")
if(v.namespaceURI==null)C.a.q(y,v.name)}return y},
$asbI:function(){return[P.n,P.n]},
$asds:function(){return[P.n,P.n]}},
iy:{"^":"iw;a",
i:function(a,b){return J.bY(this.a,H.t(b))},
m:function(a,b,c){J.eV(this.a,b,c)},
gH:function(a){return this.gaJ().length}},
bs:{"^":"c;a",
ey:function(a){var z,y
z=$.$get$cw()
if(z.a===0){for(y=0;y<262;++y)z.m(0,C.ae[y],W.js())
for(y=0;y<12;++y)z.m(0,C.C[y],W.jt())}},
b5:function(a){return $.$get$ek().a8(0,W.b0(a))},
aR:function(a,b,c){var z,y,x
z=W.b0(a)
y=$.$get$cw()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.jg(x.$4(a,b,c,this))},
$isaf:1,
E:{
ej:function(a){var z,y
z=document.createElement("a")
y=new W.iN(z,window.location)
y=new W.bs(y)
y.ey(a)
return y},
kY:[function(a,b,c,d){H.l(a,"$isa3")
H.t(b)
H.t(c)
H.l(d,"$isbs")
return!0},"$4","js",16,0,8],
kZ:[function(a,b,c,d){var z,y,x,w,v
H.l(a,"$isa3")
H.t(b)
H.t(c)
z=H.l(d,"$isbs").a
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
return z},"$4","jt",16,0,8]}},
b2:{"^":"c;$ti",
ga5:function(a){return new W.de(a,this.gH(a),-1,[H.bh(this,a,"b2",0)])}},
dx:{"^":"c;a",
b5:function(a){return C.a.cZ(this.a,new W.hn(a))},
aR:function(a,b,c){return C.a.cZ(this.a,new W.hm(a,b,c))},
$isaf:1},
hn:{"^":"u:5;a",
$1:function(a){return H.l(a,"$isaf").b5(this.a)}},
hm:{"^":"u:5;a,b,c",
$1:function(a){return H.l(a,"$isaf").aR(this.a,this.b,this.c)}},
iO:{"^":"c;",
ez:function(a,b,c,d){var z,y,x
this.a.aD(0,c)
z=b.ck(0,new W.iP())
y=b.ck(0,new W.iQ())
this.b.aD(0,z)
x=this.c
x.aD(0,C.ag)
x.aD(0,y)},
b5:function(a){return this.a.a8(0,W.b0(a))},
aR:["ej",function(a,b,c){var z,y
z=W.b0(a)
y=this.c
if(y.a8(0,H.e(z)+"::"+b))return this.d.fm(c)
else if(y.a8(0,"*::"+b))return this.d.fm(c)
else{y=this.b
if(y.a8(0,H.e(z)+"::"+b))return!0
else if(y.a8(0,"*::"+b))return!0
else if(y.a8(0,H.e(z)+"::*"))return!0
else if(y.a8(0,"*::*"))return!0}return!1}],
$isaf:1},
iP:{"^":"u:6;",
$1:function(a){return!C.a.a8(C.C,H.t(a))}},
iQ:{"^":"u:6;",
$1:function(a){return C.a.a8(C.C,H.t(a))}},
iT:{"^":"iO;e,a,b,c,d",
aR:function(a,b,c){if(this.ej(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bY(a,"template")==="")return this.e.a8(0,b)
return!1},
E:{
eq:function(){var z,y,x,w,v
z=P.n
y=P.dp(C.B,z)
x=H.m(C.B,0)
w=H.v(new W.iU(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.iT(y,P.bH(null,null,null,z),P.bH(null,null,null,z),P.bH(null,null,null,z),null)
y.ez(null,new H.h5(C.B,w,[x,z]),v,null)
return y}}},
iU:{"^":"u:16;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
iS:{"^":"c;",
b5:function(a){var z=J.C(a)
if(!!z.$isdF)return!1
z=!!z.$isB
if(z&&W.b0(a)==="foreignObject")return!1
if(z)return!0
return!1},
aR:function(a,b,c){if(b==="is"||C.w.ea(b,"on"))return!1
return this.b5(a)},
$isaf:1},
de:{"^":"c;a,b,c,0d,$ti",
scQ:function(a){this.d=H.q(a,H.m(this,0))},
X:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scQ(J.eM(this.a,z))
this.c=z
return!0}this.scQ(null)
this.c=y
return!1},
gY:function(){return this.d},
$isaB:1},
ix:{"^":"c;a",
gaU:function(a){return W.ef(this.a.parent)},
$isec:1,
E:{
ef:function(a){if(a===window)return H.l(a,"$isec")
else return new W.ix(a)}}},
af:{"^":"c;"},
iN:{"^":"c;a,b",$iskP:1},
es:{"^":"c;a",
ct:function(a){new W.iZ(this).$2(a,null)},
bf:function(a,b){if(b==null)J.cP(a)
else J.bu(b,a)},
fd:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eR(a)
x=J.bY(y.geT(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aQ(t)}v="element unprintable"
try{v=J.aS(a)}catch(t){H.aQ(t)}try{u=W.b0(a)
this.fc(H.l(a,"$isa3"),b,z,v,u,H.l(y,"$isds"),H.t(x))}catch(t){if(H.aQ(t) instanceof P.az)throw t
else{this.bf(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fc:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bf(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b5(a)){this.bf(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aR(a,"is",g)){this.bf(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaJ()
y=H.f(z.slice(0),[H.m(z,0)])
for(x=f.gaJ().length-1,z=f.a,w=J.F(z);x>=0;--x){if(x>=y.length)return H.a(y,x)
v=y[x]
if(!this.a.aR(a,J.eW(v),w.b9(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.b9(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b9(z,v)
w.f7(z,v)}}if(!!J.C(a).$isdM)this.ct(a.content)},
$iskq:1},
iZ:{"^":"u:17;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fd(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bf(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eT(z)}catch(w){H.aQ(w)
v=H.l(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bu(u,v)}else J.bu(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.l(y,"$isr")}}},
iI:{"^":"D+N;"},
iJ:{"^":"iI+b2;"},
j0:{"^":"D+N;"},
j1:{"^":"j0+b2;"}}],["","",,P,{"^":"",eZ:{"^":"D;",$iseZ:1,"%":"SVGAnimatedLength"},f_:{"^":"D;",$isf_:1,"%":"SVGAnimatedLengthList"},f0:{"^":"D;",$isf0:1,"%":"SVGAnimatedNumber"},jQ:{"^":"B;0j:x=,0k:y=","%":"SVGFEBlendElement"},jR:{"^":"B;0j:x=,0k:y=","%":"SVGFEColorMatrixElement"},jS:{"^":"B;0j:x=,0k:y=","%":"SVGFEComponentTransferElement"},jT:{"^":"B;0j:x=,0k:y=","%":"SVGFECompositeElement"},jU:{"^":"B;0j:x=,0k:y=","%":"SVGFEConvolveMatrixElement"},jV:{"^":"B;0j:x=,0k:y=","%":"SVGFEDiffuseLightingElement"},jW:{"^":"B;0j:x=,0k:y=","%":"SVGFEDisplacementMapElement"},jX:{"^":"B;0j:x=,0k:y=","%":"SVGFEFloodElement"},jY:{"^":"B;0j:x=,0k:y=","%":"SVGFEGaussianBlurElement"},jZ:{"^":"B;0j:x=,0k:y=","%":"SVGFEImageElement"},k_:{"^":"B;0j:x=,0k:y=","%":"SVGFEMergeElement"},k0:{"^":"B;0j:x=,0k:y=","%":"SVGFEMorphologyElement"},k1:{"^":"B;0j:x=,0k:y=","%":"SVGFEOffsetElement"},k2:{"^":"B;0j:x=,0k:y=","%":"SVGFEPointLightElement"},k3:{"^":"B;0j:x=,0k:y=","%":"SVGFESpecularLightingElement"},k4:{"^":"B;0j:x=,0k:y=","%":"SVGFESpotLightElement"},k5:{"^":"B;0j:x=,0k:y=","%":"SVGFETileElement"},k6:{"^":"B;0j:x=,0k:y=","%":"SVGFETurbulenceElement"},k7:{"^":"B;0j:x=,0k:y=","%":"SVGFilterElement"},k8:{"^":"b1;0j:x=,0k:y=","%":"SVGForeignObjectElement"},fK:{"^":"b1;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b1:{"^":"B;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kg:{"^":"b1;0j:x=,0k:y=","%":"SVGImageElement"},km:{"^":"B;0j:x=,0k:y=","%":"SVGMaskElement"},kz:{"^":"B;0j:x=,0k:y=","%":"SVGPatternElement"},kA:{"^":"D;0H:length=","%":"SVGPointList"},kG:{"^":"fK;0j:x=,0k:y=","%":"SVGRectElement"},dF:{"^":"B;",$isdF:1,"%":"SVGScriptElement"},B:{"^":"a3;",
sdl:function(a,b){this.bH(a,b)},
an:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.af])
C.a.q(z,W.ej(null))
C.a.q(z,W.eq())
C.a.q(z,new W.iS())
c=new W.es(new W.dx(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).fC(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.gaZ(z)
for(z=J.F(v);x=u.firstChild,x!=null;)z.aE(v,x)
return v},
$isB:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kL:{"^":"b1;0j:x=,0k:y=","%":"SVGSVGElement"},i4:{"^":"b1;","%":"SVGTextPathElement;SVGTextContentElement"},kO:{"^":"i4;0j:x=,0k:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},kQ:{"^":"b1;0j:x=,0k:y=","%":"SVGUseElement"}}],["","",,P,{"^":"",dh:{"^":"c;",$isx:1,
$asx:function(){return[P.aL]},
$isd:1,
$asd:function(){return[P.aL]}}}],["","",,P,{"^":""}],["","",,V,{"^":"",
fU:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
switch(a0.a){case C.N:H.o(a0,"$isko")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new E.b(new Float64Array(2))
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(4)
w=new V.ha(z,y,0,0,0,x,0,0,0,new E.b(w),new E.b(v),0,0,new E.X(u),new E.b(new Float64Array(2)),a0.gaz(a0),!1,!1)
w.af(a.ch,a0)
y.h(a0.gi0(a0))
G.ct(w.r.d,y,z)
w.fr=a0.gdq()
x.K()
w.cy=a0.gdh()
w.db=a0.gda()
return w
case C.A:H.o(a0,"$isd4")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new E.b(new Float64Array(2))
u.h(a0.f)
t=new E.b(new Float64Array(2))
t.h(a0.r)
v=new V.bE(0,0,0,u,t,0,0,0,0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),new E.b(v),0,0,0,0,0,a0.a,!1,!1)
v.af(a.ch,a0)
v.fx=a0.x
v.ch=a0.y
v.cx=a0.z
return v
case C.a9:H.o(a0,"$iskC")
z=new Float64Array(3)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(9)
t=a0.gb7()
s=new E.b(new Float64Array(2))
s.h(t)
t=a0.gb8()
r=new E.b(new Float64Array(2))
r.h(t)
t=a0.gh4()
q=new E.b(new Float64Array(2))
q.h(t)
q.Z()
t=new E.b(new Float64Array(2))
u=new V.hF(s,r,q,t,new E.a8(z),0,0,0,0,0,!1,!1,0,0,new E.b(y),new E.b(x),0,0,0,0,new E.b(w),new E.b(v),0,0,0,0,new E.ae(u),0,a0.gaz(a0),!1,!1)
u.af(a.ch,a0)
q.U(1,t)
u.dx=a0.gdv()
u.fx=a0.ghT()
u.fy=a0.gi3()
u.go=a0.ghV()
u.id=a0.gdr()
u.k1=a0.gfN()
u.k2=a0.gdd()
u.k3=C.n
return u
case C.a6:H.o(a0,"$iskH")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new Float64Array(3)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
x=new V.hL(z,y,new E.a8(x),0,!1,0,0,!1,0,0,0,0,0,new E.b(w),new E.b(v),new E.b(u),new E.b(t),0,0,0,0,new E.ae(new Float64Array(9)),0,C.n,a0.gaz(a0),!1,!1)
x.af(a.ch,a0)
z.h(a0.gb7())
y.h(a0.gb8())
x.fy=a0.gdv()
x.go=a0.ghS()
x.id=a0.gi2()
x.dy=a0.gh6()
x.fr=a0.gdr()
x.fx=a0.gfN()
x.dx=a0.gdd()
return x
case C.ac:H.o(a0,"$iskS")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(9)
u=a0.gb7()
t=new E.b(new Float64Array(2))
t.h(u)
u=a0.gb8()
s=new E.b(new Float64Array(2))
s.h(u)
z=new V.ig(0,0,0,t,s,0,0,new E.a8(new Float64Array(3)),0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),0,0,0,0,new E.ae(v),a0.gaz(a0),!1,!1)
z.af(a.ch,a0)
z.dy=a0.gdv()
z.ch=a0.gdh()
z.cx=a0.gda()
return z
case C.O:H.o(a0,"$iska")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(4)
u=a0.gb7()
t=new E.b(new Float64Array(2))
t.h(u)
u=a0.gb8()
s=new E.b(new Float64Array(2))
s.h(u)
z=new V.fH(t,s,new E.b(new Float64Array(2)),0,0,0,0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),0,0,0,0,new E.X(v),0,a0.gaz(a0),!1,!1)
z.af(a.ch,a0)
z.dx=a0.gdq()
z.dy=a0.gh7()
return z
case C.ab:H.o(a0,"$iskT")
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
v=new V.ih(0,0,z,y,x,w,0,0,0,0,0,!1,0,0,new E.b(v),new E.b(u),0,0,0,0,new E.b(t),new E.b(s),0,0,0,0,0,0,0,0,0,new E.b(r),new E.b(q),new E.b(new Float64Array(2)),a0.gaz(a0),!1,!1)
v.af(a.ch,a0)
z.h(a0.gb7())
y.h(a0.gb8())
x.h(a0.gh4())
x.U(1,w)
v.V=0
v.fx=0
v.go=a0.gh6()
v.id=a0.gdr()
v.k1=a0.gdd()
v.ch=a0.gdh()
v.cx=a0.gda()
return v
case C.aa:H.o(a0,"$iskb")
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
n=a0.gca()
m=a0.gcb()
l=a0.gca().dM()
k=a0.gcb().dM()
j=a0.gca().dE()
i=a0.gcb().dE()
o=new V.fJ(n,m,l,k,j,i,z,y,x,w,v,u,0,0,0,0,0,0,0,0,0,new E.b(t),new E.b(s),new E.b(r),new E.b(q),0,0,0,0,0,0,0,0,new E.b(p),new E.b(o),0,0,0,0,0,a0.gaz(a0),!1,!1)
o.af(a.ch,a0)
n=n.dG()
o.f=n
h=n.d
g=j.gbX()
j.gaO().gt()
t=o.Q.a.l()
s=o.Q.a.l()
f=a0.gca()
x.h(f.gf_())
z.h(f.gf0())
o.k2=f.gf6()
v.h(f.gf1())
G.j(h.b,z,s)
s.q(0,h.a)
s.n(g.gbB())
G.a6(g.gcd(),s,t)
t.n(x)
e=t.C(v)
o.Q.a.b-=2
z=m.dG()
o.r=z
d=z.d
c=i.gbX()
i.gaO().gt()
z=o.Q.a.l()
x=o.Q.a.l()
f=a0.gcb()
w.h(f.gf_())
y.h(f.gf0())
o.k3=f.gf6()
u.h(f.gf1())
G.j(d.b,y,x)
x.q(0,d.a)
x.n(c.gbB())
G.a6(c.gcd(),x,z)
z.n(w)
b=z.C(u)
o.Q.a.b-=2
z=a0.ghf()
o.r1=z
o.k4=e+z*b
o.r2=0
return o
case C.M:H.o(a0,"$iskF")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new E.b(new Float64Array(2))
w=new E.b(new Float64Array(2))
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
v=new V.dB(z,y,0,0,x,w,0,0,0,0,0,new E.b(v),new E.b(u),new E.b(t),new E.b(s),new E.b(r),new E.b(new Float64Array(2)),0,0,0,0,0,a0.gaz(a0),!1,!1)
v.af(a.ch,a0)
z.h(a0.ghx())
y.h(a0.ghy())
x.h(a0.gb7())
w.h(a0.gb8())
v.fx=a0.ghf()
v.cy=a0.gh2()
v.db=a0.gh3()
v.fr=a0.gh2().B(0,C.c.F(v.fx,a0.gh3()))
v.fy=0
return v
case C.z:return V.ff(a,H.o(a0,"$iscZ"))
case C.a7:H.o(a0,"$iskI")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
x=new V.hM(z,y,0,0,0,0,0,new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(new Float64Array(2)),0,0,0,0,0,C.n,a0.gaz(a0),!1,!1)
x.af(a.ch,a0)
z.h(a0.gb7())
y.h(a0.gb8())
x.cy=a0.ghU(a0)
return x
case C.a8:H.o(a0,"$iskn")
z=new E.b(new Float64Array(2))
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
y=new V.h9(z,0,new E.b(y),0,0,0,0,0,0,new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(t),0,0,0,0,0,new E.X(new Float64Array(4)),0,a0.gaz(a0),!1,!1)
y.af(a.ch,a0)
z.h(a0.ghR())
y.cx=a0.ghH()
y.db=0
y.dx=a0.gdq()
y.dy=a0.gh7()
y.fr=a0.ghI()
return y
case C.a5:default:return}},
hy:function(a){return a.gc7(a).O(0,0)},
fg:{"^":"c;",
cz:function(a,b){var z,y,x
z=a.y
y=b.y
x=z.c
if(x===y.c&&x!==0)return x>0
return(z.b&y.a)!==0&&(z.a&y.b)!==0}},
d_:{"^":"c;a,b,c"},
fl:{"^":"c;"},
Q:{"^":"c;a,b",
cl:function(a){var z,y
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
aB:function(){var z,y
z=this.b.a
y=this.a.a
return 2*(z[0]-y[0]+z[1]-y[1])},
u:function(a){return"AABB["+this.a.u(0)+" . "+this.b.u(0)+"]"},
E:{
eX:function(a,b){var z,y
z=b.a.a
y=a.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=a.a.a
y=b.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0}}},
fm:{"^":"c;a,b,0c,d,e,0f,r,x,y",
scS:function(a){this.c=H.i(a,"$isd",[P.w],"$asd")},
scT:function(a){this.f=H.i(a,"$isd",[V.as],"$asd")},
ep:function(a){var z,y
z=new Array(this.r)
z.fixed$length=Array
this.scT(H.f(z,[V.as]))
for(y=0;y<this.r;++y){z=this.f;(z&&C.a).m(z,y,new V.as(0,0))}this.scS(P.aE(this.d,0,!1,P.w))},
hm:function(a,b){var z,y,x,w
z=this.a
y=z.b
if(a<0||a>=y.length)return H.a(y,a)
x=y[a].gaP()
z=z.b
if(b<0||b>=z.length)return H.a(z,b)
w=z[b].gaP()
z=w.a.a
y=x.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=x.a.a
y=w.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0},
cj:function(a){var z,y,x,w,v,u,t,s,r
this.x=0
for(z=this.a,y=0;y<this.e;++y){x=this.c
if(y>=x.length)return H.a(x,y)
x=H.k(x[y])
this.y=x
if(x===-1)continue
z.hd(this,C.a.i(z.b,x).gaP())}this.e=0
F.eJ(this.f,0,this.x,V.as)
for(y=0;y<this.x;){x=this.f
if(y<0||y>=x.length)return H.a(x,y)
w=x[y]
x=w.a
v=C.a.i(z.b,x).gaA()
x=w.b
a.fk(v,C.a.i(z.b,x).gaA());++y
for(x=this.x,u=this.f;y<x;){if(y>=u.length)return H.a(u,y)
t=u[y]
s=t.a
r=w.a
if(s==null?r==null:s===r){s=t.b
r=w.b
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)break;++y}}},
d0:function(a){var z,y,x
z=this.e
y=this.d
if(z===y){x=this.c
z=y*2
this.d=z
z=new Array(z)
z.fixed$length=Array
this.scS(H.f(z,[P.w]))
C.a.aj(this.c,0,x.length,x,0)}C.a.m(this.c,this.e,a);++this.e},
dA:function(a){var z,y,x,w,v
if(a===this.y)return!0
z=this.x
y=this.r
if(z===y){x=this.f
z=y*2
this.r=z
z=new Array(z)
z.fixed$length=Array
this.scT(H.f(z,[V.as]))
z=this.f
w=x.length;(z&&C.a).aj(z,0,w,x,0)
for(;w<this.r;++w){z=this.f;(z&&C.a).m(z,w,new V.as(0,0))}}z=this.y
if(typeof z!=="number")return H.H(z)
y=this.f
v=this.x
if(a<z){if(v>=y.length)return H.a(y,v)
y[v].sdt(a)
z=this.f
y=this.x
if(y>=z.length)return H.a(z,y)
z[y].sdu(this.y)}else{if(v>=y.length)return H.a(y,v)
y[v].sdt(z)
z=this.f
y=this.x
if(y>=z.length)return H.a(z,y)
z[y].sdu(a)}++this.x
return!0},
$isi6:1,
$isjL:1,
E:{
fn:function(a){var z=new V.fm(a,0,16,0,16,0,-1)
z.ep(a)
return z}}},
fA:{"^":"c;0a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy",
sf3:function(a){this.b=H.i(a,"$isd",[V.al],"$asd")},
sh9:function(a){this.r=H.i(a,"$isd",[V.al],"$asd")},
er:function(){var z,y,x,w,v
for(z=this.d-1;z>=0;--z){y=this.b
x=new Float64Array(2)
C.a.m(y,z,new V.al(new V.Q(new E.b(x),new E.b(new Float64Array(2))),z,0))
y=this.b
x=y.length
if(z>=x)return H.a(y,z)
w=y[z]
if(z===this.d-1)y=null
else{v=z+1
if(v>=x)return H.a(y,v)
v=y[v]
y=v}J.cR(w,y)
y=this.b
if(z>=y.length)return H.a(y,z)
J.cQ(y[z],-1)}for(y=this.f,z=0;z<4;++z)C.a.m(y,z,new E.b(new Float64Array(2)))},
h8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
this.f9(y)
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
this.cR(a)
return!0},
hd:function(a,b){var z,y,x,w,v
this.x=0
z=this.r
this.x=1
C.a.m(z,0,this.a)
for(z=[V.al];y=this.x,y>0;){x=this.r;--y
this.x=y
if(y>=x.length)return H.a(x,y)
w=x[y]
if(w==null)continue
if(V.eX(w.a,b))if(w.d==null)a.dA(w.f)
else{y=this.r.length
if(y-this.x-2<=0){y=new Array(y*2)
y.fixed$length=Array
v=H.f(y,z)
y=this.r
C.a.aj(v,0,y.length,y,0)
this.sh9(v)}C.a.m(this.r,this.x++,w.d)
C.a.m(this.r,this.x++,w.e)}}},
bM:function(a){var z=a.d
if(z==null)return 0
return H.k(1+Math.max(this.bM(z),this.bM(a.e)))},
cJ:function(){var z,y,x,w,v,u,t
z=this.e
if(z===-1){y=this.b
z=this.d*=2
z=new Array(z)
z.fixed$length=Array
this.sf3(H.f(z,[V.al]))
C.a.aj(this.b,0,y.length,y,0)
for(x=this.d-1;z=this.c,x>=z;--x){z=this.b
w=new Float64Array(2)
C.a.m(z,x,new V.al(new V.Q(new E.b(w),new E.b(new Float64Array(2))),x,0))
z=this.b
w=z.length
if(x<0||x>=w)return H.a(z,x)
v=z[x]
if(x===this.d-1)z=null
else{u=x+1
if(u>=w)return H.a(z,u)
u=z[u]
z=u}J.cR(v,z)
z=this.b
if(x>=z.length)return H.a(z,x)
J.cQ(z[x],-1)}this.e=z}w=this.b
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
cN:function(a){var z,y
z=this.e
if(z!==-1){y=this.b
if(z<0||z>=y.length)return H.a(y,z)
z=y[z]}else z=null
a.c=H.l(z,"$isal")
a.r=-1
this.e=a.f;--this.c},
cR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.b
if(a<0||a>=z.length)return H.a(z,a)
y=z[a]
x=this.a
if(x==null){this.a=y
y.c=null
return}w=y.a
for(z=this.ch;v=x.d,v!=null;){u=x.e
t=x.a
s=t.aB()
z.a0(t,w)
r=z.aB()
q=2*r
p=2*(r-s)
if(v.d==null){z.a0(w,v.a)
o=z.aB()+p}else{t=v.a
z.a0(w,t)
n=t.aB()
o=z.aB()-n+p}if(u.d==null){z.a0(w,u.a)
m=z.aB()+p}else{t=u.a
z.a0(w,t)
n=t.aB()
m=z.aB()-n+p}if(q<o&&q<m)break
x=o<m?v:u}z=this.b
t=x.f
if(t<0||t>=z.length)return H.a(z,t)
l=J.eS(z[t])
k=this.cJ()
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
this.a=k}for(x=k;x!=null;){x=this.cK(x)
j=x.d
u=x.e
x.r=H.k(1+Math.max(j.r,u.r))
x.a.a0(j.a,u.a)
x=x.c}},
f9:function(a){var z,y,x,w,v,u,t
if(a===this.a){this.a=null
return}z=a.c
y=z.c
x=z.d
if(x===a)x=z.e
if(y!=null){w=y.d
if(w==null?z==null:w===z)y.d=x
else y.e=x
x.c=y
this.cN(z)
for(v=y;v!=null;){v=this.cK(v)
u=v.d
t=v.e
v.a.a0(u.a,t.a)
v.r=H.k(1+Math.max(u.r,t.r))
v=v.c}}else{this.a=x
x.c=null
this.cN(z)}},
cK:function(a){var z,y,x,w,v,u,t,s
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
fM:function(a){var z,y
z=this.a
if(z==null)return
y=this.bM(z)
this.c6(a,this.a,0,y)},
c6:function(a,b,c,d){var z,y,x,w,v,u
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
x.at(1,v,v)
a.bw(y,4,x)
y=a.c
y.stroke()
v=this.cy
a.b.ba(z,v)
v=v.a
z=v[0]
v=v[1]
w=c+1
u=H.e(b)+".id-"+w+"/"+d
a.bx(x)
C.k.ee(y,u,z,v)
z=b.d
if(z!=null)this.c6(a,z,w,d)
z=b.e
if(z!=null)this.c6(a,z,w,d)},
$isjM:1,
E:{
fB:function(){var z,y,x,w,v,u,t,s,r,q
z=new Array(16)
z.fixed$length=Array
y=[V.al]
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
z=new V.fA(z,0,16,0,x,y,0,new E.b(w),new V.Q(new E.b(v),new E.b(u)),new V.cm(new E.b(t),new E.b(s),0),new V.Q(new E.b(r),new E.b(q)),new G.bz(0,0,0),new E.b(new Float64Array(2)))
z.er()
return z}}},
al:{"^":"c;aP:a<,0aA:b<,0aU:c>,0d,0e,f,r",
saU:function(a,b){this.c=H.l(b,"$isal")},
saI:function(a,b){this.r=H.k(b)}},
as:{"^":"c;a,b",
sdt:function(a){this.a=H.k(a)},
sdu:function(a){this.b=H.k(a)},
b6:function(a,b){var z,y
H.l(b,"$isas")
z=this.a
y=b.a
if(typeof z!=="number")return z.O()
if(typeof y!=="number")return H.H(y)
if(z<y)return-1
if(z===y){z=this.b
y=b.b
if(typeof z!=="number")return z.O()
if(typeof y!=="number")return H.H(y)
if(z<y)z=-1
else z=z===y?0:1
return z}return 1},
$isI:1,
$asI:function(){return[V.as]}},
eg:{"^":"c;a,b"},
R:{"^":"c;A:a<,b",
M:function(a){var z,y
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
c6:{"^":"c;a,b",
u:function(a){return this.b}},
da:{"^":"c;a,b,c"},
i2:{"^":"c;a,b,c",
ew:function(){var z,y,x
for(z=this.b,y=this.a,x=0;x<8;++x){C.a.m(y,x,new E.b(new Float64Array(2)))
C.a.m(z,x,new E.b(new Float64Array(2)))}},
E:{
i3:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.b]
z=H.f(z,y)
x=new Array(8)
x.fixed$length=Array
y=new V.i2(z,H.f(x,y),0)
y.ew()
return y}}},
iK:{"^":"c;a,b,c,d,e,f,r,x,y"},
fc:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3",
fs:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
a.d=C.o
a.c.h(z)
a.b.K()
a.e=1
x=a.a
x[0].a.h(y)
x[0].d.bl()},
ft:function(a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
a8.e=0
z=b1.c
y=b2.b
x=b0.b
w=y.b
v=z.a
u=v[0]
t=y.a
s=v[1]
r=b2.a.a
q=r[0]
r=r[1]
p=b0.a.a
o=w*u-t*s+q-p[0]
n=t*u+w*s+r-p[1]
p=x.b
r=x.a
m=p*o+r*n
l=-r*o+p*n
k=a9.b+b1.b
j=a9.f
i=a9.d
h=a9.e
for(g=0,f=-17976931348623157e292,e=0;e<j;++e){if(e>=8)return H.a(i,e)
w=i[e].a
u=w[0]
w=w[1]
t=h[e].a
d=t[0]*(m-u)+t[1]*(l-w)
if(d>k)return
if(d>f){f=d
g=e}}c=g+1
c=c<j?c:0
if(g<0||g>=8)return H.a(i,g)
b=i[g]
if(c<0||c>=8)return H.a(i,c)
a=i[c]
if(f<11920928955078125e-23){a8.e=1
a8.d=C.h
w=a8.b
u=h[g].a
w.sj(0,u[0])
w.sk(0,u[1])
u=a8.c
w=b.a
t=w[0]
s=a.a
u.sj(0,(t+s[0])*0.5)
u.sk(0,(w[1]+s[1])*0.5)
a0=a8.a[0]
s=a0.a
s.sj(0,v[0])
s.sk(0,v[1])
a0.d.bl()
return}w=b.a
v=w[0]
a1=m-v
u=w[1]
a2=l-u
t=a.a
s=t[0]
r=t[1]
a3=m-s
a4=l-r
if(a1*(s-v)+a2*(r-u)<=0){if(a1*a1+a2*a2>k*k)return
a8.e=1
a8.d=C.h
v=a8.b
v.sj(0,a1)
v.sk(0,l-w[1])
v.Z()
a8.c.h(b)
v=a8.a
v[0].a.h(z)
v[0].d.bl()}else if(a3*(v-s)+a4*(u-r)<=0){if(a3*a3+a4*a4>k*k)return
a8.e=1
a8.d=C.h
w=a8.b
w.sj(0,a3)
w.sk(0,l-t[1])
w.Z()
a8.c.h(a)
w=a8.a
w[0].a.h(z)
w[0].d.bl()}else{a5=(v+s)*0.5
a6=(u+r)*0.5
a7=h[g]
w=a7.a
if((m-a5)*w[0]+(l-a6)*w[1]>k)return
a8.e=1
a8.d=C.h
a8.b.h(a7)
w=a8.c
w.sj(0,a5)
w.sk(0,a6)
w=a8.a
w[0].a.h(z)
w[0].d.bl()}},
df:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=b.f
y=d.f
x=b.e
w=b.d
v=d.d
u=this.f
G.dV(e,c,u)
t=u.b
for(s=this.r,r=s.a,q=this.x,p=q.a,o=0,n=-17976931348623157e292,m=0;m<z;++m){if(m>=8)return H.a(x,m)
G.j(t,x[m],s)
G.p(u,w[m],q)
for(l=17976931348623157e292,k=0;k<y;++k){if(k>=8)return H.a(v,k)
j=v[k]
i=r[0]
h=j.a
g=i*(h[0]-p[0])+r[1]*(h[1]-p[1])
if(g<l)l=g}if(l>n){n=l
o=m}}a.b=o
a.a=n},
fU:function(a0,a1,a2,a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
fu:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=a8.b+b0.b
y=this.y
this.df(y,a8,a9,b0,b1)
if(y.a>z)return
x=this.z
this.df(x,b0,b1,a8,a9)
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
this.fU(y,r,t,v,s,u)
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
g.L()
b=this.fr
a=V.by(b,y,g,-(x*w+l*j)+z,v)
g.L()
if(a<2)return
y=this.fx
if(V.by(y,b,g,x*c+l*k+z,m)<2)return
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
d3:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
a.e=0
z=d.c
y=this.e
G.p(e,z,y)
x=this.fy
G.ct(c,y,x)
w=b.c
v=b.d
u=this.go
u.h(v)
u.n(w)
y.h(v)
y.n(x)
t=u.C(y)
y.h(x)
y.n(w)
s=u.C(y)
r=b.b+d.b
q=this.id
p=q.a
p[1]=0
p[3]=0
if(s<=0){y=$.$get$aA()
y.h(x)
y.n(w)
y=$.$get$aA()
if(y.C(y)>r*r)return
b.r
p[0]=0
p[2]=0
a.e=1
a.d=C.o
a.b.K()
a.c.h(w)
y=a.a
y[0].d.M(q)
y[0].a.h(z)
return}if(t<=0){y=$.$get$aA()
y.h(x)
y.n(v)
y=$.$get$aA()
if(y.C(y)>r*r)return
b.x
p[0]=1
p[2]=0
a.e=1
a.d=C.o
a.b.K()
a.c.h(v)
y=a.a
y[0].d.M(q)
y[0].a.h(z)
return}o=u.C(u)
n=this.k2
n.h(w)
n.D(0,t)
y.h(v)
y.D(0,s)
n.q(0,y)
n.D(0,1/o)
m=$.$get$aA()
m.h(x)
m.n(n)
n=$.$get$aA()
if(n.C(n)>r*r)return
n=this.r
u=u.a
n.sj(0,-u[1])
n.sk(0,u[0])
y.h(x)
y.n(w)
if(n.C(y)<0){y=n.a
n.J(-y[0],-y[1])}n.Z()
p[0]=0
p[2]=1
a.e=1
a.d=C.h
a.b.h(n)
a.c.h(w)
y=a.a
y[0].d.M(q)
y[0].a.h(z)},
E:{
by:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=[V.R]
H.i(a,"$isd",z,"$asd")
H.i(b,"$isd",z,"$asd")
y=b[0]
x=b[1]
w=y.a
v=x.a
u=c.C(w)-d
t=c.C(v)-d
if(u<=0){a[0].M(y)
s=1}else s=0
if(t<=0){r=s+1
a[s].M(x)
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
id:{"^":"c;a,b",
u:function(a){return this.b}},
fC:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx",
es:function(){var z,y,x,w,v
for(z=this.k2,y=this.k1,x=this.id,w=0;w<2;++w){v=new Float64Array(2)
C.a.m(x,w,new V.R(new E.b(v),new V.T(new Int8Array(4))))
v=new Float64Array(2)
C.a.m(y,w,new V.R(new E.b(v),new V.T(new Int8Array(4))))
v=new Float64Array(2)
C.a.m(z,w,new V.R(new E.b(v),new V.T(new Int8Array(4))))}},
d2:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.b
G.dV(c,a1,z)
y=this.c
G.p(z,a0.c,y)
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
v=x.C(w)
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
G.p(z,r[q],u[q])
G.j(t,a0.e[q],s[q])}this.dx=0.02
a.e=0
p=this.k4
this.fw(p)
if(p.a===C.q)return
if(p.c>this.dx)return
o=this.r1
this.fz(o)
t=o.a===C.q
if(!t&&o.c>this.dx)return
if(!t)if(o.c>0.98*p.c+0.001)p=o
t=this.id
n=t[0]
m=t[1]
if(p.a===C.u){a.d=C.h
r=this.Q
l=r.C(s[0])
for(k=0,q=1;j=y.c,q<j;++q){if(q>=8)return H.a(s,q)
i=r.C(s[q])
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
r.L()}}else{a.d=C.x
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
s.L()
r=y.c
y.r=x.C(r)
y.y=s.C(y.d)
j=this.k1
if(V.by(j,t,x,y.r,y.a)<2)return
x=this.k2
if(V.by(x,j,s,y.y,y.b)<2)return
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
if(u.C(w)<=this.dx){if(f>=2)return H.a(t,f)
d=t[f]
if(p.a===C.u){G.ct(z,x[q].a,d.a)
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
fw:function(a){var z,y,x,w,v,u,t,s,r,q
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
fz:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(f>this.dx){a.a=C.J
a.b=p
a.c=f
return}if(i*z[0]+h*z[1]>=0){u[1]=h
u[0]=v[0]
w.n(q)
if(w.C(y)<-0.03490658503988659)continue}else{u[1]=h
u[0]=v[0]
w.n(t)
if(w.C(y)<-0.03490658503988659)continue}if(f>a.c){a.a=C.J
a.b=p
a.c=f}}},
E:{
fD:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.i3()
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
z=new V.fC(z,new G.E(new E.b(y),new G.A(0,1)),new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(t),new E.b(s),new E.b(r),new E.b(q),new E.b(p),C.U,C.U,new E.b(o),new E.b(n),0,!1,new E.b(m),new E.b(l),new E.b(k),new E.b(j),i,g,h,new V.iK(0,0,new E.b(f),new E.b(e),new E.b(d),new E.b(c),0,new E.b(b),0),new V.da(C.q,0,0),new V.da(C.q,0,0),new E.b(a),new E.b(new Float64Array(2)))
z.es()
return z}}},
T:{"^":"c;a",
bm:function(){var z=this.a
return(z[0]<<24|z[1]<<16|z[2]<<8|z[3])>>>0},
M:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
bl:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
b6:function(a,b){H.l(b,"$isT")
return this.bm()-b.bm()},
$isI:1,
$asI:function(){return[V.T]}},
bO:{"^":"c;a,b,p:c<,t:d<,e,f",
st:function(a){this.d=H.bg(a)},
M:function(a){this.a.h(a.a)
this.b.h(a.b)
this.c.h(a.c)
this.d=a.d
this.e=a.e
this.f=a.f}},
hS:{"^":"c;a,b,c,d",E:{
dG:function(){var z,y
z=P.w
y=P.aE(3,0,!1,z)
z=P.aE(3,0,!1,z)
C.a.m(y,0,1073741823)
C.a.m(y,1,1073741823)
C.a.m(y,2,1073741823)
C.a.m(z,0,1073741823)
C.a.m(z,1,1073741823)
C.a.m(z,2,1073741823)
return new V.hS(0,0,y,z)}}},
iR:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
hg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
G.p(c,p,r)
n=q.b
G.p(e,o,n)
m=q.c
l=n.a
n=m.a
n[1]=l[1]
n[0]=l[0]
m.n(r)
q.d=0}if(r>1){k=a.a
j=this.co()
if(j<0.5*k||2*k<j||j<11920928955078125e-23)this.e=0}if(this.e===0){q=z[0]
q.e=0
q.f=0
p=u[0]
o=t[0]
z=q.a
G.p(c,p,z)
y=q.b
G.p(e,o,y)
x=q.c
x.h(y)
x.n(z)
this.e=1}},
hv:function(a){var z,y,x,w
a.a=this.co()
a.b=this.e
for(z=a.c,y=this.d,x=a.d,w=0;w<this.e;++w){if(w>=3)return H.a(y,w)
C.a.m(z,w,J.cS(y[w].e))
C.a.m(x,w,J.cS(y[w].f))}},
dK:function(a){var z,y
switch(this.e){case 1:a.h(this.a.c)
a.L()
return
case 2:z=this.f
z.h(this.b.c)
y=this.a.c
z.n(y)
a.h(y)
a.L()
if(z.w(a)>0)z.U(1,a)
else z.U(-1,a)
return
default:a.K()
return}},
cm:function(a){var z,y,x
switch(this.e){case 0:a.K()
return
case 1:a.h(this.a.c)
return
case 2:z=this.x
y=this.b
z.h(y.c)
z.D(0,y.d)
y=this.r
x=this.a
y.h(x.c)
y.D(0,x.d)
y.q(0,z)
a.h(y)
return
case 3:a.K()
return
default:a.K()
return}},
co:function(){var z,y,x
switch(this.e){case 0:return 0
case 1:return 0
case 2:return Math.sqrt(this.a.c.c5(this.b.c))
case 3:z=this.y
z.h(this.b.c)
y=this.a.c
z.n(y)
x=this.z
x.h(this.c.c)
x.n(y)
return z.w(x)
default:return 0}},
dR:function(){var z,y,x,w,v,u,t,s
z=this.a
y=z.c
x=this.b
w=x.c
v=this.f
v.h(w)
v.n(y)
u=-y.C(v)
if(u<=0){z.d=1
this.e=1
return}t=w.C(v)
if(t<=0){x.d=1
this.e=1
z.M(x)
return}s=1/(t+u)
z.d=t*s
x.d=u*s
this.e=2},
dS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
s=z.C(t)
r=x.C(t)
q=-s
p=this.Q
p.h(v)
p.n(z)
o=z.C(p)
n=v.C(p)
m=-o
l=this.ch
l.h(v)
l.n(x)
k=x.C(l)
j=v.C(l)
i=-k
h=t.w(p)
g=h*x.w(v)
f=h*v.w(z)
e=h*z.w(x)
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
w.M(u)
return}if(r<=0&&i<=0){w.d=1
this.e=1
y.M(w)
return}if(n<=0&&j<=0){u.d=1
this.e=1
y.M(u)
return}if(j>0&&i>0&&g<=0){b=1/(j+i)
w.d=j*b
u.d=i*b
this.e=2
y.M(u)
return}a=1/(g+f+e)
y.d=g*a
w.d=f*a
u.d=e*a
this.e=3}},
fv:{"^":"c;a,0b,0c,d",
eq:function(){var z,y
for(z=this.a,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
this.b=0
this.c=0},
cu:function(a,b){var z,y,x,w,v,u
switch(a.a){case C.i:H.o(a,"$isak")
this.a[0].h(a.c)
this.b=1
this.c=a.b
break
case C.j:H.o(a,"$isat")
z=a.f
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
case C.y:H.o(a,"$isc5")
z=this.d
C.a.m(z,0,a.gc_().i(0,b))
y=b+1
if(C.c.O(y,a.geO()))C.a.m(z,1,a.gc_().i(0,y))
else C.a.m(z,1,a.gc_().i(0,0))
y=this.a
y[0].h(z[0])
y[1].h(z[1])
this.b=2
this.c=a.ghZ()
break
case C.p:H.o(a,"$isb_")
z=this.a
z[0].h(a.c)
z[1].h(a.d)
this.b=2
this.c=a.b
break}},
aW:function(a){var z,y,x,w,v
z=this.a
y=z[0].C(a)
for(x=0,w=1;w<this.b;++w){if(w>=8)return H.a(z,w)
v=z[w].C(a)
if(v>y){y=v
x=w}}return x},
E:{
aX:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.b]
z=H.f(z,y)
x=new Array(2)
x.fixed$length=Array
y=new V.fv(z,H.f(x,y))
y.eq()
return y}}},
fu:{"^":"c;a,b,c,d,e,f,r",
fG:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.d6=$.d6+1
z=a6.a
y=a6.b
x=a6.c
w=a6.d
v=this.a
v.hg(a5,z,x,y,w)
u=v.d
t=this.d
v.cm(t)
t.gT()
for(s=this.b,r=s.length,q=this.c,p=q.length,o=x.b,n=this.e,m=this.f,l=z.a,k=w.b,j=y.a,i=0;i<20;){h=v.e
for(g=0;g<h;++g){if(g>=3)return H.a(u,g)
C.a.m(s,g,u[g].e)
C.a.m(q,g,u[g].f)}switch(v.e){case 1:break
case 2:v.dR()
break
case 3:v.dS()
break}if(v.e===3)break
v.cm(t)
t.gT()
v.dK(n)
if(n.gT()<14210854715202004e-30)break
f=v.e
if(f>=3)return H.a(u,f)
e=u[f]
n.L()
G.a6(o,n,m)
f=z.aW(m)
e.e=f
if(f>=8)return H.a(l,f)
f=l[f]
d=e.a
G.p(x,f,d)
n.L()
G.a6(k,n,m)
f=y.aW(m)
e.f=f
if(f>=8)return H.a(j,f)
f=j[f]
c=e.b
G.p(w,f,c)
f=e.c
b=c.a
c=f.a
c[1]=b[1]
c[0]=b[0]
f.n(d);++i
$.d7=$.d7+1
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
break}++g}if(a)break;++v.e}$.d8=Math.max($.d8,i)
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
t.D(0,s.d)
r=v.b
a0.h(r.a)
a0.D(0,r.d)
a0.q(0,t)
t.h(s.b)
t.D(0,s.d)
a1.h(r.b)
a1.D(0,r.d)
a1.q(0,t)
break
case 3:t=v.a
a0.h(t.a)
a0.D(0,t.d)
t=v.y
s=v.b
t.h(s.a)
t.D(0,s.d)
s=v.z
r=v.c
s.h(r.a)
s.D(0,r.d)
a0.q(0,t)
a0.q(0,s)
a1.h(a0)
break
default:break}a4.c=Math.sqrt(a0.c5(a1))
a4.d=i
v.hv(a5)
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
m.D(0,a2)
a0.q(0,m)
m.h(v)
m.D(0,a3)
a1.n(m)}else{a0.q(0,a1)
a0.D(0,0.5)
a1.h(a0)
a4.c=0}}}},
d3:{"^":"c;a,b,c,d,e"},
d5:{"^":"c;a,b,c,d"},
cg:{"^":"c;a,b",
u:function(a){return this.b}},
h3:{"^":"c;a,b,c,d,e",
eu:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.m(z,y,new V.dr(new E.b(x),0,0,new V.T(new Int8Array(4))))}},
M:function(a){var z,y,x,w,v,u,t
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
E:{
O:function(){var z,y
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.dr])
y=new Float64Array(2)
z=new V.h3(z,new E.b(y),new E.b(new Float64Array(2)),C.o,0)
z.eu()
return z}}},
dr:{"^":"c;a,b,c,d"},
cm:{"^":"c;a,b,c"},
dE:{"^":"c;a,b"},
ak:{"^":"co;c,a,b",
d1:function(a){var z,y,x
z=new E.b(new Float64Array(2))
y=new V.ak(z,C.i,0)
x=this.c.a
z.sj(0,x[0])
z.sk(0,x[1])
y.b=this.b
return y},
bE:function(){return 1},
by:function(a,b,c){var z,y,x,w,v,u,t,s
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
u.sj(0,t-this.b)
u.sk(0,s-this.b)
u=a.b
u.sj(0,t+this.b)
u.sk(0,s+this.b)},
d4:function(a,b){var z,y,x,w
z=this.b
a.a=b*3.141592653589793*z*z
z=a.b
y=this.c.a
z.sj(0,y[0])
z.sk(0,y[1])
z=a.a
x=this.b
w=y[0]
y=y[1]
a.c=z*(0.5*x*x+(w*w+y*y))}},
b_:{"^":"co;c,d,e,f,r,x,y,a,b"},
h6:{"^":"c;dn:a<,b,c"},
at:{"^":"co;c,d,e,f,r,x,y,z,Q,a,b",
ev:function(){var z,y
for(z=this.d,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
for(z=this.e,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
this.b=0.01},
d1:function(a){var z,y,x,w,v,u,t,s,r
z=V.ck()
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
dO:function(a,b){var z,y,x
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
bG:function(a,b,c,d){var z,y,x,w,v,u
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
x.G(d)
for(v=0;v<this.f;++v){if(v>=8)return H.a(z,v)
u=z[v]
G.z(w,u,u)
u=y[v]
G.aG(x,u,u)}},
bE:function(){return 1},
by:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
d4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.r
z.K()
y=this.x
y.K()
for(x=this.d,w=0;v=this.f,w<v;++w){if(w>=8)return H.a(x,w)
y.q(0,x[w])}y.D(0,1/v)
u=this.y
t=this.z
for(v=z.a,s=u.a,r=t.a,q=y.a,p=0,o=0,w=0;w<this.f;){if(w>=8)return H.a(x,w)
n=H.l(x[w],"$isb").a
s[1]=n[1]
s[0]=n[0]
u.n(y)
r[1]=q[1]
r[0]=q[0]
t.L();++w
if(w<this.f){if(w>=8)return H.a(x,w)
m=x[w]}else m=x[0]
t.q(0,m)
l=u.w(t)
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
z.D(0,1/p)
x=a.b
x.h(z)
x.q(0,y)
v=o*b
a.c=v
a.c=v+a.a*x.C(x)},
E:{
ck:function(){var z,y,x,w,v,u,t
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
z=new V.at(new E.b(z),y,x,0,new E.b(w),new E.b(v),new E.b(u),new E.b(t),new G.E(new E.b(new Float64Array(2)),new G.A(0,1)),C.j,0)
z.ev()
return z}}},
co:{"^":"c;"},
bK:{"^":"c;a,b",
u:function(a){return this.b}},
i_:{"^":"c;a,b,c,d,e"},
br:{"^":"c;a,b",
u:function(a){return this.b}},
i0:{"^":"c;a,b"},
i5:{"^":"c;a,b,c,d,e,f,r,x,y,z",
hn:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.dN=$.dN+1
a4.a=C.R
a4.b=a5.e
z=a5.a
y=a5.b
x=this.x
x.M(a5.c)
w=this.y
w.M(a5.d)
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
for(r=this.f,q=this.r,p=q.length,o=u+0.00125,n=u-0.00125,m=this.e,l=this.c,k=this.d,j=this.z.fy,i=0,h=0;!0;){x.aC(l,i)
w.aC(k,i)
s.c=l
s.d=k
j.fG(m,t,s)
g=m.c
if(g<=0){a4.a=C.ai
a4.b=0
break}if(g<o){a4.a=C.G
a4.b=i
break}r.h_(0,t,z,x,y,w,i)
e=v
d=0
while(!0){if(!!0){f=!1
break}c=r.fV(q,e)
if(c>o){a4.a=C.aj
a4.b=v
f=!0
break}if(c>n){i=e
f=!1
break}if(0>=p)return H.a(q,0)
g=q[0]
if(1>=p)return H.a(q,1)
b=r.ao(g,q[1],i)
if(b<n){a4.a=C.S
a4.b=i
f=!0
break}if(b<=o){a4.a=C.G
a4.b=i
f=!0
break}for(a=e,a0=i,a1=0;!0;){a2=(a1&1)===1?a0+(u-b)*(a-a0)/(c-b):0.5*(a0+a);++a1
$.dR=$.dR+1
a3=r.ao(q[0],q[1],a2)
if(Math.abs(a3-u)<0.00125){e=a2
break}if(a3>u){a0=a2
b=a3}else{a=a2
c=a3}if(a1===50)break}$.dQ=Math.max($.dQ,a1);++d
if(d===8||a1===50){f=!1
break}}++h
$.dO=$.dO+1
if(f)break
if(h===20){a4.a=C.S
a4.b=i
break}}$.dP=Math.max($.dP,h)}},
cn:{"^":"c;a,b",
u:function(a){return this.b}},
hP:{"^":"c;0a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go",
h_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
this.a=c
this.b=e
z=b.b
this.f=d
this.r=f
y=this.fr
d.aC(y,g)
x=this.fx
this.r.aC(x,g)
if(z===1){this.c=C.D
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
G.p(y,g,u)
g=this.Q
G.p(x,v,g)
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
if(J.aa(v,g[1])){this.c=C.F
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
p.U(-1,r)
r.Z()
G.j(x.b,r,s)
t.h(v)
t.q(0,m)
t.D(0,0.5)
G.p(x,t,q)
t=this.x
x=this.a
g=g[0]
x.toString
H.k(g)
t.h(C.a.i(x.a,g))
G.p(y,t,u)
p.h(u)
p.n(q)
l=p.C(s)
if(l<0){r.L()
l=-l}return l}else{this.c=C.E
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
p.U(-1,r)
r.Z()
G.j(y.b,r,s)
t.h(v)
t.q(0,m)
t.D(0,0.5)
G.p(y,t,u)
t=this.y
y=this.b
if(0>=o)return H.a(w,0)
w=w[0]
y.toString
H.k(w)
t.h(C.a.i(y.a,w))
G.p(x,t,q)
p.h(q)
p.n(u)
l=p.C(s)
if(l<0){r.L()
l=-l}return l}}},
fV:function(a,b){var z,y,x,w,v,u,t
H.i(a,"$isd",[P.w],"$asd")
z=this.fr
this.f.aC(z,b)
y=this.fx
this.r.aC(y,b)
switch(this.c){case C.D:x=this.e
w=this.fy
G.a6(z.b,x,w)
x.L()
v=this.go
G.a6(y.b,x,v)
x.L()
C.a.m(a,0,this.a.aW(w))
C.a.m(a,1,this.b.aW(v))
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
G.p(z,v,u)
v=this.Q
G.p(y,t,v)
v.n(u)
return v.C(x)
case C.E:x=this.cy
G.j(z.b,this.e,x)
w=this.z
G.p(z,this.d,w)
x.L()
z=this.go
G.a6(y.b,x,z)
x.L()
C.a.m(a,0,-1)
C.a.m(a,1,this.b.aW(z))
z=this.y
v=this.b
if(1>=a.length)return H.a(a,1)
u=a[1]
v.toString
H.k(u)
z.h(C.a.i(v.a,u))
u=this.Q
G.p(y,z,u)
u.n(w)
return u.C(x)
case C.F:x=this.cy
G.j(y.b,this.e,x)
w=this.Q
G.p(y,this.d,w)
x.L()
y=this.fy
G.a6(z.b,x,y)
x.L()
C.a.m(a,1,-1)
C.a.m(a,0,this.a.aW(y))
y=this.x
v=this.a
if(0>=a.length)return H.a(a,0)
u=a[0]
v.toString
H.k(u)
y.h(C.a.i(v.a,u))
u=this.z
G.p(z,y,u)
u.n(w)
return u.C(x)
default:C.a.m(a,0,-1)
C.a.m(a,1,-1)
return 0}},
ao:function(a,b,c){var z,y,x,w,v
H.k(a)
H.k(b)
z=this.fr
this.f.aC(z,c)
y=this.fx
this.r.aC(y,c)
switch(this.c){case C.D:x=this.x
x.h(C.a.i(this.a.a,a))
w=this.y
w.h(C.a.i(this.b.a,b))
v=this.z
G.p(z,x,v)
x=this.Q
G.p(y,w,x)
x.n(v)
return x.C(this.e)
case C.E:x=this.cy
G.j(z.b,this.e,x)
w=this.z
G.p(z,this.d,w)
z=this.y
z.h(C.a.i(this.b.a,b))
v=this.Q
G.p(y,z,v)
v.n(w)
return v.C(x)
case C.F:x=this.cy
G.j(y.b,this.e,x)
w=this.Q
G.p(y,this.d,w)
y=this.x
y.h(C.a.i(this.a.a,a))
v=this.z
G.p(z,y,v)
v.n(w)
return v.C(x)
default:return 0}}},
il:{"^":"c;a,b,c,d,e",
ex:function(){var z,y
for(z=this.b,y=0;y<2;++y)C.a.m(z,y,new E.b(new Float64Array(2)))},
fZ:function(a,b,c,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(z.c5(y)>14210854715202004e-30){w=y.a
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
E:{
im:function(){var z,y,x,w
z=new Float64Array(2)
y=new Array(2)
y.fixed$length=Array
y=H.f(y,[E.b])
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.il(new E.b(z),y,x,new E.b(w),new E.b(new Float64Array(2)))
z.ex()
return z}}},
aq:{"^":"c;a,b,W:c<,d,e,f,r,x,y,z,Q,0ch,0cx,0cy,db,0dx,0dy,fr,b3:fx<,fy,go,id,k1,k2,k3,0aA:k4<,r1,r2,rx",
d6:function(a){var z,y,x,w,v,u
z=this.Q
if((z.a&2)===2)return
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new V.df(0,0,0,0,new V.c9(1,65535,0),!1,new V.Q(new E.b(y),new E.b(x)),new V.Q(new E.b(w),new E.b(v)),new E.b(new Float64Array(2)))
u.fA(this,a)
if((this.b&32)===32)u.fE(z.b.a,this.d)
u.b=this.cy
this.cy=u;++this.db
u.c=this
if(u.a>0)this.hi()
z.a|=1
return u},
d7:function(a,b){var z=this.r1
z.a=a
z.e=b
return this.d6(z)},
c3:function(a){return this.d7(a,0)},
gaL:function(){return this.f.c},
gdn:function(){return this.fr},
hi:function(){var z,y,x,w,v,u,t,s,r,q
this.fr=0
this.fx=0
this.fy=0
this.go=0
z=this.f
y=z.a
y.K()
x=this.a
if(x===C.e||x===C.I){y=this.d.a
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
t.d.d4(u,r)
r=this.fr
q=u.a
this.fr=r+q
r=v.a
r[1]=s[1]
r[0]=s[0]
v.D(0,q)
w.q(0,v)
this.fy=this.fy+u.c}r=this.fr
if(r>0){r=1/r
this.fx=r
w.D(0,r)}else{this.fr=1
this.fx=1}r=this.fy
if(r>0&&(this.b&16)===0){r-=this.fr*w.C(w)
this.fy=r
this.go=1/r}else{this.fy=0
this.go=0}r=x.l()
q=z.c
r.h(q)
y.h(w)
z=z.b
G.p(this.d,y,z)
q.h(z)
v.h(q)
v.n(r)
v.U(this.x,r)
this.r.q(0,r)
x.b-=3},
ai:function(a){var z
if(a){z=this.b
if((z&2)===0){this.b=z|2
this.k3=0}}else{this.b&=4294967293
this.k3=0
this.r.K()
this.x=0
this.y.K()
this.z=0}},
cE:function(){var z,y,x,w,v,u,t
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
for(t=this.cy,y=this.Q,x=this.d;t!=null;t=t.b)t.ek(y.b.a,z,x)},
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
cw:function(a){var z,y
if(this.a!==C.f&&a.a!==C.f)return!1
for(z=this.dx;z!=null;z=z.d){y=z.a
if(y==null?a==null:y===a){z.b.y
return!1}}return!0},
aQ:function(a){var z,y,x,w,v
z=this.f
z.aQ(a)
y=z.c
y.h(z.b)
x=z.d
z.e=x
w=this.d
v=w.b
v.G(x)
w=w.a
G.j(v,z.a,w)
w.D(0,-1)
w.q(0,y)},
u:function(a){return"Body[pos: "+this.d.a.u(0)+" linVel: "+this.r.u(0)+" angVel: "+H.e(this.x)+"]"}},
c1:{"^":"c;a,0aA:b<,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},
c2:{"^":"c;a,b",
u:function(a){return this.b}},
fh:{"^":"c;0a,0b,c,0d,0e,f",
fk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
if((r==null?y==null:r===y)&&p===w&&(q==null?z==null:q===z)&&o===x)return}t=t.d}if(!u.cw(v))return
s=this.d.cz(z,y)
if(!s)return
n=this.f.ha(z,x,y,w)
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
v.ai(!0)
u.ai(!0);++this.c},
c4:function(a){var z,y,x,w,v,u,t,s,r,q
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
if(v){z.c.ai(!0)
y.c.ai(!0)}s=z.d.a
r=y.d.a
v=this.f.fy
u=s.a
if(u>=v.length)return H.a(v,u)
u=v[u]
v=r.a
if(v>=u.length)return H.a(u,v)
q=u[v].a
q.toString
H.q(a,H.ax(q,"a5",0))
v=q.a;(v&&C.a).m(v,--q.b,a);--this.c},
fq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.b
for(;z!=null;){y=z.f
x=z.r
w=z.x
v=z.y
u=y.c
t=x.c
if((z.a&8)===8){if(!t.cw(u)){s=z.c
this.c4(z)
z=s
continue}r=this.d.cz(y,x)
if(!r){s=z.c
this.c4(z)
z=s
continue}z.a&=4294967287}q=(u.b&2)===2&&u.a!==C.e
p=(t.b&2)===2&&t.a!==C.e
if(!q&&!p){z=z.c
continue}r=y.r
if(w>=r.length)return H.a(r,w)
o=r[w].gbj()
r=x.r
if(v>=r.length)return H.a(r,v)
n=r[v].gbj()
if(!this.a.hm(o,n)){s=z.c
this.c4(z)
z=s
continue}z.ci(this.e)
z=z.c}},
$isks:1},
aU:{"^":"S;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ay:function(a,b,c,d){this.bp(a,b,c,d)},
ao:function(a,b,c){var z=this.fr
H.o(this.f.d,"$isc5").dH(z,this.x)
this.dx.fr.d3(a,z,b,H.o(this.r.d,"$isak"),c)}},
aV:{"^":"S;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ay:function(a,b,c,d){this.bp(a,b,c,d)},
ao:function(a,b,c){var z,y,x
z=this.fr
H.o(this.f.d,"$isc5").dH(z,this.x)
y=this.dx.fr
x=H.o(this.r.d,"$isat")
y.k3.d2(a,z,b,x,c)}},
aW:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ao:function(a,b,c){this.dx.fr.fs(a,H.o(this.f.d,"$isak"),b,H.o(this.r.d,"$isak"),c)}},
S:{"^":"c;",
ay:["bp",function(a,b,c,d){var z,y
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
ci:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.dy
y=this.z
z.M(y)
x=this.a|=4
w=this.f
w.z
v=this.r
v.z
u=w.c
t=v.c
this.ao(y,u.d,t.d)
s=y.e>0
for(w=z.a,v=y.a,r=0;r<y.e;++r){if(r>=2)return H.a(v,r)
q=v[r]
q.b=0
q.c=0
p=q.d
for(o=0;o<z.e;++o){if(o>=2)return H.a(w,o)
n=w[o]
if(n.d.bm()===p.bm()){q.b=n.b
q.c=n.c
break}}}if(s!==((x&2)===2)){u.ai(!0)
t.ai(!0)}z=this.a
if(s)this.a=z|2
else this.a=z&4294967293
return}},
L:{"^":"c;0a,0b,0c,0d"},
bA:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,cx,cy,db",
em:function(){var z,y
for(z=this.a,y=0;y<2;++y)C.a.m(z,y,new E.b(new Float64Array(2)))},
E:{
d0:function(){var z,y,x,w
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[E.b])
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.bA(z,new E.b(y),new E.b(x),0,0,0,0,new E.b(w),new E.b(new Float64Array(2)),0,0,0,0,0)
z.em()
return z}}},
bB:{"^":"c;0a,b",
sd9:function(a){this.a=H.i(a,"$isa4",[V.S],"$asa4")}},
bD:{"^":"c;0a,0b,c,0d,0e",
sd5:function(a){this.b=H.i(a,"$isd",[V.S],"$asd")},
sbC:function(a){this.d=H.i(a,"$isd",[V.ao],"$asd")},
sbD:function(a){this.e=H.i(a,"$isd",[V.aI],"$asd")}},
fi:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q",
sbU:function(a){this.b=H.i(a,"$isd",[V.ao],"$asd")},
sbZ:function(a){this.c=H.i(a,"$isd",[V.aI],"$asd")},
scU:function(a){this.d=H.i(a,"$isd",[V.bA],"$asd")},
scY:function(a){this.e=H.i(a,"$isd",[V.bi],"$asd")},
sbN:function(a){this.f=H.i(a,"$isd",[V.S],"$asd")},
en:function(){var z,y
z=new Array(256)
z.fixed$length=Array
this.scU(H.f(z,[V.bA]))
z=new Array(256)
z.fixed$length=Array
this.scY(H.f(z,[V.bi]))
for(y=0;y<256;++y){z=this.d;(z&&C.a).m(z,y,V.d0())
z=this.e;(z&&C.a).m(z,y,V.d1())}},
di:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
this.a=a.a
z=a.c
this.r=z
y=this.d
x=y.length
if(x<z){z=new Array(Math.max(x*2,z))
z.fixed$length=Array
this.scU(H.f(z,[V.bA]))
z=this.d;(z&&C.a).aj(z,0,x,y,0)
for(;z=this.d,x<z.length;++x)(z&&C.a).m(z,x,V.d0())}z=this.e
x=z.length
y=this.r
if(x<y){y=new Array(Math.max(x*2,y))
y.fixed$length=Array
this.scY(H.f(y,[V.bi]))
y=this.e;(y&&C.a).aj(y,0,x,z,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).m(z,x,V.d1())}this.sbU(a.d)
this.sbZ(a.e)
this.sbN(a.b)
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
hu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
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
p=y[w].gA()
y=this.c
if(w>=y.length)return H.a(y,w)
o=y[w].gp()
y=this.c
if(v>=y.length)return H.a(y,v)
n=y[v].gA()
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
dk:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
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
a=k[i].gv()
k=this.b
if(i>=k.length)return H.a(k,i)
a0=k[i].gt()
k=this.c
if(i>=k.length)return H.a(k,i)
a1=k[i].gA()
k=this.c
if(i>=k.length)return H.a(k,i)
a2=k[i].gp()
k=this.b
if(h>=k.length)return H.a(k,h)
a3=k[h].gv()
k=this.b
if(h>=k.length)return H.a(k,h)
a4=k[h].gt()
k=this.c
if(h>=k.length)return H.a(k,h)
a5=k[h].gA()
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
z.fZ(0,j,x,m,v,l)
b1=o.b.a
b1[0]=r[0]
b1[1]=r[1]
b2=o.cy
for(k=-$.jJ,a7=a5.a,a8=-a6,b0=a1.a,b3=-a2,b4=g+f,b5=0;b5<b2;++b5){b6=o.a
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
k.bA()}else o.cy=1}}},
cB:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
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
p=y[w].gA()
y=this.c
if(w>=y.length)return H.a(y,w)
o=y[w].gp()
y=this.c
if(v>=y.length)return H.a(y,v)
n=y[v].gA()
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
ec:function(){var z,y,x,w,v,u
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
dX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
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
b=o[m].gv()
o=this.b
if(m>=o.length)return H.a(o,m)
a=o[m].gt()
o=this.b
if(l>=o.length)return H.a(o,l)
a0=o[l].gv()
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
t.dj(0,n,z,x,a4)
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
e4:function(c3,c4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
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
a0=o[m].gv()
o=this.b
if(m>=o.length)return H.a(o,m)
a1=o[m].gt()
o=this.b
if(l>=o.length)return H.a(o,l)
a2=o[l].gv()
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
t.dj(0,n,z,x,a6)
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
E:{
bC:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=V.im()
w=new Float64Array(2)
z=new V.fi(0,new G.E(new E.b(z),new G.A(0,1)),new G.E(new E.b(y),new G.A(0,1)),x,new V.hC(new E.b(w),new E.b(new Float64Array(2)),0))
z.en()
return z}}},
hC:{"^":"c;a,b,c",
dj:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
ea:{"^":"c;a,b,c,d,e,f,r"},
bi:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
eo:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.m(z,y,new V.ea(new E.b(x),new E.b(new Float64Array(2)),0,0,0,0,0))}},
E:{
d1:function(){var z,y,x
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.ea])
y=new Float64Array(2)
x=new Float64Array(4)
z=new V.bi(z,new E.b(y),new E.X(x),new E.X(new Float64Array(4)),0,0,0,0,0,0,0,0,0,0,0)
z.eo()
return z}}},
aY:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ay:function(a,b,c,d){this.bp(a,b,c,d)},
ao:function(a,b,c){this.dx.fr.d3(a,H.o(this.f.d,"$isb_"),b,H.o(this.r.d,"$isak"),c)}},
aZ:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ay:function(a,b,c,d){this.bp(a,b,c,d)},
ao:function(a,b,c){var z,y,x
z=this.dx.fr
y=H.o(this.f.d,"$isb_")
x=H.o(this.r.d,"$isat")
z.k3.d2(a,y,b,x,c)}},
b6:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ao:function(a,b,c){this.dx.fr.ft(a,H.o(this.f.d,"$isat"),b,H.o(this.r.d,"$isak"),c)}},
b7:{"^":"S;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
ao:function(a,b,c){this.dx.fr.fu(a,H.o(this.f.d,"$isat"),b,H.o(this.r.d,"$isat"),c)}},
ao:{"^":"c;v:a<,t:b<",
st:function(a){this.b=H.bg(a)}},
aI:{"^":"c;A:a<,p:b<",
sp:function(a){this.b=H.bg(a)}},
c9:{"^":"c;a,b,c"},
df:{"^":"c;a,0b,0c,0d,e,f,0r,x,y,z,0aA:Q<,ch,cx,cy",
scV:function(a){this.r=H.i(a,"$isd",[V.bj],"$asd")},
fA:function(a,b){var z,y,x,w,v,u
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
y=b.a.d1(0)
this.d=y
x=y.bE()
if(this.r==null){z=new Array(x)
z.fixed$length=Array
this.scV(H.f(z,[V.bj]))
for(w=0;w<x;++w){z=this.r
y=new Float64Array(2);(z&&C.a).m(z,w,new V.bj(new V.Q(new E.b(y),new E.b(new Float64Array(2))),0,0))
z=this.r
if(w>=z.length)return H.a(z,w)
z[w].sdg(null)
z=this.r
if(w>=z.length)return H.a(z,w)
z[w].sbj(-1)}}z=this.r
y=z.length
if(y<x){v=Math.max(y*2,x)
u=new Array(v)
u.fixed$length=Array
this.scV(H.f(u,[V.bj]))
u=this.r;(u&&C.a).aj(u,0,y,z,0)
for(w=0;w<v;++w){if(w>=y){z=this.r
u=new Float64Array(2);(z&&C.a).m(z,w,new V.bj(new V.Q(new E.b(u),new E.b(new Float64Array(2))),0,0))}z=this.r
if(w>=z.length)return H.a(z,w)
z[w].sdg(null)
z=this.r
if(w>=z.length)return H.a(z,w)
z[w].sbj(-1)}}this.x=0
this.a=b.e},
fE:function(a,b){var z,y,x,w,v,u,t,s,r
this.x=this.d.bE()
for(z=a.a,y=0;y<this.x;++y){x=this.r
if(y>=x.length)return H.a(x,y)
w=x[y]
x=this.d
v=w.a
x.by(v,b,y)
u=z.cJ()
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
z.cR(t);++a.b
a.d0(t)
w.d=t
w.b=this
w.c=y}},
ek:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.x===0)return
for(z=this.cy,y=c.a.a,x=b.a.a,w=z.a,v=a.a,u=this.ch,t=this.cx,s=u.a.a,r=u.b.a,q=0;q<this.x;++q){p=this.r
if(q>=p.length)return H.a(p,q)
o=p[q]
this.d.by(u,b,o.c)
this.d.by(t,c,o.c)
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
if(v.h8(n,p,z))a.d0(n)}}},
dg:{"^":"c;0a,0aA:b<,c,d,e,f,r"},
bj:{"^":"c;aP:a<,0b,c,bj:d<",
sdg:function(a){this.b=H.l(a,"$isdf")},
sbj:function(a){this.d=H.k(a)}},
di:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
seF:function(a){this.b=H.i(a,"$isd",[V.aq],"$asd")},
sbN:function(a){this.c=H.i(a,"$isd",[V.S],"$asd")},
seZ:function(a){this.d=H.i(a,"$isd",[V.M],"$asd")},
sbU:function(a){this.e=H.i(a,"$isd",[V.ao],"$asd")},
sbZ:function(a){this.f=H.i(a,"$isd",[V.aI],"$asd")},
ay:function(a,b,c,d){var z,y,x
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
this.seF(H.f(z,[V.aq]))}z=this.d
if(z==null||this.ch>z.length){z=new Array(this.ch)
z.fixed$length=Array
this.seZ(H.f(z,[V.M]))}z=this.c
if(z==null||this.Q>z.length){z=new Array(this.Q)
z.fixed$length=Array
this.sbN(H.f(z,[V.S]))}y=this.f
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.aI])}z=new Array(this.z)
z.fixed$length=Array
this.sbZ(H.f(z,[V.aI]))
z=this.f
x=y.length;(z&&C.a).aj(z,0,x,y,0)
for(;z=this.f,x<z.length;++x)(z&&C.a).m(z,x,new V.aI(new E.b(new Float64Array(2)),0))}y=this.e
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.ao])}z=new Array(this.z)
z.fixed$length=Array
this.sbU(H.f(z,[V.ao]))
z=this.e
x=y.length;(z&&C.a).aj(z,0,x,y,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).m(z,x,new V.ao(new E.b(new Float64Array(2)),0))}},
dQ:function(a1,a2,a3,a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
J.c_(w[x].gv(),q[0])
w=this.e
if(x>=w.length)return H.a(w,x)
J.c0(w[x].gv(),q[1])
w=this.e
if(x>=w.length)return H.a(w,x)
w[x].st(t)
w=this.f
if(x>=w.length)return H.a(w,x)
p=s.a
w[x].gA().a[0]=p[0]
w=this.f
if(x>=w.length)return H.a(w,x)
w[x].gA().a[1]=p[1]
p=this.f
if(x>=p.length)return H.a(p,x)
p[x].sp(r)}y=this.cy
y.a=a2
y.sbC(this.e)
y.sbD(this.f)
w=this.db
w.a=a2
w.sd5(this.c)
w.c=this.y
w.sbC(this.e)
w.sbD(this.f)
p=this.cx
p.di(w)
p.dk()
if(a2.f)p.hu()
for(x=0;x<this.x;++x){w=this.d
if(x>=w.length)return H.a(w,x)
w[x].ag(y)}for(x=0;x<a2.d;++x){for(k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.a(w,k)
w[k].ae(y)}p.cB()}p.ec()
for(x=0;x<this.r;++x){w=this.e
if(x>=w.length)return H.a(w,x)
j=w[x].gv()
w=this.e
if(x>=w.length)return H.a(w,x)
t=w[x].gt()
w=this.f
if(x>=w.length)return H.a(w,x)
s=w[x].gA()
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
break}d=p.dX()
for(c=!0,k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.a(w,k)
b=w[k].ad(y)
c=c&&b}if(d&&c){e=!0
break}++x}for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
a=y[x]
y=a.f
w=this.e
if(x>=w.length)return H.a(w,x)
o=y.c.a
o[0]=J.a1(w[x].gv())
w=this.e
if(x>=w.length)return H.a(w,x)
o[1]=J.a2(w[x].gv())
w=this.e
if(x>=w.length)return H.a(w,x)
y.e=w[x].gt()
w=a.r
y=this.f
if(x>=y.length)return H.a(y,x)
w=w.a
w[0]=y[x].gA().a[0]
y=this.f
if(x>=y.length)return H.a(y,x)
w[1]=y[x].gA().a[1]
y=this.f
if(x>=y.length)return H.a(y,x)
a.x=H.bg(y[x].gp())
a.b_()}this.dw(p.e)
if(a4){for(a0=17976931348623157e292,x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
v=y[x]
if(v.a===C.e)continue
if((v.b&4)!==0){y=v.x
if(!(y*y>0.0012184696791468343)){y=v.r
y=y.C(y)>0.0001}else y=!0}else y=!0
if(y){v.k3=0
a0=0}else{y=v.k3+=z
a0=Math.min(a0,y)}}if(a0>=0.5&&e)for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
y[x].ai(!1)}}},
e3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
y=y[z].gv()
x=this.b
if(z>=x.length)return H.a(x,z)
J.c_(y,x[z].f.c.a[0])
x=this.e
if(z>=x.length)return H.a(x,z)
x=x[z].gv()
y=this.b
if(z>=y.length)return H.a(y,z)
J.c0(x,y[z].f.c.a[1])
y=this.e
if(z>=y.length)return H.a(y,z)
y=y[z]
x=this.b
if(z>=x.length)return H.a(x,z)
y.st(x[z].f.e)
x=this.f
if(z>=x.length)return H.a(x,z)
x=x[z].gA()
y=this.b
if(z>=y.length)return H.a(y,z)
x.a[0]=y[z].r.a[0]
y=this.f
if(z>=y.length)return H.a(y,z)
y=y[z].gA()
x=this.b
if(z>=x.length)return H.a(x,z)
y.a[1]=x[z].r.a[1]
y=this.f
if(z>=y.length)return H.a(y,z)
y[z].sp(x[z].x)}y=this.dy
y.sd5(this.c)
y.c=this.y
y.a=a
y.sbC(this.e)
y.sbD(this.f)
x=this.dx
x.di(y)
for(z=0;z<a.e;++z)if(x.e4(b,c))break
y=this.b
if(b>=y.length)return H.a(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.a(w,b)
y.b.sj(0,J.a1(w[b].gv()))
w=this.b
if(b>=w.length)return H.a(w,b)
w=w[b].f
y=this.e
if(b>=y.length)return H.a(y,b)
w.b.sk(0,J.a2(y[b].gv()))
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
w.b.h(y[c].gv())
y=this.b
if(c>=y.length)return H.a(y,c)
y=y[c].f
w=this.e
if(c>=w.length)return H.a(w,c)
y.d=w[c].gt()
x.dk()
for(z=0;z<a.d;++z)x.cB()
v=a.a
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
u=y[z].gv()
y=this.e
if(z>=y.length)return H.a(y,z)
t=y[z].gt()
y=this.f
if(z>=y.length)return H.a(y,z)
s=y[z].gA()
y=this.f
if(z>=y.length)return H.a(y,z)
r=y[z].gp()
y=s.a
q=y[0]*v
p=y[1]*v
w=q*q+p*p
if(w>4)s.D(0,2/Math.sqrt(w))
o=v*r
if(o*o>2.4674011002723395)r*=1.5707963267948966/Math.abs(o)
w=u.a
w[0]=w[0]+y[0]*v
w[1]=w[1]+y[1]*v
t+=v*r
n=this.e
if(z>=n.length)return H.a(n,z)
J.c_(n[z].gv(),w[0])
n=this.e
if(z>=n.length)return H.a(n,z)
J.c0(n[z].gv(),w[1])
n=this.e
if(z>=n.length)return H.a(n,z)
n[z].st(t)
n=this.f
if(z>=n.length)return H.a(n,z)
n[z].gA().a[0]=y[0]
n=this.f
if(z>=n.length)return H.a(n,z)
n[z].gA().a[1]=y[1]
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
m.b_()}this.dw(x.e)},
dw:function(a){H.i(a,"$isd",[V.bi],"$asd")
return}},
fe:{"^":"M;ch,0cx,cy,0db,dx,0dy,0fr,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
sf4:function(a){this.db=H.i(a,"$isd",[E.b],"$asd")},
seR:function(a){this.fr=H.i(a,"$isd",[V.bE],"$asd")},
el:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
this.dy=a
if(b.x.length<=2)throw H.h("You cannot create a constant volume joint with less than three _bodies.")
z=this.ch
y=z.length
y=new Float64Array(y)
this.cx=y
for(x=0;y=y.length,x<y;++x,y=t){w=x===y-1?0:x+1
if(x>=z.length)return H.a(z,x)
y=z[x].gaL()
if(w>=z.length)return H.a(z,w)
v=z[w].gaL()
u=new Float64Array(2)
t=new E.b(u)
s=y.a
u[1]=s[1]
u[0]=s[0]
t.n(v)
r=Math.sqrt(t.gT())
t=this.cx
if(x>=t.length)return H.a(t,x)
t[x]=r}this.cy=this.dF()
y=new Float64Array(2)
v=new Float64Array(2)
q=new V.d4(new E.b(y),new E.b(v),1,0,0,!1)
q.a=C.A
u=new Array(z.length)
u.fixed$length=Array
this.seR(H.f(u,[V.bE]))
for(x=0;u=this.cx.length,x<u;++x){w=x===u-1?0:x+1
q.y=b.f
q.z=b.r
q.e=!1
u=z.length
if(x>=u)return H.a(z,x)
t=z[x]
if(w>=u)return H.a(z,w)
u=z[w]
p=t.gaL()
if(w>=z.length)return H.a(z,w)
o=z[w].gaL()
H.l(u,"$isaq")
q.c=t
q.d=u
u=new Float64Array(2)
G.dW(t.d,p,new E.b(u))
y[1]=u[1]
y[0]=u[0]
u=q.d
u.toString
t=new Float64Array(2)
G.dW(u.d,o,new E.b(t))
v[1]=t[1]
v[0]=t[0]
u=new Float64Array(2)
n=new E.b(u)
s=o.a
u[1]=s[1]
u[0]=s[0]
n.n(p)
q.x=Math.sqrt(n.gT())
p=this.fr;(p&&C.a).m(p,x,H.o(this.dy.d8(q),"$isbE"))}z=new Array(z.length)
z.fixed$length=Array
this.sf4(H.f(z,[E.b]))
for(x=0;z=this.db,x<z.length;++x)(z&&C.a).m(z,x,new E.b(new Float64Array(2)))},
dF:function(){var z,y,x,w,v,u,t
for(z=this.ch,y=0,x=0;w=z.length,x<w;++x){v=x===w-1?0:x+1
w=z[x].gaL().a[0]
if(v>=z.length)return H.a(z,v)
u=z[v].gaL().a[1]
if(v>=z.length)return H.a(z,v)
t=z[v].gaL().a[0]
if(x>=z.length)return H.a(z,x)
y+=w*u-t*z[x].gaL().a[1]}return y*0.5},
dL:function(a){var z,y,x,w,v,u,t,s,r
H.i(a,"$isd",[V.ao],"$asd")
for(z=this.ch,y=0,x=0;w=z.length,x<w;++x){v=x===w-1?0:x+1
w=z[x].gW()
u=a.length
if(w>=u)return H.a(a,w)
w=J.a1(a[w].gv())
if(v>=z.length)return H.a(z,v)
t=z[v].gW()
if(t>=u)return H.a(a,t)
t=J.a2(a[t].gv())
if(v>=z.length)return H.a(z,v)
s=z[v].gW()
if(s>=u)return H.a(a,s)
s=J.a1(a[s].gv())
if(x>=z.length)return H.a(z,x)
r=z[x].gW()
if(r>=u)return H.a(a,r)
y+=w*t-s*J.a2(a[r].gv())}return y*0.5},
eL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$isd",[V.ao],"$asd")
for(z=this.ch,y=0,x=0;w=z.length,x<w;++x){v=x===w-1?0:x+1
if(v>=w)return H.a(z,v)
w=z[v].gW()
u=a.length
if(w>=u)return H.a(a,w)
w=J.a1(a[w].gv())
if(x>=z.length)return H.a(z,x)
t=z[x].gW()
if(t>=u)return H.a(a,t)
s=w-J.a1(a[t].gv())
if(v>=z.length)return H.a(z,v)
t=z[v].gW()
if(t>=u)return H.a(a,t)
t=J.a2(a[t].gv())
if(x>=z.length)return H.a(z,x)
w=z[x].gW()
if(w>=u)return H.a(a,w)
r=t-J.a2(a[w].gv())
q=Math.sqrt(s*s+r*r)
if(q<11920928955078125e-23)q=1
w=this.db
if(x>=w.length)return H.a(w,x)
w[x].a[0]=r/q
w[x].a[1]=-s/q
y+=q}w=this.Q.a.l()
p=0.5*(this.cy-this.dL(a))/y
for(o=!0,x=0;u=z.length,x<u;++x){v=x===u-1?0:x+1
u=this.db
t=u.length
if(x>=t)return H.a(u,x)
n=u[x].a
m=n[0]
if(v>=t)return H.a(u,v)
u=u[v].a
t=u[0]
n=n[1]
u=u[1]
l=w.a
l[0]=p*(m+t)
l[1]=p*(n+u)
k=w.gT()
if(k>0.04000000000000001)w.D(0,0.2/Math.sqrt(k))
if(k>0.000025)o=!1
if(v>=z.length)return H.a(z,v)
u=z[v].gW()
t=a.length
if(u>=t)return H.a(a,u)
u=a[u].gv()
u.a[0]=u.gbY()[0]+l[0]
if(v>=z.length)return H.a(z,v)
u=z[v].gW()
if(u>=t)return H.a(a,u)
u=a[u].gv()
u.a[1]=u.gbY()[1]+l[1]}--this.Q.a.b
return o},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=a.c
y=a.b
x=this.ch
w=this.Q.cq(x.length)
for(v=J.W(w),u=0;t=x.length,u<t;++u){s=u===0?t-1:u-1
r=u===t-1?0:u+1
t=v.i(w,u)
if(r>=x.length)return H.a(x,r)
q=x[r].gW()
p=y.length
if(q>=p)return H.a(y,q)
t.h(y[q].gv())
q=v.i(w,u)
if(s<0||s>=x.length)return H.a(x,s)
t=x[s].gW()
if(t>=p)return H.a(y,t)
q.n(y[t].gv())}t=a.a
if(t.f){this.dx=this.dx*t.c
for(u=0;u<x.length;++u){t=x[u].gW()
q=z.length
if(t>=q)return H.a(z,t)
t=z[t].gA().a
p=t[0]
if(u>=x.length)return H.a(x,u)
o=x[u].gb3()
n=J.a2(v.i(w,u))
if(typeof n!=="number")return H.H(n)
t[0]=p+o*n*0.5*this.dx
if(u>=x.length)return H.a(x,u)
n=x[u].gW()
if(n>=q)return H.a(z,n)
n=z[n].gA().a
q=n[1]
if(u>=x.length)return H.a(x,u)
n[1]=q+x[u].gb3()*J.cN(J.a1(v.i(w,u)))*0.5*this.dx}}else this.dx=0},
ad:function(a){return this.eL(a.b)},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.c
y=a.b
x=this.ch
w=this.Q.cq(x.length)
for(v=J.W(w),u=0,t=0,s=0;r=x.length,s<r;++s){q=s===0?r-1:s-1
p=s===r-1?0:s+1
r=v.i(w,s)
if(p>=x.length)return H.a(x,p)
o=x[p].gW()
n=y.length
if(o>=n)return H.a(y,o)
r.h(y[o].gv())
o=v.i(w,s)
if(q<0||q>=x.length)return H.a(x,q)
r=x[q].gW()
if(r>=n)return H.a(y,r)
o.n(y[r].gv())
r=v.i(w,s).gT()
if(s>=x.length)return H.a(x,s)
t+=r/x[s].gdn()
if(s>=x.length)return H.a(x,s)
r=x[s].gW()
if(r>=z.length)return H.a(z,r)
u+=z[r].gA().w(v.i(w,s))}m=-2*u/t
this.dx+=m
for(s=0;s<x.length;++s){r=x[s].gW()
o=z.length
if(r>=o)return H.a(z,r)
r=z[r].gA().a
n=r[0]
if(s>=x.length)return H.a(x,s)
l=x[s].gb3()
k=J.a2(v.i(w,s))
if(typeof k!=="number")return H.H(k)
r[0]=n+l*k*0.5*m
if(s>=x.length)return H.a(x,s)
k=x[s].gW()
if(k>=o)return H.a(z,k)
k=z[k].gA().a
o=k[1]
if(s>=x.length)return H.a(x,s)
k[1]=o+x[s].gb3()*J.cN(J.a1(v.i(w,s)))*0.5*m}},
ab:function(a){},
ac:function(a){},
E:{
ff:function(a,b){var z=b.x
z=J.cb(z.slice(0),H.m(z,0))
z=new V.fe(z,0,0,b.a,!1,!1)
z.af(a.ch,b)
z.el(a,b)
return z}}},
cZ:{"^":"dl;f,r,x,0y,0a,0b,0c,0d,e"},
bE:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){G.z(this.f.d,this.db,a)},
ac:function(a){G.z(this.r.d,this.dx,a)},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
v=w[x].gv()
x=a.b
w=this.fy
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.fy
if(x>=w.length)return H.a(w,x)
t=w[x].gA()
x=a.c
w=this.fy
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.go
if(x>=w.length)return H.a(w,x)
r=w[x].gv()
x=a.b
w=this.go
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.go
if(x>=w.length)return H.a(w,x)
p=w[x].gA()
x=a.c
w=this.go
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
w.G(u)
x.G(q)
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
m=Math.sqrt(n.gT())
if(m>0.005){x=n.a
w=1/m
n.sj(0,x[0]*w)
n.sk(0,x[1]*w)}else n.J(0,0)
l=y.w(n)
k=z.w(n)
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
x.D(0,this.fr)
n=t.a
w=n[0]
i=this.r1
e=x.a
t.sj(0,w-i*e[0])
t.sk(0,n[1]-this.r1*e[1])
s-=this.rx*y.w(x)
y=p.a
p.sj(0,y[0]+this.r2*e[0])
p.sk(0,y[1]+this.r2*e[1])
o+=this.ry*z.w(x);--this.Q.a.b}else this.fr=0
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
z[y].sp(s)
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
y[z].sp(o)},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.k1
t.U(w,z)
z.q(0,x)
s=this.k2
s.U(u,y)
y.q(0,v)
r=this.id
y.n(z)
q=r.C(y)
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
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(this.ch>0)return!0
z=this.Q.f.l()
y=this.Q.f.l()
x=this.Q.a.l()
w=this.Q.a.l()
v=this.Q.a.l()
u=a.b
t=this.fy
if(t>=u.length)return H.a(u,t)
s=u[t].gv()
t=a.b
u=this.fy
if(u>=t.length)return H.a(t,u)
r=t[u].gt()
u=a.b
t=this.go
if(t>=u.length)return H.a(u,t)
q=u[t].gv()
t=a.b
u=this.go
if(u>=t.length)return H.a(t,u)
p=t[u].gt()
z.G(r)
y.G(p)
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
d4:{"^":"dl;f,r,H:x>,y,z,0a,0b,0c,0d,e"},
fH:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){G.z(this.f.d,this.ch,a)},
ac:function(a){G.z(this.r.d,this.cx,a)},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
u=x[w].gA()
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
r=w[x].gA()
x=a.c
w=this.fx
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.a.l()
x=this.Q.f.l()
p=this.Q.f.l()
x.G(v)
p.G(s)
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
p.bc(x+m*j*j+l*h*h,f,f,x+m*k*k+g*i)
i=this.r2
i.h(p)
i.bA()
i=m+l
this.rx=i
if(i>0)this.rx=1/i
x=a.a
p=this.cy
if(x.f){p.D(0,x.c)
this.db=this.db*a.a.c
x=this.Q.a.l()
x.h(p)
w.h(x)
w.D(0,o)
u.n(w)
t-=m*(y.w(x)+this.db)
w.h(x)
w.D(0,n)
r.q(0,w)
q+=l*(z.w(x)+this.db);--this.Q.a.b}else{p.K()
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.fr
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fx
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
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
l.U(w,y)
k=this.go
k.U(u,z)
z.q(0,v)
z.n(x)
z.n(y)
j=this.Q.a.l()
this.r2.cg(z,j)
j.L()
z=this.Q.a.l()
i=this.cy
z.h(i)
i.q(0,j)
n=p*this.dx
if(i.gT()>n*n){i.Z()
i.D(0,n)}j.h(i)
j.n(z)
y.h(j)
y.D(0,t)
x.n(y)
w-=r*l.w(j)
y.h(j)
y.D(0,s)
v.q(0,y)
z=k.w(j)
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
ad:function(a){return!0}},
fJ:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,P,R,N,V,S,a_,a3,a9,aa,ap,aG,aw,ax,a4,al,am,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){G.z(this.f.d,this.fr,a)},
ac:function(a){G.z(this.r.d,this.fx,a)},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
this.rx=this.f.c
this.ry=this.r.c
z=this.dx
this.x1=z.gW()
y=this.dy
this.x2=y.gW()
x=this.y1
x.h(this.f.f.a)
w=this.y2
w.h(this.r.f.a)
v=this.a2
v.h(z.gaO().gh5())
u=this.P
u.h(y.gaO().gh5())
this.R=this.f.fx
this.N=this.r.fx
this.V=z.gb3()
this.S=y.gb3()
this.a_=this.f.go
this.a3=this.r.go
this.a9=z.geY()
this.aa=y.geY()
y=a.b
z=this.rx
if(z>=y.length)return H.a(y,z)
t=y[z].gt()
z=a.c
y=this.rx
if(y>=z.length)return H.a(z,y)
s=z[y].gA()
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
p=y[z].gA()
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
m=z[y].gA()
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
j=y[z].gA()
z=a.c
y=this.x2
if(y>=z.length)return H.a(z,y)
i=z[y].gp()
y=this.Q.f.l()
z=this.Q.f.l()
h=this.Q.f.l()
g=this.Q.f.l()
y.G(t)
z.G(q)
h.G(n)
g.G(k)
this.am=0
f=this.Q.a.l()
e=this.Q.a.l()
d=this.Q.a.l()
c=this.ap
G.j(h,this.id,c)
f.h(this.fy)
f.n(v)
G.j(h,f,e)
f.h(this.fr)
f.n(x)
G.j(y,f,d)
this.a4=e.w(c)
c=d.w(c)
this.aw=c
d=this.am
e=this.V
y=this.R
x=this.a9
h=this.a4
this.am=d+(e+y+x*h*h+this.a_*c*c)
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
f=this.aG
f.h(y)
f.D(0,this.r1)
this.al=this.r1*x.w(y)
y=this.r1*v.w(y)
this.ax=y
v=this.am
x=this.r1
f=this.S
z=this.N
w=this.aa
g=this.al
this.am=v+(x*x*(f+z)+w*g*g+this.a3*y*y)
this.Q.a.b-=3
z=this.am
this.am=z>0?1/z:0
if(a.a.f){z=s.a
y=this.ap.a
s.sj(0,z[0]+this.R*this.r2*y[0])
s.sk(0,z[1]+this.R*this.r2*y[1])
z=this.a_
x=this.r2
r+=z*x*this.aw
z=p.a
w=this.aG.a
p.sj(0,z[0]+this.N*x*w[0])
p.sk(0,z[1]+this.N*this.r2*w[1])
z=this.a3
x=this.r2
o+=z*x*this.ax
z=m.a
m.sj(0,z[0]-this.V*x*y[0])
m.sk(0,z[1]-this.V*this.r2*y[1])
y=this.a9
z=this.r2
l-=y*z*this.a4
y=j.a
j.sj(0,y[0]-this.S*z*w[0])
j.sk(0,y[1]-this.S*this.r2*w[1])
i-=this.aa*this.r2*this.al}else this.r2=0
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.c
y=this.rx
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.rx
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.ry
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
y=a.c
z=this.ry
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=a.c
y=this.x1
if(y>=z.length)return H.a(z,y)
t=z[y].gA()
y=a.c
z=this.x1
if(z>=y.length)return H.a(y,z)
s=y[z].gp()
z=a.c
y=this.x2
if(y>=z.length)return H.a(z,y)
r=z[y].gA()
y=a.c
z=this.x2
if(z>=y.length)return H.a(y,z)
q=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
p=this.ap
z.h(x)
z.n(t)
z=p.C(z)
o=this.aG
y.h(v)
y.n(r)
y=o.C(y)
n=this.aw
m=this.a4
l=this.ax
k=this.al
this.Q.a.b-=2
j=-this.am*(z+y+(n*w-m*s+(l*u-k*q)))
this.r2+=j
k=x.a
p=p.a
x.sj(0,k[0]+this.R*j*p[0])
x.sk(0,k[1]+this.R*j*p[1])
k=this.a_
l=this.aw
m=v.a
o=o.a
v.sj(0,m[0]+this.N*j*o[0])
v.sk(0,m[1]+this.N*j*o[1])
m=this.a3
n=this.ax
y=t.a
t.sj(0,y[0]-this.V*j*p[0])
t.sk(0,y[1]-this.V*j*p[1])
p=this.a9
y=this.a4
z=r.a
r.sj(0,z[0]-this.S*j*o[0])
r.sk(0,z[1]-this.S*j*o[1])
o=this.aa
z=this.al
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
ad:function(a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=a4.b
y=this.rx
if(y>=z.length)return H.a(z,y)
x=z[y].gv()
y=a4.b
z=this.rx
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a4.b
y=this.ry
if(y>=z.length)return H.a(z,y)
v=z[y].gv()
y=a4.b
z=this.ry
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=a4.b
y=this.x1
if(y>=z.length)return H.a(z,y)
t=z[y].gv()
y=a4.b
z=this.x1
if(z>=y.length)return H.a(y,z)
s=y[z].gt()
z=a4.b
y=this.x2
if(y>=z.length)return H.a(z,y)
r=z[y].gv()
y=a4.b
z=this.x2
if(z>=y.length)return H.a(y,z)
q=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
p=this.Q.f.l()
o=this.Q.f.l()
z.G(w)
y.G(u)
p.G(s)
o.G(q)
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
d=k.w(m)
c=j.w(m)
b=0+(this.V+this.R+this.a9*d*d+this.a_*c*c)
i.h(f)
i.n(e)
n.h(j)
n.q(0,x)
n.n(t)
G.a6(p,n,h)
h.n(i)
a=h.C(g)
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
l.D(0,this.r1)
a0=p.w(z)
a1=k.w(z)
z=this.r1
b+=z*z*(this.S+this.N)+this.aa*a0*a0+this.a3*a1*a1
j.h(g)
j.n(f)
n.h(k)
n.q(0,v)
n.n(r)
G.a6(o,n,i)
i.n(j)
a2=i.C(h)
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
o=this.N
l=l.a
v.sj(0,y+o*a3*l[0])
v.sk(0,p[1]+this.N*a3*l[1])
p=this.a3
o=t.a
t.sj(0,o[0]-this.V*a3*m[0])
t.sk(0,o[1]-this.V*a3*m[1])
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
af:function(a,b){this.Q=a
this.b=null
this.c=null
this.f=b.c
this.r=b.d
this.y=!1
this.x=!1
this.z=b.b
this.d=new V.dm()
this.e=new V.dm()}},
dl:{"^":"c;0aA:b<"},
dm:{"^":"c;0a,0b,0c,0d"},
U:{"^":"c;a,b",
u:function(a){return this.b}},
dn:{"^":"c;a,b",
u:function(a){return this.b}},
h9:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){a.h(this.f.d.a)},
ac:function(a){a.h(this.r.d.a)},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
v=w[x].gv()
x=a.b
w=this.fx
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.fx
if(x>=w.length)return H.a(w,x)
t=w[x].gA()
x=a.c
w=this.fx
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.fy
if(x>=w.length)return H.a(w,x)
r=w[x].gv()
x=a.b
w=this.fy
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.fy
if(x>=w.length)return H.a(w,x)
p=w[x].gA()
x=a.c
w=this.fy
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
m=this.Q.c.l()
w.G(u)
x.G(q)
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
m.bc(z+i*x*x+h*g*g,c,c,z+i*f*f+d*e)
e=this.x1
e.h(m)
e.bA()
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=a.c
y=this.fx
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.fx
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
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
this.x1.cg(n,z)
z.L()
n=this.Q.a.l()
g=this.cy
n.h(g)
g.q(0,z)
k=p*this.dx
if(g.gT()>k*k){g.Z()
g.D(0,k)}g=g.a
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
ad:function(a){return!0}},
ha:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){a.h(this.cx)},
ac:function(a){G.z(this.r.d,this.ch,a)},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
w=z[x].gv()
x=a.b
z=this.fy
if(z>=x.length)return H.a(x,z)
v=x[z].gt()
z=a.c
x=this.fy
if(x>=z.length)return H.a(z,x)
u=z[x].gA()
x=a.c
z=this.fy
if(z>=x.length)return H.a(x,z)
t=x[z].gp()
z=this.Q.f.l()
z.G(v)
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
x.bc(z+p*n*n+m,l,l,z+p*o*o+m)
m=this.k3
m.h(x)
m.bA()
m=this.k4
m.h(w)
m.q(0,y)
m.n(this.cx)
m.D(0,this.dx)
t*=0.98
z=a.a
x=this.dy
if(z.f){x.D(0,z.c)
z=u.a
p=x.a
u.sj(0,z[0]+this.k1*p[0])
u.sk(0,z[1]+this.k1*p[1])
t+=this.k2*y.w(x)}else x.K()
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
z[y].sp(t)
y=this.Q;--y.a.b;--y.c.b;--y.f.b},
ad:function(a){return!0},
ae:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=this.Q.a.l()
y=this.go
y.U(w,z)
z.q(0,x)
v=this.Q.a.l()
u=this.Q.a.l()
t=this.dy
u.h(t)
u.D(0,this.fx)
u.q(0,this.k4)
u.q(0,z)
u.L()
this.k3.cg(u,v)
u.h(t)
t.q(0,v)
s=a.a.a*this.fr
if(t.gT()>s*s)t.D(0,s/Math.sqrt(t.gT()))
v.h(t)
v.n(u)
z=x.a
u=z[0]
t=this.k1
r=v.a
x.sj(0,u+t*r[0])
x.sk(0,z[1]+this.k1*r[1])
r=this.k2
v=y.w(v)
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
y[z].sp(w+r*v)
this.Q.a.b-=3}},
hF:{"^":"M;ch,cx,cy,db,0dx,dy,fr,fx,fy,go,id,k1,k2,0k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,P,R,N,V,S,a_,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){G.z(this.f.d,this.ch,a)},
ac:function(a){G.z(this.r.d,this.cx,a)},
ag:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
v=w[x].gv()
x=a2.b
w=this.k4
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a2.c
x=this.k4
if(x>=w.length)return H.a(w,x)
t=w[x].gA()
x=a2.c
w=this.k4
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a2.b
x=this.r1
if(x>=w.length)return H.a(w,x)
r=w[x].gv()
x=a2.b
w=this.r1
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a2.c
x=this.r1
if(x>=w.length)return H.a(w,x)
p=w[x].gA()
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
w.G(u)
x.G(q)
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
this.N=m.w(x)
z=k.w(x)
this.V=z
y=j+i
f=this.N
z=y+h*f*f+g*z*z
this.a_=z
if(z>0)this.a_=1/z
z=this.a2
G.j(w,this.db,z)
m.h(n)
m.q(0,l)
this.P=m.w(z)
k=k.w(z)
this.R=k
l=this.P
n=h*l
w=g*k
e=n+w
f=this.N
d=this.V
c=n*f+w*d
b=h+g
if(b===0)b=1
a=h*f
a0=g*d
a1=a+a0
this.S.aY(y+n*l+w*k,e,c,e,b,a1,c,a1,y+a*f+a0*d)
this.k3=C.n
y=this.dy
y.sbk(0,0)
this.fr=0
w=a2.a
if(w.f){y.D(0,w.c)
this.fr=this.fr*a2.a.c
w=this.Q.a.l()
m.h(x)
y=y.a
m.D(0,this.fr+y[2])
w.h(z)
w.D(0,y[0])
w.q(0,m)
m=y[0]
z=this.P
x=y[1]
y=this.fr+y[2]
n=this.N
l=this.R
k=this.V
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=a.c
y=this.k4
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.k4
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.r1
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
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
y.sj(0,p.C(z)+this.R*u-this.P*w)
y.sk(0,u-w)
z=this.dy
o=this.Q.a.l()
y.L()
E.ci(this.S,o,y)
y.L()
y=z.a
n=y[0]
o=o.a
z.sj(0,n+o[0])
z.sk(0,y[1]+o[1])
y=this.Q.a.l()
y.h(p)
y.D(0,o[0])
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
ad:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
n=p[o].gv()
o=a2.b
p=this.k4
if(p>=o.length)return H.a(o,p)
m=o[p].gt()
p=a2.b
o=this.r1
if(o>=p.length)return H.a(p,o)
l=p[o].gv()
o=a2.b
p=this.r1
if(p>=o.length)return H.a(o,p)
k=o[p].gt()
z.G(m)
y.G(k)
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
f=s.w(u)
e=w.w(u)
G.j(z,this.db,t)
s.h(v)
s.q(0,x)
d=s.w(t)
c=w.w(t)
r.sj(0,t.C(v))
r.sk(0,C.b.I(k-m,this.dx))
v=r.a
w=v[0]
v=v[1]
z=g*c
y=h*d
b=h+g
a=y+z
if(b===0)b=1
x=this.Q.c.l()
x.bc(j+i+y*d+z*c,a,a,b)
r.L()
E.du(x,s,r)
r.L()
s=s.a
q.sj(0,s[0])
q.sk(0,s[1])
q.sbk(0,0);--this.Q.c.b
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
dB:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){G.z(this.f.d,this.dx,a)},
ac:function(a){G.z(this.r.d,this.dy,a)},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
v=w[x].gv()
x=a.b
w=this.go
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.go
if(x>=w.length)return H.a(w,x)
t=w[x].gA()
x=a.c
w=this.go
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.id
if(x>=w.length)return H.a(w,x)
r=w[x].gv()
x=a.b
w=this.id
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.id
if(x>=w.length)return H.a(w,x)
p=w[x].gA()
x=a.c
w=this.id
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
w.G(u)
x.G(q)
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
m=Math.sqrt(n.gT())
l=Math.sqrt(x.gT())
if(m>0.05)n.D(0,1/m)
else n.K()
if(l>0.05)x.D(0,1/l)
else x.K()
k=y.w(n)
j=z.w(x)
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
w.D(0,-this.fy)
i.h(x)
i.D(0,-this.fx*this.fy)
x=t.a
n=x[0]
h=this.rx
g=w.a
t.sj(0,n+h*g[0])
t.sk(0,x[1]+this.rx*g[1])
s+=this.x1*y.w(w)
w=p.a
y=w[0]
g=this.ry
x=i.a
p.sj(0,y+g*x[0])
p.sk(0,w[1]+this.ry*x[1])
o+=this.x2*z.w(i)
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.id
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
y=a.c
z=this.id
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.k3
r.U(w,z)
z.q(0,x)
q=this.k4
q.U(u,y)
y.q(0,v)
p=this.k1
z=p.C(z)
o=this.fx
n=this.k2
y=n.C(y)
m=-this.y1*(-z-o*y)
this.fy+=m
t.h(p)
t.D(0,-m)
s.h(n)
s.D(0,-this.fx*m)
n=x.a
p=n[0]
y=this.rx
o=t.a
x.sj(0,p+y*o[0])
x.sk(0,n[1]+this.rx*o[1])
o=this.x1
t=r.w(t)
r=v.a
n=r[0]
y=this.ry
p=s.a
v.sj(0,n+y*p[0])
v.sk(0,r[1]+this.ry*p[1])
p=this.x2
s=q.w(s)
q=a.c
r=this.go
if(r>=q.length)return H.a(q,r)
q[r].sp(w+o*t)
t=a.c
o=this.id
if(o>=t.length)return H.a(t,o)
t[o].sp(u+p*s)
this.Q.a.b-=4},
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
o=q[p].gv()
p=a.b
q=this.go
if(q>=p.length)return H.a(p,q)
n=p[q].gt()
q=a.b
p=this.id
if(p>=q.length)return H.a(q,p)
m=q[p].gv()
p=a.b
q=this.id
if(q>=p.length)return H.a(p,q)
l=p[q].gt()
z.G(n)
y.G(l)
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
k=Math.sqrt(v.gT())
j=Math.sqrt(u.gT())
if(k>0.05)v.D(0,1/k)
else v.K()
if(j>0.05)u.D(0,1/j)
else u.K()
i=x.w(v)
h=w.w(u)
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
s.D(0,-e)
r.h(u)
r.D(0,-this.fx*e)
z=o.a
y=z[0]
v=this.rx
u=s.a
o.sj(0,y+v*u[0])
o.sk(0,z[1]+this.rx*u[1])
u=this.x1
s=x.w(s)
x=m.a
z=x[0]
v=this.ry
y=r.a
m.sj(0,z+v*y[0])
m.sk(0,x[1]+this.ry*y[1])
y=this.x2
r=w.w(r)
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
hL:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
u=x[w].gA()
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
r=w[x].gA()
x=a.c
w=this.k2
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
p=this.Q.a.l()
w.G(v)
x.G(s)
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
t-=m*(y.w(w)+this.db+p[2])
y=r.a
r.sj(0,y[0]+n*j[0])
r.sk(0,y[1]+n*j[1])
q+=l*(z.w(w)+this.db+p[2]);--this.Q.a.b}else{x.K()
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=a.c
y=this.k1
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.k1
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.k2
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
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
p.U(w,z)
y.U(u,o)
o.q(0,v)
o.n(x)
o.n(z)
o.L()
E.ci(this.y1,n,o)
o=this.cy
z=o.a
m=z[0]
l=n.a
o.sj(0,m+l[0])
o.sk(0,z[1]+l[1])
z=x.a
x.sj(0,z[0]-t*l[0])
x.sk(0,z[1]-t*l[1])
w-=r*p.w(n)
p=v.a
v.sj(0,p[0]+s*l[0])
v.sk(0,p[1]+s*l[1])
u+=q*y.w(n)
this.Q.a.b-=2
z=a.c
y=this.k1
if(y>=z.length)return H.a(z,y)
z[y].sp(w)
y=a.c
z=this.k2
if(z>=y.length)return H.a(y,z)
y[z].sp(u);--this.Q.a.b},
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.Q.f.l()
y=this.Q.f.l()
x=a.b
w=this.k1
if(w>=x.length)return H.a(x,w)
v=x[w].gv()
w=a.b
x=this.k1
if(x>=w.length)return H.a(w,x)
u=w[x].gt()
x=a.b
w=this.k2
if(w>=x.length)return H.a(x,w)
t=x[w].gv()
w=a.b
x=this.k2
if(x>=w.length)return H.a(w,x)
s=w[x].gt()
z.G(u)
y.G(s)
z.G(u)
y.G(s)
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
p=Math.sqrt(r.gT())
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
y.bc(z+m*j*j+l*h*h,f,f,z+m*k*k+g*i)
E.du(y,q,r)
q.L()
r=v.a
y=r[0]
i=q.a
v.sj(0,y-o*i[0])
v.sk(0,r[1]-o*i[1])
x=x.w(q)
r=t.a
t.sj(0,r[0]+n*i[0])
t.sk(0,r[1]+n*i[1])
q=w.w(q)
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
ab:function(a){G.z(this.f.d,this.ch,a)},
ac:function(a){G.z(this.r.d,this.cx,a)}},
hM:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
v=w[x].gv()
x=a.b
w=this.dy
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.dy
if(x>=w.length)return H.a(w,x)
t=w[x].gA()
x=a.c
w=this.dy
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.fr
if(x>=w.length)return H.a(w,x)
r=w[x].gv()
x=a.b
w=this.fr
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.fr
if(x>=w.length)return H.a(w,x)
p=w[x].gA()
x=a.c
w=this.fr
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
w.G(u)
x.G(q)
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
x=Math.sqrt(n.gT())
this.db=x
if(x-this.cy>0)this.rx=C.ad
else this.rx=C.n
if(x>0.005)n.D(0,1/x)
else{n.K()
this.r2=0
this.dx=0
z=this.Q
z.f.b-=2;--z.a.b
return}m=y.w(n)
l=z.w(n)
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.dy
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.dy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
y=a.c
z=this.fr
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.Q.a.l()
s=this.fy
s.U(w,z)
z.q(0,x)
r=this.go
r.U(u,y)
y.q(0,v)
q=this.db-this.cy
p=this.fx
t.h(y)
t.n(z)
o=p.C(t)
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
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.b
y=this.dy
if(y>=z.length)return H.a(z,y)
x=z[y].gv()
y=a.b
z=this.dy
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.fr
if(y>=z.length)return H.a(z,y)
v=z[y].gv()
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
z.G(w)
y.G(u)
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
ab:function(a){G.z(this.f.d,this.ch,a)},
ac:function(a){G.z(this.r.d,this.cx,a)}},
ig:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){G.z(this.f.d,this.db,a)},
ac:function(a){G.z(this.r.d,this.dx,a)},
ag:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
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
u=x[w].gA()
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
r=w[x].gA()
x=a9.c
w=this.go
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
p=this.Q.a.l()
w.G(v)
x.G(s)
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
x.D(0,a9.a.c)
x=x.a
w.J(x[0],x[1])
p=u.a
k=p[0]
j=w.a
u.sj(0,k-o*j[0])
u.sk(0,p[1]-o*j[1])
t-=m*(y.w(w)+x[2])
y=r.a
r.sj(0,y[0]+n*j[0])
r.sk(0,y[1]+n*j[1])
q+=l*(z.w(w)+x[2]);--this.Q.a.b}else x.K()
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
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
m.sbk(0,d+c)
w-=r*c
u+=q*c
j.U(u,z)
l.U(w,p)
z.q(0,v)
z.n(x)
z.n(p)
p=i[1]
z=z.a
y.sk(0,p*z[0]+i[4]*z[1])
y.sj(0,i[0]*z[0]+i[3]*z[1])
y.L()
z=e[0]
i=y.a
m.sj(0,z+i[0])
m.sk(0,e[1]+i[1])
x.sj(0,n[0]-t*i[0])
x.sk(0,n[1]-t*i[1])
w-=r*l.w(y)
v.sj(0,o[0]+s*i[0])
v.sk(0,o[1]+s*i[1])
u+=q*j.w(y)}else{l.U(w,p)
j.U(u,z)
z.q(0,v)
z.n(x)
z.n(p)
p=this.Q.b.l()
z=z.a
p.cv(z[0],z[1],k)
k=this.Q.b.l()
p=p.a
k.sj(0,p[0]*i[0]+p[1]*i[3]+p[2]*i[6])
k.sk(0,p[0]*i[1]+p[1]*i[4]+p[2]*i[7])
k.sbk(0,p[0]*i[2]+p[1]*i[5]+p[2]*i[8])
k.L()
m.q(0,k)
k=k.a
y.J(k[0],k[1])
m=n[0]
i=y.a
x.sj(0,m-t*i[0])
x.sk(0,n[1]-t*i[1])
w-=r*(l.w(y)+k[2])
v.sj(0,o[0]+s*i[0])
v.sk(0,o[1]+s*i[1])
u+=q*(j.w(y)+k[2])
this.Q.b.b-=2}z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
z[y].sp(w)
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
y[z].sp(u)
this.Q.a.b-=3},
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=a.b
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gv()
y=a.b
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gv()
y=a.b
z=this.go
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.Q.a.l()
z.G(w)
y.G(u)
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
f=Math.sqrt(y.gT())
E.ci(t,z,y)
z.L()
y=m[0]
t=z.a
x.sj(0,y-q*t[0])
x.sk(0,m[1]-q*t[1])
w-=o*s.w(z)
v.sj(0,l[0]+p*t[0])
v.sk(0,l[1]+p*t[1])
u+=n*r.w(z)
e=0}else{y.h(v)
y.q(0,r)
y.n(x)
y.n(s)
d=u-w-this.dy
f=Math.sqrt(y.gT())
e=Math.abs(d)
k=this.Q.b.l()
j=this.Q.b.l()
y=y.a
k.cv(y[0],y[1],d)
E.h7(t,j,k)
j.L()
j=j.a
z.J(j[0],j[1])
k=m[0]
t=z.a
x.sj(0,k-q*t[0])
x.sk(0,m[1]-q*t[1])
w-=o*(s.w(z)+j[2])
v.sj(0,l[0]+p*t[0])
v.sk(0,l[1]+p*t[1])
u+=n*(r.w(z)+j[2])
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
ih:{"^":"M;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,P,R,N,V,S,a_,a3,a9,aa,ap,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ab:function(a){G.z(this.f.d,this.cy,a)},
ac:function(a){G.z(this.r.d,this.db,a)},
ag:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
r=t[s].gv()
s=a.b
t=this.k2
if(t>=s.length)return H.a(s,t)
q=s[t].gt()
t=a.c
s=this.k2
if(s>=t.length)return H.a(t,s)
p=t[s].gA()
s=a.c
t=this.k2
if(t>=s.length)return H.a(s,t)
o=s[t].gp()
t=a.b
s=this.k3
if(s>=t.length)return H.a(t,s)
n=t[s].gv()
s=a.b
t=this.k3
if(t>=s.length)return H.a(s,t)
m=s[t].gt()
t=a.c
s=this.k3
if(s>=t.length)return H.a(t,s)
l=t[s].gA()
s=a.c
t=this.k3
if(t>=s.length)return H.a(s,t)
k=s[t].gp()
t=this.Q.f.l()
s=this.Q.f.l()
j=this.Q.a.l()
t.G(q)
s.G(m)
j.h(this.cy)
j.n(y)
y=this.a9
G.j(t,j,y)
j.h(this.db)
j.n(z)
z=this.aa
G.j(s,j,z)
s=this.ap
s.h(n)
s.q(0,z)
s.n(r)
s.n(y)
i=this.y1
G.aG(t,this.dy,i)
j.h(s)
j.q(0,y)
this.P=j.w(i)
h=z.w(i)
this.R=h
u=w+u
w=this.P
h=u+x*w*w+v*h*h
this.N=h
if(h>0)this.N=1/h
this.S=0
this.a_=0
this.a3=0
if(this.ch>0){w=this.x2
G.aG(t,this.dx,w)
j.h(s)
j.q(0,y)
this.y2=j.w(w)
z=z.w(w)
this.a2=z
j=this.y2
g=u+x*j*j+v*z*z
if(g>0){this.S=1/g
f=s.C(w)
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
this.V=0
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
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.r2
y=this.rx
x=this.ry
w=this.x1
v=a.c
u=this.k2
if(u>=v.length)return H.a(v,u)
t=v[u].gA()
u=a.c
v=this.k2
if(v>=u.length)return H.a(u,v)
s=u[v].gp()
v=a.c
u=this.k3
if(u>=v.length)return H.a(v,u)
r=v[u].gA()
u=a.c
v=this.k3
if(v>=u.length)return H.a(u,v)
q=u[v].gp()
v=this.Q.a.l()
u=this.Q.a.l()
p=this.x2
v.h(r)
v.n(t)
o=p.C(v)
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
k=this.V
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
v=i.C(v)
k=this.R
n=this.P
h=-this.N*(v+k*q-n*s)
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
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.b
y=this.k2
if(y>=z.length)return H.a(z,y)
x=z[y].gv()
y=a.b
z=this.k2
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.k3
if(y>=z.length)return H.a(z,y)
v=z[y].gv()
y=a.b
z=this.k3
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
t=this.Q.a.l()
z.G(w)
y.G(u)
t.h(this.cy)
t.n(this.k4)
s=this.a9
G.aG(z,t,s)
t.h(this.db)
t.n(this.r1)
r=this.aa
G.aG(y,t,r)
y=this.ap
y.h(v)
y.n(x)
y.q(0,r)
y.n(s)
q=this.Q.a.l()
G.aG(z,this.dy,q)
t.h(y)
t.q(0,s)
p=t.w(q)
o=r.w(q)
n=y.C(q)
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
ar:function(a){this.a=this.a*0.95+a*0.05
this.b=this.b*0.8+a*0.2
this.c=Math.min(a,this.c)
this.d=Math.max(a,this.d)},
u:function(a){return H.e(this.b)+" ("+H.e(this.a)+") ["+H.e(this.c)+","+H.e(this.d)+"]"}},
hG:{"^":"c;a,b,c,d,e,f,r,x,y,z"},
dH:{"^":"c;0a,0b,0c",
sbC:function(a){this.b=H.i(a,"$isd",[V.ao],"$asd")},
sbD:function(a){this.c=H.i(a,"$isd",[V.aI],"$asd")}},
dS:{"^":"c;a,b,c,d,e,f"},
ik:{"^":"c;a,0b,0c,0d,e,f,r,x,0y,0z,0Q,ch,cx,cy,db,dx,dy,0fr,0fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a2,P,R,N,V,S,a_,a3,a9,aa,ap,aG,aw,ax,a4,al,am",
se9:function(a){this.y1=H.i(a,"$isd",[V.aq],"$asd")},
aN:function(a,b,c){var z,y,x,w,v,u,t
H.i(a,"$isa4",[V.S],"$asa4")
z=new V.bB(!1)
z.sd9(a)
z.b=!0
y=this.fy
x=b.a
w=y.length
if(x>=w)return H.a(y,x)
v=y[x]
u=c.a;(v&&C.a).m(v,u,z)
if(b!==c){t=new V.bB(!1)
t.sd9(a)
t.b=!1
if(u>=w)return H.a(y,u)
y=y[u];(y&&C.a).m(y,x,t)}},
ha:function(a,b,c,d){var z,y,x,w,v,u
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
u.ay(a,b,c,d)
return u}else{u=w.l()
u.ay(c,d,a,b)
return u}}else return},
c2:function(a){var z,y,x,w,v,u,t,s,r,q,p
if((this.a&2)===2)return
z=new E.b(new Float64Array(2))
y=new G.A(0,1)
x=new Float64Array(2)
w=new E.b(new Float64Array(2))
v=new E.b(new Float64Array(2))
u=new E.b(new Float64Array(2))
t=new G.aH(w,v,u,0,0,0)
s=new E.b(new Float64Array(2))
r=new E.b(new Float64Array(2))
q=new Float64Array(2)
p=new V.aq(C.e,0,0,new G.E(z,y),new G.E(new E.b(x),new G.A(0,1)),t,s,0,r,0,this,0,0,0,0,0,0,0,0,0,new V.dg(0.2,0,0,!1,new V.c9(1,65535,0)),new V.h6(0,new E.b(q),0),new G.E(new E.b(new Float64Array(2)),new G.A(0,1)))
if(a.Q){p.b=16
x=16}else x=0
x|=4
p.b=x
x|=2
p.b=x
p.b=x|32
z.h(a.c)
y.G(a.d)
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
d8:function(a){var z,y,x,w,v,u,t
if((this.a&2)===2)return
z=V.fU(this,a)
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
t=a.d.dy
for(;t!=null;){y=t.a
if(y==null?u==null:y===u)t.b.a|=8
t=t.d}return z},
fo:function(){var z,y
for(z=this.c;z!=null;z=z.cx){y=z.y.a
y[0]=0
y[1]=0
z.z=0}},
fJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
if((s&32)!==32){z.at(0.5,0.5,0.3)
this.bh(q,v,z,x)}else{p=w.a
if(p===C.e){z.at(0.5,0.9,0.3)
this.bh(q,v,z,x)}else if(p===C.I){z.at(0.5,0.5,0.9)
this.bh(q,v,z,x)}else if((s&2)!==2){z.at(0.5,0.5,0.5)
this.bh(q,v,z,x)}else{z.at(0.9,0.7,0.7)
this.bh(q,v,z,x)}}}}z=this.fx
v=this.Q.a
o=z.z
if(o!==0){n=z.r/2
m=z.cy.a
l=z.fx.a!=null?z.dJ():null
z=this.Q
if((v&128)!==0)z.fL(m,n,l,o)
else z.fK(m,n,l,o)}}if((y&4)!==0)for(k=this.d,z=this.ch.a,v=this.k2,u=z.a,t=u.length;k!=null;k=k.c){j=k.f
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
k.ab(s)
k.ac(p)
v.at(0.5,0.8,0.8)
switch(k.a){case C.A:this.Q.ak(s,p,v)
break
case C.M:H.o(k,"$isdB")
f=k.ch
e=k.cx
this.Q.ak(f,s,v)
this.Q.ak(e,p,v)
this.Q.ak(f,e,v)
break
case C.O:this.Q.ak(h,g,v)
break
case C.z:case C.N:break
default:this.Q.ak(h,s,v)
this.Q.ak(s,p,v)
this.Q.ak(g,p,v)}z.b-=2}if((y&16)!==0){z=this.k2
z.at(0.3,0.9,0.9)
for(d=this.b.b,v=this.k4,u=this.r1;d!=null;d=d.c){c=d.f
b=d.r
t=d.x
s=c.r
if(t>=s.length)return H.a(s,t)
s[t].gaP().cl(v)
t=d.y
s=b.r
if(t>=s.length)return H.a(s,t)
s[t].gaP().cl(u)
this.Q.ak(v,u,z)}}if((y&8)!==0){z=this.k2
z.at(0.9,0.3,0.9)
for(w=this.c,v=this.r2,u=v.a,t=[E.b];w!=null;w=w.cx){if((w.b&32)!==32)continue
for(q=w.cy;q!=null;q=q.b)for(a=0;a<q.x;++a){s=q.r
if(a>=s.length)return H.a(s,a)
a0=s[a]
s=this.b.a
p=a0.d
s=s.a.b
if(p<0||p>=s.length)return H.a(s,p)
a1=s[p].gaP()
if(!u.c1(4))u.m(0,4,v.cn(4))
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
a3.bw(H.i(s,"$isd",t,"$asd"),4,z)
a3.c.stroke()}}}if((y&32)!==0){a4=new G.bz(255,0,0)
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
t.bv(v,0.1*t.b.c,a4)
t.c.stroke()}}if((y&64)!==0)this.b.a.a.fM(this.Q)
this.Q.toString},
bJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.ay(x,v.c,this.f,v.e)
for(y=this.c;y!=null;y=y.cx)y.b&=4294967294
for(u=this.b.b;u!=null;u=u.c)u.a&=4294967294
for(t=this.d;t!=null;t=t.c)t.x=!1
s=this.e
if(this.y1.length<s){x=new Array(s)
x.fixed$length=Array
this.se9(H.f(x,[V.aq]))}for(r=this.c,x=this.r;r!=null;r=r.cx){v=r.b
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
y.ai(!0)
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
q=l}}z.dQ(this.fr,a,x,this.x)
for(j=0;j<z.r;++j){v=z.b
if(j>=v.length)return H.a(v,j)
y=v[j]
if(y.a===C.e)y.b&=4294967294}}z=this.fr.f
z.ar(z.e)
z=this.fr.r
z.ar(z.e)
z=this.fr.x
z.ar(z.e)
z=this.y2.a
z.aK(0)
for(y=this.c;y!=null;y=y.cx){if((y.b&1)===0)continue
if(y.a===C.e)continue
y.cE()}x=this.b
x.a.cj(x)
x=this.fr.y
z=z.gaF()
v=$.J
if(typeof v!=="number")return H.H(v)
x.ar(C.c.au(z*1000,v))},
e2:function(b4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
z=this.a2
z.ay(64,32,0,this.b.e)
if(this.dy){for(y=this.c;y!=null;y=y.cx){y.b&=4294967294
y.f.f=0}for(x=this.b.b;x!=null;x=x.c){x.a&=4294967262
x.Q=0
x.ch=1}}for(w=this.N,v=this.V,u=this.S,t=this.a_,s=this.R,r=this.P,q=r.a,p=r.b,o=r.c,n=r.d,m=this.ch;!0;){for(x=this.b.b,l=null,k=1;x!=null;x=x.c){j=x.a
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
if(a3<a4){j.aQ(a4)
a3=a4}else if(a4<a3)a.aQ(a3)
a5=x.x
a6=x.y
q.cu(h.d,a5)
p.cu(g.d,a6)
o.M(j)
n.M(a)
r.e=1
m.fx.hn(s,r)
a7=s.b
i=s.a===C.G?Math.min(a3+(1-a3)*a7,1):1
x.ch=i
x.a|=32}if(i<k){k=i
l=x}}if(l==null||0.9999988079071045<k){this.dy=!0
break}h=l.f
g=l.r
f=h.c
e=g.c
j=f.f
u.M(j)
a=e.f
t.M(a)
f.aQ(k)
e.aQ(k)
l.ci(this.b.e)
a8=l.a&=4294967263;++l.Q
if((a8&4)!==4||(a8&2)!==2){l.a=a8&4294967291
j.M(u)
a.M(t)
f.b_()
e.b_()
continue}f.ai(!0)
e.ai(!0)
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
u.M(j)
if((b3.b&1)===0)b3.aQ(k)
b2.ci(this.b.e)
a=b2.a
if((a&4)!==4){j.M(u)
b3.b_()
continue}if((a&2)!==2){j.M(u)
b3.b_()
continue}b2.a=a|1
j=z.c;(j&&C.a).m(j,z.y++,b2)
j=b3.b
if((j&1)!==0)continue
b3.b=j|1
if(b3.a!==C.e)b3.ai(!0)
j=z.r
b3.c=j
a=z.b;(a&&C.a).m(a,j,b3);++z.r}}j=(1-k)*b4.a
w.a=j
w.b=1/j
w.c=1
w.e=20
w.d=b4.d
w.f=!1
z.e3(w,f.c,e.c)
for(a9=0;a9<z.r;++a9){j=z.b
if(a9>=j.length)return H.a(j,a9)
b0=j[a9]
b0.b&=4294967294
if(b0.a!==C.f)continue
b0.cE()
for(b1=b0.dy;b1!=null;b1=b1.d)b1.b.a&=4294967262}j=this.b
j.a.cj(j)}},
bh:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q
z=a.d
switch(z.a){case C.i:H.o(z,"$isak")
y=this.aw
G.p(b,z.c,y)
x=z.b
z=b.b
this.ax.J(z.b,z.a)
z=this.Q
if(d)z.fH(y,x,c)
else{z.bv(y,x*z.b.c,c)
z.c.fill()}break
case C.j:H.o(z,"$isat")
w=z.f
v=this.am.dD(8)
for(y=J.W(v),u=0;u<w;++u){t=z.d
if(u>=8)return H.a(t,u)
G.p(b,t[u],y.i(v,u))}z=this.Q
y=[E.b]
if(d){z.toString
z.bw(H.i(v,"$isd",y,"$asd"),w,c)
z.c.stroke()}else{z.toString
z.bw(H.i(v,"$isd",y,"$asd"),w,c)
z.c.fill()}break
case C.p:H.o(z,"$isb_")
y=this.a4
G.p(b,z.c,y)
t=this.al
G.p(b,z.d,t)
this.Q.ak(y,t,c)
break
case C.y:H.o(z,"$isc5")
s=z.geO()
v=z.gc_()
z=this.a4
G.p(b,v.i(0,0),z)
for(y=this.al,r=y.a,t=z.a,u=1;C.c.O(u,s);++u){G.p(b,v.i(0,u),y)
this.Q.ak(z,y,c)
q=this.Q
q.bv(z,0.05*q.b.c,c)
q.c.stroke()
t[1]=r[1]
t[0]=r[0]}break
default:break}},
E:{
iq:function(a,b){var z,y,x,w
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[[P.d,V.bB]])
for(z=[V.bB],x=0;x<a;++x){w=new Array(b)
w.fixed$length=Array
C.a.m(y,x,H.f(w,z))}return y}}},
io:{"^":"c;0a,0b",
dA:function(a){var z,y
z=this.a.a.b
if(a<0||a>=z.length)return H.a(z,a)
y=z[a].gaA()
return this.b.i_(y.b)},
$isi6:1},
ip:{"^":"c;a,b,c,0d,0e"},
kt:{"^":"c;"},
an:{"^":"c;a",
st:function(a){this.a[3]=H.k(a)},
gt:function(){return this.a[3]}},
ku:{"^":"c;"},
hw:{"^":"c;a,b,c,0d,0aA:e<"},
kv:{"^":"c;"},
Z:{"^":"c;0a,b,c,$ti",
sdc:function(a,b){this.a=H.i(b,"$isd",this.$ti,"$asd")}},
hv:{"^":"c;0a,0b"},
kD:{"^":"c;"},
kE:{"^":"c;"},
dA:{"^":"c;",$isI:1,
$asI:function(){return[V.dA]}},
hk:{"^":"c;a,b,c"},
ft:{"^":"c;0a,0b,0c,d,e"},
ic:{"^":"c;0a,b",$ishH:1},
fj:{"^":"c;0a,0b,0c"},
hT:{"^":"c;0a,0b,c,d,e,f",$ishH:1},
hx:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,id,k1,0k2,k3,k4,0r1,r2,rx,0ry,x1,x2,0y1,y2,a2,0P,R,0N,0V,0S,0a_,0a3,0a9,0aa,0ap,0aG,0aw,0ax,0a4,al,am,hL,bi,hM,hN,hO,hP,fO,fP,fQ,fR,fS,fT,hQ",
shb:function(a){this.cy=H.i(a,"$isZ",[E.b],"$asZ")},
sht:function(a){this.db=H.i(a,"$isZ",[E.b],"$asZ")},
sfj:function(a){this.dy=H.i(a,"$isd",[E.b],"$asd")},
sfv:function(a){this.fx=H.i(a,"$isZ",[V.an],"$asZ")},
shs:function(a){this.go=H.i(a,"$isZ",[P.c],"$asZ")},
cf:function(a,b,c){var z,y,x,w,v
H.i(a,"$isd",[c],"$asd")
H.v(b,{func:1,ret:c})
if(a==null){x=this.Q
w=new Array(x)
w.fixed$length=Array
a=H.f(w,[c])
for(z=0;J.cM(z,x);z=J.eL(z,1))try{J.eN(a,z,b.$0())}catch(v){y=H.aQ(v)
x="Exception "+H.e(y)
throw H.h(x)}}return a},
fF:function(a){var z,y
z=this.a4
z.cp()
z.cp().hA(a)
for(y=a.gbr(),z=this.fy;y.O(0,a.gbt());y=y.B(0,1))C.d.m(z,y,null)
a.gbV()
a.gbV().sbT(a.gbT())
a.gbT()
a.gbT().sbV(a.gbV());--this.R},
hr:function(a){var z,y,x,w,v,u,t
for(z=this.k2,y=this.x,x=0;w=this.id,x<w;++x){v=C.d.i(z,x)
u=v.gc7(v)
w=this.cy.a
w=(w&&C.a).i(w,u).a
t=w[0]
v.shk((C.b.a7(y*w[1]+2048)<<19>>>0)+(C.b.a7(128*(y*t))+262144))}F.eJ(z,0,w,V.dA)
this.k3=0
for(u=0;u<this.id;++u)V.hz(C.d.i(z,u).ghk(),1,0)},
hq:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.al
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
w=this.fO
w.a=this
this.a4.he(w,z)},
dT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.al
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
v[1]=o>g?o:g}w=this.fP
w.b=a
w.a=this
this.a4.he(w,z)},
bJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j;++this.a
if(this.z===0)return
this.b=0
for(z=0,y=0;z<this.z;++z){y=C.c.cr(y,C.d.i(this.cx.a,z))
this.b=y}if((y&2)!==0)this.e8()
if(this.z===0)return
this.c=0
for(x=this.N;!1;x=x.bF())this.c=C.c.cr(this.c,x.gcP())
y=a.a
w=this.f
v=this.a4
u=v.dI()
t=C.b.F(y*w,u.gj(u))
u=a.a
v=v.dI()
s=C.b.F(u*w,v.gk(v))
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
y[1]=y[1]*o}}this.dT(a)
if((this.c&2)!==0)this.e_(a)
if((this.b&4)!==0)this.e7(a)
for(y=this.z,w=this.cy.a,v=this.db.a,u=a.a,z=0;z<y;++z){if(z>=w.length)return H.a(w,z)
n=w[z]
if(z>=v.length)return H.a(v,z)
m=v[z]
l=n.a
k=l[0]
j=m.a
l[0]=k+u*j[0]
l[1]=l[1]+u*j[1]}this.hq()
this.hr(!1)
if((this.b&32)!==0)this.e6(a)
if((this.b&64)!==0)this.dY(a)
if((this.b&128)!==0)this.e5(a)
if((this.b&16)!==0)this.dW(a)
if((this.b&8)!==0)this.e1(a)
if((this.c&1)!==0)this.e0(a)
if((this.b&256)!==0)this.dU(a)
this.dZ(a)
this.dV(a)},
dZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
z.m(0,s,z.i(0,s).B(0,t))}if((this.b&64)!==0)for(y=0;y<this.z;++y){C.d.i(this.cx.a,y).ah(0,64)
C.d.m(z,y,0)}w=this.V
r=this.d
q=this.r
p=q*a.b
o=w*(r*(p*p))
for(y=0;y<this.z;++y)z.m(0,y,o*Math.max(0,Math.min(H.ji(C.d.i(z,y)),5)-1))
n=a.a/(this.d*q)
for(m=this.bi,w=m.a,r=this.x,l=1.777777*this.e*r*r,x=0;x<this.r2;++x){r=this.ry
if(x>=r.length)return H.a(r,x)
v=r[x]
u=v.a
s=v.b
t=v.c
k=v.e
j=v.d
r=this.cy.a
i=(r&&C.a).i(r,u)
h=C.l.F(n*t*k,C.d.i(z,u).B(0,o*t))
r=j.a
w[0]=h*r[0]
w[1]=h*r[1]
r=this.db.a
r=(r&&C.a).i(r,u).a
r[0]=r[0]-l*w[0]
r[1]=r[1]-l*w[1]
s.c0(m,i,!0)}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.a(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
j=v.e
g=C.d.i(z,u).B(0,z.i(0,s))
w=n*t
r=j.a
f=C.l.F(w,g)*r[0]
e=C.l.F(w,g)*r[1]
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
dV:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.S
for(y=this.bi,x=y.a,w=this.x,v=1.777777*this.e*w*w,u=0;u<this.r2;++u){w=this.ry
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
l=r.gaO().gv()
k=C.b.I(m,l.gj(l))
w=w[1]
l=r.gaO().gv()
j=C.b.I(w,l.gk(l))
l=this.db.a
i=(l&&C.a).i(l,s)
l=r.gbq().bn(0).F(0,j)
w=r.gbu()
w=l.B(0,w.gj(w))
l=i.a
h=w.I(0,l[0])
w=r.gbq().F(0,k)
m=r.gbu()
g=w.B(0,m.gk(m)).I(0,l[1])
m=o.a
f=h.F(0,m[0]).B(0,g.F(0,m[1]))
if(f.O(0,0)){w=z*q*p
x[0]=C.b.F(w,f)*m[0]
x[1]=C.b.F(w,f)*m[1]
l[0]=l[0]+v*x[0]
l[1]=l[1]+v*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.c0(y,n,!0)}}for(u=0;u<this.k3;++u){x=this.r1
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
e7:function(a){var z,y,x
for(z=0;z<this.z;++z){C.d.i(this.cx.a,z).ah(0,4)
y=this.db.a
x=y.length
if(z>=x)return H.a(y,z)
y=y[z].a
y[0]=0
y[1]=0}},
e_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
for(z=this.N,y=this.bi,x=this.fQ,w=this.fR,v=y.a,u=this.fS,t=u.a,s=t.a,u=u.b,r=this.fT,q=r.a.a,p=r.b;!1;z=z.bF()){z.gcP().ah(0,2)
z.i1()
o=C.b.F(a.a,z.gbq())
w.a=Math.sin(o)
w.b=Math.cos(o)
G.j(w,z.geH(),x)
n=z.gbu().gbY()
o=n.length
if(1>=o)return H.a(n,1)
v[1]=n[1]
v[0]=n[0]
y.D(0,a.a)
y.q(0,z.geH())
y.n(x)
s[1]=v[1]
s[0]=v[0]
u.a=w.a
u.b=w.b
o=z.gbX()
m=z.gbX()
l=o.gcd()
k=m.gcd()
j=C.b.F(u.b,l.gv())
i=C.b.F(u.a,l.gcs())
k.scs(C.b.F(u.a,l.gv())+C.b.F(u.b,l.gcs()))
k.sv(j-i)
G.aG(u,o.gbB(),m.gbB())
m.gbB().q(0,t)
m=a.b
q[0]=m*s[0]
q[1]=m*s[1]
p.a=m*u.a
p.b=m*(u.b-1)
for(h=z.gbr();h.O(0,z.gbt());h=h.B(0,1)){o=this.cy.a
o=(o&&C.a).i(o,h)
m=this.db.a
G.p(r,o,(m&&C.a).i(m,h))}}},
dW:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=a6.b*this.a_
for(y=0;y<this.y2;++y){x=C.d.i(this.P,y)
x.gfW().ah(0,16)
w=x.gaS()
v=x.gaT()
u=x.gc8()
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
g=t.w(p).B(0,s.w(o)).B(0,r.w(n))
f=t.C(p).B(0,s.C(o)).B(0,r.C(n))
e=Math.sqrt(C.c.dC(1,g.F(0,g).B(0,f.F(0,f))))
g=g.F(0,e)
f=f.F(0,e)
d=C.b.F(z,x.ged())
c=f.F(0,t.gj(t)).I(0,g.F(0,t.gk(t)))
b=g.F(0,t.gj(t)).B(0,f.F(0,t.gk(t)))
a=f.F(0,s.gj(s)).I(0,g.F(0,s.gk(s)))
a0=g.F(0,s.gj(s)).B(0,f.F(0,s.gk(s)))
a1=f.F(0,r.gj(r)).I(0,g.F(0,r.gk(r)))
a2=g.F(0,r.gj(r)).B(0,f.F(0,r.gk(r)))
m=this.db.a
a3=(m&&C.a).i(m,w)
m=this.db.a
a4=(m&&C.a).i(m,v)
m=this.db.a
a5=(m&&C.a).i(m,u)
m=a3.a
m[0]=m[0]+C.b.F(d,c.I(0,q[0]-i))
m[1]=m[1]+C.b.F(d,b.I(0,q[1]-h))
q=a4.a
q[0]=q[0]+C.b.F(d,a.I(0,l[0]-i))
q[1]=q[1]+C.b.F(d,a0.I(0,l[1]-h))
l=a5.a
l[0]=l[0]+C.b.F(d,a1.I(0,j[0]-i))
l[1]=l[1]+C.b.F(d,a2.I(0,j[1]-h))}},
e1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.b*this.a3
for(y=this.y1,x=0;x<this.x1;++x){w=C.d.i(y,x)
w.gfW().ah(0,8)
v=w.gaS()
u=w.gaT()
t=this.cy.a
s=(t&&C.a).i(t,v)
t=this.cy.a
t=(t&&C.a).i(t,u).a
r=t[0]
q=s.a
p=r-q[0]
o=t[1]-q[1]
n=w.ghK()
m=Math.sqrt(p*p+o*o)
if(m===0)m=17976931348623157e292
l=C.b.F(z,w.ged())
k=C.b.F(l,n.I(0,m))/m*p
j=C.b.F(l,n.I(0,m))/m*o
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
e5:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
this.sfj(this.cf(this.dy,V.cD(),E.b))
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
l=this.ap*n
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
h=C.l.F(m,k.I(0,2))
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
e6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a9
for(y=this.bi,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.a(u,v)
t=u[v]
s=t.a
C.d.i(this.cx.a,s).ah(0,32)
r=t.b
q=t.c
p=t.e
u=this.cy.a
o=(u&&C.a).i(u,s)
u=this.db.a
n=(u&&C.a).i(u,s)
u=o.a
m=u[0]
l=r.gaO().gv()
k=C.b.I(m,l.gj(l))
u=u[1]
l=r.gaO().gv()
j=C.b.I(u,l.gk(l))
l=r.gbq().bn(0).F(0,j)
u=r.gbu()
u=l.B(0,u.gj(u))
l=n.a
i=u.I(0,l[0])
u=r.gbq().F(0,k)
m=r.gbu()
h=u.B(0,m.gk(m)).I(0,l[1])
m=z*p*q
x[0]=C.l.F(m,i)
x[1]=C.l.F(m,h)
l[0]=l[0]+w*x[0]
l[1]=l[1]+w*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.c0(y,o,!0)}for(v=0;v<this.k3;++v){x=this.r1
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
dY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.aG*(this.r*a.b)
for(y=this.bi,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.a(u,v)
t=u[v]
s=t.a
C.d.i(this.cx.a,s).ah(0,64)
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
q.c0(y,o,!0)}}for(v=0;v<this.k3;++v){x=this.r1
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
l=this.aG*(r-0.25)
x=n.a
j=l*x[0]
i=l*x[1]
x=m.a
x[0]=x[0]-j
x[1]=x[1]-i
x=k.a
x[0]=x[0]+j
x[1]=x[1]+i}}}},
e0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.fr
if(z==null)z=new Float64Array(this.Q)
this.fr=z
y=a.b*this.aw
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
v=(v&&C.m).i(v,t)
p=this.fr
p=(p&&C.m).i(p,s)
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
dU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.fx
z.sdc(0,this.cf(z.a,V.ey(),V.an))
y=C.b.a7(256*this.ax)
for(x=0;x<this.k3;++x){z=this.r1
if(x>=z.length)return H.a(z,x)
w=z[x]
v=w.a
u=w.b
C.d.i(this.cx.a,v).ah(0,C.d.i(this.cx.a,u)).ah(0,256)
z=this.fx.a
t=(z&&C.a).i(z,v)
z=this.fx.a
z=(z&&C.a).i(z,u).a
s=z[0]
r=t.a
q=C.c.bg(C.c.a7(y*(s-r[0])),8)
p=C.c.bg(C.c.a7(y*(z[1]-r[1])),8)
o=C.c.bg(C.c.a7(y*(z[2]-r[2])),8)
n=C.c.bg(C.c.a7(y*(z[3]-r[3])),8)
r[0]=r[0]+q
r[1]=r[1]+p
r[2]=r[2]+o
r[3]=r[3]+n
z[0]=z[0]-q
z[1]=z[1]-p
z[2]=z[2]-o
z[3]=z[3]-n}},
e8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=P.aE(this.z,0,!1,P.w)
for(y=this.a4,x=0;x<this.z;++x){w=C.d.i(this.cx.a,x)
w.ah(0,2)
v=y.cp()
w.ah(0,512)
v.hz(x)
C.a.m(z,x,-1)}for(y=this.k2,u=0;t=this.id,u<t;++u){s=C.d.i(y,u)
s.sc7(0,C.a.i(z,s.gc7(s)))}for(x=0;x<t;++x)if(V.hy(C.d.i(y,x))){--t
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
if(typeof n!=="number")return n.O()
if(n>=0){n=o.b
if(typeof n!=="number")return n.O()
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
if(typeof n!=="number")return n.O()
if(n<0){--t
if(t<0||t>=p)return H.a(y,t)
r=y[t];(y&&C.a).m(y,t,o)
y=this.ry;(y&&C.a).m(y,x,r);--x}}this.r2=t
for(y=this.y1,u=0;t=this.x1,u<t;++u){m=C.d.i(y,u)
m.saS(C.a.i(z,m.gaS()))
m.saT(C.a.i(z,m.gaT()))}for(x=0;x<t;++x){p=C.d.i(y,x)
if(p.gaS().O(0,0)||p.gaT().O(0,0)){--t
r=y.i(0,t)
y.m(0,t,y.i(0,x))
y.m(0,x,r);--x}}this.x1=t
for(u=0;t=this.y2,u<t;++u){l=C.d.i(this.P,u)
l.saS(C.a.i(z,l.gaS()))
l.saT(C.a.i(z,l.gaT()))
l.sc8(C.a.i(z,l.gc8()))}for(x=0;x<t;++x){y=C.d.i(this.P,x)
if(y.gaS().O(0,0)||y.gaT().O(0,0)||y.gc8().O(0,0)){--t
r=C.d.i(this.P,t)
y=this.P
y.m(0,t,C.d.i(y,x))
C.d.m(this.P,x,r);--x}}this.y2=t
for(k=this.N;!1;k=k.bF()){for(x=k.gbr(),j=0,i=0,h=!1;x.O(0,k.gbt());x=x.B(0,1)){t=C.a.i(z,x)
if(typeof t!=="number")return t.hw()
if(t>=0){j=Math.min(j,t)
i=Math.max(i,t+1)}else h=!0}if(j<i){k.sbr(j)
k.sbt(i)
if(h){k.gcP().ah(0,2)
k.sfi(!0)}}else{k.sbr(0)
k.sbt(0)
if(k.ghD())k.sfh(!0)}}this.z=0
for(k=this.N;!1;k=g){g=k.bF()
if(k.gfh())this.fF(k)
else k.gfi()}},
dJ:function(){var z=this.fx
z.sdc(0,this.cf(z.a,z.b,V.an))
return this.fx.a},
E:{
hz:function(a,b,c){return a.B(0,c<<19>>>0).B(0,b<<7>>>0)},
ky:[function(){return new E.b(new Float64Array(2))},"$0","cD",0,0,22],
kw:[function(){return new P.c()},"$0","jh",0,0,23],
kx:[function(){var z=new Int8Array(4)
z[0]=127
z[1]=127
z[2]=127
z[3]=50
return new V.an(z)},"$0","ey",0,0,24]}},
e8:{"^":"c;a",
dD:function(a){var z=this.a
if(!z.c1(a))z.m(0,a,this.cn(a))
return z.i(0,a)},
cn:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[E.b])
for(z=y.length,x=0;x<z;++x)C.a.m(y,x,new E.b(new Float64Array(2)))
return y}},
ht:{"^":"Y;a,b,c,d",
a6:function(){return new E.b(new Float64Array(2))},
$asY:function(){return[E.b]}},
hu:{"^":"Y;a,b,c,d",
a6:function(){return new E.a8(new Float64Array(3))},
$asY:function(){return[E.a8]}},
hq:{"^":"Y;a,b,c,d",
a6:function(){return new E.X(new Float64Array(4))},
$asY:function(){return[E.X]}},
hr:{"^":"Y;a,b,c,d",
a6:function(){return new E.ae(new Float64Array(9))},
$asY:function(){return[E.ae]}},
hp:{"^":"Y;a,b,c,d",
a6:function(){var z=new Float64Array(2)
return new V.Q(new E.b(z),new E.b(new Float64Array(2)))},
$asY:function(){return[V.Q]}},
hs:{"^":"Y;a,b,c,d",
a6:function(){return new G.A(0,1)},
$asY:function(){return[G.A]}},
y:{"^":"a5;$ti"},
hh:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.b7(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.b7]},
$asy:function(){return[V.b7]},
$asa5:function(){return[V.b7]}},
hd:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.aW(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aW]},
$asy:function(){return[V.aW]},
$asa5:function(){return[V.aW]}},
hg:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.b6(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.b6]},
$asy:function(){return[V.b6]},
$asa5:function(){return[V.b6]}},
he:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.aY(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aY]},
$asy:function(){return[V.aY]},
$asa5:function(){return[V.aY]}},
hf:{"^":"y;d,0a,0b,0c",
a6:function(){return new V.aZ(0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aZ]},
$asy:function(){return[V.aZ]},
$asa5:function(){return[V.aZ]}},
hb:{"^":"y;d,0a,0b,0c",
a6:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.b_(new E.b(z),new E.b(y),new E.b(x),new E.b(w),!1,!1,new E.b(new Float64Array(2)),C.p,0)
z.b=0.01
return new V.aU(z,0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aU]},
$asy:function(){return[V.aU]},
$asa5:function(){return[V.aU]}},
hc:{"^":"y;d,0a,0b,0c",
a6:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.b_(new E.b(z),new E.b(y),new E.b(x),new E.b(w),!1,!1,new E.b(new Float64Array(2)),C.p,0)
z.b=0.01
return new V.aV(z,0,new V.L(),new V.L(),0,0,V.O(),0,0,0,0,0,this.d,V.O())},
$asa4:function(){return[V.aV]},
$asy:function(){return[V.aV]},
$asa5:function(){return[V.aV]}},
fo:{"^":"c;a,b,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,fy",
sf5:function(a){this.Q=H.i(a,"$isy",[V.b7],"$asy")},
seG:function(a){this.ch=H.i(a,"$isy",[V.aW],"$asy")},
seP:function(a){this.cx=H.i(a,"$isy",[V.b6],"$asy")},
seS:function(a){this.cy=H.i(a,"$isy",[V.aY],"$asy")},
seW:function(a){this.db=H.i(a,"$isy",[V.aZ],"$asy")},
seI:function(a){this.dx=H.i(a,"$isy",[V.aU],"$asy")},
seJ:function(a){this.dy=H.i(a,"$isy",[V.aV],"$asy")},
cq:function(a){var z,y,x,w
z=this.y
if(!z.c1(a)){y=new Array(a)
y.fixed$length=Array
x=H.f(y,[E.b])
for(w=0;w<a;++w)C.a.m(x,w,new E.b(new Float64Array(2)))
z.m(0,a,x)}return z.i(0,a)},
$iske:1,
E:{
fp:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=P.w
y=P.bl(null,null,null,z,P.dh)
x=P.bl(null,null,null,z,[P.d,P.w])
w=P.bl(null,null,null,z,[P.d,E.b])
v=E.b
u=new Array(a6)
u.fixed$length=Array
t=[v]
u=H.f(u,t)
s=new Array(a7)
s.fixed$length=Array
t=new V.ht(u,0,a6,H.f(s,t))
t.b0(a6,a7,v)
v=E.a8
s=new Array(a6)
s.fixed$length=Array
u=[v]
s=H.f(s,u)
r=new Array(a7)
r.fixed$length=Array
u=new V.hu(s,0,a6,H.f(r,u))
u.b0(a6,a7,v)
v=E.X
r=new Array(a6)
r.fixed$length=Array
s=[v]
r=H.f(r,s)
q=new Array(a7)
q.fixed$length=Array
s=new V.hq(r,0,a6,H.f(q,s))
s.b0(a6,a7,v)
v=V.Q
q=new Array(a6)
q.fixed$length=Array
r=[v]
q=H.f(q,r)
p=new Array(a7)
p.fixed$length=Array
r=new V.hp(q,0,a6,H.f(p,r))
r.b0(a6,a7,v)
v=G.A
p=new Array(a6)
p.fixed$length=Array
q=[v]
p=H.f(p,q)
o=new Array(a7)
o.fixed$length=Array
q=new V.hs(p,0,a6,H.f(o,q))
q.b0(a6,a7,v)
v=E.ae
o=new Array(a6)
o.fixed$length=Array
p=[v]
o=H.f(o,p)
n=new Array(a7)
n.fixed$length=Array
p=new V.hr(o,0,a6,H.f(n,p))
p.b0(a6,a7,v)
v=new Float64Array(2)
o=new Float64Array(2)
v=new V.bO(new E.b(v),new E.b(o),new E.b(new Float64Array(2)),0,0,0)
o=new Float64Array(2)
n=new Float64Array(2)
o=new V.bO(new E.b(o),new E.b(n),new E.b(new Float64Array(2)),0,0,0)
n=new Float64Array(2)
m=new Float64Array(2)
n=new V.bO(new E.b(n),new E.b(m),new E.b(new Float64Array(2)),0,0,0)
m=new Array(3)
m.fixed$length=Array
m=H.f(m,[V.bO])
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
b=P.aE(3,0,!1,z)
a=P.aE(3,0,!1,z)
a0=new Float64Array(2)
a1=new Float64Array(2)
a2=new Float64Array(2)
y=new V.fo(t,u,s,p,r,q,y,x,w,new V.fu(new V.iR(v,o,n,m,0,new E.b(l),new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),new E.b(e),new E.b(d),new E.b(c)),b,a,new E.b(a0),new E.b(a1),new E.b(a2),new E.b(new Float64Array(2))))
x=new V.hh(y)
x.aM(10,V.b7)
y.sf5(x)
x=new V.hd(y)
x.aM(10,V.aW)
y.seG(x)
x=new V.hg(y)
x.aM(10,V.b6)
y.seP(x)
x=new V.he(y)
x.aM(10,V.aY)
y.seS(x)
x=new V.hf(y)
x.aM(10,V.aZ)
y.seW(x)
x=new V.hb(y)
x.aM(10,V.aU)
y.seI(x)
x=new V.hc(y)
x.aM(10,V.aV)
y.seJ(x)
x=V.aX()
w=V.aX()
v=new Float64Array(2)
u=new Float64Array(2)
t=V.dG()
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
a1=V.fD()
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
y.fr=new V.fc(y,new V.d3(x,w,new G.E(new E.b(v),new G.A(0,1)),new G.E(new E.b(u),new G.A(0,1)),!1),t,new V.d5(new E.b(s),new E.b(r),0,0),new E.b(q),new G.E(new E.b(p),new G.A(0,1)),new E.b(o),new E.b(n),new V.eg(0,0),new V.eg(0,0),m,new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),e,l,new E.b(d),new E.b(c),new V.T(b),new E.b(a),new E.b(a0),a1)
x=V.dG()
w=V.aX()
v=V.aX()
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
z=P.aE(2,0,!1,z)
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=new Float64Array(2)
a4=new Float64Array(2)
a5=new Float64Array(2)
y.fx=new V.i5(x,new V.d3(w,v,new G.E(new E.b(u),new G.A(0,1)),new G.E(new E.b(t),new G.A(0,1)),!1),new G.E(new E.b(s),new G.A(0,1)),new G.E(new E.b(r),new G.A(0,1)),new V.d5(new E.b(q),new E.b(p),0,0),new V.hP(new E.b(o),new E.b(n),new E.b(m),new E.b(l),new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),new E.b(e),new E.b(d),new G.E(new E.b(c),new G.A(0,1)),new G.E(new E.b(b),new G.A(0,1)),new E.b(a),new E.b(a0)),z,new G.aH(new E.b(a1),new E.b(a2),new E.b(a3),0,0,0),new G.aH(new E.b(a4),new E.b(a5),new E.b(new Float64Array(2)),0,0,0),y)
y.z=y
return y}}},
a5:{"^":"c;0a,$ti",
scW:function(a){this.a=H.i(a,"$isd",[H.ax(this,"a5",0)],"$asd")},
aM:function(a,b){this.b=0
this.scW(null)
this.b=0
this.c=0
this.de(a)},
de:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[H.ax(this,"a5",0)])
z=this.a
if(z!=null)C.a.aj(y,0,this.c,z,0)
for(z=y.length,x=0;x<z;++x)C.a.m(y,x,this.a6())
this.scW(y)
this.c=z},
l:function(){var z,y
z=this.b
y=this.c
if(z>=y)this.de(y*2)
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
eJ:function(a,b,c,d){var z
H.i(a,"$isd",[d],"$asd")
P.dD(b,c,a.length,null,null,null)
z=P.h1(H.cq(a,b,c,H.m(a,0)),!0,d)
H.hW(z,J.j4(),H.m(z,0))
C.a.bb(a,b,c,z)}}],["","",,N,{"^":"",f4:{"^":"fl;c,a,b",
bw:function(a,b,c){var z,y,x,w,v
H.i(a,"$isd",[E.b],"$asd")
this.bx(c)
for(z=J.W(a),y=this.b,x=0;x<b;++x){w=z.i(a,x)
v=z.i(a,x)
y.ba(H.l(w,"$isb"),H.l(v,"$isb"))}y=this.c
y.beginPath()
C.k.ds(y,J.a1(z.i(a,0)),J.a2(z.i(a,0)))
for(x=1;x<b;++x)C.k.cc(y,J.a1(z.i(a,x)),J.a2(z.i(a,x)))
C.k.cc(y,J.a1(z.i(a,0)),J.a2(z.i(a,0)))
y.closePath()},
ak:function(a,b,c){var z,y
this.bx(c)
z=this.b
z.ba(a,a)
z.ba(b,b)
z=this.c
z.beginPath()
y=a.a
C.k.ds(z,y[0],y[1])
y=b.a
C.k.cc(z,y[0],y[1])
z.closePath()
z.stroke()},
fI:function(a,b,c,d){this.bv(a,b*this.b.c,c)
this.c.stroke()},
fH:function(a,b,c){return this.fI(a,b,c,null)},
bv:function(a,b,c){var z,y
this.bx(c)
this.b.ba(a,a)
z=this.c
z.beginPath()
y=a.a
z.arc(y[0],y[1],b,0,6.283185307179586,!0)
z.closePath()},
bx:function(a){var z,y,x,w
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
fK:function(a,b,c,d){H.i(a,"$isd",[E.b],"$asd")
H.i(c,"$isd",[V.an],"$asd")
throw H.h("Unimplemented")},
fL:function(a,b,c,d){H.i(a,"$isd",[E.b],"$asd")
H.i(c,"$isd",[V.an],"$asd")
throw H.h("Unimplemented")}}}],["","",,G,{"^":"",bz:{"^":"c;j:a>,k:b>,c",
at:function(a,b,c){this.a=C.c.a7(C.b.aH(a*255))
this.b=C.c.a7(C.b.aH(b*255))
this.c=C.c.a7(C.b.aH(c*255))}},A:{"^":"c;a,v:b<",
G:function(a){this.a=Math.sin(a)
this.b=Math.cos(a)
return this},
u:function(a){return"Rot(s:"+H.e(this.a)+", c:"+H.e(this.b)+")"},
E:{
aG:function(a,b,c){var z,y,x,w
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
c.sk(0,-a.a*y[0]+a.b*y[1])}}},aH:{"^":"c;a,b,v:c<,d,t:e<,f",
st:function(a){this.e=H.bg(a)},
u:function(a){return"Sweep:\nlocalCenter: "+this.a.u(0)+"\n"+("c0: "+this.b.u(0)+", c: "+this.c.u(0)+"\n")+("a0: "+H.e(this.d)+", a: "+H.e(this.e)+"\n")+("alpha0: "+H.e(this.f))},
Z:function(){var z=6.283185307179586*C.l.aH(this.d/6.283185307179586)
this.d-=z
this.e-=z},
M:function(a){this.a.h(a.a)
this.b.h(a.b)
this.c.h(a.c)
this.d=a.d
this.e=a.e
this.f=a.f
return this},
aC:function(a,b){var z,y,x,w
z=a.a
y=1-b
x=this.b.a
w=this.c.a
z.sj(0,y*x[0]+b*w[0])
z.sk(0,y*x[1]+b*w[1])
w=a.b
w.G(y*this.d+b*this.e)
y=z.a
x=this.a.a
z.sj(0,y[0]-(w.b*x[0]-w.a*x[1]))
z.sk(0,y[1]-(w.a*x[0]+w.b*x[1]))},
aQ:function(a){var z,y,x,w,v
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
this.f=a}},cr:{"^":"c;a"},E:{"^":"c;a,b",
u:function(a){return"XForm:\n"+("Position: "+this.a.u(0)+"\n")+("R: \t"+this.b.u(0)+"\n")},
E:{
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
p:function(a,b,c){var z,y,x,w
H.l(b,"$isb")
H.l(c,"$isb")
z=a.b
y=z.b
x=b.a
w=a.a.a
c.sj(0,y*x[0]-z.a*x[1]+w[0])
c.sk(0,z.a*x[0]+z.b*x[1]+w[1])},
dW:function(a,b,c){var z,y,x,w
z=b.a
y=a.a.a
x=z[0]-y[0]
w=z[1]-y[1]
y=a.b
z=y.a
y=y.b
c.sj(0,y*x+z*w)
c.sk(0,-z*x+y*w)},
ct:function(a,b,c){var z,y,x,w
z=b.a
y=a.a.a
x=z[0]-y[0]
w=z[1]-y[1]
y=a.b
c.sj(0,y.b*x+y.a*w)
c.sk(0,-y.a*x+y.b*w)},
dV:function(a,b,c){var z,y,x,w,v,u,t
z=a.b
y=b.b
x=c.b
w=z.b
v=y.a
u=z.a
t=y.b
x.a=w*v-u*t
x.b=w*t+z.a*y.a
y=$.$get$cs()
y.h(b.a)
y.n(a.a)
G.a6(z,$.$get$cs(),c.a)}}},ie:{"^":"c;",
ba:function(a,b){var z,y,x,w,v,u,t,s
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
b.J(y*x+u+t[0],v-z*x+-t[1])}}}],["","",,X,{"^":"",f5:{"^":"ie;0a,b,c,d"}}],["","",,A,{"^":"",
bT:function(a){var z,y
z=C.m.fX(H.i(a,"$isx",[P.c],"$asx"),0,new A.jr(),P.w)
if(typeof z!=="number")return H.H(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jr:{"^":"u:18;",
$2:function(a,b){var z,y
H.k(a)
z=J.aR(b)
if(typeof a!=="number")return a.B()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,E,{"^":"",X:{"^":"c;a",
bc:function(a,b,c,d){var z=this.a
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
u:function(a){return"[0] "+this.aV(0).u(0)+"\n[1] "+this.aV(1).u(0)+"\n"},
m:function(a,b,c){C.m.m(this.a,b,c)},
as:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.X){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
ga1:function(a){return A.bT(this.a)},
aV:function(a){var z,y,x
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
x=b.ghF()
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
bA:function(){var z,y,x,w,v,u,t
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
y[0]=C.b.I(y[0],z.i(0,0))
y[1]=C.b.I(y[1],z.i(0,1))
y[2]=C.b.I(y[2],z.i(0,2))
y[3]=C.b.I(y[3],z.i(0,3))},
cg:function(a,b){var z,y,x,w,v,u,t
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
E:{
du:function(a,b,c){var z,y,x,w,v,u,t,s
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
u:function(a){return"[0] "+this.aV(0).u(0)+"\n[1] "+this.aV(1).u(0)+"\n[2] "+this.aV(2).u(0)+"\n"},
m:function(a,b,c){C.m.m(this.a,b,c)},
as:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
ga1:function(a){return A.bT(this.a)},
aV:function(a){var z,y,x
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
x=b.ghG()
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
y[0]=C.b.I(y[0],z.i(0,0))
y[1]=C.b.I(y[1],z.i(0,1))
y[2]=C.b.I(y[2],z.i(0,2))
y[3]=C.b.I(y[3],z.i(0,3))
y[4]=C.b.I(y[4],z.i(0,4))
y[5]=C.b.I(y[5],z.i(0,5))
y[6]=C.b.I(y[6],z.i(0,6))
y[7]=C.b.I(y[7],z.i(0,7))
y[8]=C.b.I(y[8],z.i(0,8))},
E:{
ci:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
h7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
b.sbk(0,m*(y*-(k*t-z*u)+x*-(z*v-l*t)+w*-(l*u-k*v)))}}},b:{"^":"c;bY:a<",
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
as:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
ga1:function(a){return A.bT(this.a)},
B:function(a,b){var z=new E.b(new Float64Array(2))
z.h(this)
z.q(0,b)
return z},
m:function(a,b,c){C.m.m(this.a,b,c)},
gH:function(a){return Math.sqrt(this.gT())},
gT:function(){var z,y
z=this.a
y=z[0]
z=z[1]
return y*y+z*z},
Z:function(){var z,y,x
z=Math.sqrt(this.gT())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
return z},
c5:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=a.a
w=y-x[0]
v=z[1]-x[1]
return w*w+v*v},
C:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]},
w:function(a){var z,y
z=H.l(a,"$isb").a
y=this.a
return y[0]*z[1]-y[1]*z[0]},
U:function(a,b){var z=this.a
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
D:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
L:function(){var z=this.a
z[1]=-z[1]
z[0]=-z[0]},
sj:function(a,b){this.a[0]=b
return b},
sk:function(a,b){this.a[1]=b
return b},
gj:function(a){return this.a[0]},
gk:function(a){return this.a[1]},
E:{
e9:function(){return new E.b(new Float64Array(2))}}},a8:{"^":"c;a",
cv:function(a,b,c){var z=this.a
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
as:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.a8){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
ga1:function(a){return A.bT(this.a)},
B:function(a,b){var z=new E.a8(new Float64Array(3))
z.h(this)
z.q(0,b)
return z},
m:function(a,b,c){C.m.m(this.a,b,c)},
gH:function(a){return Math.sqrt(this.gT())},
gT:function(){var z,y,x
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
D:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
L:function(){var z=this.a
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]},
sj:function(a,b){this.a[0]=b
return b},
sk:function(a,b){this.a[1]=b
return b},
sbk:function(a,b){this.a[2]=b
return b},
gj:function(a){return this.a[0]},
gk:function(a){return this.a[1]}}}],["","",,O,{"^":"",
eF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
z=[V.aq]
y=H.f([],z)
x=new E.b(new Float64Array(2))
x.J(0,-10)
w=V.fp(100,10)
v=V.fn(V.fB())
u=V.iq(4,4)
t=new P.bM(0,0)
if($.J==null){H.bJ()
$.J=$.aF}t.bo(0)
s=new P.bM(0,0)
if($.J==null){H.bJ()
$.J=$.aF}s.bo(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.w
n=[P.d,E.b]
m=P.bl(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.bC()
f=V.bC()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.bM(0,0)
if($.J==null){H.bJ()
$.J=$.aF}b.bo(0)
a=V.bC()
a0=V.bC()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.aX()
a4=V.aX()
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
b9=C.c.a7(C.c.aH(102))
c0=C.c.a7(C.c.aH(102))
c1=C.c.a7(C.c.aH(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.bl(null,null,null,o,n)
o=new E.b(new Float64Array(2))
o.h(x)
c6=new V.ik(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.dS(0,0,0,0,0,!1),new G.cr(t),new G.cr(s),new G.bz(0,0,0),new G.E(new E.b(r),new G.A(0,1)),new E.b(q),new E.b(p),new V.e8(m),new V.io(),new V.ip(new V.dE(new E.b(l),0),new E.b(k),new E.b(j)),new V.cm(new E.b(i),new E.b(h),0),new V.di(0,0,0,0,0,0,g,new V.dH(),new V.bD(0),f,new V.bD(0),new V.d_(e,d,0)),c,new G.cr(b),new V.di(0,0,0,0,0,0,a,new V.dH(),new V.bD(0),a0,new V.bD(0),new V.d_(a1,a2,0)),new V.i_(a3,a4,new G.aH(new E.b(a5),new E.b(a6),new E.b(a7),0,0,0),new G.aH(new E.b(a8),new E.b(a9),new E.b(b0),0,0,0),0),new V.i0(C.R,0),new V.dS(0,0,0,0,0,!1),z,new G.aH(new E.b(b1),new E.b(b2),new E.b(b3),0,0,0),new G.aH(new E.b(b4),new E.b(b5),new E.b(b6),0,0,0),0.12,-1,new E.b(b7),new E.b(b8),new G.bz(b9,c0,c1),new E.b(c2),new E.b(c3),new E.b(c4),new E.b(c5),new V.e8(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.fh(0,c6)
n.d=new V.fg()
n.a=v
c6.b=n
c6.fr=new V.hG(new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0),new V.ag(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.hx(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.Q(new E.b(z),new E.b(x)),new V.ft(!1,0),new V.Q(new E.b(v),new E.b(u)),new E.b(t),new G.E(new E.b(s),new G.A(0,1)),new G.E(new E.b(r),new G.A(0,1)),new V.fj(),new V.hw(0,new E.b(q),new E.b(p)),new V.ic(new E.b(o)),new V.hT(new V.cm(new E.b(n),new E.b(m),0),new V.dE(new E.b(l),0),new E.b(k),new E.b(j)),new E.b(i),new G.A(0,1),new G.E(new E.b(h),new G.A(0,1)),new G.E(new E.b(new Float64Array(2)),new G.A(0,1)),new V.hk(0,0,0))
z.V=0.05
z.S=1
z.a_=0.25
z.a3=0.25
z.a9=0.25
z.aa=0.1
z.ap=0.2
z.aG=0.5
z.aw=0.5
z.ax=0.5
z.cx=new V.hv()
x=[E.b]
z.shb(new V.Z(V.cD(),0,x))
z.sht(new V.Z(V.cD(),0,x))
z.sfv(new V.Z(V.ey(),0,[V.an]))
z.shs(new V.Z(V.jh(),0,[P.c]))
c6.fx=z
c6.aN(w.ch,C.i,C.i)
c6.aN(w.cx,C.j,C.i)
c6.aN(w.Q,C.j,C.j)
c6.aN(w.cy,C.p,C.i)
c6.aN(w.db,C.p,C.j)
c6.aN(w.dx,C.y,C.i)
c6.aN(w.dy,C.y,C.j)
w=new P.bM(0,0)
if($.J==null){H.bJ()
$.J=$.aF}w.bo(0)
c7=new O.f3(y,c6,w,10)
J.bZ(C.v.ce(document,"#title"),"Blob test")
c7.fY(0)
c7.h0()
C.V.dz(window,c7.gcC(c7))},
f3:{"^":"fq;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
fY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.ck()
z.dO(50,0.4)
y=new E.b(new Float64Array(2))
x=new Float64Array(2)
y.J(0,0)
w=this.b
v=w.c2(new V.c1(C.e,y,0,new E.b(x),0,0,0,!0,!0,!1,!1,!0,1))
v.c3(z)
y=new E.b(new Float64Array(2))
y.J(-10,0)
z.bG(0.4,50,y,0)
v.c3(z)
y=new E.b(new Float64Array(2))
y.J(10,0)
z.bG(0.4,50,y,0)
v.c3(z)
y=H.f([],[V.aq])
u=new V.cZ(0,0,y,!1)
u.a=C.z
for(t=0;t<20;++t){s=0+(t-0)/20*6.283185307179586
x=new Float64Array(2)
r=new V.c1(C.e,new E.b(x),0,new E.b(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
r.Q=!0
q=Math.sin(s)
p=Math.cos(s)
o=new Float64Array(2)
o[0]=0+5*q
o[1]=10+5*p
x[1]=o[1]
x[0]=o[0]
r.a=C.f
n=w.c2(r)
o=new V.c9(1,65535,0)
m=new V.dg(0.2,0,0,!1,o)
l=new V.ak(new E.b(new Float64Array(2)),C.i,0)
l.b=0.5
m.a=l
m.e=1
o.c=-2
n.d6(m)
C.a.q(y,n)
x=y.length
if(x===1)u.c=n
if(x===2)u.d=n}u.f=10
u.r=1
u.e=!1
w.d8(u)
y=new Float64Array(2)
k=new V.c1(C.e,new E.b(y),0,new E.b(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
k.a=C.f
j=V.ck()
y=new E.b(new Float64Array(2))
y.J(0,25)
j.bG(3,1.5,y,0)
y=new E.b(new Float64Array(2))
y.J(0,25)
k.c=y
w.c2(k).d7(j,1)}}},1],["","",,Q,{"^":"",fq:{"^":"c;",
hB:[function(a,b){var z,y,x,w,v,u,t,s
H.aN(b)
z=this.c
z.aK(0)
y=this.b
x=y.id.a
x.aK(0)
w=y.k1.a
w.aK(0)
v=y.a
if((v&1)===1){v=y.b
v.a.cj(v)
v=y.a&=4294967294}y.a=v|2
v=y.go
v.a=0.016666666666666666
v.d=10
v.e=10
v.b=60
v.c=y.cx*0.016666666666666666
v.f=y.cy
u=y.fr.b
t=w.gaF()
s=$.J
if(typeof s!=="number")return H.H(s)
u.ar(C.c.au(t*1000,s))
w.aK(0)
y.b.fq()
s=y.fr.c
t=w.gaF()
u=$.J
if(typeof u!=="number")return H.H(u)
s.ar(C.c.au(t*1000,u))
if(y.dy&&v.a>0){w.aK(0)
y.fx.bJ(v)
u=y.fr.d
t=w.gaF()
s=$.J
if(typeof s!=="number")return H.H(s)
u.ar(C.c.au(t*1000,s))
w.aK(0)
y.bJ(v)
s=y.fr.e
t=w.gaF()
u=$.J
if(typeof u!=="number")return H.H(u)
s.ar(C.c.au(t*1000,u))}if(y.db&&v.a>0){w.aK(0)
y.e2(v)
u=y.fr.z
w=w.gaF()
t=$.J
if(typeof t!=="number")return H.H(t)
u.ar(C.c.au(w*1000,t))}if(v.a>0)y.cx=v.b
if((y.a&4)===4)y.fo()
y.a&=4294967293
w=y.fr.a
x=x.gaF()
v=$.J
if(typeof v!=="number")return H.H(v)
w.ar(C.c.au(x*1000,v))
z=z.gaF()
v=$.J
if(typeof v!=="number")return H.H(v)
this.Q=C.c.au(z*1e6,v)
v=this.f;(v&&C.k).fp(v,0,0,900,600)
y.fJ()
y=this.y
if(typeof y!=="number")return y.B()
this.y=y+1
C.V.dz(window,this.gcC(this))},"$1","gcC",5,0,19],
h0:function(){var z,y,x,w
z=H.o(H.l(W.iz("canvas",null),"$isa3"),"$iscW")
z.width=900
z.height=600
this.e=z
y=document
x=y.body;(x&&C.r).aE(x,z)
z=this.e
z.toString
this.f=z.getContext("2d")
w=new E.b(new Float64Array(2))
w.J(450,300)
z=new E.b(new Float64Array(2))
z.h(w)
x=new E.b(new Float64Array(2))
x.h(w)
x=new X.f5(z,20,x)
x.a=!0
x.c=this.d
this.r=x
x=new N.f4(this.f,2,x)
this.x=x
this.b.Q=x
this.y=0
this.z=C.v.ce(y,"#fps-counter")
this.ch=C.v.ce(y,"#world-step-time")
P.dT(P.d9(0,0,0,0,0,1),new Q.fr(this))
P.dT(P.d9(0,0,0,200,0,0),new Q.fs(this))}},fr:{"^":"u:7;a",
$1:function(a){var z
H.l(a,"$isav")
z=this.a
J.bZ(z.z,J.aS(z.y))
z.y=0}},fs:{"^":"u:7;a",
$1:function(a){var z,y
H.l(a,"$isav")
z=this.a
y=z.Q
if(y==null)return
J.bZ(z.ch,H.e(y/1000)+" ms")}}}],["","",,O,{"^":""}]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cc.prototype
return J.dj.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.dk.prototype
if(typeof a=="boolean")return J.fT.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.c)return a
return J.bt(a)}
J.jl=function(a){if(typeof a=="number")return J.aC.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.c)return a
return J.bt(a)}
J.W=function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.c)return a
return J.bt(a)}
J.bS=function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.c)return a
return J.bt(a)}
J.jm=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cc.prototype
return J.aC.prototype}if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.cG=function(a){if(typeof a=="number")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.jn=function(a){if(typeof a=="number")return J.aC.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.jo=function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.F=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.c)return a
return J.bt(a)}
J.eL=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jl(a).B(a,b)}
J.aa=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).as(a,b)}
J.ab=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cG(a).aX(a,b)}
J.cM=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cG(a).O(a,b)}
J.cN=function(a){if(typeof a=="number")return-a
return J.jm(a).bn(a)}
J.eM=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jB(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.W(a).i(a,b)}
J.eN=function(a,b,c){return J.bS(a).m(a,b,c)}
J.bu=function(a,b){return J.F(a).f8(a,b)}
J.eO=function(a,b,c){return J.F(a).fa(a,b,c)}
J.eP=function(a,b){return J.F(a).aE(a,b)}
J.eQ=function(a,b){return J.jn(a).b6(a,b)}
J.cO=function(a,b){return J.bS(a).av(a,b)}
J.eR=function(a){return J.F(a).gfn(a)}
J.aR=function(a){return J.C(a).ga1(a)}
J.bv=function(a){return J.bS(a).ga5(a)}
J.aj=function(a){return J.W(a).gH(a)}
J.eS=function(a){return J.F(a).gaU(a)}
J.eT=function(a){return J.F(a).ghc(a)}
J.eU=function(a){return J.F(a).ghl(a)}
J.a1=function(a){return J.F(a).gj(a)}
J.a2=function(a){return J.F(a).gk(a)}
J.bY=function(a,b){return J.F(a).b9(a,b)}
J.cP=function(a){return J.bS(a).hh(a)}
J.cQ=function(a,b){return J.F(a).saI(a,b)}
J.bZ=function(a,b){return J.F(a).sdl(a,b)}
J.cR=function(a,b){return J.F(a).saU(a,b)}
J.c_=function(a,b){return J.F(a).sj(a,b)}
J.c0=function(a,b){return J.F(a).sk(a,b)}
J.eV=function(a,b,c){return J.F(a).dP(a,b,c)}
J.cS=function(a){return J.cG(a).a7(a)}
J.eW=function(a){return J.jo(a).hp(a)}
J.aS=function(a){return J.C(a).u(a)}
I.aM=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bw.prototype
C.k=W.cX.prototype
C.W=W.fx.prototype
C.X=W.fL.prototype
C.v=W.fM.prototype
C.Y=J.D.prototype
C.a=J.b3.prototype
C.l=J.dj.prototype
C.c=J.cc.prototype
C.d=J.dk.prototype
C.b=J.aC.prototype
C.w=J.b4.prototype
C.a4=J.b5.prototype
C.m=H.hi.prototype
C.ah=W.hl.prototype
C.P=J.hB.prototype
C.Q=W.hI.prototype
C.T=W.i1.prototype
C.H=J.ba.prototype
C.V=W.ij.prototype
C.e=new V.c2(0,"BodyType.STATIC")
C.I=new V.c2(1,"BodyType.KINEMATIC")
C.f=new V.c2(2,"BodyType.DYNAMIC")
C.t=new P.iL()
C.q=new V.c6(0,"EPAxisType.UNKNOWN")
C.u=new V.c6(1,"EPAxisType.EDGE_A")
C.J=new V.c6(2,"EPAxisType.EDGE_B")
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
C.K=function(hooks) { return hooks; }

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
C.L=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.a5=new V.U(0,"JointType.UNKNOWN")
C.a6=new V.U(1,"JointType.REVOLUTE")
C.a7=new V.U(10,"JointType.ROPE")
C.z=new V.U(11,"JointType.CONSTANT_VOLUME")
C.a8=new V.U(12,"JointType.MOTOR")
C.a9=new V.U(2,"JointType.PRISMATIC")
C.A=new V.U(3,"JointType.DISTANCE")
C.M=new V.U(4,"JointType.PULLEY")
C.N=new V.U(5,"JointType.MOUSE")
C.aa=new V.U(6,"JointType.GEAR")
C.ab=new V.U(7,"JointType.WHEEL")
C.ac=new V.U(8,"JointType.WELD")
C.O=new V.U(9,"JointType.FRICTION")
C.n=new V.dn(0,"LimitState.INACTIVE")
C.ad=new V.dn(2,"LimitState.AT_UPPER")
C.ae=H.f(I.aM(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.af=H.f(I.aM(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.ag=H.f(I.aM([]),[P.n])
C.B=H.f(I.aM(["bind","if","ref","repeat","syntax"]),[P.n])
C.C=H.f(I.aM(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.o=new V.cg(0,"ManifoldType.CIRCLES")
C.h=new V.cg(1,"ManifoldType.FACE_A")
C.x=new V.cg(2,"ManifoldType.FACE_B")
C.D=new V.cn(0,"SeparationFunctionType.POINTS")
C.E=new V.cn(1,"SeparationFunctionType.FACE_A")
C.F=new V.cn(2,"SeparationFunctionType.FACE_B")
C.i=new V.bK(0,"ShapeType.CIRCLE")
C.p=new V.bK(1,"ShapeType.EDGE")
C.j=new V.bK(2,"ShapeType.POLYGON")
C.y=new V.bK(3,"ShapeType.CHAIN")
C.R=new V.br(0,"TOIOutputState.UNKNOWN")
C.S=new V.br(1,"TOIOutputState.FAILED")
C.ai=new V.br(2,"TOIOutputState.OVERLAPPED")
C.G=new V.br(3,"TOIOutputState.TOUCHING")
C.aj=new V.br(4,"TOIOutputState.SEPARATED")
C.U=new V.id(0,"VertexType.ISOLATED")
$.aF=null
$.bp=null
$.ac=0
$.aT=null
$.cU=null
$.cz=!1
$.eD=null
$.ev=null
$.eI=null
$.bR=null
$.bU=null
$.cH=null
$.bc=null
$.bQ=null
$.bb=null
$.cA=!1
$.aJ=C.t
$.J=null
$.am=null
$.c8=null
$.dc=null
$.db=null
$.d6=0
$.d7=0
$.d8=20
$.dN=0
$.dO=0
$.dP=0
$.dR=0
$.dQ=0
$.jJ=1
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
I.$lazy(y,x,w)}})(["d2","$get$d2",function(){return H.eC("_$dart_dartClosure")},"cd","$get$cd",function(){return H.eC("_$dart_js")},"dX","$get$dX",function(){return H.ah(H.bN({
toString:function(){return"$receiver$"}}))},"dY","$get$dY",function(){return H.ah(H.bN({$method$:null,
toString:function(){return"$receiver$"}}))},"dZ","$get$dZ",function(){return H.ah(H.bN(null))},"e_","$get$e_",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e3","$get$e3",function(){return H.ah(H.bN(void 0))},"e4","$get$e4",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e1","$get$e1",function(){return H.ah(H.e2(null))},"e0","$get$e0",function(){return H.ah(function(){try{null.$method$}catch(z){return z.message}}())},"e6","$get$e6",function(){return H.ah(H.e2(void 0))},"e5","$get$e5",function(){return H.ah(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cu","$get$cu",function(){return P.ir()},"bd","$get$bd",function(){return[]},"ek","$get$ek",function(){return P.dp(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)},"cw","$get$cw",function(){return P.h_(P.n,P.bk)},"aA","$get$aA",function(){return E.e9()},"cs","$get$cs",function(){return E.e9()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.P},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:P.n,args:[P.w]},{func:1,ret:P.V,args:[W.af]},{func:1,ret:P.V,args:[P.n]},{func:1,ret:P.P,args:[P.av]},{func:1,ret:P.V,args:[W.a3,P.n,P.n,W.bs]},{func:1,ret:P.w},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.V,args:[W.r]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.w,args:[P.w,P.c]},{func:1,ret:-1,args:[P.a0]},{func:1,ret:P.w,args:[,,]},{func:1,ret:P.a0},{func:1,ret:E.b},{func:1,ret:P.c},{func:1,ret:V.an}]
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
if(x==y)H.jH(d||a)
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
Isolate.aM=a.aM
Isolate.cF=a.cF
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
if(typeof dartMainRunner==="function")dartMainRunner(O.eF,[])
else O.eF([])})})()
//# sourceMappingURL=blob_test.dart.js.map
