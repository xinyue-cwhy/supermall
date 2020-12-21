import {require} from "@/network/axios";

export function getHomeMulidata(){
  return require({
    url:'/home/multidata'
  })
}
