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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isS)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dV(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dW=function(){}
var dart=[["","",,H,{"^":"",nl:{"^":"c;a"}}],["","",,J,{"^":"",
e0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cB:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e_==null){H.mo()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.fx("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dr()]
if(v!=null)return v
v=H.mt(a)
if(v!=null)return v
if(typeof a=="function")return C.am
y=Object.getPrototypeOf(a)
if(y==null)return C.a4
if(y===Object.prototype)return C.a4
if(typeof w=="function"){Object.defineProperty(w,$.$get$dr(),{value:C.S,enumerable:false,writable:true,configurable:true})
return C.S}return C.S},
S:{"^":"c;",
at:function(a,b){return a===b},
ga6:function(a){return H.ca(a)},
u:["fo",function(a){return"Instance of '"+H.cb(a)+"'"}],
"%":"ArrayBuffer|Blob|CanvasGradient|CanvasPattern|Client|DOMError|File|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|PushMessageData|SQLError|SVGAnimatedEnumeration|SVGAnimatedNumberList|SVGAnimatedString|SVGAnimatedTransformList|StorageManager|WindowClient"},
iN:{"^":"S;",
u:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
$isak:1},
eM:{"^":"S;",
at:function(a,b){return null==b},
u:function(a){return"null"},
ga6:function(a){return 0},
$isV:1},
ds:{"^":"S;",
ga6:function(a){return 0},
u:["fq",function(a){return String(a)}]},
jt:{"^":"ds;"},
cc:{"^":"ds;"},
c6:{"^":"ds;",
u:function(a){var z=a[$.$get$en()]
if(z==null)return this.fq(a)
return"JavaScript function for "+H.i(J.bH(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc2:1},
bi:{"^":"S;$ti",
p:function(a,b){H.u(b,H.r(a,0))
if(!!a.fixed$length)H.ar(P.Z("add"))
a.push(b)},
er:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.i(a[y]))
return z.join(b)},
dm:function(a,b){return H.dE(a,b,null,H.r(a,0))},
cQ:function(a,b,c,d){var z,y,x
H.u(b,d)
H.q(c,{func:1,ret:d,args:[d,H.r(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aD(a))}return y},
aS:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
fl:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a1(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a1(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.r(a,0)])
return H.f(a.slice(b,c),[H.r(a,0)])},
gc9:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.eK())},
aD:function(a,b,c,d,e){var z,y,x,w,v,u
z=H.r(a,0)
H.k(d,"$isB",[z],"$asB")
if(!!a.immutable$list)H.ar(P.Z("setRange"))
P.aV(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
x=J.M(d)
if(!!x.$isd){H.k(d,"$isd",[z],"$asd")
w=e
v=d}else{v=x.dm(d,e).iR(0,!1)
w=0}z=J.a4(v)
if(w+y>z.gI(v))throw H.e(H.iK())
if(w<b)for(u=y-1;u>=0;--u)a[b+u]=z.i(v,w+u)
else for(u=0;u<y;++u)a[b+u]=z.i(v,w+u)},
bC:function(a,b,c,d){return this.aD(a,b,c,d,0)},
bL:function(a,b,c,d){var z
H.u(d,H.r(a,0))
if(!!a.immutable$list)H.ar(P.Z("fill range"))
P.aV(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.D(0,1))a[z]=d},
e1:function(a,b){var z,y
H.q(b,{func:1,ret:P.ak,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aD(a))}return!1},
c7:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.az(a[z],b))return z
return-1},
c6:function(a,b){return this.c7(a,b,0)},
au:function(a,b){var z
for(z=0;z<a.length;++z)if(J.az(a[z],b))return!0
return!1},
u:function(a){return P.dn(a,"[","]")},
gar:function(a){return new J.hO(a,a.length,0,[H.r(a,0)])},
ga6:function(a){return H.ca(a)},
gI:function(a){return a.length},
sI:function(a,b){if(!!a.fixed$length)H.ar(P.Z("set length"))
if(b<0)throw H.e(P.a1(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){H.p(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.b5(a,b))
if(b>=a.length||b<0)throw H.e(H.b5(a,b))
return a[b]},
l:function(a,b,c){H.p(b)
H.u(c,H.r(a,0))
if(!!a.immutable$list)H.ar(P.Z("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.b5(a,b))
if(b>=a.length||b<0)throw H.e(H.b5(a,b))
a[b]=c},
D:function(a,b){var z,y
z=[H.r(a,0)]
H.k(b,"$isd",z,"$asd")
y=C.c.D(a.length,b.gI(b))
z=H.f([],z)
this.sI(z,y)
this.bC(z,0,a.length,a)
this.bC(z,a.length,y,b)
return z},
$isB:1,
$isd:1,
E:{
iM:function(a,b){if(a<0||a>4294967295)throw H.e(P.a1(a,0,4294967295,"length",null))
return J.dp(new Array(a),b)},
dp:function(a,b){return J.cp(H.f(a,[b]))},
cp:function(a){H.bT(a)
a.fixed$length=Array
return a},
nj:[function(a,b){return J.hB(H.hp(a,"$isa5"),H.hp(b,"$isa5"))},"$2","lT",8,0,33]}},
nk:{"^":"bi;$ti"},
hO:{"^":"c;a,b,c,0d,$ti",
sdF:function(a){this.d=H.u(a,H.r(this,0))},
ga8:function(){return this.d},
a5:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.d9(z))
x=this.c
if(x>=y){this.sdF(null)
return!1}this.sdF(z[x]);++this.c
return!0},
$isbK:1},
bL:{"^":"S;",
bx:function(a,b){var z
H.bF(b)
if(typeof b!=="number")throw H.e(H.a2(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gcV(b)
if(this.gcV(a)===z)return 0
if(this.gcV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcV:function(a){return a===0?1/a<0:a<0},
P:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.Z(""+a+".toInt()"))},
X:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.Z(""+a+".floor()"))},
bN:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.ah(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.ar(P.Z("Unexpected toString result: "+z))
x=J.a4(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.G("0",w)},
u:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
bQ:function(a){return-a},
D:function(a,b){if(typeof b!=="number")throw H.e(H.a2(b))
return a+b},
L:function(a,b){if(typeof b!=="number")throw H.e(H.a2(b))
return a-b},
d8:function(a,b){return a/b},
G:function(a,b){H.bF(b)
if(typeof b!=="number")throw H.e(H.a2(b))
return a*b},
cm:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
aQ:function(a,b){if(typeof b!=="number")throw H.e(H.a2(b))
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dX(a,b)},
bv:function(a,b){return(a|0)===a?a/b|0:this.dX(a,b)},
dX:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.Z("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aR:function(a,b){var z
if(a>0)z=this.dU(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hw:function(a,b){if(b<0)throw H.e(H.a2(b))
return this.dU(a,b)},
dU:function(a,b){return b>31?0:a>>>b},
bo:function(a,b){return(a|b)>>>0},
M:function(a,b){if(typeof b!=="number")throw H.e(H.a2(b))
return a<b},
aH:function(a,b){if(typeof b!=="number")throw H.e(H.a2(b))
return a>b},
$isa5:1,
$asa5:function(){return[P.am]},
$isbS:1,
$isam:1},
dq:{"^":"bL;",
bQ:function(a){return-a},
$isj:1},
eL:{"^":"bL;"},
c5:{"^":"S;",
ah:function(a,b){if(b<0)throw H.e(H.b5(a,b))
if(b>=a.length)H.ar(H.b5(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(b>=a.length)throw H.e(H.b5(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.z(b)
if(typeof b!=="string")throw H.e(P.eb(b,null,null))
return a+b},
by:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.ar(H.a2(b))
c=P.aV(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aI:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.ar(H.a2(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aP:function(a,b){return this.aI(a,b,0)},
K:function(a,b,c){H.p(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.ar(H.a2(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.e(P.cR(b,null,null))
if(b>c)throw H.e(P.cR(b,null,null))
if(c>a.length)throw H.e(P.cR(c,null,null))
return a.substring(b,c)},
bS:function(a,b){return this.K(a,b,null)},
iS:function(a){return a.toLowerCase()},
G:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.ac)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
c7:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
c6:function(a,b){return this.c7(a,b,0)},
hS:function(a,b,c){if(c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
return H.mA(a,b,c)},
bx:function(a,b){var z
H.z(b)
if(typeof b!=="string")throw H.e(H.a2(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
u:function(a){return a},
ga6:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gI:function(a){return a.length},
$isa5:1,
$asa5:function(){return[P.n]},
$isjs:1,
$isn:1}}],["","",,H,{"^":"",
d5:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
eK:function(){return new P.cT("No element")},
iL:function(){return new P.cT("Too many elements")},
iK:function(){return new P.cT("Too few elements")},
jQ:function(a,b,c){H.k(a,"$isd",[c],"$asd")
H.q(b,{func:1,ret:P.j,args:[c,c]})
H.cv(a,0,J.at(a)-1,b,c)},
cv:function(a,b,c,d,e){H.k(a,"$isd",[e],"$asd")
H.q(d,{func:1,ret:P.j,args:[e,e]})
if(c-b<=32)H.jP(a,b,c,d,e)
else H.jO(a,b,c,d,e)},
jP:function(a,b,c,d,e){var z,y,x,w,v
H.k(a,"$isd",[e],"$asd")
H.q(d,{func:1,ret:P.j,args:[e,e]})
for(z=b+1,y=J.a4(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aQ(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
jO:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.k(a,"$isd",[a2],"$asd")
H.q(a1,{func:1,ret:P.j,args:[a2,a2]})
z=C.c.bv(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.bv(b+a0,2)
v=w-z
u=w+z
t=J.a4(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aQ(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aQ(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aQ(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aQ(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aQ(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aQ(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aQ(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aQ(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aQ(a1.$2(p,o),0)){n=o
o=p
p=n}t.l(a,y,s)
t.l(a,w,q)
t.l(a,x,o)
t.l(a,v,t.i(a,b))
t.l(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.az(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.M()
if(i<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.aH()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
l=h
m=g
break}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.M()
if(e<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.aH()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.aH()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.M()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.l(a,b,t.i(a,c))
t.l(a,c,r)
c=l+1
t.l(a,a0,t.i(a,c))
t.l(a,c,p)
H.cv(a,b,m-2,a1,a2)
H.cv(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.az(a1.$2(t.i(a,m),r),0);)++m
for(;J.az(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.M()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}H.cv(a,m,l,a1,a2)}else H.cv(a,m,l,a1,a2)},
i3:{"^":"ka;a",
gI:function(a){return this.a.length},
i:function(a,b){return C.b.ah(this.a,b)},
$ascY:function(){return[P.j]},
$asad:function(){return[P.j]},
$asB:function(){return[P.j]},
$asd:function(){return[P.j]}},
dl:{"^":"B;"},
cr:{"^":"dl;$ti",
gar:function(a){return new H.eT(this,this.gI(this),0,[H.aH(this,"cr",0)])},
d7:function(a,b){return this.fp(0,H.q(b,{func:1,ret:P.ak,args:[H.aH(this,"cr",0)]}))}},
jX:{"^":"cr;a,b,c,$ti",
gh3:function(){var z,y
z=J.at(this.a)
y=this.c
if(y==null||y>z)return z
return y},
ghx:function(){var z,y
z=J.at(this.a)
y=this.b
if(y>z)return z
return y},
gI:function(a){var z,y,x
z=J.at(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.L()
return x-y},
aS:function(a,b){var z,y
z=this.ghx()+b
if(b>=0){y=this.gh3()
if(typeof y!=="number")return H.N(y)
y=z>=y}else y=!0
if(y)throw H.e(P.co(b,this,"index",null,null))
return J.e5(this.a,z)},
iR:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.a4(y)
w=x.gI(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.L()
u=w-z
if(u<0)u=0
t=new Array(u)
t.fixed$length=Array
s=H.f(t,this.$ti)
for(r=0;r<u;++r){C.a.l(s,r,x.aS(y,z+r))
if(x.gI(y)<w)throw H.e(P.aD(this))}return s},
E:{
dE:function(a,b,c,d){if(c!=null){if(c<0)H.ar(P.a1(c,0,null,"end",null))
if(b>c)H.ar(P.a1(b,0,c,"start",null))}return new H.jX(a,b,c,[d])}}},
eT:{"^":"c;a,b,c,0d,$ti",
sdr:function(a){this.d=H.u(a,H.r(this,0))},
ga8:function(){return this.d},
a5:function(){var z,y,x,w
z=this.a
y=J.a4(z)
x=y.gI(z)
if(this.b!==x)throw H.e(P.aD(z))
w=this.c
if(w>=x){this.sdr(null)
return!1}this.sdr(y.aS(z,w));++this.c
return!0},
$isbK:1},
j0:{"^":"cr;a,b,$ti",
gI:function(a){return J.at(this.a)},
aS:function(a,b){return this.b.$1(J.e5(this.a,b))},
$ascr:function(a,b){return[b]},
$asB:function(a,b){return[b]}},
fF:{"^":"B;a,b,$ti",
gar:function(a){return new H.kv(J.cl(this.a),this.b,this.$ti)}},
kv:{"^":"bK;a,b,$ti",
a5:function(){var z,y
for(z=this.a,y=this.b;z.a5();)if(y.$1(z.ga8()))return!0
return!1},
ga8:function(){return this.a.ga8()}},
cN:{"^":"c;$ti"},
cY:{"^":"c;$ti",
l:function(a,b,c){H.p(b)
H.u(c,H.aH(this,"cY",0))
throw H.e(P.Z("Cannot modify an unmodifiable list"))},
bL:function(a,b,c,d){H.u(d,H.aH(this,"cY",0))
throw H.e(P.Z("Cannot modify an unmodifiable list"))}},
ka:{"^":"eS+cY;"}}],["","",,H,{"^":"",
i7:function(){throw H.e(P.Z("Cannot modify unmodifiable Map"))},
da:function(a){var z,y
z=H.z(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
mg:function(a){return init.types[H.p(a)]},
mr:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isbM},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bH(a)
if(typeof z!=="string")throw H.e(H.a2(a))
return z},
ca:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jy:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.b(z,3)
y=H.z(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.Y(w,u)|32)>x)return}return parseInt(a,b)},
cb:function(a){return H.jv(a)+H.dT(H.bE(a),0,null)},
jv:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.af||!!z.$iscc){u=C.X(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.da(w.length>1&&C.b.Y(w,0)===36?C.b.bS(w,1):w)},
nH:[function(){return Date.now()},"$0","lV",0,0,34],
H:function(){var z,y
if($.C!=null)return
$.C=1000
$.ct=H.lV()
if(typeof window=="undefined")return
z=window
if(z==null)return
y=z.performance
if(y==null)return
if(typeof y.now!="function")return
$.C=1e6
$.ct=new H.jx(y)},
jw:function(){if(!!self.location)return self.location.href
return},
f1:function(a){var z,y,x,w,v
H.bT(a)
z=J.at(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jz:function(a){var z,y,x,w
z=H.f([],[P.j])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.d9)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.a2(w))
if(w<=65535)C.a.p(z,w)
else if(w<=1114111){C.a.p(z,55296+(C.c.aR(w-65536,10)&1023))
C.a.p(z,56320+(w&1023))}else throw H.e(H.a2(w))}return H.f1(z)},
f2:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.a2(x))
if(x<0)throw H.e(H.a2(x))
if(x>65535)return H.jz(a)}return H.f1(a)},
jA:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
dy:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.aR(z,10))>>>0,56320|z&1023)}}throw H.e(P.a1(a,0,1114111,null,null))},
N:function(a){throw H.e(H.a2(a))},
b:function(a,b){if(a==null)J.at(a)
throw H.e(H.b5(a,b))},
b5:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b6(!0,b,"index",null)
z=H.p(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.N(z)
y=b>=z}else y=!0
if(y)return P.co(b,a,"index",null,z)
return P.cR(b,"index",null)},
a2:function(a){return new P.b6(!0,a,null,null)},
hh:function(a){if(typeof a!=="number")throw H.e(H.a2(a))
return a},
e:function(a){var z
if(a==null)a=new P.f0()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ht})
z.name=""}else z.toString=H.ht
return z},
ht:function(){return J.bH(this.dartException)},
ar:function(a){throw H.e(a)},
d9:function(a){throw H.e(P.aD(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aR(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dt(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.f_(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fm()
u=$.$get$fn()
t=$.$get$fo()
s=$.$get$fp()
r=$.$get$ft()
q=$.$get$fu()
p=$.$get$fr()
$.$get$fq()
o=$.$get$fw()
n=$.$get$fv()
m=v.aM(y)
if(m!=null)return z.$1(H.dt(H.z(y),m))
else{m=u.aM(y)
if(m!=null){m.method="call"
return z.$1(H.dt(H.z(y),m))}else{m=t.aM(y)
if(m==null){m=s.aM(y)
if(m==null){m=r.aM(y)
if(m==null){m=q.aM(y)
if(m==null){m=p.aM(y)
if(m==null){m=s.aM(y)
if(m==null){m=o.aM(y)
if(m==null){m=n.aM(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.f_(H.z(y),m))}}return z.$1(new H.k9(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f8()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.b6(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f8()
return a},
ck:function(a){var z
if(a==null)return new H.fV(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fV(a)},
mb:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
mq:function(a,b,c,d,e,f){H.h(a,"$isc2")
switch(H.p(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.kM("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var z
H.p(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mq)
a.$identity=z
return z},
i2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isd){z.$reflectionInfo=d
x=H.jG(z).r}else x=d
w=e?Object.create(new H.jR().constructor.prototype):Object.create(new H.dh(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aS
if(typeof u!=="number")return u.D()
$.aS=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ei(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mg,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ef:H.di
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ei(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i_:function(a,b,c,d){var z=H.di
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ei:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i1(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i_(y,!w,z,b)
if(y===0){w=$.aS
if(typeof w!=="number")return w.D()
$.aS=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bV
if(v==null){v=H.cF("self")
$.bV=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aS
if(typeof w!=="number")return w.D()
$.aS=w+1
t+=w
w="return function("+t+"){return this."
v=$.bV
if(v==null){v=H.cF("self")
$.bV=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
i0:function(a,b,c,d){var z,y
z=H.di
y=H.ef
switch(b?-1:a){case 0:throw H.e(H.jJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i1:function(a,b){var z,y,x,w,v,u,t,s
z=$.bV
if(z==null){z=H.cF("self")
$.bV=z}y=$.ee
if(y==null){y=H.cF("receiver")
$.ee=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aS
if(typeof y!=="number")return y.D()
$.aS=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aS
if(typeof y!=="number")return y.D()
$.aS=y+1
return new Function(z+y+"}")()},
dV:function(a,b,c,d,e,f,g){var z,y
z=J.cp(H.bT(b))
H.p(c)
y=!!J.M(d).$isd?J.cp(d):d
return H.i2(a,z,c,y,!!e,f,g)},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aN(a,"String"))},
cj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aN(a,"double"))},
bF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aN(a,"num"))},
m5:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aN(a,"bool"))},
p:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aN(a,"int"))},
e2:function(a,b){throw H.e(H.aN(a,H.z(b).substring(3)))},
mx:function(a,b){var z=J.a4(b)
throw H.e(H.hY(a,z.K(b,3,z.gI(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.e2(a,b)},
y:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.mx(a,b)},
hp:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.M(a)[b])return a
H.e2(a,b)},
bT:function(a){if(a==null)return a
if(!!J.M(a).$isd)return a
throw H.e(H.aN(a,"List"))},
ms:function(a,b){var z
if(a==null)return a
z=J.M(a)
if(!!z.$isd)return a
if(z[b])return a
H.e2(a,b)},
hk:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.p(z)]
else return a.$S()}return},
cz:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hk(J.M(a))
if(z==null)return!1
return H.h6(z,null,b,null)},
q:function(a,b){var z,y
if(a==null)return a
if($.dQ)return a
$.dQ=!0
try{if(H.cz(a,b))return a
z=H.d8(b)
y=H.aN(a,z)
throw H.e(y)}finally{$.dQ=!1}},
dX:function(a,b){if(a!=null&&!H.dU(a,b))H.ar(H.aN(a,H.d8(b)))
return a},
hc:function(a){var z,y
z=J.M(a)
if(!!z.$isw){y=H.hk(z)
if(y!=null)return H.d8(y)
return"Closure"}return H.cb(a)},
mB:function(a){throw H.e(new P.id(H.z(a)))},
hl:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
oc:function(a,b,c){return H.bU(a["$as"+H.i(c)],H.bE(b))},
bD:function(a,b,c,d){var z
H.z(c)
H.p(d)
z=H.bU(a["$as"+H.i(c)],H.bE(b))
return z==null?null:z[d]},
aH:function(a,b,c){var z
H.z(b)
H.p(c)
z=H.bU(a["$as"+H.i(b)],H.bE(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.p(b)
z=H.bE(a)
return z==null?null:z[b]},
d8:function(a){return H.bB(a,null)},
bB:function(a,b){var z,y
H.k(b,"$isd",[P.n],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.da(a[0].builtin$cls)+H.dT(a,1,b)
if(typeof a=="function")return H.da(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.p(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.b(b,y)
return H.i(b[y])}if('func' in a)return H.lS(a,b)
if('futureOr' in a)return"FutureOr<"+H.bB("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.k(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.p(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.b(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.bB(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bB(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bB(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bB(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ma(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.z(z[l])
n=n+m+H.bB(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dT:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isd",[P.n],"$asd")
if(a==null)return""
z=new P.b2("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bB(u,c)}return"<"+z.u(0)+">"},
bU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cy:function(a,b,c,d){var z,y
H.z(b)
H.bT(c)
H.z(d)
if(a==null)return!1
z=H.bE(a)
y=J.M(a)
if(y[b]==null)return!1
return H.hf(H.bU(y[d],z),null,c,null)},
k:function(a,b,c,d){H.z(b)
H.bT(c)
H.z(d)
if(a==null)return a
if(H.cy(a,b,c,d))return a
throw H.e(H.aN(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dT(c,0,null),init.mangledGlobalNames)))},
hf:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aG(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aG(a[y],b,c[y],d))return!1
return!0},
oa:function(a,b,c){return a.apply(b,H.bU(J.M(b)["$as"+H.i(c)],H.bE(b)))},
hn:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="V"||a===-1||a===-2||H.hn(z)}return!1},
dU:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="V"||b===-1||b===-2||H.hn(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cz(a,b)}z=J.M(a).constructor
y=H.bE(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aG(z,null,b,null)},
u:function(a,b){if(a!=null&&!H.dU(a,b))throw H.e(H.aN(a,H.d8(b)))
return a},
aG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aG(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="V")return!0
if('func' in c)return H.h6(a,b,c,d)
if('func' in a)return c.builtin$cls==="c2"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aG("type" in a?a.type:null,b,x,d)
else if(H.aG(a,b,x,d))return!0
else{if(!('$is'+"c3" in y.prototype))return!1
w=y.prototype["$as"+"c3"]
v=H.bU(w,z?a.slice(1):null)
return H.aG(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hf(H.bU(r,z),b,u,d)},
h6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aG(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aG(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aG(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aG(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mv(m,b,l,d)},
mv:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aG(c[w],d,a[w],b))return!1}return!0},
ob:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
mt:function(a){var z,y,x,w,v,u
z=H.z($.hm.$1(a))
y=$.d3[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d6[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.z($.he.$2(a,z))
if(z!=null){y=$.d3[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d6[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d7(x)
$.d3[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d6[z]=x
return x}if(v==="-"){u=H.d7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hq(a,x)
if(v==="*")throw H.e(P.fx(z))
if(init.leafTags[z]===true){u=H.d7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hq(a,x)},
hq:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e0(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d7:function(a){return J.e0(a,!1,null,!!a.$isbM)},
mu:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d7(z)
else return J.e0(z,c,null,null)},
mo:function(){if(!0===$.e_)return
$.e_=!0
H.mp()},
mp:function(){var z,y,x,w,v,u,t,s
$.d3=Object.create(null)
$.d6=Object.create(null)
H.mk()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hr.$1(v)
if(u!=null){t=H.mu(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mk:function(){var z,y,x,w,v,u,t
z=C.aj()
z=H.bQ(C.ag,H.bQ(C.al,H.bQ(C.W,H.bQ(C.W,H.bQ(C.ak,H.bQ(C.ah,H.bQ(C.ai(C.X),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hm=new H.ml(v)
$.he=new H.mm(u)
$.hr=new H.mn(t)},
bQ:function(a,b){return a(b)||b},
mA:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i6:{"^":"c;$ti",
u:function(a){return P.dw(this)},
l:function(a,b,c){H.u(b,H.r(this,0))
H.u(c,H.r(this,1))
return H.i7()},
$isaq:1},
i8:{"^":"i6;a,b,c,$ti",
gI:function(a){return this.a},
bf:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
i:function(a,b){if(!this.bf(b))return
return this.dG(b)},
dG:function(a){return this.b[H.z(a)]},
bg:function(a,b){var z,y,x,w,v
z=H.r(this,1)
H.q(b,{func:1,ret:-1,args:[H.r(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.u(this.dG(v),z))}}},
jF:{"^":"c;a,b,c,d,e,f,r,0x",E:{
jG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cp(z)
y=z[0]
x=z[1]
return new H.jF(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jx:{"^":"w:13;a",
$0:function(){return C.d.X(1000*this.a.now())}},
k4:{"^":"c;a,b,c,d,e,f",
aM:function(a){var z,y,x
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
aX:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.k4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fs:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ji:{"^":"a6;a,b",
u:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
E:{
f_:function(a,b){return new H.ji(a,b==null?null:b.method)}}},
iP:{"^":"a6;a,b,c",
u:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
E:{
dt:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iP(a,y,z?null:b.receiver)}}},
k9:{"^":"a6;a",
u:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mC:{"^":"w:5;a",
$1:function(a){if(!!J.M(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fV:{"^":"c;a,0b",
u:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaM:1},
w:{"^":"c;",
u:function(a){return"Closure '"+H.cb(this).trim()+"'"},
geH:function(){return this},
$isc2:1,
geH:function(){return this}},
fc:{"^":"w;"},
jR:{"^":"fc;",
u:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.da(z)+"'"}},
dh:{"^":"fc;a,b,c,d",
at:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dh))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var z,y
z=this.c
if(z==null)y=H.ca(this.a)
else y=typeof z!=="object"?J.bG(z):H.ca(z)
return(y^H.ca(this.b))>>>0},
u:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.cb(z)+"'")},
E:{
di:function(a){return a.a},
ef:function(a){return a.c},
cF:function(a){var z,y,x,w,v
z=new H.dh("self","target","receiver","name")
y=J.cp(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
k5:{"^":"a6;a",
u:function(a){return this.a},
E:{
aN:function(a,b){return new H.k5("TypeError: "+H.i(P.cM(a))+": type '"+H.hc(a)+"' is not a subtype of type '"+b+"'")}}},
hX:{"^":"a6;a",
u:function(a){return this.a},
E:{
hY:function(a,b){return new H.hX("CastError: "+H.i(P.cM(a))+": type '"+H.hc(a)+"' is not a subtype of type '"+b+"'")}}},
jI:{"^":"a6;a",
u:function(a){return"RuntimeError: "+H.i(this.a)},
E:{
jJ:function(a){return new H.jI(a)}}},
eO:{"^":"dv;a,0b,0c,0d,0e,0f,r,$ti",
gI:function(a){return this.a},
gb3:function(){return new H.iS(this,[H.r(this,0)])},
bf:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.fX(z,a)}else{y=this.il(a)
return y}},
il:function(a){var z=this.d
if(z==null)return!1
return this.cU(this.cA(z,J.bG(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bW(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bW(w,b)
x=y==null?null:y.b
return x}else return this.im(b)},
im:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cA(z,J.bG(a)&0x3ffffff)
x=this.cU(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y,x,w,v,u
H.u(b,H.r(this,0))
H.u(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cC()
this.b=z}this.dt(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cC()
this.c=y}this.dt(y,b,c)}else{x=this.d
if(x==null){x=this.cC()
this.d=x}w=J.bG(b)&0x3ffffff
v=this.cA(x,w)
if(v==null)this.cI(x,w,[this.cD(b,c)])
else{u=this.cU(v,b)
if(u>=0)v[u].b=c
else v.push(this.cD(b,c))}}},
bg:function(a,b){var z,y
H.q(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aD(this))
z=z.c}},
dt:function(a,b,c){var z
H.u(b,H.r(this,0))
H.u(c,H.r(this,1))
z=this.bW(a,b)
if(z==null)this.cI(a,b,this.cD(b,c))
else z.b=c},
hf:function(){this.r=this.r+1&67108863},
cD:function(a,b){var z,y
z=new H.iR(H.u(a,H.r(this,0)),H.u(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.hf()
return z},
cU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.az(a[y].a,b))return y
return-1},
u:function(a){return P.dw(this)},
bW:function(a,b){return a[b]},
cA:function(a,b){return a[b]},
cI:function(a,b,c){a[b]=c},
h_:function(a,b){delete a[b]},
fX:function(a,b){return this.bW(a,b)!=null},
cC:function(){var z=Object.create(null)
this.cI(z,"<non-identifier-key>",z)
this.h_(z,"<non-identifier-key>")
return z},
$iseP:1},
iR:{"^":"c;a,b,0c,0d"},
iS:{"^":"dl;a,$ti",
gI:function(a){return this.a.a},
gar:function(a){var z,y
z=this.a
y=new H.iT(z,z.r,this.$ti)
y.c=z.e
return y}},
iT:{"^":"c;a,b,0c,0d,$ti",
sds:function(a){this.d=H.u(a,H.r(this,0))},
ga8:function(){return this.d},
a5:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aD(z))
else{z=this.c
if(z==null){this.sds(null)
return!1}else{this.sds(z.a)
this.c=this.c.c
return!0}}},
$isbK:1},
ml:{"^":"w:5;a",
$1:function(a){return this.a(a)}},
mm:{"^":"w:31;a",
$2:function(a,b){return this.a(a,b)}},
mn:{"^":"w:35;a",
$1:function(a){return this.a(H.z(a))}}}],["","",,H,{"^":"",
ma:function(a){return J.dp(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
lR:function(a){return a},
jd:function(a){return new Int8Array(a)},
aY:function(a,b,c){H.bT(b)
if(a>>>0!==a||a>=c)throw H.e(H.b5(b,a))},
je:{"^":"S;","%":"DataView;ArrayBufferView;dx|fR|fS|eX|fT|fU|bk"},
dx:{"^":"je;",
gI:function(a){return a.length},
$isbM:1,
$asbM:I.dW},
eX:{"^":"fS;",
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
l:function(a,b,c){H.p(b)
H.cj(c)
H.aY(b,a,a.length)
a[b]=c},
$ascN:function(){return[P.bS]},
$asad:function(){return[P.bS]},
$isB:1,
$asB:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
"%":"Float32Array"},
bk:{"^":"fU;",
l:function(a,b,c){H.p(b)
H.p(c)
H.aY(b,a,a.length)
a[b]=c},
$ascN:function(){return[P.j]},
$asad:function(){return[P.j]},
$isB:1,
$asB:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]}},
jc:{"^":"eX;",$iseG:1,"%":"Float64Array"},
nq:{"^":"bk;",
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nr:{"^":"bk;",
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ns:{"^":"bk;",
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
$isni:1,
"%":"Int8Array"},
nt:{"^":"bk;",
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nu:{"^":"bk;",
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nv:{"^":"bk;",
gI:function(a){return a.length},
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
eY:{"^":"bk;",
gI:function(a){return a.length},
i:function(a,b){H.aY(b,a,a.length)
return a[b]},
$iseY:1,
$isL:1,
"%":";Uint8Array"},
fR:{"^":"dx+ad;"},
fS:{"^":"fR+cN;"},
fT:{"^":"dx+ad;"},
fU:{"^":"fT+cN;"}}],["","",,P,{"^":"",
kz:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.m0()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bR(new P.kB(z),1)).observe(y,{childList:true})
return new P.kA(z,y,x)}else if(self.setImmediate!=null)return P.m1()
return P.m2()},
o1:[function(a){self.scheduleImmediate(H.bR(new P.kC(H.q(a,{func:1,ret:-1})),0))},"$1","m0",4,0,2],
o2:[function(a){self.setImmediate(H.bR(new P.kD(H.q(a,{func:1,ret:-1})),0))},"$1","m1",4,0,2],
o3:[function(a){H.q(a,{func:1,ret:-1})
P.lj(0,a)},"$1","m2",4,0,2],
fk:function(a,b){var z
H.q(b,{func:1,ret:-1,args:[P.bv]})
z=C.c.bv(a.a,1000)
return P.lk(z<0?0:z,b)},
lX:function(a,b){if(H.cz(a,{func:1,args:[P.c,P.aM]}))return b.iG(a,null,P.c,P.aM)
if(H.cz(a,{func:1,args:[P.c]}))return H.q(a,{func:1,ret:null,args:[P.c]})
throw H.e(P.eb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lW:function(){var z,y
for(;z=$.bP,z!=null;){$.ch=null
y=z.b
$.bP=y
if(y==null)$.cg=null
z.a.$0()}},
o9:[function(){$.dR=!0
try{P.lW()}finally{$.ch=null
$.dR=!1
if($.bP!=null)$.$get$dJ().$1(P.hg())}},"$0","hg",0,0,0],
hb:function(a){var z=new P.fH(H.q(a,{func:1,ret:-1}))
if($.bP==null){$.cg=z
$.bP=z
if(!$.dR)$.$get$dJ().$1(P.hg())}else{$.cg.b=z
$.cg=z}},
m_:function(a){var z,y,x
H.q(a,{func:1,ret:-1})
z=$.bP
if(z==null){P.hb(a)
$.ch=$.cg
return}y=new P.fH(a)
x=$.ch
if(x==null){y.b=z
$.ch=y
$.bP=y}else{y.b=x.b
x.b=y
$.ch=y
if(y.b==null)$.cg=y}},
mz:function(a){var z,y
z={func:1,ret:-1}
H.q(a,z)
y=$.U
if(C.n===y){P.d2(null,null,C.n,a)
return}y.toString
P.d2(null,null,y,H.q(y.e3(a),z))},
fj:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bv]}
H.q(b,z)
y=$.U
if(y===C.n){y.toString
return P.fk(a,b)}x=y.e4(b,P.bv)
$.U.toString
return P.fk(a,H.q(x,z))},
d1:function(a,b,c,d,e){var z={}
z.a=d
P.m_(new P.lY(z,e))},
h7:function(a,b,c,d,e){var z,y
H.q(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
h8:function(a,b,c,d,e,f,g){var z,y
H.q(d,{func:1,ret:f,args:[g]})
H.u(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
lZ:function(a,b,c,d,e,f,g,h,i){var z,y
H.q(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
d2:function(a,b,c,d){var z
H.q(d,{func:1,ret:-1})
z=C.n!==c
if(z)d=!(!z||!1)?c.e3(d):c.hI(d,-1)
P.hb(d)},
kB:{"^":"w:4;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kA:{"^":"w:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.q(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kC:{"^":"w:1;a",
$0:function(){this.a.$0()}},
kD:{"^":"w:1;a",
$0:function(){this.a.$0()}},
fX:{"^":"c;a,0b,c",
fK:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bR(new P.lm(this,b),0),a)
else throw H.e(P.Z("`setTimeout()` not found."))},
fL:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bR(new P.ll(this,a,Date.now(),b),0),a)
else throw H.e(P.Z("Periodic timer."))},
$isbv:1,
E:{
lj:function(a,b){var z=new P.fX(!0,0)
z.fK(a,b)
return z},
lk:function(a,b){var z=new P.fX(!1,0)
z.fL(a,b)
return z}}},
lm:{"^":"w:0;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ll:{"^":"w:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.aQ(w,x)}z.c=y
this.d.$1(z)}},
bO:{"^":"c;0a,b,c,d,e,$ti",
it:function(a){if(this.c!==6)return!0
return this.b.b.d2(H.q(this.d,{func:1,ret:P.ak,args:[P.c]}),a.a,P.ak,P.c)},
ii:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.cz(z,{func:1,args:[P.c,P.aM]}))return H.dX(w.iJ(z,a.a,a.b,null,y,P.aM),x)
else return H.dX(w.d2(H.q(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
b3:{"^":"c;dW:a<,b,0hr:c<,$ti",
eD:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.q(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.n){y.toString
H.q(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lX(b,y)}H.q(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b3(0,$.U,[c])
w=b==null?1:3
this.du(new P.bO(x,w,a,b,[z,c]))
return x},
iP:function(a,b){return this.eD(a,null,b)},
du:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbO")
this.c=a}else{if(z===2){y=H.h(this.c,"$isb3")
z=y.a
if(z<4){y.du(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.d2(null,null,z,H.q(new P.kN(this,a),{func:1,ret:-1}))}},
dR:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbO")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isb3")
y=u.a
if(y<4){u.dR(a)
return}this.a=y
this.c=u.c}z.a=this.c0(a)
y=this.b
y.toString
P.d2(null,null,y,H.q(new P.kS(z,this),{func:1,ret:-1}))}},
cH:function(){var z=H.h(this.c,"$isbO")
this.c=null
return this.c0(z)},
c0:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dD:function(a){var z,y,x
z=H.r(this,0)
H.dX(a,{futureOr:1,type:z})
y=this.$ti
if(H.cy(a,"$isc3",y,"$asc3"))if(H.cy(a,"$isb3",y,null))P.fM(a,this)
else P.kO(a,this)
else{x=this.cH()
H.u(a,z)
this.a=4
this.c=a
P.cd(this,x)}},
ct:[function(a,b){var z
H.h(b,"$isaM")
z=this.cH()
this.a=8
this.c=new P.aC(a,b)
P.cd(this,z)},function(a){return this.ct(a,null)},"j1","$2","$1","gfT",4,2,30],
$isc3:1,
E:{
kO:function(a,b){var z,y,x
b.a=1
try{a.eD(new P.kP(b),new P.kQ(b),null)}catch(x){z=H.as(x)
y=H.ck(x)
P.mz(new P.kR(b,z,y))}},
fM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isb3")
if(z>=4){y=b.cH()
b.a=a.a
b.c=a.c
P.cd(b,y)}else{y=H.h(b.c,"$isbO")
b.a=2
b.c=a
a.dR(y)}},
cd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isaC")
y=y.b
u=v.a
t=v.b
y.toString
P.d1(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.cd(z.a,b)}y=z.a
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
if(p){H.h(r,"$isaC")
y=y.b
u=r.a
t=r.b
y.toString
P.d1(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.kV(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kU(x,b,r).$0()}else if((y&2)!==0)new P.kT(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.M(y).$isc3){if(y.a>=4){n=H.h(t.c,"$isbO")
t.c=null
b=t.c0(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fM(y,t)
return}}m=b.b
n=H.h(m.c,"$isbO")
m.c=null
b=m.c0(n)
y=x.a
u=x.b
if(!y){H.u(u,H.r(m,0))
m.a=4
m.c=u}else{H.h(u,"$isaC")
m.a=8
m.c=u}z.a=m
y=m}}}},
kN:{"^":"w:1;a,b",
$0:function(){P.cd(this.a,this.b)}},
kS:{"^":"w:1;a,b",
$0:function(){P.cd(this.b,this.a.a)}},
kP:{"^":"w:4;a",
$1:function(a){var z=this.a
z.a=0
z.dD(a)}},
kQ:{"^":"w:29;a",
$2:function(a,b){this.a.ct(a,H.h(b,"$isaM"))},
$1:function(a){return this.$2(a,null)}},
kR:{"^":"w:1;a,b,c",
$0:function(){this.a.ct(this.b,this.c)}},
kV:{"^":"w:0;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eC(H.q(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.ck(v)
if(this.d){w=H.h(this.a.a.c,"$isaC").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isaC")
else u.b=new P.aC(y,x)
u.a=!0
return}if(!!J.M(z).$isc3){if(z instanceof P.b3&&z.gdW()>=4){if(z.gdW()===8){w=this.b
w.b=H.h(z.ghr(),"$isaC")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iP(new P.kW(t),null)
w.a=!1}}},
kW:{"^":"w:24;a",
$1:function(a){return this.a}},
kU:{"^":"w:0;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.u(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.d2(H.q(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.ck(t)
x=this.a
x.b=new P.aC(z,y)
x.a=!0}}},
kT:{"^":"w:0;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isaC")
w=this.c
if(w.it(z)&&w.e!=null){v=this.b
v.b=w.ii(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.ck(u)
w=H.h(this.a.a.c,"$isaC")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aC(y,x)
s.a=!0}}},
fH:{"^":"c;a,0b"},
dD:{"^":"c;$ti",
gI:function(a){var z,y
z={}
y=new P.b3(0,$.U,[P.j])
z.a=0
this.iq(new P.jU(z,this),!0,new P.jV(z,y),y.gfT())
return y}},
jU:{"^":"w;a,b",
$1:function(a){H.u(a,H.aH(this.b,"dD",0));++this.a.a},
$S:function(){return{func:1,ret:P.V,args:[H.aH(this.b,"dD",0)]}}},
jV:{"^":"w:1;a,b",
$0:function(){this.b.dD(this.a.a)}},
jS:{"^":"c;$ti"},
jT:{"^":"c;"},
bv:{"^":"c;"},
aC:{"^":"c;a,b",
u:function(a){return H.i(this.a)},
$isa6:1},
lI:{"^":"c;",$iso0:1},
lY:{"^":"w:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.f0()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.u(0)
throw x}},
l6:{"^":"lI;",
gbk:function(a){return},
iK:function(a){var z,y,x
H.q(a,{func:1,ret:-1})
try{if(C.n===$.U){a.$0()
return}P.h7(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.ck(x)
P.d1(null,null,this,z,H.h(y,"$isaM"))}},
iL:function(a,b,c){var z,y,x
H.q(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.n===$.U){a.$1(b)
return}P.h8(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.ck(x)
P.d1(null,null,this,z,H.h(y,"$isaM"))}},
hI:function(a,b){return new P.l8(this,H.q(a,{func:1,ret:b}),b)},
e3:function(a){return new P.l7(this,H.q(a,{func:1,ret:-1}))},
e4:function(a,b){return new P.l9(this,H.q(a,{func:1,ret:-1,args:[b]}),b)},
eC:function(a,b){H.q(a,{func:1,ret:b})
if($.U===C.n)return a.$0()
return P.h7(null,null,this,a,b)},
d2:function(a,b,c,d){H.q(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.U===C.n)return a.$1(b)
return P.h8(null,null,this,a,b,c,d)},
iJ:function(a,b,c,d,e,f){H.q(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.U===C.n)return a.$2(b,c)
return P.lZ(null,null,this,a,b,c,d,e,f)},
iG:function(a,b,c,d){return H.q(a,{func:1,ret:b,args:[c,d]})}},
l8:{"^":"w;a,b,c",
$0:function(){return this.a.eC(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l7:{"^":"w:0;a,b",
$0:function(){return this.a.iK(this.b)}},
l9:{"^":"w;a,b,c",
$1:function(a){var z=this.c
return this.a.iL(this.b,H.u(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
a_:function(a,b,c,d,e){return new P.kX(0,[d,e])},
iU:function(a,b,c){H.bT(a)
return H.k(H.mb(a,new H.eO(0,0,[b,c])),"$iseP",[b,c],"$aseP")},
eQ:function(a,b){return new H.eO(0,0,[a,b])},
cq:function(a,b,c,d){return new P.l0(0,0,[d])},
iJ:function(a,b,c){var z,y
if(P.dS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$ci()
C.a.p(y,a)
try{P.lU(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.fa(b,H.ms(z,"$isB"),", ")+c
return y.charCodeAt(0)==0?y:y},
dn:function(a,b,c){var z,y,x
if(P.dS(a))return b+"..."+c
z=new P.b2(b)
y=$.$get$ci()
C.a.p(y,a)
try{x=z
x.a=P.fa(x.gbt(),a,", ")}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.a=y.gbt()+c
y=z.gbt()
return y.charCodeAt(0)==0?y:y},
dS:function(a){var z,y
for(z=0;y=$.$get$ci(),z<y.length;++z)if(a===y[z])return!0
return!1},
lU:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gar(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.a5())return
w=H.i(z.ga8())
C.a.p(b,w)
y+=w.length+2;++x}if(!z.a5()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.ga8();++x
if(!z.a5()){if(x<=4){C.a.p(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.ga8();++x
for(;z.a5();t=s,s=r){r=z.ga8();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2;--x}C.a.p(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.p(b,q)
C.a.p(b,u)
C.a.p(b,v)},
eR:function(a,b){var z,y,x
z=P.cq(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.d9)(a),++x)z.p(0,H.u(a[x],b))
return z},
dw:function(a){var z,y,x
z={}
if(P.dS(a))return"{...}"
y=new P.b2("")
try{C.a.p($.$get$ci(),a)
x=y
x.a=x.gbt()+"{"
z.a=!0
a.bg(0,new P.iZ(z,y))
z=y
z.a=z.gbt()+"}"}finally{z=$.$get$ci()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.gbt()
return z.charCodeAt(0)==0?z:z},
kX:{"^":"dv;a,0b,0c,0d,0e,$ti",
gI:function(a){return this.a},
gb3:function(){return new P.kY(this,[H.r(this,0)])},
bf:function(a){var z
if((a&0x3ffffff)===a){z=this.c
return z==null?!1:z[a]!=null}else return this.fW(a)},
fW:function(a){var z=this.d
if(z==null)return!1
return this.ba(this.bG(z,a),a)>=0},
i:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
y=z==null?null:P.fN(z,b)
return y}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
y=x==null?null:P.fN(x,b)
return y}else return this.h6(b)},
h6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bG(z,a)
x=this.ba(y,a)
return x<0?null:y[x+1]},
l:function(a,b,c){var z,y
H.u(b,H.r(this,0))
H.u(c,H.r(this,1))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dL()
this.b=z}this.dB(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dL()
this.c=y}this.dB(y,b,c)}else this.hu(b,c)},
hu:function(a,b){var z,y,x,w
H.u(a,H.r(this,0))
H.u(b,H.r(this,1))
z=this.d
if(z==null){z=P.dL()
this.d=z}y=this.bF(a)
x=z[y]
if(x==null){P.dM(z,y,[a,b]);++this.a
this.e=null}else{w=this.ba(x,a)
if(w>=0)x[w+1]=b
else{x.push(a,b);++this.a
this.e=null}}},
bg:function(a,b){var z,y,x,w,v
z=H.r(this,0)
H.q(b,{func:1,ret:-1,args:[z,H.r(this,1)]})
y=this.dE()
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(H.u(v,z),this.i(0,v))
if(y!==this.e)throw H.e(P.aD(this))}},
dE:function(){var z,y,x,w,v,u,t,s,r,q,p,o
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
dB:function(a,b,c){H.u(b,H.r(this,0))
H.u(c,H.r(this,1))
if(a[b]==null){++this.a
this.e=null}P.dM(a,b,c)},
bF:function(a){return J.bG(a)&0x3ffffff},
bG:function(a,b){return a[this.bF(b)]},
ba:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;y+=2)if(J.az(a[y],b))return y
return-1},
$isnc:1,
E:{
fN:function(a,b){var z=a[b]
return z===a?null:z},
dM:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
dL:function(){var z=Object.create(null)
P.dM(z,"<non-identifier-key>",z)
delete z["<non-identifier-key>"]
return z}}},
kY:{"^":"dl;a,$ti",
gI:function(a){return this.a.a},
gar:function(a){var z=this.a
return new P.kZ(z,z.dE(),0,this.$ti)}},
kZ:{"^":"c;a,b,c,0d,$ti",
sbE:function(a){this.d=H.u(a,H.r(this,0))},
ga8:function(){return this.d},
a5:function(){var z,y,x
z=this.b
y=this.c
x=this.a
if(z!==x.e)throw H.e(P.aD(x))
else if(y>=z.length){this.sbE(null)
return!1}else{this.sbE(z[y])
this.c=y+1
return!0}},
$isbK:1},
l0:{"^":"l_;a,0b,0c,0d,0e,0f,r,$ti",
gar:function(a){var z=new P.l1(this,this.r,this.$ti)
z.c=this.e
return z},
gI:function(a){return this.a},
au:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isd_")!=null}else{y=this.fV(b)
return y}},
fV:function(a){var z=this.d
if(z==null)return!1
return this.ba(this.bG(z,a),a)>=0},
bg:function(a,b){var z,y,x
z=H.r(this,0)
H.q(b,{func:1,ret:-1,args:[z]})
y=this.e
x=this.r
for(;y!=null;){b.$1(H.u(y.a,z))
if(x!==this.r)throw H.e(P.aD(this))
y=y.b}},
p:function(a,b){var z,y
H.u(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dO()
this.b=z}return this.dA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dO()
this.c=y}return this.dA(y,b)}else return this.fM(b)},
fM:function(a){var z,y,x
H.u(a,H.r(this,0))
z=this.d
if(z==null){z=P.dO()
this.d=z}y=this.bF(a)
x=z[y]
if(x==null)z[y]=[this.cs(a)]
else{if(this.ba(x,a)>=0)return!1
x.push(this.cs(a))}return!0},
eA:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dT(this.c,b)
else return this.hl(b)},
hl:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.bG(z,a)
x=this.ba(y,a)
if(x<0)return!1
this.dY(y.splice(x,1)[0])
return!0},
dA:function(a,b){H.u(b,H.r(this,0))
if(H.h(a[b],"$isd_")!=null)return!1
a[b]=this.cs(b)
return!0},
dT:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isd_")
if(z==null)return!1
this.dY(z)
delete a[b]
return!0},
dC:function(){this.r=this.r+1&67108863},
cs:function(a){var z,y
z=new P.d_(H.u(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dC()
return z},
dY:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dC()},
bF:function(a){return J.bG(a)&0x3ffffff},
bG:function(a,b){return a[this.bF(b)]},
ba:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.az(a[y].a,b))return y
return-1},
E:{
dO:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d_:{"^":"c;a,0b,0c"},
l1:{"^":"c;a,b,0c,0d,$ti",
sbE:function(a){this.d=H.u(a,H.r(this,0))},
ga8:function(){return this.d},
a5:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aD(z))
else{z=this.c
if(z==null){this.sbE(null)
return!1}else{this.sbE(H.u(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isbK:1},
l_:{"^":"jL;"},
eS:{"^":"l2;",$isB:1,$isd:1},
ad:{"^":"c;$ti",
gar:function(a){return new H.eT(a,this.gI(a),0,[H.bD(this,a,"ad",0)])},
aS:function(a,b){return this.i(a,b)},
cQ:function(a,b,c,d){var z,y,x
H.u(b,d)
H.q(c,{func:1,ret:d,args:[d,H.bD(this,a,"ad",0)]})
z=this.gI(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gI(a))throw H.e(P.aD(a))}return y},
dm:function(a,b){return H.dE(a,b,null,H.bD(this,a,"ad",0))},
D:function(a,b){var z,y
z=[H.bD(this,a,"ad",0)]
H.k(b,"$isd",z,"$asd")
y=H.f([],z)
C.a.sI(y,C.c.D(this.gI(a),b.gI(b)))
C.a.bC(y,0,this.gI(a),a)
C.a.bC(y,this.gI(a),y.length,b)
return y},
bL:function(a,b,c,d){var z
H.u(d,H.bD(this,a,"ad",0))
P.aV(b,c,this.gI(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
u:function(a){return P.dn(a,"[","]")}},
dv:{"^":"cQ;"},
iZ:{"^":"w:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
cQ:{"^":"c;$ti",
bg:function(a,b){var z,y
H.q(b,{func:1,ret:-1,args:[H.aH(this,"cQ",0),H.aH(this,"cQ",1)]})
for(z=J.cl(this.gb3());z.a5();){y=z.ga8()
b.$2(y,this.i(0,y))}},
gI:function(a){return J.at(this.gb3())},
u:function(a){return P.dw(this)},
$isaq:1},
ln:{"^":"c;$ti",
l:function(a,b,c){H.u(b,H.r(this,0))
H.u(c,H.r(this,1))
throw H.e(P.Z("Cannot modify unmodifiable map"))}},
j_:{"^":"c;$ti",
i:function(a,b){return this.a.i(0,b)},
l:function(a,b,c){this.a.l(0,H.u(b,H.r(this,0)),H.u(c,H.r(this,1)))},
gI:function(a){var z=this.a
return z.gI(z)},
u:function(a){return J.bH(this.a)},
$isaq:1},
fy:{"^":"lo;a,$ti"},
jM:{"^":"c;$ti",
aZ:function(a,b){var z
for(z=J.cl(H.k(b,"$isB",this.$ti,"$asB"));z.a5();)this.p(0,z.ga8())},
u:function(a){return P.dn(this,"{","}")},
$isB:1,
$isnQ:1},
jL:{"^":"jM;"},
l2:{"^":"c+ad;"},
lo:{"^":"j_+ln;$ti"}}],["","",,P,{"^":"",hQ:{"^":"cG;a",
iy:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.aV(b,c,a.length,null,null,null)
z=$.$get$fJ()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.b.Y(a,y)
if(r===37){q=s+2
if(q<=c){p=H.d5(C.b.Y(a,s))
o=H.d5(C.b.Y(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.b(z,n)
m=z[n]
if(m>=0){n=C.b.ah("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.b2("")
w.a+=C.b.K(a,x,y)
w.a+=H.dy(r)
x=s
continue}}throw H.e(P.X("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.b.K(a,x,c)
k=l.length
if(v>=0)P.ec(a,u,c,v,t,k)
else{j=C.c.cm(k-1,4)+1
if(j===1)throw H.e(P.X("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.by(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.ec(a,u,c,v,t,i)
else{j=C.c.cm(i,4)
if(j===1)throw H.e(P.X("Invalid base64 encoding length ",a,c))
if(j>1)a=C.b.by(a,c,c,j===2?"==":"=")}return a},
$ascG:function(){return[[P.d,P.j],P.n]},
E:{
ec:function(a,b,c,d,e,f){if(C.c.cm(f,4)!==0)throw H.e(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.X("Invalid base64 padding, more than two '=' characters",a,b))}}},hR:{"^":"cK;a",
$ascK:function(){return[[P.d,P.j],P.n]}},cG:{"^":"c;$ti"},cK:{"^":"jT;$ti"},iz:{"^":"cG;",
$ascG:function(){return[P.n,[P.d,P.j]]}},kk:{"^":"iz;a"},kl:{"^":"cK;a",
cN:function(a,b,c){var z,y,x,w,v
H.k(a,"$isd",[P.j],"$asd")
z=P.km(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aV(b,c,y,null,null,null)
x=new P.b2("")
w=new P.lE(!1,x,!0,0,0,0)
w.cN(a,b,y)
w.ih(a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
hT:function(a){return this.cN(a,0,null)},
$ascK:function(){return[[P.d,P.j],P.n]},
E:{
km:function(a,b,c,d){H.k(b,"$isd",[P.j],"$asd")
if(b instanceof Uint8Array)return P.kn(!1,b,c,d)
return},
kn:function(a,b,c,d){var z,y,x
z=$.$get$fC()
if(z==null)return
y=0===c
if(y&&!0)return P.dI(z,b)
x=b.length
d=P.aV(c,d,x,null,null,null)
if(y&&d===x)return P.dI(z,b)
return P.dI(z,b.subarray(c,d))},
dI:function(a,b){if(P.kp(b))return
return P.kq(a,b)},
kq:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
kp:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ko:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lE:{"^":"c;a,b,c,d,e,f",
ih:function(a,b){var z
H.k(a,"$isd",[P.j],"$asd")
if(this.e>0){z=P.X("Unfinished UTF-8 octet sequence",a,b)
throw H.e(z)}},
cN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isd",[P.j],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lG(c)
v=new P.lF(this,b,c,a)
$label0$0:for(u=J.a4(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ad()
if((r&192)!==128){q=P.X("Bad UTF-8 encoding 0x"+C.c.bN(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.b(C.a_,q)
if(z<=C.a_[q]){q=P.X("Overlong encoding of 0x"+C.c.bN(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.X("Character outside valid Unicode range: 0x"+C.c.bN(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.dy(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.aH()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.X("Negative UTF-8 code unit: -0x"+C.c.bN(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.X("Bad UTF-8 encoding 0x"+C.c.bN(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lG:{"^":"w:12;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isd",[P.j],"$asd")
z=this.a
for(y=J.a4(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.ad()
if((w&127)!==w)return x-b}return z-b}},lF:{"^":"w:19;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.fb(this.d,a,b)}}}],["","",,P,{"^":"",
cC:function(a,b,c){var z
H.q(b,{func:1,ret:P.j,args:[P.n]})
z=H.jy(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.X(a,null,null))},
iA:function(a){if(a instanceof H.w)return a.u(0)
return"Instance of '"+H.cb(a)+"'"},
bj:function(a,b,c,d){var z,y
H.u(b,d)
z=J.iM(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.k(z,"$isd",[d],"$asd")},
iV:function(a,b,c){var z,y
z=H.f([],[c])
for(y=a.gar(a);y.a5();)C.a.p(z,H.u(y.ga8(),c))
return z},
fb:function(a,b,c){var z,y
z=P.j
H.k(a,"$isB",[z],"$asB")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isbi",[z],"$asbi")
y=a.length
c=P.aV(b,c,y,null,null,null)
return H.f2(b>0||c<y?C.a.fl(a,b,c):a)}if(!!J.M(a).$iseY)return H.jA(a,b,P.aV(b,c,a.length,null,null,null))
return P.jW(a,b,c)},
jW:function(a,b,c){var z,y,x,w
H.k(a,"$isB",[P.j],"$asB")
if(b<0)throw H.e(P.a1(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a1(c,b,J.at(a),null,null))
y=J.cl(a)
for(x=0;x<b;++x)if(!y.a5())throw H.e(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.a5();)w.push(y.ga8())
else for(x=b;x<c;++x){if(!y.a5())throw H.e(P.a1(c,b,x,null,null))
w.push(y.ga8())}return H.f2(w)},
kf:function(){var z=H.jw()
if(z!=null)return P.kg(z,0,null)
throw H.e(P.Z("'Uri.base' is not supported"))},
cM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bH(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iA(a)},
iW:function(a,b,c,d){var z,y
H.q(b,{func:1,ret:d,args:[P.j]})
z=H.f([],[d])
C.a.sI(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
e1:function(a){H.mw(H.i(a))},
kg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.Y(a,b+4)^58)*3|C.b.Y(a,b)^100|C.b.Y(a,b+1)^97|C.b.Y(a,b+2)^116|C.b.Y(a,b+3)^97)>>>0
if(y===0)return P.fz(b>0||c<c?C.b.K(a,b,c):a,5,null).geF()
else if(y===32)return P.fz(C.b.K(a,z,c),0,null).geF()}x=new Array(8)
x.fixed$length=Array
w=H.f(x,[P.j])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.h9(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.eI()
if(v>=b)if(P.h9(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.N(r)
if(q<r)r=q
if(typeof s!=="number")return s.M()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.M()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.M()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.aI(a,"..",s)))n=r>s+2&&C.b.aI(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aI(a,"file",b)){if(u<=b){if(!C.b.aI(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.K(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.by(a,s,r,"/");++r;++q;++c}else{a=C.b.K(a,b,s)+"/"+C.b.K(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aI(a,"http",b)){if(x&&t+3===s&&C.b.aI(a,"80",t+1))if(b===0&&!0){a=C.b.by(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.K(a,b,t)+C.b.K(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.aI(a,"https",b)){if(x&&t+4===s&&C.b.aI(a,"443",t+1))if(b===0&&!0){a=C.b.by(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.K(a,b,t)+C.b.K(a,s,c)
v-=b
u-=b
t-=b
z=4+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="https"}else o=null
p=!0}}}else o=null
if(p){if(b>0||c<a.length){a=C.b.K(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.le(a,v,u,t,s,r,q,o)}return P.lp(a,b,c,v,u,t,s,r,q,o)},
fB:function(a,b){var z=P.n
return C.a.cQ(H.f(a.split("&"),[z]),P.eQ(z,z),new P.kj(b),[P.aq,P.n,P.n])},
kd:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.ke(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.ah(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cC(C.b.K(a,v,w),null,null)
if(typeof s!=="number")return s.aH()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.b(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cC(C.b.K(a,v,c),null,null)
if(typeof s!=="number")return s.aH()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.b(y,u)
y[u]=s
return y},
fA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kh(a)
y=new P.ki(z,a)
if(a.length<2)z.$1("address is too short")
x=H.f([],[P.j])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.ah(a,w)
if(s===58){if(w===b){++w
if(C.b.ah(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.p(x,-1)
u=!0}else C.a.p(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gc9(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.p(x,y.$2(v,c))
else{p=P.kd(a,v,c)
C.a.p(x,(p[0]<<8|p[1])>>>0)
C.a.p(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.b(o,l)
o[l]=0
i=l+1
if(i>=n)return H.b(o,i)
o[i]=0
l+=2}else{i=C.c.aR(k,8)
if(l<0||l>=n)return H.b(o,l)
o[l]=i
i=l+1
if(i>=n)return H.b(o,i)
o[i]=k&255
l+=2}}return o},
lM:function(){var z,y,x,w,v
z=P.iW(22,new P.lO(),!0,P.L)
y=new P.lN(z)
x=new P.lP()
w=new P.lQ()
v=H.h(y.$2(0,225),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(14,225),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(15,225),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(1,225),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(2,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(3,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(4,229),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(5,229),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(6,231),"$isL")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(7,231),"$isL")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.h(y.$2(8,8),"$isL"),"]",5)
v=H.h(y.$2(9,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(16,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(17,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(10,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(18,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(19,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(11,235),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(12,236),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.h(y.$2(13,237),"$isL")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.h(y.$2(20,245),"$isL"),"az",21)
v=H.h(y.$2(21,245),"$isL")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
h9:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isd",[P.j],"$asd")
z=$.$get$ha()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.b(z,d)
x=z[d]
w=C.b.Y(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.b(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
ak:{"^":"c;"},
"+bool":0,
bS:{"^":"am;"},
"+double":0,
be:{"^":"c;a",
D:function(a,b){return new P.be(C.c.D(this.a,b.gj3()))},
M:function(a,b){return C.c.M(this.a,H.h(b,"$isbe").a)},
aH:function(a,b){return C.c.aH(this.a,H.h(b,"$isbe").a)},
at:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
bx:function(a,b){return C.c.bx(this.a,H.h(b,"$isbe").a)},
u:function(a){var z,y,x,w,v
z=new P.iu()
y=this.a
if(y<0)return"-"+new P.be(0-y).u(0)
x=z.$1(C.c.bv(y,6e7)%60)
w=z.$1(C.c.bv(y,1e6)%60)
v=new P.it().$1(y%1e6)
return""+C.c.bv(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
$isa5:1,
$asa5:function(){return[P.be]},
E:{
ez:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
it:{"^":"w:11;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
iu:{"^":"w:11;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"c;"},
f0:{"^":"a6;",
u:function(a){return"Throw of null."}},
b6:{"^":"a6;a,b,c,d",
gcz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcw:function(){return""},
u:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gcz()+y+x
if(!this.a)return w
v=this.gcw()
u=P.cM(this.b)
return w+v+": "+H.i(u)},
E:{
df:function(a){return new P.b6(!1,null,null,a)},
eb:function(a,b,c){return new P.b6(!0,a,b,c)}}},
f5:{"^":"b6;e,f,a,b,c,d",
gcz:function(){return"RangeError"},
gcw:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
E:{
cR:function(a,b,c){return new P.f5(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.f5(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c,d,e,f){if(typeof a!=="number")return H.N(a)
if(0>a||a>c)throw H.e(P.a1(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a1(b,a,c,"end",f))
return b}return c}}},
iI:{"^":"b6;e,I:f>,a,b,c,d",
gcz:function(){return"RangeError"},
gcw:function(){if(J.e3(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
E:{
co:function(a,b,c,d,e){var z=H.p(e!=null?e:J.at(b))
return new P.iI(b,z,!0,a,c,"Index out of range")}}},
kb:{"^":"a6;a",
u:function(a){return"Unsupported operation: "+this.a},
E:{
Z:function(a){return new P.kb(a)}}},
k8:{"^":"a6;a",
u:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
E:{
fx:function(a){return new P.k8(a)}}},
cT:{"^":"a6;a",
u:function(a){return"Bad state: "+this.a},
E:{
f9:function(a){return new P.cT(a)}}},
i5:{"^":"a6;a",
u:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cM(z))+"."},
E:{
aD:function(a){return new P.i5(a)}}},
jp:{"^":"c;",
u:function(a){return"Out of Memory"},
$isa6:1},
f8:{"^":"c;",
u:function(a){return"Stack Overflow"},
$isa6:1},
id:{"^":"a6;a",
u:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
kM:{"^":"c;a",
u:function(a){return"Exception: "+this.a}},
iB:{"^":"c;a,b,c",
u:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.K(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.Y(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.ah(w,s)
if(r===10||r===13){q=s
break}}if(q-u>78)if(x-u<75){p=u+75
o=u
n=""
m="..."}else{if(q-x<75){o=q-75
p=q
m=""}else{o=x-36
p=x+36
m="..."}n="..."}else{p=q
o=u
n=""
m=""}l=C.b.K(w,o,p)
return y+n+l+m+"\n"+C.b.G(" ",x-o+n.length)+"^\n"},
E:{
X:function(a,b,c){return new P.iB(a,b,c)}}},
c2:{"^":"c;"},
j:{"^":"am;"},
"+int":0,
B:{"^":"c;$ti",
d7:["fp",function(a,b){var z=H.aH(this,"B",0)
return new H.fF(this,H.q(b,{func:1,ret:P.ak,args:[z]}),[z])}],
gI:function(a){var z,y
z=this.gar(this)
for(y=0;z.a5();)++y
return y},
gbq:function(a){var z,y
z=this.gar(this)
if(!z.a5())throw H.e(H.eK())
y=z.ga8()
if(z.a5())throw H.e(H.iL())
return y},
aS:function(a,b){var z,y,x
if(b<0)H.ar(P.a1(b,0,null,"index",null))
for(z=this.gar(this),y=0;z.a5();){x=z.ga8()
if(b===y)return x;++y}throw H.e(P.co(b,this,"index",null,y))},
u:function(a){return P.iJ(this,"(",")")}},
bK:{"^":"c;$ti"},
d:{"^":"c;$ti",$isB:1},
"+List":0,
aq:{"^":"c;$ti"},
V:{"^":"c;",
ga6:function(a){return P.c.prototype.ga6.call(this,this)},
u:function(a){return"null"}},
"+Null":0,
am:{"^":"c;",$isa5:1,
$asa5:function(){return[P.am]}},
"+num":0,
c:{"^":";",
at:function(a,b){return this===b},
ga6:function(a){return H.ca(this)},
u:function(a){return"Instance of '"+H.cb(this)+"'"},
toString:function(){return this.u(this)}},
aM:{"^":"c;"},
I:{"^":"c;a,b",
S:function(a){var z,y,x
if(this.b!=null){z=this.a
y=H.p($.ct.$0())
x=this.b
if(typeof y!=="number")return y.L()
if(typeof x!=="number")return H.N(x)
if(typeof z!=="number")return z.D()
this.a=z+(y-x)
this.b=null}},
b5:function(a){var z=this.b
this.a=z==null?H.p($.ct.$0()):z},
gb1:function(){var z,y
z=this.b
if(z==null)z=H.p($.ct.$0())
y=this.a
if(typeof z!=="number")return z.L()
if(typeof y!=="number")return H.N(y)
return z-y}},
n:{"^":"c;",$isa5:1,
$asa5:function(){return[P.n]},
$isjs:1},
"+String":0,
b2:{"^":"c;bt:a<",
gI:function(a){return this.a.length},
u:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnR:1,
E:{
fa:function(a,b,c){var z=J.cl(b)
if(!z.a5())return a
if(c.length===0){do a+=H.i(z.ga8())
while(z.a5())}else{a+=H.i(z.ga8())
for(;z.a5();)a=a+c+H.i(z.ga8())}return a}}},
kj:{"^":"w:15;a",
$2:function(a,b){var z,y,x,w
z=P.n
H.k(a,"$isaq",[z,z],"$asaq")
H.z(b)
y=J.a4(b).c6(b,"=")
if(y===-1){if(b!=="")a.l(0,P.dP(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.K(b,0,y)
w=C.b.bS(b,y+1)
z=this.a
a.l(0,P.dP(x,0,x.length,z,!0),P.dP(w,0,w.length,z,!0))}return a}},
ke:{"^":"w:16;a",
$2:function(a,b){throw H.e(P.X("Illegal IPv4 address, "+a,this.a,b))}},
kh:{"^":"w:17;a",
$2:function(a,b){throw H.e(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
ki:{"^":"w:18;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cC(C.b.K(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
fY:{"^":"c;di:a<,b,c,d,ew:e>,f,r,0x,0y,0z,0Q,0ch",
shj:function(a){var z=P.n
this.Q=H.k(a,"$isaq",[z,z],"$asaq")},
geG:function(){return this.b},
gcR:function(a){var z=this.c
if(z==null)return""
if(C.b.aP(z,"["))return C.b.K(z,1,z.length-1)
return z},
gcZ:function(a){var z=this.d
if(z==null)return P.fZ(this.a)
return z},
gd0:function(){var z=this.f
return z==null?"":z},
gei:function(){var z=this.r
return z==null?"":z},
gez:function(){var z,y
if(this.Q==null){z=this.f
y=P.n
this.shj(new P.fy(P.fB(z==null?"":z,C.T),[y,y]))}return this.Q},
gek:function(){return this.c!=null},
gem:function(){return this.f!=null},
gel:function(){return this.r!=null},
u:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?z+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.i(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.i(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
at:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.M(b).$isdH){if(this.a===b.gdi())if(this.c!=null===b.gek()){z=this.b
y=b.geG()
if(z==null?y==null:z===y){z=this.gcR(this)
y=b.gcR(b)
if(z==null?y==null:z===y){z=this.gcZ(this)
y=b.gcZ(b)
if(z==null?y==null:z===y)if(this.e===b.gew(b)){z=this.f
y=z==null
if(!y===b.gem()){if(y)z=""
if(z===b.gd0()){z=this.r
y=z==null
if(!y===b.gel()){if(y)z=""
z=z===b.gei()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
ga6:function(a){var z=this.z
if(z==null){z=C.b.ga6(this.u(0))
this.z=z}return z},
$isdH:1,
E:{
lp:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.ly(a,b,d)
else{if(d===b)P.ce(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lz(a,z,e-1):""
x=P.lu(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.N(g)
v=w<g?P.lw(P.cC(C.b.K(a,w,g),new P.lq(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lv(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.lx(a,h+1,i,null):null
return new P.fY(j,y,x,v,u,t,i<c?P.lt(a,i+1,c):null)},
fZ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ce:function(a,b,c){throw H.e(P.X(c,a,b))},
lw:function(a,b){if(a!=null&&a===P.fZ(b))return
return a},
lu:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.ah(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.ah(a,z)!==93)P.ce(a,b,"Missing end `]` to match `[` in host")
P.fA(a,b+1,z)
return C.b.K(a,b,c).toLowerCase()}if(typeof c!=="number")return H.N(c)
y=b
for(;y<c;++y)if(C.b.ah(a,y)===58){P.fA(a,b,c)
return"["+a+"]"}return P.lB(a,b,c)},
lB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.N(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.ah(a,z)
if(v===37){u=P.h4(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.b2("")
s=C.b.K(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.K(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.b(C.a2,t)
t=(C.a2[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.b2("")
if(y<z){x.a+=C.b.K(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.b(C.D,t)
t=(C.D[t]&1<<(v&15))!==0}else t=!1
if(t)P.ce(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.ah(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.b2("")
s=C.b.K(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h_(v)
z+=q
y=z}}}}if(x==null)return C.b.K(a,b,c)
if(y<c){s=C.b.K(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
ly:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h1(C.b.Y(a,b)))P.ce(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.Y(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.b(C.F,w)
w=(C.F[w]&1<<(x&15))!==0}else w=!1
if(!w)P.ce(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.K(a,b,c)
return P.lr(y?a.toLowerCase():a)},
lr:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lz:function(a,b,c){return P.cf(a,b,c,C.ax)},
lv:function(a,b,c,d,e,f){var z,y,x
z=e==="file"
y=z||f
x=P.cf(a,b,c,C.a3)
if(x.length===0){if(z)return"/"}else if(y&&!C.b.aP(x,"/"))x="/"+x
return P.lA(x,e,f)},
lA:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.aP(a,"/"))return P.lC(a,!z||c)
return P.lD(a)},
lx:function(a,b,c,d){return P.cf(a,b,c,C.E)},
lt:function(a,b,c){return P.cf(a,b,c,C.E)},
h4:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.ah(a,b+1)
x=C.b.ah(a,z)
w=H.d5(y)
v=H.d5(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.c.aR(u,4)
if(z>=8)return H.b(C.a1,z)
z=(C.a1[z]&1<<(u&15))!==0}else z=!1
if(z)return H.dy(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.K(a,b,b+3).toUpperCase()
return},
h_:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.f(z,[P.j])
C.a.l(y,0,37)
C.a.l(y,1,C.b.Y("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.Y("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.f(z,[P.j])
for(v=0;--w,w>=0;x=128){u=C.c.hw(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.Y("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.Y("0123456789ABCDEF",u&15))
v+=3}}return P.fb(y,0,null)},
cf:function(a,b,c,d){var z=P.h3(a,b,c,H.k(d,"$isd",[P.j],"$asd"),!1)
return z==null?C.b.K(a,b,c):z},
h3:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isd",[P.j],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.N(c)
if(!(y<c))break
c$0:{v=C.b.ah(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.b(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.h4(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.b(C.D,u)
u=(C.D[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.ce(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.ah(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h_(v)}}if(w==null)w=new P.b2("")
w.a+=C.b.K(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.N(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.K(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h2:function(a){if(C.b.aP(a,"."))return!0
return C.b.c6(a,"/.")!==-1},
lD:function(a){var z,y,x,w,v,u,t
if(!P.h2(a))return a
z=H.f([],[P.n])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.az(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.b(z,-1)
z.pop()
if(z.length===0)C.a.p(z,"")}w=!0}else if("."===u)w=!0
else{C.a.p(z,u)
w=!1}}if(w)C.a.p(z,"")
return C.a.er(z,"/")},
lC:function(a,b){var z,y,x,w,v,u
if(!P.h2(a))return!b?P.h0(a):a
z=H.f([],[P.n])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gc9(z)!==".."){if(0>=z.length)return H.b(z,-1)
z.pop()
w=!0}else{C.a.p(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.p(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.b(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gc9(z)==="..")C.a.p(z,"")
if(!b){if(0>=z.length)return H.b(z,0)
C.a.l(z,0,P.h0(z[0]))}return C.a.er(z,"/")},
h0:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h1(J.hx(a,0)))for(y=1;y<z;++y){x=C.b.Y(a,y)
if(x===58)return C.b.K(a,0,y)+"%3A"+C.b.bS(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.b(C.F,w)
w=(C.F[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
ls:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.Y(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.df("Invalid URL encoding"))}}return z},
dP:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dZ(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.Y(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.T!==d)v=!1
else v=!0
if(v)return y.K(a,b,c)
else u=new H.i3(y.K(a,b,c))}else{u=H.f([],[P.j])
for(x=b;x<c;++x){w=y.Y(a,x)
if(w>127)throw H.e(P.df("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.e(P.df("Truncated URI"))
C.a.p(u,P.ls(a,x+1))
x+=2}else if(w===43)C.a.p(u,32)
else C.a.p(u,w)}}H.k(u,"$isd",[P.j],"$asd")
return new P.kl(!1).hT(u)},
h1:function(a){var z=a|32
return 97<=z&&z<=122}}},
lq:{"^":"w:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.e(P.X("Invalid port",this.a,z+1))}},
kc:{"^":"c;a,b,c",
geF:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.b(z,0)
y=this.a
z=z[0]+1
x=C.b.c7(y,"?",z)
w=y.length
if(x>=0){v=P.cf(y,x+1,w,C.E)
w=x}else v=null
z=new P.kH(this,"data",null,null,null,P.cf(y,z,w,C.a3),v,null)
this.c=z
return z},
u:function(a){var z,y
z=this.b
if(0>=z.length)return H.b(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
E:{
fz:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.f([b-1],[P.j])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.Y(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.X("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.X("Invalid MIME type",a,x))
for(;v!==44;){C.a.p(z,x);++x
for(u=-1;x<y;++x){v=C.b.Y(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.p(z,u)
else{t=C.a.gc9(z)
if(v!==44||x!==t+7||!C.b.aI(a,"base64",t+1))throw H.e(P.X("Expecting '='",a,x))
break}}C.a.p(z,x)
s=x+1
if((z.length&1)===1)a=C.aa.iy(a,s,y)
else{r=P.h3(a,s,y,C.E,!0)
if(r!=null)a=C.b.by(a,s,y,r)}return new P.kc(a,z,c)}}},
lO:{"^":"w:20;",
$1:function(a){return new Uint8Array(96)}},
lN:{"^":"w:21;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.b(z,a)
z=z[a]
J.hC(z,0,96,b)
return z}},
lP:{"^":"w;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.Y(b,y)^96
if(x>=a.length)return H.b(a,x)
a[x]=c}}},
lQ:{"^":"w;",
$3:function(a,b,c){var z,y,x
for(z=C.b.Y(b,0),y=C.b.Y(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.b(a,x)
a[x]=c}}},
le:{"^":"c;a,b,c,d,e,f,r,x,0y",
gek:function(){return this.c>0},
gem:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gel:function(){return this.r<this.a.length},
gdM:function(){return this.b===4&&C.b.aP(this.a,"http")},
gdN:function(){return this.b===5&&C.b.aP(this.a,"https")},
gdi:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdM()){this.x="http"
z="http"}else if(this.gdN()){this.x="https"
z="https"}else if(z===4&&C.b.aP(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.aP(this.a,"package")){this.x="package"
z="package"}else{z=C.b.K(this.a,0,z)
this.x=z}return z},
geG:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.K(this.a,y,z-1):""},
gcR:function(a){var z=this.c
return z>0?C.b.K(this.a,z,this.d):""},
gcZ:function(a){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.N(y)
y=z+1<y
z=y}else z=!1
if(z){z=this.d
if(typeof z!=="number")return z.D()
return P.cC(C.b.K(this.a,z+1,this.e),null,null)}if(this.gdM())return 80
if(this.gdN())return 443
return 0},
gew:function(a){return C.b.K(this.a,this.e,this.f)},
gd0:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.K(this.a,z+1,y):""},
gei:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.bS(y,z+1):""},
gez:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.ay
z=P.n
return new P.fy(P.fB(this.gd0(),C.T),[z,z])},
ga6:function(a){var z=this.y
if(z==null){z=C.b.ga6(this.a)
this.y=z}return z},
at:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.M(b).$isdH)return this.a===b.u(0)
return!1},
u:function(a){return this.a},
$isdH:1},
kH:{"^":"fY;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
hK:function(a){var z=document.createElement("a")
if(a!=null)z.href=a
return z},
eB:function(a,b,c){var z,y
z=document.body
y=(z&&C.x).aK(z,a,b,c)
y.toString
z=W.E
z=new H.fF(new W.aP(y),H.q(new W.iy(),{func:1,ret:P.ak,args:[z]}),[z])
return H.h(z.gbq(z),"$isaI")},
c1:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hG(a)
if(typeof y==="string")z=a.tagName}catch(x){H.as(x)}return z},
kJ:function(a,b){return document.createElement(a)},
cZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fQ:function(a,b,c,d){var z,y
z=W.cZ(W.cZ(W.cZ(W.cZ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lL:function(a){if(a==null)return
return W.fK(a)},
hd:function(a,b){var z
H.q(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.n)return a
return z.e4(a,b)},
Y:{"^":"aI;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUnknownElement;HTMLElement"},
ea:{"^":"Y;",
u:function(a){return String(a)},
$isea:1,
"%":"HTMLAnchorElement"},
mE:{"^":"Y;",
u:function(a){return String(a)},
"%":"HTMLAreaElement"},
ed:{"^":"Y;",$ised:1,"%":"HTMLBaseElement"},
cE:{"^":"Y;",$iscE:1,"%":"HTMLBodyElement"},
eg:{"^":"Y;0height",
sal:function(a,b){a.height=H.p(b)},
$iseg:1,
"%":"HTMLCanvasElement"},
eh:{"^":"S;",
hK:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
j0:function(a,b,c,d,e){return a.strokeText(b,c,d,e)},
fk:function(a,b,c,d){return a.strokeText(b,c,d)},
cY:function(a,b,c){return a.lineTo(H.bF(b),H.bF(c))},
ev:function(a,b,c){return a.moveTo(H.bF(b),H.bF(c))},
$iseh:1,
"%":"CanvasRenderingContext2D"},
mK:{"^":"E;0I:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mM:{"^":"kF;0I:length=",
eQ:function(a,b){var z=this.h7(a,this.dz(a,b))
return z==null?"":z},
dz:function(a,b){var z,y
z=$.$get$em()
y=z[b]
if(typeof y==="string")return y
y=this.hy(a,b)
z[b]=y
return y},
hy:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ik()+b
if(z in a)return z
return b},
hv:function(a,b,c,d){a.setProperty(b,c,d)},
h7:function(a,b){return a.getPropertyValue(b)},
gal:function(a){return a.height},
sal:function(a,b){H.z(b)
a.height=b},
gca:function(a){return a.left},
gd3:function(a){return a.top},
gcj:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ic:{"^":"c;",
sal:function(a,b){H.z(b)
this.hv(a,this.dz(a,"height"),b,"")},
gca:function(a){return this.eQ(a,"left")}},
io:{"^":"E;",
hE:function(a,b){return a.adoptNode(b)},
ao:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
mN:{"^":"S;",
u:function(a){return String(a)},
"%":"DOMException"},
ip:{"^":"S;",
hX:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
iq:{"^":"S;",
u:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
at:function(a,b){var z
if(b==null)return!1
if(!H.cy(b,"$iscu",[P.am],"$ascu"))return!1
z=J.R(b)
return a.left===z.gca(b)&&a.top===z.gd3(b)&&a.width===z.gcj(b)&&a.height===z.gal(b)},
ga6:function(a){return W.fQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
gca:function(a){return a.left},
gd3:function(a){return a.top},
gcj:function(a){return a.width},
gj:function(a){return a.x},
gk:function(a){return a.y},
$iscu:1,
$ascu:function(){return[P.am]},
"%":";DOMRectReadOnly"},
aI:{"^":"E;0iN:tagName=",
ghH:function(a){return new W.kI(a)},
u:function(a){return a.localName},
aK:["cr",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eD
if(z==null){z=H.f([],[W.aU])
y=new W.eZ(z)
C.a.p(z,W.fO(null))
C.a.p(z,W.fW())
$.eD=y
d=y}else d=z
z=$.eC
if(z==null){z=new W.h5(d)
$.eC=z
c=z}else{z.a=d
c=z}}if($.b_==null){z=document
y=z.implementation
y=(y&&C.ad).hX(y,"")
$.b_=y
$.dm=y.createRange()
y=$.b_
y.toString
y=y.createElement("base")
H.h(y,"$ised")
y.href=z.baseURI
z=$.b_.head;(z&&C.ae).ap(z,y)}z=$.b_
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$iscE")}z=$.b_
if(!!this.$iscE)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.b_.body;(z&&C.x).ap(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.au(C.aw,a.tagName)){z=$.dm;(z&&C.a5).eU(z,x)
z=$.dm
w=(z&&C.a5).hV(z,b)}else{x.innerHTML=b
w=$.b_.createDocumentFragment()
for(z=J.R(w);y=x.firstChild,y!=null;)z.ap(w,y)}z=$.b_.body
if(x==null?z!=null:x!==z)J.e6(x)
c.dh(w)
C.m.hE(document,w)
return w},function(a,b,c){return this.aK(a,b,c,null)},"hW",null,null,"gja",5,5,null],
seq:function(a,b){this.cn(a,b)},
co:function(a,b,c,d){a.textContent=null
this.ap(a,this.aK(a,b,c,d))},
cn:function(a,b){return this.co(a,b,null,null)},
bz:function(a,b){return a.getAttribute(b)},
hm:function(a,b){return a.removeAttribute(b)},
eV:function(a,b,c){return a.setAttribute(b,c)},
$isaI:1,
"%":";Element"},
iy:{"^":"w:22;",
$1:function(a){return!!J.M(H.h(a,"$isE")).$isaI}},
mP:{"^":"Y;0height",
sal:function(a,b){a.height=H.z(b)},
"%":"HTMLEmbedElement"},
b0:{"^":"S;",$isb0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cn:{"^":"S;",
e_:["fn",function(a,b,c,d){H.q(c,{func:1,args:[W.b0]})
if(c!=null)this.fN(a,b,c,!1)}],
fN:function(a,b,c,d){return a.addEventListener(b,H.bR(H.q(c,{func:1,args:[W.b0]}),1),!1)},
$iscn:1,
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest|MIDIInput|MIDIOutput|MIDIPort|ServiceWorker;EventTarget"},
n9:{"^":"Y;0I:length=","%":"HTMLFormElement"},
iG:{"^":"Y;","%":"HTMLHeadElement"},
iH:{"^":"io;","%":"HTMLDocument"},
nd:{"^":"Y;0height",
sal:function(a,b){a.height=H.z(b)},
"%":"HTMLIFrameElement"},
nf:{"^":"Y;0height",
sal:function(a,b){a.height=H.p(b)},
"%":"HTMLImageElement"},
nh:{"^":"Y;0height",
sal:function(a,b){a.height=H.p(b)},
"%":"HTMLInputElement"},
c7:{"^":"k6;",$isc7:1,"%":"KeyboardEvent"},
iQ:{"^":"Y;","%":"HTMLLIElement"},
iX:{"^":"S;",
u:function(a){return String(a)},
$isiX:1,
"%":"Location"},
j2:{"^":"Y;","%":"HTMLAudioElement;HTMLMediaElement"},
nn:{"^":"cn;",
e_:function(a,b,c,d){H.q(c,{func:1,args:[W.b0]})
if(b==="message")a.start()
this.fn(a,b,c,!1)},
"%":"MessagePort"},
aP:{"^":"eS;a",
gbq:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.f9("No elements"))
if(y>1)throw H.e(P.f9("More than one element"))
return z.firstChild},
aZ:function(a,b){var z,y,x,w,v
H.k(b,"$isB",[W.E],"$asB")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.R(y),v=0;v<x;++v)w.ap(y,z.firstChild)
return},
l:function(a,b,c){var z
H.p(b)
z=this.a
J.hy(z,H.h(c,"$isE"),C.N.i(z.childNodes,b))},
gar:function(a){var z=this.a.childNodes
return new W.eE(z,z.length,-1,[H.bD(C.N,z,"bJ",0)])},
bL:function(a,b,c,d){throw H.e(P.Z("Cannot fillRange on Node list"))},
gI:function(a){return this.a.childNodes.length},
i:function(a,b){return C.N.i(this.a.childNodes,b)},
$asad:function(){return[W.E]},
$asB:function(){return[W.E]},
$asd:function(){return[W.E]}},
E:{"^":"cn;0bk:parentElement=,0iA:previousSibling=",
iH:function(a){var z=a.parentNode
if(z!=null)J.cD(z,a)},
u:function(a){var z=a.nodeValue
return z==null?this.fo(a):z},
ap:function(a,b){return a.appendChild(H.h(b,"$isE"))},
hn:function(a,b){return a.removeChild(b)},
hp:function(a,b,c){return a.replaceChild(b,c)},
$isE:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jf:{"^":"l4;",
gI:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.co(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.p(b)
H.h(c,"$isE")
throw H.e(P.Z("Cannot assign element of immutable List."))},
aS:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$isbM:1,
$asbM:function(){return[W.E]},
$asad:function(){return[W.E]},
$isB:1,
$asB:function(){return[W.E]},
$isd:1,
$asd:function(){return[W.E]},
$asbJ:function(){return[W.E]},
"%":"NodeList|RadioNodeList"},
nx:{"^":"Y;0height",
sal:function(a,b){a.height=H.z(b)},
"%":"HTMLObjectElement"},
jE:{"^":"S;",
hV:function(a,b){return a.createContextualFragment(b)},
eU:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nP:{"^":"Y;0I:length=","%":"HTMLSelectElement"},
jY:{"^":"Y;",
aK:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.cr(a,b,c,d)
z=W.eB("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aP(y).aZ(0,new W.aP(z))
return y},
"%":"HTMLTableElement"},
nT:{"^":"Y;",
aK:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.cr(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.a7.aK(z.createElement("table"),b,c,d)
z.toString
z=new W.aP(z)
x=z.gbq(z)
x.toString
z=new W.aP(x)
w=z.gbq(z)
y.toString
w.toString
new W.aP(y).aZ(0,new W.aP(w))
return y},
"%":"HTMLTableRowElement"},
nU:{"^":"Y;",
aK:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.cr(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.a7.aK(z.createElement("table"),b,c,d)
z.toString
z=new W.aP(z)
x=z.gbq(z)
y.toString
x.toString
new W.aP(y).aZ(0,new W.aP(x))
return y},
"%":"HTMLTableSectionElement"},
fd:{"^":"Y;",
co:function(a,b,c,d){var z
a.textContent=null
z=this.aK(a,b,c,d)
J.hA(a.content,z)},
cn:function(a,b){return this.co(a,b,null,null)},
$isfd:1,
"%":"HTMLTemplateElement"},
k6:{"^":"b0;","%":"CompositionEvent|DragEvent|FocusEvent|MouseEvent|PointerEvent|TextEvent|TouchEvent|WheelEvent;UIEvent"},
k7:{"^":"Y;","%":"HTMLUListElement"},
nY:{"^":"j2;0height",
sal:function(a,b){a.height=H.p(b)},
"%":"HTMLVideoElement"},
kw:{"^":"cn;",
aV:function(a,b){H.q(b,{func:1,ret:-1,args:[P.am]})
this.h4(a)
return this.hq(a,W.hd(b,P.am))},
hq:function(a,b){return a.requestAnimationFrame(H.bR(H.q(b,{func:1,ret:-1,args:[P.am]}),1))},
h4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
gbk:function(a){return W.lL(a.parent)},
$isfG:1,
"%":"DOMWindow|Window"},
fI:{"^":"E;",$isfI:1,"%":"Attr"},
o4:{"^":"iq;",
u:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
at:function(a,b){var z
if(b==null)return!1
if(!H.cy(b,"$iscu",[P.am],"$ascu"))return!1
z=J.R(b)
return a.left===z.gca(b)&&a.top===z.gd3(b)&&a.width===z.gcj(b)&&a.height===z.gal(b)},
ga6:function(a){return W.fQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
sal:function(a,b){a.height=b},
gcj:function(a){return a.width},
gj:function(a){return a.x},
gk:function(a){return a.y},
"%":"ClientRect|DOMRect"},
o8:{"^":"lK;",
gI:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.co(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.p(b)
H.h(c,"$isE")
throw H.e(P.Z("Cannot assign element of immutable List."))},
aS:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$isbM:1,
$asbM:function(){return[W.E]},
$asad:function(){return[W.E]},
$isB:1,
$asB:function(){return[W.E]},
$isd:1,
$asd:function(){return[W.E]},
$asbJ:function(){return[W.E]},
"%":"MozNamedAttrMap|NamedNodeMap"},
kE:{"^":"dv;h2:a<",
bg:function(a,b){var z,y,x,w,v,u
H.q(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=this.gb3(),y=z.length,x=this.a,w=J.R(x),v=0;v<z.length;z.length===y||(0,H.d9)(z),++v){u=z[v]
b.$2(u,w.bz(x,u))}},
gb3:function(){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
v=H.h(z[w],"$isfI")
if(v.namespaceURI==null)C.a.p(y,v.name)}return y},
$ascQ:function(){return[P.n,P.n]},
$asaq:function(){return[P.n,P.n]}},
kI:{"^":"kE;a",
i:function(a,b){return J.dc(this.a,H.z(b))},
l:function(a,b,c){J.hH(this.a,b,H.z(c))},
gI:function(a){return this.gb3().length}},
o5:{"^":"dD;a,b,c,$ti",
iq:function(a,b,c,d){var z=H.r(this,0)
H.q(a,{func:1,ret:-1,args:[z]})
H.q(c,{func:1,ret:-1})
return W.dK(this.a,this.b,a,!1,z)}},
kK:{"^":"jS;a,b,c,d,e,$ti",
hB:function(){var z=this.d
if(z!=null&&this.a<=0)J.hz(this.b,this.c,z,!1)},
E:{
dK:function(a,b,c,d,e){var z=W.hd(new W.kL(c),W.b0)
z=new W.kK(0,a,b,z,!1,[e])
z.hB()
return z}}},
kL:{"^":"w:23;a",
$1:function(a){return this.a.$1(H.h(a,"$isb0"))}},
cx:{"^":"c;a",
fI:function(a){var z,y
z=$.$get$dN()
if(z.a===0){for(y=0;y<262;++y)z.l(0,C.av[y],W.mi())
for(y=0;y<12;++y)z.l(0,C.M[y],W.mj())}},
bw:function(a){return $.$get$fP().au(0,W.c1(a))},
be:function(a,b,c){var z,y,x
z=W.c1(a)
y=$.$get$dN()
x=y.i(0,H.i(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.m5(x.$4(a,b,c,this))},
$isaU:1,
E:{
fO:function(a){var z,y
z=W.hK(null)
y=window.location
z=new W.cx(new W.la(z,y))
z.fI(a)
return z},
o6:[function(a,b,c,d){H.h(a,"$isaI")
H.z(b)
H.z(c)
H.h(d,"$iscx")
return!0},"$4","mi",16,0,6],
o7:[function(a,b,c,d){var z,y,x,w,v
H.h(a,"$isaI")
H.z(b)
H.z(c)
z=H.h(d,"$iscx").a
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
return z},"$4","mj",16,0,6]}},
bJ:{"^":"c;$ti",
gar:function(a){return new W.eE(a,this.gI(a),-1,[H.bD(this,a,"bJ",0)])},
bL:function(a,b,c,d){H.u(d,H.bD(this,a,"bJ",0))
throw H.e(P.Z("Cannot modify an immutable List."))}},
eZ:{"^":"c;a",
bw:function(a){return C.a.e1(this.a,new W.jh(a))},
be:function(a,b,c){return C.a.e1(this.a,new W.jg(a,b,c))},
$isaU:1},
jh:{"^":"w:10;a",
$1:function(a){return H.h(a,"$isaU").bw(this.a)}},
jg:{"^":"w:10;a,b,c",
$1:function(a){return H.h(a,"$isaU").be(this.a,this.b,this.c)}},
lb:{"^":"c;",
fJ:function(a,b,c,d){var z,y,x
this.a.aZ(0,c)
z=b.d7(0,new W.lc())
y=b.d7(0,new W.ld())
this.b.aZ(0,z)
x=this.c
x.aZ(0,C.a0)
x.aZ(0,y)},
bw:function(a){return this.a.au(0,W.c1(a))},
be:["fs",function(a,b,c){var z,y
z=W.c1(a)
y=this.c
if(y.au(0,H.i(z)+"::"+b))return this.d.hF(c)
else if(y.au(0,"*::"+b))return this.d.hF(c)
else{y=this.b
if(y.au(0,H.i(z)+"::"+b))return!0
else if(y.au(0,"*::"+b))return!0
else if(y.au(0,H.i(z)+"::*"))return!0
else if(y.au(0,"*::*"))return!0}return!1}],
$isaU:1},
lc:{"^":"w:3;",
$1:function(a){return!C.a.au(C.M,H.z(a))}},
ld:{"^":"w:3;",
$1:function(a){return C.a.au(C.M,H.z(a))}},
lh:{"^":"lb;e,a,b,c,d",
be:function(a,b,c){if(this.fs(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.dc(a,"template")==="")return this.e.au(0,b)
return!1},
E:{
fW:function(){var z,y,x,w,v
z=P.n
y=P.eR(C.L,z)
x=H.r(C.L,0)
w=H.q(new W.li(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.lh(y,P.cq(null,null,null,z),P.cq(null,null,null,z),P.cq(null,null,null,z),null)
y.fJ(null,new H.j0(C.L,w,[x,z]),v,null)
return y}}},
li:{"^":"w:26;",
$1:function(a){return"TEMPLATE::"+H.i(H.z(a))}},
lg:{"^":"c;",
bw:function(a){var z=J.M(a)
if(!!z.$isf6)return!1
z=!!z.$isQ
if(z&&W.c1(a)==="foreignObject")return!1
if(z)return!0
return!1},
be:function(a,b,c){if(b==="is"||C.b.aP(b,"on"))return!1
return this.bw(a)},
$isaU:1},
eE:{"^":"c;a,b,c,0d,$ti",
sdK:function(a){this.d=H.u(a,H.r(this,0))},
a5:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdK(J.hv(this.a,z))
this.c=z
return!0}this.sdK(null)
this.c=y
return!1},
ga8:function(){return this.d},
$isbK:1},
kG:{"^":"c;a",
gbk:function(a){return W.fK(this.a.parent)},
$iscn:1,
$isfG:1,
E:{
fK:function(a){if(a===window)return H.h(a,"$isfG")
else return new W.kG(a)}}},
aU:{"^":"c;"},
la:{"^":"c;a,b",$isnW:1},
h5:{"^":"c;a",
dh:function(a){new W.lH(this).$2(a,null)},
bH:function(a,b){if(b==null)J.e6(a)
else J.cD(b,a)},
ht:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hD(a)
x=J.dc(y.gh2(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.as(t)}v="element unprintable"
try{v=J.bH(a)}catch(t){H.as(t)}try{u=W.c1(a)
this.hs(H.h(a,"$isaI"),b,z,v,u,H.h(y,"$isaq"),H.z(x))}catch(t){if(H.as(t) instanceof P.b6)throw t
else{this.bH(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hs:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bH(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.bw(a)){this.bH(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.be(a,"is",g)){this.bH(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gb3()
y=H.f(z.slice(0),[H.r(z,0)])
for(x=f.gb3().length-1,z=f.a,w=J.R(z);x>=0;--x){if(x>=y.length)return H.b(y,x)
v=y[x]
if(!this.a.be(a,J.hI(v),w.bz(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.bz(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.bz(z,v)
w.hm(z,v)}}if(!!J.M(a).$isfd)this.dh(a.content)},
$isnw:1},
lH:{"^":"w:27;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ht(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bH(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hF(z)}catch(w){H.as(w)
v=H.h(z,"$isE")
if(x){u=v.parentNode
if(u!=null)J.cD(u,v)}else J.cD(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isE")}}},
kF:{"^":"S+ic;"},
l3:{"^":"S+ad;"},
l4:{"^":"l3+bJ;"},
lJ:{"^":"S+ad;"},
lK:{"^":"lJ+bJ;"}}],["","",,P,{"^":"",
es:function(){var z=$.er
if(z==null){z=J.db(window.navigator.userAgent,"Opera",0)
$.er=z}return z},
ik:function(){var z,y
z=$.eo
if(z!=null)return z
y=$.ep
if(y==null){y=J.db(window.navigator.userAgent,"Firefox",0)
$.ep=y}if(y)z="-moz-"
else{y=$.eq
if(y==null){y=!P.es()&&J.db(window.navigator.userAgent,"Trident/",0)
$.eq=y}if(y)z="-ms-"
else z=P.es()?"-o-":"-webkit-"}$.eo=z
return z}}],["","",,P,{"^":""}],["","",,P,{"^":"",hL:{"^":"S;",$ishL:1,"%":"SVGAnimatedLength"},hM:{"^":"S;",$ishM:1,"%":"SVGAnimatedLengthList"},hN:{"^":"S;",$ishN:1,"%":"SVGAnimatedNumber"},mQ:{"^":"Q;0j:x=,0k:y=","%":"SVGFEBlendElement"},mR:{"^":"Q;0j:x=,0k:y=","%":"SVGFEColorMatrixElement"},mS:{"^":"Q;0j:x=,0k:y=","%":"SVGFEComponentTransferElement"},mT:{"^":"Q;0j:x=,0k:y=","%":"SVGFECompositeElement"},mU:{"^":"Q;0j:x=,0k:y=","%":"SVGFEConvolveMatrixElement"},mV:{"^":"Q;0j:x=,0k:y=","%":"SVGFEDiffuseLightingElement"},mW:{"^":"Q;0j:x=,0k:y=","%":"SVGFEDisplacementMapElement"},mX:{"^":"Q;0j:x=,0k:y=","%":"SVGFEFloodElement"},mY:{"^":"Q;0j:x=,0k:y=","%":"SVGFEGaussianBlurElement"},mZ:{"^":"Q;0j:x=,0k:y=","%":"SVGFEImageElement"},n_:{"^":"Q;0j:x=,0k:y=","%":"SVGFEMergeElement"},n0:{"^":"Q;0j:x=,0k:y=","%":"SVGFEMorphologyElement"},n1:{"^":"Q;0j:x=,0k:y=","%":"SVGFEOffsetElement"},n2:{"^":"Q;0j:x=,0k:y=","%":"SVGFEPointLightElement"},n3:{"^":"Q;0j:x=,0k:y=","%":"SVGFESpecularLightingElement"},n4:{"^":"Q;0j:x=,0k:y=","%":"SVGFESpotLightElement"},n5:{"^":"Q;0j:x=,0k:y=","%":"SVGFETileElement"},n6:{"^":"Q;0j:x=,0k:y=","%":"SVGFETurbulenceElement"},n7:{"^":"Q;0j:x=,0k:y=","%":"SVGFilterElement"},n8:{"^":"c4;0j:x=,0k:y=","%":"SVGForeignObjectElement"},iF:{"^":"c4;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},c4:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ng:{"^":"c4;0j:x=,0k:y=","%":"SVGImageElement"},nm:{"^":"Q;0j:x=,0k:y=","%":"SVGMaskElement"},nF:{"^":"Q;0j:x=,0k:y=","%":"SVGPatternElement"},nG:{"^":"S;0I:length=","%":"SVGPointList"},nN:{"^":"iF;0j:x=,0k:y=","%":"SVGRectElement"},f6:{"^":"Q;",$isf6:1,"%":"SVGScriptElement"},Q:{"^":"aI;",
seq:function(a,b){this.cn(a,b)},
aK:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.aU])
C.a.p(z,W.fO(null))
C.a.p(z,W.fW())
C.a.p(z,new W.lg())
c=new W.h5(new W.eZ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.x).hW(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aP(w)
u=z.gbq(z)
for(z=J.R(v);x=u.firstChild,x!=null;)z.ap(v,x)
return v},
$isQ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nS:{"^":"c4;0j:x=,0k:y=","%":"SVGSVGElement"},k0:{"^":"c4;","%":"SVGTextPathElement;SVGTextContentElement"},nV:{"^":"k0;0j:x=,0k:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nX:{"^":"c4;0j:x=,0k:y=","%":"SVGUseElement"}}],["","",,P,{"^":"",L:{"^":"c;",$isB:1,
$asB:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]}},eG:{"^":"c;",$isB:1,
$asB:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]}}}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,V,{"^":"",
iO:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
switch(a0.a){case C.Z:H.y(a0,"$isnp")
z=new E.a(new Float64Array(2))
y=new E.a(new Float64Array(2))
x=new E.a(new Float64Array(2))
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(4)
w=new V.j4(z,y,0,0,0,x,0,0,0,new E.a(w),new E.a(v),0,0,new E.aE(u),new E.a(new Float64Array(2)),a0.gbl(a0),!1,!1)
w.aA(a.ch,a0)
y.h(a0.gju(a0))
G.dG(w.r.d,y,z)
w.fr=a0.giu()
x.N()
w.cy=a0.gej()
w.db=a0.gec()
return w
case C.J:H.y(a0,"$iseu")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new E.a(new Float64Array(2))
u.h(a0.f)
t=new E.a(new Float64Array(2))
t.h(a0.r)
v=new V.cL(0,0,0,u,t,0,0,0,0,0,new E.a(z),new E.a(y),new E.a(x),new E.a(w),new E.a(v),0,0,0,0,0,a0.a,!1,!1)
v.aA(a.ch,a0)
v.fx=a0.x
v.ch=a0.y
v.cx=a0.z
return v
case C.aq:H.y(a0,"$isnI")
z=new Float64Array(3)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(9)
t=a0.gcb()
s=new E.a(new Float64Array(2))
s.h(t)
t=a0.gcc()
r=new E.a(new Float64Array(2))
r.h(t)
t=a0.gir()
q=new E.a(new Float64Array(2))
q.h(t)
q.a7()
t=new E.a(new Float64Array(2))
u=new V.jB(s,r,q,t,new E.aO(z),0,0,0,0,0,!1,!1,0,0,new E.a(y),new E.a(x),0,0,0,0,new E.a(w),new E.a(v),0,0,0,0,new E.aT(u),0,a0.gbl(a0),!1,!1)
u.aA(a.ch,a0)
q.a0(1,t)
u.dx=a0.giF()
u.fx=a0.gjk()
u.fy=a0.gjw()
u.go=a0.gjm()
u.id=a0.giv()
u.k1=a0.gjc()
u.k2=a0.gi5()
u.k3=C.o
return u
case C.H:H.y(a0,"$isdA")
z=new E.a(new Float64Array(2))
y=new E.a(new Float64Array(2))
x=new Float64Array(3)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
x=new V.dz(z,y,new E.aO(x),0,!1,0,0,!1,0,0,0,0,0,new E.a(w),new E.a(v),new E.a(u),new E.a(t),0,0,0,0,new E.aT(new Float64Array(9)),0,C.o,a0.a,!1,!1)
x.aA(a.ch,a0)
z.h(a0.f)
y.h(a0.r)
x.fy=a0.x
x.go=a0.z
x.id=a0.Q
x.dy=a0.cy
x.fr=a0.cx
x.fx=a0.y
x.dx=a0.ch
return x
case C.at:H.y(a0,"$isnZ")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(9)
u=a0.gcb()
t=new E.a(new Float64Array(2))
t.h(u)
u=a0.gcc()
s=new E.a(new Float64Array(2))
s.h(u)
z=new V.kt(0,0,0,t,s,0,0,new E.aO(new Float64Array(3)),0,0,new E.a(z),new E.a(y),new E.a(x),new E.a(w),0,0,0,0,new E.aT(v),a0.gbl(a0),!1,!1)
z.aA(a.ch,a0)
z.dy=a0.giF()
z.ch=a0.gej()
z.cx=a0.gec()
return z
case C.K:H.y(a0,"$iseH")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(4)
u=new E.a(new Float64Array(2))
u.h(a0.f)
t=new E.a(new Float64Array(2))
t.h(a0.r)
z=new V.iC(u,t,new E.a(new Float64Array(2)),0,0,0,0,0,new E.a(z),new E.a(y),new E.a(x),new E.a(w),0,0,0,0,new E.aE(v),0,a0.a,!1,!1)
z.aA(a.ch,a0)
z.dx=a0.x
z.dy=a0.y
return z
case C.as:H.y(a0,"$iso_")
z=new E.a(new Float64Array(2))
y=new E.a(new Float64Array(2))
x=new E.a(new Float64Array(2))
w=new E.a(new Float64Array(2))
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
v=new V.ku(0,0,z,y,x,w,0,0,0,0,0,!1,0,0,new E.a(v),new E.a(u),0,0,0,0,new E.a(t),new E.a(s),0,0,0,0,0,0,0,0,0,new E.a(r),new E.a(q),new E.a(new Float64Array(2)),a0.gbl(a0),!1,!1)
v.aA(a.ch,a0)
z.h(a0.gcb())
y.h(a0.gcc())
x.h(a0.gir())
x.a0(1,w)
v.W=0
v.fx=0
v.go=a0.gjn()
v.id=a0.giv()
v.k1=a0.gi5()
v.ch=a0.gej()
v.cx=a0.gec()
return v
case C.ar:H.y(a0,"$isnb")
z=new E.a(new Float64Array(2))
y=new E.a(new Float64Array(2))
x=new E.a(new Float64Array(2))
w=new E.a(new Float64Array(2))
v=new E.a(new Float64Array(2))
u=new E.a(new Float64Array(2))
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=a0.gcW()
m=a0.gcX()
l=a0.gcW().eT()
k=a0.gcX().eT()
j=a0.gcW().eK()
i=a0.gcX().eK()
o=new V.iE(n,m,l,k,j,i,z,y,x,w,v,u,0,0,0,0,0,0,0,0,0,new E.a(t),new E.a(s),new E.a(r),new E.a(q),0,0,0,0,0,0,0,0,new E.a(p),new E.a(o),0,0,0,0,0,a0.gbl(a0),!1,!1)
o.aA(a.ch,a0)
n=n.eM()
o.f=n
h=n.d
g=j.gcJ()
j.gbb().gv()
t=o.Q.a.m()
s=o.Q.a.m()
f=a0.gcW()
x.h(f.ghc())
z.h(f.ghd())
o.k2=f.ghk()
v.h(f.ghe())
G.t(h.b,z,s)
s.p(0,h.a)
s.n(g.gcd())
G.aL(g.gd_(),s,t)
t.n(x)
e=t.F(v)
o.Q.a.b-=2
z=m.eM()
o.r=z
d=z.d
c=i.gcJ()
i.gbb().gv()
z=o.Q.a.m()
x=o.Q.a.m()
f=a0.gcX()
w.h(f.ghc())
y.h(f.ghd())
o.k3=f.ghk()
u.h(f.ghe())
G.t(d.b,y,x)
x.p(0,d.a)
x.n(c.gcd())
G.aL(c.gd_(),x,z)
z.n(w)
b=z.F(u)
o.Q.a.b-=2
z=a0.giD()
o.r1=z
o.k4=e+z*b
o.r2=0
return o
case C.Y:H.y(a0,"$isnL")
z=new E.a(new Float64Array(2))
y=new E.a(new Float64Array(2))
x=new E.a(new Float64Array(2))
w=new E.a(new Float64Array(2))
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
v=new V.f4(z,y,0,0,x,w,0,0,0,0,0,new E.a(v),new E.a(u),new E.a(t),new E.a(s),new E.a(r),new E.a(new Float64Array(2)),0,0,0,0,0,a0.gbl(a0),!1,!1)
v.aA(a.ch,a0)
z.h(a0.giX())
y.h(a0.giY())
x.h(a0.gcb())
w.h(a0.gcc())
v.fx=a0.giD()
v.cy=a0.gio()
v.db=a0.gip()
v.fr=a0.gio().D(0,C.c.G(v.fx,a0.gip()))
v.fy=0
return v
case C.I:return V.ia(a,H.y(a0,"$isej"))
case C.ao:H.y(a0,"$isnO")
z=new E.a(new Float64Array(2))
y=new E.a(new Float64Array(2))
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
x=new V.jH(z,y,0,0,0,0,0,new E.a(x),new E.a(w),new E.a(v),new E.a(u),new E.a(new Float64Array(2)),0,0,0,0,0,C.o,a0.gbl(a0),!1,!1)
x.aA(a.ch,a0)
z.h(a0.gcb())
y.h(a0.gcc())
x.cy=a0.gjl(a0)
return x
case C.ap:H.y(a0,"$isno")
z=new E.a(new Float64Array(2))
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
y=new V.j3(z,0,new E.a(y),0,0,0,0,0,0,new E.a(x),new E.a(w),new E.a(v),new E.a(u),new E.a(t),0,0,0,0,0,new E.aE(new Float64Array(4)),0,a0.gbl(a0),!1,!1)
y.aA(a.ch,a0)
z.h(a0.gjj())
y.cx=a0.gj8()
y.db=0
y.dx=a0.giu()
y.dy=a0.gjo()
y.fr=a0.gj9()
return y
case C.an:default:return}},
jq:function(a){return a.gcS(a).M(0,0)},
b7:{"^":"c;",
dl:function(a,b){var z,y,x
z=a.y
y=b.y
x=z.c
if(x===y.c&&x!==0)return x>0
return(z.b&y.a)!==0&&(z.a&y.b)!==0}},
aa:{"^":"c;a,b,c"},
ie:{"^":"c;"},
O:{"^":"c;a,b",
d9:function(a){var z,y
z=this.a.a
y=this.b.a
a.sj(0,(z[0]+y[0])*0.5)
a.sk(0,(z[1]+y[1])*0.5)},
ai:function(a,b){var z,y,x,w,v
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
aX:function(){var z,y
z=this.b.a
y=this.a.a
return 2*(z[0]-y[0]+z[1]-y[1])},
u:function(a){return"AABB["+this.a.u(0)+" . "+this.b.u(0)+"]"},
E:{
hJ:function(a,b){var z,y
z=b.a.a
y=a.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=a.a.a
y=b.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0}}},
ig:{"^":"c;a,b,0c,d,e,0f,r,x,y",
sdO:function(a){this.c=H.k(a,"$isd",[P.j],"$asd")},
sdP:function(a){this.f=H.k(a,"$isd",[V.bm],"$asd")},
fA:function(a){var z,y
z=new Array(this.r)
z.fixed$length=Array
this.sdP(H.f(z,[V.bm]))
for(y=0;y<this.r;++y){z=this.f;(z&&C.a).l(z,y,new V.bm(0,0))}this.sdO(P.bj(this.d,0,!1,P.j))},
iO:function(a,b){var z,y,x,w
z=this.a
y=z.b
if(a<0||a>=y.length)return H.b(y,a)
x=y[a].gbc()
z=z.b
if(b<0||b>=z.length)return H.b(z,b)
w=z[b].gbc()
z=w.a.a
y=x.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=x.a.a
y=w.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0},
d6:function(a){var z,y,x,w,v,u,t,s,r
this.x=0
for(z=this.a,y=0;y<this.e;++y){x=this.c
if(y>=x.length)return H.b(x,y)
x=H.p(x[y])
this.y=x
if(x===-1)continue
z.iB(this,C.a.i(z.b,x).gbc())}this.e=0
F.hs(this.f,0,this.x,V.bm)
for(y=0;y<this.x;){x=this.f
if(y<0||y>=x.length)return H.b(x,y)
w=x[y]
x=w.a
v=C.a.i(z.b,x).gaW()
x=w.b
a.hD(v,C.a.i(z.b,x).gaW());++y
for(x=this.x,u=this.f;y<x;){if(y>=u.length)return H.b(u,y)
t=u[y]
s=t.a
r=w.a
if(s==null?r==null:s===r){s=t.b
r=w.b
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)break;++y}}},
e5:function(a){var z,y,x
z=this.e
y=this.d
if(z===y){x=this.c
z=y*2
this.d=z
z=new Array(z)
z.fixed$length=Array
this.sdO(H.f(z,[P.j]))
C.a.aD(this.c,0,x.length,x,0)}C.a.l(this.c,this.e,a);++this.e},
eE:function(a){var z,y,x,w,v
if(a===this.y)return!0
z=this.x
y=this.r
if(z===y){x=this.f
z=y*2
this.r=z
z=new Array(z)
z.fixed$length=Array
this.sdP(H.f(z,[V.bm]))
z=this.f
w=x.length;(z&&C.a).aD(z,0,w,x,0)
for(;w<this.r;++w){z=this.f;(z&&C.a).l(z,w,new V.bm(0,0))}}z=this.y
if(typeof z!=="number")return H.N(z)
y=this.f
v=this.x
if(a<z){if(v>=y.length)return H.b(y,v)
y[v].sex(a)
z=this.f
y=this.x
if(y>=z.length)return H.b(z,y)
z[y].sey(this.y)}else{if(v>=y.length)return H.b(y,v)
y[v].sex(z)
z=this.f
y=this.x
if(y>=z.length)return H.b(z,y)
z[y].sey(a)}++this.x
return!0},
$isk3:1,
$ismI:1,
E:{
ba:function(a){var z=new V.ig(a,0,16,0,16,0,-1)
z.fA(a)
return z}}},
iv:{"^":"c;0a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy",
shg:function(a){this.b=H.k(a,"$isd",[V.aZ],"$asd")},
six:function(a){this.r=H.k(a,"$isd",[V.aZ],"$asd")},
fC:function(){var z,y,x,w,v
for(z=this.d-1;z>=0;--z){y=this.b
x=new Float64Array(2)
C.a.l(y,z,new V.aZ(new V.O(new E.a(x),new E.a(new Float64Array(2))),z,0))
y=this.b
x=y.length
if(z>=x)return H.b(y,z)
w=y[z]
if(z===this.d-1)y=null
else{v=z+1
if(v>=x)return H.b(y,v)
v=y[v]
y=v}J.e8(w,y)
y=this.b
if(z>=y.length)return H.b(y,z)
J.e7(y[z],-1)}for(y=this.f,z=0;z<4;++z)C.a.l(y,z,new E.a(new Float64Array(2)))},
iw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
this.ho(y)
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
this.dL(a)
return!0},
iB:function(a,b){var z,y,x,w,v
this.x=0
z=this.r
this.x=1
C.a.l(z,0,this.a)
for(z=[V.aZ];y=this.x,y>0;){x=this.r;--y
this.x=y
if(y>=x.length)return H.b(x,y)
w=x[y]
if(w==null)continue
if(V.hJ(w.a,b))if(w.d==null)a.eE(w.f)
else{y=this.r.length
if(y-this.x-2<=0){y=new Array(y*2)
y.fixed$length=Array
v=H.f(y,z)
y=this.r
C.a.aD(v,0,y.length,y,0)
this.six(v)}C.a.l(this.r,this.x++,w.d)
C.a.l(this.r,this.x++,w.e)}}},
cu:function(a){var z=a.d
if(z==null)return 0
return H.p(1+Math.max(this.cu(z),this.cu(a.e)))},
dv:function(){var z,y,x,w,v,u,t
z=this.e
if(z===-1){y=this.b
z=this.d*=2
z=new Array(z)
z.fixed$length=Array
this.shg(H.f(z,[V.aZ]))
C.a.aD(this.b,0,y.length,y,0)
for(x=this.d-1;z=this.c,x>=z;--x){z=this.b
w=new Float64Array(2)
C.a.l(z,x,new V.aZ(new V.O(new E.a(w),new E.a(new Float64Array(2))),x,0))
z=this.b
w=z.length
if(x<0||x>=w)return H.b(z,x)
v=z[x]
if(x===this.d-1)z=null
else{u=x+1
if(u>=w)return H.b(z,u)
u=z[u]
z=u}J.e8(v,z)
z=this.b
if(x>=z.length)return H.b(z,x)
J.e7(z[x],-1)}this.e=z}w=this.b
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
dI:function(a){var z,y
z=this.e
if(z!==-1){y=this.b
if(z<0||z>=y.length)return H.b(y,z)
z=y[z]}else z=null
a.c=H.h(z,"$isaZ")
a.r=-1
this.e=a.f;--this.c},
dL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.b
if(a<0||a>=z.length)return H.b(z,a)
y=z[a]
x=this.a
if(x==null){this.a=y
y.c=null
return}w=y.a
for(z=this.ch;v=x.d,v!=null;){u=x.e
t=x.a
s=t.aX()
z.ai(t,w)
r=z.aX()
q=2*r
p=2*(r-s)
if(v.d==null){z.ai(w,v.a)
o=z.aX()+p}else{t=v.a
z.ai(w,t)
n=t.aX()
o=z.aX()-n+p}if(u.d==null){z.ai(w,u.a)
m=z.aX()+p}else{t=u.a
z.ai(w,t)
n=t.aX()
m=z.aX()-n+p}if(q<o&&q<m)break
x=o<m?v:u}z=this.b
t=x.f
if(t<0||t>=z.length)return H.b(z,t)
l=J.hE(z[t])
k=this.dv()
k.c=l
k.b=null
k.a.ai(w,x.a)
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
this.a=k}for(x=k;x!=null;){x=this.dw(x)
j=x.d
u=x.e
x.r=H.p(1+Math.max(j.r,u.r))
x.a.ai(j.a,u.a)
x=x.c}},
ho:function(a){var z,y,x,w,v,u,t
if(a===this.a){this.a=null
return}z=a.c
y=z.c
x=z.d
if(x===a)x=z.e
if(y!=null){w=y.d
if(w==null?z==null:w===z)y.d=x
else y.e=x
x.c=y
this.dI(z)
for(v=y;v!=null;){v=this.dw(v)
u=v.d
t=v.e
v.a.ai(u.a,t.a)
v.r=H.p(1+Math.max(u.r,t.r))
v=v.c}}else{this.a=x
x.c=null
this.dI(z)}},
dw:function(a){var z,y,x,w,v,u,t,s
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
u.ai(z.a,v.a)
y.a.ai(u,w.a)
z=H.p(1+Math.max(z.r,v.r))
a.r=z
y.r=H.p(1+Math.max(z,w.r))}else{y.e=v
a.e=w
w.c=a
u.ai(z.a,w.a)
y.a.ai(u,v.a)
z=H.p(1+Math.max(z.r,w.r))
a.r=z
y.r=H.p(1+Math.max(z,v.r))}return y}if(x<-1){t=z.d
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
u.ai(y.a,s.a)
z.a.ai(u,t.a)
u=H.p(1+Math.max(y.r,s.r))
a.r=u
z.r=H.p(1+Math.max(u,t.r))}else{z.e=s
a.d=t
t.c=a
u.ai(y.a,t.a)
z.a.ai(u,s.a)
u=H.p(1+Math.max(y.r,t.r))
a.r=u
z.r=H.p(1+Math.max(u,s.r))}return z}return a},
i4:function(a){var z,y
z=this.a
if(z==null)return
y=this.cu(z)
this.cP(a,this.a,0,y)},
cP:function(a,b,c,d){var z,y,x,w,v,u
z=b.a
y=H.k(this.f,"$isd",[E.a],"$asd")
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
x.aO(1,v,v)
a.c_(y,4,x)
y=a.c
y.stroke()
v=this.cy
a.b.bA(z,v)
v=v.a
z=v[0]
v=v[1]
w=c+1
u=H.i(b)+".id-"+w+"/"+d
a.c1(x)
C.t.fk(y,u,z,v)
z=b.d
if(z!=null)this.cP(a,z,w,d)
z=b.e
if(z!=null)this.cP(a,z,w,d)},
$ismJ:1,
E:{
bf:function(){var z,y,x,w,v,u,t,s,r,q
z=new Array(16)
z.fixed$length=Array
y=[V.aZ]
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
z=new V.iv(z,0,16,0,x,y,0,new E.a(w),new V.O(new E.a(v),new E.a(u)),new V.a8(new E.a(t),new E.a(s),0),new V.O(new E.a(r),new E.a(q)),new G.a3(0,0,0),new E.a(new Float64Array(2)))
z.fC()
return z}}},
aZ:{"^":"c;bc:a<,0aW:b<,0bk:c>,0d,0e,f,r",
sbk:function(a,b){this.c=H.h(b,"$isaZ")},
sal:function(a,b){this.r=H.p(b)}},
bm:{"^":"c;a,b",
sex:function(a){this.a=H.p(a)},
sey:function(a){this.b=H.p(a)},
bx:function(a,b){var z,y
H.h(b,"$isbm")
z=this.a
y=b.a
if(typeof z!=="number")return z.M()
if(typeof y!=="number")return H.N(y)
if(z<y)return-1
if(z===y){z=this.b
y=b.b
if(typeof z!=="number")return z.M()
if(typeof y!=="number")return H.N(y)
if(z<y)z=-1
else z=z===y?0:1
return z}return 1},
$isa5:1,
$asa5:function(){return[V.bm]}},
fL:{"^":"c;a,b"},
av:{"^":"c;C:a<,b",
T:function(a){var z,y
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
dk:{"^":"c;a,b",
u:function(a){return this.b}},
eA:{"^":"c;a,b,c"},
jZ:{"^":"c;a,b,c",
fG:function(){var z,y,x
for(z=this.b,y=this.a,x=0;x<8;++x){C.a.l(y,x,new E.a(new Float64Array(2)))
C.a.l(z,x,new E.a(new Float64Array(2)))}},
E:{
k_:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.a]
z=H.f(z,y)
x=new Array(8)
x.fixed$length=Array
y=new V.jZ(z,H.f(x,y),0)
y.fG()
return y}}},
l5:{"^":"c;a,b,c,d,e,f,r,x,y"},
i4:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3",
hM:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
a.d=C.w
a.c.h(z)
a.b.N()
a.e=1
x=a.a
x[0].a.h(y)
x[0].d.bO()},
hN:function(a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
for(g=0,f=-17976931348623157e292,e=0;e<j;++e){if(e>=8)return H.b(i,e)
w=i[e].a
u=w[0]
w=w[1]
t=J.aA(h[e])
if(typeof t!=="number")return t.G()
s=J.aB(h[e])
if(typeof s!=="number")return s.G()
d=t*(m-u)+s*(l-w)
if(d>k)return
if(d>f){f=d
g=e}}c=g+1
c=c<j?c:0
if(g<0||g>=8)return H.b(i,g)
b=i[g]
if(c<0||c>=8)return H.b(i,c)
a=i[c]
if(f<11920928955078125e-23){a8.e=1
a8.d=C.p
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
a0.d.bO()
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
a8.d=C.p
v=a8.b
v.sj(0,a1)
v.sk(0,l-w[1])
v.a7()
a8.c.h(b)
v=a8.a
v[0].a.h(z)
v[0].d.bO()}else if(a3*(v-s)+a4*(u-r)<=0){if(a3*a3+a4*a4>k*k)return
a8.e=1
a8.d=C.p
w=a8.b
w.sj(0,a3)
w.sk(0,l-t[1])
w.a7()
a8.c.h(a)
w=a8.a
w[0].a.h(z)
w[0].d.bO()}else{a5=(v+s)*0.5
a6=(u+r)*0.5
a7=h[g]
w=a7.a
if((m-a5)*w[0]+(l-a6)*w[1]>k)return
a8.e=1
a8.d=C.p
a8.b.h(a7)
w=a8.c
w.sj(0,a5)
w.sk(0,a6)
w=a8.a
w[0].a.h(z)
w[0].d.bO()}},
eg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=b.f
y=d.f
x=b.e
w=b.d
v=d.d
u=this.f
G.fl(e,c,u)
t=u.b
for(s=this.r,r=s.a,q=this.x,p=q.a,o=0,n=-17976931348623157e292,m=0;m<z;++m){if(m>=8)return H.b(x,m)
G.t(t,x[m],s)
G.A(u,w[m],q)
for(l=17976931348623157e292,k=0;k<y;++k){if(k>=8)return H.b(v,k)
j=v[k]
i=r[0]
h=j.a
g=i*(h[0]-p[0])+r[1]*(h[1]-p[1])
if(g<l)l=g}if(l>n){n=l
o=m}}a.b=o
a.a=n},
ic:function(a0,a1,a2,a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
H.k(a0,"$isd",[V.av],"$asd")
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
c.sj(0,p*o[0]-q*o[1]+n[0])
c.sk(0,s.a*o[0]+s.b*o[1]+n[1])
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
a.sj(0,q*p[0]-s.a*p[1]+n[0])
a.sk(0,s.a*p[0]+s.b*p[1]+n[1])
n=u.b.a
n[0]=o
n[1]=e&255
n[2]=1
n[3]=0},
hO:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=a8.b+b0.b
y=this.y
this.eg(y,a8,a9,b0,b1)
if(y.a>z)return
x=this.z
this.eg(x,b0,b1,a8,a9)
w=x.a
if(w>z)return
if(w>y.a+0.0005){v=x.b
a7.d=C.G
u=a9
t=b1
s=a8
r=b0
q=!0}else{v=y.b
a7.d=C.p
u=b1
t=a9
s=b0
r=a8
q=!1}p=t.b
y=this.Q
this.ic(y,r,t,v,s,u)
o=r.f
n=r.d
m=v+1
m=m<o?m:0
x=this.dx
if(v>=8)return H.b(n,v)
x.h(n[v])
w=this.dy
if(m>=8)return H.b(n,m)
w.h(n[m])
l=this.ch
k=w.a
j=x.a
l.sj(0,k[0]-j[0])
l.sk(0,k[1]-j[1])
l.a7()
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
G.P(t,x,x)
G.P(t,w,w)
w=j[0]
j=j[1]
d=f*w+e*j
x=l[0]
l=l[1]
c=k[0]
k=k[1]
g.O()
b=this.fr
a=V.cH(b,y,g,-(x*w+l*j)+z,v)
g.O()
if(a<2)return
y=this.fx
if(V.cH(y,b,g,x*c+l*k+z,m)<2)return
a7.b.h(i)
a7.c.h(h)
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
e8:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
a.e=0
z=d.c
y=this.e
G.A(e,z,y)
x=this.fy
G.dG(c,y,x)
w=b.c
v=b.d
u=this.go
u.h(v)
u.n(w)
y.h(v)
y.n(x)
t=u.F(y)
y.h(x)
y.n(w)
s=u.F(y)
r=b.b+d.b
q=this.id
p=q.a
p[1]=0
p[3]=0
if(s<=0){y=$.$get$bI()
y.h(x)
y.n(w)
y=$.$get$bI()
if(y.F(y)>r*r)return
b.r
p[0]=0
p[2]=0
a.e=1
a.d=C.w
a.b.N()
a.c.h(w)
y=a.a
y[0].d.T(q)
y[0].a.h(z)
return}if(t<=0){y=$.$get$bI()
y.h(x)
y.n(v)
y=$.$get$bI()
if(y.F(y)>r*r)return
b.x
p[0]=1
p[2]=0
a.e=1
a.d=C.w
a.b.N()
a.c.h(v)
y=a.a
y[0].d.T(q)
y[0].a.h(z)
return}o=u.F(u)
n=this.k2
n.h(w)
n.B(0,t)
y.h(v)
y.B(0,s)
n.p(0,y)
n.B(0,1/o)
m=$.$get$bI()
m.h(x)
m.n(n)
n=$.$get$bI()
if(n.F(n)>r*r)return
n=this.r
u=u.a
n.sj(0,-u[1])
n.sk(0,u[0])
y.h(x)
y.n(w)
if(n.F(y)<0){y=n.a
n.t(-y[0],-y[1])}n.a7()
p[0]=0
p[2]=1
a.e=1
a.d=C.p
a.b.h(n)
a.c.h(w)
y=a.a
y[0].d.T(q)
y[0].a.h(z)},
E:{
cH:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=[V.av]
H.k(a,"$isd",z,"$asd")
H.k(b,"$isd",z,"$asd")
y=b[0]
x=b[1]
w=y.a
v=x.a
u=c.F(w)-d
t=c.F(v)-d
if(u<=0){a[0].T(y)
s=1}else s=0
if(t<=0){r=s+1
a[s].T(x)
s=r}if(u*t<0){q=u/(u-t)
if(s>=2)return H.b(a,s)
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
kr:{"^":"c;a,b",
u:function(a){return this.b}},
iw:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx",
fD:function(){var z,y,x,w,v
for(z=this.k2,y=this.k1,x=this.id,w=0;w<2;++w){v=new Float64Array(2)
C.a.l(x,w,new V.av(new E.a(v),new V.ax(new Int8Array(4))))
v=new Float64Array(2)
C.a.l(y,w,new V.av(new E.a(v),new V.ax(new Int8Array(4))))
v=new Float64Array(2)
C.a.l(z,w,new V.av(new E.a(v),new V.ax(new Int8Array(4))))}},
e7:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.b
G.fl(c,a1,z)
y=this.c
G.A(z,a0.c,y)
this.d=b.e
this.e=b.c
x=b.d
this.f=x
this.r=b.f
b.x
w=this.fr
w.h(x)
w.n(this.e)
w.a7()
x=this.y
w=w.a
x.t(w[1],-w[0])
w=this.fx
w.h(y)
w.n(this.e)
v=x.F(w)
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
if(q>=8)return H.b(r,q)
G.A(z,r[q],u[q])
G.t(t,a0.e[q],s[q])}this.dx=0.02
a.e=0
p=this.k4
this.hQ(p)
if(p.a===C.y)return
if(p.c>this.dx)return
o=this.r1
this.hR(o)
t=o.a===C.y
if(!t&&o.c>this.dx)return
if(!t)if(o.c>0.98*p.c+0.001)p=o
t=this.id
n=t[0]
m=t[1]
if(p.a===C.A){a.d=C.p
r=this.Q
l=r.F(s[0])
for(k=0,q=1;j=y.c,q<j;++q){if(q>=8)return H.b(s,q)
i=r.F(s[q])
if(i<l){l=i
k=q}}h=k+1
h=h<j?h:0
y=n.a
if(k<0||k>=8)return H.b(u,k)
y.h(u[k])
y=n.b.a
y[0]=0
y[1]=k&255
y[2]=1
y[3]=0
y=m.a
if(h<0||h>=8)return H.b(u,h)
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
r.O()}}else{a.d=C.G
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
if(r<0||r>=8)return H.b(u,r)
x.c.h(u[r])
r=x.b
if(r<0||r>=8)return H.b(u,r)
x.d.h(u[r])
r=x.a
if(r<0||r>=8)return H.b(s,r)
x.e.h(s[r])
y=x}x=y.f
u=y.e
s=u.a
x.t(s[1],-s[0])
s=y.x
s.h(x)
s.O()
r=y.c
y.r=x.F(r)
y.y=s.F(y.d)
j=this.k1
if(V.cH(j,t,x,y.r,y.a)<2)return
x=this.k2
if(V.cH(x,j,s,y.y,y.b)<2)return
t=a.b
s=a.c
if(p.a===C.A){t.h(u)
s.h(r)}else{j=a0.e
g=y.a
if(g<0||g>=8)return H.b(j,g)
t.h(j[g])
g=a0.d
y=y.a
if(y<0||y>=8)return H.b(g,y)
s.h(g[y])}for(y=w.a,t=a.a,f=0,q=0;q<2;++q){e=x[q].a.a
y[1]=e[1]
y[0]=e[0]
w.n(r)
if(u.F(w)<=this.dx){if(f>=2)return H.b(t,f)
d=t[f]
if(p.a===C.A){G.dG(z,x[q].a,d.a)
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
hQ:function(a){var z,y,x,w,v,u,t,s,r,q
a.a=C.A
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
hR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
a.a=C.y
a.b=-1
a.c=-17976931348623157e292
z=this.r2
y=this.Q
x=y.a
z.sj(0,-x[1])
z.sk(0,x[0])
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
if(f>this.dx){a.a=C.V
a.b=p
a.c=f
return}if(i*z[0]+h*z[1]>=0){u[1]=h
u[0]=v[0]
w.n(q)
if(w.F(y)<-0.03490658503988659)continue}else{u[1]=h
u[0]=v[0]
w.n(t)
if(w.F(y)<-0.03490658503988659)continue}if(f>a.c){a.a=C.V
a.b=p
a.c=f}}},
E:{
ix:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.k_()
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
h=[V.av]
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
z=new V.iw(z,new G.v(new E.a(y),new G.o(0,1)),new E.a(x),new E.a(w),new E.a(v),new E.a(u),new E.a(t),new E.a(s),new E.a(r),new E.a(q),new E.a(p),C.a8,C.a8,new E.a(o),new E.a(n),0,!1,new E.a(m),new E.a(l),new E.a(k),new E.a(j),i,g,h,new V.l5(0,0,new E.a(f),new E.a(e),new E.a(d),new E.a(c),0,new E.a(b),0),new V.eA(C.y,0,0),new V.eA(C.y,0,0),new E.a(a),new E.a(new Float64Array(2)))
z.fD()
return z}}},
ax:{"^":"c;a",
bP:function(){var z=this.a
return(z[0]<<24|z[1]<<16|z[2]<<8|z[3])>>>0},
T:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
bO:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
bx:function(a,b){H.h(b,"$isax")
return this.bP()-b.bP()},
$isa5:1,
$asa5:function(){return[V.ax]}},
d0:{"^":"c;a,b,q:c<,v:d<,e,f",
sv:function(a){this.d=H.cj(a)},
T:function(a){this.a.h(a.a)
this.b.h(a.b)
this.c.h(a.c)
this.d=a.d
this.e=a.e
this.f=a.f}},
jN:{"^":"c;a,b,c,d",E:{
f7:function(){var z,y
z=P.j
y=P.bj(3,0,!1,z)
z=P.bj(3,0,!1,z)
C.a.l(y,0,1073741823)
C.a.l(y,1,1073741823)
C.a.l(y,2,1073741823)
C.a.l(z,0,1073741823)
C.a.l(z,1,1073741823)
C.a.l(z,2,1073741823)
return new V.jN(0,0,y,z)}}},
lf:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
iE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
this.e=a.b
for(z=this.d,y=a.c,x=y.length,w=a.d,v=w.length,u=b.a,t=d.a,s=0;r=this.e,s<r;++s){if(s>=3)return H.b(z,s)
q=z[s]
if(s>=x)return H.b(y,s)
r=H.p(y[s])
q.e=r
if(s>=v)return H.b(w,s)
q.f=H.p(w[s])
p=C.a.i(u,r)
o=C.a.i(t,q.f)
r=q.a
G.A(c,p,r)
n=q.b
G.A(e,o,n)
m=q.c
l=n.a
n=m.a
n[1]=l[1]
n[0]=l[0]
m.n(r)
q.d=0}if(r>1){k=a.a
j=this.dd()
if(j<0.5*k||2*k<j||j<11920928955078125e-23)this.e=0}if(this.e===0){q=z[0]
q.e=0
q.f=0
p=u[0]
o=t[0]
z=q.a
G.A(c,p,z)
y=q.b
G.A(e,o,y)
x=q.c
x.h(y)
x.n(z)
this.e=1}},
iW:function(a){var z,y,x,w
a.a=this.dd()
a.b=this.e
for(z=a.c,y=this.d,x=a.d,w=0;w<this.e;++w){if(w>=3)return H.b(y,w)
C.a.l(z,w,J.e9(y[w].e))
C.a.l(x,w,J.e9(y[w].f))}},
eR:function(a){var z,y
switch(this.e){case 1:a.h(this.a.c)
a.O()
return
case 2:z=this.f
z.h(this.b.c)
y=this.a.c
z.n(y)
a.h(y)
a.O()
if(z.w(a)>0)z.a0(1,a)
else z.a0(-1,a)
return
default:a.N()
return}},
da:function(a){var z,y,x
switch(this.e){case 0:a.N()
return
case 1:a.h(this.a.c)
return
case 2:z=this.x
y=this.b
z.h(y.c)
z.B(0,y.d)
y=this.r
x=this.a
y.h(x.c)
y.B(0,x.d)
y.p(0,z)
a.h(y)
return
case 3:a.N()
return
default:a.N()
return}},
dd:function(){var z,y,x
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
eY:function(){var z,y,x,w,v,u,t,s
z=this.a
y=z.c
x=this.b
w=x.c
v=this.f
v.h(w)
v.n(y)
u=-y.F(v)
if(u<=0){z.d=1
this.e=1
return}t=w.F(v)
if(t<=0){x.d=1
this.e=1
z.T(x)
return}s=1/(t+u)
z.d=t*s
x.d=u*s
this.e=2},
eZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
s=z.F(t)
r=x.F(t)
q=-s
p=this.Q
p.h(v)
p.n(z)
o=z.F(p)
n=v.F(p)
m=-o
l=this.ch
l.h(v)
l.n(x)
k=x.F(l)
j=v.F(l)
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
w.T(u)
return}if(r<=0&&i<=0){w.d=1
this.e=1
y.T(w)
return}if(n<=0&&j<=0){u.d=1
this.e=1
y.T(u)
return}if(j>0&&i>0&&g<=0){b=1/(j+i)
w.d=j*b
u.d=i*b
this.e=2
y.T(u)
return}a=1/(g+f+e)
y.d=g*a
w.d=f*a
u.d=e*a
this.e=3}},
im:{"^":"c;a,0b,0c,d",
fB:function(){var z,y
for(z=this.a,y=0;y<8;++y)C.a.l(z,y,new E.a(new Float64Array(2)))
this.b=0
this.c=0},
bR:function(a,b){var z,y,x,w,v,u
switch(a.a){case C.e:H.y(a,"$isau")
this.a[0].h(a.c)
this.b=1
this.c=a.b
break
case C.h:H.y(a,"$isbq")
z=a.f
this.b=z
this.c=a.b
for(y=this.a,x=0;x<z;++x){if(x>=8)return H.b(y,x)
w=y[x]
v=a.d[x]
w.toString
u=H.h(v,"$isa").a
w=w.a
w[1]=u[1]
w[0]=u[0]}break
case C.l:H.y(a,"$isdj")
z=this.d
C.a.l(z,0,a.gcM().i(0,b))
y=b+1
if(C.c.M(y,a.gfY()))C.a.l(z,1,a.gcM().i(0,y))
else C.a.l(z,1,a.gcM().i(0,0))
y=this.a
y[0].h(z[0])
y[1].h(z[1])
this.b=2
this.c=a.gjs()
break
case C.k:H.y(a,"$isc0")
z=this.a
z[0].h(a.c)
z[1].h(a.d)
this.b=2
this.c=a.b
break}},
bn:function(a){var z,y,x,w,v
z=this.a
y=z[0].F(a)
for(x=0,w=1;w<this.b;++w){if(w>=8)return H.b(z,w)
v=z[w].F(a)
if(v>y){y=v
x=w}}return x},
E:{
W:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.a]
z=H.f(z,y)
x=new Array(2)
x.fixed$length=Array
y=new V.im(z,H.f(x,y))
y.fB()
return y}}},
il:{"^":"c;a,b,c,d,e,f,r",
ee:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.ew=$.ew+1
z=a6.a
y=a6.b
x=a6.c
w=a6.d
v=this.a
v.iE(a5,z,x,y,w)
u=v.d
t=this.d
v.da(t)
t.gV()
for(s=this.b,r=s.length,q=this.c,p=q.length,o=x.b,n=this.e,m=this.f,l=z.a,k=w.b,j=y.a,i=0;i<20;){h=v.e
for(g=0;g<h;++g){if(g>=3)return H.b(u,g)
C.a.l(s,g,u[g].e)
C.a.l(q,g,u[g].f)}switch(v.e){case 1:break
case 2:v.eY()
break
case 3:v.eZ()
break}if(v.e===3)break
v.da(t)
t.gV()
v.eR(n)
if(n.gV()<14210854715202004e-30)break
f=v.e
if(f>=3)return H.b(u,f)
e=u[f]
n.O()
G.aL(o,n,m)
f=z.bn(m)
e.e=f
if(f>=8)return H.b(l,f)
f=l[f]
d=e.a
G.A(x,f,d)
n.O()
G.aL(k,n,m)
f=y.bn(m)
e.f=f
if(f>=8)return H.b(j,f)
f=j[f]
c=e.b
G.A(w,f,c)
f=e.c
b=c.a
c=f.a
c[1]=b[1]
c[0]=b[0]
f.n(d);++i
$.ex=$.ex+1
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
break}++g}if(a)break;++v.e}$.ey=Math.max($.ey,i)
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
t.B(0,s.d)
r=v.b
a0.h(r.a)
a0.B(0,r.d)
a0.p(0,t)
t.h(s.b)
t.B(0,s.d)
a1.h(r.b)
a1.B(0,r.d)
a1.p(0,t)
break
case 3:t=v.a
a0.h(t.a)
a0.B(0,t.d)
t=v.y
s=v.b
t.h(s.a)
t.B(0,s.d)
s=v.z
r=v.c
s.h(r.a)
s.B(0,r.d)
a0.p(0,t)
a0.p(0,s)
a1.h(a0)
break
default:break}a4.c=Math.sqrt(a0.c5(a1))
a4.d=i
v.iW(a5)
if(a6.e){a2=z.c
a3=y.c
v=a4.c
t=a2+a3
if(v>t&&v>11920928955078125e-23){a4.c=v-t
v=this.r
v.h(a1)
v.n(a0)
v.a7()
m.h(v)
m.B(0,a2)
a0.p(0,m)
m.h(v)
m.B(0,a3)
a1.n(m)}else{a0.p(0,a1)
a0.B(0,0.5)
a1.h(a0)
a4.c=0}}}},
et:{"^":"c;a,b,c,d,e"},
ev:{"^":"c;a,b,c,d"},
du:{"^":"c;a,b",
u:function(a){return this.b}},
iY:{"^":"c;a,b,c,d,e",
fE:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.l(z,y,new V.eU(new E.a(x),0,0,new V.ax(new Int8Array(4))))}},
T:function(a){var z,y,x,w,v,u,t
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
this.b.h(a.b)
this.c.h(a.c)
this.e=a.e},
E:{
ap:function(){var z,y
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.eU])
y=new Float64Array(2)
z=new V.iY(z,new E.a(y),new E.a(new Float64Array(2)),C.w,0)
z.fE()
return z}}},
eU:{"^":"c;a,b,c,d"},
a8:{"^":"c;a,b,c"},
af:{"^":"c;a,b"},
au:{"^":"dC;c,a,b",
e6:function(a){var z,y,x
z=new E.a(new Float64Array(2))
y=new V.au(z,C.e,0)
x=this.c.a
z.sj(0,x[0])
z.sk(0,x[1])
y.b=this.b
return y},
ck:function(){return 1},
c3:function(a,b,c){var z,y,x,w,v,u,t,s
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
e9:function(a,b){var z,y,x,w
if(typeof b!=="number")return b.G()
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
c0:{"^":"dC;c,d,e,f,r,x,y,a,b"},
j1:{"^":"c;eu:a<,b,c"},
bq:{"^":"dC;c,d,e,f,r,x,y,z,Q,a,b",
fF:function(){var z,y
for(z=this.d,y=0;y<8;++y)C.a.l(z,y,new E.a(new Float64Array(2)))
for(z=this.e,y=0;y<8;++y)C.a.l(z,y,new E.a(new Float64Array(2)))
this.b=0.01},
e6:function(a){var z,y,x,w,v,u
z=V.a0()
z.c.h(this.c)
for(y=z.e,x=this.e,w=z.d,v=this.d,u=0;u<8;++u){y[u].h(x[u])
w[u].h(v[u])}z.b=this.b
z.f=this.f
return z},
eW:function(a0,a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=E.a
H.k(a0,"$isd",[z],"$asd")
if(a1<3){this.ag(1,1)
return}y=Math.min(a1,8)
x=new Array(8)
x.fixed$length=Array
w=H.f(x,[z])
for(v=0,u=0;u<y;++u){if(u>=8)return H.b(a0,u)
t=a0[u]
r=0
while(!0){if(!(r<v)){s=!0
break}if(r>=8)return H.b(w,r)
if(t.c5(w[r])<0.0025){s=!1
break}++r}if(s){q=v+1
C.a.l(w,v,t)
v=q}}if(v<3){this.ag(1,1)
return}p=w[0].a[0]
for(o=0,u=1;u<v;++u){if(u>=8)return H.b(w,u)
z=w[u].a
n=z[0]
if(!(n>p))if(n===p){z=z[1]
if(o<0||o>=8)return H.b(w,o)
z=z<w[o].a[1]}else z=!1
else z=!0
if(z){p=n
o=u}}m=P.bj(8,0,!1,P.j)
for(l=this.r,z=l.a,t=this.x,x=t.a,k=o,j=0;!0;k=i){C.a.l(m,j,k)
for(i=0,r=1;r<v;++r){if(i===k){i=r
continue}if(i<0||i>=8)return H.b(w,i)
h=w[i].a
z[1]=h[1]
z[0]=h[0]
if(j>=m.length)return H.b(m,j)
l.n(C.a.i(w,m[j]))
if(r>=8)return H.b(w,r)
h=w[r].a
x[1]=h[1]
x[0]=h[0]
if(j>=m.length)return H.b(m,j)
t.n(C.a.i(w,m[j]))
g=l.w(t)
if(g<0)i=r
if(g===0&&t.gV()>l.gV())i=r}++j
if(i===o)break}this.f=j
for(x=this.d,u=0;u<this.f;++u){if(u>=8)return H.b(x,u)
if(x[u]==null)C.a.l(x,u,new E.a(new Float64Array(2)))
f=x[u]
if(u>=m.length)return H.b(m,u)
f.h(C.a.i(w,m[u]))}for(f=this.e,u=0;e=this.f,u<e;u=o){o=u+1
d=o<e?o:0
if(d>=8)return H.b(x,d)
h=H.h(x[d],"$isa").a
z[1]=h[1]
z[0]=h[0]
if(u>=8)return H.b(x,u)
l.n(x[u])
e=H.h(f[u],"$isa")
c=z[1]
b=z[0]
a=e.a
a[0]=c
a[1]=-1*b
e.a7()}this.hP(x,e,this.c)},
ag:function(a,b){var z,y,x
this.f=4
z=this.d
y=-a
x=-b
z[0].t(y,x)
z[1].t(a,x)
z[2].t(a,b)
z[3].t(y,b)
y=this.e
y[0].t(0,-1)
y[1].t(1,0)
y[2].t(0,1)
y[3].t(-1,0)
this.c.N()},
aC:function(a,b,c,d){var z,y,x,w,v,u
this.f=4
z=this.d
y=-a
x=-b
z[0].t(y,x)
z[1].t(a,x)
z[2].t(a,b)
z[3].t(y,b)
y=this.e
y[0].t(0,-1)
y[1].t(1,0)
y[2].t(0,1)
y[3].t(-1,0)
this.c.h(c)
w=this.Q
w.a.h(c)
x=w.b
x.J(d)
for(v=0;v<this.f;++v){if(v>=8)return H.b(z,v)
u=z[v]
G.P(w,u,u)
u=y[v]
G.aW(x,u,u)}},
bB:function(a,b){var z,y
this.f=2
z=this.d
z[0].h(a)
z[1].h(b)
z=this.c
z.h(a)
z.p(0,b)
z.B(0,0.5)
z=this.e
y=z[0]
y.h(b)
y.n(a)
y=z[0]
y.a0(-1,y)
z[0].a7()
y=z[1]
y.h(z[0])
y.O()},
ck:function(){return 1},
c3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
p[1]=n>k?n:k}z.sj(0,v[0]-this.b)
z.sk(0,v[1]-this.b)
y.sj(0,p[0]+this.b)
y.sk(0,p[1]+this.b)},
hP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o
H.k(a,"$isd",[E.a],"$asd")
c.t(0,0)
z=this.r
z.N()
y=this.x
x=this.y
for(w=y.a,v=x.a,u=z.a,t=0,s=0;s<b;){if(s>=8)return H.b(a,s)
r=a[s];++s
if(s<b){if(s>=8)return H.b(a,s)
q=a[s]}else q=a[0]
p=r.a
w[1]=p[1]
w[0]=p[0]
y.n(z)
p=q.a
v[1]=p[1]
v[0]=p[0]
x.n(z)
o=0.5*y.w(x)
t+=o
w[1]=u[1]
w[0]=u[0]
y.p(0,r)
y.p(0,q)
y.B(0,o*0.3333333333333333)
c.p(0,y)}c.B(0,1/t)},
e9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.r
z.N()
y=this.x
y.N()
for(x=this.d,w=0;v=this.f,w<v;++w){if(w>=8)return H.b(x,w)
y.p(0,x[w])}y.B(0,1/v)
u=this.y
t=this.z
for(v=z.a,s=u.a,r=t.a,q=y.a,p=0,o=0,w=0;w<this.f;){if(w>=8)return H.b(x,w)
n=H.h(x[w],"$isa").a
s[1]=n[1]
s[0]=n[0]
u.n(y)
r[1]=q[1]
r[0]=q[0]
t.O();++w
if(w<this.f){if(w>=8)return H.b(x,w)
m=x[w]}else m=x[0]
t.p(0,m)
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
o+=0.08333333333333333*l*(j*j+h*j+h*h+(i*i+g*i+g*g))}if(typeof b!=="number")return b.G()
a.a=b*p
z.B(0,1/p)
x=a.b
x.h(z)
x.p(0,y)
v=o*b
a.c=v
a.c=v+a.a*x.F(x)},
E:{
a0:function(){var z,y,x,w,v,u,t
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
z=new V.bq(new E.a(z),y,x,0,new E.a(w),new E.a(v),new E.a(u),new E.a(t),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),C.h,0)
z.fF()
return z}}},
dC:{"^":"c;"},
cS:{"^":"c;a,b",
u:function(a){return this.b}},
bt:{"^":"c;a,b,c,d,e"},
cw:{"^":"c;a,b",
u:function(a){return this.b}},
bu:{"^":"c;a,b"},
k1:{"^":"c;a,b,c,d,e,f,r,x,y,z",
iQ:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.fe=$.fe+1
a4.a=C.q
a4.b=a5.e
z=a5.a
y=a5.b
x=this.x
x.T(a5.c)
w=this.y
w.T(a5.d)
x.a7()
w.a7()
v=a5.e
u=Math.max(0.005,z.c+y.c-0.015)
t=this.a
t.b=0
s=this.b
s.a=z
s.b=y
s.e=!1
for(r=this.f,q=this.r,p=q.length,o=u+0.00125,n=u-0.00125,m=this.e,l=this.c,k=this.d,j=this.z.fy,i=0,h=0;!0;){x.aY(l,i)
w.aY(k,i)
s.c=l
s.d=k
j.ee(m,t,s)
g=m.c
if(g<=0){a4.a=C.az
a4.b=0
break}if(g<o){a4.a=C.R
a4.b=i
break}r.ik(0,t,z,x,y,w,i)
e=v
d=0
while(!0){if(!!0){f=!1
break}c=r.ie(q,e)
if(c>o){a4.a=C.aA
a4.b=v
f=!0
break}if(c>n){i=e
f=!1
break}if(0>=p)return H.b(q,0)
g=q[0]
if(1>=p)return H.b(q,1)
b=r.aL(g,q[1],i)
if(b<n){a4.a=C.a6
a4.b=i
f=!0
break}if(b<=o){a4.a=C.R
a4.b=i
f=!0
break}for(a=e,a0=i,a1=0;!0;){a2=(a1&1)===1?a0+(u-b)*(a-a0)/(c-b):0.5*(a0+a);++a1
$.fi=$.fi+1
a3=r.aL(q[0],q[1],a2)
if(Math.abs(a3-u)<0.00125){e=a2
break}if(a3>u){a0=a2
b=a3}else{a=a2
c=a3}if(a1===50)break}$.fh=Math.max($.fh,a1);++d
if(d===8||a1===50){f=!1
break}}++h
$.ff=$.ff+1
if(f)break
if(h===20){a4.a=C.a6
a4.b=i
break}}$.fg=Math.max($.fg,h)}},
dB:{"^":"c;a,b",
u:function(a){return this.b}},
jK:{"^":"c;0a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go",
ik:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
this.a=c
this.b=e
z=b.b
this.f=d
this.r=f
y=this.fr
d.aY(y,g)
x=this.fx
this.r.aY(x,g)
if(z===1){this.c=C.O
g=this.x
w=this.a
v=b.c
if(0>=v.length)return H.b(v,0)
v=v[0]
w.toString
H.p(v)
g.h(C.a.i(w.a,v))
v=this.y
w=this.b
u=b.d
if(0>=u.length)return H.b(u,0)
u=u[0]
w.toString
H.p(u)
v.h(C.a.i(w.a,u))
u=this.z
G.A(y,g,u)
g=this.Q
G.A(x,v,g)
v=this.e
v.h(g)
v.n(u)
return v.a7()}else{g=b.c
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
if(J.az(v,g[1])){this.c=C.Q
v=this.db
n=this.b
if(0>=o)return H.b(w,0)
m=w[0]
n.toString
H.p(m)
v.h(C.a.i(n.a,m))
m=this.dx
n=this.b
if(1>=o)return H.b(w,1)
w=w[1]
n.toString
H.p(w)
m.h(C.a.i(n.a,w))
p.h(m)
p.n(v)
p.a0(-1,r)
r.a7()
G.t(x.b,r,s)
t.h(v)
t.p(0,m)
t.B(0,0.5)
G.A(x,t,q)
t=this.x
x=this.a
g=g[0]
x.toString
H.p(g)
t.h(C.a.i(x.a,g))
G.A(y,t,u)
p.h(u)
p.n(q)
l=p.F(s)
if(l<0){r.O()
l=-l}return l}else{this.c=C.P
v=this.ch
n=this.a
m=g[0]
n.toString
H.p(m)
v.h(C.a.i(n.a,m))
m=this.cx
n=this.a
g=g[1]
n.toString
H.p(g)
m.h(C.a.i(n.a,g))
p.h(m)
p.n(v)
p.a0(-1,r)
r.a7()
G.t(y.b,r,s)
t.h(v)
t.p(0,m)
t.B(0,0.5)
G.A(y,t,u)
t=this.y
y=this.b
if(0>=o)return H.b(w,0)
w=w[0]
y.toString
H.p(w)
t.h(C.a.i(y.a,w))
G.A(x,t,q)
p.h(q)
p.n(u)
l=p.F(s)
if(l<0){r.O()
l=-l}return l}}},
ie:function(a,b){var z,y,x,w,v,u,t
H.k(a,"$isd",[P.j],"$asd")
z=this.fr
this.f.aY(z,b)
y=this.fx
this.r.aY(y,b)
switch(this.c){case C.O:x=this.e
w=this.fy
G.aL(z.b,x,w)
x.O()
v=this.go
G.aL(y.b,x,v)
x.O()
C.a.l(a,0,this.a.bn(w))
C.a.l(a,1,this.b.bn(v))
v=this.x
w=this.a
u=a.length
if(0>=u)return H.b(a,0)
t=a[0]
w.toString
H.p(t)
v.h(C.a.i(w.a,t))
t=this.y
w=this.b
if(1>=u)return H.b(a,1)
u=a[1]
w.toString
H.p(u)
t.h(C.a.i(w.a,u))
u=this.z
G.A(z,v,u)
v=this.Q
G.A(y,t,v)
v.n(u)
return v.F(x)
case C.P:x=this.cy
G.t(z.b,this.e,x)
w=this.z
G.A(z,this.d,w)
x.O()
z=this.go
G.aL(y.b,x,z)
x.O()
C.a.l(a,0,-1)
C.a.l(a,1,this.b.bn(z))
z=this.y
v=this.b
if(1>=a.length)return H.b(a,1)
u=a[1]
v.toString
H.p(u)
z.h(C.a.i(v.a,u))
u=this.Q
G.A(y,z,u)
u.n(w)
return u.F(x)
case C.Q:x=this.cy
G.t(y.b,this.e,x)
w=this.Q
G.A(y,this.d,w)
x.O()
y=this.fy
G.aL(z.b,x,y)
x.O()
C.a.l(a,1,-1)
C.a.l(a,0,this.a.bn(y))
y=this.x
v=this.a
if(0>=a.length)return H.b(a,0)
u=a[0]
v.toString
H.p(u)
y.h(C.a.i(v.a,u))
u=this.z
G.A(z,y,u)
u.n(w)
return u.F(x)
default:C.a.l(a,0,-1)
C.a.l(a,1,-1)
return 0}},
aL:function(a,b,c){var z,y,x,w,v
H.p(a)
H.p(b)
z=this.fr
this.f.aY(z,c)
y=this.fx
this.r.aY(y,c)
switch(this.c){case C.O:x=this.x
x.h(C.a.i(this.a.a,a))
w=this.y
w.h(C.a.i(this.b.a,b))
v=this.z
G.A(z,x,v)
x=this.Q
G.A(y,w,x)
x.n(v)
return x.F(this.e)
case C.P:x=this.cy
G.t(z.b,this.e,x)
w=this.z
G.A(z,this.d,w)
z=this.y
z.h(C.a.i(this.b.a,b))
v=this.Q
G.A(y,z,v)
v.n(w)
return v.F(x)
case C.Q:x=this.cy
G.t(y.b,this.e,x)
w=this.Q
G.A(y,this.d,w)
y=this.x
y.h(C.a.i(this.a.a,a))
v=this.z
G.A(z,y,v)
v.n(w)
return v.F(x)
default:return 0}}},
kx:{"^":"c;a,b,c,d,e",
fH:function(){var z,y
for(z=this.b,y=0;y<2;++y)C.a.l(z,y,new E.a(new Float64Array(2)))},
ij:function(a,b,c,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b.e===0)return
switch(b.d){case C.w:z=this.d
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
x.a7()}x=x.a
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
case C.p:p=this.d
x=this.a
G.t(c.b,b.b,x)
G.P(c,b.c,p)
o=this.e
for(w=b.a,v=o.a,u=p.a,x=x.a,n=this.b,m=this.c,l=0;l<b.e;++l){if(l>=2)return H.b(w,l)
G.P(a1,w[l].a,o)
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
case C.G:p=this.d
x=this.a
G.t(a1.b,b.b,x)
G.P(a1,b.c,p)
o=this.e
for(w=b.a,v=o.a,u=p.a,n=x.a,m=this.b,k=this.c,l=0;l<b.e;++l){if(l>=2)return H.b(w,l)
G.P(c,w[l].a,o)
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
ky:function(){var z,y,x,w
z=new Float64Array(2)
y=new Array(2)
y.fixed$length=Array
y=H.f(y,[E.a])
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.kx(new E.a(z),y,x,new E.a(w),new E.a(new Float64Array(2)))
z.fH()
return z}}},
aj:{"^":"c;a,b,aa:c<,d,e,f,r,x,y,z,Q,0ch,0cx,0cy,db,0dx,0dy,fr,bu:fx<,fy,go,id,k1,k2,k3,0aW:k4<,r1,r2,rx",
Z:function(a){var z,y,x,w,v,u
z=this.Q
if((z.a&2)===2)return
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new V.eF(0,0,0,0,new V.a7(1,65535,0),!1,new V.O(new E.a(y),new E.a(x)),new V.O(new E.a(w),new E.a(v)),new E.a(new Float64Array(2)))
u.hU(this,a)
if((this.b&32)===32)u.hY(z.b.a,this.d)
u.b=this.cy
this.cy=u;++this.db
u.c=this
y=u.a
if(typeof y!=="number")return y.aH()
if(y>0)this.iI()
z.a|=1
return u},
c4:function(a,b){var z=this.r1
z.a=a
z.e=b
return this.Z(z)},
am:function(a){return this.c4(a,0)},
gb8:function(){return this.f.c},
ses:function(a){if(this.a===C.f)return
if(a.F(a)>0)this.ae(!0)
this.r.h(a)},
se0:function(a){if(this.a===C.f)return
if(a*a>0)this.ae(!0)
this.x=a},
e2:function(a,b){var z,y,x
if(this.a!==C.j)return
if((this.b&2)!==2)this.ae(!0)
z=this.y
y=z.a
x=a.a
z.sj(0,y[0]+x[0])
z.sk(0,y[1]+x[1])
y=b.a
z=this.f.c.a
this.z=this.z+((y[0]-z[0])*x[1]-(y[1]-z[1])*x[0])},
bI:function(a,b,c){var z,y,x
if(this.a!==C.j)return
if((this.b&2)!==2)this.ae(!0)
z=this.r
y=z.a
x=a.a
z.sj(0,y[0]+x[0]*this.fx)
z.sk(0,y[1]+x[1]*this.fx)
y=b.a
z=this.f.c.a
this.x=this.x+this.go*((y[0]-z[0])*x[1]-(y[1]-z[1])*x[0])},
hG:function(a){if(this.a!==C.j)return
if((this.b&2)!==2)this.ae(!0)
this.x=this.x+this.go*a},
geu:function(){return this.fr},
iI:function(){var z,y,x,w,v,u,t,s,r,q
this.fr=0
this.fx=0
this.fy=0
this.go=0
z=this.f
y=z.a
y.N()
x=this.a
if(x===C.f||x===C.U){y=this.d.a
z.b.h(y)
z.c.h(y)
z.d=z.e
return}x=this.Q.ch.a
w=x.m()
w.N()
v=x.m()
u=this.r2
for(t=this.cy,s=u.b.a;t!=null;t=t.b){r=t.a
if(r===0)continue
t.d.e9(u,r)
r=this.fr
q=u.a
this.fr=r+q
r=v.a
r[1]=s[1]
r[0]=s[0]
v.B(0,q)
w.p(0,v)
this.fy=this.fy+u.c}r=this.fr
if(r>0){r=1/r
this.fx=r
w.B(0,r)}else{this.fr=1
this.fx=1}r=this.fy
if(r>0&&(this.b&16)===0){r-=this.fr*w.F(w)
this.fy=r
this.go=1/r}else{this.fy=0
this.go=0}r=x.m()
q=z.c
r.h(q)
y.h(w)
z=z.b
G.A(this.d,y,z)
q.h(z)
v.h(q)
v.n(r)
v.a0(this.x,r)
this.r.p(0,r)
x.b-=3},
ae:function(a){var z
if(a){z=this.b
if((z&2)===0){this.b=z|2
this.k3=0}}else{this.b&=4294967293
this.k3=0
this.r.N()
this.x=0
this.y.N()
this.z=0}},
dq:function(){var z,y,x,w,v,u,t
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
for(t=this.cy,y=this.Q,x=this.d;t!=null;t=t.b)t.ft(y.b.a,z,x)},
br:function(){var z,y,x,w,v
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
dk:function(a){var z,y
if(this.a!==C.j&&a.a!==C.j)return!1
for(z=this.dx;z!=null;z=z.d){y=z.a
if(y==null?a==null:y===a)if(!z.b.y)return!1}return!0},
bd:function(a){var z,y,x,w,v
z=this.f
z.bd(a)
y=z.c
y.h(z.b)
x=z.d
z.e=x
w=this.d
v=w.b
v.J(x)
w=w.a
G.t(v,z.a,w)
w.B(0,-1)
w.p(0,y)},
u:function(a){return"Body[pos: "+this.d.a.u(0)+" linVel: "+this.r.u(0)+" angVel: "+H.i(this.x)+"]"}},
J:{"^":"c;a,0aW:b<,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},
dg:{"^":"c;a,b",
u:function(a){return this.b}},
b8:{"^":"c;0a,0b,c,0d,0e,f",
hD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(a,"$isbg")
H.h(b,"$isbg")
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
if((r==null?y==null:r===y)&&p===w&&(q==null?z==null:q===z)&&o===x)return}t=t.d}if(!u.dk(v))return
s=this.d.dl(z,y)
if(!s)return
n=this.f.iz(z,x,y,w)
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
if(!z.z&&!y.z){v.ae(!0)
u.ae(!0)}++this.c},
cO:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.f
y=a.r
x=z.c
w=y.c
v=this.e
if(v!=null&&(a.a&2)===2)v.cB(a,!1)
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
if(a.z.e>0&&!z.z&&!y.z){z.c.ae(!0)
y.c.ae(!0)}s=z.d.a
r=y.d.a
v=this.f.fy
u=s.a
if(u>=v.length)return H.b(v,u)
u=v[u]
v=r.a
if(v>=u.length)return H.b(u,v)
q=u[v].a
q.toString
H.u(a,H.aH(q,"aK",0))
v=q.a;(v&&C.a).l(v,--q.b,a);--this.c},
hL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.b
for(;z!=null;){y=z.f
x=z.r
w=z.x
v=z.y
u=y.c
t=x.c
if((z.a&8)===8){if(!t.dk(u)){s=z.c
this.cO(z)
z=s
continue}r=this.d.dl(y,x)
if(!r){s=z.c
this.cO(z)
z=s
continue}z.a&=4294967287}q=(u.b&2)===2&&u.a!==C.f
p=(t.b&2)===2&&t.a!==C.f
if(!q&&!p){z=z.c
continue}r=y.r
if(w>=r.length)return H.b(r,w)
o=r[w].gbM()
r=x.r
if(v>=r.length)return H.b(r,v)
n=r[v].gbM()
if(!this.a.iO(o,n)){s=z.c
this.cO(z)
z=s
continue}z.d5(this.e)
z=z.c}},
$isny:1},
bW:{"^":"aw;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aT:function(a,b,c,d){this.bT(a,b,c,d)},
aL:function(a,b,c){var z=this.fr
H.y(this.f.d,"$isdj").eN(z,this.x)
this.dx.fr.e8(a,z,b,H.y(this.r.d,"$isau"),c)}},
bX:{"^":"aw;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aT:function(a,b,c,d){this.bT(a,b,c,d)},
aL:function(a,b,c){var z,y,x
z=this.fr
H.y(this.f.d,"$isdj").eN(z,this.x)
y=this.dx.fr
x=H.y(this.r.d,"$isbq")
y.k3.e7(a,z,b,x,c)}},
bY:{"^":"aw;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aL:function(a,b,c){this.dx.fr.hM(a,H.y(this.f.d,"$isau"),b,H.y(this.r.d,"$isau"),c)}},
aw:{"^":"c;",
aT:["bT",function(a,b,c,d){var z,y
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
d5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.dy
y=this.z
z.T(y)
x=this.a|=4
w=(x&2)===2
x=this.f
v=x.z
u=this.r
t=u.z
s=v||t
r=x.c
q=u.c
p=r.d
o=q.d
if(s){n=x.d
m=u.d
z=this.dx.fr
x=this.x
u=this.y
l=z.b
l.a.bR(n,x)
l.b.bR(m,u)
l.c.T(p)
l.d.T(o)
l.e=!0
u=z.c
u.b=0
x=z.a
z=z.d
x.fy.ee(z,u,l)
k=z.c<0.0000011920928955078125
y.e=0}else{this.aL(y,p,o)
k=y.e>0
for(x=z.a,u=y.a,j=0;j<y.e;++j){if(j>=2)return H.b(u,j)
i=u[j]
i.b=0
i.c=0
h=i.d
for(g=0;g<z.e;++g){if(g>=2)return H.b(x,g)
f=x[g]
if(f.d.bP()===h.bP()){i.b=f.b
i.c=f.c
break}}}if(k!==w){r.ae(!0)
q.ae(!0)}}z=this.a
if(k)this.a=z|2
else this.a=z&4294967293
if(a==null)return
if(!w&&k)a.cB(this,!0)
if(w&&!k)a.cB(this,!1)}},
an:{"^":"c;0a,0b,0c,0d"},
cI:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,cx,cy,db",
fv:function(){var z,y
for(z=this.a,y=0;y<2;++y)C.a.l(z,y,new E.a(new Float64Array(2)))},
E:{
ek:function(){var z,y,x,w
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[E.a])
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.cI(z,new E.a(y),new E.a(x),0,0,0,0,new E.a(w),new E.a(new Float64Array(2)),0,0,0,0,0)
z.fv()
return z}}},
cJ:{"^":"c;0a,b",
seb:function(a){this.a=H.k(a,"$isaJ",[V.aw],"$asaJ")}},
G:{"^":"c;0a,0b,c,0d,0e",
sea:function(a){this.b=H.k(a,"$isd",[V.aw],"$asd")},
sce:function(a){this.d=H.k(a,"$isd",[V.b1],"$asd")},
sci:function(a){this.e=H.k(a,"$isd",[V.bN],"$asd")}},
ib:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q",
scF:function(a){this.b=H.k(a,"$isd",[V.b1],"$asd")},
scL:function(a){this.c=H.k(a,"$isd",[V.bN],"$asd")},
sdQ:function(a){this.d=H.k(a,"$isd",[V.cI],"$asd")},
sdZ:function(a){this.e=H.k(a,"$isd",[V.cm],"$asd")},
scv:function(a){this.f=H.k(a,"$isd",[V.aw],"$asd")},
fw:function(){var z,y
z=new Array(256)
z.fixed$length=Array
this.sdQ(H.f(z,[V.cI]))
z=new Array(256)
z.fixed$length=Array
this.sdZ(H.f(z,[V.cm]))
for(y=0;y<256;++y){z=this.d;(z&&C.a).l(z,y,V.ek())
z=this.e;(z&&C.a).l(z,y,V.el())}},
en:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
this.a=a.a
z=a.c
this.r=z
y=this.d
x=y.length
if(x<z){z=new Array(Math.max(x*2,z))
z.fixed$length=Array
this.sdQ(H.f(z,[V.cI]))
z=this.d;(z&&C.a).aD(z,0,x,y,0)
for(;z=this.d,x<z.length;++x)(z&&C.a).l(z,x,V.ek())}z=this.e
x=z.length
y=this.r
if(x<y){y=new Array(Math.max(x*2,y))
y.fixed$length=Array
this.sdZ(H.f(y,[V.cm]))
y=this.e;(y&&C.a).aD(y,0,x,z,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).l(z,x,V.el())}this.scF(a.d)
this.scL(a.e)
this.scv(a.b)
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
l.d.N()
l.c.N()
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
iV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
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
p=y[w].gC()
y=this.c
if(w>=y.length)return H.b(y,w)
o=y[w].gq()
y=this.c
if(v>=y.length)return H.b(y,v)
n=y[v].gC()
y=this.c
if(v>=y.length)return H.b(y,v)
m=y[v].gq()
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
y[w].sq(o)
y=this.c
if(v>=y.length)return H.b(y,v)
y[v].sq(m)}},
ep:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
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
a=k[i].gA()
k=this.b
if(i>=k.length)return H.b(k,i)
a0=k[i].gv()
k=this.c
if(i>=k.length)return H.b(k,i)
a1=k[i].gC()
k=this.c
if(i>=k.length)return H.b(k,i)
a2=k[i].gq()
k=this.b
if(h>=k.length)return H.b(k,h)
a3=k[h].gA()
k=this.b
if(h>=k.length)return H.b(k,h)
a4=k[h].gv()
k=this.c
if(h>=k.length)return H.b(k,h)
a5=k[h].gC()
k=this.c
if(h>=k.length)return H.b(k,h)
a6=k[h].gq()
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
z.ij(0,j,x,m,v,l)
b1=o.b.a
b1[0]=r[0]
b1[1]=r[1]
b2=o.cy
for(k=-$.mD,a7=a5.a,a8=-a6,b0=a1.a,b3=-a2,b4=g+f,b5=0;b5<b2;++b5){b6=o.a
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
k.h(p)
k.c8()}else o.cy=1}}},
dn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
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
p=y[w].gC()
y=this.c
if(w>=y.length)return H.b(y,w)
o=y[w].gq()
y=this.c
if(v>=y.length)return H.b(y,v)
n=y[v].gC()
y=this.c
if(v>=y.length)return H.b(y,v)
m=y[v].gq()
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
y[w].sq(o)
y=this.c
if(v>=y.length)return H.b(y,v)
y[v].sq(m)}},
fi:function(){var z,y,x,w,v,u
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
f3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
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
b=o[m].gA()
o=this.b
if(m>=o.length)return H.b(o,m)
a=o[m].gv()
o=this.b
if(l>=o.length)return H.b(o,l)
a0=o[l].gA()
o=this.b
if(l>=o.length)return H.b(o,l)
a1=o[l].gv()
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
t.eo(0,n,z,x,a4)
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
o[m].sv(a)
o=this.b
if(l>=o.length)return H.b(o,l)
o[l].sv(a1)}return q>=-0.015},
fb:function(c3,c4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
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
a0=o[m].gA()
o=this.b
if(m>=o.length)return H.b(o,m)
a1=o[m].gv()
o=this.b
if(l>=o.length)return H.b(o,l)
a2=o[l].gA()
o=this.b
if(l>=o.length)return H.b(o,l)
a3=o[l].gv()
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
t.eo(0,n,z,x,a6)
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
o[m].sv(a1)
o=this.b
if(l>=o.length)return H.b(o,l)
o[l].sv(a3)}return q>=-0.0075},
E:{
F:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=V.ky()
w=new Float64Array(2)
z=new V.ib(0,new G.v(new E.a(z),new G.o(0,1)),new G.v(new E.a(y),new G.o(0,1)),x,new V.ju(new E.a(w),new E.a(new Float64Array(2)),0))
z.fw()
return z}}},
ju:{"^":"c;a,b,c",
eo:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c.b
y=d.b
x=b.a
if(a0>=2)return H.b(x,a0)
w=x[a0]
switch(b.ch){case C.w:v=x[0]
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
s.a7()
x=this.b
x.sj(0,(q+o)*0.5)
x.sk(0,(p+n)*0.5)
s=s.a
this.c=u*s[0]+r*s[1]-b.cx-b.cy
break
case C.p:x=this.a
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
case C.G:x=this.a
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
fE:{"^":"c;a,b,c,d,e,f,r"},
cm:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
fz:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.l(z,y,new V.fE(new E.a(x),new E.a(new Float64Array(2)),0,0,0,0,0))}},
E:{
el:function(){var z,y,x
z=new Array(2)
z.fixed$length=Array
z=H.f(z,[V.fE])
y=new Float64Array(2)
x=new Float64Array(4)
z=new V.cm(z,new E.a(y),new E.aE(x),new E.aE(new Float64Array(4)),0,0,0,0,0,0,0,0,0,0,0)
z.fz()
return z}}},
bZ:{"^":"aw;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aT:function(a,b,c,d){this.bT(a,b,c,d)},
aL:function(a,b,c){this.dx.fr.e8(a,H.y(this.f.d,"$isc0"),b,H.y(this.r.d,"$isau"),c)}},
c_:{"^":"aw;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aT:function(a,b,c,d){this.bT(a,b,c,d)},
aL:function(a,b,c){var z,y,x
z=this.dx.fr
y=H.y(this.f.d,"$isc0")
x=H.y(this.r.d,"$isbq")
z.k3.e7(a,y,b,x,c)}},
c8:{"^":"aw;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aL:function(a,b,c){this.dx.fr.hN(a,H.y(this.f.d,"$isbq"),b,H.y(this.r.d,"$isau"),c)}},
c9:{"^":"aw;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aL:function(a,b,c){this.dx.fr.hO(a,H.y(this.f.d,"$isbq"),b,H.y(this.r.d,"$isbq"),c)}},
b1:{"^":"c;A:a<,v:b<",
sv:function(a){this.b=H.cj(a)}},
bN:{"^":"c;C:a<,q:b<",
sq:function(a){this.b=H.cj(a)}},
a7:{"^":"c;a,b,c"},
eF:{"^":"c;a,0b,0c,0d,e,f,0r,x,y,z,0aW:Q<,ch,cx,cy",
sdS:function(a){this.r=H.k(a,"$isd",[V.bg],"$asd")},
hU:function(a,b){var z,y,x,w,v,u
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
this.z=b.f
y=b.a.e6(0)
this.d=y
x=y.ck()
if(this.r==null){z=new Array(x)
z.fixed$length=Array
this.sdS(H.f(z,[V.bg]))
for(w=0;w<x;++w){z=this.r
y=new Float64Array(2);(z&&C.a).l(z,w,new V.bg(new V.O(new E.a(y),new E.a(new Float64Array(2))),0,0))
z=this.r
if(w>=z.length)return H.b(z,w)
z[w].seh(null)
z=this.r
if(w>=z.length)return H.b(z,w)
z[w].sbM(-1)}}z=this.r
y=z.length
if(y<x){v=Math.max(y*2,x)
u=new Array(v)
u.fixed$length=Array
this.sdS(H.f(u,[V.bg]))
u=this.r;(u&&C.a).aD(u,0,y,z,0)
for(w=0;w<v;++w){if(w>=y){z=this.r
u=new Float64Array(2);(z&&C.a).l(z,w,new V.bg(new V.O(new E.a(u),new E.a(new Float64Array(2))),0,0))}z=this.r
if(w>=z.length)return H.b(z,w)
z[w].seh(null)
z=this.r
if(w>=z.length)return H.b(z,w)
z[w].sbM(-1)}}this.x=0
this.a=b.e},
hY:function(a,b){var z,y,x,w,v,u,t,s,r
this.x=this.d.ck()
for(z=a.a,y=0;y<this.x;++y){x=this.r
if(y>=x.length)return H.b(x,y)
w=x[y]
x=this.d
v=w.a
x.c3(v,b,y)
u=z.dv()
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
z.dL(t);++a.b
a.e5(t)
w.d=t
w.b=this
w.c=y}},
ft:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.x===0)return
for(z=this.cy,y=c.a.a,x=b.a.a,w=z.a,v=a.a,u=this.ch,t=this.cx,s=u.a.a,r=u.b.a,q=0;q<this.x;++q){p=this.r
if(q>=p.length)return H.b(p,q)
o=p[q]
this.d.c3(u,b,o.c)
this.d.c3(t,c,o.c)
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
if(v.iw(n,p,z))a.e5(n)}}},
ab:{"^":"c;0a,0aW:b<,c,d,e,f,r"},
bg:{"^":"c;bc:a<,0b,c,bM:d<",
seh:function(a){this.b=H.h(a,"$iseF")},
sbM:function(a){this.d=H.p(a)}},
ac:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
sfO:function(a){this.b=H.k(a,"$isd",[V.aj],"$asd")},
scv:function(a){this.c=H.k(a,"$isd",[V.aw],"$asd")},
shb:function(a){this.d=H.k(a,"$isd",[V.ao],"$asd")},
scF:function(a){this.e=H.k(a,"$isd",[V.b1],"$asd")},
scL:function(a){this.f=H.k(a,"$isd",[V.bN],"$asd")},
aT:function(a,b,c,d){var z,y,x
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
this.sfO(H.f(z,[V.aj]))}z=this.d
if(z==null||this.ch>z.length){z=new Array(this.ch)
z.fixed$length=Array
this.shb(H.f(z,[V.ao]))}z=this.c
if(z==null||this.Q>z.length){z=new Array(this.Q)
z.fixed$length=Array
this.scv(H.f(z,[V.aw]))}y=this.f
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.bN])}z=new Array(this.z)
z.fixed$length=Array
this.scL(H.f(z,[V.bN]))
z=this.f
x=y.length;(z&&C.a).aD(z,0,x,y,0)
for(;z=this.f,x<z.length;++x)(z&&C.a).l(z,x,new V.bN(new E.a(new Float64Array(2)),0))}y=this.e
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.f(z,[V.b1])}z=new Array(this.z)
z.fixed$length=Array
this.scF(H.f(z,[V.b1]))
z=this.e
x=y.length;(z&&C.a).aD(z,0,x,y,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).l(z,x,new V.b1(new E.a(new Float64Array(2)),0))}},
eX:function(a1,a2,a3,a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(v.a===C.j){w=s.a
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
J.dd(w[x].gA(),q[0])
w=this.e
if(x>=w.length)return H.b(w,x)
J.de(w[x].gA(),q[1])
w=this.e
if(x>=w.length)return H.b(w,x)
w[x].sv(t)
w=this.f
if(x>=w.length)return H.b(w,x)
p=s.a
w[x].gC().a[0]=p[0]
w=this.f
if(x>=w.length)return H.b(w,x)
w[x].gC().a[1]=p[1]
p=this.f
if(x>=p.length)return H.b(p,x)
p[x].sq(r)}y=this.cy
y.a=a2
y.sce(this.e)
y.sci(this.f)
w=this.db
w.a=a2
w.sea(this.c)
w.c=this.y
w.sce(this.e)
w.sci(this.f)
p=this.cx
p.en(w)
p.ep()
if(a2.f)p.iV()
for(x=0;x<this.x;++x){w=this.d
if(x>=w.length)return H.b(w,x)
w[x].aB(y)}for(x=0;x<a2.d;++x){for(k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.b(w,k)
w[k].az(y)}p.dn()}p.fi()
for(x=0;x<this.r;++x){w=this.e
if(x>=w.length)return H.b(w,x)
j=w[x].gA()
w=this.e
if(x>=w.length)return H.b(w,x)
t=w[x].gv()
w=this.f
if(x>=w.length)return H.b(w,x)
s=w[x].gC()
w=this.f
if(x>=w.length)return H.b(w,x)
r=w[x].gq()
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
w[x].sv(t+z*r)
w=this.f
if(x>=w.length)return H.b(w,x)
w[x].sq(r)}x=0
while(!0){if(!(x<a2.e)){e=!1
break}d=p.f3()
for(c=!0,k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.b(w,k)
b=w[k].ay(y)
c=c&&b}if(d&&c){e=!0
break}++x}for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
a=y[x]
y=a.f
w=this.e
if(x>=w.length)return H.b(w,x)
o=y.c.a
o[0]=J.aA(w[x].gA())
w=this.e
if(x>=w.length)return H.b(w,x)
o[1]=J.aB(w[x].gA())
w=this.e
if(x>=w.length)return H.b(w,x)
y.e=w[x].gv()
w=a.r
y=this.f
if(x>=y.length)return H.b(y,x)
w=w.a
w[0]=y[x].gC().a[0]
y=this.f
if(x>=y.length)return H.b(y,x)
w[1]=y[x].gC().a[1]
y=this.f
if(x>=y.length)return H.b(y,x)
a.x=H.cj(y[x].gq())
a.br()}this.eB(p.e)
if(a4){for(a0=17976931348623157e292,x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
v=y[x]
if(v.a===C.f)continue
if((v.b&4)!==0){y=v.x
if(!(y*y>0.0012184696791468343)){y=v.r
y=y.F(y)>0.0001}else y=!0}else y=!0
if(y){v.k3=0
a0=0}else{y=v.k3+=z
a0=Math.min(a0,y)}}if(a0>=0.5&&e)for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.b(y,x)
y[x].ae(!1)}}},
fa:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
y=y[z].gA()
x=this.b
if(z>=x.length)return H.b(x,z)
J.dd(y,x[z].f.c.a[0])
x=this.e
if(z>=x.length)return H.b(x,z)
x=x[z].gA()
y=this.b
if(z>=y.length)return H.b(y,z)
J.de(x,y[z].f.c.a[1])
y=this.e
if(z>=y.length)return H.b(y,z)
y=y[z]
x=this.b
if(z>=x.length)return H.b(x,z)
y.sv(x[z].f.e)
x=this.f
if(z>=x.length)return H.b(x,z)
x=x[z].gC()
y=this.b
if(z>=y.length)return H.b(y,z)
x.a[0]=y[z].r.a[0]
y=this.f
if(z>=y.length)return H.b(y,z)
y=y[z].gC()
x=this.b
if(z>=x.length)return H.b(x,z)
y.a[1]=x[z].r.a[1]
y=this.f
if(z>=y.length)return H.b(y,z)
y[z].sq(x[z].x)}y=this.dy
y.sea(this.c)
y.c=this.y
y.a=a
y.sce(this.e)
y.sci(this.f)
x=this.dx
x.en(y)
for(z=0;z<a.e;++z)if(x.fb(b,c))break
y=this.b
if(b>=y.length)return H.b(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.b(w,b)
y.b.sj(0,J.aA(w[b].gA()))
w=this.b
if(b>=w.length)return H.b(w,b)
w=w[b].f
y=this.e
if(b>=y.length)return H.b(y,b)
w.b.sk(0,J.aB(y[b].gA()))
y=this.b
if(b>=y.length)return H.b(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.b(w,b)
y.d=w[b].gv()
w=this.b
if(c>=w.length)return H.b(w,c)
w=w[c].f
y=this.e
if(c>=y.length)return H.b(y,c)
w.b.h(y[c].gA())
y=this.b
if(c>=y.length)return H.b(y,c)
y=y[c].f
w=this.e
if(c>=w.length)return H.b(w,c)
y.d=w[c].gv()
x.ep()
for(z=0;z<a.d;++z)x.dn()
v=a.a
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.b(y,z)
u=y[z].gA()
y=this.e
if(z>=y.length)return H.b(y,z)
t=y[z].gv()
y=this.f
if(z>=y.length)return H.b(y,z)
s=y[z].gC()
y=this.f
if(z>=y.length)return H.b(y,z)
r=y[z].gq()
y=s.a
q=y[0]*v
p=y[1]*v
w=q*q+p*p
if(w>4)s.B(0,2/Math.sqrt(w))
o=v*r
if(o*o>2.4674011002723395)r*=1.5707963267948966/Math.abs(o)
w=u.a
w[0]=w[0]+y[0]*v
w[1]=w[1]+y[1]*v
t+=v*r
n=this.e
if(z>=n.length)return H.b(n,z)
J.dd(n[z].gA(),w[0])
n=this.e
if(z>=n.length)return H.b(n,z)
J.de(n[z].gA(),w[1])
n=this.e
if(z>=n.length)return H.b(n,z)
n[z].sv(t)
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].gC().a[0]=y[0]
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].gC().a[1]=y[1]
n=this.f
if(z>=n.length)return H.b(n,z)
n[z].sq(r)
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
m.br()}this.eB(x.e)},
eB:function(a){var z,y,x,w,v,u,t,s,r
H.k(a,"$isd",[V.cm],"$asd")
if(this.a==null)return
for(z=this.fr,y=z.a,x=z.b,w=0;w<this.y;++w){v=this.c
if(w>=v.length)return H.b(v,w)
v[w]
if(w>=a.length)return H.b(a,w)
u=a[w]
v=u.cy
z.c=v
for(t=u.a,s=0;s<v;++s){if(s>=2)return H.b(t,s)
r=t[s]
y[s]=r.c
x[s]=r.d}this.a.toString}}},
i9:{"^":"ao;ch,0cx,cy,0db,dx,0dy,0fr,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
shh:function(a){this.db=H.k(a,"$isd",[E.a],"$asd")},
sh0:function(a){this.fr=H.k(a,"$isd",[V.cL],"$asd")},
fu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
this.dy=a
if(b.x.length<=2)throw H.e("You cannot create a constant volume joint with less than three _bodies.")
z=this.ch
y=z.length
y=new Float64Array(y)
this.cx=y
for(x=0;y=y.length,x<y;++x,y=t){w=x===y-1?0:x+1
if(x>=z.length)return H.b(z,x)
y=z[x].gb8()
if(w>=z.length)return H.b(z,w)
v=z[w].gb8()
u=new Float64Array(2)
t=new E.a(u)
s=y.a
u[1]=s[1]
u[0]=s[0]
t.n(v)
r=Math.sqrt(t.gV())
t=this.cx
if(x>=t.length)return H.b(t,x)
t[x]=r}this.cy=this.eL()
y=new Float64Array(2)
v=new Float64Array(2)
q=new V.eu(new E.a(y),new E.a(v),1,0,0,!1)
q.a=C.J
u=new Array(z.length)
u.fixed$length=Array
this.sh0(H.f(u,[V.cL]))
for(x=0;u=this.cx.length,x<u;++x){w=x===u-1?0:x+1
q.y=b.f
q.z=b.r
q.e=b.e
u=z.length
if(x>=u)return H.b(z,x)
t=z[x]
if(w>=u)return H.b(z,w)
u=z[w]
p=t.gb8()
if(w>=z.length)return H.b(z,w)
o=z[w].gb8()
H.h(u,"$isaj")
q.c=t
q.d=u
u=new Float64Array(2)
G.cW(t.d,p,new E.a(u))
y[1]=u[1]
y[0]=u[0]
u=q.d
u.toString
t=new Float64Array(2)
G.cW(u.d,o,new E.a(t))
v[1]=t[1]
v[0]=t[0]
u=new Float64Array(2)
n=new E.a(u)
s=o.a
u[1]=s[1]
u[0]=s[0]
n.n(p)
q.x=Math.sqrt(n.gV())
p=this.fr;(p&&C.a).l(p,x,H.y(this.dy.b0(q),"$iscL"))}z=new Array(z.length)
z.fixed$length=Array
this.shh(H.f(z,[E.a]))
for(x=0;z=this.db,x<z.length;++x)(z&&C.a).l(z,x,new E.a(new Float64Array(2)))},
eL:function(){var z,y,x,w,v,u,t
for(z=this.ch,y=0,x=0;w=z.length,x<w;++x){v=x===w-1?0:x+1
w=z[x].gb8().a[0]
if(v>=z.length)return H.b(z,v)
u=z[v].gb8().a[1]
if(v>=z.length)return H.b(z,v)
t=z[v].gb8().a[0]
if(x>=z.length)return H.b(z,x)
y+=w*u-t*z[x].gb8().a[1]}return y*0.5},
eS:function(a){var z,y,x,w,v,u,t,s,r
H.k(a,"$isd",[V.b1],"$asd")
for(z=this.ch,y=0,x=0;w=z.length,x<w;++x){v=x===w-1?0:x+1
w=z[x].gaa()
u=a.length
if(w>=u)return H.b(a,w)
w=J.aA(a[w].gA())
if(v>=z.length)return H.b(z,v)
t=z[v].gaa()
if(t>=u)return H.b(a,t)
t=J.aB(a[t].gA())
if(v>=z.length)return H.b(z,v)
s=z[v].gaa()
if(s>=u)return H.b(a,s)
s=J.aA(a[s].gA())
if(x>=z.length)return H.b(z,x)
r=z[x].gaa()
if(r>=u)return H.b(a,r)
y+=w*t-s*J.aB(a[r].gA())}return y*0.5},
fU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$isd",[V.b1],"$asd")
for(z=this.ch,y=0,x=0;w=z.length,x<w;++x){v=x===w-1?0:x+1
if(v>=w)return H.b(z,v)
w=z[v].gaa()
u=a.length
if(w>=u)return H.b(a,w)
w=J.aA(a[w].gA())
if(x>=z.length)return H.b(z,x)
t=z[x].gaa()
if(t>=u)return H.b(a,t)
s=w-J.aA(a[t].gA())
if(v>=z.length)return H.b(z,v)
t=z[v].gaa()
if(t>=u)return H.b(a,t)
t=J.aB(a[t].gA())
if(x>=z.length)return H.b(z,x)
w=z[x].gaa()
if(w>=u)return H.b(a,w)
r=t-J.aB(a[w].gA())
q=Math.sqrt(s*s+r*r)
if(q<11920928955078125e-23)q=1
w=this.db
if(x>=w.length)return H.b(w,x)
w[x].a[0]=r/q
w[x].a[1]=-s/q
y+=q}w=this.Q.a.m()
p=0.5*(this.cy-this.eS(a))/y
for(o=!0,x=0;u=z.length,x<u;++x){v=x===u-1?0:x+1
u=this.db
t=u.length
if(x>=t)return H.b(u,x)
n=u[x].a
m=n[0]
if(v>=t)return H.b(u,v)
u=u[v].a
t=u[0]
n=n[1]
u=u[1]
l=w.a
l[0]=p*(m+t)
l[1]=p*(n+u)
k=w.gV()
if(k>0.04000000000000001)w.B(0,0.2/Math.sqrt(k))
if(k>0.000025)o=!1
if(v>=z.length)return H.b(z,v)
u=z[v].gaa()
t=a.length
if(u>=t)return H.b(a,u)
u=a[u].gA()
u.a[0]=u.gcK()[0]+l[0]
if(v>=z.length)return H.b(z,v)
u=z[v].gaa()
if(u>=t)return H.b(a,u)
u=a[u].gA()
u.a[1]=u.gcK()[1]+l[1]}--this.Q.a.b
return o},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=a.c
y=a.b
x=this.ch
w=this.Q.df(x.length)
for(v=J.a4(w),u=0;t=x.length,u<t;++u){s=u===0?t-1:u-1
r=u===t-1?0:u+1
t=v.i(w,u)
if(r>=x.length)return H.b(x,r)
q=x[r].gaa()
p=y.length
if(q>=p)return H.b(y,q)
t.h(y[q].gA())
q=v.i(w,u)
if(s<0||s>=x.length)return H.b(x,s)
t=x[s].gaa()
if(t>=p)return H.b(y,t)
q.n(y[t].gA())}t=a.a
if(t.f){this.dx=this.dx*t.c
for(u=0;u<x.length;++u){t=x[u].gaa()
q=z.length
if(t>=q)return H.b(z,t)
t=z[t].gC().a
p=t[0]
if(u>=x.length)return H.b(x,u)
o=x[u].gbu()
n=J.aB(v.i(w,u))
if(typeof n!=="number")return H.N(n)
t[0]=p+o*n*0.5*this.dx
if(u>=x.length)return H.b(x,u)
n=x[u].gaa()
if(n>=q)return H.b(z,n)
n=z[n].gC().a
q=n[1]
if(u>=x.length)return H.b(x,u)
n[1]=q+x[u].gbu()*J.e4(J.aA(v.i(w,u)))*0.5*this.dx}}else this.dx=0},
ay:function(a){return this.fU(a.b)},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.c
y=a.b
x=this.ch
w=this.Q.df(x.length)
for(v=J.a4(w),u=0,t=0,s=0;r=x.length,s<r;++s){q=s===0?r-1:s-1
p=s===r-1?0:s+1
r=v.i(w,s)
if(p>=x.length)return H.b(x,p)
o=x[p].gaa()
n=y.length
if(o>=n)return H.b(y,o)
r.h(y[o].gA())
o=v.i(w,s)
if(q<0||q>=x.length)return H.b(x,q)
r=x[q].gaa()
if(r>=n)return H.b(y,r)
o.n(y[r].gA())
r=v.i(w,s).gV()
if(s>=x.length)return H.b(x,s)
t+=r/x[s].geu()
if(s>=x.length)return H.b(x,s)
r=x[s].gaa()
if(r>=z.length)return H.b(z,r)
u+=z[r].gC().w(v.i(w,s))}m=-2*u/t
this.dx+=m
for(s=0;s<x.length;++s){r=x[s].gaa()
o=z.length
if(r>=o)return H.b(z,r)
r=z[r].gC().a
n=r[0]
if(s>=x.length)return H.b(x,s)
l=x[s].gbu()
k=J.aB(v.i(w,s))
if(typeof k!=="number")return H.N(k)
r[0]=n+l*k*0.5*m
if(s>=x.length)return H.b(x,s)
k=x[s].gaa()
if(k>=o)return H.b(z,k)
k=z[k].gC().a
o=k[1]
if(s>=x.length)return H.b(x,s)
k[1]=o+x[s].gbu()*J.e4(J.aA(v.i(w,s)))*0.5*m}},
aw:function(a){},
ax:function(a){},
E:{
ia:function(a,b){var z=b.x
z=J.dp(z.slice(0),H.r(z,0))
z=new V.i9(z,0,0,b.a,!1,!1)
z.aA(a.ch,b)
z.fu(a,b)
return z}}},
ej:{"^":"cO;f,r,x,0y,0a,0b,0c,0d,e"},
cL:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){G.P(this.f.d,this.db,a)},
ax:function(a){G.P(this.r.d,this.dx,a)},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(x>=w.length)return H.b(w,x)
v=w[x].gA()
x=a.b
w=this.fy
if(w>=x.length)return H.b(x,w)
u=x[w].gv()
w=a.c
x=this.fy
if(x>=w.length)return H.b(w,x)
t=w[x].gC()
x=a.c
w=this.fy
if(w>=x.length)return H.b(x,w)
s=x[w].gq()
w=a.b
x=this.go
if(x>=w.length)return H.b(w,x)
r=w[x].gA()
x=a.b
w=this.go
if(w>=x.length)return H.b(x,w)
q=x[w].gv()
w=a.c
x=this.go
if(x>=w.length)return H.b(w,x)
p=w[x].gC()
x=a.c
w=this.go
if(w>=x.length)return H.b(x,w)
o=x[w].gq()
w=this.Q.f.m()
x=this.Q.f.m()
w.J(u)
x.J(q)
n=this.id
n.h(this.db)
n.n(y)
y=this.k1
G.t(w,n,y)
n.h(this.dx)
n.n(z)
z=this.k2
G.t(x,n,z)
n.h(r)
n.p(0,z)
n.n(v)
n.n(y)
this.Q.f.b-=2
m=Math.sqrt(n.gV())
if(m>0.005){x=n.a
w=1/m
n.sj(0,x[0]*w)
n.sk(0,x[1]*w)}else n.t(0,0)
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
x=this.Q.a.m()
x.h(n)
x.B(0,this.fr)
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
if(y>=z.length)return H.b(z,y)
z[y].sq(s)
y=a.c
z=this.go
if(z>=y.length)return H.b(y,z)
y[z].sq(o)},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.c
y=this.fy
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.fy
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.go
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.go
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
z=this.Q.a.m()
y=this.Q.a.m()
t=this.k1
t.a0(w,z)
z.p(0,x)
s=this.k2
s.a0(u,y)
y.p(0,v)
r=this.id
y.n(z)
q=r.F(y)
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
if(k>=y.length)return H.b(y,k)
y[k].sq(w-r*(o*l-t*m))
t=a.c
o=this.go
if(o>=t.length)return H.b(t,o)
t[o].sq(u+p*(z*l-s*m))
this.Q.a.b-=2},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(this.ch>0)return!0
z=this.Q.f.m()
y=this.Q.f.m()
x=this.Q.a.m()
w=this.Q.a.m()
v=this.Q.a.m()
u=a.b
t=this.fy
if(t>=u.length)return H.b(u,t)
s=u[t].gA()
t=a.b
u=this.fy
if(u>=t.length)return H.b(t,u)
r=t[u].gv()
u=a.b
t=this.go
if(t>=u.length)return H.b(u,t)
q=u[t].gA()
t=a.b
u=this.go
if(u>=t.length)return H.b(t,u)
p=t[u].gv()
z.J(r)
y.J(p)
v.h(this.db)
v.n(this.k3)
G.t(z,v,x)
v.h(this.dx)
v.n(this.k4)
G.t(y,v,w)
v.h(q)
v.p(0,w)
v.n(s)
v.n(x)
o=Math.max(-0.2,Math.min(v.a7()-this.fx,0.2))
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
if(k>=t.length)return H.b(t,k)
t[k].sv(r-v*(y*l-x*m))
x=a.b
y=this.go
if(y>=x.length)return H.b(x,y)
x[y].sv(p+z*(u*l-w*m))
w=this.Q
w.a.b-=3
w.f.b-=2
return Math.abs(o)<0.005}},
eu:{"^":"cO;f,r,I:x>,y,z,0a,0b,0c,0d,e"},
iC:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){G.P(this.f.d,this.ch,a)},
ax:function(a){G.P(this.r.d,this.cx,a)},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(x>=w.length)return H.b(w,x)
v=w[x].gv()
x=a.c
w=this.fr
if(w>=x.length)return H.b(x,w)
u=x[w].gC()
w=a.c
x=this.fr
if(x>=w.length)return H.b(w,x)
t=w[x].gq()
x=a.b
w=this.fx
if(w>=x.length)return H.b(x,w)
s=x[w].gv()
w=a.c
x=this.fx
if(x>=w.length)return H.b(w,x)
r=w[x].gC()
x=a.c
w=this.fx
if(w>=x.length)return H.b(x,w)
q=x[w].gq()
w=this.Q.a.m()
x=this.Q.f.m()
p=this.Q.f.m()
x.J(v)
p.J(s)
w.h(this.ch)
w.n(y)
y=this.fy
G.t(x,w,y)
w.h(this.cx)
w.n(z)
z=this.go
G.t(p,w,z)
o=this.k2
n=this.k3
m=this.k4
l=this.r1
p=this.Q.c.m()
x=o+n
k=y.a
j=k[1]
i=z.a
h=i[1]
k=k[0]
i=i[0]
g=l*i
f=-m*k*j-g*h
p.bD(x+m*j*j+l*h*h,f,f,x+m*k*k+g*i)
i=this.r2
i.h(p)
i.c8()
i=m+l
this.rx=i
if(i>0)this.rx=1/i
x=a.a
p=this.cy
if(x.f){p.B(0,x.c)
this.db=this.db*a.a.c
x=this.Q.a.m()
x.h(p)
w.h(x)
w.B(0,o)
u.n(w)
t-=m*(y.w(x)+this.db)
w.h(x)
w.B(0,n)
r.p(0,w)
q+=l*(z.w(x)+this.db);--this.Q.a.b}else{p.N()
this.db=0}z=a.c
y=this.fr
if(y>=z.length)return H.b(z,y)
J.az(z[y].gq(),t)
z=a.c
y=this.fr
if(y>=z.length)return H.b(z,y)
z[y].sq(t)
y=a.c
z=this.fx
if(z>=y.length)return H.b(y,z)
y[z].sq(q)
z=this.Q
z.f.b-=2;--z.a.b;--z.c.b},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.fr
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.fr
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.fx
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.fx
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
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
z=this.Q.a.m()
y=this.Q.a.m()
l=this.fy
l.a0(w,y)
k=this.go
k.a0(u,z)
z.p(0,v)
z.n(x)
z.n(y)
j=this.Q.a.m()
this.r2.d4(z,j)
j.O()
z=this.Q.a.m()
i=this.cy
z.h(i)
i.p(0,j)
n=p*this.dx
if(i.gV()>n*n){i.a7()
i.B(0,n)}j.h(i)
j.n(z)
y.h(j)
y.B(0,t)
x.n(y)
w-=r*l.w(j)
y.h(j)
y.B(0,s)
v.p(0,y)
z=k.w(j)
y=a.c
l=this.fr
if(l>=y.length)return H.b(y,l)
J.az(y[l].gq(),w)
y=a.c
l=this.fr
if(l>=y.length)return H.b(y,l)
y[l].sq(w)
l=a.c
y=this.fx
if(y>=l.length)return H.b(l,y)
l[y].sq(u+q*z)
this.Q.a.b-=4},
ay:function(a){return!0}},
eH:{"^":"cO;f,r,x,y,0a,0b,0c,0d,e"},
iE:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a_,a3,a4,a1,W,U,a2,a9,ab,ac,af,an,aj,ak,aq,aF,aG,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){G.P(this.f.d,this.fr,a)},
ax:function(a){G.P(this.r.d,this.fx,a)},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
this.rx=this.f.c
this.ry=this.r.c
z=this.dx
this.x1=z.gaa()
y=this.dy
this.x2=y.gaa()
x=this.y1
x.h(this.f.f.a)
w=this.y2
w.h(this.r.f.a)
v=this.a_
v.h(z.gbb().gis())
u=this.a3
u.h(y.gbb().gis())
this.a4=this.f.fx
this.a1=this.r.fx
this.W=z.gbu()
this.U=y.gbu()
this.a2=this.f.go
this.a9=this.r.go
this.ab=z.gha()
this.ac=y.gha()
y=a.b
z=this.rx
if(z>=y.length)return H.b(y,z)
t=y[z].gv()
z=a.c
y=this.rx
if(y>=z.length)return H.b(z,y)
s=z[y].gC()
y=a.c
z=this.rx
if(z>=y.length)return H.b(y,z)
r=y[z].gq()
z=a.b
y=this.ry
if(y>=z.length)return H.b(z,y)
q=z[y].gv()
y=a.c
z=this.ry
if(z>=y.length)return H.b(y,z)
p=y[z].gC()
z=a.c
y=this.ry
if(y>=z.length)return H.b(z,y)
o=z[y].gq()
y=a.b
z=this.x1
if(z>=y.length)return H.b(y,z)
n=y[z].gv()
z=a.c
y=this.x1
if(y>=z.length)return H.b(z,y)
m=z[y].gC()
y=a.c
z=this.x1
if(z>=y.length)return H.b(y,z)
l=y[z].gq()
z=a.b
y=this.x2
if(y>=z.length)return H.b(z,y)
k=z[y].gv()
y=a.c
z=this.x2
if(z>=y.length)return H.b(y,z)
j=y[z].gC()
z=a.c
y=this.x2
if(y>=z.length)return H.b(z,y)
i=z[y].gq()
y=this.Q.f.m()
z=this.Q.f.m()
h=this.Q.f.m()
g=this.Q.f.m()
y.J(t)
z.J(q)
h.J(n)
g.J(k)
this.aG=0
f=this.Q.a.m()
e=this.Q.a.m()
d=this.Q.a.m()
c=this.af
G.t(h,this.id,c)
f.h(this.fy)
f.n(v)
G.t(h,f,e)
f.h(this.fr)
f.n(x)
G.t(y,f,d)
this.aq=e.w(c)
c=d.w(c)
this.aj=c
d=this.aG
e=this.W
y=this.a4
x=this.ab
h=this.aq
this.aG=d+(e+y+x*h*h+this.a2*c*c)
this.Q.a.b-=2
y=this.Q.a.m()
x=this.Q.a.m()
v=this.Q.a.m()
G.t(g,this.k1,y)
f.h(this.go)
f.n(u)
G.t(g,f,x)
f.h(this.fx)
f.n(w)
G.t(z,f,v)
f=this.an
f.h(y)
f.B(0,this.r1)
this.aF=this.r1*x.w(y)
y=this.r1*v.w(y)
this.ak=y
v=this.aG
x=this.r1
f=this.U
z=this.a1
w=this.ac
g=this.aF
this.aG=v+(x*x*(f+z)+w*g*g+this.a9*y*y)
this.Q.a.b-=3
z=this.aG
this.aG=z>0?1/z:0
if(a.a.f){z=s.a
y=this.af.a
s.sj(0,z[0]+this.a4*this.r2*y[0])
s.sk(0,z[1]+this.a4*this.r2*y[1])
z=this.a2
x=this.r2
r+=z*x*this.aj
z=p.a
w=this.an.a
p.sj(0,z[0]+this.a1*x*w[0])
p.sk(0,z[1]+this.a1*this.r2*w[1])
z=this.a9
x=this.r2
o+=z*x*this.ak
z=m.a
m.sj(0,z[0]-this.W*x*y[0])
m.sk(0,z[1]-this.W*this.r2*y[1])
y=this.ab
z=this.r2
l-=y*z*this.aq
y=j.a
j.sj(0,y[0]-this.U*z*w[0])
j.sk(0,y[1]-this.U*this.r2*w[1])
i-=this.ac*this.r2*this.aF}else this.r2=0
z=this.Q;--z.a.b
z.f.b-=4
z=a.c
y=this.rx
if(y>=z.length)return H.b(z,y)
z[y].sq(r)
y=a.c
z=this.ry
if(z>=y.length)return H.b(y,z)
y[z].sq(o)
z=a.c
y=this.x1
if(y>=z.length)return H.b(z,y)
z[y].sq(l)
y=a.c
z=this.x2
if(z>=y.length)return H.b(y,z)
y[z].sq(i)},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.c
y=this.rx
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.rx
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.ry
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.ry
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
z=a.c
y=this.x1
if(y>=z.length)return H.b(z,y)
t=z[y].gC()
y=a.c
z=this.x1
if(z>=y.length)return H.b(y,z)
s=y[z].gq()
z=a.c
y=this.x2
if(y>=z.length)return H.b(z,y)
r=z[y].gC()
y=a.c
z=this.x2
if(z>=y.length)return H.b(y,z)
q=y[z].gq()
z=this.Q.a.m()
y=this.Q.a.m()
p=this.af
z.h(x)
z.n(t)
z=p.F(z)
o=this.an
y.h(v)
y.n(r)
y=o.F(y)
n=this.aj
m=this.aq
l=this.ak
k=this.aF
this.Q.a.b-=2
j=-this.aG*(z+y+(n*w-m*s+(l*u-k*q)))
this.r2+=j
k=x.a
p=p.a
x.sj(0,k[0]+this.a4*j*p[0])
x.sk(0,k[1]+this.a4*j*p[1])
k=this.a2
l=this.aj
m=v.a
o=o.a
v.sj(0,m[0]+this.a1*j*o[0])
v.sk(0,m[1]+this.a1*j*o[1])
m=this.a9
n=this.ak
y=t.a
t.sj(0,y[0]-this.W*j*p[0])
t.sk(0,y[1]-this.W*j*p[1])
p=this.ab
y=this.aq
z=r.a
r.sj(0,z[0]-this.U*j*o[0])
r.sk(0,z[1]-this.U*j*o[1])
o=this.ac
z=this.aF
i=a.c
h=this.rx
if(h>=i.length)return H.b(i,h)
i[h].sq(w+k*j*l)
l=a.c
k=this.ry
if(k>=l.length)return H.b(l,k)
l[k].sq(u+m*j*n)
n=a.c
m=this.x1
if(m>=n.length)return H.b(n,m)
n[m].sq(s-p*j*y)
y=a.c
p=this.x2
if(p>=y.length)return H.b(y,p)
y[p].sq(q-o*j*z)},
ay:function(a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=a4.b
y=this.rx
if(y>=z.length)return H.b(z,y)
x=z[y].gA()
y=a4.b
z=this.rx
if(z>=y.length)return H.b(y,z)
w=y[z].gv()
z=a4.b
y=this.ry
if(y>=z.length)return H.b(z,y)
v=z[y].gA()
y=a4.b
z=this.ry
if(z>=y.length)return H.b(y,z)
u=y[z].gv()
z=a4.b
y=this.x1
if(y>=z.length)return H.b(z,y)
t=z[y].gA()
y=a4.b
z=this.x1
if(z>=y.length)return H.b(y,z)
s=y[z].gv()
z=a4.b
y=this.x2
if(y>=z.length)return H.b(z,y)
r=z[y].gA()
y=a4.b
z=this.x2
if(z>=y.length)return H.b(y,z)
q=y[z].gv()
z=this.Q.f.m()
y=this.Q.f.m()
p=this.Q.f.m()
o=this.Q.f.m()
z.J(w)
y.J(u)
p.J(s)
o.J(q)
n=this.Q.a.m()
m=this.Q.a.m()
l=this.Q.a.m()
k=this.Q.a.m()
j=this.Q.a.m()
i=this.Q.a.m()
h=this.Q.a.m()
g=this.id
G.t(p,g,m)
f=this.fy
n.h(f)
e=this.a_
n.n(e)
G.t(p,n,k)
n.h(this.fr)
n.n(this.y1)
G.t(z,n,j)
d=k.w(m)
c=j.w(m)
b=0+(this.W+this.a4+this.ab*d*d+this.a2*c*c)
i.h(f)
i.n(e)
n.h(j)
n.p(0,x)
n.n(t)
G.aL(p,n,h)
h.n(i)
a=h.F(g)
this.Q.a.b-=4
z=this.Q.a.m()
p=this.Q.a.m()
k=this.Q.a.m()
j=this.Q.a.m()
i=this.Q.a.m()
h=this.k1
G.t(o,h,z)
g=this.go
n.h(g)
f=this.a3
n.n(f)
G.t(o,n,p)
n.h(this.fx)
n.n(this.y2)
G.t(y,n,k)
l.h(z)
l.B(0,this.r1)
a0=p.w(z)
a1=k.w(z)
z=this.r1
b+=z*z*(this.U+this.a1)+this.ac*a0*a0+this.a9*a1*a1
j.h(g)
j.n(f)
n.h(k)
n.p(0,v)
n.n(r)
G.aL(o,n,i)
i.n(j)
a2=i.F(h)
this.Q.a.b-=5
z=this.r1
y=this.k4
a3=b>0?-(a+z*a2-y)/b:0
z=this.Q
z.a.b-=3
z.f.b-=4
z=x.a
y=z[0]
p=this.a4
m=m.a
x.sj(0,y+p*a3*m[0])
x.sk(0,z[1]+this.a4*a3*m[1])
z=this.a2
p=v.a
y=p[0]
o=this.a1
l=l.a
v.sj(0,y+o*a3*l[0])
v.sk(0,p[1]+this.a1*a3*l[1])
p=this.a9
o=t.a
t.sj(0,o[0]-this.W*a3*m[0])
t.sk(0,o[1]-this.W*a3*m[1])
m=this.ab
o=r.a
r.sj(0,o[0]-this.U*a3*l[0])
r.sk(0,o[1]-this.U*a3*l[1])
l=this.ac
o=a4.b
y=this.rx
if(y>=o.length)return H.b(o,y)
o[y].sv(w+z*a3*c)
z=a4.b
y=this.ry
if(y>=z.length)return H.b(z,y)
z[y].sv(u+p*a3*a1)
p=a4.b
y=this.x1
if(y>=p.length)return H.b(p,y)
p[y].sv(s-m*a3*d)
m=a4.b
y=this.x2
if(y>=m.length)return H.b(m,y)
m[y].sv(q-l*a3*a0)
return!0}},
ao:{"^":"c;",
aA:function(a,b){this.Q=a
this.b=null
this.c=null
this.f=b.c
this.r=b.d
this.y=b.e
this.x=!1
this.z=b.b
this.d=new V.eN()
this.e=new V.eN()}},
cO:{"^":"c;0aW:b<"},
eN:{"^":"c;0a,0b,0c,0d"},
ay:{"^":"c;a,b",
u:function(a){return this.b}},
cP:{"^":"c;a,b",
u:function(a){return this.b}},
j3:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){a.h(this.f.d.a)},
ax:function(a){a.h(this.r.d.a)},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(x>=w.length)return H.b(w,x)
v=w[x].gA()
x=a.b
w=this.fx
if(w>=x.length)return H.b(x,w)
u=x[w].gv()
w=a.c
x=this.fx
if(x>=w.length)return H.b(w,x)
t=w[x].gC()
x=a.c
w=this.fx
if(w>=x.length)return H.b(x,w)
s=x[w].gq()
w=a.b
x=this.fy
if(x>=w.length)return H.b(w,x)
r=w[x].gA()
x=a.b
w=this.fy
if(w>=x.length)return H.b(x,w)
q=x[w].gv()
w=a.c
x=this.fy
if(x>=w.length)return H.b(w,x)
p=w[x].gC()
x=a.c
w=this.fy
if(w>=x.length)return H.b(x,w)
o=x[w].gq()
w=this.Q.f.m()
x=this.Q.f.m()
n=this.Q.a.m()
m=this.Q.c.m()
w.J(u)
x.J(q)
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
m.bD(z+i*x*x+h*g*g,c,c,z+i*f*f+d*e)
e=this.x1
e.h(m)
e.c8()
e=i+h
this.x2=e
if(e>0)this.x2=1/e
G.t(w,this.ch,n)
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
o+=h*(y[0]*w[1]-y[1]*w[0]+this.db)}else{x.N()
this.db=0}z=this.Q;--z.a.b;--z.c.b
z.f.b-=2
z=a.c
y=this.fx
if(y>=z.length)return H.b(z,y)
z[y].sq(s)
y=a.c
z=this.fy
if(z>=y.length)return H.b(y,z)
y[z].sq(o)},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=a.c
y=this.fx
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.fx
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.fy
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.fy
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
t=this.r1
s=this.r2
r=this.rx
q=this.ry
z=a.a
p=z.a
o=z.b
z=this.Q.a.m()
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
n=this.Q.a.m()
y=v.a
m=this.id.a
i=x.a
h=this.go.a
g=this.k3.a
n.sj(0,y[0]+-u*m[1]-i[0]- -w*h[1]+o*this.fr*g[0])
n.sk(0,y[1]+u*m[0]-i[1]-w*h[0]+o*this.fr*g[1])
this.x1.d4(n,z)
z.O()
n=this.Q.a.m()
g=this.cy
n.h(g)
g.p(0,z)
k=p*this.dx
if(g.gV()>k*k){g.a7()
g.B(0,k)}g=g.a
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
if(d>=e.length)return H.b(e,d)
e[d].sq(w-r*(i*n-h*g))
g=a.c
h=this.fy
if(h>=g.length)return H.b(g,h)
g[h].sq(u+q*(y*f-m*z))},
ay:function(a){return!0}},
j4:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){a.h(this.cx)},
ax:function(a){G.P(this.r.d,this.ch,a)},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.r
this.fy=z.c
y=this.id
y.h(z.f.a)
z=this.r
this.k1=z.fx
this.k2=z.go
z=a.b
x=this.fy
if(x>=z.length)return H.b(z,x)
w=z[x].gA()
x=a.b
z=this.fy
if(z>=x.length)return H.b(x,z)
v=x[z].gv()
z=a.c
x=this.fy
if(x>=z.length)return H.b(z,x)
u=z[x].gC()
x=a.c
z=this.fy
if(z>=x.length)return H.b(x,z)
t=x[z].gq()
z=this.Q.f.m()
z.J(v)
s=this.r.fr
r=6.283185307179586*this.cy
x=this.db
q=a.a.a
p=q*(s*(r*r))
x=q*(2*s*x*r+p)
this.fx=x
if(x!==0){x=1/x
this.fx=x}this.dx=p*x
x=this.Q.a.m()
x.h(this.ch)
x.n(y)
y=this.go
G.t(z,x,y)
x=this.Q.c.m()
z=this.k1
p=this.k2
o=y.a
n=o[1]
m=this.fx
o=o[0]
l=-p*o*n
x.bD(z+p*n*n+m,l,l,z+p*o*o+m)
m=this.k3
m.h(x)
m.c8()
m=this.k4
m.h(w)
m.p(0,y)
m.n(this.cx)
m.B(0,this.dx)
t*=0.98
z=a.a
x=this.dy
if(z.f){x.B(0,z.c)
z=u.a
p=x.a
u.sj(0,z[0]+this.k1*p[0])
u.sk(0,z[1]+this.k1*p[1])
t+=this.k2*y.w(x)}else x.N()
z=a.c
y=this.fy
if(y>=z.length)return H.b(z,y)
z[y].sq(t)
y=this.Q;--y.a.b;--y.c.b;--y.f.b},
ay:function(a){return!0},
az:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.fy
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.fy
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=this.Q.a.m()
y=this.go
y.a0(w,z)
z.p(0,x)
v=this.Q.a.m()
u=this.Q.a.m()
t=this.dy
u.h(t)
u.B(0,this.fx)
u.p(0,this.k4)
u.p(0,z)
u.O()
this.k3.d4(u,v)
u.h(t)
t.p(0,v)
s=a.a.a*this.fr
if(t.gV()>s*s)t.B(0,s/Math.sqrt(t.gV()))
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
if(z>=y.length)return H.b(y,z)
y[z].sq(w+r*v)
this.Q.a.b-=3}},
jB:{"^":"ao;ch,cx,cy,db,0dx,dy,fr,fx,fy,go,id,k1,k2,0k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a_,a3,a4,a1,W,U,a2,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){G.P(this.f.d,this.ch,a)},
ax:function(a){G.P(this.r.d,this.cx,a)},
aB:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
if(x>=w.length)return H.b(w,x)
v=w[x].gA()
x=a2.b
w=this.k4
if(w>=x.length)return H.b(x,w)
u=x[w].gv()
w=a2.c
x=this.k4
if(x>=w.length)return H.b(w,x)
t=w[x].gC()
x=a2.c
w=this.k4
if(w>=x.length)return H.b(x,w)
s=x[w].gq()
w=a2.b
x=this.r1
if(x>=w.length)return H.b(w,x)
r=w[x].gA()
x=a2.b
w=this.r1
if(w>=x.length)return H.b(x,w)
q=x[w].gv()
w=a2.c
x=this.r1
if(x>=w.length)return H.b(w,x)
p=w[x].gC()
x=a2.c
w=this.r1
if(w>=x.length)return H.b(x,w)
o=x[w].gq()
w=this.Q.f.m()
x=this.Q.f.m()
n=this.Q.a.m()
m=this.Q.a.m()
l=this.Q.a.m()
k=this.Q.a.m()
w.J(u)
x.J(q)
n.h(this.ch)
n.n(y)
G.t(w,n,l)
n.h(this.cx)
n.n(z)
G.t(x,n,k)
n.h(r)
n.n(v)
n.p(0,k)
n.n(l)
j=this.ry
i=this.x1
h=this.x2
g=this.y1
x=this.y2
G.t(w,this.cy,x)
m.h(n)
m.p(0,l)
this.a1=m.w(x)
z=k.w(x)
this.W=z
y=j+i
f=this.a1
z=y+h*f*f+g*z*z
this.a2=z
if(z>0)this.a2=1/z
z=this.a_
G.t(w,this.db,z)
m.h(n)
m.p(0,l)
this.a3=m.w(z)
k=k.w(z)
this.a4=k
l=this.a3
n=h*l
w=g*k
e=n+w
f=this.a1
d=this.W
c=n*f+w*d
b=h+g
if(b===0)b=1
a=h*f
a0=g*d
a1=a+a0
this.U.bp(y+n*l+w*k,e,c,e,b,a1,c,a1,y+a*f+a0*d)
this.k3=C.o
y=this.dy
y.sav(0,0)
this.fr=0
w=a2.a
if(w.f){y.B(0,w.c)
this.fr=this.fr*a2.a.c
w=this.Q.a.m()
m.h(x)
y=y.a
m.B(0,this.fr+y[2])
w.h(z)
w.B(0,y[0])
w.p(0,m)
m=y[0]
z=this.a3
x=y[1]
y=this.fr+y[2]
n=this.a1
l=this.a4
k=this.W
f=t.a
d=f[0]
w=w.a
t.sj(0,d-j*w[0])
t.sk(0,f[1]-j*w[1])
s-=h*(m*z+x+y*n)
n=p.a
p.sj(0,n[0]+i*w[0])
p.sk(0,n[1]+i*w[1])
o+=g*(m*l+x+y*k);--this.Q.a.b}else{y.N()
this.fr=0}z=a2.c
y=this.k4
if(y>=z.length)return H.b(z,y)
z[y].sq(s)
y=a2.c
z=this.r1
if(z>=y.length)return H.b(y,z)
y[z].sq(o)
z=this.Q
z.f.b-=2
z.a.b-=4},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=a.c
y=this.k4
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.k4
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.r1
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.r1
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
t=this.ry
s=this.x1
r=this.x2
q=this.y1
z=this.Q.a.m()
y=this.Q.a.m()
z.h(v)
z.n(x)
p=this.a_
y.sj(0,p.F(z)+this.a4*u-this.a3*w)
y.sk(0,u-w)
z=this.dy
o=this.Q.a.m()
y.O()
E.cs(this.U,o,y)
y.O()
y=z.a
n=y[0]
o=o.a
z.sj(0,n+o[0])
z.sk(0,y[1]+o[1])
y=this.Q.a.m()
y.h(p)
y.B(0,o[0])
p=o[0]
z=this.a3
o=o[1]
n=this.a4
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
if(y>=z.length)return H.b(z,y)
z[y].sq(w)
y=a.c
z=this.r1
if(z>=y.length)return H.b(y,z)
y[z].sq(u)
this.Q.a.b-=2},
ay:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=this.Q.f.m()
y=this.Q.f.m()
x=this.Q.a.m()
w=this.Q.a.m()
v=this.Q.a.m()
u=this.Q.a.m()
t=this.Q.a.m()
s=this.Q.a.m()
r=this.Q.a.m()
q=this.Q.b.m()
p=a2.b
o=this.k4
if(o>=p.length)return H.b(p,o)
n=p[o].gA()
o=a2.b
p=this.k4
if(p>=o.length)return H.b(o,p)
m=o[p].gv()
p=a2.b
o=this.r1
if(o>=p.length)return H.b(p,o)
l=p[o].gA()
o=a2.b
p=this.r1
if(p>=o.length)return H.b(o,p)
k=o[p].gv()
z.J(m)
y.J(k)
j=this.ry
i=this.x1
h=this.x2
g=this.y1
s.h(this.ch)
s.n(this.r2)
G.t(z,s,x)
s.h(this.cx)
s.n(this.rx)
G.t(y,s,w)
v.h(l)
v.p(0,w)
v.n(n)
v.n(x)
G.t(z,this.cy,u)
s.h(v)
s.p(0,x)
f=s.w(u)
e=w.w(u)
G.t(z,this.db,t)
s.h(v)
s.p(0,x)
d=s.w(t)
c=w.w(t)
r.sj(0,t.F(v))
r.sk(0,C.d.L(k-m,this.dx))
v=r.a
w=v[0]
v=v[1]
z=g*c
y=h*d
b=h+g
a=y+z
if(b===0)b=1
x=this.Q.c.m()
x.bD(j+i+y*d+z*c,a,a,b)
r.O()
E.eV(x,s,r)
r.O()
s=s.a
q.sj(0,s[0])
q.sk(0,s[1])
q.sav(0,0);--this.Q.c.b
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
if(t>=u.length)return H.b(u,t)
u[t].sv(m-h*(y*d+z+s*f))
t=a2.b
u=this.r1
if(u>=t.length)return H.b(t,u)
t[u].sv(k+g*(y*c+z+s*e))
s=this.Q
s.a.b-=7;--s.b.b
s.f.b-=2
return Math.abs(w)<=0.005&&Math.abs(v)<=0.03490658503988659}},
f4:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){G.P(this.f.d,this.dx,a)},
ax:function(a){G.P(this.r.d,this.dy,a)},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(x>=w.length)return H.b(w,x)
v=w[x].gA()
x=a.b
w=this.go
if(w>=x.length)return H.b(x,w)
u=x[w].gv()
w=a.c
x=this.go
if(x>=w.length)return H.b(w,x)
t=w[x].gC()
x=a.c
w=this.go
if(w>=x.length)return H.b(x,w)
s=x[w].gq()
w=a.b
x=this.id
if(x>=w.length)return H.b(w,x)
r=w[x].gA()
x=a.b
w=this.id
if(w>=x.length)return H.b(x,w)
q=x[w].gv()
w=a.c
x=this.id
if(x>=w.length)return H.b(w,x)
p=w[x].gC()
x=a.c
w=this.id
if(w>=x.length)return H.b(x,w)
o=x[w].gq()
w=this.Q.f.m()
x=this.Q.f.m()
n=this.Q.a.m()
w.J(u)
x.J(q)
n.h(this.dx)
n.n(y)
y=this.k3
G.t(w,n,y)
n.h(this.dy)
n.n(z)
z=this.k4
G.t(x,n,z)
n=this.k1
n.h(v)
n.p(0,y)
n.n(this.ch)
x=this.k2
x.h(r)
x.p(0,z)
x.n(this.cx)
m=Math.sqrt(n.gV())
l=Math.sqrt(x.gV())
if(m>0.05)n.B(0,1/m)
else n.N()
if(l>0.05)x.B(0,1/l)
else x.N()
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
w=this.Q.a.m()
i=this.Q.a.m()
w.h(n)
w.B(0,-this.fy)
i.h(x)
i.B(0,-this.fx*this.fy)
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
if(y>=z.length)return H.b(z,y)
z[y].sq(s)
y=a.c
z=this.id
if(z>=y.length)return H.b(y,z)
y[z].sq(o)
z=this.Q;--z.a.b
z.f.b-=2},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.c
y=this.go
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.go
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.id
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.id
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
z=this.Q.a.m()
y=this.Q.a.m()
t=this.Q.a.m()
s=this.Q.a.m()
r=this.k3
r.a0(w,z)
z.p(0,x)
q=this.k4
q.a0(u,y)
y.p(0,v)
p=this.k1
z=p.F(z)
o=this.fx
n=this.k2
y=n.F(y)
m=-this.y1*(-z-o*y)
this.fy+=m
t.h(p)
t.B(0,-m)
s.h(n)
s.B(0,-this.fx*m)
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
if(r>=q.length)return H.b(q,r)
q[r].sq(w+o*t)
t=a.c
o=this.id
if(o>=t.length)return H.b(t,o)
t[o].sq(u+p*s)
this.Q.a.b-=4},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=this.Q.f.m()
y=this.Q.f.m()
x=this.Q.a.m()
w=this.Q.a.m()
v=this.Q.a.m()
u=this.Q.a.m()
t=this.Q.a.m()
s=this.Q.a.m()
r=this.Q.a.m()
q=a.b
p=this.go
if(p>=q.length)return H.b(q,p)
o=q[p].gA()
p=a.b
q=this.go
if(q>=p.length)return H.b(p,q)
n=p[q].gv()
q=a.b
p=this.id
if(p>=q.length)return H.b(q,p)
m=q[p].gA()
p=a.b
q=this.id
if(q>=p.length)return H.b(p,q)
l=p[q].gv()
z.J(n)
y.J(l)
t.h(this.dx)
t.n(this.r1)
G.t(z,t,x)
t.h(this.dy)
t.n(this.r2)
G.t(y,t,w)
v.h(o)
v.p(0,x)
v.n(this.ch)
u.h(m)
u.p(0,w)
u.n(this.cx)
k=Math.sqrt(v.gV())
j=Math.sqrt(u.gV())
if(k>0.05)v.B(0,1/k)
else v.N()
if(j>0.05)u.B(0,1/j)
else u.N()
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
s.B(0,-e)
r.h(u)
r.B(0,-this.fx*e)
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
if(x>=w.length)return H.b(w,x)
w[x].sv(n+u*s)
s=a.b
u=this.id
if(u>=s.length)return H.b(s,u)
s[u].sv(l+y*r)
r=this.Q
r.f.b-=2
r.a.b-=7
return Math.abs(f)<0.005}},
dz:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a_,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(x>=w.length)return H.b(w,x)
v=w[x].gv()
x=a.c
w=this.k1
if(w>=x.length)return H.b(x,w)
u=x[w].gC()
w=a.c
x=this.k1
if(x>=w.length)return H.b(w,x)
t=w[x].gq()
x=a.b
w=this.k2
if(w>=x.length)return H.b(x,w)
s=x[w].gv()
w=a.c
x=this.k2
if(x>=w.length)return H.b(w,x)
r=w[x].gC()
x=a.c
w=this.k2
if(w>=x.length)return H.b(x,w)
q=x[w].gq()
w=this.Q.f.m()
x=this.Q.f.m()
p=this.Q.a.m()
w.J(v)
x.J(s)
p.h(this.ch)
p.n(y)
y=this.k3
G.t(w,p,y)
p.h(this.cx)
p.n(z)
z=this.k4
G.t(x,p,z)
o=this.rx
n=this.ry
m=this.x1
l=this.x2
p=m+l
k=p===0
x=o+n
w=y.a
j=w[1]
i=z.a
h=i[1]
g=-j
w=w[0]
i=i[0]
f=this.y1
e=f.a
f.bp(x+j*j*m+h*h*l,e[3],e[6],g*w*m-h*i*l,x+w*w*m+i*i*l,e[7],g*m-h*l,w*m+i*l,p)
this.y2=p
if(p>0)this.y2=1/p
if(!this.dx||k)this.db=0
if(this.fx&&!k){d=s-v-this.fy
x=this.id
w=this.go
if(Math.abs(x-w)<0.06981317007977318)this.a_=C.C
else if(d<=w){if(this.a_!==C.B)this.cy.sav(0,0)
this.a_=C.B}else if(d>=x){if(this.a_!==C.z)this.cy.sav(0,0)
this.a_=C.z}else{this.a_=C.o
this.cy.sav(0,0)}}else this.a_=C.o
x=this.cy
if(a.a.f){w=this.Q.a.m()
p=x.a
x.sj(0,p[0]*a.a.c)
x.sk(0,p[1]*a.a.c)
this.db=this.db*a.a.c
w.sj(0,p[0])
w.sk(0,p[1])
x=u.a
j=x[0]
i=w.a
u.sj(0,j-o*i[0])
u.sk(0,x[1]-o*i[1])
t-=m*(y.w(w)+this.db+p[2])
y=r.a
r.sj(0,y[0]+n*i[0])
r.sk(0,y[1]+n*i[1])
q+=l*(z.w(w)+this.db+p[2]);--this.Q.a.b}else{x.N()
this.db=0}z=a.c
y=this.k1
if(y>=z.length)return H.b(z,y)
z[y].sq(t)
y=a.c
z=this.k2
if(z>=y.length)return H.b(y,z)
y[z].sq(q)
z=this.Q;--z.a.b
z.f.b-=2},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=a.c
y=this.k1
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.k1
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.k2
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.k2
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
t=this.rx
s=this.ry
r=this.x1
q=this.x2
p=r+q===0
if(this.dx&&this.a_!==C.C&&!p){z=this.fr
y=this.y2
o=this.db
n=a.a.a*this.dy
z=Math.max(-n,Math.min(o+-y*(u-w-z),n))
this.db=z
m=z-o
w-=r*m
u+=q*m}z=this.Q.a.m()
y=this.fx&&this.a_!==C.o&&!p
l=this.k4
k=this.k3
j=this.y1
i=this.Q.a
if(y){y=i.m()
i=this.Q.b.m()
k.a0(w,z)
l.a0(u,y)
y.p(0,v)
y.n(x)
y.n(z)
h=y.a
i.cp(h[0],h[1],u-w)
h=this.Q.b.m()
E.eW(j,h,i)
h.O()
i=this.a_
if(i===C.C)this.cy.p(0,h)
else if(i===C.B){i=this.cy
g=i.a
if(g[2]+h.a[2]<0){f=this.Q.a.m()
e=j.a
f.t(e[6],e[7])
f.B(0,g[2])
f.n(y)
E.cs(j,z,f)
z=z.a
h.sj(0,z[0])
h.sk(0,z[1])
h.sav(0,-g[2])
i.sj(0,g[0]+z[0])
i.sk(0,g[1]+z[1])
i.sav(0,0);--this.Q.a.b}else i.p(0,h)}else if(i===C.z){i=this.cy
g=i.a
if(g[2]+h.a[2]>0){f=this.Q.a.m()
e=j.a
f.t(e[6],e[7])
f.B(0,g[2])
f.n(y)
E.cs(j,z,f)
z=z.a
h.sj(0,z[0])
h.sk(0,z[1])
h.sav(0,-g[2])
i.sj(0,g[0]+z[0])
i.sk(0,g[1]+z[1])
i.sav(0,0);--this.Q.a.b}else i.p(0,h)}z=this.Q.a.m()
h=h.a
z.t(h[0],h[1])
y=x.a
j=y[0]
i=z.a
x.sj(0,j-t*i[0])
x.sk(0,y[1]-t*i[1])
w-=r*(k.w(z)+h[2])
k=v.a
v.sj(0,k[0]+s*i[0])
v.sk(0,k[1]+s*i[1])
u+=q*(l.w(z)+h[2])
h=this.Q
h.a.b-=2
h.b.b-=2}else{y=i.m()
i=this.Q.a.m()
k.a0(w,z)
l.a0(u,y)
y.p(0,v)
y.n(x)
y.n(z)
y.O()
E.cs(j,i,y)
y=this.cy
j=y.a
z=j[0]
h=i.a
y.sj(0,z+h[0])
y.sk(0,j[1]+h[1])
j=x.a
x.sj(0,j[0]-t*h[0])
x.sk(0,j[1]-t*h[1])
w-=r*k.w(i)
k=v.a
v.sj(0,k[0]+s*h[0])
v.sk(0,k[1]+s*h[1])
u+=q*l.w(i)
this.Q.a.b-=2}z=a.c
y=this.k1
if(y>=z.length)return H.b(z,y)
z[y].sq(w)
y=a.c
z=this.k2
if(z>=y.length)return H.b(y,z)
y[z].sq(u);--this.Q.a.b},
ay:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=this.Q.f.m()
y=this.Q.f.m()
x=a0.b
w=this.k1
if(w>=x.length)return H.b(x,w)
v=x[w].gA()
w=a0.b
x=this.k1
if(x>=w.length)return H.b(w,x)
u=w[x].gv()
x=a0.b
w=this.k2
if(w>=x.length)return H.b(x,w)
t=x[w].gA()
w=a0.b
x=this.k2
if(x>=w.length)return H.b(w,x)
s=w[x].gv()
z.J(u)
y.J(s)
x=this.x1
w=this.x2
if(this.fx&&this.a_!==C.o&&x+w!==0){r=s-u-this.fy
q=this.a_
if(q===C.C){p=Math.max(-0.13962634015954636,Math.min(r-this.go,0.13962634015954636))
o=-this.y2*p
n=Math.abs(p)}else if(q===C.B){p=r-this.go
n=-p
p=Math.max(-0.13962634015954636,Math.min(p+0.03490658503988659,0))
o=-this.y2*p}else if(q===C.z){p=r-this.id
m=Math.max(0,Math.min(p-0.03490658503988659,0.13962634015954636))
o=-this.y2*m
n=p}else{n=0
o=0}u-=x*o
s+=w*o}else n=0
z.J(u)
y.J(s)
x=this.Q.a.m()
w=this.Q.a.m()
q=this.Q.a.m()
l=this.Q.a.m()
q.h(this.ch)
q.n(this.r1)
G.t(z,q,x)
q.h(this.cx)
q.n(this.r2)
G.t(y,q,w)
q.h(t)
q.p(0,w)
q.n(v)
q.n(x)
k=Math.sqrt(q.gV())
j=this.rx
i=this.ry
h=this.x1
g=this.x2
y=this.Q.c.m()
z=j+i
f=x.a
e=f[1]
d=w.a
c=d[1]
f=f[0]
d=d[0]
b=g*d
a=-h*f*e-b*c
y.bD(z+h*e*e+g*c*c,a,a,z+h*f*f+b*d)
E.eV(y,l,q)
l.O()
q=v.a
y=q[0]
d=l.a
v.sj(0,y-j*d[0])
v.sk(0,q[1]-j*d[1])
x=x.w(l)
q=t.a
t.sj(0,q[0]+i*d[0])
t.sk(0,q[1]+i*d[1])
l=w.w(l)
w=this.Q
w.a.b-=4;--w.c.b
w=a0.b
d=this.k1
if(d>=w.length)return H.b(w,d)
w[d].sv(u-h*x)
x=a0.b
d=this.k2
if(d>=x.length)return H.b(x,d)
x[d].sv(s+g*l)
this.Q.f.b-=2
return k<=0.005&&n<=0.03490658503988659},
aw:function(a){G.P(this.f.d,this.ch,a)},
ax:function(a){G.P(this.r.d,this.cx,a)},
dj:function(a,b){if(a!==this.go||b!==this.id){this.f.ae(!0)
this.r.ae(!0)
this.cy.sav(0,0)
this.go=a
this.id=b}}},
dA:{"^":"cO;f,r,x,y,z,Q,ch,cx,cy,0a,0b,0c,0d,e"},
jH:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
if(x>=w.length)return H.b(w,x)
v=w[x].gA()
x=a.b
w=this.dy
if(w>=x.length)return H.b(x,w)
u=x[w].gv()
w=a.c
x=this.dy
if(x>=w.length)return H.b(w,x)
t=w[x].gC()
x=a.c
w=this.dy
if(w>=x.length)return H.b(x,w)
s=x[w].gq()
w=a.b
x=this.fr
if(x>=w.length)return H.b(w,x)
r=w[x].gA()
x=a.b
w=this.fr
if(w>=x.length)return H.b(x,w)
q=x[w].gv()
w=a.c
x=this.fr
if(x>=w.length)return H.b(w,x)
p=w[x].gC()
x=a.c
w=this.fr
if(w>=x.length)return H.b(x,w)
o=x[w].gq()
w=this.Q.f.m()
x=this.Q.f.m()
n=this.Q.a.m()
w.J(u)
x.J(q)
n.h(this.ch)
n.n(y)
y=this.fy
G.t(w,n,y)
n.h(this.cx)
n.n(z)
z=this.go
G.t(x,n,z)
n=this.fx
n.h(r)
n.p(0,z)
n.n(v)
n.n(y)
x=Math.sqrt(n.gV())
this.db=x
if(x-this.cy>0)this.rx=C.z
else this.rx=C.o
if(x>0.005)n.B(0,1/x)
else{n.N()
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
if(y>=z.length)return H.b(z,y)
z[y].sq(s)
y=a.c
z=this.fr
if(z>=y.length)return H.b(y,z)
y[z].sq(o)},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.dy
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.dy
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.fr
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.fr
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
z=this.Q.a.m()
y=this.Q.a.m()
t=this.Q.a.m()
s=this.fy
s.a0(w,z)
z.p(0,x)
r=this.go
r.a0(u,y)
y.p(0,v)
q=this.db-this.cy
p=this.fx
t.h(y)
t.n(z)
o=p.F(t)
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
if(i>=j.length)return H.b(j,i)
j[i].sq(w-p*(z*k-s*l))
s=a.c
z=this.fr
if(z>=s.length)return H.b(s,z)
s[z].sq(u+y*(t*k-r*l))},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.b
y=this.dy
if(y>=z.length)return H.b(z,y)
x=z[y].gA()
y=a.b
z=this.dy
if(z>=y.length)return H.b(y,z)
w=y[z].gv()
z=a.b
y=this.fr
if(y>=z.length)return H.b(z,y)
v=z[y].gA()
y=a.b
z=this.fr
if(z>=y.length)return H.b(y,z)
u=y[z].gv()
z=this.Q.f.m()
y=this.Q.f.m()
t=this.Q.a.m()
s=this.Q.a.m()
r=this.Q.a.m()
q=this.Q.a.m()
z.J(w)
y.J(u)
q.h(this.ch)
q.n(this.id)
G.t(z,q,s)
q.h(this.cx)
q.n(this.k1)
G.t(y,q,r)
t.h(v)
t.p(0,r)
t.n(x)
t.n(s)
p=t.a7()
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
if(j>=k.length)return H.b(k,j)
k[j].sv(w-t*(q*l-s*m))
s=a.b
q=this.fr
if(q>=s.length)return H.b(s,q)
s[q].sv(u+y*(z*l-r*m))
return p-this.cy<0.005},
aw:function(a){G.P(this.f.d,this.ch,a)},
ax:function(a){G.P(this.r.d,this.cx,a)}},
kt:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){G.P(this.f.d,this.db,a)},
ax:function(a){G.P(this.r.d,this.dx,a)},
aB:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
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
if(x>=w.length)return H.b(w,x)
v=w[x].gv()
x=a9.c
w=this.fy
if(w>=x.length)return H.b(x,w)
u=x[w].gC()
w=a9.c
x=this.fy
if(x>=w.length)return H.b(w,x)
t=w[x].gq()
x=a9.b
w=this.go
if(w>=x.length)return H.b(x,w)
s=x[w].gv()
w=a9.c
x=this.go
if(x>=w.length)return H.b(w,x)
r=w[x].gC()
x=a9.c
w=this.go
if(w>=x.length)return H.b(x,w)
q=x[w].gq()
w=this.Q.f.m()
x=this.Q.f.m()
p=this.Q.a.m()
w.J(v)
x.J(s)
p.h(this.db)
p.n(y)
y=this.id
G.t(w,p,y)
p.h(this.dx)
p.n(z)
z=this.k1
G.t(x,p,z)
o=this.k4
n=this.r1
m=this.r2
l=this.rx
p=this.Q.d.m()
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
p.bp(x+k*k*m+i*i*l,g[3],g[6],h*w*m-i*j*l,x+w*w*m+j*j*l,g[7],h*m-i*l,w*m+j*l,f)
x=this.ry
if(this.ch>0){e=g[0]
d=g[3]
c=g[1]
b=g[4]
a=e*b-d*c
if(a!==0)a=1/a
w=-a
x.bp(a*b,w*c,0,w*d,a*e,0,0,0,0)
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
x.bp(a*(k-i*i),a*(h*i-a6),a*(a7-h*w),j[1],a*(a8*p-h*h),a*(h*a5-a8*i),j[2],j[5],a*(a8*w-a5*a5))
this.fr=0
this.cy=0}x=this.fx
if(a9.a.f){w=this.Q.a.m()
x.B(0,a9.a.c)
x=x.a
w.t(x[0],x[1])
p=u.a
k=p[0]
j=w.a
u.sj(0,k-o*j[0])
u.sk(0,p[1]-o*j[1])
t-=m*(y.w(w)+x[2])
y=r.a
r.sj(0,y[0]+n*j[0])
r.sk(0,y[1]+n*j[1])
q+=l*(z.w(w)+x[2]);--this.Q.a.b}else x.N()
z=a9.c
y=this.fy
if(y>=z.length)return H.b(z,y)
z[y].sq(t)
y=a9.c
z=this.go
if(z>=y.length)return H.b(y,z)
y[z].sq(q)
z=this.Q;--z.a.b
z.f.b-=2;--z.d.b},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=a.c
y=this.fy
if(y>=z.length)return H.b(z,y)
x=z[y].gC()
y=a.c
z=this.fy
if(z>=y.length)return H.b(y,z)
w=y[z].gq()
z=a.c
y=this.go
if(y>=z.length)return H.b(z,y)
v=z[y].gC()
y=a.c
z=this.go
if(z>=y.length)return H.b(y,z)
u=y[z].gq()
t=this.k4
s=this.r1
r=this.r2
q=this.rx
z=this.Q.a.m()
y=this.Q.a.m()
p=this.Q.a.m()
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
m.sav(0,d+c)
w-=r*c
u+=q*c
j.a0(u,z)
l.a0(w,p)
z.p(0,v)
z.n(x)
z.n(p)
p=i[1]
z=z.a
y.sk(0,p*z[0]+i[4]*z[1])
y.sj(0,i[0]*z[0]+i[3]*z[1])
y.O()
z=e[0]
i=y.a
m.sj(0,z+i[0])
m.sk(0,e[1]+i[1])
x.sj(0,n[0]-t*i[0])
x.sk(0,n[1]-t*i[1])
w-=r*l.w(y)
v.sj(0,o[0]+s*i[0])
v.sk(0,o[1]+s*i[1])
u+=q*j.w(y)}else{l.a0(w,p)
j.a0(u,z)
z.p(0,v)
z.n(x)
z.n(p)
p=this.Q.b.m()
z=z.a
p.cp(z[0],z[1],k)
k=this.Q.b.m()
p=p.a
k.sj(0,p[0]*i[0]+p[1]*i[3]+p[2]*i[6])
k.sk(0,p[0]*i[1]+p[1]*i[4]+p[2]*i[7])
k.sav(0,p[0]*i[2]+p[1]*i[5]+p[2]*i[8])
k.O()
m.p(0,k)
k=k.a
y.t(k[0],k[1])
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
if(y>=z.length)return H.b(z,y)
z[y].sq(w)
y=a.c
z=this.go
if(z>=y.length)return H.b(y,z)
y[z].sq(u)
this.Q.a.b-=3},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=a.b
y=this.fy
if(y>=z.length)return H.b(z,y)
x=z[y].gA()
y=a.b
z=this.fy
if(z>=y.length)return H.b(y,z)
w=y[z].gv()
z=a.b
y=this.go
if(y>=z.length)return H.b(z,y)
v=z[y].gA()
y=a.b
z=this.go
if(z>=y.length)return H.b(y,z)
u=y[z].gv()
z=this.Q.f.m()
y=this.Q.f.m()
t=this.Q.a.m()
s=this.Q.a.m()
r=this.Q.a.m()
z.J(w)
y.J(u)
q=this.k4
p=this.r1
o=this.r2
n=this.rx
t.h(this.db)
t.n(this.k2)
G.t(z,t,s)
t.h(this.dx)
t.n(this.k3)
G.t(y,t,r)
t=this.Q.d.m()
y=this.Q.a.m()
z=this.Q.a.m()
m=q+p
l=s.a
k=l[1]
j=r.a
i=j[1]
h=-k
l=l[0]
j=j[0]
g=t.a
t.bp(m+k*k*o+i*i*n,g[3],g[6],h*l*o-i*j*n,m+l*l*o+j*j*n,g[7],h*o-i*n,l*o+j*n,o+n)
m=x.a
l=v.a
if(this.ch>0){y.h(v)
y.p(0,r)
y.n(x)
y.n(s)
f=Math.sqrt(y.gV())
E.cs(t,z,y)
z.O()
y=m[0]
t=z.a
x.sj(0,y-q*t[0])
x.sk(0,m[1]-q*t[1])
w-=o*s.w(z)
v.sj(0,l[0]+p*t[0])
v.sk(0,l[1]+p*t[1])
u+=n*r.w(z)
e=0}else{y.h(v)
y.p(0,r)
y.n(x)
y.n(s)
d=u-w-this.dy
f=Math.sqrt(y.gV())
e=Math.abs(d)
k=this.Q.b.m()
j=this.Q.b.m()
y=y.a
k.cp(y[0],y[1],d)
E.eW(t,j,k)
j.O()
j=j.a
z.t(j[0],j[1])
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
if(y>=z.length)return H.b(z,y)
z[y].sv(w)
y=a.b
z=this.go
if(z>=y.length)return H.b(y,z)
y[z].sv(u)
z=this.Q
z.a.b-=5
z.f.b-=2;--z.d.b
return f<=0.005&&e<=0.03490658503988659}},
ku:{"^":"ao;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a_,a3,a4,a1,W,U,a2,a9,ab,ac,af,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
aw:function(a){G.P(this.f.d,this.cy,a)},
ax:function(a){G.P(this.r.d,this.db,a)},
aB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(s>=t.length)return H.b(t,s)
r=t[s].gA()
s=a.b
t=this.k2
if(t>=s.length)return H.b(s,t)
q=s[t].gv()
t=a.c
s=this.k2
if(s>=t.length)return H.b(t,s)
p=t[s].gC()
s=a.c
t=this.k2
if(t>=s.length)return H.b(s,t)
o=s[t].gq()
t=a.b
s=this.k3
if(s>=t.length)return H.b(t,s)
n=t[s].gA()
s=a.b
t=this.k3
if(t>=s.length)return H.b(s,t)
m=s[t].gv()
t=a.c
s=this.k3
if(s>=t.length)return H.b(t,s)
l=t[s].gC()
s=a.c
t=this.k3
if(t>=s.length)return H.b(s,t)
k=s[t].gq()
t=this.Q.f.m()
s=this.Q.f.m()
j=this.Q.a.m()
t.J(q)
s.J(m)
j.h(this.cy)
j.n(y)
y=this.ab
G.t(t,j,y)
j.h(this.db)
j.n(z)
z=this.ac
G.t(s,j,z)
s=this.af
s.h(n)
s.p(0,z)
s.n(r)
s.n(y)
i=this.y1
G.aW(t,this.dy,i)
j.h(s)
j.p(0,y)
this.a3=j.w(i)
h=z.w(i)
this.a4=h
u=w+u
w=this.a3
h=u+x*w*w+v*h*h
this.a1=h
if(h>0)this.a1=1/h
this.U=0
this.a2=0
this.a9=0
if(this.ch>0){w=this.x2
G.aW(t,this.dx,w)
j.h(s)
j.p(0,y)
this.y2=j.w(w)
z=z.w(w)
this.a_=z
j=this.y2
g=u+x*j*j+v*z*z
if(g>0){this.U=1/g
f=s.F(w)
e=6.283185307179586*this.ch
z=this.U
y=this.cx
d=z*e*e
c=a.a.a
y=c*(2*z*y*e+c*d)
this.a9=y
if(y>0){z=1/y
this.a9=z}else z=y
this.a2=f*c*d*z
z=g+z
this.U=z
if(z>0)this.U=1/z}}else this.fy=0
this.W=0
this.fx=0
if(a.a.f){z=this.Q.a.m()
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
i=this.a3
w=this.fy
y=this.y2
v=this.fx
u=this.a4
t=this.a_
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
if(y>=z.length)return H.b(z,y)
z[y].sq(o)
y=a.c
z=this.k3
if(z>=y.length)return H.b(y,z)
y[z].sq(k)},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.r2
y=this.rx
x=this.ry
w=this.x1
v=a.c
u=this.k2
if(u>=v.length)return H.b(v,u)
t=v[u].gC()
u=a.c
v=this.k2
if(v>=u.length)return H.b(u,v)
s=u[v].gq()
v=a.c
u=this.k3
if(u>=v.length)return H.b(v,u)
r=v[u].gC()
u=a.c
v=this.k3
if(v>=u.length)return H.b(u,v)
q=u[v].gq()
v=this.Q.a.m()
u=this.Q.a.m()
p=this.x2
v.h(r)
v.n(t)
o=p.F(v)
n=this.a_
m=this.y2
l=this.U
k=this.a2
j=this.a9
i=this.fy
h=-l*(o+n*q-m*s+k+j*i)
this.fy=i+h
p=p.a
u.sj(0,h*p[0])
u.sk(0,h*p[1])
p=this.y2
i=this.a_
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
k=this.W
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
v=i.F(v)
k=this.a4
n=this.a3
h=-this.a1*(v+k*q-n*s)
this.fr+=h
i=i.a
u.sj(0,h*i[0])
u.sk(0,h*i[1])
i=this.a3
u=this.a4
t.sj(0,j[0]-z*m[0])
t.sk(0,j[1]-z*m[1])
r.sj(0,p[0]+y*m[0])
r.sk(0,p[1]+y*m[1])
this.Q.a.b-=2
m=a.c
p=this.k2
if(p>=m.length)return H.b(m,p)
m[p].sq(s-x*(h*i))
i=a.c
p=this.k3
if(p>=i.length)return H.b(i,p)
i[p].sq(q+w*(h*u))},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.b
y=this.k2
if(y>=z.length)return H.b(z,y)
x=z[y].gA()
y=a.b
z=this.k2
if(z>=y.length)return H.b(y,z)
w=y[z].gv()
z=a.b
y=this.k3
if(y>=z.length)return H.b(z,y)
v=z[y].gA()
y=a.b
z=this.k3
if(z>=y.length)return H.b(y,z)
u=y[z].gv()
z=this.Q.f.m()
y=this.Q.f.m()
t=this.Q.a.m()
z.J(w)
y.J(u)
t.h(this.cy)
t.n(this.k4)
s=this.ab
G.aW(z,t,s)
t.h(this.db)
t.n(this.r1)
r=this.ac
G.aW(y,t,r)
y=this.af
y.h(v)
y.n(x)
y.p(0,r)
y.n(s)
q=this.Q.a.m()
G.aW(z,this.dy,q)
t.h(y)
t.p(0,s)
p=t.w(q)
o=r.w(q)
n=y.F(q)
y=this.r2
r=this.rx
t=this.ry
s=this.a3
z=this.x1
m=this.a4
l=y+r+t*s*s+z*m*m
k=l!==0?-n/l:0
z=this.Q.a.m()
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
if(y>=t.length)return H.b(t,y)
t[y].sv(w-q*(k*p))
q=a.b
y=this.k3
if(y>=q.length)return H.b(q,y)
q[y].sv(u+z*(k*o))
return Math.abs(n)<=0.005}},
l:{"^":"c;a,b,c,d,e",
aN:function(a){this.a=this.a*0.95+a*0.05
this.b=this.b*0.8+a*0.2
this.c=Math.min(a,this.c)
this.d=Math.max(a,this.d)},
u:function(a){return H.i(this.b)+" ("+H.i(this.a)+") ["+H.i(this.c)+","+H.i(this.d)+"]"}},
br:{"^":"c;a,b,c,d,e,f,r,x,y,z"},
ag:{"^":"c;0a,0b,0c",
sce:function(a){this.b=H.k(a,"$isd",[V.b1],"$asd")},
sci:function(a){this.c=H.k(a,"$isd",[V.bN],"$asd")}},
ah:{"^":"c;a,b,c,d,e,f"},
bx:{"^":"c;a,0b,0c,0d,e,f,r,x,0y,0z,0Q,ch,cx,cy,db,dx,dy,0fr,0fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a_,a3,a4,a1,W,U,a2,a9,ab,ac,af,an,aj,ak,aq,aF,aG",
sfg:function(a){this.y1=H.k(a,"$isd",[V.aj],"$asd")},
H:function(a,b,c){var z,y,x,w,v,u,t
H.k(a,"$isaJ",[V.aw],"$asaJ")
z=new V.cJ(!1)
z.seb(a)
z.b=!0
y=this.fy
x=b.a
w=y.length
if(x>=w)return H.b(y,x)
v=y[x]
u=c.a;(v&&C.a).l(v,u,z)
if(b!==c){t=new V.cJ(!1)
t.seb(a)
t.b=!1
if(u>=w)return H.b(y,u)
y=y[u];(y&&C.a).l(y,x,t)}},
iz:function(a,b,c,d){var z,y,x,w,v,u
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
if(x){u=w.m()
u.aT(a,b,c,d)
return u}else{u=w.m()
u.aT(c,d,a,b)
return u}}else return},
R:function(a){var z,y,x,w,v,u,t,s,r,q,p
if((this.a&2)===2)return
z=new E.a(new Float64Array(2))
y=new G.o(0,1)
x=new Float64Array(2)
w=new E.a(new Float64Array(2))
v=new E.a(new Float64Array(2))
u=new E.a(new Float64Array(2))
t=new G.D(w,v,u,0,0,0)
s=new E.a(new Float64Array(2))
r=new E.a(new Float64Array(2))
q=new Float64Array(2)
p=new V.aj(C.f,0,0,new G.v(z,y),new G.v(new E.a(x),new G.o(0,1)),t,s,0,r,0,this,0,0,0,0,0,0,0,0,0,new V.ab(0.2,0,0,!1,new V.a7(1,65535,0)),new V.j1(0,new E.a(q),0),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)))
if(a.ch){p.b=8
x=8}else x=0
if(a.Q){x|=16
p.b=x}x|=4
p.b=x
x|=2
p.b=x
p.b=x|32
z.h(a.c)
y.J(a.d)
w.N()
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
r.N()
r=a.a
p.a=r
if(r===C.j){p.fr=1
p.fx=1}p.k4=a.b
z=this.c
p.cx=z
if(z!=null)z.ch=p
this.c=p;++this.e
return p},
b0:function(a){var z,y,x,w,v,u,t,s
if((this.a&2)===2)return
z=V.iO(this,a)
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
hJ:function(){var z,y
for(z=this.c;z!=null;z=z.cx){y=z.y.a
y[0]=0
y[1]=0
z.z=0}},
i1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
if((s&32)!==32){z.aO(0.5,0.5,0.3)
this.bJ(q,v,z,x)}else{p=w.a
if(p===C.f){z.aO(0.5,0.9,0.3)
this.bJ(q,v,z,x)}else if(p===C.U){z.aO(0.5,0.5,0.9)
this.bJ(q,v,z,x)}else if((s&2)!==2){z.aO(0.5,0.5,0.5)
this.bJ(q,v,z,x)}else{z.aO(0.9,0.7,0.7)
this.bJ(q,v,z,x)}}}}z=this.fx
v=this.Q.a
o=z.z
if(o!==0){n=z.r/2
m=z.cy.a
l=z.fx.a!=null?z.eP():null
z=this.Q
if((v&128)!==0)z.i3(m,n,l,o)
else z.i2(m,n,l,o)}}if((y&4)!==0)for(k=this.d,z=this.ch.a,v=this.k2,u=z.a,t=u.length;k!=null;k=k.c){j=k.f
i=k.r
h=j.d.a
g=i.d.a
s=z.b
p=s+1
z.b=p
if(s<0||s>=t)return H.b(u,s)
s=u[s]
z.b=p+1
if(p<0||p>=t)return H.b(u,p)
p=u[p]
k.aw(s)
k.ax(p)
v.aO(0.5,0.8,0.8)
switch(k.a){case C.J:this.Q.aE(s,p,v)
break
case C.Y:H.y(k,"$isf4")
f=k.ch
e=k.cx
this.Q.aE(f,s,v)
this.Q.aE(e,p,v)
this.Q.aE(f,e,v)
break
case C.K:this.Q.aE(h,g,v)
break
case C.I:case C.Z:break
default:this.Q.aE(h,s,v)
this.Q.aE(s,p,v)
this.Q.aE(g,p,v)}z.b-=2}if((y&16)!==0){z=this.k2
z.aO(0.3,0.9,0.9)
for(d=this.b.b,v=this.k4,u=this.r1;d!=null;d=d.c){c=d.f
b=d.r
t=d.x
s=c.r
if(t>=s.length)return H.b(s,t)
s[t].gbc().d9(v)
t=d.y
s=b.r
if(t>=s.length)return H.b(s,t)
s[t].gbc().d9(u)
this.Q.aE(v,u,z)}}if((y&8)!==0){z=this.k2
z.aO(0.9,0.3,0.9)
for(w=this.c,v=this.r2,u=v.a,t=[E.a];w!=null;w=w.cx){if((w.b&32)!==32)continue
for(q=w.cy;q!=null;q=q.b)for(a=0;a<q.x;++a){s=q.r
if(a>=s.length)return H.b(s,a)
a0=s[a]
s=this.b.a
p=a0.d
s=s.a.b
if(p<0||p>=s.length)return H.b(s,p)
a1=s[p].gbc()
if(!u.bf(4))u.l(0,4,v.dc(4))
s=u.i(0,4)
p=J.a4(s)
a2=a1.a.a
p.i(s,0).t(a2[0],a2[1])
a3=a1.b.a
p.i(s,1).t(a3[0],a2[1])
p.i(s,2).t(a3[0],a3[1])
p.i(s,3).t(a2[0],a3[1])
a3=this.Q
a3.toString
a3.c_(H.k(s,"$isd",t,"$asd"),4,z)
a3.c.stroke()}}}if((y&32)!==0){a4=new G.a3(255,0,0)
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
t.bZ(v,0.1*t.b.c,a4)
t.c.stroke()}}if((y&64)!==0)this.b.a.a.i4(this.Q)
this.Q.toString},
cq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
z.aT(x,v.c,this.f,v.e)
for(y=this.c;y!=null;y=y.cx)y.b&=4294967294
for(u=this.b.b;u!=null;u=u.c)u.a&=4294967294
for(t=this.d;t!=null;t=t.c)t.x=!1
s=this.e
if(this.y1.length<s){x=new Array(s)
x.fixed$length=Array
this.sfg(H.f(x,[V.aj]))}for(r=this.c,x=this.r;r!=null;r=r.cx){v=r.b
if((v&1)===1)continue
if((v&2)!==2||(v&32)!==32)continue
if(r.a===C.f)continue
z.r=0
z.y=0
z.x=0
C.a.l(this.y1,0,r)
r.b|=1
for(q=1;q>0;){v=this.y1;--q
if(q>=v.length)return H.b(v,q)
y=v[q]
v=z.r
y.c=v
p=z.b;(p&&C.a).l(p,v,y);++z.r
y.ae(!0)
if(y.a===C.f)continue
for(o=y.dy;o!=null;o=o.d){n=o.b
v=n.a
if((v&1)===1)continue
if((v&4)!==4||(v&2)!==2)continue
m=n.f.z
l=n.r.z
if(m||l)continue
v=z.c;(v&&C.a).l(v,z.y++,n)
n.a|=1
k=o.a
if((k.b&1)===1)continue
j=q+1
C.a.l(this.y1,q,k)
k.b|=1
q=j}for(i=y.dx;i!=null;i=i.d){v=i.b
if(v.x)continue
k=i.a
if((k.b&32)!==32)continue
p=z.d;(p&&C.a).l(p,z.x++,v)
i.b.x=!0
if((k.b&1)===1)continue
j=q+1
C.a.l(this.y1,q,k)
k.b|=1
q=j}}z.eX(this.fr,a,x,this.x)
for(h=0;h<z.r;++h){v=z.b
if(h>=v.length)return H.b(v,h)
y=v[h]
if(y.a===C.f)y.b&=4294967294}}z=this.fr.f
z.aN(z.e)
z=this.fr.r
z.aN(z.e)
z=this.fr.x
z.aN(z.e)
z=this.y2.a
z.b5(0)
for(y=this.c;y!=null;y=y.cx){if((y.b&1)===0)continue
if(y.a===C.f)continue
y.dq()}x=this.b
x.a.d6(x)
x=this.fr.y
z=z.gb1()
v=$.m
if(typeof v!=="number")return H.N(v)
x.aN(C.c.aQ(z*1000,v))},
f9:function(b6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
z=this.a_
z.aT(64,32,0,this.b.e)
if(this.dy){for(y=this.c;y!=null;y=y.cx){y.b&=4294967294
y.f.f=0}for(x=this.b.b;x!=null;x=x.c){x.a&=4294967262
x.Q=0
x.ch=1}}for(w=this.a1,v=this.W,u=this.U,t=this.a2,s=this.a4,r=this.a3,q=r.a,p=r.b,o=r.c,n=r.d,m=this.ch;!0;){for(x=this.b.b,l=null,k=1;x!=null;x=x.c){j=x.a
if((j&4)!==4)continue
if(x.Q>8)continue
if((j&32)!==0)i=x.ch
else{h=x.f
g=x.r
if(h.z||g.z)continue
f=h.c
e=g.c
d=f.a
c=e.a
j=f.b
b=(j&2)===2&&d!==C.f
a=e.b
a0=(a&2)===2&&c!==C.f
if(!b&&!a0)continue
a1=(j&8)===8||d!==C.j
a2=(a&8)===8||c!==C.j
if(!a1&&!a2)continue
j=f.f
a3=j.f
a=e.f
a4=a.f
if(a3<a4){j.bd(a4)
a3=a4}else if(a4<a3)a.bd(a3)
a5=x.x
a6=x.y
q.bR(h.d,a5)
p.bR(g.d,a6)
o.T(j)
n.T(a)
r.e=1
m.fx.iQ(s,r)
a7=s.b
i=s.a===C.R?Math.min(a3+(1-a3)*a7,1):1
x.ch=i
x.a|=32}if(i<k){k=i
l=x}}if(l==null||0.9999988079071045<k){this.dy=!0
break}h=l.f
g=l.r
f=h.c
e=g.c
j=f.f
u.T(j)
a=e.f
t.T(a)
f.bd(k)
e.bd(k)
l.d5(this.b.e)
a8=l.a&=4294967263;++l.Q
if((a8&4)!==4||(a8&2)!==2){l.a=a8&4294967291
j.T(u)
a.T(t)
f.br()
e.br()
continue}f.ae(!0)
e.ae(!0)
z.r=0
z.y=0
z.x=0
f.c=0
j=z.b;(j&&C.a).l(j,0,f)
j=++z.r
e.c=j
a=z.b;(a&&C.a).l(a,j,e);++z.r
j=z.c;(j&&C.a).l(j,z.y++,l)
f.b|=1
e.b|=1
l.a|=1
C.a.l(v,0,f)
C.a.l(v,1,e)
for(a9=0;a9<2;++a9){b0=v[a9]
if(b0.a===C.j)for(b1=b0.dy;b1!=null;b1=b1.d){if(z.r===z.z)break
if(z.y===z.Q)break
b2=b1.b
if((b2.a&1)!==0)continue
b3=b1.a
if(b3.a===C.j&&(b0.b&8)!==8&&(b3.b&8)!==8)continue
b4=b2.f.z
b5=b2.r.z
if(b4||b5)continue
j=b3.f
u.T(j)
if((b3.b&1)===0)b3.bd(k)
b2.d5(this.b.e)
a=b2.a
if((a&4)!==4){j.T(u)
b3.br()
continue}if((a&2)!==2){j.T(u)
b3.br()
continue}b2.a=a|1
j=z.c;(j&&C.a).l(j,z.y++,b2)
j=b3.b
if((j&1)!==0)continue
b3.b=j|1
if(b3.a!==C.f)b3.ae(!0)
j=z.r
b3.c=j
a=z.b;(a&&C.a).l(a,j,b3);++z.r}}j=(1-k)*b6.a
w.a=j
w.b=1/j
w.c=1
w.e=20
w.d=b6.d
w.f=!1
z.fa(w,f.c,e.c)
for(a9=0;a9<z.r;++a9){j=z.b
if(a9>=j.length)return H.b(j,a9)
b0=j[a9]
b0.b&=4294967294
if(b0.a!==C.j)continue
b0.dq()
for(b1=b0.dy;b1!=null;b1=b1.d)b1.b.a&=4294967262}j=this.b
j.a.d6(j)}},
bJ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q
z=a.d
switch(z.a){case C.e:H.y(z,"$isau")
y=this.aj
G.A(b,z.c,y)
x=z.b
z=b.b
this.ak.t(z.b,z.a)
z=this.Q
if(d)z.i_(y,x,c)
else{z.bZ(y,x*z.b.c,c)
z.c.fill()}break
case C.h:H.y(z,"$isbq")
w=z.f
v=this.aG.eJ(8)
for(y=J.a4(v),u=0;u<w;++u){t=z.d
if(u>=8)return H.b(t,u)
G.A(b,t[u],y.i(v,u))}z=this.Q
y=[E.a]
if(d){z.toString
z.c_(H.k(v,"$isd",y,"$asd"),w,c)
z.c.stroke()}else{z.toString
z.c_(H.k(v,"$isd",y,"$asd"),w,c)
z.c.fill()}break
case C.k:H.y(z,"$isc0")
y=this.aq
G.A(b,z.c,y)
t=this.aF
G.A(b,z.d,t)
this.Q.aE(y,t,c)
break
case C.l:H.y(z,"$isdj")
s=z.gfY()
v=z.gcM()
z=this.aq
G.A(b,v.i(0,0),z)
for(y=this.aF,r=y.a,t=z.a,u=1;C.c.M(u,s);++u){G.A(b,v.i(0,u),y)
this.Q.aE(z,y,c)
q=this.Q
q.bZ(z,0.05*q.b.c,c)
q.c.stroke()
t[1]=r[1]
t[0]=r[0]}break
default:break}},
E:{
bA:function(a,b){var z,y,x,w
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[[P.d,V.cJ]])
for(z=[V.cJ],x=0;x<a;++x){w=new Array(b)
w.fixed$length=Array
C.a.l(y,x,H.f(w,z))}return y}}},
by:{"^":"c;0a,0b",
eE:function(a){var z,y
z=this.a.a.b
if(a<0||a>=z.length)return H.b(z,a)
y=H.y(z[a].gaW(),"$isbg")
return this.b.jt(y.b)},
$isk3:1},
bz:{"^":"c;a,b,c,0d,0e"},
nz:{"^":"c;"},
ae:{"^":"c;a",
sv:function(a){this.a[3]=H.p(a)},
gv:function(){return this.a[3]}},
nA:{"^":"c;"},
bo:{"^":"c;a,b,c,0d,0aW:e<"},
nB:{"^":"c;"},
x:{"^":"c;0a,b,c,$ti",
sed:function(a,b){this.a=H.k(b,"$isd",this.$ti,"$asd")}},
bn:{"^":"c;0a,0b"},
nJ:{"^":"c;"},
nK:{"^":"c;"},
f3:{"^":"c;",$isa5:1,
$asa5:function(){return[V.f3]}},
bl:{"^":"c;a,b,c"},
bd:{"^":"c;0a,0b,0c,d,e"},
bw:{"^":"c;0a,b",$isjC:1},
b9:{"^":"c;0a,0b,0c"},
bs:{"^":"c;0a,0b,c,d,e,f",$isjC:1},
bp:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,id,k1,0k2,k3,k4,0r1,r2,rx,0ry,x1,x2,0y1,y2,a_,0a3,a4,0a1,0W,0U,0a2,0a9,0ab,0ac,0af,0an,0aj,0ak,0aq,aF,aG,jd,bK,je,jf,jg,jh,i6,i7,i8,i9,ia,ib,ji",
sb4:function(a){this.cy=H.k(a,"$isx",[E.a],"$asx")},
sb7:function(a){this.db=H.k(a,"$isx",[E.a],"$asx")},
shC:function(a){this.dy=H.k(a,"$isd",[E.a],"$asd")},
sb_:function(a){this.fx=H.k(a,"$isx",[V.ae],"$asx")},
sb6:function(a){this.go=H.k(a,"$isx",[P.c],"$asx")},
d1:function(a,b,c){var z,y,x,w,v
H.k(a,"$isd",[c],"$asd")
H.q(b,{func:1,ret:c})
if(a==null){x=this.Q
w=new Array(x)
w.fixed$length=Array
a=H.f(w,[c])
for(z=0;J.e3(z,x);z=J.hu(z,1))try{J.hw(a,z,b.$0())}catch(v){y=H.as(v)
x="Exception "+H.i(y)
throw H.e(x)}}return a},
hZ:function(a){var z,y
z=this.aq
z.de()
z.de().j_(a)
for(y=a.gbV(),z=this.fy;y.M(0,a.gbX());y=y.D(0,1))C.i.l(z,y,null)
a.gcG()
a.gcG().scE(a.gcE())
a.gcE()
a.gcE().scG(a.gcG());--this.a4},
iU:function(a){var z,y,x,w,v,u,t,s
for(z=this.k2,y=this.x,x=0;w=this.id,x<w;++x){v=C.i.i(z,x)
u=v.gcS(v)
w=this.cy.a
w=(w&&C.a).i(w,u).a
t=w[0]
v.siM(0,(C.d.P(y*w[1]+2048)<<19>>>0)+(C.d.P(128*(y*t))+262144))}F.hs(z,0,w,V.f3)
this.k3=0
for(u=0;u<this.id;++u){s=C.i.i(z,u)
V.jr(s.giM(s),1,0)}},
iT:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.aF
y=z.a
y.sj(0,17976931348623157e292)
y.sk(0,17976931348623157e292)
x=z.b
x.sj(0,-17976931348623157e292)
x.sk(0,-17976931348623157e292)
for(w=this.z,v=this.cy.a,u=y.a,t=x.a,s=0;s<w;++s){if(s>=v.length)return H.b(v,s)
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
w=this.i6
w.a=this
this.aq.iC(w,z)},
f_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.aF
y=z.a
x=z.b
y.sj(0,17976931348623157e292)
y.sk(0,17976931348623157e292)
x.sj(0,-17976931348623157e292)
x.sk(0,-17976931348623157e292)
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
v[1]=o>g?o:g}w=this.i7
w.b=a
w.a=this
this.aq.iC(w,z)},
cq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j;++this.a
if(this.z===0)return
this.b=0
for(z=0,y=0;z<this.z;++z){y=C.c.bo(y,C.i.i(this.cx.a,z))
this.b=y}if((y&2)!==0)this.ff()
if(this.z===0)return
this.c=0
for(x=this.a1;!1;x=x.cl())this.c=C.c.bo(this.c,x.gdJ())
y=a.a
w=this.f
v=this.aq
u=v.eO()
t=C.d.G(y*w,u.gj(u))
u=a.a
v=v.eO()
s=C.d.G(u*w,v.gk(v))
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
y[1]=y[1]*o}}this.f_(a)
if((this.c&2)!==0)this.f6(a)
if((this.b&4)!==0)this.fe(a)
for(y=this.z,w=this.cy.a,v=this.db.a,u=a.a,z=0;z<y;++z){if(z>=w.length)return H.b(w,z)
n=w[z]
if(z>=v.length)return H.b(v,z)
m=v[z]
l=n.a
k=l[0]
j=m.a
l[0]=k+u*j[0]
l[1]=l[1]+u*j[1]}this.iT()
this.iU(!1)
if((this.b&32)!==0)this.fd(a)
if((this.b&64)!==0)this.f4(a)
if((this.b&128)!==0)this.fc(a)
if((this.b&16)!==0)this.f2(a)
if((this.b&8)!==0)this.f8(a)
if((this.c&1)!==0)this.f7(a)
if((this.b&256)!==0)this.f0(a)
this.f5(a)
this.f1(a)},
f5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(z=this.dx,y=0;y<this.z;++y)C.i.l(z,y,0)
for(x=0;x<this.r2;++x){w=this.ry
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
t=v.c
z.l(0,u,C.i.i(z,u).D(0,t))}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
z.l(0,u,C.i.i(z,u).D(0,t))
z.l(0,s,z.i(0,s).D(0,t))}if((this.b&64)!==0)for(y=0;y<this.z;++y){C.i.i(this.cx.a,y).ad(0,64)
C.i.l(z,y,0)}w=this.W
r=this.d
q=this.r
p=q*a.b
o=w*(r*(p*p))
for(y=0;y<this.z;++y)z.l(0,y,o*Math.max(0,Math.min(H.hh(C.i.i(z,y)),5)-1))
n=a.a/(this.d*q)
for(m=this.bK,w=m.a,r=this.x,l=1.777777*this.e*r*r,x=0;x<this.r2;++x){r=this.ry
if(x>=r.length)return H.b(r,x)
v=r[x]
u=v.a
s=v.b
t=v.c
k=v.e
j=v.d
r=this.cy.a
i=(r&&C.a).i(r,u)
h=C.u.G(n*t*k,C.i.i(z,u).D(0,o*t))
r=j.a
w[0]=h*r[0]
w[1]=h*r[1]
r=this.db.a
r=(r&&C.a).i(r,u).a
r[0]=r[0]-l*w[0]
r[1]=r[1]-l*w[1]
s.bI(m,i,!0)}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.b(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
j=v.e
g=C.i.i(z,u).D(0,z.i(0,s))
w=n*t
r=j.a
f=C.u.G(w,g)*r[0]
e=C.u.G(w,g)*r[1]
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
f1:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.U
for(y=this.bK,x=y.a,w=this.x,v=1.777777*this.e*w*w,u=0;u<this.r2;++u){w=this.ry
if(u>=w.length)return H.b(w,u)
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
l=r.gbb().gA()
k=C.d.L(m,l.gj(l))
w=w[1]
l=r.gbb().gA()
j=C.d.L(w,l.gk(l))
l=this.db.a
i=(l&&C.a).i(l,s)
l=r.gbU().bQ(0).G(0,j)
w=r.gbY()
w=l.D(0,w.gj(w))
l=i.a
h=w.L(0,l[0])
w=r.gbU().G(0,k)
m=r.gbY()
g=w.D(0,m.gk(m)).L(0,l[1])
m=o.a
f=h.G(0,m[0]).D(0,g.G(0,m[1]))
if(f.M(0,0)){w=z*q*p
x[0]=C.d.G(w,f)*m[0]
x[1]=C.d.G(w,f)*m[1]
l[0]=l[0]+v*x[0]
l[1]=l[1]+v*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.bI(y,n,!0)}}for(u=0;u<this.k3;++u){x=this.r1
if(u>=x.length)return H.b(x,u)
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
fe:function(a){var z,y,x
for(z=0;z<this.z;++z){C.i.i(this.cx.a,z).ad(0,4)
y=this.db.a
x=y.length
if(z>=x)return H.b(y,z)
y=y[z].a
y[0]=0
y[1]=0}},
f6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
for(z=this.a1,y=this.bK,x=this.i8,w=this.i9,v=y.a,u=this.ia,t=u.a,s=t.a,u=u.b,r=this.ib,q=r.a.a,p=r.b;!1;z=z.cl()){z.gdJ().ad(0,2)
z.jv()
o=C.d.G(a.a,z.gbU())
w.a=Math.sin(o)
w.b=Math.cos(o)
G.t(w,z.gfQ(),x)
n=z.gbY().gcK()
o=n.length
if(1>=o)return H.b(n,1)
v[1]=n[1]
v[0]=n[0]
y.B(0,a.a)
y.p(0,z.gfQ())
y.n(x)
s[1]=v[1]
s[0]=v[0]
u.a=w.a
u.b=w.b
o=z.gcJ()
m=z.gcJ()
l=o.gd_()
k=m.gd_()
j=C.d.G(u.b,l.gA())
i=C.d.G(u.a,l.gdg())
k.sdg(C.d.G(u.a,l.gA())+C.d.G(u.b,l.gdg()))
k.sA(j-i)
G.aW(u,o.gcd(),m.gcd())
m.gcd().p(0,t)
m=a.b
q[0]=m*s[0]
q[1]=m*s[1]
p.a=m*u.a
p.b=m*(u.b-1)
for(h=z.gbV();h.M(0,z.gbX());h=h.D(0,1)){o=this.cy.a
o=(o&&C.a).i(o,h)
m=this.db.a
G.A(r,o,(m&&C.a).i(m,h))}}},
f2:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=a6.b*this.a2
for(y=0;y<this.y2;++y){x=C.i.i(this.a3,y)
x.gig().ad(0,16)
w=x.gbh()
v=x.gbi()
u=x.gcT()
t=x.gjp()
s=x.gjq()
r=x.gjr()
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
g=t.w(p).D(0,s.w(o)).D(0,r.w(n))
f=t.F(p).D(0,s.F(o)).D(0,r.F(n))
e=Math.sqrt(C.c.d8(1,g.G(0,g).D(0,f.G(0,f))))
g=g.G(0,e)
f=f.G(0,e)
d=C.d.G(z,x.gfj())
c=f.G(0,t.gj(t)).L(0,g.G(0,t.gk(t)))
b=g.G(0,t.gj(t)).D(0,f.G(0,t.gk(t)))
a=f.G(0,s.gj(s)).L(0,g.G(0,s.gk(s)))
a0=g.G(0,s.gj(s)).D(0,f.G(0,s.gk(s)))
a1=f.G(0,r.gj(r)).L(0,g.G(0,r.gk(r)))
a2=g.G(0,r.gj(r)).D(0,f.G(0,r.gk(r)))
m=this.db.a
a3=(m&&C.a).i(m,w)
m=this.db.a
a4=(m&&C.a).i(m,v)
m=this.db.a
a5=(m&&C.a).i(m,u)
m=a3.a
m[0]=m[0]+C.d.G(d,c.L(0,q[0]-i))
m[1]=m[1]+C.d.G(d,b.L(0,q[1]-h))
q=a4.a
q[0]=q[0]+C.d.G(d,a.L(0,l[0]-i))
q[1]=q[1]+C.d.G(d,a0.L(0,l[1]-h))
l=a5.a
l[0]=l[0]+C.d.G(d,a1.L(0,j[0]-i))
l[1]=l[1]+C.d.G(d,a2.L(0,j[1]-h))}},
f8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.b*this.a9
for(y=this.y1,x=0;x<this.x1;++x){w=C.i.i(y,x)
w.gig().ad(0,8)
v=w.gbh()
u=w.gbi()
t=this.cy.a
s=(t&&C.a).i(t,v)
t=this.cy.a
t=(t&&C.a).i(t,u).a
r=t[0]
q=s.a
p=r-q[0]
o=t[1]-q[1]
n=w.gjb()
m=Math.sqrt(p*p+o*o)
if(m===0)m=17976931348623157e292
l=C.d.G(z,w.gfj())
k=C.d.G(l,n.L(0,m))/m*p
j=C.d.G(l,n.L(0,m))/m*o
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
fc:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
this.shC(this.d1(this.dy,V.a9(),E.a))
for(z=this.dx,y=0;y<this.z;++y){C.i.l(z,y,0)
x=this.dy
if(y>=x.length)return H.b(x,y)
x[y].N()}for(w=0;w<this.k3;++w){x=this.r1
if(w>=x.length)return H.b(x,w)
v=x[w]
if((v.c&128)!==0){u=v.a
t=v.b
s=v.d
r=v.e
z.l(0,u,C.i.i(z,u).D(0,s))
z.l(0,t,z.i(0,t).D(0,s))
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
x[1]=x[1]+o*n[1]}}x=this.ac
n=this.r*a0.b
m=x*n
l=this.af*n
for(w=0;w<this.k3;++w){x=this.r1
if(w>=x.length)return H.b(x,w)
v=x[w]
if((v.c&128)!==0){u=v.a
t=v.b
s=v.d
r=v.e
x=this.dy
q=(x&&C.a).i(x,u)
x=this.dy
p=(x&&C.a).i(x,t)
k=C.i.i(z,u).D(0,z.i(0,t))
x=p.a
n=x[0]
j=q.a
i=j[0]
x=x[1]
j=j[1]
h=C.u.G(m,k.L(0,2))
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
fd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.ab
for(y=this.bK,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.b(u,v)
t=u[v]
s=t.a
C.i.i(this.cx.a,s).ad(0,32)
r=t.b
q=t.c
p=t.e
u=this.cy.a
o=(u&&C.a).i(u,s)
u=this.db.a
n=(u&&C.a).i(u,s)
u=o.a
m=u[0]
l=r.gbb().gA()
k=C.d.L(m,l.gj(l))
u=u[1]
l=r.gbb().gA()
j=C.d.L(u,l.gk(l))
l=r.gbU().bQ(0).G(0,j)
u=r.gbY()
u=l.D(0,u.gj(u))
l=n.a
i=u.L(0,l[0])
u=r.gbU().G(0,k)
m=r.gbY()
h=u.D(0,m.gk(m)).L(0,l[1])
m=z*p*q
x[0]=C.u.G(m,i)
x[1]=C.u.G(m,h)
l[0]=l[0]+w*x[0]
l[1]=l[1]+w*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.bI(y,o,!0)}for(v=0;v<this.k3;++v){x=this.r1
if(v>=x.length)return H.b(x,v)
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
f4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.an*(this.r*a.b)
for(y=this.bK,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.b(u,v)
t=u[v]
s=t.a
C.i.i(this.cx.a,s).ad(0,64)
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
q.bI(y,o,!0)}}for(v=0;v<this.k3;++v){x=this.r1
if(v>=x.length)return H.b(x,v)
t=x[v]
if((t.c&64)!==0){r=t.d
if(r>0.25){s=t.a
q=t.b
n=t.e
x=this.db.a
m=(x&&C.a).i(x,s)
x=this.db.a
k=(x&&C.a).i(x,q)
l=this.an*(r-0.25)
x=n.a
j=l*x[0]
i=l*x[1]
x=m.a
x[0]=x[0]-j
x[1]=x[1]-i
x=k.a
x[0]=x[0]+j
x[1]=x[1]+i}}}},
f7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.fr
if(z==null)z=new Float64Array(this.Q)
this.fr=z
y=a.b*this.aj
for(x=this.fy,w=0;w<this.k3;++w){v=this.r1
if(w>=v.length)return H.b(v,w)
u=v[w]
t=u.a
s=u.b
C.i.i(x,t)
x.i(0,s)
r=u.d
q=u.e
v=this.fr
v=(v&&C.v).i(v,t)
p=this.fr
p=(p&&C.v).i(p,s)
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
f0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.fx
z.sed(0,this.d1(z.a,V.b4(),V.ae))
y=C.d.P(256*this.ak)
for(x=0;x<this.k3;++x){z=this.r1
if(x>=z.length)return H.b(z,x)
w=z[x]
v=w.a
u=w.b
C.i.i(this.cx.a,v).ad(0,C.i.i(this.cx.a,u)).ad(0,256)
z=this.fx.a
t=(z&&C.a).i(z,v)
z=this.fx.a
z=(z&&C.a).i(z,u).a
s=z[0]
r=t.a
q=C.c.aR(C.c.P(y*(s-r[0])),8)
p=C.c.aR(C.c.P(y*(z[1]-r[1])),8)
o=C.c.aR(C.c.P(y*(z[2]-r[2])),8)
n=C.c.aR(C.c.P(y*(z[3]-r[3])),8)
r[0]=r[0]+q
r[1]=r[1]+p
r[2]=r[2]+o
r[3]=r[3]+n
z[0]=z[0]-q
z[1]=z[1]-p
z[2]=z[2]-o
z[3]=z[3]-n}},
ff:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=P.bj(this.z,0,!1,P.j)
for(y=this.aq,x=0;x<this.z;++x){w=C.i.i(this.cx.a,x)
w.ad(0,2)
v=y.de()
w.ad(0,512)
v.iZ(x)
C.a.l(z,x,-1)}for(y=this.k2,u=0;t=this.id,u<t;++u){s=C.i.i(y,u)
s.scS(0,C.a.i(z,s.gcS(s)))}for(x=0;x<t;++x)if(V.jq(C.i.i(y,x))){--t
r=y.i(0,t)
y.l(0,t,y.i(0,x))
y.l(0,x,r);--x}this.id=t
for(u=0;t=this.k3,u<t;++u){y=this.r1
if(u>=y.length)return H.b(y,u)
q=y[u]
q.a=H.p(C.a.i(z,q.a))
q.b=H.p(C.a.i(z,q.b))}for(x=0;x<t;++x){y=this.r1
p=y.length
if(x<0||x>=p)return H.b(y,x)
o=y[x]
n=o.a
if(typeof n!=="number")return n.M()
if(n>=0){n=o.b
if(typeof n!=="number")return n.M()
n=n<0}else n=!0
if(n){--t
if(t<0||t>=p)return H.b(y,t)
r=y[t];(y&&C.a).l(y,t,o)
y=this.r1;(y&&C.a).l(y,x,r);--x}}this.k3=t
for(u=0;t=this.r2,u<t;++u){y=this.ry
if(u>=y.length)return H.b(y,u)
q=y[u]
q.a=H.p(C.a.i(z,q.a))}for(x=0;x<t;++x){y=this.ry
p=y.length
if(x<0||x>=p)return H.b(y,x)
o=y[x]
n=o.a
if(typeof n!=="number")return n.M()
if(n<0){--t
if(t<0||t>=p)return H.b(y,t)
r=y[t];(y&&C.a).l(y,t,o)
y=this.ry;(y&&C.a).l(y,x,r);--x}}this.r2=t
for(y=this.y1,u=0;t=this.x1,u<t;++u){m=C.i.i(y,u)
m.sbh(C.a.i(z,m.gbh()))
m.sbi(C.a.i(z,m.gbi()))}for(x=0;x<t;++x){p=C.i.i(y,x)
if(p.gbh().M(0,0)||p.gbi().M(0,0)){--t
r=y.i(0,t)
y.l(0,t,y.i(0,x))
y.l(0,x,r);--x}}this.x1=t
for(u=0;t=this.y2,u<t;++u){l=C.i.i(this.a3,u)
l.sbh(C.a.i(z,l.gbh()))
l.sbi(C.a.i(z,l.gbi()))
l.scT(C.a.i(z,l.gcT()))}for(x=0;x<t;++x){y=C.i.i(this.a3,x)
if(y.gbh().M(0,0)||y.gbi().M(0,0)||y.gcT().M(0,0)){--t
r=C.i.i(this.a3,t)
y=this.a3
y.l(0,t,C.i.i(y,x))
C.i.l(this.a3,x,r);--x}}this.y2=t
for(k=this.a1;!1;k=k.cl()){for(x=k.gbV(),j=0,i=0,h=!1;x.M(0,k.gbX());x=x.D(0,1)){t=C.a.i(z,x)
if(typeof t!=="number")return t.eI()
if(t>=0){j=Math.min(j,t)
i=Math.max(i,t+1)}else h=!0}if(j<i){k.sbV(j)
k.sbX(i)
if(h){k.gdJ().ad(0,2)
k.shA(!0)}}else{k.sbV(0)
k.sbX(0)
if(k.gj2())k.shz(!0)}}this.z=0
for(k=this.a1;!1;k=g){g=k.cl()
if(k.ghz())this.hZ(k)
else k.ghA()}},
eP:function(){var z=this.fx
z.sed(0,this.d1(z.a,z.b,V.ae))
return this.fx.a},
E:{
jr:function(a,b,c){return a.D(0,c<<19>>>0).D(0,b<<7>>>0)},
nE:[function(){return new E.a(new Float64Array(2))},"$0","a9",0,0,37],
nC:[function(){return new P.c()},"$0","bC",0,0,38],
nD:[function(){var z=new Int8Array(4)
z[0]=127
z[1]=127
z[2]=127
z[3]=50
return new V.ae(z)},"$0","b4",0,0,25]}},
ai:{"^":"c;a",
eJ:function(a){var z=this.a
if(!z.bf(a))z.l(0,a,this.dc(a))
return z.i(0,a)},
dc:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[E.a])
for(z=y.length,x=0;x<z;++x)C.a.l(y,x,new E.a(new Float64Array(2)))
return y}},
jn:{"^":"aF;a,b,c,d",
as:function(){return new E.a(new Float64Array(2))},
$asaF:function(){return[E.a]}},
jo:{"^":"aF;a,b,c,d",
as:function(){return new E.aO(new Float64Array(3))},
$asaF:function(){return[E.aO]}},
jk:{"^":"aF;a,b,c,d",
as:function(){return new E.aE(new Float64Array(4))},
$asaF:function(){return[E.aE]}},
jl:{"^":"aF;a,b,c,d",
as:function(){return new E.aT(new Float64Array(9))},
$asaF:function(){return[E.aT]}},
jj:{"^":"aF;a,b,c,d",
as:function(){var z=new Float64Array(2)
return new V.O(new E.a(z),new E.a(new Float64Array(2)))},
$asaF:function(){return[V.O]}},
jm:{"^":"aF;a,b,c,d",
as:function(){return new G.o(0,1)},
$asaF:function(){return[G.o]}},
K:{"^":"aK;$ti"},
jb:{"^":"K;d,0a,0b,0c",
as:function(){return new V.c9(0,new V.an(),new V.an(),0,0,V.ap(),0,0,0,0,0,this.d,V.ap())},
$asaJ:function(){return[V.c9]},
$asK:function(){return[V.c9]},
$asaK:function(){return[V.c9]}},
j7:{"^":"K;d,0a,0b,0c",
as:function(){return new V.bY(0,new V.an(),new V.an(),0,0,V.ap(),0,0,0,0,0,this.d,V.ap())},
$asaJ:function(){return[V.bY]},
$asK:function(){return[V.bY]},
$asaK:function(){return[V.bY]}},
ja:{"^":"K;d,0a,0b,0c",
as:function(){return new V.c8(0,new V.an(),new V.an(),0,0,V.ap(),0,0,0,0,0,this.d,V.ap())},
$asaJ:function(){return[V.c8]},
$asK:function(){return[V.c8]},
$asaK:function(){return[V.c8]}},
j8:{"^":"K;d,0a,0b,0c",
as:function(){return new V.bZ(0,new V.an(),new V.an(),0,0,V.ap(),0,0,0,0,0,this.d,V.ap())},
$asaJ:function(){return[V.bZ]},
$asK:function(){return[V.bZ]},
$asaK:function(){return[V.bZ]}},
j9:{"^":"K;d,0a,0b,0c",
as:function(){return new V.c_(0,new V.an(),new V.an(),0,0,V.ap(),0,0,0,0,0,this.d,V.ap())},
$asaJ:function(){return[V.c_]},
$asK:function(){return[V.c_]},
$asaK:function(){return[V.c_]}},
j5:{"^":"K;d,0a,0b,0c",
as:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.c0(new E.a(z),new E.a(y),new E.a(x),new E.a(w),!1,!1,new E.a(new Float64Array(2)),C.k,0)
z.b=0.01
return new V.bW(z,0,new V.an(),new V.an(),0,0,V.ap(),0,0,0,0,0,this.d,V.ap())},
$asaJ:function(){return[V.bW]},
$asK:function(){return[V.bW]},
$asaK:function(){return[V.bW]}},
j6:{"^":"K;d,0a,0b,0c",
as:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.c0(new E.a(z),new E.a(y),new E.a(x),new E.a(w),!1,!1,new E.a(new Float64Array(2)),C.k,0)
z.b=0.01
return new V.bX(z,0,new V.an(),new V.an(),0,0,V.ap(),0,0,0,0,0,this.d,V.ap())},
$asaJ:function(){return[V.bX]},
$asK:function(){return[V.bX]},
$asaK:function(){return[V.bX]}},
ih:{"^":"c;a,b,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,fy",
shi:function(a){this.Q=H.k(a,"$isK",[V.c9],"$asK")},
sfP:function(a){this.ch=H.k(a,"$isK",[V.bY],"$asK")},
sfZ:function(a){this.cx=H.k(a,"$isK",[V.c8],"$asK")},
sh1:function(a){this.cy=H.k(a,"$isK",[V.bZ],"$asK")},
sh5:function(a){this.db=H.k(a,"$isK",[V.c_],"$asK")},
sfR:function(a){this.dx=H.k(a,"$isK",[V.bW],"$asK")},
sfS:function(a){this.dy=H.k(a,"$isK",[V.bX],"$asK")},
df:function(a){var z,y,x,w
z=this.y
if(!z.bf(a)){y=new Array(a)
y.fixed$length=Array
x=H.f(y,[E.a])
for(w=0;w<a;++w)C.a.l(x,w,new E.a(new Float64Array(2)))
z.l(0,a,x)}return z.i(0,a)},
$isne:1,
E:{
bb:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=P.j
y=P.a_(null,null,null,z,P.eG)
x=P.a_(null,null,null,z,[P.d,P.j])
w=P.a_(null,null,null,z,[P.d,E.a])
v=E.a
u=new Array(a6)
u.fixed$length=Array
t=[v]
u=H.f(u,t)
s=new Array(a7)
s.fixed$length=Array
t=new V.jn(u,0,a6,H.f(s,t))
t.bs(a6,a7,v)
v=E.aO
s=new Array(a6)
s.fixed$length=Array
u=[v]
s=H.f(s,u)
r=new Array(a7)
r.fixed$length=Array
u=new V.jo(s,0,a6,H.f(r,u))
u.bs(a6,a7,v)
v=E.aE
r=new Array(a6)
r.fixed$length=Array
s=[v]
r=H.f(r,s)
q=new Array(a7)
q.fixed$length=Array
s=new V.jk(r,0,a6,H.f(q,s))
s.bs(a6,a7,v)
v=V.O
q=new Array(a6)
q.fixed$length=Array
r=[v]
q=H.f(q,r)
p=new Array(a7)
p.fixed$length=Array
r=new V.jj(q,0,a6,H.f(p,r))
r.bs(a6,a7,v)
v=G.o
p=new Array(a6)
p.fixed$length=Array
q=[v]
p=H.f(p,q)
o=new Array(a7)
o.fixed$length=Array
q=new V.jm(p,0,a6,H.f(o,q))
q.bs(a6,a7,v)
v=E.aT
o=new Array(a6)
o.fixed$length=Array
p=[v]
o=H.f(o,p)
n=new Array(a7)
n.fixed$length=Array
p=new V.jl(o,0,a6,H.f(n,p))
p.bs(a6,a7,v)
v=new Float64Array(2)
o=new Float64Array(2)
v=new V.d0(new E.a(v),new E.a(o),new E.a(new Float64Array(2)),0,0,0)
o=new Float64Array(2)
n=new Float64Array(2)
o=new V.d0(new E.a(o),new E.a(n),new E.a(new Float64Array(2)),0,0,0)
n=new Float64Array(2)
m=new Float64Array(2)
n=new V.d0(new E.a(n),new E.a(m),new E.a(new Float64Array(2)),0,0,0)
m=new Array(3)
m.fixed$length=Array
m=H.f(m,[V.d0])
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
C.a.l(m,0,v)
C.a.l(m,1,o)
C.a.l(m,2,n)
b=P.bj(3,0,!1,z)
a=P.bj(3,0,!1,z)
a0=new Float64Array(2)
a1=new Float64Array(2)
a2=new Float64Array(2)
y=new V.ih(t,u,s,p,r,q,y,x,w,new V.il(new V.lf(v,o,n,m,0,new E.a(l),new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),new E.a(e),new E.a(d),new E.a(c)),b,a,new E.a(a0),new E.a(a1),new E.a(a2),new E.a(new Float64Array(2))))
x=new V.jb(y)
x.b9(10,V.c9)
y.shi(x)
x=new V.j7(y)
x.b9(10,V.bY)
y.sfP(x)
x=new V.ja(y)
x.b9(10,V.c8)
y.sfZ(x)
x=new V.j8(y)
x.b9(10,V.bZ)
y.sh1(x)
x=new V.j9(y)
x.b9(10,V.c_)
y.sh5(x)
x=new V.j5(y)
x.b9(10,V.bW)
y.sfR(x)
x=new V.j6(y)
x.b9(10,V.bX)
y.sfS(x)
x=V.W()
w=V.W()
v=new Float64Array(2)
u=new Float64Array(2)
t=V.f7()
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=new Float64Array(2)
m=new Array(2)
m.fixed$length=Array
l=[V.av]
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
a1=V.ix()
a2=new Float64Array(2)
C.a.l(m,0,new V.av(new E.a(a2),new V.ax(new Int8Array(4))))
a2=new Float64Array(2)
C.a.l(m,1,new V.av(new E.a(a2),new V.ax(new Int8Array(4))))
a2=new Float64Array(2)
C.a.l(e,0,new V.av(new E.a(a2),new V.ax(new Int8Array(4))))
a2=new Float64Array(2)
C.a.l(e,1,new V.av(new E.a(a2),new V.ax(new Int8Array(4))))
a2=new Float64Array(2)
C.a.l(l,0,new V.av(new E.a(a2),new V.ax(new Int8Array(4))))
a2=new Float64Array(2)
C.a.l(l,1,new V.av(new E.a(a2),new V.ax(new Int8Array(4))))
y.fr=new V.i4(y,new V.et(x,w,new G.v(new E.a(v),new G.o(0,1)),new G.v(new E.a(u),new G.o(0,1)),!1),t,new V.ev(new E.a(s),new E.a(r),0,0),new E.a(q),new G.v(new E.a(p),new G.o(0,1)),new E.a(o),new E.a(n),new V.fL(0,0),new V.fL(0,0),m,new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),e,l,new E.a(d),new E.a(c),new V.ax(b),new E.a(a),new E.a(a0),a1)
x=V.f7()
w=V.W()
v=V.W()
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
z=P.bj(2,0,!1,z)
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=new Float64Array(2)
a4=new Float64Array(2)
a5=new Float64Array(2)
y.fx=new V.k1(x,new V.et(w,v,new G.v(new E.a(u),new G.o(0,1)),new G.v(new E.a(t),new G.o(0,1)),!1),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.ev(new E.a(q),new E.a(p),0,0),new V.jK(new E.a(o),new E.a(n),new E.a(m),new E.a(l),new E.a(k),new E.a(j),new E.a(i),new E.a(h),new E.a(g),new E.a(f),new E.a(e),new E.a(d),new G.v(new E.a(c),new G.o(0,1)),new G.v(new E.a(b),new G.o(0,1)),new E.a(a),new E.a(a0)),z,new G.D(new E.a(a1),new E.a(a2),new E.a(a3),0,0,0),new G.D(new E.a(a4),new E.a(a5),new E.a(new Float64Array(2)),0,0,0),y)
y.z=y
return y}}},
aK:{"^":"c;0a,$ti",
sdV:function(a){this.a=H.k(a,"$isd",[H.aH(this,"aK",0)],"$asd")},
b9:function(a,b){this.b=0
this.sdV(null)
this.b=0
this.c=0
this.ef(a)},
ef:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.f(z,[H.aH(this,"aK",0)])
z=this.a
if(z!=null)C.a.aD(y,0,this.c,z,0)
for(z=y.length,x=0;x<z;++x)C.a.l(y,x,this.as())
this.sdV(y)
this.c=z},
m:function(){var z,y
z=this.b
y=this.c
if(z>=y)this.ef(y*2)
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.b(z,y)
return z[y]},
$isaJ:1},
aF:{"^":"c;$ti",
bs:function(a,b,c){var z,y
for(z=this.a,y=0;y<a;++y)C.a.l(z,y,this.as())},
m:function(){var z,y
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.b(z,y)
return z[y]}}}],["","",,F,{"^":"",
hs:function(a,b,c,d){var z
H.k(a,"$isd",[d],"$asd")
P.aV(b,c,a.length,null,null,null)
z=P.iV(H.dE(a,b,c,H.r(a,0)),!0,d)
H.jQ(z,J.lT(),H.r(z,0))
C.a.bC(a,b,c,z)}}],["","",,N,{"^":"",hU:{"^":"ie;c,a,b",
c_:function(a,b,c){var z,y,x,w,v
H.k(a,"$isd",[E.a],"$asd")
this.c1(c)
for(z=J.a4(a),y=this.b,x=0;x<b;++x){w=z.i(a,x)
v=z.i(a,x)
y.bA(H.h(w,"$isa"),H.h(v,"$isa"))}y=this.c
y.beginPath()
C.t.ev(y,J.aA(z.i(a,0)),J.aB(z.i(a,0)))
for(x=1;x<b;++x)C.t.cY(y,J.aA(z.i(a,x)),J.aB(z.i(a,x)))
C.t.cY(y,J.aA(z.i(a,0)),J.aB(z.i(a,0)))
y.closePath()},
aE:function(a,b,c){var z,y
this.c1(c)
z=this.b
z.bA(a,a)
z.bA(b,b)
z=this.c
z.beginPath()
y=a.a
C.t.ev(z,y[0],y[1])
y=b.a
C.t.cY(z,y[0],y[1])
z.closePath()
z.stroke()},
i0:function(a,b,c,d){this.bZ(a,b*this.b.c,c)
this.c.stroke()},
i_:function(a,b,c){return this.i0(a,b,c,null)},
bZ:function(a,b,c){var z,y
this.c1(c)
this.b.bA(a,a)
z=this.c
z.beginPath()
y=a.a
z.arc(y[0],y[1],b,0,6.283185307179586,!0)
z.closePath()},
c1:function(a){var z,y,x,w
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
i2:function(a,b,c,d){H.k(a,"$isd",[E.a],"$asd")
H.k(c,"$isd",[V.ae],"$asd")
throw H.e("Unimplemented")},
i3:function(a,b,c,d){H.k(a,"$isd",[E.a],"$asd")
H.k(c,"$isd",[V.ae],"$asd")
throw H.e("Unimplemented")}}}],["","",,G,{"^":"",a3:{"^":"c;j:a>,k:b>,c",
aO:function(a,b,c){this.a=C.c.P(C.d.X(a*255))
this.b=C.c.P(C.d.X(b*255))
this.c=C.c.P(C.d.X(c*255))}},o:{"^":"c;a,A:b<",
J:function(a){this.a=Math.sin(a)
this.b=Math.cos(a)
return this},
T:function(a){this.a=a.a
this.b=a.b
return this},
u:function(a){return"Rot(s:"+H.i(this.a)+", c:"+H.i(this.b)+")"},
E:{
aW:function(a,b,c){var z,y,x,w
H.h(b,"$isa")
H.h(c,"$isa")
z=a.a
y=b.a
x=y[0]
w=a.b
y=y[1]
c.sj(0,w*x-z*y)
c.sk(0,z*x+w*y)},
t:function(a,b,c){var z,y
H.h(b,"$isa")
z=a.b
y=b.a
c.sj(0,z*y[0]-a.a*y[1])
c.sk(0,a.a*y[0]+a.b*y[1])},
aL:function(a,b,c){var z,y
z=a.b
y=b.a
c.sj(0,z*y[0]+a.a*y[1])
c.sk(0,-a.a*y[0]+a.b*y[1])}}},D:{"^":"c;a,b,A:c<,d,v:e<,f",
sv:function(a){this.e=H.cj(a)},
u:function(a){return"Sweep:\nlocalCenter: "+this.a.u(0)+"\n"+("c0: "+this.b.u(0)+", c: "+this.c.u(0)+"\n")+("a0: "+H.i(this.d)+", a: "+H.i(this.e)+"\n")+("alpha0: "+H.i(this.f))},
a7:function(){var z=6.283185307179586*C.u.X(this.d/6.283185307179586)
this.d-=z
this.e-=z},
T:function(a){this.a.h(a.a)
this.b.h(a.b)
this.c.h(a.c)
this.d=a.d
this.e=a.e
this.f=a.f
return this},
aY:function(a,b){var z,y,x,w
z=a.a
y=1-b
x=this.b.a
w=this.c.a
z.sj(0,y*x[0]+b*w[0])
z.sk(0,y*x[1]+b*w[1])
w=a.b
w.J(y*this.d+b*this.e)
y=z.a
x=this.a.a
z.sj(0,y[0]-(w.b*x[0]-w.a*x[1]))
z.sk(0,y[1]-(w.a*x[0]+w.b*x[1]))},
bd:function(a){var z,y,x,w,v
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
this.f=a}},T:{"^":"c;a"},v:{"^":"c;a,b",
T:function(a){this.a.h(a.a)
this.b.T(a.b)
return this},
u:function(a){return"XForm:\n"+("Position: "+this.a.u(0)+"\n")+("R: \t"+this.b.u(0)+"\n")},
E:{
P:function(a,b,c){var z,y,x,w,v,u
H.h(b,"$isa")
H.h(c,"$isa")
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
A:function(a,b,c){var z,y,x,w
H.h(b,"$isa")
H.h(c,"$isa")
z=a.b
y=z.b
x=b.a
w=a.a.a
c.sj(0,y*x[0]-z.a*x[1]+w[0])
c.sk(0,z.a*x[0]+z.b*x[1]+w[1])},
cW:function(a,b,c){var z,y,x,w
z=b.a
y=a.a.a
x=z[0]-y[0]
w=z[1]-y[1]
y=a.b
z=y.a
y=y.b
c.sj(0,y*x+z*w)
c.sk(0,-z*x+y*w)},
dG:function(a,b,c){var z,y,x,w
z=b.a
y=a.a.a
x=z[0]-y[0]
w=z[1]-y[1]
y=a.b
c.sj(0,y.b*x+y.a*w)
c.sk(0,-y.a*x+y.b*w)},
fl:function(a,b,c){var z,y,x,w,v,u,t
z=a.b
y=b.b
x=c.b
w=z.b
v=y.a
u=z.a
t=y.b
x.a=w*v-u*t
x.b=w*t+z.a*y.a
y=$.$get$dF()
y.h(b.a)
y.n(a.a)
G.aL(z,$.$get$dF(),c.a)}}},ks:{"^":"c;",
bA:function(a,b){var z,y,x,w,v,u,t,s
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
s.h(w)
s.n(this.d)
b.t(y*x+u+t[0],v-z*x+-t[1])}}}],["","",,X,{"^":"",hV:{"^":"ks;0a,b,c,d"}}],["","",,A,{"^":"",
d4:function(a){var z,y
z=C.v.cQ(H.k(a,"$isB",[P.c],"$asB"),0,new A.mh(),P.j)
if(typeof z!=="number")return H.N(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
mh:{"^":"w:28;",
$2:function(a,b){var z,y
H.p(a)
z=J.bG(b)
if(typeof a!=="number")return a.D()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,E,{"^":"",aE:{"^":"c;a",
bD:function(a,b,c,d){var z=this.a
z[3]=d
z[2]=c
z[1]=b
z[0]=a},
h:function(a){var z,y
z=H.h(a,"$isaE").a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
u:function(a){return"[0] "+this.bm(0).u(0)+"\n[1] "+this.bm(1).u(0)+"\n"},
l:function(a,b,c){C.v.l(this.a,b,c)},
at:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.aE){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
ga6:function(a){return A.d4(this.a)},
bm:function(a){var z,y,x
z=new Float64Array(2)
y=this.a
if(a>=4)return H.b(y,a)
z[0]=y[a]
x=2+a
if(x>=4)return H.b(y,x)
z[1]=y[x]
return new E.a(z)},
D:function(a,b){var z,y,x
z=new Float64Array(4)
y=new E.aE(z)
y.h(this)
x=b.gj6()
z[0]=C.d.D(z[0],x.i(0,0))
z[1]=C.d.D(z[1],x.i(0,1))
z[2]=C.d.D(z[2],x.i(0,2))
z[3]=C.d.D(z[3],x.i(0,3))
return y},
N:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
c8:function(){var z,y,x,w,v,u,t
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
z=H.h(a,"$isaE").a
y=this.a
y[0]=C.d.L(y[0],z.i(0,0))
y[1]=C.d.L(y[1],z.i(0,1))
y[2]=C.d.L(y[2],z.i(0,2))
y[3]=C.d.L(y[3],z.i(0,3))},
O:function(){var z=this.a
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]},
d4:function(a,b){var z,y,x,w,v,u,t
if(b==null){b=new E.a(new Float64Array(2))
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
eV:function(a,b,c){var z,y,x,w,v,u,t,s
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
b.sk(0,s*(y*t-w*u))}}},aT:{"^":"c;a",
bp:function(a,b,c,d,e,f,g,h,i){var z=this.a
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
z=H.h(a,"$isaT").a
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
u:function(a){return"[0] "+this.bm(0).u(0)+"\n[1] "+this.bm(1).u(0)+"\n[2] "+this.bm(2).u(0)+"\n"},
l:function(a,b,c){C.v.l(this.a,b,c)},
at:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.aT){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
ga6:function(a){return A.d4(this.a)},
bm:function(a){var z,y,x
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
return new E.aO(z)},
D:function(a,b){var z,y,x
z=new Float64Array(9)
y=new E.aT(z)
y.h(this)
x=b.gj7()
z[0]=C.d.D(z[0],x.i(0,0))
z[1]=C.d.D(z[1],x.i(0,1))
z[2]=C.d.D(z[2],x.i(0,2))
z[3]=C.d.D(z[3],x.i(0,3))
z[4]=C.d.D(z[4],x.i(0,4))
z[5]=C.d.D(z[5],x.i(0,5))
z[6]=C.d.D(z[6],x.i(0,6))
z[7]=C.d.D(z[7],x.i(0,7))
z[8]=C.d.D(z[8],x.i(0,8))
return y},
N:function(){var z=this.a
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
z=H.h(a,"$isaT").a
y=this.a
y[0]=C.d.L(y[0],z.i(0,0))
y[1]=C.d.L(y[1],z.i(0,1))
y[2]=C.d.L(y[2],z.i(0,2))
y[3]=C.d.L(y[3],z.i(0,3))
y[4]=C.d.L(y[4],z.i(0,4))
y[5]=C.d.L(y[5],z.i(0,5))
y[6]=C.d.L(y[6],z.i(0,6))
y[7]=C.d.L(y[7],z.i(0,7))
y[8]=C.d.L(y[8],z.i(0,8))},
O:function(){var z=this.a
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
z[4]=-z[4]
z[5]=-z[5]
z[6]=-z[6]
z[7]=-z[7]
z[8]=-z[8]},
E:{
cs:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
eW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
b.sav(0,m*(y*-(k*t-z*u)+x*-(z*v-l*t)+w*-(l*u-k*v)))}}},a:{"^":"c;cK:a<",
t:function(a,b){var z=this.a
z[0]=a
z[1]=b},
N:function(){var z=this.a
z[0]=0
z[1]=0},
h:function(a){var z,y
z=H.h(a,"$isa").a
y=this.a
y[1]=z[1]
y[0]=z[0]},
u:function(a){var z=this.a
return"["+H.i(z[0])+","+H.i(z[1])+"]"},
at:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.a){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
ga6:function(a){return A.d4(this.a)},
D:function(a,b){var z=new E.a(new Float64Array(2))
z.h(this)
z.p(0,b)
return z},
l:function(a,b,c){C.v.l(this.a,b,c)},
gI:function(a){return Math.sqrt(this.gV())},
gV:function(){var z,y
z=this.a
y=z[0]
z=z[1]
return y*y+z*z},
a7:function(){var z,y,x
z=Math.sqrt(this.gV())
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
F:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]},
w:function(a){var z,y
z=H.h(a,"$isa").a
y=this.a
return y[0]*z[1]-y[1]*z[0]},
a0:function(a,b){var z
H.h(b,"$isa")
z=this.a
b.t(-a*z[1],a*z[0])
return b},
p:function(a,b){var z,y
z=H.h(b,"$isa").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]},
n:function(a){var z,y
z=H.h(a,"$isa").a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
B:function(a,b){var z,y
z=this.a
y=z[1]
if(typeof b!=="number")return H.N(b)
z[1]=y*b
z[0]=z[0]*b},
O:function(){var z=this.a
z[1]=-z[1]
z[0]=-z[0]},
sj:function(a,b){this.a[0]=b
return b},
sk:function(a,b){this.a[1]=b
return b},
gj:function(a){return this.a[0]},
gk:function(a){return this.a[1]},
E:{
fD:function(){return new E.a(new Float64Array(2))}}},aO:{"^":"c;a",
cp:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
N:function(){var z=this.a
z[2]=0
z[1]=0
z[0]=0},
h:function(a){var z,y
z=H.h(a,"$isaO").a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
u:function(a){var z=this.a
return"["+H.i(z[0])+","+H.i(z[1])+","+H.i(z[2])+"]"},
at:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.aO){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
ga6:function(a){return A.d4(this.a)},
D:function(a,b){var z=new E.aO(new Float64Array(3))
z.h(this)
z.p(0,b)
return z},
l:function(a,b,c){C.v.l(this.a,b,c)},
gI:function(a){return Math.sqrt(this.gV())},
gV:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
a7:function(){var z,y,x
z=Math.sqrt(this.gV())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
p:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
n:function(a){var z,y
z=H.h(a,"$isaO").a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
B:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
O:function(){var z=this.a
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]},
sj:function(a,b){this.a[0]=b
return b},
sk:function(a,b){this.a[1]=b
return b},
sav:function(a,b){this.a[2]=b
return b},
gj:function(a){return this.a[0]},
gk:function(a){return this.a[1]}}}],["","",,D,{"^":"",hP:{"^":"bc;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=new V.au(new E.a(new Float64Array(2)),C.e,0)
z.b=2
y=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
y.a=z
y.c=0.9
y.d=1
x=new Float64Array(2)
w=new V.J(C.f,new E.a(x),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
v=-20+20*z.b
for(x=this.b,u=this.a,t=0;t<10;++t){s=-20+z.b*2*t
r=new Float64Array(2)
r[0]=s
r[1]=-20
w.c=new E.a(r)
q=x.R(w)
C.a.p(u,q)
q.Z(y)
r=new Float64Array(2)
r[0]=s
r[1]=v
w.c=new E.a(r)
q=x.R(w)
C.a.p(u,q)
q.Z(y)
r=new Float64Array(2)
r[0]=-20
r[1]=s
w.c=new E.a(r)
q=x.R(w)
C.a.p(u,q)
q.Z(y)
r=new Float64Array(2)
r[0]=v
r[1]=s
w.c=new E.a(r)
q=x.R(w)
C.a.p(u,q)
q.Z(y)}p=new V.au(new E.a(new Float64Array(2)),C.e,0)
p.b=1
o=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
o.d=1
o.e=0.05
o.a=p
r=new Float64Array(2)
n=new V.J(C.f,new E.a(r),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
r=new E.a(new Float64Array(2))
r.t(0,-20)
n.e=r
r=new E.a(new Float64Array(2))
r.t(15,15)
n.c=r
n.a=C.j
n.ch=!0
m=x.R(n)
C.a.p(u,m)
m.Z(o)},
E:{
mF:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
z=[V.aj]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.t(0,-10)
w=V.bb(100,10)
v=V.ba(V.bf())
u=V.bA(4,4)
t=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}t.S(0)
s=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}s.S(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.j
n=[P.d,E.a]
m=P.a_(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.F()
f=V.F()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}b.S(0)
a=V.F()
a0=V.F()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.W()
a4=V.W()
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
b9=C.c.P(C.c.X(102))
c0=C.c.P(C.c.X(102))
c1=C.c.P(C.c.X(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.a_(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.h(x)
c6=new V.bx(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ah(0,0,0,0,0,!1),new G.T(t),new G.T(s),new G.a3(0,0,0),new G.v(new E.a(r),new G.o(0,1)),new E.a(q),new E.a(p),new V.ai(m),new V.by(),new V.bz(new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new V.a8(new E.a(i),new E.a(h),0),new V.ac(0,0,0,0,0,0,g,new V.ag(),new V.G(0),f,new V.G(0),new V.aa(e,d,0)),c,new G.T(b),new V.ac(0,0,0,0,0,0,a,new V.ag(),new V.G(0),a0,new V.G(0),new V.aa(a1,a2,0)),new V.bt(a3,a4,new G.D(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.D(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.bu(C.q,0),new V.ah(0,0,0,0,0,!1),z,new G.D(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.D(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.a3(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.ai(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.b8(0,c6)
n.d=new V.b7()
n.a=v
c6.b=n
c6.fr=new V.br(new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.bp(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.O(new E.a(z),new E.a(x)),new V.bd(!1,0),new V.O(new E.a(v),new E.a(u)),new E.a(t),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.b9(),new V.bo(0,new E.a(q),new E.a(p)),new V.bw(new E.a(o)),new V.bs(new V.a8(new E.a(n),new E.a(m),0),new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.o(0,1),new G.v(new E.a(h),new G.o(0,1)),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),new V.bl(0,0,0))
z.W=0.05
z.U=1
z.a2=0.25
z.a9=0.25
z.ab=0.25
z.ac=0.1
z.af=0.2
z.an=0.5
z.aj=0.5
z.ak=0.5
z.cx=new V.bn()
x=[E.a]
z.sb4(new V.x(V.a9(),0,x))
z.sb7(new V.x(V.a9(),0,x))
z.sb_(new V.x(V.b4(),0,[V.ae]))
z.sb6(new V.x(V.bC(),0,[P.c]))
c6.fx=z
c6.H(w.ch,C.e,C.e)
c6.H(w.cx,C.h,C.e)
c6.H(w.Q,C.h,C.h)
c6.H(w.cy,C.k,C.e)
c6.H(w.db,C.k,C.h)
c6.H(w.dx,C.l,C.e)
c6.H(w.dy,C.l,C.h)
w=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}w.S(0)
c7=new D.hP(y,c6,w,10)
J.aR(C.m.ao(document,"#title"),"Ball cage")
c7.aU(0)
c7.b2()
C.r.aV(window,c7.gaJ(c7))},"$0","m3",0,0,0]}}}],["","",,O,{"^":"",hS:{"^":"bc;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.a0()
z.ag(50,0.4)
y=new E.a(new Float64Array(2))
x=new Float64Array(2)
y.t(0,0)
w=this.b
v=w.R(new V.J(C.f,y,0,new E.a(x),0,0,0,!0,!0,!1,!1,!0,1))
v.am(z)
y=new E.a(new Float64Array(2))
y.t(-10,0)
z.aC(0.4,50,y,0)
v.am(z)
y=new E.a(new Float64Array(2))
y.t(10,0)
z.aC(0.4,50,y,0)
v.am(z)
y=H.f([],[V.aj])
u=new V.ej(0,0,y,!1)
u.a=C.I
for(t=0;t<20;++t){s=0+(t-0)/20*6.283185307179586
x=new Float64Array(2)
r=new V.J(C.f,new E.a(x),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
r.Q=!0
q=Math.sin(s)
p=Math.cos(s)
o=new Float64Array(2)
o[0]=0+5*q
o[1]=10+5*p
x[1]=o[1]
x[0]=o[0]
r.a=C.j
n=w.R(r)
o=new V.a7(1,65535,0)
m=new V.ab(0.2,0,0,!1,o)
l=new V.au(new E.a(new Float64Array(2)),C.e,0)
l.b=0.5
m.a=l
m.e=1
o.c=-2
n.Z(m)
C.a.p(y,n)
x=y.length
if(x===1)u.c=n
if(x===2)u.d=n}u.f=10
u.r=1
u.e=!1
w.b0(u)
y=new Float64Array(2)
k=new V.J(C.f,new E.a(y),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
k.a=C.j
j=V.a0()
y=new E.a(new Float64Array(2))
y.t(0,25)
j.aC(3,1.5,y,0)
y=new E.a(new Float64Array(2))
y.t(0,25)
k.c=y
w.R(k).c4(j,1)},
E:{
mG:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
z=[V.aj]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.t(0,-10)
w=V.bb(100,10)
v=V.ba(V.bf())
u=V.bA(4,4)
t=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}t.S(0)
s=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}s.S(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.j
n=[P.d,E.a]
m=P.a_(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.F()
f=V.F()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}b.S(0)
a=V.F()
a0=V.F()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.W()
a4=V.W()
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
b9=C.c.P(C.c.X(102))
c0=C.c.P(C.c.X(102))
c1=C.c.P(C.c.X(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.a_(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.h(x)
c6=new V.bx(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ah(0,0,0,0,0,!1),new G.T(t),new G.T(s),new G.a3(0,0,0),new G.v(new E.a(r),new G.o(0,1)),new E.a(q),new E.a(p),new V.ai(m),new V.by(),new V.bz(new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new V.a8(new E.a(i),new E.a(h),0),new V.ac(0,0,0,0,0,0,g,new V.ag(),new V.G(0),f,new V.G(0),new V.aa(e,d,0)),c,new G.T(b),new V.ac(0,0,0,0,0,0,a,new V.ag(),new V.G(0),a0,new V.G(0),new V.aa(a1,a2,0)),new V.bt(a3,a4,new G.D(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.D(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.bu(C.q,0),new V.ah(0,0,0,0,0,!1),z,new G.D(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.D(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.a3(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.ai(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.b8(0,c6)
n.d=new V.b7()
n.a=v
c6.b=n
c6.fr=new V.br(new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.bp(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.O(new E.a(z),new E.a(x)),new V.bd(!1,0),new V.O(new E.a(v),new E.a(u)),new E.a(t),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.b9(),new V.bo(0,new E.a(q),new E.a(p)),new V.bw(new E.a(o)),new V.bs(new V.a8(new E.a(n),new E.a(m),0),new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.o(0,1),new G.v(new E.a(h),new G.o(0,1)),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),new V.bl(0,0,0))
z.W=0.05
z.U=1
z.a2=0.25
z.a9=0.25
z.ab=0.25
z.ac=0.1
z.af=0.2
z.an=0.5
z.aj=0.5
z.ak=0.5
z.cx=new V.bn()
x=[E.a]
z.sb4(new V.x(V.a9(),0,x))
z.sb7(new V.x(V.a9(),0,x))
z.sb_(new V.x(V.b4(),0,[V.ae]))
z.sb6(new V.x(V.bC(),0,[P.c]))
c6.fx=z
c6.H(w.ch,C.e,C.e)
c6.H(w.cx,C.h,C.e)
c6.H(w.Q,C.h,C.h)
c6.H(w.cy,C.k,C.e)
c6.H(w.db,C.k,C.h)
c6.H(w.dx,C.l,C.e)
c6.H(w.dy,C.l,C.h)
w=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}w.S(0)
c7=new O.hS(y,c6,w,10)
J.aR(C.m.ao(document,"#title"),"Blob test")
c7.aU(0)
c7.b2()
C.r.aV(window,c7.gaJ(c7))},"$0","m4",0,0,0]}}}],["","",,S,{"^":"",hT:{"^":"bc;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",E:{
mH:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2
z=[V.aj]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.t(0,-10)
w=V.bb(100,10)
v=V.ba(V.bf())
u=V.bA(4,4)
t=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}t.S(0)
s=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}s.S(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.j
n=[P.d,E.a]
m=P.a_(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.F()
f=V.F()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}b.S(0)
a=V.F()
a0=V.F()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.W()
a4=V.W()
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
b9=C.c.P(C.c.X(102))
c0=C.c.P(C.c.X(102))
c1=C.c.P(C.c.X(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.a_(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.h(x)
c6=new V.bx(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ah(0,0,0,0,0,!1),new G.T(t),new G.T(s),new G.a3(0,0,0),new G.v(new E.a(r),new G.o(0,1)),new E.a(q),new E.a(p),new V.ai(m),new V.by(),new V.bz(new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new V.a8(new E.a(i),new E.a(h),0),new V.ac(0,0,0,0,0,0,g,new V.ag(),new V.G(0),f,new V.G(0),new V.aa(e,d,0)),c,new G.T(b),new V.ac(0,0,0,0,0,0,a,new V.ag(),new V.G(0),a0,new V.G(0),new V.aa(a1,a2,0)),new V.bt(a3,a4,new G.D(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.D(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.bu(C.q,0),new V.ah(0,0,0,0,0,!1),z,new G.D(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.D(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.a3(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.ai(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.b8(0,c6)
n.d=new V.b7()
n.a=v
c6.b=n
c6.fr=new V.br(new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.bp(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.O(new E.a(z),new E.a(x)),new V.bd(!1,0),new V.O(new E.a(v),new E.a(u)),new E.a(t),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.b9(),new V.bo(0,new E.a(q),new E.a(p)),new V.bw(new E.a(o)),new V.bs(new V.a8(new E.a(n),new E.a(m),0),new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.o(0,1),new G.v(new E.a(h),new G.o(0,1)),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),new V.bl(0,0,0))
z.W=0.05
z.U=1
z.a2=0.25
z.a9=0.25
z.ab=0.25
z.ac=0.1
z.af=0.2
z.an=0.5
z.aj=0.5
z.ak=0.5
z.cx=new V.bn()
x=[E.a]
z.sb4(new V.x(V.a9(),0,x))
z.sb7(new V.x(V.a9(),0,x))
z.sb_(new V.x(V.b4(),0,[V.ae]))
z.sb6(new V.x(V.bC(),0,[P.c]))
c6.fx=z
c6.H(w.ch,C.e,C.e)
c6.H(w.cx,C.h,C.e)
c6.H(w.Q,C.h,C.h)
c6.H(w.cy,C.k,C.e)
c6.H(w.db,C.k,C.h)
c6.H(w.dx,C.l,C.e)
c6.H(w.dy,C.l,C.h)
w=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}w.S(0)
c7=new S.hT(y,c6,w,10)
J.aR(C.m.ao(document,"#title"),"Box test")
c8=V.a0()
z=new E.a(new Float64Array(2))
x=new Float64Array(2)
z.t(0,0)
c9=c6.R(new V.J(C.f,z,0,new E.a(x),0,0,0,!0,!0,!1,!1,!0,1))
c8.ag(50,0.4)
c9.am(c8)
z=new E.a(new Float64Array(2))
z.t(-10,0)
c8.aC(0.4,50,z,0)
c9.am(c8)
z=new E.a(new Float64Array(2))
z.t(10,0)
c8.aC(0.4,50,z,0)
c9.am(c8)
C.a.p(y,c9)
c8=V.a0()
c8.aC(3,1.5,new E.a(new Float64Array(2)),1.5707963267948966)
d0=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
d0.d=0.5
d0.e=0.05
d0.a=c8
z=new Float64Array(2)
d1=new V.J(C.f,new E.a(z),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
d1.a=C.j
z=new E.a(new Float64Array(2))
z.t(0,30)
d1.c=z
d2=c6.R(d1)
d2.Z(d0)
C.a.p(y,d2)
c7.b2()
C.r.aV(window,c7.gaJ(c7))},"$0","m6",0,0,0]}}}],["","",,A,{"^":"",
od:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6
z=[V.aj]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.t(0,-10)
w=V.bb(100,10)
v=V.ba(V.bf())
u=V.bA(4,4)
t=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}t.S(0)
s=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}s.S(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.j
n=[P.d,E.a]
m=P.a_(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.F()
f=V.F()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}b.S(0)
a=V.F()
a0=V.F()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.W()
a4=V.W()
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
b9=C.c.P(C.c.X(102))
c0=C.c.P(C.c.X(102))
c1=C.c.P(C.c.X(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.a_(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.h(x)
c6=new V.bx(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ah(0,0,0,0,0,!1),new G.T(t),new G.T(s),new G.a3(0,0,0),new G.v(new E.a(r),new G.o(0,1)),new E.a(q),new E.a(p),new V.ai(m),new V.by(),new V.bz(new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new V.a8(new E.a(i),new E.a(h),0),new V.ac(0,0,0,0,0,0,g,new V.ag(),new V.G(0),f,new V.G(0),new V.aa(e,d,0)),c,new G.T(b),new V.ac(0,0,0,0,0,0,a,new V.ag(),new V.G(0),a0,new V.G(0),new V.aa(a1,a2,0)),new V.bt(a3,a4,new G.D(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.D(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.bu(C.q,0),new V.ah(0,0,0,0,0,!1),z,new G.D(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.D(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.a3(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.ai(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.b8(0,c6)
n.d=new V.b7()
n.a=v
c6.b=n
c6.fr=new V.br(new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.bp(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.O(new E.a(z),new E.a(x)),new V.bd(!1,0),new V.O(new E.a(v),new E.a(u)),new E.a(t),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.b9(),new V.bo(0,new E.a(q),new E.a(p)),new V.bw(new E.a(o)),new V.bs(new V.a8(new E.a(n),new E.a(m),0),new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.o(0,1),new G.v(new E.a(h),new G.o(0,1)),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),new V.bl(0,0,0))
z.W=0.05
z.U=1
z.a2=0.25
z.a9=0.25
z.ab=0.25
z.ac=0.1
z.af=0.2
z.an=0.5
z.aj=0.5
z.ak=0.5
z.cx=new V.bn()
x=[E.a]
z.sb4(new V.x(V.a9(),0,x))
z.sb7(new V.x(V.a9(),0,x))
z.sb_(new V.x(V.b4(),0,[V.ae]))
z.sb6(new V.x(V.bC(),0,[P.c]))
c6.fx=z
c6.H(w.ch,C.e,C.e)
c6.H(w.cx,C.h,C.e)
c6.H(w.Q,C.h,C.h)
c6.H(w.cy,C.k,C.e)
c6.H(w.db,C.k,C.h)
c6.H(w.dx,C.l,C.e)
c6.H(w.dy,C.l,C.h)
w=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}w.S(0)
z=new A.hZ(y,c6,w,10)
J.aR(C.m.ao(document,"#title"),"Circle stress")
z.aU(0)
z.b2()
z.r.c=4
C.r.aV(window,z.gaJ(z))},"$0","m7",0,0,0],
hZ:{"^":"bc;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aU:function(a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=new Float64Array(2)
y=this.b
x=y.R(new V.J(C.f,new E.a(z),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1))
z=this.a
C.a.p(z,x)
w=V.a0()
v=new E.a(new Float64Array(2))
v.t(-40,0)
u=new E.a(new Float64Array(2))
u.t(40,0)
w.bB(v,u)
x.am(w)
t=V.a0()
t.ag(50,10)
v=new Float64Array(2)
s=new V.J(C.f,new E.a(v),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
v=new E.a(new Float64Array(2))
v.t(0,-10)
s.c=v
r=y.R(s)
C.a.p(z,r)
q=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
q.a=t
q.c=1
r.Z(q)
t.ag(3,50)
v=new Float64Array(2)
p=new V.J(C.f,new E.a(v),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
v=new E.a(new Float64Array(2))
v.t(45,25)
p.c=v
o=y.R(p)
C.a.p(z,o)
o.am(t)
v=new E.a(new Float64Array(2))
v.t(-45,25)
p.c=v
n=y.R(p)
C.a.p(z,n)
n.am(t)
v=new Float64Array(2)
m=new V.J(C.f,new E.a(v),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
t.ag(20,3)
m.d=-0.7853981633974483
v=new E.a(new Float64Array(2))
v.t(-35,8)
m.c=v
l=y.R(m)
C.a.p(z,l)
l.am(t)
m.d=0.7853981633974483
v=new E.a(new Float64Array(2))
v.t(35,8)
m.c=v
l=y.R(m)
C.a.p(z,l)
l.am(t)
t.ag(50,10)
v=new Float64Array(2)
k=new V.J(C.f,new E.a(v),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
v=new E.a(new Float64Array(2))
v.t(0,75)
k.c=v
j=y.R(k)
C.a.p(z,j)
q.a=t
q.c=1
j.Z(q)
v=new Float64Array(2)
s=new V.J(C.f,new E.a(v),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
s.a=C.j
v=new E.a(new Float64Array(2))
v.t(0,10)
s.c=v
i=y.R(s)
C.a.p(z,i)
for(h=0;h<5;++h){v=6.283185307179586*(h/5)
u=Math.cos(v)
v=Math.sin(v)
g=new Float64Array(2)
f=new V.au(new E.a(g),C.e,0)
f.b=1.2
g[0]=6*u
g[1]=6*v
q=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
q.a=f
q.e=25
q.c=0.1
q.d=0.9
i.Z(q)}i.b=i.b&4294967287
v=new Float64Array(2)
e=y.R(new V.J(C.f,new E.a(v),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1))
v=new E.a(new Float64Array(2))
u=new E.a(new Float64Array(2))
d=new V.dA(v,u,0,!1,0,0,!1,0,0,!1)
d.a=C.H
g=i.d
c=g.a
d.c=i
d.d=e
G.cW(g,c,v)
G.cW(e.d,c,u)
d.x=e.f.e-i.f.e
d.cx=3.141592653589793
d.cy=1e6
d.ch=!0
y.b0(d)
for(b=0;b<8;++b)for(a=50+b,h=0;h<20;++h){a0=new V.au(new E.a(new Float64Array(2)),C.e,0)
v=1+(h%2===0?1:-1)*0.5*0.75
a0.b=v
a1=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
a1.a=a0
a1.e=v*1.5
a1.c=0.5
a1.d=0.7
v=new Float64Array(2)
a2=new V.J(C.f,new E.a(v),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
a2.a=C.j
v=new Float64Array(2)
v[0]=-39+2*h
v[1]=a
a2.c=new E.a(v)
a3=y.R(a2)
C.a.p(z,a3)
a3.Z(a1)}}}}],["","",,Q,{"^":"",bc:{"^":"c;",
fh:["fm",function(a,b){var z,y,x,w,v,u,t,s
H.bF(b)
z=this.c
z.b5(0)
y=this.b
x=y.id.a
x.b5(0)
w=y.k1.a
w.b5(0)
v=y.a
if((v&1)===1){v=y.b
v.a.d6(v)
v=y.a&=4294967294}y.a=v|2
v=y.go
v.a=0.016666666666666666
v.d=10
v.e=10
v.b=60
v.c=y.cx*0.016666666666666666
v.f=y.cy
u=y.fr.b
t=w.gb1()
s=$.m
if(typeof s!=="number")return H.N(s)
u.aN(C.c.aQ(t*1000,s))
w.b5(0)
y.b.hL()
s=y.fr.c
t=w.gb1()
u=$.m
if(typeof u!=="number")return H.N(u)
s.aN(C.c.aQ(t*1000,u))
if(y.dy&&v.a>0){w.b5(0)
y.fx.cq(v)
u=y.fr.d
t=w.gb1()
s=$.m
if(typeof s!=="number")return H.N(s)
u.aN(C.c.aQ(t*1000,s))
w.b5(0)
y.cq(v)
s=y.fr.e
t=w.gb1()
u=$.m
if(typeof u!=="number")return H.N(u)
s.aN(C.c.aQ(t*1000,u))}if(y.db&&v.a>0){w.b5(0)
y.f9(v)
u=y.fr.z
w=w.gb1()
t=$.m
if(typeof t!=="number")return H.N(t)
u.aN(C.c.aQ(w*1000,t))}if(v.a>0)y.cx=v.b
if((y.a&4)===4)y.hJ()
y.a&=4294967293
w=y.fr.a
x=x.gb1()
v=$.m
if(typeof v!=="number")return H.N(v)
w.aN(C.c.aQ(x*1000,v))
z=z.gb1()
v=$.m
if(typeof v!=="number")return H.N(v)
this.Q=C.c.aQ(z*1e6,v)
v=this.f;(v&&C.t).hK(v,0,0,900,600)
y.i1()
y=this.y
if(typeof y!=="number")return y.D()
this.y=y+1
C.r.aV(window,this.gaJ(this))},"$1","gaJ",5,0,9],
b2:function(){var z,y,x,w
z=H.y(H.h(W.kJ("canvas",null),"$isaI"),"$iseg")
z.width=900
z.height=600
this.e=z
y=document
x=y.body;(x&&C.x).ap(x,z)
z=this.e
z.toString
this.f=z.getContext("2d")
w=new E.a(new Float64Array(2))
w.t(450,300)
z=new E.a(new Float64Array(2))
z.h(w)
x=new E.a(new Float64Array(2))
x.h(w)
x=new X.hV(z,20,x)
x.a=!0
x.c=this.d
this.r=x
x=new N.hU(this.f,2,x)
this.x=x
this.b.Q=x
this.y=0
this.z=C.m.ao(y,"#fps-counter")
this.ch=C.m.ao(y,"#world-step-time")
P.fj(P.ez(0,0,0,0,0,1),new Q.ii(this))
P.fj(P.ez(0,0,0,200,0,0),new Q.ij(this))}},ii:{"^":"w:8;a",
$1:function(a){var z
H.h(a,"$isbv")
z=this.a
J.aR(z.z,J.bH(z.y))
z.y=0}},ij:{"^":"w:8;a",
$1:function(a){var z,y
H.h(a,"$isbv")
z=this.a
y=z.Q
if(y==null)return
J.aR(z.ch,H.i(y/1000)+" ms")}}}],["","",,L,{"^":"",
oe:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
z=[V.aj]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.t(0,-10)
w=V.bb(100,10)
v=V.ba(V.bf())
u=V.bA(4,4)
t=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}t.S(0)
s=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}s.S(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.j
n=[P.d,E.a]
m=P.a_(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.F()
f=V.F()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}b.S(0)
a=V.F()
a0=V.F()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.W()
a4=V.W()
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
b9=C.c.P(C.c.X(102))
c0=C.c.P(C.c.X(102))
c1=C.c.P(C.c.X(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.a_(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.h(x)
c6=new V.bx(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ah(0,0,0,0,0,!1),new G.T(t),new G.T(s),new G.a3(0,0,0),new G.v(new E.a(r),new G.o(0,1)),new E.a(q),new E.a(p),new V.ai(m),new V.by(),new V.bz(new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new V.a8(new E.a(i),new E.a(h),0),new V.ac(0,0,0,0,0,0,g,new V.ag(),new V.G(0),f,new V.G(0),new V.aa(e,d,0)),c,new G.T(b),new V.ac(0,0,0,0,0,0,a,new V.ag(),new V.G(0),a0,new V.G(0),new V.aa(a1,a2,0)),new V.bt(a3,a4,new G.D(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.D(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.bu(C.q,0),new V.ah(0,0,0,0,0,!1),z,new G.D(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.D(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.a3(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.ai(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.b8(0,c6)
n.d=new V.b7()
n.a=v
c6.b=n
c6.fr=new V.br(new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.bp(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.O(new E.a(z),new E.a(x)),new V.bd(!1,0),new V.O(new E.a(v),new E.a(u)),new E.a(t),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.b9(),new V.bo(0,new E.a(q),new E.a(p)),new V.bw(new E.a(o)),new V.bs(new V.a8(new E.a(n),new E.a(m),0),new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.o(0,1),new G.v(new E.a(h),new G.o(0,1)),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),new V.bl(0,0,0))
z.W=0.05
z.U=1
z.a2=0.25
z.a9=0.25
z.ab=0.25
z.ac=0.1
z.af=0.2
z.an=0.5
z.aj=0.5
z.ak=0.5
z.cx=new V.bn()
x=[E.a]
z.sb4(new V.x(V.a9(),0,x))
z.sb7(new V.x(V.a9(),0,x))
z.sb_(new V.x(V.b4(),0,[V.ae]))
z.sb6(new V.x(V.bC(),0,[P.c]))
c6.fx=z
c6.H(w.ch,C.e,C.e)
c6.H(w.cx,C.h,C.e)
c6.H(w.Q,C.h,C.h)
c6.H(w.cy,C.k,C.e)
c6.H(w.db,C.k,C.h)
c6.H(w.dx,C.l,C.e)
c6.H(w.dy,C.l,C.h)
w=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}w.S(0)
c7=new L.ir(y,c6,w,10)
J.aR(C.m.ao(document,"#title"),"Domino test")
c7.aU(0)
c7.b2()
C.r.aV(window,c7.gaJ(c7))},"$0","m8",0,0,0],
ir:{"^":"bc;a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
y=V.a0()
y.ag(50,10)
z.a=y
x=new Float64Array(2)
w=new V.J(C.f,new E.a(x),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
x=new E.a(new Float64Array(2))
x.t(0,-10)
w.c=x
x=this.b
v=x.R(w)
v.Z(z)
u=this.a
C.a.p(u,v)
for(t=0;t<4;++t){z=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
y=V.a0()
y.ag(15,0.125)
z.a=y
s=new Float64Array(2)
w=new V.J(C.f,new E.a(s),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
s=new Float64Array(2)
s[0]=0
s[1]=5+5*t
w.c=new E.a(s)
v=x.R(w)
v.Z(z)
C.a.p(u,v)}z=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
y=V.a0()
y.ag(0.125,2)
z.a=y
z.e=25
s=new Float64Array(2)
w=new V.J(C.f,new E.a(s),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
w.a=C.j
for(t=0;t<4;++t)for(s=t===3,r=t===2,q=7.3+5*t,p=0;p<25;++p){z.c=0.5
o=new Float64Array(2)
o[0]=-14.75+p*1.2291666666666667
o[1]=q
w.c=new E.a(o)
if(r&&p===0){w.d=-0.1
o[0]=o[0]+0.1}else if(s&&p===24){w.d=0.1
o[0]=o[0]-0.1}else w.d=0
n=x.R(w)
n.Z(z)
C.a.p(u,n)}}}}],["","",,T,{"^":"",is:{"^":"bc;0cx,a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bj:function(a,b,c){var z,y,x,w,v
z=V.a0()
z.ag(0.1,0.5)
y=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
y.a=z
y.e=this.cx
x=new Float64Array(2)
w=new V.J(C.f,new E.a(x),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
w.a=C.j
y.c=0.1
y.d=0.65
x=new E.a(new Float64Array(2))
x.t(a,b)
w.c=x
w.d=c?1.5707963267948966:0
v=this.b.R(w)
v.Z(y)
C.a.p(this.a,v)},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=V.a0()
z.ag(50,10)
y=new Float64Array(2)
x=new V.J(C.f,new E.a(y),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
y=new E.a(new Float64Array(2))
y.t(0,-10)
x.c=y
y=this.b
w=y.R(x)
w.am(z)
v=this.a
C.a.p(v,w)
this.cx=10
z=V.a0()
z.ag(0.7,0.7)
u=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
u.e=35
t=new Float64Array(2)
x=new V.J(C.f,new E.a(t),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
x.a=C.j
u.a=z
u.c=0
u.d=0.85
x.ch=!0
t=new E.a(new Float64Array(2))
t.t(30,5)
x.c=t
s=y.R(x)
C.a.p(v,s)
s.Z(u)
t=new E.a(new Float64Array(2))
t.t(-25,-25)
s.ses(t)
s.se0(6.7)
u.e=25
t=new E.a(new Float64Array(2))
t.t(-30,25)
x.c=t
s=y.R(x)
C.a.p(v,s)
s.Z(u)
y=new E.a(new Float64Array(2))
y.t(35,-10)
s.ses(y)
s.se0(-8.3)
for(r=0;r<25;++r){q=r*1.5-18.75
this.bj(q,0.5,!1)
this.bj(q,1.1,!0)}for(q=18.75,p=1;p<25;++p){if(p>3){y=this.cx
if(typeof y!=="number")return y.G()
this.cx=y*0.8}o=0.5+1.386*p
for(y=25-p,v=o+0.6,t=o-0.6,n=y-1,m=1.5*y/2,l=o-0.2,r=0;r<y;++r){q=r*1.5-m
k=this.cx
if(typeof k!=="number")return k.G()
this.cx=k*2.5
if(r===0)this.bj(q-1.25+0.1,l,!1)
if(r===n)this.bj(q+1.25-0.1,l,!1)
k=this.cx
if(typeof k!=="number")return k.d8()
this.cx=k/2.5
this.bj(q,o,!1)
this.bj(q,v,!0)
this.bj(q,t,!0)}}},
E:{
mO:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
z=[V.aj]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.t(0,-10)
w=V.bb(100,10)
v=V.ba(V.bf())
u=V.bA(4,4)
t=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}t.S(0)
s=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}s.S(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.j
n=[P.d,E.a]
m=P.a_(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.F()
f=V.F()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}b.S(0)
a=V.F()
a0=V.F()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.W()
a4=V.W()
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
b9=C.c.P(C.c.X(102))
c0=C.c.P(C.c.X(102))
c1=C.c.P(C.c.X(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.a_(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.h(x)
c6=new V.bx(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ah(0,0,0,0,0,!1),new G.T(t),new G.T(s),new G.a3(0,0,0),new G.v(new E.a(r),new G.o(0,1)),new E.a(q),new E.a(p),new V.ai(m),new V.by(),new V.bz(new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new V.a8(new E.a(i),new E.a(h),0),new V.ac(0,0,0,0,0,0,g,new V.ag(),new V.G(0),f,new V.G(0),new V.aa(e,d,0)),c,new G.T(b),new V.ac(0,0,0,0,0,0,a,new V.ag(),new V.G(0),a0,new V.G(0),new V.aa(a1,a2,0)),new V.bt(a3,a4,new G.D(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.D(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.bu(C.q,0),new V.ah(0,0,0,0,0,!1),z,new G.D(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.D(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.a3(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.ai(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.b8(0,c6)
n.d=new V.b7()
n.a=v
c6.b=n
c6.fr=new V.br(new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.bp(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.O(new E.a(z),new E.a(x)),new V.bd(!1,0),new V.O(new E.a(v),new E.a(u)),new E.a(t),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.b9(),new V.bo(0,new E.a(q),new E.a(p)),new V.bw(new E.a(o)),new V.bs(new V.a8(new E.a(n),new E.a(m),0),new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.o(0,1),new G.v(new E.a(h),new G.o(0,1)),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),new V.bl(0,0,0))
z.W=0.05
z.U=1
z.a2=0.25
z.a9=0.25
z.ab=0.25
z.ac=0.1
z.af=0.2
z.an=0.5
z.aj=0.5
z.ak=0.5
z.cx=new V.bn()
x=[E.a]
z.sb4(new V.x(V.a9(),0,x))
z.sb7(new V.x(V.a9(),0,x))
z.sb_(new V.x(V.b4(),0,[V.ae]))
z.sb6(new V.x(V.bC(),0,[P.c]))
c6.fx=z
c6.H(w.ch,C.e,C.e)
c6.H(w.cx,C.h,C.e)
c6.H(w.Q,C.h,C.h)
c6.H(w.cy,C.k,C.e)
c6.H(w.db,C.k,C.h)
c6.H(w.dx,C.l,C.e)
c6.H(w.dy,C.l,C.h)
w=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}w.S(0)
c7=new T.is(y,c6,w,10)
J.aR(C.m.ao(document,"#title"),"Domino tower")
c7.aU(0)
c7.b2()
C.r.aV(window,c7.gaJ(c7))},"$0","m9",0,0,0]}}}],["","",,Y,{"^":"",iD:{"^":"bc;0cx,0cy,a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",E:{
na:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2
z=[V.aj]
y=H.f([],z)
x=new E.a(new Float64Array(2))
x.t(0,-10)
w=V.bb(100,10)
v=V.ba(V.bf())
u=V.bA(4,4)
t=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}t.S(0)
s=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}s.S(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.j
n=[P.d,E.a]
m=P.a_(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.F()
f=V.F()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,z)
b=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}b.S(0)
a=V.F()
a0=V.F()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.W()
a4=V.W()
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
b9=C.c.P(C.c.X(102))
c0=C.c.P(C.c.X(102))
c1=C.c.P(C.c.X(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.a_(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.h(x)
c6=new V.bx(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ah(0,0,0,0,0,!1),new G.T(t),new G.T(s),new G.a3(0,0,0),new G.v(new E.a(r),new G.o(0,1)),new E.a(q),new E.a(p),new V.ai(m),new V.by(),new V.bz(new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new V.a8(new E.a(i),new E.a(h),0),new V.ac(0,0,0,0,0,0,g,new V.ag(),new V.G(0),f,new V.G(0),new V.aa(e,d,0)),c,new G.T(b),new V.ac(0,0,0,0,0,0,a,new V.ag(),new V.G(0),a0,new V.G(0),new V.aa(a1,a2,0)),new V.bt(a3,a4,new G.D(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.D(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.bu(C.q,0),new V.ah(0,0,0,0,0,!1),z,new G.D(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.D(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.a3(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.ai(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.b8(0,c6)
n.d=new V.b7()
n.a=v
c6.b=n
c6.fr=new V.br(new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.bp(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.O(new E.a(z),new E.a(x)),new V.bd(!1,0),new V.O(new E.a(v),new E.a(u)),new E.a(t),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.b9(),new V.bo(0,new E.a(q),new E.a(p)),new V.bw(new E.a(o)),new V.bs(new V.a8(new E.a(n),new E.a(m),0),new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.o(0,1),new G.v(new E.a(h),new G.o(0,1)),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),new V.bl(0,0,0))
z.W=0.05
z.U=1
z.a2=0.25
z.a9=0.25
z.ab=0.25
z.ac=0.1
z.af=0.2
z.an=0.5
z.aj=0.5
z.ak=0.5
z.cx=new V.bn()
x=[E.a]
z.sb4(new V.x(V.a9(),0,x))
z.sb7(new V.x(V.a9(),0,x))
z.sb_(new V.x(V.b4(),0,[V.ae]))
z.sb6(new V.x(V.bC(),0,[P.c]))
c6.fx=z
c6.H(w.ch,C.e,C.e)
c6.H(w.cx,C.h,C.e)
c6.H(w.Q,C.h,C.h)
c6.H(w.cy,C.k,C.e)
c6.H(w.db,C.k,C.h)
c6.H(w.dx,C.l,C.e)
c6.H(w.dy,C.l,C.h)
w=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}w.S(0)
c7=new Y.iD(y,c6,w,10)
J.aR(C.m.ao(document,"#title"),"FrictionJoint test")
c8=V.a0()
z=new E.a(new Float64Array(2))
x=new Float64Array(2)
z.t(0,0)
x=c6.R(new V.J(C.f,z,0,new E.a(x),0,0,0,!0,!0,!1,!1,!0,1))
c7.cx=x
c8.ag(50,0.4)
x.am(c8)
z=new E.a(new Float64Array(2))
z.t(-20,0)
c8.aC(0.4,50,z,0)
x.am(c8)
z=new E.a(new Float64Array(2))
z.t(20,0)
c8.aC(0.4,50,z,0)
x.am(c8)
C.a.p(y,x)
c9=V.a0()
c9.aC(3,1.5,new E.a(new Float64Array(2)),1.5707963267948966)
z=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
c7.cy=z
z.d=0.5
z.e=0.1
z.a=c9
w=new Float64Array(2)
d0=new V.J(C.f,new E.a(w),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
d0.a=C.j
w=new E.a(new Float64Array(2))
w.t(-10,30)
d0.c=w
d1=c6.R(d0)
d1.Z(z)
C.a.p(y,d1)
w=new Float64Array(2)
d0=new V.J(C.f,new E.a(w),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
d0.a=C.j
w=new E.a(new Float64Array(2))
w.t(10,30)
d0.c=w
d1=c6.R(d0)
d1.Z(z)
z=new Float64Array(2)
d2=new V.eH(new E.a(z),new E.a(new Float64Array(2)),0,0,!1)
d2.a=C.K
d2.c=d1
d2.d=x
d2.x=3
d2.y=5
d2.e=!0
c6.b0(d2)
C.a.p(y,d1)
c7.b2()
c7.x.a|=4
C.r.aV(window,c7.gaJ(c7))},"$0","mc",0,0,0]}}}],["","",,F,{"^":"",
ho:function(){var z,y,x,w,v,u,t,s,r,q,p
P.e1("Checking for specific demo")
z=P.kf().gez().i(0,"demo")
y=document
x=C.m.ao(y,"body")
w=$.$get$hj()
if(C.a.c6(w,z)>-1){P.e1("Loading "+H.i(z))
w=C.m.ao(y,"#fps").style
w.display="block"
y=C.m.ao(y,"#world-step").style
y.display="block"
y=$.$get$hi()
if(y.bf(z))y.i(0,z).$0()}else{P.e1("Creating menu")
v=C.m.ao(y,"#fps").style
v.display="none"
v=C.m.ao(y,"#world-step").style
v.display="none"
x.toString
v=J.R(x)
v.ap(x,y.createTextNode("Choose a demo:"))
u=y.createElement("ul")
for(t=0;t<8;++t){s=w[t]
r=y.createElement("li")
q=H.i(window.location.href)+"?demo="+s
p=y.createElement("a")
p.href=q
C.a9.ap(p,y.createTextNode(s))
C.au.ap(r,p)
C.aB.ap(u,r)}v.ap(x,u)}}},1],["","",,T,{"^":"",jD:{"^":"bc;0cx,0cy,0db,dx,a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
fh:[function(a,b){var z,y,x,w,v,u,t,s
H.bF(b)
z=this.db
y=this.dx
if(typeof b!=="number")return b.L()
x=this.cx
z.z.cg()
z.Q.cg()
z.ch.cg()
z.cx.cg()
z.z.cf(x)
z.Q.cf(x)
z.ch.cf(x)
z.cx.cf(x)
if(typeof x!=="number")return x.ad()
switch(x&12){case 4:w=z.r
break
case 8:w=-z.r
break
default:w=0}v=z.x*1000/(b-y)
y=z.cy
u=y.f
t=y.r.f.e-u.f.e-y.fy
s=t+Math.max(-v,Math.min(w-t,v))
y.dj(s,s)
z.db.dj(s,s)
this.dx=b
this.fm(0,b)},"$1","gaJ",5,0,9],
j4:[function(a){var z
switch(H.h(a,"$isc7").keyCode){case 37:z=this.cx
if(typeof z!=="number")return z.bo()
this.cx=z|4
break
case 38:z=this.cx
if(typeof z!=="number")return z.bo()
this.cx=z|1
break
case 39:z=this.cx
if(typeof z!=="number")return z.bo()
this.cx=z|8
break
case 40:z=this.cx
if(typeof z!=="number")return z.bo()
this.cx=z|2
break}},"$1","gh8",4,0,7],
j5:[function(a){var z
switch(H.h(a,"$isc7").keyCode){case 37:z=this.cx
if(typeof z!=="number")return z.ad()
this.cx=z&4294967291
break
case 38:z=this.cx
if(typeof z!=="number")return z.ad()
this.cx=z&4294967294
break
case 39:z=this.cx
if(typeof z!=="number")return z.ad()
this.cx=z&4294967287
break
case 40:z=this.cx
if(typeof z!=="number")return z.ad()
this.cx=z&4294967293
break}},"$1","gh9",4,0,7],
cB:function(a,b){var z,y,x
z=a.f.Q
y=a.r.Q
x=J.M(z)
if(!!x.$iscU&&y instanceof T.bh){H.h(z,"$iscU")
if(b){z.r.p(0,y)
z.c2()}else if(z.r.eA(0,y))z.c2()}else if(!!x.$isbh&&y instanceof T.cU){H.h(z,"$isbh")
if(b){y.r.p(0,z)
y.c2()}else if(y.r.eA(0,z))y.c2()}},
$ismL:1,
E:{
nM:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
z=new Float64Array(2)
y=[V.aj]
x=H.f([],y)
w=V.bb(100,10)
v=V.ba(V.bf())
u=V.bA(4,4)
t=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}t.S(0)
s=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}s.S(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.j
n=[P.d,E.a]
m=P.a_(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.F()
f=V.F()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.f(c,y)
b=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}b.S(0)
a=V.F()
a0=V.F()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.W()
a4=V.W()
a5=new Float64Array(2)
a6=new Float64Array(2)
a7=new Float64Array(2)
a8=new Float64Array(2)
a9=new Float64Array(2)
b0=new Float64Array(2)
b1=new Array(2)
b1.fixed$length=Array
y=H.f(b1,y)
b1=new Float64Array(2)
b2=new Float64Array(2)
b3=new Float64Array(2)
b4=new Float64Array(2)
b5=new Float64Array(2)
b6=new Float64Array(2)
b7=new Float64Array(2)
b8=new Float64Array(2)
b9=C.c.P(C.c.X(102))
c0=C.c.P(C.c.X(102))
c1=C.c.P(C.c.X(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.a_(null,null,null,o,n)
o=new E.a(new Float64Array(2))
o.h(new E.a(z))
c6=new V.bx(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ah(0,0,0,0,0,!1),new G.T(t),new G.T(s),new G.a3(0,0,0),new G.v(new E.a(r),new G.o(0,1)),new E.a(q),new E.a(p),new V.ai(m),new V.by(),new V.bz(new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new V.a8(new E.a(i),new E.a(h),0),new V.ac(0,0,0,0,0,0,g,new V.ag(),new V.G(0),f,new V.G(0),new V.aa(e,d,0)),c,new G.T(b),new V.ac(0,0,0,0,0,0,a,new V.ag(),new V.G(0),a0,new V.G(0),new V.aa(a1,a2,0)),new V.bt(a3,a4,new G.D(new E.a(a5),new E.a(a6),new E.a(a7),0,0,0),new G.D(new E.a(a8),new E.a(a9),new E.a(b0),0,0,0),0),new V.bu(C.q,0),new V.ah(0,0,0,0,0,!1),y,new G.D(new E.a(b1),new E.a(b2),new E.a(b3),0,0,0),new G.D(new E.a(b4),new E.a(b5),new E.a(b6),0,0,0),0.12,-1,new E.a(b7),new E.a(b8),new G.a3(b9,c0,c1),new E.a(c2),new E.a(c3),new E.a(c4),new E.a(c5),new V.ai(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.b8(0,c6)
n.d=new V.b7()
n.a=v
c6.b=n
c6.fr=new V.br(new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0),new V.l(0,0,17976931348623157e292,-17976931348623157e292,0))
z=new Float64Array(2)
y=new Float64Array(2)
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
z=new V.bp(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.O(new E.a(z),new E.a(y)),new V.bd(!1,0),new V.O(new E.a(v),new E.a(u)),new E.a(t),new G.v(new E.a(s),new G.o(0,1)),new G.v(new E.a(r),new G.o(0,1)),new V.b9(),new V.bo(0,new E.a(q),new E.a(p)),new V.bw(new E.a(o)),new V.bs(new V.a8(new E.a(n),new E.a(m),0),new V.af(new E.a(l),0),new E.a(k),new E.a(j)),new E.a(i),new G.o(0,1),new G.v(new E.a(h),new G.o(0,1)),new G.v(new E.a(new Float64Array(2)),new G.o(0,1)),new V.bl(0,0,0))
z.W=0.05
z.U=1
z.a2=0.25
z.a9=0.25
z.ab=0.25
z.ac=0.1
z.af=0.2
z.an=0.5
z.aj=0.5
z.ak=0.5
z.cx=new V.bn()
y=E.a
v=[y]
z.sb4(new V.x(V.a9(),0,v))
z.sb7(new V.x(V.a9(),0,v))
z.sb_(new V.x(V.b4(),0,[V.ae]))
z.sb6(new V.x(V.bC(),0,[P.c]))
c6.fx=z
c6.H(w.ch,C.e,C.e)
c6.H(w.cx,C.h,C.e)
c6.H(w.Q,C.h,C.h)
c6.H(w.cy,C.k,C.e)
c6.H(w.db,C.k,C.h)
c6.H(w.dx,C.l,C.e)
c6.H(w.dy,C.l,C.h)
w=new P.I(0,0)
if($.m==null){H.H()
$.m=$.C}w.S(0)
c7=new T.jD(0,x,c6,w,2.5)
z=document
J.aR(C.m.ao(z,"#title"),"Racer")
x=new Float64Array(2)
x=c6.R(new V.J(C.f,new E.a(x),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1))
c7.cy=x
x.k4="Ground"
c8=V.a0()
c9=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
c9.a=c8
c9.f=!0
c9.b=T.eI(0.001,!1)
w=new E.a(new Float64Array(2))
w.t(-30,30)
c8.aC(27,21,w,0.3490658503988659)
x.Z(c9)
c9.b=T.eI(0.2,!1)
w=new E.a(new Float64Array(2))
w.t(20,40)
c8.aC(27,15,w,-0.6981317007977318)
x.Z(c9)
x=new Float64Array(2)
d0=c6.R(new V.J(C.f,new E.a(x),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1))
d0.k4="Boundary"
c8=V.a0()
c9=new V.ab(0.2,0,0,!1,new V.a7(1,65535,0))
c9.a=c8
x=new E.a(new Float64Array(2))
x.t(-150,-100)
w=new E.a(new Float64Array(2))
w.t(150,-100)
c8.bB(x,w)
d0.Z(c9)
x=new E.a(new Float64Array(2))
x.t(150,-100)
w=new E.a(new Float64Array(2))
w.t(150,100)
c8.bB(x,w)
d0.Z(c9)
x=new E.a(new Float64Array(2))
x.t(150,100)
w=new E.a(new Float64Array(2))
w.t(-150,100)
c8.bB(x,w)
d0.Z(c9)
x=new E.a(new Float64Array(2))
x.t(-150,100)
w=new E.a(new Float64Array(2))
w.t(-150,-100)
c8.bB(x,w)
d0.Z(c9)
w=new T.hW(250,-40,300,500,8.5,7.5,0.6108652381980153,2.792526803190927)
x=new Float64Array(2)
d1=new V.J(C.f,new E.a(x),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
d1.a=C.j
x=c6.R(d1)
w.y=x
x.k4="Car"
x.k1=3
v=new Array(8)
v.fixed$length=Array
d2=H.f(v,[y])
v=new E.a(new Float64Array(2))
v.t(1.5,0)
C.a.l(d2,0,v)
v=new E.a(new Float64Array(2))
v.t(3,2.5)
C.a.l(d2,1,v)
v=new E.a(new Float64Array(2))
v.t(2.8,5.5)
C.a.l(d2,2,v)
v=new E.a(new Float64Array(2))
v.t(1,10)
C.a.l(d2,3,v)
v=new E.a(new Float64Array(2))
v.t(-1,10)
C.a.l(d2,4,v)
v=new E.a(new Float64Array(2))
v.t(-2.8,5.5)
C.a.l(d2,5,v)
v=new E.a(new Float64Array(2))
v.t(-3,2.5)
C.a.l(d2,6,v)
v=new E.a(new Float64Array(2))
v.t(-1.5,0)
C.a.l(d2,7,v)
c8=V.a0()
c8.eW(H.k(d2,"$isd",[y],"$asd"),8,null,null)
x.c4(c8,0.1)
y=new E.a(new Float64Array(2))
v=new E.a(new Float64Array(2))
d3=new V.dA(y,v,0,!1,0,0,!1,0,0,!1)
d3.a=C.H
d3.c=x
d3.y=!0
v.N()
v=T.cV(c6,250,-40,300,8.5)
w.z=v
d3.d=v.a
y.t(-3,0.75)
c6.b0(d3)
v=T.cV(c6,250,-40,300,8.5)
w.Q=v
d3.d=v.a
y.t(3,0.75)
c6.b0(d3)
v=T.cV(c6,250,-40,500,7.5)
w.ch=v
d3.d=v.a
y.t(-3,8.5)
w.cy=H.y(c6.b0(d3),"$isdz")
v=T.cV(c6,250,-40,500,7.5)
w.cx=v
d3.d=v.a
y.t(3,8.5)
w.db=H.y(c6.b0(d3),"$isdz")
c7.db=w
c7.cx=0
w=W.c7
y={func:1,ret:-1,args:[w]}
W.dK(z,"keydown",H.q(c7.gh8(),y),!1,w)
W.dK(z,"keyup",H.q(c7.gh9(),y),!1,w)
c6.b.e=c7
c7.b2()
z=z.body
z.toString;(z&&C.x).ap(z,W.eB("<p>Use the arrow keys to drive the car.</p>",null,null))
C.r.aV(window,c7.gaJ(c7))},"$0","my",0,0,0]}},hW:{"^":"c;a,b,c,d,e,f,r,x,0y,0z,0Q,0ch,0cx,0cy,0db"},bh:{"^":"c;a6:a>,b,c",E:{
eI:function(a,b){var z=$.eJ
$.eJ=z+1
return new T.bh(z,a,!1)}}},cU:{"^":"c;0a,b,c,d,e,0f,r,x,y",
cg:function(){var z,y,x,w,v,u,t,s,r
z=this.a
z.toString
y=new E.a(new Float64Array(2))
G.aW(z.d.b,this.x,y)
y.B(0,y.F(this.a.r))
y.B(0,-this.a.fr)
z=this.e
if(Math.sqrt(y.gV())>z)y.B(0,z/Math.sqrt(y.gV()))
z=this.a
y.B(0,this.f)
z.bI(y,this.a.f.c,!0)
z=this.a
x=this.f
if(typeof x!=="number")return H.N(x)
w=z.fy
v=z.fr
u=z.f.a.a
t=u[0]
u=u[1]
z.hG(0.1*x*(w+v*(t*t+u*u))*-z.x)
s=this.gdH()
r=Math.sqrt(s.gV())
s.a7()
z=this.a
u=this.f
if(typeof u!=="number")return u.G()
s.B(0,u*(-2*r))
z.e2(s,this.a.f.c)},
cf:function(a){var z,y,x,w,v,u
if(typeof a!=="number")return a.ad()
switch(a&3){case 1:z=this.b
break
case 2:z=this.c
break
default:return}y=this.a
x=new E.a(new Float64Array(2))
x.t(0,1)
y.toString
w=new E.a(new Float64Array(2))
G.aW(y.d.b,x,w)
v=this.gdH().F(w)
if(z<v)u=-this.d
else u=z>v?this.d:0
if(Math.abs(u)>0){y=this.a
x=this.f
if(typeof x!=="number")return x.G()
w.B(0,x*u)
y.e2(w,this.a.f.c)}},
c2:function(){var z=this.r
if(z.a===0)this.f=1
else{this.f=0
z.bg(0,new T.k2(this))}},
gdH:function(){var z,y
z=this.a
z.toString
y=new E.a(new Float64Array(2))
G.aW(z.d.b,this.y,y)
y.B(0,y.F(this.a.r))
return y},
E:{
cV:function(a,b,c,d,e){var z,y,x,w,v
z=P.cq(null,null,null,T.bh)
y=new E.a(new Float64Array(2))
y.t(1,0)
x=new E.a(new Float64Array(2))
x.t(0,1)
x=new T.cU(b,c,d,e,z,y,x)
z=new Float64Array(2)
w=new V.J(C.f,new E.a(z),0,new E.a(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
w.a=C.j
z=a.R(w)
x.a=z
z.k4="Tire"
v=V.a0()
v.ag(0.5,1.25)
z.c4(v,1).Q=x
x.f=1
return x}}},k2:{"^":"w:32;a",
$1:function(a){var z,y,x
H.h(a,"$isbh")
z=this.a
y=z.f
x=a.b
z.f=Math.max(H.hh(y),x)}}}],["","",,O,{"^":""}]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.eL.prototype}if(typeof a=="string")return J.c5.prototype
if(a==null)return J.eM.prototype
if(typeof a=="boolean")return J.iN.prototype
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.md=function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.a4=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.cA=function(a){if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.me=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.bL.prototype}if(a==null)return a
if(!(a instanceof P.c))return J.cc.prototype
return a}
J.dY=function(a){if(typeof a=="number")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.cc.prototype
return a}
J.mf=function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.cc.prototype
return a}
J.dZ=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.cc.prototype
return a}
J.R=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.c)return a
return J.cB(a)}
J.hu=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.md(a).D(a,b)}
J.az=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).at(a,b)}
J.aQ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dY(a).aH(a,b)}
J.e3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dY(a).M(a,b)}
J.e4=function(a){if(typeof a=="number")return-a
return J.me(a).bQ(a)}
J.hv=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mr(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a4(a).i(a,b)}
J.hw=function(a,b,c){return J.cA(a).l(a,b,c)}
J.hx=function(a,b){return J.dZ(a).Y(a,b)}
J.cD=function(a,b){return J.R(a).hn(a,b)}
J.hy=function(a,b,c){return J.R(a).hp(a,b,c)}
J.hz=function(a,b,c,d){return J.R(a).e_(a,b,c,d)}
J.hA=function(a,b){return J.R(a).ap(a,b)}
J.hB=function(a,b){return J.mf(a).bx(a,b)}
J.db=function(a,b,c){return J.a4(a).hS(a,b,c)}
J.e5=function(a,b){return J.cA(a).aS(a,b)}
J.hC=function(a,b,c,d){return J.cA(a).bL(a,b,c,d)}
J.hD=function(a){return J.R(a).ghH(a)}
J.bG=function(a){return J.M(a).ga6(a)}
J.cl=function(a){return J.cA(a).gar(a)}
J.at=function(a){return J.a4(a).gI(a)}
J.hE=function(a){return J.R(a).gbk(a)}
J.hF=function(a){return J.R(a).giA(a)}
J.hG=function(a){return J.R(a).giN(a)}
J.aA=function(a){return J.R(a).gj(a)}
J.aB=function(a){return J.R(a).gk(a)}
J.dc=function(a,b){return J.R(a).bz(a,b)}
J.e6=function(a){return J.cA(a).iH(a)}
J.e7=function(a,b){return J.R(a).sal(a,b)}
J.aR=function(a,b){return J.R(a).seq(a,b)}
J.e8=function(a,b){return J.R(a).sbk(a,b)}
J.dd=function(a,b){return J.R(a).sj(a,b)}
J.de=function(a,b){return J.R(a).sk(a,b)}
J.hH=function(a,b,c){return J.R(a).eV(a,b,c)}
J.e9=function(a){return J.dY(a).P(a)}
J.hI=function(a){return J.dZ(a).iS(a)}
J.bH=function(a){return J.M(a).u(a)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.a9=W.ea.prototype
C.x=W.cE.prototype
C.t=W.eh.prototype
C.ad=W.ip.prototype
C.ae=W.iG.prototype
C.m=W.iH.prototype
C.af=J.S.prototype
C.a=J.bi.prototype
C.u=J.eL.prototype
C.c=J.dq.prototype
C.i=J.eM.prototype
C.d=J.bL.prototype
C.b=J.c5.prototype
C.am=J.c6.prototype
C.au=W.iQ.prototype
C.v=H.jc.prototype
C.N=W.jf.prototype
C.a4=J.jt.prototype
C.a5=W.jE.prototype
C.a7=W.jY.prototype
C.aB=W.k7.prototype
C.S=J.cc.prototype
C.r=W.kw.prototype
C.ab=new P.hR(!1)
C.aa=new P.hQ(C.ab)
C.f=new V.dg(0,"BodyType.STATIC")
C.U=new V.dg(1,"BodyType.KINEMATIC")
C.j=new V.dg(2,"BodyType.DYNAMIC")
C.ac=new P.jp()
C.n=new P.l6()
C.y=new V.dk(0,"EPAxisType.UNKNOWN")
C.A=new V.dk(1,"EPAxisType.EDGE_A")
C.V=new V.dk(2,"EPAxisType.EDGE_B")
C.ag=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.ah=function(hooks) {
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
C.W=function(hooks) { return hooks; }

C.ai=function(getTagFallback) {
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
C.aj=function() {
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
C.ak=function(hooks) {
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
C.al=function(hooks) {
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
C.X=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.an=new V.ay(0,"JointType.UNKNOWN")
C.H=new V.ay(1,"JointType.REVOLUTE")
C.ao=new V.ay(10,"JointType.ROPE")
C.I=new V.ay(11,"JointType.CONSTANT_VOLUME")
C.ap=new V.ay(12,"JointType.MOTOR")
C.aq=new V.ay(2,"JointType.PRISMATIC")
C.J=new V.ay(3,"JointType.DISTANCE")
C.Y=new V.ay(4,"JointType.PULLEY")
C.Z=new V.ay(5,"JointType.MOUSE")
C.ar=new V.ay(6,"JointType.GEAR")
C.as=new V.ay(7,"JointType.WHEEL")
C.at=new V.ay(8,"JointType.WELD")
C.K=new V.ay(9,"JointType.FRICTION")
C.o=new V.cP(0,"LimitState.INACTIVE")
C.B=new V.cP(1,"LimitState.AT_LOWER")
C.z=new V.cP(2,"LimitState.AT_UPPER")
C.C=new V.cP(3,"LimitState.EQUAL")
C.a_=H.f(I.al([127,2047,65535,1114111]),[P.j])
C.D=H.f(I.al([0,0,32776,33792,1,10240,0,0]),[P.j])
C.av=H.f(I.al(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.E=H.f(I.al([0,0,65490,45055,65535,34815,65534,18431]),[P.j])
C.F=H.f(I.al([0,0,26624,1023,65534,2047,65534,2047]),[P.j])
C.aw=H.f(I.al(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.a0=H.f(I.al([]),[P.n])
C.ax=H.f(I.al([0,0,32722,12287,65534,34815,65534,18431]),[P.j])
C.a1=H.f(I.al([0,0,24576,1023,65534,34815,65534,18431]),[P.j])
C.a2=H.f(I.al([0,0,32754,11263,65534,34815,65534,18431]),[P.j])
C.a3=H.f(I.al([0,0,65490,12287,65535,34815,65534,18431]),[P.j])
C.L=H.f(I.al(["bind","if","ref","repeat","syntax"]),[P.n])
C.M=H.f(I.al(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.w=new V.du(0,"ManifoldType.CIRCLES")
C.p=new V.du(1,"ManifoldType.FACE_A")
C.G=new V.du(2,"ManifoldType.FACE_B")
C.ay=new H.i8(0,{},C.a0,[P.n,P.n])
C.O=new V.dB(0,"SeparationFunctionType.POINTS")
C.P=new V.dB(1,"SeparationFunctionType.FACE_A")
C.Q=new V.dB(2,"SeparationFunctionType.FACE_B")
C.e=new V.cS(0,"ShapeType.CIRCLE")
C.k=new V.cS(1,"ShapeType.EDGE")
C.h=new V.cS(2,"ShapeType.POLYGON")
C.l=new V.cS(3,"ShapeType.CHAIN")
C.q=new V.cw(0,"TOIOutputState.UNKNOWN")
C.a6=new V.cw(1,"TOIOutputState.FAILED")
C.az=new V.cw(2,"TOIOutputState.OVERLAPPED")
C.R=new V.cw(3,"TOIOutputState.TOUCHING")
C.aA=new V.cw(4,"TOIOutputState.SEPARATED")
C.T=new P.kk(!1)
C.a8=new V.kr(0,"VertexType.ISOLATED")
$.C=null
$.ct=null
$.aS=0
$.bV=null
$.ee=null
$.dQ=!1
$.hm=null
$.he=null
$.hr=null
$.d3=null
$.d6=null
$.e_=null
$.bP=null
$.cg=null
$.ch=null
$.dR=!1
$.U=C.n
$.m=null
$.b_=null
$.dm=null
$.eD=null
$.eC=null
$.er=null
$.eq=null
$.ep=null
$.eo=null
$.ew=0
$.ex=0
$.ey=20
$.fe=0
$.ff=0
$.fg=0
$.fi=0
$.fh=0
$.mD=1
$.eJ=0
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
I.$lazy(y,x,w)}})(["en","$get$en",function(){return H.hl("_$dart_dartClosure")},"dr","$get$dr",function(){return H.hl("_$dart_js")},"fm","$get$fm",function(){return H.aX(H.cX({
toString:function(){return"$receiver$"}}))},"fn","$get$fn",function(){return H.aX(H.cX({$method$:null,
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aX(H.cX(null))},"fp","$get$fp",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aX(H.cX(void 0))},"fu","$get$fu",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aX(H.fs(null))},"fq","$get$fq",function(){return H.aX(function(){try{null.$method$}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aX(H.fs(void 0))},"fv","$get$fv",function(){return H.aX(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dJ","$get$dJ",function(){return P.kz()},"ci","$get$ci",function(){return[]},"fC","$get$fC",function(){return P.ko()},"fJ","$get$fJ",function(){return H.jd(H.lR(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.j])))},"ha","$get$ha",function(){return P.lM()},"em","$get$em",function(){return{}},"fP","$get$fP",function(){return P.eR(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)},"dN","$get$dN",function(){return P.eQ(P.n,P.c2)},"bI","$get$bI",function(){return E.fD()},"dF","$get$dF",function(){return E.fD()},"hj","$get$hj",function(){return H.f(["ball_cage","blob_test","box_test","circle_stress","domino_test","domino_tower","friction_joint_test","racer"],[P.n])},"hi","$get$hi",function(){return P.iU(["ball_cage",D.m3(),"blob_test",O.m4(),"box_test",S.m6(),"circle_stress",A.m7(),"domino_test",L.m8(),"domino_tower",T.m9(),"friction_joint_test",Y.mc(),"racer",T.my()],P.n,P.c2)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1},{func:1,ret:P.V},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.ak,args:[P.n]},{func:1,ret:P.V,args:[,]},{func:1,args:[,]},{func:1,ret:P.ak,args:[W.aI,P.n,P.n,W.cx]},{func:1,ret:-1,args:[W.c7]},{func:1,ret:P.V,args:[P.bv]},{func:1,ret:-1,args:[P.am]},{func:1,ret:P.ak,args:[W.aU]},{func:1,ret:P.n,args:[P.j]},{func:1,ret:P.j,args:[[P.d,P.j],P.j]},{func:1,ret:P.j},{func:1,ret:P.V,args:[,,]},{func:1,ret:[P.aq,P.n,P.n],args:[[P.aq,P.n,P.n],P.n]},{func:1,ret:-1,args:[P.n,P.j]},{func:1,ret:-1,args:[P.n],opt:[,]},{func:1,ret:P.j,args:[P.j,P.j]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.L,args:[P.j]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.ak,args:[W.E]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:[P.b3,,],args:[,]},{func:1,ret:V.ae},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:P.j,args:[P.j,P.c]},{func:1,ret:P.V,args:[,],opt:[,]},{func:1,ret:-1,args:[P.c],opt:[P.aM]},{func:1,args:[,P.n]},{func:1,ret:P.V,args:[T.bh]},{func:1,ret:P.j,args:[,,]},{func:1,ret:P.am},{func:1,args:[P.n]},{func:1,ret:P.V,args:[{func:1,ret:-1}]},{func:1,ret:E.a},{func:1,ret:P.c},{func:1,ret:P.V,args:[P.n]}]
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
if(x==y)H.mB(d||a)
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
Isolate.al=a.al
Isolate.dW=a.dW
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
if(typeof dartMainRunner==="function")dartMainRunner(F.ho,[])
else F.ho([])})})()
//# sourceMappingURL=main.dart.js.map
