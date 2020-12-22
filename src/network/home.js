import {require} from "@/network/axios";

export function getHomeMulidata(){
  return require({
    url:'/home/multidata'
  })
}
export function getHomeData(type,page){
  return require({
    url:'/home/data?',
    params:{
      type,
      page
    }
  })
}
