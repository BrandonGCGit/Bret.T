import {defineStore} from "pinia";
import {toast} from "vue3-toastify";

export const useNotification = defineStore('notification', {

    actions:{
        notifyNormalToast(type, msg){
            toast(msg,{
                type: type,
                autoClose: 3000,
                position: toast.POSITION.TOP_RIGHT,
                closeOnClick: true,
                transition: "slide",
            })
        },
        notifyLoadingToast(type, msg){
            toast.loading(msg,{
                type: type,
                autoClose: 3000,
                position: toast.POSITION.TOP_RIGHT,
                closeOnClick: true,
                transition: "slide",
            })
        },
    }
})