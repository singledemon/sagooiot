import{j as e,p as t,k as n,l as r}from"./index.1709105786614.js";var s={tunnel:{getList:t=>e("/network/tunnel/list",t),addItem:e=>t("/network/tunnel/add",e),editItem:e=>n("/network/tunnel/edit",e),deleteItem:e=>r("/network/tunnel/delete",e),getDetail:t=>e("/network/tunnel/get",t),changeTunnelStatus:e=>t("/network/tunnel/status",e)},server:{getList:t=>e("/network/server/list",t),addItem:e=>t("/network/server/add",e),editItem:e=>n("/network/server/edit",e),deleteItem:e=>r("/network/server/delete",e),getDetail:t=>e("/network/get",t),changeServerStatus:e=>t("/network/server/status",e)}};export{s as a};