const _0x503db1=_0x1708;(function(_0x4ca869,_0x1d14ae){const _0x5bf31b=_0x1708,_0x5b9b41=_0x4ca869();while(!![]){try{const _0x133b3d=parseInt(_0x5bf31b(0x1f1))/0x1*(-parseInt(_0x5bf31b(0x187))/0x2)+parseInt(_0x5bf31b(0x1b7))/0x3*(parseInt(_0x5bf31b(0x1f2))/0x4)+-parseInt(_0x5bf31b(0x193))/0x5*(parseInt(_0x5bf31b(0x212))/0x6)+-parseInt(_0x5bf31b(0x1cf))/0x7*(parseInt(_0x5bf31b(0x1d0))/0x8)+-parseInt(_0x5bf31b(0x1ed))/0x9+parseInt(_0x5bf31b(0x17c))/0xa+parseInt(_0x5bf31b(0x1e3))/0xb*(parseInt(_0x5bf31b(0x1b8))/0xc);if(_0x133b3d===_0x1d14ae)break;else _0x5b9b41['push'](_0x5b9b41['shift']());}catch(_0x3d23f5){_0x5b9b41['push'](_0x5b9b41['shift']());}}}(_0xe69a,0xc78b8));let {default:makeWASocket,BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,downloadContentFromMessage,downloadHistory,proto,getMessage,generateWAMessageContent,prepareWAMessageMedia}=require(_0x503db1(0x23a)),levelling=require(_0x503db1(0x1a8)),fs=require('fs');const util=require('util'),os=require('os');let path=require(_0x503db1(0x1ff)),{createHash}=require(_0x503db1(0x1b4)),fetch=require(_0x503db1(0x1a3)),{perfomance}=require(_0x503db1(0x1f5)),moment=require(_0x503db1(0x1f3));const defaultMenu={'before':(_0x503db1(0x1dc)+lim+_0x503db1(0x1c1)+prem+_0x503db1(0x21b)+ucpn+_0x503db1(0x1a6))[_0x503db1(0x229)](),'header':''+sa+kki+'\x20'+zt+_0x503db1(0x194)+zt+'\x20'+kka,'body':gy+'\x20'+zc+_0x503db1(0x1f8)+zc+_0x503db1(0x222),'footer':sb+'\x0a','after':''};let handler=async(_0x4ad542,{conn:_0x97e380,usedPrefix:_0x1872b4,args:_0xe3530e,command:_0x32fe3d,DevMode:_0x14759f})=>{const _0x5ac3ad=_0x503db1;let _0xa5bfd3,_0x4a87b9=(''+_0xe3530e[0x0])['toLowerCase'](),_0x473f7f=[_0x5ac3ad(0x224),_0x5ac3ad(0x15a),_0x5ac3ad(0x221),_0x5ac3ad(0x19e),'news',_0x5ac3ad(0x1d6),_0x5ac3ad(0x165),'xp',_0x5ac3ad(0x1cb),'quotes',_0x5ac3ad(0x22f),_0x5ac3ad(0x19a),_0x5ac3ad(0x1fa),_0x5ac3ad(0x1ec),_0x5ac3ad(0x21a),_0x5ac3ad(0x1e8),_0x5ac3ad(0x14e),_0x5ac3ad(0x158),_0x5ac3ad(0x1c5),'database',_0x5ac3ad(0x16e),'audio',_0x5ac3ad(0x20d),_0x5ac3ad(0x148),_0x5ac3ad(0x1d1)];if(!_0x473f7f[_0x5ac3ad(0x1d3)](_0x4a87b9))_0x4a87b9=_0x5ac3ad(0x1bf);if(_0x4a87b9=='all')_0xa5bfd3={'main':_0x5ac3ad(0x16a),'anime':_0x5ac3ad(0x1d4),'admin':_0x5ac3ad(0x17b)+(global[_0x5ac3ad(0x1e5)][_0x5ac3ad(0x1e0)]?'':_0x5ac3ad(0x234)),'group':_0x5ac3ad(0x1e1),'absen':_0x5ac3ad(0x1b3),'anonymous':_0x5ac3ad(0x1da),'audio':'VOICE\x20CHANGE','downloader':_0x5ac3ad(0x16f),'database':_0x5ac3ad(0x168),'fun':_0x5ac3ad(0x220),'game':_0x5ac3ad(0x1c7),'xp':'EXP\x20&\x20LIMIT','info':_0x5ac3ad(0x17e),'internet':_0x5ac3ad(0x19f),'jadibot':_0x5ac3ad(0x1ca),'news':_0x5ac3ad(0x1ae),'nulis':_0x5ac3ad(0x1de),'maker':_0x5ac3ad(0x18c),'nsfw':'NSFW','premium':_0x5ac3ad(0x154),'quotes':'QUOTES','random':_0x5ac3ad(0x1fd),'sticker':_0x5ac3ad(0x209),'tools':_0x5ac3ad(0x236),'update':_0x5ac3ad(0x1ab)};if(_0x4a87b9=='game')_0xa5bfd3={'game':_0x5ac3ad(0x163)};if(_0x4a87b9==_0x5ac3ad(0x15a))_0xa5bfd3={'anime':_0x5ac3ad(0x18b)};if(_0x4a87b9==_0x5ac3ad(0x16e))_0xa5bfd3={'nsfw':_0x5ac3ad(0x1d5)};if(_0x4a87b9==_0x5ac3ad(0x239))_0xa5bfd3={'news':'News'};if(_0x4a87b9=='random')_0xa5bfd3={'random':_0x5ac3ad(0x15c)};if(_0x4a87b9=='xp')_0xa5bfd3={'xp':'Exp\x20&\x20Limit'};if(_0x4a87b9==_0x5ac3ad(0x1cb))_0xa5bfd3={'sticker':_0x5ac3ad(0x186)};if(_0x4a87b9==_0x5ac3ad(0x1e4))_0xa5bfd3={'quotes':'Quotes'};if(_0x4a87b9==_0x5ac3ad(0x22f))_0xa5bfd3={'admin':_0x5ac3ad(0x1fc)+(global['opts'][_0x5ac3ad(0x1e0)]?'':_0x5ac3ad(0x234)),'group':_0x5ac3ad(0x1b6)};if(_0x4a87b9==_0x5ac3ad(0x149))_0xa5bfd3={'group':_0x5ac3ad(0x181)};if(_0x4a87b9=='premium')_0xa5bfd3={'premium':'Premium'};if(_0x4a87b9==_0x5ac3ad(0x1ec))_0xa5bfd3={'internet':_0x5ac3ad(0x18a)};if(_0x4a87b9=='anonymous')_0xa5bfd3={'anonymous':_0x5ac3ad(0x170)};if(_0x4a87b9==_0x5ac3ad(0x1e8))_0xa5bfd3={'nulis':'MagerNulis\x20&\x20Logo','maker':_0x5ac3ad(0x182)};if(_0x4a87b9=='downloader')_0xa5bfd3={'downloader':'Downloader'};if(_0x4a87b9==_0x5ac3ad(0x158))_0xa5bfd3={'tools':'Tools'};if(_0x4a87b9==_0x5ac3ad(0x1c5))_0xa5bfd3={'fun':_0x5ac3ad(0x223)};if(_0x4a87b9=='database')_0xa5bfd3={'database':_0x5ac3ad(0x151)};if(_0x4a87b9==_0x5ac3ad(0x22a))_0xa5bfd3={'audio':'Voice\x20Changer'};if(_0x4a87b9=='jadibot')_0xa5bfd3={'jadibot':_0x5ac3ad(0x1aa)};if(_0x4a87b9==_0x5ac3ad(0x148))_0xa5bfd3={'info':_0x5ac3ad(0x22c)};if(_0x4a87b9=='owner')_0xa5bfd3={'owner':_0x5ac3ad(0x1e9),'host':_0x5ac3ad(0x1d2),'advanced':_0x5ac3ad(0x20a)};if(_0x4a87b9=='nsfw')_0xa5bfd3={'nsfw':'Nsfw'};if(_0x4a87b9=='update')_0xa5bfd3={'update':_0x5ac3ad(0x147)};try{let _0x3570bc=JSON[_0x5ac3ad(0x219)](await fs['promises'][_0x5ac3ad(0x231)](path[_0x5ac3ad(0x1d7)](__dirname,_0x5ac3ad(0x16d)))[_0x5ac3ad(0x1db)](_0x4f1d15=>'{}')),{exp:_0x524df0,limit:_0x345c2e,level:_0x400f33,role:_0x3e5ed4,registered:_0x22c036}=global['db'][_0x5ac3ad(0x145)][_0x5ac3ad(0x238)][_0x4ad542[_0x5ac3ad(0x15b)]],{min:_0x59ac32,xp:_0x71686a,max:_0x1e922c}=levelling[_0x5ac3ad(0x204)](_0x400f33,global[_0x5ac3ad(0x22e)]),_0x5c2696=await _0x22c036?global['db'][_0x5ac3ad(0x145)]['users'][_0x4ad542[_0x5ac3ad(0x15b)]]['name']:_0x97e380['getName'](_0x4ad542[_0x5ac3ad(0x15b)]),_0x5bf3d7=new Date(new Date()+0x36ee80),_0x198e7b='en',_0xc56114=_0x5bf3d7[_0x5ac3ad(0x190)](_0x198e7b,{'weekday':_0x5ac3ad(0x1c9)}),_0xd38194=[_0x5ac3ad(0x1b0),_0x5ac3ad(0x1a1),'Wage',_0x5ac3ad(0x237),_0x5ac3ad(0x203)][Math[_0x5ac3ad(0x14b)](_0x5bf3d7/0x50ae4c0)%0x5],_0x54efea=_0x5bf3d7[_0x5ac3ad(0x190)](_0x198e7b,{'day':_0x5ac3ad(0x178),'month':_0x5ac3ad(0x1c9),'year':_0x5ac3ad(0x178)}),_0x1ba584=Intl[_0x5ac3ad(0x166)](_0x198e7b+_0x5ac3ad(0x1fb),{'day':_0x5ac3ad(0x178),'month':_0x5ac3ad(0x1c9),'year':_0x5ac3ad(0x178)})['format'](_0x5bf3d7),_0x193309=_0x5bf3d7[_0x5ac3ad(0x195)](_0x198e7b,{'hour':'numeric','minute':_0x5ac3ad(0x178),'second':_0x5ac3ad(0x178)}),_0x14cb0b=process['uptime']()*0x3e8,_0x377150;process[_0x5ac3ad(0x156)]&&(process[_0x5ac3ad(0x156)](_0x5ac3ad(0x1ac)),_0x377150=await new Promise(_0x4eec8c=>{const _0x13d48f=_0x5ac3ad;process['once'](_0x13d48f(0x1a9),_0x4eec8c),setTimeout(_0x4eec8c,0x3e8);})*0x3e8);let _0x41d3dd=clockString(_0x377150),_0x250426=clockString(_0x14cb0b),_0x3a56d4=moment['tz'](_0x5ac3ad(0x150))[_0x5ac3ad(0x16b)](_0x5ac3ad(0x228)),_0x1b283f=(ucapan()+',\x20'+_0x5c2696+_0x5ac3ad(0x19b)+_0x3a56d4+_0x5ac3ad(0x23b)+_0xc56114+_0x5ac3ad(0x21d)+_0x54efea+_0x5ac3ad(0x1eb))[_0x5ac3ad(0x17f)](),_0x25ea50=_0x5ac3ad(0x173)[_0x5ac3ad(0x17f)](),_0x3b2e7b=Object[_0x5ac3ad(0x230)](global[_0x5ac3ad(0x215)])[_0x5ac3ad(0x189)](_0x534d69=>!_0x534d69[_0x5ac3ad(0x1a0)])['map'](_0x4fe804=>{const _0x65595d=_0x5ac3ad;return{'help':Array[_0x65595d(0x160)](_0x4fe804[_0x65595d(0x1bb)])?_0x4fe804[_0x65595d(0x157)]:[_0x4fe804[_0x65595d(0x157)]],'tags':Array[_0x65595d(0x160)](_0x4fe804[_0x65595d(0x1bb)])?_0x4fe804[_0x65595d(0x1bb)]:[_0x4fe804['tags']],'prefix':_0x65595d(0x14a)in _0x4fe804,'limit':_0x4fe804[_0x65595d(0x214)],'premium':_0x4fe804[_0x65595d(0x1fa)],'enabled':!_0x4fe804['disabled']};});if(_0x4a87b9=='404'){const _0x2cf9a8=generateWAMessageFromContent(_0x4ad542[_0x5ac3ad(0x202)][_0x5ac3ad(0x206)],proto[_0x5ac3ad(0x1e7)][_0x5ac3ad(0x153)]({'listMessage':{'title':_0x1b283f,'description':_0x25ea50,'buttonText':'Click\x20Here','listType':0x1,'footerText':wm,'mtype':_0x5ac3ad(0x1ce),'sections':[{'rows':[{'title':_0x5ac3ad(0x1a5),'description':_0x5ac3ad(0x216),'rowId':_0x1872b4+_0x5ac3ad(0x18d)}],'title':_0x5ac3ad(0x20f)+_0x97e380[_0x5ac3ad(0x176)][_0x5ac3ad(0x22d)]},{'rows':[{'title':'Anime\x20Menu','rowId':_0x1872b4+_0x5ac3ad(0x188)}],'title':'─────「\x201\x20」'},{'rows':[{'title':'Admin\x20&\x20Group\x20Menu','rowId':_0x1872b4+_0x5ac3ad(0x1d9)}],'title':_0x5ac3ad(0x167)},{'rows':[{'title':'Anonymous\x20Menu','rowId':_0x1872b4+_0x5ac3ad(0x1ea)}],'title':_0x5ac3ad(0x20c)},{'rows':[{'title':'Audio\x20Menu','rowId':_0x1872b4+'?\x20audio'}],'title':'─────「\x204\x20」'},{'rows':[{'title':_0x5ac3ad(0x23c),'rowId':_0x1872b4+_0x5ac3ad(0x183)}],'title':_0x5ac3ad(0x16c)},{'rows':[{'title':'Database\x20Menu','rowId':_0x1872b4+_0x5ac3ad(0x19c)}],'title':_0x5ac3ad(0x211)},{'rows':[{'title':_0x5ac3ad(0x14d),'rowId':_0x1872b4+_0x5ac3ad(0x1a7)}],'title':_0x5ac3ad(0x1ef)},{'rows':[{'title':'Game\x20Menu','rowId':_0x1872b4+_0x5ac3ad(0x1d8)}],'title':_0x5ac3ad(0x1a4)},{'rows':[{'title':_0x5ac3ad(0x1ad),'rowId':_0x1872b4+_0x5ac3ad(0x1e6)}],'title':_0x5ac3ad(0x197)},{'rows':[{'title':_0x5ac3ad(0x21c),'rowId':_0x1872b4+_0x5ac3ad(0x196)}],'title':'─────「\x2010\x20」'},{'rows':[{'title':_0x5ac3ad(0x175),'rowId':_0x1872b4+_0x5ac3ad(0x1b2)}],'title':_0x5ac3ad(0x177)},{'rows':[{'title':_0x5ac3ad(0x1dd),'rowId':_0x1872b4+_0x5ac3ad(0x1ba)}],'title':_0x5ac3ad(0x1c8)},{'rows':[{'title':_0x5ac3ad(0x1e2),'rowId':_0x1872b4+'?\x20nulis'}],'title':_0x5ac3ad(0x213)},{'rows':[{'title':_0x5ac3ad(0x1c3),'rowId':_0x1872b4+_0x5ac3ad(0x17d)}],'title':_0x5ac3ad(0x208)},{'rows':[{'title':_0x5ac3ad(0x155),'rowId':_0x1872b4+_0x5ac3ad(0x200)}],'title':_0x5ac3ad(0x1cc)},{'rows':[{'title':_0x5ac3ad(0x207),'rowId':_0x1872b4+'?\x20quotes'}],'title':'─────「\x2016\x20」'},{'rows':[{'title':_0x5ac3ad(0x146),'rowId':_0x1872b4+_0x5ac3ad(0x1af)}],'title':_0x5ac3ad(0x1c6)},{'rows':[{'title':_0x5ac3ad(0x164),'rowId':_0x1872b4+_0x5ac3ad(0x1f0)}],'title':_0x5ac3ad(0x21f)},{'rows':[{'title':_0x5ac3ad(0x17a),'rowId':_0x1872b4+_0x5ac3ad(0x159)}],'title':_0x5ac3ad(0x14f)},{'rows':[{'title':'Update\x20Menu','rowId':_0x1872b4+_0x5ac3ad(0x1cd)}],'title':_0x5ac3ad(0x232)},{'rows':[{'title':_0x5ac3ad(0x161),'rowId':_0x1872b4+_0x5ac3ad(0x205)}],'title':_0x5ac3ad(0x22b)},{'rows':[{'title':_0x5ac3ad(0x1b5),'description':_0x5ac3ad(0x192)+_0x97e380['user'][_0x5ac3ad(0x22d)],'rowId':_0x1872b4+_0x5ac3ad(0x15f)}],'title':_0x5ac3ad(0x15d)}],'contextInfo':{'stanzaId':_0x4ad542['key']['id'],'participant':_0x4ad542[_0x5ac3ad(0x15b)],'quotedMessage':_0x4ad542[_0x5ac3ad(0x1a9)]}}}),{'userJid':_0x4ad542[_0x5ac3ad(0x217)]||_0x4ad542[_0x5ac3ad(0x202)][_0x5ac3ad(0x206)],'quoted':_0x4ad542});return await _0x97e380[_0x5ac3ad(0x1bd)](_0x4ad542[_0x5ac3ad(0x202)][_0x5ac3ad(0x206)],_0x2cf9a8[_0x5ac3ad(0x1a9)],{'messageId':_0x2cf9a8[_0x5ac3ad(0x202)]['id']});}let _0x464bf0={};for(let _0x1419ba in _0xa5bfd3){_0x464bf0[_0x1419ba]=[];for(let _0x49f36c of _0x3b2e7b)if(_0x49f36c[_0x5ac3ad(0x1bb)]&&_0x49f36c[_0x5ac3ad(0x1bb)]['includes'](_0x1419ba)){if(_0x49f36c[_0x5ac3ad(0x157)])_0x464bf0[_0x1419ba][_0x5ac3ad(0x1f7)](_0x49f36c);}}_0x97e380['menu']=_0x97e380[_0x5ac3ad(0x1df)]?_0x97e380[_0x5ac3ad(0x1df)]:{};let _0x2cb749=_0x97e380['menu'][_0x5ac3ad(0x19d)]||defaultMenu['before'],_0x26a761=_0x97e380[_0x5ac3ad(0x1df)][_0x5ac3ad(0x199)]||defaultMenu['header'],_0x81690e=_0x97e380['menu']['body']||defaultMenu[_0x5ac3ad(0x171)],_0x5ed747=_0x97e380[_0x5ac3ad(0x1df)][_0x5ac3ad(0x14c)]||defaultMenu['footer'],_0x49c843=_0x97e380[_0x5ac3ad(0x1df)]['after']||(_0x97e380[_0x5ac3ad(0x176)][_0x5ac3ad(0x1c2)]==global['conn'][_0x5ac3ad(0x176)][_0x5ac3ad(0x1c2)]?'':_0x5ac3ad(0x20b)+global[_0x5ac3ad(0x1a2)][_0x5ac3ad(0x176)][_0x5ac3ad(0x1c2)][_0x5ac3ad(0x174)]`@`[0x0])+defaultMenu[_0x5ac3ad(0x210)],_0x1b862a=[_0x2cb749,...Object[_0x5ac3ad(0x225)](_0xa5bfd3)[_0x5ac3ad(0x1b1)](_0x12561d=>{const _0x1e1869=_0x5ac3ad;return _0x26a761[_0x1e1869(0x1fe)](/%category/g,_0xa5bfd3[_0x12561d])+'\x0a'+[..._0x3b2e7b['filter'](_0x417b72=>_0x417b72[_0x1e1869(0x1bb)]&&_0x417b72[_0x1e1869(0x1bb)][_0x1e1869(0x1d3)](_0x12561d)&&_0x417b72[_0x1e1869(0x157)])[_0x1e1869(0x1b1)](_0x54f90b=>{const _0x3f0ef5=_0x1e1869;return _0x54f90b['help']['map'](_0xd59662=>{const _0x412b0f=_0x1708;return _0x81690e['replace'](/%cmd/g,_0x54f90b[_0x412b0f(0x169)]?_0xd59662:'%p'+_0xd59662)[_0x412b0f(0x1fe)](/%islimit/g,_0x54f90b[_0x412b0f(0x214)]?''+lim:'')[_0x412b0f(0x1fe)](/%isPremium/g,_0x54f90b[_0x412b0f(0x1fa)]?''+prem:'')[_0x412b0f(0x17f)]();})[_0x3f0ef5(0x1d7)]('\x0a');}),_0x5ed747]['join']('\x0a');}),_0x49c843][_0x5ac3ad(0x1d7)]('\x0a');text=typeof _0x97e380[_0x5ac3ad(0x1df)]=='string'?_0x97e380['menu']:typeof _0x97e380[_0x5ac3ad(0x1df)]==_0x5ac3ad(0x1f6)?_0x1b862a:'';let _0x556e9f={'%':'%','p':_0x1872b4,'uptime':_0x250426,'muptime':_0x41d3dd,'me':_0x97e380['user'][_0x5ac3ad(0x22d)],'npmname':_0x3570bc[_0x5ac3ad(0x22d)],'npmdesc':_0x3570bc[_0x5ac3ad(0x226)],'version':_0x3570bc[_0x5ac3ad(0x21e)],'github':_0x3570bc[_0x5ac3ad(0x20e)]?_0x3570bc[_0x5ac3ad(0x20e)][_0x5ac3ad(0x184)]||_0x3570bc['homepage']:_0x5ac3ad(0x23d),'name':_0x5c2696,'ucapan':ucapan(),'name':_0x5c2696,'weton':_0xd38194,'week':_0xc56114,'date':_0x54efea,'dateIslamic':_0x1ba584,'time':_0x193309,'readmore':readMore};text=text[_0x5ac3ad(0x1fe)](new RegExp('%('+Object[_0x5ac3ad(0x225)](_0x556e9f)[_0x5ac3ad(0x1f4)]((_0x5233ff,_0x19171e)=>_0x19171e[_0x5ac3ad(0x18f)]-_0x5233ff[_0x5ac3ad(0x18f)])['join']`|`+')','g'),(_0x349030,_0x1e43f5)=>''+_0x556e9f[_0x1e43f5]);var _0x49f4da={'video':{'url':_0x5ac3ad(0x180)},'gifPlayback':!![],'caption':text['trim'](),'footer':_0x5ac3ad(0x172),'templateButtons':[{'index':0x1,'urlButton':{'displayText':'Owner\x20Insta','url':_0x5ac3ad(0x152)}},{'index':0x2,'callButton':{'displayText':'Contact\x20Owner','phonenumber':'+91\x209539\x20102851'}},{'index':0x3,'quickReplyButton':{'displayText':'OWNER','id':_0x5ac3ad(0x1bc)}},{'index':0x4,'quickReplyButton':{'displayText':_0x5ac3ad(0x191),'id':_0x5ac3ad(0x15e)}}]};_0x97e380[_0x5ac3ad(0x218)](_0x4ad542[_0x5ac3ad(0x235)],_0x49f4da);}catch(_0xd966df){_0x97e380['reply'](_0x4ad542['chat'],_0x5ac3ad(0x1b9),_0x4ad542);throw _0xd966df;}};handler[_0x503db1(0x157)]=['menu'],handler['tags']=[_0x503db1(0x185)],handler[_0x503db1(0x1c4)]=/^(menu|help|\?)$/i,handler[_0x503db1(0x1d1)]=![],handler[_0x503db1(0x18e)]=![],handler[_0x503db1(0x1fa)]=![],handler[_0x503db1(0x149)]=![],handler['private']=![],handler['admin']=![],handler['botAdmin']=![],handler['fail']=null,handler[_0x503db1(0x233)]=0x3,module[_0x503db1(0x227)]=handler;function _0xe69a(){const _0x408e12=['4659651ejsZua','repeat','─────「\x207\x20」','?\x20stiker','11405HCyhkI','100sJDFVW','moment-timezone','sort','perf_hooks','object','push','%cmd','Good\x20Night\x20🌚','premium','-TN-u-ca-islamic','Admin\x20','RANDOM','replace','path','?\x20premium','padStart','key','Legi','xpRange','?\x20xp','remoteJid','Menu\x20Quotes','─────「\x2014\x20」','STIKER','Advanced','Presented\x20by\x20https://wa.me/','─────「\x203\x20」','jadibot','homepage','List\x20Menu\x20','after','─────「\x206\x20」','42324sBSoFy','─────「\x2013\x20」','limit','plugins','Menu\x20All\x20Commands','participant','sendMessage','parse','anonymous','\x20:\x20Premium\x20Only*\x0a','Internet\x20Menu','\x0a\x20\x20\x20\x20📆\x20𝔻𝔸𝕋𝔼:\x20','version','─────「\x2018\x20」','FUN','update','\x20%islimit\x20%isPremium','Fun','all','keys','description','exports','HH:mm:ss','trimStart','audio','─────「\x2021\x20」','Info','name','multiplier','admin','values','readFile','─────「\x2020\x20」','exp','(Disabled)','chat','TOOLS','Kliwon','users','news','@adiwajshing/baileys','\x20IST\x0a\x20\x20\x20\x20💮\x20𝕎𝔼𝔼𝕂\x20:\x20','Downloader\x20menu','[unknown\x20github\x20url]','data','Random\x20Menu','Update','info','group','customPrefix','floor','footer','Fun\x20Menu','downloader','─────「\x2019\x20」','Asia/Kolkata','Database','https://www.instagram.com/ani._.rudh_s/','fromObject','PREMIUM','Premium\x20Menu','send','help','tools','?\x20tools','anime','sender','Random','─────「\x2022\x20」','#menu','?\x20owner','isArray','XP\x20and\x20Limit\x20menu','Good\x20Afternoon\x20🌞','Game','Sticker\x20Menu','game','DateTimeFormat','─────「\x202\x20」','DATABASE','prefix','MAIN','format','─────「\x205\x20」','../package.json','nsfw','DOWNLOADER','Anonymous\x20Chat','body','Ganzbot','Please\x20Select\x20Menu\x20Below!','split','Menu','user','─────「\x2011\x20」','numeric','fromCharCode','Tools\x20menu','ADMIN\x20','7789760GbUqcs','?\x20nsfw','INFO','trim','https://telegra.ph/file/157481fc09920490eef48.mp4','Group','Photo\x20&\x20Video\x20Maker','?\x20downloader','url','main','Stiker','68DDxZzj','?\x20anime','filter','Internet','Anime','PHOTO\x20&\x20VIDEO\x20MAKER','?\x20all','mods','length','toLocaleDateString','BACK\x20TO\x20MENU','Special\x20menu\x20for\x20owner\x20','515hNvWEJ','%category','toLocaleTimeString','?\x20internet','─────「\x209\x20」','Good\x20Evening\x20🌝','header','grup','\x0a\x20\x20\x20\x20⏳\x20𝕋𝕀𝕄𝔼\x20:\x20','?\x20database','before','maker','INTERNET','disabled','Pon','conn','node-fetch','─────「\x208\x20」','All\x20Commands','%readmore','?\x20fun','../lib/levelling','message','Jadi\x20Bot','UPDATE','uptime','Menu\x20Info','NEWS','?\x20random','Pahing','map','?\x20jadibot','ABSENT','crypto','Menu\x20Owner','Grup','98895FlaECS','38616bSwHEg','Sorry\x20,Try\x20Again..','?\x20news','tags','#owner','relayMessage','toString','404','Good\x20Morning\x20☀','\x20:\x20Using\x20Limit*\x0a*','jid','Nsfw\x20Menu','command','fun','─────「\x2017\x20」','GAME','─────「\x2012\x20」','long','JADI\x20BOT','stiker','─────「\x2015\x20」','?\x20update','listMessage','536158DLgHcP','40zGjUKK','owner','Host','includes','ANIME','Nsfw','random','join','?\x20game','?\x20admin','ANONYMOUS\x20CHAT','catch','Bot\x20Usage\x20Info:\x0a*','Menu\x20News','MAGER\x20NULIS\x20&\x20LOGO','menu','restrict','GROUP','Write\x20Menu\x20&\x20Logo','4202lFhZKX','quotes','opts','?\x20info','Message','nulis','Owner','?\x20anonymous','\x0a\x20\x20\x20\x20☮️\x20𝕆𝕎ℕ𝔼ℝ\x20:\x20wa.me/6281339888334','internet'];_0xe69a=function(){return _0x408e12;};return _0xe69a();}function _0x1708(_0x4400d6,_0x1e90a1){const _0xe69aa=_0xe69a();return _0x1708=function(_0x1708f5,_0x4a0dab){_0x1708f5=_0x1708f5-0x145;let _0x1ad35f=_0xe69aa[_0x1708f5];return _0x1ad35f;},_0x1708(_0x4400d6,_0x1e90a1);}const more=String[_0x503db1(0x179)](0x200e),readMore=more[_0x503db1(0x1ee)](0xfa1);function clockString(_0x3bddc5){const _0x28b492=_0x503db1;let _0x2f05db=isNaN(_0x3bddc5)?'--':Math[_0x28b492(0x14b)](_0x3bddc5/0x36ee80),_0x36ceac=isNaN(_0x3bddc5)?'--':Math['floor'](_0x3bddc5/0xea60)%0x3c,_0x458189=isNaN(_0x3bddc5)?'--':Math[_0x28b492(0x14b)](_0x3bddc5/0x3e8)%0x3c;return[_0x2f05db,_0x36ceac,_0x458189][_0x28b492(0x1b1)](_0xa00f16=>_0xa00f16[_0x28b492(0x1be)]()[_0x28b492(0x201)](0x2,0x0))[_0x28b492(0x1d7)](':');}function ucapan(){const _0x4360ff=_0x503db1,_0x5c62a1=moment['tz'](_0x4360ff(0x150))[_0x4360ff(0x16b)]('HH');return _0x5c62a1>=0x4&&(res=_0x4360ff(0x1c0)),_0x5c62a1>0xa&&(res=_0x4360ff(0x162)),_0x5c62a1>=0xf&&(res=_0x4360ff(0x198)),_0x5c62a1>=0x12&&(res=_0x4360ff(0x1f9)),res;}