export type User={id:string;name:string;email:string;role:'admin'|'driver'};
export type Props={apiBase:string;token:string;user:User};
export async function api(base:string,token:string,path:string,method='GET',body?:unknown){const r=await fetch(base+path,{method,headers:{'Content-Type':'application/json',Authorization:'Bearer '+token},body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.timeout(60000)});const data=await r.json().catch(()=>({error:'Resposta inválida. Tente novamente.'}));if(!r.ok)throw new Error(data.error||'Não foi possível concluir a operação.');return data;}
export const money=(c:number)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(c/100);
export const date=(s:string)=>new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date(s));
export const localDate=(d:Date)=>new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,16);
export const initialRange=()=>{const start=new Date(Date.now()+3600000);start.setMinutes(0,0,0);return {start:localDate(start),end:localDate(new Date(start.getTime()+7200000))};};
