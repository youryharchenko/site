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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isE)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="H"){processStatics(init.statics[b2]=b3.H,b4)
delete b3.H}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cZ(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d_=function(){}
var dart=[["","",,H,{"^":"",l1:{"^":"c;a"}}],["","",,J,{"^":"",
d3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d2==null){H.ka()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.es("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cx()]
if(v!=null)return v
v=H.kf(a)
if(v!=null)return v
if(typeof a=="function")return C.a9
y=Object.getPrototypeOf(a)
if(y==null)return C.U
if(y===Object.prototype)return C.U
if(typeof w=="function"){Object.defineProperty(w,$.$get$cx(),{value:C.J,enumerable:false,writable:true,configurable:true})
return C.J}return C.J},
E:{"^":"c;",
au:function(a,b){return a===b},
ga2:function(a){return H.bk(a)},
u:["eD",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ArrayBuffer|Blob|CanvasGradient|CanvasPattern|DOMError|File|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|PushMessageData|SQLError|SVGAnimatedEnumeration|SVGAnimatedNumberList|SVGAnimatedString|SVGAnimatedTransformList|StorageManager"},
hg:{"^":"E;",
u:function(a){return String(a)},
ga2:function(a){return a?519018:218159},
$isN:1},
dH:{"^":"E;",
au:function(a,b){return null==b},
u:function(a){return"null"},
ga2:function(a){return 0},
$isH:1},
cy:{"^":"E;",
ga2:function(a){return 0},
u:["eF",function(a){return String(a)}]},
hZ:{"^":"cy;"},
bm:{"^":"cy;"},
bg:{"^":"cy;",
u:function(a){var z=a[$.$get$dn()]
if(z==null)return this.eF(a)
return"JavaScript function for "+H.f(J.b_(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbw:1},
be:{"^":"E;$ti",
q:function(a,b){H.p(b,H.n(a,0))
if(!!a.fixed$length)H.aI(P.ad("add"))
a.push(b)},
cN:function(a,b){return H.cJ(a,b,null,H.n(a,0))},
ay:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
al:function(a,b,c,d,e){var z,y,x,w,v,u
z=H.n(a,0)
H.j(d,"$isx",[z],"$asx")
if(!!a.immutable$list)H.aI(P.ad("setRange"))
P.dX(b,c,a.length,null,null,null)
y=c-b
if(y===0)return
x=J.C(d)
if(!!x.$isd){H.j(d,"$isd",[z],"$asd")
w=e
v=d}else{v=x.cN(d,e).dU(0,!1)
w=0}z=J.X(v)
if(w+y>z.gD(v))throw H.i(H.hd())
if(w<b)for(u=y-1;u>=0;--u)a[b+u]=z.i(v,w+u)
else for(u=0;u<y;++u)a[b+u]=z.i(v,w+u)},
bd:function(a,b,c,d){return this.al(a,b,c,d,0)},
dk:function(a,b){var z,y
H.m(b,{func:1,ret:P.N,args:[H.n(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.i(P.a6(a))}return!1},
aa:function(a,b){var z
for(z=0;z<a.length;++z)if(J.ag(a[z],b))return!0
return!1},
u:function(a){return P.cv(a,"[","]")},
ga7:function(a){return new J.fr(a,a.length,0,[H.n(a,0)])},
ga2:function(a){return H.bk(a)},
gD:function(a){return a.length},
sD:function(a,b){if(!!a.fixed$length)H.aI(P.ad("set length"))
if(b<0)throw H.i(P.aE(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){H.k(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.aV(a,b))
if(b>=a.length||b<0)throw H.i(H.aV(a,b))
return a[b]},
m:function(a,b,c){H.k(b)
H.p(c,H.n(a,0))
if(!!a.immutable$list)H.aI(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.aV(a,b))
if(b>=a.length||b<0)throw H.i(H.aV(a,b))
a[b]=c},
B:function(a,b){var z,y
z=[H.n(a,0)]
H.j(b,"$isd",z,"$asd")
y=C.c.B(a.length,b.gD(b))
z=H.h([],z)
this.sD(z,y)
this.bd(z,0,a.length,a)
this.bd(z,a.length,y,b)
return z},
$isx:1,
$isd:1,
H:{
hf:function(a,b){if(a<0||a>4294967295)throw H.i(P.aE(a,0,4294967295,"length",null))
return J.dF(new Array(a),b)},
dF:function(a,b){return J.bz(H.h(a,[b]))},
bz:function(a){H.bK(a)
a.fixed$length=Array
return a},
l_:[function(a,b){return J.ff(H.f4(a,"$isK"),H.f4(b,"$isK"))},"$2","jL",8,0,26]}},
l0:{"^":"be;$ti"},
fr:{"^":"c;a,b,c,0d,$ti",
sd0:function(a){this.d=H.p(a,H.n(this,0))},
ga_:function(){return this.d},
Y:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.d5(z))
x=this.c
if(x>=y){this.sd0(null)
return!1}this.sd0(z[x]);++this.c
return!0},
$isaL:1},
aM:{"^":"E;",
b8:function(a,b){var z
H.bu(b)
if(typeof b!=="number")throw H.i(H.ap(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gcm(b)
if(this.gcm(a)===z)return 0
if(this.gcm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcm:function(a){return a===0?1/a<0:a<0},
a9:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.i(P.ad(""+a+".toInt()"))},
aJ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.ad(""+a+".floor()"))},
u:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga2:function(a){return a&0x1FFFFFFF},
bu:function(a){return-a},
B:function(a,b){return a+b},
I:function(a,b){if(typeof b!=="number")throw H.i(H.ap(b))
return a-b},
cA:function(a,b){return a/b},
v:function(a,b){if(typeof b!=="number")throw H.i(H.ap(b))
return a*b},
aw:function(a,b){if(typeof b!=="number")throw H.i(H.ap(b))
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dh(a,b)},
b6:function(a,b){return(a|0)===a?a/b|0:this.dh(a,b)},
dh:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.ad("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bk:function(a,b){var z
if(a>0)z=this.fH(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fH:function(a,b){return b>31?0:a>>>b},
b0:function(a,b){return(a|b)>>>0},
M:function(a,b){if(typeof b!=="number")throw H.i(H.ap(b))
return a<b},
aN:function(a,b){if(typeof b!=="number")throw H.i(H.ap(b))
return a>b},
$isK:1,
$asK:function(){return[P.a4]},
$isaW:1,
$isa4:1},
cw:{"^":"aM;",
bu:function(a){return-a},
$isw:1},
dG:{"^":"aM;"},
bf:{"^":"E;",
f6:function(a,b){if(b>=a.length)throw H.i(H.aV(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.v(b)
if(typeof b!=="string")throw H.i(P.dd(b,null,null))
return a+b},
ew:function(a,b,c){var z
if(c>a.length)throw H.i(P.aE(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ev:function(a,b){return this.ew(a,b,0)},
cQ:function(a,b,c){H.k(c)
if(c==null)c=a.length
if(b>c)throw H.i(P.cD(b,null,null))
if(c>a.length)throw H.i(P.cD(c,null,null))
return a.substring(b,c)},
eB:function(a,b){return this.cQ(a,b,null)},
i_:function(a){return a.toLowerCase()},
b8:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.i(H.ap(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
u:function(a){return a},
ga2:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gD:function(a){return a.length},
$isK:1,
$asK:function(){return[P.q]},
$ishY:1,
$isq:1}}],["","",,H,{"^":"",
hc:function(){return new P.c3("No element")},
he:function(){return new P.c3("Too many elements")},
hd:function(){return new P.c3("Too few elements")},
il:function(a,b,c){H.j(a,"$isd",[c],"$asd")
H.m(b,{func:1,ret:P.w,args:[c,c]})
H.bF(a,0,J.ar(a)-1,b,c)},
bF:function(a,b,c,d,e){H.j(a,"$isd",[e],"$asd")
H.m(d,{func:1,ret:P.w,args:[e,e]})
if(c-b<=32)H.ik(a,b,c,d,e)
else H.ij(a,b,c,d,e)},
ik:function(a,b,c,d,e){var z,y,x,w,v
H.j(a,"$isd",[e],"$asd")
H.m(d,{func:1,ret:P.w,args:[e,e]})
for(z=b+1,y=J.X(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ah(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.m(a,w,y.i(a,v))
w=v}y.m(a,w,x)}},
ij:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.j(a,"$isd",[a2],"$asd")
H.m(a1,{func:1,ret:P.w,args:[a2,a2]})
z=C.c.b6(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.b6(b+a0,2)
v=w-z
u=w+z
t=J.X(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.ah(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ah(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ah(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ah(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ah(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ah(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ah(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ah(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ah(a1.$2(p,o),0)){n=o
o=p
p=n}t.m(a,y,s)
t.m(a,w,q)
t.m(a,x,o)
t.m(a,v,t.i(a,b))
t.m(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.ag(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.M()
if(i<0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.aN()
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
if(typeof e!=="number")return e.M()
if(e<0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.aN()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.aN()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.M()
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
H.bF(a,b,m-2,a1,a2)
H.bF(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.ag(a1.$2(t.i(a,m),r),0);)++m
for(;J.ag(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.m(a,k,t.i(a,m))
t.m(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.M()
h=l-1
if(i<0){t.m(a,k,t.i(a,m))
g=m+1
t.m(a,m,t.i(a,l))
t.m(a,l,j)
m=g}else{t.m(a,k,t.i(a,l))
t.m(a,l,j)}l=h
break}}H.bF(a,m,l,a1,a2)}else H.bF(a,m,l,a1,a2)},
cs:{"^":"x;"},
bB:{"^":"cs;$ti",
ga7:function(a){return new H.dK(this,this.gD(this),0,[H.aq(this,"bB",0)])},
cz:function(a,b){return this.eE(0,H.m(b,{func:1,ret:P.N,args:[H.aq(this,"bB",0)]}))}},
ir:{"^":"bB;a,b,c,$ti",
gfg:function(){var z,y
z=J.ar(this.a)
y=this.c
if(y==null||y>z)return z
return y},
gfI:function(){var z,y
z=J.ar(this.a)
y=this.b
if(y>z)return z
return y},
gD:function(a){var z,y,x
z=J.ar(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.I()
return x-y},
ay:function(a,b){var z,y
z=this.gfI()+b
if(b>=0){y=this.gfg()
if(typeof y!=="number")return H.J(y)
y=z>=y}else y=!0
if(y)throw H.i(P.by(b,this,"index",null,null))
return J.d8(this.a,z)},
dU:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.X(y)
w=x.gD(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.I()
u=w-z
if(u<0)u=0
t=new Array(u)
t.fixed$length=Array
s=H.h(t,this.$ti)
for(r=0;r<u;++r){C.a.m(s,r,x.ay(y,z+r))
if(x.gD(y)<w)throw H.i(P.a6(this))}return s},
H:{
cJ:function(a,b,c,d){if(c!=null){if(c<0)H.aI(P.aE(c,0,null,"end",null))
if(b>c)H.aI(P.aE(b,0,c,"start",null))}return new H.ir(a,b,c,[d])}}},
dK:{"^":"c;a,b,c,0d,$ti",
scS:function(a){this.d=H.p(a,H.n(this,0))},
ga_:function(){return this.d},
Y:function(){var z,y,x,w
z=this.a
y=J.X(z)
x=y.gD(z)
if(this.b!==x)throw H.i(P.a6(z))
w=this.c
if(w>=x){this.scS(null)
return!1}this.scS(y.ay(z,w));++this.c
return!0},
$isaL:1},
hu:{"^":"bB;a,b,$ti",
gD:function(a){return J.ar(this.a)},
ay:function(a,b){return this.b.$1(J.d8(this.a,b))},
$asbB:function(a,b){return[b]},
$asx:function(a,b){return[b]}},
ew:{"^":"x;a,b,$ti",
ga7:function(a){return new H.iM(J.bM(this.a),this.b,this.$ti)}},
iM:{"^":"aL;a,b,$ti",
Y:function(){var z,y
for(z=this.a,y=this.b;z.Y();)if(y.$1(z.ga_()))return!0
return!1},
ga_:function(){return this.a.ga_()}},
bZ:{"^":"c;$ti"}}],["","",,H,{"^":"",
ci:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k2:function(a){return init.types[H.k(a)]},
kd:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isaN},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.b_(a)
if(typeof z!=="string")throw H.i(H.ap(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bl:function(a){return H.i1(a)+H.cV(H.aH(a),0,null)},
i1:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.a2||!!z.$isbm){u=C.N(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.ci(w.length>1&&C.x.f6(w,0)===36?C.x.eB(w,1):w)},
ln:[function(){return Date.now()},"$0","jN",0,0,27],
c1:function(){var z,y
if($.aO!=null)return
$.aO=1000
$.bE=H.jN()
if(typeof window=="undefined")return
z=window
if(z==null)return
y=z.performance
if(y==null)return
if(typeof y.now!="function")return
$.aO=1e6
$.bE=new H.i2(y)},
J:function(a){throw H.i(H.ap(a))},
a:function(a,b){if(a==null)J.ar(a)
throw H.i(H.aV(a,b))},
aV:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.k(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.J(z)
y=b>=z}else y=!0
if(y)return P.by(b,a,"index",null,z)
return P.cD(b,"index",null)},
ap:function(a){return new P.aJ(!0,a,null,null)},
eZ:function(a){if(typeof a!=="number")throw H.i(H.ap(a))
return a},
i:function(a){var z
if(a==null)a=new P.dT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f8})
z.name=""}else z.toString=H.f8
return z},
f8:function(){return J.b_(this.dartException)},
aI:function(a){throw H.i(a)},
d5:function(a){throw H.i(P.a6(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bk(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cz(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dS(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eh()
u=$.$get$ei()
t=$.$get$ej()
s=$.$get$ek()
r=$.$get$eo()
q=$.$get$ep()
p=$.$get$em()
$.$get$el()
o=$.$get$er()
n=$.$get$eq()
m=v.as(y)
if(m!=null)return z.$1(H.cz(H.v(y),m))
else{m=u.as(y)
if(m!=null){m.method="call"
return z.$1(H.cz(H.v(y),m))}else{m=t.as(y)
if(m==null){m=s.as(y)
if(m==null){m=r.as(y)
if(m==null){m=q.as(y)
if(m==null){m=p.as(y)
if(m==null){m=s.as(y)
if(m==null){m=o.as(y)
if(m==null){m=n.as(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dS(H.v(y),m))}}return z.$1(new H.iF(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e3()
return a},
bt:function(a){var z
if(a==null)return new H.eL(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eL(a)},
kc:function(a,b,c,d,e,f){H.e(a,"$isbw")
switch(H.k(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(new P.j4("Unsupported number of arguments for wrapped closure"))},
aU:function(a,b){var z
H.k(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kc)
a.$identity=z
return z},
fA:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.C(d).$isd){z.$reflectionInfo=d
x=H.i9(z).r}else x=d
w=e?Object.create(new H.im().constructor.prototype):Object.create(new H.co(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ai
if(typeof u!=="number")return u.B()
$.ai=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dj(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.k2,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dg:H.cp
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.i("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dj(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fx:function(a,b,c,d){var z=H.cp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dj:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fz(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fx(y,!w,z,b)
if(y===0){w=$.ai
if(typeof w!=="number")return w.B()
$.ai=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b1
if(v==null){v=H.bP("self")
$.b1=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ai
if(typeof w!=="number")return w.B()
$.ai=w+1
t+=w
w="return function("+t+"){return this."
v=$.b1
if(v==null){v=H.bP("self")
$.b1=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fy:function(a,b,c,d){var z,y
z=H.cp
y=H.dg
switch(b?-1:a){case 0:throw H.i(H.ic("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fz:function(a,b){var z,y,x,w,v,u,t,s
z=$.b1
if(z==null){z=H.bP("self")
$.b1=z}y=$.df
if(y==null){y=H.bP("receiver")
$.df=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fy(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ai
if(typeof y!=="number")return y.B()
$.ai=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ai
if(typeof y!=="number")return y.B()
$.ai=y+1
return new Function(z+y+"}")()},
cZ:function(a,b,c,d,e,f,g){var z,y
z=J.bz(H.bK(b))
H.k(c)
y=!!J.C(d).$isd?J.bz(d):d
return H.fA(a,z,c,y,!!e,f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.ac(a,"String"))},
br:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.ac(a,"double"))},
bu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.ac(a,"num"))},
jW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.ac(a,"bool"))},
k:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.ac(a,"int"))},
d4:function(a,b){throw H.i(H.ac(a,H.v(b).substring(3)))},
ki:function(a,b){var z=J.X(b)
throw H.i(H.fw(a,z.cQ(b,3,z.gD(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.d4(a,b)},
u:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.ki(a,b)},
f4:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.d4(a,b)},
bK:function(a){if(a==null)return a
if(!!J.C(a).$isd)return a
throw H.i(H.ac(a,"List"))},
ke:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isd)return a
if(z[b])return a
H.d4(a,b)},
f_:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.k(z)]
else return a.$S()}return},
bI:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f_(J.C(a))
if(z==null)return!1
return H.eP(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cS)return a
$.cS=!0
try{if(H.bI(a,b))return a
z=H.ch(b)
y=H.ac(a,z)
throw H.i(y)}finally{$.cS=!1}},
d0:function(a,b){if(a!=null&&!H.cY(a,b))H.aI(H.ac(a,H.ch(b)))
return a},
eT:function(a){var z,y
z=J.C(a)
if(!!z.$iso){y=H.f_(z)
if(y!=null)return H.ch(y)
return"Closure"}return H.bl(a)},
kk:function(a){throw H.i(new P.fJ(H.v(a)))},
f0:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
aH:function(a){if(a==null)return
return a.$ti},
lQ:function(a,b,c){return H.aY(a["$as"+H.f(c)],H.aH(b))},
bs:function(a,b,c,d){var z
H.v(c)
H.k(d)
z=H.aY(a["$as"+H.f(c)],H.aH(b))
return z==null?null:z[d]},
aq:function(a,b,c){var z
H.v(b)
H.k(c)
z=H.aY(a["$as"+H.f(b)],H.aH(a))
return z==null?null:z[c]},
n:function(a,b){var z
H.k(b)
z=H.aH(a)
return z==null?null:z[b]},
ch:function(a){return H.aG(a,null)},
aG:function(a,b){var z,y
H.j(b,"$isd",[P.q],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ci(a[0].builtin$cls)+H.cV(a,1,b)
if(typeof a=="function")return H.ci(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.k(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.a(b,y)
return H.f(b[y])}if('func' in a)return H.jK(a,b)
if('futureOr' in a)return"FutureOr<"+H.aG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.q]
H.j(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.q(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.a(b,r)
t=C.x.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aG(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aG(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aG(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aG(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jY(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aG(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cV:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isd",[P.q],"$asd")
if(a==null)return""
z=new P.cI("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aG(u,c)}return"<"+z.u(0)+">"},
aY:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cX:function(a,b,c,d){var z,y
H.v(b)
H.bK(c)
H.v(d)
if(a==null)return!1
z=H.aH(a)
y=J.C(a)
if(y[b]==null)return!1
return H.eW(H.aY(y[d],z),null,c,null)},
j:function(a,b,c,d){H.v(b)
H.bK(c)
H.v(d)
if(a==null)return a
if(H.cX(a,b,c,d))return a
throw H.i(H.ac(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.cV(c,0,null),init.mangledGlobalNames)))},
eW:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a3(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a3(a[y],b,c[y],d))return!1
return!0},
lO:function(a,b,c){return a.apply(b,H.aY(J.C(b)["$as"+H.f(c)],H.aH(b)))},
f2:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="H"||a===-1||a===-2||H.f2(z)}return!1},
cY:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="H"||b===-1||b===-2||H.f2(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bI(a,b)}z=J.C(a).constructor
y=H.aH(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a3(z,null,b,null)},
p:function(a,b){if(a!=null&&!H.cY(a,b))throw H.i(H.ac(a,H.ch(b)))
return a},
a3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a3(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.eP(a,b,c,d)
if('func' in a)return c.builtin$cls==="bw"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a3("type" in a?a.type:null,b,x,d)
else if(H.a3(a,b,x,d))return!0
else{if(!('$is'+"bb" in y.prototype))return!1
w=y.prototype["$as"+"bb"]
v=H.aY(w,z?a.slice(1):null)
return H.a3(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eW(H.aY(r,z),b,u,d)},
eP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a3(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a3(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a3(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a3(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kh(m,b,l,d)},
kh:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a3(c[w],d,a[w],b))return!1}return!0},
lP:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
kf:function(a){var z,y,x,w,v,u
z=H.v($.f1.$1(a))
y=$.cc[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.eV.$2(a,z))
if(z!=null){y=$.cc[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cg(x)
$.cc[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cf[z]=x
return x}if(v==="-"){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f5(a,x)
if(v==="*")throw H.i(P.es(z))
if(init.leafTags[z]===true){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f5(a,x)},
f5:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d3(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cg:function(a){return J.d3(a,!1,null,!!a.$isaN)},
kg:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cg(z)
else return J.d3(z,c,null,null)},
ka:function(){if(!0===$.d2)return
$.d2=!0
H.kb()},
kb:function(){var z,y,x,w,v,u,t,s
$.cc=Object.create(null)
$.cf=Object.create(null)
H.k6()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f6.$1(v)
if(u!=null){t=H.kg(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k6:function(){var z,y,x,w,v,u,t
z=C.a6()
z=H.aT(C.a3,H.aT(C.a8,H.aT(C.M,H.aT(C.M,H.aT(C.a7,H.aT(C.a4,H.aT(C.a5(C.N),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f1=new H.k7(v)
$.eV=new H.k8(u)
$.f6=new H.k9(t)},
aT:function(a,b){return a(b)||b},
i8:{"^":"c;a,b,c,d,e,f,r,0x",H:{
i9:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bz(z)
y=z[0]
x=z[1]
return new H.i8(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i2:{"^":"o:11;a",
$0:function(){return C.b.aJ(1000*this.a.now())}},
iB:{"^":"c;a,b,c,d,e,f",
as:function(a){var z,y,x
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
H:{
an:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.q])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
en:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hM:{"^":"L;a,b",
u:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
H:{
dS:function(a,b){return new H.hM(a,b==null?null:b.method)}}},
hk:{"^":"L;a,b,c",
u:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
H:{
cz:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hk(a,y,z?null:b.receiver)}}},
iF:{"^":"L;a",
u:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kl:{"^":"o:3;a",
$1:function(a){if(!!J.C(a).$isL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eL:{"^":"c;a,0b",
u:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isab:1},
o:{"^":"c;",
u:function(a){return"Closure '"+H.bl(this).trim()+"'"},
gdW:function(){return this},
$isbw:1,
gdW:function(){return this}},
e6:{"^":"o;"},
im:{"^":"e6;",
u:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.ci(z)+"'"}},
co:{"^":"e6;a,b,c,d",
au:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.co))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga2:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aZ(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
u:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.bl(z)+"'")},
H:{
cp:function(a){return a.a},
dg:function(a){return a.c},
bP:function(a){var z,y,x,w,v
z=new H.co("self","target","receiver","name")
y=J.bz(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iC:{"^":"L;a",
u:function(a){return this.a},
H:{
ac:function(a,b){return new H.iC("TypeError: "+H.f(P.bW(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
fv:{"^":"L;a",
u:function(a){return this.a},
H:{
fw:function(a,b){return new H.fv("CastError: "+H.f(P.bW(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
ib:{"^":"L;a",
u:function(a){return"RuntimeError: "+H.f(this.a)},
H:{
ic:function(a){return new H.ib(a)}}},
hj:{"^":"cB;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){return this.a},
gaL:function(){return new H.hm(this,[H.n(this,0)])},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.c2(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.c2(w,b)
x=y==null?null:y.b
return x}else return this.hv(b)},
hv:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.d3(z,J.aZ(a)&0x3ffffff)
x=this.dK(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.p(b,H.n(this,0))
H.p(c,H.n(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c4()
this.b=z}this.cT(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c4()
this.c=y}this.cT(y,b,c)}else{x=this.d
if(x==null){x=this.c4()
this.d=x}w=J.aZ(b)&0x3ffffff
v=this.d3(x,w)
if(v==null)this.ca(x,w,[this.bX(b,c)])
else{u=this.dK(v,b)
if(u>=0)v[u].b=c
else v.push(this.bX(b,c))}}},
b9:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.n(this,0),H.n(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.a6(this))
z=z.c}},
cT:function(a,b,c){var z
H.p(b,H.n(this,0))
H.p(c,H.n(this,1))
z=this.c2(a,b)
if(z==null)this.ca(a,b,this.bX(b,c))
else z.b=c},
eY:function(){this.r=this.r+1&67108863},
bX:function(a,b){var z,y
z=new H.hl(H.p(a,H.n(this,0)),H.p(b,H.n(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eY()
return z},
dK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ag(a[y].a,b))return y
return-1},
u:function(a){return P.dN(this)},
c2:function(a,b){return a[b]},
d3:function(a,b){return a[b]},
ca:function(a,b,c){a[b]=c},
fd:function(a,b){delete a[b]},
c4:function(){var z=Object.create(null)
this.ca(z,"<non-identifier-key>",z)
this.fd(z,"<non-identifier-key>")
return z}},
hl:{"^":"c;a,b,0c,0d"},
hm:{"^":"cs;a,$ti",
gD:function(a){return this.a.a},
ga7:function(a){var z,y
z=this.a
y=new H.hn(z,z.r,this.$ti)
y.c=z.e
return y}},
hn:{"^":"c;a,b,0c,0d,$ti",
scU:function(a){this.d=H.p(a,H.n(this,0))},
ga_:function(){return this.d},
Y:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.a6(z))
else{z=this.c
if(z==null){this.scU(null)
return!1}else{this.scU(z.a)
this.c=this.c.c
return!0}}},
$isaL:1},
k7:{"^":"o:3;a",
$1:function(a){return this.a(a)}},
k8:{"^":"o:12;a",
$2:function(a,b){return this.a(a,b)}},
k9:{"^":"o:13;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
jY:function(a){return J.dF(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ao:function(a,b,c){H.bK(b)
if(a>>>0!==a||a>=c)throw H.i(H.aV(b,a))},
hH:{"^":"E;","%":"DataView;ArrayBufferView;cC|eH|eI|dQ|eJ|eK|aC"},
cC:{"^":"hH;",
gD:function(a){return a.length},
$isaN:1,
$asaN:I.d_},
dQ:{"^":"eI;",
i:function(a,b){H.ao(b,a,a.length)
return a[b]},
m:function(a,b,c){H.k(b)
H.br(c)
H.ao(b,a,a.length)
a[b]=c},
$asbZ:function(){return[P.aW]},
$asQ:function(){return[P.aW]},
$isx:1,
$asx:function(){return[P.aW]},
$isd:1,
$asd:function(){return[P.aW]},
"%":"Float32Array"},
aC:{"^":"eK;",
m:function(a,b,c){H.k(b)
H.k(c)
H.ao(b,a,a.length)
a[b]=c},
$asbZ:function(){return[P.w]},
$asQ:function(){return[P.w]},
$isx:1,
$asx:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]}},
hG:{"^":"dQ;",$isdB:1,"%":"Float64Array"},
l5:{"^":"aC;",
i:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Int16Array"},
l6:{"^":"aC;",
i:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Int32Array"},
l7:{"^":"aC;",
i:function(a,b){H.ao(b,a,a.length)
return a[b]},
$iskZ:1,
"%":"Int8Array"},
l8:{"^":"aC;",
i:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
l9:{"^":"aC;",
i:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
la:{"^":"aC;",
gD:function(a){return a.length},
i:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lb:{"^":"aC;",
gD:function(a){return a.length},
i:function(a,b){H.ao(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eH:{"^":"cC+Q;"},
eI:{"^":"eH+bZ;"},
eJ:{"^":"cC+Q;"},
eK:{"^":"eJ+bZ;"}}],["","",,P,{"^":"",
iU:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jT()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aU(new P.iW(z),1)).observe(y,{childList:true})
return new P.iV(z,y,x)}else if(self.setImmediate!=null)return P.jU()
return P.jV()},
lG:[function(a){self.scheduleImmediate(H.aU(new P.iX(H.m(a,{func:1,ret:-1})),0))},"$1","jT",4,0,2],
lH:[function(a){self.setImmediate(H.aU(new P.iY(H.m(a,{func:1,ret:-1})),0))},"$1","jU",4,0,2],
lI:[function(a){H.m(a,{func:1,ret:-1})
P.jB(0,a)},"$1","jV",4,0,2],
ef:function(a,b){var z
H.m(b,{func:1,ret:-1,args:[P.aF]})
z=C.c.b6(a.a,1000)
return P.jC(z<0?0:z,b)},
jP:function(a,b){if(H.bI(a,{func:1,args:[P.c,P.ab]}))return b.hP(a,null,P.c,P.ab)
if(H.bI(a,{func:1,args:[P.c]}))return H.m(a,{func:1,ret:null,args:[P.c]})
throw H.i(P.dd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jO:function(){var z,y
for(;z=$.aS,z!=null;){$.bp=null
y=z.b
$.aS=y
if(y==null)$.bo=null
z.a.$0()}},
lN:[function(){$.cT=!0
try{P.jO()}finally{$.bp=null
$.cT=!1
if($.aS!=null)$.$get$cN().$1(P.eX())}},"$0","eX",0,0,1],
eS:function(a){var z=new P.ey(H.m(a,{func:1,ret:-1}))
if($.aS==null){$.bo=z
$.aS=z
if(!$.cT)$.$get$cN().$1(P.eX())}else{$.bo.b=z
$.bo=z}},
jS:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aS
if(z==null){P.eS(a)
$.bp=$.bo
return}y=new P.ey(a)
x=$.bp
if(x==null){y.b=z
$.bp=y
$.aS=y}else{y.b=x.b
x.b=y
$.bp=y
if(y.b==null)$.bo=y}},
kj:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.D
if(C.h===y){P.cb(null,null,C.h,a)
return}y.toString
P.cb(null,null,y,H.m(y.dm(a),z))},
ee:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aF]}
H.m(b,z)
y=$.D
if(y===C.h){y.toString
return P.ef(a,b)}x=y.dn(b,P.aF)
$.D.toString
return P.ef(a,H.m(x,z))},
ca:function(a,b,c,d,e){var z={}
z.a=d
P.jS(new P.jQ(z,e))},
eQ:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
eR:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.p(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
jR:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.p(e,h)
H.p(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
cb:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.h!==c
if(z)d=!(!z||!1)?c.dm(d):c.fS(d,-1)
P.eS(d)},
iW:{"^":"o:4;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iV:{"^":"o:14;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iX:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iY:{"^":"o:0;a",
$0:function(){this.a.$0()}},
eN:{"^":"c;a,0b,c",
eW:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aU(new P.jE(this,b),0),a)
else throw H.i(P.ad("`setTimeout()` not found."))},
eX:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aU(new P.jD(this,a,Date.now(),b),0),a)
else throw H.i(P.ad("Periodic timer."))},
$isaF:1,
H:{
jB:function(a,b){var z=new P.eN(!0,0)
z.eW(a,b)
return z},
jC:function(a,b){var z=new P.eN(!1,0)
z.eX(a,b)
return z}}},
jE:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jD:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.aw(w,x)}z.c=y
this.d.$1(z)}},
aR:{"^":"c;0a,b,c,d,e,$ti",
hC:function(a){if(this.c!==6)return!0
return this.b.b.ct(H.m(this.d,{func:1,ret:P.N,args:[P.c]}),a.a,P.N,P.c)},
hr:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.n(this,1)}
w=this.b.b
if(H.bI(z,{func:1,args:[P.c,P.ab]}))return H.d0(w.hS(z,a.a,a.b,null,y,P.ab),x)
else return H.d0(w.ct(H.m(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
aw:{"^":"c;dg:a<,b,0fD:c<,$ti",
dT:function(a,b,c){var z,y,x,w
z=H.n(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.h){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jP(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aw(0,$.D,[c])
w=b==null?1:3
this.cW(new P.aR(x,w,a,b,[z,c]))
return x},
hY:function(a,b){return this.dT(a,null,b)},
cW:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isaR")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaw")
z=y.a
if(z<4){y.cW(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cb(null,null,z,H.m(new P.j5(this,a),{func:1,ret:-1}))}},
dc:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isaR")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaw")
y=u.a
if(y<4){u.dc(a)
return}this.a=y
this.c=u.c}z.a=this.bF(a)
y=this.b
y.toString
P.cb(null,null,y,H.m(new P.ja(z,this),{func:1,ret:-1}))}},
c9:function(){var z=H.e(this.c,"$isaR")
this.c=null
return this.bF(z)},
bF:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cZ:function(a){var z,y,x
z=H.n(this,0)
H.d0(a,{futureOr:1,type:z})
y=this.$ti
if(H.cX(a,"$isbb",y,"$asbb"))if(H.cX(a,"$isaw",y,null))P.eC(a,this)
else P.j6(a,this)
else{x=this.c9()
H.p(a,z)
this.a=4
this.c=a
P.bn(this,x)}},
bY:[function(a,b){var z
H.e(b,"$isab")
z=this.c9()
this.a=8
this.c=new P.a_(a,b)
P.bn(this,z)},function(a){return this.bY(a,null)},"ie","$2","$1","gf7",4,2,15],
$isbb:1,
H:{
j6:function(a,b){var z,y,x
b.a=1
try{a.dT(new P.j7(b),new P.j8(b),null)}catch(x){z=H.a5(x)
y=H.bt(x)
P.kj(new P.j9(b,z,y))}},
eC:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaw")
if(z>=4){y=b.c9()
b.a=a.a
b.c=a.c
P.bn(b,y)}else{y=H.e(b.c,"$isaR")
b.a=2
b.c=a
a.dc(y)}},
bn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isa_")
y=y.b
u=v.a
t=v.b
y.toString
P.ca(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bn(z.a,b)}y=z.a
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
if(p){H.e(r,"$isa_")
y=y.b
u=r.a
t=r.b
y.toString
P.ca(null,null,y,u,t)
return}o=$.D
if(o==null?q!=null:o!==q)$.D=q
else o=null
y=b.c
if(y===8)new P.jd(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jc(x,b,r).$0()}else if((y&2)!==0)new P.jb(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.C(y).$isbb){if(y.a>=4){n=H.e(t.c,"$isaR")
t.c=null
b=t.bF(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eC(y,t)
return}}m=b.b
n=H.e(m.c,"$isaR")
m.c=null
b=m.bF(n)
y=x.a
u=x.b
if(!y){H.p(u,H.n(m,0))
m.a=4
m.c=u}else{H.e(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
j5:{"^":"o:0;a,b",
$0:function(){P.bn(this.a,this.b)}},
ja:{"^":"o:0;a,b",
$0:function(){P.bn(this.b,this.a.a)}},
j7:{"^":"o:4;a",
$1:function(a){var z=this.a
z.a=0
z.cZ(a)}},
j8:{"^":"o:16;a",
$2:function(a,b){this.a.bY(a,H.e(b,"$isab"))},
$1:function(a){return this.$2(a,null)}},
j9:{"^":"o:0;a,b,c",
$0:function(){this.a.bY(this.b,this.c)}},
jd:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dS(H.m(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.bt(v)
if(this.d){w=H.e(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.C(z).$isbb){if(z instanceof P.aw&&z.gdg()>=4){if(z.gdg()===8){w=this.b
w.b=H.e(z.gfD(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hY(new P.je(t),null)
w.a=!1}}},
je:{"^":"o:17;a",
$1:function(a){return this.a}},
jc:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.n(x,0)
v=H.p(this.c,w)
u=H.n(x,1)
this.a.b=x.b.b.ct(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.bt(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
jb:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isa_")
w=this.c
if(w.hC(z)&&w.e!=null){v=this.b
v.b=w.hr(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.bt(u)
w=H.e(this.a.a.c,"$isa_")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a_(y,x)
s.a=!0}}},
ey:{"^":"c;a,0b"},
cH:{"^":"c;$ti",
gD:function(a){var z,y
z={}
y=new P.aw(0,$.D,[P.w])
z.a=0
this.hz(new P.ip(z,this),!0,new P.iq(z,y),y.gf7())
return y}},
ip:{"^":"o;a,b",
$1:function(a){H.p(a,H.aq(this.b,"cH",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aq(this.b,"cH",0)]}}},
iq:{"^":"o:0;a,b",
$0:function(){this.b.cZ(this.a.a)}},
io:{"^":"c;$ti"},
aF:{"^":"c;"},
a_:{"^":"c;a,b",
u:function(a){return H.f(this.a)},
$isL:1},
jG:{"^":"c;",$islF:1},
jQ:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.u(0)
throw x}},
jp:{"^":"jG;",
gaY:function(a){return},
hT:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.h===$.D){a.$0()
return}P.eQ(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.bt(x)
P.ca(null,null,this,z,H.e(y,"$isab"))}},
hU:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.p(b,c)
try{if(C.h===$.D){a.$1(b)
return}P.eR(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.bt(x)
P.ca(null,null,this,z,H.e(y,"$isab"))}},
fS:function(a,b){return new P.jr(this,H.m(a,{func:1,ret:b}),b)},
dm:function(a){return new P.jq(this,H.m(a,{func:1,ret:-1}))},
dn:function(a,b){return new P.js(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dS:function(a,b){H.m(a,{func:1,ret:b})
if($.D===C.h)return a.$0()
return P.eQ(null,null,this,a,b)},
ct:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.p(b,d)
if($.D===C.h)return a.$1(b)
return P.eR(null,null,this,a,b,c,d)},
hS:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.p(b,e)
H.p(c,f)
if($.D===C.h)return a.$2(b,c)
return P.jR(null,null,this,a,b,c,d,e,f)},
hP:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}},
jr:{"^":"o;a,b,c",
$0:function(){return this.a.dS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jq:{"^":"o:1;a,b",
$0:function(){return this.a.hT(this.b)}},
js:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.hU(this.b,H.p(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
bx:function(a,b,c,d,e){return new P.jf(0,[d,e])},
ho:function(a,b){return new H.hj(0,0,[a,b])},
bA:function(a,b,c,d){return new P.jj(0,0,[d])},
hb:function(a,b,c){var z,y
if(P.cU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bq()
C.a.q(y,a)
try{P.jM(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.e5(b,H.ke(z,"$isx"),", ")+c
return y.charCodeAt(0)==0?y:y},
cv:function(a,b,c){var z,y,x
if(P.cU(a))return b+"..."+c
z=new P.cI(b)
y=$.$get$bq()
C.a.q(y,a)
try{x=z
x.a=P.e5(x.gb5(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.gb5()+c
y=z.gb5()
return y.charCodeAt(0)==0?y:y},
cU:function(a){var z,y
for(z=0;y=$.$get$bq(),z<y.length;++z)if(a===y[z])return!0
return!1},
jM:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga7(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.Y())return
w=H.f(z.ga_())
C.a.q(b,w)
y+=w.length+2;++x}if(!z.Y()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.ga_();++x
if(!z.Y()){if(x<=4){C.a.q(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.ga_();++x
for(;z.Y();t=s,s=r){r=z.ga_();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}C.a.q(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.q(b,q)
C.a.q(b,u)
C.a.q(b,v)},
dJ:function(a,b){var z,y,x
z=P.bA(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.d5)(a),++x)z.q(0,H.p(a[x],b))
return z},
dN:function(a){var z,y,x
z={}
if(P.cU(a))return"{...}"
y=new P.cI("")
try{C.a.q($.$get$bq(),a)
x=y
x.a=x.gb5()+"{"
z.a=!0
a.b9(0,new P.ht(z,y))
z=y
z.a=z.gb5()+"}"}finally{z=$.$get$bq()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gb5()
return z.charCodeAt(0)==0?z:z},
jf:{"^":"cB;a,0b,0c,0d,0e,$ti",
gD:function(a){return this.a},
gaL:function(){return new P.jg(this,[H.n(this,0)])},
cg:function(a){var z
if((a&0x3ffffff)===a){z=this.c
return z==null?!1:z[a]!=null}else return this.fa(a)},
fa:function(a){var z=this.d
if(z==null)return!1
return this.aQ(this.bh(z,a),a)>=0},
i:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
y=z==null?null:P.eD(z,b)
return y}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
y=x==null?null:P.eD(x,b)
return y}else return this.fj(b)},
fj:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bh(z,a)
x=this.aQ(y,a)
return x<0?null:y[x+1]},
m:function(a,b,c){var z
H.p(b,H.n(this,0))
H.p(c,H.n(this,1))
if((b&0x3ffffff)===b){z=this.c
if(z==null){z=P.eE()
this.c=z}this.f0(z,b,c)}else this.fG(b,c)},
fG:function(a,b){var z,y,x,w
H.p(a,H.n(this,0))
H.p(b,H.n(this,1))
z=this.d
if(z==null){z=P.eE()
this.d=z}y=this.bg(a)
x=z[y]
if(x==null){P.cP(z,y,[a,b]);++this.a
this.e=null}else{w=this.aQ(x,a)
if(w>=0)x[w+1]=b
else{x.push(a,b);++this.a
this.e=null}}},
b9:function(a,b){var z,y,x,w,v
z=H.n(this,0)
H.m(b,{func:1,ret:-1,args:[z,H.n(this,1)]})
y=this.d_()
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(H.p(v,z),this.i(0,v))
if(y!==this.e)throw H.i(P.a6(this))}},
d_:function(){var z,y,x,w,v,u,t,s,r,q,p,o
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
f0:function(a,b,c){H.p(b,H.n(this,0))
H.p(c,H.n(this,1))
if(a[b]==null){++this.a
this.e=null}P.cP(a,b,c)},
bg:function(a){return J.aZ(a)&0x3ffffff},
bh:function(a,b){return a[this.bg(b)]},
aQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;y+=2)if(J.ag(a[y],b))return y
return-1},
$iskT:1,
H:{
eD:function(a,b){var z=a[b]
return z===a?null:z},
cP:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
eE:function(){var z=Object.create(null)
P.cP(z,"<non-identifier-key>",z)
delete z["<non-identifier-key>"]
return z}}},
jg:{"^":"cs;a,$ti",
gD:function(a){return this.a.a},
ga7:function(a){var z=this.a
return new P.jh(z,z.d_(),0,this.$ti)}},
jh:{"^":"c;a,b,c,0d,$ti",
sbf:function(a){this.d=H.p(a,H.n(this,0))},
ga_:function(){return this.d},
Y:function(){var z,y,x
z=this.b
y=this.c
x=this.a
if(z!==x.e)throw H.i(P.a6(x))
else if(y>=z.length){this.sbf(null)
return!1}else{this.sbf(z[y])
this.c=y+1
return!0}},
$isaL:1},
jj:{"^":"ji;a,0b,0c,0d,0e,0f,r,$ti",
ga7:function(a){var z=new P.jk(this,this.r,this.$ti)
z.c=this.e
return z},
gD:function(a){return this.a},
aa:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$isc8")!=null}else{y=this.f9(b)
return y}},
f9:function(a){var z=this.d
if(z==null)return!1
return this.aQ(this.bh(z,a),a)>=0},
b9:function(a,b){var z,y,x
z=H.n(this,0)
H.m(b,{func:1,ret:-1,args:[z]})
y=this.e
x=this.r
for(;y!=null;){b.$1(H.p(y.a,z))
if(x!==this.r)throw H.i(P.a6(this))
y=y.b}},
q:function(a,b){var z,y
H.p(b,H.n(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cR()
this.b=z}return this.cV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cR()
this.c=y}return this.cV(y,b)}else return this.eZ(b)},
eZ:function(a){var z,y,x
H.p(a,H.n(this,0))
z=this.d
if(z==null){z=P.cR()
this.d=z}y=this.bg(a)
x=z[y]
if(x==null)z[y]=[this.c5(a)]
else{if(this.aQ(x,a)>=0)return!1
x.push(this.c5(a))}return!0},
dP:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.de(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.de(this.c,b)
else return this.fv(b)},
fv:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.bh(z,a)
x=this.aQ(y,a)
if(x<0)return!1
this.di(y.splice(x,1)[0])
return!0},
cV:function(a,b){H.p(b,H.n(this,0))
if(H.e(a[b],"$isc8")!=null)return!1
a[b]=this.c5(b)
return!0},
de:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isc8")
if(z==null)return!1
this.di(z)
delete a[b]
return!0},
d7:function(){this.r=this.r+1&67108863},
c5:function(a){var z,y
z=new P.c8(H.p(a,H.n(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d7()
return z},
di:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d7()},
bg:function(a){return J.aZ(a)&0x3ffffff},
bh:function(a,b){return a[this.bg(b)]},
aQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ag(a[y].a,b))return y
return-1},
H:{
cR:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
c8:{"^":"c;a,0b,0c"},
jk:{"^":"c;a,b,0c,0d,$ti",
sbf:function(a){this.d=H.p(a,H.n(this,0))},
ga_:function(){return this.d},
Y:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.a6(z))
else{z=this.c
if(z==null){this.sbf(null)
return!1}else{this.sbf(H.p(z.a,H.n(this,0)))
this.c=this.c.b
return!0}}},
$isaL:1},
ji:{"^":"ie;"},
hp:{"^":"jl;",$isx:1,$isd:1},
Q:{"^":"c;$ti",
ga7:function(a){return new H.dK(a,this.gD(a),0,[H.bs(this,a,"Q",0)])},
ay:function(a,b){return this.i(a,b)},
hq:function(a,b,c,d){var z,y,x
H.p(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bs(this,a,"Q",0)]})
z=this.gD(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gD(a))throw H.i(P.a6(a))}return y},
cN:function(a,b){return H.cJ(a,b,null,H.bs(this,a,"Q",0))},
B:function(a,b){var z,y
z=[H.bs(this,a,"Q",0)]
H.j(b,"$isd",z,"$asd")
y=H.h([],z)
C.a.sD(y,C.c.B(this.gD(a),b.gD(b)))
C.a.bd(y,0,this.gD(a),a)
C.a.bd(y,this.gD(a),y.length,b)
return y},
u:function(a){return P.cv(a,"[","]")}},
cB:{"^":"c0;"},
ht:{"^":"o:18;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
c0:{"^":"c;$ti",
b9:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.aq(this,"c0",0),H.aq(this,"c0",1)]})
for(z=J.bM(this.gaL());z.Y();){y=z.ga_()
b.$2(y,this.i(0,y))}},
gD:function(a){return J.ar(this.gaL())},
u:function(a){return P.dN(this)},
$isdM:1},
ig:{"^":"c;$ti",
aG:function(a,b){var z
for(z=J.bM(H.j(b,"$isx",this.$ti,"$asx"));z.Y();)this.q(0,z.ga_())},
u:function(a){return P.cv(this,"{","}")},
$isx:1,
$islv:1},
ie:{"^":"ig;"},
jl:{"^":"c+Q;"}}],["","",,P,{"^":"",
h4:function(a){if(a instanceof H.o)return a.u(0)
return"Instance of '"+H.bl(a)+"'"},
aB:function(a,b,c,d){var z,y
H.p(b,d)
z=J.hf(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.j(z,"$isd",[d],"$asd")},
hq:function(a,b,c){var z,y
z=H.h([],[c])
for(y=a.ga7(a);y.Y();)C.a.q(z,H.p(y.ga_(),c))
return z},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h4(a)},
N:{"^":"c;"},
"+bool":0,
aW:{"^":"a4;"},
"+double":0,
ax:{"^":"c;a",
B:function(a,b){return new P.ax(C.c.B(this.a,b.gih()))},
M:function(a,b){return C.c.M(this.a,H.e(b,"$isax").a)},
aN:function(a,b){return C.c.aN(this.a,H.e(b,"$isax").a)},
au:function(a,b){if(b==null)return!1
if(!(b instanceof P.ax))return!1
return this.a===b.a},
ga2:function(a){return this.a&0x1FFFFFFF},
b8:function(a,b){return C.c.b8(this.a,H.e(b,"$isax").a)},
u:function(a){var z,y,x,w,v
z=new P.fZ()
y=this.a
if(y<0)return"-"+new P.ax(0-y).u(0)
x=z.$1(C.c.b6(y,6e7)%60)
w=z.$1(C.c.b6(y,1e6)%60)
v=new P.fY().$1(y%1e6)
return""+C.c.b6(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
$isK:1,
$asK:function(){return[P.ax]},
H:{
du:function(a,b,c,d,e,f){return new P.ax(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fY:{"^":"o:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fZ:{"^":"o:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
L:{"^":"c;"},
dT:{"^":"L;",
u:function(a){return"Throw of null."}},
aJ:{"^":"L;a,b,c,d",
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
u:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gc1()+y+x
if(!this.a)return w
v=this.gc0()
u=P.bW(this.b)
return w+v+": "+H.f(u)},
H:{
dd:function(a,b,c){return new P.aJ(!0,a,b,c)}}},
dW:{"^":"aJ;e,f,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
H:{
cD:function(a,b,c){return new P.dW(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.dW(b,c,!0,a,d,"Invalid value")},
dX:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.aE(a,0,c,"start",f))
if(a>b||b>c)throw H.i(P.aE(b,a,c,"end",f))
return b}}},
ha:{"^":"aJ;e,D:f>,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){if(J.d6(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
H:{
by:function(a,b,c,d,e){var z=H.k(e!=null?e:J.ar(b))
return new P.ha(b,z,!0,a,c,"Index out of range")}}},
iG:{"^":"L;a",
u:function(a){return"Unsupported operation: "+this.a},
H:{
ad:function(a){return new P.iG(a)}}},
iE:{"^":"L;a",
u:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
H:{
es:function(a){return new P.iE(a)}}},
c3:{"^":"L;a",
u:function(a){return"Bad state: "+this.a},
H:{
e4:function(a){return new P.c3(a)}}},
fC:{"^":"L;a",
u:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bW(z))+"."},
H:{
a6:function(a){return new P.fC(a)}}},
e3:{"^":"c;",
u:function(a){return"Stack Overflow"},
$isL:1},
fJ:{"^":"L;a",
u:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
j4:{"^":"c;a",
u:function(a){return"Exception: "+this.a}},
bw:{"^":"c;"},
w:{"^":"a4;"},
"+int":0,
x:{"^":"c;$ti",
cz:["eE",function(a,b){var z=H.aq(this,"x",0)
return new H.ew(this,H.m(b,{func:1,ret:P.N,args:[z]}),[z])}],
gD:function(a){var z,y
z=this.ga7(this)
for(y=0;z.Y();)++y
return y},
gb2:function(a){var z,y
z=this.ga7(this)
if(!z.Y())throw H.i(H.hc())
y=z.ga_()
if(z.Y())throw H.i(H.he())
return y},
ay:function(a,b){var z,y,x
if(b<0)H.aI(P.aE(b,0,null,"index",null))
for(z=this.ga7(this),y=0;z.Y();){x=z.ga_()
if(b===y)return x;++y}throw H.i(P.by(b,this,"index",null,y))},
u:function(a){return P.hb(this,"(",")")}},
aL:{"^":"c;$ti"},
d:{"^":"c;$ti",$isx:1},
"+List":0,
H:{"^":"c;",
ga2:function(a){return P.c.prototype.ga2.call(this,this)},
u:function(a){return"null"}},
"+Null":0,
a4:{"^":"c;",$isK:1,
$asK:function(){return[P.a4]}},
"+num":0,
c:{"^":";",
au:function(a,b){return this===b},
ga2:function(a){return H.bk(this)},
u:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.u(this)}},
ab:{"^":"c;"},
c4:{"^":"c;a,b",
bx:function(a){var z,y,x
if(this.b!=null){z=this.a
y=H.k($.bE.$0())
x=this.b
if(typeof y!=="number")return y.I()
if(typeof x!=="number")return H.J(x)
if(typeof z!=="number")return z.B()
this.a=z+(y-x)
this.b=null}},
aM:function(a){var z=this.b
this.a=z==null?H.k($.bE.$0()):z},
gaH:function(){var z,y
z=this.b
if(z==null)z=H.k($.bE.$0())
y=this.a
if(typeof z!=="number")return z.I()
if(typeof y!=="number")return H.J(y)
return z-y}},
q:{"^":"c;",$isK:1,
$asK:function(){return[P.q]},
$ishY:1},
"+String":0,
cI:{"^":"c;b5:a<",
gD:function(a){return this.a.length},
u:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
H:{
e5:function(a,b,c){var z=J.bM(b)
if(!z.Y())return a
if(c.length===0){do a+=H.f(z.ga_())
while(z.Y())}else{a+=H.f(z.ga_())
for(;z.Y();)a=a+c+H.f(z.ga_())}return a}}}}],["","",,W,{"^":"",
dw:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).ap(z,a,b,c)
y.toString
z=W.t
z=new H.ew(new W.af(y),H.m(new W.h3(),{func:1,ret:P.N,args:[z]}),[z])
return H.e(z.gb2(z),"$isa7")},
ba:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fj(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
j1:function(a,b){return document.createElement(a)},
jJ:function(a){if(a==null)return
return W.eA(a)},
eU:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.h)return a
return z.dn(a,b)},
I:{"^":"a7;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
fn:{"^":"I;",
u:function(a){return String(a)},
$isfn:1,
"%":"HTMLAnchorElement"},
kn:{"^":"I;",
u:function(a){return String(a)},
"%":"HTMLAreaElement"},
de:{"^":"I;",$isde:1,"%":"HTMLBaseElement"},
bO:{"^":"I;",$isbO:1,"%":"HTMLBodyElement"},
dh:{"^":"I;0height",
saK:function(a,b){a.height=H.k(b)},
$isdh:1,
"%":"HTMLCanvasElement"},
di:{"^":"E;",
fU:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
ic:function(a,b,c,d,e){return a.strokeText(b,c,d,e)},
eA:function(a,b,c,d){return a.strokeText(b,c,d)},
cp:function(a,b,c){return a.lineTo(H.bu(b),H.bu(c))},
dM:function(a,b,c){return a.moveTo(H.bu(b),H.bu(c))},
$isdi:1,
"%":"CanvasRenderingContext2D"},
kq:{"^":"t;0D:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fW:{"^":"t;",
fO:function(a,b){return a.adoptNode(b)},
cr:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
ku:{"^":"E;",
u:function(a){return String(a)},
"%":"DOMException"},
fX:{"^":"E;",
h7:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
a7:{"^":"t;0hW:tagName=",
gfR:function(a){return new W.j0(a)},
u:function(a){return a.localName},
ap:["bW",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dy
if(z==null){z=H.h([],[W.ak])
y=new W.dR(z)
C.a.q(z,W.eF(null))
C.a.q(z,W.eM())
$.dy=y
d=y}else d=z
z=$.dx
if(z==null){z=new W.eO(d)
$.dx=z
c=z}else{z.a=d
c=z}}if($.at==null){z=document
y=z.implementation
y=(y&&C.a0).h7(y,"")
$.at=y
$.ct=y.createRange()
y=$.at
y.toString
y=y.createElement("base")
H.e(y,"$isde")
y.href=z.baseURI
z=$.at.head;(z&&C.a1).ax(z,y)}z=$.at
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isbO")}z=$.at
if(!!this.$isbO)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.at.body;(z&&C.r).ax(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.aa(C.ai,a.tagName)){z=$.ct;(z&&C.V).e6(z,x)
z=$.ct
w=(z&&C.V).h5(z,b)}else{x.innerHTML=b
w=$.at.createDocumentFragment()
for(z=J.F(w);y=x.firstChild,y!=null;)z.ax(w,y)}z=$.at.body
if(x==null?z!=null:x!==z)J.d9(x)
c.cI(w)
C.w.fO(document,w)
return w},function(a,b,c){return this.ap(a,b,c,null)},"h6",null,null,"gip",5,5,null],
sdJ:function(a,b){this.bS(a,b)},
bT:function(a,b,c,d){a.textContent=null
this.ax(a,this.ap(a,b,c,d))},
bS:function(a,b){return this.bT(a,b,null,null)},
bb:function(a,b){return a.getAttribute(b)},
fw:function(a,b){return a.removeAttribute(b)},
e7:function(a,b,c){return a.setAttribute(b,c)},
$isa7:1,
"%":";Element"},
h3:{"^":"o:19;",
$1:function(a){return!!J.C(H.e(a,"$ist")).$isa7}},
kv:{"^":"I;0height",
saK:function(a,b){a.height=H.v(b)},
"%":"HTMLEmbedElement"},
ay:{"^":"E;",$isay:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bX:{"^":"E;",
f_:function(a,b,c,d){return a.addEventListener(b,H.aU(H.m(c,{func:1,args:[W.ay]}),1),!1)},
$isbX:1,
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest|MIDIInput|MIDIOutput|MIDIPort;EventTarget"},
kQ:{"^":"I;0D:length=","%":"HTMLFormElement"},
h8:{"^":"I;","%":"HTMLHeadElement"},
h9:{"^":"fW;","%":"HTMLDocument"},
kU:{"^":"I;0height",
saK:function(a,b){a.height=H.v(b)},
"%":"HTMLIFrameElement"},
kW:{"^":"I;0height",
saK:function(a,b){a.height=H.k(b)},
"%":"HTMLImageElement"},
kY:{"^":"I;0height",
saK:function(a,b){a.height=H.k(b)},
"%":"HTMLInputElement"},
bh:{"^":"iD;",$isbh:1,"%":"KeyboardEvent"},
hr:{"^":"E;",
u:function(a){return String(a)},
$ishr:1,
"%":"Location"},
hw:{"^":"I;","%":"HTMLAudioElement;HTMLMediaElement"},
af:{"^":"hp;a",
gb2:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.i(P.e4("No elements"))
if(y>1)throw H.i(P.e4("More than one element"))
return z.firstChild},
aG:function(a,b){var z,y,x,w,v
H.j(b,"$isx",[W.t],"$asx")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.F(y),v=0;v<x;++v)w.ax(y,z.firstChild)
return},
m:function(a,b,c){var z
H.k(b)
z=this.a
J.fd(z,H.e(c,"$ist"),C.E.i(z.childNodes,b))},
ga7:function(a){var z=this.a.childNodes
return new W.dz(z,z.length,-1,[H.bs(C.E,z,"bd",0)])},
gD:function(a){return this.a.childNodes.length},
i:function(a,b){return C.E.i(this.a.childNodes,b)},
$asQ:function(){return[W.t]},
$asx:function(){return[W.t]},
$asd:function(){return[W.t]}},
t:{"^":"bX;0aY:parentElement=,0hJ:previousSibling=",
hQ:function(a){var z=a.parentNode
if(z!=null)J.bL(z,a)},
u:function(a){var z=a.nodeValue
return z==null?this.eD(a):z},
ax:function(a,b){return a.appendChild(b)},
fz:function(a,b){return a.removeChild(b)},
fB:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hJ:{"^":"jn;",
gD:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.by(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.k(b)
H.e(c,"$ist")
throw H.i(P.ad("Cannot assign element of immutable List."))},
ay:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isaN:1,
$asaN:function(){return[W.t]},
$asQ:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$asbd:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
ld:{"^":"I;0height",
saK:function(a,b){a.height=H.v(b)},
"%":"HTMLObjectElement"},
i7:{"^":"E;",
h5:function(a,b){return a.createContextualFragment(b)},
e6:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lu:{"^":"I;0D:length=","%":"HTMLSelectElement"},
iu:{"^":"I;",
ap:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=W.dw("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.af(y).aG(0,new W.af(z))
return y},
"%":"HTMLTableElement"},
lx:{"^":"I;",
ap:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.Y.ap(z.createElement("table"),b,c,d)
z.toString
z=new W.af(z)
x=z.gb2(z)
x.toString
z=new W.af(x)
w=z.gb2(z)
y.toString
w.toString
new W.af(y).aG(0,new W.af(w))
return y},
"%":"HTMLTableRowElement"},
ly:{"^":"I;",
ap:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.Y.ap(z.createElement("table"),b,c,d)
z.toString
z=new W.af(z)
x=z.gb2(z)
y.toString
x.toString
new W.af(y).aG(0,new W.af(x))
return y},
"%":"HTMLTableSectionElement"},
e7:{"^":"I;",
bT:function(a,b,c,d){var z
a.textContent=null
z=this.ap(a,b,c,d)
J.fe(a.content,z)},
bS:function(a,b){return this.bT(a,b,null,null)},
$ise7:1,
"%":"HTMLTemplateElement"},
iD:{"^":"ay;","%":"CompositionEvent|DragEvent|FocusEvent|MouseEvent|PointerEvent|TextEvent|TouchEvent|WheelEvent;UIEvent"},
lC:{"^":"hw;0height",
saK:function(a,b){a.height=H.k(b)},
"%":"HTMLVideoElement"},
iN:{"^":"bX;",
dR:function(a,b){H.m(b,{func:1,ret:-1,args:[P.a4]})
this.fh(a)
return this.fC(a,W.eU(b,P.a4))},
fC:function(a,b){return a.requestAnimationFrame(H.aU(H.m(b,{func:1,ret:-1,args:[P.a4]}),1))},
fh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
gaY:function(a){return W.jJ(a.parent)},
$isex:1,
"%":"DOMWindow|Window"},
ez:{"^":"t;",$isez:1,"%":"Attr"},
lM:{"^":"jI;",
gD:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.by(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.k(b)
H.e(c,"$ist")
throw H.i(P.ad("Cannot assign element of immutable List."))},
ay:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isaN:1,
$asaN:function(){return[W.t]},
$asQ:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$asbd:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
iZ:{"^":"cB;ff:a<",
b9:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.q,P.q]})
for(z=this.gaL(),y=z.length,x=this.a,w=J.F(x),v=0;v<z.length;z.length===y||(0,H.d5)(z),++v){u=z[v]
b.$2(u,w.bb(x,u))}},
gaL:function(){var z,y,x,w,v
z=this.a.attributes
y=H.h([],[P.q])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=H.e(z[w],"$isez")
if(v.namespaceURI==null)C.a.q(y,v.name)}return y},
$asc0:function(){return[P.q,P.q]},
$asdM:function(){return[P.q,P.q]}},
j0:{"^":"iZ;a",
i:function(a,b){return J.cj(this.a,H.v(b))},
m:function(a,b,c){J.fk(this.a,b,H.v(c))},
gD:function(a){return this.gaL().length}},
lJ:{"^":"cH;a,b,c,$ti",
hz:function(a,b,c,d){var z=H.n(this,0)
H.m(a,{func:1,ret:-1,args:[z]})
H.m(c,{func:1,ret:-1})
return W.cO(this.a,this.b,a,!1,z)}},
j2:{"^":"io;a,b,c,d,e,$ti",
fL:function(){var z,y,x
z=this.d
y=z!=null
if(y&&this.a<=0){x=this.b
x.toString
H.m(z,{func:1,args:[W.ay]})
if(y)J.fc(x,this.c,z,!1)}},
H:{
cO:function(a,b,c,d,e){var z=W.eU(new W.j3(c),W.ay)
z=new W.j2(0,a,b,z,!1,[e])
z.fL()
return z}}},
j3:{"^":"o:20;a",
$1:function(a){return this.a.$1(H.e(a,"$isay"))}},
bH:{"^":"c;a",
eU:function(a){var z,y
z=$.$get$cQ()
if(z.a===0){for(y=0;y<262;++y)z.m(0,C.ah[y],W.k4())
for(y=0;y<12;++y)z.m(0,C.D[y],W.k5())}},
b7:function(a){return $.$get$eG().aa(0,W.ba(a))},
aU:function(a,b,c){var z,y,x
z=W.ba(a)
y=$.$get$cQ()
x=y.i(0,H.f(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.jW(x.$4(a,b,c,this))},
$isak:1,
H:{
eF:function(a){var z,y
z=document.createElement("a")
y=new W.jt(z,window.location)
y=new W.bH(y)
y.eU(a)
return y},
lK:[function(a,b,c,d){H.e(a,"$isa7")
H.v(b)
H.v(c)
H.e(d,"$isbH")
return!0},"$4","k4",16,0,10],
lL:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isa7")
H.v(b)
H.v(c)
z=H.e(d,"$isbH").a
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
return z},"$4","k5",16,0,10]}},
bd:{"^":"c;$ti",
ga7:function(a){return new W.dz(a,this.gD(a),-1,[H.bs(this,a,"bd",0)])}},
dR:{"^":"c;a",
b7:function(a){return C.a.dk(this.a,new W.hL(a))},
aU:function(a,b,c){return C.a.dk(this.a,new W.hK(a,b,c))},
$isak:1},
hL:{"^":"o:6;a",
$1:function(a){return H.e(a,"$isak").b7(this.a)}},
hK:{"^":"o:6;a,b,c",
$1:function(a){return H.e(a,"$isak").aU(this.a,this.b,this.c)}},
ju:{"^":"c;",
eV:function(a,b,c,d){var z,y,x
this.a.aG(0,c)
z=b.cz(0,new W.jv())
y=b.cz(0,new W.jw())
this.b.aG(0,z)
x=this.c
x.aG(0,C.aj)
x.aG(0,y)},
b7:function(a){return this.a.aa(0,W.ba(a))},
aU:["eG",function(a,b,c){var z,y
z=W.ba(a)
y=this.c
if(y.aa(0,H.f(z)+"::"+b))return this.d.fP(c)
else if(y.aa(0,"*::"+b))return this.d.fP(c)
else{y=this.b
if(y.aa(0,H.f(z)+"::"+b))return!0
else if(y.aa(0,"*::"+b))return!0
else if(y.aa(0,H.f(z)+"::*"))return!0
else if(y.aa(0,"*::*"))return!0}return!1}],
$isak:1},
jv:{"^":"o:7;",
$1:function(a){return!C.a.aa(C.D,H.v(a))}},
jw:{"^":"o:7;",
$1:function(a){return C.a.aa(C.D,H.v(a))}},
jz:{"^":"ju;e,a,b,c,d",
aU:function(a,b,c){if(this.eG(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cj(a,"template")==="")return this.e.aa(0,b)
return!1},
H:{
eM:function(){var z,y,x,w,v
z=P.q
y=P.dJ(C.C,z)
x=H.n(C.C,0)
w=H.m(new W.jA(),{func:1,ret:z,args:[x]})
v=H.h(["TEMPLATE"],[z])
y=new W.jz(y,P.bA(null,null,null,z),P.bA(null,null,null,z),P.bA(null,null,null,z),null)
y.eV(null,new H.hu(C.C,w,[x,z]),v,null)
return y}}},
jA:{"^":"o:21;",
$1:function(a){return"TEMPLATE::"+H.f(H.v(a))}},
jy:{"^":"c;",
b7:function(a){var z=J.C(a)
if(!!z.$ise_)return!1
z=!!z.$isB
if(z&&W.ba(a)==="foreignObject")return!1
if(z)return!0
return!1},
aU:function(a,b,c){if(b==="is"||C.x.ev(b,"on"))return!1
return this.b7(a)},
$isak:1},
dz:{"^":"c;a,b,c,0d,$ti",
sd5:function(a){this.d=H.p(a,H.n(this,0))},
Y:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sd5(J.fa(this.a,z))
this.c=z
return!0}this.sd5(null)
this.c=y
return!1},
ga_:function(){return this.d},
$isaL:1},
j_:{"^":"c;a",
gaY:function(a){return W.eA(this.a.parent)},
$isbX:1,
$isex:1,
H:{
eA:function(a){if(a===window)return H.e(a,"$isex")
else return new W.j_(a)}}},
ak:{"^":"c;"},
jt:{"^":"c;a,b",$islA:1},
eO:{"^":"c;a",
cI:function(a){new W.jF(this).$2(a,null)},
bj:function(a,b){if(b==null)J.d9(a)
else J.bL(b,a)},
fF:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fg(a)
x=J.cj(y.gff(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.b_(a)}catch(t){H.a5(t)}try{u=W.ba(a)
this.fE(H.e(a,"$isa7"),b,z,v,u,H.e(y,"$isdM"),H.v(x))}catch(t){if(H.a5(t) instanceof P.aJ)throw t
else{this.bj(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fE:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bj(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b7(a)){this.bj(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aU(a,"is",g)){this.bj(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaL()
y=H.h(z.slice(0),[H.n(z,0)])
for(x=f.gaL().length-1,z=f.a,w=J.F(z);x>=0;--x){if(x>=y.length)return H.a(y,x)
v=y[x]
if(!this.a.aU(a,J.fl(v),w.bb(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.bb(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.bb(z,v)
w.fw(z,v)}}if(!!J.C(a).$ise7)this.cI(a.content)},
$islc:1},
jF:{"^":"o:22;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fF(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bj(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fi(z)}catch(w){H.a5(w)
v=H.e(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bL(u,v)}else J.bL(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$ist")}}},
jm:{"^":"E+Q;"},
jn:{"^":"jm+bd;"},
jH:{"^":"E+Q;"},
jI:{"^":"jH+bd;"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fo:{"^":"E;",$isfo:1,"%":"SVGAnimatedLength"},fp:{"^":"E;",$isfp:1,"%":"SVGAnimatedLengthList"},fq:{"^":"E;",$isfq:1,"%":"SVGAnimatedNumber"},kw:{"^":"B;0j:x=,0k:y=","%":"SVGFEBlendElement"},kx:{"^":"B;0j:x=,0k:y=","%":"SVGFEColorMatrixElement"},ky:{"^":"B;0j:x=,0k:y=","%":"SVGFEComponentTransferElement"},kz:{"^":"B;0j:x=,0k:y=","%":"SVGFECompositeElement"},kA:{"^":"B;0j:x=,0k:y=","%":"SVGFEConvolveMatrixElement"},kB:{"^":"B;0j:x=,0k:y=","%":"SVGFEDiffuseLightingElement"},kC:{"^":"B;0j:x=,0k:y=","%":"SVGFEDisplacementMapElement"},kD:{"^":"B;0j:x=,0k:y=","%":"SVGFEFloodElement"},kE:{"^":"B;0j:x=,0k:y=","%":"SVGFEGaussianBlurElement"},kF:{"^":"B;0j:x=,0k:y=","%":"SVGFEImageElement"},kG:{"^":"B;0j:x=,0k:y=","%":"SVGFEMergeElement"},kH:{"^":"B;0j:x=,0k:y=","%":"SVGFEMorphologyElement"},kI:{"^":"B;0j:x=,0k:y=","%":"SVGFEOffsetElement"},kJ:{"^":"B;0j:x=,0k:y=","%":"SVGFEPointLightElement"},kK:{"^":"B;0j:x=,0k:y=","%":"SVGFESpecularLightingElement"},kL:{"^":"B;0j:x=,0k:y=","%":"SVGFESpotLightElement"},kM:{"^":"B;0j:x=,0k:y=","%":"SVGFETileElement"},kN:{"^":"B;0j:x=,0k:y=","%":"SVGFETurbulenceElement"},kO:{"^":"B;0j:x=,0k:y=","%":"SVGFilterElement"},kP:{"^":"bc;0j:x=,0k:y=","%":"SVGForeignObjectElement"},h7:{"^":"bc;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bc:{"^":"B;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kX:{"^":"bc;0j:x=,0k:y=","%":"SVGImageElement"},l2:{"^":"B;0j:x=,0k:y=","%":"SVGMaskElement"},ll:{"^":"B;0j:x=,0k:y=","%":"SVGPatternElement"},lm:{"^":"E;0D:length=","%":"SVGPointList"},ls:{"^":"h7;0j:x=,0k:y=","%":"SVGRectElement"},e_:{"^":"B;",$ise_:1,"%":"SVGScriptElement"},B:{"^":"a7;",
sdJ:function(a,b){this.bS(a,b)},
ap:function(a,b,c,d){var z,y,x,w,v,u
z=H.h([],[W.ak])
C.a.q(z,W.eF(null))
C.a.q(z,W.eM())
C.a.q(z,new W.jy())
c=new W.eO(new W.dR(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).h6(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.af(w)
u=z.gb2(z)
for(z=J.F(v);x=u.firstChild,x!=null;)z.ax(v,x)
return v},
$isB:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lw:{"^":"bc;0j:x=,0k:y=","%":"SVGSVGElement"},ix:{"^":"bc;","%":"SVGTextPathElement;SVGTextContentElement"},lz:{"^":"ix;0j:x=,0k:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},lB:{"^":"bc;0j:x=,0k:y=","%":"SVGUseElement"}}],["","",,P,{"^":"",dB:{"^":"c;",$isx:1,
$asx:function(){return[P.aW]},
$isd:1,
$asd:function(){return[P.aW]}}}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,V,{"^":"",
hi:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
switch(a0.a){case C.S:H.u(a0,"$isl4")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new E.b(new Float64Array(2))
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(4)
w=new V.hy(z,y,0,0,0,x,0,0,0,new E.b(w),new E.b(v),0,0,new E.a0(u),new E.b(new Float64Array(2)),a0.gaC(a0),!1,!1)
w.aj(a.ch,a0)
y.h(a0.giI(a0))
G.cM(w.r.d,y,z)
w.fr=a0.gdL()
x.K()
w.cy=a0.gdF()
w.db=a0.gdz()
return w
case C.Q:H.u(a0,"$iskt")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new E.b(new Float64Array(2))
u.h(a0.f)
t=new E.b(new Float64Array(2))
t.h(a0.r)
v=new V.fU(0,0,0,u,t,0,0,0,0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),new E.b(v),0,0,0,0,0,a0.a,!1,!1)
v.aj(a.ch,a0)
v.fx=a0.x
v.ch=a0.y
v.cx=a0.z
return v
case C.ad:H.u(a0,"$islo")
z=new Float64Array(3)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(9)
t=a0.gbo()
s=new E.b(new Float64Array(2))
s.h(t)
t=a0.gbp()
r=new E.b(new Float64Array(2))
r.h(t)
t=a0.ghA()
q=new E.b(new Float64Array(2))
q.h(t)
q.W()
t=new E.b(new Float64Array(2))
u=new V.i3(s,r,q,t,new E.ae(z),0,0,0,0,0,!1,!1,0,0,new E.b(y),new E.b(x),0,0,0,0,new E.b(w),new E.b(v),0,0,0,0,new E.aj(u),0,a0.gaC(a0),!1,!1)
u.aj(a.ch,a0)
q.P(1,t)
u.dx=a0.ghO()
u.fx=a0.giz()
u.fy=a0.giK()
u.go=a0.giC()
u.id=a0.ghE()
u.k1=a0.gir()
u.k2=a0.ghg()
u.k3=C.i
return u
case C.O:H.u(a0,"$isdZ")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new Float64Array(3)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
x=new V.cF(z,y,new E.ae(x),0,!1,0,0,!1,0,0,0,0,0,new E.b(w),new E.b(v),new E.b(u),new E.b(t),0,0,0,0,new E.aj(new Float64Array(9)),0,C.i,a0.a,!1,!1)
x.aj(a.ch,a0)
z.h(a0.f)
y.h(a0.r)
x.fy=a0.x
x.go=a0.z
x.id=a0.Q
x.dy=a0.cy
x.fr=a0.cx
x.fx=a0.y
x.dx=!1
return x
case C.ag:H.u(a0,"$islD")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(9)
u=a0.gbo()
t=new E.b(new Float64Array(2))
t.h(u)
u=a0.gbp()
s=new E.b(new Float64Array(2))
s.h(u)
z=new V.iK(0,0,0,t,s,0,0,new E.ae(new Float64Array(3)),0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),0,0,0,0,new E.aj(v),a0.gaC(a0),!1,!1)
z.aj(a.ch,a0)
z.dy=a0.ghO()
z.ch=a0.gdF()
z.cx=a0.gdz()
return z
case C.T:H.u(a0,"$iskR")
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(4)
u=a0.gbo()
t=new E.b(new Float64Array(2))
t.h(u)
u=a0.gbp()
s=new E.b(new Float64Array(2))
s.h(u)
z=new V.h5(t,s,new E.b(new Float64Array(2)),0,0,0,0,0,new E.b(z),new E.b(y),new E.b(x),new E.b(w),0,0,0,0,new E.a0(v),0,a0.gaC(a0),!1,!1)
z.aj(a.ch,a0)
z.dx=a0.gdL()
z.dy=a0.ghD()
return z
case C.af:H.u(a0,"$islE")
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
v=new V.iL(0,0,z,y,x,w,0,0,0,0,0,!1,0,0,new E.b(v),new E.b(u),0,0,0,0,new E.b(t),new E.b(s),0,0,0,0,0,0,0,0,0,new E.b(r),new E.b(q),new E.b(new Float64Array(2)),a0.gaC(a0),!1,!1)
v.aj(a.ch,a0)
z.h(a0.gbo())
y.h(a0.gbp())
x.h(a0.ghA())
x.P(1,w)
v.X=0
v.fx=0
v.go=a0.giD()
v.id=a0.ghE()
v.k1=a0.ghg()
v.ch=a0.gdF()
v.cx=a0.gdz()
return v
case C.ae:H.u(a0,"$iskS")
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
n=a0.gcn()
m=a0.gco()
l=a0.gcn().e5()
k=a0.gco().e5()
j=a0.gcn().dY()
i=a0.gco().dY()
o=new V.h6(n,m,l,k,j,i,z,y,x,w,v,u,0,0,0,0,0,0,0,0,0,new E.b(t),new E.b(s),new E.b(r),new E.b(q),0,0,0,0,0,0,0,0,new E.b(p),new E.b(o),0,0,0,0,0,a0.gaC(a0),!1,!1)
o.aj(a.ch,a0)
n=n.e_()
o.f=n
h=n.d
g=j.gcb()
j.gaR().gt()
t=o.Q.a.l()
s=o.Q.a.l()
f=a0.gcn()
x.h(f.gfo())
z.h(f.gfp())
o.k2=f.gfu()
v.h(f.gfq())
G.l(h.b,z,s)
s.q(0,h.a)
s.n(g.gad())
G.aa(g.gcq(),s,t)
t.n(x)
e=t.G(v)
o.Q.a.b-=2
z=m.e_()
o.r=z
d=z.d
c=i.gcb()
i.gaR().gt()
z=o.Q.a.l()
x=o.Q.a.l()
f=a0.gco()
w.h(f.gfo())
y.h(f.gfp())
o.k3=f.gfu()
u.h(f.gfq())
G.l(d.b,y,x)
x.q(0,d.a)
x.n(c.gad())
G.aa(c.gcq(),x,z)
z.n(w)
b=z.G(u)
o.Q.a.b-=2
z=a0.ghM()
o.r1=z
o.k4=e+z*b
o.r2=0
return o
case C.R:H.u(a0,"$islr")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new E.b(new Float64Array(2))
w=new E.b(new Float64Array(2))
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
v=new V.dV(z,y,0,0,x,w,0,0,0,0,0,new E.b(v),new E.b(u),new E.b(t),new E.b(s),new E.b(r),new E.b(new Float64Array(2)),0,0,0,0,0,a0.gaC(a0),!1,!1)
v.aj(a.ch,a0)
z.h(a0.gi7())
y.h(a0.gi8())
x.h(a0.gbo())
w.h(a0.gbp())
v.fx=a0.ghM()
v.cy=a0.ghx()
v.db=a0.ghy()
v.fr=a0.ghx().B(0,C.c.v(v.fx,a0.ghy()))
v.fy=0
return v
case C.P:return V.fE(a,H.u(a0,"$iskr"))
case C.ab:H.u(a0,"$islt")
z=new E.b(new Float64Array(2))
y=new E.b(new Float64Array(2))
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
x=new V.ia(z,y,0,0,0,0,0,new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(new Float64Array(2)),0,0,0,0,0,C.i,a0.gaC(a0),!1,!1)
x.aj(a.ch,a0)
z.h(a0.gbo())
y.h(a0.gbp())
x.cy=a0.giB(a0)
return x
case C.ac:H.u(a0,"$isl3")
z=new E.b(new Float64Array(2))
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
y=new V.hx(z,0,new E.b(y),0,0,0,0,0,0,new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(t),0,0,0,0,0,new E.a0(new Float64Array(4)),0,a0.gaC(a0),!1,!1)
y.aj(a.ch,a0)
z.h(a0.giy())
y.cx=a0.gim()
y.db=0
y.dx=a0.gdL()
y.dy=a0.ghD()
y.fr=a0.gio()
return y
case C.aa:default:return}},
hW:function(a){return a.gck(a).M(0,0)},
fF:{"^":"c;",
cM:function(a,b){var z,y,x
z=a.y
y=b.y
x=z.c
if(x===y.c&&x!==0)return x>0
return(z.b&y.a)!==0&&(z.a&y.b)!==0}},
dk:{"^":"c;a,b,c"},
fK:{"^":"c;"},
S:{"^":"c;a,b",
cB:function(a){var z,y
z=this.a.a
y=this.b.a
a.sj(0,(z[0]+y[0])*0.5)
a.sk(0,(z[1]+y[1])*0.5)},
a4:function(a,b){var z,y,x,w,v
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
aE:function(){var z,y
z=this.b.a
y=this.a.a
return 2*(z[0]-y[0]+z[1]-y[1])},
u:function(a){return"AABB["+this.a.u(0)+" . "+this.b.u(0)+"]"},
H:{
fm:function(a,b){var z,y
z=b.a.a
y=a.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=a.a.a
y=b.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0}}},
fL:{"^":"c;a,b,0c,d,e,0f,r,x,y",
sd8:function(a){this.c=H.j(a,"$isd",[P.w],"$asd")},
sd9:function(a){this.f=H.j(a,"$isd",[V.aD],"$asd")},
eM:function(a){var z,y
z=new Array(this.r)
z.fixed$length=Array
this.sd9(H.h(z,[V.aD]))
for(y=0;y<this.r;++y){z=this.f;(z&&C.a).m(z,y,new V.aD(0,0))}this.sd8(P.aB(this.d,0,!1,P.w))},
hX:function(a,b){var z,y,x,w
z=this.a
y=z.b
if(a<0||a>=y.length)return H.a(y,a)
x=y[a].gaS()
z=z.b
if(b<0||b>=z.length)return H.a(z,b)
w=z[b].gaS()
z=w.a.a
y=x.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
z=x.a.a
y=w.b.a
if(z[0]-y[0]>0||z[1]-y[1]>0)return!1
return!0},
cw:function(a){var z,y,x,w,v,u,t,s,r
this.x=0
for(z=this.a,y=0;y<this.e;++y){x=this.c
if(y>=x.length)return H.a(x,y)
x=H.k(x[y])
this.y=x
if(x===-1)continue
z.hK(this,C.a.i(z.b,x).gaS())}this.e=0
F.f7(this.f,0,this.x,V.aD)
for(y=0;y<this.x;){x=this.f
if(y<0||y>=x.length)return H.a(x,y)
w=x[y]
x=w.a
v=C.a.i(z.b,x).gaD()
x=w.b
a.fN(v,C.a.i(z.b,x).gaD());++y
for(x=this.x,u=this.f;y<x;){if(y>=u.length)return H.a(u,y)
t=u[y]
s=t.a
r=w.a
if(s==null?r==null:s===r){s=t.b
r=w.b
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)break;++y}}},
dr:function(a){var z,y,x
z=this.e
y=this.d
if(z===y){x=this.c
z=y*2
this.d=z
z=new Array(z)
z.fixed$length=Array
this.sd8(H.h(z,[P.w]))
C.a.al(this.c,0,x.length,x,0)}C.a.m(this.c,this.e,a);++this.e},
dV:function(a){var z,y,x,w,v
if(a===this.y)return!0
z=this.x
y=this.r
if(z===y){x=this.f
z=y*2
this.r=z
z=new Array(z)
z.fixed$length=Array
this.sd9(H.h(z,[V.aD]))
z=this.f
w=x.length;(z&&C.a).al(z,0,w,x,0)
for(;w<this.r;++w){z=this.f;(z&&C.a).m(z,w,new V.aD(0,0))}}z=this.y
if(typeof z!=="number")return H.J(z)
y=this.f
v=this.x
if(a<z){if(v>=y.length)return H.a(y,v)
y[v].sdN(a)
z=this.f
y=this.x
if(y>=z.length)return H.a(z,y)
z[y].sdO(this.y)}else{if(v>=y.length)return H.a(y,v)
y[v].sdN(z)
z=this.f
y=this.x
if(y>=z.length)return H.a(z,y)
z[y].sdO(a)}++this.x
return!0},
$isiA:1,
$isko:1,
H:{
fM:function(a){var z=new V.fL(a,0,16,0,16,0,-1)
z.eM(a)
return z}}},
h_:{"^":"c;0a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy",
sfs:function(a){this.b=H.j(a,"$isd",[V.as],"$asd")},
shG:function(a){this.r=H.j(a,"$isd",[V.as],"$asd")},
eO:function(){var z,y,x,w,v
for(z=this.d-1;z>=0;--z){y=this.b
x=new Float64Array(2)
C.a.m(y,z,new V.as(new V.S(new E.b(x),new E.b(new Float64Array(2))),z,0))
y=this.b
x=y.length
if(z>=x)return H.a(y,z)
w=y[z]
if(z===this.d-1)y=null
else{v=z+1
if(v>=x)return H.a(y,v)
v=y[v]
y=v}J.db(w,y)
y=this.b
if(z>=y.length)return H.a(y,z)
J.da(y[z],-1)}for(y=this.f,z=0;z<4;++z)C.a.m(y,z,new E.b(new Float64Array(2)))},
hF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
this.fA(y)
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
this.d6(a)
return!0},
hK:function(a,b){var z,y,x,w,v
this.x=0
z=this.r
this.x=1
C.a.m(z,0,this.a)
for(z=[V.as];y=this.x,y>0;){x=this.r;--y
this.x=y
if(y>=x.length)return H.a(x,y)
w=x[y]
if(w==null)continue
if(V.fm(w.a,b))if(w.d==null)a.dV(w.f)
else{y=this.r.length
if(y-this.x-2<=0){y=new Array(y*2)
y.fixed$length=Array
v=H.h(y,z)
y=this.r
C.a.al(v,0,y.length,y,0)
this.shG(v)}C.a.m(this.r,this.x++,w.d)
C.a.m(this.r,this.x++,w.e)}}},
bZ:function(a){var z=a.d
if(z==null)return 0
return H.k(1+Math.max(this.bZ(z),this.bZ(a.e)))},
cX:function(){var z,y,x,w,v,u,t
z=this.e
if(z===-1){y=this.b
z=this.d*=2
z=new Array(z)
z.fixed$length=Array
this.sfs(H.h(z,[V.as]))
C.a.al(this.b,0,y.length,y,0)
for(x=this.d-1;z=this.c,x>=z;--x){z=this.b
w=new Float64Array(2)
C.a.m(z,x,new V.as(new V.S(new E.b(w),new E.b(new Float64Array(2))),x,0))
z=this.b
w=z.length
if(x<0||x>=w)return H.a(z,x)
v=z[x]
if(x===this.d-1)z=null
else{u=x+1
if(u>=w)return H.a(z,u)
u=z[u]
z=u}J.db(v,z)
z=this.b
if(x>=z.length)return H.a(z,x)
J.da(z[x],-1)}this.e=z}w=this.b
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
d2:function(a){var z,y
z=this.e
if(z!==-1){y=this.b
if(z<0||z>=y.length)return H.a(y,z)
z=y[z]}else z=null
a.c=H.e(z,"$isas")
a.r=-1
this.e=a.f;--this.c},
d6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.b
if(a<0||a>=z.length)return H.a(z,a)
y=z[a]
x=this.a
if(x==null){this.a=y
y.c=null
return}w=y.a
for(z=this.ch;v=x.d,v!=null;){u=x.e
t=x.a
s=t.aE()
z.a4(t,w)
r=z.aE()
q=2*r
p=2*(r-s)
if(v.d==null){z.a4(w,v.a)
o=z.aE()+p}else{t=v.a
z.a4(w,t)
n=t.aE()
o=z.aE()-n+p}if(u.d==null){z.a4(w,u.a)
m=z.aE()+p}else{t=u.a
z.a4(w,t)
n=t.aE()
m=z.aE()-n+p}if(q<o&&q<m)break
x=o<m?v:u}z=this.b
t=x.f
if(t<0||t>=z.length)return H.a(z,t)
l=J.fh(z[t])
k=this.cX()
k.c=l
k.b=null
k.a.a4(w,x.a)
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
this.a=k}for(x=k;x!=null;){x=this.cY(x)
j=x.d
u=x.e
x.r=H.k(1+Math.max(j.r,u.r))
x.a.a4(j.a,u.a)
x=x.c}},
fA:function(a){var z,y,x,w,v,u,t
if(a===this.a){this.a=null
return}z=a.c
y=z.c
x=z.d
if(x===a)x=z.e
if(y!=null){w=y.d
if(w==null?z==null:w===z)y.d=x
else y.e=x
x.c=y
this.d2(z)
for(v=y;v!=null;){v=this.cY(v)
u=v.d
t=v.e
v.a.a4(u.a,t.a)
v.r=H.k(1+Math.max(u.r,t.r))
v=v.c}}else{this.a=x
x.c=null
this.d2(z)}},
cY:function(a){var z,y,x,w,v,u,t,s
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
u.a4(z.a,v.a)
y.a.a4(u,w.a)
z=H.k(1+Math.max(z.r,v.r))
a.r=z
y.r=H.k(1+Math.max(z,w.r))}else{y.e=v
a.e=w
w.c=a
u.a4(z.a,w.a)
y.a.a4(u,v.a)
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
u.a4(y.a,s.a)
z.a.a4(u,t.a)
u=H.k(1+Math.max(y.r,s.r))
a.r=u
z.r=H.k(1+Math.max(u,t.r))}else{z.e=s
a.d=t
t.c=a
u.a4(y.a,t.a)
z.a.a4(u,s.a)
u=H.k(1+Math.max(y.r,t.r))
a.r=u
z.r=H.k(1+Math.max(u,s.r))}return z}return a},
hf:function(a){var z,y
z=this.a
if(z==null)return
y=this.bZ(z)
this.cj(a,this.a,0,y)},
cj:function(a,b,c,d){var z,y,x,w,v,u
z=b.a
y=H.j(this.f,"$isd",[E.b],"$asd")
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
x.av(1,v,v)
a.bE(y,4,x)
y=a.c
y.stroke()
v=this.cy
a.b.bc(z,v)
v=v.a
z=v[0]
v=v[1]
w=c+1
u=H.f(b)+".id-"+w+"/"+d
a.bG(x)
C.m.eA(y,u,z,v)
z=b.d
if(z!=null)this.cj(a,z,w,d)
z=b.e
if(z!=null)this.cj(a,z,w,d)},
$iskp:1,
H:{
h0:function(){var z,y,x,w,v,u,t,s,r,q
z=new Array(16)
z.fixed$length=Array
y=[V.as]
z=H.h(z,y)
x=new Array(4)
x.fixed$length=Array
x=H.h(x,[E.b])
w=new Array(20)
w.fixed$length=Array
y=H.h(w,y)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
z=new V.h_(z,0,16,0,x,y,0,new E.b(w),new V.S(new E.b(v),new E.b(u)),new V.cE(new E.b(t),new E.b(s),0),new V.S(new E.b(r),new E.b(q)),new G.bR(0,0,0),new E.b(new Float64Array(2)))
z.eO()
return z}}},
as:{"^":"c;aS:a<,0aD:b<,0aY:c>,0d,0e,f,r",
saY:function(a,b){this.c=H.e(b,"$isas")},
saK:function(a,b){this.r=H.k(b)}},
aD:{"^":"c;a,b",
sdN:function(a){this.a=H.k(a)},
sdO:function(a){this.b=H.k(a)},
b8:function(a,b){var z,y
H.e(b,"$isaD")
z=this.a
y=b.a
if(typeof z!=="number")return z.M()
if(typeof y!=="number")return H.J(y)
if(z<y)return-1
if(z===y){z=this.b
y=b.b
if(typeof z!=="number")return z.M()
if(typeof y!=="number")return H.J(y)
if(z<y)z=-1
else z=z===y?0:1
return z}return 1},
$isK:1,
$asK:function(){return[V.aD]}},
eB:{"^":"c;a,b"},
T:{"^":"c;E:a<,b",
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
cr:{"^":"c;a,b",
u:function(a){return this.b}},
dv:{"^":"c;a,b,c"},
iv:{"^":"c;a,b,c",
eS:function(){var z,y,x
for(z=this.b,y=this.a,x=0;x<8;++x){C.a.m(y,x,new E.b(new Float64Array(2)))
C.a.m(z,x,new E.b(new Float64Array(2)))}},
H:{
iw:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.b]
z=H.h(z,y)
x=new Array(8)
x.fixed$length=Array
y=new V.iv(z,H.h(x,y),0)
y.eS()
return y}}},
jo:{"^":"c;a,b,c,d,e,f,r,x,y"},
fB:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3",
fX:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n
a.e=0
z=b.gad()
y=d.gad()
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
n=b.gba().B(0,d.gba())
if(C.b.aN(p*p+o*o,n.v(0,n)))return
a.d=C.p
a.c.h(z)
a.b.K()
a.e=1
x=a.a
x[0].a.h(y)
x[0].d.bs()},
fY:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=b0.gad()
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
l=C.b.B(a8.b,b0.gba())
k=a8.f
j=a8.d
i=a8.e
for(h=0,g=-17976931348623157e292,f=0;f<k;++f){if(f>=8)return H.a(j,f)
w=j[f].a
v=w[0]
w=w[1]
u=J.Y(i[f])
if(typeof u!=="number")return u.v()
t=J.Z(i[f])
if(typeof t!=="number")return t.v()
e=u*(n-v)+t*(m-w)
if(e>l)return
if(e>g){g=e
h=f}}d=h+1
d=d<k?d:0
if(h<0||h>=8)return H.a(j,h)
c=j[h]
if(d<0||d>=8)return H.a(j,d)
b=j[d]
if(g<11920928955078125e-23){a7.e=1
a7.d=C.j
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
a.d.bs()
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
a7.d=C.j
v=a7.b
v.sj(0,a0)
v.sk(0,m-w[1])
v.W()
a7.c.h(c)
v=a7.a
v[0].a.h(z)
v[0].d.bs()}else if(a2*(v-s)+a3*(u-r)<=0){if(a2*a2+a3*a3>l*l)return
a7.e=1
a7.d=C.j
w=a7.b
w.sj(0,a2)
w.sk(0,m-t[1])
w.W()
a7.c.h(b)
w=a7.a
w[0].a.h(z)
w[0].d.bs()}else{a4=(v+s)*0.5
a5=(u+r)*0.5
a6=i[h]
w=a6.a
if((n-a4)*w[0]+(m-a5)*w[1]>l)return
a7.e=1
a7.d=C.j
a7.b.h(a6)
w=a7.c
w.sj(0,a4)
w.sk(0,a5)
w=a7.a
w[0].a.h(z)
w[0].d.bs()}},
dD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=b.f
y=d.f
x=b.e
w=b.d
v=d.d
u=this.f
G.eg(e,c,u)
t=u.b
for(s=this.r,r=s.a,q=this.x,p=q.a,o=0,n=-17976931348623157e292,m=0;m<z;++m){if(m>=8)return H.a(x,m)
G.l(t,x[m],s)
G.r(u,w[m],q)
for(l=17976931348623157e292,k=0;k<y;++k){if(k>=8)return H.a(v,k)
j=v[k]
i=r[0]
h=j.a
g=i*(h[0]-p[0])+r[1]*(h[1]-p[1])
if(g<l)l=g}if(l>n){n=l
o=m}}a.b=o
a.a=n},
hn:function(a0,a1,a2,a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
H.j(a0,"$isd",[V.T],"$asd")
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
fZ:function(a7,a8,a9,b0,b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
a7.e=0
z=a8.b+b0.b
y=this.y
this.dD(y,a8,a9,b0,b1)
if(y.a>z)return
x=this.z
this.dD(x,b0,b1,a8,a9)
w=x.a
if(w>z)return
if(w>y.a+0.0005){v=x.b
a7.d=C.z
u=a9
t=b1
s=a8
r=b0
q=!0}else{v=y.b
a7.d=C.j
u=b1
t=a9
s=b0
r=a8
q=!1}p=t.b
y=this.Q
this.hn(y,r,t,v,s,u)
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
l.W()
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
a=V.bQ(b,y,g,-(x*w+l*j)+z,v)
g.L()
if(a<2)return
y=this.fx
if(V.bQ(y,b,g,x*c+l*k+z,m)<2)return
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
dt:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n
a.e=0
z=this.e
G.r(e,d.gad(),z)
y=this.fy
G.cM(c,z,y)
x=b.c
w=b.d
v=this.go
v.h(w)
v.n(x)
z.h(w)
z.n(y)
u=v.G(z)
z.h(y)
z.n(x)
t=v.G(z)
s=C.b.B(b.b,d.gba())
r=this.id
q=r.a
q[1]=0
q[3]=0
if(t<=0){z=$.$get$aK()
z.h(y)
z.n(x)
z=$.$get$aK()
if(z.G(z)>s*s)return
b.r
q[0]=0
q[2]=0
a.e=1
a.d=C.p
a.b.K()
a.c.h(x)
z=a.a
z[0].d.N(r)
z[0].a.h(d.gad())
return}if(u<=0){z=$.$get$aK()
z.h(y)
z.n(w)
z=$.$get$aK()
if(z.G(z)>s*s)return
b.x
q[0]=1
q[2]=0
a.e=1
a.d=C.p
a.b.K()
a.c.h(w)
z=a.a
z[0].d.N(r)
z[0].a.h(d.gad())
return}p=v.G(v)
o=this.k2
o.h(x)
o.C(0,u)
z.h(w)
z.C(0,t)
o.q(0,z)
o.C(0,1/p)
n=$.$get$aK()
n.h(y)
n.n(o)
o=$.$get$aK()
if(o.G(o)>s*s)return
o=this.r
v=v.a
o.sj(0,-v[1])
o.sk(0,v[0])
z.h(y)
z.n(x)
if(o.G(z)<0){z=o.a
o.F(-z[0],-z[1])}o.W()
q[0]=0
q[2]=1
a.e=1
a.d=C.j
a.b.h(o)
a.c.h(x)
z=a.a
z[0].d.N(r)
z[0].a.h(d.gad())},
H:{
bQ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=[V.T]
H.j(a,"$isd",z,"$asd")
H.j(b,"$isd",z,"$asd")
y=b[0]
x=b[1]
w=y.a
v=x.a
u=c.G(w)-d
t=c.G(v)-d
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
iI:{"^":"c;a,b",
u:function(a){return this.b}},
h1:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx",
eP:function(){var z,y,x,w,v
for(z=this.k2,y=this.k1,x=this.id,w=0;w<2;++w){v=new Float64Array(2)
C.a.m(x,w,new V.T(new E.b(v),new V.V(new Int8Array(4))))
v=new Float64Array(2)
C.a.m(y,w,new V.T(new E.b(v),new V.V(new Int8Array(4))))
v=new Float64Array(2)
C.a.m(z,w,new V.T(new E.b(v),new V.V(new Int8Array(4))))}},
ds:function(a,b,c,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.b
G.eg(c,a1,z)
y=this.c
G.r(z,a0.c,y)
this.d=b.e
this.e=b.c
x=b.d
this.f=x
this.r=b.f
b.x
w=this.fr
w.h(x)
w.n(this.e)
w.W()
x=this.y
w=w.a
x.F(w[1],-w[0])
w=this.fx
w.h(y)
w.n(this.e)
v=x.G(w)
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
G.r(z,r[q],u[q])
G.l(t,a0.e[q],s[q])}this.dx=0.02
a.e=0
p=this.k4
this.h1(p)
if(p.a===C.t)return
if(p.c>this.dx)return
o=this.r1
this.h3(o)
t=o.a===C.t
if(!t&&o.c>this.dx)return
if(!t)if(o.c>0.98*p.c+0.001)p=o
t=this.id
n=t[0]
m=t[1]
if(p.a===C.v){a.d=C.j
r=this.Q
l=r.G(s[0])
for(k=0,q=1;j=y.c,q<j;++q){if(q>=8)return H.a(s,q)
i=r.G(s[q])
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
r.L()}}else{a.d=C.z
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
x.F(s[1],-s[0])
s=y.x
s.h(x)
s.L()
r=y.c
y.r=x.G(r)
y.y=s.G(y.d)
j=this.k1
if(V.bQ(j,t,x,y.r,y.a)<2)return
x=this.k2
if(V.bQ(x,j,s,y.y,y.b)<2)return
t=a.b
s=a.c
if(p.a===C.v){t.h(u)
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
if(u.G(w)<=this.dx){if(f>=2)return H.a(t,f)
d=t[f]
if(p.a===C.v){G.cM(z,x[q].a,d.a)
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
h1:function(a){var z,y,x,w,v,u,t,s,r,q
a.a=C.v
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
h3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
a.a=C.t
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
if(f>this.dx){a.a=C.L
a.b=p
a.c=f
return}if(i*z[0]+h*z[1]>=0){u[1]=h
u[0]=v[0]
w.n(q)
if(w.G(y)<-0.03490658503988659)continue}else{u[1]=h
u[0]=v[0]
w.n(t)
if(w.G(y)<-0.03490658503988659)continue}if(f>a.c){a.a=C.L
a.b=p
a.c=f}}},
H:{
h2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.iw()
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
h=[V.T]
i=H.h(i,h)
g=new Array(2)
g.fixed$length=Array
g=H.h(g,h)
f=new Array(2)
f.fixed$length=Array
h=H.h(f,h)
f=new Float64Array(2)
e=new Float64Array(2)
d=new Float64Array(2)
c=new Float64Array(2)
b=new Float64Array(2)
a=new Float64Array(2)
z=new V.h1(z,new G.G(new E.b(y),new G.A(0,1)),new E.b(x),new E.b(w),new E.b(v),new E.b(u),new E.b(t),new E.b(s),new E.b(r),new E.b(q),new E.b(p),C.Z,C.Z,new E.b(o),new E.b(n),0,!1,new E.b(m),new E.b(l),new E.b(k),new E.b(j),i,g,h,new V.jo(0,0,new E.b(f),new E.b(e),new E.b(d),new E.b(c),0,new E.b(b),0),new V.dv(C.t,0,0),new V.dv(C.t,0,0),new E.b(a),new E.b(new Float64Array(2)))
z.eP()
return z}}},
V:{"^":"c;a",
bt:function(){var z=this.a
return(z[0]<<24|z[1]<<16|z[2]<<8|z[3])>>>0},
N:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
bs:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0},
b8:function(a,b){H.e(b,"$isV")
return this.bt()-b.bt()},
$isK:1,
$asK:function(){return[V.V]}},
c9:{"^":"c;a,b,p:c<,t:d<,e,f",
st:function(a){this.d=H.br(a)},
N:function(a){this.a.h(a.a)
this.b.h(a.b)
this.c.h(a.c)
this.d=a.d
this.e=a.e
this.f=a.f}},
ih:{"^":"c;a,b,c,d",H:{
e1:function(){var z,y
z=P.w
y=P.aB(3,0,!1,z)
z=P.aB(3,0,!1,z)
C.a.m(y,0,1073741823)
C.a.m(y,1,1073741823)
C.a.m(y,2,1073741823)
C.a.m(z,0,1073741823)
C.a.m(z,1,1073741823)
C.a.m(z,2,1073741823)
return new V.ih(0,0,y,z)}}},
jx:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
hN:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
G.r(c,p,r)
n=q.b
G.r(e,o,n)
m=q.c
l=n.a
n=m.a
n[1]=l[1]
n[0]=l[0]
m.n(r)
q.d=0}if(r>1){k=a.a
j=this.cE()
if(j<0.5*k||2*k<j||j<11920928955078125e-23)this.e=0}if(this.e===0){q=z[0]
q.e=0
q.f=0
p=u[0]
o=t[0]
z=q.a
G.r(c,p,z)
y=q.b
G.r(e,o,y)
x=q.c
x.h(y)
x.n(z)
this.e=1}},
i5:function(a){var z,y,x,w
a.a=this.cE()
a.b=this.e
for(z=a.c,y=this.d,x=a.d,w=0;w<this.e;++w){if(w>=3)return H.a(y,w)
C.a.m(z,w,J.dc(y[w].e))
C.a.m(x,w,J.dc(y[w].f))}},
e3:function(a){var z,y
switch(this.e){case 1:a.h(this.a.c)
a.L()
return
case 2:z=this.f
z.h(this.b.c)
y=this.a.c
z.n(y)
a.h(y)
a.L()
if(z.w(a)>0)z.P(1,a)
else z.P(-1,a)
return
default:a.K()
return}},
cC:function(a){var z,y,x
switch(this.e){case 0:a.K()
return
case 1:a.h(this.a.c)
return
case 2:z=this.x
y=this.b
z.h(y.c)
z.C(0,y.d)
y=this.r
x=this.a
y.h(x.c)
y.C(0,x.d)
y.q(0,z)
a.h(y)
return
case 3:a.K()
return
default:a.K()
return}},
cE:function(){var z,y,x
switch(this.e){case 0:return 0
case 1:return 0
case 2:return Math.sqrt(this.a.c.bK(this.b.c))
case 3:z=this.y
z.h(this.b.c)
y=this.a.c
z.n(y)
x=this.z
x.h(this.c.c)
x.n(y)
return z.w(x)
default:return 0}},
ea:function(){var z,y,x,w,v,u,t,s
z=this.a
y=z.c
x=this.b
w=x.c
v=this.f
v.h(w)
v.n(y)
u=-y.G(v)
if(u<=0){z.d=1
this.e=1
return}t=w.G(v)
if(t<=0){x.d=1
this.e=1
z.N(x)
return}s=1/(t+u)
z.d=t*s
x.d=u*s
this.e=2},
eb:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
s=z.G(t)
r=x.G(t)
q=-s
p=this.Q
p.h(v)
p.n(z)
o=z.G(p)
n=v.G(p)
m=-o
l=this.ch
l.h(v)
l.n(x)
k=x.G(l)
j=v.G(l)
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
fV:{"^":"c;a,0b,0c,d",
eN:function(){var z,y
for(z=this.a,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
this.b=0
this.c=0},
bv:function(a,b){var z,y,x,w,v,u
switch(a.a){case C.o:H.u(a,"$isb5")
this.a[0].h(a.gad())
this.b=1
this.c=a.gba()
break
case C.l:z=a.f
this.b=z
this.c=a.b
for(y=this.a,x=0;x<z;++x){if(x>=8)return H.a(y,x)
w=y[x]
v=a.d[x]
w.toString
u=H.e(v,"$isb").a
w=w.a
w[1]=u[1]
w[0]=u[0]}break
case C.A:H.u(a,"$iscq")
z=this.d
C.a.m(z,0,a.gce().i(0,b))
y=b+1
if(C.c.M(y,a.gfb()))C.a.m(z,1,a.gce().i(0,y))
else C.a.m(z,1,a.gce().i(0,0))
y=this.a
y[0].h(z[0])
y[1].h(z[1])
this.b=2
this.c=a.gba()
break
case C.q:H.u(a,"$isb9")
z=this.a
z[0].h(a.c)
z[1].h(a.d)
this.b=2
this.c=a.b
break}},
b_:function(a){var z,y,x,w,v
z=this.a
y=z[0].G(a)
for(x=0,w=1;w<this.b;++w){if(w>=8)return H.a(z,w)
v=z[w].G(a)
if(v>y){y=v
x=w}}return x},
H:{
b6:function(){var z,y,x
z=new Array(8)
z.fixed$length=Array
y=[E.b]
z=H.h(z,y)
x=new Array(2)
x.fixed$length=Array
y=new V.fV(z,H.h(x,y))
y.eN()
return y}}},
fT:{"^":"c;a,b,c,d,e,f,r",
dB:function(a4,a5,a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.dr=$.dr+1
z=a6.a
y=a6.b
x=a6.c
w=a6.d
v=this.a
v.hN(a5,z,x,y,w)
u=v.d
t=this.d
v.cC(t)
t.gO()
for(s=this.b,r=s.length,q=this.c,p=q.length,o=x.b,n=this.e,m=this.f,l=z.a,k=w.b,j=y.a,i=0;i<20;){h=v.e
for(g=0;g<h;++g){if(g>=3)return H.a(u,g)
C.a.m(s,g,u[g].e)
C.a.m(q,g,u[g].f)}switch(v.e){case 1:break
case 2:v.ea()
break
case 3:v.eb()
break}if(v.e===3)break
v.cC(t)
t.gO()
v.e3(n)
if(n.gO()<14210854715202004e-30)break
f=v.e
if(f>=3)return H.a(u,f)
e=u[f]
n.L()
G.aa(o,n,m)
f=z.b_(m)
e.e=f
if(f>=8)return H.a(l,f)
f=l[f]
d=e.a
G.r(x,f,d)
n.L()
G.aa(k,n,m)
f=y.b_(m)
e.f=f
if(f>=8)return H.a(j,f)
f=j[f]
c=e.b
G.r(w,f,c)
f=e.c
b=c.a
c=f.a
c[1]=b[1]
c[0]=b[0]
f.n(d);++i
$.ds=$.ds+1
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
break}++g}if(a)break;++v.e}$.dt=Math.max($.dt,i)
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
t.C(0,s.d)
r=v.b
a0.h(r.a)
a0.C(0,r.d)
a0.q(0,t)
t.h(s.b)
t.C(0,s.d)
a1.h(r.b)
a1.C(0,r.d)
a1.q(0,t)
break
case 3:t=v.a
a0.h(t.a)
a0.C(0,t.d)
t=v.y
s=v.b
t.h(s.a)
t.C(0,s.d)
s=v.z
r=v.c
s.h(r.a)
s.C(0,r.d)
a0.q(0,t)
a0.q(0,s)
a1.h(a0)
break
default:break}a4.c=Math.sqrt(a0.bK(a1))
a4.d=i
v.i5(a5)
if(a6.e){a2=z.c
a3=y.c
v=a4.c
t=a2+a3
if(v>t&&v>11920928955078125e-23){a4.c=v-t
v=this.r
v.h(a1)
v.n(a0)
v.W()
m.h(v)
m.C(0,a2)
a0.q(0,m)
m.h(v)
m.C(0,a3)
a1.n(m)}else{a0.q(0,a1)
a0.C(0,0.5)
a1.h(a0)
a4.c=0}}}},
dp:{"^":"c;a,b,c,d,e"},
dq:{"^":"c;a,b,c,d"},
cA:{"^":"c;a,b",
u:function(a){return this.b}},
hs:{"^":"c;a,b,c,d,e",
eQ:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.m(z,y,new V.dL(new E.b(x),0,0,new V.V(new Int8Array(4))))}},
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
H:{
R:function(){var z,y
z=new Array(2)
z.fixed$length=Array
z=H.h(z,[V.dL])
y=new Float64Array(2)
z=new V.hs(z,new E.b(y),new E.b(new Float64Array(2)),C.p,0)
z.eQ()
return z}}},
dL:{"^":"c;a,b,c,d"},
cE:{"^":"c;a,b,c"},
dY:{"^":"c;a,b"},
b9:{"^":"e0;c,d,e,f,r,x,y,a,b"},
hv:{"^":"c;a,b,c"},
i_:{"^":"e0;c,d,e,f,r,x,y,z,Q,a,b",
eR:function(){var z,y
for(z=this.d,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
for(z=this.e,y=0;y<8;++y)C.a.m(z,y,new E.b(new Float64Array(2)))
this.b=0.01},
fV:function(a){var z,y,x,w,v,u
z=V.bD()
z.c.h(this.c)
for(y=z.e,x=this.e,w=z.d,v=this.d,u=0;u<8;++u){y[u].h(x[u])
w[u].h(v[u])}z.b=this.b
z.f=this.f
return z},
e8:function(a0,a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=E.b
H.j(a0,"$isd",[z],"$asd")
if(a1<3){this.bR(1,1)
return}y=Math.min(a1,8)
x=new Array(8)
x.fixed$length=Array
w=H.h(x,[z])
for(v=0,u=0;u<y;++u){if(u>=8)return H.a(a0,u)
t=a0[u]
r=0
while(!0){if(!(r<v)){s=!0
break}if(r>=8)return H.a(w,r)
if(t.bK(w[r])<0.0025){s=!1
break}++r}if(s){q=v+1
C.a.m(w,v,t)
v=q}}if(v<3){this.bR(1,1)
return}p=w[0].a[0]
for(o=0,u=1;u<v;++u){if(u>=8)return H.a(w,u)
z=w[u].a
n=z[0]
if(!(n>p))if(n===p){z=z[1]
if(o<0||o>=8)return H.a(w,o)
z=z<w[o].a[1]}else z=!1
else z=!0
if(z){p=n
o=u}}m=P.aB(8,0,!1,P.w)
for(l=this.r,z=l.a,t=this.x,x=t.a,k=o,j=0;!0;k=i){C.a.m(m,j,k)
for(i=0,r=1;r<v;++r){if(i===k){i=r
continue}if(i<0||i>=8)return H.a(w,i)
h=w[i].a
z[1]=h[1]
z[0]=h[0]
if(j>=m.length)return H.a(m,j)
l.n(C.a.i(w,m[j]))
if(r>=8)return H.a(w,r)
h=w[r].a
x[1]=h[1]
x[0]=h[0]
if(j>=m.length)return H.a(m,j)
t.n(C.a.i(w,m[j]))
g=l.w(t)
if(g<0)i=r
if(g===0&&t.gO()>l.gO())i=r}++j
if(i===o)break}this.f=j
for(x=this.d,u=0;u<this.f;++u){if(u>=8)return H.a(x,u)
if(x[u]==null)C.a.m(x,u,new E.b(new Float64Array(2)))
f=x[u]
if(u>=m.length)return H.a(m,u)
f.h(C.a.i(w,m[u]))}for(f=this.e,u=0;e=this.f,u<e;u=o){o=u+1
d=o<e?o:0
if(d>=8)return H.a(x,d)
h=H.e(x[d],"$isb").a
z[1]=h[1]
z[0]=h[0]
if(u>=8)return H.a(x,u)
l.n(x[u])
e=H.e(f[u],"$isb")
c=z[1]
b=z[0]
a=e.a
a[0]=c
a[1]=-1*b
e.W()}this.h0(x,e,this.c)},
bR:function(a,b){var z,y,x
this.f=4
z=this.d
y=-a
x=-b
z[0].F(y,x)
z[1].F(a,x)
z[2].F(a,b)
z[3].F(y,b)
y=this.e
y[0].F(0,-1)
y[1].F(1,0)
y[2].F(0,1)
y[3].F(-1,0)
this.c.K()},
cJ:function(a,b,c,d){var z,y,x,w,v,u
this.f=4
z=this.d
y=-a
x=-b
z[0].F(y,x)
z[1].F(a,x)
z[2].F(a,b)
z[3].F(y,b)
y=this.e
y[0].F(0,-1)
y[1].F(1,0)
y[2].F(0,1)
y[3].F(-1,0)
this.c.h(c)
w=this.Q
w.a.h(c)
x=w.b
x.J(d)
for(v=0;v<this.f;++v){if(v>=8)return H.a(z,v)
u=z[v]
G.z(w,u,u)
u=y[v]
G.am(x,u,u)}},
bw:function(a,b){var z,y
this.f=2
z=this.d
z[0].h(a)
z[1].h(b)
z=this.c
z.h(a)
z.q(0,b)
z.C(0,0.5)
z=this.e
y=z[0]
y.h(b)
y.n(a)
y=z[0]
y.P(-1,y)
z[0].W()
y=z[1]
y.h(z[0])
y.L()},
cf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
h0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o
H.j(a,"$isd",[E.b],"$asd")
c.F(0,0)
z=this.r
z.K()
y=this.x
x=this.y
for(w=y.a,v=x.a,u=z.a,t=0,s=0;s<b;){if(s>=8)return H.a(a,s)
r=a[s];++s
if(s<b){if(s>=8)return H.a(a,s)
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
y.q(0,r)
y.q(0,q)
y.C(0,o*0.3333333333333333)
c.q(0,y)}c.C(0,1/t)},
h2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.r
z.K()
y=this.x
y.K()
for(x=this.d,w=0;v=this.f,w<v;++w){if(w>=8)return H.a(x,w)
y.q(0,x[w])}y.C(0,1/v)
u=this.y
t=this.z
for(v=z.a,s=u.a,r=t.a,q=y.a,p=0,o=0,w=0;w<this.f;){if(w>=8)return H.a(x,w)
n=H.e(x[w],"$isb").a
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
z.C(0,1/p)
x=a.b
x.h(z)
x.q(0,y)
v=o*b
a.c=v
a.c=v+a.a*x.G(x)},
H:{
bD:function(){var z,y,x,w,v,u,t
z=new Float64Array(2)
y=new Array(8)
y.fixed$length=Array
x=[E.b]
y=H.h(y,x)
w=new Array(8)
w.fixed$length=Array
x=H.h(w,x)
w=new Float64Array(2)
v=new Float64Array(2)
u=new Float64Array(2)
t=new Float64Array(2)
z=new V.i_(new E.b(z),y,x,0,new E.b(w),new E.b(v),new E.b(u),new E.b(t),new G.G(new E.b(new Float64Array(2)),new G.A(0,1)),C.l,0)
z.eR()
return z}}},
e0:{"^":"c;"},
c2:{"^":"c;a,b",
u:function(a){return this.b}},
is:{"^":"c;a,b,c,d,e"},
bG:{"^":"c;a,b",
u:function(a){return this.b}},
it:{"^":"c;a,b"},
iy:{"^":"c;a,b,c,d,e,f,r,x,y,z",
hZ:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
$.e8=$.e8+1
a4.a=C.W
a4.b=a5.e
z=a5.a
y=a5.b
x=this.x
x.N(a5.c)
w=this.y
w.N(a5.d)
x.W()
w.W()
v=a5.e
u=Math.max(0.005,z.c+y.c-0.015)
t=this.a
t.b=0
s=this.b
s.a=z
s.b=y
s.e=!1
for(r=this.f,q=this.r,p=q.length,o=u+0.00125,n=u-0.00125,m=this.e,l=this.c,k=this.d,j=this.z.fy,i=0,h=0;!0;){x.aF(l,i)
w.aF(k,i)
s.c=l
s.d=k
j.dB(m,t,s)
g=m.c
if(g<=0){a4.a=C.ak
a4.b=0
break}if(g<o){a4.a=C.I
a4.b=i
break}r.ht(0,t,z,x,y,w,i)
e=v
d=0
while(!0){if(!!0){f=!1
break}c=r.ho(q,e)
if(c>o){a4.a=C.al
a4.b=v
f=!0
break}if(c>n){i=e
f=!1
break}if(0>=p)return H.a(q,0)
g=q[0]
if(1>=p)return H.a(q,1)
b=r.aq(g,q[1],i)
if(b<n){a4.a=C.X
a4.b=i
f=!0
break}if(b<=o){a4.a=C.I
a4.b=i
f=!0
break}for(a=e,a0=i,a1=0;!0;){a2=(a1&1)===1?a0+(u-b)*(a-a0)/(c-b):0.5*(a0+a);++a1
$.ec=$.ec+1
a3=r.aq(q[0],q[1],a2)
if(Math.abs(a3-u)<0.00125){e=a2
break}if(a3>u){a0=a2
b=a3}else{a=a2
c=a3}if(a1===50)break}$.eb=Math.max($.eb,a1);++d
if(d===8||a1===50){f=!1
break}}++h
$.e9=$.e9+1
if(f)break
if(h===20){a4.a=C.X
a4.b=i
break}}$.ea=Math.max($.ea,h)}},
cG:{"^":"c;a,b",
u:function(a){return this.b}},
id:{"^":"c;0a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go",
ht:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
this.a=c
this.b=e
z=b.b
this.f=d
this.r=f
y=this.fr
d.aF(y,g)
x=this.fx
this.r.aF(x,g)
if(z===1){this.c=C.F
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
G.r(y,g,u)
g=this.Q
G.r(x,v,g)
v=this.e
v.h(g)
v.n(u)
return v.W()}else{g=b.c
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
if(J.ag(v,g[1])){this.c=C.H
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
p.P(-1,r)
r.W()
G.l(x.b,r,s)
t.h(v)
t.q(0,m)
t.C(0,0.5)
G.r(x,t,q)
t=this.x
x=this.a
g=g[0]
x.toString
H.k(g)
t.h(C.a.i(x.a,g))
G.r(y,t,u)
p.h(u)
p.n(q)
l=p.G(s)
if(l<0){r.L()
l=-l}return l}else{this.c=C.G
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
p.P(-1,r)
r.W()
G.l(y.b,r,s)
t.h(v)
t.q(0,m)
t.C(0,0.5)
G.r(y,t,u)
t=this.y
y=this.b
if(0>=o)return H.a(w,0)
w=w[0]
y.toString
H.k(w)
t.h(C.a.i(y.a,w))
G.r(x,t,q)
p.h(q)
p.n(u)
l=p.G(s)
if(l<0){r.L()
l=-l}return l}}},
ho:function(a,b){var z,y,x,w,v,u,t
H.j(a,"$isd",[P.w],"$asd")
z=this.fr
this.f.aF(z,b)
y=this.fx
this.r.aF(y,b)
switch(this.c){case C.F:x=this.e
w=this.fy
G.aa(z.b,x,w)
x.L()
v=this.go
G.aa(y.b,x,v)
x.L()
C.a.m(a,0,this.a.b_(w))
C.a.m(a,1,this.b.b_(v))
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
G.r(z,v,u)
v=this.Q
G.r(y,t,v)
v.n(u)
return v.G(x)
case C.G:x=this.cy
G.l(z.b,this.e,x)
w=this.z
G.r(z,this.d,w)
x.L()
z=this.go
G.aa(y.b,x,z)
x.L()
C.a.m(a,0,-1)
C.a.m(a,1,this.b.b_(z))
z=this.y
v=this.b
if(1>=a.length)return H.a(a,1)
u=a[1]
v.toString
H.k(u)
z.h(C.a.i(v.a,u))
u=this.Q
G.r(y,z,u)
u.n(w)
return u.G(x)
case C.H:x=this.cy
G.l(y.b,this.e,x)
w=this.Q
G.r(y,this.d,w)
x.L()
y=this.fy
G.aa(z.b,x,y)
x.L()
C.a.m(a,1,-1)
C.a.m(a,0,this.a.b_(y))
y=this.x
v=this.a
if(0>=a.length)return H.a(a,0)
u=a[0]
v.toString
H.k(u)
y.h(C.a.i(v.a,u))
u=this.z
G.r(z,y,u)
u.n(w)
return u.G(x)
default:C.a.m(a,0,-1)
C.a.m(a,1,-1)
return 0}},
aq:function(a,b,c){var z,y,x,w,v
H.k(a)
H.k(b)
z=this.fr
this.f.aF(z,c)
y=this.fx
this.r.aF(y,c)
switch(this.c){case C.F:x=this.x
x.h(C.a.i(this.a.a,a))
w=this.y
w.h(C.a.i(this.b.a,b))
v=this.z
G.r(z,x,v)
x=this.Q
G.r(y,w,x)
x.n(v)
return x.G(this.e)
case C.G:x=this.cy
G.l(z.b,this.e,x)
w=this.z
G.r(z,this.d,w)
z=this.y
z.h(C.a.i(this.b.a,b))
v=this.Q
G.r(y,z,v)
v.n(w)
return v.G(x)
case C.H:x=this.cy
G.l(y.b,this.e,x)
w=this.Q
G.r(y,this.d,w)
y=this.x
y.h(C.a.i(this.a.a,a))
v=this.z
G.r(z,y,v)
v.n(w)
return v.G(x)
default:return 0}}},
iP:{"^":"c;a,b,c,d,e",
eT:function(){var z,y
for(z=this.b,y=0;y<2;++y)C.a.m(z,y,new E.b(new Float64Array(2)))},
hs:function(a,b,c,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b.e===0)return
switch(b.d){case C.p:z=this.d
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
if(z.bK(y)>14210854715202004e-30){w=y.a
v=z.a
x.sj(0,w[0]-v[0])
x.sk(0,w[1]-v[1])
x.W()}x=x.a
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
case C.j:p=this.d
x=this.a
G.l(c.b,b.b,x)
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
case C.z:p=this.d
x=this.a
G.l(a1.b,b.b,x)
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
H:{
iQ:function(){var z,y,x,w
z=new Float64Array(2)
y=new Array(2)
y.fixed$length=Array
y=H.h(y,[E.b])
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.iP(new E.b(z),y,x,new E.b(w),new E.b(new Float64Array(2)))
z.eT()
return z}}},
b0:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,0cx,0cy,db,0dx,0dy,fr,fx,fy,go,id,k1,k2,k3,0aD:k4<,r1,r2,rx",
aV:function(a){var z,y,x,w,v,u
z=this.Q
if((z.a&2)===2)return
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
v=new Float64Array(2)
u=new V.dA(0,0,0,0,new V.bY(1,65535,0),!1,new V.S(new E.b(y),new E.b(x)),new V.S(new E.b(w),new E.b(v)),new E.b(new Float64Array(2)))
u.h4(this,a)
if((this.b&32)===32)u.h8(z.b.a,this.d)
u.b=this.cy
this.cy=u;++this.db
u.c=this
if(u.a>0)this.hR()
z.a|=1
return u},
dv:function(a,b){var z=this.r1
z.a=a
z.e=b
return this.aV(z)},
dl:function(a,b){var z,y,x
if(this.a!==C.f)return
if((this.b&2)!==2)this.a3(!0)
z=this.y
y=z.a
x=a.a
z.sj(0,y[0]+x[0])
z.sk(0,y[1]+x[1])
y=b.a
z=this.f.c.a
this.z=this.z+((y[0]-z[0])*x[1]-(y[1]-z[1])*x[0])},
bl:function(a,b,c){var z,y,x
if(this.a!==C.f)return
if((this.b&2)!==2)this.a3(!0)
z=this.r
y=z.a
x=a.a
z.sj(0,y[0]+x[0]*this.fx)
z.sk(0,y[1]+x[1]*this.fx)
y=b.a
z=this.f.c.a
this.x=this.x+this.go*((y[0]-z[0])*x[1]-(y[1]-z[1])*x[0])},
fQ:function(a){if(this.a!==C.f)return
if((this.b&2)!==2)this.a3(!0)
this.x=this.x+this.go*a},
hR:function(){var z,y,x,w,v,u,t,s,r,q
this.fr=0
this.fx=0
this.fy=0
this.go=0
z=this.f
y=z.a
y.K()
x=this.a
if(x===C.e||x===C.K){y=this.d.a
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
t.d.h2(u,r)
r=this.fr
q=u.a
this.fr=r+q
r=v.a
r[1]=s[1]
r[0]=s[0]
v.C(0,q)
w.q(0,v)
this.fy=this.fy+u.c}r=this.fr
if(r>0){r=1/r
this.fx=r
w.C(0,r)}else{this.fr=1
this.fx=1}r=this.fy
if(r>0&&(this.b&16)===0){r-=this.fr*w.G(w)
this.fy=r
this.go=1/r}else{this.fy=0
this.go=0}r=x.l()
q=z.c
r.h(q)
y.h(w)
z=z.b
G.r(this.d,y,z)
q.h(z)
v.h(q)
v.n(r)
v.P(this.x,r)
this.r.q(0,r)
x.b-=3},
a3:function(a){var z
if(a){z=this.b
if((z&2)===0){this.b=z|2
this.k3=0}}else{this.b&=4294967293
this.k3=0
this.r.K()
this.x=0
this.y.K()
this.z=0}},
cR:function(){var z,y,x,w,v,u,t
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
for(t=this.cy,y=this.Q,x=this.d;t!=null;t=t.b)t.eH(y.b.a,z,x)},
b3:function(){var z,y,x,w,v
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
cL:function(a){var z,y
if(this.a!==C.f&&a.a!==C.f)return!1
for(z=this.dx;z!=null;z=z.d){y=z.a
if(y==null?a==null:y===a){z.b.y
return!1}}return!0},
aT:function(a){var z,y,x,w,v
z=this.f
z.aT(a)
y=z.c
y.h(z.b)
x=z.d
z.e=x
w=this.d
v=w.b
v.J(x)
w=w.a
G.l(v,z.a,w)
w.C(0,-1)
w.q(0,y)},
u:function(a){return"Body[pos: "+this.d.a.u(0)+" linVel: "+this.r.u(0)+" angVel: "+H.f(this.x)+"]"}},
bN:{"^":"c;a,0aD:b<,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},
cn:{"^":"c;a,b",
u:function(a){return this.b}},
fG:{"^":"c;0a,0b,c,0d,0e,f",
fN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.e(a,"$isaz")
H.e(b,"$isaz")
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
if((r==null?y==null:r===y)&&p===w&&(q==null?z==null:q===z)&&o===x)return}t=t.d}if(!u.cL(v))return
s=this.d.cM(z,y)
if(!s)return
n=this.f.hH(z,x,y,w)
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
if(!z.z&&!y.z){v.a3(!0)
u.a3(!0)}++this.c},
ci:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.f
y=a.r
x=z.c
w=y.c
v=this.e
if(v!=null&&(a.a&2)===2)v.c3(a,!1)
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
if(a.z.e>0&&!z.z&&!y.z){z.c.a3(!0)
y.c.a3(!0)}s=z.d.a
r=y.d.a
v=this.f.fy
u=s.a
if(u>=v.length)return H.a(v,u)
u=v[u]
v=r.a
if(v>=u.length)return H.a(u,v)
q=u[v].a
q.toString
H.p(a,H.aq(q,"a9",0))
v=q.a;(v&&C.a).m(v,--q.b,a);--this.c},
fW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.b
for(;z!=null;){y=z.f
x=z.r
w=z.x
v=z.y
u=y.c
t=x.c
if((z.a&8)===8){if(!t.cL(u)){s=z.c
this.ci(z)
z=s
continue}r=this.d.cM(y,x)
if(!r){s=z.c
this.ci(z)
z=s
continue}z.a&=4294967287}q=(u.b&2)===2&&u.a!==C.e
p=(t.b&2)===2&&t.a!==C.e
if(!q&&!p){z=z.c
continue}r=y.r
if(w>=r.length)return H.a(r,w)
o=r[w].gbq()
r=x.r
if(v>=r.length)return H.a(r,v)
n=r[v].gbq()
if(!this.a.hX(o,n)){s=z.c
this.ci(z)
z=s
continue}z.cv(this.e)
z=z.c}},
$isle:1},
b2:{"^":"U;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aB:function(a,b,c,d){this.by(a,b,c,d)},
aq:function(a,b,c){var z=this.fr
H.u(this.f.d,"$iscq").e0(z,this.x)
this.dx.fr.dt(a,z,b,H.u(this.r.d,"$isb5"),c)}},
b3:{"^":"U;fr,a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aB:function(a,b,c,d){this.by(a,b,c,d)},
aq:function(a,b,c){var z,y,x
z=this.fr
H.u(this.f.d,"$iscq").e0(z,this.x)
y=this.dx.fr
x=this.r.d
y.k3.ds(a,z,b,x,c)}},
b4:{"^":"U;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aq:function(a,b,c){this.dx.fr.fX(a,H.u(this.f.d,"$isb5"),b,H.u(this.r.d,"$isb5"),c)}},
U:{"^":"c;",
aB:["by",function(a,b,c,d){var z,y
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
cv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.dy
y=this.z
z.N(y)
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
l.a.bv(n,x)
l.b.bv(m,u)
l.c.N(p)
l.d.N(o)
l.e=!0
u=z.c
u.b=0
x=z.a
z=z.d
x.fy.dB(z,u,l)
k=z.c<0.0000011920928955078125
y.e=0}else{this.aq(y,p,o)
k=y.e>0
for(x=z.a,u=y.a,j=0;j<y.e;++j){if(j>=2)return H.a(u,j)
i=u[j]
i.b=0
i.c=0
h=i.d
for(g=0;g<z.e;++g){if(g>=2)return H.a(x,g)
f=x[g]
if(f.d.bt()===h.bt()){i.b=f.b
i.c=f.c
break}}}if(k!==w){r.a3(!0)
q.a3(!0)}}z=this.a
if(k)this.a=z|2
else this.a=z&4294967293
if(a==null)return
if(!w&&k)a.c3(this,!0)
if(w&&!k)a.c3(this,!1)}},
O:{"^":"c;0a,0b,0c,0d"},
bS:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,0ch,cx,cy,db",
eJ:function(){var z,y
for(z=this.a,y=0;y<2;++y)C.a.m(z,y,new E.b(new Float64Array(2)))},
H:{
dl:function(){var z,y,x,w
z=new Array(2)
z.fixed$length=Array
z=H.h(z,[E.b])
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.bS(z,new E.b(y),new E.b(x),0,0,0,0,new E.b(w),new E.b(new Float64Array(2)),0,0,0,0,0)
z.eJ()
return z}}},
bT:{"^":"c;0a,b",
sdw:function(a){this.a=H.j(a,"$isa8",[V.U],"$asa8")}},
bV:{"^":"c;0a,0b,c,0d,0e",
sdu:function(a){this.b=H.j(a,"$isd",[V.U],"$asd")},
sbM:function(a){this.d=H.j(a,"$isd",[V.av],"$asd")},
sbP:function(a){this.e=H.j(a,"$isd",[V.aQ],"$asd")}},
fH:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q",
sc7:function(a){this.b=H.j(a,"$isd",[V.av],"$asd")},
scd:function(a){this.c=H.j(a,"$isd",[V.aQ],"$asd")},
sda:function(a){this.d=H.j(a,"$isd",[V.bS],"$asd")},
sdj:function(a){this.e=H.j(a,"$isd",[V.bv],"$asd")},
sc_:function(a){this.f=H.j(a,"$isd",[V.U],"$asd")},
eK:function(){var z,y
z=new Array(256)
z.fixed$length=Array
this.sda(H.h(z,[V.bS]))
z=new Array(256)
z.fixed$length=Array
this.sdj(H.h(z,[V.bv]))
for(y=0;y<256;++y){z=this.d;(z&&C.a).m(z,y,V.dl())
z=this.e;(z&&C.a).m(z,y,V.dm())}},
dG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
this.a=a.a
z=a.c
this.r=z
y=this.d
x=y.length
if(x<z){z=new Array(Math.max(x*2,z))
z.fixed$length=Array
this.sda(H.h(z,[V.bS]))
z=this.d;(z&&C.a).al(z,0,x,y,0)
for(;z=this.d,x<z.length;++x)(z&&C.a).m(z,x,V.dl())}z=this.e
x=z.length
y=this.r
if(x<y){y=new Array(Math.max(x*2,y))
y.fixed$length=Array
this.sdj(H.h(y,[V.bv]))
y=this.e;(y&&C.a).al(y,0,x,z,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).m(z,x,V.dm())}this.sc7(a.d)
this.scd(a.e)
this.sc_(a.b)
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
i4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
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
p=y[w].gE()
y=this.c
if(w>=y.length)return H.a(y,w)
o=y[w].gp()
y=this.c
if(v>=y.length)return H.a(y,v)
n=y[v].gE()
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
dI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
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
a=k[i].gA()
k=this.b
if(i>=k.length)return H.a(k,i)
a0=k[i].gt()
k=this.c
if(i>=k.length)return H.a(k,i)
a1=k[i].gE()
k=this.c
if(i>=k.length)return H.a(k,i)
a2=k[i].gp()
k=this.b
if(h>=k.length)return H.a(k,h)
a3=k[h].gA()
k=this.b
if(h>=k.length)return H.a(k,h)
a4=k[h].gt()
k=this.c
if(h>=k.length)return H.a(k,h)
a5=k[h].gE()
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
z.hs(0,j,x,m,v,l)
b1=o.b.a
b1[0]=r[0]
b1[1]=r[1]
b2=o.cy
for(k=-$.km,a7=a5.a,a8=-a6,b0=a1.a,b3=-a2,b4=g+f,b5=0;b5<b2;++b5){b6=o.a
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
k.bL()}else o.cy=1}}},
cO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
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
p=y[w].gE()
y=this.c
if(w>=y.length)return H.a(y,w)
o=y[w].gp()
y=this.c
if(v>=y.length)return H.a(y,v)
n=y[v].gE()
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
ey:function(){var z,y,x,w,v,u
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
eg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
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
b=o[m].gA()
o=this.b
if(m>=o.length)return H.a(o,m)
a=o[m].gt()
o=this.b
if(l>=o.length)return H.a(o,l)
a0=o[l].gA()
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
t.dH(0,n,z,x,a4)
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
eo:function(c3,c4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
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
a0=o[m].gA()
o=this.b
if(m>=o.length)return H.a(o,m)
a1=o[m].gt()
o=this.b
if(l>=o.length)return H.a(o,l)
a2=o[l].gA()
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
t.dH(0,n,z,x,a6)
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
H:{
bU:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=V.iQ()
w=new Float64Array(2)
z=new V.fH(0,new G.G(new E.b(z),new G.A(0,1)),new G.G(new E.b(y),new G.A(0,1)),x,new V.i0(new E.b(w),new E.b(new Float64Array(2)),0))
z.eK()
return z}}},
i0:{"^":"c;a,b,c",
dH:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c.b
y=d.b
x=b.a
if(a0>=2)return H.a(x,a0)
w=x[a0]
switch(b.ch){case C.p:v=x[0]
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
s.W()
x=this.b
x.sj(0,(q+o)*0.5)
x.sk(0,(p+n)*0.5)
s=s.a
this.c=u*s[0]+r*s[1]-b.cx-b.cy
break
case C.j:x=this.a
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
case C.z:x=this.a
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
ev:{"^":"c;a,b,c,d,e,f,r"},
bv:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db",
eL:function(){var z,y,x
for(z=this.a,y=0;y<2;++y){x=new Float64Array(2)
C.a.m(z,y,new V.ev(new E.b(x),new E.b(new Float64Array(2)),0,0,0,0,0))}},
H:{
dm:function(){var z,y,x
z=new Array(2)
z.fixed$length=Array
z=H.h(z,[V.ev])
y=new Float64Array(2)
x=new Float64Array(4)
z=new V.bv(z,new E.b(y),new E.a0(x),new E.a0(new Float64Array(4)),0,0,0,0,0,0,0,0,0,0,0)
z.eL()
return z}}},
b7:{"^":"U;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aB:function(a,b,c,d){this.by(a,b,c,d)},
aq:function(a,b,c){this.dx.fr.dt(a,H.u(this.f.d,"$isb9"),b,H.u(this.r.d,"$isb5"),c)}},
b8:{"^":"U;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aB:function(a,b,c,d){this.by(a,b,c,d)},
aq:function(a,b,c){var z,y,x
z=this.dx.fr
y=H.u(this.f.d,"$isb9")
x=this.r.d
z.k3.ds(a,y,b,x,c)}},
bi:{"^":"U;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aq:function(a,b,c){this.dx.fr.fY(a,this.f.d,b,H.u(this.r.d,"$isb5"),c)}},
bj:{"^":"U;a,0b,0c,d,e,0f,0r,x,y,z,Q,ch,cx,cy,db,dx,dy",
aq:function(a,b,c){this.dx.fr.fZ(a,this.f.d,b,this.r.d,c)}},
av:{"^":"c;A:a<,t:b<",
st:function(a){this.b=H.br(a)}},
aQ:{"^":"c;E:a<,p:b<",
sp:function(a){this.b=H.br(a)}},
bY:{"^":"c;a,b,c"},
dA:{"^":"c;a,0b,0c,0d,e,f,0r,x,y,z,0aD:Q<,ch,cx,cy",
sdd:function(a){this.r=H.j(a,"$isd",[V.az],"$asd")},
h4:function(a,b){var z,y,x,w,v
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
this.d=b.a.fV(0)
if(this.r==null){z=new Array(1)
z.fixed$length=Array
this.sdd(H.h(z,[V.az]))
for(x=0;x<1;++x){z=this.r
y=new Float64Array(2);(z&&C.a).m(z,x,new V.az(new V.S(new E.b(y),new E.b(new Float64Array(2))),0,0))
z=this.r
if(x>=z.length)return H.a(z,x)
z[x].sdE(null)
z=this.r
if(x>=z.length)return H.a(z,x)
z[x].sbq(-1)}}z=this.r
y=z.length
if(y<1){w=Math.max(y*2,1)
v=new Array(w)
v.fixed$length=Array
this.sdd(H.h(v,[V.az]))
v=this.r;(v&&C.a).al(v,0,y,z,0)
for(x=0;x<w;++x){z=this.r
y=new Float64Array(2);(z&&C.a).m(z,x,new V.az(new V.S(new E.b(y),new E.b(new Float64Array(2))),0,0))
z=this.r
if(x>=z.length)return H.a(z,x)
z[x].sdE(null)
z=this.r
if(x>=z.length)return H.a(z,x)
z[x].sbq(-1)}}this.x=0
this.a=b.e},
h8:function(a,b){var z,y,x,w,v,u,t,s,r
this.d.toString
this.x=1
for(z=a.a,y=0;y<this.x;++y){x=this.r
if(y>=x.length)return H.a(x,y)
w=x[y]
x=this.d
v=w.a
x.cf(v,b,y)
u=z.cX()
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
z.d6(t);++a.b
a.dr(t)
w.d=t
w.b=this
w.c=y}},
eH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.x===0)return
for(z=this.cy,y=c.a.a,x=b.a.a,w=z.a,v=a.a,u=this.ch,t=this.cx,s=u.a.a,r=u.b.a,q=0;q<this.x;++q){p=this.r
if(q>=p.length)return H.a(p,q)
o=p[q]
this.d.cf(u,b,o.c)
this.d.cf(t,c,o.c)
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
if(v.hF(n,p,z))a.dr(n)}}},
cu:{"^":"c;0a,0aD:b<,c,d,e,f,r"},
az:{"^":"c;aS:a<,0b,c,bq:d<",
sdE:function(a){this.b=H.e(a,"$isdA")},
sbq:function(a){this.d=H.k(a)}},
dE:{"^":"c;0a,0b,0c,0d,0e,0f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
sf1:function(a){this.b=H.j(a,"$isd",[V.b0],"$asd")},
sc_:function(a){this.c=H.j(a,"$isd",[V.U],"$asd")},
sfn:function(a){this.d=H.j(a,"$isd",[V.P],"$asd")},
sc7:function(a){this.e=H.j(a,"$isd",[V.av],"$asd")},
scd:function(a){this.f=H.j(a,"$isd",[V.aQ],"$asd")},
aB:function(a,b,c,d){var z,y,x
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
this.sf1(H.h(z,[V.b0]))}z=this.d
if(z==null||this.ch>z.length){z=new Array(this.ch)
z.fixed$length=Array
this.sfn(H.h(z,[V.P]))}z=this.c
if(z==null||this.Q>z.length){z=new Array(this.Q)
z.fixed$length=Array
this.sc_(H.h(z,[V.U]))}y=this.f
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.h(z,[V.aQ])}z=new Array(this.z)
z.fixed$length=Array
this.scd(H.h(z,[V.aQ]))
z=this.f
x=y.length;(z&&C.a).al(z,0,x,y,0)
for(;z=this.f,x<z.length;++x)(z&&C.a).m(z,x,new V.aQ(new E.b(new Float64Array(2)),0))}y=this.e
z=y==null
if(z||this.z>y.length){if(z){z=new Array(0)
z.fixed$length=Array
y=H.h(z,[V.av])}z=new Array(this.z)
z.fixed$length=Array
this.sc7(H.h(z,[V.av]))
z=this.e
x=y.length;(z&&C.a).al(z,0,x,y,0)
for(;z=this.e,x<z.length;++x)(z&&C.a).m(z,x,new V.av(new E.b(new Float64Array(2)),0))}},
e9:function(a1,a2,a3,a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
J.cl(w[x].gA(),q[0])
w=this.e
if(x>=w.length)return H.a(w,x)
J.cm(w[x].gA(),q[1])
w=this.e
if(x>=w.length)return H.a(w,x)
w[x].st(t)
w=this.f
if(x>=w.length)return H.a(w,x)
p=s.a
w[x].gE().a[0]=p[0]
w=this.f
if(x>=w.length)return H.a(w,x)
w[x].gE().a[1]=p[1]
p=this.f
if(x>=p.length)return H.a(p,x)
p[x].sp(r)}y=this.cy
y.a=a2
y.sbM(this.e)
y.sbP(this.f)
w=this.db
w.a=a2
w.sdu(this.c)
w.c=this.y
w.sbM(this.e)
w.sbP(this.f)
p=this.cx
p.dG(w)
p.dI()
if(a2.f)p.i4()
for(x=0;x<this.x;++x){w=this.d
if(x>=w.length)return H.a(w,x)
w[x].ak(y)}for(x=0;x<a2.d;++x){for(k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.a(w,k)
w[k].ai(y)}p.cO()}p.ey()
for(x=0;x<this.r;++x){w=this.e
if(x>=w.length)return H.a(w,x)
j=w[x].gA()
w=this.e
if(x>=w.length)return H.a(w,x)
t=w[x].gt()
w=this.f
if(x>=w.length)return H.a(w,x)
s=w[x].gE()
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
break}d=p.eg()
for(c=!0,k=0;k<this.x;++k){w=this.d
if(k>=w.length)return H.a(w,k)
b=w[k].ah(y)
c=c&&b}if(d&&c){e=!0
break}++x}for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
a=y[x]
y=a.f
w=this.e
if(x>=w.length)return H.a(w,x)
o=y.c.a
o[0]=J.Y(w[x].gA())
w=this.e
if(x>=w.length)return H.a(w,x)
o[1]=J.Z(w[x].gA())
w=this.e
if(x>=w.length)return H.a(w,x)
y.e=w[x].gt()
w=a.r
y=this.f
if(x>=y.length)return H.a(y,x)
w=w.a
w[0]=y[x].gE().a[0]
y=this.f
if(x>=y.length)return H.a(y,x)
w[1]=y[x].gE().a[1]
y=this.f
if(x>=y.length)return H.a(y,x)
a.x=H.br(y[x].gp())
a.b3()}this.dQ(p.e)
if(a4){for(a0=17976931348623157e292,x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
v=y[x]
if(v.a===C.e)continue
if((v.b&4)!==0){y=v.x
if(!(y*y>0.0012184696791468343)){y=v.r
y=y.G(y)>0.0001}else y=!0}else y=!0
if(y){v.k3=0
a0=0}else{y=v.k3+=z
a0=Math.min(a0,y)}}if(a0>=0.5&&e)for(x=0;x<this.r;++x){y=this.b
if(x>=y.length)return H.a(y,x)
y[x].a3(!1)}}},
en:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
y=y[z].gA()
x=this.b
if(z>=x.length)return H.a(x,z)
J.cl(y,x[z].f.c.a[0])
x=this.e
if(z>=x.length)return H.a(x,z)
x=x[z].gA()
y=this.b
if(z>=y.length)return H.a(y,z)
J.cm(x,y[z].f.c.a[1])
y=this.e
if(z>=y.length)return H.a(y,z)
y=y[z]
x=this.b
if(z>=x.length)return H.a(x,z)
y.st(x[z].f.e)
x=this.f
if(z>=x.length)return H.a(x,z)
x=x[z].gE()
y=this.b
if(z>=y.length)return H.a(y,z)
x.a[0]=y[z].r.a[0]
y=this.f
if(z>=y.length)return H.a(y,z)
y=y[z].gE()
x=this.b
if(z>=x.length)return H.a(x,z)
y.a[1]=x[z].r.a[1]
y=this.f
if(z>=y.length)return H.a(y,z)
y[z].sp(x[z].x)}y=this.dy
y.sdu(this.c)
y.c=this.y
y.a=a
y.sbM(this.e)
y.sbP(this.f)
x=this.dx
x.dG(y)
for(z=0;z<a.e;++z)if(x.eo(b,c))break
y=this.b
if(b>=y.length)return H.a(y,b)
y=y[b].f
w=this.e
if(b>=w.length)return H.a(w,b)
y.b.sj(0,J.Y(w[b].gA()))
w=this.b
if(b>=w.length)return H.a(w,b)
w=w[b].f
y=this.e
if(b>=y.length)return H.a(y,b)
w.b.sk(0,J.Z(y[b].gA()))
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
w.b.h(y[c].gA())
y=this.b
if(c>=y.length)return H.a(y,c)
y=y[c].f
w=this.e
if(c>=w.length)return H.a(w,c)
y.d=w[c].gt()
x.dI()
for(z=0;z<a.d;++z)x.cO()
v=a.a
for(z=0;z<this.r;++z){y=this.e
if(z>=y.length)return H.a(y,z)
u=y[z].gA()
y=this.e
if(z>=y.length)return H.a(y,z)
t=y[z].gt()
y=this.f
if(z>=y.length)return H.a(y,z)
s=y[z].gE()
y=this.f
if(z>=y.length)return H.a(y,z)
r=y[z].gp()
y=s.a
q=y[0]*v
p=y[1]*v
w=q*q+p*p
if(w>4)s.C(0,2/Math.sqrt(w))
o=v*r
if(o*o>2.4674011002723395)r*=1.5707963267948966/Math.abs(o)
w=u.a
w[0]=w[0]+y[0]*v
w[1]=w[1]+y[1]*v
t+=v*r
n=this.e
if(z>=n.length)return H.a(n,z)
J.cl(n[z].gA(),w[0])
n=this.e
if(z>=n.length)return H.a(n,z)
J.cm(n[z].gA(),w[1])
n=this.e
if(z>=n.length)return H.a(n,z)
n[z].st(t)
n=this.f
if(z>=n.length)return H.a(n,z)
n[z].gE().a[0]=y[0]
n=this.f
if(z>=n.length)return H.a(n,z)
n[z].gE().a[1]=y[1]
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
m.b3()}this.dQ(x.e)},
dQ:function(a){var z,y,x,w,v,u,t,s,r
H.j(a,"$isd",[V.bv],"$asd")
if(this.a==null)return
for(z=this.fr,y=z.a,x=z.b,w=0;w<this.y;++w){v=this.c
if(w>=v.length)return H.a(v,w)
v[w]
if(w>=a.length)return H.a(a,w)
u=a[w]
v=u.cy
z.c=v
for(t=u.a,s=0;s<v;++s){if(s>=2)return H.a(t,s)
r=t[s]
y[s]=r.c
x[s]=r.d}this.a.toString}}},
fD:{"^":"P;ch,0cx,cy,0db,dx,0dy,0fr,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
eI:function(a,b){var z,y,x,w,v
this.dy=a
z=b.gdq()
if(z.gD(z).i9(0,2))throw H.i("You cannot create a constant volume joint with less than three _bodies.")
z=this.ch
y=z.gD(z)
this.cx=new Float64Array(y)
for(x=0;y=this.cx.length,x<y;++x){w=x===y-1?0:x+1
y=z.i(0,x).gbr().I(0,z.i(0,w).gbr())
v=y.gD(y)
y=this.cx;(y&&C.k).m(y,x,v)}this.cy=this.dZ()
b.ghw()
z=b.ghw()
z.gD(z)
z=b.gdq()
z.gD(z)
throw H.i("Incorrect joint definition.  Joints have to correspond to the _bodies")},
dZ:function(){var z,y,x,w,v,u,t
for(z=this.ch,y=0,x=0;C.c.M(x,z.gD(z));x=w){z.gD(z).I(0,1)
w=x+1
v=z.i(0,x).gbr()
v=v.gj(v)
u=z.i(0,w).gbr()
u=v.v(0,u.gk(u))
v=z.i(0,w).gbr()
v=v.gj(v)
t=z.i(0,x).gbr()
y=C.b.B(y,u.I(0,v.v(0,t.gk(t))))}return y*0.5},
e4:function(a){var z,y,x,w,v
H.j(a,"$isd",[V.av],"$asd")
for(z=this.ch,y=a&&C.a,x=0,w=0;C.c.M(w,z.gD(z));w=v){z.gD(z).I(0,1)
v=w+1
x+=J.Y(y.i(a,z.i(0,w).gZ()).gA())*J.Z(C.a.i(a,z.i(0,v).gZ()).gA())-J.Y(C.a.i(a,z.i(0,v).gZ()).gA())*J.Z(C.a.i(a,z.i(0,w).gZ()).gA())}return x*0.5},
f8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
H.j(a,"$isd",[V.av],"$asd")
for(z=this.ch,y=a&&C.a,x=0,w=0;C.c.M(w,z.gD(z));w=v){z.gD(z).I(0,1)
v=w+1
u=J.Y(y.i(a,z.i(0,v).gZ()).gA())-J.Y(C.a.i(a,z.i(0,w).gZ()).gA())
t=J.Z(C.a.i(a,z.i(0,v).gZ()).gA())-J.Z(C.a.i(a,z.i(0,w).gZ()).gA())
s=Math.sqrt(u*u+t*t)
if(s<11920928955078125e-23)s=1
r=this.db
if(w>=r.length)return H.a(r,w)
r[w].a[0]=t/s
r[w].a[1]=-u/s
x+=s}r=this.Q.a.l()
q=0.5*(this.cy-this.e4(a))/x
for(p=!0,w=0;C.c.M(w,z.gD(z));w=v){z.gD(z).I(0,1)
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
j=r.gO()
if(j>0.04000000000000001)r.C(0,0.2/Math.sqrt(j))
if(j>0.000025)p=!1
o=y.i(a,z.i(0,v).gZ()).gA()
o.a[0]=o.gcc()[0]+k[0]
o=C.a.i(a,z.i(0,v).gZ()).gA()
o.a[1]=o.gcc()[1]+k[1]}--this.Q.a.b
return p},
ak:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.b
x=this.ch
w=this.Q.cG(x.gD(x))
for(v=J.X(w),u=y&&C.a,t=0;C.c.M(t,x.gD(x));t=r){s=t===0?x.gD(x).I(0,1):t-1
x.gD(x).I(0,1)
r=t+1
v.i(w,t).h(u.i(y,x.i(0,r).gZ()).gA())
v.i(w,t).n(C.a.i(y,x.i(0,s).gZ()).gA())}u=a.a
if(u.f){this.dx=this.dx*u.c
for(u=z&&C.a,t=0;C.c.M(t,x.gD(x));++t){q=u.i(z,x.i(0,t).gZ()).gE().a
q[0]=C.b.B(q[0],x.i(0,t).gbi().v(0,J.Z(v.i(w,t))).v(0,0.5).v(0,this.dx))
q=C.a.i(z,x.i(0,t).gZ()).gE().a
q[1]=C.b.B(q[1],x.i(0,t).gbi().v(0,J.d7(J.Y(v.i(w,t)))).v(0,0.5).v(0,this.dx))}}else this.dx=0},
ah:function(a){return this.f8(a.b)},
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=a.c
y=a.b
x=this.ch
w=this.Q.cG(x.gD(x))
for(v=J.X(w),u=y&&C.a,t=z&&C.a,s=0,r=0,q=0;C.c.M(q,x.gD(x));q=o){p=q===0?x.gD(x).I(0,1):q-1
x.gD(x).I(0,1)
o=q+1
v.i(w,q).h(u.i(y,x.i(0,o).gZ()).gA())
v.i(w,q).n(C.a.i(y,x.i(0,p).gZ()).gA())
r+=C.b.cA(v.i(w,q).gO(),x.i(0,q).giA())
s+=t.i(z,x.i(0,q).gZ()).gE().w(v.i(w,q))}n=-2*s/r
this.dx+=n
for(q=0;C.c.M(q,x.gD(x));++q){u=t.i(z,x.i(0,q).gZ()).gE().a
u[0]=C.b.B(u[0],x.i(0,q).gbi().v(0,J.Z(v.i(w,q))).v(0,0.5).v(0,n))
u=C.a.i(z,x.i(0,q).gZ()).gE().a
u[1]=C.b.B(u[1],x.i(0,q).gbi().v(0,J.d7(J.Y(v.i(w,q)))).v(0,0.5).v(0,n))}},
af:function(a){},
ag:function(a){},
H:{
fE:function(a,b){var z=new V.fD(b.gdq().dU(0,!1),0,0,b.gaC(b),!1,!1)
z.aj(a.ch,b)
z.eI(a,b)
return z}}},
fU:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){G.z(this.f.d,this.db,a)},
ag:function(a){G.z(this.r.d,this.dx,a)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
v=w[x].gA()
x=a.b
w=this.fy
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.fy
if(x>=w.length)return H.a(w,x)
t=w[x].gE()
x=a.c
w=this.fy
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.go
if(x>=w.length)return H.a(w,x)
r=w[x].gA()
x=a.b
w=this.go
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.go
if(x>=w.length)return H.a(w,x)
p=w[x].gE()
x=a.c
w=this.go
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
w.J(u)
x.J(q)
n=this.id
n.h(this.db)
n.n(y)
y=this.k1
G.l(w,n,y)
n.h(this.dx)
n.n(z)
z=this.k2
G.l(x,n,z)
n.h(r)
n.q(0,z)
n.n(v)
n.n(y)
this.Q.f.b-=2
m=Math.sqrt(n.gO())
if(m>0.005){x=n.a
w=1/m
n.sj(0,x[0]*w)
n.sk(0,x[1]*w)}else n.F(0,0)
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
x.C(0,this.fr)
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.k1
t.P(w,z)
z.q(0,x)
s=this.k2
s.P(u,y)
y.q(0,v)
r=this.id
y.n(z)
q=r.G(y)
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
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(this.ch>0)return!0
z=this.Q.f.l()
y=this.Q.f.l()
x=this.Q.a.l()
w=this.Q.a.l()
v=this.Q.a.l()
u=a.b
t=this.fy
if(t>=u.length)return H.a(u,t)
s=u[t].gA()
t=a.b
u=this.fy
if(u>=t.length)return H.a(t,u)
r=t[u].gt()
u=a.b
t=this.go
if(t>=u.length)return H.a(u,t)
q=u[t].gA()
t=a.b
u=this.go
if(u>=t.length)return H.a(t,u)
p=t[u].gt()
z.J(r)
y.J(p)
v.h(this.db)
v.n(this.k3)
G.l(z,v,x)
v.h(this.dx)
v.n(this.k4)
G.l(y,v,w)
v.h(q)
v.q(0,w)
v.n(s)
v.n(x)
o=Math.max(-0.2,Math.min(v.W()-this.fx,0.2))
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
h5:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){G.z(this.f.d,this.ch,a)},
ag:function(a){G.z(this.r.d,this.cx,a)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
u=x[w].gE()
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
r=w[x].gE()
x=a.c
w=this.fx
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.a.l()
x=this.Q.f.l()
p=this.Q.f.l()
x.J(v)
p.J(s)
w.h(this.ch)
w.n(y)
y=this.fy
G.l(x,w,y)
w.h(this.cx)
w.n(z)
z=this.go
G.l(p,w,z)
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
p.be(x+m*j*j+l*h*h,f,f,x+m*k*k+g*i)
i=this.r2
i.h(p)
i.bL()
i=m+l
this.rx=i
if(i>0)this.rx=1/i
x=a.a
p=this.cy
if(x.f){p.C(0,x.c)
this.db=this.db*a.a.c
x=this.Q.a.l()
x.h(p)
w.h(x)
w.C(0,o)
u.n(w)
t-=m*(y.w(x)+this.db)
w.h(x)
w.C(0,n)
r.q(0,w)
q+=l*(z.w(x)+this.db);--this.Q.a.b}else{p.K()
this.db=0}z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
J.ag(z[y].gp(),t)
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.fr
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fx
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
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
l.P(w,y)
k=this.go
k.P(u,z)
z.q(0,v)
z.n(x)
z.n(y)
j=this.Q.a.l()
this.r2.cu(z,j)
j.L()
z=this.Q.a.l()
i=this.cy
z.h(i)
i.q(0,j)
n=p*this.dx
if(i.gO()>n*n){i.W()
i.C(0,n)}j.h(i)
j.n(z)
y.h(j)
y.C(0,t)
x.n(y)
w-=r*l.w(j)
y.h(j)
y.C(0,s)
v.q(0,y)
z=k.w(j)
y=a.c
l=this.fr
if(l>=y.length)return H.a(y,l)
J.ag(y[l].gp(),w)
y=a.c
l=this.fr
if(l>=y.length)return H.a(y,l)
y[l].sp(w)
l=a.c
y=this.fx
if(y>=l.length)return H.a(l,y)
l[y].sp(u+q*z)
this.Q.a.b-=4},
ah:function(a){return!0}},
h6:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,R,T,U,S,X,V,a0,a5,ab,ac,ar,aI,az,aA,a6,an,ao,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){G.z(this.f.d,this.fr,a)},
ag:function(a){G.z(this.r.d,this.fx,a)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
this.rx=this.f.c
this.ry=this.r.c
z=this.dx
this.x1=z.gZ()
y=this.dy
this.x2=y.gZ()
x=this.y1
x.h(this.f.f.a)
w=this.y2
w.h(this.r.f.a)
v=this.R
v.h(z.gaR().ghB())
u=this.T
u.h(y.gaR().ghB())
this.U=this.f.fx
this.S=this.r.fx
this.X=z.gbi()
this.V=y.gbi()
this.a0=this.f.go
this.a5=this.r.go
this.ab=z.gfm()
this.ac=y.gfm()
y=a.b
z=this.rx
if(z>=y.length)return H.a(y,z)
t=y[z].gt()
z=a.c
y=this.rx
if(y>=z.length)return H.a(z,y)
s=z[y].gE()
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
p=y[z].gE()
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
m=z[y].gE()
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
j=y[z].gE()
z=a.c
y=this.x2
if(y>=z.length)return H.a(z,y)
i=z[y].gp()
y=this.Q.f.l()
z=this.Q.f.l()
h=this.Q.f.l()
g=this.Q.f.l()
y.J(t)
z.J(q)
h.J(n)
g.J(k)
this.ao=0
f=this.Q.a.l()
e=this.Q.a.l()
d=this.Q.a.l()
c=this.ar
G.l(h,this.id,c)
f.h(this.fy)
f.n(v)
G.l(h,f,e)
f.h(this.fr)
f.n(x)
G.l(y,f,d)
this.a6=e.w(c)
c=d.w(c)
this.az=c
d=this.ao
e=this.X
y=this.U
x=this.ab
h=this.a6
this.ao=d+(e+y+x*h*h+this.a0*c*c)
this.Q.a.b-=2
y=this.Q.a.l()
x=this.Q.a.l()
v=this.Q.a.l()
G.l(g,this.k1,y)
f.h(this.go)
f.n(u)
G.l(g,f,x)
f.h(this.fx)
f.n(w)
G.l(z,f,v)
f=this.aI
f.h(y)
f.C(0,this.r1)
this.an=this.r1*x.w(y)
y=this.r1*v.w(y)
this.aA=y
v=this.ao
x=this.r1
f=this.V
z=this.S
w=this.ac
g=this.an
this.ao=v+(x*x*(f+z)+w*g*g+this.a5*y*y)
this.Q.a.b-=3
z=this.ao
this.ao=z>0?1/z:0
if(a.a.f){z=s.a
y=this.ar.a
s.sj(0,z[0]+this.U*this.r2*y[0])
s.sk(0,z[1]+this.U*this.r2*y[1])
z=this.a0
x=this.r2
r+=z*x*this.az
z=p.a
w=this.aI.a
p.sj(0,z[0]+this.S*x*w[0])
p.sk(0,z[1]+this.S*this.r2*w[1])
z=this.a5
x=this.r2
o+=z*x*this.aA
z=m.a
m.sj(0,z[0]-this.X*x*y[0])
m.sk(0,z[1]-this.X*this.r2*y[1])
y=this.ab
z=this.r2
l-=y*z*this.a6
y=j.a
j.sj(0,y[0]-this.V*z*w[0])
j.sk(0,y[1]-this.V*this.r2*w[1])
i-=this.ac*this.r2*this.an}else this.r2=0
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.c
y=this.rx
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.rx
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.ry
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
y=a.c
z=this.ry
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=a.c
y=this.x1
if(y>=z.length)return H.a(z,y)
t=z[y].gE()
y=a.c
z=this.x1
if(z>=y.length)return H.a(y,z)
s=y[z].gp()
z=a.c
y=this.x2
if(y>=z.length)return H.a(z,y)
r=z[y].gE()
y=a.c
z=this.x2
if(z>=y.length)return H.a(y,z)
q=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
p=this.ar
z.h(x)
z.n(t)
z=p.G(z)
o=this.aI
y.h(v)
y.n(r)
y=o.G(y)
n=this.az
m=this.a6
l=this.aA
k=this.an
this.Q.a.b-=2
j=-this.ao*(z+y+(n*w-m*s+(l*u-k*q)))
this.r2+=j
k=x.a
p=p.a
x.sj(0,k[0]+this.U*j*p[0])
x.sk(0,k[1]+this.U*j*p[1])
k=this.a0
l=this.az
m=v.a
o=o.a
v.sj(0,m[0]+this.S*j*o[0])
v.sk(0,m[1]+this.S*j*o[1])
m=this.a5
n=this.aA
y=t.a
t.sj(0,y[0]-this.X*j*p[0])
t.sk(0,y[1]-this.X*j*p[1])
p=this.ab
y=this.a6
z=r.a
r.sj(0,z[0]-this.V*j*o[0])
r.sk(0,z[1]-this.V*j*o[1])
o=this.ac
z=this.an
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
ah:function(a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=a4.b
y=this.rx
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a4.b
z=this.rx
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a4.b
y=this.ry
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
y=a4.b
z=this.ry
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=a4.b
y=this.x1
if(y>=z.length)return H.a(z,y)
t=z[y].gA()
y=a4.b
z=this.x1
if(z>=y.length)return H.a(y,z)
s=y[z].gt()
z=a4.b
y=this.x2
if(y>=z.length)return H.a(z,y)
r=z[y].gA()
y=a4.b
z=this.x2
if(z>=y.length)return H.a(y,z)
q=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
p=this.Q.f.l()
o=this.Q.f.l()
z.J(w)
y.J(u)
p.J(s)
o.J(q)
n=this.Q.a.l()
m=this.Q.a.l()
l=this.Q.a.l()
k=this.Q.a.l()
j=this.Q.a.l()
i=this.Q.a.l()
h=this.Q.a.l()
g=this.id
G.l(p,g,m)
f=this.fy
n.h(f)
e=this.R
n.n(e)
G.l(p,n,k)
n.h(this.fr)
n.n(this.y1)
G.l(z,n,j)
d=k.w(m)
c=j.w(m)
b=0+(this.X+this.U+this.ab*d*d+this.a0*c*c)
i.h(f)
i.n(e)
n.h(j)
n.q(0,x)
n.n(t)
G.aa(p,n,h)
h.n(i)
a=h.G(g)
this.Q.a.b-=4
z=this.Q.a.l()
p=this.Q.a.l()
k=this.Q.a.l()
j=this.Q.a.l()
i=this.Q.a.l()
h=this.k1
G.l(o,h,z)
g=this.go
n.h(g)
f=this.T
n.n(f)
G.l(o,n,p)
n.h(this.fx)
n.n(this.y2)
G.l(y,n,k)
l.h(z)
l.C(0,this.r1)
a0=p.w(z)
a1=k.w(z)
z=this.r1
b+=z*z*(this.V+this.S)+this.ac*a0*a0+this.a5*a1*a1
j.h(g)
j.n(f)
n.h(k)
n.q(0,v)
n.n(r)
G.aa(o,n,i)
i.n(j)
a2=i.G(h)
this.Q.a.b-=5
z=this.r1
y=this.k4
a3=b>0?-(a+z*a2-y)/b:0
z=this.Q
z.a.b-=3
z.f.b-=4
z=x.a
y=z[0]
p=this.U
m=m.a
x.sj(0,y+p*a3*m[0])
x.sk(0,z[1]+this.U*a3*m[1])
z=this.a0
p=v.a
y=p[0]
o=this.S
l=l.a
v.sj(0,y+o*a3*l[0])
v.sk(0,p[1]+this.S*a3*l[1])
p=this.a5
o=t.a
t.sj(0,o[0]-this.X*a3*m[0])
t.sk(0,o[1]-this.X*a3*m[1])
m=this.ab
o=r.a
r.sj(0,o[0]-this.V*a3*l[0])
r.sk(0,o[1]-this.V*a3*l[1])
l=this.ac
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
P:{"^":"c;",
aj:function(a,b){this.Q=a
this.b=null
this.c=null
this.f=b.c
this.r=b.d
this.y=!1
this.x=!1
this.z=b.b
this.d=new V.dI()
this.e=new V.dI()}},
hh:{"^":"c;0aD:b<"},
dI:{"^":"c;0a,0b,0c,0d"},
W:{"^":"c;a,b",
u:function(a){return this.b}},
c_:{"^":"c;a,b",
u:function(a){return this.b}},
hx:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){a.h(this.f.d.a)},
ag:function(a){a.h(this.r.d.a)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
v=w[x].gA()
x=a.b
w=this.fx
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.fx
if(x>=w.length)return H.a(w,x)
t=w[x].gE()
x=a.c
w=this.fx
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.fy
if(x>=w.length)return H.a(w,x)
r=w[x].gA()
x=a.b
w=this.fy
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.fy
if(x>=w.length)return H.a(w,x)
p=w[x].gE()
x=a.c
w=this.fy
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
m=this.Q.c.l()
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
m.be(z+i*x*x+h*g*g,c,c,z+i*f*f+d*e)
e=this.x1
e.h(m)
e.bL()
e=i+h
this.x2=e
if(e>0)this.x2=1/e
G.l(w,this.ch,n)
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=a.c
y=this.fx
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.fx
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
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
this.x1.cu(n,z)
z.L()
n=this.Q.a.l()
g=this.cy
n.h(g)
g.q(0,z)
k=p*this.dx
if(g.gO()>k*k){g.W()
g.C(0,k)}g=g.a
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
ah:function(a){return!0}},
hy:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){a.h(this.cx)},
ag:function(a){G.z(this.r.d,this.ch,a)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
w=z[x].gA()
x=a.b
z=this.fy
if(z>=x.length)return H.a(x,z)
v=x[z].gt()
z=a.c
x=this.fy
if(x>=z.length)return H.a(z,x)
u=z[x].gE()
x=a.c
z=this.fy
if(z>=x.length)return H.a(x,z)
t=x[z].gp()
z=this.Q.f.l()
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
x=this.Q.a.l()
x.h(this.ch)
x.n(y)
y=this.go
G.l(z,x,y)
x=this.Q.c.l()
z=this.k1
p=this.k2
o=y.a
n=o[1]
m=this.fx
o=o[0]
l=-p*o*n
x.be(z+p*n*n+m,l,l,z+p*o*o+m)
m=this.k3
m.h(x)
m.bL()
m=this.k4
m.h(w)
m.q(0,y)
m.n(this.cx)
m.C(0,this.dx)
t*=0.98
z=a.a
x=this.dy
if(z.f){x.C(0,z.c)
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
ah:function(a){return!0},
ai:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=this.Q.a.l()
y=this.go
y.P(w,z)
z.q(0,x)
v=this.Q.a.l()
u=this.Q.a.l()
t=this.dy
u.h(t)
u.C(0,this.fx)
u.q(0,this.k4)
u.q(0,z)
u.L()
this.k3.cu(u,v)
u.h(t)
t.q(0,v)
s=a.a.a*this.fr
if(t.gO()>s*s)t.C(0,s/Math.sqrt(t.gO()))
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
i3:{"^":"P;ch,cx,cy,db,0dx,dy,fr,fx,fy,go,id,k1,k2,0k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,R,T,U,S,X,V,a0,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){G.z(this.f.d,this.ch,a)},
ag:function(a){G.z(this.r.d,this.cx,a)},
ak:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
v=w[x].gA()
x=a2.b
w=this.k4
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a2.c
x=this.k4
if(x>=w.length)return H.a(w,x)
t=w[x].gE()
x=a2.c
w=this.k4
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a2.b
x=this.r1
if(x>=w.length)return H.a(w,x)
r=w[x].gA()
x=a2.b
w=this.r1
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a2.c
x=this.r1
if(x>=w.length)return H.a(w,x)
p=w[x].gE()
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
w.J(u)
x.J(q)
n.h(this.ch)
n.n(y)
G.l(w,n,l)
n.h(this.cx)
n.n(z)
G.l(x,n,k)
n.h(r)
n.n(v)
n.q(0,k)
n.n(l)
j=this.ry
i=this.x1
h=this.x2
g=this.y1
x=this.y2
G.l(w,this.cy,x)
m.h(n)
m.q(0,l)
this.S=m.w(x)
z=k.w(x)
this.X=z
y=j+i
f=this.S
z=y+h*f*f+g*z*z
this.a0=z
if(z>0)this.a0=1/z
z=this.R
G.l(w,this.db,z)
m.h(n)
m.q(0,l)
this.T=m.w(z)
k=k.w(z)
this.U=k
l=this.T
n=h*l
w=g*k
e=n+w
f=this.S
d=this.X
c=n*f+w*d
b=h+g
if(b===0)b=1
a=h*f
a0=g*d
a1=a+a0
this.V.b1(y+n*l+w*k,e,c,e,b,a1,c,a1,y+a*f+a0*d)
this.k3=C.i
y=this.dy
y.sae(0,0)
this.fr=0
w=a2.a
if(w.f){y.C(0,w.c)
this.fr=this.fr*a2.a.c
w=this.Q.a.l()
m.h(x)
y=y.a
m.C(0,this.fr+y[2])
w.h(z)
w.C(0,y[0])
w.q(0,m)
m=y[0]
z=this.T
x=y[1]
y=this.fr+y[2]
n=this.S
l=this.U
k=this.X
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=a.c
y=this.k4
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.k4
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.r1
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
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
p=this.R
y.sj(0,p.G(z)+this.U*u-this.T*w)
y.sk(0,u-w)
z=this.dy
o=this.Q.a.l()
y.L()
E.bC(this.V,o,y)
y.L()
y=z.a
n=y[0]
o=o.a
z.sj(0,n+o[0])
z.sk(0,y[1]+o[1])
y=this.Q.a.l()
y.h(p)
y.C(0,o[0])
p=o[0]
z=this.T
o=o[1]
n=this.U
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
ah:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
n=p[o].gA()
o=a2.b
p=this.k4
if(p>=o.length)return H.a(o,p)
m=o[p].gt()
p=a2.b
o=this.r1
if(o>=p.length)return H.a(p,o)
l=p[o].gA()
o=a2.b
p=this.r1
if(p>=o.length)return H.a(o,p)
k=o[p].gt()
z.J(m)
y.J(k)
j=this.ry
i=this.x1
h=this.x2
g=this.y1
s.h(this.ch)
s.n(this.r2)
G.l(z,s,x)
s.h(this.cx)
s.n(this.rx)
G.l(y,s,w)
v.h(l)
v.q(0,w)
v.n(n)
v.n(x)
G.l(z,this.cy,u)
s.h(v)
s.q(0,x)
f=s.w(u)
e=w.w(u)
G.l(z,this.db,t)
s.h(v)
s.q(0,x)
d=s.w(t)
c=w.w(t)
r.sj(0,t.G(v))
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
x.be(j+i+y*d+z*c,a,a,b)
r.L()
E.dO(x,s,r)
r.L()
s=s.a
q.sj(0,s[0])
q.sk(0,s[1])
q.sae(0,0);--this.Q.c.b
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
dV:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){G.z(this.f.d,this.dx,a)},
ag:function(a){G.z(this.r.d,this.dy,a)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
v=w[x].gA()
x=a.b
w=this.go
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.go
if(x>=w.length)return H.a(w,x)
t=w[x].gE()
x=a.c
w=this.go
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.id
if(x>=w.length)return H.a(w,x)
r=w[x].gA()
x=a.b
w=this.id
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.id
if(x>=w.length)return H.a(w,x)
p=w[x].gE()
x=a.c
w=this.id
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
w.J(u)
x.J(q)
n.h(this.dx)
n.n(y)
y=this.k3
G.l(w,n,y)
n.h(this.dy)
n.n(z)
z=this.k4
G.l(x,n,z)
n=this.k1
n.h(v)
n.q(0,y)
n.n(this.ch)
x=this.k2
x.h(r)
x.q(0,z)
x.n(this.cx)
m=Math.sqrt(n.gO())
l=Math.sqrt(x.gO())
if(m>0.05)n.C(0,1/m)
else n.K()
if(l>0.05)x.C(0,1/l)
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
w.C(0,-this.fy)
i.h(x)
i.C(0,-this.fx*this.fy)
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.go
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.id
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
y=a.c
z=this.id
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.k3
r.P(w,z)
z.q(0,x)
q=this.k4
q.P(u,y)
y.q(0,v)
p=this.k1
z=p.G(z)
o=this.fx
n=this.k2
y=n.G(y)
m=-this.y1*(-z-o*y)
this.fy+=m
t.h(p)
t.C(0,-m)
s.h(n)
s.C(0,-this.fx*m)
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
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
o=q[p].gA()
p=a.b
q=this.go
if(q>=p.length)return H.a(p,q)
n=p[q].gt()
q=a.b
p=this.id
if(p>=q.length)return H.a(q,p)
m=q[p].gA()
p=a.b
q=this.id
if(q>=p.length)return H.a(p,q)
l=p[q].gt()
z.J(n)
y.J(l)
t.h(this.dx)
t.n(this.r1)
G.l(z,t,x)
t.h(this.dy)
t.n(this.r2)
G.l(y,t,w)
v.h(o)
v.q(0,x)
v.n(this.ch)
u.h(m)
u.q(0,w)
u.n(this.cx)
k=Math.sqrt(v.gO())
j=Math.sqrt(u.gO())
if(k>0.05)v.C(0,1/k)
else v.K()
if(j>0.05)u.C(0,1/j)
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
s.C(0,-e)
r.h(u)
r.C(0,-this.fx*e)
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
cF:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,R,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
u=x[w].gE()
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
r=w[x].gE()
x=a.c
w=this.k2
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
p=this.Q.a.l()
w.J(v)
x.J(s)
p.h(this.ch)
p.n(y)
y=this.k3
G.l(w,p,y)
p.h(this.cx)
p.n(z)
z=this.k4
G.l(x,p,z)
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
g.b1(x+k*k*m+i*i*l,f[3],f[6],h*w*m-i*j*l,x+w*w*m+j*j*l,f[7],h*m-i*l,w*m+j*l,p)
this.y2=p
if(p>0)this.y2=1/p
this.db=0
if(this.fx&&p!==0){e=s-v-this.fy
x=this.id
w=this.go
if(Math.abs(x-w)<0.06981317007977318)this.R=C.B
else if(e<=w){if(this.R!==C.y)this.cy.sae(0,0)
this.R=C.y}else if(e>=x){if(this.R!==C.u)this.cy.sae(0,0)
this.R=C.u}else{this.R=C.i
this.cy.sae(0,0)}}else this.R=C.i
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.k1
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.k1
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.k2
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
y=a.c
z=this.k2
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
t=this.rx
s=this.ry
r=this.x1
q=this.x2
z=this.Q.a.l()
y=this.fx&&this.R!==C.i&&r+q!==0
p=this.k4
o=this.k3
n=this.y1
m=this.Q.a
if(y){y=m.l()
m=this.Q.b.l()
o.P(w,z)
p.P(u,y)
y.q(0,v)
y.n(x)
y.n(z)
l=y.a
m.bU(l[0],l[1],u-w)
l=this.Q.b.l()
E.dP(n,l,m)
l.L()
m=this.R
if(m===C.B)this.cy.q(0,l)
else if(m===C.y){m=this.cy
k=m.a
if(k[2]+l.a[2]<0){j=this.Q.a.l()
i=n.a
j.F(i[6],i[7])
j.C(0,k[2])
j.n(y)
E.bC(n,z,j)
z=z.a
l.sj(0,z[0])
l.sk(0,z[1])
l.sae(0,-k[2])
m.sj(0,k[0]+z[0])
m.sk(0,k[1]+z[1])
m.sae(0,0);--this.Q.a.b}else m.q(0,l)}else if(m===C.u){m=this.cy
k=m.a
if(k[2]+l.a[2]>0){j=this.Q.a.l()
i=n.a
j.F(i[6],i[7])
j.C(0,k[2])
j.n(y)
E.bC(n,z,j)
z=z.a
l.sj(0,z[0])
l.sk(0,z[1])
l.sae(0,-k[2])
m.sj(0,k[0]+z[0])
m.sk(0,k[1]+z[1])
m.sae(0,0);--this.Q.a.b}else m.q(0,l)}z=this.Q.a.l()
l=l.a
z.F(l[0],l[1])
y=x.a
n=y[0]
m=z.a
x.sj(0,n-t*m[0])
x.sk(0,y[1]-t*m[1])
w-=r*(o.w(z)+l[2])
o=v.a
v.sj(0,o[0]+s*m[0])
v.sk(0,o[1]+s*m[1])
u+=q*(p.w(z)+l[2])
l=this.Q
l.a.b-=2
l.b.b-=2}else{y=m.l()
m=this.Q.a.l()
o.P(w,z)
p.P(u,y)
y.q(0,v)
y.n(x)
y.n(z)
y.L()
E.bC(n,m,y)
y=this.cy
n=y.a
z=n[0]
l=m.a
y.sj(0,z+l[0])
y.sk(0,n[1]+l[1])
n=x.a
x.sj(0,n[0]-t*l[0])
x.sk(0,n[1]-t*l[1])
w-=r*o.w(m)
o=v.a
v.sj(0,o[0]+s*l[0])
v.sk(0,o[1]+s*l[1])
u+=q*p.w(m)
this.Q.a.b-=2}z=a.c
y=this.k1
if(y>=z.length)return H.a(z,y)
z[y].sp(w)
y=a.c
z=this.k2
if(z>=y.length)return H.a(y,z)
y[z].sp(u);--this.Q.a.b},
ah:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=this.Q.f.l()
y=this.Q.f.l()
x=a0.b
w=this.k1
if(w>=x.length)return H.a(x,w)
v=x[w].gA()
w=a0.b
x=this.k1
if(x>=w.length)return H.a(w,x)
u=w[x].gt()
x=a0.b
w=this.k2
if(w>=x.length)return H.a(x,w)
t=x[w].gA()
w=a0.b
x=this.k2
if(x>=w.length)return H.a(w,x)
s=w[x].gt()
z.J(u)
y.J(s)
x=this.x1
w=this.x2
if(this.fx&&this.R!==C.i&&x+w!==0){r=s-u-this.fy
q=this.R
if(q===C.B){p=Math.max(-0.13962634015954636,Math.min(r-this.go,0.13962634015954636))
o=-this.y2*p
n=Math.abs(p)}else if(q===C.y){p=r-this.go
n=-p
p=Math.max(-0.13962634015954636,Math.min(p+0.03490658503988659,0))
o=-this.y2*p}else if(q===C.u){p=r-this.id
m=Math.max(0,Math.min(p-0.03490658503988659,0.13962634015954636))
o=-this.y2*m
n=p}else{n=0
o=0}u-=x*o
s+=w*o}else n=0
z.J(u)
y.J(s)
x=this.Q.a.l()
w=this.Q.a.l()
q=this.Q.a.l()
l=this.Q.a.l()
q.h(this.ch)
q.n(this.r1)
G.l(z,q,x)
q.h(this.cx)
q.n(this.r2)
G.l(y,q,w)
q.h(t)
q.q(0,w)
q.n(v)
q.n(x)
k=Math.sqrt(q.gO())
j=this.rx
i=this.ry
h=this.x1
g=this.x2
y=this.Q.c.l()
z=j+i
f=x.a
e=f[1]
d=w.a
c=d[1]
f=f[0]
d=d[0]
b=g*d
a=-h*f*e-b*c
y.be(z+h*e*e+g*c*c,a,a,z+h*f*f+b*d)
E.dO(y,l,q)
l.L()
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
if(d>=w.length)return H.a(w,d)
w[d].st(u-h*x)
x=a0.b
d=this.k2
if(d>=x.length)return H.a(x,d)
x[d].st(s+g*l)
this.Q.f.b-=2
return k<=0.005&&n<=0.03490658503988659},
af:function(a){G.z(this.f.d,this.ch,a)},
ag:function(a){G.z(this.r.d,this.cx,a)},
cK:function(a,b){if(a!==this.go||b!==this.id){this.f.a3(!0)
this.r.a3(!0)
this.cy.sae(0,0)
this.go=a
this.id=b}}},
dZ:{"^":"hh;f,r,x,y,z,Q,ch,cx,cy,0a,0b,0c,0d,e"},
ia:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
v=w[x].gA()
x=a.b
w=this.dy
if(w>=x.length)return H.a(x,w)
u=x[w].gt()
w=a.c
x=this.dy
if(x>=w.length)return H.a(w,x)
t=w[x].gE()
x=a.c
w=this.dy
if(w>=x.length)return H.a(x,w)
s=x[w].gp()
w=a.b
x=this.fr
if(x>=w.length)return H.a(w,x)
r=w[x].gA()
x=a.b
w=this.fr
if(w>=x.length)return H.a(x,w)
q=x[w].gt()
w=a.c
x=this.fr
if(x>=w.length)return H.a(w,x)
p=w[x].gE()
x=a.c
w=this.fr
if(w>=x.length)return H.a(x,w)
o=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
n=this.Q.a.l()
w.J(u)
x.J(q)
n.h(this.ch)
n.n(y)
y=this.fy
G.l(w,n,y)
n.h(this.cx)
n.n(z)
z=this.go
G.l(x,n,z)
n=this.fx
n.h(r)
n.q(0,z)
n.n(v)
n.n(y)
x=Math.sqrt(n.gO())
this.db=x
if(x-this.cy>0)this.rx=C.u
else this.rx=C.i
if(x>0.005)n.C(0,1/x)
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.c
y=this.dy
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.dy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.fr
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
y=a.c
z=this.fr
if(z>=y.length)return H.a(y,z)
u=y[z].gp()
z=this.Q.a.l()
y=this.Q.a.l()
t=this.Q.a.l()
s=this.fy
s.P(w,z)
z.q(0,x)
r=this.go
r.P(u,y)
y.q(0,v)
q=this.db-this.cy
p=this.fx
t.h(y)
t.n(z)
o=p.G(t)
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
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.b
y=this.dy
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.b
z=this.dy
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.fr
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
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
z.J(w)
y.J(u)
q.h(this.ch)
q.n(this.id)
G.l(z,q,s)
q.h(this.cx)
q.n(this.k1)
G.l(y,q,r)
t.h(v)
t.q(0,r)
t.n(x)
t.n(s)
p=t.W()
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
af:function(a){G.z(this.f.d,this.ch,a)},
ag:function(a){G.z(this.r.d,this.cx,a)}},
iK:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){G.z(this.f.d,this.db,a)},
ag:function(a){G.z(this.r.d,this.dx,a)},
ak:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
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
u=x[w].gE()
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
r=w[x].gE()
x=a9.c
w=this.go
if(w>=x.length)return H.a(x,w)
q=x[w].gp()
w=this.Q.f.l()
x=this.Q.f.l()
p=this.Q.a.l()
w.J(v)
x.J(s)
p.h(this.db)
p.n(y)
y=this.id
G.l(w,p,y)
p.h(this.dx)
p.n(z)
z=this.k1
G.l(x,p,z)
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
p.b1(x+k*k*m+i*i*l,g[3],g[6],h*w*m-i*j*l,x+w*w*m+j*j*l,g[7],h*m-i*l,w*m+j*l,f)
x=this.ry
if(this.ch>0){e=g[0]
d=g[3]
c=g[1]
b=g[4]
a=e*b-d*c
if(a!==0)a=1/a
w=-a
x.b1(a*b,w*c,0,w*d,a*e,0,0,0,0)
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
x.b1(a*(k-i*i),a*(h*i-a6),a*(a7-h*w),j[1],a*(a8*p-h*h),a*(h*a5-a8*i),j[2],j[5],a*(a8*w-a5*a5))
this.fr=0
this.cy=0}x=this.fx
if(a9.a.f){w=this.Q.a.l()
x.C(0,a9.a.c)
x=x.a
w.F(x[0],x[1])
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=a.c
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gE()
y=a.c
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gp()
z=a.c
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gE()
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
m.sae(0,d+c)
w-=r*c
u+=q*c
j.P(u,z)
l.P(w,p)
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
u+=q*j.w(y)}else{l.P(w,p)
j.P(u,z)
z.q(0,v)
z.n(x)
z.n(p)
p=this.Q.b.l()
z=z.a
p.bU(z[0],z[1],k)
k=this.Q.b.l()
p=p.a
k.sj(0,p[0]*i[0]+p[1]*i[3]+p[2]*i[6])
k.sk(0,p[0]*i[1]+p[1]*i[4]+p[2]*i[7])
k.sae(0,p[0]*i[2]+p[1]*i[5]+p[2]*i[8])
k.L()
m.q(0,k)
k=k.a
y.F(k[0],k[1])
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
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=a.b
y=this.fy
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.b
z=this.fy
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.go
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
y=a.b
z=this.go
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
t=this.Q.a.l()
s=this.Q.a.l()
r=this.Q.a.l()
z.J(w)
y.J(u)
q=this.k4
p=this.r1
o=this.r2
n=this.rx
t.h(this.db)
t.n(this.k2)
G.l(z,t,s)
t.h(this.dx)
t.n(this.k3)
G.l(y,t,r)
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
t.b1(m+k*k*o+i*i*n,g[3],g[6],h*l*o-i*j*n,m+l*l*o+j*j*n,g[7],h*o-i*n,l*o+j*n,o+n)
m=x.a
l=v.a
if(this.ch>0){y.h(v)
y.q(0,r)
y.n(x)
y.n(s)
f=Math.sqrt(y.gO())
E.bC(t,z,y)
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
f=Math.sqrt(y.gO())
e=Math.abs(d)
k=this.Q.b.l()
j=this.Q.b.l()
y=y.a
k.bU(y[0],y[1],d)
E.dP(t,j,k)
j.L()
j=j.a
z.F(j[0],j[1])
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
iL:{"^":"P;ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,R,T,U,S,X,V,a0,a5,ab,ac,ar,a,0b,0c,0d,0e,0f,0r,x,y,0z,0Q",
af:function(a){G.z(this.f.d,this.cy,a)},
ag:function(a){G.z(this.r.d,this.db,a)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
r=t[s].gA()
s=a.b
t=this.k2
if(t>=s.length)return H.a(s,t)
q=s[t].gt()
t=a.c
s=this.k2
if(s>=t.length)return H.a(t,s)
p=t[s].gE()
s=a.c
t=this.k2
if(t>=s.length)return H.a(s,t)
o=s[t].gp()
t=a.b
s=this.k3
if(s>=t.length)return H.a(t,s)
n=t[s].gA()
s=a.b
t=this.k3
if(t>=s.length)return H.a(s,t)
m=s[t].gt()
t=a.c
s=this.k3
if(s>=t.length)return H.a(t,s)
l=t[s].gE()
s=a.c
t=this.k3
if(t>=s.length)return H.a(s,t)
k=s[t].gp()
t=this.Q.f.l()
s=this.Q.f.l()
j=this.Q.a.l()
t.J(q)
s.J(m)
j.h(this.cy)
j.n(y)
y=this.ab
G.l(t,j,y)
j.h(this.db)
j.n(z)
z=this.ac
G.l(s,j,z)
s=this.ar
s.h(n)
s.q(0,z)
s.n(r)
s.n(y)
i=this.y1
G.am(t,this.dy,i)
j.h(s)
j.q(0,y)
this.T=j.w(i)
h=z.w(i)
this.U=h
u=w+u
w=this.T
h=u+x*w*w+v*h*h
this.S=h
if(h>0)this.S=1/h
this.V=0
this.a0=0
this.a5=0
if(this.ch>0){w=this.x2
G.am(t,this.dx,w)
j.h(s)
j.q(0,y)
this.y2=j.w(w)
z=z.w(w)
this.R=z
j=this.y2
g=u+x*j*j+v*z*z
if(g>0){this.V=1/g
f=s.G(w)
e=6.283185307179586*this.ch
z=this.V
y=this.cx
d=z*e*e
c=a.a.a
y=c*(2*z*y*e+c*d)
this.a5=y
if(y>0){z=1/y
this.a5=z}else z=y
this.a0=f*c*d*z
z=g+z
this.V=z
if(z>0)this.V=1/z}}else this.fy=0
this.X=0
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
i=this.T
w=this.fy
y=this.y2
v=this.fx
u=this.U
t=this.R
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.r2
y=this.rx
x=this.ry
w=this.x1
v=a.c
u=this.k2
if(u>=v.length)return H.a(v,u)
t=v[u].gE()
u=a.c
v=this.k2
if(v>=u.length)return H.a(u,v)
s=u[v].gp()
v=a.c
u=this.k3
if(u>=v.length)return H.a(v,u)
r=v[u].gE()
u=a.c
v=this.k3
if(v>=u.length)return H.a(u,v)
q=u[v].gp()
v=this.Q.a.l()
u=this.Q.a.l()
p=this.x2
v.h(r)
v.n(t)
o=p.G(v)
n=this.R
m=this.y2
l=this.V
k=this.a0
j=this.a5
i=this.fy
h=-l*(o+n*q-m*s+k+j*i)
this.fy=i+h
p=p.a
u.sj(0,h*p[0])
u.sk(0,h*p[1])
p=this.y2
i=this.R
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
k=this.X
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
v=i.G(v)
k=this.U
n=this.T
h=-this.S*(v+k*q-n*s)
this.fr+=h
i=i.a
u.sj(0,h*i[0])
u.sk(0,h*i[1])
i=this.T
u=this.U
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
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.b
y=this.k2
if(y>=z.length)return H.a(z,y)
x=z[y].gA()
y=a.b
z=this.k2
if(z>=y.length)return H.a(y,z)
w=y[z].gt()
z=a.b
y=this.k3
if(y>=z.length)return H.a(z,y)
v=z[y].gA()
y=a.b
z=this.k3
if(z>=y.length)return H.a(y,z)
u=y[z].gt()
z=this.Q.f.l()
y=this.Q.f.l()
t=this.Q.a.l()
z.J(w)
y.J(u)
t.h(this.cy)
t.n(this.k4)
s=this.ab
G.am(z,t,s)
t.h(this.db)
t.n(this.r1)
r=this.ac
G.am(y,t,r)
y=this.ar
y.h(v)
y.n(x)
y.q(0,r)
y.n(s)
q=this.Q.a.l()
G.am(z,this.dy,q)
t.h(y)
t.q(0,s)
p=t.w(q)
o=r.w(q)
n=y.G(q)
y=this.r2
r=this.rx
t=this.ry
s=this.T
z=this.x1
m=this.U
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
al:{"^":"c;a,b,c,d,e",
at:function(a){this.a=this.a*0.95+a*0.05
this.b=this.b*0.8+a*0.2
this.c=Math.min(a,this.c)
this.d=Math.max(a,this.d)},
u:function(a){return H.f(this.b)+" ("+H.f(this.a)+") ["+H.f(this.c)+","+H.f(this.d)+"]"}},
i4:{"^":"c;a,b,c,d,e,f,r,x,y,z"},
e2:{"^":"c;0a,0b,0c",
sbM:function(a){this.b=H.j(a,"$isd",[V.av],"$asd")},
sbP:function(a){this.c=H.j(a,"$isd",[V.aQ],"$asd")}},
ed:{"^":"c;a,b,c,d,e,f"},
iO:{"^":"c;a,0b,0c,0d,e,f,r,x,0y,0z,0Q,ch,cx,cy,db,dx,dy,0fr,0fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,R,T,U,S,X,V,a0,a5,ab,ac,ar,aI,az,aA,a6,an,ao",
seu:function(a){this.y1=H.j(a,"$isd",[V.b0],"$asd")},
aP:function(a,b,c){var z,y,x,w,v,u,t
H.j(a,"$isa8",[V.U],"$asa8")
z=new V.bT(!1)
z.sdw(a)
z.b=!0
y=this.fy
x=b.a
w=y.length
if(x>=w)return H.a(y,x)
v=y[x]
u=c.a;(v&&C.a).m(v,u,z)
if(b!==c){t=new V.bT(!1)
t.sdw(a)
t.b=!1
if(u>=w)return H.a(y,u)
y=y[u];(y&&C.a).m(y,x,t)}},
hH:function(a,b,c,d){var z,y,x,w,v,u
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
u.aB(a,b,c,d)
return u}else{u=w.l()
u.aB(c,d,a,b)
return u}}else return},
bI:function(a){var z,y,x,w,v,u,t,s,r,q,p
if((this.a&2)===2)return
z=new E.b(new Float64Array(2))
y=new G.A(0,1)
x=new Float64Array(2)
w=new E.b(new Float64Array(2))
v=new E.b(new Float64Array(2))
u=new E.b(new Float64Array(2))
t=new G.aP(w,v,u,0,0,0)
s=new E.b(new Float64Array(2))
r=new E.b(new Float64Array(2))
q=new Float64Array(2)
p=new V.b0(C.e,0,0,new G.G(z,y),new G.G(new E.b(x),new G.A(0,1)),t,s,0,r,0,this,0,0,0,0,0,0,0,0,0,new V.cu(0.2,0,0,!1,new V.bY(1,65535,0)),new V.hv(0,new E.b(q),0),new G.G(new E.b(new Float64Array(2)),new G.A(0,1)))
p.b=4
p.b=6
p.b=38
z.h(a.c)
y.J(a.d)
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
bJ:function(a){var z,y,x,w,v,u,t
if((this.a&2)===2)return
z=V.hi(this,a)
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
fT:function(){var z,y
for(z=this.c;z!=null;z=z.cx){y=z.y.a
y[0]=0
y[1]=0
z.z=0}},
hc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
if((s&32)!==32){z.av(0.5,0.5,0.3)
this.bm(q,v,z,x)}else{p=w.a
if(p===C.e){z.av(0.5,0.9,0.3)
this.bm(q,v,z,x)}else if(p===C.K){z.av(0.5,0.5,0.9)
this.bm(q,v,z,x)}else if((s&2)!==2){z.av(0.5,0.5,0.5)
this.bm(q,v,z,x)}else{z.av(0.9,0.7,0.7)
this.bm(q,v,z,x)}}}}z=this.fx
v=this.Q.a
o=z.z
if(o!==0){n=z.r/2
m=z.cy.a
l=z.fx.a!=null?z.e2():null
z=this.Q
if((v&128)!==0)z.he(m,n,l,o)
else z.hd(m,n,l,o)}}if((y&4)!==0)for(k=this.d,z=this.ch.a,v=this.k2,u=z.a,t=u.length;k!=null;k=k.c){j=k.f
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
k.af(s)
k.ag(p)
v.av(0.5,0.8,0.8)
switch(k.a){case C.Q:this.Q.am(s,p,v)
break
case C.R:H.u(k,"$isdV")
f=k.ch
e=k.cx
this.Q.am(f,s,v)
this.Q.am(e,p,v)
this.Q.am(f,e,v)
break
case C.T:this.Q.am(h,g,v)
break
case C.P:case C.S:break
default:this.Q.am(h,s,v)
this.Q.am(s,p,v)
this.Q.am(g,p,v)}z.b-=2}if((y&16)!==0){z=this.k2
z.av(0.3,0.9,0.9)
for(d=this.b.b,v=this.k4,u=this.r1;d!=null;d=d.c){c=d.f
b=d.r
t=d.x
s=c.r
if(t>=s.length)return H.a(s,t)
s[t].gaS().cB(v)
t=d.y
s=b.r
if(t>=s.length)return H.a(s,t)
s[t].gaS().cB(u)
this.Q.am(v,u,z)}}if((y&8)!==0){z=this.k2
z.av(0.9,0.3,0.9)
for(w=this.c,v=this.r2,u=v.a,t=[E.b];w!=null;w=w.cx){if((w.b&32)!==32)continue
for(q=w.cy;q!=null;q=q.b)for(a=0;a<q.x;++a){s=q.r
if(a>=s.length)return H.a(s,a)
a0=s[a]
s=this.b.a
p=a0.d
s=s.a.b
if(p<0||p>=s.length)return H.a(s,p)
a1=s[p].gaS()
if(!u.cg(4))u.m(0,4,v.cD(4))
s=u.i(0,4)
p=J.X(s)
a2=a1.a.a
p.i(s,0).F(a2[0],a2[1])
a3=a1.b.a
p.i(s,1).F(a3[0],a2[1])
p.i(s,2).F(a3[0],a3[1])
p.i(s,3).F(a2[0],a3[1])
a3=this.Q
a3.toString
a3.bE(H.j(s,"$isd",t,"$asd"),4,z)
a3.c.stroke()}}}if((y&32)!==0){a4=new G.bR(255,0,0)
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
t.bD(v,0.1*t.b.c,a4)
t.c.stroke()}}if((y&64)!==0)this.b.a.a.hf(this.Q)
this.Q.toString},
bV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
z.aB(x,v.c,this.f,v.e)
for(y=this.c;y!=null;y=y.cx)y.b&=4294967294
for(u=this.b.b;u!=null;u=u.c)u.a&=4294967294
for(t=this.d;t!=null;t=t.c)t.x=!1
s=this.e
if(this.y1.length<s){x=new Array(s)
x.fixed$length=Array
this.seu(H.h(x,[V.b0]))}for(r=this.c,x=this.r;r!=null;r=r.cx){v=r.b
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
y.a3(!0)
if(y.a===C.e)continue
for(o=y.dy;o!=null;o=o.d){n=o.b
v=n.a
if((v&1)===1)continue
if((v&4)!==4||(v&2)!==2)continue
m=n.f.z
l=n.r.z
if(m||l)continue
v=z.c;(v&&C.a).m(v,z.y++,n)
n.a|=1
k=o.a
if((k.b&1)===1)continue
j=q+1
C.a.m(this.y1,q,k)
k.b|=1
q=j}for(i=y.dx;i!=null;i=i.d){v=i.b
if(v.x)continue
k=i.a
if((k.b&32)!==32)continue
p=z.d;(p&&C.a).m(p,z.x++,v)
i.b.x=!0
if((k.b&1)===1)continue
j=q+1
C.a.m(this.y1,q,k)
k.b|=1
q=j}}z.e9(this.fr,a,x,this.x)
for(h=0;h<z.r;++h){v=z.b
if(h>=v.length)return H.a(v,h)
y=v[h]
if(y.a===C.e)y.b&=4294967294}}z=this.fr.f
z.at(z.e)
z=this.fr.r
z.at(z.e)
z=this.fr.x
z.at(z.e)
z=this.y2.a
z.aM(0)
for(y=this.c;y!=null;y=y.cx){if((y.b&1)===0)continue
if(y.a===C.e)continue
y.cR()}x=this.b
x.a.cw(x)
x=this.fr.y
z=z.gaH()
v=$.M
if(typeof v!=="number")return H.J(v)
x.at(C.c.aw(z*1000,v))},
em:function(b6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
z=this.R
z.aB(64,32,0,this.b.e)
if(this.dy){for(y=this.c;y!=null;y=y.cx){y.b&=4294967294
y.f.f=0}for(x=this.b.b;x!=null;x=x.c){x.a&=4294967262
x.Q=0
x.ch=1}}for(w=this.S,v=this.X,u=this.V,t=this.a0,s=this.U,r=this.T,q=r.a,p=r.b,o=r.c,n=r.d,m=this.ch;!0;){for(x=this.b.b,l=null,k=1;x!=null;x=x.c){j=x.a
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
if(a3<a4){j.aT(a4)
a3=a4}else if(a4<a3)a.aT(a3)
a5=x.x
a6=x.y
q.bv(h.d,a5)
p.bv(g.d,a6)
o.N(j)
n.N(a)
r.e=1
m.fx.hZ(s,r)
a7=s.b
i=s.a===C.I?Math.min(a3+(1-a3)*a7,1):1
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
f.aT(k)
e.aT(k)
l.cv(this.b.e)
a8=l.a&=4294967263;++l.Q
if((a8&4)!==4||(a8&2)!==2){l.a=a8&4294967291
j.N(u)
a.N(t)
f.b3()
e.b3()
continue}f.a3(!0)
e.a3(!0)
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
b4=b2.f.z
b5=b2.r.z
if(b4||b5)continue
j=b3.f
u.N(j)
if((b3.b&1)===0)b3.aT(k)
b2.cv(this.b.e)
a=b2.a
if((a&4)!==4){j.N(u)
b3.b3()
continue}if((a&2)!==2){j.N(u)
b3.b3()
continue}b2.a=a|1
j=z.c;(j&&C.a).m(j,z.y++,b2)
j=b3.b
if((j&1)!==0)continue
b3.b=j|1
if(b3.a!==C.e)b3.a3(!0)
j=z.r
b3.c=j
a=z.b;(a&&C.a).m(a,j,b3);++z.r}}j=(1-k)*b6.a
w.a=j
w.b=1/j
w.c=1
w.e=20
w.d=b6.d
w.f=!1
z.en(w,f.c,e.c)
for(a9=0;a9<z.r;++a9){j=z.b
if(a9>=j.length)return H.a(j,a9)
b0=j[a9]
b0.b&=4294967294
if(b0.a!==C.f)continue
b0.cR()
for(b1=b0.dy;b1!=null;b1=b1.d)b1.b.a&=4294967262}j=this.b
j.a.cw(j)}},
bm:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q
z=a.d
switch(z.a){case C.o:H.u(z,"$isb5")
y=this.az
G.r(b,z.gad(),y)
x=z.gba()
z=b.b
this.aA.F(z.b,z.a)
z=this.Q
if(d)z.ha(y,x,c)
else{z.bD(y,x.v(0,z.b.c),c)
z.c.fill()}break
case C.l:w=z.f
v=this.ao.dX(8)
for(y=J.X(v),u=0;u<w;++u){t=z.d
if(u>=8)return H.a(t,u)
G.r(b,t[u],y.i(v,u))}z=this.Q
y=[E.b]
if(d){z.toString
z.bE(H.j(v,"$isd",y,"$asd"),w,c)
z.c.stroke()}else{z.toString
z.bE(H.j(v,"$isd",y,"$asd"),w,c)
z.c.fill()}break
case C.q:H.u(z,"$isb9")
y=this.a6
G.r(b,z.c,y)
t=this.an
G.r(b,z.d,t)
this.Q.am(y,t,c)
break
case C.A:H.u(z,"$iscq")
s=z.gfb()
v=z.gce()
z=this.a6
G.r(b,v.i(0,0),z)
for(y=this.an,r=y.a,t=z.a,u=1;C.c.M(u,s);++u){G.r(b,v.i(0,u),y)
this.Q.am(z,y,c)
q=this.Q
q.bD(z,0.05*q.b.c,c)
q.c.stroke()
t[1]=r[1]
t[0]=r[0]}break
default:break}},
H:{
iT:function(a,b){var z,y,x,w
z=new Array(a)
z.fixed$length=Array
y=H.h(z,[[P.d,V.bT]])
for(z=[V.bT],x=0;x<a;++x){w=new Array(b)
w.fixed$length=Array
C.a.m(y,x,H.h(w,z))}return y}}},
iR:{"^":"c;0a,0b",
dV:function(a){var z,y
z=this.a.a.b
if(a<0||a>=z.length)return H.a(z,a)
y=H.u(z[a].gaD(),"$isaz")
return this.b.iH(y.b)},
$isiA:1},
iS:{"^":"c;a,b,c,0d,0e"},
lf:{"^":"c;"},
au:{"^":"c;a",
st:function(a){this.a[3]=H.k(a)},
gt:function(){return this.a[3]}},
lg:{"^":"c;"},
hU:{"^":"c;a,b,c,0d,0aD:e<"},
lh:{"^":"c;"},
a2:{"^":"c;0a,b,c,$ti",
sdA:function(a,b){this.a=H.j(b,"$isd",this.$ti,"$asd")}},
hT:{"^":"c;0a,0b"},
lp:{"^":"c;"},
lq:{"^":"c;"},
dU:{"^":"c;",$isK:1,
$asK:function(){return[V.dU]}},
hI:{"^":"c;a,b,c"},
fS:{"^":"c;0a,0b,0c,d,e"},
iH:{"^":"c;0a,b",$isi5:1},
fI:{"^":"c;0a,0b,0c"},
ii:{"^":"c;0a,0b,c,d,e,f",$isi5:1},
hV:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,id,k1,0k2,k3,k4,0r1,r2,rx,0ry,x1,x2,0y1,y2,R,0T,U,0S,0X,0V,0a0,0a5,0ab,0ac,0ar,0aI,0az,0aA,0a6,an,ao,is,bn,it,iu,iv,iw,hh,hi,hj,hk,hl,hm,ix",
shI:function(a){this.cy=H.j(a,"$isa2",[E.b],"$asa2")},
si3:function(a){this.db=H.j(a,"$isa2",[E.b],"$asa2")},
sfM:function(a){this.dy=H.j(a,"$isd",[E.b],"$asd")},
sh_:function(a){this.fx=H.j(a,"$isa2",[V.au],"$asa2")},
si2:function(a){this.go=H.j(a,"$isa2",[P.c],"$asa2")},
cs:function(a,b,c){var z,y,x,w,v
H.j(a,"$isd",[c],"$asd")
H.m(b,{func:1,ret:c})
if(a==null){x=this.Q
w=new Array(x)
w.fixed$length=Array
a=H.h(w,[c])
for(z=0;J.d6(z,x);z=J.f9(z,1))try{J.fb(a,z,b.$0())}catch(v){y=H.a5(v)
x="Exception "+H.f(y)
throw H.i(x)}}return a},
h9:function(a){var z,y
z=this.a6
z.cF()
z.cF().ib(a)
for(y=a.gbA(),z=this.fy;y.M(0,a.gbB());y=y.B(0,1))C.d.m(z,y,null)
a.gc8()
a.gc8().sc6(a.gc6())
a.gc6()
a.gc6().sc8(a.gc8());--this.U},
i1:function(a){var z,y,x,w,v,u,t,s
for(z=this.k2,y=this.x,x=0;w=this.id,x<w;++x){v=C.d.i(z,x)
u=v.gck(v)
w=this.cy.a
w=(w&&C.a).i(w,u).a
t=w[0]
v.shV(0,(C.b.a9(y*w[1]+2048)<<19>>>0)+(C.b.a9(128*(y*t))+262144))}F.f7(z,0,w,V.dU)
this.k3=0
for(u=0;u<this.id;++u){s=C.d.i(z,u)
V.hX(s.ghV(s),1,0)}},
i0:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.an
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
w=this.hh
w.a=this
this.a6.hL(w,z)},
ec:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.an
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
v[1]=o>g?o:g}w=this.hi
w.b=a
w.a=this
this.a6.hL(w,z)},
bV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j;++this.a
if(this.z===0)return
this.b=0
for(z=0,y=0;z<this.z;++z){y=C.c.b0(y,C.d.i(this.cx.a,z))
this.b=y}if((y&2)!==0)this.es()
if(this.z===0)return
this.c=0
for(x=this.S;!1;x=x.bQ())this.c=C.c.b0(this.c,x.gd4())
y=a.a
w=this.f
v=this.a6
u=v.e1()
t=C.b.v(y*w,u.gj(u))
u=a.a
v=v.e1()
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
y[1]=y[1]*o}}this.ec(a)
if((this.c&2)!==0)this.ej(a)
if((this.b&4)!==0)this.er(a)
for(y=this.z,w=this.cy.a,v=this.db.a,u=a.a,z=0;z<y;++z){if(z>=w.length)return H.a(w,z)
n=w[z]
if(z>=v.length)return H.a(v,z)
m=v[z]
l=n.a
k=l[0]
j=m.a
l[0]=k+u*j[0]
l[1]=l[1]+u*j[1]}this.i0()
this.i1(!1)
if((this.b&32)!==0)this.eq(a)
if((this.b&64)!==0)this.eh(a)
if((this.b&128)!==0)this.ep(a)
if((this.b&16)!==0)this.ef(a)
if((this.b&8)!==0)this.el(a)
if((this.c&1)!==0)this.ek(a)
if((this.b&256)!==0)this.ed(a)
this.ei(a)
this.ee(a)},
ei:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
z.m(0,s,z.i(0,s).B(0,t))}if((this.b&64)!==0)for(y=0;y<this.z;++y){C.d.i(this.cx.a,y).a1(0,64)
C.d.m(z,y,0)}w=this.X
r=this.d
q=this.r
p=q*a.b
o=w*(r*(p*p))
for(y=0;y<this.z;++y)z.m(0,y,o*Math.max(0,Math.min(H.eZ(C.d.i(z,y)),5)-1))
n=a.a/(this.d*q)
for(m=this.bn,w=m.a,r=this.x,l=1.777777*this.e*r*r,x=0;x<this.r2;++x){r=this.ry
if(x>=r.length)return H.a(r,x)
v=r[x]
u=v.a
s=v.b
t=v.c
k=v.e
j=v.d
r=this.cy.a
i=(r&&C.a).i(r,u)
h=C.n.v(n*t*k,C.d.i(z,u).B(0,o*t))
r=j.a
w[0]=h*r[0]
w[1]=h*r[1]
r=this.db.a
r=(r&&C.a).i(r,u).a
r[0]=r[0]-l*w[0]
r[1]=r[1]-l*w[1]
s.bl(m,i,!0)}for(x=0;x<this.k3;++x){w=this.r1
if(x>=w.length)return H.a(w,x)
v=w[x]
u=v.a
s=v.b
t=v.d
j=v.e
g=C.d.i(z,u).B(0,z.i(0,s))
w=n*t
r=j.a
f=C.n.v(w,g)*r[0]
e=C.n.v(w,g)*r[1]
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
ee:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.V
for(y=this.bn,x=y.a,w=this.x,v=1.777777*this.e*w*w,u=0;u<this.r2;++u){w=this.ry
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
l=r.gaR().gA()
k=C.b.I(m,l.gj(l))
w=w[1]
l=r.gaR().gA()
j=C.b.I(w,l.gk(l))
l=this.db.a
i=(l&&C.a).i(l,s)
l=r.gbz().bu(0).v(0,j)
w=r.gbC()
w=l.B(0,w.gj(w))
l=i.a
h=w.I(0,l[0])
w=r.gbz().v(0,k)
m=r.gbC()
g=w.B(0,m.gk(m)).I(0,l[1])
m=o.a
f=h.v(0,m[0]).B(0,g.v(0,m[1]))
if(f.M(0,0)){w=z*q*p
x[0]=C.b.v(w,f)*m[0]
x[1]=C.b.v(w,f)*m[1]
l[0]=l[0]+v*x[0]
l[1]=l[1]+v*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.bl(y,n,!0)}}for(u=0;u<this.k3;++u){x=this.r1
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
er:function(a){var z,y,x
for(z=0;z<this.z;++z){C.d.i(this.cx.a,z).a1(0,4)
y=this.db.a
x=y.length
if(z>=x)return H.a(y,z)
y=y[z].a
y[0]=0
y[1]=0}},
ej:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
for(z=this.S,y=this.bn,x=this.hj,w=this.hk,v=y.a,u=this.hl,t=u.a,s=t.a,u=u.b,r=this.hm,q=r.a.a,p=r.b;!1;z=z.bQ()){z.gd4().a1(0,2)
z.iJ()
o=C.b.v(a.a,z.gbz())
w.a=Math.sin(o)
w.b=Math.cos(o)
G.l(w,z.gf3(),x)
n=z.gbC().gcc()
o=n.length
if(1>=o)return H.a(n,1)
v[1]=n[1]
v[0]=n[0]
y.C(0,a.a)
y.q(0,z.gf3())
y.n(x)
s[1]=v[1]
s[0]=v[0]
u.a=w.a
u.b=w.b
o=z.gcb()
m=z.gcb()
l=o.gcq()
k=m.gcq()
j=C.b.v(u.b,l.gA())
i=C.b.v(u.a,l.gcH())
k.scH(C.b.v(u.a,l.gA())+C.b.v(u.b,l.gcH()))
k.sA(j-i)
G.am(u,o.gad(),m.gad())
m.gad().q(0,t)
m=a.b
q[0]=m*s[0]
q[1]=m*s[1]
p.a=m*u.a
p.b=m*(u.b-1)
for(h=z.gbA();h.M(0,z.gbB());h=h.B(0,1)){o=this.cy.a
o=(o&&C.a).i(o,h)
m=this.db.a
G.r(r,o,(m&&C.a).i(m,h))}}},
ef:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=a6.b*this.a0
for(y=0;y<this.y2;++y){x=C.d.i(this.T,y)
x.ghp().a1(0,16)
w=x.gaW()
v=x.gaX()
u=x.gcl()
t=x.giE()
s=x.giF()
r=x.giG()
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
f=t.G(p).B(0,s.G(o)).B(0,r.G(n))
e=Math.sqrt(C.c.cA(1,g.v(0,g).B(0,f.v(0,f))))
g=g.v(0,e)
f=f.v(0,e)
d=C.b.v(z,x.gez())
c=f.v(0,t.gj(t)).I(0,g.v(0,t.gk(t)))
b=g.v(0,t.gj(t)).B(0,f.v(0,t.gk(t)))
a=f.v(0,s.gj(s)).I(0,g.v(0,s.gk(s)))
a0=g.v(0,s.gj(s)).B(0,f.v(0,s.gk(s)))
a1=f.v(0,r.gj(r)).I(0,g.v(0,r.gk(r)))
a2=g.v(0,r.gj(r)).B(0,f.v(0,r.gk(r)))
m=this.db.a
a3=(m&&C.a).i(m,w)
m=this.db.a
a4=(m&&C.a).i(m,v)
m=this.db.a
a5=(m&&C.a).i(m,u)
m=a3.a
m[0]=m[0]+C.b.v(d,c.I(0,q[0]-i))
m[1]=m[1]+C.b.v(d,b.I(0,q[1]-h))
q=a4.a
q[0]=q[0]+C.b.v(d,a.I(0,l[0]-i))
q[1]=q[1]+C.b.v(d,a0.I(0,l[1]-h))
l=a5.a
l[0]=l[0]+C.b.v(d,a1.I(0,j[0]-i))
l[1]=l[1]+C.b.v(d,a2.I(0,j[1]-h))}},
el:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=a.b*this.a5
for(y=this.y1,x=0;x<this.x1;++x){w=C.d.i(y,x)
w.ghp().a1(0,8)
v=w.gaW()
u=w.gaX()
t=this.cy.a
s=(t&&C.a).i(t,v)
t=this.cy.a
t=(t&&C.a).i(t,u).a
r=t[0]
q=s.a
p=r-q[0]
o=t[1]-q[1]
n=w.giq()
m=Math.sqrt(p*p+o*o)
if(m===0)m=17976931348623157e292
l=C.b.v(z,w.gez())
k=C.b.v(l,n.I(0,m))/m*p
j=C.b.v(l,n.I(0,m))/m*o
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
ep:function(a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
this.sfM(this.cs(this.dy,V.cW(),E.b))
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
x[1]=x[1]+o*n[1]}}x=this.ac
n=this.r*a0.b
m=x*n
l=this.ar*n
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
h=C.n.v(m,k.I(0,2))
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
eq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.ab
for(y=this.bn,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.a(u,v)
t=u[v]
s=t.a
C.d.i(this.cx.a,s).a1(0,32)
r=t.b
q=t.c
p=t.e
u=this.cy.a
o=(u&&C.a).i(u,s)
u=this.db.a
n=(u&&C.a).i(u,s)
u=o.a
m=u[0]
l=r.gaR().gA()
k=C.b.I(m,l.gj(l))
u=u[1]
l=r.gaR().gA()
j=C.b.I(u,l.gk(l))
l=r.gbz().bu(0).v(0,j)
u=r.gbC()
u=l.B(0,u.gj(u))
l=n.a
i=u.I(0,l[0])
u=r.gbz().v(0,k)
m=r.gbC()
h=u.B(0,m.gk(m)).I(0,l[1])
m=z*p*q
x[0]=C.n.v(m,i)
x[1]=C.n.v(m,h)
l[0]=l[0]+w*x[0]
l[1]=l[1]+w*x[1]
x[0]=-x[0]
x[1]=-x[1]
r.bl(y,o,!0)}for(v=0;v<this.k3;++v){x=this.r1
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
eh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.aI*(this.r*a.b)
for(y=this.bn,x=this.x,w=1.777777*this.e*x*x,x=y.a,v=0;v<this.r2;++v){u=this.ry
if(v>=u.length)return H.a(u,v)
t=u[v]
s=t.a
C.d.i(this.cx.a,s).a1(0,64)
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
q.bl(y,o,!0)}}for(v=0;v<this.k3;++v){x=this.r1
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
l=this.aI*(r-0.25)
x=n.a
j=l*x[0]
i=l*x[1]
x=m.a
x[0]=x[0]-j
x[1]=x[1]-i
x=k.a
x[0]=x[0]+j
x[1]=x[1]+i}}}},
ek:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.fr
if(z==null)z=new Float64Array(this.Q)
this.fr=z
y=a.b*this.az
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
v=(v&&C.k).i(v,t)
p=this.fr
p=(p&&C.k).i(p,s)
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
ed:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=this.fx
z.sdA(0,this.cs(z.a,V.eY(),V.au))
y=C.b.a9(256*this.aA)
for(x=0;x<this.k3;++x){z=this.r1
if(x>=z.length)return H.a(z,x)
w=z[x]
v=w.a
u=w.b
C.d.i(this.cx.a,v).a1(0,C.d.i(this.cx.a,u)).a1(0,256)
z=this.fx.a
t=(z&&C.a).i(z,v)
z=this.fx.a
z=(z&&C.a).i(z,u).a
s=z[0]
r=t.a
q=C.c.bk(C.c.a9(y*(s-r[0])),8)
p=C.c.bk(C.c.a9(y*(z[1]-r[1])),8)
o=C.c.bk(C.c.a9(y*(z[2]-r[2])),8)
n=C.c.bk(C.c.a9(y*(z[3]-r[3])),8)
r[0]=r[0]+q
r[1]=r[1]+p
r[2]=r[2]+o
r[3]=r[3]+n
z[0]=z[0]-q
z[1]=z[1]-p
z[2]=z[2]-o
z[3]=z[3]-n}},
es:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=P.aB(this.z,0,!1,P.w)
for(y=this.a6,x=0;x<this.z;++x){w=C.d.i(this.cx.a,x)
w.a1(0,2)
v=y.cF()
w.a1(0,512)
v.ia(x)
C.a.m(z,x,-1)}for(y=this.k2,u=0;t=this.id,u<t;++u){s=C.d.i(y,u)
s.sck(0,C.a.i(z,s.gck(s)))}for(x=0;x<t;++x)if(V.hW(C.d.i(y,x))){--t
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
if(typeof n!=="number")return n.M()
if(n>=0){n=o.b
if(typeof n!=="number")return n.M()
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
if(typeof n!=="number")return n.M()
if(n<0){--t
if(t<0||t>=p)return H.a(y,t)
r=y[t];(y&&C.a).m(y,t,o)
y=this.ry;(y&&C.a).m(y,x,r);--x}}this.r2=t
for(y=this.y1,u=0;t=this.x1,u<t;++u){m=C.d.i(y,u)
m.saW(C.a.i(z,m.gaW()))
m.saX(C.a.i(z,m.gaX()))}for(x=0;x<t;++x){p=C.d.i(y,x)
if(p.gaW().M(0,0)||p.gaX().M(0,0)){--t
r=y.i(0,t)
y.m(0,t,y.i(0,x))
y.m(0,x,r);--x}}this.x1=t
for(u=0;t=this.y2,u<t;++u){l=C.d.i(this.T,u)
l.saW(C.a.i(z,l.gaW()))
l.saX(C.a.i(z,l.gaX()))
l.scl(C.a.i(z,l.gcl()))}for(x=0;x<t;++x){y=C.d.i(this.T,x)
if(y.gaW().M(0,0)||y.gaX().M(0,0)||y.gcl().M(0,0)){--t
r=C.d.i(this.T,t)
y=this.T
y.m(0,t,C.d.i(y,x))
C.d.m(this.T,x,r);--x}}this.y2=t
for(k=this.S;!1;k=k.bQ()){for(x=k.gbA(),j=0,i=0,h=!1;x.M(0,k.gbB());x=x.B(0,1)){t=C.a.i(z,x)
if(typeof t!=="number")return t.i6()
if(t>=0){j=Math.min(j,t)
i=Math.max(i,t+1)}else h=!0}if(j<i){k.sbA(j)
k.sbB(i)
if(h){k.gd4().a1(0,2)
k.sfK(!0)}}else{k.sbA(0)
k.sbB(0)
if(k.gig())k.sfJ(!0)}}this.z=0
for(k=this.S;!1;k=g){g=k.bQ()
if(k.gfJ())this.h9(k)
else k.gfK()}},
e2:function(){var z=this.fx
z.sdA(0,this.cs(z.a,z.b,V.au))
return this.fx.a},
H:{
hX:function(a,b,c){return a.B(0,c<<19>>>0).B(0,b<<7>>>0)},
lk:[function(){return new E.b(new Float64Array(2))},"$0","cW",0,0,28],
li:[function(){return new P.c()},"$0","jX",0,0,29],
lj:[function(){var z=new Int8Array(4)
z[0]=127
z[1]=127
z[2]=127
z[3]=50
return new V.au(z)},"$0","eY",0,0,30]}},
et:{"^":"c;a",
dX:function(a){var z=this.a
if(!z.cg(a))z.m(0,a,this.cD(a))
return z.i(0,a)},
cD:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.h(z,[E.b])
for(z=y.length,x=0;x<z;++x)C.a.m(y,x,new E.b(new Float64Array(2)))
return y}},
hR:{"^":"a1;a,b,c,d",
a8:function(){return new E.b(new Float64Array(2))},
$asa1:function(){return[E.b]}},
hS:{"^":"a1;a,b,c,d",
a8:function(){return new E.ae(new Float64Array(3))},
$asa1:function(){return[E.ae]}},
hO:{"^":"a1;a,b,c,d",
a8:function(){return new E.a0(new Float64Array(4))},
$asa1:function(){return[E.a0]}},
hP:{"^":"a1;a,b,c,d",
a8:function(){return new E.aj(new Float64Array(9))},
$asa1:function(){return[E.aj]}},
hN:{"^":"a1;a,b,c,d",
a8:function(){var z=new Float64Array(2)
return new V.S(new E.b(z),new E.b(new Float64Array(2)))},
$asa1:function(){return[V.S]}},
hQ:{"^":"a1;a,b,c,d",
a8:function(){return new G.A(0,1)},
$asa1:function(){return[G.A]}},
y:{"^":"a9;$ti"},
hF:{"^":"y;d,0a,0b,0c",
a8:function(){return new V.bj(0,new V.O(),new V.O(),0,0,V.R(),0,0,0,0,0,this.d,V.R())},
$asa8:function(){return[V.bj]},
$asy:function(){return[V.bj]},
$asa9:function(){return[V.bj]}},
hB:{"^":"y;d,0a,0b,0c",
a8:function(){return new V.b4(0,new V.O(),new V.O(),0,0,V.R(),0,0,0,0,0,this.d,V.R())},
$asa8:function(){return[V.b4]},
$asy:function(){return[V.b4]},
$asa9:function(){return[V.b4]}},
hE:{"^":"y;d,0a,0b,0c",
a8:function(){return new V.bi(0,new V.O(),new V.O(),0,0,V.R(),0,0,0,0,0,this.d,V.R())},
$asa8:function(){return[V.bi]},
$asy:function(){return[V.bi]},
$asa9:function(){return[V.bi]}},
hC:{"^":"y;d,0a,0b,0c",
a8:function(){return new V.b7(0,new V.O(),new V.O(),0,0,V.R(),0,0,0,0,0,this.d,V.R())},
$asa8:function(){return[V.b7]},
$asy:function(){return[V.b7]},
$asa9:function(){return[V.b7]}},
hD:{"^":"y;d,0a,0b,0c",
a8:function(){return new V.b8(0,new V.O(),new V.O(),0,0,V.R(),0,0,0,0,0,this.d,V.R())},
$asa8:function(){return[V.b8]},
$asy:function(){return[V.b8]},
$asa9:function(){return[V.b8]}},
hz:{"^":"y;d,0a,0b,0c",
a8:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.b9(new E.b(z),new E.b(y),new E.b(x),new E.b(w),!1,!1,new E.b(new Float64Array(2)),C.q,0)
z.b=0.01
return new V.b2(z,0,new V.O(),new V.O(),0,0,V.R(),0,0,0,0,0,this.d,V.R())},
$asa8:function(){return[V.b2]},
$asy:function(){return[V.b2]},
$asa9:function(){return[V.b2]}},
hA:{"^":"y;d,0a,0b,0c",
a8:function(){var z,y,x,w
z=new Float64Array(2)
y=new Float64Array(2)
x=new Float64Array(2)
w=new Float64Array(2)
z=new V.b9(new E.b(z),new E.b(y),new E.b(x),new E.b(w),!1,!1,new E.b(new Float64Array(2)),C.q,0)
z.b=0.01
return new V.b3(z,0,new V.O(),new V.O(),0,0,V.R(),0,0,0,0,0,this.d,V.R())},
$asa8:function(){return[V.b3]},
$asy:function(){return[V.b3]},
$asa9:function(){return[V.b3]}},
fN:{"^":"c;a,b,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,fy",
sft:function(a){this.Q=H.j(a,"$isy",[V.bj],"$asy")},
sf2:function(a){this.ch=H.j(a,"$isy",[V.b4],"$asy")},
sfc:function(a){this.cx=H.j(a,"$isy",[V.bi],"$asy")},
sfe:function(a){this.cy=H.j(a,"$isy",[V.b7],"$asy")},
sfi:function(a){this.db=H.j(a,"$isy",[V.b8],"$asy")},
sf4:function(a){this.dx=H.j(a,"$isy",[V.b2],"$asy")},
sf5:function(a){this.dy=H.j(a,"$isy",[V.b3],"$asy")},
cG:function(a){var z,y,x,w
z=this.y
if(!z.cg(a)){y=new Array(a)
y.fixed$length=Array
x=H.h(y,[E.b])
for(w=0;C.c.M(w,a);++w)C.a.m(x,w,new E.b(new Float64Array(2)))
z.m(0,a,x)}return z.i(0,a)},
$iskV:1,
H:{
fO:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=P.w
y=P.bx(null,null,null,z,P.dB)
x=P.bx(null,null,null,z,[P.d,P.w])
w=P.bx(null,null,null,z,[P.d,E.b])
v=E.b
u=new Array(a6)
u.fixed$length=Array
t=[v]
u=H.h(u,t)
s=new Array(a7)
s.fixed$length=Array
t=new V.hR(u,0,a6,H.h(s,t))
t.b4(a6,a7,v)
v=E.ae
s=new Array(a6)
s.fixed$length=Array
u=[v]
s=H.h(s,u)
r=new Array(a7)
r.fixed$length=Array
u=new V.hS(s,0,a6,H.h(r,u))
u.b4(a6,a7,v)
v=E.a0
r=new Array(a6)
r.fixed$length=Array
s=[v]
r=H.h(r,s)
q=new Array(a7)
q.fixed$length=Array
s=new V.hO(r,0,a6,H.h(q,s))
s.b4(a6,a7,v)
v=V.S
q=new Array(a6)
q.fixed$length=Array
r=[v]
q=H.h(q,r)
p=new Array(a7)
p.fixed$length=Array
r=new V.hN(q,0,a6,H.h(p,r))
r.b4(a6,a7,v)
v=G.A
p=new Array(a6)
p.fixed$length=Array
q=[v]
p=H.h(p,q)
o=new Array(a7)
o.fixed$length=Array
q=new V.hQ(p,0,a6,H.h(o,q))
q.b4(a6,a7,v)
v=E.aj
o=new Array(a6)
o.fixed$length=Array
p=[v]
o=H.h(o,p)
n=new Array(a7)
n.fixed$length=Array
p=new V.hP(o,0,a6,H.h(n,p))
p.b4(a6,a7,v)
v=new Float64Array(2)
o=new Float64Array(2)
v=new V.c9(new E.b(v),new E.b(o),new E.b(new Float64Array(2)),0,0,0)
o=new Float64Array(2)
n=new Float64Array(2)
o=new V.c9(new E.b(o),new E.b(n),new E.b(new Float64Array(2)),0,0,0)
n=new Float64Array(2)
m=new Float64Array(2)
n=new V.c9(new E.b(n),new E.b(m),new E.b(new Float64Array(2)),0,0,0)
m=new Array(3)
m.fixed$length=Array
m=H.h(m,[V.c9])
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
y=new V.fN(t,u,s,p,r,q,y,x,w,new V.fT(new V.jx(v,o,n,m,0,new E.b(l),new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),new E.b(e),new E.b(d),new E.b(c)),b,a,new E.b(a0),new E.b(a1),new E.b(a2),new E.b(new Float64Array(2))))
x=new V.hF(y)
x.aO(10,V.bj)
y.sft(x)
x=new V.hB(y)
x.aO(10,V.b4)
y.sf2(x)
x=new V.hE(y)
x.aO(10,V.bi)
y.sfc(x)
x=new V.hC(y)
x.aO(10,V.b7)
y.sfe(x)
x=new V.hD(y)
x.aO(10,V.b8)
y.sfi(x)
x=new V.hz(y)
x.aO(10,V.b2)
y.sf4(x)
x=new V.hA(y)
x.aO(10,V.b3)
y.sf5(x)
x=V.b6()
w=V.b6()
v=new Float64Array(2)
u=new Float64Array(2)
t=V.e1()
s=new Float64Array(2)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=new Float64Array(2)
n=new Float64Array(2)
m=new Array(2)
m.fixed$length=Array
l=[V.T]
m=H.h(m,l)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=new Float64Array(2)
f=new Float64Array(2)
e=new Array(2)
e.fixed$length=Array
e=H.h(e,l)
d=new Array(2)
d.fixed$length=Array
l=H.h(d,l)
d=new Float64Array(2)
c=new Float64Array(2)
b=new Int8Array(4)
a=new Float64Array(2)
a0=new Float64Array(2)
a1=V.h2()
a2=new Float64Array(2)
C.a.m(m,0,new V.T(new E.b(a2),new V.V(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(m,1,new V.T(new E.b(a2),new V.V(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(e,0,new V.T(new E.b(a2),new V.V(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(e,1,new V.T(new E.b(a2),new V.V(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(l,0,new V.T(new E.b(a2),new V.V(new Int8Array(4))))
a2=new Float64Array(2)
C.a.m(l,1,new V.T(new E.b(a2),new V.V(new Int8Array(4))))
y.fr=new V.fB(y,new V.dp(x,w,new G.G(new E.b(v),new G.A(0,1)),new G.G(new E.b(u),new G.A(0,1)),!1),t,new V.dq(new E.b(s),new E.b(r),0,0),new E.b(q),new G.G(new E.b(p),new G.A(0,1)),new E.b(o),new E.b(n),new V.eB(0,0),new V.eB(0,0),m,new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),e,l,new E.b(d),new E.b(c),new V.V(b),new E.b(a),new E.b(a0),a1)
x=V.e1()
w=V.b6()
v=V.b6()
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
y.fx=new V.iy(x,new V.dp(w,v,new G.G(new E.b(u),new G.A(0,1)),new G.G(new E.b(t),new G.A(0,1)),!1),new G.G(new E.b(s),new G.A(0,1)),new G.G(new E.b(r),new G.A(0,1)),new V.dq(new E.b(q),new E.b(p),0,0),new V.id(new E.b(o),new E.b(n),new E.b(m),new E.b(l),new E.b(k),new E.b(j),new E.b(i),new E.b(h),new E.b(g),new E.b(f),new E.b(e),new E.b(d),new G.G(new E.b(c),new G.A(0,1)),new G.G(new E.b(b),new G.A(0,1)),new E.b(a),new E.b(a0)),z,new G.aP(new E.b(a1),new E.b(a2),new E.b(a3),0,0,0),new G.aP(new E.b(a4),new E.b(a5),new E.b(new Float64Array(2)),0,0,0),y)
y.z=y
return y}}},
a9:{"^":"c;0a,$ti",
sdf:function(a){this.a=H.j(a,"$isd",[H.aq(this,"a9",0)],"$asd")},
aO:function(a,b){this.b=0
this.sdf(null)
this.b=0
this.c=0
this.dC(a)},
dC:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=H.h(z,[H.aq(this,"a9",0)])
z=this.a
if(z!=null)C.a.al(y,0,this.c,z,0)
for(z=y.length,x=0;x<z;++x)C.a.m(y,x,this.a8())
this.sdf(y)
this.c=z},
l:function(){var z,y
z=this.b
y=this.c
if(z>=y)this.dC(y*2)
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.a(z,y)
return z[y]},
$isa8:1},
a1:{"^":"c;$ti",
b4:function(a,b,c){var z,y
for(z=this.a,y=0;y<a;++y)C.a.m(z,y,this.a8())},
l:function(){var z,y
z=this.a
y=this.b++
if(y<0||y>=z.length)return H.a(z,y)
return z[y]}}}],["","",,F,{"^":"",
f7:function(a,b,c,d){var z
H.j(a,"$isd",[d],"$asd")
P.dX(b,c,a.length,null,null,null)
z=P.hq(H.cJ(a,b,c,H.n(a,0)),!0,d)
H.il(z,J.jL(),H.n(z,0))
C.a.bd(a,b,c,z)}}],["","",,N,{"^":"",fs:{"^":"fK;c,a,b",
bE:function(a,b,c){var z,y,x,w,v
H.j(a,"$isd",[E.b],"$asd")
this.bG(c)
for(z=J.X(a),y=this.b,x=0;x<b;++x){w=z.i(a,x)
v=z.i(a,x)
y.bc(H.e(w,"$isb"),H.e(v,"$isb"))}y=this.c
y.beginPath()
C.m.dM(y,J.Y(z.i(a,0)),J.Z(z.i(a,0)))
for(x=1;x<b;++x)C.m.cp(y,J.Y(z.i(a,x)),J.Z(z.i(a,x)))
C.m.cp(y,J.Y(z.i(a,0)),J.Z(z.i(a,0)))
y.closePath()},
am:function(a,b,c){var z,y
this.bG(c)
z=this.b
z.bc(a,a)
z.bc(b,b)
z=this.c
z.beginPath()
y=a.a
C.m.dM(z,y[0],y[1])
y=b.a
C.m.cp(z,y[0],y[1])
z.closePath()
z.stroke()},
hb:function(a,b,c,d){this.bD(a,b*this.b.c,c)
this.c.stroke()},
ha:function(a,b,c){return this.hb(a,b,c,null)},
bD:function(a,b,c){var z,y
this.bG(c)
this.b.bc(a,a)
z=this.c
z.beginPath()
y=a.a
z.arc(y[0],y[1],b,0,6.283185307179586,!0)
z.closePath()},
bG:function(a){var z,y,x,w
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
hd:function(a,b,c,d){H.j(a,"$isd",[E.b],"$asd")
H.j(c,"$isd",[V.au],"$asd")
throw H.i("Unimplemented")},
he:function(a,b,c,d){H.j(a,"$isd",[E.b],"$asd")
H.j(c,"$isd",[V.au],"$asd")
throw H.i("Unimplemented")}}}],["","",,G,{"^":"",bR:{"^":"c;j:a>,k:b>,c",
av:function(a,b,c){this.a=C.c.a9(C.b.aJ(a*255))
this.b=C.c.a9(C.b.aJ(b*255))
this.c=C.c.a9(C.b.aJ(c*255))}},A:{"^":"c;a,A:b<",
J:function(a){this.a=Math.sin(a)
this.b=Math.cos(a)
return this},
N:function(a){this.a=a.a
this.b=a.b
return this},
u:function(a){return"Rot(s:"+H.f(this.a)+", c:"+H.f(this.b)+")"},
H:{
am:function(a,b,c){var z,y,x,w
H.e(b,"$isb")
H.e(c,"$isb")
z=a.a
y=b.a
x=y[0]
w=a.b
y=y[1]
c.sj(0,w*x-z*y)
c.sk(0,z*x+w*y)},
l:function(a,b,c){var z,y
H.e(b,"$isb")
z=a.b
y=b.a
c.sj(0,z*y[0]-a.a*y[1])
c.sk(0,a.a*y[0]+a.b*y[1])},
aa:function(a,b,c){var z,y
z=a.b
y=b.a
c.sj(0,z*y[0]+a.a*y[1])
c.sk(0,-a.a*y[0]+a.b*y[1])}}},aP:{"^":"c;a,b,A:c<,d,t:e<,f",
st:function(a){this.e=H.br(a)},
u:function(a){return"Sweep:\nlocalCenter: "+this.a.u(0)+"\n"+("c0: "+this.b.u(0)+", c: "+this.c.u(0)+"\n")+("a0: "+H.f(this.d)+", a: "+H.f(this.e)+"\n")+("alpha0: "+H.f(this.f))},
W:function(){var z=6.283185307179586*C.n.aJ(this.d/6.283185307179586)
this.d-=z
this.e-=z},
N:function(a){this.a.h(a.a)
this.b.h(a.b)
this.c.h(a.c)
this.d=a.d
this.e=a.e
this.f=a.f
return this},
aF:function(a,b){var z,y,x,w
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
aT:function(a){var z,y,x,w,v
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
this.f=a}},cK:{"^":"c;a"},G:{"^":"c;a,b",
N:function(a){this.a.h(a.a)
this.b.N(a.b)
return this},
u:function(a){return"XForm:\n"+("Position: "+this.a.u(0)+"\n")+("R: \t"+this.b.u(0)+"\n")},
H:{
z:function(a,b,c){var z,y,x,w,v,u
H.e(b,"$isb")
H.e(c,"$isb")
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
r:function(a,b,c){var z,y,x,w
H.e(b,"$isb")
H.e(c,"$isb")
z=a.b
y=z.b
x=b.a
w=a.a.a
c.sj(0,y*x[0]-z.a*x[1]+w[0])
c.sk(0,z.a*x[0]+z.b*x[1]+w[1])},
cM:function(a,b,c){var z,y,x,w
z=b.a
y=a.a.a
x=z[0]-y[0]
w=z[1]-y[1]
y=a.b
c.sj(0,y.b*x+y.a*w)
c.sk(0,-y.a*x+y.b*w)},
eg:function(a,b,c){var z,y,x,w,v,u,t
z=a.b
y=b.b
x=c.b
w=z.b
v=y.a
u=z.a
t=y.b
x.a=w*v-u*t
x.b=w*t+z.a*y.a
y=$.$get$cL()
y.h(b.a)
y.n(a.a)
G.aa(z,$.$get$cL(),c.a)}}},iJ:{"^":"c;",
bc:function(a,b){var z,y,x,w,v,u,t,s
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
b.F(y*x+u+t[0],v-z*x+-t[1])}}}],["","",,X,{"^":"",ft:{"^":"iJ;0a,b,c,d"}}],["","",,A,{"^":"",
ce:function(a){var z,y
z=C.k.hq(H.j(a,"$isx",[P.c],"$asx"),0,new A.k3(),P.w)
if(typeof z!=="number")return H.J(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k3:{"^":"o:23;",
$2:function(a,b){var z,y
H.k(a)
z=J.aZ(b)
if(typeof a!=="number")return a.B()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,E,{"^":"",a0:{"^":"c;a",
be:function(a,b,c,d){var z=this.a
z[3]=d
z[2]=c
z[1]=b
z[0]=a},
h:function(a){var z,y
z=H.e(a,"$isa0").a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
u:function(a){return"[0] "+this.aZ(0).u(0)+"\n[1] "+this.aZ(1).u(0)+"\n"},
m:function(a,b,c){C.k.m(this.a,b,c)},
au:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.a0){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
ga2:function(a){return A.ce(this.a)},
aZ:function(a){var z,y,x
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
y=new E.a0(z)
y.h(this)
x=b.gik()
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
bL:function(){var z,y,x,w,v,u,t
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
z=H.e(a,"$isa0").a
y=this.a
y[0]=C.b.I(y[0],z.i(0,0))
y[1]=C.b.I(y[1],z.i(0,1))
y[2]=C.b.I(y[2],z.i(0,2))
y[3]=C.b.I(y[3],z.i(0,3))},
L:function(){var z=this.a
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]},
cu:function(a,b){var z,y,x,w,v,u,t
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
H:{
dO:function(a,b,c){var z,y,x,w,v,u,t,s
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
b.sk(0,s*(y*t-w*u))}}},aj:{"^":"c;a",
b1:function(a,b,c,d,e,f,g,h,i){var z=this.a
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
z=H.e(a,"$isaj").a
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
u:function(a){return"[0] "+this.aZ(0).u(0)+"\n[1] "+this.aZ(1).u(0)+"\n[2] "+this.aZ(2).u(0)+"\n"},
m:function(a,b,c){C.k.m(this.a,b,c)},
au:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.aj){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
ga2:function(a){return A.ce(this.a)},
aZ:function(a){var z,y,x
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
return new E.ae(z)},
B:function(a,b){var z,y,x
z=new Float64Array(9)
y=new E.aj(z)
y.h(this)
x=b.gil()
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
z=H.e(a,"$isaj").a
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
L:function(){var z=this.a
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
z[4]=-z[4]
z[5]=-z[5]
z[6]=-z[6]
z[7]=-z[7]
z[8]=-z[8]},
H:{
bC:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
dP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
b.sae(0,m*(y*-(k*t-z*u)+x*-(z*v-l*t)+w*-(l*u-k*v)))}}},b:{"^":"c;cc:a<",
F:function(a,b){var z=this.a
z[0]=a
z[1]=b},
K:function(){var z=this.a
z[0]=0
z[1]=0},
h:function(a){var z,y
z=H.e(a,"$isb").a
y=this.a
y[1]=z[1]
y[0]=z[0]},
u:function(a){var z=this.a
return"["+H.f(z[0])+","+H.f(z[1])+"]"},
au:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
ga2:function(a){return A.ce(this.a)},
B:function(a,b){var z=new E.b(new Float64Array(2))
z.h(this)
z.q(0,b)
return z},
m:function(a,b,c){C.k.m(this.a,b,c)},
gD:function(a){return Math.sqrt(this.gO())},
gO:function(){var z,y
z=this.a
y=z[0]
z=z[1]
return y*y+z*z},
W:function(){var z,y,x
z=Math.sqrt(this.gO())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
return z},
bK:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=a.a
w=y-x[0]
v=z[1]-x[1]
return w*w+v*v},
G:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]},
w:function(a){var z,y
z=H.e(a,"$isb").a
y=this.a
return y[0]*z[1]-y[1]*z[0]},
P:function(a,b){var z
H.e(b,"$isb")
z=this.a
b.F(-a*z[1],a*z[0])
return b},
q:function(a,b){var z,y
z=H.e(b,"$isb").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]},
n:function(a){var z,y
z=H.e(a,"$isb").a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]},
C:function(a,b){var z,y
z=this.a
y=z[1]
if(typeof b!=="number")return H.J(b)
z[1]=y*b
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
H:{
eu:function(){return new E.b(new Float64Array(2))}}},ae:{"^":"c;a",
bU:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
K:function(){var z=this.a
z[2]=0
z[1]=0
z[0]=0},
h:function(a){var z,y
z=H.e(a,"$isae").a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
u:function(a){var z=this.a
return"["+H.f(z[0])+","+H.f(z[1])+","+H.f(z[2])+"]"},
au:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof E.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
ga2:function(a){return A.ce(this.a)},
B:function(a,b){var z=new E.ae(new Float64Array(3))
z.h(this)
z.q(0,b)
return z},
m:function(a,b,c){C.k.m(this.a,b,c)},
gD:function(a){return Math.sqrt(this.gO())},
gO:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
W:function(){var z,y,x
z=Math.sqrt(this.gO())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
q:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
n:function(a){var z,y
z=H.e(a,"$isae").a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
C:function(a,b){var z=this.a
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
sae:function(a,b){this.a[2]=b
return b},
gj:function(a){return this.a[0]},
gk:function(a){return this.a[1]}}}],["","",,Q,{"^":"",fP:{"^":"c;",
ex:["eC",function(a,b){var z,y,x,w,v,u,t,s
z=this.c
z.aM(0)
y=this.b
x=y.id.a
x.aM(0)
w=y.k1.a
w.aM(0)
v=y.a
if((v&1)===1){v=y.b
v.a.cw(v)
v=y.a&=4294967294}y.a=v|2
v=y.go
v.a=0.016666666666666666
v.d=10
v.e=10
v.b=60
v.c=y.cx*0.016666666666666666
v.f=y.cy
u=y.fr.b
t=w.gaH()
s=$.M
if(typeof s!=="number")return H.J(s)
u.at(C.c.aw(t*1000,s))
w.aM(0)
y.b.fW()
s=y.fr.c
t=w.gaH()
u=$.M
if(typeof u!=="number")return H.J(u)
s.at(C.c.aw(t*1000,u))
if(y.dy&&v.a>0){w.aM(0)
y.fx.bV(v)
u=y.fr.d
t=w.gaH()
s=$.M
if(typeof s!=="number")return H.J(s)
u.at(C.c.aw(t*1000,s))
w.aM(0)
y.bV(v)
s=y.fr.e
t=w.gaH()
u=$.M
if(typeof u!=="number")return H.J(u)
s.at(C.c.aw(t*1000,u))}if(y.db&&v.a>0){w.aM(0)
y.em(v)
u=y.fr.z
w=w.gaH()
t=$.M
if(typeof t!=="number")return H.J(t)
u.at(C.c.aw(w*1000,t))}if(v.a>0)y.cx=v.b
if((y.a&4)===4)y.fT()
y.a&=4294967293
w=y.fr.a
x=x.gaH()
v=$.M
if(typeof v!=="number")return H.J(v)
w.at(C.c.aw(x*1000,v))
z=z.gaH()
v=$.M
if(typeof v!=="number")return H.J(v)
this.Q=C.c.aw(z*1e6,v)
v=this.f;(v&&C.m).fU(v,0,0,900,600)
y.hc()
y=this.y
if(typeof y!=="number")return y.B()
this.y=y+1
C.a_.dR(window,this.gcP(this))}],
hu:function(){var z,y,x,w
z=H.u(H.e(W.j1("canvas",null),"$isa7"),"$isdh")
z.width=900
z.height=600
this.e=z
y=document
x=y.body;(x&&C.r).ax(x,z)
z=this.e
z.toString
this.f=z.getContext("2d")
w=new E.b(new Float64Array(2))
w.F(450,300)
z=new E.b(new Float64Array(2))
z.h(w)
x=new E.b(new Float64Array(2))
x.h(w)
x=new X.ft(z,20,x)
x.a=!0
x.c=this.d
this.r=x
x=new N.fs(this.f,2,x)
this.x=x
this.b.Q=x
this.y=0
this.z=C.w.cr(y,"#fps-counter")
this.ch=C.w.cr(y,"#world-step-time")
P.ee(P.du(0,0,0,0,0,1),new Q.fQ(this))
P.ee(P.du(0,0,0,200,0,0),new Q.fR(this))}},fQ:{"^":"o:8;a",
$1:function(a){var z
H.e(a,"$isaF")
z=this.a
J.ck(z.z,J.b_(z.y))
z.y=0}},fR:{"^":"o:8;a",
$1:function(a){var z,y
H.e(a,"$isaF")
z=this.a
y=z.Q
if(y==null)return
J.ck(z.ch,H.f(y/1000)+" ms")}}}],["","",,T,{"^":"",
f3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
z=new Float64Array(2)
y=[V.b0]
x=H.h([],y)
w=V.fO(100,10)
v=V.fM(V.h0())
u=V.iT(4,4)
t=new P.c4(0,0)
if($.M==null){H.c1()
$.M=$.aO}t.bx(0)
s=new P.c4(0,0)
if($.M==null){H.c1()
$.M=$.aO}s.bx(0)
r=new Float64Array(2)
q=new Float64Array(2)
p=new Float64Array(2)
o=P.w
n=[P.d,E.b]
m=P.bx(null,null,null,o,n)
l=new Float64Array(2)
k=new Float64Array(2)
j=new Float64Array(2)
i=new Float64Array(2)
h=new Float64Array(2)
g=V.bU()
f=V.bU()
e=new Float64Array(2)
d=new Float64Array(2)
c=new Array(10)
c.fixed$length=Array
c=H.h(c,y)
b=new P.c4(0,0)
if($.M==null){H.c1()
$.M=$.aO}b.bx(0)
a=V.bU()
a0=V.bU()
a1=new Float64Array(2)
a2=new Float64Array(2)
a3=V.b6()
a4=V.b6()
a5=new Float64Array(2)
a6=new Float64Array(2)
a7=new Float64Array(2)
a8=new Float64Array(2)
a9=new Float64Array(2)
b0=new Float64Array(2)
b1=new Array(2)
b1.fixed$length=Array
y=H.h(b1,y)
b1=new Float64Array(2)
b2=new Float64Array(2)
b3=new Float64Array(2)
b4=new Float64Array(2)
b5=new Float64Array(2)
b6=new Float64Array(2)
b7=new Float64Array(2)
b8=new Float64Array(2)
b9=C.c.a9(C.c.aJ(102))
c0=C.c.a9(C.c.aJ(102))
c1=C.c.a9(C.c.aJ(255))
c2=new Float64Array(2)
c3=new Float64Array(2)
c4=new Float64Array(2)
c5=new Float64Array(2)
n=P.bx(null,null,null,o,n)
o=new E.b(new Float64Array(2))
o.h(new E.b(z))
c6=new V.iO(0,0,0,o,!1,w,0,!1,!1,!1,!1,u,new V.ed(0,0,0,0,0,!1),new G.cK(t),new G.cK(s),new G.bR(0,0,0),new G.G(new E.b(r),new G.A(0,1)),new E.b(q),new E.b(p),new V.et(m),new V.iR(),new V.iS(new V.dY(new E.b(l),0),new E.b(k),new E.b(j)),new V.cE(new E.b(i),new E.b(h),0),new V.dE(0,0,0,0,0,0,g,new V.e2(),new V.bV(0),f,new V.bV(0),new V.dk(e,d,0)),c,new G.cK(b),new V.dE(0,0,0,0,0,0,a,new V.e2(),new V.bV(0),a0,new V.bV(0),new V.dk(a1,a2,0)),new V.is(a3,a4,new G.aP(new E.b(a5),new E.b(a6),new E.b(a7),0,0,0),new G.aP(new E.b(a8),new E.b(a9),new E.b(b0),0,0,0),0),new V.it(C.W,0),new V.ed(0,0,0,0,0,!1),y,new G.aP(new E.b(b1),new E.b(b2),new E.b(b3),0,0,0),new G.aP(new E.b(b4),new E.b(b5),new E.b(b6),0,0,0),0.12,-1,new E.b(b7),new E.b(b8),new G.bR(b9,c0,c1),new E.b(c2),new E.b(c3),new E.b(c4),new E.b(c5),new V.et(n))
c6.cy=!0
c6.db=!0
c6.dy=!0
c6.x=!0
c6.a=4
n=new V.fG(0,c6)
n.d=new V.fF()
n.a=v
c6.b=n
c6.fr=new V.i4(new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0),new V.al(0,0,17976931348623157e292,-17976931348623157e292,0))
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
z=new V.hV(0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,new V.S(new E.b(z),new E.b(y)),new V.fS(!1,0),new V.S(new E.b(v),new E.b(u)),new E.b(t),new G.G(new E.b(s),new G.A(0,1)),new G.G(new E.b(r),new G.A(0,1)),new V.fI(),new V.hU(0,new E.b(q),new E.b(p)),new V.iH(new E.b(o)),new V.ii(new V.cE(new E.b(n),new E.b(m),0),new V.dY(new E.b(l),0),new E.b(k),new E.b(j)),new E.b(i),new G.A(0,1),new G.G(new E.b(h),new G.A(0,1)),new G.G(new E.b(new Float64Array(2)),new G.A(0,1)),new V.hI(0,0,0))
z.X=0.05
z.V=1
z.a0=0.25
z.a5=0.25
z.ab=0.25
z.ac=0.1
z.ar=0.2
z.aI=0.5
z.az=0.5
z.aA=0.5
z.cx=new V.hT()
y=E.b
v=[y]
z.shI(new V.a2(V.cW(),0,v))
z.si3(new V.a2(V.cW(),0,v))
z.sh_(new V.a2(V.eY(),0,[V.au]))
z.si2(new V.a2(V.jX(),0,[P.c]))
c6.fx=z
c6.aP(w.ch,C.o,C.o)
c6.aP(w.cx,C.l,C.o)
c6.aP(w.Q,C.l,C.l)
c6.aP(w.cy,C.q,C.o)
c6.aP(w.db,C.q,C.l)
c6.aP(w.dx,C.A,C.o)
c6.aP(w.dy,C.A,C.l)
w=new P.c4(0,0)
if($.M==null){H.c1()
$.M=$.aO}w.bx(0)
c7=new T.i6(0,x,c6,w,2.5)
z=document
J.ck(C.w.cr(z,"#title"),"Racer")
x=new Float64Array(2)
x=c6.bI(new V.bN(C.e,new E.b(x),0,new E.b(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1))
c7.cy=x
x.k4="Ground"
c8=V.bD()
c9=new V.cu(0.2,0,0,!1,new V.bY(1,65535,0))
c9.a=c8
c9.f=!0
c9.b=T.dC(0.001,!1)
w=new E.b(new Float64Array(2))
w.F(-30,30)
c8.cJ(27,21,w,0.3490658503988659)
x.aV(c9)
c9.b=T.dC(0.2,!1)
w=new E.b(new Float64Array(2))
w.F(20,40)
c8.cJ(27,15,w,-0.6981317007977318)
x.aV(c9)
x=new Float64Array(2)
d0=c6.bI(new V.bN(C.e,new E.b(x),0,new E.b(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1))
d0.k4="Boundary"
c8=V.bD()
c9=new V.cu(0.2,0,0,!1,new V.bY(1,65535,0))
c9.a=c8
x=new E.b(new Float64Array(2))
x.F(-150,-100)
w=new E.b(new Float64Array(2))
w.F(150,-100)
c8.bw(x,w)
d0.aV(c9)
x=new E.b(new Float64Array(2))
x.F(150,-100)
w=new E.b(new Float64Array(2))
w.F(150,100)
c8.bw(x,w)
d0.aV(c9)
x=new E.b(new Float64Array(2))
x.F(150,100)
w=new E.b(new Float64Array(2))
w.F(-150,100)
c8.bw(x,w)
d0.aV(c9)
x=new E.b(new Float64Array(2))
x.F(-150,100)
w=new E.b(new Float64Array(2))
w.F(-150,-100)
c8.bw(x,w)
d0.aV(c9)
w=new T.fu(250,-40,300,500,8.5,7.5,0.6108652381980153,2.792526803190927)
x=new Float64Array(2)
d1=new V.bN(C.e,new E.b(x),0,new E.b(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
d1.a=C.f
x=c6.bI(d1)
w.y=x
x.k4="Car"
x.k1=3
v=new Array(8)
v.fixed$length=Array
d2=H.h(v,[y])
v=new E.b(new Float64Array(2))
v.F(1.5,0)
C.a.m(d2,0,v)
v=new E.b(new Float64Array(2))
v.F(3,2.5)
C.a.m(d2,1,v)
v=new E.b(new Float64Array(2))
v.F(2.8,5.5)
C.a.m(d2,2,v)
v=new E.b(new Float64Array(2))
v.F(1,10)
C.a.m(d2,3,v)
v=new E.b(new Float64Array(2))
v.F(-1,10)
C.a.m(d2,4,v)
v=new E.b(new Float64Array(2))
v.F(-2.8,5.5)
C.a.m(d2,5,v)
v=new E.b(new Float64Array(2))
v.F(-3,2.5)
C.a.m(d2,6,v)
v=new E.b(new Float64Array(2))
v.F(-1.5,0)
C.a.m(d2,7,v)
c8=V.bD()
c8.e8(H.j(d2,"$isd",[y],"$asd"),8,null,null)
x.dv(c8,0.1)
y=new E.b(new Float64Array(2))
v=new E.b(new Float64Array(2))
d3=new V.dZ(y,v,0,!1,0,0,!1,0,0,!1)
d3.a=C.O
d3.c=x
d3.y=!0
v.K()
v=T.c6(c6,250,-40,300,8.5)
w.z=v
d3.d=v.a
y.F(-3,0.75)
c6.bJ(d3)
v=T.c6(c6,250,-40,300,8.5)
w.Q=v
d3.d=v.a
y.F(3,0.75)
c6.bJ(d3)
v=T.c6(c6,250,-40,500,7.5)
w.ch=v
d3.d=v.a
y.F(-3,8.5)
w.cy=H.u(c6.bJ(d3),"$iscF")
v=T.c6(c6,250,-40,500,7.5)
w.cx=v
d3.d=v.a
y.F(3,8.5)
w.db=H.u(c6.bJ(d3),"$iscF")
c7.db=w
c7.cx=0
w=W.bh
y={func:1,ret:-1,args:[w]}
W.cO(z,"keydown",H.m(c7.gfk(),y),!1,w)
W.cO(z,"keyup",H.m(c7.gfl(),y),!1,w)
c6.b.e=c7
c7.hu()
z=z.body
z.toString;(z&&C.r).ax(z,W.dw("<p>Use the arrow keys to drive the car.</p>",null,null))
C.a_.dR(window,c7.gcP(c7))},
i6:{"^":"fP;0cx,0cy,0db,dx,a,b,c,d,0e,0f,0r,0x,0y,0z,0Q,0ch",
ex:[function(a,b){var z,y,x,w,v,u,t,s
H.bu(b)
z=this.db
y=this.dx
if(typeof b!=="number")return b.I()
x=this.cx
z.z.bO()
z.Q.bO()
z.ch.bO()
z.cx.bO()
z.z.bN(x)
z.Q.bN(x)
z.ch.bN(x)
z.cx.bN(x)
if(typeof x!=="number")return x.a1()
switch(x&12){case 4:w=z.r
break
case 8:w=-z.r
break
default:w=0}v=z.x*1000/(b-y)
y=z.cy
u=y.f
t=y.r.f.e-u.f.e-y.fy
s=t+Math.max(-v,Math.min(w-t,v))
y.cK(s,s)
z.db.cK(s,s)
this.dx=b
this.eC(0,b)},"$1","gcP",5,0,24],
ii:[function(a){var z
switch(H.e(a,"$isbh").keyCode){case 37:z=this.cx
if(typeof z!=="number")return z.b0()
this.cx=z|4
break
case 38:z=this.cx
if(typeof z!=="number")return z.b0()
this.cx=z|1
break
case 39:z=this.cx
if(typeof z!=="number")return z.b0()
this.cx=z|8
break
case 40:z=this.cx
if(typeof z!=="number")return z.b0()
this.cx=z|2
break}},"$1","gfk",4,0,9],
ij:[function(a){var z
switch(H.e(a,"$isbh").keyCode){case 37:z=this.cx
if(typeof z!=="number")return z.a1()
this.cx=z&4294967291
break
case 38:z=this.cx
if(typeof z!=="number")return z.a1()
this.cx=z&4294967294
break
case 39:z=this.cx
if(typeof z!=="number")return z.a1()
this.cx=z&4294967287
break
case 40:z=this.cx
if(typeof z!=="number")return z.a1()
this.cx=z&4294967293
break}},"$1","gfl",4,0,9],
c3:function(a,b){var z,y,x
z=a.f.Q
y=a.r.Q
x=J.C(z)
if(!!x.$isc5&&y instanceof T.aA){H.e(z,"$isc5")
if(b){z.r.q(0,y)
z.bH()}else if(z.r.dP(0,y))z.bH()}else if(!!x.$isaA&&y instanceof T.c5){H.e(z,"$isaA")
if(b){y.r.q(0,z)
y.bH()}else if(y.r.dP(0,z))y.bH()}},
$isks:1},
fu:{"^":"c;a,b,c,d,e,f,r,x,0y,0z,0Q,0ch,0cx,0cy,0db"},
aA:{"^":"c;a2:a>,b,c",H:{
dC:function(a,b){var z=$.dD
$.dD=z+1
return new T.aA(z,a,!1)}}},
c5:{"^":"c;0a,b,c,d,e,0f,r,x,y",
bO:function(){var z,y,x,w,v,u,t,s,r
z=this.a
z.toString
y=new E.b(new Float64Array(2))
G.am(z.d.b,this.x,y)
y.C(0,y.G(this.a.r))
y.C(0,-this.a.fr)
z=this.e
if(Math.sqrt(y.gO())>z)y.C(0,z/Math.sqrt(y.gO()))
z=this.a
y.C(0,this.f)
z.bl(y,this.a.f.c,!0)
z=this.a
x=this.f
if(typeof x!=="number")return H.J(x)
w=z.fy
v=z.fr
u=z.f.a.a
t=u[0]
u=u[1]
z.fQ(0.1*x*(w+v*(t*t+u*u))*-z.x)
s=this.gd1()
r=Math.sqrt(s.gO())
s.W()
z=this.a
u=this.f
if(typeof u!=="number")return u.v()
s.C(0,u*(-2*r))
z.dl(s,this.a.f.c)},
bN:function(a){var z,y,x,w,v,u
if(typeof a!=="number")return a.a1()
switch(a&3){case 1:z=this.b
break
case 2:z=this.c
break
default:return}y=this.a
x=new E.b(new Float64Array(2))
x.F(0,1)
y.toString
w=new E.b(new Float64Array(2))
G.am(y.d.b,x,w)
v=this.gd1().G(w)
if(z<v)u=-this.d
else u=z>v?this.d:0
if(Math.abs(u)>0){y=this.a
x=this.f
if(typeof x!=="number")return x.v()
w.C(0,x*u)
y.dl(w,this.a.f.c)}},
bH:function(){var z=this.r
if(z.a===0)this.f=1
else{this.f=0
z.b9(0,new T.iz(this))}},
gd1:function(){var z,y
z=this.a
z.toString
y=new E.b(new Float64Array(2))
G.am(z.d.b,this.y,y)
y.C(0,y.G(this.a.r))
return y},
H:{
c6:function(a,b,c,d,e){var z,y,x,w,v
z=P.bA(null,null,null,T.aA)
y=new E.b(new Float64Array(2))
y.F(1,0)
x=new E.b(new Float64Array(2))
x.F(0,1)
x=new T.c5(b,c,d,e,z,y,x)
z=new Float64Array(2)
w=new V.bN(C.e,new E.b(z),0,new E.b(new Float64Array(2)),0,0,0,!0,!0,!1,!1,!0,1)
w.a=C.f
z=a.bI(w)
x.a=z
z.k4="Tire"
v=V.bD()
v.bR(0.5,1.25)
z.dv(v,1).Q=x
x.f=1
return x}}},
iz:{"^":"o:25;a",
$1:function(a){var z,y,x
H.e(a,"$isaA")
z=this.a
y=z.f
x=a.b
z.f=Math.max(H.eZ(y),x)}}},1],["","",,O,{"^":""}]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.dG.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.hg.prototype
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.c)return a
return J.bJ(a)}
J.jZ=function(a){if(typeof a=="number")return J.aM.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.c)return a
return J.bJ(a)}
J.X=function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.c)return a
return J.bJ(a)}
J.cd=function(a){if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.c)return a
return J.bJ(a)}
J.k_=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.aM.prototype}if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.d1=function(a){if(typeof a=="number")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.k0=function(a){if(typeof a=="number")return J.aM.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.k1=function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bm.prototype
return a}
J.F=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.c)return a
return J.bJ(a)}
J.f9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jZ(a).B(a,b)}
J.ag=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).au(a,b)}
J.ah=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.d1(a).aN(a,b)}
J.d6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.d1(a).M(a,b)}
J.d7=function(a){if(typeof a=="number")return-a
return J.k_(a).bu(a)}
J.fa=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kd(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.X(a).i(a,b)}
J.fb=function(a,b,c){return J.cd(a).m(a,b,c)}
J.fc=function(a,b,c,d){return J.F(a).f_(a,b,c,d)}
J.bL=function(a,b){return J.F(a).fz(a,b)}
J.fd=function(a,b,c){return J.F(a).fB(a,b,c)}
J.fe=function(a,b){return J.F(a).ax(a,b)}
J.ff=function(a,b){return J.k0(a).b8(a,b)}
J.d8=function(a,b){return J.cd(a).ay(a,b)}
J.fg=function(a){return J.F(a).gfR(a)}
J.aZ=function(a){return J.C(a).ga2(a)}
J.bM=function(a){return J.cd(a).ga7(a)}
J.ar=function(a){return J.X(a).gD(a)}
J.fh=function(a){return J.F(a).gaY(a)}
J.fi=function(a){return J.F(a).ghJ(a)}
J.fj=function(a){return J.F(a).ghW(a)}
J.Y=function(a){return J.F(a).gj(a)}
J.Z=function(a){return J.F(a).gk(a)}
J.cj=function(a,b){return J.F(a).bb(a,b)}
J.d9=function(a){return J.cd(a).hQ(a)}
J.da=function(a,b){return J.F(a).saK(a,b)}
J.ck=function(a,b){return J.F(a).sdJ(a,b)}
J.db=function(a,b){return J.F(a).saY(a,b)}
J.cl=function(a,b){return J.F(a).sj(a,b)}
J.cm=function(a,b){return J.F(a).sk(a,b)}
J.fk=function(a,b,c){return J.F(a).e7(a,b,c)}
J.dc=function(a){return J.d1(a).a9(a)}
J.fl=function(a){return J.k1(a).i_(a)}
J.b_=function(a){return J.C(a).u(a)}
I.aX=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bO.prototype
C.m=W.di.prototype
C.a0=W.fX.prototype
C.a1=W.h8.prototype
C.w=W.h9.prototype
C.a2=J.E.prototype
C.a=J.be.prototype
C.n=J.dG.prototype
C.c=J.cw.prototype
C.d=J.dH.prototype
C.b=J.aM.prototype
C.x=J.bf.prototype
C.a9=J.bg.prototype
C.k=H.hG.prototype
C.E=W.hJ.prototype
C.U=J.hZ.prototype
C.V=W.i7.prototype
C.Y=W.iu.prototype
C.J=J.bm.prototype
C.a_=W.iN.prototype
C.e=new V.cn(0,"BodyType.STATIC")
C.K=new V.cn(1,"BodyType.KINEMATIC")
C.f=new V.cn(2,"BodyType.DYNAMIC")
C.h=new P.jp()
C.t=new V.cr(0,"EPAxisType.UNKNOWN")
C.v=new V.cr(1,"EPAxisType.EDGE_A")
C.L=new V.cr(2,"EPAxisType.EDGE_B")
C.a3=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a4=function(hooks) {
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
C.M=function(hooks) { return hooks; }

C.a5=function(getTagFallback) {
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
C.a6=function() {
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
C.a7=function(hooks) {
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
C.a8=function(hooks) {
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
C.N=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.aa=new V.W(0,"JointType.UNKNOWN")
C.O=new V.W(1,"JointType.REVOLUTE")
C.ab=new V.W(10,"JointType.ROPE")
C.P=new V.W(11,"JointType.CONSTANT_VOLUME")
C.ac=new V.W(12,"JointType.MOTOR")
C.ad=new V.W(2,"JointType.PRISMATIC")
C.Q=new V.W(3,"JointType.DISTANCE")
C.R=new V.W(4,"JointType.PULLEY")
C.S=new V.W(5,"JointType.MOUSE")
C.ae=new V.W(6,"JointType.GEAR")
C.af=new V.W(7,"JointType.WHEEL")
C.ag=new V.W(8,"JointType.WELD")
C.T=new V.W(9,"JointType.FRICTION")
C.i=new V.c_(0,"LimitState.INACTIVE")
C.y=new V.c_(1,"LimitState.AT_LOWER")
C.u=new V.c_(2,"LimitState.AT_UPPER")
C.B=new V.c_(3,"LimitState.EQUAL")
C.ah=H.h(I.aX(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.ai=H.h(I.aX(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.q])
C.aj=H.h(I.aX([]),[P.q])
C.C=H.h(I.aX(["bind","if","ref","repeat","syntax"]),[P.q])
C.D=H.h(I.aX(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.p=new V.cA(0,"ManifoldType.CIRCLES")
C.j=new V.cA(1,"ManifoldType.FACE_A")
C.z=new V.cA(2,"ManifoldType.FACE_B")
C.F=new V.cG(0,"SeparationFunctionType.POINTS")
C.G=new V.cG(1,"SeparationFunctionType.FACE_A")
C.H=new V.cG(2,"SeparationFunctionType.FACE_B")
C.o=new V.c2(0,"ShapeType.CIRCLE")
C.q=new V.c2(1,"ShapeType.EDGE")
C.l=new V.c2(2,"ShapeType.POLYGON")
C.A=new V.c2(3,"ShapeType.CHAIN")
C.W=new V.bG(0,"TOIOutputState.UNKNOWN")
C.X=new V.bG(1,"TOIOutputState.FAILED")
C.ak=new V.bG(2,"TOIOutputState.OVERLAPPED")
C.I=new V.bG(3,"TOIOutputState.TOUCHING")
C.al=new V.bG(4,"TOIOutputState.SEPARATED")
C.Z=new V.iI(0,"VertexType.ISOLATED")
$.aO=null
$.bE=null
$.ai=0
$.b1=null
$.df=null
$.cS=!1
$.f1=null
$.eV=null
$.f6=null
$.cc=null
$.cf=null
$.d2=null
$.aS=null
$.bo=null
$.bp=null
$.cT=!1
$.D=C.h
$.M=null
$.at=null
$.ct=null
$.dy=null
$.dx=null
$.dr=0
$.ds=0
$.dt=20
$.e8=0
$.e9=0
$.ea=0
$.ec=0
$.eb=0
$.km=1
$.dD=0
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
I.$lazy(y,x,w)}})(["dn","$get$dn",function(){return H.f0("_$dart_dartClosure")},"cx","$get$cx",function(){return H.f0("_$dart_js")},"eh","$get$eh",function(){return H.an(H.c7({
toString:function(){return"$receiver$"}}))},"ei","$get$ei",function(){return H.an(H.c7({$method$:null,
toString:function(){return"$receiver$"}}))},"ej","$get$ej",function(){return H.an(H.c7(null))},"ek","$get$ek",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eo","$get$eo",function(){return H.an(H.c7(void 0))},"ep","$get$ep",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"em","$get$em",function(){return H.an(H.en(null))},"el","$get$el",function(){return H.an(function(){try{null.$method$}catch(z){return z.message}}())},"er","$get$er",function(){return H.an(H.en(void 0))},"eq","$get$eq",function(){return H.an(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cN","$get$cN",function(){return P.iU()},"bq","$get$bq",function(){return[]},"eG","$get$eG",function(){return P.dJ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.q)},"cQ","$get$cQ",function(){return P.ho(P.q,P.bw)},"aK","$get$aK",function(){return E.eu()},"cL","$get$cL",function(){return E.eu()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.H,args:[,]},{func:1,ret:P.q,args:[P.w]},{func:1,ret:P.N,args:[W.ak]},{func:1,ret:P.N,args:[P.q]},{func:1,ret:P.H,args:[P.aF]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.N,args:[W.a7,P.q,P.q,W.bH]},{func:1,ret:P.w},{func:1,args:[,P.q]},{func:1,args:[P.q]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.c],opt:[P.ab]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:[P.aw,,],args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.N,args:[W.t]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.w,args:[P.w,P.c]},{func:1,ret:-1,args:[P.a4]},{func:1,ret:P.H,args:[T.aA]},{func:1,ret:P.w,args:[,,]},{func:1,ret:P.a4},{func:1,ret:E.b},{func:1,ret:P.c},{func:1,ret:V.au}]
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
if(x==y)H.kk(d||a)
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
Isolate.aX=a.aX
Isolate.d_=a.d_
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
if(typeof dartMainRunner==="function")dartMainRunner(T.f3,[])
else T.f3([])})})()
//# sourceMappingURL=racer.dart.js.map
