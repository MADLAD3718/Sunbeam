import{world as at}from"@minecraft/server";import{Mat3 as ct,Vec3 as U}from"@madlad3718/mcveclib";import{WeatherType as nt,world as x}from"@minecraft/server";import{Mat3 as O,Vec3 as I}from"@madlad3718/mcveclib";import{Direction as u}from"@minecraft/server";import{system as _,world as T}from"@minecraft/server";import{system as bt}from"@minecraft/server";import{BlockPermutation as It,world as Mt}from"@minecraft/server";import{world as Dt}from"@minecraft/server";import{Player as vt}from"@minecraft/server";import{system as z}from"@minecraft/server";import{EquipmentSlot as Pt}from"@minecraft/server";import{system as j}from"@minecraft/server";import{MinecraftDimensionTypes as kt,world as $t}from"@minecraft/server";import{Player as st,system as G,world as b}from"@minecraft/server";var c=class n{constructor(t,e){this.code=t,this.color=e,e&&(this.r=e>>16&255,this.g=e>>8&255,this.b=e&255)}static BLACK=new n("0",0);static DARK_BLUE=new n("1",170);static DARK_GREEN=new n("2",43520);static DARK_AQUA=new n("3",43690);static DARK_RED=new n("4",11141120);static DARK_PURPLE=new n("5",11141290);static GOLD=new n("6",16755200);static GRAY=new n("7",11184810);static DARK_GRAY=new n("8",5592405);static BLUE=new n("9",5592575);static GREEN=new n("a",5635925);static AQUA=new n("b",5636095);static RED=new n("c",16733525);static LIGHT_PURPLE=new n("d",16733695);static YELLOW=new n("e",16777045);static WHITE=new n("f",16777215);static MINECOIN_GOLD=new n("g",14603781);static MATERIAL_QUARTZ=new n("h",14931153);static MATERIAL_IRON=new n("i",13552330);static MATERIAL_NETHERITE=new n("j",4471355);static MATERIAL_REDSTONE=new n("m",9901575);static MATERIAL_COPPER=new n("n",11823181);static MATERIAL_GOLD=new n("p",14594349);static MATERIAL_EMERALD=new n("q",1155126);static MATERIAL_DIAMOND=new n("s",2931368);static MATERIAL_LAPIS=new n("t",2181499);static MATERIAL_AMETHYST=new n("u",10116294);static OBFUSCATED=new n("k");static BOLD=new n("l");static ITALIC=new n("o");static RESET=new n("r");static VALUES=[n.BLACK,n.DARK_BLUE,n.DARK_GREEN,n.DARK_AQUA,n.DARK_RED,n.DARK_PURPLE,n.GOLD,n.GRAY,n.DARK_GRAY,n.BLUE,n.GREEN,n.AQUA,n.RED,n.LIGHT_PURPLE,n.YELLOW,n.WHITE,n.MINECOIN_GOLD,n.MATERIAL_QUARTZ,n.MATERIAL_IRON,n.MATERIAL_NETHERITE,n.MATERIAL_REDSTONE,n.MATERIAL_COPPER,n.MATERIAL_GOLD,n.MATERIAL_EMERALD,n.MATERIAL_DIAMOND,n.MATERIAL_LAPIS,n.MATERIAL_AMETHYST,n.OBFUSCATED,n.BOLD,n.ITALIC,n.RESET];static ALL_COLORS=[n.BLACK,n.DARK_BLUE,n.DARK_GREEN,n.DARK_AQUA,n.DARK_RED,n.DARK_PURPLE,n.GOLD,n.GRAY,n.DARK_GRAY,n.BLUE,n.GREEN,n.AQUA,n.RED,n.LIGHT_PURPLE,n.YELLOW,n.WHITE,n.MINECOIN_GOLD,n.MATERIAL_QUARTZ,n.MATERIAL_IRON,n.MATERIAL_NETHERITE,n.MATERIAL_REDSTONE,n.MATERIAL_COPPER,n.MATERIAL_GOLD,n.MATERIAL_EMERALD,n.MATERIAL_DIAMOND,n.MATERIAL_LAPIS,n.MATERIAL_AMETHYST];r;g;b;static PREFIX="\xA7";toString(){return n.PREFIX+this.code}toRGB(){return this.color}toHex(){var t;return(t=this.color)==null?void 0:t.toString(16)}getRed(){return this.r}getGreen(){return this.g}getBlue(){return this.b}getCode(){return this.code}static stripColor(t){return t.replace(/§[0-9a-u]/g,"")}static findClosestColor(t,e,r){let i=Number.MAX_VALUE,o=n.WHITE;for(let l of n.ALL_COLORS)if(l.r&&l.g&&l.b){let f=Math.sqrt(Math.pow(l.r-t,2)+Math.pow(l.g-e,2)+Math.pow(l.b-r,2));f<i&&(i=f,o=l)}return o}},tt=class F{OpenObject="{";CloseObject="}";OpenArray="[";CloseArray="]";Comma=",";KeyValueSeparator=":";StringDelimiter='"';KeyDelimiter="";Indent="  ";NewLine=`
`;Space=" ";InlineThreshold=60;MaxDepth=1;IncludeClassNames=!0;FunctionValue="\u0192";NullValue="null";UndefinedValue="undefined";TrueValue="true";FalseValue="false";CycleValue="[...cycle...]";TruncatedObjectValue="{...}";OpenCloseObjectColor=c.YELLOW;OpenCloseArrayColor=c.AQUA;NumberColor=c.DARK_AQUA;StringColor=c.DARK_GREEN;BooleanColor=c.GOLD;NullColor=c.GOLD;KeyColor=c.GRAY;EscapeColor=c.GOLD;FunctionColor=c.GRAY;ClassColor=c.GRAY;ClassStyle=c.BOLD;CycleColor=c.DARK_RED;static DEFAULT=new F;stringify(t){return this.stringifyValue(t)}stringifyString(t){return this.StringColor+this.StringDelimiter+this.escapeString(t)+this.StringDelimiter+c.RESET}stringifyNumber(t){return this.NumberColor+t.toString()+c.RESET}stringifyBoolean(t){return this.BooleanColor+(t?this.TrueValue:this.FalseValue)+c.RESET}stringifyFunction(t){return this.FunctionColor+this.FunctionValue+c.RESET}stringifyNull(){return this.NullColor+this.NullValue+c.RESET}stringifyUndefined(){return this.NullColor+this.UndefinedValue+c.RESET}stringifyCycle(){return this.CycleColor+this.CycleValue+c.RESET}stringifyArray(t,e=0){let r=this.Indent.repeat(e);if(t.length===0)return this.OpenCloseArrayColor+this.OpenArray+this.CloseArray+c.RESET;let i=this.OpenCloseArrayColor+this.OpenArray+c.RESET+this.NewLine,o=this.OpenCloseArrayColor+this.OpenArray+c.RESET;return t.forEach((l,f)=>{i+=r+this.Indent+this.stringifyValue(l,e+1),i+=f<t.length-1?this.Comma+this.NewLine:this.NewLine,o+=this.stringifyValue(l,e+1),o+=f<t.length-1?this.Comma+this.Space:""}),i+=r+this.OpenCloseArrayColor+this.CloseArray+c.RESET,o+=this.OpenCloseArrayColor+this.CloseArray+c.RESET,o.length<this.InlineThreshold?o:i}stringifyTruncatedObject(t,e,r=0){return(this.IncludeClassNames?this.ClassColor+""+this.ClassStyle+e+c.RESET+this.Space:"")+this.TruncatedObjectValue}stringifyObject(t,e,r,i=0){let o=this.Indent.repeat(i),l=this.IncludeClassNames&&e!=="Object"?this.ClassColor+""+this.ClassStyle+e+c.RESET+this.Space:"";if(r.length===0)return l+this.OpenCloseObjectColor+this.OpenObject+this.CloseObject+c.RESET;let f=l+this.OpenCloseObjectColor+this.OpenObject+c.RESET+this.NewLine,h=l+this.OpenCloseObjectColor+this.OpenObject+c.RESET;return r.forEach(([E,g],R)=>{let $=this.stringifyValue(g,i+1);f+=o+this.Indent+this.KeyColor+this.KeyDelimiter+E+this.KeyDelimiter+c.RESET+this.KeyValueSeparator+this.Space+$,f+=R<r.length-1?this.Comma+this.NewLine:this.NewLine,h+=this.KeyColor+E+c.RESET+this.KeyValueSeparator+this.Space+$,h+=R<r.length-1?this.Comma+this.Space:""}),f+=o+this.OpenCloseObjectColor+this.CloseObject+c.RESET,h+=this.OpenCloseObjectColor+this.CloseObject+c.RESET,h.length<this.InlineThreshold?h:f}shouldTruncateObject(t,e,r=0){return!(e==="Object"||r<=this.MaxDepth||this.MaxDepth<=0)}stringifyValue(t,e=0){if(t===null)return this.stringifyNull();if(t===void 0)return this.stringifyUndefined();if(typeof t=="number")return this.stringifyNumber(t);if(typeof t=="string")return this.stringifyString(t);if(typeof t=="boolean")return this.stringifyBoolean(t);if(typeof t=="function")return this.stringifyFunction(t);if(this.isCycle(t))return this.stringifyCycle();if(this.markCycle(t),Array.isArray(t)){let r=this.stringifyArray(t,e?e+1:0);return this.clearCycle(t),r}if(typeof t=="object"){let r=t.constructor.name;if(this.shouldTruncateObject(t,r,e)){let i=this.stringifyTruncatedObject(t,r,e);return this.clearCycle(t),i}else{let i=new Set,o=Object.getPrototypeOf(t),l=Object.keys(o);for(;l.length>0;)l.forEach(g=>i.add(g)),o=Object.getPrototypeOf(o),l=Object.keys(o);Object.keys(t).forEach(g=>i.add(g)),i.delete("__cycleDetection__");let h=[...i].sort().map(g=>{try{return[g,t[g]??void 0]}catch{return[g,void 0]}}).filter(([,g])=>typeof g!="function"&&g!==void 0),E=this.stringifyObject(t,r,h,e);return this.clearCycle(t),E}}return this.clearCycle(t),c.RESET+t.toString()}escapeString(t){return t.replace(/\\/g,this.EscapeColor+"\\\\"+this.StringColor).replace(/"/g,this.EscapeColor+'\\"'+this.StringColor).replace(/\n/g,this.EscapeColor+"\\n"+this.StringColor).replace(/\r/g,this.EscapeColor+"\\r"+this.StringColor).replace(/\t/g,this.EscapeColor+"\\t"+this.StringColor)}markCycle(t){t.__cycleDetection__=!0}isCycle(t){return!!t.__cycleDetection__}clearCycle(t){delete t.__cycleDetection__}},p=class d{constructor(t,e,r=c.RESET){this.level=t,this.name=e,this.color=r}static All=new d(-2,"all");static Trace=new d(-2,"trace",c.DARK_AQUA);static Debug=new d(-1,"debug",c.AQUA);static Info=new d(0,"info",c.GREEN);static Warn=new d(1,"warn",c.GOLD);static Error=new d(2,"error",c.RED);static Fatal=new d(3,"fatal",c.DARK_RED);static Off=new d(100,"off");static values=[d.All,d.Trace,d.Debug,d.Info,d.Warn,d.Error,d.Fatal,d.Off];toString(){return this.color+this.name.toUpperCase()+c.RESET}static parse(t){t=t.toLowerCase();for(let r of d.values)if(r.name===t)return r;let e=parseInt(t);if(!isNaN(e)){for(let r of d.values)if(r.level===e)return r}}};function et(a,t){return a==="*"?!0:a.includes("*")?a.startsWith("*")?t.endsWith(a.substring(1)):a.endsWith("*")?t.startsWith(a.substring(0,a.length-1)):new RegExp(a.replace(/\*/g,".*")).test(t):a===t}var m={level:p.Info,filter:["*"],outputTags:!1,formatFunction:(a,t,e,r=void 0)=>{let i=r!==void 0?`\xA77${r.map(o=>`[${o}]`).join("")}\xA7r`:"";return`[${a}][${c.MATERIAL_EMERALD}${t.name}${c.RESET}]${i} ${e}`},messagesJoinFunction:a=>a.join(" "),jsonFormatter:tt.DEFAULT,outputConfig:{[p.Trace.level]:[0,1],[p.Debug.level]:[0,1],[p.Info.level]:[0,1],[p.Warn.level]:[0,1,2],[p.Error.level]:[0,1,3],[p.Fatal.level]:[0,1,3]}},w=class A{constructor(t,e=[]){this.name=t,this.tags=e}static initialized=!1;static init(){A.initialized||(A.initialized=!0,_.afterEvents.scriptEventReceive.subscribe(t=>{if(t.id==="logging:level"||t.id==="log:level")if(!t.message)m.level=p.Info,T.sendMessage(`${c.AQUA}Logging level set to ${c.BOLD}${m.level}`);else{let e=p.parse(t.message);e?(m.level=e,T.sendMessage(`${c.AQUA}Logging level set to ${c.BOLD}${m.level}`)):T.sendMessage(`${c.DARK_RED}Invalid logging level: ${t.message}`)}else(t.id==="logging:filter"||t.id==="log:filter")&&(t.message?m.filter=t.message.split(","):m.filter=["*"],T.sendMessage(`${c.AQUA}Logging filter set to ${c.BOLD}${m.filter.join(", ")}`))}))}static setLevel(t){m.level=t}static setFilter(t){m.filter=t}static setFormatFunction(t){m.formatFunction=t}static setMessagesJoinFunction(t){m.messagesJoinFunction=t}static setTagsOutputVisibility(t){m.outputTags=t}static setJsonFormatter(t){m.jsonFormatter=t}static getOutputConfig(){return m.outputConfig}static getLogger(t,...e){return A.initialized||A.init(),new A(t,e)}log(t,...e){if(!(t.level<m.level.level)){if(m.filter.length===0||this.tags.length===0){this.logRaw(t,...e);return}for(let r of m.filter)if(et(r,this.name)){this.logRaw(t,...e);return}}}logRaw(t,...e){{let r=e.map(l=>l===void 0?c.GOLD+"undefined"+c.RESET:l===null?c.GOLD+"null"+c.RESET:l&&l instanceof Error?`${c.DARK_RED}${c.BOLD}${l.message}
${c.RESET}${c.GRAY}${c.ITALIC}${l.stack}${c.RESET}`:typeof l=="object"||Array.isArray(l)?m.jsonFormatter.stringify(l)+c.RESET:l.toString()+c.RESET),i=m.formatFunction(t,this,m.messagesJoinFunction(r),m.outputTags?this.tags:void 0),o=m.outputConfig[t.level]||[0,1];o.includes(0)&&T.sendMessage(i),o.includes(1)&&(console.originalLog?console.originalLog(c.stripColor(i)):console.log(c.stripColor(i))),o.includes(2)&&console.warn(i),o.includes(3)&&console.error(i)}}trace(...t){this.log(p.Trace,...t)}debug(...t){this.log(p.Debug,...t)}info(...t){this.log(p.Info,...t)}warn(...t){this.log(p.Warn,...t)}error(...t){this.log(p.Error,...t)}fatal(...t){this.log(p.Fatal,...t)}},Rt=class s{static log=w.getLogger("vec3","vec3","bedrock-boost");static Zero=new s(0,0,0);static Down=new s(u.Down);static Up=new s(u.Up);static North=new s(u.North);static South=new s(u.South);static East=new s(u.East);static West=new s(u.West);x;y;z;constructor(t,e,r){if(t===u.Down)this.x=0,this.y=-1,this.z=0;else if(t===u.Up)this.x=0,this.y=1,this.z=0;else if(t===u.North)this.x=0,this.y=0,this.z=1;else if(t===u.South)this.x=0,this.y=0,this.z=-1;else if(t===u.East)this.x=1,this.y=0,this.z=0;else if(t===u.West)this.x=-1,this.y=0,this.z=0;else if(typeof t=="number")this.x=t,this.y=e,this.z=r;else if(Array.isArray(t))this.x=t[0],this.y=t[1],this.z=t[2];else if(t instanceof s)this.x=t.x,this.y=t.y,this.z=t.z;else{if(!t||!t.x&&t.x!==0||!t.y&&t.y!==0||!t.z&&t.z!==0)throw s.log.error(new Error("Invalid vector"),t),new Error("Invalid vector");this.x=t.x,this.y=t.y,this.z=t.z}}static from(t,e,r){if(t instanceof s)return t;if(typeof t=="number"&&e!==void 0&&r!==void 0)return new s(t,e,r);if(Array.isArray(t))return new s(t);if(t===u.Down)return s.Down;if(t===u.Up)return s.Up;if(t===u.North)return s.North;if(t===u.South)return s.South;if(t===u.East)return s.East;if(t===u.West)return s.West;if(!t||!t.x&&t.x!==0||!t.y&&t.y!==0||!t.z&&t.z!==0)throw s.log.error(new Error("Invalid arguments"),t,e,r),new Error("Invalid arguments");return new s(t.x,t.y,t.z)}static _from(t,e,r){if(t instanceof s)return t;if(typeof t=="number"&&e!==void 0&&r!==void 0)return new s(t,e,r);if(Array.isArray(t))return new s(t);if(t===u.Down)return s.Down;if(t===u.Up)return s.Up;if(t===u.North)return s.North;if(t===u.South)return s.South;if(t===u.East)return s.East;if(t===u.West)return s.West;if(!t||!t.x&&t.x!==0||!t.y&&t.y!==0||!t.z&&t.z!==0)throw s.log.error(new Error("Invalid arguments"),t,e,r),new Error("Invalid arguments");return new s(t.x,t.y,t.z)}copy(){return s.from(this)}static fromYawPitch(t,e){let r;typeof t=="number"?(r=t,e=e):(r=t.y,e=t.x);let i=r*(Math.PI/180),o=e*(Math.PI/180),l=Math.cos(o)*Math.sin(i),f=Math.sin(o),h=Math.cos(o)*Math.cos(i);return new s(l,f,h)}toYawPitch(){if(this.isZero())throw s.log.error(new Error("Cannot convert zero-length vector to direction")),new Error("Cannot convert zero-length vector to direction");let t=this.normalize(),e=Math.atan2(t.x,t.z)*(180/Math.PI);return{x:Math.asin(t.y)*(180/Math.PI),y:e}}add(t,e,r){let i=s._from(t,e,r);return s.from(i.x+this.x,i.y+this.y,i.z+this.z)}subtract(t,e,r){let i=s._from(t,e,r);return s.from(this.x-i.x,this.y-i.y,this.z-i.z)}multiply(t,e,r){if(typeof t=="number"&&e===void 0&&r===void 0)return s.from(this.x*t,this.y*t,this.z*t);let i=s._from(t,e,r);return s.from(i.x*this.x,i.y*this.y,i.z*this.z)}scale(t){return s.from(this.x*t,this.y*t,this.z*t)}divide(t,e,r){if(typeof t=="number"&&e===void 0&&r===void 0){if(t===0)throw new Error("Cannot divide by zero");return s.from(this.x/t,this.y/t,this.z/t)}let i=s._from(t,e,r);if(i.x===0||i.y===0||i.z===0)throw new Error("Cannot divide by zero");return s.from(this.x/i.x,this.y/i.y,this.z/i.z)}normalize(){if(this.isZero())throw s.log.error(new Error("Cannot normalize zero-length vector")),new Error("Cannot normalize zero-length vector");let t=this.length();return s.from(this.x/t,this.y/t,this.z/t)}length(){return Math.sqrt(this.lengthSquared())}lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}cross(t,e,r){let i=s._from(t,e,r);return s.from(this.y*i.z-this.z*i.y,this.z*i.x-this.x*i.z,this.x*i.y-this.y*i.x)}distance(t,e,r){let i=s._from(t,e,r);return Math.sqrt(this.distanceSquared(i))}distanceSquared(t,e,r){let i=s._from(t,e,r);return this.subtract(i).lengthSquared()}lerp(t,e){return!t||!e?s.from(this):e===1?s.from(t):e===0?s.from(this):s.from(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e,this.z+(t.z-this.z)*e)}slerp(t,e){if(!t||!e)return s.from(this);if(e===1)return s.from(t);if(e===0)return s.from(this);let r=this.dot(t),i=Math.acos(r)*e,o=s.from(t).subtract(this.multiply(r)).normalize();return this.multiply(Math.cos(i)).add(o.multiply(Math.sin(i)))}dot(t,e,r){let i=s._from(t,e,r);return this.x*i.x+this.y*i.y+this.z*i.z}angleBetween(t,e,r){let i=s._from(t,e,r),o=this.dot(i),l=this.length()*i.length();return l===0?0:Math.acos(o/l)}projectOnto(t,e,r){let i=s._from(t,e,r);if(i.isZero())return s.Zero;let o=this.dot(i)/i.dot(i);return s.from(i.x*o,i.y*o,i.z*o)}reflect(t,e,r){let i=s._from(t,e,r),o=this.projectOnto(i);return this.subtract(o.multiply(2))}rotate(t,e){let r=e*Math.PI/180/2,i=Math.cos(r),o=t.x*Math.sin(r),l=t.y*Math.sin(r),f=t.z*Math.sin(r),h=this,E=i*i*h.x+2*l*i*h.z-2*f*i*h.y+o*o*h.x+2*l*o*h.y+2*f*o*h.z-f*f*h.x-l*l*h.x,g=2*o*l*h.x+l*l*h.y+2*f*l*h.z+2*i*f*h.x-f*f*h.y+i*i*h.y-2*o*i*h.z-o*o*h.y,R=2*o*f*h.x+2*l*f*h.y+f*f*h.z-2*i*l*h.x-l*l*h.z+2*i*o*h.y-o*o*h.z+i*i*h.z;return new s(E,g,R)}setX(t){return new s(t,this.y,this.z)}setY(t){return new s(this.x,t,this.z)}setZ(t){return new s(this.x,this.y,t)}distanceToLineSegment(t,e){let r=s.from(e).subtract(t);if(r.lengthSquared()===0)return this.subtract(t).length();let i=Math.max(0,Math.min(1,this.subtract(t).dot(r)/r.dot(r))),o=s.from(t).add(r.multiply(i));return this.subtract(o).length()}floor(){return new s(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z))}floorX(){return new s(Math.floor(this.x),this.y,this.z)}floorY(){return new s(this.x,Math.floor(this.y),this.z)}floorZ(){return new s(this.x,this.y,Math.floor(this.z))}ceil(){return new s(Math.ceil(this.x),Math.ceil(this.y),Math.ceil(this.z))}ceilX(){return new s(Math.ceil(this.x),this.y,this.z)}ceilY(){return new s(this.x,Math.ceil(this.y),this.z)}ceilZ(){return new s(this.x,this.y,Math.ceil(this.z))}round(){return new s(Math.round(this.x),Math.round(this.y),Math.round(this.z))}roundX(){return new s(Math.round(this.x),this.y,this.z)}roundY(){return new s(this.x,Math.round(this.y),this.z)}roundZ(){return new s(this.x,this.y,Math.round(this.z))}up(){return this.add(s.Up)}down(){return this.add(s.Down)}north(){return this.add(s.North)}south(){return this.add(s.South)}east(){return this.add(s.East)}west(){return this.add(s.West)}isZero(){return this.x===0&&this.y===0&&this.z===0}toArray(){return[this.x,this.y,this.z]}toDirection(){if(this.isZero())throw s.log.error(new Error("Cannot convert zero-length vector to direction")),new Error("Cannot convert zero-length vector to direction");let t=this.normalize(),e=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z));if(e===t.x)return u.East;if(e===-t.x)return u.West;if(e===t.y)return u.Up;if(e===-t.y)return u.Down;if(e===t.z)return u.North;if(e===-t.z)return u.South;throw s.log.error(new Error("Cannot convert vector to direction"),this),new Error("Cannot convert vector to direction")}toBlockLocation(){return s.from((this.x<<0)-(this.x<0&&this.x!==this.x<<0?1:0),(this.y<<0)-(this.y<0&&this.y!==this.y<<0?1:0),(this.z<<0)-(this.z<0&&this.z!==this.z<<0?1:0))}almostEqual(t,e,r,i){try{let o;return typeof t!="number"&&r===void 0?(o=s._from(t,void 0,void 0),i=e):o=s._from(t,e,r),Math.abs(this.x-o.x)<=i&&Math.abs(this.y-o.y)<=i&&Math.abs(this.z-o.z)<=i}catch{return!1}}equals(t,e,r){try{let i=s._from(t,e,r);return this.x===i.x&&this.y===i.y&&this.z===i.z}catch{return!1}}toString(t="long",e=", "){let r=`${this.x+e+this.y+e+this.z}`;return t==="long"?`Vec3(${r})`:r}},Tt=class B{static log=w.getLogger("Timings","timings");static lastTime=-1;static lastOperation="";static begin(t){this.end(),this.lastTime=new Date().getTime(),this.lastOperation=t}static end(){let t=new Date().getTime();this.lastTime>0&&B.log.debug(`Operation ${this.lastOperation} took ${t-this.lastTime}ms`),this.lastTime=-1}};var rt=w.getLogger("jobUtils","bedrock-boost","jobUtils");function K(a){return new Promise((t,e)=>{if(z.runJob)z.runJob(function*(){for(;;)try{let{done:r,value:i}=a.next();if(r){t(i);return}else yield}catch(r){e(r);return}}());else{rt.warn("system.runJob is not available. Running job in an inefficient way.");let r=()=>{let i=Date.now();for(;;)try{let{done:o,value:l}=a.next();if(o){t(l);return}else if(Date.now()-i>4){z.runTimeout(r,1);return}}catch(o){e(o);return}};r()}})}var Nt=w.getLogger("itemUtils","bedrock-boost","itemUtils");var it=class C{static log=w.getLogger("PulseScheduler","bedrock-boost","pulse-scheduler");items=[];period;currentTick=0;runId;nextIndex=0;executionSchedule=[];processor;constructor(t,e){if(e<=0)throw new Error("Period must be a positive integer.");if(!t||typeof t!="function")throw new Error("Processor function must be defined.");this.period=e,this.processor=t}add(t){this.push(t)}addAll(t){this.push(...t)}remove(t){t>=0&&t<this.items.length&&(this.items.splice(t,1),t<this.nextIndex&&this.nextIndex--,this.recalculateExecutionSchedule())}removeIf(t){for(let e=this.items.length-1;e>=0;e--)t(this.items[e])&&this.remove(e)}getItems(){return this.items}start(){this.stop(),this.currentTick=0,this.nextIndex=0,this.runId=j.runInterval(()=>this.tick(),1)}stop(){this.runId!==void 0&&(j.clearRun(this.runId),this.runId=void 0)}recalculateExecutionSchedule(){let t=this.items.length;if(this.executionSchedule=new Array(this.period).fill(0),t===0)return;let e=this.period/t;for(let r=0;r<t;r++)this.executionSchedule[Math.round(e*r)%this.period]++}tick(){if(this.items.length===0){C.log.trace("No items to process.");return}let t=this.executionSchedule[this.currentTick];if(t===0){C.log.trace("No items to process this tick."),this.currentTick=(this.currentTick+1)%this.period,this.currentTick===0&&(this.nextIndex=0);return}let e=0;for(;this.nextIndex<this.items.length&&e<t;this.nextIndex++){try{this.processor(this.items[this.nextIndex])}catch(r){C.log.error("Error processing item",r)}e++}this.currentTick=(this.currentTick+1)%this.period,this.currentTick===0&&(this.nextIndex=0)}push(...t){return this.items.push(...t),this.recalculateExecutionSchedule(),this.items.length}pop(){let t=this.items.pop();return this.recalculateExecutionSchedule(),t}shift(){let t=this.items.shift();return this.recalculateExecutionSchedule(),t}unshift(...t){return this.items.unshift(...t),this.recalculateExecutionSchedule(),this.items.length}splice(t,e=0,...r){let i=this.items.splice(t,e,...r);return this.recalculateExecutionSchedule(),i}};var Gt=class v extends it{static logger=w.getLogger("PlayerPulseScheduler","bedrock-boost","player-pulse-scheduler");constructor(t,e){super(r=>{r.isValid()?t(r):this.removeIf(i=>!i.isValid())},e),this.push(...b.getAllPlayers())}compareEntities(t,e){return t.id===e.id}start(){b.afterEvents.playerJoin.subscribe(t=>{let e=0,r=()=>{if(e++,e>10){v.logger.warn("Failed to push player to scheduler after 10 attempts.");return}try{let i=b.getEntity(t.playerId);i===void 0&&G.runTimeout(r,1),i instanceof st&&this.push(i)}catch(i){v.logger.debug("Failed to push player to scheduler.",i),G.runTimeout(r,1)}};r()}),b.afterEvents.playerLeave.subscribe(t=>{this.removeIf(e=>!e.isValid()||e.id===t.playerId)}),super.start()}push(...t){let e=t.filter(r=>r.isValid()&&!this.items.some(i=>this.compareEntities(i,r)));return super.push(...e)}unshift(...t){let e=t.filter(r=>r.isValid()&&!this.items.some(i=>this.compareEntities(i,r)));return super.unshift(...e)}splice(t,e,...r){if(e===void 0)return super.splice(t);let i=r.filter(o=>!this.items.some(l=>this.compareEntities(l,o)));return super.splice(t,e,...i)}};function P(a){K(a()).then(()=>P(a))}var W="sunbeam:weather";x.afterEvents.weatherChange.subscribe(a=>{x.setDynamicProperty(W,a.newWeather)});function M(){return x.getDynamicProperty(W)??nt.Clear}var ot=["minecraft:leather_helmet","minecraft:iron_helmet","minecraft:golden_helmet","minecraft:diamond_helmet","minecraft:netherite_helmet","minecraft:turtle_helmet","minecraft:chainmail_helmet"];function q(a){for(let t of ot){let e=`testfor @s[hasitem={location=slot.armor.head,item=${t}}]`;if(a.runCommand(e).successCount===1)return!0}return!1}function H(a){let t=Math.cos(a.azimuth),e=Math.sin(a.azimuth),r=O.from([t,0,e,0,1,0,-e,0,t]),i=Math.cos(a.zenith),o=Math.sin(a.zenith),l=O.from([1,0,0,0,i,-o,0,o,i]);return O.mul(r,l)}function N(a,t,e){let r=I.dot(a,I.neg(t));return e*e*(1-r*r)>1?I.reflect(a,t):I.refract(a,t,e)}var V;(o=>(o.Default={azimuth:0,zenith:Math.PI/4},o.Infectious={azimuth:.6,zenith:.951},o.Interstellar={azimuth:.813,zenith:.667},o.Seraphic={azimuth:3.5841,zenith:.785398},o.Vanilla={azimuth:0,zenith:0}))(V||={});var lt=H(V.Interstellar);function ht(a,t,e){return Math.min(Math.max(a,t),e)}function ut(){let a=(at.getTimeOfDay()+1e3)%24e3;return ht(a/14e3,0,1)}function L(){let a=Math.PI*ut(),t=U.rotate(U.East,U.South,a);return ct.mul(lt,t)}import{Vec3 as ft}from"@madlad3718/mcveclib";var y="sunbeam";function Y(a){let t=a.sourceEntity,e="";switch(a.id){case`${y}:help`:switch(a.message){case"dts":e=`\xA7edts:
Logs the current direction to sun vector.
\xA7rUsage:
 - /scriptevent ${y}:dts`;break;case"wet":e=`\xA7ewet:
Logs the currently stored weather value.
\xA7rUsage:
 - /scriptevent ${y}:wet`;break;default:e=`\xA72--- Showing help page 1 of 1 ---
\xA7r/scriptevent ${y}:help [command: CommandName]
/scriptevent ${y}:dts
/scriptevent ${y}:wet`}break;case`${y}:dts`:e=`Direction to Sun: {${ft.toString(L())}}`;break;case`${y}:wet`:e=`Get weather result: ${M()}`;break}t.sendMessage(e)}import{system as Et}from"@minecraft/server";import{EntityComponentTypes as mt,MinecraftDimensionTypes as dt,WeatherType as pt,world as Z}from"@minecraft/server";import{Vec3 as S}from"@madlad3718/mcveclib";var D=Z.getDimension(dt.overworld),gt=.001;function k(a){return(a==null?void 0:a.typeId.includes("glass"))??!1}function J(a,t,e){let r=D.getBlockFromRay(a,t,e);if(r===void 0||!k(r.block))return r;let i=k(D.getBlock(a))??!1;a=S.add(r.block.location,r.faceLocation,S.mul(t,gt));let o=k(D.getBlock(a))??!1;if(!i&&o){let l=S.fromDirection(r.face);t=N(t,l,1/1.5)}else if(i&&!o){let l=S.neg(S.fromDirection(r.face));t=N(t,l,1.5/1)}else if(!i&&!o)return r;return J(a,t,e)}function Q(a){let t=L();return J(a,t,{includeLiquidBlocks:!0})===void 0}function yt(a){return a.hasComponent(mt.OnFire)}function*X(){if(!((Z.getTimeOfDay()+540)%24e3>=13082)&&M()===pt.Clear)for(let a of D.getEntities({families:["burns_in_sunlight"]})){if(!a||!a.isValid()||a.isInWater||yt(a)||q(a))continue;let t=a.location,e=a.getHeadLocation();(Q(t)||Q(e))&&a.setOnFire(8,!0),yield}}Et.afterEvents.scriptEventReceive.subscribe(Y);P(X);
//# sourceMappingURL=main.js.map